<?php
// ============================================
// Profile API Handlers
// Port of Go profile.go → PHP + MySQL
// ============================================

// GET /api/profile/:nim
function getProfile($nim) {
    $db = getDB();
    $stmt = $db->prepare('SELECT * FROM profiles WHERE nim = ?');
    $stmt->execute([$nim]);
    $profile = $stmt->fetch();
    if (!$profile) jsonResponse(['error' => 'Profil tidak ditemukan'], 404);
    jsonResponse($profile);
}

// PUT /api/profile/:nim
function updateProfile($nim) {
    $db = getDB();
    $input = getJsonBody();

    // Check exists
    $stmt = $db->prepare('SELECT id FROM profiles WHERE nim = ?');
    $stmt->execute([$nim]);
    $existing = $stmt->fetch();

    if ($existing) {
        $sets = []; $vals = [];
        foreach ($input as $key => $val) {
            if ($key === 'nim' || $key === 'id') continue;
            $sets[] = "$key = ?"; $vals[] = $val;
        }
        $sets[] = "updated_at = NOW()";
        $vals[] = $nim;
        $db->prepare("UPDATE profiles SET " . implode(', ', $sets) . " WHERE nim = ?")->execute($vals);
    } else {
        $db->prepare('INSERT INTO profiles (nim,nama,email,phone,alamat,prodi) VALUES (?,?,?,?,?,?)')->execute([
            $nim, $input['nama'] ?? '', $input['email'] ?? '', $input['phone'] ?? '', $input['alamat'] ?? '', $input['prodi'] ?? ''
        ]);
    }

    jsonResponse(['message' => '✅ Profil berhasil diperbarui']);
}

// POST /api/profile/:nim/avatar
function uploadAvatar($nim) {
    if (!isset($_FILES['avatar'])) {
        jsonResponse(['error' => 'File foto diperlukan'], 400);
    }

    $file = $_FILES['avatar'];
    if ($file['size'] > 2 * 1024 * 1024) {
        jsonResponse(['error' => 'Ukuran foto maksimal 2MB'], 400);
    }

    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!in_array($ext, ['jpg', 'jpeg', 'png', 'webp'])) {
        jsonResponse(['error' => 'Format foto tidak valid (JPG/PNG/WebP)'], 400);
    }

    $uploadDir = __DIR__ . '/../uploads/avatars/';
    if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

    $filename = $nim . '.' . $ext;
    $dst = $uploadDir . $filename;

    if (!move_uploaded_file($file['tmp_name'], $dst)) {
        jsonResponse(['error' => 'Gagal menyimpan foto'], 500);
    }

    $avatarURL = '/uploads/avatars/' . $filename;
    $db = getDB();
    $stmt = $db->prepare('SELECT id FROM profiles WHERE nim = ?');
    $stmt->execute([$nim]);
    if ($stmt->fetch()) {
        $db->prepare('UPDATE profiles SET avatar=?, updated_at=NOW() WHERE nim=?')->execute([$avatarURL, $nim]);
    } else {
        $db->prepare('INSERT INTO profiles (nim, avatar) VALUES (?,?)')->execute([$nim, $avatarURL]);
    }

    jsonResponse(['message' => '✅ Foto profil berhasil diperbarui', 'avatar_url' => $avatarURL]);
}

// PUT /api/profile/:nim/password
function changePassword($nim) {
    $db = getDB();
    $input = getJsonBody();

    $stmt = $db->prepare('SELECT password FROM profiles WHERE nim = ?');
    $stmt->execute([$nim]);
    $profile = $stmt->fetch();
    if (!$profile) jsonResponse(['error' => 'Akun tidak ditemukan'], 404);

    $oldHash = hash('sha256', $input['old_password'] ?? '');
    if ($oldHash !== $profile['password']) {
        jsonResponse(['error' => 'Password lama tidak sesuai'], 401);
    }

    if (($input['new_password'] ?? '') !== ($input['confirm_password'] ?? '')) {
        jsonResponse(['error' => 'Konfirmasi password tidak cocok'], 400);
    }

    $newHash = hash('sha256', $input['new_password']);
    $db->prepare('UPDATE profiles SET password=?, updated_at=NOW() WHERE nim=?')->execute([$newHash, $nim]);

    jsonResponse(['message' => '✅ Password berhasil diubah']);
}

// POST /api/profile/:nim/documents
function uploadDocuments($nim) {
    $db = getDB();

    // Verify profile exists
    $stmt = $db->prepare('SELECT id FROM profiles WHERE nim = ?');
    $stmt->execute([$nim]);
    if (!$stmt->fetch()) {
        jsonResponse(['error' => 'Profil tidak ditemukan'], 404);
    }

    // Create uploads directory
    $uploadDir = __DIR__ . '/../uploads/documents/' . $nim . '/';
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
                $relativePath = 'uploads/documents/' . $nim . '/' . $safeName;
                $db->prepare("UPDATE profiles SET `$dbColumn` = ?, updated_at = NOW() WHERE nim = ?")->execute([$relativePath, $nim]);
                $saved[] = $dbColumn;
            }
        }
    }

    jsonResponse(['message' => '✅ Dokumen berhasil diupload', 'saved_files' => $saved, 'total' => count($saved)]);
}
