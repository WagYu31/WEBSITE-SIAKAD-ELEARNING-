<?php
// ONE-TIME FIX — hapus setelah dipakai!
require_once __DIR__ . '/config.php';
$db = getDB();

$rows = $db->query("
    SELECT r.id, r.prodi_pilihan, r.jurusan_pilihan, r.email, r.nama
    FROM pmb_registrations r
    LEFT JOIN pmb_accounts a ON a.registration_id = r.id
    WHERE r.status = 'Diterima' AND a.id IS NULL
    ORDER BY r.id
")->fetchAll(PDO::FETCH_ASSOC);

echo "<pre>Perlu buat akun: <b>" . count($rows) . "</b>\n\n";
if (empty($rows)) { echo "Semua sudah punya akun. &#x2705;\n</pre>"; exit; }

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

$ok=0; $skip=0; $err=0; $year=date('Y');
foreach ($rows as $r) {
    try {
        $prodi = $r['prodi_pilihan'] ?: ($r['jurusan_pilihan'] ?: '');
        $code  = $prodiCodes[$prodi] ?? '101';
        $nim   = nextNIM($db, $year.$code, $nextSeq);
        $c = 'abcdefghjkmnpqrstuvwxyz23456789';
        $pwd = ''; for ($i=0;$i<8;$i++) $pwd .= $c[random_int(0,strlen($c)-1)];
        $hash  = password_hash($pwd, PASSWORD_DEFAULT);
        $email = $r['email'] ?: '';
        $nama  = $r['nama']  ?: '';

        $db->prepare('INSERT INTO pmb_accounts(registration_id,nim,email,password_hash,plain_password,is_validated,validated_by,validated_at) VALUES(?,?,?,?,?,1,"bap",NOW())')->execute([$r['id'],$nim,$email,$hash,$pwd]);
        $db->prepare('INSERT INTO profiles(nim,nama,email,prodi,password) VALUES(?,?,?,?,?) ON DUPLICATE KEY UPDATE nama=VALUES(nama),email=VALUES(email)')->execute([$nim,$nama,$email,$prodi,$hash]);
        echo "&#x2705; [#{$r['id']}] $nama &rarr; <b>$nim</b> | $pwd\n";
        $ok++;
    } catch (Exception $e) {
        if (str_contains($e->getMessage(),'registration_id')) {
            echo "&#x23ED; [#{$r['id']}] skip (akun sudah ada)\n"; $skip++;
        } else {
            echo "&#x274C; [#{$r['id']}] {$r['nama']}: {$e->getMessage()}\n"; $err++;
        }
    }
}
echo "\n=== <b style='color:green'>$ok dibuat</b>, $skip skip, $err error ===\n";
echo "\n&#x26A0; Hapus: rm ~/stiabayuanggajobs.online/api/fix_accounts.php\n</pre>";
