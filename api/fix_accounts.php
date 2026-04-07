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

$created = 0;
$errors  = 0;
$year    = date('Y');

foreach ($rows as $reg) {
    try {
        $prodi  = $reg['prodi_pilihan'] ?: ($reg['jurusan_pilihan'] ?: '');
        $code   = $prodiCodes[$prodi] ?? '101';
        $prefix = $year . $code;

        // Hitung NIM berikutnya
        $cnt = (int)$db->prepare("SELECT COUNT(*) FROM pmb_accounts WHERE nim LIKE ?")->execute([$prefix . '%'])
            ? $db->query("SELECT COUNT(*) FROM pmb_accounts WHERE nim LIKE '$prefix%'")->fetchColumn()
            : 0;
        $nim = sprintf('%s%03d', $prefix, $cnt + 1);

        // Generate password
        $chars = 'abcdefghjkmnpqrstuvwxyz23456789';
        $pwd   = '';
        for ($i = 0; $i < 8; $i++) $pwd .= $chars[random_int(0, strlen($chars) - 1)];
        $hash  = password_hash($pwd, PASSWORD_DEFAULT);
        $email = $reg['email'] ?: '';

        // Insert pmb_accounts
        $db->prepare('INSERT INTO pmb_accounts
            (registration_id, nim, email, password_hash, plain_password, is_validated, validated_by, validated_at)
            VALUES (?, ?, ?, ?, ?, 1, ?, NOW())')
           ->execute([$reg['id'], $nim, $email, $hash, $pwd, 'bap']);

        // Buat/update profiles
        $db->prepare('INSERT INTO profiles (nim, nama, email, prodi, password)
            VALUES (?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE nama = VALUES(nama), email = VALUES(email)')
           ->execute([$nim, $reg['nama'], $email, $prodi, $hash]);

        echo "✅ [{$reg['id']}] {$reg['nama']} → NIM: $nim | Pass: $pwd\n";
        $created++;
    } catch (Exception $e) {
        echo "❌ [{$reg['id']}] {$reg['nama']} → ERROR: {$e->getMessage()}\n";
        $errors++;
    }
}

echo "\n=== SELESAI: $created akun dibuat, $errors error ===\n";
echo "\n⚠️  HAPUS file fix_accounts.php setelah ini!\n</pre>";
