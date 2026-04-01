package handlers

import (
	"net/http"

	"stia-bayuangga/backend/config"
	"stia-bayuangga/backend/models"

	"github.com/gin-gonic/gin"
)

// ===================== KRS =====================

// GetKRS returns the student's KRS for a given semester
// GET /api/akademik/krs/:nim?semester=4
func GetKRS(c *gin.Context) {
	nim := c.Param("nim")
	semester := c.Query("semester")

	var items []models.KRS
	q := config.DB.Preload("MataKuliah").Where("nim = ?", nim)
	if semester != "" {
		q = q.Where("semester = ?", semester)
	}
	q.Order("id asc").Find(&items)

	// Compute total SKS
	totalSks := 0
	for _, item := range items {
		totalSks += item.MataKuliah.SKS
	}

	c.JSON(http.StatusOK, gin.H{
		"nim":       nim,
		"semester":  semester,
		"total_sks": totalSks,
		"count":     len(items),
		"data":      items,
	})
}

// ===================== KHS =====================

// GetKHS returns graded courses per semester
// GET /api/akademik/khs/:nim?semester=3
func GetKHS(c *gin.Context) {
	nim := c.Param("nim")
	semester := c.Query("semester")

	var nilaiList []models.Nilai
	q := config.DB.Preload("MataKuliah").Where("nim = ?", nim)
	if semester != "" {
		q = q.Where("semester = ?", semester)
	}
	q.Order("semester asc, id asc").Find(&nilaiList)

	totalSks := 0
	totalBobot := 0.0
	for _, n := range nilaiList {
		totalSks += n.MataKuliah.SKS
		totalBobot += float64(n.MataKuliah.SKS) * n.Bobot
	}
	ipk := 0.0
	if totalSks > 0 {
		ipk = totalBobot / float64(totalSks)
	}

	// Group by semester
	grouped := map[int][]models.Nilai{}
	for _, n := range nilaiList {
		grouped[n.Semester] = append(grouped[n.Semester], n)
	}

	c.JSON(http.StatusOK, gin.H{
		"nim":         nim,
		"total_sks":   totalSks,
		"total_bobot": totalBobot,
		"ipk":         ipk,
		"count":       len(nilaiList),
		"data":        nilaiList,
		"per_semester": grouped,
	})
}

// ===================== JADWAL =====================

// GetJadwal returns the student's weekly schedule from KRS
// GET /api/akademik/jadwal/:nim
func GetJadwal(c *gin.Context) {
	nim := c.Param("nim")
	semester := c.Query("semester")

	var items []models.KRS
	q := config.DB.Preload("MataKuliah").Where("nim = ?", nim)
	if semester != "" {
		q = q.Where("semester = ?", semester)
	}
	q.Order("waktu asc").Find(&items)

	c.JSON(http.StatusOK, gin.H{
		"nim":   nim,
		"count": len(items),
		"data":  items,
	})
}

// GetJadwalUjian returns UTS/UAS exam schedules
// GET /api/akademik/ujian/:nim
func GetJadwalUjian(c *gin.Context) {
	nim := c.Param("nim")

	// Get MataKuliah IDs from KRS for latest semester
	var krsItems []models.KRS
	config.DB.Where("nim = ?", nim).Order("semester desc").Find(&krsItems)

	if len(krsItems) == 0 {
		c.JSON(http.StatusOK, gin.H{"nim": nim, "count": 0, "data": []models.JadwalUjian{}})
		return
	}

	// Get MK IDs
	mkIDs := []uint{}
	for _, k := range krsItems {
		mkIDs = append(mkIDs, k.MataKuliahID)
	}

	var ujianList []models.JadwalUjian
	config.DB.Preload("MataKuliah").Where("mata_kuliah_id IN ?", mkIDs).Order("tanggal asc").Find(&ujianList)

	c.JSON(http.StatusOK, gin.H{
		"nim":   nim,
		"count": len(ujianList),
		"data":  ujianList,
	})
}

// ===================== MATA KULIAH =====================

// GetAllMataKuliah returns the full course catalog
// GET /api/akademik/matakuliah
func GetAllMataKuliah(c *gin.Context) {
	var mkList []models.MataKuliah
	config.DB.Order("kode asc").Find(&mkList)
	c.JSON(http.StatusOK, gin.H{"count": len(mkList), "data": mkList})
}
