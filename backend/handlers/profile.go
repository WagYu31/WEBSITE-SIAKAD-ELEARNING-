package handlers

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"stia-bayuangga/backend/config"
	"stia-bayuangga/backend/models"

	"github.com/gin-gonic/gin"
)

// GetProfile returns complete profile data for a student by NIM
func GetProfile(c *gin.Context) {
	nim := c.Param("nim")
	if nim == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "NIM diperlukan"})
		return
	}

	// Find account by NIM
	var account models.Account
	if err := config.DB.Where("nim = ?", nim).First(&account).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Akun tidak ditemukan"})
		return
	}

	// Find linked registration data
	var reg models.Registration
	if err := config.DB.First(&reg, account.RegistrationID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Data registrasi tidak ditemukan"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"nim":           account.NIM,
		"email":         account.Email,
		"avatar_url":    account.AvatarURL,
		"is_validated":  account.IsValidated,
		// Data Pribadi
		"nama":          reg.Nama,
		"nik":           reg.NIK,
		"nisn":          reg.NISN,
		"telepon_1":     reg.Telepon1,
		"tempat_lahir":  reg.TempatLahir,
		"tanggal_lahir": reg.TanggalLahir,
		"gender":        reg.Gender,
		"agama":         reg.Agama,
		"kip":           reg.KIP,
		"kks":           reg.KKS,
		// Alamat
		"alamat":    reg.Alamat,
		"provinsi":  reg.Provinsi,
		"kota":      reg.Kota,
		"kecamatan": reg.Kecamatan,
		"kelurahan": reg.Kelurahan,
		"kode_pos":  reg.KodePos,
		// Keluarga
		"anak_ke":        reg.AnakKe,
		"dari_jumlah":    reg.DariJumlah,
		"no_kk":          reg.NoKK,
		"nama_ayah":      reg.NamaAyah,
		"pekerjaan_ayah": reg.PekerjaanAyah,
		"nik_ayah":       reg.NIKAyah,
		"nama_ibu":       reg.NamaIbu,
		"pekerjaan_ibu":  reg.PekerjaanIbu,
		"nik_ibu":        reg.NIKIbu,
		// Akademik
		"asal_sekolah":  reg.AsalSekolah,
		"prodi":         reg.ProdiPilihan,
		"semester":      reg.Semester,
		"angkatan":      reg.Angkatan,
		"status":        reg.Status,
	})
}

// UpdateProfile updates profile data for a student by NIM
func UpdateProfile(c *gin.Context) {
	nim := c.Param("nim")

	var account models.Account
	if err := config.DB.Where("nim = ?", nim).First(&account).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Akun tidak ditemukan"})
		return
	}

	var reg models.Registration
	if err := config.DB.First(&reg, account.RegistrationID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Data registrasi tidak ditemukan"})
		return
	}

	var input struct {
		// Data Pribadi
		Nama         string `json:"nama"`
		NIK          string `json:"nik"`
		NISN         string `json:"nisn"`
		Email        string `json:"email"`
		Telepon1     string `json:"telepon_1"`
		TempatLahir  string `json:"tempat_lahir"`
		TanggalLahir string `json:"tanggal_lahir"`
		Gender       string `json:"gender"`
		Agama        string `json:"agama"`
		KIP          string `json:"kip"`
		KKS          string `json:"kks"`
		// Alamat
		Alamat    string `json:"alamat"`
		Provinsi  string `json:"provinsi"`
		Kota      string `json:"kota"`
		Kecamatan string `json:"kecamatan"`
		Kelurahan string `json:"kelurahan"`
		KodePos   string `json:"kode_pos"`
		// Keluarga
		AnakKe        int    `json:"anak_ke"`
		DariJumlah    int    `json:"dari_jumlah"`
		NoKK          string `json:"no_kk"`
		NamaAyah      string `json:"nama_ayah"`
		PekerjaanAyah string `json:"pekerjaan_ayah"`
		NIKAyah       string `json:"nik_ayah"`
		NamaIbu       string `json:"nama_ibu"`
		PekerjaanIbu  string `json:"pekerjaan_ibu"`
		NIKIbu        string `json:"nik_ibu"`
	}

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Data tidak valid: " + err.Error()})
		return
	}

	// Update Registration record
	updates := map[string]interface{}{
		"nama":           input.Nama,
		"nik":            input.NIK,
		"nisn":           input.NISN,
		"email":          input.Email,
		"telepon_1":      input.Telepon1,
		"tempat_lahir":   input.TempatLahir,
		"tanggal_lahir":  input.TanggalLahir,
		"gender":         input.Gender,
		"agama":          input.Agama,
		"kip":            input.KIP,
		"kks":            input.KKS,
		"alamat":         input.Alamat,
		"provinsi":       input.Provinsi,
		"kota":           input.Kota,
		"kecamatan":      input.Kecamatan,
		"kelurahan":      input.Kelurahan,
		"kode_pos":       input.KodePos,
		"anak_ke":        input.AnakKe,
		"dari_jumlah":    input.DariJumlah,
		"no_kk":          input.NoKK,
		"nama_ayah":      input.NamaAyah,
		"pekerjaan_ayah": input.PekerjaanAyah,
		"nik_ayah":       input.NIKAyah,
		"nama_ibu":       input.NamaIbu,
		"pekerjaan_ibu":  input.PekerjaanIbu,
		"nik_ibu":        input.NIKIbu,
		"updated_at":     time.Now(),
	}

	if err := config.DB.Model(&reg).Updates(updates).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal memperbarui profil"})
		return
	}

	// Also update email in account if changed
	if input.Email != "" && input.Email != account.Email {
		config.DB.Model(&account).Update("email", input.Email)
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "✅ Profil berhasil diperbarui",
	})
}

// UploadAvatar handles profile photo upload
func UploadAvatar(c *gin.Context) {
	nim := c.Param("nim")

	var account models.Account
	if err := config.DB.Where("nim = ?", nim).First(&account).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Akun tidak ditemukan"})
		return
	}

	file, err := c.FormFile("avatar")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "File foto diperlukan"})
		return
	}

	// Validate size (2MB max)
	if file.Size > 2*1024*1024 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Ukuran foto maksimal 2MB"})
		return
	}

	// Validate type
	ext := strings.ToLower(filepath.Ext(file.Filename))
	if ext != ".jpg" && ext != ".jpeg" && ext != ".png" && ext != ".webp" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Format foto tidak valid (JPG/PNG/WebP)"})
		return
	}

	// Create directory
	uploadDir := "uploads/avatars"
	if err := os.MkdirAll(uploadDir, 0755); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal membuat direktori"})
		return
	}

	// Save with NIM as filename
	filename := fmt.Sprintf("%s%s", nim, ext)
	dst := filepath.Join(uploadDir, filename)

	// Delete old avatar if exists
	if account.AvatarURL != "" {
		oldPath := strings.TrimPrefix(account.AvatarURL, "/")
		os.Remove(oldPath)
	}

	if err := c.SaveUploadedFile(file, dst); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan foto"})
		return
	}

	// Update account
	avatarURL := "/" + dst
	config.DB.Model(&account).Update("avatar_url", avatarURL)

	c.JSON(http.StatusOK, gin.H{
		"message":    "✅ Foto profil berhasil diperbarui",
		"avatar_url": avatarURL,
	})
}

// ChangePassword allows a student to change their password
func ChangePassword(c *gin.Context) {
	nim := c.Param("nim")

	var account models.Account
	if err := config.DB.Where("nim = ?", nim).First(&account).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Akun tidak ditemukan"})
		return
	}

	var input struct {
		OldPassword     string `json:"old_password" binding:"required"`
		NewPassword     string `json:"new_password" binding:"required,min=8"`
		ConfirmPassword string `json:"confirm_password" binding:"required"`
	}

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Data tidak valid: " + err.Error()})
		return
	}

	// Verify old password
	oldHash := sha256.Sum256([]byte(input.OldPassword))
	if hex.EncodeToString(oldHash[:]) != account.Password {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Password lama tidak sesuai"})
		return
	}

	// Check confirm match
	if input.NewPassword != input.ConfirmPassword {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Konfirmasi password tidak cocok"})
		return
	}

	// Hash and save new password
	newHash := sha256.Sum256([]byte(input.NewPassword))
	config.DB.Model(&account).Update("password", hex.EncodeToString(newHash[:]))

	c.JSON(http.StatusOK, gin.H{
		"message": "✅ Password berhasil diubah",
	})
}
