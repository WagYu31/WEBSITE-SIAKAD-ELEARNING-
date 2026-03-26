package models

import "time"

// Dosen represents a lecturer/professor
type Dosen struct {
	ID                uint      `json:"id" gorm:"primaryKey"`
	NIP               string    `json:"nip" gorm:"column:nip;uniqueIndex;size:30;not null"`
	NIDN              string    `json:"nidn" gorm:"column:nidn;uniqueIndex;size:20"`
	Nama              string    `json:"nama" gorm:"size:100;not null"`
	Email             string    `json:"email" gorm:"size:100"`
	Telepon           string    `json:"telepon" gorm:"size:20"`
	Prodi             string    `json:"prodi" gorm:"size:50"`
	JabatanFungsional string    `json:"jabatan_fungsional" gorm:"size:50"`
	JabatanStruktural string    `json:"jabatan_struktural" gorm:"size:100"`
	Golongan          string    `json:"golongan" gorm:"size:10"`
	Pendidikan        string    `json:"pendidikan" gorm:"size:200"`
	BidangKeahlian    string    `json:"bidang_keahlian" gorm:"size:500"` // JSON array as string
	AvatarURL         string    `json:"avatar_url" gorm:"size:255"`
	Status            string    `json:"status" gorm:"size:15;default:Aktif"`
	Username          string    `json:"username" gorm:"uniqueIndex;size:50"`
	Password          string    `json:"password,omitempty" gorm:"size:255"`
	CreatedAt         time.Time `json:"created_at"`
	UpdatedAt         time.Time `json:"updated_at"`
}

