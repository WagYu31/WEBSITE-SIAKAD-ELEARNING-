package handlers

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"log"
	"math/big"
	"net/http"
	"time"

	"stia-bayuangga/backend/config"
	"stia-bayuangga/backend/models"

	"github.com/gin-gonic/gin"
)

// generateNIM creates a unique NIM like 2026101001
func generateNIM(prodiPilihan string) string {
	year := time.Now().Year()
	
	// Prodi code mapping
	prodiCodes := map[string]string{
		"S1 Administrasi Publik":  "101",
		"S1 Administrasi Bisnis":  "102",
		"S2 Administrasi Publik":  "201",
		"D3 Ilmu Administrasi":   "301",
	}
	code, ok := prodiCodes[prodiPilihan]
	if !ok {
		code = "101" // default
	}

	// Count existing accounts for this year + prodi
	var count int64
	config.DB.Model(&models.Account{}).Where("nim LIKE ?", fmt.Sprintf("%d%s%%", year, code)).Count(&count)

	return fmt.Sprintf("%d%s%03d", year, code, count+1)
}

// generatePassword creates a random 8-char password
func generatePassword() string {
	const chars = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789"
	password := make([]byte, 8)
	for i := range password {
		n, _ := rand.Int(rand.Reader, big.NewInt(int64(len(chars))))
		password[i] = chars[n.Int64()]
	}
	return string(password)
}

// generateToken creates a validation token
func generateToken() string {
	bytes := make([]byte, 32)
	rand.Read(bytes)
	return hex.EncodeToString(bytes)
}

// hashPassword creates a SHA-256 hash (use bcrypt in production)
func hashPassword(password string) string {
	hash := sha256.Sum256([]byte(password))
	return hex.EncodeToString(hash[:])
}

// CreateAccountAfterRegistration creates an account for a registered student
func CreateAccountAfterRegistration(regID uint, email string, prodi string) (*models.Account, error) {
	// Check if account already exists
	var existing models.Account
	if config.DB.Where("registration_id = ?", regID).First(&existing).Error == nil {
		return &existing, nil // already exists
	}

	plainPwd := generatePassword()
	nim := generateNIM(prodi)
	token := generateToken()

	account := models.Account{
		RegistrationID:  regID,
		NIM:             nim,
		Email:           email,
		Password:        hashPassword(plainPwd),
		PlainPassword:   plainPwd, // only for initial response
		IsValidated:     false,
		ValidationToken: token,
		CreatedAt:       time.Now(),
	}

	if err := config.DB.Create(&account).Error; err != nil {
		return nil, err
	}

	// Log email send (simulated)
	sendRegistrationEmail(regID, email, nim, plainPwd, token)

	account.PlainPassword = plainPwd
	return &account, nil
}

// sendRegistrationEmail simulates sending a registration email
func sendRegistrationEmail(regID uint, toEmail, nim, password, token string) {
	validationLink := fmt.Sprintf("http://localhost:3001/#/validate?token=%s", token)
	
	log.Printf("📧 ═══════════════════════════════════════════")
	log.Printf("📧 SENDING EMAIL TO: %s", toEmail)
	log.Printf("📧 ───────────────────────────────────────────")
	log.Printf("📧 Subject: Akun STIA Bayuangga Anda Berhasil Dibuat!")
	log.Printf("📧 ")
	log.Printf("📧 Selamat! Pendaftaran Anda telah berhasil.")
	log.Printf("📧 Berikut akun login Anda:")
	log.Printf("📧 ")
	log.Printf("📧   NIM      : %s", nim)
	log.Printf("📧   Password : %s", password)
	log.Printf("📧 ")
	log.Printf("📧 Klik link berikut untuk validasi akun:")
	log.Printf("📧   %s", validationLink)
	log.Printf("📧 ═══════════════════════════════════════════")

	// Log to database
	emailLog := models.EmailLog{
		RegistrationID: regID,
		ToEmail:        toEmail,
		Subject:        "Akun STIA Bayuangga Anda Berhasil Dibuat!",
		Status:         "sent",
		SentAt:         time.Now(),
	}
	config.DB.Create(&emailLog)
}

// ValidateAccountByEmail validates an account via email token
func ValidateAccountByEmail(c *gin.Context) {
	token := c.Param("token")
	if token == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Token tidak valid"})
		return
	}

	var account models.Account
	if err := config.DB.Where("validation_token = ?", token).First(&account).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Token tidak ditemukan atau sudah digunakan"})
		return
	}

	if account.IsValidated {
		c.JSON(http.StatusOK, gin.H{
			"message": "Akun sudah divalidasi sebelumnya",
			"nim":     account.NIM,
		})
		return
	}

	now := time.Now()
	account.IsValidated = true
	account.ValidatedBy = "email"
	account.ValidatedAt = &now
	config.DB.Save(&account)

	// Update registration status
	config.DB.Model(&models.Registration{}).Where("id = ?", account.RegistrationID).
		Updates(map[string]interface{}{"status": "diterima", "updated_at": now})

	c.JSON(http.StatusOK, gin.H{
		"message": "✅ Akun berhasil divalidasi! Silakan login.",
		"nim":     account.NIM,
	})
}

// ValidateAccountByBAP validates an account by BAP staff
func ValidateAccountByBAP(c *gin.Context) {
	accountID := c.Param("id")

	var account models.Account
	if err := config.DB.First(&account, accountID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Akun tidak ditemukan"})
		return
	}

	if account.IsValidated {
		c.JSON(http.StatusOK, gin.H{"message": "Akun sudah divalidasi"})
		return
	}

	now := time.Now()
	account.IsValidated = true
	account.ValidatedBy = "bap"
	account.ValidatedAt = &now
	config.DB.Save(&account)

	// Update registration status
	config.DB.Model(&models.Registration{}).Where("id = ?", account.RegistrationID).
		Updates(map[string]interface{}{"status": "diterima", "updated_at": now})

	c.JSON(http.StatusOK, gin.H{
		"message": "✅ Akun berhasil divalidasi oleh BAP",
		"nim":     account.NIM,
	})
}

// BAPCreateAccount allows BAP to manually create an account for offline registration
func BAPCreateAccount(c *gin.Context) {
	var input struct {
		RegistrationID uint `json:"registration_id" binding:"required"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Data tidak valid"})
		return
	}

	var reg models.Registration
	if err := config.DB.First(&reg, input.RegistrationID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pendaftaran tidak ditemukan"})
		return
	}

	account, err := CreateAccountAfterRegistration(reg.ID, reg.Email, reg.ProdiPilihan)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal membuat akun"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message":  "Akun berhasil dibuat",
		"nim":      account.NIM,
		"password": account.PlainPassword,
		"email":    account.Email,
	})
}

// GetAccountByRegistration returns account info for a registration
func GetAccountByRegistration(c *gin.Context) {
	regID := c.Param("registration_id")

	var account models.Account
	if err := config.DB.Where("registration_id = ?", regID).First(&account).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Akun belum dibuat"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"nim":          account.NIM,
		"email":        account.Email,
		"is_validated": account.IsValidated,
		"validated_by": account.ValidatedBy,
		"validated_at": account.ValidatedAt,
		"created_at":   account.CreatedAt,
	})
}
