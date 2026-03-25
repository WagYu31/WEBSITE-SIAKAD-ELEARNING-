package handlers

import (
	"net/http"
	"time"

	"stia-bayuangga/backend/config"
	"stia-bayuangga/backend/models"

	"github.com/gin-gonic/gin"
)

// GetAllDosen returns all lecturers
func GetAllDosen(c *gin.Context) {
	var dosen []models.Dosen
	if err := config.DB.Order("nama ASC").Find(&dosen).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengambil data dosen"})
		return
	}
	c.JSON(http.StatusOK, dosen)
}

// GetDosen returns a single lecturer by ID
func GetDosen(c *gin.Context) {
	id := c.Param("id")
	var dosen models.Dosen
	if err := config.DB.First(&dosen, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Dosen tidak ditemukan"})
		return
	}
	c.JSON(http.StatusOK, dosen)
}

// CreateDosen adds a new lecturer
func CreateDosen(c *gin.Context) {
	var input models.Dosen
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Data tidak valid: " + err.Error()})
		return
	}

	// Check duplicate NIP
	var existing models.Dosen
	if config.DB.Where("nip = ?", input.NIP).First(&existing).Error == nil {
		c.JSON(http.StatusConflict, gin.H{"error": "NIP sudah terdaftar"})
		return
	}

	input.CreatedAt = time.Now()
	input.UpdatedAt = time.Now()

	if err := config.DB.Create(&input).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menambahkan dosen"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message": "✅ Dosen berhasil ditambahkan",
		"dosen":   input,
	})
}

// UpdateDosen updates lecturer data
func UpdateDosen(c *gin.Context) {
	id := c.Param("id")
	var dosen models.Dosen
	if err := config.DB.First(&dosen, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Dosen tidak ditemukan"})
		return
	}

	var input map[string]interface{}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Data tidak valid"})
		return
	}

	input["updated_at"] = time.Now()
	if err := config.DB.Model(&dosen).Updates(input).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal memperbarui data dosen"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "✅ Data dosen berhasil diperbarui"})
}

// DeleteDosen removes a lecturer
func DeleteDosen(c *gin.Context) {
	id := c.Param("id")
	var dosen models.Dosen
	if err := config.DB.First(&dosen, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Dosen tidak ditemukan"})
		return
	}

	if err := config.DB.Delete(&dosen).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menghapus dosen"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "✅ Dosen berhasil dihapus"})
}

// GetDosenStats returns lecturer statistics
func GetDosenStats(c *gin.Context) {
	var total int64
	var aktif int64
	config.DB.Model(&models.Dosen{}).Count(&total)
	config.DB.Model(&models.Dosen{}).Where("status = ?", "Aktif").Count(&aktif)

	c.JSON(http.StatusOK, gin.H{
		"total":      total,
		"aktif":      aktif,
		"non_aktif":  total - aktif,
	})
}
