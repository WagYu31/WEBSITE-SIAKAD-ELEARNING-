package handlers

import (
	"net/http"
	"time"

	"stia-bayuangga/backend/config"
	"stia-bayuangga/backend/models"

	"github.com/gin-gonic/gin"
)

const BIAYA_PENDAFTARAN = 350000.00 // Rp 350.000

// CreatePayment creates a payment for a registration
func CreatePayment(c *gin.Context) {
	var input models.PaymentRequest
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Data tidak valid: " + err.Error()})
		return
	}

	// Check registration exists
	var reg models.Registration
	if result := config.DB.First(&reg, input.RegistrationID); result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pendaftaran tidak ditemukan"})
		return
	}

	// Check if already paid
	var existingPayment models.Payment
	if result := config.DB.Where("registration_id = ? AND status = ?", input.RegistrationID, "paid").First(&existingPayment); result.Error == nil {
		c.JSON(http.StatusConflict, gin.H{"error": "Pembayaran sudah dilakukan"})
		return
	}

	if input.Jumlah <= 0 {
		input.Jumlah = BIAYA_PENDAFTARAN
	}

	payment := models.Payment{
		RegistrationID: input.RegistrationID,
		MetodeBayar:    input.MetodeBayar,
		Jumlah:         input.Jumlah,
		Status:         "pending",
		CreatedAt:      time.Now(),
	}

	if input.MetodeBayar == "online" {
		// Simulate online payment (replace with Midtrans later)
		payment.SnapToken = "SIMULATED-TOKEN-" + reg.NoPendaftaran
		payment.Status = "paid"
		now := time.Now()
		payment.PaidAt = &now

		// Auto update registration status
		reg.Status = "proses"
		reg.UpdatedAt = time.Now()
		config.DB.Save(&reg)
	}
	// Cash: stays "pending" until BAP confirms

	if result := config.DB.Create(&payment); result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan pembayaran"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message":    "Pembayaran berhasil dicatat",
		"payment_id": payment.ID,
		"status":     payment.Status,
		"snap_token": payment.SnapToken,
	})
}

// ConfirmCashPayment confirms a cash payment (BAP)
func ConfirmCashPayment(c *gin.Context) {
	paymentID := c.Param("id")

	var payment models.Payment
	if result := config.DB.First(&payment, paymentID); result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pembayaran tidak ditemukan"})
		return
	}

	if payment.Status == "paid" {
		c.JSON(http.StatusConflict, gin.H{"error": "Pembayaran sudah dikonfirmasi"})
		return
	}

	now := time.Now()
	payment.Status = "paid"
	payment.PaidAt = &now
	config.DB.Save(&payment)

	// Auto update registration status
	var reg models.Registration
	if result := config.DB.First(&reg, payment.RegistrationID); result.Error == nil {
		reg.Status = "proses"
		reg.UpdatedAt = time.Now()
		config.DB.Save(&reg)
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Pembayaran cash dikonfirmasi",
		"status":  "paid",
	})
}

// GetPaymentStatus returns payment status for a registration
func GetPaymentStatus(c *gin.Context) {
	regID := c.Param("registration_id")

	var payment models.Payment
	if result := config.DB.Where("registration_id = ?", regID).Order("created_at DESC").First(&payment); result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error":  "Belum ada pembayaran",
			"jumlah": BIAYA_PENDAFTARAN,
		})
		return
	}

	c.JSON(http.StatusOK, payment)
}
