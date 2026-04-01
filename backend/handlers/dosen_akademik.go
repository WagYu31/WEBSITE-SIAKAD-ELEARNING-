package handlers

import (
	"math"
	"net/http"
	"strconv"
	"time"

	"stia-bayuangga/backend/config"
	"stia-bayuangga/backend/models"

	"github.com/gin-gonic/gin"
)

// ===================== JADWAL MENGAJAR (Dosen) =====================

// GetJadwalMengajar returns classes taught by a dosen (by NIP)
// GET /api/dosen/jadwal-mengajar/:nip
func GetJadwalMengajar(c *gin.Context) {
	nip := c.Param("nip")

	// Find dosen name by NIP
	var dosen models.Dosen
	if err := config.DB.Where("nip = ?", nip).First(&dosen).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Dosen tidak ditemukan"})
		return
	}

	// Find KRS entries where dosen_nama matches (a dosen may teach multiple classes)
	var krsItems []models.KRS
	config.DB.Preload("MataKuliah").Where("dosen_nama = ?", dosen.Nama).Order("waktu asc").Find(&krsItems)

	// Count unique students per class (group by mata_kuliah_id)
	type ClassInfo struct {
		models.KRS
		JumlahMhs int `json:"jumlah_mhs"`
	}
	classMap := map[uint]*ClassInfo{}
	for _, k := range krsItems {
		if _, ok := classMap[k.MataKuliahID]; !ok {
			classMap[k.MataKuliahID] = &ClassInfo{KRS: k, JumlahMhs: 0}
		}
	}
	// Count students per MK
	for mkID, ci := range classMap {
		var count int64
		config.DB.Model(&models.KRS{}).Where("mata_kuliah_id = ?", mkID).Count(&count)
		ci.JumlahMhs = int(count)
	}

	classes := []ClassInfo{}
	for _, ci := range classMap {
		classes = append(classes, *ci)
	}

	c.JSON(http.StatusOK, gin.H{
		"dosen": gin.H{"nip": dosen.NIP, "nama": dosen.Nama, "prodi": dosen.Prodi},
		"count": len(classes),
		"data":  classes,
	})
}

// ===================== ABSENSI =====================

// GetAbsensi returns attendance for a class (by KRS's mata_kuliah_id)
// GET /api/dosen/absensi/:mata_kuliah_id
func GetAbsensi(c *gin.Context) {
	mkIDStr := c.Param("mata_kuliah_id")
	mkID, _ := strconv.ParseUint(mkIDStr, 10, 32)

	// Get all KRS entries for this MK
	var krsItems []models.KRS
	config.DB.Where("mata_kuliah_id = ?", mkID).Find(&krsItems)

	// Get all absensi for these KRS IDs
	krsIDs := []uint{}
	for _, k := range krsItems {
		krsIDs = append(krsIDs, k.ID)
	}

	var absensiList []models.Absensi
	if len(krsIDs) > 0 {
		config.DB.Where("krs_id IN ?", krsIDs).Order("nim asc, pertemuan asc").Find(&absensiList)
	}

	// Get MK info
	var mk models.MataKuliah
	config.DB.First(&mk, mkID)

	c.JSON(http.StatusOK, gin.H{
		"mata_kuliah_id": mkID,
		"mata_kuliah":    mk,
		"mahasiswa":      len(krsItems),
		"count":          len(absensiList),
		"data":           absensiList,
	})
}

// SaveAbsensi creates or updates attendance for a student in a meeting
// POST /api/dosen/absensi
// Body: { "krs_id": 1, "nim": "2024101001", "pertemuan": 3, "status": "H" }
func SaveAbsensi(c *gin.Context) {
	var input struct {
		KRSID     uint   `json:"krs_id" binding:"required"`
		NIM       string `json:"nim" binding:"required"`
		Pertemuan int    `json:"pertemuan" binding:"required"`
		Status    string `json:"status" binding:"required"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Upsert: find existing or create
	var absensi models.Absensi
	result := config.DB.Where("krs_id = ? AND pertemuan = ?", input.KRSID, input.Pertemuan).First(&absensi)
	if result.Error != nil {
		// Create new
		absensi = models.Absensi{
			KRSID:     input.KRSID,
			NIM:       input.NIM,
			Pertemuan: input.Pertemuan,
			Status:    input.Status,
			UpdatedAt: time.Now(),
		}
		config.DB.Create(&absensi)
	} else {
		// Update existing
		config.DB.Model(&absensi).Updates(map[string]interface{}{
			"status":     input.Status,
			"updated_at": time.Now(),
		})
	}

	c.JSON(http.StatusOK, gin.H{"message": "Absensi disimpan", "data": absensi})
}

// BulkSaveAbsensi saves attendance for all students in a meeting
// POST /api/dosen/absensi/bulk
// Body: { "items": [{ "krs_id": 1, "nim": "...", "pertemuan": 3, "status": "H" }, ...] }
func BulkSaveAbsensi(c *gin.Context) {
	var input struct {
		Items []struct {
			KRSID     uint   `json:"krs_id"`
			NIM       string `json:"nim"`
			Pertemuan int    `json:"pertemuan"`
			Status    string `json:"status"`
		} `json:"items"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	saved := 0
	for _, item := range input.Items {
		var absensi models.Absensi
		result := config.DB.Where("krs_id = ? AND pertemuan = ?", item.KRSID, item.Pertemuan).First(&absensi)
		if result.Error != nil {
			absensi = models.Absensi{
				KRSID: item.KRSID, NIM: item.NIM, Pertemuan: item.Pertemuan,
				Status: item.Status, UpdatedAt: time.Now(),
			}
			config.DB.Create(&absensi)
		} else {
			config.DB.Model(&absensi).Updates(map[string]interface{}{
				"status": item.Status, "updated_at": time.Now(),
			})
		}
		saved++
	}

	c.JSON(http.StatusOK, gin.H{"message": "Absensi bulk disimpan", "saved": saved})
}

// ===================== INPUT NILAI (Dosen) =====================

// GetNilaiKelas returns all student grades for a specific class
// GET /api/dosen/nilai/:mata_kuliah_id
func GetNilaiKelas(c *gin.Context) {
	mkIDStr := c.Param("mata_kuliah_id")
	mkID, _ := strconv.ParseUint(mkIDStr, 10, 32)

	var nilaiList []models.Nilai
	config.DB.Preload("MataKuliah").Where("mata_kuliah_id = ?", mkID).Order("nim asc").Find(&nilaiList)

	var mk models.MataKuliah
	config.DB.First(&mk, mkID)

	c.JSON(http.StatusOK, gin.H{
		"mata_kuliah": mk,
		"count":       len(nilaiList),
		"data":        nilaiList,
	})
}

// GetRekapNilai returns grade statistics for a dosen's classes
// GET /api/dosen/rekap-nilai/:nip
func GetRekapNilai(c *gin.Context) {
	nip := c.Param("nip")

	var dosen models.Dosen
	if err := config.DB.Where("nip = ?", nip).First(&dosen).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Dosen tidak ditemukan"})
		return
	}

	// Get unique MK IDs taught by this dosen
	var krsItems []models.KRS
	config.DB.Preload("MataKuliah").Where("dosen_nama = ?", dosen.Nama).Find(&krsItems)

	mkMap := map[uint]models.MataKuliah{}
	for _, k := range krsItems {
		mkMap[k.MataKuliahID] = k.MataKuliah
	}

	type RekapItem struct {
		MataKuliah models.MataKuliah  `json:"mata_kuliah"`
		TotalMhs   int                `json:"total_mhs"`
		Distribusi map[string]int     `json:"distribusi"`
	}

	rekap := []RekapItem{}
	for mkID, mk := range mkMap {
		var nilaiList []models.Nilai
		config.DB.Where("mata_kuliah_id = ?", mkID).Find(&nilaiList)

		dist := map[string]int{}
		for _, n := range nilaiList {
			dist[n.Nilai]++
		}

		// Count students from KRS
		var count int64
		config.DB.Model(&models.KRS{}).Where("mata_kuliah_id = ?", mkID).Count(&count)

		rekap = append(rekap, RekapItem{
			MataKuliah: mk,
			TotalMhs:   int(count),
			Distribusi: dist,
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"dosen": gin.H{"nip": dosen.NIP, "nama": dosen.Nama},
		"count": len(rekap),
		"data":  rekap,
	})
}

// SaveNilaiMahasiswa creates or updates a student's grade
// POST /api/dosen/nilai
// Body: { "nim": "2024101001", "mata_kuliah_id": 16, "semester": 4, "uts": 82, "uas": 88, "tugas": 85 }
func SaveNilaiMahasiswa(c *gin.Context) {
	var input struct {
		NIM          string  `json:"nim" binding:"required"`
		MataKuliahID uint    `json:"mata_kuliah_id" binding:"required"`
		Semester     int     `json:"semester" binding:"required"`
		UTS          float64 `json:"uts"`
		UAS          float64 `json:"uas"`
		Tugas        float64 `json:"tugas"`
		Quiz         float64 `json:"quiz"`
		Absensi      float64 `json:"absensi"`
		Kelas        string  `json:"kelas"`
		// Configurable weights (defaults: 20/30/20/15/15)
		BobotUTS     float64 `json:"bobot_uts"`
		BobotUAS     float64 `json:"bobot_uas"`
		BobotTugas   float64 `json:"bobot_tugas"`
		BobotQuiz    float64 `json:"bobot_quiz"`
		BobotAbsensi float64 `json:"bobot_absensi"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Use default weights if not provided
	if input.BobotUTS+input.BobotUAS+input.BobotTugas+input.BobotQuiz+input.BobotAbsensi == 0 {
		input.BobotUTS = 20
		input.BobotUAS = 30
		input.BobotTugas = 20
		input.BobotQuiz = 15
		input.BobotAbsensi = 15
	}

	// Calculate final grade with configurable weights
	akhir := input.UTS*input.BobotUTS/100 + input.UAS*input.BobotUAS/100 + input.Tugas*input.BobotTugas/100 + input.Quiz*input.BobotQuiz/100 + input.Absensi*input.BobotAbsensi/100
	akhir = math.Round(akhir*100) / 100

	// Convert to letter grade
	huruf := "E"
	bobot := 0.0
	switch {
	case akhir >= 85:
		huruf = "A"
		bobot = 4.0
	case akhir >= 80:
		huruf = "A-"
		bobot = 3.7
	case akhir >= 75:
		huruf = "B+"
		bobot = 3.3
	case akhir >= 70:
		huruf = "B"
		bobot = 3.0
	case akhir >= 65:
		huruf = "B-"
		bobot = 2.7
	case akhir >= 60:
		huruf = "C+"
		bobot = 2.3
	case akhir >= 55:
		huruf = "C"
		bobot = 2.0
	case akhir >= 50:
		huruf = "D"
		bobot = 1.0
	}

	// Upsert
	var nilai models.Nilai
	result := config.DB.Where("nim = ? AND mata_kuliah_id = ?", input.NIM, input.MataKuliahID).First(&nilai)
	if result.Error != nil {
		nilai = models.Nilai{
			NIM: input.NIM, MataKuliahID: input.MataKuliahID, Semester: input.Semester,
			Nilai: huruf, Bobot: bobot, Kelas: input.Kelas,
		}
		config.DB.Create(&nilai)
	} else {
		config.DB.Model(&nilai).Updates(map[string]interface{}{
			"nilai": huruf, "bobot": bobot,
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Nilai disimpan",
		"uts":     input.UTS,
		"uas":     input.UAS,
		"tugas":   input.Tugas,
		"akhir":   akhir,
		"huruf":   huruf,
		"bobot":   bobot,
		"data":    nilai,
	})
}

// BulkSaveNilai saves grades for all students in a class
// POST /api/dosen/nilai/bulk
func BulkSaveNilai(c *gin.Context) {
	var input struct {
		// Configurable weights for all items
		BobotUTS     float64 `json:"bobot_uts"`
		BobotUAS     float64 `json:"bobot_uas"`
		BobotTugas   float64 `json:"bobot_tugas"`
		BobotQuiz    float64 `json:"bobot_quiz"`
		BobotAbsensi float64 `json:"bobot_absensi"`
		Items []struct {
			NIM          string  `json:"nim"`
			MataKuliahID uint    `json:"mata_kuliah_id"`
			Semester     int     `json:"semester"`
			UTS          float64 `json:"uts"`
			UAS          float64 `json:"uas"`
			Tugas        float64 `json:"tugas"`
			Quiz         float64 `json:"quiz"`
			Absensi      float64 `json:"absensi"`
			Kelas        string  `json:"kelas"`
		} `json:"items"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Use default weights if not provided
	bUts := input.BobotUTS
	bUas := input.BobotUAS
	bTugas := input.BobotTugas
	bQuiz := input.BobotQuiz
	bAbsensi := input.BobotAbsensi
	if bUts+bUas+bTugas+bQuiz+bAbsensi == 0 {
		bUts = 20
		bUas = 30
		bTugas = 20
		bQuiz = 15
		bAbsensi = 15
	}

	saved := 0
	for _, item := range input.Items {
		akhir := item.UTS*bUts/100 + item.UAS*bUas/100 + item.Tugas*bTugas/100 + item.Quiz*bQuiz/100 + item.Absensi*bAbsensi/100
		huruf := "E"
		bobot := 0.0
		switch {
		case akhir >= 85:
			huruf = "A"
			bobot = 4.0
		case akhir >= 80:
			huruf = "A-"
			bobot = 3.7
		case akhir >= 75:
			huruf = "B+"
			bobot = 3.3
		case akhir >= 70:
			huruf = "B"
			bobot = 3.0
		case akhir >= 65:
			huruf = "B-"
			bobot = 2.7
		case akhir >= 60:
			huruf = "C+"
			bobot = 2.3
		case akhir >= 55:
			huruf = "C"
			bobot = 2.0
		case akhir >= 50:
			huruf = "D"
			bobot = 1.0
		}

		var nilai models.Nilai
		result := config.DB.Where("nim = ? AND mata_kuliah_id = ?", item.NIM, item.MataKuliahID).First(&nilai)
		if result.Error != nil {
			nilai = models.Nilai{
				NIM: item.NIM, MataKuliahID: item.MataKuliahID, Semester: item.Semester,
				Nilai: huruf, Bobot: bobot, Kelas: item.Kelas,
			}
			config.DB.Create(&nilai)
		} else {
			config.DB.Model(&nilai).Updates(map[string]interface{}{"nilai": huruf, "bobot": bobot})
		}
		saved++
	}

	c.JSON(http.StatusOK, gin.H{"message": "Nilai bulk disimpan", "saved": saved})
}
