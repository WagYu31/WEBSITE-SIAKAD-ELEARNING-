<?php
// ============================================
// Auth API — Login untuk semua role
// ============================================

// POST /api/auth/login
// Body: { role, identifier, password }
function authLogin() {
    $db = getDB();
    $input = getJsonBody();

    $role       = $input['role']       ?? '';
    $identifier = trim($input['identifier'] ?? $input['nim'] ?? $input['nip'] ?? '');
    $password   = $input['password']   ?? '';

    if (!$identifier || !$password) {
        jsonResponse(['error' => 'NIM/NIP dan password wajib diisi'], 400);
        return;
    }

    switch ($role) {
        case 'mahasiswa':
            loginMahasiswa($db, $identifier, $password);
            break;
        case 'dosen':
            loginDosenByNIP($db, $identifier, $password);
            break;
        case 'bap':
        case 'kaprodi':
            loginStaff($db, $role, $identifier, $password);
            break;
        default:
            jsonResponse(['error' => 'Role tidak valid'], 400);
    }
}

// ============ MAHASISWA ============
function loginMahasiswa($db, $nim, $password) {
    // Cek di pmb_accounts berdasarkan NIM
    $stmt = $db->prepare('
        SELECT a.*, r.nama, r.prodi_pilihan, r.status, r.alamat,
               r.tempat_lahir, r.tanggal_lahir, r.gender, r.agama,
               r.telepon_1, r.email AS reg_email, r.id AS reg_id
        FROM pmb_accounts a
        JOIN pmb_registrations r ON r.id = a.registration_id
        WHERE a.nim = ?
        LIMIT 1
    ');
    $stmt->execute([$nim]);
    $acc = $stmt->fetch();

    if (!$acc) {
        jsonResponse(['error' => 'NIM tidak ditemukan atau akun belum dibuat'], 401);
        return;
    }

    // Verify password
    if (!password_verify($password, $acc['password_hash'])) {
        jsonResponse(['error' => 'Password salah'], 401);
        return;
    }

    if (!$acc['is_validated']) {
        jsonResponse(['error' => 'Akun belum divalidasi oleh BAP. Hubungi bagian akademik.'], 403);
        return;
    }

    jsonResponse([
        'success'  => true,
        'role'     => 'mahasiswa',
        'id'       => (int)$acc['reg_id'],
        'nim'      => $acc['nim'],
        'nama'     => $acc['nama'],
        'email'    => $acc['email'] ?: $acc['reg_email'],
        'prodi'    => $acc['prodi_pilihan'],
        'angkatan' => substr($acc['nim'], 0, 4),
        'semester' => 1,
        'avatar'   => null,
    ]);
}

// ============ DOSEN ============
function loginDosenByNIP($db, $nip, $password) {
    // Try NIP first, then username as fallback
    $stmt = $db->prepare('SELECT * FROM dosen WHERE nip = ? OR username = ? LIMIT 1');
    $stmt->execute([$nip, $nip]);
    $dosen = $stmt->fetch();

    if (!$dosen) {
        jsonResponse(['error' => 'NIP tidak ditemukan'], 401);
        return;
    }

    // Check password — support bcrypt, sha256 (seed.php), and plain text
    $valid = false;
    $storedPwd = $dosen['password_hash'] ?? $dosen['password'] ?? '';

    if ($storedPwd) {
        // 1. bcrypt (password_hash)
        if (password_verify($password, $storedPwd)) {
            $valid = true;
        }
        // 2. sha256 (used by seed.php: hash('sha256', $password))
        elseif (hash('sha256', $password) === $storedPwd) {
            $valid = true;
        }
        // 3. plain text fallback
        elseif ($password === $storedPwd) {
            $valid = true;
        }
    }

    if (!$valid) {
        jsonResponse(['error' => 'Password salah'], 401);
        return;
    }

    jsonResponse([
        'success'      => true,
        'role'         => 'dosen',
        'id'           => (int)$dosen['id'],
        'nip'          => $dosen['nip'],
        'nama'         => $dosen['nama'],
        'email'        => $dosen['email'] ?? '',
        'jabatan'      => $dosen['jabatan_fungsional'] ?? '',
        'prodi'        => $dosen['prodi'] ?? '',
        'avatar'       => null,
    ]);
}

// ============ STAFF (BAP / KAPRODI) ============
function loginStaff($db, $role, $nip, $password) {
    // Hardcoded staff accounts (extend via staff table later)
    $hardcoded = [
        'bap' => [
            '198203202008012001' => [
                'password'  => 'bap123',
                'nama'      => 'Hj. Dwi Rahmawati, S.AP., M.AP.',
                'email'     => 'dwi.rahmawati@stiabayuangga.ac.id',
                'jabatan'   => 'Kepala BAP',
            ],
        ],
        'kaprodi' => [
            '197809152005011001' => [
                'password'  => 'kaprodi123',
                'nama'      => 'Prof. Dr. Sri Wahyuni, M.AP.',
                'email'     => 'sri.wahyuni@stiabayuangga.ac.id',
                'jabatan'   => 'Ketua Program Studi',
                'prodi'     => 'Administrasi Negara',
            ],
        ],
    ];

    $accounts = $hardcoded[$role] ?? [];
    $account  = $accounts[$nip] ?? null;

    if ($account && $account['password'] === $password) {
        jsonResponse([
            'success' => true,
            'role'    => $role,
            'id'      => $nip,
            'nip'     => $nip,
            'nama'    => $account['nama'],
            'email'   => $account['email'],
            'jabatan' => $account['jabatan'],
            'prodi'   => $account['prodi'] ?? null,
            'avatar'  => null,
        ]);
        return;
    }

    // Fallback: check staff table in DB
    try {
        $stmt = $db->prepare('SELECT * FROM staff WHERE nip = ? AND role = ? LIMIT 1');
        $stmt->execute([$nip, $role]);
        $staff = $stmt->fetch();

        if (!$staff) {
            jsonResponse(['error' => 'Akun tidak ditemukan'], 401);
            return;
        }

        $valid = false;
        if (!empty($staff['password_hash'])) {
            $valid = password_verify($password, $staff['password_hash']);
        } elseif (!empty($staff['password'])) {
            $valid = ($password === $staff['password']);
        }

        if (!$valid) {
            jsonResponse(['error' => 'Password salah'], 401);
            return;
        }

        jsonResponse([
            'success' => true,
            'role'    => $role,
            'id'      => (int)$staff['id'],
            'nip'     => $staff['nip'],
            'nama'    => $staff['nama'],
            'email'   => $staff['email'] ?? '',
            'avatar'  => null,
        ]);
    } catch (Exception $e) {
        jsonResponse(['error' => 'Akun tidak ditemukan'], 401);
    }
}
