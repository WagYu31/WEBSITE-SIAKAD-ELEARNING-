<?php
// ============================================
// PMB Account API — Buat Akun & Validasi Mahasiswa
// ============================================

// Generate NIM: [tahun][prodi_code][urut]
function generateNIM($db, $prodiPilihan) {
    $year = date('Y');

    // Prodi code mapping
    $prodiCodes = [
        'S1 Administrasi Negara' => '101',
        'Administrasi Negara'    => '101',
        'S1 Administrasi Niaga'  => '102',
        'Administrasi Niaga'     => '102',
        'S2 Administrasi Negara' => '201',
        'D3 Ilmu Administrasi'   => '301',
    ];

    $code = $prodiCodes[$prodiPilihan] ?? '101';
    $prefix = $year . $code;

    // Count existing accounts with same prefix
    $stmt = $db->prepare("SELECT COUNT(*) FROM pmb_accounts WHERE nim LIKE ?");
    $stmt->execute([$prefix . '%']);
    $count = (int)$stmt->fetchColumn();

    return sprintf('%s%03d', $prefix, $count + 1);
}

// Generate random password (8 chars)
function generatePassword() {
    $chars = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789';
    $password = '';
    for ($i = 0; $i < 8; $i++) {
        $password .= $chars[random_int(0, strlen($chars) - 1)];
    }
    return $password;
}

// POST /api/pmb/account/create
function bapCreateAccount() {
    $db = getDB();
    $input = getJsonBody();

    $regId = intval($input['registration_id'] ?? 0);
    if ($regId <= 0) {
        jsonResponse(['error' => 'registration_id wajib diisi'], 400);
    }

    // Check registration exists
    $stmt = $db->prepare('SELECT * FROM pmb_registrations WHERE id = ?');
    $stmt->execute([$regId]);
    $reg = $stmt->fetch();
    if (!$reg) {
        jsonResponse(['error' => 'Pendaftaran tidak ditemukan'], 404);
    }

    // CHECK: Payment must be paid first (ALWAYS check, even for existing accounts)
    $stmt = $db->prepare('SELECT * FROM pmb_payments WHERE registration_id = ? ORDER BY created_at DESC LIMIT 1');
    $stmt->execute([$regId]);
    $payment = $stmt->fetch();

    if (!$payment || $payment['status'] !== 'paid') {
        jsonResponse(['error' => '❌ Pembayaran belum lunas!\n\nUrutan yang benar:\n① Bayar dulu\n② Baru buat akun\n③ Kemudian validasi'], 400);
    }

    // Check if account already exists
    $stmt = $db->prepare('SELECT * FROM pmb_accounts WHERE registration_id = ?');
    $stmt->execute([$regId]);
    $existing = $stmt->fetch();

    if ($existing) {
        jsonResponse([
            'message' => 'Akun sudah dibuat sebelumnya',
            'nim' => $existing['nim'],
            'email' => $existing['email'],
        ]);
    }

    // Generate NIM and password
    $prodi = $reg['prodi_pilihan'] ?? $reg['jurusan_pilihan'] ?? '';
    $nim = generateNIM($db, $prodi);
    $plainPwd = generatePassword();
    $hashedPwd = password_hash($plainPwd, PASSWORD_DEFAULT);
    $email = $reg['email'] ?? '';

    // Create account
    $stmt = $db->prepare('INSERT INTO pmb_accounts (registration_id, nim, email, password_hash, plain_password) VALUES (?, ?, ?, ?, ?)');
    $stmt->execute([$regId, $nim, $email, $hashedPwd, $plainPwd]);

    // Also create/update profile
    $stmt = $db->prepare('INSERT INTO profiles (nim, nama, email, phone, prodi, password) VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE nama=VALUES(nama), email=VALUES(email)');
    $stmt->execute([
        $nim,
        $reg['nama'] ?? '',
        $email,
        $reg['telepon_1'] ?? $reg['phone'] ?? '',
        $prodi,
        $hashedPwd,
    ]);

    jsonResponse([
        'message' => '✅ Akun berhasil dibuat!',
        'nim' => $nim,
        'password' => $plainPwd,
        'email' => $email,
    ], 201);
}

// GET /api/pmb/account/:registration_id
function getAccountByRegistration($regId) {
    $db = getDB();
    $stmt = $db->prepare('SELECT id, registration_id, nim, email, is_validated, validated_by, validated_at, created_at FROM pmb_accounts WHERE registration_id = ?');
    $stmt->execute([$regId]);
    $account = $stmt->fetch();

    if (!$account) {
        jsonResponse(['error' => 'Akun belum dibuat'], 404);
    }

    $account['id'] = (int)$account['id'];
    $account['registration_id'] = (int)$account['registration_id'];
    $account['is_validated'] = (bool)$account['is_validated'];
    jsonResponse($account);
}

// PUT /api/pmb/account/:id/validate
function validateAccountByBAP($regId) {
    $db = getDB();

    // CHECK: Payment must be paid first
    $stmt = $db->prepare('SELECT * FROM pmb_payments WHERE registration_id = ? ORDER BY created_at DESC LIMIT 1');
    $stmt->execute([$regId]);
    $payment = $stmt->fetch();

    if (!$payment || $payment['status'] !== 'paid') {
        jsonResponse(['error' => '❌ Pembayaran belum lunas!\n\nUrutan: ① Bayar → ② Buat Akun → ③ Validasi'], 400);
    }

    // Find account by registration_id
    $stmt = $db->prepare('SELECT * FROM pmb_accounts WHERE registration_id = ?');
    $stmt->execute([$regId]);
    $account = $stmt->fetch();

    if (!$account) {
        jsonResponse(['error' => '❌ Akun belum dibuat!\n\nUrutan: ① Bayar → ② Buat Akun → ③ Validasi'], 404);
    }

    if ($account['is_validated']) {
        jsonResponse(['message' => 'ℹ️ Akun sudah divalidasi sebelumnya', 'nim' => $account['nim']]);
    }

    // Validate
    $db->prepare('UPDATE pmb_accounts SET is_validated = 1, validated_by = ?, validated_at = NOW() WHERE id = ?')
       ->execute(['bap', $account['id']]);

    // Update registration status to "diterima"
    $db->prepare('UPDATE pmb_registrations SET status = ?, updated_at = NOW() WHERE id = ?')
       ->execute(['Diterima', $regId]);

    jsonResponse([
        'message' => '✅ Akun berhasil divalidasi oleh BAP!',
        'nim' => $account['nim'],
    ]);
}

// GET /api/pmb/validate/:token (email validation — placeholder)
function validateAccountByEmail($token) {
    jsonResponse(['message' => 'Email validation not yet implemented', 'token' => $token]);
}
