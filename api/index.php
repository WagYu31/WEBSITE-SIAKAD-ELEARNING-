<?php
// ============================================
// API Router — stiabayuanggajobs.online
// Complete port of ALL Go backend routes
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

// ===================== PMB =====================
if ($path === '/pmb/register' && $method === 'POST') {
    require_once __DIR__ . '/pmb.php';
    registerOnline();
}
if ($path === '/pmb/register/offline' && $method === 'POST') {
    require_once __DIR__ . '/pmb.php';
    registerOffline();
}
if ($path === '/pmb/stats' && $method === 'GET') {
    require_once __DIR__ . '/pmb.php';
    getPmbStats();
}
if (preg_match('#^/pmb/status/(.+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/pmb.php';
    checkPmbStatus($m[1]);
}
if ($path === '/pmb/registrations' && $method === 'GET') {
    require_once __DIR__ . '/pmb.php';
    getRegistrations();
}
if (preg_match('#^/pmb/registration/(\d+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/pmb.php';
    getRegistration((int)$m[1]);
}
if (preg_match('#^/pmb/registration/(\d+)/status$#', $path, $m) && $method === 'PUT') {
    require_once __DIR__ . '/pmb.php';
    updatePmbStatus((int)$m[1]);
}
if (preg_match('#^/pmb/registration/(\d+)$#', $path, $m) && $method === 'PUT') {
    require_once __DIR__ . '/pmb.php';
    updateRegistration((int)$m[1]);
}
if (preg_match('#^/pmb/registration/(\d+)$#', $path, $m) && $method === 'DELETE') {
    require_once __DIR__ . '/pmb.php';
    deleteRegistration((int)$m[1]);
}
if (preg_match('#^/pmb/registration/(\d+)/upload$#', $path, $m) && $method === 'POST') {
    require_once __DIR__ . '/pmb.php';
    uploadPmbFiles((int)$m[1]);
}
if ($path === '/pmb/migrate' && $method === 'GET') {
    require_once __DIR__ . '/migrate_pmb.php';
}

// ===================== PMB PAYMENT (Midtrans) =====================
if ($path === '/pmb/payment/test' && $method === 'GET') {
    require_once __DIR__ . '/payment.php';
    midtransTest();
}
if ($path === '/pmb/payment' && $method === 'POST') {
    require_once __DIR__ . '/payment.php';
    createPayment();
}
if (preg_match('#^/pmb/payment/notification$#', $path) && $method === 'POST') {
    require_once __DIR__ . '/payment.php';
    handlePaymentNotification();
}
if (preg_match('#^/pmb/payment/(\d+)/confirm$#', $path, $m) && $method === 'PUT') {
    require_once __DIR__ . '/payment.php';
    confirmPayment((int)$m[1]);
}
if (preg_match('#^/pmb/payment/(\d+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/payment.php';
    getPaymentStatus((int)$m[1]);
}

// ===================== PMB ACCOUNT =====================
if ($path === '/pmb/account/create' && $method === 'POST') {
    require_once __DIR__ . '/account.php';
    bapCreateAccount();
}
if (preg_match('#^/pmb/account/(\d+)/validate$#', $path, $m) && $method === 'PUT') {
    require_once __DIR__ . '/account.php';
    validateAccountByBAP((int)$m[1]);
}
if (preg_match('#^/pmb/account/(\d+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/account.php';
    getAccountByRegistration((int)$m[1]);
}
if (preg_match('#^/pmb/validate/(.+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/account.php';
    validateAccountByEmail($m[1]);
}

// ===================== PROFILE =====================
if (preg_match('#^/profile/([^/]+)/avatar$#', $path, $m) && $method === 'POST') {
    require_once __DIR__ . '/profile.php';
    uploadAvatar($m[1]);
}
if (preg_match('#^/profile/([^/]+)/documents$#', $path, $m) && $method === 'POST') {
    require_once __DIR__ . '/profile.php';
    uploadDocuments($m[1]);
}
if (preg_match('#^/profile/([^/]+)/password$#', $path, $m) && $method === 'PUT') {
    require_once __DIR__ . '/profile.php';
    changePassword($m[1]);
}
if (preg_match('#^/profile/([^/]+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/profile.php';
    getProfile($m[1]);
}
if (preg_match('#^/profile/([^/]+)$#', $path, $m) && $method === 'PUT') {
    require_once __DIR__ . '/profile.php';
    updateProfile($m[1]);
}

// ===================== SEED (Dev) =====================
if ($path === '/seed/akademik' && ($method === 'POST' || $method === 'GET')) {
    require_once __DIR__ . '/seed.php';
    seedAkademik();
}

// ===================== PMB SETTINGS =====================
if ($path === '/pmb/settings' && $method === 'GET') {
    require_once __DIR__ . '/settings.php';
    getSettings();
}
if ($path === '/pmb/settings' && $method === 'PUT') {
    require_once __DIR__ . '/settings.php';
    updateSettings();
}
if ($path === '/pmb/settings/biaya' && $method === 'GET') {
    require_once __DIR__ . '/settings.php';
    getBiaya();
}

// ===================== 404 =====================
jsonResponse(['error' => 'Route not found', 'path' => $path, 'method' => $method], 404);
