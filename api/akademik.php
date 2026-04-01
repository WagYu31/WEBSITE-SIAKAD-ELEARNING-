<?php
// ============================================
// Akademik API Handlers (KRS, KHS, Jadwal, Ujian)
// Port of Go akademik.go → PHP + MySQL
// ============================================

/**
 * GET /api/akademik/krs/:nim
 */
function getKRS($nim) {
    $db = getDB();
    $semester = $_GET['semester'] ?? '';

    $sql = "SELECT k.*, mk.kode as mk_kode, mk.nama as mk_nama, mk.sks as mk_sks, mk.semester as mk_semester
            FROM krs k LEFT JOIN mata_kuliah mk ON k.mata_kuliah_id = mk.id
            WHERE k.nim = ?";
    $params = [$nim];

    if ($semester) {
        $sql .= " AND k.semester = ?";
        $params[] = $semester;
    }
    $sql .= " ORDER BY k.id ASC";

    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    $items = $stmt->fetchAll();

    $totalSks = 0;
    $formatted = array_map(function($row) use (&$totalSks) {
        $sks = (int)($row['mk_sks'] ?? 0);
        $totalSks += $sks;
        return [
            'id' => (int)$row['id'], 'nim' => $row['nim'], 'semester' => (int)$row['semester'],
            'tahun_ajaran' => $row['tahun_ajaran'], 'mata_kuliah_id' => (int)$row['mata_kuliah_id'],
            'kelas' => $row['kelas'], 'seksi' => $row['seksi'], 'dosen_nama' => $row['dosen_nama'],
            'waktu' => $row['waktu'], 'ruang' => $row['ruang'], 'jenis_kelas' => $row['jenis_kelas'],
            'status' => $row['status'], 'disetujui_oleh' => $row['disetujui_oleh'],
            'mata_kuliah' => ['id' => (int)$row['mata_kuliah_id'], 'kode' => $row['mk_kode'], 'nama' => $row['mk_nama'], 'sks' => $sks, 'semester' => (int)($row['mk_semester'] ?? 0)],
        ];
    }, $items);

    jsonResponse(['nim' => $nim, 'semester' => $semester, 'total_sks' => $totalSks, 'count' => count($formatted), 'data' => $formatted]);
}

/**
 * GET /api/akademik/khs/:nim
 */
function getKHS($nim) {
    $db = getDB();
    $semester = $_GET['semester'] ?? '';

    $sql = "SELECT n.*, mk.kode as mk_kode, mk.nama as mk_nama, mk.sks as mk_sks
            FROM nilai n LEFT JOIN mata_kuliah mk ON n.mata_kuliah_id = mk.id
            WHERE n.nim = ?";
    $params = [$nim];

    if ($semester) {
        $sql .= " AND n.semester = ?";
        $params[] = $semester;
    }
    $sql .= " ORDER BY n.semester ASC, n.id ASC";

    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    $items = $stmt->fetchAll();

    $totalSks = 0;
    $totalBobot = 0.0;
    $grouped = [];

    $formatted = array_map(function($row) use (&$totalSks, &$totalBobot, &$grouped) {
        $sks = (int)($row['mk_sks'] ?? 0);
        $bobot = (float)$row['bobot'];
        $totalSks += $sks;
        $totalBobot += $sks * $bobot;
        $sem = (int)$row['semester'];

        $item = [
            'id' => (int)$row['id'], 'nim' => $row['nim'], 'mata_kuliah_id' => (int)$row['mata_kuliah_id'],
            'semester' => $sem, 'nilai' => $row['nilai'], 'bobot' => $bobot, 'kelas' => $row['kelas'],
            'mata_kuliah' => ['id' => (int)$row['mata_kuliah_id'], 'kode' => $row['mk_kode'], 'nama' => $row['mk_nama'], 'sks' => $sks],
        ];
        $grouped[$sem][] = $item;
        return $item;
    }, $items);

    $ipk = $totalSks > 0 ? round($totalBobot / $totalSks, 2) : 0;

    jsonResponse([
        'nim' => $nim, 'total_sks' => $totalSks, 'total_bobot' => $totalBobot,
        'ipk' => $ipk, 'count' => count($formatted), 'data' => $formatted, 'per_semester' => $grouped,
    ]);
}

/**
 * GET /api/akademik/jadwal/:nim
 */
function getJadwal($nim) {
    $db = getDB();
    $semester = $_GET['semester'] ?? '';

    $sql = "SELECT k.*, mk.kode as mk_kode, mk.nama as mk_nama, mk.sks as mk_sks
            FROM krs k LEFT JOIN mata_kuliah mk ON k.mata_kuliah_id = mk.id
            WHERE k.nim = ?";
    $params = [$nim];

    if ($semester) {
        $sql .= " AND k.semester = ?";
        $params[] = $semester;
    }
    $sql .= " ORDER BY k.waktu ASC";

    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    $items = $stmt->fetchAll();

    $formatted = array_map(function($row) {
        return [
            'id' => (int)$row['id'], 'nim' => $row['nim'], 'semester' => (int)$row['semester'],
            'mata_kuliah_id' => (int)$row['mata_kuliah_id'], 'kelas' => $row['kelas'],
            'dosen_nama' => $row['dosen_nama'], 'waktu' => $row['waktu'], 'ruang' => $row['ruang'],
            'mata_kuliah' => ['id' => (int)$row['mata_kuliah_id'], 'kode' => $row['mk_kode'], 'nama' => $row['mk_nama'], 'sks' => (int)($row['mk_sks'] ?? 0)],
        ];
    }, $items);

    jsonResponse(['nim' => $nim, 'count' => count($formatted), 'data' => $formatted]);
}

/**
 * GET /api/akademik/ujian/:nim
 */
function getJadwalUjian($nim) {
    $db = getDB();

    $stmt = $db->prepare('SELECT mata_kuliah_id FROM krs WHERE nim = ? ORDER BY semester DESC');
    $stmt->execute([$nim]);
    $mkIds = $stmt->fetchAll(PDO::FETCH_COLUMN);

    if (empty($mkIds)) {
        jsonResponse(['nim' => $nim, 'count' => 0, 'data' => []]);
    }

    $placeholders = implode(',', array_fill(0, count($mkIds), '?'));
    $stmt = $db->prepare("
        SELECT ju.*, mk.kode as mk_kode, mk.nama as mk_nama, mk.sks as mk_sks
        FROM jadwal_ujian ju LEFT JOIN mata_kuliah mk ON ju.mata_kuliah_id = mk.id
        WHERE ju.mata_kuliah_id IN ($placeholders) ORDER BY ju.tanggal ASC
    ");
    $stmt->execute($mkIds);
    $items = $stmt->fetchAll();

    $formatted = array_map(function($row) {
        return [
            'id' => (int)$row['id'], 'mata_kuliah_id' => (int)$row['mata_kuliah_id'],
            'tanggal' => $row['tanggal'], 'mulai' => $row['mulai'], 'selesai' => $row['selesai'],
            'sesi' => $row['sesi'], 'jenis' => $row['jenis'], 'kelompok' => (int)$row['kelompok'],
            'mata_kuliah' => ['id' => (int)$row['mata_kuliah_id'], 'kode' => $row['mk_kode'], 'nama' => $row['mk_nama'], 'sks' => (int)($row['mk_sks'] ?? 0)],
        ];
    }, $items);

    jsonResponse(['nim' => $nim, 'count' => count($formatted), 'data' => $formatted]);
}

/**
 * GET /api/akademik/matakuliah
 */
function getAllMataKuliah() {
    $db = getDB();
    $stmt = $db->query('SELECT * FROM mata_kuliah ORDER BY kode ASC');
    $items = $stmt->fetchAll();

    $formatted = array_map(function($row) {
        return [
            'id' => (int)$row['id'], 'kode' => $row['kode'], 'nama' => $row['nama'],
            'sks' => (int)$row['sks'], 'semester' => (int)$row['semester'], 'prodi' => $row['prodi'],
        ];
    }, $items);

    jsonResponse(['count' => count($formatted), 'data' => $formatted]);
}
