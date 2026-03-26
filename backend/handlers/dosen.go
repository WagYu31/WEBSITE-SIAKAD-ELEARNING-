package handlers

import (
	"crypto/sha256"
	"encoding/hex"
	"net/http"
	"strings"
	"time"

	"stia-bayuangga/backend/config"
	"stia-bayuangga/backend/models"

	"github.com/gin-gonic/gin"
)

// hashDosenPassword creates a SHA-256 hash
func hashDosenPassword(password string) string {
	hash := sha256.Sum256([]byte(password))
	return hex.EncodeToString(hash[:])
}

// GetAllDosen returns all lecturers (password hidden)
func GetAllDosen(c *gin.Context) {
	var dosen []models.Dosen
	if err := config.DB.Order("nama ASC").Find(&dosen).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengambil data dosen"})
		return
	}
	// Hide passwords in response
	for i := range dosen {
		dosen[i].Password = ""
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
	dosen.Password = ""
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

	// Auto-generate username from email if not provided
	if input.Username == "" && input.Email != "" {
		input.Username = strings.Split(input.Email, "@")[0]
	}

	// Hash password (default if not provided)
	if input.Password == "" {
		input.Password = hashDosenPassword("dosen123")
	} else {
		input.Password = hashDosenPassword(input.Password)
	}

	input.CreatedAt = time.Now()
	input.UpdatedAt = time.Now()

	if err := config.DB.Create(&input).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menambahkan dosen"})
		return
	}

	input.Password = ""
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

	// Hash password if provided
	if pwd, ok := input["password"]; ok {
		pwdStr, isStr := pwd.(string)
		if isStr && pwdStr != "" {
			input["password"] = hashDosenPassword(pwdStr)
		} else {
			delete(input, "password") // don't update empty password
		}
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

	// Count by jabatan
	type JabatanCount struct {
		JabatanFungsional string
		Count             int64
	}
	var jabatanCounts []JabatanCount
	config.DB.Model(&models.Dosen{}).Select("jabatan_fungsional, count(*) as count").Group("jabatan_fungsional").Scan(&jabatanCounts)

	jabatan := make(map[string]int64)
	for _, jc := range jabatanCounts {
		jabatan[jc.JabatanFungsional] = jc.Count
	}

	c.JSON(http.StatusOK, gin.H{
		"total":     total,
		"aktif":     aktif,
		"non_aktif": total - aktif,
		"jabatan":   jabatan,
	})
}

// LoginDosen authenticates a lecturer by NIP + password
func LoginDosen(c *gin.Context) {
	var input struct {
		NIP      string `json:"nip" binding:"required"`
		Password string `json:"password" binding:"required"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "NIP dan password wajib diisi"})
		return
	}

	var dosen models.Dosen
	if err := config.DB.Where("nip = ?", input.NIP).First(&dosen).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "NIP tidak ditemukan"})
		return
	}

	if dosen.Status != "Aktif" {
		c.JSON(http.StatusForbidden, gin.H{"error": "Akun dosen tidak aktif"})
		return
	}

	if dosen.Password != hashDosenPassword(input.Password) {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Password salah"})
		return
	}

	dosen.Password = ""
	c.JSON(http.StatusOK, gin.H{
		"message": "✅ Login berhasil",
		"dosen":   dosen,
	})
}
