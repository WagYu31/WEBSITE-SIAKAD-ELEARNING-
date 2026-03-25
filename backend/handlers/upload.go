package handlers

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"stia-bayuangga/backend/config"
	"stia-bayuangga/backend/models"

	"github.com/gin-gonic/gin"
)

// UploadDocuments handles file uploads for a registration
func UploadDocuments(c *gin.Context) {
	regID := c.Param("id")

	var reg models.Registration
	if err := config.DB.First(&reg, regID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pendaftaran tidak ditemukan"})
		return
	}

	// Create upload directory
	uploadDir := fmt.Sprintf("uploads/pmb/%s", reg.NoPendaftaran)
	if err := os.MkdirAll(uploadDir, 0755); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal membuat direktori upload"})
		return
	}

	fileFields := []string{"file_ijazah", "file_ktp_kk", "file_pas_foto", "file_rapor", "file_surat_sehat"}
	uploaded := []string{}

	for _, field := range fileFields {
		file, err := c.FormFile(field)
		if err != nil {
			continue // skip if not provided
		}

		// Validate size (5MB max)
		if file.Size > 5*1024*1024 {
			c.JSON(http.StatusBadRequest, gin.H{"error": fmt.Sprintf("File %s terlalu besar (maks 5MB)", field)})
			return
		}

		// Validate extension
		ext := strings.ToLower(filepath.Ext(file.Filename))
		if ext != ".pdf" && ext != ".jpg" && ext != ".jpeg" && ext != ".png" {
			c.JSON(http.StatusBadRequest, gin.H{"error": fmt.Sprintf("Format file %s tidak valid (PDF/JPG/PNG)", field)})
			return
		}

		// Save file
		filename := fmt.Sprintf("%s%s", field, ext)
		dst := filepath.Join(uploadDir, filename)
		if err := c.SaveUploadedFile(file, dst); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan file " + field})
			return
		}
		uploaded = append(uploaded, field)
	}

	c.JSON(http.StatusOK, gin.H{
		"message":  fmt.Sprintf("%d berkas berhasil diupload", len(uploaded)),
		"uploaded": uploaded,
	})
}
