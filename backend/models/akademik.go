package models

import "time"

// MataKuliah is a course in the curriculum
type MataKuliah struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	Kode      string    `json:"kode" gorm:"uniqueIndex;size:10;not null"`
	Nama      string    `json:"nama" gorm:"size:100;not null"`
	SKS       int       `json:"sks" gorm:"not null"`
	Semester  int       `json:"semester"`
	Prodi     string    `json:"prodi" gorm:"size:50"`
	CreatedAt time.Time `json:"created_at"`
}

// KRS — student's course enrollment for a semester
type KRS struct {
	ID           uint      `json:"id" gorm:"primaryKey"`
	NIM          string    `json:"nim" gorm:"size:20;not null;index"`
	Semester     int       `json:"semester" gorm:"not null"`
	TahunAjaran  string    `json:"tahun_ajaran" gorm:"size:15;not null"` // e.g. "Genap 2025/2026"
	MataKuliahID uint      `json:"mata_kuliah_id" gorm:"not null"`
	Kelas        string    `json:"kelas" gorm:"size:5"`
	Seksi        string    `json:"seksi" gorm:"size:10"`
	DosenNama    string    `json:"dosen_nama" gorm:"size:100"`
	Waktu        string    `json:"waktu" gorm:"size:50"`  // e.g. "Senin, 07:30-09:10"
	Ruang        string    `json:"ruang" gorm:"size:20"`
	JenisKelas   string    `json:"jenis_kelas" gorm:"size:20;default:Reguler"`
	Status       string    `json:"status" gorm:"size:15;default:Disetujui"` // Disetujui / Pending
	DisetujuiOleh string  `json:"disetujui_oleh" gorm:"size:100"`
	DisetujuiPada string  `json:"disetujui_pada" gorm:"size:50"`
	CreatedAt    time.Time `json:"created_at"`

	// Relation
	MataKuliah MataKuliah `json:"mata_kuliah" gorm:"foreignKey:MataKuliahID"`
}

// Nilai — student grade for a course
type Nilai struct {
	ID           uint    `json:"id" gorm:"primaryKey"`
	NIM          string  `json:"nim" gorm:"size:20;not null;index"`
	MataKuliahID uint    `json:"mata_kuliah_id" gorm:"not null"`
	Semester     int     `json:"semester" gorm:"not null"`
	Nilai        string  `json:"nilai" gorm:"size:5"`  // A, A-, B+, B, etc.
	Bobot        float64 `json:"bobot"`                // 4.0, 3.7, 3.3 etc.
	Kelas        string  `json:"kelas" gorm:"size:10"`

	// Relation
	MataKuliah MataKuliah `json:"mata_kuliah" gorm:"foreignKey:MataKuliahID"`
}

// Absensi — attendance record per meeting
type Absensi struct {
	ID           uint      `json:"id" gorm:"primaryKey"`
	KRSID        uint      `json:"krs_id" gorm:"not null;index"`
	NIM          string    `json:"nim" gorm:"size:20;not null;index"`
	Pertemuan    int       `json:"pertemuan" gorm:"not null"` // 1-14
	Status       string    `json:"status" gorm:"size:5;default:H"` // H=Hadir, I=Izin, S=Sakit, A=Alpa
	UpdatedAt    time.Time `json:"updated_at"`

	KRS KRS `json:"krs,omitempty" gorm:"foreignKey:KRSID"`
}

// JadwalUjian — UTS/UAS exam schedule
type JadwalUjian struct {
	ID           uint   `json:"id" gorm:"primaryKey"`
	MataKuliahID uint   `json:"mata_kuliah_id" gorm:"not null"`
	Tanggal      string `json:"tanggal" gorm:"size:50"`
	Mulai        string `json:"mulai" gorm:"size:10"`
	Selesai      string `json:"selesai" gorm:"size:10"`
	Sesi         string `json:"sesi" gorm:"size:10"`
	Jenis        string `json:"jenis" gorm:"size:5"` // UTS / UAS
	Kelompok     int    `json:"kelompok"`

	MataKuliah MataKuliah `json:"mata_kuliah" gorm:"foreignKey:MataKuliahID"`
}

// JadwalPertemuan — schedule for each individual meeting (1-14) of a course
// Allows BAP to reschedule meetings (kelas pengganti) and toggle online/offline
type JadwalPertemuan struct {
	ID           uint      `json:"id" gorm:"primaryKey"`
	MataKuliahID uint      `json:"mata_kuliah_id" gorm:"not null;index"`
	KodeMK       string    `json:"kode_mk" gorm:"size:15;index"`           // Direct kode for easy matching
	Kelas        string    `json:"kelas" gorm:"size:5"`         // A, B, C
	Pertemuan    int       `json:"pertemuan" gorm:"not null"`    // 1-14
	Tanggal      string    `json:"tanggal" gorm:"size:10"`      // YYYY-MM-DD
	TanggalAsli  string    `json:"tanggal_asli" gorm:"size:10"` // Original date
	JamMulai     string    `json:"jam_mulai" gorm:"size:5"`     // HH:MM
	JamSelesai   string    `json:"jam_selesai" gorm:"size:5"`   // HH:MM
	Mode         string    `json:"mode" gorm:"size:10;default:offline"` // online / offline
	Catatan      string    `json:"catatan" gorm:"size:200"`     // e.g. "Kelas Pengganti - Dosen Izin"
	UpdatedBy    string    `json:"updated_by" gorm:"size:100"`  // NIP of the person who updated
	UpdatedAt    time.Time `json:"updated_at"`

	MataKuliah MataKuliah `json:"mata_kuliah,omitempty" gorm:"foreignKey:MataKuliahID"`
}
