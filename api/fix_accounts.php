<?php
require_once __DIR__ . '/config.php';
$db = getDB();

// Cari SEMUA registrasi Diterima yang belum punya akun
$rows = $db->query("
    SELECT r.id, r.prodi_pilihan, r.jurusan_pilihan, r.email, r.nama
    FROM pmb_registrations r
    LEFT JOIN pmb_accounts a ON a.registration_id = r.id
    WHERE r.status = 'Diterima' AND a.id IS NULL
    ORDER BY r.id
")->fetchAll(PDO::FETCH_ASSOC);

echo "<pre>Perlu buat akun: <b>" . count($rows) . "</b> registrasi\n\n";

if (empty($rows)) { echo "Tidak ada yang perlu dibuat.\n</pre>"; exit; }

$prodiCodes = [
    'S1 Administrasi Negara' => '101', 'Administrasi Negara' => '101',
    'S1 Administrasi Niaga'  => '102', 'Administrasi Niaga'  => '102',
    'S2 Administrasi Negara' => '201', 'D3 Ilmu Administrasi' => '301',
];

$nextSeq = [];

function getNextNIM($db, $prefix, &$nextSeq) {
    if (!isset($nextSeq[$prefix])) {
        $prefixLen = strlen($prefix);
        $max = $db->query("SELECT IFNULL(MAX(CAST(SUBSTRING(nim, " . ($prefixLen + 1) . ") AS UNSIGNED)), 0)
                           FROM pmb_accounts WHERE nim LIKE '$prefix%'")->fetchColumn();
        $nextSeq[$prefix] = (int)$max;
    }
    $nextSeq[$prefix]++;
    return sprintf('%s%03d', $prefix, $nextSeq[$prefix]);
}

$created = 0; $errors = 0; $year = date('Y');

foreach ($rows as $reg) {
    try {
        $prodi  = $reg['prodi_pilihan'] ?: ($reg['jurusan_pilihan'] ?: '');
        $code   = $prodiCodes[$prodi] ?? '101';
        $prefix = $year . $code;
        $nim    = getNextNIM($db, $prefix, $nextSeq);
        $email  = $reg['email'] ?: '';
        $nama   = $reg['nama'] ?: '';

        $chars = 'abcdefghjkmnpqrstuvwxyz23456789';
        $pwd   = ''; for ($i = 0; $i < 8; $i++) $pwd .= $chars[random_int(0, strlen($chars)-1)];
        $hash  = password_hash($pwd, PASSWORD_DEFAULT);

        $db->prepare('INSERT INTO pmb_accounts
            (registration_id, nim, email, password_hash, plain_password, is_validated, validated_by, validated_at)
            VALUES (?,?,?,?,?,1,"bap",NOW())')
           ->execute([$reg['id'], $nim, $email, $hash, $pwd]);

        $db->prepare('INSERT INTO profiles (nim, nama, email, prodi, password)
            VALUES (?,?,?,?,?)
            ON DUPLICATE KEY UPDATE nama=VALUES(nama), email=VALUES(email)')
           ->execute([$nim, $nama, $email, $prodi, $hash]);

        echo "&#x2705; [reg#{$reg['id']}] $nama &rarr; NIM: <b>$nim</b> | Pass: $pwd\n";
        $created++;
    } catch (Exception $e) {
        // If registration_id duplicate, account already exists – skip
        if (strpos($e->getMessage(), 'registration_id') !== false) {
            echo "&#x23ED;&#xFE0F; [reg#{$reg['id']}] {$reg['nama']} &rarr; SKIP (akun sudah ada)\n";
        } else {
            echo "&#x274C; [reg#{$reg['id']}] {$reg['nama']} &rarr; ERROR: {$e->getMessage()}\n";
            $errors++;
        }
    }
}

echo "\n=== SELESAI: <b style='color:green'>$created dibuat</b>, $errors error ===\n";
echo "\n&#x26A0; HAPUS file ini setelah selesai!\n</pre>";
