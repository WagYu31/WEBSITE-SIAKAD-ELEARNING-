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
    name: 'Administrasi Publik',
    jenjang: 'S1',
    akreditasi: 'B',
    desc: 'Program studi yang mempelajari teori dan praktik administrasi pemerintahan, kebijakan publik, dan manajemen organisasi publik.',
    mahasiswa: 420,
    dosen: 15,
    icon: '🏛️'
  },
  {
    id: 2,
    name: 'Administrasi Bisnis',
    jenjang: 'S1',
    akreditasi: 'B',
    desc: 'Mempelajari manajemen bisnis, pemasaran, keuangan, dan strategi bisnis untuk menjadi profesional di dunia usaha.',
    mahasiswa: 380,
    dosen: 14,
    icon: '💼'
  },
  {
    id: 3,
    name: 'Administrasi Publik',
    jenjang: 'S2',
    akreditasi: 'B',
    desc: 'Program magister untuk memperdalam analisis kebijakan publik, good governance, dan inovasi pelayanan publik.',
    mahasiswa: 120,
    dosen: 10,
    icon: '🎓'
  },
  {
    id: 4,
    name: 'Ilmu Administrasi',
    jenjang: 'D3',
    akreditasi: 'B',
    desc: 'Program diploma untuk mencetak tenaga ahli madya yang kompeten di bidang administrasi perkantoran.',
    mahasiswa: 330,
    dosen: 9,
    icon: '📋'
  }
];


export const DOSEN_LIST = [
  {
    id: 'DSN001',
    nip: '198501012010011001',
    nidn: '0701018501',
    nama: 'Dr. Ir. Bambang Sudarsono, M.Si.',
    email: 'bambang@stiabayuangga.ac.id',
    telepon: '081234500001',
    prodi: 'Administrasi Publik',
    jabatanFungsional: 'Wadek',
    golongan: 'IV/a',
    pendidikan: 'S3 Ilmu Administrasi Publik — Universitas Brawijaya',
    bidangKeahlian: ['Kebijakan Publik', 'Governance', 'Etika Administrasi'],
    mataKuliah: ['Kebijakan Publik', 'Etika Administrasi'],
    totalMK: 2,
    totalMahasiswaBimbingan: 12,
    totalPublikasi: 24,
    totalPenelitian: 8,
    totalPengabdian: 6,
    status: 'Aktif',
    avatar: null
  },
  {
    id: 'DSN002',
    nip: '198703152012012001',
    nidn: '0715038701',
    nama: 'Ir. Siti Nurjanah, M.T.',
    email: 'siti.nurjanah@stiabayuangga.ac.id',
    telepon: '081234500002',
    prodi: 'Administrasi Publik',
    jabatanFungsional: 'Dosen',
    golongan: 'III/d',
    pendidikan: 'S2 Teknik Informatika — ITS Surabaya',
    bidangKeahlian: ['Statistik Sosial', 'Metode Penelitian', 'Data Analytics'],
    mataKuliah: ['Statistik Sosial', 'Metodologi Penelitian'],
    totalMK: 2,
    totalMahasiswaBimbingan: 8,
    totalPublikasi: 15,
    totalPenelitian: 5,
    totalPengabdian: 4,
    status: 'Aktif',
    avatar: null
  },
  {
    id: 'DSN003',
    nip: '197809152005011001',
    nidn: '0715097801',
    nama: 'Prof. Dr. Sri Wahyuni, M.AP.',
    email: 'sri.wahyuni@stiabayuangga.ac.id',
    telepon: '081234500003',
    prodi: 'Administrasi Publik',
    jabatanFungsional: 'Kaprodi',
    golongan: 'IV/c',
    pendidikan: 'S3 Administrasi Publik — Universitas Indonesia',
    bidangKeahlian: ['Teori Administrasi', 'Manajemen Publik', 'Good Governance'],
    mataKuliah: ['Teori Administrasi', 'Manajemen Pelayanan Publik'],
    totalMK: 2,
    totalMahasiswaBimbingan: 15,
    totalPublikasi: 42,
    totalPenelitian: 14,
    totalPengabdian: 10,
    status: 'Aktif',
    avatar: null
  },
  {
    id: 'DSN004',
    nip: '197205101997031001',
    nidn: '0710057201',
    nama: 'Dr. Agus Rahardjo, S.H., M.H.',
    email: 'agus.rahardjo@stiabayuangga.ac.id',
    telepon: '081234500004',
    prodi: 'Administrasi Publik',
    jabatanFungsional: 'Dosen',
    golongan: 'IV/b',
    pendidikan: 'S3 Ilmu Hukum — Universitas Airlangga',
    bidangKeahlian: ['Hukum Administrasi', 'Hukum Tata Negara', 'Otonomi Daerah'],
    mataKuliah: ['Hukum Administrasi', 'Hukum Tata Negara'],
    totalMK: 2,
    totalMahasiswaBimbingan: 10,
    totalPublikasi: 18,
    totalPenelitian: 6,
    totalPengabdian: 8,
    status: 'Aktif',
    avatar: null
  },
  {
    id: 'DSN005',
    nip: '199001202015042001',
    nidn: '0720019001',
    nama: 'Dr. Rina Kartika, M.M.',
    email: 'rina.kartika@stiabayuangga.ac.id',
    telepon: '081234500005',
    prodi: 'Administrasi Bisnis',
    jabatanFungsional: 'Kaprodi',
    golongan: 'III/d',
    pendidikan: 'S3 Manajemen SDM — Universitas Gadjah Mada',
    bidangKeahlian: ['Manajemen SDM', 'Perilaku Organisasi', 'Psikologi Industri'],
    mataKuliah: ['Manajemen SDM', 'Perilaku Organisasi'],
    totalMK: 2,
    totalMahasiswaBimbingan: 9,
    totalPublikasi: 12,
    totalPenelitian: 4,
    totalPengabdian: 5,
    status: 'Aktif',
    avatar: null
  },
  {
    id: 'DSN006',
    nip: '198812102014041001',
    nidn: '0710128801',
    nama: 'Ir. Andi Prasetyo, M.Kom.',
    email: 'andi.prasetyo@stiabayuangga.ac.id',
    telepon: '081234500006',
    prodi: 'Administrasi Bisnis',
    jabatanFungsional: 'Dosen',
    golongan: 'III/b',
    pendidikan: 'S2 Ilmu Komputer — Universitas Brawijaya',
    bidangKeahlian: ['Sistem Informasi', 'E-Government', 'Database Management'],
    mataKuliah: ['Sistem Informasi Manajemen', 'E-Government'],
    totalMK: 2,
    totalMahasiswaBimbingan: 7,
    totalPublikasi: 8,
    totalPenelitian: 3,
    totalPengabdian: 3,
    status: 'Aktif',
    avatar: null
  },
  {
    id: 'DSN007',
    nip: '196504201990021001',
    nidn: '0720046501',
    nama: 'Prof. Dr. H. Mulyadi, M.AP.',
    email: 'mulyadi@stiabayuangga.ac.id',
    telepon: '081234500007',
    prodi: 'Administrasi Publik',
    jabatanFungsional: 'Dekan',
    golongan: 'IV/d',
    pendidikan: 'S3 Administrasi Publik — Universitas Padjadjaran',
    bidangKeahlian: ['Manajemen Publik', 'Kepemimpinan', 'Reformasi Birokrasi'],
    mataKuliah: ['Kepemimpinan Sektor Publik'],
    totalMK: 1,
    totalMahasiswaBimbingan: 5,
    totalPublikasi: 56,
    totalPenelitian: 18,
    totalPengabdian: 12,
    status: 'Aktif',
    avatar: null
  },
  {
    id: 'DSN008',
    nip: '199205152018042001',
    nidn: '0715059201',
    nama: 'Dewi Lestari, S.AP., M.AP.',
    email: 'dewi.lestari@stiabayuangga.ac.id',
    telepon: '081234500008',
    prodi: 'Administrasi Publik',
    jabatanFungsional: 'Dosen',
    golongan: 'III/b',
    pendidikan: 'S2 Administrasi Publik — Universitas Brawijaya',
    bidangKeahlian: ['Administrasi Keuangan', 'Perencanaan Pembangunan'],
    mataKuliah: ['Administrasi Keuangan Negara', 'Perencanaan Pembangunan'],
    totalMK: 2,
    totalMahasiswaBimbingan: 6,
    totalPublikasi: 6,
    totalPenelitian: 2,
    totalPengabdian: 3,
    status: 'Aktif',
    avatar: null
  },
  {
    id: 'DSN009',
    nip: '198006102006041001',
    nidn: '0710068001',
    nama: 'Dr. Hendra Wijaya, S.E., M.M.',
    email: 'hendra.wijaya@stiabayuangga.ac.id',
    telepon: '081234500009',
    prodi: 'Administrasi Bisnis',
    jabatanFungsional: 'Wadek',
    golongan: 'IV/a',
    pendidikan: 'S3 Manajemen — Universitas Airlangga',
    bidangKeahlian: ['Manajemen Keuangan', 'Kewirausahaan', 'Pemasaran'],
    mataKuliah: ['Manajemen Keuangan', 'Kewirausahaan'],
    totalMK: 2,
    totalMahasiswaBimbingan: 11,
    totalPublikasi: 20,
    totalPenelitian: 7,
    totalPengabdian: 5,
    status: 'Aktif',
    avatar: null
  },
  {
    id: 'DSN010',
    nip: '199108252019042001',
    nidn: '0725089101',
    nama: 'Ratna Sari, S.Sos., M.Si.',
    email: 'ratna.sari@stiabayuangga.ac.id',
    telepon: '081234500010',
    prodi: 'Administrasi Publik',
    jabatanFungsional: 'Dosen',
    golongan: 'III/a',
    pendidikan: 'S2 Sosiologi — Universitas Indonesia',
    bidangKeahlian: ['Sosiologi', 'Ilmu Politik', 'Komunikasi Publik'],
    mataKuliah: ['Sosiologi', 'Ilmu Politik', 'Komunikasi Publik'],
    totalMK: 3,
    totalMahasiswaBimbingan: 4,
    totalPublikasi: 5,
    totalPenelitian: 2,
    totalPengabdian: 2,
    status: 'Aktif',
    avatar: null
  }
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
    prodi: 'Administrasi Publik',
    semester: 4,
    ipk: 3.65,
    totalSks: 72,
    maxSks: 144,
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
    prodi: 'Administrasi Publik',
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
    prodi: 'Administrasi Publik',
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
  { hari: 'Senin', jam: '07:30-09:10', mk: 'Kebijakan Publik', kelas: 'A', ruang: 'R.201', dosen: 'Dr. Bambang S.' },
  { hari: 'Senin', jam: '09:20-11:00', mk: 'Statistik Sosial', kelas: 'A', ruang: 'R.305', dosen: 'Ir. Siti N.' },
  { hari: 'Selasa', jam: '07:30-09:10', mk: 'Teori Administrasi', kelas: 'A', ruang: 'R.102', dosen: 'Prof. Sri W.' },
  { hari: 'Selasa', jam: '13:00-14:40', mk: 'Hukum Administrasi', kelas: 'A', ruang: 'R.201', dosen: 'Dr. Agus R.' },
  { hari: 'Rabu', jam: '07:30-09:10', mk: 'Manajemen SDM', kelas: 'A', ruang: 'R.204', dosen: 'Dr. Rina K.' },
  { hari: 'Kamis', jam: '09:20-11:00', mk: 'Sistem Informasi Manajemen', kelas: 'A', ruang: 'Lab', dosen: 'Ir. Andi P.' },
  { hari: 'Jumat', jam: '07:30-09:10', mk: 'Etika Administrasi', kelas: 'A', ruang: 'R.301', dosen: 'Dr. Bambang S.' }
];

export const MATA_KULIAH = [
  { kode: 'AP301', nama: 'Kebijakan Publik', sks: 3, semester: 4, kategori: 'Wajib' },
  { kode: 'AP302', nama: 'Statistik Sosial', sks: 3, semester: 4, kategori: 'Wajib' },
  { kode: 'AP303', nama: 'Teori Administrasi', sks: 3, semester: 4, kategori: 'Wajib' },
  { kode: 'AP304', nama: 'Hukum Administrasi', sks: 2, semester: 4, kategori: 'Wajib' },
  { kode: 'AP305', nama: 'Manajemen SDM', sks: 3, semester: 4, kategori: 'Wajib' },
  { kode: 'AP306', nama: 'Sistem Informasi Manajemen', sks: 3, semester: 4, kategori: 'Pilihan' },
  { kode: 'AP307', nama: 'Etika Administrasi', sks: 2, semester: 4, kategori: 'Wajib' },
  { kode: 'AP201', nama: 'Pengantar Ilmu Administrasi', sks: 3, semester: 1, kategori: 'Wajib' },
  { kode: 'AP308', nama: 'Metode Penelitian Sosial', sks: 3, semester: 5, kategori: 'Wajib' },
  { kode: 'AP309', nama: 'E-Government', sks: 3, semester: 5, kategori: 'Pilihan' }
];

export const NILAI = [
  { kode: 'AP201', nama: 'Pengantar Ilmu Administrasi', sks: 3, nilai: 'A', bobot: 4.0, semester: 1 },
  { kode: 'AP202', nama: 'Pendidikan Pancasila', sks: 2, nilai: 'A', bobot: 4.0, semester: 1 },
  { kode: 'AP203', nama: 'Bahasa Indonesia', sks: 2, nilai: 'B+', bobot: 3.5, semester: 1 },
  { kode: 'AP204', nama: 'Pengantar Ekonomi', sks: 3, nilai: 'B+', bobot: 3.5, semester: 1 },
  { kode: 'AP205', nama: 'Sosiologi', sks: 3, nilai: 'A-', bobot: 3.7, semester: 1 },
  { kode: 'AP211', nama: 'Teori Organisasi', sks: 3, nilai: 'A-', bobot: 3.7, semester: 2 },
  { kode: 'AP212', nama: 'Hukum Tata Negara', sks: 3, nilai: 'B+', bobot: 3.5, semester: 2 },
  { kode: 'AP213', nama: 'Matematika Dasar', sks: 3, nilai: 'B', bobot: 3.0, semester: 2 },
  { kode: 'AP214', nama: 'Bahasa Inggris', sks: 2, nilai: 'A', bobot: 4.0, semester: 2 },
  { kode: 'AP215', nama: 'Ilmu Politik', sks: 3, nilai: 'A', bobot: 4.0, semester: 2 },
  { kode: 'AP301', nama: 'Kebijakan Publik', sks: 3, nilai: 'A-', bobot: 3.7, semester: 3 },
  { kode: 'AP302', nama: 'Administrasi Keuangan', sks: 3, nilai: 'B+', bobot: 3.5, semester: 3 },
  { kode: 'AP303', nama: 'Manajemen Proyek', sks: 3, nilai: 'A', bobot: 4.0, semester: 3 },
  { kode: 'AP304', nama: 'Metodologi Penelitian', sks: 3, nilai: 'B+', bobot: 3.5, semester: 3 },
  { kode: 'AP305', nama: 'Psikologi Sosial', sks: 2, nilai: 'A', bobot: 4.0, semester: 3 }
];

export const KELAS_LIST = [
  {
    id: 1,
    nama: 'Kebijakan Publik',
    kode: 'AP301',
    dosen: 'Dr. Bambang Sudarsono',
    semester: 'Genap 2025/2026',
    progress: 65,
    totalMateri: 14,
    materiSelesai: 9,
    mahasiswa: 45,
    jadwal: 'Senin, 07:30-09:10',
    sks: 3
  },
  {
    id: 2,
    nama: 'Statistik Sosial',
    kode: 'AP302',
    dosen: 'Ir. Siti Nurjanah',
    semester: 'Genap 2025/2026',
    progress: 50,
    totalMateri: 14,
    materiSelesai: 7,
    mahasiswa: 42,
    jadwal: 'Senin, 09:20-11:00',
    sks: 3
  },
  {
    id: 3,
    nama: 'Teori Administrasi',
    kode: 'AP303',
    dosen: 'Prof. Sri Wahyuni',
    semester: 'Genap 2025/2026',
    progress: 72,
    totalMateri: 14,
    materiSelesai: 10,
    mahasiswa: 48,
    jadwal: 'Selasa, 07:30-09:10',
    sks: 3
  },
  {
    id: 4,
    nama: 'Hukum Administrasi',
    kode: 'AP304',
    dosen: 'Dr. Agus Rahardjo',
    semester: 'Genap 2025/2026',
    progress: 43,
    totalMateri: 14,
    materiSelesai: 6,
    mahasiswa: 45,
    jadwal: 'Selasa, 13:00-14:40',
    sks: 2
  },
  {
    id: 5,
    nama: 'Manajemen SDM',
    kode: 'AP305',
    dosen: 'Dr. Rina Kartika',
    semester: 'Genap 2025/2026',
    progress: 57,
    totalMateri: 14,
    materiSelesai: 8,
    mahasiswa: 40,
    jadwal: 'Rabu, 07:30-09:10',
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
