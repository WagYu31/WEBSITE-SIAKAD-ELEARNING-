<?php
// ============================================
// PMB (Pendaftaran Mahasiswa Baru) API Handlers
// Full version — saves ALL form fields + file uploads
// ============================================

function generateNoPendaftaran() {
    $db = getDB();
    $count = $db->query("SELECT COUNT(*) FROM pmb_registrations")->fetchColumn();
    $year = date('Y');
    return sprintf("PMB-%d-%04d", $year, $count + 1);
}

// POST /api/pmb/register
function registerOnline() {
    $db = getDB();
    $input = getJsonBody();

    if (empty($input['nik']) || empty($input['nama'])) {
        jsonResponse(['error' => 'NIK dan Nama wajib diisi'], 400);
    }

    // Check duplicate NIK
    $stmt = $db->prepare('SELECT no_pendaftaran FROM pmb_registrations WHERE nik = ?');
    $stmt->execute([$input['nik']]);
    $existing = $stmt->fetch();
    if ($existing) {
        jsonResponse(['error' => 'NIK sudah terdaftar', 'no_pendaftaran' => $existing['no_pendaftaran']], 409);
    }

    $noPendaftaran = generateNoPendaftaran();

    $stmt = $db->prepare("INSERT INTO pmb_registrations (
        no_pendaftaran, nama, email, phone, nik, tempat_lahir, tanggal_lahir,
        jenis_kelamin, gender, alamat, asal_sekolah, jurusan_pilihan, prodi_pilihan,
        jalur, status,
        nisn, kip, kks, agama, telepon_1, telepon_2,
        provinsi, kota, kecamatan, kelurahan, kode_pos,
        anak_ke, dari_jumlah,
        nama_ayah, nama_ibu, pekerjaan_ayah, pekerjaan_ibu,
        nik_ayah, nik_ibu, no_kk
    ) VALUES (
        ?,?,?,?,?,?,?,
        ?,?,?,?,?,?,
        ?,?,
        ?,?,?,?,?,?,
        ?,?,?,?,?,
        ?,?,
        ?,?,?,?,
        ?,?,?
    )");

    $gender = $input['gender'] ?? $input['jenis_kelamin'] ?? '';
    $prodi = $input['prodi_pilihan'] ?? $input['jurusan_pilihan'] ?? '';

    $stmt->execute([
        $noPendaftaran,
        $input['nama'],
        $input['email'] ?? '',
        $input['telepon_1'] ?? $input['phone'] ?? '',
        $input['nik'],
        $input['tempat_lahir'] ?? '',
        $input['tanggal_lahir'] ?? '',
        $gender,
        $gender,
        $input['alamat'] ?? '',
        $input['asal_sekolah'] ?? '',
        $prodi,
        $prodi,
        'online',
        'Menunggu',
        // Extended fields
        $input['nisn'] ?? '',
        $input['kip'] ?? '',
        $input['kks'] ?? '',
        $input['agama'] ?? '',
        $input['telepon_1'] ?? '',
        $input['telepon_2'] ?? '',
        $input['provinsi'] ?? '',
        $input['kota'] ?? '',
        $input['kecamatan'] ?? '',
        $input['kelurahan'] ?? '',
        $input['kode_pos'] ?? '',
        intval($input['anak_ke'] ?? 0),
        intval($input['dari_jumlah'] ?? 0),
        $input['nama_ayah'] ?? '',
        $input['nama_ibu'] ?? '',
        $input['pekerjaan_ayah'] ?? '',
        $input['pekerjaan_ibu'] ?? '',
        $input['nik_ayah'] ?? '',
        $input['nik_ibu'] ?? '',
        $input['no_kk'] ?? '',
    ]);

    jsonResponse(['message' => 'Pendaftaran berhasil!', 'no_pendaftaran' => $noPendaftaran, 'id' => $db->lastInsertId()], 201);
}

// POST /api/pmb/register/offline
function registerOffline() {
    $db = getDB();
    $input = getJsonBody();

    if (empty($input['nik']) || empty($input['nama'])) {
        jsonResponse(['error' => 'NIK dan Nama wajib diisi'], 400);
    }

    $stmt = $db->prepare('SELECT no_pendaftaran FROM pmb_registrations WHERE nik = ?');
    $stmt->execute([$input['nik']]);
    $existing = $stmt->fetch();
    if ($existing) {
        jsonResponse(['error' => 'NIK sudah terdaftar', 'no_pendaftaran' => $existing['no_pendaftaran']], 409);
    }

    $noPendaftaran = generateNoPendaftaran();
    $gender = $input['gender'] ?? $input['jenis_kelamin'] ?? '';
    $prodi = $input['prodi_pilihan'] ?? $input['jurusan_pilihan'] ?? '';

    $stmt = $db->prepare("INSERT INTO pmb_registrations (
        no_pendaftaran, nama, email, phone, nik, tempat_lahir, tanggal_lahir,
        jenis_kelamin, gender, alamat, asal_sekolah, jurusan_pilihan, prodi_pilihan,
        jalur, status,
        nisn, kip, kks, agama, telepon_1, telepon_2,
        provinsi, kota, kecamatan, kelurahan, kode_pos,
        anak_ke, dari_jumlah,
        nama_ayah, nama_ibu, pekerjaan_ayah, pekerjaan_ibu,
        nik_ayah, nik_ibu, no_kk
    ) VALUES (
        ?,?,?,?,?,?,?,
        ?,?,?,?,?,?,
        ?,?,
        ?,?,?,?,?,?,
        ?,?,?,?,?,
        ?,?,
        ?,?,?,?,
        ?,?,?
    )");

    $stmt->execute([
        $noPendaftaran, $input['nama'], $input['email'] ?? '',
        $input['telepon_1'] ?? $input['phone'] ?? '',
        $input['nik'], $input['tempat_lahir'] ?? '', $input['tanggal_lahir'] ?? '',
        $gender, $gender, $input['alamat'] ?? '', $input['asal_sekolah'] ?? '',
        $prodi, $prodi, 'offline', 'Menunggu',
        $input['nisn'] ?? '', $input['kip'] ?? '', $input['kks'] ?? '',
        $input['agama'] ?? '', $input['telepon_1'] ?? '', $input['telepon_2'] ?? '',
        $input['provinsi'] ?? '', $input['kota'] ?? '', $input['kecamatan'] ?? '',
        $input['kelurahan'] ?? '', $input['kode_pos'] ?? '',
        intval($input['anak_ke'] ?? 0), intval($input['dari_jumlah'] ?? 0),
        $input['nama_ayah'] ?? '', $input['nama_ibu'] ?? '',
        $input['pekerjaan_ayah'] ?? '', $input['pekerjaan_ibu'] ?? '',
        $input['nik_ayah'] ?? '', $input['nik_ibu'] ?? '', $input['no_kk'] ?? '',
    ]);

    jsonResponse(['message' => 'Pendaftaran offline berhasil!', 'no_pendaftaran' => $noPendaftaran, 'id' => $db->lastInsertId()], 201);
}

// POST /api/pmb/registration/:id/upload
function uploadPmbFiles($id) {
    $db = getDB();

    // Verify registration exists
    $stmt = $db->prepare('SELECT id FROM pmb_registrations WHERE id = ?');
    $stmt->execute([$id]);
    if (!$stmt->fetch()) {
        jsonResponse(['error' => 'Pendaftaran tidak ditemukan'], 404);
    }

    // Create uploads directory
    $uploadDir = __DIR__ . '/uploads/pmb/' . $id . '/';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    $fieldMap = [
        'file_ijazah' => 'file_ijazah',
        'file_ktp' => 'file_ktp',
        'file_pasfoto' => 'file_pasfoto',
        'file_rapor' => 'file_rapor',
        'file_surat_sehat' => 'file_surat_sehat',
    ];

    $saved = [];
    $maxSize = 5 * 1024 * 1024; // 5MB
    $allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];

    foreach ($fieldMap as $inputName => $dbColumn) {
        if (!empty($_FILES[$inputName]) && $_FILES[$inputName]['error'] === UPLOAD_ERR_OK) {
            $file = $_FILES[$inputName];

            // Validate size
            if ($file['size'] > $maxSize) {
                continue;
            }

            // Validate type
            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $mimeType = finfo_file($finfo, $file['tmp_name']);
            finfo_close($finfo);
            if (!in_array($mimeType, $allowedTypes)) {
                continue;
            }

            // Generate safe filename
            $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
            $safeName = $dbColumn . '_' . time() . '.' . strtolower($ext);
            $destPath = $uploadDir . $safeName;

            if (move_uploaded_file($file['tmp_name'], $destPath)) {
                // Save relative path to DB
                $relativePath = 'uploads/pmb/' . $id . '/' . $safeName;
                $db->prepare("UPDATE pmb_registrations SET `$dbColumn` = ? WHERE id = ?")->execute([$relativePath, $id]);
                $saved[] = $dbColumn;
            }
        }
    }

    jsonResponse(['message' => 'Upload berhasil', 'saved_files' => $saved, 'total' => count($saved)]);
}

// GET /api/pmb/stats
function getPmbStats() {
    $db = getDB();
    $total = $db->query("SELECT COUNT(*) FROM pmb_registrations")->fetchColumn();
    $proses = $db->query("SELECT COUNT(*) FROM pmb_registrations WHERE status IN ('Menunggu','Proses')")->fetchColumn();
    $diterima = $db->query("SELECT COUNT(*) FROM pmb_registrations WHERE status = 'Diterima'")->fetchColumn();
    $ditolak = $db->query("SELECT COUNT(*) FROM pmb_registrations WHERE status = 'Ditolak'")->fetchColumn();

    jsonResponse(['total_pendaftar' => (int)$total, 'total_proses' => (int)$proses, 'total_diterima' => (int)$diterima, 'total_ditolak' => (int)$ditolak]);
}

// GET /api/pmb/status/:no_pendaftaran
function checkPmbStatus($noPendaftaran) {
    $db = getDB();
    $stmt = $db->prepare('SELECT * FROM pmb_registrations WHERE no_pendaftaran = ?');
    $stmt->execute([$noPendaftaran]);
    $reg = $stmt->fetch();
    if (!$reg) jsonResponse(['error' => 'No. pendaftaran tidak ditemukan'], 404);
    jsonResponse($reg);
}

// GET /api/pmb/registrations
function getRegistrations() {
    $db = getDB();
    $sql = "SELECT * FROM pmb_registrations WHERE 1=1";
    $params = [];

    if (!empty($_GET['status'])) { $sql .= " AND status = ?"; $params[] = $_GET['status']; }
    if (!empty($_GET['search'])) {
        $s = '%' . $_GET['search'] . '%';
        $sql .= " AND (nama LIKE ? OR nik LIKE ? OR no_pendaftaran LIKE ?)";
        $params = array_merge($params, [$s, $s, $s]);
    }
    $sql .= " ORDER BY created_at DESC";

    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    $items = $stmt->fetchAll();
    jsonResponse(['data' => $items, 'total' => count($items)]);
}

// GET /api/pmb/registration/:id
function getRegistration($id) {
    $db = getDB();
    $stmt = $db->prepare('SELECT * FROM pmb_registrations WHERE id = ?');
    $stmt->execute([$id]);
    $reg = $stmt->fetch();
    if (!$reg) jsonResponse(['error' => 'Pendaftaran tidak ditemukan'], 404);
    jsonResponse($reg);
}

// PUT /api/pmb/registration/:id/status
function updatePmbStatus($id) {
    $db = getDB();
    $input = getJsonBody();
    $status = $input['status'] ?? '';
    if (!in_array($status, ['Menunggu','Proses','Diterima','Ditolak'])) {
        jsonResponse(['error' => 'Status tidak valid'], 400);
    }
    $db->prepare('UPDATE pmb_registrations SET status=?, updated_at=NOW() WHERE id=?')->execute([$status, $id]);
    jsonResponse(['message' => 'Status berhasil diupdate', 'status' => $status]);
}

// PUT /api/pmb/registration/:id
function updateRegistration($id) {
    $db = getDB();
    $input = getJsonBody();
    unset($input['id'], $input['no_pendaftaran'], $input['created_at']);

    $sets = []; $vals = [];
    foreach ($input as $key => $val) { $sets[] = "`$key` = ?"; $vals[] = $val; }
    $sets[] = "updated_at = NOW()";
    $vals[] = $id;

    $db->prepare("UPDATE pmb_registrations SET " . implode(', ', $sets) . " WHERE id = ?")->execute($vals);
    jsonResponse(['message' => 'Data berhasil diupdate']);
}

// DELETE /api/pmb/registration/:id
function deleteRegistration($id) {
    $db = getDB();
    // Delete uploaded files
    $uploadDir = __DIR__ . '/uploads/pmb/' . $id . '/';
    if (is_dir($uploadDir)) {
        array_map('unlink', glob($uploadDir . '*'));
        rmdir($uploadDir);
    }
    $db->prepare('DELETE FROM pmb_registrations WHERE id = ?')->execute([$id]);
    jsonResponse(['message' => 'Data pendaftaran berhasil dihapus']);
}
