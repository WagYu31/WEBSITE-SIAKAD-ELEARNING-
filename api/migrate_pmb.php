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

echo json_encode([
    'message' => 'Migration complete',
    'pmb_added' => $added,
    'pmb_total_existing' => count($existing),
    'profiles_added' => $addedProfile,
    'profiles_total_existing' => count($existingProfile),
]);
