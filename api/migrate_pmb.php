<?php
// Migration: Add missing PMB fields + file upload columns
require_once __DIR__ . '/config.php';

$db = getDB();

$columns = [
    // Data Pribadi
    'nisn' => 'VARCHAR(20) DEFAULT NULL',
    'kip' => 'VARCHAR(30) DEFAULT NULL',
    'kks' => 'VARCHAR(30) DEFAULT NULL',
    'agama' => 'VARCHAR(20) DEFAULT NULL',
    'telepon_1' => 'VARCHAR(15) DEFAULT NULL',
    'telepon_2' => 'VARCHAR(15) DEFAULT NULL',
    'gender' => 'VARCHAR(15) DEFAULT NULL',
    'prodi_pilihan' => 'VARCHAR(100) DEFAULT NULL',

    // Alamat
    'provinsi' => 'VARCHAR(50) DEFAULT NULL',
    'kota' => 'VARCHAR(50) DEFAULT NULL',
    'kecamatan' => 'VARCHAR(50) DEFAULT NULL',
    'kelurahan' => 'VARCHAR(50) DEFAULT NULL',
    'kode_pos' => 'VARCHAR(10) DEFAULT NULL',

    // Orang Tua
    'anak_ke' => 'INT DEFAULT 0',
    'dari_jumlah' => 'INT DEFAULT 0',
    'nama_ayah' => 'VARCHAR(100) DEFAULT NULL',
    'nama_ibu' => 'VARCHAR(100) DEFAULT NULL',
    'pekerjaan_ayah' => 'VARCHAR(50) DEFAULT NULL',
    'pekerjaan_ibu' => 'VARCHAR(50) DEFAULT NULL',
    'nik_ayah' => 'VARCHAR(20) DEFAULT NULL',
    'nik_ibu' => 'VARCHAR(20) DEFAULT NULL',
    'no_kk' => 'VARCHAR(20) DEFAULT NULL',

    // File Uploads (store filename/path)
    'file_ijazah' => 'VARCHAR(255) DEFAULT NULL',
    'file_ktp' => 'VARCHAR(255) DEFAULT NULL',
    'file_pasfoto' => 'VARCHAR(255) DEFAULT NULL',
    'file_rapor' => 'VARCHAR(255) DEFAULT NULL',
    'file_surat_sehat' => 'VARCHAR(255) DEFAULT NULL',
];

// Get existing columns
$existing = [];
$result = $db->query("SHOW COLUMNS FROM pmb_registrations");
while ($row = $result->fetch()) {
    $existing[] = $row['Field'];
}

$added = [];
foreach ($columns as $name => $type) {
    if (!in_array($name, $existing)) {
        try {
            $db->exec("ALTER TABLE pmb_registrations ADD COLUMN `$name` $type");
            $added[] = $name;
        } catch (Exception $e) {
            echo "Skip $name: " . $e->getMessage() . "\n";
        }
    }
}

header('Content-Type: application/json');

// ---- Also migrate profiles table ----
$profileCols = [
    'file_ijazah' => 'VARCHAR(255) DEFAULT NULL',
    'file_ktp' => 'VARCHAR(255) DEFAULT NULL',
    'file_pasfoto' => 'VARCHAR(255) DEFAULT NULL',
    'file_rapor' => 'VARCHAR(255) DEFAULT NULL',
    'file_surat_sehat' => 'VARCHAR(255) DEFAULT NULL',
];

$existingProfile = [];
$result2 = $db->query("SHOW COLUMNS FROM profiles");
while ($row2 = $result2->fetch()) {
    $existingProfile[] = $row2['Field'];
}

$addedProfile = [];
foreach ($profileCols as $name => $type) {
    if (!in_array($name, $existingProfile)) {
        try {
            $db->exec("ALTER TABLE profiles ADD COLUMN `$name` $type");
            $addedProfile[] = $name;
        } catch (Exception $e) {
            // skip
        }
    }
}

// ---- Create pmb_payments table ----
try {
    $db->exec("CREATE TABLE IF NOT EXISTS pmb_payments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        registration_id INT NOT NULL,
        order_id VARCHAR(50) NOT NULL UNIQUE,
        metode_bayar VARCHAR(15) NOT NULL DEFAULT 'online',
        jumlah DOUBLE NOT NULL DEFAULT 350000,
        status VARCHAR(15) NOT NULL DEFAULT 'pending',
        snap_token VARCHAR(255) DEFAULT NULL,
        snap_url VARCHAR(500) DEFAULT NULL,
        payment_type VARCHAR(50) DEFAULT NULL,
        transaction_id VARCHAR(100) DEFAULT NULL,
        paid_at TIMESTAMP NULL DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_reg (registration_id),
        INDEX idx_order (order_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    $paymentTableCreated = true;
} catch (Exception $e) {
    $paymentTableCreated = $e->getMessage();
}

// ---- Create pmb_accounts table ----
try {
    $db->exec("CREATE TABLE IF NOT EXISTS pmb_accounts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        registration_id INT NOT NULL UNIQUE,
        nim VARCHAR(20) NOT NULL UNIQUE,
        email VARCHAR(100) DEFAULT '',
        password_hash VARCHAR(255) NOT NULL,
        plain_password VARCHAR(50) DEFAULT NULL,
        is_validated TINYINT(1) NOT NULL DEFAULT 0,
        validated_by VARCHAR(10) DEFAULT NULL,
        validated_at TIMESTAMP NULL DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    $accountTableCreated = true;
} catch (Exception $e) {
    $accountTableCreated = $e->getMessage();
}

// ---- Create semester_payments table ----
try {
    $db->exec("CREATE TABLE IF NOT EXISTS semester_payments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nim VARCHAR(20) NOT NULL,
        semester INT NOT NULL,
        tahun_akademik VARCHAR(15) NOT NULL DEFAULT '2026/2027',
        jenis VARCHAR(50) NOT NULL DEFAULT 'SPP',
        jumlah DOUBLE NOT NULL DEFAULT 0,
        status VARCHAR(15) NOT NULL DEFAULT 'pending',
        metode_bayar VARCHAR(20) DEFAULT NULL,
        keterangan TEXT DEFAULT NULL,
        paid_at TIMESTAMP NULL DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_nim (nim),
        INDEX idx_semester (semester)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    $semesterPaymentsCreated = true;
} catch (Exception $e) {
    $semesterPaymentsCreated = $e->getMessage();
}

echo json_encode([
    'message' => 'Migration complete',
    'pmb_added' => $added,
    'pmb_total_existing' => count($existing),
    'profiles_added' => $addedProfile,
    'profiles_total_existing' => count($existingProfile),
    'pmb_payments_table' => $paymentTableCreated,
    'pmb_accounts_table' => $accountTableCreated,
    'semester_payments_table' => $semesterPaymentsCreated ?? false,
]);
