<?php
// ONE-TIME FIX: Buat pmb_accounts untuk registrasi Diterima yang belum punya akun
// Hapus file ini setelah dijalankan!
require_once __DIR__ . '/config.php';
$db = getDB();

$rows = $db->query("
    SELECT r.id, r.prodi_pilihan, r.jurusan_pilihan, r.email, r.nama
    FROM pmb_registrations r
    LEFT JOIN pmb_accounts a ON a.registration_id = r.id
    WHERE r.status = 'Diterima' AND a.id IS NULL
    ORDER BY r.id
")->fetchAll(PDO::FETCH_ASSOC);

echo "<pre>Perlu buat akun: " . count($rows) . " registrasi\n\n";

$prodiCodes = [
    'S1 Administrasi Negara' => '101', 'Administrasi Negara' => '101',
    'S1 Administrasi Niaga'  => '102', 'Administrasi Niaga'  => '102',
    'S2 Administrasi Negara' => '201', 'D3 Ilmu Administrasi' => '301',
];

// Track counter per prefix IN MEMORY to avoid re-query each time
$nextSeq = [];

function getNextNIM($db, $prefix, &$nextSeq) {
    if (!isset($nextSeq[$prefix])) {
        // Get max existing sequence for this prefix
        $prefixLen = strlen($prefix);
        $max = $db->query("SELECT MAX(CAST(SUBSTRING(nim, " . ($prefixLen + 1) . ") AS UNSIGNED))
                           FROM pmb_accounts WHERE nim LIKE '$prefix%'")->fetchColumn();
        $nextSeq[$prefix] = (int)($max ?? 0);
    }
    $nextSeq[$prefix]++;
    return sprintf('%s%03d', $prefix, $nextSeq[$prefix]);
}

$created = 0;
$errors  = 0;
$year    = date('Y');

foreach ($rows as $reg) {
    try {
        $prodi  = $reg['prodi_pilihan'] ?: ($reg['jurusan_pilihan'] ?: '');
        $code   = $prodiCodes[$prodi] ?? '101';
        $prefix = $year . $code;
        $nim    = getNextNIM($db, $prefix, $nextSeq);

        // Generate password
        $chars = 'abcdefghjkmnpqrstuvwxyz23456789';
        $pwd   = '';
        for ($i = 0; $i < 8; $i++) $pwd .= $chars[random_int(0, strlen($chars) - 1)];
        $hash  = password_hash($pwd, PASSWORD_DEFAULT);
        $email = $reg['email'] ?: '';
        $nama  = $reg['nama'] ?: '';

        // Insert pmb_accounts
        $db->prepare('INSERT INTO pmb_accounts
            (registration_id, nim, email, password_hash, plain_password, is_validated, validated_by, validated_at)
            VALUES (?, ?, ?, ?, ?, 1, ?, NOW())')
           ->execute([$reg['id'], $nim, $email, $hash, $pwd, 'bap']);

        // Buat/update profiles
        $db->prepare('INSERT INTO profiles (nim, nama, email, prodi, password)
            VALUES (?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE nama = VALUES(nama), email = VALUES(email)')
           ->execute([$nim, $nama, $email, $prodi, $hash]);

        echo "&#x2705; [{$reg['id']}] $nama &rarr; NIM: <b>$nim</b> | Pass: <b>$pwd</b>\n";
        $created++;
    } catch (Exception $e) {
        echo "&#x274C; [{$reg['id']}] {$reg['nama']} &rarr; ERROR: {$e->getMessage()}\n";
        $errors++;
    }
}

echo "\n=== SELESAI: <b>$created akun dibuat</b>, $errors error ===\n";
echo "\n&#x26A0;&#xFE0F;  HAPUS file fix_accounts.php setelah ini!\n</pre>";
