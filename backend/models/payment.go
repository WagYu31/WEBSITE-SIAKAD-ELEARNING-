package models

import "time"

// Payment represents registration fee payment
type Payment struct {
	ID             uint      `json:"id" gorm:"primaryKey"`
	RegistrationID uint      `json:"registration_id" gorm:"index"`
	MetodeBayar    string    `json:"metode_bayar" gorm:"size:10;not null"` // online / cash
	Jumlah         float64   `json:"jumlah" gorm:"not null"`
	Status         string    `json:"status" gorm:"size:15;default:pending"` // pending/paid/failed
	BuktiBayar     string    `json:"bukti_bayar" gorm:"size:255"`
	SnapToken      string    `json:"snap_token,omitempty" gorm:"size:255"`
	PaidAt         *time.Time `json:"paid_at"`
	CreatedAt      time.Time  `json:"created_at"`
}

// PaymentRequest is the input for creating a payment
type PaymentRequest struct {
	RegistrationID uint    `json:"registration_id" binding:"required"`
	MetodeBayar    string  `json:"metode_bayar" binding:"required,oneof=online cash"`
	Jumlah         float64 `json:"jumlah"`
}
