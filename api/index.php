<?php
// ============================================
// API Router — stiabayuanggajobs.online
// ============================================

require_once __DIR__ . '/config.php';

$uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

// Remove query string for routing
$path = parse_url($uri, PHP_URL_PATH);
// Remove /api prefix
$path = preg_replace('#^/api#', '', $path);

// ---- ROUTES ----

// Health check
if ($path === '/health' && $method === 'GET') {
    jsonResponse([
        'service' => 'STIA Bayuangga API',
        'status'  => 'OK',
        'version' => '1.0.0',
        'db'      => 'MySQL'
    ]);
}

// Jadwal Pertemuan — Get All
if ($path === '/jadwal-pertemuan/all' && $method === 'GET') {
    require_once __DIR__ . '/jadwal-pertemuan.php';
    getAllJadwalPertemuan();
}

// Jadwal Pertemuan — Get by MK ID
if (preg_match('#^/jadwal-pertemuan/(\d+)$#', $path, $m) && $method === 'GET') {
    require_once __DIR__ . '/jadwal-pertemuan.php';
    getJadwalPertemuan((int)$m[1]);
}

// Jadwal Pertemuan — Save single
if ($path === '/jadwal-pertemuan' && $method === 'POST') {
    require_once __DIR__ . '/jadwal-pertemuan.php';
    saveJadwalPertemuan();
}

// Jadwal Pertemuan — Bulk save
if ($path === '/jadwal-pertemuan/bulk' && $method === 'POST') {
    require_once __DIR__ . '/jadwal-pertemuan.php';
    bulkSaveJadwalPertemuan();
}

// 404 — Route not found
jsonResponse(['error' => 'Route not found', 'path' => $path], 404);
