<?php
// ============================================
// API Router — stiabayuanggajobs.online
// Full port of Go backend routes
// ============================================

require_once __DIR__ . '/config.php';

$uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

// Remove query string for routing
$path = parse_url($uri, PHP_URL_PATH);
// Remove /api prefix
$path = preg_replace('#^/api#', '', $path);

// ===================== HEALTH =====================
if ($path === '/health' && $method === 'GET') {
    jsonResponse(['service' => 'STIA Bayuangga API', 'status' => 'OK', 'version' => '1.0.0', 'db' => 'MySQL']);
}

// ===================== JADWAL PERTEMUAN =====================
if ($path === '/jadwal-pertemuan/all' && $method === 'GET') {
    require_once __DIR__ . '/jadwal-pertemuan.php';
    getAllJadwalPertemuan();
}
if (preg_match('#^/jadwal-pertemuan/(\d+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/jadwal-pertemuan.php';
    getJadwalPertemuan((int)$m[1]);
}
if ($path === '/jadwal-pertemuan' && $method === 'POST') {
    require_once __DIR__ . '/jadwal-pertemuan.php';
    saveJadwalPertemuan();
}
if ($path === '/jadwal-pertemuan/bulk' && $method === 'POST') {
    require_once __DIR__ . '/jadwal-pertemuan.php';
    bulkSaveJadwalPertemuan();
}

// ===================== AKADEMIK =====================
if (preg_match('#^/akademik/krs/(.+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/akademik.php';
    getKRS($m[1]);
}
if (preg_match('#^/akademik/khs/(.+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/akademik.php';
    getKHS($m[1]);
}
if (preg_match('#^/akademik/jadwal/(.+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/akademik.php';
    getJadwal($m[1]);
}
if (preg_match('#^/akademik/ujian/(.+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/akademik.php';
    getJadwalUjian($m[1]);
}
if ($path === '/akademik/matakuliah' && $method === 'GET') {
    require_once __DIR__ . '/akademik.php';
    getAllMataKuliah();
}

// ===================== DOSEN =====================
if ($path === '/dosen' && $method === 'GET') {
    require_once __DIR__ . '/dosen.php';
    getAllDosen();
}
if ($path === '/dosen' && $method === 'POST') {
    require_once __DIR__ . '/dosen.php';
    createDosen();
}
if ($path === '/dosen/stats/summary' && $method === 'GET') {
    require_once __DIR__ . '/dosen.php';
    getDosenStats();
}
if ($path === '/dosen/login' && $method === 'POST') {
    require_once __DIR__ . '/dosen.php';
    loginDosen();
}
if (preg_match('#^/dosen/jadwal-mengajar/(.+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/dosen.php';
    getJadwalMengajar($m[1]);
}
if (preg_match('#^/dosen/absensi/(\d+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/dosen.php';
    getAbsensi((int)$m[1]);
}
if ($path === '/dosen/absensi' && $method === 'POST') {
    require_once __DIR__ . '/dosen.php';
    saveAbsensi();
}
if ($path === '/dosen/absensi/bulk' && $method === 'POST') {
    require_once __DIR__ . '/dosen.php';
    bulkSaveAbsensi();
}
if (preg_match('#^/dosen/nilai/(\d+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/dosen.php';
    getNilaiKelas((int)$m[1]);
}
if ($path === '/dosen/nilai' && $method === 'POST') {
    require_once __DIR__ . '/dosen.php';
    saveNilaiMahasiswa();
}
if ($path === '/dosen/nilai/bulk' && $method === 'POST') {
    require_once __DIR__ . '/dosen.php';
    bulkSaveNilai();
}
if (preg_match('#^/dosen/rekap-nilai/(.+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/dosen.php';
    getRekapNilai($m[1]);
}
if (preg_match('#^/dosen/(\d+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/dosen.php';
    getDosen((int)$m[1]);
}
if (preg_match('#^/dosen/(\d+)$#', $path, $m) && $method === 'PUT') {
    require_once __DIR__ . '/dosen.php';
    updateDosen((int)$m[1]);
}
if (preg_match('#^/dosen/(\d+)$#', $path, $m) && $method === 'DELETE') {
    require_once __DIR__ . '/dosen.php';
    deleteDosen((int)$m[1]);
}

// ===================== SEED (Dev) =====================
if ($path === '/seed/akademik' && ($method === 'POST' || $method === 'GET')) {
    require_once __DIR__ . '/seed.php';
    seedAkademik();
}

// ===================== 404 =====================
jsonResponse(['error' => 'Route not found', 'path' => $path, 'method' => $method], 404);
