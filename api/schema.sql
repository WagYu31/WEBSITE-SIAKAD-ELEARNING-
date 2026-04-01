-- ============================================
-- STIA Bayuangga — Complete MySQL Database Schema
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
    tahun_ajaran VARCHAR(15) NOT NULL DEFAULT '',
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

CREATE TABLE IF NOT EXISTS nilai (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nim VARCHAR(20) NOT NULL,
    mata_kuliah_id INT NOT NULL,
    semester INT NOT NULL,
    nilai VARCHAR(5) DEFAULT '',
    bobot DOUBLE DEFAULT 0,
    kelas VARCHAR(10) DEFAULT '',
    INDEX idx_nim (nim),
    UNIQUE KEY uq_nim_mk (nim, mata_kuliah_id),
    FOREIGN KEY (mata_kuliah_id) REFERENCES mata_kuliah(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS absensi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    krs_id INT NOT NULL,
    nim VARCHAR(20) NOT NULL,
    pertemuan INT NOT NULL,
    status VARCHAR(5) DEFAULT 'H',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_nim (nim),
    UNIQUE KEY uq_krs_pertemuan (krs_id, pertemuan),
    FOREIGN KEY (krs_id) REFERENCES krs(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS jadwal_ujian (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mata_kuliah_id INT NOT NULL,
    tanggal VARCHAR(50) DEFAULT '',
    mulai VARCHAR(10) DEFAULT '',
    selesai VARCHAR(10) DEFAULT '',
    sesi VARCHAR(10) DEFAULT '',
    jenis VARCHAR(5) DEFAULT 'UTS',
    kelompok INT DEFAULT 0,
    FOREIGN KEY (mata_kuliah_id) REFERENCES mata_kuliah(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS dosen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nip VARCHAR(30) NOT NULL UNIQUE,
    nidn VARCHAR(20) DEFAULT '',
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) DEFAULT '',
    telepon VARCHAR(20) DEFAULT '',
    prodi VARCHAR(50) DEFAULT '',
    jabatan_fungsional VARCHAR(50) DEFAULT '',
    jabatan_struktural VARCHAR(100) DEFAULT '',
    golongan VARCHAR(10) DEFAULT '',
    pendidikan VARCHAR(200) DEFAULT '',
    bidang_keahlian VARCHAR(500) DEFAULT '',
    avatar_url VARCHAR(255) DEFAULT '',
    status VARCHAR(15) DEFAULT 'Aktif',
    username VARCHAR(50) DEFAULT '' UNIQUE,
    password VARCHAR(255) DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nim VARCHAR(20) NOT NULL UNIQUE,
    nama VARCHAR(100) DEFAULT '',
    email VARCHAR(100) DEFAULT '',
    phone VARCHAR(20) DEFAULT '',
    alamat TEXT,
    avatar VARCHAR(200) DEFAULT '',
    prodi VARCHAR(50) DEFAULT '',
    password VARCHAR(255) DEFAULT '',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS pmb_registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    no_pendaftaran VARCHAR(20) NOT NULL UNIQUE,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) DEFAULT '',
    phone VARCHAR(20) DEFAULT '',
    nik VARCHAR(20) DEFAULT '',
    tempat_lahir VARCHAR(50) DEFAULT '',
    tanggal_lahir VARCHAR(15) DEFAULT '',
    jenis_kelamin VARCHAR(10) DEFAULT '',
    alamat TEXT,
    asal_sekolah VARCHAR(100) DEFAULT '',
    jurusan_pilihan VARCHAR(50) DEFAULT '',
    jalur VARCHAR(20) DEFAULT 'online',
    status VARCHAR(20) DEFAULT 'Menunggu',
    catatan TEXT,
    dokumen TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
