<?php
// ============================================
// Dosen API Handlers (CRUD, Jadwal Mengajar, Absensi, Nilai)
// Port of Go dosen_akademik.go → PHP + MySQL
// ============================================

// ===================== DOSEN CRUD =====================

function getAllDosen() {
    $db = getDB();
    $stmt = $db->query('SELECT * FROM dosen ORDER BY nama ASC');
    $items = $stmt->fetchAll();
    jsonResponse(['count' => count($items), 'data' => $items]);
}

function getDosen($id) {
    $db = getDB();
    $stmt = $db->prepare('SELECT * FROM dosen WHERE id = ?');
    $stmt->execute([$id]);
    $dosen = $stmt->fetch();
    if (!$dosen) jsonResponse(['error' => 'Dosen tidak ditemukan'], 404);
    jsonResponse($dosen);
}

function createDosen() {
    $db = getDB();
    $input = getJsonBody();
    $stmt = $db->prepare('INSERT INTO dosen (nip, nama, email, phone, prodi, jabatan, status) VALUES (?, ?, ?, ?, ?, ?, ?)');
    $stmt->execute([$input['nip'], $input['nama'], $input['email'] ?? '', $input['phone'] ?? '', $input['prodi'] ?? '', $input['jabatan'] ?? '', $input['status'] ?? 'Aktif']);
    $id = $db->lastInsertId();
    $stmt = $db->prepare('SELECT * FROM dosen WHERE id = ?');
    $stmt->execute([$id]);
    jsonResponse(['message' => 'Dosen ditambahkan', 'data' => $stmt->fetch()], 201);
}

function updateDosen($id) {
    $db = getDB();
    $input = getJsonBody();
    $stmt = $db->prepare('UPDATE dosen SET nama=?, email=?, phone=?, prodi=?, jabatan=?, status=? WHERE id=?');
    $stmt->execute([$input['nama'] ?? '', $input['email'] ?? '', $input['phone'] ?? '', $input['prodi'] ?? '', $input['jabatan'] ?? '', $input['status'] ?? 'Aktif', $id]);
    $stmt = $db->prepare('SELECT * FROM dosen WHERE id = ?');
    $stmt->execute([$id]);
    jsonResponse(['message' => 'Dosen diperbarui', 'data' => $stmt->fetch()]);
}

function deleteDosen($id) {
    $db = getDB();
    $stmt = $db->prepare('DELETE FROM dosen WHERE id = ?');
    $stmt->execute([$id]);
    jsonResponse(['message' => 'Dosen dihapus']);
}

function getDosenStats() {
    $db = getDB();
    $total = $db->query('SELECT COUNT(*) FROM dosen')->fetchColumn();
    $aktif = $db->query("SELECT COUNT(*) FROM dosen WHERE status = 'Aktif'")->fetchColumn();
    jsonResponse(['total' => (int)$total, 'aktif' => (int)$aktif]);
}

function loginDosen() {
    $db = getDB();
    $input = getJsonBody();
    $stmt = $db->prepare('SELECT * FROM dosen WHERE nip = ?');
    $stmt->execute([$input['nip'] ?? '']);
    $dosen = $stmt->fetch();
    if (!$dosen) jsonResponse(['error' => 'NIP tidak ditemukan'], 401);
    jsonResponse(['message' => 'Login berhasil', 'data' => $dosen]);
}

// ===================== JADWAL MENGAJAR =====================

function getJadwalMengajar($nip) {
    $db = getDB();
    $stmt = $db->prepare('SELECT * FROM dosen WHERE nip = ?');
    $stmt->execute([$nip]);
    $dosen = $stmt->fetch();
    if (!$dosen) jsonResponse(['error' => 'Dosen tidak ditemukan'], 404);

    $stmt = $db->prepare("SELECT k.*, mk.kode as mk_kode, mk.nama as mk_nama, mk.sks as mk_sks
        FROM krs k LEFT JOIN mata_kuliah mk ON k.mata_kuliah_id = mk.id
        WHERE k.dosen_nama = ? ORDER BY k.waktu ASC");
    $stmt->execute([$dosen['nama']]);
    $krsItems = $stmt->fetchAll();

    $classMap = [];
    foreach ($krsItems as $k) {
        $mkId = $k['mata_kuliah_id'];
        if (!isset($classMap[$mkId])) {
            $count = $db->prepare('SELECT COUNT(*) FROM krs WHERE mata_kuliah_id = ?');
            $count->execute([$mkId]);
            $classMap[$mkId] = [
                'id' => (int)$k['id'], 'mata_kuliah_id' => (int)$mkId,
                'kelas' => $k['kelas'], 'waktu' => $k['waktu'], 'ruang' => $k['ruang'],
                'mata_kuliah' => ['id' => (int)$mkId, 'kode' => $k['mk_kode'], 'nama' => $k['mk_nama'], 'sks' => (int)$k['mk_sks']],
                'jumlah_mhs' => (int)$count->fetchColumn(),
            ];
        }
    }

    jsonResponse([
        'dosen' => ['nip' => $dosen['nip'], 'nama' => $dosen['nama'], 'prodi' => $dosen['prodi']],
        'count' => count($classMap), 'data' => array_values($classMap),
    ]);
}

// ===================== ABSENSI =====================

function getAbsensi($mkId) {
    $db = getDB();
    $stmt = $db->prepare('SELECT id FROM krs WHERE mata_kuliah_id = ?');
    $stmt->execute([$mkId]);
    $krsIds = $stmt->fetchAll(PDO::FETCH_COLUMN);

    $absensiList = [];
    if (!empty($krsIds)) {
        $ph = implode(',', array_fill(0, count($krsIds), '?'));
        $stmt = $db->prepare("SELECT * FROM absensi WHERE krs_id IN ($ph) ORDER BY nim ASC, pertemuan ASC");
        $stmt->execute($krsIds);
        $absensiList = $stmt->fetchAll();
    }

    $mkStmt = $db->prepare('SELECT * FROM mata_kuliah WHERE id = ?');
    $mkStmt->execute([$mkId]);

    jsonResponse([
        'mata_kuliah_id' => (int)$mkId, 'mata_kuliah' => $mkStmt->fetch(),
        'mahasiswa' => count($krsIds), 'count' => count($absensiList), 'data' => $absensiList,
    ]);
}

function saveAbsensi() {
    $db = getDB();
    $input = getJsonBody();

    $stmt = $db->prepare('SELECT id FROM absensi WHERE krs_id = ? AND pertemuan = ?');
    $stmt->execute([$input['krs_id'], $input['pertemuan']]);
    $existing = $stmt->fetch();

    if ($existing) {
        $db->prepare('UPDATE absensi SET status=?, updated_at=NOW() WHERE id=?')->execute([$input['status'], $existing['id']]);
        $id = $existing['id'];
    } else {
        $db->prepare('INSERT INTO absensi (krs_id, nim, pertemuan, status) VALUES (?,?,?,?)')->execute([$input['krs_id'], $input['nim'], $input['pertemuan'], $input['status']]);
        $id = $db->lastInsertId();
    }

    $stmt = $db->prepare('SELECT * FROM absensi WHERE id = ?');
    $stmt->execute([$id]);
    jsonResponse(['message' => 'Absensi disimpan', 'data' => $stmt->fetch()]);
}

function bulkSaveAbsensi() {
    $db = getDB();
    $input = getJsonBody();
    $saved = 0;

    foreach ($input['items'] ?? [] as $item) {
        $stmt = $db->prepare('SELECT id FROM absensi WHERE krs_id = ? AND pertemuan = ?');
        $stmt->execute([$item['krs_id'], $item['pertemuan']]);
        $existing = $stmt->fetch();

        if ($existing) {
            $db->prepare('UPDATE absensi SET status=?, updated_at=NOW() WHERE id=?')->execute([$item['status'], $existing['id']]);
        } else {
            $db->prepare('INSERT INTO absensi (krs_id, nim, pertemuan, status) VALUES (?,?,?,?)')->execute([$item['krs_id'], $item['nim'], $item['pertemuan'], $item['status']]);
        }
        $saved++;
    }

    jsonResponse(['message' => 'Absensi bulk disimpan', 'saved' => $saved]);
}

// ===================== NILAI =====================

function getNilaiKelas($mkId) {
    $db = getDB();
    $stmt = $db->prepare("SELECT n.*, mk.kode as mk_kode, mk.nama as mk_nama, mk.sks as mk_sks
        FROM nilai n LEFT JOIN mata_kuliah mk ON n.mata_kuliah_id = mk.id WHERE n.mata_kuliah_id = ? ORDER BY n.nim ASC");
    $stmt->execute([$mkId]);
    $items = $stmt->fetchAll();

    $mkStmt = $db->prepare('SELECT * FROM mata_kuliah WHERE id = ?');
    $mkStmt->execute([$mkId]);

    jsonResponse(['mata_kuliah' => $mkStmt->fetch(), 'count' => count($items), 'data' => $items]);
}

function saveNilaiMahasiswa() {
    $db = getDB();
    $input = getJsonBody();

    $bUts = $input['bobot_uts'] ?? 20; $bUas = $input['bobot_uas'] ?? 30;
    $bTugas = $input['bobot_tugas'] ?? 20; $bQuiz = $input['bobot_quiz'] ?? 15; $bAbsensi = $input['bobot_absensi'] ?? 15;
    if ($bUts + $bUas + $bTugas + $bQuiz + $bAbsensi == 0) { $bUts=20; $bUas=30; $bTugas=20; $bQuiz=15; $bAbsensi=15; }

    $akhir = ($input['uts']??0)*$bUts/100 + ($input['uas']??0)*$bUas/100 + ($input['tugas']??0)*$bTugas/100 + ($input['quiz']??0)*$bQuiz/100 + ($input['absensi']??0)*$bAbsensi/100;
    $akhir = round($akhir, 2);

    list($huruf, $bobot) = convertGrade($akhir);

    $stmt = $db->prepare('SELECT id FROM nilai WHERE nim = ? AND mata_kuliah_id = ?');
    $stmt->execute([$input['nim'], $input['mata_kuliah_id']]);
    $existing = $stmt->fetch();

    if ($existing) {
        $db->prepare('UPDATE nilai SET nilai=?, bobot=? WHERE id=?')->execute([$huruf, $bobot, $existing['id']]);
        $id = $existing['id'];
    } else {
        $db->prepare('INSERT INTO nilai (nim, mata_kuliah_id, semester, nilai, bobot, kelas) VALUES (?,?,?,?,?,?)')->execute([$input['nim'], $input['mata_kuliah_id'], $input['semester'], $huruf, $bobot, $input['kelas'] ?? '']);
        $id = $db->lastInsertId();
    }

    jsonResponse(['message' => 'Nilai disimpan', 'akhir' => $akhir, 'huruf' => $huruf, 'bobot' => $bobot]);
}

function bulkSaveNilai() {
    $db = getDB();
    $input = getJsonBody();

    $bUts = $input['bobot_uts'] ?? 20; $bUas = $input['bobot_uas'] ?? 30;
    $bTugas = $input['bobot_tugas'] ?? 20; $bQuiz = $input['bobot_quiz'] ?? 15; $bAbsensi = $input['bobot_absensi'] ?? 15;
    if ($bUts + $bUas + $bTugas + $bQuiz + $bAbsensi == 0) { $bUts=20; $bUas=30; $bTugas=20; $bQuiz=15; $bAbsensi=15; }

    $saved = 0;
    foreach ($input['items'] ?? [] as $item) {
        $akhir = ($item['uts']??0)*$bUts/100 + ($item['uas']??0)*$bUas/100 + ($item['tugas']??0)*$bTugas/100 + ($item['quiz']??0)*$bQuiz/100 + ($item['absensi']??0)*$bAbsensi/100;
        list($huruf, $bobot) = convertGrade($akhir);

        $stmt = $db->prepare('SELECT id FROM nilai WHERE nim = ? AND mata_kuliah_id = ?');
        $stmt->execute([$item['nim'], $item['mata_kuliah_id']]);
        $existing = $stmt->fetch();

        if ($existing) {
            $db->prepare('UPDATE nilai SET nilai=?, bobot=? WHERE id=?')->execute([$huruf, $bobot, $existing['id']]);
        } else {
            $db->prepare('INSERT INTO nilai (nim, mata_kuliah_id, semester, nilai, bobot, kelas) VALUES (?,?,?,?,?,?)')->execute([$item['nim'], $item['mata_kuliah_id'], $item['semester'], $huruf, $bobot, $item['kelas'] ?? '']);
        }
        $saved++;
    }

    jsonResponse(['message' => 'Nilai bulk disimpan', 'saved' => $saved]);
}

function getRekapNilai($nip) {
    $db = getDB();
    $stmt = $db->prepare('SELECT * FROM dosen WHERE nip = ?');
    $stmt->execute([$nip]);
    $dosen = $stmt->fetch();
    if (!$dosen) jsonResponse(['error' => 'Dosen tidak ditemukan'], 404);

    $stmt = $db->prepare('SELECT DISTINCT mata_kuliah_id FROM krs WHERE dosen_nama = ?');
    $stmt->execute([$dosen['nama']]);
    $mkIds = $stmt->fetchAll(PDO::FETCH_COLUMN);

    $rekap = [];
    foreach ($mkIds as $mkId) {
        $mk = $db->prepare('SELECT * FROM mata_kuliah WHERE id = ?');
        $mk->execute([$mkId]);
        $mkData = $mk->fetch();

        $nilai = $db->prepare('SELECT nilai FROM nilai WHERE mata_kuliah_id = ?');
        $nilai->execute([$mkId]);
        $dist = [];
        while ($row = $nilai->fetch()) { $dist[$row['nilai']] = ($dist[$row['nilai']] ?? 0) + 1; }

        $count = $db->prepare('SELECT COUNT(*) FROM krs WHERE mata_kuliah_id = ?');
        $count->execute([$mkId]);

        $rekap[] = ['mata_kuliah' => $mkData, 'total_mhs' => (int)$count->fetchColumn(), 'distribusi' => $dist];
    }

    jsonResponse(['dosen' => ['nip' => $dosen['nip'], 'nama' => $dosen['nama']], 'count' => count($rekap), 'data' => $rekap]);
}

// ===================== HELPER =====================

function convertGrade($akhir) {
    if ($akhir >= 85) return ['A', 4.0];
    if ($akhir >= 80) return ['A-', 3.7];
    if ($akhir >= 75) return ['B+', 3.3];
    if ($akhir >= 70) return ['B', 3.0];
    if ($akhir >= 65) return ['B-', 2.7];
    if ($akhir >= 60) return ['C+', 2.3];
    if ($akhir >= 55) return ['C', 2.0];
    if ($akhir >= 50) return ['D', 1.0];
    return ['E', 0.0];
}
