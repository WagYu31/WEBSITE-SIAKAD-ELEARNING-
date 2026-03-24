package handlers

import (
	"fmt"
	"net/http"
	"time"

	"stia-bayuangga/backend/config"
	"stia-bayuangga/backend/models"

	"github.com/gin-gonic/gin"
)

// generateNoPendaftaran creates a unique registration number
func generateNoPendaftaran() string {
	var count int64
	config.DB.Model(&models.Registration{}).Count(&count)
	year := time.Now().Year()
	return fmt.Sprintf("PMB-%d-%04d", year, count+1)
}

// RegisterOnline handles online student registration
func RegisterOnline(c *gin.Context) {
	var reg models.Registration
	if err := c.ShouldBindJSON(&reg); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Data tidak valid: " + err.Error()})
		return
	}

	// Validate required fields
	if reg.NIK == "" || reg.Nama == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "NIK dan Nama wajib diisi"})
		return
	}

	// Check duplicate NIK
	var existing models.Registration
	if result := config.DB.Where("nik = ?", reg.NIK).First(&existing); result.Error == nil {
		c.JSON(http.StatusConflict, gin.H{
			"error":          "NIK sudah terdaftar",
			"no_pendaftaran": existing.NoPendaftaran,
		})
		return
	}

	reg.NoPendaftaran = generateNoPendaftaran()
	reg.Metode = "online"
	reg.Status = "menunggu"
	reg.CreatedAt = time.Now()
	reg.UpdatedAt = time.Now()

	if result := config.DB.Create(&reg); result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan data"})
		return
	}

	// Auto-create account & send email
	account, err := CreateAccountAfterRegistration(reg.ID, reg.Email, reg.ProdiPilihan)
	accountInfo := gin.H{}
	if err == nil && account != nil {
		accountInfo = gin.H{
			"nim":      account.NIM,
			"password": account.PlainPassword,
			"email_sent": true,
		}
	}

	c.JSON(http.StatusCreated, gin.H{
		"message":        "Pendaftaran berhasil!",
		"no_pendaftaran": reg.NoPendaftaran,
		"id":             reg.ID,
		"account":        accountInfo,
	})
}

// RegisterOffline handles BAP offline registration
func RegisterOffline(c *gin.Context) {
	var reg models.Registration
	if err := c.ShouldBindJSON(&reg); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Data tidak valid: " + err.Error()})
		return
	}

	if reg.NIK == "" || reg.Nama == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "NIK dan Nama wajib diisi"})
		return
	}

	// Check duplicate NIK
	var existing models.Registration
	if result := config.DB.Where("nik = ?", reg.NIK).First(&existing); result.Error == nil {
		c.JSON(http.StatusConflict, gin.H{
			"error":          "NIK sudah terdaftar",
			"no_pendaftaran": existing.NoPendaftaran,
		})
		return
	}

	reg.NoPendaftaran = generateNoPendaftaran()
	reg.Metode = "offline"
	reg.Status = "menunggu"
	// registered_by should be set from the request (BAP NIP)
	if reg.RegisteredBy == "" {
		reg.RegisteredBy = "BAP"
	}
	reg.CreatedAt = time.Now()
	reg.UpdatedAt = time.Now()

	if result := config.DB.Create(&reg); result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan data"})
		return
	}

	// Auto-create account (BAP offline)
	account, err := CreateAccountAfterRegistration(reg.ID, reg.Email, reg.ProdiPilihan)
	accountInfo := gin.H{}
	if err == nil && account != nil {
		accountInfo = gin.H{
			"nim":      account.NIM,
			"password": account.PlainPassword,
		}
	}

	c.JSON(http.StatusCreated, gin.H{
		"message":        "Pendaftaran offline berhasil!",
		"no_pendaftaran": reg.NoPendaftaran,
		"id":             reg.ID,
		"account":        accountInfo,
	})
}

// GetStats returns PMB statistics
func GetStats(c *gin.Context) {
	var stats models.RegistrationStats

	config.DB.Model(&models.Registration{}).Count(&stats.TotalPendaftar)
	config.DB.Model(&models.Registration{}).Where("status = ?", "proses").Count(&stats.TotalProses)
	config.DB.Model(&models.Registration{}).Where("status = ?", "diterima").Count(&stats.TotalDiterima)
	config.DB.Model(&models.Registration{}).Where("status = ?", "ditolak").Count(&stats.TotalDitolak)

	c.JSON(http.StatusOK, stats)
}

// CheckStatus checks registration status by no pendaftaran
func CheckStatus(c *gin.Context) {
	noPendaftaran := c.Param("no_pendaftaran")

	var reg models.Registration
	if result := config.DB.Preload("Payment").Where("no_pendaftaran = ?", noPendaftaran).First(&reg); result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "No. pendaftaran tidak ditemukan"})
		return
	}

	c.JSON(http.StatusOK, reg)
}

// GetRegistrations returns all registrations (BAP)
func GetRegistrations(c *gin.Context) {
	var registrations []models.Registration

	query := config.DB.Preload("Payment").Order("created_at DESC")

	// Filter by status
	if status := c.Query("status"); status != "" {
		query = query.Where("status = ?", status)
	}

	// Filter by method
	if metode := c.Query("metode"); metode != "" {
		query = query.Where("metode = ?", metode)
	}

	// Search by name or NIK
	if search := c.Query("search"); search != "" {
		query = query.Where("nama LIKE ? OR nik LIKE ? OR no_pendaftaran LIKE ?",
			"%"+search+"%", "%"+search+"%", "%"+search+"%")
	}

	if result := query.Find(&registrations); result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengambil data"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data":  registrations,
		"total": len(registrations),
	})
}

// GetRegistration returns a single registration by ID
func GetRegistration(c *gin.Context) {
	id := c.Param("id")

	var reg models.Registration
	if result := config.DB.Preload("Payment").First(&reg, id); result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pendaftaran tidak ditemukan"})
		return
	}

	c.JSON(http.StatusOK, reg)
}

// UpdateStatus updates registration status (BAP)
func UpdateStatus(c *gin.Context) {
	id := c.Param("id")

	var input struct {
		Status string `json:"status" binding:"required,oneof=menunggu proses diterima ditolak"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Status tidak valid. Pilihan: menunggu, proses, diterima, ditolak"})
		return
	}

	var reg models.Registration
	if result := config.DB.First(&reg, id); result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pendaftaran tidak ditemukan"})
		return
	}

	reg.Status = input.Status
	reg.UpdatedAt = time.Now()
	config.DB.Save(&reg)

	c.JSON(http.StatusOK, gin.H{
		"message": "Status berhasil diupdate",
		"status":  reg.Status,
	})
}
