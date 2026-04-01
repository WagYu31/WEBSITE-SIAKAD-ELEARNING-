package handlers

import (
	"log"
	"net/http"
	"time"

	"stia-bayuangga/backend/config"
	"stia-bayuangga/backend/models"

	"github.com/gin-gonic/gin"
)

// SeedAkademik populates MataKuliah, KRS, Nilai tables for the demo student
func SeedAkademik(c *gin.Context) {
	// Check if data already exists
	var count int64
	config.DB.Model(&models.MataKuliah{}).Count(&count)
	if count > 0 {
		c.JSON(http.StatusOK, gin.H{"message": "Data akademik sudah ada", "skipped": true})
		return
	}

	now := time.Now()
	nim := "2024101001" // Ahmad Rizky Pratama

	// ============ MATA KULIAH (Semester 1-4) ============
	mataKuliah := []models.MataKuliah{
		// Semester 1
		{Kode: "AP201", Nama: "Pengantar Ilmu Administrasi", SKS: 3, Semester: 1, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP202", Nama: "Pendidikan Pancasila", SKS: 2, Semester: 1, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP203", Nama: "Bahasa Indonesia", SKS: 2, Semester: 1, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP204", Nama: "Pengantar Ekonomi", SKS: 3, Semester: 1, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP205", Nama: "Sosiologi", SKS: 3, Semester: 1, Prodi: "Administrasi Publik", CreatedAt: now},
		// Semester 2
		{Kode: "AP211", Nama: "Teori Organisasi", SKS: 3, Semester: 2, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP212", Nama: "Hukum Tata Negara", SKS: 3, Semester: 2, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP213", Nama: "Matematika Dasar", SKS: 3, Semester: 2, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP214", Nama: "Bahasa Inggris", SKS: 2, Semester: 2, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP215", Nama: "Ilmu Politik", SKS: 3, Semester: 2, Prodi: "Administrasi Publik", CreatedAt: now},
		// Semester 3
		{Kode: "AP301", Nama: "Kebijakan Publik", SKS: 3, Semester: 3, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP302", Nama: "Administrasi Keuangan", SKS: 3, Semester: 3, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP303", Nama: "Manajemen Proyek", SKS: 3, Semester: 3, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP304", Nama: "Metodologi Penelitian", SKS: 3, Semester: 3, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP305", Nama: "Psikologi Sosial", SKS: 2, Semester: 3, Prodi: "Administrasi Publik", CreatedAt: now},
		// Semester 4 (current KRS)
		{Kode: "AP401", Nama: "Kebijakan Publik Lanjutan", SKS: 3, Semester: 4, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP402", Nama: "Statistik Sosial", SKS: 3, Semester: 4, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP403", Nama: "Teori Administrasi", SKS: 3, Semester: 4, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP404", Nama: "Hukum Administrasi", SKS: 2, Semester: 4, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP405", Nama: "Manajemen SDM", SKS: 3, Semester: 4, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP406", Nama: "Sistem Informasi Manajemen", SKS: 3, Semester: 4, Prodi: "Administrasi Publik", CreatedAt: now},
		{Kode: "AP407", Nama: "Etika Administrasi", SKS: 2, Semester: 4, Prodi: "Administrasi Publik", CreatedAt: now},
	}

	if err := config.DB.Create(&mataKuliah).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal seed mata kuliah: " + err.Error()})
		return
	}

	// Build kode → ID map
	mkMap := map[string]uint{}
	for _, mk := range mataKuliah {
		mkMap[mk.Kode] = mk.ID
	}

	// ============ NILAI (Semester 1-3) ============
	nilaiData := []models.Nilai{
		// Semester 1
		{NIM: nim, MataKuliahID: mkMap["AP201"], Semester: 1, Nilai: "A", Bobot: 4.0, Kelas: "EU101"},
		{NIM: nim, MataKuliahID: mkMap["AP202"], Semester: 1, Nilai: "A", Bobot: 4.0, Kelas: "EU101"},
		{NIM: nim, MataKuliahID: mkMap["AP203"], Semester: 1, Nilai: "B+", Bobot: 3.3, Kelas: "EU101"},
		{NIM: nim, MataKuliahID: mkMap["AP204"], Semester: 1, Nilai: "B+", Bobot: 3.3, Kelas: "EU101"},
		{NIM: nim, MataKuliahID: mkMap["AP205"], Semester: 1, Nilai: "A-", Bobot: 3.7, Kelas: "EU101"},
		// Semester 2
		{NIM: nim, MataKuliahID: mkMap["AP211"], Semester: 2, Nilai: "A-", Bobot: 3.7, Kelas: "EU101"},
		{NIM: nim, MataKuliahID: mkMap["AP212"], Semester: 2, Nilai: "B+", Bobot: 3.3, Kelas: "EU101"},
		{NIM: nim, MataKuliahID: mkMap["AP213"], Semester: 2, Nilai: "B", Bobot: 3.0, Kelas: "EU101"},
		{NIM: nim, MataKuliahID: mkMap["AP214"], Semester: 2, Nilai: "A", Bobot: 4.0, Kelas: "EU101"},
		{NIM: nim, MataKuliahID: mkMap["AP215"], Semester: 2, Nilai: "A", Bobot: 4.0, Kelas: "EU101"},
		// Semester 3
		{NIM: nim, MataKuliahID: mkMap["AP301"], Semester: 3, Nilai: "A-", Bobot: 3.7, Kelas: "EU101"},
		{NIM: nim, MataKuliahID: mkMap["AP302"], Semester: 3, Nilai: "B+", Bobot: 3.3, Kelas: "EU101"},
		{NIM: nim, MataKuliahID: mkMap["AP303"], Semester: 3, Nilai: "A", Bobot: 4.0, Kelas: "EU101"},
		{NIM: nim, MataKuliahID: mkMap["AP304"], Semester: 3, Nilai: "B+", Bobot: 3.3, Kelas: "EU101"},
		{NIM: nim, MataKuliahID: mkMap["AP305"], Semester: 3, Nilai: "A", Bobot: 4.0, Kelas: "EU101"},
	}

	if err := config.DB.Create(&nilaiData).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal seed nilai: " + err.Error()})
		return
	}

	// ============ KRS (Semester 4 — current enrollment) ============
	krsData := []models.KRS{
		{NIM: nim, Semester: 4, TahunAjaran: "Genap 2025/2026", MataKuliahID: mkMap["AP401"], Kelas: "A", Seksi: "EU101", DosenNama: "Dr. Bambang Sudarsono, M.Si.", Waktu: "Senin, 07:30-09:10", Ruang: "R.201", JenisKelas: "Reguler", Status: "Disetujui", DisetujuiOleh: "Dr. Bambang Sudarsono, M.Si.", DisetujuiPada: "25 Maret 2026, 20:39:43", CreatedAt: now},
		{NIM: nim, Semester: 4, TahunAjaran: "Genap 2025/2026", MataKuliahID: mkMap["AP402"], Kelas: "A", Seksi: "EU101", DosenNama: "Ir. Siti Nurjanah, M.T.", Waktu: "Senin, 09:20-11:00", Ruang: "R.305", JenisKelas: "Reguler", Status: "Disetujui", DisetujuiOleh: "Dr. Bambang Sudarsono, M.Si.", DisetujuiPada: "25 Maret 2026, 20:39:43", CreatedAt: now},
		{NIM: nim, Semester: 4, TahunAjaran: "Genap 2025/2026", MataKuliahID: mkMap["AP403"], Kelas: "A", Seksi: "EU102", DosenNama: "Prof. Dr. Sri Wahyuni, M.AP.", Waktu: "Selasa, 07:30-09:10", Ruang: "R.102", JenisKelas: "Reguler", Status: "Disetujui", DisetujuiOleh: "Dr. Bambang Sudarsono, M.Si.", DisetujuiPada: "25 Maret 2026, 20:39:43", CreatedAt: now},
		{NIM: nim, Semester: 4, TahunAjaran: "Genap 2025/2026", MataKuliahID: mkMap["AP404"], Kelas: "A", Seksi: "EU101", DosenNama: "Dr. Agus Rahardjo, S.H., M.H.", Waktu: "Selasa, 13:00-14:40", Ruang: "R.201", JenisKelas: "Reguler", Status: "Disetujui", DisetujuiOleh: "Dr. Bambang Sudarsono, M.Si.", DisetujuiPada: "25 Maret 2026, 20:39:43", CreatedAt: now},
		{NIM: nim, Semester: 4, TahunAjaran: "Genap 2025/2026", MataKuliahID: mkMap["AP405"], Kelas: "A", Seksi: "EU101", DosenNama: "Dr. Rina Kartika, M.M.", Waktu: "Rabu, 07:30-09:10", Ruang: "R.204", JenisKelas: "Reguler", Status: "Disetujui", DisetujuiOleh: "Dr. Bambang Sudarsono, M.Si.", DisetujuiPada: "25 Maret 2026, 20:39:43", CreatedAt: now},
		{NIM: nim, Semester: 4, TahunAjaran: "Genap 2025/2026", MataKuliahID: mkMap["AP406"], Kelas: "A", Seksi: "EU101", DosenNama: "Ir. Andi Prasetyo, M.Kom.", Waktu: "Kamis, 09:20-11:00", Ruang: "Lab", JenisKelas: "Reguler", Status: "Disetujui", DisetujuiOleh: "Dr. Bambang Sudarsono, M.Si.", DisetujuiPada: "25 Maret 2026, 20:39:43", CreatedAt: now},
		{NIM: nim, Semester: 4, TahunAjaran: "Genap 2025/2026", MataKuliahID: mkMap["AP407"], Kelas: "B", Seksi: "EU102", DosenNama: "Dr. Bambang Sudarsono, M.Si.", Waktu: "Jumat, 07:30-09:10", Ruang: "R.301", JenisKelas: "Reguler", Status: "Disetujui", DisetujuiOleh: "Dr. Bambang Sudarsono, M.Si.", DisetujuiPada: "25 Maret 2026, 20:39:43", CreatedAt: now},
	}

	if err := config.DB.Create(&krsData).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal seed KRS: " + err.Error()})
		return
	}

	// ============ JADWAL UJIAN ============
	ujianData := []models.JadwalUjian{
		{MataKuliahID: mkMap["AP401"], Tanggal: "Senin, 3 November 2025", Mulai: "18:30", Selesai: "06:30", Sesi: "EU101", Jenis: "UTS", Kelompok: 1},
		{MataKuliahID: mkMap["AP404"], Tanggal: "Kamis, 6 November 2025", Mulai: "18:30", Selesai: "06:30", Sesi: "EU101", Jenis: "UTS", Kelompok: 1},
		{MataKuliahID: mkMap["AP403"], Tanggal: "Sabtu, 8 November 2025", Mulai: "18:30", Selesai: "06:30", Sesi: "EU102", Jenis: "UTS", Kelompok: 1},
		{MataKuliahID: mkMap["AP402"], Tanggal: "Senin, 10 November 2025", Mulai: "18:30", Selesai: "06:30", Sesi: "EU101", Jenis: "UTS", Kelompok: 2},
		{MataKuliahID: mkMap["AP401"], Tanggal: "Senin, 15 Desember 2025", Mulai: "18:30", Selesai: "06:30", Sesi: "EU101", Jenis: "UAS", Kelompok: 1},
		{MataKuliahID: mkMap["AP403"], Tanggal: "Rabu, 17 Desember 2025", Mulai: "18:30", Selesai: "06:30", Sesi: "EU102", Jenis: "UAS", Kelompok: 1},
		{MataKuliahID: mkMap["AP405"], Tanggal: "Jumat, 19 Desember 2025", Mulai: "07:30", Selesai: "09:30", Sesi: "EU101", Jenis: "UAS", Kelompok: 2},
	}

	if err := config.DB.Create(&ujianData).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal seed jadwal ujian: " + err.Error()})
		return
	}

	total := len(mataKuliah) + len(nilaiData) + len(krsData) + len(ujianData)
	log.Printf("✅ Seeded akademik: %d MK, %d nilai, %d KRS, %d ujian", len(mataKuliah), len(nilaiData), len(krsData), len(ujianData))
	c.JSON(http.StatusCreated, gin.H{
		"message":     "✅ Seed data akademik berhasil",
		"mata_kuliah": len(mataKuliah),
		"nilai":       len(nilaiData),
		"krs":         len(krsData),
		"ujian":       len(ujianData),
		"total":       total,
	})
}
