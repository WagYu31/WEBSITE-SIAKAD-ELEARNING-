<?php
// ONE-TIME SYNC — akses sekali, hapus setelahnya
require_once __DIR__ . '/config.php';
$db = getDB();

// Cek registrasi 'Diterima' yang belum punya akun
$missing = $db->query("
    SELECT r.id, r.nama, r.email, r.prodi_pilihan, r.jurusan_pilihan
    FROM pmb_registrations r
    LEFT JOIN pmb_accounts a ON a.registration_id = r.id
    WHERE r.status = 'Diterima' AND a.id IS NULL
    ORDER BY r.id
")->fetchAll(PDO::FETCH_ASSOC);

$total_diterima = (int)$db->query("SELECT COUNT(*) FROM pmb_registrations WHERE status='Diterima'")->fetchColumn();
$total_accounts = (int)$db->query("SELECT COUNT(*) FROM pmb_accounts")->fetchColumn();

echo "<pre style='font-family:monospace;font-size:13px'>";
echo "=== STATUS PMB ACCOUNTS ===\n";
echo "Total Diterima   : $total_diterima\n";
echo "Total pmb_accounts: $total_accounts\n";
echo "Missing accounts  : " . count($missing) . "\n\n";

if (empty($missing)) {
    echo "&#x2705; Semua akun sudah tersedia!\n</pre>";
    exit;
}

$prodiCodes = [
    'S1 Administrasi Negara'=>'101','Administrasi Negara'=>'101',
    'S1 Administrasi Niaga' =>'102','Administrasi Niaga' =>'102',
    'S2 Administrasi Negara'=>'201','D3 Ilmu Administrasi' =>'301',
];
$nextSeq = [];
function nextNIM($db,$prefix,&$ns) {
    if (!isset($ns[$prefix])) {
        $plen = strlen($prefix);
        $max = (int)$db->query("SELECT IFNULL(MAX(CAST(SUBSTRING(nim,".($plen+1).") AS UNSIGNED)),0) FROM pmb_accounts WHERE nim LIKE '$prefix%'")->fetchColumn();
        $ns[$prefix] = $max;
    }
    return sprintf('%s%03d', $prefix, ++$ns[$prefix]);
}

$ok=0; $err=0; $year=date('Y');
foreach ($missing as $r) {
    try {
        $prodi = $r['prodi_pilihan'] ?: ($r['jurusan_pilihan'] ?: '');
        $code  = $prodiCodes[$prodi] ?? '101';
        $nim   = nextNIM($db, $year.$code, $nextSeq);
        $c = 'abcdefghjkmnpqrstuvwxyz23456789';
        $pwd = ''; for ($i=0;$i<8;$i++) $pwd .= $c[random_int(0,strlen($c)-1)];
        $hash = password_hash($pwd, PASSWORD_DEFAULT);
        $email = $r['email'] ?: '';
        $nama  = $r['nama'] ?: '';
        $db->prepare('INSERT INTO pmb_accounts(registration_id,nim,email,password_hash,plain_password,is_validated,validated_by,validated_at) VALUES(?,?,?,?,?,1,"bap",NOW())')->execute([$r['id'],$nim,$email,$hash,$pwd]);
        echo "&#x2705; [#{$r['id']}] $nama => <b>$nim</b>\n";
        $ok++;
    } catch (Exception $e) {
        echo "&#x274C; [#{$r['id']}] {$r['nama']}: {$e->getMessage()}\n"; $err++;
    }
}
echo "\n=== <b>$ok dibuat</b>, $err error ===\n";
echo "\n&#x26A0; Hapus: rm ~/stiabayuanggajobs.online/api/fix_accounts.php\n</pre>";
