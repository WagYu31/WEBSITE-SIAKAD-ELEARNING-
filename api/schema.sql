-- ============================================
-- STIA Bayuangga — MySQL Database Schema
-- Untuk hosting stiabayuanggajobs.online
-- ============================================

CREATE TABLE IF NOT EXISTS mata_kuliah (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kode VARCHAR(15) NOT NULL UNIQUE,
    nama VARCHAR(100) NOT NULL,
    sks INT NOT NULL DEFAULT 3,
    semester INT DEFAULT 0,
    prodi VARCHAR(50) DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS jadwal_pertemuan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mata_kuliah_id INT NOT NULL,
    kode_mk VARCHAR(15) DEFAULT '',
    kelas VARCHAR(5) DEFAULT 'A',
    pertemuan INT NOT NULL,
    tanggal VARCHAR(10) DEFAULT '',
    tanggal_asli VARCHAR(10) DEFAULT '',
    jam_mulai VARCHAR(5) DEFAULT '',
    jam_selesai VARCHAR(5) DEFAULT '',
    mode VARCHAR(10) DEFAULT 'offline',
    catatan VARCHAR(200) DEFAULT '',
    updated_by VARCHAR(100) DEFAULT '',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_mk_kelas_pertemuan (mata_kuliah_id, kelas, pertemuan),
    FOREIGN KEY (mata_kuliah_id) REFERENCES mata_kuliah(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS krs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nim VARCHAR(20) NOT NULL,
    semester INT NOT NULL,
    tahun_ajaran VARCHAR(15) NOT NULL,
    mata_kuliah_id INT NOT NULL,
    kelas VARCHAR(5) DEFAULT '',
    seksi VARCHAR(10) DEFAULT '',
    dosen_nama VARCHAR(100) DEFAULT '',
    waktu VARCHAR(50) DEFAULT '',
    ruang VARCHAR(20) DEFAULT '',
    jenis_kelas VARCHAR(20) DEFAULT 'Reguler',
    status VARCHAR(15) DEFAULT 'Disetujui',
    disetujui_oleh VARCHAR(100) DEFAULT '',
    disetujui_pada VARCHAR(50) DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_nim (nim),
    FOREIGN KEY (mata_kuliah_id) REFERENCES mata_kuliah(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
