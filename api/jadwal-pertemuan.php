<?php
// ============================================
// Jadwal Pertemuan API Handlers
// Port of Go handlers to PHP + MySQL
// ============================================

/**
 * GET /api/jadwal-pertemuan/all
 */
function getAllJadwalPertemuan() {
    $db = getDB();
    $nim = $_GET['nim'] ?? '';

    if ($nim) {
        // Get MK IDs from KRS for this student
        $stmt = $db->prepare('SELECT mata_kuliah_id FROM krs WHERE nim = ?');
        $stmt->execute([$nim]);
        $mkIds = $stmt->fetchAll(PDO::FETCH_COLUMN);

        if (empty($mkIds)) {
            jsonResponse(['nim' => $nim, 'count' => 0, 'data' => []]);
        }

        $placeholders = implode(',', array_fill(0, count($mkIds), '?'));
        $stmt = $db->prepare("
            SELECT jp.*, mk.kode as mk_kode, mk.nama as mk_nama, mk.sks as mk_sks
            FROM jadwal_pertemuan jp
            LEFT JOIN mata_kuliah mk ON jp.mata_kuliah_id = mk.id
            WHERE jp.mata_kuliah_id IN ($placeholders)
            ORDER BY jp.mata_kuliah_id ASC, jp.pertemuan ASC
        ");
        $stmt->execute($mkIds);
        $items = $stmt->fetchAll();

        jsonResponse(['nim' => $nim, 'count' => count($items), 'data' => formatItems($items)]);
    }

    // Return all
    $stmt = $db->query("
        SELECT jp.*, mk.kode as mk_kode, mk.nama as mk_nama, mk.sks as mk_sks
        FROM jadwal_pertemuan jp
        LEFT JOIN mata_kuliah mk ON jp.mata_kuliah_id = mk.id
        ORDER BY jp.mata_kuliah_id ASC, jp.pertemuan ASC
    ");
    $items = $stmt->fetchAll();

    jsonResponse(['count' => count($items), 'data' => formatItems($items)]);
}

/**
 * GET /api/jadwal-pertemuan/:id
 */
function getJadwalPertemuan($mkId) {
    $db = getDB();
    $kelas = $_GET['kelas'] ?? 'A';

    $stmt = $db->prepare("
        SELECT jp.*, mk.kode as mk_kode, mk.nama as mk_nama, mk.sks as mk_sks
        FROM jadwal_pertemuan jp
        LEFT JOIN mata_kuliah mk ON jp.mata_kuliah_id = mk.id
        WHERE jp.mata_kuliah_id = ? AND jp.kelas = ?
        ORDER BY jp.pertemuan ASC
    ");
    $stmt->execute([$mkId, $kelas]);
    $items = $stmt->fetchAll();

    // Get MK info
    $mkStmt = $db->prepare('SELECT * FROM mata_kuliah WHERE id = ?');
    $mkStmt->execute([$mkId]);
    $mk = $mkStmt->fetch() ?: null;

    jsonResponse([
        'mata_kuliah_id' => $mkId,
        'mata_kuliah'    => $mk,
        'kelas'          => $kelas,
        'count'          => count($items),
        'data'           => formatItems($items),
    ]);
}

/**
 * POST /api/jadwal-pertemuan
 */
function saveJadwalPertemuan() {
    $db = getDB();
    $input = getJsonBody();

    $mkId = $input['mata_kuliah_id'] ?? 0;
    $kodeMK = $input['kode_mk'] ?? '';

    // Resolve MataKuliahID from kode_mk if needed
    if (!$mkId && $kodeMK) {
        $stmt = $db->prepare('SELECT id FROM mata_kuliah WHERE kode = ?');
        $stmt->execute([$kodeMK]);
        $row = $stmt->fetch();
        if ($row) {
            $mkId = $row['id'];
        } else {
            // Auto-create
            $stmt = $db->prepare('INSERT INTO mata_kuliah (kode, nama, sks) VALUES (?, ?, 3)');
            $stmt->execute([$kodeMK, $kodeMK]);
            $mkId = $db->lastInsertId();
        }
    }

    if (!$mkId) {
        jsonResponse(['error' => 'mata_kuliah_id or kode_mk is required'], 400);
    }

    $kelas = $input['kelas'] ?: 'A';
    $pertemuan = (int)($input['pertemuan'] ?? 0);
    $mode = $input['mode'] ?: 'offline';

    if (!$pertemuan) {
        jsonResponse(['error' => 'pertemuan is required'], 400);
    }

    // Upsert
    $stmt = $db->prepare('SELECT id FROM jadwal_pertemuan WHERE mata_kuliah_id = ? AND kelas = ? AND pertemuan = ?');
    $stmt->execute([$mkId, $kelas, $pertemuan]);
    $existing = $stmt->fetch();

    if ($existing) {
        $stmt = $db->prepare("
            UPDATE jadwal_pertemuan SET
                tanggal = ?, tanggal_asli = ?, jam_mulai = ?, jam_selesai = ?,
                mode = ?, catatan = ?, updated_by = ?, updated_at = NOW()
            WHERE id = ?
        ");
        $stmt->execute([
            $input['tanggal'] ?? '', $input['tanggal_asli'] ?? '',
            $input['jam_mulai'] ?? '', $input['jam_selesai'] ?? '',
            $mode, $input['catatan'] ?? '', $input['updated_by'] ?? '',
            $existing['id']
        ]);
        $id = $existing['id'];
    } else {
        $stmt = $db->prepare("
            INSERT INTO jadwal_pertemuan
                (mata_kuliah_id, kode_mk, kelas, pertemuan, tanggal, tanggal_asli, jam_mulai, jam_selesai, mode, catatan, updated_by)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ");
        $stmt->execute([
            $mkId, $kodeMK, $kelas, $pertemuan,
            $input['tanggal'] ?? '', $input['tanggal_asli'] ?? '',
            $input['jam_mulai'] ?? '', $input['jam_selesai'] ?? '',
            $mode, $input['catatan'] ?? '', $input['updated_by'] ?? ''
        ]);
        $id = $db->lastInsertId();
    }

    // Return saved record
    $stmt = $db->prepare('SELECT * FROM jadwal_pertemuan WHERE id = ?');
    $stmt->execute([$id]);
    $jp = $stmt->fetch();

    jsonResponse(['message' => 'Jadwal pertemuan disimpan', 'data' => $jp]);
}

/**
 * POST /api/jadwal-pertemuan/bulk
 */
function bulkSaveJadwalPertemuan() {
    $db = getDB();
    $input = getJsonBody();

    $mkId = $input['mata_kuliah_id'] ?? 0;
    $kodeMK = $input['kode_mk'] ?? '';
    $kelas = $input['kelas'] ?: 'A';
    $updatedBy = $input['updated_by'] ?? 'BAP';
    $items = $input['items'] ?? [];

    if (empty($items)) {
        jsonResponse(['error' => 'items is required'], 400);
    }

    // Resolve MataKuliahID
    if (!$mkId && $kodeMK) {
        $stmt = $db->prepare('SELECT id FROM mata_kuliah WHERE kode = ?');
        $stmt->execute([$kodeMK]);
        $row = $stmt->fetch();
        if ($row) {
            $mkId = $row['id'];
        } else {
            $stmt = $db->prepare('INSERT INTO mata_kuliah (kode, nama, sks) VALUES (?, ?, 3)');
            $stmt->execute([$kodeMK, $kodeMK]);
            $mkId = $db->lastInsertId();
        }
    }

    if (!$mkId) {
        jsonResponse(['error' => 'mata_kuliah_id or kode_mk is required'], 400);
    }

    $saved = 0;
    $db->beginTransaction();

    try {
        foreach ($items as $item) {
            $pertemuan = (int)($item['pertemuan'] ?? 0);
            if (!$pertemuan) continue;

            $stmt = $db->prepare('SELECT id FROM jadwal_pertemuan WHERE mata_kuliah_id = ? AND kelas = ? AND pertemuan = ?');
            $stmt->execute([$mkId, $kelas, $pertemuan]);
            $existing = $stmt->fetch();

            if ($existing) {
                $stmt = $db->prepare("
                    UPDATE jadwal_pertemuan SET
                        kode_mk = ?, tanggal = ?, tanggal_asli = ?, jam_mulai = ?, jam_selesai = ?,
                        mode = ?, catatan = ?, updated_by = ?, updated_at = NOW()
                    WHERE id = ?
                ");
                $stmt->execute([
                    $kodeMK, $item['tanggal'] ?? '', $item['tanggal_asli'] ?? '',
                    $item['jam_mulai'] ?? '', $item['jam_selesai'] ?? '',
                    $item['mode'] ?? 'offline', $item['catatan'] ?? '', $updatedBy,
                    $existing['id']
                ]);
            } else {
                $stmt = $db->prepare("
                    INSERT INTO jadwal_pertemuan
                        (mata_kuliah_id, kode_mk, kelas, pertemuan, tanggal, tanggal_asli, jam_mulai, jam_selesai, mode, catatan, updated_by)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ");
                $stmt->execute([
                    $mkId, $kodeMK, $kelas, $pertemuan,
                    $item['tanggal'] ?? '', $item['tanggal_asli'] ?? '',
                    $item['jam_mulai'] ?? '', $item['jam_selesai'] ?? '',
                    $item['mode'] ?? 'offline', $item['catatan'] ?? '', $updatedBy
                ]);
            }
            $saved++;
        }

        $db->commit();
    } catch (Exception $e) {
        $db->rollBack();
        jsonResponse(['error' => 'Bulk save failed: ' . $e->getMessage()], 500);
    }

    // Return all saved items
    $stmt = $db->prepare("
        SELECT jp.*, mk.kode as mk_kode, mk.nama as mk_nama, mk.sks as mk_sks
        FROM jadwal_pertemuan jp
        LEFT JOIN mata_kuliah mk ON jp.mata_kuliah_id = mk.id
        WHERE jp.mata_kuliah_id = ? AND jp.kelas = ?
        ORDER BY jp.pertemuan ASC
    ");
    $stmt->execute([$mkId, $kelas]);
    $allItems = $stmt->fetchAll();

    jsonResponse([
        'message' => "$saved jadwal pertemuan disimpan",
        'mata_kuliah_id' => $mkId,
        'kode_mk' => $kodeMK,
        'kelas' => $kelas,
        'count' => count($allItems),
        'data' => formatItems($allItems),
    ]);
}

/**
 * Format items to match Go API response structure
 */
function formatItems($items) {
    return array_map(function($row) {
        $result = [
            'id' => (int)$row['id'],
            'mata_kuliah_id' => (int)$row['mata_kuliah_id'],
            'kode_mk' => $row['kode_mk'],
            'kelas' => $row['kelas'],
            'pertemuan' => (int)$row['pertemuan'],
            'tanggal' => $row['tanggal'],
            'tanggal_asli' => $row['tanggal_asli'],
            'jam_mulai' => $row['jam_mulai'],
            'jam_selesai' => $row['jam_selesai'],
            'mode' => $row['mode'],
            'catatan' => $row['catatan'],
            'updated_by' => $row['updated_by'],
            'updated_at' => $row['updated_at'],
        ];
        // Include mata_kuliah info if available
        if (isset($row['mk_kode'])) {
            $result['mata_kuliah'] = [
                'id' => (int)$row['mata_kuliah_id'],
                'kode' => $row['mk_kode'],
                'nama' => $row['mk_nama'],
                'sks' => (int)($row['mk_sks'] ?? 3),
            ];
        }
        return $result;
    }, $items);
}
