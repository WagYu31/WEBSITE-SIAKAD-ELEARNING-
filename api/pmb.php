<?php
// ============================================
// PMB (Pendaftaran Mahasiswa Baru) API Handlers
// Port of Go pmb.go → PHP + MySQL
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
    $stmt = $db->prepare("INSERT INTO pmb_registrations (no_pendaftaran,nama,email,phone,nik,tempat_lahir,tanggal_lahir,jenis_kelamin,alamat,asal_sekolah,jurusan_pilihan,jalur,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
    $stmt->execute([
        $noPendaftaran, $input['nama'], $input['email'] ?? '', $input['phone'] ?? '',
        $input['nik'], $input['tempat_lahir'] ?? '', $input['tanggal_lahir'] ?? '',
        $input['jenis_kelamin'] ?? '', $input['alamat'] ?? '', $input['asal_sekolah'] ?? '',
        $input['jurusan_pilihan'] ?? '', 'online', 'Menunggu'
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
    $stmt = $db->prepare("INSERT INTO pmb_registrations (no_pendaftaran,nama,email,phone,nik,tempat_lahir,tanggal_lahir,jenis_kelamin,alamat,asal_sekolah,jurusan_pilihan,jalur,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
    $stmt->execute([
        $noPendaftaran, $input['nama'], $input['email'] ?? '', $input['phone'] ?? '',
        $input['nik'], $input['tempat_lahir'] ?? '', $input['tanggal_lahir'] ?? '',
        $input['jenis_kelamin'] ?? '', $input['alamat'] ?? '', $input['asal_sekolah'] ?? '',
        $input['jurusan_pilihan'] ?? '', 'offline', 'Menunggu'
    ]);

    jsonResponse(['message' => 'Pendaftaran offline berhasil!', 'no_pendaftaran' => $noPendaftaran, 'id' => $db->lastInsertId()], 201);
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
    foreach ($input as $key => $val) { $sets[] = "$key = ?"; $vals[] = $val; }
    $sets[] = "updated_at = NOW()";
    $vals[] = $id;

    $db->prepare("UPDATE pmb_registrations SET " . implode(', ', $sets) . " WHERE id = ?")->execute($vals);
    jsonResponse(['message' => 'Data berhasil diupdate']);
}

// DELETE /api/pmb/registration/:id
function deleteRegistration($id) {
    $db = getDB();
    $db->prepare('DELETE FROM pmb_registrations WHERE id = ?')->execute([$id]);
    jsonResponse(['message' => 'Data pendaftaran berhasil dihapus']);
}
