package models

import "time"

// Registration represents a student registration (PMB)
type Registration struct {
	ID             uint       `json:"id" gorm:"primaryKey"`
	NoPendaftaran  string     `json:"no_pendaftaran" gorm:"uniqueIndex;size:20"`
	Metode         string     `json:"metode" gorm:"size:10;not null"` // online / offline
	Status         string     `json:"status" gorm:"size:15;default:menunggu"`

	// Data Pribadi
	NISN          string `json:"nisn" gorm:"size:20"`
	KIP           string `json:"kip" gorm:"size:30"`
	KKS           string `json:"kks" gorm:"size:30"`
	NIK           string `json:"nik" gorm:"size:20;not null"`
	Nama          string `json:"nama" gorm:"size:100;not null"`
	TempatLahir   string `json:"tempat_lahir" gorm:"size:50"`
	TanggalLahir  string `json:"tanggal_lahir"`
	Gender        string `json:"gender" gorm:"size:10"`
	Agama         string `json:"agama" gorm:"size:20"`
	Email         string `json:"email" gorm:"size:100"`
	Telepon1      string `json:"telepon_1" gorm:"size:20"`
	Telepon2      string `json:"telepon_2" gorm:"size:20"`

	// Alamat
	Alamat    string `json:"alamat"`
	Provinsi  string `json:"provinsi" gorm:"size:50"`
	Kota      string `json:"kota" gorm:"size:50"`
	Kecamatan string `json:"kecamatan" gorm:"size:50"`
	Kelurahan string `json:"kelurahan" gorm:"size:50"`
	KodePos   string `json:"kode_pos" gorm:"size:10"`

	// Data Keluarga
	AnakKe       int    `json:"anak_ke"`
	DariJumlah   int    `json:"dari_jumlah"`
	NamaAyah     string `json:"nama_ayah" gorm:"size:100"`
	PekerjaanAyah string `json:"pekerjaan_ayah" gorm:"size:50"`
	NIKAyah      string `json:"nik_ayah" gorm:"size:20"`
	NamaIbu      string `json:"nama_ibu" gorm:"size:100"`
	PekerjaanIbu string `json:"pekerjaan_ibu" gorm:"size:50"`
	NIKIbu       string `json:"nik_ibu" gorm:"size:20"`
	NoKK         string `json:"no_kk" gorm:"size:20"`

	// Akademik
	AsalSekolah   string `json:"asal_sekolah" gorm:"size:100"`
	ProdiPilihan  string `json:"prodi_pilihan" gorm:"size:50"`

	// Meta
	RegisteredBy string     `json:"registered_by" gorm:"size:50"` // NULL=self, NIP BAP if offline
	CreatedAt    time.Time  `json:"created_at"`
	UpdatedAt    time.Time  `json:"updated_at"`

	// Relations
	Payment *Payment `json:"payment,omitempty" gorm:"foreignKey:RegistrationID"`
}

// RegistrationStats holds PMB statistics
type RegistrationStats struct {
	TotalPendaftar int64 `json:"total_pendaftar"`
	TotalProses    int64 `json:"total_proses"`
	TotalDiterima  int64 `json:"total_diterima"`
	TotalDitolak   int64 `json:"total_ditolak"`
}
