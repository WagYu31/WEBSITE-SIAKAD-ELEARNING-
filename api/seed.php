<?php
// ============================================
// Seed Script — Populate database with initial data
// POST /api/seed/akademik
// ============================================

function seedAkademik() {
    $db = getDB();

    // Check if data exists
    $count = $db->query('SELECT COUNT(*) FROM mata_kuliah')->fetchColumn();
    if ($count > 0) {
        jsonResponse(['message' => 'Data sudah ada', 'skipped' => true]);
    }

    $hashedPwd = hash('sha256', 'dosen123');

    // ============ DOSEN (63 records) ============
    $dosenData = [
        ['196504201990021001','0720046501','Prof. Dr. H. Mulyadi, M.AP.','mulyadi@stiabayuangga.ac.id','081234500001','Administrasi Publik','Dekan','','IV/d','S3 Administrasi Publik — Universitas Padjadjaran','mulyadi'],
        ['198501012010011001','0701018501','Dr. Ir. Bambang Sudarsono, M.Si.','bambang@stiabayuangga.ac.id','081234500002','Administrasi Publik','Wadek','','IV/a','S3 Ilmu Administrasi Publik — Universitas Brawijaya','bambang'],
        ['198006102006041001','0710068001','Dr. Hendra Wijaya, S.E., M.M.','hendra.wijaya@stiabayuangga.ac.id','081234500003','Administrasi Bisnis','Wadek','','IV/a','S3 Manajemen — Universitas Airlangga','hendra.wijaya'],
        ['197809152005011001','0715097801','Prof. Dr. Sri Wahyuni, M.AP.','sri.wahyuni@stiabayuangga.ac.id','081234500004','Administrasi Publik','Kaprodi','','IV/c','S3 Administrasi Publik — Universitas Indonesia','sri.wahyuni'],
        ['199001202015042001','0720019001','Dr. Rina Kartika, M.M.','rina.kartika@stiabayuangga.ac.id','081234500005','Administrasi Bisnis','Kaprodi','','III/d','S3 Manajemen SDM — Universitas Gadjah Mada','rina.kartika'],
        ['197012051996031001','0705127001','Dr. Achmad Fauzi, M.AP.','achmad.fauzi@stiabayuangga.ac.id','081234500006','Administrasi Publik','Kaprodi','','IV/b','S3 Administrasi Publik — Universitas Brawijaya','achmad.fauzi'],
        ['198308152010012001','0715088301','Dr. Yuni Rahmawati, S.Sos., M.AP.','yuni.rahmawati@stiabayuangga.ac.id','081234500007','Administrasi Publik','Kaprodi','','III/d','S3 Ilmu Administrasi — Universitas 17 Agustus Surabaya','yuni.rahmawati'],
        ['198703152012012001','0715038701','Ir. Siti Nurjanah, M.T.','siti.nurjanah@stiabayuangga.ac.id','081234500008','Administrasi Bisnis','Dosen','','III/d','S2 Teknik Informatika — ITS Surabaya','siti.nurjanah'],
        ['197205101997031001','0710057201','Dr. Agus Rahardjo, S.H., M.H.','agus.rahardjo@stiabayuangga.ac.id','081234500009','Administrasi Publik','Dosen','','IV/b','S3 Ilmu Hukum — Universitas Airlangga','agus.rahardjo'],
        ['198812102014041001','0710128801','Ir. Andi Prasetyo, M.Kom.','andi.prasetyo@stiabayuangga.ac.id','081234500010','Administrasi Bisnis','Dosen','','III/b','S2 Ilmu Komputer — Universitas Brawijaya','andi.prasetyo'],
        ['199205152018042001','0715059201','Dewi Lestari, S.AP., M.AP.','dewi.lestari@stiabayuangga.ac.id','081234500011','Administrasi Publik','Dosen','','III/b','S2 Administrasi Publik — Universitas Brawijaya','dewi.lestari'],
        ['199108252019042001','0725089101','Ratna Sari, S.Sos., M.Si.','ratna.sari@stiabayuangga.ac.id','081234500012','Administrasi Publik','Dosen','','III/a','S2 Sosiologi — Universitas Indonesia','ratna.sari'],
        ['196808151993031002','0715086801','Drs. Sugianto, M.AP.','sugianto@stiabayuangga.ac.id','081234500013','Administrasi Publik','Dosen','','IV/a','S2 Administrasi Publik — UNAIR','sugianto'],
        ['197503201999032001','0720037501','Dr. Endang Sulistyowati, M.Si.','endang.s@stiabayuangga.ac.id','081234500014','Administrasi Publik','Dosen','','IV/a','S3 Ilmu Sosial — Universitas Airlangga','endang.s'],
        ['198104102008011001','0710048101','Dr. Wahyu Hidayat, S.IP., M.Si.','wahyu.h@stiabayuangga.ac.id','081234500015','Administrasi Publik','Dosen','','III/d','S3 Ilmu Politik — Universitas Indonesia','wahyu.h'],
        ['198907252016042001','0725078901','Fitri Handayani, S.E., M.M.','fitri.h@stiabayuangga.ac.id','081234500016','Administrasi Bisnis','Dosen','','III/b','S2 Manajemen — Universitas Brawijaya','fitri.h'],
        ['197605151999031001','0715057601','Dr. Moch. Irfan, M.AP.','moch.irfan@stiabayuangga.ac.id','081234500017','Administrasi Publik','Dosen','','IV/a','S3 Administrasi Publik — Universitas Padjadjaran','moch.irfan'],
        ['199305102020042001','0710059301','Ayu Kusuma Wardani, S.AP., M.AP.','ayu.kw@stiabayuangga.ac.id','081234500018','Administrasi Publik','Dosen','','III/a','S2 Administrasi Publik — Universitas Brawijaya','ayu.kw'],
        ['197108101997031001','0710087101','Dr. Slamet Riyadi, S.Sos., M.Si.','slamet.r@stiabayuangga.ac.id','081234500019','Administrasi Publik','Dosen','','IV/a','S3 Sosiologi — Universitas Gadjah Mada','slamet.r'],
        ['198510152012012001','0715108501','Dr. Lina Marliana, S.E., M.Ak.','lina.m@stiabayuangga.ac.id','081234500020','Administrasi Bisnis','Dosen','','III/d','S3 Akuntansi — Universitas Airlangga','lina.m'],
        ['199007082017041001','0708079001','M. Rizky Fauzan, S.Kom., M.TI.','rizky.fauzan@stiabayuangga.ac.id','081234500021','Administrasi Bisnis','Dosen','','III/b','S2 Teknologi Informasi — ITS Surabaya','rizky.fauzan'],
        ['196905201993032001','0720056901','Dra. Sumarni, M.Pd.','sumarni@stiabayuangga.ac.id','081234500022','Administrasi Publik','Dosen','','IV/b','S2 Pendidikan — Universitas Negeri Malang','sumarni'],
        ['198205102008012001','0710058201','Dr. Nurul Hidayah, S.Ag., M.Si.','nurul.h@stiabayuangga.ac.id','081234500023','Administrasi Publik','Dosen','','III/d','S3 Ilmu Sosial — Universitas Muhammadiyah Malang','nurul.h'],
        ['197405201999032001','0720057401','Dr. Sri Rahayu, S.H., M.Kn.','sri.rahayu@stiabayuangga.ac.id','081234500024','Administrasi Publik','Dosen','','IV/a','S3 Ilmu Hukum — Universitas Brawijaya','sri.rahayu'],
        ['199108102019041001','0710089101','Ahmad Syarif, S.AP., M.AP.','ahmad.syarif@stiabayuangga.ac.id','081234500025','Administrasi Publik','Dosen','','III/a','S2 Administrasi Publik — Universitas Jember','ahmad.syarif'],
        ['197907152005012001','0715077901','Dr. Rini Utami, S.E., M.Si.','rini.utami@stiabayuangga.ac.id','081234500026','Administrasi Bisnis','Dosen','','III/d','S3 Ekonomi — Universitas Airlangga','rini.utami'],
        ['198605202012012001','0720058601','Dian Permata, S.Pd., M.Pd.','dian.permata@stiabayuangga.ac.id','081234500027','Administrasi Publik','Dosen','','III/c','S2 Pendidikan Bahasa Inggris — UM Malang','dian.permata'],
        ['197303101997031001','0710037301','Dr. Eko Budi Santoso, M.AP.','eko.budi@stiabayuangga.ac.id','081234500028','Administrasi Publik','Dosen','','IV/a','S3 Administrasi Publik — UNAIR','eko.budi'],
        ['199404152020042001','0715049401','Sinta Puspitasari, S.E., M.M.','sinta.p@stiabayuangga.ac.id','081234500029','Administrasi Bisnis','Dosen','','III/a','S2 Manajemen — Universitas Brawijaya','sinta.p'],
        ['198001052005011001','0705018001','Dr. Didik Supriyanto, S.Sos., M.AP.','didik.s@stiabayuangga.ac.id','081234500030','Administrasi Publik','Dosen','','III/d','S3 Administrasi Publik — Universitas 17 Agustus Surabaya','didik.s'],
        ['196712101993031001','0710126701','Drs. Ibrahim Hasan, M.Si.','ibrahim.h@stiabayuangga.ac.id','081234500031','Administrasi Publik','Dosen','','IV/b','S2 Ilmu Politik — Universitas Gadjah Mada','ibrahim.h'],
        ['198808202014042001','0720088801','Kartika Dewi, S.AP., M.AP.','kartika.d@stiabayuangga.ac.id','081234500032','Administrasi Publik','Dosen','','III/b','S2 Administrasi Publik — Universitas Jember','kartika.d'],
        ['197610151999032001','0715107601','Dr. Retno Wulandari, S.E., M.M.','retno.w@stiabayuangga.ac.id','081234500033','Administrasi Bisnis','Dosen','','IV/a','S3 Manajemen — Universitas Padjadjaran','retno.w'],
        ['199206102019041001','0710069201','Fajar Anugrah, S.Kom., M.Cs.','fajar.a@stiabayuangga.ac.id','081234500034','Administrasi Bisnis','Dosen','','III/a','S2 Computer Science — Universitas Brawijaya','fajar.a'],
        ['197201051996031001','0705017201','Drs. H. Mujib Harianto, M.AP.','mujib.h@stiabayuangga.ac.id','081234500035','Administrasi Publik','Dosen','','IV/b','S2 Administrasi Publik — UNAIR','mujib.h'],
        ['198505052012012001','0705058501','Dr. Maya Anggraini, S.Sos., M.Si.','maya.a@stiabayuangga.ac.id','081234500036','Administrasi Publik','Dosen','','III/d','S3 Komunikasi — Universitas Indonesia','maya.a'],
        ['199501202021042001','0720019501','Nadia Rahma, S.AP., M.AP.','nadia.r@stiabayuangga.ac.id','081234500037','Administrasi Publik','Dosen','','III/a','S2 Administrasi Publik — Universitas Brawijaya','nadia.r'],
        ['197808102005012001','0710087801','Dr. Winarsih, S.Sos., M.Si.','winarsih@stiabayuangga.ac.id','081234500038','Administrasi Publik','Dosen','','IV/a','S3 Sosiologi — Universitas Airlangga','winarsih'],
        ['199003152017041001','0715039001','Bayu Tri Widodo, S.E., M.Ak.','bayu.tw@stiabayuangga.ac.id','081234500039','Administrasi Bisnis','Dosen','','III/b','S2 Akuntansi — Universitas Brawijaya','bayu.tw'],
        ['196601201991031001','0720016601','Prof. Dr. H. Suharto, M.AP.','suharto@stiabayuangga.ac.id','081234500040','Administrasi Publik','Dosen','','IV/d','S3 Administrasi Publik — Universitas Indonesia','suharto'],
        ['198710152014042001','0715108701','Ika Wahyuningtyas, S.AP., M.AP.','ika.w@stiabayuangga.ac.id','081234500041','Administrasi Publik','Dosen','','III/c','S2 Administrasi Publik — Universitas Jember','ika.w'],
        ['198203102008011001','0710038201','Dr. Teguh Prasetya, S.IP., M.Si.','teguh.p@stiabayuangga.ac.id','081234500042','Administrasi Publik','Dosen','','III/d','S3 Ilmu Politik — Universitas Gadjah Mada','teguh.p'],
        ['199602202022042001','0720029601','Putri Amelia, S.E., M.M.','putri.a@stiabayuangga.ac.id','081234500043','Administrasi Bisnis','Dosen','','III/a','S2 Manajemen — Universitas Airlangga','putri.a'],
        ['197505101999031001','0710057501','Dr. Anton Wibowo, S.Sos., M.AP.','anton.w@stiabayuangga.ac.id','081234500044','Administrasi Publik','Dosen','','IV/a','S3 Administrasi Publik — Universitas Brawijaya','anton.w'],
        ['198902052016042001','0705028901','Arini Dwi Lestari, S.Pd., M.Pd.','arini.dl@stiabayuangga.ac.id','081234500045','Administrasi Publik','Dosen','','III/b','S2 Pendidikan — Universitas Negeri Surabaya','arini.dl'],
        ['198106102006041001','0710068101','Dr. Arief Rahman, S.E., M.Si.','arief.r@stiabayuangga.ac.id','081234500046','Administrasi Bisnis','Dosen','','III/d','S3 Ekonomi — Universitas Brawijaya','arief.r'],
        ['199307152021042001','0715079301','Lisa Permata Sari, S.Sos., M.AP.','lisa.ps@stiabayuangga.ac.id','081234500047','Administrasi Publik','Dosen','','III/a','S2 Administrasi Publik — Universitas Muhammadiyah Malang','lisa.ps'],
        ['197609201999031001','0720097601','Dr. H. Sunaryo, S.H., M.Hum.','sunaryo@stiabayuangga.ac.id','081234500048','Administrasi Publik','Dosen','','IV/a','S3 Ilmu Hukum — Universitas Padjadjaran','sunaryo'],
        ['199109242006016001','0724083001','Moh. Khoirul Anam, M.Pd.','khoirul.anam@stiabayuangga.ac.id','081234500049','Administrasi Publik','Dosen','','III/c','S2 Pendidikan — Universitas Negeri Surabaya','khoirul.anam'],
        ['199101182003014002','0722093001','Farasandya Amalia Hapsari, S.Kom., M.AP.','farasandya@stiabayuangga.ac.id','081234500050','Administrasi Bisnis','Dosen','','III/c','S2 Administrasi Publik — Universitas Brawijaya','farasandya'],
        ['198907142004014003','0728082001','Ely Retnowulan, M.Pd.','ely.retnowulan@stiabayuangga.ac.id','081234500051','Administrasi Publik','Dosen','','III/c','S2 Pendidikan — Universitas Negeri Malang','ely.retnowulan'],
        ['198712092001019004','0716089001','Dr. Novi Sri Sandyawati, S.Sos., M.Si.','novi.sandyawati@stiabayuangga.ac.id','081234500052','Administrasi Publik','Dosen','','III/d','S3 Ilmu Sosial — Universitas Airlangga','novi.sandyawati'],
        ['199209272008013005','0716080001','Dr. Moch. Anton Maulana, S.E., M.M.','anton.maulana@stiabayuangga.ac.id','081234500053','Administrasi Bisnis','Dosen','','III/d','S3 Manajemen — Universitas Brawijaya','anton.maulana'],
        ['198804072001016006','0720083001','Pungky Praja Jatmika, S.IP., M.Si.','pungky.jatmika@stiabayuangga.ac.id','081234500054','Administrasi Publik','Dosen','','III/c','S2 Ilmu Politik — Universitas Airlangga','pungky.jatmika'],
        ['199011132002016007','0719091001','Sandy Irawan, S.Kom., M.Kom.','sandy.irawan@stiabayuangga.ac.id','081234500055','Administrasi Bisnis','Dosen','','III/c','S2 Ilmu Komputer — Institut Teknologi Sepuluh Nopember','sandy.irawan'],
        ['198901092006017008','0729089001','Marsinem, S.Sos., M.Si.','marsinem@stiabayuangga.ac.id','081234500056','Administrasi Publik','Dosen','','III/c','S2 Ilmu Sosial — Universitas Jember','marsinem'],
        ['199203162009015009','0727080001','Imam Suliyono, S.Sos., M.M.','imam.suliyono@stiabayuangga.ac.id','081234500057','Administrasi Bisnis','Dosen','','III/d','S2 Manajemen — Universitas Brawijaya','imam.suliyono'],
        ['198312282002019010','0711082001','Bambang Lasmono, S.E., M.M.','bambang.lasmono@stiabayuangga.ac.id','081234500058','Administrasi Bisnis','Dosen','','III/c','S2 Manajemen — Universitas Airlangga','bambang.lasmono'],
        ['199101152003016011','0723081001','Noor Farid, S.Sos., M.Si.','noor.farid@stiabayuangga.ac.id','081234500059','Administrasi Publik','Dosen','','III/c','S2 Ilmu Sosial — Universitas Brawijaya','noor.farid'],
        ['198308262003017012','0711088001','Nur Aini, S.E., M.M.','nur.aini@stiabayuangga.ac.id','081234500060','Administrasi Bisnis','Dosen','','III/c','S2 Manajemen — Universitas Negeri Surabaya','nur.aini'],
        ['198306182002017013','0721094001','Eko Wicaksono, S.E., M.Si.','eko.wicaksono@stiabayuangga.ac.id','081234500061','Administrasi Bisnis','Dosen','','III/c','S2 Ilmu Ekonomi — Universitas Airlangga','eko.wicaksono'],
        ['199201282004013014','0718089001','Dr. Edy Susanto, S.E., M.M.','edy.susanto@stiabayuangga.ac.id','081234500062','Administrasi Bisnis','Dosen','','III/d','S3 Manajemen — Universitas Brawijaya','edy.susanto'],
        ['198907192004015015','0711085001','Dr. Agung Subagyo, S.STP., M.Si.','agung.subagyo@stiabayuangga.ac.id','081234500063','Administrasi Publik','Dosen','','IV/a','S3 Ilmu Administrasi — Universitas Indonesia','agung.subagyo'],
    ];

    $dosenStmt = $db->prepare('INSERT INTO dosen (nip,nidn,nama,email,telepon,prodi,jabatan_fungsional,jabatan_struktural,golongan,pendidikan,username,password,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)');

    $dosenCount = 0;
    foreach ($dosenData as $d) {
        $dosenStmt->execute([$d[0],$d[1],$d[2],$d[3],$d[4],$d[5],$d[6],$d[7],$d[8],$d[9],$d[10],$hashedPwd,'Aktif']);
        $dosenCount++;
    }

    // ============ MATA KULIAH ============
    $mkData = [
        ['AP201','Pengantar Ilmu Administrasi',3,1,'Administrasi Publik'],
        ['AP202','Pendidikan Pancasila',2,1,'Administrasi Publik'],
        ['AP203','Bahasa Indonesia',2,1,'Administrasi Publik'],
        ['AP204','Pengantar Ekonomi',3,1,'Administrasi Publik'],
        ['AP205','Sosiologi',3,1,'Administrasi Publik'],
        ['AP211','Teori Organisasi',3,2,'Administrasi Publik'],
        ['AP212','Hukum Tata Negara',3,2,'Administrasi Publik'],
        ['AP213','Matematika Dasar',3,2,'Administrasi Publik'],
        ['AP214','Bahasa Inggris',2,2,'Administrasi Publik'],
        ['AP215','Ilmu Politik',3,2,'Administrasi Publik'],
        ['AP301','Kebijakan Publik',3,3,'Administrasi Publik'],
        ['AP302','Administrasi Keuangan',3,3,'Administrasi Publik'],
        ['AP303','Manajemen Proyek',3,3,'Administrasi Publik'],
        ['AP304','Metodologi Penelitian',3,3,'Administrasi Publik'],
        ['AP305','Psikologi Sosial',2,3,'Administrasi Publik'],
        ['AP401','Kebijakan Publik Lanjutan',3,4,'Administrasi Publik'],
        ['AP402','Statistik Sosial',3,4,'Administrasi Publik'],
        ['AP403','Teori Administrasi',3,4,'Administrasi Publik'],
        ['AP404','Hukum Administrasi',2,4,'Administrasi Publik'],
        ['AP405','Manajemen SDM',3,4,'Administrasi Publik'],
        ['AP406','Sistem Informasi Manajemen',3,4,'Administrasi Publik'],
        ['AP407','Etika Administrasi',2,4,'Administrasi Publik'],
    ];

    $mkStmt = $db->prepare('INSERT INTO mata_kuliah (kode,nama,sks,semester,prodi) VALUES (?,?,?,?,?)');
    $mkMap = [];
    foreach ($mkData as $mk) {
        $mkStmt->execute($mk);
        $mkMap[$mk[0]] = $db->lastInsertId();
    }

    // ============ KRS (Semester 4) ============
    $nim = '2024101001';
    $krsData = [
        [$nim,4,'Genap 2025/2026',$mkMap['AP401'],'A','EU101','Dr. Bambang Sudarsono, M.Si.','Senin, 07:30-09:10','R.201','Reguler','Disetujui'],
        [$nim,4,'Genap 2025/2026',$mkMap['AP402'],'A','EU101','Ir. Siti Nurjanah, M.T.','Senin, 09:20-11:00','R.305','Reguler','Disetujui'],
        [$nim,4,'Genap 2025/2026',$mkMap['AP403'],'A','EU102','Prof. Dr. Sri Wahyuni, M.AP.','Selasa, 07:30-09:10','R.102','Reguler','Disetujui'],
        [$nim,4,'Genap 2025/2026',$mkMap['AP404'],'A','EU101','Dr. Agus Rahardjo, S.H., M.H.','Selasa, 13:00-14:40','R.201','Reguler','Disetujui'],
        [$nim,4,'Genap 2025/2026',$mkMap['AP405'],'A','EU101','Dr. Rina Kartika, M.M.','Rabu, 07:30-09:10','R.204','Reguler','Disetujui'],
        [$nim,4,'Genap 2025/2026',$mkMap['AP406'],'A','EU101','Ir. Andi Prasetyo, M.Kom.','Kamis, 09:20-11:00','Lab','Reguler','Disetujui'],
        [$nim,4,'Genap 2025/2026',$mkMap['AP407'],'B','EU102','Dr. Bambang Sudarsono, M.Si.','Jumat, 07:30-09:10','R.301','Reguler','Disetujui'],
    ];

    $krsStmt = $db->prepare('INSERT INTO krs (nim,semester,tahun_ajaran,mata_kuliah_id,kelas,seksi,dosen_nama,waktu,ruang,jenis_kelas,status) VALUES (?,?,?,?,?,?,?,?,?,?,?)');
    foreach ($krsData as $k) { $krsStmt->execute($k); }

    // ============ NILAI (Semester 1-3) ============
    $nilaiData = [
        [$nim,$mkMap['AP201'],1,'A',4.0],[$nim,$mkMap['AP202'],1,'A',4.0],[$nim,$mkMap['AP203'],1,'B+',3.3],
        [$nim,$mkMap['AP204'],1,'B+',3.3],[$nim,$mkMap['AP205'],1,'A-',3.7],
        [$nim,$mkMap['AP211'],2,'A-',3.7],[$nim,$mkMap['AP212'],2,'B+',3.3],[$nim,$mkMap['AP213'],2,'B',3.0],
        [$nim,$mkMap['AP214'],2,'A',4.0],[$nim,$mkMap['AP215'],2,'A',4.0],
        [$nim,$mkMap['AP301'],3,'A-',3.7],[$nim,$mkMap['AP302'],3,'B+',3.3],[$nim,$mkMap['AP303'],3,'A',4.0],
        [$nim,$mkMap['AP304'],3,'B+',3.3],[$nim,$mkMap['AP305'],3,'A',4.0],
    ];

    $nilaiStmt = $db->prepare('INSERT INTO nilai (nim,mata_kuliah_id,semester,nilai,bobot) VALUES (?,?,?,?,?)');
    foreach ($nilaiData as $n) { $nilaiStmt->execute($n); }

    jsonResponse([
        'message' => '✅ Seed berhasil!',
        'dosen' => $dosenCount,
        'mata_kuliah' => count($mkData),
        'krs' => count($krsData),
        'nilai' => count($nilaiData),
    ], 201);
}
