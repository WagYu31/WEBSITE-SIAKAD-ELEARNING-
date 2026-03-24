package models

import "time"

// Account represents a student login account (created after registration)
type Account struct {
	ID             uint      `json:"id" gorm:"primaryKey"`
	RegistrationID uint      `json:"registration_id" gorm:"uniqueIndex"`
	NIM            string    `json:"nim" gorm:"uniqueIndex;size:20;not null"`
	Email          string    `json:"email" gorm:"size:100"`
	Password       string    `json:"-" gorm:"size:255;not null"`         // hashed
	PlainPassword  string    `json:"plain_password,omitempty" gorm:"-"`  // only shown once in response
	IsValidated    bool      `json:"is_validated" gorm:"default:false"`
	ValidatedBy    string    `json:"validated_by" gorm:"size:20"`        // "email" or "bap"
	ValidationToken string   `json:"-" gorm:"size:100"`
	ValidatedAt    *time.Time `json:"validated_at"`
	CreatedAt      time.Time  `json:"created_at"`
}

// EmailLog tracks sent notification emails
type EmailLog struct {
	ID             uint      `json:"id" gorm:"primaryKey"`
	RegistrationID uint      `json:"registration_id"`
	ToEmail        string    `json:"to_email" gorm:"size:100"`
	Subject        string    `json:"subject" gorm:"size:200"`
	Status         string    `json:"status" gorm:"size:15"` // sent / failed
	SentAt         time.Time `json:"sent_at"`
}
