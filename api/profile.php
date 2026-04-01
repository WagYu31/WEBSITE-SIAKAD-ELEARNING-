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
