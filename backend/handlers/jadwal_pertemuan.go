package handlers

import (
	"net/http"
	"strconv"
	"time"

	"stia-bayuangga/backend/config"
	"stia-bayuangga/backend/models"

	"github.com/gin-gonic/gin"
)

// ===================== JADWAL PERTEMUAN (Schedule per meeting) =====================

// GetJadwalPertemuan returns the 14-meeting schedule for a specific course+kelas
// GET /api/jadwal-pertemuan/:mata_kuliah_id?kelas=A
func GetJadwalPertemuan(c *gin.Context) {
	mkIDStr := c.Param("mata_kuliah_id")
	mkID, _ := strconv.ParseUint(mkIDStr, 10, 32)
	kelas := c.DefaultQuery("kelas", "A")

	var items []models.JadwalPertemuan
	config.DB.Where("mata_kuliah_id = ? AND kelas = ?", mkID, kelas).
		Order("pertemuan asc").Find(&items)

	// Get MK info
	var mk models.MataKuliah
	config.DB.First(&mk, mkID)

	c.JSON(http.StatusOK, gin.H{
		"mata_kuliah_id": mkID,
		"mata_kuliah":    mk,
		"kelas":          kelas,
		"count":          len(items),
		"data":           items,
	})
}

// GetAllJadwalPertemuan returns schedules for all courses (for student view)
// GET /api/jadwal-pertemuan/all?nim=2024101001
func GetAllJadwalPertemuan(c *gin.Context) {
	nim := c.Query("nim")

	// If NIM provided, get only the MK this student is enrolled in
	if nim != "" {
		var krsItems []models.KRS
		config.DB.Where("nim = ?", nim).Find(&krsItems)

		mkIDs := []uint{}
		for _, k := range krsItems {
			mkIDs = append(mkIDs, k.MataKuliahID)
		}

		var items []models.JadwalPertemuan
		if len(mkIDs) > 0 {
			config.DB.Preload("MataKuliah").Where("mata_kuliah_id IN ?", mkIDs).
				Order("mata_kuliah_id asc, pertemuan asc").Find(&items)
		}

		c.JSON(http.StatusOK, gin.H{
			"nim":   nim,
			"count": len(items),
			"data":  items,
		})
		return
	}

	// Otherwise return all — preload MataKuliah for kode lookup
	var items []models.JadwalPertemuan
	config.DB.Preload("MataKuliah").Order("mata_kuliah_id asc, pertemuan asc").Find(&items)

	c.JSON(http.StatusOK, gin.H{
		"count": len(items),
		"data":  items,
	})
}

// SaveJadwalPertemuan saves/updates a single meeting schedule
// POST /api/jadwal-pertemuan
// Body: { "kode_mk": "ANA 146", "kelas": "B", "pertemuan": 3, "tanggal": "2026-03-18",
//         "tanggal_asli": "2026-03-16", "jam_mulai": "13:00", "jam_selesai": "14:30",
//         "mode": "online", "catatan": "Kelas Pengganti - Dosen Izin" }
func SaveJadwalPertemuan(c *gin.Context) {
	var input struct {
		MataKuliahID uint   `json:"mata_kuliah_id"`
		KodeMK       string `json:"kode_mk"`
		Kelas        string `json:"kelas"`
		Pertemuan    int    `json:"pertemuan" binding:"required"`
		Tanggal      string `json:"tanggal"`
		TanggalAsli  string `json:"tanggal_asli"`
		JamMulai     string `json:"jam_mulai"`
		JamSelesai   string `json:"jam_selesai"`
		Mode         string `json:"mode"`
		Catatan      string `json:"catatan"`
		UpdatedBy    string `json:"updated_by"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Resolve MataKuliahID from kode_mk if not provided
	if input.MataKuliahID == 0 && input.KodeMK != "" {
		var mk models.MataKuliah
		if err := config.DB.Where("kode = ?", input.KodeMK).First(&mk).Error; err == nil {
			input.MataKuliahID = mk.ID
		} else {
			// Auto-create MataKuliah if not found
			mk = models.MataKuliah{Kode: input.KodeMK, Nama: input.KodeMK, SKS: 3}
			config.DB.Create(&mk)
			input.MataKuliahID = mk.ID
		}
	}
	if input.MataKuliahID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "mata_kuliah_id or kode_mk is required"})
		return
	}

	if input.Kelas == "" {
		input.Kelas = "A"
	}
	if input.Mode == "" {
		input.Mode = "offline"
	}

	// Upsert: find by mata_kuliah_id + kelas + pertemuan
	var jp models.JadwalPertemuan
	result := config.DB.Where("mata_kuliah_id = ? AND kelas = ? AND pertemuan = ?",
		input.MataKuliahID, input.Kelas, input.Pertemuan).First(&jp)

	if result.Error != nil {
		// Create new
		jp = models.JadwalPertemuan{
			MataKuliahID: input.MataKuliahID,
			KodeMK:       input.KodeMK,
			Kelas:        input.Kelas,
			Pertemuan:    input.Pertemuan,
			Tanggal:      input.Tanggal,
			TanggalAsli:  input.TanggalAsli,
			JamMulai:     input.JamMulai,
			JamSelesai:   input.JamSelesai,
			Mode:         input.Mode,
			Catatan:      input.Catatan,
			UpdatedBy:    input.UpdatedBy,
			UpdatedAt:    time.Now(),
		}
		config.DB.Create(&jp)
	} else {
		// Update existing
		config.DB.Model(&jp).Updates(map[string]interface{}{
			"tanggal":      input.Tanggal,
			"tanggal_asli": input.TanggalAsli,
			"jam_mulai":    input.JamMulai,
			"jam_selesai":  input.JamSelesai,
			"mode":         input.Mode,
			"catatan":      input.Catatan,
			"updated_by":   input.UpdatedBy,
			"updated_at":   time.Now(),
		})
	}

	c.JSON(http.StatusOK, gin.H{"message": "Jadwal pertemuan disimpan", "data": jp})
}

// BulkSaveJadwalPertemuan saves all 14 meetings at once
// POST /api/jadwal-pertemuan/bulk
// Body: { "kode_mk": "ANA 146", "kelas": "B", "updated_by": "BAP",
//         "items": [{ "pertemuan": 1, "tanggal": "2026-03-02", ... }, ...] }
func BulkSaveJadwalPertemuan(c *gin.Context) {
	var input struct {
		MataKuliahID uint   `json:"mata_kuliah_id"`
		KodeMK       string `json:"kode_mk"`
		Kelas        string `json:"kelas"`
		UpdatedBy    string `json:"updated_by"`
		Items        []struct {
			Pertemuan   int    `json:"pertemuan"`
			Tanggal     string `json:"tanggal"`
			TanggalAsli string `json:"tanggal_asli"`
			JamMulai    string `json:"jam_mulai"`
			JamSelesai  string `json:"jam_selesai"`
			Mode        string `json:"mode"`
			Catatan     string `json:"catatan"`
		} `json:"items"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Resolve MataKuliahID from kode_mk if not provided
	if input.MataKuliahID == 0 && input.KodeMK != "" {
		var mk models.MataKuliah
		if err := config.DB.Where("kode = ?", input.KodeMK).First(&mk).Error; err == nil {
			input.MataKuliahID = mk.ID
		} else {
			// Auto-create MataKuliah if not found
			mk = models.MataKuliah{Kode: input.KodeMK, Nama: input.KodeMK, SKS: 3}
			config.DB.Create(&mk)
			input.MataKuliahID = mk.ID
		}
	}
	if input.MataKuliahID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "mata_kuliah_id or kode_mk is required"})
		return
	}

	if input.Kelas == "" {
		input.Kelas = "A"
	}

	saved := 0
	for _, item := range input.Items {
		if item.Pertemuan < 1 || item.Pertemuan > 14 {
			continue
		}
		mode := item.Mode
		if mode == "" {
			mode = "offline"
		}

		var jp models.JadwalPertemuan
		result := config.DB.Where("mata_kuliah_id = ? AND kelas = ? AND pertemuan = ?",
			input.MataKuliahID, input.Kelas, item.Pertemuan).First(&jp)

		if result.Error != nil {
			jp = models.JadwalPertemuan{
				MataKuliahID: input.MataKuliahID,
				KodeMK:       input.KodeMK,
				Kelas:        input.Kelas,
				Pertemuan:    item.Pertemuan,
				Tanggal:      item.Tanggal,
				TanggalAsli:  item.TanggalAsli,
				JamMulai:     item.JamMulai,
				JamSelesai:   item.JamSelesai,
				Mode:         mode,
				Catatan:      item.Catatan,
				UpdatedBy:    input.UpdatedBy,
				UpdatedAt:    time.Now(),
			}
			config.DB.Create(&jp)
		} else {
			config.DB.Model(&jp).Updates(map[string]interface{}{
				"tanggal":      item.Tanggal,
				"tanggal_asli": item.TanggalAsli,
				"jam_mulai":    item.JamMulai,
				"jam_selesai":  item.JamSelesai,
				"mode":         mode,
				"catatan":      item.Catatan,
				"updated_by":   input.UpdatedBy,
				"updated_at":   time.Now(),
			})
		}
		saved++
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Jadwal pertemuan bulk disimpan",
		"saved":   saved,
	})
}
