<?php
// ============================================
// Semester Payments API
// ============================================

require_once __DIR__ . '/config.php';

// GET /api/semester-payments — Get all semester payments (BAP)
function getAllSemesterPayments() {
    $db = getDB();
    $stmt = $db->query('SELECT sp.*, 
        (SELECT nama FROM pmb_registrations r JOIN pmb_accounts a ON r.id = a.registration_id WHERE a.nim = sp.nim LIMIT 1) as nama_mahasiswa
        FROM semester_payments sp ORDER BY sp.created_at DESC');
    $payments = $stmt->fetchAll();
    jsonResponse($payments);
}

// GET /api/semester-payments/{nim} — Get semester payments by NIM
function getSemesterPaymentsByNim($nim) {
    $db = getDB();
    $stmt = $db->prepare('SELECT * FROM semester_payments WHERE nim = ? ORDER BY semester ASC');
    $stmt->execute([$nim]);
    jsonResponse($stmt->fetchAll());
}

// POST /api/semester-payments — Create semester payment (BAP)
function createSemesterPayment() {
    $db = getDB();
    $input = getJsonBody();
    
    $nim = $input['nim'] ?? '';
    $semester = intval($input['semester'] ?? 0);
    $tahunAkademik = $input['tahun_akademik'] ?? '2026/2027';
    $jenis = $input['jenis'] ?? 'SPP';
    $jumlah = floatval($input['jumlah'] ?? 0);
    $status = $input['status'] ?? 'pending';
    $metodeBayar = $input['metode_bayar'] ?? null;
    $keterangan = $input['keterangan'] ?? null;
    
    if (!$nim || $semester <= 0 || $jumlah <= 0) {
        jsonResponse(['error' => 'NIM, semester, dan jumlah wajib diisi'], 400);
    }
    
    // Check duplicate
    $stmt = $db->prepare('SELECT id FROM semester_payments WHERE nim = ? AND semester = ? AND jenis = ? AND tahun_akademik = ?');
    $stmt->execute([$nim, $semester, $jenis, $tahunAkademik]);
    if ($stmt->fetch()) {
        jsonResponse(['error' => 'Pembayaran untuk semester ini sudah ada'], 409);
    }
    
    $stmt = $db->prepare('INSERT INTO semester_payments (nim, semester, tahun_akademik, jenis, jumlah, status, metode_bayar, keterangan, paid_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
    $paidAt = $status === 'paid' ? date('Y-m-d H:i:s') : null;
    $stmt->execute([$nim, $semester, $tahunAkademik, $jenis, $jumlah, $status, $metodeBayar, $keterangan, $paidAt]);
    
    jsonResponse([
        'message' => 'Pembayaran semester berhasil ditambahkan',
        'id' => (int)$db->lastInsertId(),
    ]);
}

// PUT /api/semester-payments/{id} — Update semester payment (BAP)
function updateSemesterPayment($id) {
    $db = getDB();
    $input = getJsonBody();
    
    $status = $input['status'] ?? null;
    $metodeBayar = $input['metode_bayar'] ?? null;
    $keterangan = $input['keterangan'] ?? null;
    $jumlah = isset($input['jumlah']) ? floatval($input['jumlah']) : null;
    
    $sets = [];
    $params = [];
    
    if ($status !== null) {
        $sets[] = 'status = ?';
        $params[] = $status;
        if ($status === 'paid') {
            $sets[] = 'paid_at = NOW()';
        }
    }
    if ($metodeBayar !== null) { $sets[] = 'metode_bayar = ?'; $params[] = $metodeBayar; }
    if ($keterangan !== null) { $sets[] = 'keterangan = ?'; $params[] = $keterangan; }
    if ($jumlah !== null) { $sets[] = 'jumlah = ?'; $params[] = $jumlah; }
    
    if (empty($sets)) {
        jsonResponse(['error' => 'Tidak ada data yang diupdate'], 400);
    }
    
    $params[] = $id;
    $sql = 'UPDATE semester_payments SET ' . implode(', ', $sets) . ' WHERE id = ?';
    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    
    jsonResponse(['message' => 'Pembayaran semester berhasil diupdate']);
}

// DELETE /api/semester-payments/{id}
function deleteSemesterPayment($id) {
    $db = getDB();
    $stmt = $db->prepare('DELETE FROM semester_payments WHERE id = ?');
    $stmt->execute([$id]);
    jsonResponse(['message' => 'Pembayaran semester berhasil dihapus']);
}
