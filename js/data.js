// ============================================
// STIA BAYUANGGA - Dummy Data Store
// ============================================

export const CAMPUS = {
  name: 'STIA BAYUANGGA',
  fullName: 'Sekolah Tinggi Ilmu Administrasi Bayuangga',
  location: 'Probolinggo, Jawa Timur',
  address: 'Jl. Raya Dringu No.62, Probolinggo, Jawa Timur 67271',
  phone: '(0335) 421173',
  email: 'info@stiabayuangga.ac.id',
  website: 'www.stiabayuangga.ac.id',
  tagline: 'Mencetak Lulusan Unggul di Bidang Administrasi',
  visi: 'Menjadi Perguruan Tinggi unggul dalam pengembangan Ilmu Administrasi yang berdaya saing global dan bermoral Pancasila.',
  misi: [
    'Menyelenggarakan pendidikan tinggi di bidang Ilmu Administrasi yang berkualitas dan berdaya saing.',
    'Melaksanakan penelitian dan pengabdian kepada masyarakat di bidang Ilmu Administrasi.',
    'Mengembangkan kerjasama dengan berbagai pihak dalam dan luar negeri.',
    'Membangun tata kelola perguruan tinggi yang baik dan transparan.'
  ],
  stats: {
    mahasiswa: 1250,
    dosen: 48,
    prodi: 4,
    akreditasi: 'B'
  }
};

export const PRODI_LIST = [
  {
    id: 1,
    name: 'Administrasi Negara',
    jenjang: 'S1',
    akreditasi: 'B',
    desc: 'Program studi yang mempelajari teori dan praktik administrasi pemerintahan, kebijakan publik, dan manajemen organisasi publik.',
    mahasiswa: 420,
    dosen: 15,
    icon: '🏛️'
  },
  {
    id: 2,
    name: 'Administrasi Niaga',
    jenjang: 'S1',
    akreditasi: 'B',
    desc: 'Mempelajari manajemen bisnis, pemasaran, keuangan, dan strategi bisnis untuk menjadi profesional di dunia usaha.',
    mahasiswa: 380,
    dosen: 14,
    icon: '💼'
  }
];


export const DOSEN_LIST = [
  // === PIMPINAN ===
  { id: 'DSN001', nip: '196504201990021001', nidn: '0720046501', nama: 'Prof. Dr. H. Mulyadi, M.AP.', email: 'mulyadi@stiabayuangga.ac.id', telepon: '081234500001', jabatanFungsional: 'Dekan', golongan: 'IV/d', pendidikan: 'S3 Administrasi Publik — Universitas Padjadjaran', bidangKeahlian: ['Manajemen Publik','Kepemimpinan','Reformasi Birokrasi'], mataKuliah: ['Kepemimpinan Sektor Publik'], totalMK: 1, totalMahasiswaBimbingan: 5, totalPublikasi: 56, totalPenelitian: 18, totalPengabdian: 12, status: 'Aktif', avatar: null, username: 'mulyadi', password: 'dosen123' },
  { id: 'DSN002', nip: '198501012010011001', nidn: '0701018501', nama: 'Dr. Ir. Bambang Sudarsono, M.Si.', email: 'bambang@stiabayuangga.ac.id', telepon: '081234500002', jabatanFungsional: 'Wadek', golongan: 'IV/a', pendidikan: 'S3 Ilmu Administrasi Publik — Universitas Brawijaya', bidangKeahlian: ['Kebijakan Publik','Governance','Etika Administrasi'], mataKuliah: ['Kebijakan Publik','Etika Administrasi'], totalMK: 2, totalMahasiswaBimbingan: 12, totalPublikasi: 24, totalPenelitian: 8, totalPengabdian: 6, status: 'Aktif', avatar: null, username: 'bambang', password: 'dosen123' },
  { id: 'DSN003', nip: '198006102006041001', nidn: '0710068001', nama: 'Dr. Hendra Wijaya, S.E., M.M.', email: 'hendra.wijaya@stiabayuangga.ac.id', telepon: '081234500003', jabatanFungsional: 'Wadek', golongan: 'IV/a', pendidikan: 'S3 Manajemen — Universitas Airlangga', bidangKeahlian: ['Manajemen Keuangan','Kewirausahaan','Pemasaran'], mataKuliah: ['Manajemen Keuangan','Kewirausahaan'], totalMK: 2, totalMahasiswaBimbingan: 11, totalPublikasi: 20, totalPenelitian: 7, totalPengabdian: 5, status: 'Aktif', avatar: null, username: 'hendra.wijaya', password: 'dosen123' },

  // === KAPRODI (4 sesuai prodi) ===
  { id: 'DSN004', nip: '197809152005011001', nidn: '0715097801', nama: 'Prof. Dr. Sri Wahyuni, M.AP.', email: 'sri.wahyuni@stiabayuangga.ac.id', telepon: '081234500004', jabatanFungsional: 'Kaprodi', golongan: 'IV/c', pendidikan: 'S3 Administrasi Publik — Universitas Indonesia', bidangKeahlian: ['Teori Administrasi','Manajemen Publik','Good Governance'], mataKuliah: ['Teori Administrasi','Manajemen Pelayanan Publik'], totalMK: 2, totalMahasiswaBimbingan: 15, totalPublikasi: 42, totalPenelitian: 14, totalPengabdian: 10, status: 'Aktif', avatar: null, username: 'sri.wahyuni', password: 'dosen123' },
  { id: 'DSN005', nip: '199001202015042001', nidn: '0720019001', nama: 'Dr. Rina Kartika, M.M.', email: 'rina.kartika@stiabayuangga.ac.id', telepon: '081234500005', jabatanFungsional: 'Kaprodi', golongan: 'III/d', pendidikan: 'S3 Manajemen SDM — Universitas Gadjah Mada', bidangKeahlian: ['Manajemen SDM','Perilaku Organisasi','Psikologi Industri'], mataKuliah: ['Manajemen SDM','Perilaku Organisasi'], totalMK: 2, totalMahasiswaBimbingan: 9, totalPublikasi: 12, totalPenelitian: 4, totalPengabdian: 5, status: 'Aktif', avatar: null, username: 'rina.kartika', password: 'dosen123' },
  { id: 'DSN006', nip: '197012051996031001', nidn: '0705127001', nama: 'Dr. Achmad Fauzi, M.AP.', email: 'achmad.fauzi@stiabayuangga.ac.id', telepon: '081234500006', jabatanFungsional: 'Kaprodi', golongan: 'IV/b', pendidikan: 'S3 Administrasi Publik — Universitas Brawijaya', bidangKeahlian: ['Kebijakan Publik','Desentralisasi','Otonomi Daerah'], mataKuliah: ['Analisis Kebijakan Publik','Desentralisasi'], totalMK: 2, totalMahasiswaBimbingan: 8, totalPublikasi: 28, totalPenelitian: 10, totalPengabdian: 7, status: 'Aktif', avatar: null, username: 'achmad.fauzi', password: 'dosen123' },
  { id: 'DSN007', nip: '198308152010012001', nidn: '0715088301', nama: 'Dr. Yuni Rahmawati, S.Sos., M.AP.', email: 'yuni.rahmawati@stiabayuangga.ac.id', telepon: '081234500007', jabatanFungsional: 'Kaprodi', golongan: 'III/d', pendidikan: 'S3 Ilmu Administrasi — Universitas 17 Agustus Surabaya', bidangKeahlian: ['Administrasi Perkantoran','Tata Kelola','Kesekretariatan'], mataKuliah: ['Administrasi Perkantoran','Manajemen Kesekretariatan'], totalMK: 2, totalMahasiswaBimbingan: 10, totalPublikasi: 14, totalPenelitian: 5, totalPengabdian: 6, status: 'Aktif', avatar: null, username: 'yuni.rahmawati', password: 'dosen123' },

  // === DOSEN ===
  { id: 'DSN008', nip: '198703152012012001', nidn: '0715038701', nama: 'Ir. Siti Nurjanah, M.T.', email: 'siti.nurjanah@stiabayuangga.ac.id', telepon: '081234500008', jabatanFungsional: 'Dosen', golongan: 'III/d', pendidikan: 'S2 Teknik Informatika — ITS Surabaya', bidangKeahlian: ['Statistik Sosial','Metode Penelitian','Data Analytics'], mataKuliah: ['Statistik Sosial','Metodologi Penelitian'], totalMK: 2, totalMahasiswaBimbingan: 8, totalPublikasi: 15, totalPenelitian: 5, totalPengabdian: 4, status: 'Aktif', avatar: null, username: 'siti.nurjanah', password: 'dosen123' },
  { id: 'DSN009', nip: '197205101997031001', nidn: '0710057201', nama: 'Dr. Agus Rahardjo, S.H., M.H.', email: 'agus.rahardjo@stiabayuangga.ac.id', telepon: '081234500009', jabatanFungsional: 'Dosen', golongan: 'IV/b', pendidikan: 'S3 Ilmu Hukum — Universitas Airlangga', bidangKeahlian: ['Hukum Administrasi','Hukum Tata Negara','Otonomi Daerah'], mataKuliah: ['Hukum Administrasi','Hukum Tata Negara'], totalMK: 2, totalMahasiswaBimbingan: 10, totalPublikasi: 18, totalPenelitian: 6, totalPengabdian: 8, status: 'Aktif', avatar: null, username: 'agus.rahardjo', password: 'dosen123' },
  { id: 'DSN010', nip: '198812102014041001', nidn: '0710128801', nama: 'Ir. Andi Prasetyo, M.Kom.', email: 'andi.prasetyo@stiabayuangga.ac.id', telepon: '081234500010', jabatanFungsional: 'Dosen', golongan: 'III/b', pendidikan: 'S2 Ilmu Komputer — Universitas Brawijaya', bidangKeahlian: ['Sistem Informasi','E-Government','Database Management'], mataKuliah: ['Sistem Informasi Manajemen','E-Government'], totalMK: 2, totalMahasiswaBimbingan: 7, totalPublikasi: 8, totalPenelitian: 3, totalPengabdian: 3, status: 'Aktif', avatar: null, username: 'andi.prasetyo', password: 'dosen123' },
  { id: 'DSN011', nip: '199205152018042001', nidn: '0715059201', nama: 'Dewi Lestari, S.AP., M.AP.', email: 'dewi.lestari@stiabayuangga.ac.id', telepon: '081234500011', jabatanFungsional: 'Dosen', golongan: 'III/b', pendidikan: 'S2 Administrasi Publik — Universitas Brawijaya', bidangKeahlian: ['Administrasi Keuangan','Perencanaan Pembangunan'], mataKuliah: ['Administrasi Keuangan Negara','Perencanaan Pembangunan'], totalMK: 2, totalMahasiswaBimbingan: 6, totalPublikasi: 6, totalPenelitian: 2, totalPengabdian: 3, status: 'Aktif', avatar: null, username: 'dewi.lestari', password: 'dosen123' },
  { id: 'DSN012', nip: '199108252019042001', nidn: '0725089101', nama: 'Ratna Sari, S.Sos., M.Si.', email: 'ratna.sari@stiabayuangga.ac.id', telepon: '081234500012', jabatanFungsional: 'Dosen', golongan: 'III/a', pendidikan: 'S2 Sosiologi — Universitas Indonesia', bidangKeahlian: ['Sosiologi','Ilmu Politik','Komunikasi Publik'], mataKuliah: ['Sosiologi','Ilmu Politik','Komunikasi Publik'], totalMK: 3, totalMahasiswaBimbingan: 4, totalPublikasi: 5, totalPenelitian: 2, totalPengabdian: 2, status: 'Aktif', avatar: null, username: 'ratna.sari', password: 'dosen123' },
  { id: 'DSN013', nip: '196808151993031002', nidn: '0715086801', nama: 'Drs. Sugianto, M.AP.', email: 'sugianto@stiabayuangga.ac.id', telepon: '081234500013', jabatanFungsional: 'Dosen', golongan: 'IV/a', pendidikan: 'S2 Administrasi Publik — UNAIR', bidangKeahlian: ['Administrasi Negara','Birokrasi','Organisasi Publik'], mataKuliah: ['Pengantar Ilmu Administrasi Negara','Birokrasi Indonesia'], totalMK: 2, totalMahasiswaBimbingan: 8, totalPublikasi: 16, totalPenelitian: 7, totalPengabdian: 9, status: 'Aktif', avatar: null, username: 'sugianto', password: 'dosen123' },
  { id: 'DSN014', nip: '197503201999032001', nidn: '0720037501', nama: 'Dr. Endang Sulistyowati, M.Si.', email: 'endang.s@stiabayuangga.ac.id', telepon: '081234500014', jabatanFungsional: 'Dosen', golongan: 'IV/a', pendidikan: 'S3 Ilmu Sosial — Universitas Airlangga', bidangKeahlian: ['Pemberdayaan Masyarakat','Gender dan Pembangunan'], mataKuliah: ['Pemberdayaan Masyarakat','Sosiologi Pembangunan'], totalMK: 2, totalMahasiswaBimbingan: 7, totalPublikasi: 22, totalPenelitian: 9, totalPengabdian: 11, status: 'Aktif', avatar: null, username: 'endang.s', password: 'dosen123' },
  { id: 'DSN015', nip: '198104102008011001', nidn: '0710048101', nama: 'Dr. Wahyu Hidayat, S.IP., M.Si.', email: 'wahyu.h@stiabayuangga.ac.id', telepon: '081234500015', jabatanFungsional: 'Dosen', golongan: 'III/d', pendidikan: 'S3 Ilmu Politik — Universitas Indonesia', bidangKeahlian: ['Ilmu Politik','Sistem Politik','Pemilu dan Demokrasi'], mataKuliah: ['Ilmu Politik','Sistem Pemerintahan Indonesia'], totalMK: 2, totalMahasiswaBimbingan: 6, totalPublikasi: 14, totalPenelitian: 5, totalPengabdian: 4, status: 'Aktif', avatar: null, username: 'wahyu.h', password: 'dosen123' },
  { id: 'DSN016', nip: '198907252016042001', nidn: '0725078901', nama: 'Fitri Handayani, S.E., M.M.', email: 'fitri.h@stiabayuangga.ac.id', telepon: '081234500016', jabatanFungsional: 'Dosen', golongan: 'III/b', pendidikan: 'S2 Manajemen — Universitas Brawijaya', bidangKeahlian: ['Manajemen Pemasaran','Digital Marketing','Riset Pasar'], mataKuliah: ['Manajemen Pemasaran','Digital Marketing'], totalMK: 2, totalMahasiswaBimbingan: 5, totalPublikasi: 7, totalPenelitian: 3, totalPengabdian: 2, status: 'Aktif', avatar: null, username: 'fitri.h', password: 'dosen123' },
  { id: 'DSN017', nip: '197605151999031001', nidn: '0715057601', nama: 'Dr. Moch. Irfan, M.AP.', email: 'moch.irfan@stiabayuangga.ac.id', telepon: '081234500017', jabatanFungsional: 'Dosen', golongan: 'IV/a', pendidikan: 'S3 Administrasi Publik — Universitas Padjadjaran', bidangKeahlian: ['Pelayanan Publik','Inovasi Pemerintahan','Smart City'], mataKuliah: ['Manajemen Pelayanan Publik','Smart Governance'], totalMK: 2, totalMahasiswaBimbingan: 9, totalPublikasi: 19, totalPenelitian: 8, totalPengabdian: 6, status: 'Aktif', avatar: null, username: 'moch.irfan', password: 'dosen123' },
  { id: 'DSN018', nip: '199305102020042001', nidn: '0710059301', nama: 'Ayu Kusuma Wardani, S.AP., M.AP.', email: 'ayu.kw@stiabayuangga.ac.id', telepon: '081234500018', jabatanFungsional: 'Dosen', golongan: 'III/a', pendidikan: 'S2 Administrasi Publik — Universitas Brawijaya', bidangKeahlian: ['E-Government','Transformasi Digital','Open Data'], mataKuliah: ['E-Government','Transformasi Digital'], totalMK: 2, totalMahasiswaBimbingan: 3, totalPublikasi: 4, totalPenelitian: 2, totalPengabdian: 1, status: 'Aktif', avatar: null, username: 'ayu.kw', password: 'dosen123' },
  { id: 'DSN019', nip: '197108101997031001', nidn: '0710087101', nama: 'Dr. Slamet Riyadi, S.Sos., M.Si.', email: 'slamet.r@stiabayuangga.ac.id', telepon: '081234500019', jabatanFungsional: 'Dosen', golongan: 'IV/a', pendidikan: 'S3 Sosiologi — Universitas Gadjah Mada', bidangKeahlian: ['Sosiologi','Antropologi','Kearifan Lokal'], mataKuliah: ['Sosiologi','Antropologi Budaya'], totalMK: 2, totalMahasiswaBimbingan: 7, totalPublikasi: 17, totalPenelitian: 8, totalPengabdian: 10, status: 'Aktif', avatar: null, username: 'slamet.r', password: 'dosen123' },
  { id: 'DSN020', nip: '198510152012012001', nidn: '0715108501', nama: 'Dr. Lina Marliana, S.E., M.Ak.', email: 'lina.m@stiabayuangga.ac.id', telepon: '081234500020', jabatanFungsional: 'Dosen', golongan: 'III/d', pendidikan: 'S3 Akuntansi — Universitas Airlangga', bidangKeahlian: ['Akuntansi Sektor Publik','Auditing','Penganggaran'], mataKuliah: ['Akuntansi Sektor Publik','Auditing'], totalMK: 2, totalMahasiswaBimbingan: 6, totalPublikasi: 11, totalPenelitian: 4, totalPengabdian: 3, status: 'Aktif', avatar: null, username: 'lina.m', password: 'dosen123' },
  { id: 'DSN021', nip: '199007082017041001', nidn: '0708079001', nama: 'M. Rizky Fauzan, S.Kom., M.TI.', email: 'rizky.fauzan@stiabayuangga.ac.id', telepon: '081234500021', jabatanFungsional: 'Dosen', golongan: 'III/b', pendidikan: 'S2 Teknologi Informasi — ITS Surabaya', bidangKeahlian: ['Pemrograman Web','Cloud Computing','Big Data'], mataKuliah: ['Pemrograman','Basis Data'], totalMK: 2, totalMahasiswaBimbingan: 4, totalPublikasi: 6, totalPenelitian: 2, totalPengabdian: 1, status: 'Aktif', avatar: null, username: 'rizky.fauzan', password: 'dosen123' },
  { id: 'DSN022', nip: '196905201993032001', nidn: '0720056901', nama: 'Dra. Sumarni, M.Pd.', email: 'sumarni@stiabayuangga.ac.id', telepon: '081234500022', jabatanFungsional: 'Dosen', golongan: 'IV/b', pendidikan: 'S2 Pendidikan — Universitas Negeri Malang', bidangKeahlian: ['Bahasa Indonesia','Penulisan Ilmiah','Komunikasi'], mataKuliah: ['Bahasa Indonesia','Teknik Penulisan Ilmiah'], totalMK: 2, totalMahasiswaBimbingan: 5, totalPublikasi: 10, totalPenelitian: 3, totalPengabdian: 8, status: 'Aktif', avatar: null, username: 'sumarni', password: 'dosen123' },
  { id: 'DSN023', nip: '198205102008012001', nidn: '0710058201', nama: 'Dr. Nurul Hidayah, S.Ag., M.Si.', email: 'nurul.h@stiabayuangga.ac.id', telepon: '081234500023', jabatanFungsional: 'Dosen', golongan: 'III/d', pendidikan: 'S3 Ilmu Sosial — Universitas Muhammadiyah Malang', bidangKeahlian: ['Pendidikan Pancasila','Kewarganegaraan','Etika'], mataKuliah: ['Pendidikan Pancasila','Pendidikan Kewarganegaraan'], totalMK: 2, totalMahasiswaBimbingan: 4, totalPublikasi: 9, totalPenelitian: 3, totalPengabdian: 5, status: 'Aktif', avatar: null, username: 'nurul.h', password: 'dosen123' },
  { id: 'DSN024', nip: '197405201999032001', nidn: '0720057401', nama: 'Dr. Sri Rahayu, S.H., M.Kn.', email: 'sri.rahayu@stiabayuangga.ac.id', telepon: '081234500024', jabatanFungsional: 'Dosen', golongan: 'IV/a', pendidikan: 'S3 Ilmu Hukum — Universitas Brawijaya', bidangKeahlian: ['Hukum Perdata','Hukum Bisnis','Kontrak'], mataKuliah: ['Hukum Bisnis','Hukum Perdata'], totalMK: 2, totalMahasiswaBimbingan: 6, totalPublikasi: 15, totalPenelitian: 5, totalPengabdian: 4, status: 'Aktif', avatar: null, username: 'sri.rahayu', password: 'dosen123' },
  { id: 'DSN025', nip: '199108102019041001', nidn: '0710089101', nama: 'Ahmad Syarif, S.AP., M.AP.', email: 'ahmad.syarif@stiabayuangga.ac.id', telepon: '081234500025', jabatanFungsional: 'Dosen', golongan: 'III/a', pendidikan: 'S2 Administrasi Publik — Universitas Jember', bidangKeahlian: ['Manajemen Proyek','Pembangunan Daerah'], mataKuliah: ['Manajemen Proyek','Perencanaan Wilayah'], totalMK: 2, totalMahasiswaBimbingan: 3, totalPublikasi: 4, totalPenelitian: 1, totalPengabdian: 2, status: 'Aktif', avatar: null, username: 'ahmad.syarif', password: 'dosen123' },
  { id: 'DSN026', nip: '197907152005012001', nidn: '0715077901', nama: 'Dr. Rini Utami, S.E., M.Si.', email: 'rini.utami@stiabayuangga.ac.id', telepon: '081234500026', jabatanFungsional: 'Dosen', golongan: 'III/d', pendidikan: 'S3 Ekonomi — Universitas Airlangga', bidangKeahlian: ['Ekonomi Publik','Ekonomi Pembangunan','Mikroekonomi'], mataKuliah: ['Pengantar Ekonomi','Ekonomi Pembangunan'], totalMK: 2, totalMahasiswaBimbingan: 7, totalPublikasi: 13, totalPenelitian: 5, totalPengabdian: 3, status: 'Aktif', avatar: null, username: 'rini.utami', password: 'dosen123' },
  { id: 'DSN027', nip: '198605202012012001', nidn: '0720058601', nama: 'Dian Permata, S.Pd., M.Pd.', email: 'dian.permata@stiabayuangga.ac.id', telepon: '081234500027', jabatanFungsional: 'Dosen', golongan: 'III/c', pendidikan: 'S2 Pendidikan Bahasa Inggris — UM Malang', bidangKeahlian: ['Bahasa Inggris','TOEFL Preparation','Academic Writing'], mataKuliah: ['Bahasa Inggris','Academic English'], totalMK: 2, totalMahasiswaBimbingan: 3, totalPublikasi: 6, totalPenelitian: 2, totalPengabdian: 3, status: 'Aktif', avatar: null, username: 'dian.permata', password: 'dosen123' },
  { id: 'DSN028', nip: '197303101997031001', nidn: '0710037301', nama: 'Dr. Eko Budi Santoso, M.AP.', email: 'eko.budi@stiabayuangga.ac.id', telepon: '081234500028', jabatanFungsional: 'Dosen', golongan: 'IV/a', pendidikan: 'S3 Administrasi Publik — UNAIR', bidangKeahlian: ['Tata Kelola Pemerintahan','Reformasi Birokrasi','Akuntabilitas'], mataKuliah: ['Tata Kelola Pemerintahan','Etika Pejabat Publik'], totalMK: 2, totalMahasiswaBimbingan: 8, totalPublikasi: 20, totalPenelitian: 9, totalPengabdian: 7, status: 'Aktif', avatar: null, username: 'eko.budi', password: 'dosen123' },
  { id: 'DSN029', nip: '199404152020042001', nidn: '0715049401', nama: 'Sinta Puspitasari, S.E., M.M.', email: 'sinta.p@stiabayuangga.ac.id', telepon: '081234500029', jabatanFungsional: 'Dosen', golongan: 'III/a', pendidikan: 'S2 Manajemen — Universitas Brawijaya', bidangKeahlian: ['Manajemen Operasional','Supply Chain','Logistik'], mataKuliah: ['Manajemen Operasional','Supply Chain Management'], totalMK: 2, totalMahasiswaBimbingan: 3, totalPublikasi: 3, totalPenelitian: 1, totalPengabdian: 1, status: 'Aktif', avatar: null, username: 'sinta.p', password: 'dosen123' },
  { id: 'DSN030', nip: '198001052005011001', nidn: '0705018001', nama: 'Dr. Didik Supriyanto, S.Sos., M.AP.', email: 'didik.s@stiabayuangga.ac.id', telepon: '081234500030', jabatanFungsional: 'Dosen', golongan: 'III/d', pendidikan: 'S3 Administrasi Publik — Universitas 17 Agustus Surabaya', bidangKeahlian: ['Administrasi Pembangunan','Perencanaan Strategis'], mataKuliah: ['Administrasi Pembangunan','Perencanaan Strategis'], totalMK: 2, totalMahasiswaBimbingan: 5, totalPublikasi: 10, totalPenelitian: 4, totalPengabdian: 5, status: 'Aktif', avatar: null, username: 'didik.s', password: 'dosen123' },
  { id: 'DSN031', nip: '196712101993031001', nidn: '0710126701', nama: 'Drs. Ibrahim Hasan, M.Si.', email: 'ibrahim.h@stiabayuangga.ac.id', telepon: '081234500031', jabatanFungsional: 'Dosen', golongan: 'IV/b', pendidikan: 'S2 Ilmu Politik — Universitas Gadjah Mada', bidangKeahlian: ['Politik Lokal','Demokrasi','Partai Politik'], mataKuliah: ['Politik Indonesia','Demokrasi dan HAM'], totalMK: 2, totalMahasiswaBimbingan: 4, totalPublikasi: 21, totalPenelitian: 10, totalPengabdian: 8, status: 'Aktif', avatar: null, username: 'ibrahim.h', password: 'dosen123' },
  { id: 'DSN032', nip: '198808202014042001', nidn: '0720088801', nama: 'Kartika Dewi, S.AP., M.AP.', email: 'kartika.d@stiabayuangga.ac.id', telepon: '081234500032', jabatanFungsional: 'Dosen', golongan: 'III/b', pendidikan: 'S2 Administrasi Publik — Universitas Jember', bidangKeahlian: ['Kebijakan Sosial','Kesejahteraan Sosial'], mataKuliah: ['Kebijakan Sosial','Kesejahteraan Rakyat'], totalMK: 2, totalMahasiswaBimbingan: 4, totalPublikasi: 5, totalPenelitian: 2, totalPengabdian: 3, status: 'Aktif', avatar: null, username: 'kartika.d', password: 'dosen123' },
  { id: 'DSN033', nip: '197610151999032001', nidn: '0715107601', nama: 'Dr. Retno Wulandari, S.E., M.M.', email: 'retno.w@stiabayuangga.ac.id', telepon: '081234500033', jabatanFungsional: 'Dosen', golongan: 'IV/a', pendidikan: 'S3 Manajemen — Universitas Padjadjaran', bidangKeahlian: ['Manajemen Strategis','Bisnis Internasional','Analisis SWOT'], mataKuliah: ['Manajemen Strategis','Bisnis Internasional'], totalMK: 2, totalMahasiswaBimbingan: 8, totalPublikasi: 18, totalPenelitian: 7, totalPengabdian: 5, status: 'Aktif', avatar: null, username: 'retno.w', password: 'dosen123' },
  { id: 'DSN034', nip: '199206102019041001', nidn: '0710069201', nama: 'Fajar Anugrah, S.Kom., M.Cs.', email: 'fajar.a@stiabayuangga.ac.id', telepon: '081234500034', jabatanFungsional: 'Dosen', golongan: 'III/a', pendidikan: 'S2 Computer Science — Universitas Brawijaya', bidangKeahlian: ['Machine Learning','Data Science','Artificial Intelligence'], mataKuliah: ['Sistem Pendukung Keputusan','Analisis Data'], totalMK: 2, totalMahasiswaBimbingan: 3, totalPublikasi: 5, totalPenelitian: 2, totalPengabdian: 1, status: 'Aktif', avatar: null, username: 'fajar.a', password: 'dosen123' },
  { id: 'DSN035', nip: '197201051996031001', nidn: '0705017201', nama: 'Drs. H. Mujib Harianto, M.AP.', email: 'mujib.h@stiabayuangga.ac.id', telepon: '081234500035', jabatanFungsional: 'Dosen', golongan: 'IV/b', pendidikan: 'S2 Administrasi Publik — UNAIR', bidangKeahlian: ['Birokrasi','Pelayanan Publik','Reformasi Administrasi'], mataKuliah: ['Reformasi Administrasi','Pelayanan Prima'], totalMK: 2, totalMahasiswaBimbingan: 6, totalPublikasi: 14, totalPenelitian: 6, totalPengabdian: 9, status: 'Aktif', avatar: null, username: 'mujib.h', password: 'dosen123' },
  { id: 'DSN036', nip: '198505052012012001', nidn: '0705058501', nama: 'Dr. Maya Anggraini, S.Sos., M.Si.', email: 'maya.a@stiabayuangga.ac.id', telepon: '081234500036', jabatanFungsional: 'Dosen', golongan: 'III/d', pendidikan: 'S3 Komunikasi — Universitas Indonesia', bidangKeahlian: ['Komunikasi Publik','Public Relations','Media Sosial'], mataKuliah: ['Komunikasi Organisasi','Public Relations'], totalMK: 2, totalMahasiswaBimbingan: 5, totalPublikasi: 11, totalPenelitian: 4, totalPengabdian: 3, status: 'Aktif', avatar: null, username: 'maya.a', password: 'dosen123' },
  { id: 'DSN037', nip: '199501202021042001', nidn: '0720019501', nama: 'Nadia Rahma, S.AP., M.AP.', email: 'nadia.r@stiabayuangga.ac.id', telepon: '081234500037', jabatanFungsional: 'Dosen', golongan: 'III/a', pendidikan: 'S2 Administrasi Publik — Universitas Brawijaya', bidangKeahlian: ['Smart City','Digital Government','Open Government'], mataKuliah: ['Smart City','Inovasi Digital Pemerintahan'], totalMK: 2, totalMahasiswaBimbingan: 2, totalPublikasi: 3, totalPenelitian: 1, totalPengabdian: 1, status: 'Aktif', avatar: null, username: 'nadia.r', password: 'dosen123' },
  { id: 'DSN038', nip: '197808102005012001', nidn: '0710087801', nama: 'Dr. Winarsih, S.Sos., M.Si.', email: 'winarsih@stiabayuangga.ac.id', telepon: '081234500038', jabatanFungsional: 'Dosen', golongan: 'IV/a', pendidikan: 'S3 Sosiologi — Universitas Airlangga', bidangKeahlian: ['Sosiologi Perkotaan','Pembangunan Sosial','Gender'], mataKuliah: ['Sosiologi Perkotaan','Pembangunan Sosial'], totalMK: 2, totalMahasiswaBimbingan: 7, totalPublikasi: 16, totalPenelitian: 7, totalPengabdian: 6, status: 'Aktif', avatar: null, username: 'winarsih', password: 'dosen123' },
  { id: 'DSN039', nip: '199003152017041001', nidn: '0715039001', nama: 'Bayu Tri Widodo, S.E., M.Ak.', email: 'bayu.tw@stiabayuangga.ac.id', telepon: '081234500039', jabatanFungsional: 'Dosen', golongan: 'III/b', pendidikan: 'S2 Akuntansi — Universitas Brawijaya', bidangKeahlian: ['Akuntansi Manajemen','Perpajakan','Keuangan Daerah'], mataKuliah: ['Akuntansi Manajemen','Perpajakan'], totalMK: 2, totalMahasiswaBimbingan: 4, totalPublikasi: 7, totalPenelitian: 2, totalPengabdian: 2, status: 'Aktif', avatar: null, username: 'bayu.tw', password: 'dosen123' },
  { id: 'DSN040', nip: '196601201991031001', nidn: '0720016601', nama: 'Prof. Dr. H. Suharto, M.AP.', email: 'suharto@stiabayuangga.ac.id', telepon: '081234500040', jabatanFungsional: 'Dosen', golongan: 'IV/d', pendidikan: 'S3 Administrasi Publik — Universitas Indonesia', bidangKeahlian: ['Kebijakan Fiskal','Ekonomi Publik','Desentralisasi Fiskal'], mataKuliah: ['Ekonomi Sektor Publik'], totalMK: 1, totalMahasiswaBimbingan: 3, totalPublikasi: 45, totalPenelitian: 16, totalPengabdian: 12, status: 'Aktif', avatar: null, username: 'suharto', password: 'dosen123' },
  { id: 'DSN041', nip: '198710152014042001', nidn: '0715108701', nama: 'Ika Wahyuningtyas, S.AP., M.AP.', email: 'ika.w@stiabayuangga.ac.id', telepon: '081234500041', jabatanFungsional: 'Dosen', golongan: 'III/c', pendidikan: 'S2 Administrasi Publik — Universitas Jember', bidangKeahlian: ['Tata Usaha','Kearsipan','Administrasi Modern'], mataKuliah: ['Tata Usaha','Manajemen Kearsipan'], totalMK: 2, totalMahasiswaBimbingan: 5, totalPublikasi: 6, totalPenelitian: 2, totalPengabdian: 3, status: 'Aktif', avatar: null, username: 'ika.w', password: 'dosen123' },
  { id: 'DSN042', nip: '198203102008011001', nidn: '0710038201', nama: 'Dr. Teguh Prasetya, S.IP., M.Si.', email: 'teguh.p@stiabayuangga.ac.id', telepon: '081234500042', jabatanFungsional: 'Dosen', golongan: 'III/d', pendidikan: 'S3 Ilmu Politik — Universitas Gadjah Mada', bidangKeahlian: ['Hubungan Internasional','Diplomasi','Geopolitik'], mataKuliah: ['Hubungan Internasional','Geopolitik'], totalMK: 2, totalMahasiswaBimbingan: 4, totalPublikasi: 12, totalPenelitian: 5, totalPengabdian: 3, status: 'Aktif', avatar: null, username: 'teguh.p', password: 'dosen123' },
  { id: 'DSN043', nip: '199602202022042001', nidn: '0720029601', nama: 'Putri Amelia, S.E., M.M.', email: 'putri.a@stiabayuangga.ac.id', telepon: '081234500043', jabatanFungsional: 'Dosen', golongan: 'III/a', pendidikan: 'S2 Manajemen — Universitas Airlangga', bidangKeahlian: ['Manajemen SDM','Psikologi Organisasi','HRD'], mataKuliah: ['Manajemen SDM','Psikologi Industri'], totalMK: 2, totalMahasiswaBimbingan: 2, totalPublikasi: 2, totalPenelitian: 1, totalPengabdian: 1, status: 'Aktif', avatar: null, username: 'putri.a', password: 'dosen123' },
  { id: 'DSN044', nip: '197505101999031001', nidn: '0710057501', nama: 'Dr. Anton Wibowo, S.Sos., M.AP.', email: 'anton.w@stiabayuangga.ac.id', telepon: '081234500044', jabatanFungsional: 'Dosen', golongan: 'IV/a', pendidikan: 'S3 Administrasi Publik — Universitas Brawijaya', bidangKeahlian: ['Manajemen Perkotaan','Tata Ruang','Lingkungan'], mataKuliah: ['Manajemen Perkotaan','Tata Ruang dan Lingkungan'], totalMK: 2, totalMahasiswaBimbingan: 6, totalPublikasi: 14, totalPenelitian: 6, totalPengabdian: 5, status: 'Aktif', avatar: null, username: 'anton.w', password: 'dosen123' },
  { id: 'DSN045', nip: '198902052016042001', nidn: '0705028901', nama: 'Arini Dwi Lestari, S.Pd., M.Pd.', email: 'arini.dl@stiabayuangga.ac.id', telepon: '081234500045', jabatanFungsional: 'Dosen', golongan: 'III/b', pendidikan: 'S2 Pendidikan — Universitas Negeri Surabaya', bidangKeahlian: ['Pendidikan Agama','Etika dan Moral','Karakter Bangsa'], mataKuliah: ['Pendidikan Agama','Etika Profesi'], totalMK: 2, totalMahasiswaBimbingan: 3, totalPublikasi: 5, totalPenelitian: 2, totalPengabdian: 4, status: 'Aktif', avatar: null, username: 'arini.dl', password: 'dosen123' },
  { id: 'DSN046', nip: '198106102006041001', nidn: '0710068101', nama: 'Dr. Arief Rahman, S.E., M.Si.', email: 'arief.r@stiabayuangga.ac.id', telepon: '081234500046', jabatanFungsional: 'Dosen', golongan: 'III/d', pendidikan: 'S3 Ekonomi — Universitas Brawijaya', bidangKeahlian: ['Ekonometrika','Statistik','Matematika Ekonomi'], mataKuliah: ['Matematika Ekonomi','Statistik Ekonomi'], totalMK: 2, totalMahasiswaBimbingan: 5, totalPublikasi: 10, totalPenelitian: 4, totalPengabdian: 2, status: 'Aktif', avatar: null, username: 'arief.r', password: 'dosen123' },
  { id: 'DSN047', nip: '199307152021042001', nidn: '0715079301', nama: 'Lisa Permata Sari, S.Sos., M.AP.', email: 'lisa.ps@stiabayuangga.ac.id', telepon: '081234500047', jabatanFungsional: 'Dosen', golongan: 'III/a', pendidikan: 'S2 Administrasi Publik — Universitas Muhammadiyah Malang', bidangKeahlian: ['Governance','Transparansi','Anti Korupsi'], mataKuliah: ['Good Governance','Anti Korupsi'], totalMK: 2, totalMahasiswaBimbingan: 2, totalPublikasi: 3, totalPenelitian: 1, totalPengabdian: 1, status: 'Aktif', avatar: null, username: 'lisa.ps', password: 'dosen123' },
  { id: 'DSN048', nip: '197609201999031001', nidn: '0720097601', nama: 'Dr. H. Sunaryo, S.H., M.Hum.', email: 'sunaryo@stiabayuangga.ac.id', telepon: '081234500048', jabatanFungsional: 'Dosen', golongan: 'IV/a', pendidikan: 'S3 Ilmu Hukum — Universitas Padjadjaran', bidangKeahlian: ['Hukum Administrasi','Hukum Ketenagakerjaan','HAM'], mataKuliah: ['Hukum Ketenagakerjaan','Hak Asasi Manusia'], totalMK: 2, totalMahasiswaBimbingan: 5, totalPublikasi: 16, totalPenelitian: 7, totalPengabdian: 6, status: 'Aktif', avatar: null, username: 'sunaryo', password: 'dosen123' },

  // === DOSEN KURIKULUM ===
  { id: 'DSN049', nip: '199109242006016001', nidn: '072408301', nama: 'Moh. Khoirul Anam, M.Pd.', email: 'khoirul.anam@stiabayuangga.ac.id', telepon: '081234500049', jabatanFungsional: 'Dosen', golongan: 'III/c', pendidikan: 'S2 Pendidikan — Universitas Negeri Surabaya', bidangKeahlian: ['Pendidikan','Bahasa','Komunikasi'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 5, totalPublikasi: 9, totalPenelitian: 6, totalPengabdian: 5, status: 'Aktif', avatar: null, username: 'khoirul.anam', password: 'dosen123' },
  { id: 'DSN050', nip: '199101182003014002', nidn: '072209301', nama: 'Farasandya Amalia Hapsari, S.Kom., M.AP.', email: 'farasandya@stiabayuangga.ac.id', telepon: '081234500050', jabatanFungsional: 'Dosen', golongan: 'III/c', pendidikan: 'S2 Administrasi Publik — Universitas Brawijaya', bidangKeahlian: ['Sistem Informasi','E-Government','Administrasi Publik'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 10, totalPublikasi: 10, totalPenelitian: 6, totalPengabdian: 3, status: 'Aktif', avatar: null, username: 'farasandya', password: 'dosen123' },
  { id: 'DSN051', nip: '198907142004014003', nidn: '072808201', nama: 'Ely Retnowulan, M.Pd.', email: 'ely.retnowulan@stiabayuangga.ac.id', telepon: '081234500051', jabatanFungsional: 'Dosen', golongan: 'III/c', pendidikan: 'S2 Pendidikan — Universitas Negeri Malang', bidangKeahlian: ['Pendidikan','Bahasa Inggris','Linguistik'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 8, totalPublikasi: 17, totalPenelitian: 2, totalPengabdian: 2, status: 'Aktif', avatar: null, username: 'ely.retnowulan', password: 'dosen123' },
  { id: 'DSN052', nip: '198712092001019004', nidn: '071608901', nama: 'Dr. Novi Sri Sandyawati, S.Sos., M.Si.', email: 'novi.sandyawati@stiabayuangga.ac.id', telepon: '081234500052', jabatanFungsional: 'Dosen', golongan: 'III/d', pendidikan: 'S3 Ilmu Sosial — Universitas Airlangga', bidangKeahlian: ['Sosiologi','Kebijakan Sosial','Pemberdayaan Masyarakat'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 3, totalPublikasi: 10, totalPenelitian: 6, totalPengabdian: 2, status: 'Aktif', avatar: null, username: 'novi.sandyawati', password: 'dosen123' },
  { id: 'DSN053', nip: '199209272008013005', nidn: '071608001', nama: 'Dr. Moch. Anton Maulana, S.E., M.M.', email: 'anton.maulana@stiabayuangga.ac.id', telepon: '081234500053', jabatanFungsional: 'Dosen', golongan: 'III/d', pendidikan: 'S3 Manajemen — Universitas Brawijaya', bidangKeahlian: ['Manajemen Strategis','Ekonomi','Bisnis'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 7, totalPublikasi: 19, totalPenelitian: 5, totalPengabdian: 2, status: 'Aktif', avatar: null, username: 'anton.maulana', password: 'dosen123' },
  { id: 'DSN054', nip: '198804072001016006', nidn: '072008301', nama: 'Pungky Praja Jatmika, S.IP., M.Si.', email: 'pungky.jatmika@stiabayuangga.ac.id', telepon: '081234500054', jabatanFungsional: 'Dosen', golongan: 'III/c', pendidikan: 'S2 Ilmu Politik — Universitas Airlangga', bidangKeahlian: ['Ilmu Politik','Hubungan Internasional','Kebijakan Publik'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 10, totalPublikasi: 8, totalPenelitian: 6, totalPengabdian: 3, status: 'Aktif', avatar: null, username: 'pungky.jatmika', password: 'dosen123' },
  { id: 'DSN055', nip: '199011132002016007', nidn: '071909101', nama: 'Sandy Irawan, S.Kom., M.Kom.', email: 'sandy.irawan@stiabayuangga.ac.id', telepon: '081234500055', jabatanFungsional: 'Dosen', golongan: 'III/c', pendidikan: 'S2 Ilmu Komputer — Institut Teknologi Sepuluh Nopember', bidangKeahlian: ['Sistem Informasi','Pemrograman','Teknologi Informasi'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 8, totalPublikasi: 13, totalPenelitian: 4, totalPengabdian: 1, status: 'Aktif', avatar: null, username: 'sandy.irawan', password: 'dosen123' },
  { id: 'DSN056', nip: '198901092006017008', nidn: '072908901', nama: 'Marsinem, S.Sos., M.Si.', email: 'marsinem@stiabayuangga.ac.id', telepon: '081234500056', jabatanFungsional: 'Dosen', golongan: 'III/c', pendidikan: 'S2 Ilmu Sosial — Universitas Jember', bidangKeahlian: ['Sosiologi','Administrasi Publik','Pelayanan Publik'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 9, totalPublikasi: 17, totalPenelitian: 3, totalPengabdian: 4, status: 'Aktif', avatar: null, username: 'marsinem', password: 'dosen123' },
  { id: 'DSN057', nip: '199203162009015009', nidn: '072708001', nama: 'Imam Suliyono, S.Sos., M.M.', email: 'imam.suliyono@stiabayuangga.ac.id', telepon: '081234500057', jabatanFungsional: 'Dosen', golongan: 'III/d', pendidikan: 'S2 Manajemen — Universitas Brawijaya', bidangKeahlian: ['Manajemen SDM','Organisasi','Kepemimpinan'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 6, totalPublikasi: 17, totalPenelitian: 6, totalPengabdian: 2, status: 'Aktif', avatar: null, username: 'imam.suliyono', password: 'dosen123' },
  { id: 'DSN058', nip: '1983122820020190010', nidn: '071108201', nama: 'Bambang Lasmono, S.E., M.M.', email: 'bambang.lasmono@stiabayuangga.ac.id', telepon: '081234500058', jabatanFungsional: 'Dosen', golongan: 'III/c', pendidikan: 'S2 Manajemen — Universitas Airlangga', bidangKeahlian: ['Manajemen Keuangan','Ekonomi','Akuntansi'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 4, totalPublikasi: 13, totalPenelitian: 5, totalPengabdian: 1, status: 'Aktif', avatar: null, username: 'bambang.lasmono', password: 'dosen123' },
  { id: 'DSN059', nip: '1991011520030160011', nidn: '072308101', nama: 'Noor Farid, S.Sos., M.Si.', email: 'noor.farid@stiabayuangga.ac.id', telepon: '081234500059', jabatanFungsional: 'Dosen', golongan: 'III/c', pendidikan: 'S2 Ilmu Sosial — Universitas Brawijaya', bidangKeahlian: ['Ilmu Sosial','Administrasi','Komunikasi'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 7, totalPublikasi: 16, totalPenelitian: 5, totalPengabdian: 5, status: 'Aktif', avatar: null, username: 'noor.farid', password: 'dosen123' },
  { id: 'DSN060', nip: '1983082620030170012', nidn: '071108801', nama: 'Nur Aini, S.E., M.M.', email: 'nur.aini@stiabayuangga.ac.id', telepon: '081234500060', jabatanFungsional: 'Dosen', golongan: 'III/c', pendidikan: 'S2 Manajemen — Universitas Negeri Surabaya', bidangKeahlian: ['Ekonomi','Manajemen Pemasaran','Kewirausahaan'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 8, totalPublikasi: 16, totalPenelitian: 3, totalPengabdian: 5, status: 'Aktif', avatar: null, username: 'nur.aini', password: 'dosen123' },
  { id: 'DSN061', nip: '1983061820020170013', nidn: '072109401', nama: 'Eko Wicaksono, S.E., M.Si.', email: 'eko.wicaksono@stiabayuangga.ac.id', telepon: '081234500061', jabatanFungsional: 'Dosen', golongan: 'III/c', pendidikan: 'S2 Ilmu Ekonomi — Universitas Airlangga', bidangKeahlian: ['Ekonomi Publik','Statistik','Keuangan Daerah'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 5, totalPublikasi: 17, totalPenelitian: 7, totalPengabdian: 3, status: 'Aktif', avatar: null, username: 'eko.wicaksono', password: 'dosen123' },
  { id: 'DSN062', nip: '1992012820040130014', nidn: '071808901', nama: 'Dr. Edy Susanto, S.E., M.M.', email: 'edy.susanto@stiabayuangga.ac.id', telepon: '081234500062', jabatanFungsional: 'Dosen', golongan: 'III/d', pendidikan: 'S3 Manajemen — Universitas Brawijaya', bidangKeahlian: ['Manajemen','Ekonomi Pembangunan','Bisnis'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 7, totalPublikasi: 9, totalPenelitian: 2, totalPengabdian: 2, status: 'Aktif', avatar: null, username: 'edy.susanto', password: 'dosen123' },
  { id: 'DSN063', nip: '1989071920040150015', nidn: '071108501', nama: 'Dr. Agung Subagyo, S.STP., M.Si.', email: 'agung.subagyo@stiabayuangga.ac.id', telepon: '081234500063', jabatanFungsional: 'Dosen', golongan: 'IV/a', pendidikan: 'S3 Ilmu Administrasi — Universitas Indonesia', bidangKeahlian: ['Administrasi Publik','Pemerintahan','Otonomi Daerah'], mataKuliah: [], totalMK: 2, totalMahasiswaBimbingan: 3, totalPublikasi: 7, totalPenelitian: 6, totalPengabdian: 3, status: 'Aktif', avatar: null, username: 'agung.subagyo', password: 'dosen123' },
];

export const NEWS_LIST = [
  {
    id: 1,
    title: 'STIA Bayuangga Raih Akreditasi B dari BAN-PT',
    excerpt: 'Pencapaian ini menunjukkan komitmen STIA Bayuangga dalam menjaga mutu pendidikan tinggi...',
    date: '20 Mar 2026',
    category: 'Akademik',
    featured: true
  },
  {
    id: 2,
    title: 'Seminar Nasional: Inovasi Pelayanan Publik di Era Digital',
    excerpt: 'STIA Bayuangga menggelar seminar nasional dengan pembicara dari berbagai universitas...',
    date: '18 Mar 2026',
    category: 'Event'
  },
  {
    id: 3,
    title: 'Pendaftaran Mahasiswa Baru TA 2026/2027 Dibuka',
    excerpt: 'Daftar sekarang dan dapatkan beasiswa prestasi hingga 50%...',
    date: '15 Mar 2026',
    category: 'PMB'
  },
  {
    id: 4,
    title: 'Kerjasama Magang dengan Pemerintah Kota Probolinggo',
    excerpt: 'Mahasiswa STIA Bayuangga mendapat kesempatan magang di instansi pemerintah...',
    date: '12 Mar 2026',
    category: 'Kerjasama'
  },
  {
    id: 5,
    title: 'Workshop Penulisan Jurnal Ilmiah untuk Dosen',
    excerpt: 'Meningkatkan kualitas penelitian dan publikasi ilmiah dosen STIA Bayuangga...',
    date: '10 Mar 2026',
    category: 'Workshop'
  }
];

export const USERS = {
  mahasiswa: {
    id: 'M2024001',
    nim: '2024101001',
    nama: 'Ahmad Rizky Pratama',
    email: 'ahmad.rizky@student.stiabayuangga.ac.id',
    prodi: 'Administrasi Negara',
    semester: 4,
    ipk: 3.65,
    totalSks: 65,
    maxSks: 146,
    avatar: null,
    role: 'mahasiswa',
    // Data Pribadi
    nik: '3574011205040001',
    nisn: '0012345678',
    telepon_1: '081234567890',
    tempat_lahir: 'Probolinggo',
    tanggal_lahir: '2004-05-12',
    gender: 'Laki-laki',
    agama: 'Islam',
    kip: '',
    kks: '',
    // Alamat
    alamat: 'Jl. Mawar No. 15, RT 03/RW 05',
    provinsi: 'Jawa Timur',
    kota: 'Probolinggo',
    kecamatan: 'Mayangan',
    kelurahan: 'Sukabumi',
    kode_pos: '67211',
    // Keluarga
    anak_ke: 2,
    dari_jumlah: 3,
    no_kk: '3574011234560001',
    nama_ayah: 'Ir. Bambang Pratama',
    pekerjaan_ayah: 'PNS',
    nik_ayah: '3574011012700001',
    nama_ibu: 'Siti Aminah, S.Pd.',
    pekerjaan_ibu: 'Guru',
    nik_ibu: '3574014506750002',
    // Sekolah
    asal_sekolah: 'SMAN 1 Probolinggo'
  },
  dosen: {
    id: 'D001',
    nip: '198501012010011001',
    nama: 'Dr. Ir. Bambang Sudarsono, M.Si.',
    email: 'bambang@stiabayuangga.ac.id',
    prodi: 'Administrasi Negara',
    jabatan: 'Lektor Kepala',
    totalMK: 4,
    totalMahasiswa: 180,
    avatar: null,
    role: 'dosen'
  },
  kaprodi: {
    id: 'K001',
    nip: '197809152005011001',
    nama: 'Prof. Dr. Sri Wahyuni, M.AP.',
    email: 'sri.wahyuni@stiabayuangga.ac.id',
    prodi: 'Administrasi Negara',
    jabatan: 'Ketua Program Studi',
    totalMahasiswa: 420,
    totalDosen: 15,
    avatar: null,
    role: 'kaprodi'
  },
  bap: {
    id: 'B001',
    nip: '198203202008012001',
    nama: 'Hj. Dwi Rahmawati, S.AP., M.AP.',
    email: 'dwi.rahmawati@stiabayuangga.ac.id',
    jabatan: 'Kepala BAP',
    avatar: null,
    role: 'bap'
  }
};

export const JADWAL = [
  { hari: 'Senin', jam: '07:30-09:10', mk: 'Geopolitik', kelas: 'B', ruang: 'RA-201', dosen: 'Pungky P.J.' },
  { hari: 'Senin', jam: '09:20-11:00', mk: 'Teori Adm Negara', kelas: 'B', ruang: 'RA-202', dosen: 'Dr. Anton M.' },
  { hari: 'Selasa', jam: '07:30-09:10', mk: 'Perilaku Organisasi', kelas: 'B', ruang: 'RA-203', dosen: 'Noor Farid' },
  { hari: 'Selasa', jam: '13:00-14:40', mk: 'Adm Pembangunan', kelas: 'B', ruang: 'RA-204', dosen: 'Pungky P.J.' },
  { hari: 'Rabu', jam: '07:30-09:10', mk: 'Kepemimpinan', kelas: 'B', ruang: 'RA-201', dosen: 'Nur Aini' },
  { hari: 'Kamis', jam: '09:20-11:00', mk: 'Sosiologi Masyarakat Kota dan Desa', kelas: 'B', ruang: 'RA-205', dosen: 'Marsinem' },
  { hari: 'Jumat', jam: '07:30-09:10', mk: 'Teori Komunikasi', kelas: 'B', ruang: 'RA-202', dosen: 'Bambang L.' }
];

export const MATA_KULIAH = [
  { kode: 'ANA 146', nama: 'Geopolitik', sks: 3, semester: 4, kategori: 'Wajib' },
  { kode: 'ANA 131', nama: 'Teori Adm Negara', sks: 3, semester: 4, kategori: 'Wajib' },
  { kode: 'MDK 120', nama: 'Perilaku Organisasi', sks: 3, semester: 4, kategori: 'Wajib' },
  { kode: 'MDK 126', nama: 'Kepemimpinan', sks: 3, semester: 4, kategori: 'Wajib' },
  { kode: 'ANA 158', nama: 'Adm Pembangunan', sks: 3, semester: 4, kategori: 'Wajib' },
  { kode: 'ANA 151', nama: 'Sosiologi Masyarakat Kota dan Desa', sks: 3, semester: 4, kategori: 'Wajib' },
  { kode: 'ANA 142', nama: 'Teori Komunikasi', sks: 3, semester: 4, kategori: 'Wajib' },
  { kode: 'ANI 134', nama: 'Pengantar Ilmu Adm', sks: 3, semester: 1, kategori: 'Wajib' },
  { kode: 'MDK 124', nama: 'Metode Penelitian Adm', sks: 3, semester: 5, kategori: 'Wajib' },
  { kode: 'MDK 121', nama: 'Sistem Informasi Manajemen', sks: 3, semester: 5, kategori: 'Wajib' }
];

export const NILAI = [
  // Semester 1 — Administrasi Negara
  { kode: 'MDU 101', nama: 'Agama', sks: 2, nilai: 'A', bobot: 4.0, semester: 1 },
  { kode: 'MDU 107', nama: 'Bahasa Inggris I', sks: 2, nilai: 'B+', bobot: 3.5, semester: 1 },
  { kode: 'MDU 202', nama: 'Pendidikan Pancasila', sks: 3, nilai: 'A', bobot: 4.0, semester: 1 },
  { kode: 'MDK 111', nama: 'Matematika', sks: 2, nilai: 'B+', bobot: 3.5, semester: 1 },
  { kode: 'MDK 112', nama: 'Sistem Hukum Indonesia', sks: 3, nilai: 'A-', bobot: 3.7, semester: 1 },
  { kode: 'MDK 114', nama: 'Pengantar Sosiologi', sks: 3, nilai: 'A-', bobot: 3.7, semester: 1 },
  { kode: 'ANI 134', nama: 'Pengantar Ilmu Adm', sks: 3, nilai: 'A', bobot: 4.0, semester: 1 },
  { kode: 'MDK 137', nama: 'Pengantar Ilmu Politik', sks: 3, nilai: 'A', bobot: 4.0, semester: 1 },
  // Semester 2
  { kode: 'MDU 105', nama: 'Ilmu Alamiah Dasar', sks: 2, nilai: 'B+', bobot: 3.5, semester: 2 },
  { kode: 'MDU 207', nama: 'Bahasa Inggris 2', sks: 2, nilai: 'A', bobot: 4.0, semester: 2 },
  { kode: 'MDK 130', nama: 'Bahasa Indonesia', sks: 3, nilai: 'B+', bobot: 3.5, semester: 2 },
  { kode: 'MDK 116', nama: 'Statistik', sks: 3, nilai: 'B', bobot: 3.0, semester: 2 },
  { kode: 'MDK 122', nama: 'Demografi', sks: 2, nilai: 'A-', bobot: 3.7, semester: 2 },
  { kode: 'MDK 115', nama: 'Asas-Asas Manajemen', sks: 3, nilai: 'A', bobot: 4.0, semester: 2 },
  { kode: 'MDK 119', nama: 'Sistem Sosial Budaya Indonesia', sks: 3, nilai: 'A-', bobot: 3.7, semester: 2 },
  { kode: 'MDK 200', nama: 'Dasar-Dasar Logika', sks: 3, nilai: 'B+', bobot: 3.5, semester: 2 },
  // Semester 3
  { kode: 'MDK 117', nama: 'Organisasi dan Manajemen', sks: 3, nilai: 'A-', bobot: 3.7, semester: 3 },
  { kode: 'MDK 128', nama: 'Hubungan Masyarakat', sks: 3, nilai: 'B+', bobot: 3.5, semester: 3 },
  { kode: 'MDK 217', nama: 'Pengantar Antropologi', sks: 3, nilai: 'A', bobot: 4.0, semester: 3 },
  { kode: 'MDK 123', nama: 'Adm Perpajakan', sks: 3, nilai: 'B+', bobot: 3.5, semester: 3 },
  { kode: 'MDK 113', nama: 'Sistem Ekonomi Indonesia', sks: 3, nilai: 'A', bobot: 4.0, semester: 3 },
  { kode: 'ANA 140', nama: 'Sistem Politik Indonesia', sks: 3, nilai: 'A-', bobot: 3.7, semester: 3 },
  { kode: 'MDK 136', nama: 'Hukum Adm Negara', sks: 2, nilai: 'A', bobot: 4.0, semester: 3 },
  { kode: 'MDK 220', nama: 'Pengantar Sistem Informasi Manajemen', sks: 3, nilai: 'B+', bobot: 3.5, semester: 3 }
];

// ---- Pertemuan Date Generator ----
// Generates actual dates for each pertemuan (1-14) based on the day of the week (hari)
// Semester Genap 2025/2026 starts 24 Feb 2026
const SEMESTER_START = new Date(2026, 1, 24); // Feb 24, 2026 (Monday)
const HARI_MAP = { 'Senin': 1, 'Selasa': 2, 'Rabu': 3, 'Kamis': 4, 'Jumat': 5, 'Sabtu': 6 };
const BULAN_PENDEK = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agt','Sep','Okt','Nov','Des'];

export function generatePertemuanDates(hari, totalPertemuan = 14) {
  const dayOfWeek = HARI_MAP[hari] || 1; // Default to Monday
  // Find first occurrence of this day on or after semester start
  const firstDay = new Date(SEMESTER_START);
  while (firstDay.getDay() !== dayOfWeek) {
    firstDay.setDate(firstDay.getDate() + 1);
  }
  const dates = [];
  for (let i = 0; i < totalPertemuan; i++) {
    const d = new Date(firstDay);
    d.setDate(d.getDate() + (i * 7));
    dates.push(d);
  }
  return dates;
}

export function formatTanggalShort(date) {
  return date.getDate() + ' ' + BULAN_PENDEK[date.getMonth()];
}

export function formatTanggalFull(date) {
  const hariNama = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  return hariNama[date.getDay()] + ', ' + date.getDate() + ' ' + BULAN_PENDEK[date.getMonth()] + ' ' + date.getFullYear();
}

export const KELAS_LIST = [
  {
    id: 1,
    nama: 'Geopolitik',
    kode: 'ANA 146',
    dosen: 'Pungky Praja Jatmika, S.IP., M.Si.',
    semester: 'Genap 2025/2026',
    progress: 65,
    totalMateri: 14,
    materiSelesai: 9,
    mahasiswa: 42,
    jadwal: 'Senin, 07:30-09:10',
    sks: 3
  },
  {
    id: 2,
    nama: 'Teori Adm Negara',
    kode: 'ANA 131',
    dosen: 'Dr. Moch. Anton Maulana, S.E., M.M.',
    semester: 'Genap 2025/2026',
    progress: 50,
    totalMateri: 14,
    materiSelesai: 7,
    mahasiswa: 40,
    jadwal: 'Senin, 09:20-11:00',
    sks: 3
  },
  {
    id: 3,
    nama: 'Perilaku Organisasi',
    kode: 'MDK 120',
    dosen: 'Noor Farid, S.Sos., M.Si.',
    semester: 'Genap 2025/2026',
    progress: 72,
    totalMateri: 14,
    materiSelesai: 10,
    mahasiswa: 45,
    jadwal: 'Selasa, 07:30-09:10',
    sks: 3
  },
  {
    id: 4,
    nama: 'Adm Pembangunan',
    kode: 'ANA 158',
    dosen: 'Pungky Praja Jatmika, S.IP., M.Si.',
    semester: 'Genap 2025/2026',
    progress: 43,
    totalMateri: 14,
    materiSelesai: 6,
    mahasiswa: 38,
    jadwal: 'Selasa, 13:00-14:40',
    sks: 3
  },
  {
    id: 5,
    nama: 'Kepemimpinan',
    kode: 'MDK 126',
    dosen: 'Nur Aini, S.E., M.M.',
    semester: 'Genap 2025/2026',
    progress: 57,
    totalMateri: 14,
    materiSelesai: 8,
    mahasiswa: 40,
    jadwal: 'Rabu, 07:30-09:10',
    sks: 3
  },
  {
    id: 6,
    nama: 'Sosiologi Masyarakat Kota dan Desa',
    kode: 'ANA 151',
    dosen: 'Marsinem, S.Sos., M.Si.',
    semester: 'Genap 2025/2026',
    progress: 60,
    totalMateri: 14,
    materiSelesai: 8,
    mahasiswa: 38,
    jadwal: 'Kamis, 09:20-11:00',
    sks: 3
  },
  {
    id: 7,
    nama: 'Teori Komunikasi',
    kode: 'ANA 142',
    dosen: 'Bambang Lasmono, S.E., M.M.',
    semester: 'Genap 2025/2026',
    progress: 48,
    totalMateri: 14,
    materiSelesai: 7,
    mahasiswa: 42,
    jadwal: 'Jumat, 07:30-09:10',
    sks: 3
  }
];

export const TUGAS_LIST = [
  {
    id: 1,
    judul: 'Analisis Kebijakan Publik Daerah',
    kelas: 'Kebijakan Publik',
    deadline: '2026-03-28 23:59',
    status: 'Belum',
    desc: 'Buatlah analisis kebijakan publik yang diterapkan di daerah Anda...',
    type: 'Tugas Individu'
  },
  {
    id: 2,
    judul: 'Laporan Statistik Penduduk',
    kelas: 'Statistik Sosial',
    deadline: '2026-03-25 23:59',
    status: 'Sudah',
    nilaiRaw: 85,
    desc: 'Kumpulkan dan analisis data statistik penduduk menggunakan SPSS...',
    type: 'Tugas Individu'
  },
  {
    id: 3,
    judul: 'Makalah Teori Birokrasi Weber',
    kelas: 'Teori Administrasi',
    deadline: '2026-04-01 23:59',
    status: 'Belum',
    desc: 'Analisis teori birokrasi Max Weber dan relevansinya saat ini...',
    type: 'Tugas Kelompok'
  },
  {
    id: 4,
    judul: 'Quiz UTS Hukum Administrasi',
    kelas: 'Hukum Administrasi',
    deadline: '2026-03-30 10:00',
    status: 'Belum',
    desc: 'Quiz online pilihan ganda, 30 soal, waktu 60 menit',
    type: 'Quiz'
  }
];

export const MATERI_LIST = [
  {
    id: 1,
    pertemuan: 1,
    judul: 'Pengantar Kebijakan Publik',
    desc: 'Definisi dan ruang lingkup kebijakan publik',
    file: 'materi-1.pdf',
    type: 'pdf',
    status: 'Selesai'
  },
  {
    id: 2,
    pertemuan: 2,
    judul: 'Siklus Kebijakan Publik',
    desc: 'Tahapan formulasi, implementasi, dan evaluasi kebijakan',
    file: 'materi-2.pdf',
    type: 'pdf',
    status: 'Selesai'
  },
  {
    id: 3,
    pertemuan: 3,
    judul: 'Aktor dan Kelembagaan',
    desc: 'Peran aktor dalam proses kebijakan publik',
    file: 'materi-3.pptx',
    type: 'slide',
    status: 'Selesai'
  },
  {
    id: 4,
    pertemuan: 4,
    judul: 'Analisis Kebijakan',
    desc: 'Metode dan teknik analisis kebijakan publik',
    file: null,
    type: 'video',
    videoUrl: '#',
    status: 'Sedang Dipelajari'
  },
  {
    id: 5,
    pertemuan: 5,
    judul: 'Implementasi Kebijakan',
    desc: 'Teori implementasi top-down dan bottom-up',
    file: null,
    type: 'pdf',
    status: 'Terkunci'
  }
];

export const FORUM_THREADS = [
  {
    id: 1,
    judul: 'Diskusi: Kebijakan Publik di Era Digital',
    penulis: 'Dr. Bambang Sudarsono',
    tanggal: '2026-03-20',
    replies: 12,
    pinned: true,
    kelas: 'Kebijakan Publik'
  },
  {
    id: 2,
    judul: 'Tanya Jawab: Tugas Analisis Kebijakan',
    penulis: 'Siti Aminah',
    tanggal: '2026-03-19',
    replies: 8,
    kelas: 'Kebijakan Publik'
  },
  {
    id: 3,
    judul: 'Sharing: Referensi Buku Statistik',
    penulis: 'Budi Santoso',
    tanggal: '2026-03-18',
    replies: 5,
    kelas: 'Statistik Sosial'
  }
];

// ---- Helper functions ----
export function getUser(role) {
  return USERS[role] || USERS.mahasiswa;
}

export function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function getDeadlineStatus(deadlineStr) {
  const now = new Date();
  const deadline = new Date(deadlineStr);
  const diff = deadline - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (diff < 0) return { text: 'Terlambat', class: 'danger' };
  if (days === 0) return { text: 'Hari ini', class: 'danger' };
  if (days <= 3) return { text: `${days} hari lagi`, class: 'warning' };
  return { text: `${days} hari lagi`, class: 'info' };
}


// ============================================
// KURIKULUM DATA — Administrasi Niaga & Negara
// ============================================

export const KURIKULUM_DATA = {
  niaga: {
    nama: 'Administrasi Niaga',
    totalSKS: 145,
    semester: [
      { no: 1, sks: 21, mk: [
        { kode: 'MDU 101', nama: 'Agama', dosen: 'Moh. Khoirul Anam, M.Pd.', sks: 2 },
        { kode: 'MDU 107', nama: 'Bahasa Inggris I', dosen: 'Farasandya Amalia Hapsari, S.Kom., M.AP./Ely Retnowulan, M.Pd.', sks: 2 },
        { kode: 'MDU 103', nama: 'Pendidikan Pancasila', dosen: 'Farasandya Amalia Hapsari, S.Kom., M.AP./Ely Retnowulan, M.Pd.', sks: 3 },
        { kode: 'MDK 111', nama: 'Matematika', dosen: 'Moh. Khoirul Anam, M.Pd.', sks: 2 },
        { kode: 'MDK 112', nama: 'Sistem Hukum Indonesia', dosen: 'Dr. Novi Sri Sandyawati, S.Sos., M.Si.', sks: 3 },
        { kode: 'MDK 114', nama: 'Pengantar Sosiologi', dosen: 'Farasandya Amalia Hapsari, S.Kom., M.AP./Moh. Khoirul Anam, M.Pd.', sks: 3 },
        { kode: 'ANI 134', nama: 'Pengantar Ilmu Adm', dosen: 'Dr. Moch. Anton Maulana, S.E., M.M.', sks: 3 },
        { kode: 'MDK 137', nama: 'Pengantar Ilmu Politik', dosen: 'Pungky Praja Jatmika, S.IP., M.Si.', sks: 3 }
      ]},
      { no: 2, sks: 20, mk: [
        { kode: 'MDU 105', nama: 'Ilmu Alamiah Dasar', dosen: 'Dr. Novi Sri Sandyawati, S.Sos., M.Si.', sks: 2 },
        { kode: 'MDU 207', nama: 'Bahasa Inggris 2', dosen: 'Farasandya Amalia Hapsari, S.Kom., M.AP.', sks: 2 },
        { kode: 'MDK 130', nama: 'Bahasa Indonesia', dosen: 'Ely Retnowulan, M.Pd.', sks: 3 },
        { kode: 'MDK 216', nama: 'Statistik', dosen: 'Moh. Khoirul Anam, M.Pd.', sks: 3 },
        { kode: 'MDK 122', nama: 'Demografi', dosen: 'Farasandya Amalia Hapsari, S.Kom., M.AP.', sks: 2 },
        { kode: 'MDK 115', nama: 'Asas-Asas Manajemen', dosen: 'Sandy Irawan, S.Kom., M.Kom.', sks: 3 },
        { kode: 'MDK 119', nama: 'Sistem Sosial Budaya Indonesia', dosen: 'Marsinem, S.Sos., M.Si.', sks: 2 },
        { kode: 'MDK 200', nama: 'Dasar-Dasar Logika', dosen: 'Moh. Khoirul Anam, M.Pd.', sks: 3 }
      ]},
      { no: 3, sks: 23, mk: [
        { kode: 'MDK 117', nama: 'Organisasi dan Manajemen', dosen: 'Imam Suliyono, S.Sos., M.M.', sks: 3 },
        { kode: 'MDK 128', nama: 'Hubungan Masyarakat', dosen: 'Marsinem, S.Sos., M.Si.', sks: 3 },
        { kode: 'MDK 217', nama: 'Pengantar Antropologi', dosen: 'Bambang Lasmono, S.E., M.M.', sks: 3 },
        { kode: 'MDK 123', nama: 'Adm Perpajakan', dosen: 'Noor Farid, S.Sos., M.Si.', sks: 3 },
        { kode: 'MDK 113', nama: 'Sistem Ekonomi Indonesia', dosen: 'Bambang Lasmono, S.E., M.M.', sks: 3 },
        { kode: 'ANA 140', nama: 'Sistem Politik Indonesia', dosen: 'Pungky Praja Jatmika, S.IP., M.Si.', sks: 3 },
        { kode: 'ANI 131', nama: 'Akuntansi I', dosen: 'Nur Aini, S.E., M.M.', sks: 2 },
        { kode: 'MDK 220', nama: 'Pengantar Sistem Informasi Manajemen', dosen: 'Eko Wicaksono, S.E., M.Si./Sandy Irawan, S.Kom., M.Kom.', sks: 3 }
      ]},
      { no: 4, sks: 21, mk: [
        { kode: 'ANI 132', nama: 'Akuntansi II', dosen: 'Eko Wicaksono, S.E., M.Si.', sks: 3 },
        { kode: 'ANI 165', nama: 'Manajemen Pembelian dan Pemasaran', dosen: 'Nur Aini, S.E., M.M.', sks: 3 },
        { kode: 'MDK 120', nama: 'Perilaku Organisasi', dosen: 'Noor Farid, S.Sos., M.Si.', sks: 3 },
        { kode: 'MDK 126', nama: 'Kepemimpinan', dosen: 'Nur Aini, S.E., M.M.', sks: 3 },
        { kode: 'ANI 145', nama: 'Perdagangan Internasional', dosen: 'Bambang Lasmono, S.E., M.M.', sks: 3 },
        { kode: 'ANI 169', nama: 'Manajemen Industrial', dosen: 'Dr. Moch. Anton Maulana, S.E., M.M.', sks: 3 },
        { kode: 'ANI 174', nama: 'Perkoperasian', dosen: 'Eko Wicaksono, S.E., M.Si.', sks: 3 }
      ]},
      { no: 5, sks: 18, mk: [
        { kode: 'ANI 148', nama: 'Kebijakan dan Strategi Pemasaran', dosen: 'Imam Suliyono, S.Sos., M.M.', sks: 3 },
        { kode: 'MDK 124', nama: 'Metode Penelitian Adm', dosen: 'Dr. Moch. Anton Maulana, S.E., M.M./Eko Wicaksono, S.E., M.Si.', sks: 3 },
        { kode: 'MDK 125', nama: 'Manajemen Sumber Daya Manusia', dosen: 'Marsinem, S.Sos., M.Si.', sks: 3 },
        { kode: 'MDK 121', nama: 'Sistem Informasi Manajemen', dosen: 'Eko Wicaksono, S.E., M.Si./Sandy Irawan, S.Kom., M.Kom.', sks: 3 },
        { kode: 'ANI 149', nama: 'Akuntansi Biaya 1', dosen: 'Nur Aini, S.E., M.M.', sks: 3 },
        { kode: 'ANI 170', nama: 'Evaluasi Proyek', dosen: 'Dr. Moch. Anton Maulana, S.E., M.M.', sks: 3 }
      ]},
      { no: 6, sks: 21, mk: [
        { kode: 'MDK 129', nama: 'Kuliah Kerja Nyata', dosen: '-', sks: 3 },
        { kode: 'MDK 127', nama: 'Organisasi dan Metode', dosen: 'Imam Suliyono, S.Sos., M.M.', sks: 3 },
        { kode: 'ANI 249', nama: 'Akuntansi Biaya 2', dosen: 'Dr. Edy Susanto, S.E., M.M.', sks: 3 },
        { kode: 'ANI 173', nama: 'Manajemen Resiko', dosen: 'Imam Suliyono, S.Sos., M.Si.', sks: 3 },
        { kode: 'MDK 213', nama: 'Hukum Perdata Dagang', dosen: 'Bambang Lasmono, S.E., M.M.', sks: 3 },
        { kode: 'ANI 171', nama: 'Akuntansi Manajerial', dosen: 'Pungky Praja Jatmika, S.IP., M.Si.', sks: 3 },
        { kode: 'MDK 135', nama: 'Kewirausahaan', dosen: 'Dr. Novi Sri Sandyawati, S.Sos., M.Si./Dr. Agung Subagyo, S.STP., M.Si.', sks: 3 }
      ]},
      { no: 7, sks: 15, mk: [
        { kode: 'ANI 153', nama: 'Kebijakan dan Strategi Produksi', dosen: 'Dr. Edy Susanto, S.E., M.M.', sks: 3 },
        { kode: 'ANI 144', nama: 'Perbankan', dosen: 'Nur Aini, S.E., M.M.', sks: 3 },
        { kode: 'ANI 267', nama: 'Manajemen Keuangan', dosen: 'Dr. Edy Susanto, S.E., M.M.', sks: 3 },
        { kode: 'ANI 141', nama: 'Etika Profesi', dosen: 'Noor Farid, S.Sos., M.Si./Eko Wicaksono, S.E., M.Si.', sks: 3 },
        { kode: 'ANI 172', nama: 'Seminar Skripsi', dosen: 'Noor Farid, S.Sos., M.Si.', sks: 3 }
      ]},
      { no: 8, sks: 6, mk: [
        { kode: 'ANI 180', nama: 'Skripsi', dosen: '-', sks: 6 }
      ]}
    ]
  },
  negara: {
    nama: 'Administrasi Negara',
    totalSKS: 146,
    semester: [
      { no: 1, sks: 21, mk: [
        { kode: 'MDU 101', nama: 'Agama', dosen: 'Moh. Khoirul Anam, M.Pd.', sks: 2 },
        { kode: 'MDU 107', nama: 'Bahasa Inggris I', dosen: 'Farasandya Amalia Hapsari, S.Kom., M.AP./Ely Retnowulan, M.Pd.', sks: 2 },
        { kode: 'MDU 202', nama: 'Pendidikan Pancasila', dosen: 'Farasandya Amalia Hapsari, S.Kom., M.AP./Ely Retnowulan, M.Pd.', sks: 3 },
        { kode: 'MDK 111', nama: 'Matematika', dosen: 'Moh. Khoirul Anam, M.Pd.', sks: 2 },
        { kode: 'MDK 112', nama: 'Sistem Hukum Indonesia', dosen: 'Dr. Novi Sri Sandyawati, S.Sos., M.Si.', sks: 3 },
        { kode: 'MDK 114', nama: 'Pengantar Sosiologi', dosen: 'Farasandya Amalia Hapsari, S.Kom., M.AP./Moh. Khoirul Anam, M.Pd.', sks: 3 },
        { kode: 'ANI 134', nama: 'Pengantar Ilmu Adm', dosen: 'Dr. Moch. Anton Maulana, S.E., M.M.', sks: 3 },
        { kode: 'MDK 137', nama: 'Pengantar Ilmu Politik', dosen: 'Pungky Praja Jatmika, S.IP., M.Si.', sks: 3 }
      ]},
      { no: 2, sks: 21, mk: [
        { kode: 'MDU 105', nama: 'Ilmu Alamiah Dasar', dosen: 'Dr. Novi Sri Sandyawati, S.Sos., M.Si.', sks: 2 },
        { kode: 'MDU 207', nama: 'Bahasa Inggris 2', dosen: 'Farasandya Amalia Hapsari, S.Kom., M.AP.', sks: 2 },
        { kode: 'MDK 130', nama: 'Bahasa Indonesia', dosen: 'Ely Retnowulan, M.Pd.', sks: 3 },
        { kode: 'MDK 116', nama: 'Statistik', dosen: 'Moh. Khoirul Anam, M.Pd.', sks: 3 },
        { kode: 'MDK 122', nama: 'Demografi', dosen: 'Farasandya Amalia Hapsari, S.Kom., M.AP.', sks: 2 },
        { kode: 'MDK 115', nama: 'Asas-Asas Manajemen', dosen: 'Sandy Irawan, S.Kom., M.Kom.', sks: 3 },
        { kode: 'MDK 119', nama: 'Sistem Sosial Budaya Indonesia', dosen: 'Marsinem, S.Sos., M.Si.', sks: 3 },
        { kode: 'MDK 200', nama: 'Dasar-Dasar Logika', dosen: 'Moh. Khoirul Anam, M.Pd.', sks: 3 }
      ]},
      { no: 3, sks: 23, mk: [
        { kode: 'MDK 117', nama: 'Organisasi dan Manajemen', dosen: 'Imam Suliyono, S.Sos., M.M.', sks: 3 },
        { kode: 'MDK 128', nama: 'Hubungan Masyarakat', dosen: 'Marsinem, S.Sos., M.Si.', sks: 3 },
        { kode: 'MDK 217', nama: 'Pengantar Antropologi', dosen: 'Bambang Lasmono, S.E., M.M.', sks: 3 },
        { kode: 'MDK 123', nama: 'Adm Perpajakan', dosen: 'Noor Farid, S.Sos., M.Si.', sks: 3 },
        { kode: 'MDK 113', nama: 'Sistem Ekonomi Indonesia', dosen: 'Bambang Lasmono, S.E., M.M.', sks: 3 },
        { kode: 'ANA 140', nama: 'Sistem Politik Indonesia', dosen: 'Pungky Praja Jatmika, S.IP., M.Si.', sks: 3 },
        { kode: 'MDK 136', nama: 'Hukum Adm Negara', dosen: 'Dr. Novi Sri Sandyawati, S.Sos., M.Si.', sks: 2 },
        { kode: 'MDK 220', nama: 'Pengantar Sistem Informasi Manajemen', dosen: 'Eko Wicaksono, S.E., M.Si./Sandy Irawan, S.Kom., M.Kom.', sks: 3 }
      ]},
      { no: 4, sks: 21, mk: [
        { kode: 'ANA 146', nama: 'Geopolitik', dosen: 'Pungky Praja Jatmika, S.IP., M.Si.', sks: 3 },
        { kode: 'ANA 131', nama: 'Teori Adm Negara', dosen: 'Dr. Moch. Anton Maulana, S.E., M.M.', sks: 3 },
        { kode: 'MDK 120', nama: 'Perilaku Organisasi', dosen: 'Noor Farid, S.Sos., M.Si.', sks: 3 },
        { kode: 'MDK 126', nama: 'Kepemimpinan', dosen: 'Nur Aini, S.E., M.M.', sks: 3 },
        { kode: 'ANA 158', nama: 'Adm Pembangunan', dosen: 'Pungky Praja Jatmika, S.IP., M.Si.', sks: 3 },
        { kode: 'ANA 151', nama: 'Sosiologi Masyarakat Kota dan Desa', dosen: 'Marsinem, S.Sos., M.Si.', sks: 3 },
        { kode: 'ANA 142', nama: 'Teori Komunikasi', dosen: 'Bambang Lasmono, S.E., M.M.', sks: 3 }
      ]},
      { no: 5, sks: 18, mk: [
        { kode: 'ANA 155', nama: 'Adm Perusahaan Negara', dosen: 'Dr. Edy Susanto, S.E., M.M.', sks: 3 },
        { kode: 'MDK 124', nama: 'Metode Penelitian Adm', dosen: 'Dr. Moch. Anton Maulana, S.E., M.M./Eko Wicaksono, S.E., M.Si.', sks: 3 },
        { kode: 'MDK 125', nama: 'Manajemen Sumber Daya Manusia', dosen: 'Marsinem, S.Sos., M.Si.', sks: 3 },
        { kode: 'MDK 121', nama: 'Sistem Informasi Manajemen', dosen: 'Eko Wicaksono, S.E., M.Si./Sandy Irawan, S.Kom., M.Kom.', sks: 3 },
        { kode: 'MDK 118', nama: 'Adm Keuangan Negara', dosen: 'Farasandya Amalia Hapsari, S.Kom., M.AP./Eko Wicaksono, S.E., M.Si.', sks: 3 },
        { kode: 'ANA 152', nama: 'Pemberdayaan Masyarakat', dosen: 'Dr. Agung Subagyo, S.STP., M.Si.', sks: 3 }
      ]},
      { no: 6, sks: 21, mk: [
        { kode: 'MDK 129', nama: 'Kuliah Kerja Nyata', dosen: '-', sks: 3 },
        { kode: 'MDK 127', nama: 'Organisasi dan Metode', dosen: 'Imam Suliyono, S.Sos., M.M.', sks: 3 },
        { kode: 'ANA 157', nama: 'Organisasi Adm Internasional', dosen: 'Dr. Edy Susanto, S.E., M.M.', sks: 3 },
        { kode: 'ANA 147', nama: 'Komunikasi Pembangunan', dosen: 'Dr. Agung Subagyo, S.STP., M.Si.', sks: 3 },
        { kode: 'ANA 159', nama: 'Perencanaan Pembangunan', dosen: 'Eko Wicaksono, S.E., M.Si.', sks: 3 },
        { kode: 'ANA 160', nama: 'Perbandingan Adm Negara', dosen: 'Dr. Agung Subagyo, S.STP., M.Si.', sks: 3 },
        { kode: 'MDK 135', nama: 'Kewirausahaan', dosen: 'Dr. Novi Sri Sandyawati, S.Sos., M.Si./Dr. Agung Subagyo, S.STP., M.Si.', sks: 3 }
      ]},
      { no: 7, sks: 15, mk: [
        { kode: 'ANA 161', nama: 'Kebijakan Publik', dosen: 'Dr. Novi Sri Sandyawati, S.Sos., M.Si.', sks: 3 },
        { kode: 'ANA 156', nama: 'Pengembangan Organisasi', dosen: 'Dr. Agung Subagyo, S.STP., M.Si.', sks: 3 },
        { kode: 'ANA 154', nama: 'Net Work Planning', dosen: 'Farasandya Amalia Hapsari, S.Kom., M.AP./Sandy Irawan, S.Kom., M.Kom.', sks: 3 },
        { kode: 'ANA 141', nama: 'Etika Profesi', dosen: 'Noor Farid, S.Sos., M.Si./Eko Wicaksono, S.E., M.Si.', sks: 3 },
        { kode: 'ANA 163', nama: 'Seminar Skripsi', dosen: 'Noor Farid, S.Sos., M.Si.', sks: 3 }
      ]},
      { no: 8, sks: 6, mk: [
        { kode: 'ANA 180', nama: 'Skripsi', dosen: '-', sks: 6 }
      ]}
    ]
  }
};

// === SIAKAD MAHASISWA DATA ===

export const KRS_DATA = {
  semester: 'Genap 2025/2026',
  dosenPA: 'Dr. Moch. Anton Maulana, S.E., M.M.',
  nipDosenPA: '199209272008013005',
  periodeMasuk: '2023 - 1',
  basis: 'Reguler',
  statusKRS: 'Divalidasi',
  validatedBy: 'Dr. Moch. Anton Maulana, S.E., M.M.',
  validatedAt: '25 Maret 2026, 20:39:43',
  mataKuliah: [
    { kode: 'ANA 146', nama: 'Geopolitik', kelas: 'B', sks: 3, dosen: 'Pungky Praja Jatmika, S.IP., M.Si.', seksi: 'EU101', waktu: 'Senin, 07:30-09:10', ruang: 'RA-201', jenisKelas: 'Reguler',
      modePertemuan: ['offline','offline','offline','online','offline','offline','online','offline','offline','offline','online','offline','offline','offline'] },
    { kode: 'ANA 131', nama: 'Teori Adm Negara', kelas: 'B', sks: 3, dosen: 'Dr. Moch. Anton Maulana, S.E., M.M.', seksi: 'EU101', waktu: 'Senin, 09:20-11:00', ruang: 'RA-202', jenisKelas: 'Reguler',
      modePertemuan: ['offline','offline','online','offline','offline','online','offline','offline','offline','online','offline','offline','offline','offline'] },
    { kode: 'MDK 120', nama: 'Perilaku Organisasi', kelas: 'B', sks: 3, dosen: 'Noor Farid, S.Sos., M.Si.', seksi: 'EU102', waktu: 'Selasa, 07:30-09:10', ruang: 'RA-203', jenisKelas: 'Reguler',
      modePertemuan: ['offline','offline','offline','offline','online','offline','offline','online','offline','offline','offline','online','offline','offline'] },
    { kode: 'ANA 158', nama: 'Adm Pembangunan', kelas: 'B', sks: 3, dosen: 'Pungky Praja Jatmika, S.IP., M.Si.', seksi: 'EU101', waktu: 'Selasa, 13:00-14:40', ruang: 'RA-204', jenisKelas: 'Reguler',
      modePertemuan: ['offline','offline','offline','offline','offline','offline','offline','offline','offline','offline','offline','offline','offline','offline'] },
    { kode: 'MDK 126', nama: 'Kepemimpinan', kelas: 'B', sks: 3, dosen: 'Nur Aini, S.E., M.M.', seksi: 'EU101', waktu: 'Rabu, 07:30-09:10', ruang: 'RA-201', jenisKelas: 'Reguler',
      modePertemuan: ['offline','offline','online','offline','offline','offline','online','offline','offline','offline','offline','online','offline','offline'] },
    { kode: 'ANA 151', nama: 'Sosiologi Masyarakat Kota dan Desa', kelas: 'B', sks: 3, dosen: 'Marsinem, S.Sos., M.Si.', seksi: 'EU101', waktu: 'Kamis, 09:20-11:00', ruang: 'RA-205', jenisKelas: 'Reguler',
      modePertemuan: ['offline','online','offline','online','offline','online','offline','online','offline','online','offline','online','offline','offline'] },
    { kode: 'ANA 142', nama: 'Teori Komunikasi', kelas: 'B', sks: 3, dosen: 'Bambang Lasmono, S.E., M.M.', seksi: 'EU102', waktu: 'Jumat, 07:30-09:10', ruang: 'RA-202', jenisKelas: 'Reguler',
      modePertemuan: ['offline','offline','offline','online','offline','offline','offline','offline','online','offline','offline','offline','online','offline'] }
  ]
};

export const ABSENSI_DATA = [
  { kode: 'ANA 146', nama: 'Geopolitik', kelas: 'EU101', jenisKuliah: 'Teori', kel: 1, presensiMhs: 13, presensiDosen: 14, pctPresensi: 93, tidakHadirKe: '9' },
  { kode: 'ANA 131', nama: 'Teori Adm Negara', kelas: 'EU101', jenisKuliah: 'Teori', kel: 1, presensiMhs: 14, presensiDosen: 14, pctPresensi: 100, tidakHadirKe: '-' },
  { kode: 'MDK 120', nama: 'Perilaku Organisasi', kelas: 'EU102', jenisKuliah: 'Teori', kel: 1, presensiMhs: 12, presensiDosen: 14, pctPresensi: 86, tidakHadirKe: '5, 11' },
  { kode: 'ANA 158', nama: 'Adm Pembangunan', kelas: 'EU101', jenisKuliah: 'Teori', kel: 1, presensiMhs: 13, presensiDosen: 14, pctPresensi: 93, tidakHadirKe: '7' },
  { kode: 'MDK 126', nama: 'Kepemimpinan', kelas: 'EU101', jenisKuliah: 'Teori', kel: 1, presensiMhs: 14, presensiDosen: 14, pctPresensi: 100, tidakHadirKe: '-' },
  { kode: 'ANA 151', nama: 'Sosiologi Masyarakat Kota dan Desa', kelas: 'EU101', jenisKuliah: 'Teori', kel: 1, presensiMhs: 13, presensiDosen: 14, pctPresensi: 93, tidakHadirKe: '3' },
  { kode: 'ANA 142', nama: 'Teori Komunikasi', kelas: 'EU102', jenisKuliah: 'Teori', kel: 1, presensiMhs: 12, presensiDosen: 14, pctPresensi: 86, tidakHadirKe: '6, 10' }
];

export const EVALUASI_DATA = [
  { kode: 'ANA 146', nama: 'Geopolitik', kelas: 'EU101', sks: 3, dosen: 'Pungky Praja Jatmika, S.IP., M.Si.', sudahEvaluasi: true },
  { kode: 'ANA 131', nama: 'Teori Adm Negara', kelas: 'EU101', sks: 3, dosen: 'Dr. Moch. Anton Maulana, S.E., M.M.', sudahEvaluasi: true },
  { kode: 'MDK 120', nama: 'Perilaku Organisasi', kelas: 'EU102', sks: 3, dosen: 'Noor Farid, S.Sos., M.Si.', sudahEvaluasi: false },
  { kode: 'ANA 158', nama: 'Adm Pembangunan', kelas: 'EU101', sks: 3, dosen: 'Pungky Praja Jatmika, S.IP., M.Si.', sudahEvaluasi: true },
  { kode: 'MDK 126', nama: 'Kepemimpinan', kelas: 'EU101', sks: 3, dosen: 'Nur Aini, S.E., M.M.', sudahEvaluasi: false },
  { kode: 'ANA 151', nama: 'Sosiologi Masyarakat Kota dan Desa', kelas: 'EU101', sks: 3, dosen: 'Marsinem, S.Sos., M.Si.', sudahEvaluasi: true },
  { kode: 'ANA 142', nama: 'Teori Komunikasi', kelas: 'EU102', sks: 3, dosen: 'Bambang Lasmono, S.E., M.M.', sudahEvaluasi: false }
];

export const JADWAL_UTS_UAS = [
  { tanggal: 'Senin, 13 April 2026', mulai: '07:30', selesai: '09:10', kode: 'ANA 146', nama: 'Geopolitik', sesi: 'EU101', jenis: 'UTS', kelompok: 1 },
  { tanggal: 'Selasa, 14 April 2026', mulai: '07:30', selesai: '09:10', kode: 'MDK 120', nama: 'Perilaku Organisasi', sesi: 'EU102', jenis: 'UTS', kelompok: 1 },
  { tanggal: 'Rabu, 15 April 2026', mulai: '07:30', selesai: '09:10', kode: 'MDK 126', nama: 'Kepemimpinan', sesi: 'EU101', jenis: 'UTS', kelompok: 1 },
  { tanggal: 'Kamis, 16 April 2026', mulai: '09:20', selesai: '11:00', kode: 'ANA 131', nama: 'Teori Adm Negara', sesi: 'EU101', jenis: 'UTS', kelompok: 1 },
  { tanggal: 'Senin, 8 Juni 2026', mulai: '07:30', selesai: '09:10', kode: 'ANA 146', nama: 'Geopolitik', sesi: 'EU101', jenis: 'UAS', kelompok: 1 },
  { tanggal: 'Selasa, 9 Juni 2026', mulai: '07:30', selesai: '09:10', kode: 'MDK 120', nama: 'Perilaku Organisasi', sesi: 'EU102', jenis: 'UAS', kelompok: 1 },
  { tanggal: 'Rabu, 10 Juni 2026', mulai: '07:30', selesai: '09:10', kode: 'MDK 126', nama: 'Kepemimpinan', sesi: 'EU101', jenis: 'UAS', kelompok: 1 },
  { tanggal: 'Kamis, 11 Juni 2026', mulai: '09:20', selesai: '11:00', kode: 'ANA 131', nama: 'Teori Adm Negara', sesi: 'EU101', jenis: 'UAS', kelompok: 1 }
];

// === DOSEN DATA ===

export const DOSEN_KELAS_MAHASISWA = [
  { kode: 'ANA 161', nama: 'Kebijakan Publik', sks: 3, kelas: 'A', semester: 'Genap 2025/2026', hari: 'Senin', jam: '07:30-09:10', ruang: 'R.201',
    bobot: { uts: 20, uas: 30, tugas: 20, quiz: 15, absensi: 15 },
    mahasiswa: [
      { nim: '2024101001', nama: 'Ahmad Rizky Pratama', angkatan: 2023, nilaiUTS: 82, nilaiUAS: 88, nilaiTugas: 85, nilaiQuiz: 80, kehadiran: 13 },
      { nim: '2024101002', nama: 'Siti Nurhaliza', angkatan: 2023, nilaiUTS: 78, nilaiUAS: 82, nilaiTugas: 80, nilaiQuiz: 85, kehadiran: 14 },
      { nim: '2024101003', nama: 'Budi Santoso', angkatan: 2023, nilaiUTS: 90, nilaiUAS: 92, nilaiTugas: 88, nilaiQuiz: 95, kehadiran: 14 },
      { nim: '2024101004', nama: 'Dewi Lestari', angkatan: 2023, nilaiUTS: 75, nilaiUAS: 78, nilaiTugas: 82, nilaiQuiz: 70, kehadiran: 12 },
      { nim: '2024101005', nama: 'Eko Prasetyo', angkatan: 2023, nilaiUTS: 85, nilaiUAS: 87, nilaiTugas: 90, nilaiQuiz: 88, kehadiran: 14 },
      { nim: '2024101006', nama: 'Fitri Handayani', angkatan: 2023, nilaiUTS: 70, nilaiUAS: 75, nilaiTugas: 72, nilaiQuiz: 68, kehadiran: 11 },
      { nim: '2024101007', nama: 'Gani Setiawan', angkatan: 2023, nilaiUTS: 88, nilaiUAS: 85, nilaiTugas: 90, nilaiQuiz: 82, kehadiran: 13 },
      { nim: '2024101008', nama: 'Hana Permata', angkatan: 2024, nilaiUTS: 92, nilaiUAS: 95, nilaiTugas: 93, nilaiQuiz: 90, kehadiran: 14 },
    ]
  },
  { kode: 'ANA 156', nama: 'Pengembangan Organisasi', sks: 3, kelas: 'A', semester: 'Genap 2025/2026', hari: 'Selasa', jam: '09:20-11:50', ruang: 'R.302',
    bobot: { uts: 20, uas: 30, tugas: 20, quiz: 15, absensi: 15 },
    mahasiswa: [
      { nim: '2024101009', nama: 'Irfan Hakim', angkatan: 2023, nilaiUTS: 72, nilaiUAS: 78, nilaiTugas: 75, nilaiQuiz: 70, kehadiran: 13 },
      { nim: '2024101010', nama: 'Julia Putri', angkatan: 2024, nilaiUTS: 88, nilaiUAS: 90, nilaiTugas: 85, nilaiQuiz: 92, kehadiran: 14 },
      { nim: '2024101011', nama: 'Kurniawan', angkatan: 2024, nilaiUTS: 65, nilaiUAS: 70, nilaiTugas: 68, nilaiQuiz: 60, kehadiran: 10 },
      { nim: '2024101012', nama: 'Lina Marlina', angkatan: 2024, nilaiUTS: 82, nilaiUAS: 80, nilaiTugas: 85, nilaiQuiz: 78, kehadiran: 14 },
      { nim: '2024101013', nama: 'Muhammad Faisal', angkatan: 2023, nilaiUTS: 77, nilaiUAS: 80, nilaiTugas: 79, nilaiQuiz: 75, kehadiran: 12 },
      { nim: '2024101014', nama: 'Nadia Rahmawati', angkatan: 2024, nilaiUTS: 90, nilaiUAS: 88, nilaiTugas: 92, nilaiQuiz: 88, kehadiran: 14 },
    ]
  },
  { kode: 'MDK 120', nama: 'Perilaku Organisasi', sks: 3, kelas: 'B', semester: 'Genap 2025/2026', hari: 'Kamis', jam: '07:30-09:10', ruang: 'R.201',
    bobot: { uts: 20, uas: 30, tugas: 20, quiz: 15, absensi: 15 },
    mahasiswa: [
      { nim: '2024101001', nama: 'Ahmad Rizky Pratama', angkatan: 2023, nilaiUTS: 80, nilaiUAS: 85, nilaiTugas: 78, nilaiQuiz: 82, kehadiran: 12 },
      { nim: '2024101015', nama: 'Rudi Hermawan', angkatan: 2022, nilaiUTS: 75, nilaiUAS: 80, nilaiTugas: 82, nilaiQuiz: 78, kehadiran: 13 },
      { nim: '2024101016', nama: 'Yeni Fitriani', angkatan: 2022, nilaiUTS: 85, nilaiUAS: 88, nilaiTugas: 87, nilaiQuiz: 90, kehadiran: 14 },
      { nim: '2024101002', nama: 'Siti Nurhaliza', angkatan: 2023, nilaiUTS: 70, nilaiUAS: 74, nilaiTugas: 72, nilaiQuiz: 68, kehadiran: 11 },
      { nim: '2024101005', nama: 'Eko Prasetyo', angkatan: 2023, nilaiUTS: 88, nilaiUAS: 90, nilaiTugas: 85, nilaiQuiz: 92, kehadiran: 14 },
      { nim: '2024101010', nama: 'Julia Putri', angkatan: 2024, nilaiUTS: 82, nilaiUAS: 84, nilaiTugas: 80, nilaiQuiz: 85, kehadiran: 13 },
      { nim: '2024101013', nama: 'Muhammad Faisal', angkatan: 2023, nilaiUTS: 68, nilaiUAS: 72, nilaiTugas: 70, nilaiQuiz: 65, kehadiran: 12 },
    ]
  },
  { kode: 'MDK 126', nama: 'Kepemimpinan', sks: 3, kelas: 'A', semester: 'Genap 2025/2026', hari: 'Jumat', jam: '07:30-09:10', ruang: 'R.305',
    bobot: { uts: 20, uas: 30, tugas: 20, quiz: 15, absensi: 15 },
    mahasiswa: [
      { nim: '2024101001', nama: 'Ahmad Rizky Pratama', angkatan: 2023, nilaiUTS: 80, nilaiUAS: 85, nilaiTugas: 78, nilaiQuiz: 76, kehadiran: 12 },
      { nim: '2024101009', nama: 'Irfan Hakim', angkatan: 2023, nilaiUTS: 72, nilaiUAS: 78, nilaiTugas: 75, nilaiQuiz: 70, kehadiran: 13 },
      { nim: '2024101010', nama: 'Julia Putri', angkatan: 2024, nilaiUTS: 88, nilaiUAS: 90, nilaiTugas: 85, nilaiQuiz: 88, kehadiran: 14 },
      { nim: '2024101011', nama: 'Kurniawan', angkatan: 2024, nilaiUTS: 65, nilaiUAS: 70, nilaiTugas: 68, nilaiQuiz: 62, kehadiran: 10 },
      { nim: '2024101012', nama: 'Lina Marlina', angkatan: 2024, nilaiUTS: 82, nilaiUAS: 80, nilaiTugas: 85, nilaiQuiz: 80, kehadiran: 14 },
    ]
  }
];

export const DOSEN_BIMBINGAN = [
  { nim: '2024101001', nama: 'Ahmad Rizky Pratama', prodi: 'Administrasi Negara', angkatan: 2023, semester: 4, ipk: 3.69, sksLulus: 41, status: 'Aktif' },
  { nim: '2024101002', nama: 'Siti Nurhaliza', prodi: 'Administrasi Negara', angkatan: 2023, semester: 4, ipk: 3.52, sksLulus: 39, status: 'Aktif' },
  { nim: '2024101003', nama: 'Budi Santoso', prodi: 'Administrasi Negara', angkatan: 2023, semester: 4, ipk: 3.85, sksLulus: 43, status: 'Aktif' },
  { nim: '2024101004', nama: 'Dewi Lestari', prodi: 'Administrasi Negara', angkatan: 2023, semester: 4, ipk: 3.21, sksLulus: 38, status: 'Aktif' },
  { nim: '2023101015', nama: 'Rudi Hermawan', prodi: 'Administrasi Negara', angkatan: 2022, semester: 6, ipk: 3.45, sksLulus: 98, status: 'Aktif' },
  { nim: '2023101016', nama: 'Yeni Fitriani', prodi: 'Administrasi Negara', angkatan: 2022, semester: 6, ipk: 3.78, sksLulus: 102, status: 'Aktif' },
];

// === BAP DATA ===

export const KALENDER_AKADEMIK = [
  { no: 1, kegiatan: 'Registrasi & Herregistrasi', mulai: '1 Feb 2026', selesai: '14 Feb 2026', status: 'Selesai' },
  { no: 2, kegiatan: 'Pengisian KRS Online', mulai: '10 Feb 2026', selesai: '21 Feb 2026', status: 'Selesai' },
  { no: 3, kegiatan: 'Perwalian Akademik', mulai: '15 Feb 2026', selesai: '21 Feb 2026', status: 'Selesai' },
  { no: 4, kegiatan: 'Perkuliahan Semester Genap', mulai: '24 Feb 2026', selesai: '6 Jun 2026', status: 'Berjalan' },
  { no: 5, kegiatan: 'Ujian Tengah Semester (UTS)', mulai: '13 Apr 2026', selesai: '25 Apr 2026', status: 'Mendatang' },
  { no: 6, kegiatan: 'Perkuliahan Setelah UTS', mulai: '27 Apr 2026', selesai: '6 Jun 2026', status: 'Mendatang' },
  { no: 7, kegiatan: 'Ujian Akhir Semester (UAS)', mulai: '8 Jun 2026', selesai: '20 Jun 2026', status: 'Mendatang' },
  { no: 8, kegiatan: 'Input Nilai oleh Dosen', mulai: '22 Jun 2026', selesai: '4 Jul 2026', status: 'Mendatang' },
  { no: 9, kegiatan: 'Pengumuman KHS', mulai: '6 Jul 2026', selesai: '6 Jul 2026', status: 'Mendatang' },
  { no: 10, kegiatan: 'Libur Semester', mulai: '7 Jul 2026', selesai: '30 Aug 2026', status: 'Mendatang' },
];

export const WISUDA_DATA = {
  periode: 'Periode I Tahun Akademik 2025/2026',
  tanggal: 'Sabtu, 25 Juli 2026',
  tempat: 'Gedung Serbaguna STIA Bayuangga',
  calon: [
    { nim: '2021101001', nama: 'Rina Wulandari', prodi: 'Administrasi Negara', ipk: 3.82, judulSkripsi: 'Analisis Kebijakan Publik dalam Pengelolaan Sampah Kota', statusToga: 'Sudah' },
    { nim: '2021101002', nama: 'Agung Prasetya', prodi: 'Administrasi Negara', ipk: 3.65, judulSkripsi: 'Implementasi E-Government di Pemerintah Kabupaten Malang', statusToga: 'Sudah' },
    { nim: '2021101003', nama: 'Mega Safitri', prodi: 'Administrasi Negara', ipk: 3.91, judulSkripsi: 'Efektivitas Program BPJS dalam Pelayanan Kesehatan', statusToga: 'Belum' },
    { nim: '2021101004', nama: 'Dimas Nugroho', prodi: 'Administrasi Negara', ipk: 3.55, judulSkripsi: 'Partisipasi Masyarakat dalam Pembangunan Desa', statusToga: 'Sudah' },
    { nim: '2021101005', nama: 'Putri Ayu', prodi: 'Administrasi Negara', ipk: 3.72, judulSkripsi: 'Reformasi Birokrasi di Lingkungan Pemerintah Daerah', statusToga: 'Belum' },
  ]
};

export const SURAT_TEMPLATES = [
  { id: 1, jenis: 'Surat Keterangan Aktif Kuliah', kode: 'SKA', count: 45 },
  { id: 2, jenis: 'Surat Keterangan Lulus', kode: 'SKL', count: 12 },
  { id: 3, jenis: 'Surat Pengantar Magang', kode: 'SPM', count: 23 },
  { id: 4, jenis: 'Surat Keterangan Kelakuan Baik', kode: 'SKKB', count: 18 },
  { id: 5, jenis: 'Surat Rekomendasi Beasiswa', kode: 'SRB', count: 8 },
  { id: 6, jenis: 'Legalisir Ijazah', kode: 'LGI', count: 35 },
  { id: 7, jenis: 'Legalisir Transkrip Nilai', kode: 'LGT', count: 32 },
  { id: 8, jenis: 'Surat Cuti Akademik', kode: 'SCA', count: 5 },
];
