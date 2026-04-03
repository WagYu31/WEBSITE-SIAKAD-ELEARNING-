<?php
// ============================================
// PMB Settings API
// ============================================

require_once __DIR__ . '/config.php';

// GET /api/pmb/settings — Get all PMB settings
function getSettings() {
    $db = getDB();
    
    // Create table if not exists
    $db->exec("CREATE TABLE IF NOT EXISTS pmb_settings (
        setting_key VARCHAR(50) PRIMARY KEY,
        setting_value TEXT NOT NULL,
        label VARCHAR(100) DEFAULT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    
    // Insert defaults if empty
    $count = $db->query("SELECT COUNT(*) FROM pmb_settings")->fetchColumn();
    if ($count == 0) {
        $defaults = [
            ['biaya_pendaftaran', '350000', 'Biaya Pendaftaran (Rp)'],
            ['gelombang_1_start', '2026-03-01', 'Gelombang 1 — Mulai'],
            ['gelombang_1_end', '2026-04-30', 'Gelombang 1 — Selesai'],
            ['gelombang_2_start', '2026-05-01', 'Gelombang 2 — Mulai'],
            ['gelombang_2_end', '2026-06-30', 'Gelombang 2 — Selesai'],
            ['gelombang_3_start', '2026-07-01', 'Gelombang 3 — Mulai'],
            ['gelombang_3_end', '2026-08-31', 'Gelombang 3 — Selesai'],
            ['tahun_akademik', '2026/2027', 'Tahun Akademik'],
        ];
        $stmt = $db->prepare("INSERT INTO pmb_settings (setting_key, setting_value, label) VALUES (?, ?, ?)");
        foreach ($defaults as $d) {
            $stmt->execute($d);
        }
    }
    
    $rows = $db->query("SELECT * FROM pmb_settings ORDER BY setting_key")->fetchAll();
    $settings = [];
    foreach ($rows as $r) {
        $settings[$r['setting_key']] = [
            'value' => $r['setting_value'],
            'label' => $r['label'],
        ];
    }
    jsonResponse($settings);
}

// PUT /api/pmb/settings — Update PMB settings (BAP only)
function updateSettings() {
    $db = getDB();
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input || !is_array($input)) {
        jsonResponse(['error' => 'Data tidak valid'], 400);
    }
    
    $updated = [];
    $stmt = $db->prepare("UPDATE pmb_settings SET setting_value = ? WHERE setting_key = ?");
    foreach ($input as $key => $value) {
        $stmt->execute([(string)$value, $key]);
        if ($stmt->rowCount() > 0) {
            $updated[] = $key;
        }
    }
    
    jsonResponse(['message' => 'Settings berhasil diupdate', 'updated' => $updated]);
}

// GET /api/pmb/settings/biaya — Get just the fee (public endpoint)
function getBiaya() {
    $db = getDB();
    
    // Create table if not exists
    $db->exec("CREATE TABLE IF NOT EXISTS pmb_settings (
        setting_key VARCHAR(50) PRIMARY KEY,
        setting_value TEXT NOT NULL,
        label VARCHAR(100) DEFAULT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    
    $stmt = $db->prepare("SELECT setting_value FROM pmb_settings WHERE setting_key = 'biaya_pendaftaran'");
    $stmt->execute();
    $row = $stmt->fetch();
    
    $biaya = $row ? (int)$row['setting_value'] : 350000;
    jsonResponse(['biaya_pendaftaran' => $biaya]);
}
