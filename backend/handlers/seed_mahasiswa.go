package handlers

import (
	"fmt"
	"net/http"
	"time"

	"stia-bayuangga/backend/config"
	"stia-bayuangga/backend/models"

	"github.com/gin-gonic/gin"
)

// BulkSeedMahasiswa — inserts 160 offline students (20/semester x 8 semester)
// POST /api/pmb/bulk-seed  (protected by header X-Seed-Key: bayuangga2026)
func BulkSeedMahasiswa(c *gin.Context) {
	if c.GetHeader("X-Seed-Key") != "bayuangga2026" {
		c.JSON(http.StatusForbidden, gin.H{"error": "Forbidden"})
		return
	}

	namaLaki := []string{
		"Ahmad Fauzan", "Budi Santoso", "Cahyo Nugroho", "Dendi Pratama",
		"Eko Saputra", "Fajar Ramadhan", "Gunawan Setiawan", "Hendra Purnomo",
		"Irfan Maulana", "Joko Prasetyo",
	}
	namaPerempuan := []string{
		"Ayu Lestari", "Bunga Rahayu", "Citra Dewi", "Desi Permata",
		"Elsa Nuraini", "Fitri Wahyuni", "Gita Melati", "Hana Kusuma",
		"Indah Sari", "Jihan Amalia",
	}

	prodis := []struct {
		nama string
		kode string
	}{
		{"S1 Administrasi Niaga", "102"},
		{"S1 Administrasi Negara", "101"},
	}

	angkatanBySmt := map[int]int{
		1: 2025, 2: 2025,
		3: 2024, 4: 2024,
		5: 2023, 6: 2023,
		7: 2022, 8: 2022,
	}

	now := time.Now()
	var created, skipped int

	tx := config.DB.Begin()
	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	var baseCount int64
	config.DB.Model(&models.Registration{}).Count(&baseCount)
	serial := int(baseCount)

	for smt := 1; smt <= 8; smt++ {
		angkatan := angkatanBySmt[smt]

		for pi, prodi := range prodis {
			for si := 0; si < 10; si++ {
				serial++

				var namaBase string
				if si%2 == 0 {
					namaBase = namaLaki[(si/2)%len(namaLaki)]
				} else {
					namaBase = namaPerempuan[(si/2)%len(namaPerempuan)]
				}
				nama := fmt.Sprintf("%s %d%d%d", namaBase, smt, pi, si)

				nik := fmt.Sprintf("35%02d%02d%04d%06d", smt, pi+1, angkatan%100, serial)
				email := fmt.Sprintf("mhs%04d@stia-bayuangga.ac.id", serial)
				noPendaftaran := fmt.Sprintf("PMB-%d-%04d", angkatan, serial)

				var existing models.Registration
				if tx.Where("nik = ?", nik).First(&existing).Error == nil {
					skipped++
					continue
				}

				gender := "Laki-laki"
				if si%2 != 0 {
					gender = "Perempuan"
				}

				reg := models.Registration{
					NoPendaftaran: noPendaftaran,
					Metode:        "offline",
					Status:        "diterima",
					NIK:           nik,
					Nama:          nama,
					Email:         email,
					ProdiPilihan:  prodi.nama,
					Semester:      smt,
					Angkatan:      angkatan,
					RegisteredBy:  "BAP",
					TempatLahir:   "Probolinggo",
					TanggalLahir:  fmt.Sprintf("%d-06-15", angkatan-18),
					Gender:        gender,
					Agama:         "Islam",
					Telepon1:      fmt.Sprintf("08%010d", serial),
					Alamat:        fmt.Sprintf("Jl. Pendidikan No. %d", serial),
					Kota:          "Probolinggo",
					Provinsi:      "Jawa Timur",
					CreatedAt:     now,
					UpdatedAt:     now,
				}

				if err := tx.Create(&reg).Error; err != nil {
					tx.Rollback()
					c.JSON(http.StatusInternalServerError, gin.H{
						"error": fmt.Sprintf("Gagal insert smt=%d prodi=%s si=%d: %s", smt, prodi.nama, si, err.Error()),
					})
					return
				}

				// Create account — no email sending (direct DB insert only)
				plainPwd := fmt.Sprintf("Stia%04d!", serial)
				nim := fmt.Sprintf("%d%s%03d", angkatan, prodi.kode, serial)
				validAt := now
				acc := models.Account{
					RegistrationID:  reg.ID,
					NIM:             nim,
					Email:           email,
					Password:        hashPassword(plainPwd),
					PlainPassword:   plainPwd,
					IsValidated:     true,
					ValidatedBy:     "bap",
					ValidationToken: generateToken(),
					ValidatedAt:     &validAt,
					CreatedAt:       now,
				}

				if err := tx.Create(&acc).Error; err != nil {
					skipped++
				} else {
					created++
				}
			}
		}
	}

	if err := tx.Commit().Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Commit gagal: " + err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": fmt.Sprintf("✅ Bulk seed selesai! %d mahasiswa berhasil ditambahkan, %d dilewati (duplikat)", created, skipped),
		"created": created,
		"skipped": skipped,
	})
}
