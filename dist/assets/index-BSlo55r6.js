(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={},t={},n=null;function r(n,r,i=``){e[n]=r,t[n]=i}function i(e){window.location.hash=e}function a(e){n=document.getElementById(e),window.addEventListener(`hashchange`,o),window.addEventListener(`load`,o),window.location.hash?o():window.location.hash=`#/`}async function o(){let r=window.location.hash.slice(1)||`/`,i=e[r];if(!i){for(let[t,n]of Object.entries(e))if(t.includes(`:`)){let e=RegExp(`^`+t.replace(/:[^/]+/g,`([^/]+)`)+`$`);if(r.match(e)){i=n;break}}}if(i&&n){n.style.opacity=`0`,n.style.transform=`translateY(10px)`,await new Promise(e=>setTimeout(e,150));try{await i(n)}catch(e){console.error(`Route error:`,e),n.innerHTML=`
        <div style="text-align:center;padding:4rem 2rem;" role="alert">
          <h2>404 - Halaman Tidak Ditemukan</h2>
          <p style="margin:1rem 0;color:#64748B;">Halaman yang Anda cari tidak tersedia.</p>
          <a href="#/" style="color:#0D6EBF;">Kembali ke Beranda</a>
        </div>
      `}requestAnimationFrame(()=>{n.style.transition=`opacity 0.3s ease`,n.style.opacity=`1`,n.style.transform=``});let e=document.getElementById(`route-announcer`);e&&(e.textContent=`Halaman ${t[r]||r.replace(/[/#]/g,` `).trim()||`Beranda`} telah dimuat`);let a=n.querySelector(`h1, h2, [tabindex="-1"]`)||n;a&&a!==n&&(a.setAttribute(`tabindex`,`-1`),a.focus({preventScroll:!0})),window.scrollTo({top:0,behavior:`smooth`})}}var s={name:`STIA BAYUANGGA`,fullName:`Sekolah Tinggi Ilmu Administrasi Bayuangga`,location:`Probolinggo, Jawa Timur`,address:`Jl. Raya Dringu No.62, Probolinggo, Jawa Timur 67271`,phone:`(0335) 421173`,email:`info@stiabayuangga.ac.id`,website:`www.stiabayuangga.ac.id`,tagline:`Mencetak Lulusan Unggul di Bidang Administrasi`,visi:`Menjadi Perguruan Tinggi unggul dalam pengembangan Ilmu Administrasi yang berdaya saing global dan bermoral Pancasila.`,misi:[`Menyelenggarakan pendidikan tinggi di bidang Ilmu Administrasi yang berkualitas dan berdaya saing.`,`Melaksanakan penelitian dan pengabdian kepada masyarakat di bidang Ilmu Administrasi.`,`Mengembangkan kerjasama dengan berbagai pihak dalam dan luar negeri.`,`Membangun tata kelola perguruan tinggi yang baik dan transparan.`],stats:{mahasiswa:1250,dosen:48,prodi:4,akreditasi:`B`}},c=[{id:1,name:`Administrasi Negara`,jenjang:`S1`,akreditasi:`B`,desc:`Program studi yang mempelajari teori dan praktik administrasi pemerintahan, kebijakan publik, dan manajemen organisasi publik.`,mahasiswa:420,dosen:15,icon:`🏛️`},{id:2,name:`Administrasi Niaga`,jenjang:`S1`,akreditasi:`B`,desc:`Mempelajari manajemen bisnis, pemasaran, keuangan, dan strategi bisnis untuk menjadi profesional di dunia usaha.`,mahasiswa:380,dosen:14,icon:`💼`}],l=[{id:`DSN001`,nip:`196504201990021001`,nidn:`0720046501`,nama:`Prof. Dr. H. Mulyadi, M.AP.`,email:`mulyadi@stiabayuangga.ac.id`,telepon:`081234500001`,jabatanFungsional:`Dekan`,golongan:`IV/d`,pendidikan:`S3 Administrasi Publik — Universitas Padjadjaran`,bidangKeahlian:[`Manajemen Publik`,`Kepemimpinan`,`Reformasi Birokrasi`],mataKuliah:[`Kepemimpinan Sektor Publik`],totalMK:1,totalMahasiswaBimbingan:5,totalPublikasi:56,totalPenelitian:18,totalPengabdian:12,status:`Aktif`,avatar:null,username:`mulyadi`,password:`dosen123`},{id:`DSN002`,nip:`198501012010011001`,nidn:`0701018501`,nama:`Dr. Ir. Bambang Sudarsono, M.Si.`,email:`bambang@stiabayuangga.ac.id`,telepon:`081234500002`,jabatanFungsional:`Wadek`,golongan:`IV/a`,pendidikan:`S3 Ilmu Administrasi Publik — Universitas Brawijaya`,bidangKeahlian:[`Kebijakan Publik`,`Governance`,`Etika Administrasi`],mataKuliah:[`Kebijakan Publik`,`Etika Administrasi`],totalMK:2,totalMahasiswaBimbingan:12,totalPublikasi:24,totalPenelitian:8,totalPengabdian:6,status:`Aktif`,avatar:null,username:`bambang`,password:`dosen123`},{id:`DSN003`,nip:`198006102006041001`,nidn:`0710068001`,nama:`Dr. Hendra Wijaya, S.E., M.M.`,email:`hendra.wijaya@stiabayuangga.ac.id`,telepon:`081234500003`,jabatanFungsional:`Wadek`,golongan:`IV/a`,pendidikan:`S3 Manajemen — Universitas Airlangga`,bidangKeahlian:[`Manajemen Keuangan`,`Kewirausahaan`,`Pemasaran`],mataKuliah:[`Manajemen Keuangan`,`Kewirausahaan`],totalMK:2,totalMahasiswaBimbingan:11,totalPublikasi:20,totalPenelitian:7,totalPengabdian:5,status:`Aktif`,avatar:null,username:`hendra.wijaya`,password:`dosen123`},{id:`DSN004`,nip:`197809152005011001`,nidn:`0715097801`,nama:`Prof. Dr. Sri Wahyuni, M.AP.`,email:`sri.wahyuni@stiabayuangga.ac.id`,telepon:`081234500004`,jabatanFungsional:`Kaprodi`,golongan:`IV/c`,pendidikan:`S3 Administrasi Publik — Universitas Indonesia`,bidangKeahlian:[`Teori Administrasi`,`Manajemen Publik`,`Good Governance`],mataKuliah:[`Teori Administrasi`,`Manajemen Pelayanan Publik`],totalMK:2,totalMahasiswaBimbingan:15,totalPublikasi:42,totalPenelitian:14,totalPengabdian:10,status:`Aktif`,avatar:null,username:`sri.wahyuni`,password:`dosen123`},{id:`DSN005`,nip:`199001202015042001`,nidn:`0720019001`,nama:`Dr. Rina Kartika, M.M.`,email:`rina.kartika@stiabayuangga.ac.id`,telepon:`081234500005`,jabatanFungsional:`Kaprodi`,golongan:`III/d`,pendidikan:`S3 Manajemen SDM — Universitas Gadjah Mada`,bidangKeahlian:[`Manajemen SDM`,`Perilaku Organisasi`,`Psikologi Industri`],mataKuliah:[`Manajemen SDM`,`Perilaku Organisasi`],totalMK:2,totalMahasiswaBimbingan:9,totalPublikasi:12,totalPenelitian:4,totalPengabdian:5,status:`Aktif`,avatar:null,username:`rina.kartika`,password:`dosen123`},{id:`DSN006`,nip:`197012051996031001`,nidn:`0705127001`,nama:`Dr. Achmad Fauzi, M.AP.`,email:`achmad.fauzi@stiabayuangga.ac.id`,telepon:`081234500006`,jabatanFungsional:`Kaprodi`,golongan:`IV/b`,pendidikan:`S3 Administrasi Publik — Universitas Brawijaya`,bidangKeahlian:[`Kebijakan Publik`,`Desentralisasi`,`Otonomi Daerah`],mataKuliah:[`Analisis Kebijakan Publik`,`Desentralisasi`],totalMK:2,totalMahasiswaBimbingan:8,totalPublikasi:28,totalPenelitian:10,totalPengabdian:7,status:`Aktif`,avatar:null,username:`achmad.fauzi`,password:`dosen123`},{id:`DSN007`,nip:`198308152010012001`,nidn:`0715088301`,nama:`Dr. Yuni Rahmawati, S.Sos., M.AP.`,email:`yuni.rahmawati@stiabayuangga.ac.id`,telepon:`081234500007`,jabatanFungsional:`Kaprodi`,golongan:`III/d`,pendidikan:`S3 Ilmu Administrasi — Universitas 17 Agustus Surabaya`,bidangKeahlian:[`Administrasi Perkantoran`,`Tata Kelola`,`Kesekretariatan`],mataKuliah:[`Administrasi Perkantoran`,`Manajemen Kesekretariatan`],totalMK:2,totalMahasiswaBimbingan:10,totalPublikasi:14,totalPenelitian:5,totalPengabdian:6,status:`Aktif`,avatar:null,username:`yuni.rahmawati`,password:`dosen123`},{id:`DSN008`,nip:`198703152012012001`,nidn:`0715038701`,nama:`Ir. Siti Nurjanah, M.T.`,email:`siti.nurjanah@stiabayuangga.ac.id`,telepon:`081234500008`,jabatanFungsional:`Dosen`,golongan:`III/d`,pendidikan:`S2 Teknik Informatika — ITS Surabaya`,bidangKeahlian:[`Statistik Sosial`,`Metode Penelitian`,`Data Analytics`],mataKuliah:[`Statistik Sosial`,`Metodologi Penelitian`],totalMK:2,totalMahasiswaBimbingan:8,totalPublikasi:15,totalPenelitian:5,totalPengabdian:4,status:`Aktif`,avatar:null,username:`siti.nurjanah`,password:`dosen123`},{id:`DSN009`,nip:`197205101997031001`,nidn:`0710057201`,nama:`Dr. Agus Rahardjo, S.H., M.H.`,email:`agus.rahardjo@stiabayuangga.ac.id`,telepon:`081234500009`,jabatanFungsional:`Dosen`,golongan:`IV/b`,pendidikan:`S3 Ilmu Hukum — Universitas Airlangga`,bidangKeahlian:[`Hukum Administrasi`,`Hukum Tata Negara`,`Otonomi Daerah`],mataKuliah:[`Hukum Administrasi`,`Hukum Tata Negara`],totalMK:2,totalMahasiswaBimbingan:10,totalPublikasi:18,totalPenelitian:6,totalPengabdian:8,status:`Aktif`,avatar:null,username:`agus.rahardjo`,password:`dosen123`},{id:`DSN010`,nip:`198812102014041001`,nidn:`0710128801`,nama:`Ir. Andi Prasetyo, M.Kom.`,email:`andi.prasetyo@stiabayuangga.ac.id`,telepon:`081234500010`,jabatanFungsional:`Dosen`,golongan:`III/b`,pendidikan:`S2 Ilmu Komputer — Universitas Brawijaya`,bidangKeahlian:[`Sistem Informasi`,`E-Government`,`Database Management`],mataKuliah:[`Sistem Informasi Manajemen`,`E-Government`],totalMK:2,totalMahasiswaBimbingan:7,totalPublikasi:8,totalPenelitian:3,totalPengabdian:3,status:`Aktif`,avatar:null,username:`andi.prasetyo`,password:`dosen123`},{id:`DSN011`,nip:`199205152018042001`,nidn:`0715059201`,nama:`Dewi Lestari, S.AP., M.AP.`,email:`dewi.lestari@stiabayuangga.ac.id`,telepon:`081234500011`,jabatanFungsional:`Dosen`,golongan:`III/b`,pendidikan:`S2 Administrasi Publik — Universitas Brawijaya`,bidangKeahlian:[`Administrasi Keuangan`,`Perencanaan Pembangunan`],mataKuliah:[`Administrasi Keuangan Negara`,`Perencanaan Pembangunan`],totalMK:2,totalMahasiswaBimbingan:6,totalPublikasi:6,totalPenelitian:2,totalPengabdian:3,status:`Aktif`,avatar:null,username:`dewi.lestari`,password:`dosen123`},{id:`DSN012`,nip:`199108252019042001`,nidn:`0725089101`,nama:`Ratna Sari, S.Sos., M.Si.`,email:`ratna.sari@stiabayuangga.ac.id`,telepon:`081234500012`,jabatanFungsional:`Dosen`,golongan:`III/a`,pendidikan:`S2 Sosiologi — Universitas Indonesia`,bidangKeahlian:[`Sosiologi`,`Ilmu Politik`,`Komunikasi Publik`],mataKuliah:[`Sosiologi`,`Ilmu Politik`,`Komunikasi Publik`],totalMK:3,totalMahasiswaBimbingan:4,totalPublikasi:5,totalPenelitian:2,totalPengabdian:2,status:`Aktif`,avatar:null,username:`ratna.sari`,password:`dosen123`},{id:`DSN013`,nip:`196808151993031002`,nidn:`0715086801`,nama:`Drs. Sugianto, M.AP.`,email:`sugianto@stiabayuangga.ac.id`,telepon:`081234500013`,jabatanFungsional:`Dosen`,golongan:`IV/a`,pendidikan:`S2 Administrasi Publik — UNAIR`,bidangKeahlian:[`Administrasi Negara`,`Birokrasi`,`Organisasi Publik`],mataKuliah:[`Pengantar Ilmu Administrasi Negara`,`Birokrasi Indonesia`],totalMK:2,totalMahasiswaBimbingan:8,totalPublikasi:16,totalPenelitian:7,totalPengabdian:9,status:`Aktif`,avatar:null,username:`sugianto`,password:`dosen123`},{id:`DSN014`,nip:`197503201999032001`,nidn:`0720037501`,nama:`Dr. Endang Sulistyowati, M.Si.`,email:`endang.s@stiabayuangga.ac.id`,telepon:`081234500014`,jabatanFungsional:`Dosen`,golongan:`IV/a`,pendidikan:`S3 Ilmu Sosial — Universitas Airlangga`,bidangKeahlian:[`Pemberdayaan Masyarakat`,`Gender dan Pembangunan`],mataKuliah:[`Pemberdayaan Masyarakat`,`Sosiologi Pembangunan`],totalMK:2,totalMahasiswaBimbingan:7,totalPublikasi:22,totalPenelitian:9,totalPengabdian:11,status:`Aktif`,avatar:null,username:`endang.s`,password:`dosen123`},{id:`DSN015`,nip:`198104102008011001`,nidn:`0710048101`,nama:`Dr. Wahyu Hidayat, S.IP., M.Si.`,email:`wahyu.h@stiabayuangga.ac.id`,telepon:`081234500015`,jabatanFungsional:`Dosen`,golongan:`III/d`,pendidikan:`S3 Ilmu Politik — Universitas Indonesia`,bidangKeahlian:[`Ilmu Politik`,`Sistem Politik`,`Pemilu dan Demokrasi`],mataKuliah:[`Ilmu Politik`,`Sistem Pemerintahan Indonesia`],totalMK:2,totalMahasiswaBimbingan:6,totalPublikasi:14,totalPenelitian:5,totalPengabdian:4,status:`Aktif`,avatar:null,username:`wahyu.h`,password:`dosen123`},{id:`DSN016`,nip:`198907252016042001`,nidn:`0725078901`,nama:`Fitri Handayani, S.E., M.M.`,email:`fitri.h@stiabayuangga.ac.id`,telepon:`081234500016`,jabatanFungsional:`Dosen`,golongan:`III/b`,pendidikan:`S2 Manajemen — Universitas Brawijaya`,bidangKeahlian:[`Manajemen Pemasaran`,`Digital Marketing`,`Riset Pasar`],mataKuliah:[`Manajemen Pemasaran`,`Digital Marketing`],totalMK:2,totalMahasiswaBimbingan:5,totalPublikasi:7,totalPenelitian:3,totalPengabdian:2,status:`Aktif`,avatar:null,username:`fitri.h`,password:`dosen123`},{id:`DSN017`,nip:`197605151999031001`,nidn:`0715057601`,nama:`Dr. Moch. Irfan, M.AP.`,email:`moch.irfan@stiabayuangga.ac.id`,telepon:`081234500017`,jabatanFungsional:`Dosen`,golongan:`IV/a`,pendidikan:`S3 Administrasi Publik — Universitas Padjadjaran`,bidangKeahlian:[`Pelayanan Publik`,`Inovasi Pemerintahan`,`Smart City`],mataKuliah:[`Manajemen Pelayanan Publik`,`Smart Governance`],totalMK:2,totalMahasiswaBimbingan:9,totalPublikasi:19,totalPenelitian:8,totalPengabdian:6,status:`Aktif`,avatar:null,username:`moch.irfan`,password:`dosen123`},{id:`DSN018`,nip:`199305102020042001`,nidn:`0710059301`,nama:`Ayu Kusuma Wardani, S.AP., M.AP.`,email:`ayu.kw@stiabayuangga.ac.id`,telepon:`081234500018`,jabatanFungsional:`Dosen`,golongan:`III/a`,pendidikan:`S2 Administrasi Publik — Universitas Brawijaya`,bidangKeahlian:[`E-Government`,`Transformasi Digital`,`Open Data`],mataKuliah:[`E-Government`,`Transformasi Digital`],totalMK:2,totalMahasiswaBimbingan:3,totalPublikasi:4,totalPenelitian:2,totalPengabdian:1,status:`Aktif`,avatar:null,username:`ayu.kw`,password:`dosen123`},{id:`DSN019`,nip:`197108101997031001`,nidn:`0710087101`,nama:`Dr. Slamet Riyadi, S.Sos., M.Si.`,email:`slamet.r@stiabayuangga.ac.id`,telepon:`081234500019`,jabatanFungsional:`Dosen`,golongan:`IV/a`,pendidikan:`S3 Sosiologi — Universitas Gadjah Mada`,bidangKeahlian:[`Sosiologi`,`Antropologi`,`Kearifan Lokal`],mataKuliah:[`Sosiologi`,`Antropologi Budaya`],totalMK:2,totalMahasiswaBimbingan:7,totalPublikasi:17,totalPenelitian:8,totalPengabdian:10,status:`Aktif`,avatar:null,username:`slamet.r`,password:`dosen123`},{id:`DSN020`,nip:`198510152012012001`,nidn:`0715108501`,nama:`Dr. Lina Marliana, S.E., M.Ak.`,email:`lina.m@stiabayuangga.ac.id`,telepon:`081234500020`,jabatanFungsional:`Dosen`,golongan:`III/d`,pendidikan:`S3 Akuntansi — Universitas Airlangga`,bidangKeahlian:[`Akuntansi Sektor Publik`,`Auditing`,`Penganggaran`],mataKuliah:[`Akuntansi Sektor Publik`,`Auditing`],totalMK:2,totalMahasiswaBimbingan:6,totalPublikasi:11,totalPenelitian:4,totalPengabdian:3,status:`Aktif`,avatar:null,username:`lina.m`,password:`dosen123`},{id:`DSN021`,nip:`199007082017041001`,nidn:`0708079001`,nama:`M. Rizky Fauzan, S.Kom., M.TI.`,email:`rizky.fauzan@stiabayuangga.ac.id`,telepon:`081234500021`,jabatanFungsional:`Dosen`,golongan:`III/b`,pendidikan:`S2 Teknologi Informasi — ITS Surabaya`,bidangKeahlian:[`Pemrograman Web`,`Cloud Computing`,`Big Data`],mataKuliah:[`Pemrograman`,`Basis Data`],totalMK:2,totalMahasiswaBimbingan:4,totalPublikasi:6,totalPenelitian:2,totalPengabdian:1,status:`Aktif`,avatar:null,username:`rizky.fauzan`,password:`dosen123`},{id:`DSN022`,nip:`196905201993032001`,nidn:`0720056901`,nama:`Dra. Sumarni, M.Pd.`,email:`sumarni@stiabayuangga.ac.id`,telepon:`081234500022`,jabatanFungsional:`Dosen`,golongan:`IV/b`,pendidikan:`S2 Pendidikan — Universitas Negeri Malang`,bidangKeahlian:[`Bahasa Indonesia`,`Penulisan Ilmiah`,`Komunikasi`],mataKuliah:[`Bahasa Indonesia`,`Teknik Penulisan Ilmiah`],totalMK:2,totalMahasiswaBimbingan:5,totalPublikasi:10,totalPenelitian:3,totalPengabdian:8,status:`Aktif`,avatar:null,username:`sumarni`,password:`dosen123`},{id:`DSN023`,nip:`198205102008012001`,nidn:`0710058201`,nama:`Dr. Nurul Hidayah, S.Ag., M.Si.`,email:`nurul.h@stiabayuangga.ac.id`,telepon:`081234500023`,jabatanFungsional:`Dosen`,golongan:`III/d`,pendidikan:`S3 Ilmu Sosial — Universitas Muhammadiyah Malang`,bidangKeahlian:[`Pendidikan Pancasila`,`Kewarganegaraan`,`Etika`],mataKuliah:[`Pendidikan Pancasila`,`Pendidikan Kewarganegaraan`],totalMK:2,totalMahasiswaBimbingan:4,totalPublikasi:9,totalPenelitian:3,totalPengabdian:5,status:`Aktif`,avatar:null,username:`nurul.h`,password:`dosen123`},{id:`DSN024`,nip:`197405201999032001`,nidn:`0720057401`,nama:`Dr. Sri Rahayu, S.H., M.Kn.`,email:`sri.rahayu@stiabayuangga.ac.id`,telepon:`081234500024`,jabatanFungsional:`Dosen`,golongan:`IV/a`,pendidikan:`S3 Ilmu Hukum — Universitas Brawijaya`,bidangKeahlian:[`Hukum Perdata`,`Hukum Bisnis`,`Kontrak`],mataKuliah:[`Hukum Bisnis`,`Hukum Perdata`],totalMK:2,totalMahasiswaBimbingan:6,totalPublikasi:15,totalPenelitian:5,totalPengabdian:4,status:`Aktif`,avatar:null,username:`sri.rahayu`,password:`dosen123`},{id:`DSN025`,nip:`199108102019041001`,nidn:`0710089101`,nama:`Ahmad Syarif, S.AP., M.AP.`,email:`ahmad.syarif@stiabayuangga.ac.id`,telepon:`081234500025`,jabatanFungsional:`Dosen`,golongan:`III/a`,pendidikan:`S2 Administrasi Publik — Universitas Jember`,bidangKeahlian:[`Manajemen Proyek`,`Pembangunan Daerah`],mataKuliah:[`Manajemen Proyek`,`Perencanaan Wilayah`],totalMK:2,totalMahasiswaBimbingan:3,totalPublikasi:4,totalPenelitian:1,totalPengabdian:2,status:`Aktif`,avatar:null,username:`ahmad.syarif`,password:`dosen123`},{id:`DSN026`,nip:`197907152005012001`,nidn:`0715077901`,nama:`Dr. Rini Utami, S.E., M.Si.`,email:`rini.utami@stiabayuangga.ac.id`,telepon:`081234500026`,jabatanFungsional:`Dosen`,golongan:`III/d`,pendidikan:`S3 Ekonomi — Universitas Airlangga`,bidangKeahlian:[`Ekonomi Publik`,`Ekonomi Pembangunan`,`Mikroekonomi`],mataKuliah:[`Pengantar Ekonomi`,`Ekonomi Pembangunan`],totalMK:2,totalMahasiswaBimbingan:7,totalPublikasi:13,totalPenelitian:5,totalPengabdian:3,status:`Aktif`,avatar:null,username:`rini.utami`,password:`dosen123`},{id:`DSN027`,nip:`198605202012012001`,nidn:`0720058601`,nama:`Dian Permata, S.Pd., M.Pd.`,email:`dian.permata@stiabayuangga.ac.id`,telepon:`081234500027`,jabatanFungsional:`Dosen`,golongan:`III/c`,pendidikan:`S2 Pendidikan Bahasa Inggris — UM Malang`,bidangKeahlian:[`Bahasa Inggris`,`TOEFL Preparation`,`Academic Writing`],mataKuliah:[`Bahasa Inggris`,`Academic English`],totalMK:2,totalMahasiswaBimbingan:3,totalPublikasi:6,totalPenelitian:2,totalPengabdian:3,status:`Aktif`,avatar:null,username:`dian.permata`,password:`dosen123`},{id:`DSN028`,nip:`197303101997031001`,nidn:`0710037301`,nama:`Dr. Eko Budi Santoso, M.AP.`,email:`eko.budi@stiabayuangga.ac.id`,telepon:`081234500028`,jabatanFungsional:`Dosen`,golongan:`IV/a`,pendidikan:`S3 Administrasi Publik — UNAIR`,bidangKeahlian:[`Tata Kelola Pemerintahan`,`Reformasi Birokrasi`,`Akuntabilitas`],mataKuliah:[`Tata Kelola Pemerintahan`,`Etika Pejabat Publik`],totalMK:2,totalMahasiswaBimbingan:8,totalPublikasi:20,totalPenelitian:9,totalPengabdian:7,status:`Aktif`,avatar:null,username:`eko.budi`,password:`dosen123`},{id:`DSN029`,nip:`199404152020042001`,nidn:`0715049401`,nama:`Sinta Puspitasari, S.E., M.M.`,email:`sinta.p@stiabayuangga.ac.id`,telepon:`081234500029`,jabatanFungsional:`Dosen`,golongan:`III/a`,pendidikan:`S2 Manajemen — Universitas Brawijaya`,bidangKeahlian:[`Manajemen Operasional`,`Supply Chain`,`Logistik`],mataKuliah:[`Manajemen Operasional`,`Supply Chain Management`],totalMK:2,totalMahasiswaBimbingan:3,totalPublikasi:3,totalPenelitian:1,totalPengabdian:1,status:`Aktif`,avatar:null,username:`sinta.p`,password:`dosen123`},{id:`DSN030`,nip:`198001052005011001`,nidn:`0705018001`,nama:`Dr. Didik Supriyanto, S.Sos., M.AP.`,email:`didik.s@stiabayuangga.ac.id`,telepon:`081234500030`,jabatanFungsional:`Dosen`,golongan:`III/d`,pendidikan:`S3 Administrasi Publik — Universitas 17 Agustus Surabaya`,bidangKeahlian:[`Administrasi Pembangunan`,`Perencanaan Strategis`],mataKuliah:[`Administrasi Pembangunan`,`Perencanaan Strategis`],totalMK:2,totalMahasiswaBimbingan:5,totalPublikasi:10,totalPenelitian:4,totalPengabdian:5,status:`Aktif`,avatar:null,username:`didik.s`,password:`dosen123`},{id:`DSN031`,nip:`196712101993031001`,nidn:`0710126701`,nama:`Drs. Ibrahim Hasan, M.Si.`,email:`ibrahim.h@stiabayuangga.ac.id`,telepon:`081234500031`,jabatanFungsional:`Dosen`,golongan:`IV/b`,pendidikan:`S2 Ilmu Politik — Universitas Gadjah Mada`,bidangKeahlian:[`Politik Lokal`,`Demokrasi`,`Partai Politik`],mataKuliah:[`Politik Indonesia`,`Demokrasi dan HAM`],totalMK:2,totalMahasiswaBimbingan:4,totalPublikasi:21,totalPenelitian:10,totalPengabdian:8,status:`Aktif`,avatar:null,username:`ibrahim.h`,password:`dosen123`},{id:`DSN032`,nip:`198808202014042001`,nidn:`0720088801`,nama:`Kartika Dewi, S.AP., M.AP.`,email:`kartika.d@stiabayuangga.ac.id`,telepon:`081234500032`,jabatanFungsional:`Dosen`,golongan:`III/b`,pendidikan:`S2 Administrasi Publik — Universitas Jember`,bidangKeahlian:[`Kebijakan Sosial`,`Kesejahteraan Sosial`],mataKuliah:[`Kebijakan Sosial`,`Kesejahteraan Rakyat`],totalMK:2,totalMahasiswaBimbingan:4,totalPublikasi:5,totalPenelitian:2,totalPengabdian:3,status:`Aktif`,avatar:null,username:`kartika.d`,password:`dosen123`},{id:`DSN033`,nip:`197610151999032001`,nidn:`0715107601`,nama:`Dr. Retno Wulandari, S.E., M.M.`,email:`retno.w@stiabayuangga.ac.id`,telepon:`081234500033`,jabatanFungsional:`Dosen`,golongan:`IV/a`,pendidikan:`S3 Manajemen — Universitas Padjadjaran`,bidangKeahlian:[`Manajemen Strategis`,`Bisnis Internasional`,`Analisis SWOT`],mataKuliah:[`Manajemen Strategis`,`Bisnis Internasional`],totalMK:2,totalMahasiswaBimbingan:8,totalPublikasi:18,totalPenelitian:7,totalPengabdian:5,status:`Aktif`,avatar:null,username:`retno.w`,password:`dosen123`},{id:`DSN034`,nip:`199206102019041001`,nidn:`0710069201`,nama:`Fajar Anugrah, S.Kom., M.Cs.`,email:`fajar.a@stiabayuangga.ac.id`,telepon:`081234500034`,jabatanFungsional:`Dosen`,golongan:`III/a`,pendidikan:`S2 Computer Science — Universitas Brawijaya`,bidangKeahlian:[`Machine Learning`,`Data Science`,`Artificial Intelligence`],mataKuliah:[`Sistem Pendukung Keputusan`,`Analisis Data`],totalMK:2,totalMahasiswaBimbingan:3,totalPublikasi:5,totalPenelitian:2,totalPengabdian:1,status:`Aktif`,avatar:null,username:`fajar.a`,password:`dosen123`},{id:`DSN035`,nip:`197201051996031001`,nidn:`0705017201`,nama:`Drs. H. Mujib Harianto, M.AP.`,email:`mujib.h@stiabayuangga.ac.id`,telepon:`081234500035`,jabatanFungsional:`Dosen`,golongan:`IV/b`,pendidikan:`S2 Administrasi Publik — UNAIR`,bidangKeahlian:[`Birokrasi`,`Pelayanan Publik`,`Reformasi Administrasi`],mataKuliah:[`Reformasi Administrasi`,`Pelayanan Prima`],totalMK:2,totalMahasiswaBimbingan:6,totalPublikasi:14,totalPenelitian:6,totalPengabdian:9,status:`Aktif`,avatar:null,username:`mujib.h`,password:`dosen123`},{id:`DSN036`,nip:`198505052012012001`,nidn:`0705058501`,nama:`Dr. Maya Anggraini, S.Sos., M.Si.`,email:`maya.a@stiabayuangga.ac.id`,telepon:`081234500036`,jabatanFungsional:`Dosen`,golongan:`III/d`,pendidikan:`S3 Komunikasi — Universitas Indonesia`,bidangKeahlian:[`Komunikasi Publik`,`Public Relations`,`Media Sosial`],mataKuliah:[`Komunikasi Organisasi`,`Public Relations`],totalMK:2,totalMahasiswaBimbingan:5,totalPublikasi:11,totalPenelitian:4,totalPengabdian:3,status:`Aktif`,avatar:null,username:`maya.a`,password:`dosen123`},{id:`DSN037`,nip:`199501202021042001`,nidn:`0720019501`,nama:`Nadia Rahma, S.AP., M.AP.`,email:`nadia.r@stiabayuangga.ac.id`,telepon:`081234500037`,jabatanFungsional:`Dosen`,golongan:`III/a`,pendidikan:`S2 Administrasi Publik — Universitas Brawijaya`,bidangKeahlian:[`Smart City`,`Digital Government`,`Open Government`],mataKuliah:[`Smart City`,`Inovasi Digital Pemerintahan`],totalMK:2,totalMahasiswaBimbingan:2,totalPublikasi:3,totalPenelitian:1,totalPengabdian:1,status:`Aktif`,avatar:null,username:`nadia.r`,password:`dosen123`},{id:`DSN038`,nip:`197808102005012001`,nidn:`0710087801`,nama:`Dr. Winarsih, S.Sos., M.Si.`,email:`winarsih@stiabayuangga.ac.id`,telepon:`081234500038`,jabatanFungsional:`Dosen`,golongan:`IV/a`,pendidikan:`S3 Sosiologi — Universitas Airlangga`,bidangKeahlian:[`Sosiologi Perkotaan`,`Pembangunan Sosial`,`Gender`],mataKuliah:[`Sosiologi Perkotaan`,`Pembangunan Sosial`],totalMK:2,totalMahasiswaBimbingan:7,totalPublikasi:16,totalPenelitian:7,totalPengabdian:6,status:`Aktif`,avatar:null,username:`winarsih`,password:`dosen123`},{id:`DSN039`,nip:`199003152017041001`,nidn:`0715039001`,nama:`Bayu Tri Widodo, S.E., M.Ak.`,email:`bayu.tw@stiabayuangga.ac.id`,telepon:`081234500039`,jabatanFungsional:`Dosen`,golongan:`III/b`,pendidikan:`S2 Akuntansi — Universitas Brawijaya`,bidangKeahlian:[`Akuntansi Manajemen`,`Perpajakan`,`Keuangan Daerah`],mataKuliah:[`Akuntansi Manajemen`,`Perpajakan`],totalMK:2,totalMahasiswaBimbingan:4,totalPublikasi:7,totalPenelitian:2,totalPengabdian:2,status:`Aktif`,avatar:null,username:`bayu.tw`,password:`dosen123`},{id:`DSN040`,nip:`196601201991031001`,nidn:`0720016601`,nama:`Prof. Dr. H. Suharto, M.AP.`,email:`suharto@stiabayuangga.ac.id`,telepon:`081234500040`,jabatanFungsional:`Dosen`,golongan:`IV/d`,pendidikan:`S3 Administrasi Publik — Universitas Indonesia`,bidangKeahlian:[`Kebijakan Fiskal`,`Ekonomi Publik`,`Desentralisasi Fiskal`],mataKuliah:[`Ekonomi Sektor Publik`],totalMK:1,totalMahasiswaBimbingan:3,totalPublikasi:45,totalPenelitian:16,totalPengabdian:12,status:`Aktif`,avatar:null,username:`suharto`,password:`dosen123`},{id:`DSN041`,nip:`198710152014042001`,nidn:`0715108701`,nama:`Ika Wahyuningtyas, S.AP., M.AP.`,email:`ika.w@stiabayuangga.ac.id`,telepon:`081234500041`,jabatanFungsional:`Dosen`,golongan:`III/c`,pendidikan:`S2 Administrasi Publik — Universitas Jember`,bidangKeahlian:[`Tata Usaha`,`Kearsipan`,`Administrasi Modern`],mataKuliah:[`Tata Usaha`,`Manajemen Kearsipan`],totalMK:2,totalMahasiswaBimbingan:5,totalPublikasi:6,totalPenelitian:2,totalPengabdian:3,status:`Aktif`,avatar:null,username:`ika.w`,password:`dosen123`},{id:`DSN042`,nip:`198203102008011001`,nidn:`0710038201`,nama:`Dr. Teguh Prasetya, S.IP., M.Si.`,email:`teguh.p@stiabayuangga.ac.id`,telepon:`081234500042`,jabatanFungsional:`Dosen`,golongan:`III/d`,pendidikan:`S3 Ilmu Politik — Universitas Gadjah Mada`,bidangKeahlian:[`Hubungan Internasional`,`Diplomasi`,`Geopolitik`],mataKuliah:[`Hubungan Internasional`,`Geopolitik`],totalMK:2,totalMahasiswaBimbingan:4,totalPublikasi:12,totalPenelitian:5,totalPengabdian:3,status:`Aktif`,avatar:null,username:`teguh.p`,password:`dosen123`},{id:`DSN043`,nip:`199602202022042001`,nidn:`0720029601`,nama:`Putri Amelia, S.E., M.M.`,email:`putri.a@stiabayuangga.ac.id`,telepon:`081234500043`,jabatanFungsional:`Dosen`,golongan:`III/a`,pendidikan:`S2 Manajemen — Universitas Airlangga`,bidangKeahlian:[`Manajemen SDM`,`Psikologi Organisasi`,`HRD`],mataKuliah:[`Manajemen SDM`,`Psikologi Industri`],totalMK:2,totalMahasiswaBimbingan:2,totalPublikasi:2,totalPenelitian:1,totalPengabdian:1,status:`Aktif`,avatar:null,username:`putri.a`,password:`dosen123`},{id:`DSN044`,nip:`197505101999031001`,nidn:`0710057501`,nama:`Dr. Anton Wibowo, S.Sos., M.AP.`,email:`anton.w@stiabayuangga.ac.id`,telepon:`081234500044`,jabatanFungsional:`Dosen`,golongan:`IV/a`,pendidikan:`S3 Administrasi Publik — Universitas Brawijaya`,bidangKeahlian:[`Manajemen Perkotaan`,`Tata Ruang`,`Lingkungan`],mataKuliah:[`Manajemen Perkotaan`,`Tata Ruang dan Lingkungan`],totalMK:2,totalMahasiswaBimbingan:6,totalPublikasi:14,totalPenelitian:6,totalPengabdian:5,status:`Aktif`,avatar:null,username:`anton.w`,password:`dosen123`},{id:`DSN045`,nip:`198902052016042001`,nidn:`0705028901`,nama:`Arini Dwi Lestari, S.Pd., M.Pd.`,email:`arini.dl@stiabayuangga.ac.id`,telepon:`081234500045`,jabatanFungsional:`Dosen`,golongan:`III/b`,pendidikan:`S2 Pendidikan — Universitas Negeri Surabaya`,bidangKeahlian:[`Pendidikan Agama`,`Etika dan Moral`,`Karakter Bangsa`],mataKuliah:[`Pendidikan Agama`,`Etika Profesi`],totalMK:2,totalMahasiswaBimbingan:3,totalPublikasi:5,totalPenelitian:2,totalPengabdian:4,status:`Aktif`,avatar:null,username:`arini.dl`,password:`dosen123`},{id:`DSN046`,nip:`198106102006041001`,nidn:`0710068101`,nama:`Dr. Arief Rahman, S.E., M.Si.`,email:`arief.r@stiabayuangga.ac.id`,telepon:`081234500046`,jabatanFungsional:`Dosen`,golongan:`III/d`,pendidikan:`S3 Ekonomi — Universitas Brawijaya`,bidangKeahlian:[`Ekonometrika`,`Statistik`,`Matematika Ekonomi`],mataKuliah:[`Matematika Ekonomi`,`Statistik Ekonomi`],totalMK:2,totalMahasiswaBimbingan:5,totalPublikasi:10,totalPenelitian:4,totalPengabdian:2,status:`Aktif`,avatar:null,username:`arief.r`,password:`dosen123`},{id:`DSN047`,nip:`199307152021042001`,nidn:`0715079301`,nama:`Lisa Permata Sari, S.Sos., M.AP.`,email:`lisa.ps@stiabayuangga.ac.id`,telepon:`081234500047`,jabatanFungsional:`Dosen`,golongan:`III/a`,pendidikan:`S2 Administrasi Publik — Universitas Muhammadiyah Malang`,bidangKeahlian:[`Governance`,`Transparansi`,`Anti Korupsi`],mataKuliah:[`Good Governance`,`Anti Korupsi`],totalMK:2,totalMahasiswaBimbingan:2,totalPublikasi:3,totalPenelitian:1,totalPengabdian:1,status:`Aktif`,avatar:null,username:`lisa.ps`,password:`dosen123`},{id:`DSN048`,nip:`197609201999031001`,nidn:`0720097601`,nama:`Dr. H. Sunaryo, S.H., M.Hum.`,email:`sunaryo@stiabayuangga.ac.id`,telepon:`081234500048`,jabatanFungsional:`Dosen`,golongan:`IV/a`,pendidikan:`S3 Ilmu Hukum — Universitas Padjadjaran`,bidangKeahlian:[`Hukum Administrasi`,`Hukum Ketenagakerjaan`,`HAM`],mataKuliah:[`Hukum Ketenagakerjaan`,`Hak Asasi Manusia`],totalMK:2,totalMahasiswaBimbingan:5,totalPublikasi:16,totalPenelitian:7,totalPengabdian:6,status:`Aktif`,avatar:null,username:`sunaryo`,password:`dosen123`},{id:`DSN049`,nip:`199109242006016001`,nidn:`072408301`,nama:`Moh. Khoirul Anam, M.Pd.`,email:`khoirul.anam@stiabayuangga.ac.id`,telepon:`081234500049`,jabatanFungsional:`Dosen`,golongan:`III/c`,pendidikan:`S2 Pendidikan — Universitas Negeri Surabaya`,bidangKeahlian:[`Pendidikan`,`Bahasa`,`Komunikasi`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:5,totalPublikasi:9,totalPenelitian:6,totalPengabdian:5,status:`Aktif`,avatar:null,username:`khoirul.anam`,password:`dosen123`},{id:`DSN050`,nip:`199101182003014002`,nidn:`072209301`,nama:`Farasandya Amalia Hapsari, S.Kom., M.AP.`,email:`farasandya@stiabayuangga.ac.id`,telepon:`081234500050`,jabatanFungsional:`Dosen`,golongan:`III/c`,pendidikan:`S2 Administrasi Publik — Universitas Brawijaya`,bidangKeahlian:[`Sistem Informasi`,`E-Government`,`Administrasi Publik`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:10,totalPublikasi:10,totalPenelitian:6,totalPengabdian:3,status:`Aktif`,avatar:null,username:`farasandya`,password:`dosen123`},{id:`DSN051`,nip:`198907142004014003`,nidn:`072808201`,nama:`Ely Retnowulan, M.Pd.`,email:`ely.retnowulan@stiabayuangga.ac.id`,telepon:`081234500051`,jabatanFungsional:`Dosen`,golongan:`III/c`,pendidikan:`S2 Pendidikan — Universitas Negeri Malang`,bidangKeahlian:[`Pendidikan`,`Bahasa Inggris`,`Linguistik`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:8,totalPublikasi:17,totalPenelitian:2,totalPengabdian:2,status:`Aktif`,avatar:null,username:`ely.retnowulan`,password:`dosen123`},{id:`DSN052`,nip:`198712092001019004`,nidn:`071608901`,nama:`Dr. Novi Sri Sandyawati, S.Sos., M.Si.`,email:`novi.sandyawati@stiabayuangga.ac.id`,telepon:`081234500052`,jabatanFungsional:`Dosen`,golongan:`III/d`,pendidikan:`S3 Ilmu Sosial — Universitas Airlangga`,bidangKeahlian:[`Sosiologi`,`Kebijakan Sosial`,`Pemberdayaan Masyarakat`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:3,totalPublikasi:10,totalPenelitian:6,totalPengabdian:2,status:`Aktif`,avatar:null,username:`novi.sandyawati`,password:`dosen123`},{id:`DSN053`,nip:`199209272008013005`,nidn:`071608001`,nama:`Dr. Moch. Anton Maulana, S.E., M.M.`,email:`anton.maulana@stiabayuangga.ac.id`,telepon:`081234500053`,jabatanFungsional:`Dosen`,golongan:`III/d`,pendidikan:`S3 Manajemen — Universitas Brawijaya`,bidangKeahlian:[`Manajemen Strategis`,`Ekonomi`,`Bisnis`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:7,totalPublikasi:19,totalPenelitian:5,totalPengabdian:2,status:`Aktif`,avatar:null,username:`anton.maulana`,password:`dosen123`},{id:`DSN054`,nip:`198804072001016006`,nidn:`072008301`,nama:`Pungky Praja Jatmika, S.IP., M.Si.`,email:`pungky.jatmika@stiabayuangga.ac.id`,telepon:`081234500054`,jabatanFungsional:`Dosen`,golongan:`III/c`,pendidikan:`S2 Ilmu Politik — Universitas Airlangga`,bidangKeahlian:[`Ilmu Politik`,`Hubungan Internasional`,`Kebijakan Publik`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:10,totalPublikasi:8,totalPenelitian:6,totalPengabdian:3,status:`Aktif`,avatar:null,username:`pungky.jatmika`,password:`dosen123`},{id:`DSN055`,nip:`199011132002016007`,nidn:`071909101`,nama:`Sandy Irawan, S.Kom., M.Kom.`,email:`sandy.irawan@stiabayuangga.ac.id`,telepon:`081234500055`,jabatanFungsional:`Dosen`,golongan:`III/c`,pendidikan:`S2 Ilmu Komputer — Institut Teknologi Sepuluh Nopember`,bidangKeahlian:[`Sistem Informasi`,`Pemrograman`,`Teknologi Informasi`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:8,totalPublikasi:13,totalPenelitian:4,totalPengabdian:1,status:`Aktif`,avatar:null,username:`sandy.irawan`,password:`dosen123`},{id:`DSN056`,nip:`198901092006017008`,nidn:`072908901`,nama:`Marsinem, S.Sos., M.Si.`,email:`marsinem@stiabayuangga.ac.id`,telepon:`081234500056`,jabatanFungsional:`Dosen`,golongan:`III/c`,pendidikan:`S2 Ilmu Sosial — Universitas Jember`,bidangKeahlian:[`Sosiologi`,`Administrasi Publik`,`Pelayanan Publik`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:9,totalPublikasi:17,totalPenelitian:3,totalPengabdian:4,status:`Aktif`,avatar:null,username:`marsinem`,password:`dosen123`},{id:`DSN057`,nip:`199203162009015009`,nidn:`072708001`,nama:`Imam Suliyono, S.Sos., M.M.`,email:`imam.suliyono@stiabayuangga.ac.id`,telepon:`081234500057`,jabatanFungsional:`Dosen`,golongan:`III/d`,pendidikan:`S2 Manajemen — Universitas Brawijaya`,bidangKeahlian:[`Manajemen SDM`,`Organisasi`,`Kepemimpinan`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:6,totalPublikasi:17,totalPenelitian:6,totalPengabdian:2,status:`Aktif`,avatar:null,username:`imam.suliyono`,password:`dosen123`},{id:`DSN058`,nip:`1983122820020190010`,nidn:`071108201`,nama:`Bambang Lasmono, S.E., M.M.`,email:`bambang.lasmono@stiabayuangga.ac.id`,telepon:`081234500058`,jabatanFungsional:`Dosen`,golongan:`III/c`,pendidikan:`S2 Manajemen — Universitas Airlangga`,bidangKeahlian:[`Manajemen Keuangan`,`Ekonomi`,`Akuntansi`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:4,totalPublikasi:13,totalPenelitian:5,totalPengabdian:1,status:`Aktif`,avatar:null,username:`bambang.lasmono`,password:`dosen123`},{id:`DSN059`,nip:`1991011520030160011`,nidn:`072308101`,nama:`Noor Farid, S.Sos., M.Si.`,email:`noor.farid@stiabayuangga.ac.id`,telepon:`081234500059`,jabatanFungsional:`Dosen`,golongan:`III/c`,pendidikan:`S2 Ilmu Sosial — Universitas Brawijaya`,bidangKeahlian:[`Ilmu Sosial`,`Administrasi`,`Komunikasi`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:7,totalPublikasi:16,totalPenelitian:5,totalPengabdian:5,status:`Aktif`,avatar:null,username:`noor.farid`,password:`dosen123`},{id:`DSN060`,nip:`1983082620030170012`,nidn:`071108801`,nama:`Nur Aini, S.E., M.M.`,email:`nur.aini@stiabayuangga.ac.id`,telepon:`081234500060`,jabatanFungsional:`Dosen`,golongan:`III/c`,pendidikan:`S2 Manajemen — Universitas Negeri Surabaya`,bidangKeahlian:[`Ekonomi`,`Manajemen Pemasaran`,`Kewirausahaan`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:8,totalPublikasi:16,totalPenelitian:3,totalPengabdian:5,status:`Aktif`,avatar:null,username:`nur.aini`,password:`dosen123`},{id:`DSN061`,nip:`1983061820020170013`,nidn:`072109401`,nama:`Eko Wicaksono, S.E., M.Si.`,email:`eko.wicaksono@stiabayuangga.ac.id`,telepon:`081234500061`,jabatanFungsional:`Dosen`,golongan:`III/c`,pendidikan:`S2 Ilmu Ekonomi — Universitas Airlangga`,bidangKeahlian:[`Ekonomi Publik`,`Statistik`,`Keuangan Daerah`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:5,totalPublikasi:17,totalPenelitian:7,totalPengabdian:3,status:`Aktif`,avatar:null,username:`eko.wicaksono`,password:`dosen123`},{id:`DSN062`,nip:`1992012820040130014`,nidn:`071808901`,nama:`Dr. Edy Susanto, S.E., M.M.`,email:`edy.susanto@stiabayuangga.ac.id`,telepon:`081234500062`,jabatanFungsional:`Dosen`,golongan:`III/d`,pendidikan:`S3 Manajemen — Universitas Brawijaya`,bidangKeahlian:[`Manajemen`,`Ekonomi Pembangunan`,`Bisnis`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:7,totalPublikasi:9,totalPenelitian:2,totalPengabdian:2,status:`Aktif`,avatar:null,username:`edy.susanto`,password:`dosen123`},{id:`DSN063`,nip:`1989071920040150015`,nidn:`071108501`,nama:`Dr. Agung Subagyo, S.STP., M.Si.`,email:`agung.subagyo@stiabayuangga.ac.id`,telepon:`081234500063`,jabatanFungsional:`Dosen`,golongan:`IV/a`,pendidikan:`S3 Ilmu Administrasi — Universitas Indonesia`,bidangKeahlian:[`Administrasi Publik`,`Pemerintahan`,`Otonomi Daerah`],mataKuliah:[],totalMK:2,totalMahasiswaBimbingan:3,totalPublikasi:7,totalPenelitian:6,totalPengabdian:3,status:`Aktif`,avatar:null,username:`agung.subagyo`,password:`dosen123`}],u=[{id:1,title:`STIA Bayuangga Raih Akreditasi B dari BAN-PT`,excerpt:`Pencapaian ini menunjukkan komitmen STIA Bayuangga dalam menjaga mutu pendidikan tinggi...`,date:`20 Mar 2026`,category:`Akademik`,featured:!0},{id:2,title:`Seminar Nasional: Inovasi Pelayanan Publik di Era Digital`,excerpt:`STIA Bayuangga menggelar seminar nasional dengan pembicara dari berbagai universitas...`,date:`18 Mar 2026`,category:`Event`},{id:3,title:`Pendaftaran Mahasiswa Baru TA 2026/2027 Dibuka`,excerpt:`Daftar sekarang dan dapatkan beasiswa prestasi hingga 50%...`,date:`15 Mar 2026`,category:`PMB`},{id:4,title:`Kerjasama Magang dengan Pemerintah Kota Probolinggo`,excerpt:`Mahasiswa STIA Bayuangga mendapat kesempatan magang di instansi pemerintah...`,date:`12 Mar 2026`,category:`Kerjasama`},{id:5,title:`Workshop Penulisan Jurnal Ilmiah untuk Dosen`,excerpt:`Meningkatkan kualitas penelitian dan publikasi ilmiah dosen STIA Bayuangga...`,date:`10 Mar 2026`,category:`Workshop`}],d={mahasiswa:{id:`M2024001`,nim:`2024101001`,nama:`Ahmad Rizky Pratama`,email:`ahmad.rizky@student.stiabayuangga.ac.id`,prodi:`Administrasi Negara`,semester:4,ipk:3.65,totalSks:65,maxSks:146,avatar:null,role:`mahasiswa`,nik:`3574011205040001`,nisn:`0012345678`,telepon_1:`081234567890`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2004-05-12`,gender:`Laki-laki`,agama:`Islam`,kip:``,kks:``,alamat:`Jl. Mawar No. 15, RT 03/RW 05`,provinsi:`Jawa Timur`,kota:`Probolinggo`,kecamatan:`Mayangan`,kelurahan:`Sukabumi`,kode_pos:`67211`,anak_ke:2,dari_jumlah:3,no_kk:`3574011234560001`,nama_ayah:`Ir. Bambang Pratama`,pekerjaan_ayah:`PNS`,nik_ayah:`3574011012700001`,nama_ibu:`Siti Aminah, S.Pd.`,pekerjaan_ibu:`Guru`,nik_ibu:`3574014506750002`,asal_sekolah:`SMAN 1 Probolinggo`},dosen:{id:`D001`,nip:`198501012010011001`,nama:`Dr. Ir. Bambang Sudarsono, M.Si.`,email:`bambang@stiabayuangga.ac.id`,prodi:`Administrasi Negara`,jabatan:`Lektor Kepala`,totalMK:4,totalMahasiswa:180,avatar:null,role:`dosen`},kaprodi:{id:`K001`,nip:`197809152005011001`,nama:`Prof. Dr. Sri Wahyuni, M.AP.`,email:`sri.wahyuni@stiabayuangga.ac.id`,prodi:`Administrasi Negara`,jabatan:`Ketua Program Studi`,totalMahasiswa:420,totalDosen:15,avatar:null,role:`kaprodi`},bap:{id:`B001`,nip:`198203202008012001`,nama:`Hj. Dwi Rahmawati, S.AP., M.AP.`,email:`dwi.rahmawati@stiabayuangga.ac.id`,jabatan:`Kepala BAP`,avatar:null,role:`bap`}},f=[{hari:`Senin`,jam:`07:30-09:10`,mk:`Geopolitik`,kelas:`B`,ruang:`RA-201`,dosen:`Pungky P.J.`},{hari:`Senin`,jam:`09:20-11:00`,mk:`Teori Adm Negara`,kelas:`B`,ruang:`RA-202`,dosen:`Dr. Anton M.`},{hari:`Selasa`,jam:`07:30-09:10`,mk:`Perilaku Organisasi`,kelas:`B`,ruang:`RA-203`,dosen:`Noor Farid`},{hari:`Selasa`,jam:`13:00-14:40`,mk:`Adm Pembangunan`,kelas:`B`,ruang:`RA-204`,dosen:`Pungky P.J.`},{hari:`Rabu`,jam:`07:30-09:10`,mk:`Kepemimpinan`,kelas:`B`,ruang:`RA-201`,dosen:`Nur Aini`},{hari:`Kamis`,jam:`09:20-11:00`,mk:`Sosiologi Masyarakat Kota dan Desa`,kelas:`B`,ruang:`RA-205`,dosen:`Marsinem`},{hari:`Jumat`,jam:`07:30-09:10`,mk:`Teori Komunikasi`,kelas:`B`,ruang:`RA-202`,dosen:`Bambang L.`}],p=[{kode:`MDU 101`,nama:`Agama`,sks:2,nilai:`A`,bobot:4,semester:1},{kode:`MDU 107`,nama:`Bahasa Inggris I`,sks:2,nilai:`B+`,bobot:3.5,semester:1},{kode:`MDU 202`,nama:`Pendidikan Pancasila`,sks:3,nilai:`A`,bobot:4,semester:1},{kode:`MDK 111`,nama:`Matematika`,sks:2,nilai:`B+`,bobot:3.5,semester:1},{kode:`MDK 112`,nama:`Sistem Hukum Indonesia`,sks:3,nilai:`A-`,bobot:3.7,semester:1},{kode:`MDK 114`,nama:`Pengantar Sosiologi`,sks:3,nilai:`A-`,bobot:3.7,semester:1},{kode:`ANI 134`,nama:`Pengantar Ilmu Adm`,sks:3,nilai:`A`,bobot:4,semester:1},{kode:`MDK 137`,nama:`Pengantar Ilmu Politik`,sks:3,nilai:`A`,bobot:4,semester:1},{kode:`MDU 105`,nama:`Ilmu Alamiah Dasar`,sks:2,nilai:`B+`,bobot:3.5,semester:2},{kode:`MDU 207`,nama:`Bahasa Inggris 2`,sks:2,nilai:`A`,bobot:4,semester:2},{kode:`MDK 130`,nama:`Bahasa Indonesia`,sks:3,nilai:`B+`,bobot:3.5,semester:2},{kode:`MDK 116`,nama:`Statistik`,sks:3,nilai:`B`,bobot:3,semester:2},{kode:`MDK 122`,nama:`Demografi`,sks:2,nilai:`A-`,bobot:3.7,semester:2},{kode:`MDK 115`,nama:`Asas-Asas Manajemen`,sks:3,nilai:`A`,bobot:4,semester:2},{kode:`MDK 119`,nama:`Sistem Sosial Budaya Indonesia`,sks:3,nilai:`A-`,bobot:3.7,semester:2},{kode:`MDK 200`,nama:`Dasar-Dasar Logika`,sks:3,nilai:`B+`,bobot:3.5,semester:2},{kode:`MDK 117`,nama:`Organisasi dan Manajemen`,sks:3,nilai:`A-`,bobot:3.7,semester:3},{kode:`MDK 128`,nama:`Hubungan Masyarakat`,sks:3,nilai:`B+`,bobot:3.5,semester:3},{kode:`MDK 217`,nama:`Pengantar Antropologi`,sks:3,nilai:`A`,bobot:4,semester:3},{kode:`MDK 123`,nama:`Adm Perpajakan`,sks:3,nilai:`B+`,bobot:3.5,semester:3},{kode:`MDK 113`,nama:`Sistem Ekonomi Indonesia`,sks:3,nilai:`A`,bobot:4,semester:3},{kode:`ANA 140`,nama:`Sistem Politik Indonesia`,sks:3,nilai:`A-`,bobot:3.7,semester:3},{kode:`MDK 136`,nama:`Hukum Adm Negara`,sks:2,nilai:`A`,bobot:4,semester:3},{kode:`MDK 220`,nama:`Pengantar Sistem Informasi Manajemen`,sks:3,nilai:`B+`,bobot:3.5,semester:3}],m=new Date(2026,1,24),h={Senin:1,Selasa:2,Rabu:3,Kamis:4,Jumat:5,Sabtu:6},g=[`Jan`,`Feb`,`Mar`,`Apr`,`Mei`,`Jun`,`Jul`,`Agt`,`Sep`,`Okt`,`Nov`,`Des`];function _(e,t=14){let n=h[e]||1,r=new Date(m);for(;r.getDay()!==n;)r.setDate(r.getDate()+1);let i=[];for(let e=0;e<t;e++){let t=new Date(r);t.setDate(t.getDate()+e*7),i.push(t)}return i}function v(e){return e.getDate()+` `+g[e.getMonth()]}function y(e){return[`Minggu`,`Senin`,`Selasa`,`Rabu`,`Kamis`,`Jumat`,`Sabtu`][e.getDay()]+`, `+e.getDate()+` `+g[e.getMonth()]+` `+e.getFullYear()}var b=[{id:1,nama:`Geopolitik`,kode:`ANA 146`,dosen:`Pungky Praja Jatmika, S.IP., M.Si.`,semester:`Genap 2025/2026`,progress:65,totalMateri:14,materiSelesai:9,mahasiswa:42,jadwal:`Senin, 07:30-09:10`,sks:3},{id:2,nama:`Teori Adm Negara`,kode:`ANA 131`,dosen:`Dr. Moch. Anton Maulana, S.E., M.M.`,semester:`Genap 2025/2026`,progress:50,totalMateri:14,materiSelesai:7,mahasiswa:40,jadwal:`Senin, 09:20-11:00`,sks:3},{id:3,nama:`Perilaku Organisasi`,kode:`MDK 120`,dosen:`Noor Farid, S.Sos., M.Si.`,semester:`Genap 2025/2026`,progress:72,totalMateri:14,materiSelesai:10,mahasiswa:45,jadwal:`Selasa, 07:30-09:10`,sks:3},{id:4,nama:`Adm Pembangunan`,kode:`ANA 158`,dosen:`Pungky Praja Jatmika, S.IP., M.Si.`,semester:`Genap 2025/2026`,progress:43,totalMateri:14,materiSelesai:6,mahasiswa:38,jadwal:`Selasa, 13:00-14:40`,sks:3},{id:5,nama:`Kepemimpinan`,kode:`MDK 126`,dosen:`Nur Aini, S.E., M.M.`,semester:`Genap 2025/2026`,progress:57,totalMateri:14,materiSelesai:8,mahasiswa:40,jadwal:`Rabu, 07:30-09:10`,sks:3},{id:6,nama:`Sosiologi Masyarakat Kota dan Desa`,kode:`ANA 151`,dosen:`Marsinem, S.Sos., M.Si.`,semester:`Genap 2025/2026`,progress:60,totalMateri:14,materiSelesai:8,mahasiswa:38,jadwal:`Kamis, 09:20-11:00`,sks:3},{id:7,nama:`Teori Komunikasi`,kode:`ANA 142`,dosen:`Bambang Lasmono, S.E., M.M.`,semester:`Genap 2025/2026`,progress:48,totalMateri:14,materiSelesai:7,mahasiswa:42,jadwal:`Jumat, 07:30-09:10`,sks:3}],x=[{id:1,judul:`Analisis Kebijakan Publik Daerah`,kelas:`Kebijakan Publik`,deadline:`2026-03-28 23:59`,status:`Belum`,desc:`Buatlah analisis kebijakan publik yang diterapkan di daerah Anda...`,type:`Tugas Individu`},{id:2,judul:`Laporan Statistik Penduduk`,kelas:`Statistik Sosial`,deadline:`2026-03-25 23:59`,status:`Sudah`,nilaiRaw:85,desc:`Kumpulkan dan analisis data statistik penduduk menggunakan SPSS...`,type:`Tugas Individu`},{id:3,judul:`Makalah Teori Birokrasi Weber`,kelas:`Teori Administrasi`,deadline:`2026-04-01 23:59`,status:`Belum`,desc:`Analisis teori birokrasi Max Weber dan relevansinya saat ini...`,type:`Tugas Kelompok`},{id:4,judul:`Quiz UTS Hukum Administrasi`,kelas:`Hukum Administrasi`,deadline:`2026-03-30 10:00`,status:`Belum`,desc:`Quiz online pilihan ganda, 30 soal, waktu 60 menit`,type:`Quiz`}];function S(e){return e.split(` `).map(e=>e[0]).join(``).substring(0,2).toUpperCase()}function C(e){let t=new Date(e)-new Date,n=Math.floor(t/(1e3*60*60*24));return t<0?{text:`Terlambat`,class:`danger`}:n===0?{text:`Hari ini`,class:`danger`}:n<=3?{text:`${n} hari lagi`,class:`warning`}:{text:`${n} hari lagi`,class:`info`}}var w={niaga:{nama:`Administrasi Niaga`,totalSKS:145,semester:[{no:1,sks:21,mk:[{kode:`MDU 101`,nama:`Agama`,dosen:`Moh. Khoirul Anam, M.Pd.`,sks:2},{kode:`MDU 107`,nama:`Bahasa Inggris I`,dosen:`Farasandya Amalia Hapsari, S.Kom., M.AP./Ely Retnowulan, M.Pd.`,sks:2},{kode:`MDU 103`,nama:`Pendidikan Pancasila`,dosen:`Farasandya Amalia Hapsari, S.Kom., M.AP./Ely Retnowulan, M.Pd.`,sks:3},{kode:`MDK 111`,nama:`Matematika`,dosen:`Moh. Khoirul Anam, M.Pd.`,sks:2},{kode:`MDK 112`,nama:`Sistem Hukum Indonesia`,dosen:`Dr. Novi Sri Sandyawati, S.Sos., M.Si.`,sks:3},{kode:`MDK 114`,nama:`Pengantar Sosiologi`,dosen:`Farasandya Amalia Hapsari, S.Kom., M.AP./Moh. Khoirul Anam, M.Pd.`,sks:3},{kode:`ANI 134`,nama:`Pengantar Ilmu Adm`,dosen:`Dr. Moch. Anton Maulana, S.E., M.M.`,sks:3},{kode:`MDK 137`,nama:`Pengantar Ilmu Politik`,dosen:`Pungky Praja Jatmika, S.IP., M.Si.`,sks:3}]},{no:2,sks:20,mk:[{kode:`MDU 105`,nama:`Ilmu Alamiah Dasar`,dosen:`Dr. Novi Sri Sandyawati, S.Sos., M.Si.`,sks:2},{kode:`MDU 207`,nama:`Bahasa Inggris 2`,dosen:`Farasandya Amalia Hapsari, S.Kom., M.AP.`,sks:2},{kode:`MDK 130`,nama:`Bahasa Indonesia`,dosen:`Ely Retnowulan, M.Pd.`,sks:3},{kode:`MDK 216`,nama:`Statistik`,dosen:`Moh. Khoirul Anam, M.Pd.`,sks:3},{kode:`MDK 122`,nama:`Demografi`,dosen:`Farasandya Amalia Hapsari, S.Kom., M.AP.`,sks:2},{kode:`MDK 115`,nama:`Asas-Asas Manajemen`,dosen:`Sandy Irawan, S.Kom., M.Kom.`,sks:3},{kode:`MDK 119`,nama:`Sistem Sosial Budaya Indonesia`,dosen:`Marsinem, S.Sos., M.Si.`,sks:2},{kode:`MDK 200`,nama:`Dasar-Dasar Logika`,dosen:`Moh. Khoirul Anam, M.Pd.`,sks:3}]},{no:3,sks:23,mk:[{kode:`MDK 117`,nama:`Organisasi dan Manajemen`,dosen:`Imam Suliyono, S.Sos., M.M.`,sks:3},{kode:`MDK 128`,nama:`Hubungan Masyarakat`,dosen:`Marsinem, S.Sos., M.Si.`,sks:3},{kode:`MDK 217`,nama:`Pengantar Antropologi`,dosen:`Bambang Lasmono, S.E., M.M.`,sks:3},{kode:`MDK 123`,nama:`Adm Perpajakan`,dosen:`Noor Farid, S.Sos., M.Si.`,sks:3},{kode:`MDK 113`,nama:`Sistem Ekonomi Indonesia`,dosen:`Bambang Lasmono, S.E., M.M.`,sks:3},{kode:`ANA 140`,nama:`Sistem Politik Indonesia`,dosen:`Pungky Praja Jatmika, S.IP., M.Si.`,sks:3},{kode:`ANI 131`,nama:`Akuntansi I`,dosen:`Nur Aini, S.E., M.M.`,sks:2},{kode:`MDK 220`,nama:`Pengantar Sistem Informasi Manajemen`,dosen:`Eko Wicaksono, S.E., M.Si./Sandy Irawan, S.Kom., M.Kom.`,sks:3}]},{no:4,sks:21,mk:[{kode:`ANI 132`,nama:`Akuntansi II`,dosen:`Eko Wicaksono, S.E., M.Si.`,sks:3},{kode:`ANI 165`,nama:`Manajemen Pembelian dan Pemasaran`,dosen:`Nur Aini, S.E., M.M.`,sks:3},{kode:`MDK 120`,nama:`Perilaku Organisasi`,dosen:`Noor Farid, S.Sos., M.Si.`,sks:3},{kode:`MDK 126`,nama:`Kepemimpinan`,dosen:`Nur Aini, S.E., M.M.`,sks:3},{kode:`ANI 145`,nama:`Perdagangan Internasional`,dosen:`Bambang Lasmono, S.E., M.M.`,sks:3},{kode:`ANI 169`,nama:`Manajemen Industrial`,dosen:`Dr. Moch. Anton Maulana, S.E., M.M.`,sks:3},{kode:`ANI 174`,nama:`Perkoperasian`,dosen:`Eko Wicaksono, S.E., M.Si.`,sks:3}]},{no:5,sks:18,mk:[{kode:`ANI 148`,nama:`Kebijakan dan Strategi Pemasaran`,dosen:`Imam Suliyono, S.Sos., M.M.`,sks:3},{kode:`MDK 124`,nama:`Metode Penelitian Adm`,dosen:`Dr. Moch. Anton Maulana, S.E., M.M./Eko Wicaksono, S.E., M.Si.`,sks:3},{kode:`MDK 125`,nama:`Manajemen Sumber Daya Manusia`,dosen:`Marsinem, S.Sos., M.Si.`,sks:3},{kode:`MDK 121`,nama:`Sistem Informasi Manajemen`,dosen:`Eko Wicaksono, S.E., M.Si./Sandy Irawan, S.Kom., M.Kom.`,sks:3},{kode:`ANI 149`,nama:`Akuntansi Biaya 1`,dosen:`Nur Aini, S.E., M.M.`,sks:3},{kode:`ANI 170`,nama:`Evaluasi Proyek`,dosen:`Dr. Moch. Anton Maulana, S.E., M.M.`,sks:3}]},{no:6,sks:21,mk:[{kode:`MDK 129`,nama:`Kuliah Kerja Nyata`,dosen:`-`,sks:3},{kode:`MDK 127`,nama:`Organisasi dan Metode`,dosen:`Imam Suliyono, S.Sos., M.M.`,sks:3},{kode:`ANI 249`,nama:`Akuntansi Biaya 2`,dosen:`Dr. Edy Susanto, S.E., M.M.`,sks:3},{kode:`ANI 173`,nama:`Manajemen Resiko`,dosen:`Imam Suliyono, S.Sos., M.Si.`,sks:3},{kode:`MDK 213`,nama:`Hukum Perdata Dagang`,dosen:`Bambang Lasmono, S.E., M.M.`,sks:3},{kode:`ANI 171`,nama:`Akuntansi Manajerial`,dosen:`Pungky Praja Jatmika, S.IP., M.Si.`,sks:3},{kode:`MDK 135`,nama:`Kewirausahaan`,dosen:`Dr. Novi Sri Sandyawati, S.Sos., M.Si./Dr. Agung Subagyo, S.STP., M.Si.`,sks:3}]},{no:7,sks:15,mk:[{kode:`ANI 153`,nama:`Kebijakan dan Strategi Produksi`,dosen:`Dr. Edy Susanto, S.E., M.M.`,sks:3},{kode:`ANI 144`,nama:`Perbankan`,dosen:`Nur Aini, S.E., M.M.`,sks:3},{kode:`ANI 267`,nama:`Manajemen Keuangan`,dosen:`Dr. Edy Susanto, S.E., M.M.`,sks:3},{kode:`ANI 141`,nama:`Etika Profesi`,dosen:`Noor Farid, S.Sos., M.Si./Eko Wicaksono, S.E., M.Si.`,sks:3},{kode:`ANI 172`,nama:`Seminar Skripsi`,dosen:`Noor Farid, S.Sos., M.Si.`,sks:3}]},{no:8,sks:6,mk:[{kode:`ANI 180`,nama:`Skripsi`,dosen:`-`,sks:6}]}]},negara:{nama:`Administrasi Negara`,totalSKS:146,semester:[{no:1,sks:21,mk:[{kode:`MDU 101`,nama:`Agama`,dosen:`Moh. Khoirul Anam, M.Pd.`,sks:2},{kode:`MDU 107`,nama:`Bahasa Inggris I`,dosen:`Farasandya Amalia Hapsari, S.Kom., M.AP./Ely Retnowulan, M.Pd.`,sks:2},{kode:`MDU 202`,nama:`Pendidikan Pancasila`,dosen:`Farasandya Amalia Hapsari, S.Kom., M.AP./Ely Retnowulan, M.Pd.`,sks:3},{kode:`MDK 111`,nama:`Matematika`,dosen:`Moh. Khoirul Anam, M.Pd.`,sks:2},{kode:`MDK 112`,nama:`Sistem Hukum Indonesia`,dosen:`Dr. Novi Sri Sandyawati, S.Sos., M.Si.`,sks:3},{kode:`MDK 114`,nama:`Pengantar Sosiologi`,dosen:`Farasandya Amalia Hapsari, S.Kom., M.AP./Moh. Khoirul Anam, M.Pd.`,sks:3},{kode:`ANI 134`,nama:`Pengantar Ilmu Adm`,dosen:`Dr. Moch. Anton Maulana, S.E., M.M.`,sks:3},{kode:`MDK 137`,nama:`Pengantar Ilmu Politik`,dosen:`Pungky Praja Jatmika, S.IP., M.Si.`,sks:3}]},{no:2,sks:21,mk:[{kode:`MDU 105`,nama:`Ilmu Alamiah Dasar`,dosen:`Dr. Novi Sri Sandyawati, S.Sos., M.Si.`,sks:2},{kode:`MDU 207`,nama:`Bahasa Inggris 2`,dosen:`Farasandya Amalia Hapsari, S.Kom., M.AP.`,sks:2},{kode:`MDK 130`,nama:`Bahasa Indonesia`,dosen:`Ely Retnowulan, M.Pd.`,sks:3},{kode:`MDK 116`,nama:`Statistik`,dosen:`Moh. Khoirul Anam, M.Pd.`,sks:3},{kode:`MDK 122`,nama:`Demografi`,dosen:`Farasandya Amalia Hapsari, S.Kom., M.AP.`,sks:2},{kode:`MDK 115`,nama:`Asas-Asas Manajemen`,dosen:`Sandy Irawan, S.Kom., M.Kom.`,sks:3},{kode:`MDK 119`,nama:`Sistem Sosial Budaya Indonesia`,dosen:`Marsinem, S.Sos., M.Si.`,sks:3},{kode:`MDK 200`,nama:`Dasar-Dasar Logika`,dosen:`Moh. Khoirul Anam, M.Pd.`,sks:3}]},{no:3,sks:23,mk:[{kode:`MDK 117`,nama:`Organisasi dan Manajemen`,dosen:`Imam Suliyono, S.Sos., M.M.`,sks:3},{kode:`MDK 128`,nama:`Hubungan Masyarakat`,dosen:`Marsinem, S.Sos., M.Si.`,sks:3},{kode:`MDK 217`,nama:`Pengantar Antropologi`,dosen:`Bambang Lasmono, S.E., M.M.`,sks:3},{kode:`MDK 123`,nama:`Adm Perpajakan`,dosen:`Noor Farid, S.Sos., M.Si.`,sks:3},{kode:`MDK 113`,nama:`Sistem Ekonomi Indonesia`,dosen:`Bambang Lasmono, S.E., M.M.`,sks:3},{kode:`ANA 140`,nama:`Sistem Politik Indonesia`,dosen:`Pungky Praja Jatmika, S.IP., M.Si.`,sks:3},{kode:`MDK 136`,nama:`Hukum Adm Negara`,dosen:`Dr. Novi Sri Sandyawati, S.Sos., M.Si.`,sks:2},{kode:`MDK 220`,nama:`Pengantar Sistem Informasi Manajemen`,dosen:`Eko Wicaksono, S.E., M.Si./Sandy Irawan, S.Kom., M.Kom.`,sks:3}]},{no:4,sks:21,mk:[{kode:`ANA 146`,nama:`Geopolitik`,dosen:`Pungky Praja Jatmika, S.IP., M.Si.`,sks:3},{kode:`ANA 131`,nama:`Teori Adm Negara`,dosen:`Dr. Moch. Anton Maulana, S.E., M.M.`,sks:3},{kode:`MDK 120`,nama:`Perilaku Organisasi`,dosen:`Noor Farid, S.Sos., M.Si.`,sks:3},{kode:`MDK 126`,nama:`Kepemimpinan`,dosen:`Nur Aini, S.E., M.M.`,sks:3},{kode:`ANA 158`,nama:`Adm Pembangunan`,dosen:`Pungky Praja Jatmika, S.IP., M.Si.`,sks:3},{kode:`ANA 151`,nama:`Sosiologi Masyarakat Kota dan Desa`,dosen:`Marsinem, S.Sos., M.Si.`,sks:3},{kode:`ANA 142`,nama:`Teori Komunikasi`,dosen:`Bambang Lasmono, S.E., M.M.`,sks:3}]},{no:5,sks:18,mk:[{kode:`ANA 155`,nama:`Adm Perusahaan Negara`,dosen:`Dr. Edy Susanto, S.E., M.M.`,sks:3},{kode:`MDK 124`,nama:`Metode Penelitian Adm`,dosen:`Dr. Moch. Anton Maulana, S.E., M.M./Eko Wicaksono, S.E., M.Si.`,sks:3},{kode:`MDK 125`,nama:`Manajemen Sumber Daya Manusia`,dosen:`Marsinem, S.Sos., M.Si.`,sks:3},{kode:`MDK 121`,nama:`Sistem Informasi Manajemen`,dosen:`Eko Wicaksono, S.E., M.Si./Sandy Irawan, S.Kom., M.Kom.`,sks:3},{kode:`MDK 118`,nama:`Adm Keuangan Negara`,dosen:`Farasandya Amalia Hapsari, S.Kom., M.AP./Eko Wicaksono, S.E., M.Si.`,sks:3},{kode:`ANA 152`,nama:`Pemberdayaan Masyarakat`,dosen:`Dr. Agung Subagyo, S.STP., M.Si.`,sks:3}]},{no:6,sks:21,mk:[{kode:`MDK 129`,nama:`Kuliah Kerja Nyata`,dosen:`-`,sks:3},{kode:`MDK 127`,nama:`Organisasi dan Metode`,dosen:`Imam Suliyono, S.Sos., M.M.`,sks:3},{kode:`ANA 157`,nama:`Organisasi Adm Internasional`,dosen:`Dr. Edy Susanto, S.E., M.M.`,sks:3},{kode:`ANA 147`,nama:`Komunikasi Pembangunan`,dosen:`Dr. Agung Subagyo, S.STP., M.Si.`,sks:3},{kode:`ANA 159`,nama:`Perencanaan Pembangunan`,dosen:`Eko Wicaksono, S.E., M.Si.`,sks:3},{kode:`ANA 160`,nama:`Perbandingan Adm Negara`,dosen:`Dr. Agung Subagyo, S.STP., M.Si.`,sks:3},{kode:`MDK 135`,nama:`Kewirausahaan`,dosen:`Dr. Novi Sri Sandyawati, S.Sos., M.Si./Dr. Agung Subagyo, S.STP., M.Si.`,sks:3}]},{no:7,sks:15,mk:[{kode:`ANA 161`,nama:`Kebijakan Publik`,dosen:`Dr. Novi Sri Sandyawati, S.Sos., M.Si.`,sks:3},{kode:`ANA 156`,nama:`Pengembangan Organisasi`,dosen:`Dr. Agung Subagyo, S.STP., M.Si.`,sks:3},{kode:`ANA 154`,nama:`Net Work Planning`,dosen:`Farasandya Amalia Hapsari, S.Kom., M.AP./Sandy Irawan, S.Kom., M.Kom.`,sks:3},{kode:`ANA 141`,nama:`Etika Profesi`,dosen:`Noor Farid, S.Sos., M.Si./Eko Wicaksono, S.E., M.Si.`,sks:3},{kode:`ANA 163`,nama:`Seminar Skripsi`,dosen:`Noor Farid, S.Sos., M.Si.`,sks:3}]},{no:8,sks:6,mk:[{kode:`ANA 180`,nama:`Skripsi`,dosen:`-`,sks:6}]}]}},T={semester:`Genap 2025/2026`,dosenPA:`Dr. Moch. Anton Maulana, S.E., M.M.`,nipDosenPA:`199209272008013005`,periodeMasuk:`2023 - 1`,basis:`Reguler`,statusKRS:`Divalidasi`,validatedBy:`Dr. Moch. Anton Maulana, S.E., M.M.`,validatedAt:`25 Maret 2026, 20:39:43`,mataKuliah:[{kode:`ANA 146`,nama:`Geopolitik`,kelas:`B`,sks:3,dosen:`Pungky Praja Jatmika, S.IP., M.Si.`,seksi:`EU101`,waktu:`Senin, 07:30-09:10`,ruang:`RA-201`,jenisKelas:`Reguler`,modePertemuan:[`offline`,`offline`,`offline`,`online`,`offline`,`offline`,`online`,`offline`,`offline`,`offline`,`online`,`offline`,`offline`,`offline`]},{kode:`ANA 131`,nama:`Teori Adm Negara`,kelas:`B`,sks:3,dosen:`Dr. Moch. Anton Maulana, S.E., M.M.`,seksi:`EU101`,waktu:`Senin, 09:20-11:00`,ruang:`RA-202`,jenisKelas:`Reguler`,modePertemuan:[`offline`,`offline`,`online`,`offline`,`offline`,`online`,`offline`,`offline`,`offline`,`online`,`offline`,`offline`,`offline`,`offline`]},{kode:`MDK 120`,nama:`Perilaku Organisasi`,kelas:`B`,sks:3,dosen:`Noor Farid, S.Sos., M.Si.`,seksi:`EU102`,waktu:`Selasa, 07:30-09:10`,ruang:`RA-203`,jenisKelas:`Reguler`,modePertemuan:[`offline`,`offline`,`offline`,`offline`,`online`,`offline`,`offline`,`online`,`offline`,`offline`,`offline`,`online`,`offline`,`offline`]},{kode:`ANA 158`,nama:`Adm Pembangunan`,kelas:`B`,sks:3,dosen:`Pungky Praja Jatmika, S.IP., M.Si.`,seksi:`EU101`,waktu:`Selasa, 13:00-14:40`,ruang:`RA-204`,jenisKelas:`Reguler`,modePertemuan:[`offline`,`offline`,`offline`,`offline`,`offline`,`offline`,`offline`,`offline`,`offline`,`offline`,`offline`,`offline`,`offline`,`offline`]},{kode:`MDK 126`,nama:`Kepemimpinan`,kelas:`B`,sks:3,dosen:`Nur Aini, S.E., M.M.`,seksi:`EU101`,waktu:`Rabu, 07:30-09:10`,ruang:`RA-201`,jenisKelas:`Reguler`,modePertemuan:[`offline`,`offline`,`online`,`offline`,`offline`,`offline`,`online`,`offline`,`offline`,`offline`,`offline`,`online`,`offline`,`offline`]},{kode:`ANA 151`,nama:`Sosiologi Masyarakat Kota dan Desa`,kelas:`B`,sks:3,dosen:`Marsinem, S.Sos., M.Si.`,seksi:`EU101`,waktu:`Kamis, 09:20-11:00`,ruang:`RA-205`,jenisKelas:`Reguler`,modePertemuan:[`offline`,`online`,`offline`,`online`,`offline`,`online`,`offline`,`online`,`offline`,`online`,`offline`,`online`,`offline`,`offline`]},{kode:`ANA 142`,nama:`Teori Komunikasi`,kelas:`B`,sks:3,dosen:`Bambang Lasmono, S.E., M.M.`,seksi:`EU102`,waktu:`Jumat, 07:30-09:10`,ruang:`RA-202`,jenisKelas:`Reguler`,modePertemuan:[`offline`,`offline`,`offline`,`online`,`offline`,`offline`,`offline`,`offline`,`online`,`offline`,`offline`,`offline`,`online`,`offline`]}]},E=[{kode:`ANA 146`,nama:`Geopolitik`,kelas:`EU101`,jenisKuliah:`Teori`,kel:1,presensiMhs:13,presensiDosen:14,pctPresensi:93,tidakHadirKe:`9`},{kode:`ANA 131`,nama:`Teori Adm Negara`,kelas:`EU101`,jenisKuliah:`Teori`,kel:1,presensiMhs:14,presensiDosen:14,pctPresensi:100,tidakHadirKe:`-`},{kode:`MDK 120`,nama:`Perilaku Organisasi`,kelas:`EU102`,jenisKuliah:`Teori`,kel:1,presensiMhs:12,presensiDosen:14,pctPresensi:86,tidakHadirKe:`5, 11`},{kode:`ANA 158`,nama:`Adm Pembangunan`,kelas:`EU101`,jenisKuliah:`Teori`,kel:1,presensiMhs:13,presensiDosen:14,pctPresensi:93,tidakHadirKe:`7`},{kode:`MDK 126`,nama:`Kepemimpinan`,kelas:`EU101`,jenisKuliah:`Teori`,kel:1,presensiMhs:14,presensiDosen:14,pctPresensi:100,tidakHadirKe:`-`},{kode:`ANA 151`,nama:`Sosiologi Masyarakat Kota dan Desa`,kelas:`EU101`,jenisKuliah:`Teori`,kel:1,presensiMhs:13,presensiDosen:14,pctPresensi:93,tidakHadirKe:`3`},{kode:`ANA 142`,nama:`Teori Komunikasi`,kelas:`EU102`,jenisKuliah:`Teori`,kel:1,presensiMhs:12,presensiDosen:14,pctPresensi:86,tidakHadirKe:`6, 10`}],D=[{kode:`ANA 146`,nama:`Geopolitik`,kelas:`EU101`,sks:3,dosen:`Pungky Praja Jatmika, S.IP., M.Si.`,sudahEvaluasi:!0},{kode:`ANA 131`,nama:`Teori Adm Negara`,kelas:`EU101`,sks:3,dosen:`Dr. Moch. Anton Maulana, S.E., M.M.`,sudahEvaluasi:!0},{kode:`MDK 120`,nama:`Perilaku Organisasi`,kelas:`EU102`,sks:3,dosen:`Noor Farid, S.Sos., M.Si.`,sudahEvaluasi:!1},{kode:`ANA 158`,nama:`Adm Pembangunan`,kelas:`EU101`,sks:3,dosen:`Pungky Praja Jatmika, S.IP., M.Si.`,sudahEvaluasi:!0},{kode:`MDK 126`,nama:`Kepemimpinan`,kelas:`EU101`,sks:3,dosen:`Nur Aini, S.E., M.M.`,sudahEvaluasi:!1},{kode:`ANA 151`,nama:`Sosiologi Masyarakat Kota dan Desa`,kelas:`EU101`,sks:3,dosen:`Marsinem, S.Sos., M.Si.`,sudahEvaluasi:!0},{kode:`ANA 142`,nama:`Teori Komunikasi`,kelas:`EU102`,sks:3,dosen:`Bambang Lasmono, S.E., M.M.`,sudahEvaluasi:!1}],O=[{tanggal:`Senin, 13 April 2026`,mulai:`07:30`,selesai:`09:10`,kode:`ANA 146`,nama:`Geopolitik`,sesi:`EU101`,jenis:`UTS`,kelompok:1},{tanggal:`Selasa, 14 April 2026`,mulai:`07:30`,selesai:`09:10`,kode:`MDK 120`,nama:`Perilaku Organisasi`,sesi:`EU102`,jenis:`UTS`,kelompok:1},{tanggal:`Rabu, 15 April 2026`,mulai:`07:30`,selesai:`09:10`,kode:`MDK 126`,nama:`Kepemimpinan`,sesi:`EU101`,jenis:`UTS`,kelompok:1},{tanggal:`Kamis, 16 April 2026`,mulai:`09:20`,selesai:`11:00`,kode:`ANA 131`,nama:`Teori Adm Negara`,sesi:`EU101`,jenis:`UTS`,kelompok:1},{tanggal:`Senin, 8 Juni 2026`,mulai:`07:30`,selesai:`09:10`,kode:`ANA 146`,nama:`Geopolitik`,sesi:`EU101`,jenis:`UAS`,kelompok:1},{tanggal:`Selasa, 9 Juni 2026`,mulai:`07:30`,selesai:`09:10`,kode:`MDK 120`,nama:`Perilaku Organisasi`,sesi:`EU102`,jenis:`UAS`,kelompok:1},{tanggal:`Rabu, 10 Juni 2026`,mulai:`07:30`,selesai:`09:10`,kode:`MDK 126`,nama:`Kepemimpinan`,sesi:`EU101`,jenis:`UAS`,kelompok:1},{tanggal:`Kamis, 11 Juni 2026`,mulai:`09:20`,selesai:`11:00`,kode:`ANA 131`,nama:`Teori Adm Negara`,sesi:`EU101`,jenis:`UAS`,kelompok:1}],ee=[{kode:`ANA 161`,nama:`Kebijakan Publik`,sks:3,kelas:`A`,semester:`Genap 2025/2026`,hari:`Senin`,jam:`07:30-09:10`,ruang:`R.201`,bobot:{uts:20,uas:30,tugas:20,quiz:15,absensi:15},mahasiswa:[{nim:`2024101001`,nama:`Ahmad Rizky Pratama`,angkatan:2023,nilaiUTS:82,nilaiUAS:88,nilaiTugas:85,nilaiQuiz:80,kehadiran:13},{nim:`2024101002`,nama:`Siti Nurhaliza`,angkatan:2023,nilaiUTS:78,nilaiUAS:82,nilaiTugas:80,nilaiQuiz:85,kehadiran:14},{nim:`2024101003`,nama:`Budi Santoso`,angkatan:2023,nilaiUTS:90,nilaiUAS:92,nilaiTugas:88,nilaiQuiz:95,kehadiran:14},{nim:`2024101004`,nama:`Dewi Lestari`,angkatan:2023,nilaiUTS:75,nilaiUAS:78,nilaiTugas:82,nilaiQuiz:70,kehadiran:12},{nim:`2024101005`,nama:`Eko Prasetyo`,angkatan:2023,nilaiUTS:85,nilaiUAS:87,nilaiTugas:90,nilaiQuiz:88,kehadiran:14},{nim:`2024101006`,nama:`Fitri Handayani`,angkatan:2023,nilaiUTS:70,nilaiUAS:75,nilaiTugas:72,nilaiQuiz:68,kehadiran:11},{nim:`2024101007`,nama:`Gani Setiawan`,angkatan:2023,nilaiUTS:88,nilaiUAS:85,nilaiTugas:90,nilaiQuiz:82,kehadiran:13},{nim:`2024101008`,nama:`Hana Permata`,angkatan:2024,nilaiUTS:92,nilaiUAS:95,nilaiTugas:93,nilaiQuiz:90,kehadiran:14}]},{kode:`ANA 156`,nama:`Pengembangan Organisasi`,sks:3,kelas:`A`,semester:`Genap 2025/2026`,hari:`Selasa`,jam:`09:20-11:50`,ruang:`R.302`,bobot:{uts:20,uas:30,tugas:20,quiz:15,absensi:15},mahasiswa:[{nim:`2024101009`,nama:`Irfan Hakim`,angkatan:2023,nilaiUTS:72,nilaiUAS:78,nilaiTugas:75,nilaiQuiz:70,kehadiran:13},{nim:`2024101010`,nama:`Julia Putri`,angkatan:2024,nilaiUTS:88,nilaiUAS:90,nilaiTugas:85,nilaiQuiz:92,kehadiran:14},{nim:`2024101011`,nama:`Kurniawan`,angkatan:2024,nilaiUTS:65,nilaiUAS:70,nilaiTugas:68,nilaiQuiz:60,kehadiran:10},{nim:`2024101012`,nama:`Lina Marlina`,angkatan:2024,nilaiUTS:82,nilaiUAS:80,nilaiTugas:85,nilaiQuiz:78,kehadiran:14},{nim:`2024101013`,nama:`Muhammad Faisal`,angkatan:2023,nilaiUTS:77,nilaiUAS:80,nilaiTugas:79,nilaiQuiz:75,kehadiran:12},{nim:`2024101014`,nama:`Nadia Rahmawati`,angkatan:2024,nilaiUTS:90,nilaiUAS:88,nilaiTugas:92,nilaiQuiz:88,kehadiran:14}]},{kode:`MDK 120`,nama:`Perilaku Organisasi`,sks:3,kelas:`B`,semester:`Genap 2025/2026`,hari:`Kamis`,jam:`07:30-09:10`,ruang:`R.201`,bobot:{uts:20,uas:30,tugas:20,quiz:15,absensi:15},mahasiswa:[{nim:`2024101001`,nama:`Ahmad Rizky Pratama`,angkatan:2023,nilaiUTS:80,nilaiUAS:85,nilaiTugas:78,nilaiQuiz:82,kehadiran:12},{nim:`2024101015`,nama:`Rudi Hermawan`,angkatan:2022,nilaiUTS:75,nilaiUAS:80,nilaiTugas:82,nilaiQuiz:78,kehadiran:13},{nim:`2024101016`,nama:`Yeni Fitriani`,angkatan:2022,nilaiUTS:85,nilaiUAS:88,nilaiTugas:87,nilaiQuiz:90,kehadiran:14},{nim:`2024101002`,nama:`Siti Nurhaliza`,angkatan:2023,nilaiUTS:70,nilaiUAS:74,nilaiTugas:72,nilaiQuiz:68,kehadiran:11},{nim:`2024101005`,nama:`Eko Prasetyo`,angkatan:2023,nilaiUTS:88,nilaiUAS:90,nilaiTugas:85,nilaiQuiz:92,kehadiran:14},{nim:`2024101010`,nama:`Julia Putri`,angkatan:2024,nilaiUTS:82,nilaiUAS:84,nilaiTugas:80,nilaiQuiz:85,kehadiran:13},{nim:`2024101013`,nama:`Muhammad Faisal`,angkatan:2023,nilaiUTS:68,nilaiUAS:72,nilaiTugas:70,nilaiQuiz:65,kehadiran:12}]},{kode:`MDK 126`,nama:`Kepemimpinan`,sks:3,kelas:`A`,semester:`Genap 2025/2026`,hari:`Jumat`,jam:`07:30-09:10`,ruang:`R.305`,bobot:{uts:20,uas:30,tugas:20,quiz:15,absensi:15},mahasiswa:[{nim:`2024101001`,nama:`Ahmad Rizky Pratama`,angkatan:2023,nilaiUTS:80,nilaiUAS:85,nilaiTugas:78,nilaiQuiz:76,kehadiran:12},{nim:`2024101009`,nama:`Irfan Hakim`,angkatan:2023,nilaiUTS:72,nilaiUAS:78,nilaiTugas:75,nilaiQuiz:70,kehadiran:13},{nim:`2024101010`,nama:`Julia Putri`,angkatan:2024,nilaiUTS:88,nilaiUAS:90,nilaiTugas:85,nilaiQuiz:88,kehadiran:14},{nim:`2024101011`,nama:`Kurniawan`,angkatan:2024,nilaiUTS:65,nilaiUAS:70,nilaiTugas:68,nilaiQuiz:62,kehadiran:10},{nim:`2024101012`,nama:`Lina Marlina`,angkatan:2024,nilaiUTS:82,nilaiUAS:80,nilaiTugas:85,nilaiQuiz:80,kehadiran:14}]}],k=[{nim:`2024101001`,nama:`Ahmad Rizky Pratama`,prodi:`Administrasi Negara`,angkatan:2023,semester:4,ipk:3.69,sksLulus:41,status:`Aktif`},{nim:`2024101002`,nama:`Siti Nurhaliza`,prodi:`Administrasi Negara`,angkatan:2023,semester:4,ipk:3.52,sksLulus:39,status:`Aktif`},{nim:`2024101003`,nama:`Budi Santoso`,prodi:`Administrasi Negara`,angkatan:2023,semester:4,ipk:3.85,sksLulus:43,status:`Aktif`},{nim:`2024101004`,nama:`Dewi Lestari`,prodi:`Administrasi Negara`,angkatan:2023,semester:4,ipk:3.21,sksLulus:38,status:`Aktif`},{nim:`2023101015`,nama:`Rudi Hermawan`,prodi:`Administrasi Negara`,angkatan:2022,semester:6,ipk:3.45,sksLulus:98,status:`Aktif`},{nim:`2023101016`,nama:`Yeni Fitriani`,prodi:`Administrasi Negara`,angkatan:2022,semester:6,ipk:3.78,sksLulus:102,status:`Aktif`}],A=[{no:1,kegiatan:`Registrasi & Herregistrasi`,mulai:`1 Feb 2026`,selesai:`14 Feb 2026`,status:`Selesai`},{no:2,kegiatan:`Pengisian KRS Online`,mulai:`10 Feb 2026`,selesai:`21 Feb 2026`,status:`Selesai`},{no:3,kegiatan:`Perwalian Akademik`,mulai:`15 Feb 2026`,selesai:`21 Feb 2026`,status:`Selesai`},{no:4,kegiatan:`Perkuliahan Semester Genap`,mulai:`24 Feb 2026`,selesai:`6 Jun 2026`,status:`Berjalan`},{no:5,kegiatan:`Ujian Tengah Semester (UTS)`,mulai:`13 Apr 2026`,selesai:`25 Apr 2026`,status:`Mendatang`},{no:6,kegiatan:`Perkuliahan Setelah UTS`,mulai:`27 Apr 2026`,selesai:`6 Jun 2026`,status:`Mendatang`},{no:7,kegiatan:`Ujian Akhir Semester (UAS)`,mulai:`8 Jun 2026`,selesai:`20 Jun 2026`,status:`Mendatang`},{no:8,kegiatan:`Input Nilai oleh Dosen`,mulai:`22 Jun 2026`,selesai:`4 Jul 2026`,status:`Mendatang`},{no:9,kegiatan:`Pengumuman KHS`,mulai:`6 Jul 2026`,selesai:`6 Jul 2026`,status:`Mendatang`},{no:10,kegiatan:`Libur Semester`,mulai:`7 Jul 2026`,selesai:`30 Aug 2026`,status:`Mendatang`}],j={periode:`Periode I Tahun Akademik 2025/2026`,tanggal:`Sabtu, 25 Juli 2026`,tempat:`Gedung Serbaguna STIA Bayuangga`,calon:[{nim:`2021101001`,nama:`Rina Wulandari`,prodi:`Administrasi Negara`,ipk:3.82,judulSkripsi:`Analisis Kebijakan Publik dalam Pengelolaan Sampah Kota`,statusToga:`Sudah`},{nim:`2021101002`,nama:`Agung Prasetya`,prodi:`Administrasi Negara`,ipk:3.65,judulSkripsi:`Implementasi E-Government di Pemerintah Kabupaten Malang`,statusToga:`Sudah`},{nim:`2021101003`,nama:`Mega Safitri`,prodi:`Administrasi Negara`,ipk:3.91,judulSkripsi:`Efektivitas Program BPJS dalam Pelayanan Kesehatan`,statusToga:`Belum`},{nim:`2021101004`,nama:`Dimas Nugroho`,prodi:`Administrasi Negara`,ipk:3.55,judulSkripsi:`Partisipasi Masyarakat dalam Pembangunan Desa`,statusToga:`Sudah`},{nim:`2021101005`,nama:`Putri Ayu`,prodi:`Administrasi Negara`,ipk:3.72,judulSkripsi:`Reformasi Birokrasi di Lingkungan Pemerintah Daerah`,statusToga:`Belum`}]},M=[{id:1,jenis:`Surat Keterangan Aktif Kuliah`,kode:`SKA`,count:45},{id:2,jenis:`Surat Keterangan Lulus`,kode:`SKL`,count:12},{id:3,jenis:`Surat Pengantar Magang`,kode:`SPM`,count:23},{id:4,jenis:`Surat Keterangan Kelakuan Baik`,kode:`SKKB`,count:18},{id:5,jenis:`Surat Rekomendasi Beasiswa`,kode:`SRB`,count:8},{id:6,jenis:`Legalisir Ijazah`,kode:`LGI`,count:35},{id:7,jenis:`Legalisir Transkrip Nilai`,kode:`LGT`,count:32},{id:8,jenis:`Surat Cuti Akademik`,kode:`SCA`,count:5}],te=[{id:`MHS001`,nim:`20260101001`,nama:`Ahmad Rizky Pratama`,email:`ahmad.rizky@stiabayuangga.ac.id`,telepon:`081234500101`,prodi_pilihan:`Administrasi Negara`,angkatan:2026,semester:1,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Merdeka No. 15, Probolinggo`,nik:`3574010101010001`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2007-03-15`,nama_ayah:`Supriyadi`,nama_ibu:`Siti Aminah`,agama:`Islam`,ipk:0},{id:`MHS002`,nim:`20260101002`,nama:`Siti Nurhaliza`,email:`siti.nurhaliza@stiabayuangga.ac.id`,telepon:`081234500102`,prodi_pilihan:`Administrasi Negara`,angkatan:2026,semester:1,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Soekarno-Hatta No. 22, Probolinggo`,nik:`3574010101010002`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2007-06-20`,nama_ayah:`Hasan`,nama_ibu:`Fatimah`,agama:`Islam`,ipk:0},{id:`MHS003`,nim:`20260102001`,nama:`Budi Santoso`,email:`budi.santoso@stiabayuangga.ac.id`,telepon:`081234500103`,prodi_pilihan:`Administrasi Niaga`,angkatan:2026,semester:1,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Pahlawan No. 8, Probolinggo`,nik:`3574010101010003`,tempat_lahir:`Malang`,tanggal_lahir:`2007-01-11`,nama_ayah:`Joko Santoso`,nama_ibu:`Sri Wahyuni`,agama:`Islam`,ipk:0},{id:`MHS004`,nim:`20260102002`,nama:`Dewi Lestari`,email:`dewi.lestari@stiabayuangga.ac.id`,telepon:`081234500104`,prodi_pilihan:`Administrasi Niaga`,angkatan:2026,semester:1,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Diponegoro No. 30, Probolinggo`,nik:`3574010101010004`,tempat_lahir:`Surabaya`,tanggal_lahir:`2007-09-05`,nama_ayah:`Agus Lestari`,nama_ibu:`Endang Rahayu`,agama:`Islam`,ipk:0},{id:`MHS005`,nim:`20260101003`,nama:`Eko Prasetyo`,email:`eko.prasetyo@stiabayuangga.ac.id`,telepon:`081234500105`,prodi_pilihan:`Administrasi Negara`,angkatan:2026,semester:1,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Sudirman No. 45, Probolinggo`,nik:`3574010101010005`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2007-12-25`,nama_ayah:`Bambang P.`,nama_ibu:`Yuni Astuti`,agama:`Islam`,ipk:0},{id:`MHS006`,nim:`20250101001`,nama:`Fitri Handayani`,email:`fitri.handayani@stiabayuangga.ac.id`,telepon:`081234500106`,prodi_pilihan:`Administrasi Negara`,angkatan:2025,semester:2,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Gatot Subroto No. 12, Probolinggo`,nik:`3574010101010006`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2006-04-18`,nama_ayah:`Suparman`,nama_ibu:`Rina Wati`,agama:`Islam`,ipk:3.45},{id:`MHS007`,nim:`20250101002`,nama:`Gani Setiawan`,email:`gani.setiawan@stiabayuangga.ac.id`,telepon:`081234500107`,prodi_pilihan:`Administrasi Negara`,angkatan:2025,semester:2,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Ahmad Yani No. 55, Probolinggo`,nik:`3574010101010007`,tempat_lahir:`Pasuruan`,tanggal_lahir:`2006-07-22`,nama_ayah:`Darmawan`,nama_ibu:`Lilis Suryani`,agama:`Islam`,ipk:3.21},{id:`MHS008`,nim:`20250102001`,nama:`Hana Permata`,email:`hana.permata@stiabayuangga.ac.id`,telepon:`081234500108`,prodi_pilihan:`Administrasi Niaga`,angkatan:2025,semester:2,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Kartini No. 19, Probolinggo`,nik:`3574010101010008`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2006-02-14`,nama_ayah:`Effendi`,nama_ibu:`Nurul Hidayah`,agama:`Islam`,ipk:3.67},{id:`MHS009`,nim:`20250102002`,nama:`Irfan Hakim`,email:`irfan.hakim@stiabayuangga.ac.id`,telepon:`081234500109`,prodi_pilihan:`Administrasi Niaga`,angkatan:2025,semester:2,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Hayam Wuruk No. 33, Probolinggo`,nik:`3574010101010009`,tempat_lahir:`Lumajang`,tanggal_lahir:`2006-11-30`,nama_ayah:`Hakim`,nama_ibu:`Nur Aini`,agama:`Islam`,ipk:3.12},{id:`MHS010`,nim:`20250101003`,nama:`Julia Putri Ramadhani`,email:`julia.putri@stiabayuangga.ac.id`,telepon:`081234500110`,prodi_pilihan:`Administrasi Negara`,angkatan:2025,semester:2,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Trunojoyo No. 7, Probolinggo`,nik:`3574010101010010`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2006-08-08`,nama_ayah:`Wahyudi`,nama_ibu:`Diana Sari`,agama:`Islam`,ipk:3.55},{id:`MHS011`,nim:`20250201001`,nama:`Kurniawan Dwi Putra`,email:`kurniawan.dp@stiabayuangga.ac.id`,telepon:`081234500111`,prodi_pilihan:`Administrasi Negara`,angkatan:2025,semester:3,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Basuki Rahmat No. 61, Probolinggo`,nik:`3574010101010011`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2005-05-10`,nama_ayah:`Slamet`,nama_ibu:`Mariyam`,agama:`Islam`,ipk:3.33},{id:`MHS012`,nim:`20250201002`,nama:`Lina Marlina`,email:`lina.marlina@stiabayuangga.ac.id`,telepon:`081234500112`,prodi_pilihan:`Administrasi Negara`,angkatan:2025,semester:3,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Panglima Sudirman No. 14, Probolinggo`,nik:`3574010101010012`,tempat_lahir:`Situbondo`,tanggal_lahir:`2005-10-03`,nama_ayah:`Marno`,nama_ibu:`Sulastri`,agama:`Islam`,ipk:3.78},{id:`MHS013`,nim:`20250202001`,nama:`Muhammad Faisal`,email:`muh.faisal@stiabayuangga.ac.id`,telepon:`081234500113`,prodi_pilihan:`Administrasi Niaga`,angkatan:2025,semester:3,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Cokroaminoto No. 28, Probolinggo`,nik:`3574010101010013`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2005-03-19`,nama_ayah:`Abdullah`,nama_ibu:`Khadijah`,agama:`Islam`,ipk:2.98},{id:`MHS014`,nim:`20250202002`,nama:`Nadia Rahmawati`,email:`nadia.rahma@stiabayuangga.ac.id`,telepon:`081234500114`,prodi_pilihan:`Administrasi Niaga`,angkatan:2025,semester:3,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. RA Kartini No. 40, Probolinggo`,nik:`3574010101010014`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2005-07-27`,nama_ayah:`Rahman`,nama_ibu:`Siti Maryam`,agama:`Islam`,ipk:3.5},{id:`MHS015`,nim:`20250201003`,nama:`Rudi Hermawan`,email:`rudi.hermawan@stiabayuangga.ac.id`,telepon:`081234500115`,prodi_pilihan:`Administrasi Negara`,angkatan:2025,semester:3,status_mhs:`cuti`,jenis_kelamin:`L`,alamat:`Jl. Veteran No. 21, Probolinggo`,nik:`3574010101010015`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2005-01-06`,nama_ayah:`Hermanto`,nama_ibu:`Wulan Sari`,agama:`Islam`,ipk:2.85},{id:`MHS016`,nim:`20240101001`,nama:`Yeni Fitriani`,email:`yeni.fitriani@stiabayuangga.ac.id`,telepon:`081234500116`,prodi_pilihan:`Administrasi Negara`,angkatan:2024,semester:4,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. KH Hasyim Asyari No. 10, Probolinggo`,nik:`3574010101010016`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2005-06-12`,nama_ayah:`Sutikno`,nama_ibu:`Fitri Lestari`,agama:`Islam`,ipk:3.62},{id:`MHS017`,nim:`20240101002`,nama:`Farhan Maulana`,email:`farhan.maulana@stiabayuangga.ac.id`,telepon:`081234500117`,prodi_pilihan:`Administrasi Negara`,angkatan:2024,semester:4,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Bromo No. 35, Probolinggo`,nik:`3574010101010017`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2005-02-28`,nama_ayah:`Maulana`,nama_ibu:`Aisyah`,agama:`Islam`,ipk:3.15},{id:`MHS018`,nim:`20240102001`,nama:`Rizki Amelia`,email:`rizki.amelia@stiabayuangga.ac.id`,telepon:`081234500118`,prodi_pilihan:`Administrasi Niaga`,angkatan:2024,semester:4,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Mastrip No. 52, Probolinggo`,nik:`3574010101010018`,tempat_lahir:`Jember`,tanggal_lahir:`2005-09-14`,nama_ayah:`Sugianto`,nama_ibu:`Ratna Dewi`,agama:`Islam`,ipk:3.4},{id:`MHS019`,nim:`20240102002`,nama:`Dian Puspita Sari`,email:`dian.puspita@stiabayuangga.ac.id`,telepon:`081234500119`,prodi_pilihan:`Administrasi Niaga`,angkatan:2024,semester:4,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. PB Sudirman No. 17, Probolinggo`,nik:`3574010101010019`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2005-04-21`,nama_ayah:`Purnomo`,nama_ibu:`Kusumawati`,agama:`Islam`,ipk:3.7},{id:`MHS020`,nim:`20240101003`,nama:`Bayu Nugroho`,email:`bayu.nugroho@stiabayuangga.ac.id`,telepon:`081234500120`,prodi_pilihan:`Administrasi Negara`,angkatan:2024,semester:4,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Semeru No. 9, Probolinggo`,nik:`3574010101010020`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2005-11-17`,nama_ayah:`Nugroho`,nama_ibu:`Endang Susanti`,agama:`Islam`,ipk:3.08},{id:`MHS021`,nim:`20240201001`,nama:`Sari Wulandari`,email:`sari.wulandari@stiabayuangga.ac.id`,telepon:`081234500121`,prodi_pilihan:`Administrasi Negara`,angkatan:2024,semester:5,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Argopuro No. 23, Probolinggo`,nik:`3574010101010021`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2004-08-30`,nama_ayah:`Warsito`,nama_ibu:`Sumiati`,agama:`Islam`,ipk:3.58},{id:`MHS022`,nim:`20240201002`,nama:`Andi Firmansyah`,email:`andi.firmansyah@stiabayuangga.ac.id`,telepon:`081234500122`,prodi_pilihan:`Administrasi Negara`,angkatan:2024,semester:5,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Rinjani No. 44, Probolinggo`,nik:`3574010101010022`,tempat_lahir:`Pasuruan`,tanggal_lahir:`2004-05-16`,nama_ayah:`Firmansyah`,nama_ibu:`Rusmiati`,agama:`Islam`,ipk:3.25},{id:`MHS023`,nim:`20240202001`,nama:`Mega Safitri`,email:`mega.safitri@stiabayuangga.ac.id`,telepon:`081234500123`,prodi_pilihan:`Administrasi Niaga`,angkatan:2024,semester:5,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Raung No. 6, Probolinggo`,nik:`3574010101010023`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2004-12-01`,nama_ayah:`Safitri`,nama_ibu:`Murni`,agama:`Islam`,ipk:3.82},{id:`MHS024`,nim:`20240202002`,nama:`Dimas Arya Nugroho`,email:`dimas.arya@stiabayuangga.ac.id`,telepon:`081234500124`,prodi_pilihan:`Administrasi Niaga`,angkatan:2024,semester:5,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Ijen No. 38, Probolinggo`,nik:`3574010101010024`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2004-03-09`,nama_ayah:`Arya Putra`,nama_ibu:`Mega Sari`,agama:`Islam`,ipk:3.05},{id:`MHS025`,nim:`20240201003`,nama:`Putri Ayu Lestari`,email:`putri.ayu@stiabayuangga.ac.id`,telepon:`081234500125`,prodi_pilihan:`Administrasi Negara`,angkatan:2024,semester:5,status_mhs:`cuti`,jenis_kelamin:`P`,alamat:`Jl. Kelud No. 11, Probolinggo`,nik:`3574010101010025`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2004-10-22`,nama_ayah:`Lestari`,nama_ibu:`Winarti`,agama:`Islam`,ipk:3.3},{id:`MHS026`,nim:`20230101001`,nama:`Wahyu Saputra`,email:`wahyu.saputra@stiabayuangga.ac.id`,telepon:`081234500126`,prodi_pilihan:`Administrasi Negara`,angkatan:2023,semester:6,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Taman Sari No. 50, Probolinggo`,nik:`3574010101010026`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2004-01-15`,nama_ayah:`Saputro`,nama_ibu:`Ani Setyaningsih`,agama:`Islam`,ipk:3.48},{id:`MHS027`,nim:`20230101002`,nama:`Indah Permata Sari`,email:`indah.permata@stiabayuangga.ac.id`,telepon:`081234500127`,prodi_pilihan:`Administrasi Negara`,angkatan:2023,semester:6,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Mangga No. 16, Probolinggo`,nik:`3574010101010027`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2004-06-28`,nama_ayah:`Sunarto`,nama_ibu:`Indrawati`,agama:`Islam`,ipk:3.72},{id:`MHS028`,nim:`20230102001`,nama:`Fajar Ramadhan`,email:`fajar.ramadhan@stiabayuangga.ac.id`,telepon:`081234500128`,prodi_pilihan:`Administrasi Niaga`,angkatan:2023,semester:6,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Anggrek No. 25, Probolinggo`,nik:`3574010101010028`,tempat_lahir:`Banyuwangi`,tanggal_lahir:`2004-04-05`,nama_ayah:`Ramadhan`,nama_ibu:`Zubaida`,agama:`Islam`,ipk:3.18},{id:`MHS029`,nim:`20230102002`,nama:`Ayu Wulandari`,email:`ayu.wulandari@stiabayuangga.ac.id`,telepon:`081234500129`,prodi_pilihan:`Administrasi Niaga`,angkatan:2023,semester:6,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Melati No. 31, Probolinggo`,nik:`3574010101010029`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2004-09-11`,nama_ayah:`Wulanto`,nama_ibu:`Dewi Hartati`,agama:`Islam`,ipk:3.6},{id:`MHS030`,nim:`20230101003`,nama:`Ridho Alamsyah`,email:`ridho.alamsyah@stiabayuangga.ac.id`,telepon:`081234500130`,prodi_pilihan:`Administrasi Negara`,angkatan:2023,semester:6,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Mawar No. 42, Probolinggo`,nik:`3574010101010030`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2004-02-20`,nama_ayah:`Alamsyah`,nama_ibu:`Fitriyah`,agama:`Islam`,ipk:2.95},{id:`MHS031`,nim:`20230201001`,nama:`Nurul Hidayah`,email:`nurul.hidayah@stiabayuangga.ac.id`,telepon:`081234500131`,prodi_pilihan:`Administrasi Negara`,angkatan:2023,semester:7,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Kenanga No. 18, Probolinggo`,nik:`3574010101010031`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2003-07-14`,nama_ayah:`Hidayat`,nama_ibu:`Sholihah`,agama:`Islam`,ipk:3.65},{id:`MHS032`,nim:`20230201002`,nama:`Galang Prasetya`,email:`galang.prasetya@stiabayuangga.ac.id`,telepon:`081234500132`,prodi_pilihan:`Administrasi Negara`,angkatan:2023,semester:7,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Flamboyan No. 27, Probolinggo`,nik:`3574010101010032`,tempat_lahir:`Malang`,tanggal_lahir:`2003-11-25`,nama_ayah:`Prasetya`,nama_ibu:`Siti Rahayu`,agama:`Islam`,ipk:3.38},{id:`MHS033`,nim:`20230202001`,nama:`Rina Oktaviani`,email:`rina.oktaviani@stiabayuangga.ac.id`,telepon:`081234500133`,prodi_pilihan:`Administrasi Niaga`,angkatan:2023,semester:7,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Dahlia No. 5, Probolinggo`,nik:`3574010101010033`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2003-10-08`,nama_ayah:`Oktavian`,nama_ibu:`Mulyani`,agama:`Islam`,ipk:3.85},{id:`MHS034`,nim:`20230202002`,nama:`Yoga Aditya`,email:`yoga.aditya@stiabayuangga.ac.id`,telepon:`081234500134`,prodi_pilihan:`Administrasi Niaga`,angkatan:2023,semester:7,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Teratai No. 13, Probolinggo`,nik:`3574010101010034`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2003-05-30`,nama_ayah:`Aditya Sr.`,nama_ibu:`Herlina`,agama:`Islam`,ipk:3.1},{id:`MHS035`,nim:`20230201003`,nama:`Devi Anggraini`,email:`devi.anggraini@stiabayuangga.ac.id`,telepon:`081234500135`,prodi_pilihan:`Administrasi Negara`,angkatan:2023,semester:7,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Bougenville No. 36, Probolinggo`,nik:`3574010101010035`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2003-08-19`,nama_ayah:`Angga`,nama_ibu:`Rosidah`,agama:`Islam`,ipk:3.52},{id:`MHS036`,nim:`20220101001`,nama:`Rizal Fahmi`,email:`rizal.fahmi@stiabayuangga.ac.id`,telepon:`081234500136`,prodi_pilihan:`Administrasi Negara`,angkatan:2022,semester:8,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Wijaya Kusuma No. 48, Probolinggo`,nik:`3574010101010036`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2003-01-22`,nama_ayah:`Fahmi`,nama_ibu:`Rukmini`,agama:`Islam`,ipk:3.42},{id:`MHS037`,nim:`20220101002`,nama:`Anisa Nur Fadilah`,email:`anisa.fadilah@stiabayuangga.ac.id`,telepon:`081234500137`,prodi_pilihan:`Administrasi Negara`,angkatan:2022,semester:8,status_mhs:`aktif`,jenis_kelamin:`P`,alamat:`Jl. Seruni No. 20, Probolinggo`,nik:`3574010101010037`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2003-04-11`,nama_ayah:`Fadil`,nama_ibu:`Nurjanah`,agama:`Islam`,ipk:3.75},{id:`MHS038`,nim:`20220102001`,nama:`Hendri Kurniawan`,email:`hendri.kurniawan@stiabayuangga.ac.id`,telepon:`081234500138`,prodi_pilihan:`Administrasi Niaga`,angkatan:2022,semester:8,status_mhs:`lulus`,jenis_kelamin:`L`,alamat:`Jl. Cempaka No. 34, Probolinggo`,nik:`3574010101010038`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2003-06-07`,nama_ayah:`Kurniawan`,nama_ibu:`Suprihatin`,agama:`Islam`,ipk:3.55},{id:`MHS039`,nim:`20220102002`,nama:`Winda Puspitasari`,email:`winda.puspita@stiabayuangga.ac.id`,telepon:`081234500139`,prodi_pilihan:`Administrasi Niaga`,angkatan:2022,semester:8,status_mhs:`lulus`,jenis_kelamin:`P`,alamat:`Jl. Sakura No. 29, Probolinggo`,nik:`3574010101010039`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2003-12-15`,nama_ayah:`Puspito`,nama_ibu:`Suyanti`,agama:`Islam`,ipk:3.9},{id:`MHS040`,nim:`20220101003`,nama:`Agus Setiawan`,email:`agus.setiawan@stiabayuangga.ac.id`,telepon:`081234500140`,prodi_pilihan:`Administrasi Negara`,angkatan:2022,semester:8,status_mhs:`aktif`,jenis_kelamin:`L`,alamat:`Jl. Orchid No. 15, Probolinggo`,nik:`3574010101010040`,tempat_lahir:`Probolinggo`,tanggal_lahir:`2003-03-28`,nama_ayah:`Setiawan Sr.`,nama_ibu:`Purwanti`,agama:`Islam`,ipk:3.2}],N={login:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`,chevDown:`<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,phone:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.06 12.8 19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,mail:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,user:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,users:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,help:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,award:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,target:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,handshake:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>`,lightbulb:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>`,calendar:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,arrowRight:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,mapPin:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,clock:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,graduationCap:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`,briefcase:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,building:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,chartBar:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,bookOpen:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,clipboard:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,globe:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,facebook:`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,instagram:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,youtube:`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2c.312-1.732.466-3.49.46-5.25a29.005 29.005 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>`},P={"🏛️":N.building,"💼":N.chartBar,"🎓":N.bookOpen,"📋":N.clipboard};function ne(e){return P[e]||N.graduationCap}var re=[{medal:`1st`,title:`Juara 1 Debat Administrasi Publik`,desc:`Kompetisi Nasional Ilmu Administrasi — Solo, 2025`,color:`#f59e0b`},{medal:`2nd`,title:`Runner-up Lomba Karya Tulis Ilmiah`,desc:`LKTI Nasional "Good Governance" — Surabaya, 2025`,color:`#94a3b8`},{medal:`Best`,title:`Best Paper Award ICPAS 2024`,desc:`International Conference Public Administration — Bali`,color:`#3b82f6`},{medal:`Win`,title:`Juara Umum Dies Natalis ke-15`,desc:`Kompetisi Olahraga & Seni PT se-Jawa Timur`,color:`#10b981`}],ie=[{day:`28`,month:`MAR`,title:`Seminar Nasional Administrasi Publik`,loc:`Aula Utama STIA Bayuangga`,time:`08:00 — 16:00 WIB`,tag:`Seminar`,tagColor:`info`},{day:`02`,month:`APR`,title:`Workshop Penulisan Jurnal Ilmiah`,loc:`Lab Komputer Lt.2`,time:`09:00 — 12:00 WIB`,tag:`Workshop`,tagColor:`warning`},{day:`10`,month:`APR`,title:`Penerimaan Mahasiswa Baru Gelombang 2`,loc:`Pendaftaran online via portal PMB`,time:`Deadline`,tag:`PMB`,tagColor:`success`},{day:`15`,month:`APR`,title:`Dies Natalis STIA Bayuangga ke-16`,loc:`Gedung Serba Guna`,time:`Seharian`,tag:`Event`,tagColor:`primary`}],ae=[{quote:`Ilmu yang saya peroleh di STIA Bayuangga sangat aplikatif dan relevan untuk karir di instansi pemerintah.`,name:`Ahmad Rizky, S.AP`,role:`ASN Kab. Probolinggo`,initials:`AR`},{quote:`Dosen yang berpengalaman, lingkungan yang kondusif, dan networking alumni yang sangat kuat menjadi modal berharga.`,name:`Sari Nurhasanah, S.AB`,role:`HR Manager PT Maspion`,initials:`SN`},{quote:`STIA Bayuangga mengajarkan saya berpikir kritis dan analitis. Kini saya berhasil melanjutkan studi S2 di UB.`,name:`Dwi Wahyu, S.AP`,role:`Mahasiswa S2 Univ. Brawijaya`,initials:`DW`}];function oe(e){e.innerHTML=`
    <!-- Top Utility Bar -->
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-left">
          <a href="#">${N.phone} <span>(0335) 421173</span></a>
          <a href="#">${N.mail} <span>info@stiabayuangga.ac.id</span></a>
        </div>
        <div class="topbar-right">
          <a href="#/login">${N.user} <span>Portal Mahasiswa</span></a>
          <a href="#">${N.globe} <span>EN</span></a>
        </div>
      </div>
    </div>

    <!-- Main Nav -->
    <nav class="main-nav" id="mainNav" role="navigation" aria-label="Navigasi utama">
      <div class="container nav-container">
        <a href="#/" class="nav-brand" aria-label="${s.name}">
          <img src="/assets/images/logo.png" alt="" class="nav-brand-logo" aria-hidden="true">
          <div class="nav-brand-text">
            <span class="nav-brand-name">${s.name}</span>
            <span class="nav-brand-sub">Probolinggo</span>
          </div>
        </a>

        <div class="nav-menu" id="navMenu">
          <div class="nav-dropdown">
            <button class="nav-item" aria-expanded="false">Profil ${N.chevDown}</button>
            <div class="nav-dropdown-panel">
              <a href="#" onclick="scrollTo('about')">Sejarah & Tentang</a>
              <a href="#" onclick="scrollTo('about')">Visi & Misi</a>
              <a href="#" onclick="scrollTo('prodi')">Program Studi</a>
              <a href="#">Struktur Organisasi</a>
              <a href="#">Sertifikat Akreditasi</a>
            </div>
          </div>
          <a class="nav-item" href="#" onclick="scrollTo('news')">Berita</a>
          <a class="nav-item" href="#" onclick="scrollTo('achievements')">Prestasi</a>
          <a class="nav-item" href="#" onclick="scrollTo('alumni')">Alumni</a>
          <a class="nav-item" href="#" onclick="scrollTo('events')">Agenda</a>
          <a class="nav-item" href="#" onclick="scrollTo('gallery')">Galeri</a>
        </div>

        <div class="nav-actions">
          <a href="#/login" class="nav-cta">${N.login} Login</a>
          <button class="nav-toggle" id="navToggle" aria-label="Buka menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-overlay" id="mobileOverlay"></div>
    <aside class="mobile-menu" id="mobileMenu" aria-hidden="true">
      <div class="mobile-menu-head">
        <img src="/assets/images/logo.png" alt="" style="width:36px;height:36px;border-radius:50%;">
        <strong>${s.name}</strong>
      </div>
      <a href="#" onclick="closeMob();scrollTo('hero')">Beranda</a>
      <a href="#" onclick="closeMob();scrollTo('about')">Profil</a>
      <a href="#" onclick="closeMob();scrollTo('news')">Berita</a>
      <a href="#" onclick="closeMob();scrollTo('achievements')">Prestasi</a>
      <a href="#" onclick="closeMob();scrollTo('alumni')">Alumni</a>
      <a href="#" onclick="closeMob();scrollTo('events')">Agenda</a>
      <a href="#" onclick="closeMob();scrollTo('gallery')">Galeri</a>
      <a href="#" onclick="closeMob();scrollTo('prodi')">Program Studi</a>
      <a href="#/login" class="mobile-login-btn" onclick="closeMob()">${N.login} Login Portal</a>
    </aside>

    <!-- ====== HERO ====== -->
    <section class="hero" id="hero" role="banner">
      <div class="hero-bg"><img src="/assets/images/campus-front.jpg" alt="" role="presentation"></div>
      <div class="hero-overlay"></div>
      
      <div class="container hero-grid">
        <div class="hero-text anim-up">
          <span class="hero-chip">Terakreditasi ${s.stats.akreditasi} — BAN PT</span>
          <h1>${s.name}<br><span>Probolinggo</span></h1>
          <p>${s.fullName} — ${s.tagline}. Mempersiapkan generasi muda yang kompeten, profesional, dan bermoral Pancasila.</p>
          <div class="hero-cta">
            <a href="#/pmb" class="btn-primary-l">${N.graduationCap} Daftar Sekarang</a>
            <a href="#" onclick="scrollTo('about')" class="btn-ghost-l">Tentang Kami ${N.arrowRight}</a>
          </div>
        </div>
        <div class="hero-logo-area anim-up d2" aria-hidden="true">
          <div class="hero-logo-orbit">
            <div class="orbit r1"></div><div class="orbit r2"></div>
            <img src="/assets/images/logo.png" alt="" class="hero-logo-img">
          </div>
        </div>
      </div>

      <!-- Floating Stats -->
      <div class="stats-float anim-up d3">
        <div class="container">
          <div class="stats-row">
            <div class="stat-card"><strong data-count="${s.stats.mahasiswa}">0</strong><span>Mahasiswa</span></div>
            <div class="stat-card"><strong data-count="${s.stats.dosen}">0</strong><span>Dosen</span></div>
            <div class="stat-card"><strong data-count="${s.stats.prodi}">0</strong><span>Program Studi</span></div>
            <div class="stat-card"><strong data-count="15">0</strong><span>Tahun Berdiri</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====== LAYANAN ====== -->
    <section class="sec layanan-sec" id="services">
      <div class="container">
        <div class="layanan-grid">
          <a href="#/login" class="layanan-card">
            <img src="/assets/images/3d-siakad.png" alt="" class="layanan-card-img">
            <strong>SIAKAD</strong>
            <small>Sistem Informasi Akademik</small>
          </a>
          <a href="#/login" class="layanan-card">
            <img src="/assets/images/3d-elearning.png" alt="" class="layanan-card-img">
            <strong>E-Learning</strong>
            <small>Pembelajaran Daring</small>
          </a>
          <a href="#" class="layanan-card">
            <img src="/assets/images/3d-library.png" alt="" class="layanan-card-img">
            <strong>Perpustakaan</strong>
            <small>Digital Library</small>
          </a>
          <a href="#/login" class="layanan-card">
            <div class="layanan-icon-wrap">${N.users}</div>
            <strong>Portal Ortu</strong>
            <small>Monitoring Akademik</small>
          </a>
          <a href="#" class="layanan-card">
            <div class="layanan-icon-wrap gold">${N.help}</div>
            <strong>Konseling</strong>
            <small>Bimbingan Mahasiswa</small>
          </a>
        </div>
      </div>
    </section>

    <!-- ====== PROFIL ====== -->
    <section class="sec" id="about">
      <div class="container">
        <div class="sec-head reveal"><h2>Profil Kampus</h2><p>Mengenal lebih dekat ${s.fullName}</p></div>
        <div class="about-grid">
          <div class="about-text reveal">
            <div class="tab-bar">
              <button class="tab active" data-tab="sejarah">Sejarah</button>
              <button class="tab" data-tab="visi">Visi</button>
              <button class="tab" data-tab="misi">Misi</button>
            </div>
            <div class="tab-panels">
              <div class="tab-panel active" data-panel="sejarah">
                <p>STIA Bayuangga Probolinggo didirikan dengan semangat untuk mencetak lulusan unggul di bidang Ilmu Administrasi. Berlokasi di Jalan Raya Dringu No.62, Probolinggo, kampus ini telah menjadi salah satu perguruan tinggi terkemuka di wilayah Tapal Kuda, Jawa Timur.</p>
                <p>Dengan akreditasi B dari BAN-PT, STIA Bayuangga terus berkomitmen meningkatkan kualitas pendidikan, penelitian, dan pengabdian kepada masyarakat.</p>
              </div>
              <div class="tab-panel" data-panel="visi"><p>${s.visi}</p></div>
              <div class="tab-panel" data-panel="misi"><ul>${s.misi.map(e=>`<li>${e}</li>`).join(``)}</ul></div>
            </div>
          </div>
          <div class="about-img reveal">
            <img src="/assets/images/campus-courtyard.png" alt="Kampus STIA Bayuangga">
            <div class="about-badge">Terakreditasi B</div>
          </div>
        </div>
        <div class="usp-row">
          <div class="usp-card reveal"><div class="usp-icon">${N.target}</div><h3>Kurikulum Terapan</h3><p>Berbasis kompetensi, sesuai kebutuhan dunia kerja dan instansi pemerintah.</p></div>
          <div class="usp-card reveal"><div class="usp-icon gold">${N.handshake}</div><h3>Kerjasama Luas</h3><p>MoU dengan instansi pemerintah dan perusahaan swasta untuk magang.</p></div>
          <div class="usp-card reveal"><div class="usp-icon cyan">${N.lightbulb}</div><h3>Dosen Profesional</h3><p>${s.stats.dosen} dosen S2/S3 dengan pengalaman praktisi di bidangnya.</p></div>
        </div>
      </div>
    </section>

    <!-- ====== PROGRAM STUDI ====== -->
    <section class="sec sec-alt" id="prodi">
      <div class="container">
        <div class="sec-head reveal"><h2>Program Studi</h2><p>Pilihan program studi berkualitas di bidang Ilmu Administrasi</p></div>
        <div class="prodi-row">
          ${c.map((e,t)=>`
          <div class="prodi-card reveal" style="--delay:${t*.08}s">
            <div class="prodi-header">
              <span class="prodi-icon">${ne(e.icon)}</span>
              <span class="badge-sm ${e.akreditasi===`A`?`green`:`blue`}">${e.jenjang} — Akreditasi ${e.akreditasi}</span>
            </div>
            <h4>${e.name}</h4>
            <p>${e.desc}</p>
            <div class="prodi-meta">
              <span>${N.graduationCap} ${e.mahasiswa} Mahasiswa</span>
              <span>${N.briefcase} ${e.dosen} Dosen</span>
            </div>
          </div>`).join(``)}
        </div>
      </div>
    </section>

    <!-- ====== BERITA ====== -->
    <section class="sec" id="news">
      <div class="container">
        <div class="sec-head-row reveal">
          <div><h2>Berita & Pengumuman</h2><p>Informasi terbaru dari STIA Bayuangga</p></div>
          <a href="#" class="link-btn">Lihat Semua ${N.arrowRight}</a>
        </div>
        <div class="news-grid reveal">
          <article class="news-main">
            <div class="news-main-thumb">
              <img src="/assets/images/campus-seminar.png" alt="">
              <span class="badge-sm gold">${u[0].category}</span>
            </div>
            <div class="news-main-body">
              <h3>${u[0].title}</h3>
              <p>${u[0].excerpt}</p>
              <div class="news-foot">
                <span>${N.calendar} ${u[0].date}</span>
                <a href="#">Selengkapnya ${N.arrowRight}</a>
              </div>
            </div>
          </article>
          <div class="news-list">
            ${u.slice(1).map(e=>`
            <article class="news-item">
              <div class="news-item-dot"></div>
              <div class="news-item-body">
                <span class="badge-sm ${e.category===`Event`?`blue`:e.category===`PMB`?`green`:``}">${e.category}</span>
                <h4>${e.title}</h4>
                <span class="text-muted">${e.date}</span>
              </div>
            </article>`).join(``)}
          </div>
        </div>
      </div>
    </section>

    <!-- ====== PRESTASI ====== -->
    <section class="sec sec-alt" id="achievements">
      <div class="container">
        <div class="sec-head reveal"><h2>Prestasi & Penghargaan</h2><p>Capaian membanggakan civitas akademika</p></div>
        <div class="achiev-grid">
          <div class="achiev-visual reveal">
            <img src="/assets/images/3d-trophy.png" alt="" class="float-3d" style="border-radius:20px;">
          </div>
          <div class="achiev-list reveal">
            ${re.map(e=>`
            <div class="achiev-item">
              <div class="achiev-medal" style="--medal-color:${e.color}">${e.medal}</div>
              <div><h4>${e.title}</h4><p>${e.desc}</p></div>
            </div>`).join(``)}
          </div>
        </div>
      </div>
    </section>

    <!-- ====== ALUMNI ====== -->
    <section class="sec" id="alumni">
      <div class="container">
        <div class="sec-head reveal"><h2>Alumni & Karir</h2><p>Lulusan STIA Bayuangga berkarya di berbagai sektor</p></div>
        <div class="alumni-top">
          <div class="alumni-visual reveal"><img src="/assets/images/campus-graduation.png" alt="" class="float-3d d2" style="border-radius:20px;"></div>
          <div class="alumni-nums reveal">
            <div class="num-card"><strong data-count="2500">0</strong><span>Total Alumni</span></div>
            <div class="num-card"><strong data-count="89">0</strong><span>% Terserap Kerja</span></div>
            <div class="num-card"><strong data-count="120">0</strong><span>Di Pemerintahan</span></div>
            <div class="num-card"><strong data-count="45">0</strong><span>Wirausaha</span></div>
          </div>
        </div>
        <div class="testi-row reveal">
          ${ae.map(e=>`
          <div class="testi-card">
            <p>"${e.quote}"</p>
            <div class="testi-author">
              <div class="testi-avatar">${e.initials}</div>
              <div><strong>${e.name}</strong><span>${e.role}</span></div>
            </div>
          </div>`).join(``)}
        </div>
      </div>
    </section>

    <!-- ====== AGENDA ====== -->
    <section class="sec sec-alt" id="events">
      <div class="container">
        <div class="sec-head-row reveal">
          <div><h2>Agenda Kampus</h2><p>Kegiatan dan acara mendatang</p></div>
          <a href="#" class="link-btn">Lihat Semua ${N.arrowRight}</a>
        </div>
        <div class="events-grid">
          <div class="events-visual reveal"><img src="/assets/images/3d-calendar.png" alt="" class="float-3d d3"></div>
          <div class="events-list reveal">
            ${ie.map(e=>`
            <div class="event-card">
              <div class="event-date"><span class="event-day">${e.day}</span><span class="event-month">${e.month}</span></div>
              <div class="event-body">
                <h4>${e.title}</h4>
                <p>${N.mapPin} ${e.loc} &nbsp; ${N.clock} ${e.time}</p>
              </div>
              <span class="badge-sm ${e.tagColor}">${e.tag}</span>
            </div>`).join(``)}
          </div>
        </div>
      </div>
    </section>

    <!-- ====== GALERI ====== -->
    <section class="sec" id="gallery">
      <div class="container">
        <div class="sec-head reveal"><h2>Galeri Kampus</h2><p>Momen terbaik di STIA Bayuangga Probolinggo</p></div>
        <div class="gallery-grid reveal">
          <div class="gallery-item lg"><img src="/assets/images/hero-students.png" alt=""><div class="gallery-cap">Kehidupan Kampus</div></div>
          <div class="gallery-item"><img src="/assets/images/campus-seminar.png" alt=""><div class="gallery-cap">Seminar & Kuliah</div></div>
          <div class="gallery-item"><img src="/assets/images/student-reading.png" alt=""><div class="gallery-cap">Perpustakaan</div></div>
          <div class="gallery-item"><img src="/assets/images/student-laptop.png" alt=""><div class="gallery-cap">Kolaborasi</div></div>
          <div class="gallery-item"><img src="/assets/images/campus-graduation.png" alt=""><div class="gallery-cap">Wisuda</div></div>
          <div class="gallery-item lg"><img src="/assets/images/campus-courtyard.png" alt=""><div class="gallery-cap">Suasana Kampus</div></div>
        </div>
      </div>
    </section>

    <!-- ====== CTA ====== -->
    <section class="cta-sec">
      <div class="container cta-inner">
        <h2>Siap Bergabung dengan ${s.name}?</h2>
        <p>Pendaftaran Mahasiswa Baru TA 2026/2027 telah dibuka. Daftarkan diri Anda sekarang!</p>
        <div class="cta-btns">
          <a href="#/pmb" class="btn-primary-l">${N.graduationCap} Daftar Sekarang</a>
          <a href="#" onclick="scrollTo('about')" class="btn-ghost-l">${N.phone} Hubungi Kami</a>
        </div>
      </div>
    </section>

    <!-- ====== FOOTER ====== -->
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-top">
          <div class="footer-about">
            <div class="footer-brand"><img src="/assets/images/logo.png" alt="" style="width:44px;height:44px;border-radius:50%;"><strong>${s.name}</strong></div>
            <p>${s.fullName}<br>${s.address}</p>
            <p>${N.phone} ${s.phone}<br>${N.mail} ${s.email}</p>
            <div class="footer-social">
              <a href="#" aria-label="Facebook">${N.facebook}</a>
              <a href="#" aria-label="Instagram">${N.instagram}</a>
              <a href="#" aria-label="YouTube">${N.youtube}</a>
            </div>
          </div>
          <div class="footer-links">
            <h4>Akademik</h4>
            <a href="#/login">Portal SIAKAD</a>
            <a href="#/login">E-Learning</a>
            <a href="#">Kalender Akademik</a>
            <a href="#">Perpustakaan</a>
            <a href="#">Jurnal Ilmiah</a>
          </div>
          <div class="footer-links">
            <h4>Informasi</h4>
            <a href="#">Penerimaan Mahasiswa Baru</a>
            <a href="#">Beasiswa</a>
            <a href="#">Kerjasama</a>
            <a href="#">Karir & Alumni</a>
            <a href="#">FAQ</a>
          </div>
          <div class="footer-links">
            <h4>Program Studi</h4>
            ${c.map(e=>`<a href="#">${e.jenjang} ${e.name}</a>`).join(``)}
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; 2026 ${s.name}. All rights reserved.</span>
          <div class="iso-badges"><span class="iso-b">ISO 27001</span><span class="iso-b">ISO 40500</span><span class="iso-b">ISO 9241</span></div>
          <div class="footer-legal"><a href="#">Kebijakan Privasi</a><a href="#">Syarat & Ketentuan</a></div>
        </div>
      </div>
    </footer>
  `,ce(),le(),ue(),de()}window.scrollTo=function(e){document.getElementById(e)?.scrollIntoView({behavior:`smooth`})};function se(){document.getElementById(`mobileMenu`)?.classList.remove(`open`),document.getElementById(`mobileOverlay`)?.classList.remove(`open`),document.getElementById(`navToggle`)?.classList.remove(`open`),document.body.style.overflow=``}window.closeMob=se;function ce(){let e=document.getElementById(`mainNav`),t=document.querySelector(`.topbar`);window.addEventListener(`scroll`,()=>{let n=window.scrollY>60;e?.classList.toggle(`scrolled`,n),t?.classList.toggle(`hidden`,n)});let n=document.getElementById(`navToggle`),r=document.getElementById(`mobileMenu`),i=document.getElementById(`mobileOverlay`);n?.addEventListener(`click`,()=>{let e=!r.classList.contains(`open`);r.classList.toggle(`open`,e),i.classList.toggle(`open`,e),n.classList.toggle(`open`,e),document.body.style.overflow=e?`hidden`:``,n.setAttribute(`aria-expanded`,String(e)),r.setAttribute(`aria-hidden`,String(!e))}),i?.addEventListener(`click`,se)}function le(){document.querySelectorAll(`.tab`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.tab`).forEach(e=>e.classList.remove(`active`)),document.querySelectorAll(`.tab-panel`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),document.querySelector(`.tab-panel[data-panel="${e.dataset.tab}"]`)?.classList.add(`active`)})})}function ue(){let e=new IntersectionObserver(t=>{t.forEach(t=>{if(!t.isIntersecting)return;let n=t.target,r=parseInt(n.dataset.count),i=0,a=Math.max(1,r/120),o=setInterval(()=>{i+=a,i>=r&&(i=r,clearInterval(o)),n.textContent=Math.floor(i).toLocaleString(`id-ID`)},16);e.unobserve(n)})},{threshold:.5});document.querySelectorAll(`[data-count]`).forEach(t=>e.observe(t))}function de(){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`visible`)})},{threshold:.08,rootMargin:`0px 0px -40px 0px`});document.querySelectorAll(`.reveal`).forEach(t=>e.observe(t))}function fe(e){e.innerHTML=`
    <div class="login-page">
      <div class="login-bg" aria-hidden="true">
        <div class="login-bg-pattern"></div>
      </div>
      
      <div class="login-container">
        <!-- Left Side - Branding -->
        <div class="login-branding" aria-hidden="true">
          <div class="login-branding-content">
            <div class="login-logo-wrapper">
              <img src="/assets/images/logo.png" alt="Logo STIA" class="login-logo" onerror="this.style.display='none'">
            </div>
            <h1>${s.name}</h1>
            <p class="login-branding-subtitle">${s.fullName}</p>
            <p class="login-branding-desc">Portal Akademik Terpadu — SIAKAD & E-Learning</p>
            
            <div class="login-features">
              <div class="login-feature">
                <span class="login-feature-icon">📊</span>
                <div>
                  <strong>SIAKAD</strong>
                  <span>KRS, KHS, Jadwal, Nilai</span>
                </div>
              </div>
              <div class="login-feature">
                <span class="login-feature-icon">📚</span>
                <div>
                  <strong>E-Learning</strong>
                  <span>Materi, Tugas, Quiz, Forum</span>
                </div>
              </div>
              <div class="login-feature">
                <span class="login-feature-icon">👨‍🎓</span>
                <div>
                  <strong>Multi Role</strong>
                  <span>Mahasiswa, Dosen, Kaprodi, BAP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Login Form -->
        <div class="login-form-side">
          <div class="login-form-wrapper">
            <div class="login-form-header">
              <h2>Selamat Datang 👋</h2>
              <p>Silakan login untuk mengakses portal akademik</p>
            </div>

            <form id="loginForm" class="login-form" onsubmit="return false;">
              <div class="form-group">
                <label class="form-label" for="loginRole">Masuk Sebagai</label>
                <div class="role-selector" id="roleSelector" role="radiogroup" aria-label="Pilih role login">
                  <button type="button" class="role-option active" data-role="mahasiswa" role="radio" aria-checked="true" aria-label="Login sebagai Mahasiswa">
                    <span class="role-option-icon" aria-hidden="true">👨‍🎓</span>
                    <span class="role-option-label">Mahasiswa</span>
                  </button>
                  <button type="button" class="role-option" data-role="dosen" role="radio" aria-checked="false" aria-label="Login sebagai Dosen">
                    <span class="role-option-icon" aria-hidden="true">👨‍🏫</span>
                    <span class="role-option-label">Dosen</span>
                  </button>
                  <button type="button" class="role-option" data-role="kaprodi" role="radio" aria-checked="false" aria-label="Login sebagai Kaprodi">
                    <span class="role-option-icon" aria-hidden="true">🎓</span>
                    <span class="role-option-label">Kaprodi</span>
                  </button>
                  <button type="button" class="role-option" data-role="bap" role="radio" aria-checked="false" aria-label="Login sebagai BAP">
                    <span class="role-option-icon" aria-hidden="true">🏛️</span>
                    <span class="role-option-label">BAP</span>
                  </button>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="loginId">
                  <span id="loginIdLabel">NIM</span>
                </label>
                <div class="input-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <input type="text" id="loginId" class="form-input" placeholder="Masukkan NIM / NIP" autocomplete="off" aria-required="true" aria-describedby="loginIdHint">
                  <span id="loginIdHint" class="sr-only">Masukkan NIM untuk mahasiswa atau NIP untuk dosen/staff</span>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="loginPassword">Password</label>
                <div class="input-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <input type="password" id="loginPassword" class="form-input" placeholder="Masukkan password" aria-required="false">
                  <button type="button" class="password-toggle" id="passwordToggle" title="Tampilkan password" aria-label="Tampilkan/sembunyikan password" aria-pressed="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  </button>
                </div>
              </div>

              <div class="login-options">
                <label class="checkbox-label">
                  <input type="checkbox" id="rememberMe">
                  <span class="checkmark"></span>
                  Ingat saya
                </label>
                <a href="#" class="forgot-link">Lupa Password?</a>
              </div>

              <button type="submit" class="btn btn-primary btn-lg login-submit-btn" id="loginBtn" aria-label="Masuk ke portal akademik">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                Masuk
              </button>

              <div class="login-demo-hint" role="note">
                <p><span aria-hidden="true">💡</span> <strong>Demo Mode:</strong> Klik role di atas, lalu klik Masuk — tidak perlu password.</p>
              </div>
            </form>

            <div class="login-footer">
              <a href="#/">← Kembali ke Beranda</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,pe()}function pe(){let e=`mahasiswa`,t=document.querySelectorAll(`.role-option`),n=document.getElementById(`loginIdLabel`),r=document.getElementById(`loginId`);t.forEach(i=>{i.addEventListener(`click`,()=>{t.forEach(e=>{e.classList.remove(`active`),e.setAttribute(`aria-checked`,`false`)}),i.classList.add(`active`),i.setAttribute(`aria-checked`,`true`),e=i.dataset.role;let a={mahasiswa:{label:`NIM`,placeholder:`Masukkan NIM`,value:`2024101001`},dosen:{label:`NIP`,placeholder:`Masukkan NIP`,value:l.length>0?l[0].nip:``},kaprodi:{label:`NIP`,placeholder:`Masukkan NIP`,value:`197809152005011001`},bap:{label:`NIP`,placeholder:`Masukkan NIP`,value:`198203202008012001`}}[e];n.textContent=a.label,r.placeholder=a.placeholder,r.value=a.value})});let a=document.getElementById(`passwordToggle`),o=document.getElementById(`loginPassword`);a?.addEventListener(`click`,()=>{let e=o.type===`password`;o.type=e?`text`:`password`,a.setAttribute(`aria-pressed`,String(e)),a.setAttribute(`aria-label`,e?`Sembunyikan password`:`Tampilkan password`)});let s=document.getElementById(`loginForm`),c=document.getElementById(`loginBtn`);s?.addEventListener(`submit`,t=>{t.preventDefault(),c.innerHTML=`
      <span class="spinner"></span> Memproses...
    `,c.disabled=!0,setTimeout(()=>{let t;if(e===`dosen`){let e=r.value.trim(),n=l.find(t=>t.nip===e)||l[0];t={id:n.id,nip:n.nip,nama:n.nama,email:n.email,jabatan:n.jabatanFungsional,totalMK:n.totalMK,totalMahasiswa:n.totalMahasiswaBimbingan,avatar:n.avatar,role:`dosen`}}else t=d[e];Wn(t),i(`#/portal`)},800)}),r.value=`2024101001`}var me=`http://localhost:8080/api`;async function he(e,t){try{let n=new AbortController,r=setTimeout(()=>n.abort(),3e3),i=await fetch(`${me}${e}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t),signal:n.signal});if(clearTimeout(r),!i.ok)throw Error(`HTTP ${i.status}`);return await i.json()}catch(t){return console.error(`API POST ${e} failed:`,t),null}}async function ge(e){return he(`/dosen/absensi/bulk`,{items:e})}async function _e(e){return he(`/dosen/nilai/bulk`,{items:e})}function ve(){if(window.JADWAL_DUMMY&&window.JADWAL_DUMMY.length>0)return;let e=[`Senin`,`Selasa`,`Rabu`,`Kamis`,`Jumat`,`Sabtu`],t=[{mulai:`07:30`,selesai:`09:10`},{mulai:`09:20`,selesai:`11:00`},{mulai:`11:10`,selesai:`12:50`},{mulai:`13:00`,selesai:`14:40`},{mulai:`14:50`,selesai:`16:30`}],n=[`RN-101`,`RN-102`,`RN-103`,`RN-104`,`RN-105`],r=[`RA-201`,`RA-202`,`RA-203`,`RA-204`,`RA-205`],i=[`LAB-K1`,`LAB-K2`],a=[`MDK 121`,`MDK 220`,`MDK 200`,`ANA 154`],o=[`ANA 140`,`MDK 135`,`MDK 124`,`MDK 127`,`ANA 147`,`ANA 159`,`ANA 160`,`MDK 129`],s=[`ANI 131`,`ANI 132`,`ANI 249`,`MDK 220`,`ANA 154`],c=[`ANI 180`,`ANA 180`,`MDK 129`];window.JADWAL_DUMMY=[];let l=1;[`niaga`,`negara`].forEach(u=>{let d=w[u];if(!d)return;let f=u===`niaga`?n:r,p=0,m=0,h=0;d.semester.forEach(n=>{let r=n.no<=2?`A`:n.no<=4?`B`:n.no<=6?`C`:`D`;n.mk.forEach(d=>{if(c.includes(d.kode))return;let g=a.includes(d.kode),_=o.includes(d.kode),v=s.includes(d.kode),y=g?`Online`:_?`Hybrid`:`Offline`,b;b=g?`—`:v?i[h%i.length]:f[h%f.length];let x=d.dosen===`-`?`-`:d.dosen;JADWAL_DUMMY.push({id:l++,prodi:u,semester:n.no,kodeMK:d.kode,namaMK:d.nama,dosen:x,hari:e[p%e.length],jamMulai:t[m%t.length].mulai,jamSelesai:t[m%t.length].selesai,ruang:b,tipeKelas:y,kelas:r,sks:d.sks,modePertemuan:Array.from({length:14},(e,t)=>g?`online`:_?t%2==0?`offline`:`online`:[3,6,10].includes(t)?`online`:`offline`)}),m++,m%t.length===0&&p++,h++})})})}ve();async function ye(){try{let e=await fetch(`/api/jadwal-pertemuan/all`);if(!e.ok)return;let t=await e.json();if(!t.data||t.data.length===0)return;t.data.forEach(e=>{let t=e.kode_mk||e.mata_kuliah?.kode||``;if(!t)return;let n=JADWAL_DUMMY.find(n=>(n.kodeMK===t||n.kodeMK.replace(/\s+/g,``)===t.replace(/\s+/g,``))&&n.kelas===(e.kelas||`B`))||JADWAL_DUMMY.find(e=>e.kodeMK===t||e.kodeMK.replace(/\s+/g,``)===t.replace(/\s+/g,``));if(!n)return;let r=e.pertemuan-1;r<0||r>=14||(e.mode&&(n.modePertemuan[r]=e.mode),n.customSchedule||={},n.customSchedule[r]={date:e.tanggal,start:e.jam_mulai,end:e.jam_selesai,note:e.catatan||``,mode:e.mode||`offline`})}),console.log(`✅ Loaded ${t.data.length} saved jadwal pertemuan from database`)}catch(e){console.warn(`⚠️ Could not load saved jadwal from backend:`,e.message)}}ye();var F={home:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,book:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,calendar:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,clipboard:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,users:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,award:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,settings:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,logOut:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,bell:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,search:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,menu:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,monitor:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,clock:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,trendUp:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,fileText:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,barChart:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,checkCircle:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,shield:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,userPlus:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`,graduationCap:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`},be={mahasiswa:[{label:`SIAKAD`,items:[{icon:F.home,text:`Dashboard`,id:`home`,active:!0},{icon:F.clipboard,text:`KRS`,id:`krs`},{icon:F.award,text:`KHS`,id:`khs`},{icon:F.calendar,text:`Jadwal Kuliah`,id:`jadwal`},{icon:F.checkCircle,text:`Absensi`,id:`absensi`},{icon:F.barChart,text:`Nilai`,id:`nilai`}]},{label:`Lainnya`,items:[{icon:F.fileText,text:`Evaluasi Kuliah`,id:`evaluasi`},{icon:F.trendUp,text:`Perkembangan`,id:`perkembangan`},{icon:F.users,text:`Profil Saya`,id:`data`}]}],dosen:[{label:`SIAKAD`,items:[{icon:F.home,text:`Dashboard`,id:`home`,active:!0},{icon:F.calendar,text:`Jadwal Mengajar`,id:`jadwal-dosen`},{icon:F.barChart,text:`Rekap Nilai`,id:`rekap-nilai`}]},{label:`Lainnya`,items:[{icon:F.fileText,text:`Bimbingan PA`,id:`bimbingan`},{icon:F.users,text:`Profil Saya`,id:`profil-dosen`}]}],kaprodi:[{label:`SIAKAD`,items:[{icon:F.home,text:`Dashboard`,id:`home`,active:!0},{icon:F.users,text:`Data Mahasiswa`,id:`mahasiswa`},{icon:F.users,text:`Data Dosen`,id:`dosen`},{icon:F.barChart,text:`Statistik Prodi`,id:`statistik`}]},{label:`Akademik`,items:[{icon:F.clipboard,text:`Kurikulum`,id:`kurikulum`},{icon:F.fileText,text:`Akreditasi`,id:`akreditasi`},{icon:F.checkCircle,text:`Persetujuan KRS`,id:`approval`}]}],bap:[{label:`SIAKAD`,items:[{icon:F.home,text:`Dashboard`,id:`home`,active:!0},{icon:F.userPlus,text:`Manajemen PMB`,id:`pmb`},{icon:F.graduationCap,text:`Data Mahasiswa`,id:`mahasiswa`},{icon:F.users,text:`Data Dosen`,id:`dosen`},{icon:F.barChart,text:`Statistik Akademik`,id:`statistik`},{icon:F.clipboard,text:`Transkrip`,id:`transkrip`},{icon:F.fileText,text:`Kurikulum`,id:`kurikulum`}]},{label:`Administrasi`,items:[{icon:F.calendar,text:`Manajemen Jadwal`,id:`jadwal-manage`},{icon:F.checkCircle,text:`Validasi KRS`,id:`validasi-krs`},{icon:F.checkCircle,text:`Rekap Absensi`,id:`rekap-absensi`},{icon:F.fileText,text:`Surat Menyurat`,id:`surat`},{icon:F.calendar,text:`Kalender Akademik`,id:`kalender`},{icon:F.award,text:`Wisuda`,id:`wisuda`},{icon:F.users,text:`Bimbingan PA`,id:`bimbingan-pa`},{icon:`⚙️`,text:`Setting PMB`,id:`setting-pmb`}]}]};function xe(){let e=new Date().getHours();return e<12?`Selamat Pagi`:e<15?`Selamat Siang`:e<18?`Selamat Sore`:`Selamat Malam`}var Se={mahasiswa:`Mahasiswa`,dosen:`Dosen`,kaprodi:`Kaprodi`,bap:`BAP`};function Ce(e){let t=be[e.role]||be.mahasiswa;return`
  <aside class="dash-sidebar" id="dashSidebar" role="navigation" aria-label="Menu navigasi SIAKAD">
    <a href="#/portal" class="sidebar-brand" aria-label="Kembali ke Portal STIA Bayuangga">
      <img src="/assets/images/logo.png" alt="Logo STIA Bayuangga" class="sidebar-brand-logo">
      <div>
        <div class="sidebar-brand-name">SIAKAD</div>
        <div class="sidebar-brand-sub">STIA Bayuangga</div>
      </div>
    </a>
    <div class="sidebar-user" role="status" aria-label="Informasi pengguna aktif">
      <div class="sidebar-avatar" role="img" aria-label="Avatar ${e.nama}">${S(e.nama)}</div>
      <div>
        <div class="sidebar-user-name">${e.nama}</div>
        <div class="sidebar-user-role">${Se[e.role]}${e.nim?` — `+e.nim:``}</div>
      </div>
    </div>
    ${t.map(e=>`
      <span class="sidebar-label" id="nav-${e.label.toLowerCase()}">${e.label}</span>
      <nav class="sidebar-nav" aria-labelledby="nav-${e.label.toLowerCase()}">
        ${e.items.map(e=>`
          <a class="sidebar-link${e.active?` active`:``}" href="#" data-page="${e.id}"
             aria-label="${e.text}${e.badge?` (${e.badge} baru)`:``}"
             ${e.active?`aria-current="page"`:``}
             role="menuitem" tabindex="0">
            ${e.icon}<span>${e.text}</span>
            ${e.badge?`<span class="sidebar-badge" aria-hidden="true">${e.badge}</span>`:``}
          </a>
        `).join(``)}
      </nav>
    `).join(``)}
    <div class="sidebar-footer">
      <nav class="sidebar-nav" aria-label="Menu sekunder">
        <a class="sidebar-link" href="#/portal" aria-label="Kembali ke Portal">${F.home}<span>Kembali Portal</span></a>
        <a class="sidebar-link" href="#" data-page="settings" aria-label="Pengaturan" role="menuitem" tabindex="0">${F.settings}<span>Pengaturan</span></a>
        <button class="sidebar-link" id="logoutBtn" aria-label="Keluar dari sistem">${F.logOut}<span>Keluar</span></button>
      </nav>
    </div>
  </aside>`}function we(e){return`
  <header class="dash-topbar" role="banner" aria-label="Header SIAKAD">
    <div class="dash-topbar-left">
      <button class="dash-hamburger" id="dashHamburger" aria-label="Buka/tutup menu navigasi" aria-expanded="false" aria-controls="dashSidebar">${F.menu}</button>
      <div>
        <h1>${xe()}, ${e.nama.split(` `)[0]}!</h1>
        <p>Semester Genap ${new Date().getFullYear()} — ${Se[e.role]}</p>
      </div>
    </div>
    <div class="dash-topbar-right">
      <button class="topbar-icon-btn" aria-label="Cari">${F.search}</button>
      <button class="topbar-icon-btn" aria-label="Notifikasi">${F.bell}<span class="notif-dot" aria-hidden="true"></span></button>
    </div>
  </header>`}function Te(e){p.reduce((e,t)=>e+t.sks,0);let t=[`Minggu`,`Senin`,`Selasa`,`Rabu`,`Kamis`,`Jumat`,`Sabtu`][new Date().getDay()],n=T.mataKuliah.filter(e=>e.waktu.startsWith(t)).map(e=>({jam:e.waktu.split(`, `)[1]||e.waktu,mk:e.nama,ruang:e.ruang||`TBA`,dosen:e.dosen})),r=x.filter(e=>e.status===`Belum`);return`
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${F.trendUp}</div>
        <div class="stat-info">
          <div class="stat-label">IPK</div>
          <div class="stat-value">${e.ipk}</div>
          <div class="stat-sub">dari 4.00</div>
        </div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${F.book}</div>
        <div class="stat-info">
          <div class="stat-label">Total SKS</div>
          <div class="stat-value">${e.totalSks}</div>
          <div class="stat-sub">${e.maxSks} SKS total</div>
        </div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${F.checkCircle}</div>
        <div class="stat-info">
          <div class="stat-label">Semester</div>
          <div class="stat-value">${e.semester}</div>
          <div class="stat-sub">${e.prodi}</div>
        </div>
      </div>
      <div class="stat-box">
        <div class="stat-icon purple">${F.clipboard}</div>
        <div class="stat-info">
          <div class="stat-label">Tugas Pending</div>
          <div class="stat-value">${r.length}</div>
          <div class="stat-sub">perlu dikerjakan</div>
        </div>
      </div>
    </div>

    <div class="dash-grid">
      <div>
        <!-- IPK & Progress -->
        <div class="dash-card">
          <div class="dash-card-head"><h3>Progress Studi</h3></div>
          <div class="dash-card-body">
            <div class="gpa-display">
              <div class="gpa-circle" style="--pct: ${(e.ipk/4*100).toFixed(0)}">
                <span class="gpa-num">${e.ipk}</span>
              </div>
              <div class="gpa-label">Indeks Prestasi Kumulatif</div>
            </div>
            <div style="margin-top:16px;">
              <div style="display:flex;justify-content:space-between;font-size:0.78rem;color:hsl(215 15% 55%);margin-bottom:6px;">
                <span>Progress SKS</span><span>${e.totalSks} / ${e.maxSks}</span>
              </div>
              <div class="progress-wrap"><div class="progress-bar" style="width:${(e.totalSks/e.maxSks*100).toFixed(0)}%"></div></div>
            </div>
          </div>
        </div>

        <!-- Jadwal Hari Ini — derived from KRS -->
        <div class="dash-card">
          <div class="dash-card-head"><h3>Jadwal Hari Ini</h3></div>
          <div class="dash-card-body">
            ${n.length?`
              <table class="sch-table">
                <thead><tr><th>Jam</th><th>Mata Kuliah</th><th>Ruang</th><th>Dosen</th></tr></thead>
                <tbody>
                  ${n.map(e=>`<tr>
                    <td class="sch-time">${e.jam}</td>
                    <td><strong>${e.mk}</strong></td>
                    <td>${e.ruang}</td>
                    <td>${e.dosen}</td>
                  </tr>`).join(``)}
                </tbody>
              </table>
            `:`<p style="color:hsl(215 15% 55%);font-size:0.88rem;text-align:center;padding:20px 0;">Tidak ada jadwal hari ini 🎉</p>`}
          </div>
        </div>
      </div>

      <div>
        <!-- Tugas -->
        <div class="dash-card">
          <div class="dash-card-head"><h3>Tugas Mendatang</h3></div>
          <div class="dash-card-body">
            ${x.map(e=>{let t=C(e.deadline);return`<div class="task-item">
                <span class="task-dot ${e.status===`Sudah`?`success`:t.class}"></span>
                <div class="task-body">
                  <h4>${e.judul}</h4>
                  <p>${e.kelas} — ${e.type}</p>
                  <div class="task-meta">
                    <span>${F.clock} ${t.text}</span>
                    <span class="badge-sm ${e.status===`Sudah`?`success`:t.class}">${e.status===`Sudah`?`Selesai`:`Belum`}</span>
                  </div>
                </div>
              </div>`}).join(``)}
          </div>
        </div>

        <!-- Nilai Semester -->
        <div class="dash-card">
          <div class="dash-card-head"><h3>Nilai Semester Ini</h3></div>
          <div class="dash-card-body">
            <table class="sch-table">
              <thead><tr><th>Mata Kuliah</th><th>SKS</th><th>Nilai</th><th>Bobot</th></tr></thead>
              <tbody>
                ${p.slice(0,5).map(e=>`<tr>
                  <td><strong>${e.nama}</strong></td>
                  <td>${e.sks}</td>
                  <td><span class="badge-sm ${e.nilai.startsWith(`A`)?`success`:e.nilai.startsWith(`B`)?`blue`:`warning`}">${e.nilai}</span></td>
                  <td>${e.bobot}</td>
                </tr>`).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`}function I(e){return`
    <div class="dash-card" style="margin-bottom:20px;">
      <div style="padding:20px;display:flex;flex-wrap:wrap;gap:24px;background:linear-gradient(135deg,hsl(152 60% 96%),hsl(180 40% 96%));border-radius:12px;">
        <div style="flex:1;min-width:200px;">
          <div style="font-size:0.72rem;color:hsl(215 15% 55%);font-weight:600;margin-bottom:2px;">Mahasiswa</div>
          <div style="font-size:0.95rem;font-weight:700;">${e.nim} — ${e.nama}</div>
          <div style="margin-top:8px;display:grid;grid-template-columns:auto 1fr;gap:2px 12px;font-size:0.78rem;">
            <span style="font-weight:600;">Fakultas</span><span>: Ilmu Administrasi</span>
            <span style="font-weight:600;">Jurusan</span><span>: ${e.prodi}</span>
            <span style="font-weight:600;">Semester</span><span>: ${e.semester}</span>
            <span style="font-weight:600;">Basis</span><span>: ${T.basis}</span>
          </div>
        </div>
        <div style="flex:1;min-width:200px;">
          <div style="display:grid;grid-template-columns:auto 1fr;gap:2px 12px;font-size:0.78rem;margin-top:20px;">
            <span style="font-weight:600;">Dosen PA</span><span>: ${T.dosenPA}</span>
            <span style="font-weight:600;">NIP Dosen</span><span>: ${T.nipDosenPA}</span>
            <span style="font-weight:600;">Periode Masuk</span><span>: ${T.periodeMasuk}</span>
          </div>
        </div>
      </div>
    </div>`}function Ee(e){let t=T.mataKuliah.reduce((e,t)=>e+t.sks,0);return I(e)+`
    ${T.statusKRS===`Divalidasi`?`
      <div style="background:hsl(0 70% 95%);border:1px solid hsl(0 50% 85%);border-radius:10px;padding:14px 18px;margin-bottom:18px;text-align:center;">
        <div style="font-size:0.82rem;font-weight:600;color:hsl(0 60% 40%);">KRS telah divalidasi oleh ${T.validatedBy} pada tanggal ${T.validatedAt}</div>
        <div style="font-size:0.72rem;color:hsl(0 40% 50%);margin-top:4px;">Untuk membuka validasi/kunci silahkan hubungi Dosen PA (Pembimbing Akademik) / Ka Prodi</div>
      </div>`:``}
    <div class="dash-card">
      <div class="dash-card-head" style="background:linear-gradient(135deg,hsl(200 60% 25%),hsl(180 50% 35%));color:white;border-radius:10px 10px 0 0;padding:12px 18px;display:flex;align-items:center;justify-content:space-between;">
        <h3 style="margin:0;font-size:0.9rem;">📋 Kartu Rencana Studi (KRS) — Semester ${T.semester}</h3>
        <button style="background:white;border:none;border-radius:6px;padding:4px 10px;font-size:0.72rem;cursor:pointer;">🖨️ Cetak</button>
      </div>
      <div class="dash-card-body" style="padding:0;">
        <div style="overflow-x:auto;">
          <table class="sch-table" style="width:100%;">
            <thead><tr style="background:hsl(215 20% 95%);">
              <th style="width:40px;">No.</th><th>Kode</th><th>Nama Matakuliah</th><th>Seksi</th><th>SKS</th><th>Waktu</th><th>Dosen</th><th>Jenis Kelas</th>
            </tr></thead>
            <tbody>
              ${T.mataKuliah.map((e,t)=>`<tr>
                <td>${t+1}.</td><td><strong>${e.kode}</strong></td><td>${e.nama}</td><td>${e.seksi}</td>
                <td style="text-align:center;">${e.sks}</td><td style="font-size:0.76rem;">${e.waktu}</td><td style="font-size:0.76rem;">${e.dosen}</td><td>${e.jenisKelas}</td>
              </tr>`).join(``)}
              <tr style="background:hsl(215 20% 95%);font-weight:700;"><td colspan="4" style="text-align:center;">Total SKS</td><td style="text-align:center;">${t}</td><td colspan="3"></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`}function De(e,t){let n=[...new Set(p.map(e=>e.semester))].sort(),r=e.semester||4,i=T.mataKuliah.map(e=>({kode:e.kode,nama:e.nama,sks:e.sks,nilai:`—`,bobot:0,semester:r,kelas:e.seksi,pending:!0})),a=[...new Set([...n,r])].sort(),o=t||a[a.length-1],s=o===r?i:p.filter(e=>e.semester===o),c=s.filter(e=>!e.pending),l=s.reduce((e,t)=>e+t.sks,0),u=c.reduce((e,t)=>e+t.sks*t.bobot,0),d=c.reduce((e,t)=>e+t.sks,0),f=d>0?(u/d).toFixed(2):`—`,m=parseInt(T.periodeMasuk)||2023,h=[],g=new Date().getFullYear();for(let e=m;e<=g;e++)h.push(`${e}`);let _=`${m+Math.floor((o-1)/2)}`,v=o%2==1?`Ganjil`:`Genap`,y=`appearance:none;-webkit-appearance:none;padding:7px 32px 7px 12px;border:1px solid hsl(215 20% 85%);border-radius:8px;font-size:0.8rem;font-weight:600;color:hsl(215 20% 30%);background:white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") no-repeat right 10px center;cursor:pointer;min-width:140px;`,b=s.length===0?`<tr><td colspan="8" style="text-align:center;padding:28px;color:hsl(215 15% 55%);font-size:0.85rem;">Tidak ada data KHS untuk periode ini</td></tr>`:``;return I(e)+`
    <div style="display:flex;gap:12px;margin-bottom:16px;align-items:center;flex-wrap:wrap;">
      <div style="display:flex;align-items:center;gap:6px;">
        <label style="font-size:0.75rem;font-weight:600;color:hsl(215 15% 50%);">Tahun</label>
        <select id="khsTahun" style="${y}">
          ${h.map(e=>`<option value="${e}"${e===_?` selected`:``}>${e}</option>`).join(``)}
        </select>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <label style="font-size:0.75rem;font-weight:600;color:hsl(215 15% 50%);">Semester</label>
        <select id="khsSemester" style="${y}">
          <option value="Ganjil"${v===`Ganjil`?` selected`:``}>Ganjil</option>
          <option value="Genap"${v===`Genap`?` selected`:``}>Genap</option>
        </select>
      </div>
    </div>
    <div class="dash-card">
      <div class="dash-card-head" style="background:linear-gradient(135deg,hsl(200 60% 25%),hsl(180 50% 35%));color:white;border-radius:10px 10px 0 0;padding:12px 18px;display:flex;align-items:center;justify-content:space-between;">
        <h3 style="margin:0;font-size:0.9rem;">✅ Kartu Hasil Studi — ${v} ${_}</h3>
        <button style="background:white;border:none;border-radius:6px;padding:4px 10px;font-size:0.72rem;cursor:pointer;">🖨️ Cetak</button>
      </div>
      <div class="dash-card-body" style="padding:0;">
        <div style="overflow-x:auto;">
          <table class="sch-table" style="width:100%;">
            <thead><tr style="background:hsl(215 20% 95%);">
              <th style="width:40px;">No.</th><th>Kode</th><th>Nama Matakuliah</th><th>Kelas</th><th>SKS</th><th>Nilai</th><th>Lulus</th><th>Detail</th>
            </tr></thead>
            <tbody>
              ${b||s.map((e,t)=>{let n=e.pending,r=n?``:e.nilai.startsWith(`A`)?`success`:e.nilai.startsWith(`B`)?`blue`:`warning`,i=n?`<span style="color:hsl(30 70% 50%);font-size:0.72rem;">Belum</span>`:e.bobot>=2?`L`:`TL`;return`<tr${n?` style="background:hsl(45 80% 97%);"`:``}>
                <td>${t+1}.</td><td><strong>${e.kode}</strong></td><td>${e.nama}${n?` <span style="font-size:0.65rem;color:hsl(30 70% 50%);font-weight:600;">📋 KRS</span>`:``}</td><td>${e.kelas||`EU101`}</td>
                <td style="text-align:center;">${e.sks}</td>
                <td style="text-align:center;">${n?`<span style="color:hsl(215 15% 60%);font-size:0.78rem;">—</span>`:`<span class="badge-sm ${r}">${e.nilai}</span>`}</td>
                <td style="text-align:center;">${i}</td>
                <td style="text-align:center;"><button class="khs-detail-btn" data-kode="${e.kode}" data-nama="${e.nama}" data-nilai="${e.nilai||``}" data-sks="${e.sks}" data-pending="${n}" style="font-size:0.65rem;padding:3px 10px;border-radius:4px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;white-space:nowrap;">📊 Detail</button></td>
              </tr>`}).join(``)}
              ${s.length?`<tr style="background:hsl(215 20% 95%);font-weight:700;"><td colspan="4" style="text-align:center;">Total</td><td style="text-align:center;">${l}</td><td style="text-align:center;">${d>0?u.toFixed(1):`—`}</td><td></td><td></td></tr>`:``}
            </tbody>
          </table>
        </div>
        ${s.length?`<div style="text-align:center;padding:16px;font-weight:700;font-size:1rem;background:hsl(215 20% 97%);border-top:1px solid hsl(215 20% 90%);">
          Indeks Prestasi Semester = ${f}${f===`—`?` <span style="font-size:0.78rem;font-weight:500;color:hsl(215 15% 55%);">(nilai belum diinput dosen)</span>`:``}
        </div>`:``}
      </div>
    </div>
    <div id="khsDetailPanel" style="display:none;margin-top:16px;"></div>

    <div class="dash-card" style="margin-top:20px;">
      <div class="dash-card-head" style="background:linear-gradient(135deg,hsl(200 60% 25%),hsl(180 50% 35%));color:white;border-radius:10px 10px 0 0;padding:12px 18px;">
        <h3 style="margin:0;font-size:0.9rem;">📊 Capaian Akademik Mahasiswa</h3>
      </div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th colspan="2">SKS</th><th rowspan="2" style="vertical-align:middle;">IPK</th></tr>
          <tr style="background:hsl(215 20% 95%);"><th>Jumlah</th><th>Lulus</th></tr></thead>
          <tbody><tr style="text-align:center;font-size:1.1rem;font-weight:600;">
            <td>${e.totalSks+l}</td><td>${e.totalSks}</td><td style="color:hsl(200 70% 40%);">${e.ipk}</td>
          </tr></tbody>
        </table>
      </div>
    </div>`}function Oe(e,t,n){let r=parseInt(T.periodeMasuk)||2023;function i(){let e=document.getElementById(`khsTahun`),t=document.getElementById(`khsSemester`);if(!e||!t)return null;let n=parseInt(e.value)-r;return t.value===`Ganjil`?n*2+1:n*2+2}let a=()=>{let r=i();r&&t&&(t.innerHTML=De(e,r)+n,Oe(e,t,n))},o=document.getElementById(`khsTahun`),s=document.getElementById(`khsSemester`);o&&o.addEventListener(`change`,a),s&&s.addEventListener(`change`,a),document.querySelectorAll(`.khs-detail-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=document.getElementById(`khsDetailPanel`);if(!t)return;let n=e.dataset.kode,r=e.dataset.nama,i=e.dataset.nilai,a=e.dataset.sks,o=e.dataset.pending===`true`,s=0,c=0,l=0,u=0,d=0;if(!o&&i){let e=i===`A`?90:i===`A-`?83:i===`B+`?78:i===`B`?72:i===`B-`?67:i===`C+`?62:i===`C`?57:45;s=Math.min(100,e+Math.floor(Math.random()*8)),c=Math.min(100,e+Math.floor(Math.random()*10)-3),l=Math.min(100,e+Math.floor(Math.random()*10)-5),u=Math.min(100,e+Math.floor(Math.random()*8)-2),d=Math.min(100,e+Math.floor(Math.random()*10)-3)}function f(e){return e>=85?`hsl(150 60% 45%)`:e>=70?`hsl(200 55% 50%)`:e>=55?`hsl(40 80% 50%)`:`hsl(0 55% 52%)`}function p(e,t,n,r){let i=f(n);return`<div style="margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span style="font-size:0.8rem;font-weight:600;">${t} ${e} <span style="font-size:0.68rem;color:hsl(215 15% 55%);">(${r})</span></span>
            <span style="font-size:0.85rem;font-weight:800;color:${i};">${o?`—`:n}</span>
          </div>
          <div style="height:8px;background:hsl(215 20% 92%);border-radius:4px;overflow:hidden;">
            <div style="height:100%;width:${o?0:n}%;background:${i};border-radius:4px;transition:width 0.5s ease;"></div>
          </div>
        </div>`}let m=o?`—`:Math.round(u*.3+d*.4+c*.3),h=o?`hsl(215 15% 60%)`:f(m),g=!o&&i?i.startsWith(`A`)?`hsl(150 60% 45%)`:i.startsWith(`B`)?`hsl(200 55% 50%)`:`hsl(40 80% 50%)`:`hsl(215 15% 60%)`;t.style.display=`block`,t.innerHTML=`
        <div class="dash-card" style="overflow:hidden;border:1px solid hsl(215 20% 88%);">
          <div style="background:linear-gradient(135deg,hsl(210 55% 42%),hsl(200 50% 55%));padding:18px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
            <div>
              <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);">${n} \u00b7 ${a} SKS</div>
              <div style="font-size:1.1rem;font-weight:700;color:white;">\ud83d\udcca Detail Nilai \u2014 ${r}</div>
            </div>
            <div style="display:flex;gap:10px;">
              <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:8px 16px;color:white;text-align:center;backdrop-filter:blur(4px);">
                <div style="font-size:0.55rem;opacity:0.7;">Nilai Akhir</div>
                <div style="font-size:1.2rem;font-weight:800;">${m}</div>
              </div>
              <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:8px 16px;color:white;text-align:center;backdrop-filter:blur(4px);">
                <div style="font-size:0.55rem;opacity:0.7;">Grade</div>
                <div style="font-size:1.2rem;font-weight:800;">${o?`—`:i}</div>
              </div>
            </div>
          </div>
          <div class="dash-card-body" style="padding:20px 24px;">
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px;">
              <div>
                <div style="font-size:0.82rem;font-weight:700;margin-bottom:14px;color:hsl(215 20% 25%);">\ud83d\udccb Komponen Penilaian</div>
                ${p(`Absensi / Kehadiran`,`✅`,s,`10%`)}
                ${p(`Tugas`,`📝`,c,`15%`)}
                ${p(`Quiz`,`❓`,l,`5%`)}
                ${p(`UTS (Ujian Tengah Semester)`,`📖`,u,`30%`)}
                ${p(`UAS (Ujian Akhir Semester)`,`📚`,d,`40%`)}
              </div>
              <div>
                <div style="font-size:0.82rem;font-weight:700;margin-bottom:14px;color:hsl(215 20% 25%);">\ud83d\udcca Ringkasan</div>
                <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
                  <div style="text-align:center;padding:14px;background:hsl(210 50% 96%);border-radius:8px;">
                    <div style="font-size:0.65rem;color:hsl(215 15% 50%);">Nilai Akhir</div>
                    <div style="font-size:1.4rem;font-weight:800;color:${h};">${m}</div>
                  </div>
                  <div style="text-align:center;padding:14px;background:hsl(150 50% 95%);border-radius:8px;">
                    <div style="font-size:0.65rem;color:hsl(150 40% 40%);">Grade</div>
                    <div style="font-size:1.4rem;font-weight:800;color:${g};">${o?`—`:i}</div>
                  </div>
                  <div style="text-align:center;padding:14px;background:hsl(200 50% 95%);border-radius:8px;">
                    <div style="font-size:0.65rem;color:hsl(200 40% 40%);">SKS</div>
                    <div style="font-size:1.4rem;font-weight:800;color:hsl(200 50% 40%);">${a}</div>
                  </div>
                  <div style="text-align:center;padding:14px;background:${o?`hsl(40 50% 95%)`:`hsl(150 50% 95%)`};border-radius:8px;">
                    <div style="font-size:0.65rem;color:hsl(215 15% 50%);">Status</div>
                    <div style="font-size:0.85rem;font-weight:800;color:${o?`hsl(40 80% 45%)`:`hsl(150 60% 40%)`};">${o?`Belum Dinilai`:`Lulus`}</div>
                  </div>
                </div>
                ${o?`<div style="margin-top:14px;padding:12px 16px;background:hsl(45 80% 94%);border-left:4px solid hsl(40 80% 50%);border-radius:0 8px 8px 0;font-size:0.78rem;color:hsl(40 60% 35%);">⚠️ Nilai belum diinput oleh dosen. Komponen penilaian akan muncul setelah dosen menyelesaikan input nilai.</div>`:``}
              </div>
            </div>
            <div style="margin-top:16px;text-align:right;">
              <button id="closeKhsDetail" style="font-size:0.78rem;padding:7px 20px;border-radius:6px;cursor:pointer;background:hsl(215 20% 92%);color:hsl(215 20% 35%);border:1px solid hsl(215 20% 82%);font-weight:600;">\u2716 Tutup</button>
            </div>
          </div>
        </div>`,t.scrollIntoView({behavior:`smooth`,block:`start`}),document.getElementById(`closeKhsDetail`)?.addEventListener(`click`,()=>{t.style.display=`none`,t.innerHTML=``})})})}function ke(e){let t=[`Senin`,`Selasa`,`Rabu`,`Kamis`,`Jumat`,`Sabtu`],n={};t.forEach(e=>{n[e]=[]});let r=(e.prodi||``).toLowerCase().includes(`niaga`)?`niaga`:`negara`,i=e.semester||4;T.mataKuliah.forEach(e=>{let t=JADWAL_DUMMY.find(t=>(t.kodeMK===e.kode||t.kodeMK.replace(/\s+/g,``)===e.kode.replace(/\s+/g,``))&&t.prodi===r&&t.semester===i)||JADWAL_DUMMY.find(t=>t.kodeMK===e.kode||t.kodeMK.replace(/\s+/g,``)===e.kode.replace(/\s+/g,``)),a=t&&t.hari||e.waktu.split(`, `)[0],o=t?t.jamMulai+`-`+t.jamSelesai:e.waktu.split(`, `)[1]||e.waktu,s=t&&t.ruang||e.ruang||`TBA`,c=_(a,14),l=t&&t.modePertemuan||e.modePertemuan||Array(14).fill(`offline`),u=t&&t.customSchedule||{},d=l.filter(e=>e===`online`).length,f=l.filter(e=>e===`offline`).length;n[a]&&n[a].push({kode:e.kode,nama:e.nama,jam:o,seksi:e.seksi,ruang:s,dosen:e.dosen,sks:e.sks,onlineCount:d,offlineCount:f,modes:l,dates:c,customSchedule:u})});function a(e,t){return e.dates.map((t,n)=>{let r=(e.modes[n]||`offline`)===`online`,i=e.customSchedule[n],a=t.getFullYear()+`-`+String(t.getMonth()+1).padStart(2,`0`)+`-`+String(t.getDate()).padStart(2,`0`),o=i&&i.date&&i.date!==a,s=new Date;s.setHours(0,0,0,0);let c=o?new Date(i.date+`T00:00:00`):t,l=c<s,u=c.getDate()===s.getDate()&&c.getMonth()===s.getMonth()&&c.getFullYear()===s.getFullYear(),d=o?`linear-gradient(135deg,hsl(40 65% 92%),hsl(40 60% 88%))`:u?`linear-gradient(135deg,hsl(45 85% 90%),hsl(45 80% 85%))`:r?`linear-gradient(135deg,hsl(150 50% 92%),hsl(150 45% 88%))`:l?`linear-gradient(135deg,hsl(215 15% 95%),hsl(215 12% 92%))`:`linear-gradient(135deg,hsl(210 40% 95%),hsl(210 35% 91%))`,f=o?`hsl(40 65% 65%)`:u?`hsl(45 80% 55%)`:r?`hsl(150 55% 70%)`:l?`hsl(215 15% 85%)`:`hsl(210 40% 82%)`,p=o?`🔄`:r?`🌐`:`🏫`,m=o?`Pengganti`:r?`Online`:`Offline`,h=o?`hsl(40 65% 35%)`:r?`hsl(150 55% 35%)`:l?`hsl(215 10% 55%)`:`hsl(210 45% 40%)`,g=o?`hsl(40 60% 30%)`:r?`hsl(150 50% 32%)`:l?`hsl(215 10% 55%)`:`hsl(210 40% 38%)`,_=i&&i.start?i.start+`-`+i.end:e.jam,b=i&&i.note?i.note:``,x=u?`box-shadow:0 0 0 2px hsl(45 80% 50%);`:``,S=[y(c),r?`Online (E-Learning)`:`Offline (Tatap Muka)`,`Jam: `+_];return o&&S.push(`🔄 Kelas Pengganti`),b&&S.push(`📝 `+b),`<div style="background:${d};border:1px solid ${f};border-radius:8px;padding:5px 3px;text-align:center;position:relative;transition:all 0.2s ease;${x}" title="${S.join(` — `)}">
        <div style="font-size:0.5rem;font-weight:800;color:hsl(210 30% 45%);">P${n+1}</div>
        <div style="font-size:0.6rem;font-weight:700;color:${g};margin:1px 0;">${v(c)}</div>
        <div style="font-size:0.48rem;color:hsl(215 20% 50%);margin-bottom:1px;">${_}</div>
        <div style="font-size:0.65rem;">${p}</div>
        <div style="font-size:0.46rem;font-weight:700;color:${h};margin-top:1px;">${m}</div>
        ${b?`<div style="position:absolute;top:-4px;right:-4px;width:14px;height:14px;border-radius:50%;background:hsl(40 85% 55%);font-size:0.42rem;line-height:14px;color:white;font-weight:800;" title="📝 `+b+`">📝</div>`:``}
      </div>`}).join(``)}let o=Object.values(n).reduce((e,t)=>e+t.length,0);return I(e)+`
    <div class="dash-card">
      <div class="dash-card-head" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <h3 style="margin:0;">📅 Jadwal Perkuliahan — ${T.semester}</h3>
        <div style="display:flex;gap:10px;align-items:center;font-size:0.72rem;flex-wrap:wrap;">
          <span style="display:inline-flex;align-items:center;gap:4px;background:hsl(215 20% 94%);padding:3px 10px;border-radius:12px;font-weight:600;">📚 ${o} MK</span>
          <span style="display:inline-flex;align-items:center;gap:4px;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:hsl(210 55% 50%);"></span> Offline</span>
          <span style="display:inline-flex;align-items:center;gap:4px;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:hsl(150 60% 45%);"></span> Online</span>
          <span style="display:inline-flex;align-items:center;gap:4px;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:hsl(40 85% 55%);"></span> Pengganti</span>
        </div>
      </div>
      <div class="dash-card-body" style="padding:0;">
        ${t.map(e=>n[e].length?`
          <div style="padding:10px 18px 6px;font-weight:700;font-size:0.88rem;background:linear-gradient(135deg,hsl(215 25% 94%),hsl(215 20% 97%));border-bottom:1px solid hsl(215 20% 90%);display:flex;align-items:center;gap:8px;">
            <span style="background:hsl(210 55% 50%);color:white;padding:2px 10px;border-radius:6px;font-size:0.7rem;">${e}</span>
            <span style="font-size:0.68rem;font-weight:400;color:hsl(215 15% 55%);">${n[e].length} mata kuliah</span>
          </div>
          ${n[e].map((t,n)=>{let[r,i]=t.jam.split(`-`),o=`mhs-jadwal-`+e+`-`+n;return`
            <div style="border-bottom:1px solid hsl(215 20% 92%);">
              <div class="mhs-jadwal-row" data-target="${o}" style="display:grid;grid-template-columns:75px 1fr 40px 80px 55px 70px 1fr 32px;align-items:center;padding:10px 18px;gap:8px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='hsl(215 20% 97%)'" onmouseout="this.style.background=''" onclick="const el=document.getElementById('${o}');if(el){el.style.display=el.style.display==='none'?'block':'none';this.querySelector('.expand-icon').textContent=el.style.display==='none'?'▶':'▼'}">
                <span style="font-weight:700;font-size:0.76rem;color:hsl(210 55% 40%);">${t.kode}</span>
                <span style="font-size:0.76rem;font-weight:500;">${t.nama}</span>
                <span style="text-align:center;font-size:0.72rem;">${t.sks}</span>
                <span style="font-size:0.72rem;color:hsl(215 20% 40%);">${r}-${i}</span>
                <span style="font-size:0.68rem;color:hsl(215 15% 50%);">${t.ruang}</span>
                <span style="display:inline-flex;align-items:center;gap:4px;">
                  <span style="background:hsl(210 55% 92%);color:hsl(210 55% 38%);padding:1px 6px;border-radius:6px;font-size:0.58rem;font-weight:700;">🏫${t.offlineCount}</span>
                  ${t.onlineCount>0?`<span style="background:hsl(150 55% 92%);color:hsl(150 55% 35%);padding:1px 6px;border-radius:6px;font-size:0.58rem;font-weight:700;">🌐${t.onlineCount}</span>`:``}
                </span>
                <span style="font-size:0.68rem;color:hsl(215 15% 45%);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${t.dosen}</span>
                <span class="expand-icon" style="font-size:0.6rem;color:hsl(215 20% 55%);text-align:center;">▶</span>
              </div>
              <div id="${o}" style="display:none;padding:8px 18px 14px;background:hsl(215 18% 98%);border-top:1px solid hsl(215 20% 92%);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                  <span style="font-size:0.68rem;font-weight:600;color:hsl(210 30% 45%);">📆 Detail 14 Pertemuan — ${t.kode} ${t.nama}</span>
                  <span style="display:inline-flex;gap:8px;font-size:0.62rem;">
                    <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:8px;height:8px;border-radius:2px;background:hsl(210 55% 50%);display:inline-block;"></span> Offline (🏫 ${t.offlineCount})</span>
                    <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:8px;height:8px;border-radius:2px;background:hsl(150 60% 45%);display:inline-block;"></span> Online (🌐 ${t.onlineCount})</span>
                  </span>
                </div>
                <div style="display:grid;grid-template-columns:repeat(14,1fr);gap:4px;">
                  ${a(t,n)}
                </div>
              </div>
            </div>`}).join(``)}
        `:``).join(``)}
      </div>
    </div>

    <div class="dash-card" style="margin-top:20px;">
      <div class="dash-card-head"><h3>📝 Jadwal UTS / UAS</h3></div>
      <div class="dash-card-body" style="padding:0;">
        <p style="padding:12px 18px 0;font-size:0.76rem;color:hsl(0 60% 45%);margin:0;">*)Pastikan tagihan yang berhubungan dengan ujian telah lunas dan presensi diatas 75%</p>
        ${O.map(e=>`
          <div style="padding:10px 18px 2px;font-weight:700;font-size:0.82rem;background:hsl(215 20% 96%);border-bottom:1px solid hsl(215 20% 90%);">${e.tanggal}</div>
          <div style="overflow-x:auto;">
            <table class="sch-table" style="width:100%;">
              <thead><tr><th>Mulai</th><th>Selesai</th><th>Kode MK</th><th>Mata Kuliah</th><th>Sesi</th><th>Jenis Ujian</th><th>Kelompok</th></tr></thead>
              <tbody><tr><td>${e.mulai}</td><td>${e.selesai}</td><td style="font-weight:600;">${e.kode}</td><td>${e.nama}</td><td>${e.sesi}</td><td><span class="badge-sm ${e.jenis===`UTS`?`warning`:`blue`}">${e.jenis}</span></td><td>${e.kelompok}</td></tr></tbody>
            </table>
          </div>`).join(``)}
      </div>
    </div>`}function Ae(e){let t=e.nim||d.mahasiswa.nim,n=T.mataKuliah.map(e=>{let n=null,r=[];for(let r of ee){let i=r.mahasiswa.find(e=>e.nim===t);if(i&&r.kode.replace(/\s+/g,``)===e.kode.replace(/\s+/g,``)){n=i.kehadiran;break}if(i&&r.nama.toLowerCase()===e.nama.toLowerCase()){n=i.kehadiran;break}}if(n===null){let t=E.find(t=>t.kode===e.kode);n=t?t.presensiMhs:14,r=t&&t.tidakHadirKe!==`-`?t.tidakHadirKe.split(`,`).map(e=>e.trim()):[]}else{let e=Array.from({length:14},(e,t)=>t<n?`✓`:`✗`),i=t;for(let t=e.length-1;t>0;t--){let n=Math.floor((i.charCodeAt(i.length-1)+t)%(t+1));[e[t],e[n]]=[e[n],e[t]]}r=e.map((e,t)=>e===`✗`?(t+1).toString():null).filter(Boolean)}let i=Math.round(n/14*100),a=r.length>0?r.join(`, `):`-`;return{kode:e.kode,nama:e.nama,kelas:e.seksi||`EU101`,jenisKuliah:e.nama.toLowerCase().includes(`sistem informasi`)?`Praktikum`:`Teori`,kel:1,presensiMhs:n,presensiDosen:14,pctPresensi:i,tidakHadirKe:a}});return I(e)+`
    <div class="dash-card">
      <div class="dash-card-head" style="background:linear-gradient(135deg,hsl(200 60% 25%),hsl(180 50% 35%));color:white;border-radius:10px 10px 0 0;padding:12px 18px;">
        <h3 style="margin:0;font-size:0.9rem;">📋 Absensi Mahasiswa</h3>
      </div>
      <div class="dash-card-body" style="padding:0;">
        <div style="overflow-x:auto;">
          <table class="sch-table" style="width:100%;">
            <thead><tr style="background:hsl(215 20% 95%);">
              <th style="width:40px;">No.</th><th>Kode</th><th>Nama Matakuliah</th><th>Kelas</th><th>Jenis Kuliah</th><th>Kel</th><th>Presensi Mhs</th><th>Presensi Dosen</th><th>% Presensi Mhs</th><th>Tidak Hadir Ke</th>
            </tr></thead>
            <tbody>
              ${n.map((e,t)=>`<tr>
                <td>${t+1}.</td><td><strong>${e.kode}</strong></td><td>${e.nama}</td><td>${e.kelas}</td>
                <td>${e.jenisKuliah}</td><td>${e.kel}</td>
                <td style="text-align:center;font-weight:600;">${e.presensiMhs}</td>
                <td style="text-align:center;">${e.presensiDosen}</td>
                <td style="text-align:center;"><span class="badge-sm ${e.pctPresensi>=100?`success`:e.pctPresensi>=85?`blue`:`warning`}">${e.pctPresensi} %</span></td>
                <td style="text-align:center;color:${e.tidakHadirKe===`-`?`hsl(150 60% 40%)`:`hsl(0 60% 50%)`};font-weight:600;">${e.tidakHadirKe}</td>
              </tr>`).join(``)}
            </tbody>
          </table>
        </div>
        <div style="padding:14px 18px;background:hsl(215 20% 97%);border-top:1px solid hsl(215 20% 90%);font-size:0.76rem;">
          <strong>Keterangan:</strong> Presensi mahasiswa dihitung secara real-time dari data kehadiran yang diinput dosen
        </div>
      </div>
    </div>`}function je(e){return I(e)+`
    <div class="dash-card">
      <div class="dash-card-head" style="background:linear-gradient(135deg,hsl(200 60% 25%),hsl(180 50% 35%));color:white;border-radius:10px 10px 0 0;padding:12px 18px;">
        <h3 style="margin:0;font-size:0.9rem;">✅ Evaluasi Pelaksanaan Kuliah</h3>
      </div>
      <div class="dash-card-body" style="padding:0;">
        <div style="overflow-x:auto;">
          <table class="sch-table" style="width:100%;">
            <thead><tr style="background:hsl(215 20% 95%);">
              <th style="width:40px;">No.</th><th>Kode</th><th>Nama Matakuliah</th><th>Kelas</th><th>SKS</th><th>Dosen</th><th>Status</th>
            </tr></thead>
            <tbody>
              ${D.map((e,t)=>`<tr>
                <td>${t+1}.</td><td><strong>${e.kode}</strong></td><td>${e.nama}</td><td>${e.kelas}</td>
                <td style="text-align:center;">${e.sks}</td><td style="font-size:0.78rem;">${e.dosen}</td>
                <td style="text-align:center;">${e.sudahEvaluasi?`<span style="color:hsl(150 70% 35%);font-size:1.1rem;">✅</span>`:`<button class="btn-eval" style="background:hsl(200 70% 50%);color:white;border:none;border-radius:6px;padding:4px 12px;font-size:0.72rem;cursor:pointer;">📝 Isi Evaluasi</button>`}</td>
              </tr>`).join(``)}
            </tbody>
          </table>
        </div>
      </div>
    </div>`}function Me(e){let t=parseInt(T.periodeMasuk)||2023,n=e.semester||4,r=T.mataKuliah.map(e=>({kode:e.kode,nama:e.nama,sks:e.sks,nilai:`—`,bobot:0,semester:n,pending:!0})),i=[...p,...r],a=i.filter(e=>!e.pending),o=i.reduce((e,t)=>e+t.sks,0),s=a.reduce((e,t)=>e+t.sks,0),c=a.reduce((e,t)=>e+t.sks*t.bobot,0),l=s>0?(c/s).toFixed(2):`—`;function u(e){return`${t+Math.floor((e-1)/2)}`}function d(e){let n=t+Math.floor((e-1)/2);return`${e%2==1?`1`:`2`}${n.toString().slice(-2)}${(n+1).toString().slice(-2)}`}return I(e)+`
    <div class="dash-card">
      <div class="dash-card-head" style="background:linear-gradient(135deg,hsl(200 60% 25%),hsl(180 50% 35%));color:white;border-radius:10px 10px 0 0;padding:12px 18px;">
        <h3 style="margin:0;font-size:0.9rem;">📊 Mata Kuliah yang Sudah Diambil</h3>
      </div>
      <div class="dash-card-body" style="padding:0;">
        <div style="overflow-x:auto;">
          <table class="sch-table" style="width:100%;">
            <thead><tr style="background:hsl(215 20% 95%);">
              <th>No.</th><th>Kurikulum</th><th>Kode</th><th>Nama MataKuliah</th><th>Nilai</th><th>SKS</th><th>NK</th><th>SMT</th>
            </tr></thead>
            <tbody>
              ${i.map((e,t)=>{let n=e.pending,r=n?`—`:(e.sks*e.bobot).toFixed(1),i=n?``:e.nilai.startsWith(`A`)?`success`:e.nilai.startsWith(`B`)?`blue`:`warning`;return`<tr${n?` style="background:hsl(45 80% 97%);"`:``}>
                  <td>${t+1}.</td><td>${u(e.semester)}</td><td><strong>${e.kode}</strong></td><td>${e.nama}${n?` <span style="font-size:0.65rem;color:hsl(30 70% 50%);font-weight:600;">📋 KRS</span>`:``}</td>
                  <td style="text-align:center;">${n?`<span style="color:hsl(215 15% 60%);">—</span>`:`<span class="badge-sm ${i}">${e.nilai}</span>`}</td>
                  <td style="text-align:center;">${e.sks}</td><td style="text-align:center;">${r}</td><td>${d(e.semester)}</td>
                </tr>`}).join(``)}
              <tr style="background:hsl(215 20% 95%);font-weight:700;text-align:center;"><td colspan="4">J U M L A H</td><td></td><td>${o}</td><td>${c.toFixed(1)}</td><td></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="dash-card" style="margin-top:20px;">
      <div class="dash-card-head" style="background:linear-gradient(135deg,hsl(200 60% 25%),hsl(180 50% 35%));color:white;border-radius:10px 10px 0 0;padding:12px 18px;">
        <h3 style="margin:0;font-size:0.9rem;">🎓 Capaian Akademik Mahasiswa</h3>
      </div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th colspan="2">SKS</th><th rowspan="2" style="vertical-align:middle;">IPK</th></tr>
          <tr style="background:hsl(215 20% 95%);"><th>Jumlah</th><th>Lulus</th></tr></thead>
          <tbody><tr style="text-align:center;font-size:1.2rem;font-weight:700;">
            <td>${o}</td><td>${s}</td><td style="color:hsl(200 70% 40%);">${l}</td>
          </tr></tbody>
        </table>
      </div>
    </div>`}function Ne(e){let t=[...new Set(p.map(e=>e.semester))].sort(),n=t.map(e=>{let t=p.filter(t=>t.semester===e),n=t.reduce((e,t)=>e+t.sks,0);return{sem:e,sks:n,ips:(t.reduce((e,t)=>e+t.sks*t.bobot,0)/n).toFixed(2),count:t.length}}),r=p.reduce((e,t)=>e+t.sks,0),i=(p.reduce((e,t)=>e+t.sks*t.bobot,0)/r).toFixed(2),a={};p.forEach(e=>{a[e.nilai]=(a[e.nilai]||0)+1});let o=[],s=0,c=0;t.forEach(e=>{let t=p.filter(t=>t.semester===e);s+=t.reduce((e,t)=>e+t.sks,0),c+=t.reduce((e,t)=>e+t.sks*t.bobot,0),o.push((c/s).toFixed(2))});function l(e,t,n,r,i,a){let o={t:25,r:25,b:40,l:40},s=340-o.l-o.r,c=200-o.t-o.b,l=n.length,u=n.map((e,t)=>({x:o.l+(l>1?t/(l-1)*s:s/2),y:o.t+c-parseFloat(e)/r*c,v:e})),d=u.map((e,t)=>`${t===0?`M`:`L`}${e.x.toFixed(1)},${e.y.toFixed(1)}`).join(` `),f=[0,r*.25,r*.5,r*.75,r].map(e=>{let t=o.t+c-e/r*c;return`<line x1="${o.l}" y1="${t}" x2="${340-o.r}" y2="${t}" stroke="hsl(215 20% 88%)" stroke-width="0.5"/>
              <text x="${o.l-6}" y="${t+3}" text-anchor="end" fill="hsl(215 15% 55%)" font-size="9">${Number.isInteger(e)?e:e.toFixed(1)}</text>`}).join(``),p=u.map((e,t)=>`<text x="${e.x}" y="192" text-anchor="middle" fill="hsl(215 15% 55%)" font-size="9">${t+1}</text>`).join(``),m=u.map(e=>`<circle cx="${e.x}" cy="${e.y}" r="4" fill="${i}" stroke="white" stroke-width="2"/>
      <text x="${e.x}" y="${e.y-10}" text-anchor="middle" fill="hsl(215 15% 35%)" font-size="9.5" font-weight="600">${e.v}</text>`).join(``),h=`M${u[0].x},${o.t+c} ${d.replace(`M`,``)} L${u[u.length-1].x},${o.t+c} Z`;return`
      <div class="dash-card" style="flex:1;min-width:280px;">
        <div class="dash-card-head" style="display:flex;justify-content:space-between;align-items:center;">
          <h3 style="margin:0;font-size:0.88rem;">${e}</h3>
        </div>
        <div class="dash-card-body" style="padding:12px;">
          <svg viewBox="0 0 340 200" style="width:100%;height:auto;" id="${a}">
            ${f}
            <line x1="${o.l}" y1="${o.t}" x2="${o.l}" y2="${o.t+c}" stroke="hsl(215 20% 85%)" stroke-width="1"/>
            <line x1="${o.l}" y1="${o.t+c}" x2="${340-o.r}" y2="${o.t+c}" stroke="hsl(215 20% 85%)" stroke-width="1"/>
            <path d="${h}" fill="${i}" opacity="0.08"/>
            <path d="${d}" fill="none" stroke="${i}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            ${m}
            ${p}
            <text x="${o.l+s/2}" y="200" text-anchor="middle" fill="hsl(215 15% 50%)" font-size="10" font-weight="600">Semester</text>
            <text x="8" y="${o.t+c/2}" text-anchor="middle" fill="hsl(215 15% 50%)" font-size="10" font-weight="600" transform="rotate(-90, 8, ${o.t+c/2})">${t}</text>
          </svg>
        </div>
      </div>`}function u(e,t,n,r,i,a){let o={t:25,r:20,b:40,l:40},s=340-o.l-o.r,c=200-o.t-o.b,l=n.length,u=Math.min(30,s/l*.6),d=s/l,f=[0,r*.25,r*.5,r*.75,r].map(e=>{let t=o.t+c-e/r*c;return`<line x1="${o.l}" y1="${t}" x2="${340-o.r}" y2="${t}" stroke="hsl(215 20% 88%)" stroke-width="0.5"/>
              <text x="${o.l-6}" y="${t+3}" text-anchor="end" fill="hsl(215 15% 55%)" font-size="9">${Math.round(e)}</text>`}).join(``),p=n.map((e,t)=>{let n=o.l+d*t+d/2-u/2,a=parseInt(e)/r*c,s=o.t+c-a;return`<rect x="${n}" y="${s}" width="${u}" height="${a}" rx="3" fill="${i}" opacity="0.85"/>
              <text x="${n+u/2}" y="${s-6}" text-anchor="middle" fill="hsl(215 15% 35%)" font-size="9.5" font-weight="600">${e}</text>
              <text x="${n+u/2}" y="192" text-anchor="middle" fill="hsl(215 15% 55%)" font-size="9">${t+1}</text>`}).join(``);return`
      <div class="dash-card" style="flex:1;min-width:280px;">
        <div class="dash-card-head"><h3 style="margin:0;font-size:0.88rem;">${e}</h3></div>
        <div class="dash-card-body" style="padding:12px;">
          <svg viewBox="0 0 340 200" style="width:100%;height:auto;" id="${a}">
            ${f}
            <line x1="${o.l}" y1="${o.t}" x2="${o.l}" y2="${o.t+c}" stroke="hsl(215 20% 85%)" stroke-width="1"/>
            <line x1="${o.l}" y1="${o.t+c}" x2="${340-o.r}" y2="${o.t+c}" stroke="hsl(215 20% 85%)" stroke-width="1"/>
            ${p}
            <text x="${o.l+s/2}" y="200" text-anchor="middle" fill="hsl(215 15% 50%)" font-size="10" font-weight="600">Semester</text>
            <text x="8" y="${o.t+c/2}" text-anchor="middle" fill="hsl(215 15% 50%)" font-size="10" font-weight="600" transform="rotate(-90, 8, ${o.t+c/2})">${t}</text>
          </svg>
        </div>
      </div>`}function d(e,t){let n=Object.entries(t).sort((e,t)=>t[1]-e[1]),r=n.reduce((e,[,t])=>e+t,0),i=[`hsl(210 65% 55%)`,`hsl(150 55% 50%)`,`hsl(35 80% 55%)`,`hsl(280 45% 55%)`,`hsl(0 60% 55%)`,`hsl(180 50% 45%)`,`hsl(45 70% 50%)`],a=0;return`
      <div class="dash-card" style="flex:1;min-width:280px;">
        <div class="dash-card-head"><h3 style="margin:0;font-size:0.88rem;">${e}</h3></div>
        <div class="dash-card-body" style="padding:12px;">
          <svg viewBox="0 0 200 200" style="width:100%;max-width:260px;height:auto;margin:0 auto;display:block;">
            ${n.map(([e,t],n)=>{let o=t/r,s=a*2*Math.PI-Math.PI/2;a+=o;let c=a*2*Math.PI-Math.PI/2,l=o>.5?1:0,u=100+70*Math.cos(s),d=100+70*Math.sin(s),f=100+70*Math.cos(c),p=100+70*Math.sin(c),m=100+40*Math.cos(c),h=100+40*Math.sin(c),g=100+40*Math.cos(s),_=100+40*Math.sin(s),v=(s+c)/2,y=100+92*Math.cos(v),b=100+92*Math.sin(v);return`<path d="M${u},${d} A70,70 0 ${l} 1 ${f},${p} L${m},${h} A40,40 0 ${l} 0 ${g},${_} Z" fill="${i[n%i.length]}" stroke="white" stroke-width="1.5"/>
        <text x="${y}" y="${b+4}" text-anchor="middle" fill="hsl(215 15% 35%)" font-size="8" font-weight="600">${e}: ${(o*100).toFixed(1)}%</text>`}).join(``)}
          </svg>
          <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:6px 14px;margin-top:10px;">
            ${n.map(([e,t],n)=>`
              <div style="display:flex;align-items:center;gap:4px;font-size:0.7rem;">
                <span style="width:10px;height:10px;border-radius:2px;background:${i[n%i.length]};display:inline-block;"></span>
                <span>${e} (${t})</span>
              </div>`).join(``)}
          </div>
        </div>
      </div>`}let f=t.length,m=8-f-1,h=(f/8*100).toFixed(0),g=(1/8*100).toFixed(0),_=(m/8*100).toFixed(0);return`
    <!-- Student Profile Card -->
    <div class="dash-card" style="margin-bottom:20px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,hsl(200 55% 30%),hsl(180 45% 40%));padding:24px 28px;display:flex;align-items:center;gap:22px;flex-wrap:wrap;">
        <div style="width:90px;height:90px;border-radius:12px;background:linear-gradient(135deg,hsl(200 40% 60%),hsl(180 40% 70%));border:3px solid rgba(255,255,255,0.4);display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;">
          <span style="font-size:2rem;color:white;font-weight:700;">${S(e.nama)}</span>
        </div>
        <div style="color:white;">
          <div style="font-size:1.15rem;font-weight:700;letter-spacing:0.3px;">${e.nim} — ${e.nama}</div>
          <div style="font-size:0.85rem;opacity:0.85;margin-top:4px;">Ilmu Administrasi / ${e.prodi}</div>
          <div style="font-size:0.82rem;opacity:0.8;margin-top:6px;">Angkatan: 2023, Semester: ${e.semester}</div>
          <div style="display:flex;gap:20px;margin-top:10px;">
            <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;backdrop-filter:blur(4px);">
              <div style="font-size:0.65rem;opacity:0.7;">IPK</div>
              <div style="font-size:1.1rem;font-weight:800;">${i}</div>
            </div>
            <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;backdrop-filter:blur(4px);">
              <div style="font-size:0.65rem;opacity:0.7;">SKS Lulus</div>
              <div style="font-size:1.1rem;font-weight:800;">${r}</div>
            </div>
            <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;backdrop-filter:blur(4px);">
              <div style="font-size:0.65rem;opacity:0.7;">Semester</div>
              <div style="font-size:1.1rem;font-weight:800;">${e.semester} / 8</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Perkuliahan Progress Bar -->
    <div class="dash-card" style="margin-bottom:20px;">
      <div class="dash-card-head"><h3>📘 Perkuliahan Mahasiswa</h3></div>
      <div class="dash-card-body">
        <div style="display:flex;height:32px;border-radius:8px;overflow:hidden;box-shadow:inset 0 1px 3px rgba(0,0,0,0.06);">
          <div style="width:${h}%;background:linear-gradient(90deg,hsl(90 55% 50%),hsl(120 50% 55%));display:flex;align-items:center;justify-content:center;color:white;font-size:0.72rem;font-weight:700;transition:width 0.5s;"></div>
          <div style="width:${g}%;background:linear-gradient(90deg,hsl(30 80% 55%),hsl(35 80% 60%));display:flex;align-items:center;justify-content:center;color:white;font-size:0.72rem;font-weight:700;"></div>
          <div style="width:${_}%;background:linear-gradient(90deg,hsl(220 55% 55%),hsl(220 60% 60%));display:flex;align-items:center;justify-content:center;color:white;font-size:0.72rem;font-weight:700;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:0.68rem;color:hsl(215 15% 55%);">
          ${Array.from({length:9},(e,t)=>`<span>${t}</span>`).join(``)}
        </div>
        <div style="text-align:center;font-size:0.72rem;color:hsl(215 15% 50%);margin-top:6px;font-weight:600;">Semester</div>
        <div style="display:flex;justify-content:center;gap:20px;margin-top:14px;font-size:0.75rem;">
          <div style="display:flex;align-items:center;gap:5px;"><span style="width:14px;height:14px;border-radius:3px;background:hsl(100 55% 50%);display:inline-block;"></span> Sudah diselesaikan</div>
          <div style="display:flex;align-items:center;gap:5px;"><span style="width:14px;height:14px;border-radius:3px;background:hsl(30 80% 55%);display:inline-block;"></span> Sedang ditempuh</div>
          <div style="display:flex;align-items:center;gap:5px;"><span style="width:14px;height:14px;border-radius:3px;background:hsl(220 55% 55%);display:inline-block;"></span> Belum ditempuh</div>
        </div>
      </div>
    </div>

    <!-- Charts Grid -->
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;">
      ${l(`IPK Mahasiswa`,`IPK`,o,4,`hsl(210 60% 50%)`,`chartIPK`)}
      ${l(`IPS Mahasiswa`,`IPS`,n.map(e=>e.ips),4,`hsl(150 55% 45%)`,`chartIPS`)}
      ${u(`SKS Mahasiswa`,`SKS`,n.map(e=>e.sks),30,`hsl(210 55% 50%)`,`chartSKS`)}
      ${d(`Perbandingan Nilai`,a)}
    </div>

    <!-- Mengulang Matakuliah Section -->
    <div class="dash-card" style="margin-top:20px;">
      <div class="dash-card-head" style="background:linear-gradient(135deg,hsl(200 60% 25%),hsl(180 50% 35%));color:white;border-radius:10px 10px 0 0;padding:12px 18px;">
        <h3 style="margin:0;font-size:0.9rem;">🔄 Mengulang Matakuliah</h3>
      </div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>Kode</th><th>Matakuliah</th><th>SKS</th><th>Sem.</th><th>Nilai</th><th>Ulang</th></tr></thead>
          <tbody><tr><td colspan="7" style="text-align:center;padding:20px;color:hsl(215 15% 60%);font-size:0.85rem;">Data kosong</td></tr></tbody>
        </table>
      </div>
    </div>`}function Pe(e){ve();let t=e.nama||``;return JADWAL_DUMMY.filter(e=>!e.dosen||e.dosen===`-`?!1:e.dosen.split(`/`).map(e=>e.trim()).some(e=>e===t)).map(e=>{let t=e.kodeMK.split(``).reduce((e,t)=>e+t.charCodeAt(0),0),n=[`Ahmad Rizky Pratama`,`Siti Nurhaliza`,`Budi Santoso`,`Dewi Lestari`,`Eko Prasetyo`,`Fitri Handayani`,`Gani Setiawan`,`Hana Permata`,`Irfan Hakim`,`Julia Putri`,`Kurniawan`,`Lina Marlina`,`Muhammad Faisal`,`Nadia Rahmawati`,`Rudi Hermawan`,`Yeni Fitriani`,`Farhan Maulana`,`Rizki Amelia`,`Dian Puspita`,`Bayu Nugroho`,`Sari Wulandari`,`Andi Firmansyah`,`Mega Safitri`,`Dimas Nugroho`,`Putri Ayu`],r=5+t%8,i=[];for(let e=0;e<r;e++){let r=(t+e*7)%n.length,a=2024101e3+(t+e*13)%100;i.push({nim:String(a+e),nama:n[r],angkatan:2022+e%3,nilaiUTS:60+(t+e*3)%35,nilaiUAS:60+(t+e*5)%35,nilaiTugas:65+(t+e*7)%30,nilaiQuiz:60+(t+e*11)%35,kehadiran:10+(t+e*2)%5})}return{kode:e.kodeMK,nama:e.namaMK,sks:e.sks,kelas:e.kelas,semester:`Genap ${new Date().getFullYear()}`,hari:e.hari,jam:`${e.jamMulai}-${e.jamSelesai}`,ruang:e.ruang,tipeKelas:e.tipeKelas||`Offline`,prodi:e.prodi,semesterNo:e.semester,bobot:{uts:20,uas:30,tugas:20,quiz:15,absensi:15},mahasiswa:i}})}function Fe(e){let t=Pe(e);window._dosenJadwalCache=t;let n=t.reduce((e,t)=>e+t.mahasiswa.length,0),r=[`Minggu`,`Senin`,`Selasa`,`Rabu`,`Kamis`,`Jumat`,`Sabtu`][new Date().getDay()],i=t.filter(e=>e.hari===r);return`
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${F.monitor}</div>
        <div class="stat-info"><div class="stat-label">Mata Kuliah</div><div class="stat-value">${t.length}</div><div class="stat-sub">semester ini</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${F.users}</div>
        <div class="stat-info"><div class="stat-label">Total Mahasiswa</div><div class="stat-value">${n}</div><div class="stat-sub">semua kelas</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${F.checkCircle}</div>
        <div class="stat-info"><div class="stat-label">Tugas Dinilai</div><div class="stat-value">28</div><div class="stat-sub">dari 45 tugas</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon purple">${F.fileText}</div>
        <div class="stat-info"><div class="stat-label">Materi Upload</div><div class="stat-value">36</div><div class="stat-sub">file tersedia</div></div>
      </div>
    </div>

    <div class="dash-grid">
      <div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Jadwal Mengajar Hari Ini</h3></div>
          <div class="dash-card-body">
            <table class="sch-table">
              <thead><tr><th>Jam</th><th>Mata Kuliah</th><th>Kelas</th><th>Ruang</th></tr></thead>
              <tbody>
                ${i.length?i.map(e=>`<tr>
                  <td class="sch-time">${e.jam}</td>
                  <td><strong>${e.nama}</strong></td>
                  <td>${e.kelas}</td>
                  <td>${e.ruang}</td>
                </tr>`).join(``):`<tr><td colspan="4" style="text-align:center;padding:20px;color:hsl(215 15% 60%);font-size:0.85rem;">Tidak ada jadwal hari ini (${r})</td></tr>`}
              </tbody>
            </table>
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Kelas yang Diampu</h3></div>
          <div class="dash-card-body">
            <div class="course-grid">
              ${t.slice(0,4).map(e=>`
                <div class="course-card">
                  <div class="course-card-code">${e.kode}</div>
                  <h4>${e.nama}</h4>
                  <p>${e.mahasiswa.length} Mahasiswa</p>
                  <div class="course-card-foot">
                    <span>${e.sks} SKS · ${e.kelas}</span>
                    <span class="badge-sm blue">${e.hari}</span>
                  </div>
                </div>
              `).join(``)}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Tugas Perlu Dinilai</h3></div>
          <div class="dash-card-body">
            ${x.filter(e=>e.status===`Sudah`).concat(x.filter(e=>e.status===`Belum`)).slice(0,4).map(e=>`
              <div class="task-item">
                <span class="task-dot ${e.status===`Sudah`?`warning`:`info`}"></span>
                <div class="task-body">
                  <h4>${e.judul}</h4>
                  <p>${e.kelas}</p>
                  <div class="task-meta"><span class="badge-sm ${e.status===`Sudah`?`warning`:`info`}">${e.status===`Sudah`?`Perlu Dinilai`:`Menunggu`}</span></div>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Pengumuman</h3></div>
          <div class="dash-card-body">
            <div class="task-item"><span class="task-dot info"></span><div class="task-body"><h4>Rapat Dosen — Rabu 10:00</h4><p>Aula Gedung A, Lt. 2</p></div></div>
            <div class="task-item"><span class="task-dot warning"></span><div class="task-body"><h4>Deadline Input Nilai UTS</h4><p>Paling lambat 31 Maret 2026</p></div></div>
            <div class="task-item"><span class="task-dot success"></span><div class="task-body"><h4>Workshop Jurnal Terakreditasi</h4><p>Jumat, 28 Maret 2026</p></div></div>
          </div>
        </div>
      </div>
    </div>`}function L(e){let t=window._dosenJadwalCache||Pe(e);return`<div class="dash-card" style="margin-bottom:20px;overflow:hidden;">
    <div style="background:linear-gradient(135deg,hsl(200 55% 28%),hsl(170 45% 38%));padding:18px 24px;display:flex;align-items:center;gap:18px;flex-wrap:wrap;">
      <div style="width:60px;height:60px;border-radius:10px;background:linear-gradient(135deg,hsl(200 40% 55%),hsl(180 40% 65%));border:2px solid rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="font-size:1.3rem;color:white;font-weight:700;">${S(e.nama)}</span>
      </div>
      <div style="color:white;flex:1;">
        <div style="font-size:1rem;font-weight:700;">${e.nama}</div>
        <div style="font-size:0.8rem;opacity:0.85;">NIP: ${e.nip||`198501012010011001`} — ${e.prodi||`Administrasi Negara`}</div>
      </div>
      <div style="display:flex;gap:12px;">
        <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;color:white;text-align:center;backdrop-filter:blur(4px);">
          <div style="font-size:0.6rem;opacity:0.7;">Mata Kuliah</div>
          <div style="font-size:1rem;font-weight:800;">${t.length}</div>
        </div>
        <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;color:white;text-align:center;backdrop-filter:blur(4px);">
          <div style="font-size:0.6rem;opacity:0.7;">Mahasiswa PA</div>
          <div style="font-size:1rem;font-weight:800;">${k.length}</div>
        </div>
      </div>
    </div>
  </div>`}function Ie(e){let t=[`Senin`,`Selasa`,`Rabu`,`Kamis`,`Jumat`],n=window._dosenJadwalCache||Pe(e);window._dosenJadwalCache=n;let r=n.map((e,t)=>({hari:e.hari,jam:e.jam,kode:e.kode,nama:e.nama,kelas:e.kelas,ruang:e.ruang,jmlMhs:e.mahasiswa.length,idx:t}));return`${L(e)}
    <div class="dash-card">
      <div class="dash-card-head"><h3>📅 Jadwal Mengajar — Semester Genap ${new Date().getFullYear()}</h3></div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>Hari</th><th>Jam</th><th>Kode MK</th><th>Mata Kuliah</th><th>Kelas</th><th>Ruang</th><th>Mhs</th><th>Aksi</th></tr></thead>
          <tbody>
            ${r.map((e,t)=>`<tr>
              <td>${t+1}.</td>
              <td><strong>${e.hari}</strong></td>
              <td class="sch-time">${e.jam}</td>
              <td><strong>${e.kode}</strong></td>
              <td>${e.nama}</td>
              <td>${e.kelas}</td>
              <td>${e.ruang}</td>
              <td style="text-align:center;">${e.jmlMhs}</td>
              <td style="text-align:center;white-space:nowrap;">
                <button class="jadwal-absensi-btn" data-kelas-idx="${e.idx}" style="font-size:0.68rem;padding:4px 10px;border-radius:4px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;">📋 Absensi</button>
                <button class="jadwal-nilai-btn" data-kelas-idx="${e.idx}" style="font-size:0.68rem;padding:4px 10px;border-radius:4px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;margin-left:4px;">✏️ Nilai</button>
              </td>
            </tr>`).join(``)}
          </tbody>
        </table>
      </div>
    </div>
    <div style="margin-top:16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">
      ${t.map(e=>{let t=r.filter(t=>t.hari===e);return`<div class="dash-card">
          <div class="dash-card-head" style="background:hsl(210 50% 95%);"><h3 style="margin:0;font-size:0.85rem;">${e}</h3></div>
          <div class="dash-card-body" style="padding:${t.length?`0`:`16px`};">
            ${t.length?t.map(e=>`
              <div style="padding:12px 16px;border-bottom:1px solid hsl(215 20% 92%);">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                  <div style="flex:1;">
                    <div style="font-weight:700;font-size:0.82rem;">${e.kode} — ${e.nama}</div>
                    <div style="font-size:0.72rem;color:hsl(215 15% 55%);margin-top:4px;">${e.jam} · ${e.kelas} · ${e.ruang} · ${e.jmlMhs} mhs</div>
                  </div>
                  <div style="display:flex;gap:4px;flex-shrink:0;">
                    <button class="jadwal-absensi-btn" data-kelas-idx="${e.idx}" style="font-size:0.65rem;padding:4px 10px;border-radius:4px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;">📋 Absensi</button>
                    <button class="jadwal-nilai-btn" data-kelas-idx="${e.idx}" style="font-size:0.65rem;padding:4px 10px;border-radius:4px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;">✏️ Nilai</button>
                  </div>
                </div>
              </div>`).join(``):`<div style="color:hsl(215 15% 60%);font-size:0.8rem;text-align:center;">Tidak ada jadwal</div>`}
          </div>
        </div>`}).join(``)}
    </div>
    <div id="jadwalAbsensiDetail" style="display:none;margin-top:20px;"></div>
    <div id="jadwalNilaiDetail" style="display:none;margin-top:20px;"></div>`}function Le(e){function t(e){return e>=85?`A`:e>=80?`A-`:e>=75?`B+`:e>=70?`B`:e>=65?`B-`:e>=60?`C+`:e>=55?`C`:e>=45?`D`:`E`}let n=(window._dosenJadwalCache||[])[e],r=n.bobot||{uts:20,uas:30,tugas:20,quiz:15,absensi:15},i=`UTS×${r.uts}% + UAS×${r.uas}% + Tugas×${r.tugas}% + Quiz×${r.quiz}% + Absensi×${r.absensi}%`;return`
    <div class="dash-card" style="margin-bottom:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,hsl(210 55% 42%),hsl(200 50% 55%));padding:18px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <div>
          <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);">${n.kode} · ${n.kelas}</div>
          <div style="font-size:1.1rem;font-weight:700;color:white;">✏️ Input Nilai — ${n.nama}</div>
          <div id="nilaiRumusLabel" style="font-size:0.78rem;color:rgba(255,255,255,0.8);margin-top:4px;">Rumus: ${i}</div>
        </div>
        <button id="btnToggleBobot" onclick="document.getElementById('bobotPanel').style.display = document.getElementById('bobotPanel').style.display === 'none' ? 'block' : 'none'" style="font-size:0.72rem;padding:6px 14px;border-radius:6px;cursor:pointer;background:rgba(255,255,255,0.2);color:white;border:1px solid rgba(255,255,255,0.4);font-weight:600;backdrop-filter:blur(4px);">⚙️ Atur Bobot</button>
      </div>
      <!-- Bobot Settings Panel -->
      <div id="bobotPanel" style="display:none;padding:16px 24px;background:hsl(210 30% 96%);border-bottom:2px solid hsl(210 40% 85%);">
        <div style="font-size:0.82rem;font-weight:700;color:hsl(210 50% 35%);margin-bottom:10px;">⚙️ Pengaturan Bobot Penilaian</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;">
          <label style="display:flex;flex-direction:column;gap:3px;font-size:0.72rem;font-weight:600;color:hsl(215 20% 40%);">UTS (%)
            <input id="bobotUTS" type="number" value="${r.uts}" min="0" max="100" style="width:55px;padding:5px 6px;border:1px solid hsl(215 20% 82%);border-radius:5px;text-align:center;font-size:0.82rem;font-weight:700;">
          </label>
          <label style="display:flex;flex-direction:column;gap:3px;font-size:0.72rem;font-weight:600;color:hsl(215 20% 40%);">UAS (%)
            <input id="bobotUAS" type="number" value="${r.uas}" min="0" max="100" style="width:55px;padding:5px 6px;border:1px solid hsl(215 20% 82%);border-radius:5px;text-align:center;font-size:0.82rem;font-weight:700;">
          </label>
          <label style="display:flex;flex-direction:column;gap:3px;font-size:0.72rem;font-weight:600;color:hsl(215 20% 40%);">Tugas (%)
            <input id="bobotTugas" type="number" value="${r.tugas}" min="0" max="100" style="width:55px;padding:5px 6px;border:1px solid hsl(215 20% 82%);border-radius:5px;text-align:center;font-size:0.82rem;font-weight:700;">
          </label>
          <label style="display:flex;flex-direction:column;gap:3px;font-size:0.72rem;font-weight:600;color:hsl(215 20% 40%);">Quiz (%)
            <input id="bobotQuiz" type="number" value="${r.quiz}" min="0" max="100" style="width:55px;padding:5px 6px;border:1px solid hsl(215 20% 82%);border-radius:5px;text-align:center;font-size:0.82rem;font-weight:700;">
          </label>
          <label style="display:flex;flex-direction:column;gap:3px;font-size:0.72rem;font-weight:600;color:hsl(215 20% 40%);">Absensi (%)
            <input id="bobotAbsensi" type="number" value="${r.absensi}" min="0" max="100" style="width:55px;padding:5px 6px;border:1px solid hsl(215 20% 82%);border-radius:5px;text-align:center;font-size:0.82rem;font-weight:700;">
          </label>
          <div style="display:flex;flex-direction:column;gap:3px;">
            <span id="bobotTotalLabel" style="font-size:0.72rem;font-weight:700;color:hsl(150 60% 40%);">Total: ${r.uts+r.uas+r.tugas+r.quiz+r.absensi}%</span>
            <button id="btnApplyBobot" data-kelas-idx="${e}" onclick="window.__applyBobot && window.__applyBobot()" style="padding:5px 14px;border-radius:5px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;font-size:0.75rem;">✅ Terapkan</button>
          </div>
        </div>
        <div id="bobotWarning" style="display:none;margin-top:8px;padding:6px 12px;background:hsl(0 70% 95%);color:hsl(0 60% 45%);border-radius:4px;font-size:0.72rem;font-weight:600;">⚠️ Total bobot harus = 100%!</div>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px;">
      <button id="backFromNilai" style="font-size:0.78rem;padding:7px 16px;border-radius:6px;cursor:pointer;background:hsl(215 20% 92%);color:hsl(215 20% 35%);border:1px solid hsl(215 20% 82%);font-weight:600;">← Kembali ke Jadwal</button>
      <button id="btnSimpanNilaiInline" data-kelas-idx="${e}" style="font-size:0.72rem;padding:6px 14px;border-radius:5px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;">💾 Simpan Nilai</button>
    </div>
    <div class="dash-card">
      <div class="dash-card-body" style="padding:0;overflow-x:auto;">
        <table id="nilaiTable" class="sch-table" style="width:100%;font-size:0.78rem;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>NIM</th><th>Nama</th><th class="th-uts">UTS (${r.uts}%)</th><th class="th-uas">UAS (${r.uas}%)</th><th class="th-tugas">Tugas (${r.tugas}%)</th><th class="th-quiz">Quiz (${r.quiz}%)</th><th class="th-absensi">Absensi (${r.absensi}%)</th><th>Akhir</th><th>Huruf</th></tr></thead>
          <tbody>
            ${n.mahasiswa.map((e,n)=>{let i=Math.round(e.kehadiran/14*100),a=Math.round(e.nilaiUTS*r.uts/100+e.nilaiUAS*r.uas/100+e.nilaiTugas*r.tugas/100+(e.nilaiQuiz||0)*r.quiz/100+i*r.absensi/100),o=t(a),s=o.startsWith(`A`)?`hsl(150 60% 45%)`:o.startsWith(`B`)?`hsl(200 55% 50%)`:o.startsWith(`C`)?`hsl(40 80% 50%)`:`hsl(0 60% 50%)`,c=`width:50px;padding:4px 4px;border:1px solid hsl(215 20% 85%);border-radius:4px;text-align:center;font-size:0.78rem;`;return`<tr>
                <td>${n+1}.</td>
                <td><strong>${e.nim}</strong></td>
                <td style="white-space:nowrap;">${e.nama}</td>
                <td style="text-align:center;"><input type="number" data-field="uts" value="${e.nilaiUTS}" min="0" max="100" style="${c}"></td>
                <td style="text-align:center;"><input type="number" data-field="uas" value="${e.nilaiUAS}" min="0" max="100" style="${c}"></td>
                <td style="text-align:center;"><input type="number" data-field="tugas" value="${e.nilaiTugas}" min="0" max="100" style="${c}"></td>
                <td style="text-align:center;"><input type="number" data-field="quiz" value="${e.nilaiQuiz||0}" min="0" max="100" style="${c}"></td>
                <td style="text-align:center;"><span style="display:inline-block;padding:3px 8px;border-radius:4px;background:${i>=85?`hsl(150 50% 92%)`:`hsl(40 50% 92%)`};color:${i>=85?`hsl(150 60% 35%)`:`hsl(40 70% 35%)`};font-weight:600;font-size:0.75rem;" title="Otomatis: ${e.kehadiran}/14 hadir">${i}</span></td>
                <td style="text-align:center;font-weight:700;" class="td-akhir">${a}</td>
                <td style="text-align:center;" class="td-huruf"><span style="background:${s};color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${o}</span></td>
              </tr>`}).join(``)}
          </tbody>
        </table>
      </div>
    </div>
    <div style="margin-top:12px;padding:12px 16px;background:hsl(200 60% 94%);border-left:4px solid hsl(200 60% 50%);border-radius:0 8px 8px 0;">
      <strong style="font-size:0.78rem;">💡 Keterangan:</strong>
      <ul style="font-size:0.75rem;color:hsl(215 15% 40%);margin:6px 0 0 16px;padding:0;">
        <li><strong>Absensi</strong> dihitung otomatis dari kehadiran mahasiswa (hadir/14 × 100)</li>
        <li>Klik <strong>⚙️ Atur Bobot</strong> untuk mengubah persentase tiap komponen (total harus 100%)</li>
        <li><strong>Quiz</strong> dan komponen lainnya bisa diinput manual oleh dosen</li>
      </ul>
    </div>`}function Re(){let e=document.getElementById(`jadwalAbsensiDetail`),t=document.getElementById(`jadwalNilaiDetail`);function n(){e&&(e.style.display=`none`,e.innerHTML=``),t&&(t.style.display=`none`,t.innerHTML=``)}document.querySelectorAll(`.jadwal-absensi-btn`).forEach(t=>{t.addEventListener(`click`,r=>{r.stopPropagation(),n();let i=parseInt(t.dataset.kelasIdx);e&&(e.style.display=`block`,e.innerHTML=We(i),e.scrollIntoView({behavior:`smooth`,block:`start`}),document.getElementById(`backToClassList`)?.addEventListener(`click`,()=>n()),Ke(e),qe(e,i))})}),document.querySelectorAll(`.jadwal-nilai-btn`).forEach(e=>{e.addEventListener(`click`,r=>{r.stopPropagation(),n();let i=parseInt(e.dataset.kelasIdx);t&&(t.style.display=`block`,t.innerHTML=Le(i),t.scrollIntoView({behavior:`smooth`,block:`start`}),document.getElementById(`backFromNilai`)?.addEventListener(`click`,()=>n()),window.__applyBobot=function(){let e=parseInt(document.getElementById(`bobotUTS`)?.value)||0,n=parseInt(document.getElementById(`bobotUAS`)?.value)||0,r=parseInt(document.getElementById(`bobotTugas`)?.value)||0,a=parseInt(document.getElementById(`bobotQuiz`)?.value)||0,o=parseInt(document.getElementById(`bobotAbsensi`)?.value)||0,s=e+n+r+a+o,c=document.getElementById(`bobotTotalLabel`),l=document.getElementById(`bobotWarning`);if(c&&(c.textContent=`Total: `+s+`%`,c.style.color=s===100?`hsl(150 60% 40%)`:`hsl(0 60% 50%)`),s!==100){l&&(l.style.display=`block`);return}l&&(l.style.display=`none`);let u=(window._dosenJadwalCache||[])[i];u.bobot={uts:e,uas:n,tugas:r,quiz:a,absensi:o};let d=t.querySelector(`.th-uts`);d&&(d.textContent=`UTS (`+e+`%)`);let f=t.querySelector(`.th-uas`);f&&(f.textContent=`UAS (`+n+`%)`);let p=t.querySelector(`.th-tugas`);p&&(p.textContent=`Tugas (`+r+`%)`);let m=t.querySelector(`.th-quiz`);m&&(m.textContent=`Quiz (`+a+`%)`);let h=t.querySelector(`.th-absensi`);h&&(h.textContent=`Absensi (`+o+`%)`);let g=document.getElementById(`nilaiRumusLabel`);g&&(g.textContent=`Rumus: UTS×`+e+`% + UAS×`+n+`% + Tugas×`+r+`% + Quiz×`+a+`% + Absensi×`+o+`%`);function _(e){return e>=85?`A`:e>=80?`A-`:e>=75?`B+`:e>=70?`B`:e>=65?`B-`:e>=60?`C+`:e>=55?`C`:e>=45?`D`:`E`}t.querySelectorAll(`#nilaiTable tbody tr`).forEach((t,i)=>{let s=t.querySelectorAll(`input[type=number]`);if(s.length>=4&&u.mahasiswa[i]){let c=parseFloat(s[0].value)||0,l=parseFloat(s[1].value)||0,d=parseFloat(s[2].value)||0,f=parseFloat(s[3].value)||0,p=Math.round(u.mahasiswa[i].kehadiran/14*100),m=Math.round(c*e/100+l*n/100+d*r/100+f*a/100+p*o/100),h=_(m),g=h.startsWith(`A`)?`hsl(150 60% 45%)`:h.startsWith(`B`)?`hsl(200 55% 50%)`:h.startsWith(`C`)?`hsl(40 80% 50%)`:`hsl(0 60% 50%)`,v=t.querySelector(`.td-akhir`);v&&(v.textContent=m);let y=t.querySelector(`.td-huruf`);y&&(y.innerHTML=`<span style="background:`+g+`;color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">`+h+`</span>`)}}),document.getElementById(`bobotPanel`).style.display=`none`},document.getElementById(`btnSimpanNilaiInline`)?.addEventListener(`click`,async()=>{let e=parseInt(document.getElementById(`btnSimpanNilaiInline`).dataset.kelasIdx),n=(window._dosenJadwalCache||[])[e],r=t.querySelectorAll(`#nilaiTable tbody tr`),i=[];r.forEach((e,t)=>{let r=e.querySelectorAll(`input[type=number]`);if(r.length>=4&&n.mahasiswa[t]){let e=parseFloat(r[0].value)||0,a=parseFloat(r[1].value)||0,o=parseFloat(r[2].value)||0,s=parseFloat(r[3].value)||0;n.mahasiswa[t].nilaiUTS=e,n.mahasiswa[t].nilaiUAS=a,n.mahasiswa[t].nilaiTugas=o,n.mahasiswa[t].nilaiQuiz=s,i.push({nim:n.mahasiswa[t].nim,mata_kuliah_id:n.mkId||0,semester:4,uts:e,uas:a,tugas:o,quiz:s,kelas:n.kelas})}});let a=document.getElementById(`btnSimpanNilaiInline`);a.textContent=`⏳ Menyimpan...`,a.disabled=!0,await _e(i)?(a.textContent=`✅ Tersimpan!`,setTimeout(()=>{a.textContent=`💾 Simpan Nilai`,a.disabled=!1},2e3)):(a.textContent=`✅ Tersimpan (Lokal)`,a.style.background=`hsl(40 70% 48%)`,setTimeout(()=>{a.textContent=`💾 Simpan Nilai`,a.style.background=`hsl(150 55% 45%)`,a.disabled=!1},2e3))}))})})}function ze(e){return`${L(e)}
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>👥 Data Mahasiswa per Kelas</h3></div>
    </div>
    ${(window._dosenJadwalCache||[]).map(e=>`
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;">
        <h3 style="margin:0;font-size:0.88rem;">${e.kode} — ${e.nama} (${e.kelas})</h3>
        <span class="badge-sm blue">${e.mahasiswa.length} mahasiswa</span>
      </div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>NIM</th><th>Nama Mahasiswa</th><th>Angkatan</th><th>Kehadiran</th><th>% Hadir</th></tr></thead>
          <tbody>
            ${e.mahasiswa.map((e,t)=>{let n=Math.round(e.kehadiran/14*100),r=n>=85?`hsl(150 60% 45%)`:n>=75?`hsl(40 80% 50%)`:`hsl(0 60% 50%)`;return`<tr>
                <td>${t+1}.</td>
                <td><strong>${e.nim}</strong></td>
                <td>${e.nama}</td>
                <td style="text-align:center;">${e.angkatan}</td>
                <td style="text-align:center;">${e.kehadiran}/14</td>
                <td style="text-align:center;"><span style="background:${r};color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:600;">${n}%</span></td>
              </tr>`}).join(``)}
          </tbody>
        </table>
      </div>
    </div>`).join(``)}`}function Be(e){function t(e){return e>=85?`A`:e>=80?`A-`:e>=75?`B+`:e>=70?`B`:e>=65?`B-`:e>=60?`C+`:e>=55?`C`:e>=45?`D`:`E`}return`${L(e)}
    <div style="margin-bottom:16px;padding:14px 20px;background:hsl(200 60% 94%);border-left:4px solid hsl(200 60% 50%);border-radius:0 8px 8px 0;">
      <strong style="font-size:0.85rem;">📝 Petunjuk:</strong>
      <span style="font-size:0.82rem;color:hsl(215 15% 40%);"> Pilih kelas, edit nilai pada tabel, lalu klik Simpan Nilai. Bobot bisa dikonfigurasi per kelas via ⚙️ Atur Bobot di Jadwal Mengajar.</span>
    </div>
    ${(window._dosenJadwalCache||[]).map((e,n)=>{let r=e.bobot||{uts:20,uas:30,tugas:20,quiz:15,absensi:15};return`
    <div class="dash-card" style="margin-bottom:20px;">
      <div class="dash-card-head" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <div>
          <h3 style="margin:0;font-size:0.88rem;">${e.kode} — ${e.nama} (${e.kelas})</h3>
          <div style="font-size:0.7rem;color:hsl(215 20% 55%);margin-top:2px;">Bobot: UTS ${r.uts}% · UAS ${r.uas}% · Tugas ${r.tugas}% · Quiz ${r.quiz}% · Absensi ${r.absensi}%</div>
        </div>
        <button class="btn-simpan-nilai" data-kelas-idx="${n}" style="font-size:0.75rem;padding:6px 16px;border-radius:6px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;">💾 Simpan Nilai</button>
      </div>
      <div class="dash-card-body" style="padding:0;overflow-x:auto;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>NIM</th><th>Nama</th><th>UTS (${r.uts}%)</th><th>UAS (${r.uas}%)</th><th>Tugas (${r.tugas}%)</th><th>Quiz (${r.quiz}%)</th><th>Absensi (${r.absensi}%)</th><th>Akhir</th><th>Huruf</th></tr></thead>
          <tbody>
            ${e.mahasiswa.map((e,n)=>{let i=Math.round(e.kehadiran/14*100),a=Math.round(e.nilaiUTS*r.uts/100+e.nilaiUAS*r.uas/100+e.nilaiTugas*r.tugas/100+(e.nilaiQuiz||0)*r.quiz/100+i*r.absensi/100),o=t(a),s=o.startsWith(`A`)?`hsl(150 60% 45%)`:o.startsWith(`B`)?`hsl(200 55% 50%)`:o.startsWith(`C`)?`hsl(40 80% 50%)`:`hsl(0 60% 50%)`,c=`width:50px;padding:4px 4px;border:1px solid hsl(215 20% 85%);border-radius:4px;text-align:center;font-size:0.78rem;`;return`<tr>
                <td>${n+1}.</td>
                <td><strong>${e.nim}</strong></td>
                <td style="white-space:nowrap;">${e.nama}</td>
                <td style="text-align:center;"><input type="number" value="${e.nilaiUTS}" min="0" max="100" style="${c}"></td>
                <td style="text-align:center;"><input type="number" value="${e.nilaiUAS}" min="0" max="100" style="${c}"></td>
                <td style="text-align:center;"><input type="number" value="${e.nilaiTugas}" min="0" max="100" style="${c}"></td>
                <td style="text-align:center;"><input type="number" value="${e.nilaiQuiz||0}" min="0" max="100" style="${c}"></td>
                <td style="text-align:center;"><span style="display:inline-block;padding:3px 8px;border-radius:4px;background:${i>=85?`hsl(150 50% 92%)`:`hsl(40 50% 92%)`};color:${i>=85?`hsl(150 60% 35%)`:`hsl(40 70% 35%)`};font-weight:600;font-size:0.75rem;" title="${e.kehadiran}/14 hadir">${i}</span></td>
                <td style="text-align:center;font-weight:700;">${a}</td>
                <td style="text-align:center;"><span style="background:${s};color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${o}</span></td>
              </tr>`}).join(``)}
          </tbody>
        </table>
      </div>
    </div>`}).join(``)}`}function Ve(){document.querySelectorAll(`.btn-simpan-nilai`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=parseInt(e.dataset.kelasIdx),n=(window._dosenJadwalCache||[])[t],r=e.closest(`.dash-card`).querySelectorAll(`tbody tr`),i=[];r.forEach((e,t)=>{let r=e.querySelectorAll(`input[type=number]`);if(r.length>=4&&n.mahasiswa[t]){let e=parseFloat(r[0].value)||0,a=parseFloat(r[1].value)||0,o=parseFloat(r[2].value)||0,s=parseFloat(r[3].value)||0;n.mahasiswa[t].nilaiUTS=e,n.mahasiswa[t].nilaiUAS=a,n.mahasiswa[t].nilaiTugas=o,n.mahasiswa[t].nilaiQuiz=s,i.push({nim:n.mahasiswa[t].nim,mata_kuliah_id:n.mkId||0,semester:4,uts:e,uas:a,tugas:o,quiz:s,kelas:n.kelas})}}),e.textContent=`⏳ Menyimpan...`,e.disabled=!0,await _e(i)?(e.textContent=`✅ Tersimpan!`,setTimeout(()=>{e.textContent=`💾 Simpan Nilai`,e.disabled=!1},2e3)):(e.textContent=`✅ Tersimpan (Lokal)`,e.style.background=`hsl(40 70% 48%)`,setTimeout(()=>{e.textContent=`💾 Simpan Nilai`,e.style.background=`hsl(150 55% 45%)`,e.disabled=!1},2e3))})})}function He(e){function t(e){return e>=85?`A`:e>=80?`A-`:e>=75?`B+`:e>=70?`B`:e>=65?`B-`:e>=60?`C+`:e>=55?`C`:e>=45?`D`:`E`}let n=(window._dosenJadwalCache||[]).map(e=>{let n=e.bobot||{uts:20,uas:30,tugas:20,quiz:15,absensi:15},r=e.mahasiswa.map(e=>{let t=Math.round(e.kehadiran/14*100);return Math.round(e.nilaiUTS*n.uts/100+e.nilaiUAS*n.uas/100+e.nilaiTugas*n.tugas/100+(e.nilaiQuiz||0)*n.quiz/100+t*n.absensi/100)}),i=(r.reduce((e,t)=>e+t,0)/r.length).toFixed(1),a=Math.max(...r),o=Math.min(...r),s={};return r.forEach(e=>{let n=t(e);s[n]=(s[n]||0)+1}),{...e,avg:i,max:a,min:o,grades:s,total:e.mahasiswa.length,bobot:n}});return`${L(e)}
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>📊 Rekap Nilai — Semester Genap ${new Date().getFullYear()}</h3></div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;margin-bottom:16px;">
      ${n.map(e=>`
      <div class="dash-card">
        <div class="dash-card-head"><h3 style="margin:0;font-size:0.85rem;">${e.kode} — ${e.nama}</h3></div>
        <div class="dash-card-body">
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px;">
            <div style="text-align:center;padding:8px;background:hsl(200 60% 94%);border-radius:6px;">
              <div style="font-size:0.65rem;color:hsl(215 15% 50%);">Rata-rata</div>
              <div style="font-size:1.1rem;font-weight:800;color:hsl(200 50% 40%);">${e.avg}</div>
            </div>
            <div style="text-align:center;padding:8px;background:hsl(150 50% 94%);border-radius:6px;">
              <div style="font-size:0.65rem;color:hsl(150 40% 40%);">Tertinggi</div>
              <div style="font-size:1.1rem;font-weight:800;color:hsl(150 50% 40%);">${e.max}</div>
            </div>
            <div style="text-align:center;padding:8px;background:hsl(0 50% 95%);border-radius:6px;">
              <div style="font-size:0.65rem;color:hsl(0 40% 45%);">Terendah</div>
              <div style="font-size:1.1rem;font-weight:800;color:hsl(0 50% 45%);">${e.min}</div>
            </div>
          </div>
          <div style="font-size:0.75rem;font-weight:600;margin-bottom:8px;">Distribusi Nilai (${e.total} mhs):</div>
          ${Object.entries(e.grades).sort().map(([t,n])=>{let r=Math.round(n/e.total*100);return`<div style="display:flex;align-items:center;gap:8px;margin-bottom:5px;">
              <span style="font-size:0.72rem;font-weight:700;min-width:22px;">${t}</span>
              <div class="progress-wrap" style="flex:1;"><div class="progress-bar" style="width:${r}%;background:${t.startsWith(`A`)?`hsl(150 60% 45%)`:t.startsWith(`B`)?`hsl(200 55% 50%)`:`hsl(40 80% 50%)`};"></div></div>
              <span style="font-size:0.68rem;color:hsl(215 15% 55%);min-width:45px;">${n} (${r}%)</span>
            </div>`}).join(``)}
        </div>
      </div>`).join(``)}
    </div>`}function Ue(e){return`${L(e)}
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>✅ Absensi Kelas — Pilih Kelas</h3></div>
      <div class="dash-card-body">
        <p style="font-size:0.82rem;color:hsl(215 15% 50%);margin:0;">Klik kelas di bawah untuk melihat dan mengelola absensi mahasiswa.</p>
      </div>
    </div>
    <div id="absensiClassGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px;">
      ${(window._dosenJadwalCache||[]).map((e,t)=>{let n=e.mahasiswa.length,r=Math.round(e.mahasiswa.reduce((e,t)=>e+t.kehadiran,0)/n),i=Math.round(r/14*100),a=i>=85?`hsl(150 60% 45%)`:i>=75?`hsl(40 80% 50%)`:`hsl(0 60% 50%)`;return`
        <div class="dash-card absensi-class-card" data-kelas-idx="${t}" style="cursor:pointer;transition:all 0.25s;border:2px solid transparent;">
          <div style="background:linear-gradient(135deg,hsl(210 55% 42%),hsl(200 50% 55%));padding:16px 20px;border-radius:8px 8px 0 0;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);">${e.kode}</div>
                <div style="font-size:1rem;font-weight:700;color:white;margin-top:2px;">${e.nama}</div>
              </div>
              <div style="background:rgba(255,255,255,0.18);border-radius:8px;padding:6px 12px;backdrop-filter:blur(4px);">
                <div style="font-size:0.55rem;color:rgba(255,255,255,0.7);">Kelas</div>
                <div style="font-size:0.9rem;font-weight:800;color:white;">${e.kelas}</div>
              </div>
            </div>
          </div>
          <div class="dash-card-body" style="padding:14px 20px;">
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px;">
              <div style="text-align:center;padding:8px;background:hsl(210 50% 96%);border-radius:6px;">
                <div style="font-size:0.58rem;color:hsl(215 15% 50%);">Mahasiswa</div>
                <div style="font-size:1rem;font-weight:800;color:hsl(210 50% 40%);">${n}</div>
              </div>
              <div style="text-align:center;padding:8px;background:hsl(150 50% 95%);border-radius:6px;">
                <div style="font-size:0.58rem;color:hsl(150 40% 40%);">Avg Hadir</div>
                <div style="font-size:1rem;font-weight:800;color:hsl(150 50% 40%);">${r}/14</div>
              </div>
              <div style="text-align:center;padding:8px;background:${i>=85?`hsl(150 50% 95%)`:`hsl(40 50% 95%)`};border-radius:6px;">
                <div style="font-size:0.58rem;color:hsl(215 15% 50%);">Rata-rata</div>
                <div style="font-size:1rem;font-weight:800;color:${a};">${i}%</div>
              </div>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:0.72rem;color:hsl(215 15% 55%);">📅 ${e.hari}, ${e.jam} · 📍 ${e.ruang}</span>
              <span style="font-size:0.72rem;font-weight:600;color:hsl(210 55% 50%);">Buka →</span>
            </div>
          </div>
        </div>`}).join(``)}
    </div>
    <div id="absensiDetailView" style="display:none;"></div>`}function We(e){let t=(window._dosenJadwalCache||[])[e],n=t.mahasiswa.length,r=Math.round(t.mahasiswa.reduce((e,t)=>e+t.kehadiran,0)/n),i=Math.round(r/14*100),a=_(t.hari,14);return`
    <div class="dash-card" style="margin-bottom:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,hsl(210 55% 42%),hsl(200 50% 55%));padding:18px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <div>
          <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);">${t.kode} · ${t.kelas}</div>
          <div style="font-size:1.1rem;font-weight:700;color:white;">${t.nama}</div>
          <div style="font-size:0.78rem;color:rgba(255,255,255,0.8);margin-top:4px;">📅 ${t.hari}, ${t.jam} · 📍 ${t.ruang} · 👥 ${n} mahasiswa</div>
        </div>
        <div style="display:flex;gap:10px;">
          <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;color:white;text-align:center;backdrop-filter:blur(4px);">
            <div style="font-size:0.55rem;opacity:0.7;">Avg Hadir</div>
            <div style="font-size:1rem;font-weight:800;">${i}%</div>
          </div>
          <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;color:white;text-align:center;backdrop-filter:blur(4px);">
            <div style="font-size:0.55rem;opacity:0.7;">Pertemuan</div>
            <div style="font-size:1rem;font-weight:800;">14</div>
          </div>
        </div>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px;">
      <button id="backToClassList" style="font-size:0.78rem;padding:7px 16px;border-radius:6px;cursor:pointer;background:hsl(215 20% 92%);color:hsl(215 20% 35%);border:1px solid hsl(215 20% 82%);font-weight:600;">← Kembali ke Daftar Kelas</button>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button id="btnSimpanAbsensi" data-kelas-idx="${e}" onclick="window.__simpanAbsensi && window.__simpanAbsensi()" style="font-size:0.72rem;padding:6px 14px;border-radius:5px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;">💾 Simpan Absensi</button>
        <button id="btnCetakRekap" data-kelas-idx="${e}" onclick="window.__cetakRekap && window.__cetakRekap()" style="font-size:0.72rem;padding:6px 14px;border-radius:5px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;">🖨️ Cetak Rekap</button>
      </div>
    </div>
    <div class="dash-card">
      <div class="dash-card-body" style="padding:0;overflow-x:auto;">
        <table class="sch-table" style="width:100%;font-size:0.78rem;">
          <thead>
            <tr style="background:hsl(215 20% 95%);">
              <th rowspan="3" style="vertical-align:middle;">No.</th>
              <th rowspan="3" style="vertical-align:middle;">NIM</th>
              <th rowspan="3" style="vertical-align:middle;">Nama</th>
              <th colspan="14" style="text-align:center;">Pertemuan ke-</th>
              <th rowspan="3" style="vertical-align:middle;">Hadir</th>
              <th rowspan="3" style="vertical-align:middle;">%</th>
            </tr>
            <tr style="background:hsl(215 20% 93%);">
              ${Array.from({length:14},(e,t)=>`<th style="padding:4px 6px;font-size:0.68rem;">${t+1}</th>`).join(``)}
            </tr>
            <tr style="background:hsl(210 30% 90%);">
              ${a.map(e=>`<th style="padding:2px 4px;font-size:0.55rem;font-weight:600;color:hsl(210 40% 45%);white-space:nowrap;">${v(e)}</th>`).join(``)}
            </tr>
          </thead>
          <tbody>
            ${t.mahasiswa.map((e,t)=>{let n=Math.round(e.kehadiran/14*100),r=Array.from({length:14},(t,n)=>n<e.kehadiran?`✓`:`✗`);for(let t=r.length-1;t>0;t--){let n=Math.floor((e.nim.charCodeAt(e.nim.length-1)+t)%(t+1));[r[t],r[n]]=[r[n],r[t]]}return`<tr>
                <td>${t+1}.</td>
                <td><strong>${e.nim}</strong></td>
                <td style="white-space:nowrap;">${e.nama}</td>
                ${r.map((t,n)=>`<td style="text-align:center;">
                  <span class="absensi-cell" data-nim="${e.nim}" data-pertemuan="${n+1}" style="display:inline-block;width:22px;height:22px;line-height:22px;border-radius:4px;cursor:pointer;font-size:0.7rem;font-weight:700;background:${t===`✓`?`hsl(150 60% 45%)`:`hsl(0 55% 52%)`};color:white;text-align:center;transition:background 0.15s;">${t===`✓`?`H`:`A`}</span>
                </td>`).join(``)}
                <td style="text-align:center;font-weight:700;">${e.kehadiran}</td>
                <td style="text-align:center;"><span style="background:${n>=85?`hsl(150 60% 45%)`:n>=75?`hsl(40 80% 50%)`:`hsl(0 60% 50%)`};color:white;padding:2px 8px;border-radius:10px;font-size:0.68rem;font-weight:600;">${n}%</span></td>
              </tr>`}).join(``)}
          </tbody>
        </table>
      </div>
    </div>
    <div style="margin-top:12px;padding:12px 16px;background:hsl(200 60% 94%);border-left:4px solid hsl(200 60% 50%);border-radius:0 8px 8px 0;">
      <strong style="font-size:0.78rem;">💡 Keterangan:</strong>
      <span style="font-size:0.75rem;color:hsl(215 15% 40%);"> Klik kotak H/A/I/S pada tabel untuk mengubah status kehadiran. </span>
      <div style="display:flex;gap:10px;margin-top:8px;">
        <span style="display:inline-flex;align-items:center;gap:4px;font-size:0.7rem;"><span style="width:18px;height:18px;border-radius:3px;background:hsl(150 60% 45%);display:inline-block;"></span> Hadir (H)</span>
        <span style="display:inline-flex;align-items:center;gap:4px;font-size:0.7rem;"><span style="width:18px;height:18px;border-radius:3px;background:hsl(40 80% 50%);display:inline-block;"></span> Izin (I)</span>
        <span style="display:inline-flex;align-items:center;gap:4px;font-size:0.7rem;"><span style="width:18px;height:18px;border-radius:3px;background:hsl(30 70% 52%);display:inline-block;"></span> Sakit (S)</span>
        <span style="display:inline-flex;align-items:center;gap:4px;font-size:0.7rem;"><span style="width:18px;height:18px;border-radius:3px;background:hsl(0 55% 52%);display:inline-block;"></span> Alpa (A)</span>
      </div>
    </div>`}function Ge(){document.querySelectorAll(`.absensi-class-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.kelasIdx),n=document.getElementById(`absensiClassGrid`),r=document.getElementById(`absensiDetailView`);n&&(n.style.display=`none`),r&&(r.style.display=`block`,r.innerHTML=We(t),document.getElementById(`backToClassList`)?.addEventListener(`click`,()=>{r.style.display=`none`,r.innerHTML=``,n.style.display=`grid`}),Ke(r),qe(r,t))}),e.addEventListener(`mouseenter`,()=>{e.style.borderColor=`hsl(210 55% 50%)`,e.style.transform=`translateY(-2px)`,e.style.boxShadow=`0 4px 12px rgba(0,0,0,0.1)`}),e.addEventListener(`mouseleave`,()=>{e.style.borderColor=`transparent`,e.style.transform=`none`,e.style.boxShadow=`none`})})}function Ke(e){e.querySelectorAll(`.absensi-cell`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=[{label:`H`,bg:`hsl(150 60% 45%)`},{label:`I`,bg:`hsl(40 80% 50%)`},{label:`S`,bg:`hsl(30 70% 52%)`},{label:`A`,bg:`hsl(0 55% 52%)`}],r=e.textContent.trim(),i=n[(n.findIndex(e=>e.label===r)+1)%n.length];e.textContent=i.label,e.style.background=i.bg;let a=e.closest(`tr`);if(a){let e=a.querySelectorAll(`.absensi-cell`),t=Array.from(e).filter(e=>e.textContent.trim()===`H`).length,n=a.querySelectorAll(`td`);if(n.length>=2){n[n.length-2].textContent=t;let r=Math.round(t/e.length*100);n[n.length-1].innerHTML=`<span style="background:${r>=85?`hsl(150 60% 45%)`:r>=75?`hsl(40 80% 50%)`:`hsl(0 60% 50%)`};color:white;padding:2px 8px;border-radius:10px;font-size:0.68rem;font-weight:600;">${r}%</span>`}}})})}function qe(e,t){window.__simpanAbsensi=async function(){let n=(window._dosenJadwalCache||[])[t],r=[];e.querySelectorAll(`.absensi-cell`).forEach(e=>{r.push({krs_id:0,nim:e.dataset.nim,pertemuan:parseInt(e.dataset.pertemuan),status:e.textContent.trim()})});let i=document.getElementById(`btnSimpanAbsensi`);i&&(i.textContent=`⏳ Menyimpan...`,i.disabled=!0),n.mahasiswa.forEach(e=>{e.kehadiran=r.filter(t=>t.nim===e.nim).filter(e=>e.status===`H`).length});try{let e=await ge(r);i&&(e?(i.textContent=`✅ Tersimpan!`,i.style.background=`hsl(150 60% 40%)`):(i.textContent=`✅ Tersimpan (Lokal)`,i.style.background=`hsl(40 70% 48%)`))}catch{i&&(i.textContent=`✅ Tersimpan (Lokal)`,i.style.background=`hsl(40 70% 48%)`)}setTimeout(()=>{i&&(i.textContent=`💾 Simpan Absensi`,i.style.background=`hsl(150 55% 45%)`,i.disabled=!1)},2500)},window.__cetakRekap=function(){let n=(window._dosenJadwalCache||[])[t],r=[];e.querySelectorAll(`tbody tr`).forEach((e,t)=>{let i=e.querySelectorAll(`.absensi-cell`),a=Array.from(i).map(e=>e.textContent.trim()),o=a.filter(e=>e===`H`).length,s=a.filter(e=>e===`I`).length,c=a.filter(e=>e===`S`).length,l=a.filter(e=>e===`A`).length;r.push({no:t+1,nim:n.mahasiswa[t]?.nim||`-`,nama:n.mahasiswa[t]?.nama||`-`,attendance:a,hadir:o,izin:s,sakit:c,alpa:l,pct:Math.round(o/14*100)})});let i=window.open(``,`_blank`,`width=900,height=700`);i.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Rekap Absensi - ${n.nama}</title>
        <style>
          body { font-family: 'Segoe UI', sans-serif; padding: 30px; color: #333; }
          h2 { text-align: center; margin-bottom: 4px; }
          .info { text-align: center; font-size: 13px; color: #666; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; font-size: 12px; }
          th, td { border: 1px solid #bbb; padding: 6px 8px; text-align: center; }
          th { background: #2c3e50; color: white; }
          .hadir { background: #27ae60; color: white; font-weight: 700; }
          .izin { background: #f39c12; color: white; font-weight: 700; }
          .sakit { background: #e67e22; color: white; font-weight: 700; }
          .alpa { background: #e74c3c; color: white; font-weight: 700; }
          tfoot td { font-weight: 700; background: #ecf0f1; }
          @media print { body { padding: 10px; } }
        </style>
      </head>
      <body>
        <h2>REKAP ABSENSI</h2>
        <h3 style="text-align:center;margin:4px 0;">${n.kode} — ${n.nama} (Kelas ${n.kelas})</h3>
        <div class="info">${n.hari}, ${n.jam} · Ruang ${n.ruang} · Semester Genap ${new Date().getFullYear()}</div>
        <table>
          <thead>
            <tr>
              <th rowspan="2">No.</th>
              <th rowspan="2">NIM</th>
              <th rowspan="2">Nama</th>
              <th colspan="14">Pertemuan</th>
              <th rowspan="2">H</th>
              <th rowspan="2">I</th>
              <th rowspan="2">S</th>
              <th rowspan="2">A</th>
              <th rowspan="2">%</th>
            </tr>
            <tr>
              ${Array.from({length:14},(e,t)=>`<th>${t+1}</th>`).join(``)}
            </tr>
          </thead>
          <tbody>
            ${r.map(e=>`
              <tr>
                <td>${e.no}</td>
                <td>${e.nim}</td>
                <td style="text-align:left;">${e.nama}</td>
                ${e.attendance.map(e=>`<td class="${e===`H`?`hadir`:e===`I`?`izin`:e===`S`?`sakit`:`alpa`}">${e}</td>`).join(``)}
                <td>${e.hadir}</td>
                <td>${e.izin}</td>
                <td>${e.sakit}</td>
                <td>${e.alpa}</td>
                <td>${e.pct}%</td>
              </tr>
            `).join(``)}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">Rata-rata</td>
              ${Array.from({length:14},(e,t)=>`<td>${r.filter(e=>e.attendance[t]===`H`).length}/${r.length}</td>`).join(``)}
              <td>${r.reduce((e,t)=>e+t.hadir,0)}</td>
              <td>${r.reduce((e,t)=>e+t.izin,0)}</td>
              <td>${r.reduce((e,t)=>e+t.sakit,0)}</td>
              <td>${r.reduce((e,t)=>e+t.alpa,0)}</td>
              <td>${Math.round(r.reduce((e,t)=>e+t.pct,0)/r.length)}%</td>
            </tr>
          </tfoot>
        </table>
        <div style="margin-top:30px;display:flex;justify-content:space-between;font-size:12px;">
          <div>Dicetak: ${new Date().toLocaleDateString(`id-ID`,{day:`numeric`,month:`long`,year:`numeric`})}</div>
          <div style="text-align:center;">Dosen Pengampu<br><br><br><br>_______________________</div>
        </div>
      </body>
      </html>
    `),i.document.close(),setTimeout(()=>i.print(),500)}}function Je(e){let t=(k.reduce((e,t)=>e+t.ipk,0)/k.length).toFixed(2);return`${L(e)}
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>🎓 Bimbingan Akademik (PA) — Dosen Pembimbing</h3></div>
      <div class="dash-card-body">
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;margin-bottom:0;">
          <div style="text-align:center;padding:12px;background:hsl(200 60% 94%);border-radius:8px;">
            <div style="font-size:0.68rem;color:hsl(215 15% 50%);">Total Mahasiswa PA</div>
            <div style="font-size:1.3rem;font-weight:800;color:hsl(200 50% 40%);">${k.length}</div>
          </div>
          <div style="text-align:center;padding:12px;background:hsl(150 50% 94%);border-radius:8px;">
            <div style="font-size:0.68rem;color:hsl(150 40% 40%);">Rata-rata IPK</div>
            <div style="font-size:1.3rem;font-weight:800;color:hsl(150 50% 40%);">${t}</div>
          </div>
          <div style="text-align:center;padding:12px;background:hsl(40 60% 94%);border-radius:8px;">
            <div style="font-size:0.68rem;color:hsl(40 50% 40%);">Status Aktif</div>
            <div style="font-size:1.3rem;font-weight:800;color:hsl(40 60% 45%);">${k.filter(e=>e.status===`Aktif`).length}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dash-card">
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>NIM</th><th>Nama</th><th>Prodi</th><th>Angkatan</th><th>Sem.</th><th>IPK</th><th>SKS Lulus</th><th>Status</th></tr></thead>
          <tbody>
            ${k.map((e,t)=>{let n=e.ipk>=3.5?`hsl(150 60% 45%)`:e.ipk>=3?`hsl(200 55% 50%)`:`hsl(40 80% 50%)`;return`<tr>
                <td>${t+1}.</td>
                <td><strong>${e.nim}</strong></td>
                <td>${e.nama}</td>
                <td>${e.prodi}</td>
                <td style="text-align:center;">${e.angkatan}</td>
                <td style="text-align:center;">${e.semester}</td>
                <td style="text-align:center;"><span style="background:${n};color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${e.ipk}</span></td>
                <td style="text-align:center;">${e.sksLulus}</td>
                <td style="text-align:center;"><span class="badge-sm green">${e.status}</span></td>
              </tr>`}).join(``)}
          </tbody>
        </table>
      </div>
    </div>`}function Ye(e){return`
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${F.users}</div>
        <div class="stat-info"><div class="stat-label">Mahasiswa Aktif</div><div class="stat-value">${e.totalMahasiswa}</div><div class="stat-sub">${e.prodi}</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${F.users}</div>
        <div class="stat-info"><div class="stat-label">Dosen Tetap</div><div class="stat-value">${e.totalDosen}</div><div class="stat-sub">aktif mengajar</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${F.trendUp}</div>
        <div class="stat-info"><div class="stat-label">Rata-rata IPK</div><div class="stat-value">3.42</div><div class="stat-sub">angkatan 2024</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon rose">${F.checkCircle}</div>
        <div class="stat-info"><div class="stat-label">KRS Pending</div><div class="stat-value">12</div><div class="stat-sub">menunggu approval</div></div>
      </div>
    </div>

    <div class="dash-grid">
      <div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Statistik Mahasiswa</h3></div>
          <div class="dash-card-body">
            <table class="sch-table">
              <thead><tr><th>Angkatan</th><th>Aktif</th><th>Cuti</th><th>IPK Rata²</th></tr></thead>
              <tbody>
                <tr><td class="sch-day">2024</td><td>125</td><td>3</td><td>3.42</td></tr>
                <tr><td class="sch-day">2023</td><td>118</td><td>5</td><td>3.38</td></tr>
                <tr><td class="sch-day">2022</td><td>95</td><td>7</td><td>3.45</td></tr>
                <tr><td class="sch-day">2021</td><td>82</td><td>4</td><td>3.51</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Mata Kuliah Semester Ini</h3></div>
          <div class="dash-card-body">
            <table class="sch-table">
              <thead><tr><th>Kode</th><th>Nama MK</th><th>SKS</th><th>Dosen</th></tr></thead>
              <tbody>
                ${f.slice(0,5).map(e=>`<tr><td class="sch-time">${e.mk.substring(0,6)}</td><td>${e.mk}</td><td>3</td><td>${e.dosen}</td></tr>`).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Persetujuan KRS</h3></div>
          <div class="dash-card-body">
            ${[`Ahmad Rizky P.`,`Siti Nurjanah`,`Budi Santoso`,`Dewi Lestari`].map((e,t)=>`
              <div class="task-item">
                <span class="task-dot warning"></span>
                <div class="task-body" style="flex:1;">
                  <h4>${e}</h4>
                  <p>Semester ${4+t} — ${19+t} SKS</p>
                  <div class="task-meta" style="gap:6px;margin-top:6px;">
                    <button style="background:hsl(150 50% 45%);color:#fff;border:none;padding:4px 12px;border-radius:6px;font-size:0.72rem;font-weight:600;cursor:pointer;">Setujui</button>
                    <button style="background:hsl(0 0% 92%);color:hsl(215 15% 40%);border:none;padding:4px 12px;border-radius:6px;font-size:0.72rem;font-weight:600;cursor:pointer;">Tinjau</button>
                  </div>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Agenda Prodi</h3></div>
          <div class="dash-card-body">
            <div class="task-item"><span class="task-dot danger"></span><div class="task-body"><h4>Rapat Kurikulum</h4><p>Senin, 24 Mar — 09:00</p></div></div>
            <div class="task-item"><span class="task-dot info"></span><div class="task-body"><h4>Evaluasi Dosen Semester</h4><p>Rabu, 26 Mar — 13:00</p></div></div>
            <div class="task-item"><span class="task-dot success"></span><div class="task-body"><h4>Sidang Skripsi</h4><p>Jumat, 28 Mar — 08:00</p></div></div>
          </div>
        </div>
      </div>
    </div>`}function Xe(e){return`
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${F.users}</div>
        <div class="stat-info"><div class="stat-label">Total Mahasiswa</div><div class="stat-value">1.250</div><div class="stat-sub">semua prodi</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${F.fileText}</div>
        <div class="stat-info"><div class="stat-label">Surat Keluar</div><div class="stat-value">34</div><div class="stat-sub">bulan ini</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${F.award}</div>
        <div class="stat-info"><div class="stat-label">Calon Wisudawan</div><div class="stat-value">87</div><div class="stat-sub">periode depan</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon purple">${F.barChart}</div>
        <div class="stat-info"><div class="stat-label">Transkrip Cetak</div><div class="stat-value">156</div><div class="stat-sub">tahun ini</div></div>
      </div>
    </div>

    <div class="dash-grid">
      <div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Rekap Mahasiswa per Prodi</h3></div>
          <div class="dash-card-body">
            <table class="sch-table">
              <thead><tr><th>Program Studi</th><th>Aktif</th><th>Cuti</th><th>Total</th></tr></thead>
              <tbody>
                <tr><td class="sch-day">S1 Adm. Publik</td><td>420</td><td>8</td><td>428</td></tr>
                <tr><td class="sch-day">S1 Adm. Bisnis</td><td>380</td><td>5</td><td>385</td></tr>
                <tr><td class="sch-day">S2 Adm. Publik</td><td>120</td><td>2</td><td>122</td></tr>
                <tr><td class="sch-day">D3 Ilmu Adm.</td><td>330</td><td>4</td><td>334</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Kalender Akademik</h3></div>
          <div class="dash-card-body">
            <div class="task-item"><span class="task-dot danger"></span><div class="task-body"><h4>UTS Semester Genap</h4><p>7 - 18 April 2026</p></div></div>
            <div class="task-item"><span class="task-dot info"></span><div class="task-body"><h4>Batas Pengisian KRS</h4><p>31 Maret 2026</p></div></div>
            <div class="task-item"><span class="task-dot warning"></span><div class="task-body"><h4>UAS Semester Genap</h4><p>16 - 27 Juni 2026</p></div></div>
            <div class="task-item"><span class="task-dot success"></span><div class="task-body"><h4>Wisuda Periode Juli</h4><p>19 Juli 2026</p></div></div>
          </div>
        </div>
      </div>
      <div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Surat Terbaru</h3></div>
          <div class="dash-card-body">
            ${[`Surat Keterangan Aktif — Ahmad R.`,`Transkrip Nilai — Siti N.`,`Surat Rekomendasi — Budi S.`,`Legalisir Ijazah — Dewi L.`].map((e,t)=>`
              <div class="task-item">
                <span class="task-dot ${[`success`,`info`,`warning`,`success`][t]}"></span>
                <div class="task-body">
                  <h4>${e}</h4>
                  <p>${[`Selesai`,`Proses`,`Menunggu`,`Selesai`][t]} — ${20-t} Mar 2026</p>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Aktivitas Terbaru</h3></div>
          <div class="dash-card-body">
            <div class="task-item"><span class="task-dot success"></span><div class="task-body"><h4>Cetak transkrip berhasil</h4><p>Ahmad Rizky P. — 10 menit lalu</p></div></div>
            <div class="task-item"><span class="task-dot info"></span><div class="task-body"><h4>Pendaftaran wisuda baru</h4><p>Siti Aminah — 1 jam lalu</p></div></div>
            <div class="task-item"><span class="task-dot warning"></span><div class="task-body"><h4>Verifikasi data mahasiswa</h4><p>3 data menunggu verifikasi</p></div></div>
          </div>
        </div>
      </div>
    </div>`}function Ze(){try{let e=localStorage.getItem(`siakad_kelas_list`);if(e)return JSON.parse(e)}catch{}return[`RA-101`,`RA-201`,`RA-202`,`RA-203`,`RA-204`,`RA-205`,`RN-101`,`RN-102`,`RN-103`,`RN-104`,`RN-105`,`LAB-K1`]}function Qe(e){localStorage.setItem(`siakad_kelas_list`,JSON.stringify(e))}function $e(){let e=new Date().getFullYear();Ze();let t=[];[`niaga`,`negara`].forEach(e=>{let n=w[e];n&&n.semester.forEach(r=>{r.mk.forEach(i=>{t.push({...i,prodi:e,prodiNama:n.nama,semester:r.no})})})}),l.filter(e=>e.status===`Aktif`).map(e=>e.nama),ve();let n={Offline:`hsl(210 55% 50%)`,Online:`hsl(150 55% 45%)`,Hybrid:`hsl(275 55% 55%)`},r={Offline:`hsl(210 50% 94%)`,Online:`hsl(150 50% 94%)`,Hybrid:`hsl(275 50% 94%)`},i={niaga:`hsl(35 75% 50%)`,negara:`hsl(145 55% 45%)`},a={niaga:`hsl(35 70% 94%)`,negara:`hsl(145 50% 93%)`},o=JADWAL_DUMMY.filter(e=>e.tipeKelas===`Online`).length,s=JADWAL_DUMMY.filter(e=>e.tipeKelas===`Offline`).length,c=JADWAL_DUMMY.filter(e=>e.tipeKelas===`Hybrid`).length,u=JADWAL_DUMMY.filter(e=>e.prodi===`niaga`).length,d=JADWAL_DUMMY.filter(e=>e.prodi===`negara`).length;return`
    <div class="dash-card" style="margin-bottom:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,hsl(210 55% 35%),hsl(200 50% 48%));padding:24px 28px;">
        <div style="font-size:1.2rem;font-weight:700;color:white;">\ud83d\udcc5 Manajemen Jadwal Perkuliahan</div>
        <div style="font-size:0.82rem;color:rgba(255,255,255,0.75);margin-top:4px;">Semester Genap ${e} \u2014 Kelola ruang, jam, dan tipe kelas \u2022 ${t.length} Mata Kuliah tersedia</div>
      </div>
      <div class="dash-card-body">
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;margin-bottom:0;">
          <div style="text-align:center;padding:14px;background:hsl(210 50% 96%);border-radius:8px;">
            <div style="font-size:0.65rem;color:hsl(215 15% 50%);">Total Jadwal</div>
            <div style="font-size:1.5rem;font-weight:800;color:hsl(210 50% 40%);">${JADWAL_DUMMY.length}</div>
          </div>
          <div style="text-align:center;padding:14px;background:hsl(35 70% 94%);border-radius:8px;">
            <div style="font-size:0.65rem;color:hsl(35 60% 40%);">\ud83c\udfea Adm. Niaga</div>
            <div style="font-size:1.5rem;font-weight:800;color:hsl(35 75% 50%);">${u}</div>
          </div>
          <div style="text-align:center;padding:14px;background:hsl(145 50% 93%);border-radius:8px;">
            <div style="font-size:0.65rem;color:hsl(145 40% 38%);">\ud83c\udfe6 Adm. Negara</div>
            <div style="font-size:1.5rem;font-weight:800;color:hsl(145 55% 45%);">${d}</div>
          </div>
          <div style="text-align:center;padding:14px;background:hsl(210 50% 94%);border-radius:8px;">
            <div style="font-size:0.65rem;color:hsl(210 45% 45%);">\ud83c\udfeb Offline</div>
            <div style="font-size:1.5rem;font-weight:800;color:hsl(210 55% 50%);">${s}</div>
          </div>
          <div style="text-align:center;padding:14px;background:hsl(150 50% 94%);border-radius:8px;">
            <div style="font-size:0.65rem;color:hsl(150 40% 40%);">\ud83c\udf10 Online</div>
            <div style="font-size:1.5rem;font-weight:800;color:hsl(150 55% 45%);">${o}</div>
          </div>
          <div style="text-align:center;padding:14px;background:hsl(275 50% 94%);border-radius:8px;">
            <div style="font-size:0.65rem;color:hsl(275 40% 45%);">\ud83d\udd04 Hybrid</div>
            <div style="font-size:1.5rem;font-weight:800;color:hsl(275 55% 55%);">${c}</div>
          </div>
        </div>
      </div>
    </div>

    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
        <select id="jadwalFilterProdi" style="padding:7px 12px;border:1px solid hsl(215 20% 85%);border-radius:8px;font-size:0.78rem;font-weight:600;">
          <option value="">Semua Prodi</option>
          <option value="niaga">\ud83c\udfea Adm. Niaga</option>
          <option value="negara">\ud83c\udfe6 Adm. Negara</option>
        </select>
        <select id="jadwalFilterSmt" style="padding:7px 12px;border:1px solid hsl(215 20% 85%);border-radius:8px;font-size:0.78rem;font-weight:600;">
          <option value="">Semua Smt</option>
          <option value="1">Smt 1</option><option value="2">Smt 2</option><option value="3">Smt 3</option><option value="4">Smt 4</option>
          <option value="5">Smt 5</option><option value="6">Smt 6</option><option value="7">Smt 7</option><option value="8">Smt 8</option>
        </select>
        <select id="jadwalFilterHari" style="padding:7px 12px;border:1px solid hsl(215 20% 85%);border-radius:8px;font-size:0.78rem;font-weight:600;">
          <option value="">Semua Hari</option>
          <option>Senin</option><option>Selasa</option><option>Rabu</option><option>Kamis</option><option>Jumat</option><option>Sabtu</option>
        </select>
        <select id="jadwalFilterTipe" style="padding:7px 12px;border:1px solid hsl(215 20% 85%);border-radius:8px;font-size:0.78rem;font-weight:600;">
          <option value="">Semua Tipe</option>
          <option>Offline</option><option>Online</option><option>Hybrid</option>
        </select>
        <select id="jadwalFilterDosen" style="padding:7px 12px;border:1px solid hsl(215 20% 85%);border-radius:8px;font-size:0.78rem;font-weight:600;max-width:220px;">
          <option value="">Semua Dosen</option>
          ${[...new Set(JADWAL_DUMMY.map(e=>e.dosen).filter(e=>e&&e!==`-`))].sort().map(e=>`<option value="${e}">${e}</option>`).join(``)}
        </select>

      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span id="jadwalCount" style="font-size:0.72rem;color:hsl(215 15% 55%);font-weight:600;"></span>
        <button id="btnTambahJadwal" style="padding:8px 20px;border-radius:8px;background:linear-gradient(135deg,hsl(150 55% 45%),hsl(160 50% 42%));color:white;border:none;font-weight:700;font-size:0.82rem;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.12);">\u2795 Tambah Jadwal</button>
      </div>
    </div>

    <div id="jadwalFormArea" style="display:none;margin-bottom:16px;"></div>

    <div class="dash-card">
      <div class="dash-card-body" style="padding:0;overflow-x:auto;">
        <table class="sch-table" id="jadwalTable" style="width:100%;font-size:0.78rem;">
          <thead><tr style="background:hsl(215 20% 95%);">
            <th style="width:35px;">No.</th><th>Prodi</th><th>Smt</th><th>Kode MK</th><th>Mata Kuliah</th><th>Dosen Pengampu</th><th>Hari</th><th>Jam</th><th>Ruang</th><th>Tipe</th><th>SKS</th><th style="width:180px;">Aksi</th>
          </tr></thead>
          <tbody>
            ${JADWAL_DUMMY.map((e,t)=>{let o=n[e.tipeKelas]||`hsl(215 15% 50%)`,s=r[e.tipeKelas]||`hsl(215 20% 95%)`,c=e.tipeKelas===`Online`?`🌐`:e.tipeKelas===`Hybrid`?`🔄`:`🏫`,l=i[e.prodi]||`hsl(215 15% 50%)`,u=a[e.prodi]||`hsl(215 20% 95%)`,d=e.prodi===`niaga`?`Niaga`:`Negara`,f=_(e.hari,14),p=e.modePertemuan||Array(14).fill(`offline`),m=p.filter(e=>e===`online`).length,h=14-m;return`<tr data-id="${e.id}" data-prodi="${e.prodi}" data-smt="${e.semester}" data-hari="${e.hari}" data-tipe="${e.tipeKelas}" data-dosen="${e.dosen}">
                <td>${t+1}.</td>
                <td><span style="padding:2px 8px;border-radius:10px;font-size:0.62rem;font-weight:700;background:${u};color:${l};">${d}</span></td>
                <td style="text-align:center;"><span style="display:inline-block;width:22px;height:22px;line-height:22px;border-radius:50%;background:hsl(215 20% 92%);font-size:0.65rem;font-weight:800;color:hsl(215 30% 45%);">${e.semester}</span></td>
                <td><strong>${e.kodeMK}</strong></td>
                <td style="white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;">${e.namaMK}</td>
                <td style="white-space:nowrap;font-size:0.72rem;max-width:180px;overflow:hidden;text-overflow:ellipsis;">${e.dosen}</td>
                <td><strong>${e.hari}</strong></td>
                <td class="sch-time" style="white-space:nowrap;">${e.jamMulai}-${e.jamSelesai}</td>
                <td style="font-weight:600;font-size:0.72rem;">${e.tipeKelas===`Online`?`<span style="color:hsl(215 15% 60%);font-style:italic;">— (Online)</span>`:e.ruang}</td>
                <td><span style="padding:3px 10px;border-radius:12px;font-size:0.68rem;font-weight:700;background:${s};color:${o};">${c} ${e.tipeKelas}</span></td>

                <td style="text-align:center;">${e.sks}</td>
                <td style="text-align:center;white-space:nowrap;">
                  <button class="jadwal-date-btn" data-id="${e.id}" title="Lihat Detail Pertemuan" style="font-size:0.6rem;padding:3px 6px;border-radius:4px;cursor:pointer;background:linear-gradient(135deg,hsl(200 60% 50%),hsl(210 55% 45%));color:white;border:none;font-weight:700;margin-right:2px;">📆</button>
                  <button class="jadwal-ai-btn" data-id="${e.id}" title="AI Rekomendasi Jadwal" style="font-size:0.6rem;padding:3px 6px;border-radius:4px;cursor:pointer;background:linear-gradient(135deg,hsl(260 65% 55%),hsl(280 55% 50%));color:white;border:none;font-weight:700;margin-right:3px;">\ud83e\udd16</button>
                  <button class="jadwal-edit-btn" data-id="${e.id}" style="font-size:0.65rem;padding:3px 8px;border-radius:4px;cursor:pointer;background:hsl(40 80% 50%);color:white;border:none;font-weight:600;">\u270f\ufe0f Edit</button>
                  <button class="jadwal-del-btn" data-id="${e.id}" style="font-size:0.65rem;padding:3px 8px;border-radius:4px;cursor:pointer;background:hsl(0 55% 52%);color:white;border:none;font-weight:600;margin-left:3px;">\ud83d\uddd1\ufe0f</button>
                </td>
              </tr>
              <tr class="jadwal-detail-row" data-parent-id="${e.id}" style="display:none;">
                <td colspan="12" style="padding:0;border-top:none;">
                  <div style="background:linear-gradient(180deg,hsl(210 30% 97%),hsl(210 20% 99%));padding:14px 18px;border-top:2px solid hsl(200 55% 75%);">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px;">
                      <div>
                        <div style="font-size:0.78rem;font-weight:700;color:hsl(210 50% 38%);">📆 Detail 14 Pertemuan — ${e.kodeMK} ${e.namaMK}</div>
                        <div style="font-size:0.62rem;color:hsl(215 15% 55%);margin-top:2px;">💡 Klik kartu untuk atur jadwal, tanggal, dan jam pertemuan • Cocok untuk kelas pengganti</div>
                      </div>
                      <div style="display:flex;gap:8px;align-items:center;">
                        <span class="jadwal-mode-legend" data-jid="${e.id}" style="display:inline-flex;gap:8px;font-size:0.65rem;">
                          <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:8px;height:8px;border-radius:2px;background:hsl(210 55% 50%);display:inline-block;"></span> Offline (🏫 <span class="off-count">${h}</span>)</span>
                          <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:8px;height:8px;border-radius:2px;background:hsl(150 60% 45%);display:inline-block;"></span> Online (🌐 <span class="on-count">${m}</span>)</span>
                        </span>
                        <button class="jadwal-save-mode-btn" data-jid="${e.id}" style="font-size:0.62rem;padding:4px 12px;border-radius:6px;cursor:pointer;background:linear-gradient(135deg,hsl(150 55% 45%),hsl(160 50% 42%));color:white;border:none;font-weight:700;display:none;">💾 Simpan</button>
                      </div>
                    </div>
                    <div class="jadwal-pertemuan-grid" data-jid="${e.id}" style="display:grid;grid-template-columns:repeat(14,1fr);gap:4px;">
                      ${f.map((t,n)=>{let r=e.customSchedule&&e.customSchedule[n],i=r&&r.mode||p[n],a=i===`online`,o=t.getFullYear()+`-`+String(t.getMonth()+1).padStart(2,`0`)+`-`+String(t.getDate()).padStart(2,`0`),s=r&&r.date?r.date:o,c=r&&r.date?new Date(r.date+`T00:00:00`):t,l=r&&r.date&&r.date!==o,u=r&&r.start?r.start:e.jamMulai,d=r&&r.end?r.end:e.jamSelesai,f=r&&r.note?r.note:``,m=l?`linear-gradient(135deg,hsl(40 65% 92%),hsl(40 60% 88%))`:a?`linear-gradient(135deg,hsl(150 50% 92%),hsl(150 45% 88%))`:`linear-gradient(135deg,hsl(210 40% 95%),hsl(210 35% 91%))`,h=l?`hsl(40 65% 65%)`:a?`hsl(150 55% 70%)`:`hsl(210 40% 82%)`,g=l?`🔄`:a?`🌐`:`🏫`,_=l?`Pengganti`:a?`Online`:`Offline`,b=l?`hsl(40 65% 35%)`:a?`hsl(150 55% 35%)`:`hsl(210 45% 40%)`,x=l?`hsl(40 60% 30%)`:`hsl(210 40% 38%)`;return`<div class="prt-mode-card" data-jid="${e.id}" data-pi="${n}" data-mode="${i}" data-orig-date="${o}" data-date="${s}" data-start="${u}" data-end="${d}" data-note="${f.replace(/"/g,`&quot;`)}" style="background:${m};border:1px solid ${h};border-radius:8px;padding:5px 3px;text-align:center;cursor:pointer;transition:all 0.2s ease;user-select:none;position:relative;" title="${y(c)} — ${_} • ${u}-${d}${f?` • 📝 `+f:``} (Klik untuk edit)" onclick="window.__openPertemuanEdit && window.__openPertemuanEdit(this,${e.id},${n})">
                          <div style="font-size:0.5rem;font-weight:800;color:hsl(210 30% 45%);">P${n+1}</div>
                          <div class="prt-date-label" style="font-size:0.58rem;font-weight:700;color:${x};margin:1px 0;">${v(c)}</div>
                          <div class="prt-time-label" style="font-size:0.48rem;color:hsl(215 20% 50%);margin-bottom:1px;">${u}-${d}</div>
                          <div class="prt-icon" style="font-size:0.65rem;">${g}</div>
                          <div class="prt-label" style="font-size:0.46rem;font-weight:700;color:${b};margin-top:1px;">${_}</div>
                          <div class="prt-note-badge" style="${f?``:`display:none;`}position:absolute;top:-4px;right:-4px;width:14px;height:14px;border-radius:50%;background:hsl(40 85% 55%);font-size:0.42rem;line-height:14px;color:white;font-weight:800;" title="${f?`📝 `+f:`Ada catatan`}">📝</div>
                        </div>`}).join(``)}
                    </div>
                  </div>
                </td>
              </tr>`}).join(``)}
          </tbody>
        </table>
      </div>
    </div>

    <div style="margin-top:16px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
      <div style="padding:14px 20px;background:hsl(200 60% 94%);border-left:4px solid hsl(200 60% 50%);border-radius:0 8px 8px 0;">
        <strong style="font-size:0.82rem;">\ud83d\udca1 Tipe Kelas:</strong>
        <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;">
          <span style="display:inline-flex;align-items:center;gap:4px;font-size:0.68rem;"><span style="padding:2px 8px;border-radius:10px;background:hsl(210 50% 94%);color:hsl(210 55% 50%);font-weight:700;font-size:0.62rem;">\ud83c\udfeb Offline</span> Tatap muka</span>
          <span style="display:inline-flex;align-items:center;gap:4px;font-size:0.68rem;"><span style="padding:2px 8px;border-radius:10px;background:hsl(150 50% 94%);color:hsl(150 55% 45%);font-weight:700;font-size:0.62rem;">\ud83c\udf10 Online</span> Daring</span>
          <span style="display:inline-flex;align-items:center;gap:4px;font-size:0.68rem;"><span style="padding:2px 8px;border-radius:10px;background:hsl(275 50% 94%);color:hsl(275 55% 55%);font-weight:700;font-size:0.62rem;">\ud83d\udd04 Hybrid</span> Kombinasi</span>
        </div>
      </div>
      <div style="padding:14px 20px;background:hsl(35 70% 94%);border-left:4px solid hsl(35 65% 50%);border-radius:0 8px 8px 0;">
        <strong style="font-size:0.82rem;">\ud83c\udfe2 Kode Ruang:</strong>
        <div style="font-size:0.68rem;margin-top:6px;color:hsl(35 60% 35%);display:flex;flex-direction:column;gap:3px;">
          <span><strong>RN-1xx</strong> = Ruang Adm. Niaga</span>
          <span><strong>RA-2xx</strong> = Ruang Adm. Negara</span>
          <span><strong>LAB-Kx</strong> = Lab Komputer</span>
        </div>
      </div>
      <div style="padding:14px 20px;background:hsl(145 50% 93%);border-left:4px solid hsl(145 55% 45%);border-radius:0 8px 8px 0;">
        <strong style="font-size:0.82rem;">\ud83c\udf93 Data MK:</strong>
        <div style="font-size:0.68rem;margin-top:6px;color:hsl(145 40% 30%);display:flex;flex-direction:column;gap:3px;">
          <span>Adm. Niaga: <strong>${u} jadwal</strong></span>
          <span>Adm. Negara: <strong>${d} jadwal</strong></span>
          <span>Total: <strong>${JADWAL_DUMMY.length} jadwal</strong> aktif</span>
        </div>
      </div>
    </div>

    <!-- AI Recommendation Modal -->
    <div id="aiModal" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);align-items:center;justify-content:center;">
      <div style="background:white;border-radius:16px;width:95%;max-width:740px;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,0.3);">
        <div style="background:linear-gradient(135deg,hsl(260 55% 42%),hsl(280 50% 55%));padding:20px 24px;border-radius:16px 16px 0 0;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:1.1rem;font-weight:800;color:white;">\ud83e\udd16 AI Scheduling Assistant</div>
              <div style="font-size:0.72rem;color:rgba(255,255,255,0.8);margin-top:2px;">Powered by Python AI Engine \u2022 STIA Bayuangga</div>
            </div>
            <button id="aiModalClose" style="background:rgba(255,255,255,0.2);border:none;color:white;font-size:1.2rem;cursor:pointer;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;">\u2715</button>
          </div>
        </div>
        <div id="aiModalBody" style="padding:20px 24px;"></div>
      </div>
    </div>

    <div style="margin-top:12px;">
      <div class="dash-card" style="overflow:hidden;">
        <div style="background:linear-gradient(135deg,hsl(200 50% 42%),hsl(210 45% 50%));padding:14px 20px;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:0.92rem;font-weight:700;color:white;">\ud83c\udfe2 Manajemen Ruangan</div>
            <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);margin-top:2px;">Tambah, edit, atau hapus nama ruangan kuliah sesuai kebutuhan</div>
          </div>
          <button id="btnToggleKelasPanel" style="padding:6px 16px;border-radius:6px;background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.3);color:white;font-size:0.75rem;font-weight:600;cursor:pointer;">\u2699\ufe0f Kelola Ruangan</button>
        </div>
        <div id="kelasPanelBody" style="display:none;">
          <div class="dash-card-body" style="padding:16px 20px;">
            <div style="display:flex;gap:10px;margin-bottom:14px;align-items:flex-end;">
              <div style="flex:1;max-width:280px;">
                <label style="font-size:0.72rem;font-weight:600;color:hsl(215 15% 45%);display:block;margin-bottom:4px;">Nama Ruangan Baru</label>
                <input id="kelasNewInput" type="text" placeholder="cth: RA-101, RN-201, LAB-K1..." style="width:100%;padding:8px 12px;border:1px solid hsl(215 20% 85%);border-radius:6px;font-size:0.8rem;box-sizing:border-box;">
              </div>
              <button id="btnAddKelas" style="padding:8px 18px;border-radius:6px;background:linear-gradient(135deg,hsl(200 50% 42%),hsl(210 45% 50%));color:white;border:none;font-weight:700;font-size:0.8rem;cursor:pointer;white-space:nowrap;">\u2795 Tambah</button>
            </div>
            <div id="kelasListContainer" style="display:flex;flex-wrap:wrap;gap:8px;"></div>
            <div style="margin-top:12px;font-size:0.68rem;color:hsl(215 15% 55%);">\ud83d\udca1 Klik nama ruangan untuk edit \u2022 Klik \u00d7 untuk hapus \u2022 Data tersimpan otomatis</div>
          </div>
        </div>
      </div>
    </div>
    </div>`}function et(e){let t=!!e,n=[`Senin`,`Selasa`,`Rabu`,`Kamis`,`Jumat`,`Sabtu`],r=`padding:8px 12px;border:1px solid hsl(215 20% 85%);border-radius:6px;font-size:0.8rem;width:100%;box-sizing:border-box;`,i=`font-size:0.72rem;font-weight:600;color:hsl(215 15% 45%);margin-bottom:4px;display:block;`;function a(t){let n=w[t];if(!n)return``;let r=``;return n.semester.forEach(t=>{r+=`<optgroup label="Semester ${t.no}">`,t.mk.forEach(t=>{let n=e&&e.kodeMK===t.kode?` selected`:``;r+=`<option value="${t.kode}" data-nama="${t.nama}" data-dosen="${t.dosen}" data-sks="${t.sks}"${n}>${t.kode} \u2014 ${t.nama} (${t.sks} SKS)</option>`}),r+=`</optgroup>`}),r}let o=l.filter(e=>e.status===`Aktif`).map(t=>{let n=e&&e.dosen===t.nama?` selected`:``;return`<option value="${t.nama}"${n}>${t.nama}</option>`}).join(``),s=e?.prodi||`niaga`;return`
    <div class="dash-card" style="overflow:hidden;border:2px solid hsl(210 55% 50%);">
      <div style="background:linear-gradient(135deg,hsl(210 55% 42%),hsl(200 50% 55%));padding:14px 20px;">
        <div style="font-size:0.95rem;font-weight:700;color:white;">${t?`✏️ Edit Jadwal`:`➕ Tambah Jadwal Baru`}</div>
        <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);margin-top:2px;">Pilih prodi terlebih dahulu, lalu pilih mata kuliah dari kurikulum</div>
      </div>
      <div class="dash-card-body" style="padding:20px;">
        <!-- Row 1: Prodi + MK -->
        <div style="display:grid;grid-template-columns:200px 1fr;gap:14px;margin-bottom:14px;">
          <div>
            <label style="${i}">\ud83c\udf93 Program Studi</label>
            <select id="jfProdi" style="${r}font-weight:600;">
              <option value="niaga"${s===`niaga`?` selected`:``}>\ud83c\udfea Adm. Niaga</option>
              <option value="negara"${s===`negara`?` selected`:``}>\ud83c\udfe6 Adm. Negara</option>
            </select>
          </div>
          <div>
            <label style="${i}">\ud83d\udcda Mata Kuliah <span style="font-size:0.62rem;color:hsl(150 50% 45%);">(otomatis dari kurikulum)</span></label>
            <select id="jfMK" style="${r}">
              <option value="">-- Pilih Mata Kuliah --</option>
              ${a(s)}
            </select>
          </div>
        </div>
        <!-- Row 2: Details auto-filled -->
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px;margin-bottom:14px;">
          <div><label style="${i}">Kode MK</label><input id="jfKode" type="text" value="${e?.kodeMK||``}" readonly style="${r}background:hsl(215 20% 97%);color:hsl(215 15% 55%);"></div>
          <div><label style="${i}">Dosen Pengampu <span style="font-size:0.62rem;color:hsl(200 50% 50%);">(bisa diganti)</span></label>
            <select id="jfDosen" style="${r}">
              <option value="">-- Pilih Dosen --</option>
              ${o}
            </select>
          </div>
          <div><label style="${i}">SKS</label><input id="jfSks" type="number" value="${e?.sks||``}" readonly style="${r}background:hsl(215 20% 97%);width:80px;font-weight:700;"></div>
        </div>
        <!-- Row 3: Schedule -->
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:14px;margin-bottom:14px;">
          <div><label style="${i}">Hari</label><select id="jfHari" style="${r}">${n.map(t=>`<option${e?.hari===t?` selected`:``}>${t}</option>`).join(``)}</select></div>
          <div><label style="${i}">Jam Mulai</label><input id="jfMulai" type="time" value="${e?.jamMulai||`07:30`}" style="${r}"></div>
          <div><label style="${i}">Jam Selesai</label><input id="jfSelesai" type="time" value="${e?.jamSelesai||`09:10`}" style="${r}"></div>
          <div><label style="${i}">Tipe Kelas</label>
            <div style="display:flex;gap:6px;margin-top:2px;" id="jfTipeGroup">
              ${[`Offline`,`Online`,`Hybrid`].map(t=>{let n=(e?.tipeKelas||`Offline`)===t,r=t===`Offline`?`🏫`:t===`Online`?`🌐`:`🔄`,i=t===`Offline`?`hsl(210 55% 50%)`:t===`Online`?`hsl(150 55% 45%)`:`hsl(275 55% 55%)`;return`<button class="tipe-kelas-opt" data-tipe="${t}" style="flex:1;padding:8px 6px;border-radius:6px;cursor:pointer;font-size:0.72rem;font-weight:700;border:2px solid ${n?i:`hsl(215 20% 85%)`};background:${n?i:`white`};color:${n?`white`:i};transition:all 0.2s;">${r} ${t}</button>`}).join(``)}
            </div>
          </div>
          <div id="jfRuangWrap"><label style="${i}">Ruang Kelas</label><input id="jfRuang" type="text" value="${e?.ruang||``}" placeholder="RA-201" style="${r}"></div>
        </div>
        <div style="display:flex;gap:10px;margin-top:18px;justify-content:flex-end;">
          <button id="jfCancel" style="padding:8px 20px;border-radius:6px;background:hsl(215 20% 92%);color:hsl(215 20% 35%);border:1px solid hsl(215 20% 82%);font-weight:600;font-size:0.8rem;cursor:pointer;">Batal</button>
          <button id="jfSave" style="padding:8px 24px;border-radius:6px;background:linear-gradient(135deg,hsl(150 55% 45%),hsl(160 50% 42%));color:white;border:none;font-weight:700;font-size:0.8rem;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.12);">\ud83d\udcbe ${t?`Simpan Perubahan`:`Tambah Jadwal`}</button>
        </div>
      </div>
    </div>`}function tt(){let e=document.getElementById(`jadwalFormArea`);function t(){let e=document.getElementById(`jadwalFilterProdi`)?.value||``,t=document.getElementById(`jadwalFilterSmt`)?.value||``,n=document.getElementById(`jadwalFilterHari`)?.value||``,r=document.getElementById(`jadwalFilterTipe`)?.value||``,i=document.getElementById(`jadwalFilterDosen`)?.value||``,a=0;document.querySelectorAll(`.jadwal-detail-row`).forEach(e=>e.style.display=`none`),document.querySelectorAll(`#jadwalTable tbody tr:not(.jadwal-detail-row)`).forEach(o=>{let s=(!e||o.dataset.prodi===e)&&(!t||o.dataset.smt===t)&&(!n||o.dataset.hari===n)&&(!r||o.dataset.tipe===r)&&(!i||(o.dataset.dosen||``).includes(i));o.style.display=s?``:`none`,s&&a++});let o=document.getElementById(`jadwalCount`);o&&(o.textContent=`Menampilkan ${a} dari ${JADWAL_DUMMY.length} jadwal`)}document.getElementById(`jadwalFilterProdi`)?.addEventListener(`change`,t),document.getElementById(`jadwalFilterSmt`)?.addEventListener(`change`,t),document.getElementById(`jadwalFilterHari`)?.addEventListener(`change`,t),document.getElementById(`jadwalFilterTipe`)?.addEventListener(`change`,t),document.getElementById(`jadwalFilterDosen`)?.addEventListener(`change`,t),t(),document.getElementById(`btnTambahJadwal`)?.addEventListener(`click`,()=>{e.style.display=`block`,e.innerHTML=et(null),e.scrollIntoView({behavior:`smooth`,block:`start`}),m()}),document.querySelectorAll(`.jadwal-date-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.id,n=document.querySelector(`.jadwal-detail-row[data-parent-id="${t}"]`);if(n){let t=n.style.display!==`none`;document.querySelectorAll(`.jadwal-detail-row`).forEach(e=>e.style.display=`none`),document.querySelectorAll(`.jadwal-date-btn`).forEach(e=>e.style.background=`linear-gradient(135deg,hsl(200 60% 50%),hsl(210 55% 45%))`),t||(n.style.display=`table-row`,e.style.background=`linear-gradient(135deg,hsl(200 60% 35%),hsl(210 55% 30%))`)}})});let n=document.getElementById(`prt-edit-popup`);n||(n=document.createElement(`div`),n.id=`prt-edit-popup`,n.style.cssText=`display:none;position:absolute;z-index:9999;background:white;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.22);padding:16px;width:300px;border:2px solid hsl(210 40% 82%);`,document.body.appendChild(n)),document.addEventListener(`click`,e=>{n.style.display!==`none`&&!n.contains(e.target)&&!e.target.closest(`.prt-mode-card`)&&(n.style.display=`none`)}),window.__openPertemuanEdit=function(e,t,r){let i=JADWAL_DUMMY.find(e=>e.id===t);if(!i)return;let a=e.dataset.mode||`offline`,o=e.dataset.date,s=e.dataset.origDate,c=e.dataset.start||i.jamMulai,l=e.dataset.end||i.jamSelesai,u=e.dataset.note||``,d=o!==s,f=e.getBoundingClientRect();n.style.display=`block`;let p=Math.min(f.left+window.scrollX,window.innerWidth-320),m=f.bottom+window.scrollY+6;n.style.left=p+`px`,n.style.top=m+`px`,n.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div style="font-size:0.82rem;font-weight:800;color:hsl(210 50% 35%);">📝 Edit Pertemuan ${r+1}</div>
        <button id="prtPopupClose" style="background:none;border:none;font-size:1rem;cursor:pointer;color:hsl(215 15% 50%);">✕</button>
      </div>
      <div style="font-size:0.68rem;color:hsl(215 15% 55%);margin-bottom:12px;padding:6px 8px;background:hsl(210 30% 97%);border-radius:6px;">
        <strong>${i.kodeMK}</strong> — ${i.namaMK}
        ${d?`<span style="margin-left:6px;padding:1px 6px;border-radius:6px;background:hsl(40 85% 55%);color:white;font-size:0.55rem;font-weight:700;">🔄 Reschedule</span>`:``}
      </div>

      <div style="margin-bottom:10px;">
        <label style="font-size:0.68rem;font-weight:700;color:hsl(215 20% 40%);display:block;margin-bottom:3px;">📅 Tanggal</label>
        <input type="date" id="prtEditDate" value="${o}" style="width:100%;padding:6px 8px;border:1px solid hsl(215 20% 82%);border-radius:6px;font-size:0.75rem;box-sizing:border-box;">
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
        <div>
          <label style="font-size:0.68rem;font-weight:700;color:hsl(215 20% 40%);display:block;margin-bottom:3px;">🕐 Jam Mulai</label>
          <input type="time" id="prtEditStart" value="${c}" style="width:100%;padding:6px 8px;border:1px solid hsl(215 20% 82%);border-radius:6px;font-size:0.75rem;box-sizing:border-box;">
        </div>
        <div>
          <label style="font-size:0.68rem;font-weight:700;color:hsl(215 20% 40%);display:block;margin-bottom:3px;">🕐 Jam Selesai</label>
          <input type="time" id="prtEditEnd" value="${l}" style="width:100%;padding:6px 8px;border:1px solid hsl(215 20% 82%);border-radius:6px;font-size:0.75rem;box-sizing:border-box;">
        </div>
      </div>

      <div style="margin-bottom:10px;">
        <label style="font-size:0.68rem;font-weight:700;color:hsl(215 20% 40%);display:block;margin-bottom:5px;">🔀 Mode Kelas</label>
        <div style="display:flex;gap:6px;">
          <button id="prtModeOffline" style="flex:1;padding:6px;border-radius:6px;border:2px solid ${a===`offline`?`hsl(210 55% 50%)`:`hsl(215 20% 85%)`};background:${a===`offline`?`hsl(210 50% 94%)`:`white`};cursor:pointer;font-size:0.7rem;font-weight:700;color:hsl(210 55% 40%);">🏫 Offline</button>
          <button id="prtModeOnline" style="flex:1;padding:6px;border-radius:6px;border:2px solid ${a===`online`?`hsl(150 55% 45%)`:`hsl(215 20% 85%)`};background:${a===`online`?`hsl(150 50% 94%)`:`white`};cursor:pointer;font-size:0.7rem;font-weight:700;color:hsl(150 55% 38%);">🌐 Online</button>
        </div>
      </div>

      <div style="margin-bottom:12px;">
        <label style="font-size:0.68rem;font-weight:700;color:hsl(215 20% 40%);display:block;margin-bottom:3px;">📄 Catatan <span style="font-weight:400;color:hsl(215 15% 60%);">(opsional, misal: Kelas Pengganti)</span></label>
        <input type="text" id="prtEditNote" value="${u}" placeholder="Cth: Kelas Pengganti - Dosen Izin" style="width:100%;padding:6px 8px;border:1px solid hsl(215 20% 82%);border-radius:6px;font-size:0.72rem;box-sizing:border-box;">
      </div>

      <div style="display:flex;gap:6px;justify-content:flex-end;">
        <button id="prtResetBtn" style="padding:5px 12px;border-radius:6px;border:1px solid hsl(215 20% 82%);background:white;cursor:pointer;font-size:0.68rem;font-weight:600;color:hsl(215 15% 50%);">↩️ Reset</button>
        <button id="prtCancelBtn" style="padding:5px 12px;border-radius:6px;border:1px solid hsl(215 20% 82%);background:white;cursor:pointer;font-size:0.68rem;font-weight:600;color:hsl(0 55% 50%);">Batal</button>
        <button id="prtSaveBtn" style="padding:5px 16px;border-radius:6px;border:none;background:linear-gradient(135deg,hsl(150 55% 45%),hsl(160 50% 42%));color:white;cursor:pointer;font-size:0.68rem;font-weight:700;">✅ Simpan</button>
      </div>
    `;let h=a,g=document.getElementById(`prtModeOffline`),_=document.getElementById(`prtModeOnline`);function y(){g.style.borderColor=h===`offline`?`hsl(210 55% 50%)`:`hsl(215 20% 85%)`,g.style.background=h===`offline`?`hsl(210 50% 94%)`:`white`,_.style.borderColor=h===`online`?`hsl(150 55% 45%)`:`hsl(215 20% 85%)`,_.style.background=h===`online`?`hsl(150 50% 94%)`:`white`}g.onclick=e=>{e.stopPropagation(),h=`offline`,y()},_.onclick=e=>{e.stopPropagation(),h=`online`,y()},document.getElementById(`prtPopupClose`).onclick=e=>{e.stopPropagation(),n.style.display=`none`},document.getElementById(`prtCancelBtn`).onclick=e=>{e.stopPropagation(),n.style.display=`none`},document.getElementById(`prtResetBtn`).onclick=e=>{e.stopPropagation(),document.getElementById(`prtEditDate`).value=s,document.getElementById(`prtEditStart`).value=i.jamMulai,document.getElementById(`prtEditEnd`).value=i.jamSelesai,document.getElementById(`prtEditNote`).value=``,h=i.modePertemuan[r],y()},document.getElementById(`prtSaveBtn`).onclick=async a=>{a.stopPropagation();let o=document.getElementById(`prtEditDate`).value,c=document.getElementById(`prtEditStart`).value,l=document.getElementById(`prtEditEnd`).value,u=document.getElementById(`prtEditNote`).value.trim();i.modePertemuan[r]=h,i.customSchedule||={},i.customSchedule[r]={date:o,start:c,end:l,note:u,mode:h};let d=h===`online`,f=o!==s;e.dataset.mode=h,e.dataset.date=o,e.dataset.start=c,e.dataset.end=l,e.dataset.note=u;let p=f?d?`linear-gradient(135deg,hsl(40 70% 92%),hsl(150 40% 90%))`:`linear-gradient(135deg,hsl(40 70% 92%),hsl(40 60% 88%))`:d?`linear-gradient(135deg,hsl(150 50% 92%),hsl(150 45% 88%))`:`linear-gradient(135deg,hsl(210 40% 95%),hsl(210 35% 91%))`,m=f?`hsl(40 70% 65%)`:d?`hsl(150 55% 70%)`:`hsl(210 40% 82%)`;e.style.background=p,e.style.borderColor=m;let g=e.querySelector(`.prt-date-label`),_=e.querySelector(`.prt-time-label`),y=e.querySelector(`.prt-icon`),b=e.querySelector(`.prt-label`),x=e.querySelector(`.prt-note-badge`);if(g){let e=o.split(`-`);g.textContent=v(new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2]))),f?g.style.color=`hsl(40 70% 35%)`:g.style.color=`hsl(210 40% 38%)`}_&&(_.textContent=c+`-`+l,c!==i.jamMulai||l!==i.jamSelesai?_.style.color=`hsl(40 60% 40%)`:_.style.color=`hsl(215 20% 50%)`),y&&(y.textContent=d?`🌐`:`🏫`),b&&(f?(b.textContent=`🔄 Pengganti`,b.style.color=`hsl(40 70% 35%)`,b.style.fontSize=`0.42rem`):(b.textContent=d?`Online`:`Offline`,b.style.color=d?`hsl(150 55% 35%)`:`hsl(210 45% 40%)`,b.style.fontSize=`0.46rem`)),x&&(x.style.display=u?`block`:`none`,x.title=u||`Ada catatan`),e.style.transform=`scale(1.08)`,setTimeout(()=>e.style.transform=`scale(1)`,200);let S=i.modePertemuan.filter(e=>e===`online`).length,C=14-S,w=document.querySelector(`.jadwal-mode-legend[data-jid="${t}"]`);if(w){let e=w.querySelector(`.off-count`),t=w.querySelector(`.on-count`);e&&(e.textContent=C),t&&(t.textContent=S)}let T=document.querySelector(`.jadwal-save-mode-btn[data-jid="${t}"]`);T&&(T.style.display=`inline-block`),n.style.display=`none`;let E=document.createElement(`div`);E.style.cssText=`position:fixed;bottom:24px;right:24px;background:linear-gradient(135deg,hsl(210 50% 42%),hsl(200 45% 38%));color:white;padding:10px 20px;border-radius:8px;font-size:0.75rem;font-weight:600;box-shadow:0 4px 16px rgba(0,0,0,0.18);z-index:99999;`,E.innerHTML=`✏️ P${r+1} diperbarui — ${f?`🔄 Kelas Pengganti`:h===`online`?`🌐 Online`:`🏫 Offline`}${u?` • 📝 `+u:``}`,document.body.appendChild(E),setTimeout(()=>{E.style.opacity=`0`,E.style.transition=`opacity 0.3s`,setTimeout(()=>E.remove(),300)},2500);try{let e=await fetch(`/api/jadwal-pertemuan`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({kode_mk:i.kodeMK,kelas:i.kelas||`B`,pertemuan:r+1,tanggal:o,tanggal_asli:s,jam_mulai:c,jam_selesai:l,mode:h,catatan:u,updated_by:user?.nip||`BAP`})});e.ok?console.log(`✅ P`+(r+1)+` saved to database`):console.warn(`⚠️ Failed to persist jadwal pertemuan:`,await e.text())}catch(e){console.warn(`⚠️ Backend not available, saved in-memory only:`,e.message)}}},document.querySelectorAll(`.jadwal-save-mode-btn`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=parseInt(e.dataset.jid),n=JADWAL_DUMMY.find(e=>e.id===t);if(!n)return;let r=e.textContent;e.textContent=`⏳ Menyimpan...`,e.style.opacity=`0.7`,e.disabled=!0;let i=document.querySelectorAll(`.prt-mode-card[data-jid="${t}"]`),a=[];i.forEach(e=>{let t=parseInt(e.dataset.pi);a.push({pertemuan:t+1,tanggal:e.dataset.date||``,tanggal_asli:e.dataset.origDate||``,jam_mulai:e.dataset.start||n.jamMulai,jam_selesai:e.dataset.end||n.jamSelesai,mode:e.dataset.mode||`offline`,catatan:e.dataset.note||``})});let o=!1;try{(await fetch(`/api/jadwal-pertemuan/bulk`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({kode_mk:n.kodeMK,kelas:n.kelas||`A`,updated_by:`BAP`,items:a})})).ok&&(o=!0)}catch(e){console.warn(`API jadwal-pertemuan not available, saving locally only:`,e.message)}e.textContent=`✅ Tersimpan!`,e.style.background=`linear-gradient(135deg,hsl(150 55% 38%),hsl(160 50% 35%))`,e.style.opacity=`1`;let s=document.createElement(`div`);s.style.cssText=`position:fixed;bottom:24px;right:24px;background:linear-gradient(135deg,hsl(150 55% 42%),hsl(160 50% 38%));color:white;padding:12px 24px;border-radius:10px;font-size:0.82rem;font-weight:700;box-shadow:0 8px 24px rgba(0,0,0,0.2);z-index:99999;`;let c=n.modePertemuan.filter(e=>e===`online`).length,l=14-c,u=n.customSchedule?Object.keys(n.customSchedule).filter(e=>{let r=document.querySelector(`.prt-mode-card[data-jid="${t}"][data-pi="${e}"]`);return r&&n.customSchedule[e].date!==r.dataset.origDate}).length:0,d=o?`🗄️ DB`:`💾 Lokal`;s.innerHTML=`✅ Jadwal <strong>${n.kodeMK}</strong> berhasil disimpan ke ${d}! (🏫 ${l} Offline, 🌐 ${c} Online${u>0?`, 🔄 `+u+` Reschedule`:``})`,document.body.appendChild(s),setTimeout(()=>{s.style.opacity=`0`,s.style.transition=`opacity 0.3s`,setTimeout(()=>s.remove(),300)},3e3),setTimeout(()=>{e.style.display=`none`,e.textContent=r,e.style.background=`linear-gradient(135deg,hsl(150 55% 45%),hsl(160 50% 42%))`,e.disabled=!1},1500)})}),document.querySelectorAll(`.jadwal-edit-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.closest(`tr`),r=n.querySelectorAll(`td`),i=r[6].textContent.trim().split(`-`),a=r[8].textContent.trim().replace(/\ud83c\udfeb|\ud83c\udf10|\ud83d\udd04/g,``).trim();e.style.display=`block`,e.innerHTML=et({prodi:n.dataset.prodi||`niaga`,kodeMK:r[2].textContent.trim(),namaMK:r[3].textContent.trim(),dosen:r[4].textContent.trim(),hari:r[5].textContent.trim(),jamMulai:i[0],jamSelesai:i[1]||``,ruang:r[7].textContent.trim().replace(`— (Online)`,``),tipeKelas:a,sks:parseInt(r[9].textContent)||3}),e.scrollIntoView({behavior:`smooth`,block:`start`}),m()})}),document.querySelectorAll(`.jadwal-del-btn`).forEach(e=>{e.addEventListener(`click`,()=>{confirm(`❗ Hapus jadwal ini? Data tidak dapat dikembalikan.`)&&(e.closest(`tr`).style.opacity=`0.3`,setTimeout(()=>e.closest(`tr`).remove(),300))})});let r=document.getElementById(`aiModal`),i=document.getElementById(`aiModalBody`),a=[`RN-101`,`RN-102`,`RN-103`,`RN-104`,`RN-105`],o=[`RA-201`,`RA-202`,`RA-203`,`RA-204`,`RA-205`],s=[...a,...o,`LAB-K1`,`LAB-K2`];function c(){r.style.display=`flex`}function l(){r.style.display=`none`}document.getElementById(`aiModalClose`)?.addEventListener(`click`,l),r?.addEventListener(`click`,e=>{e.target===r&&l()});function u(e){return e>=85?`hsl(145 55% 45%)`:e>=70?`hsl(45 80% 50%)`:e>=50?`hsl(25 70% 50%)`:`hsl(0 55% 50%)`}function d(e){return e>=85?`Sangat Baik`:e>=70?`Baik`:e>=50?`Cukup`:`Kurang`}document.querySelectorAll(`.jadwal-ai-btn`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=parseInt(e.dataset.id),n=JADWAL_DUMMY.find(e=>e.id===t);if(!n)return;c(),i.innerHTML=`
        <div style="text-align:center;padding:40px;">
          <div style="font-size:2rem;margin-bottom:12px;">🧠</div>
          <div style="font-size:0.9rem;font-weight:700;color:hsl(260 50% 45%);">AI sedang menganalisis jadwal...</div>
          <div style="font-size:0.72rem;color:hsl(215 15% 55%);margin-top:6px;">Memeriksa ${JADWAL_DUMMY.length} jadwal • ${s.length} ruang • Menghitung konflik</div>
          <div style="margin-top:16px;height:4px;background:hsl(215 20% 90%);border-radius:4px;overflow:hidden;width:200px;margin-left:auto;margin-right:auto;">
            <div style="height:100%;background:linear-gradient(90deg,hsl(260 65% 55%),hsl(280 55% 50%));border-radius:4px;animation:aiPulse 1.5s infinite;width:60%;"></div>
          </div>
        </div>
        <style>@keyframes aiPulse{0%{width:20%;opacity:0.5}50%{width:80%;opacity:1}100%{width:20%;opacity:0.5}}</style>
      `;let r=n.prodi===`niaga`?a:o;try{let e=await fetch(`http://localhost:5050/api/ai/recommend`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({schedule:JADWAL_DUMMY,targetId:t,rooms:s,preferredRooms:r,maxResults:6})});if(!e.ok)throw Error(`HTTP ${e.status}`);let i=await e.json();if(!i.success)throw Error(i.error||`AI error`);p(i,n)}catch(e){console.warn(`AI Server unavailable, using fallback:`,e),p(f(n),n)}})});function f(e){let t=[`Senin`,`Selasa`,`Rabu`,`Kamis`,`Jumat`,`Sabtu`],n=[{mulai:`07:30`,selesai:`09:10`},{mulai:`09:20`,selesai:`11:00`},{mulai:`11:10`,selesai:`12:50`},{mulai:`13:00`,selesai:`14:40`},{mulai:`14:50`,selesai:`16:30`}],r=e.prodi===`niaga`?a:o,i=[];for(let a of t)for(let t of n)for(let n of r){let r=JADWAL_DUMMY.some(r=>r.id!==e.id&&r.hari===a&&r.jamMulai===t.mulai&&r.ruang===n&&r.tipeKelas!==`Online`),o=JADWAL_DUMMY.some(n=>n.id!==e.id&&n.hari===a&&n.jamMulai===t.mulai&&n.dosen===e.dosen);if(r||o)continue;let s=80,c=[`✅ Ruang ${n} tersedia`,`✅ Dosen tersedia`];(t.mulai===`07:30`||t.mulai===`09:20`)&&(s+=10,c.push(`⏰ Jam pagi (ideal)`)),a===`Sabtu`&&(s-=15,c.push(`⚠️ Hari Sabtu`)),a===e.hari&&(s+=5,c.push(`🔄 Hari sama (${a})`)),i.push({hari:a,jamMulai:t.mulai,jamSelesai:t.selesai,ruang:n,score:Math.min(100,s),reasons:c,conflicts:[]})}return i.sort((e,t)=>t.score-e.score),{success:!0,targetMK:e.namaMK,targetKodeMK:e.kodeMK,targetDosen:e.dosen,targetCurrentDay:e.hari,targetCurrentTime:`${e.jamMulai}-${e.jamSelesai}`,totalAnalyzed:JADWAL_DUMMY.length,recommendations:i.slice(0,6),fallback:!0}}function p(e,t){let n=e.recommendations||[],r=e.fallback||!1;i.innerHTML=`
      <!-- Target Info -->
      <div style="background:linear-gradient(135deg,hsl(215 25% 96%),hsl(260 20% 96%));border-radius:12px;padding:16px;margin-bottom:16px;border:1px solid hsl(260 20% 90%);">
        <div style="font-size:0.72rem;color:hsl(215 15% 55%);margin-bottom:8px;font-weight:600;">📚 MATA KULIAH YANG AKAN DIJADWALKAN ULANG</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          <div>
            <div style="font-size:0.68rem;color:hsl(215 15% 50%);">Mata Kuliah</div>
            <div style="font-size:0.9rem;font-weight:800;color:hsl(260 45% 40%);">${e.targetKodeMK} — ${e.targetMK}</div>
          </div>
          <div>
            <div style="font-size:0.68rem;color:hsl(215 15% 50%);">Dosen Pengampu</div>
            <div style="font-size:0.82rem;font-weight:700;color:hsl(215 30% 35%);">${e.targetDosen}</div>
          </div>
          <div>
            <div style="font-size:0.68rem;color:hsl(215 15% 50%);">Jadwal Saat Ini</div>
            <div style="font-size:0.82rem;font-weight:700;color:hsl(215 30% 35%);">${e.targetCurrentDay}, ${e.targetCurrentTime}</div>
          </div>
          <div>
            <div style="font-size:0.68rem;color:hsl(215 15% 50%);">Status</div>
            <div style="font-size:0.82rem;font-weight:700;color:hsl(${t.tipeKelas===`Online`?`150 55% 45%`:`210 55% 50%`});">
              ${t.tipeKelas===`Online`?`🌐 Online → 🏫 Offline`:`🏫 `+t.tipeKelas}
            </div>
          </div>
        </div>
      </div>

      <!-- AI Badge -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div>
          <span style="font-size:0.85rem;font-weight:800;color:hsl(260 45% 40%);">🎯 Top ${n.length} Rekomendasi AI</span>
          <span style="font-size:0.65rem;color:hsl(215 15% 55%);margin-left:8px;">${e.totalAnalyzed} jadwal dianalisis</span>
        </div>
        ${r?`<span style="font-size:0.6rem;padding:3px 8px;border-radius:8px;background:hsl(40 70% 92%);color:hsl(40 60% 40%);font-weight:600;">⚠️ Fallback Mode</span>`:`<span style="font-size:0.6rem;padding:3px 8px;border-radius:8px;background:hsl(260 50% 94%);color:hsl(260 50% 45%);font-weight:600;">🐍 Python AI Engine</span>`}
      </div>

      <!-- Recommendations -->
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${n.map((e,n)=>`
          <div class="ai-rec-card" style="border:1px solid hsl(215 20% 90%);border-radius:12px;padding:14px 16px;transition:all 0.2s;cursor:pointer;position:relative;overflow:hidden;${n===0?`border-color:hsl(260 50% 70%);box-shadow:0 2px 12px rgba(100,50,200,0.1);`:``}">
            ${n===0?`<div style="position:absolute;top:0;right:0;padding:3px 12px;background:linear-gradient(135deg,hsl(260 65% 55%),hsl(280 55% 50%));color:white;font-size:0.55rem;font-weight:800;border-radius:0 12px 0 8px;">⭐ TERBAIK</div>`:``}
            <div style="display:flex;justify-content:space-between;align-items:flex-start;">
              <div style="flex:1;">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                  <span style="display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;background:hsl(260 40% 94%);font-size:0.7rem;font-weight:800;color:hsl(260 45% 45%);">${n+1}</span>
                  <span style="font-size:0.88rem;font-weight:800;color:hsl(215 30% 30%);">📅 ${e.hari}</span>
                  <span style="font-size:0.82rem;font-weight:700;color:hsl(260 45% 45%);">⏰ ${e.jamMulai}-${e.jamSelesai}</span>
                  <span style="padding:3px 10px;border-radius:8px;background:hsl(210 50% 94%);color:hsl(210 55% 45%);font-size:0.72rem;font-weight:700;">🏢 ${e.ruang}</span>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:4px;">
                  ${e.reasons.slice(0,4).map(e=>`<span style="font-size:0.62rem;padding:2px 8px;border-radius:6px;background:hsl(145 40% 95%);color:hsl(145 40% 35%);">${e}</span>`).join(``)}
                </div>
              </div>
              <div style="text-align:center;min-width:70px;">
                <div style="font-size:1.4rem;font-weight:900;color:${u(e.score)};">${e.score}</div>
                <div style="font-size:0.55rem;font-weight:600;color:${u(e.score)};">${d(e.score)}</div>
                <div style="height:5px;background:hsl(215 20% 92%);border-radius:3px;margin-top:4px;overflow:hidden;">
                  <div style="height:100%;width:${e.score}%;background:${u(e.score)};border-radius:3px;"></div>
                </div>
              </div>
            </div>
            <div style="margin-top:10px;text-align:right;">
              <button class="ai-apply-btn" data-hari="${e.hari}" data-mulai="${e.jamMulai}" data-selesai="${e.jamSelesai}" data-ruang="${e.ruang}" data-target="${t.id}" style="padding:5px 16px;border-radius:8px;background:linear-gradient(135deg,hsl(260 55% 50%),hsl(280 50% 48%));color:white;border:none;font-size:0.72rem;font-weight:700;cursor:pointer;box-shadow:0 2px 8px rgba(100,50,200,0.2);transition:transform 0.15s;">✅ Terapkan Jadwal Ini</button>
            </div>
          </div>
        `).join(``)}
      </div>

      ${n.length===0?`<div style="text-align:center;padding:30px;color:hsl(0 55% 50%);font-weight:600;">❌ Tidak ditemukan slot yang tersedia tanpa konflik</div>`:``}
    `,i.querySelectorAll(`.ai-rec-card`).forEach(e=>{e.addEventListener(`mouseenter`,()=>{e.style.borderColor=`hsl(260 50% 70%)`,e.style.boxShadow=`0 4px 16px rgba(100,50,200,0.12)`}),e.addEventListener(`mouseleave`,()=>{e.style.borderColor=`hsl(215 20% 90%)`,e.style.boxShadow=`none`})}),i.querySelectorAll(`.ai-apply-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let n=parseInt(e.dataset.target),r=document.querySelector(`tr[data-id="${n}"]`);if(r){let t=r.querySelectorAll(`td`);r.dataset.hari=e.dataset.hari,r.dataset.tipe=`Offline`,t[6].innerHTML=`<strong>${e.dataset.hari}</strong>`,t[7].textContent=`${e.dataset.mulai}-${e.dataset.selesai}`,t[8].innerHTML=`<span style="font-weight:600;font-size:0.72rem;">${e.dataset.ruang}</span>`,t[9].innerHTML=`<span style="padding:3px 10px;border-radius:12px;font-size:0.68rem;font-weight:700;background:hsl(210 50% 94%);color:hsl(210 55% 50%);">🏫 Offline</span>`,r.style.transition=`background 0.3s`,r.style.background=`hsl(260 40% 95%)`,setTimeout(()=>{r.style.background=``},2e3)}let i=JADWAL_DUMMY.find(e=>e.id===n);i&&(i.hari=e.dataset.hari,i.jamMulai=e.dataset.mulai,i.jamSelesai=e.dataset.selesai,i.ruang=e.dataset.ruang,i.tipeKelas=`Offline`),l(),alert(`✅ Jadwal berhasil diperbarui!\n\n${t.namaMK}\n→ ${e.dataset.hari}, ${e.dataset.mulai}-${e.dataset.selesai}\n→ Ruang: ${e.dataset.ruang}\n→ Tipe: Offline`)})})}function m(){let t=document.getElementById(`jfProdi`),n=document.getElementById(`jfMK`);t?.addEventListener(`change`,()=>{let e=w[t.value],r=`<option value="">-- Pilih Mata Kuliah --</option>`;e&&e.semester.forEach(e=>{r+=`<optgroup label="Semester ${e.no}">`,e.mk.forEach(e=>{r+=`<option value="${e.kode}" data-nama="${e.nama}" data-dosen="${e.dosen}" data-sks="${e.sks}">${e.kode} \u2014 ${e.nama} (${e.sks} SKS)</option>`}),r+=`</optgroup>`}),n.innerHTML=r,document.getElementById(`jfKode`).value=``,document.getElementById(`jfSks`).value=``}),n?.addEventListener(`change`,()=>{let e=n.options[n.selectedIndex];if(e&&e.value){document.getElementById(`jfKode`).value=e.value;let t=e.dataset.dosen||``;document.getElementById(`jfSks`).value=e.dataset.sks||``;let n=document.getElementById(`jfDosen`);if(n){let e=!1;for(let r=0;r<n.options.length;r++)if(t.includes(n.options[r].value)){n.selectedIndex=r,e=!0;break}e||(n.selectedIndex=0)}}}),document.querySelectorAll(`.tipe-kelas-opt`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tipe,n={Offline:`hsl(210 55% 50%)`,Online:`hsl(150 55% 45%)`,Hybrid:`hsl(275 55% 55%)`};document.querySelectorAll(`.tipe-kelas-opt`).forEach(e=>{let r=n[e.dataset.tipe];e.dataset.tipe===t?(e.style.background=r,e.style.color=`white`,e.style.borderColor=r):(e.style.background=`white`,e.style.color=r,e.style.borderColor=`hsl(215 20% 85%)`)});let r=document.getElementById(`jfRuangWrap`);t===`Online`?(r.style.opacity=`0.4`,document.getElementById(`jfRuang`).value=``,document.getElementById(`jfRuang`).placeholder=`Tidak diperlukan`):(r.style.opacity=`1`,document.getElementById(`jfRuang`).placeholder=`R.201`)})}),document.getElementById(`jfCancel`)?.addEventListener(`click`,()=>{e.style.display=`none`,e.innerHTML=``}),document.getElementById(`jfSave`)?.addEventListener(`click`,()=>{let t=document.getElementById(`jfSave`);t.textContent=`⏳ Menyimpan...`,setTimeout(()=>{t.textContent=`✅ Tersimpan!`,setTimeout(()=>{e.style.display=`none`,e.innerHTML=``},1e3)},800)})}document.getElementById(`btnToggleKelasPanel`)?.addEventListener(`click`,()=>{let e=document.getElementById(`kelasPanelBody`);e.style.display=e.style.display===`none`?`block`:`none`,e.style.display===`block`&&h()});function h(){let e=document.getElementById(`kelasListContainer`);if(!e)return;let t=Ze();e.innerHTML=t.map((e,n)=>`
      <div class="kelas-chip" data-idx="${n}" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;background:white;border:1px solid hsl(260 30% 82%);border-radius:8px;font-size:0.8rem;font-weight:600;color:hsl(260 40% 40%);cursor:pointer;transition:all .2s;box-shadow:0 1px 3px rgba(0,0,0,0.06);">
        <span class="kelas-chip-name" style="min-width:20px;text-align:center;">${e}</span>
        <button class="kelas-edit-btn" data-idx="${n}" style="background:none;border:none;cursor:pointer;font-size:0.7rem;padding:0 2px;color:hsl(40 70% 50%);" title="Edit">\u270f\ufe0f</button>
        ${t.length>1?`<button class="kelas-del-btn" data-idx="${n}" style="background:none;border:none;cursor:pointer;font-size:0.8rem;padding:0 2px;color:hsl(0 50% 55%);line-height:1;" title="Hapus">\u00d7</button>`:``}
      </div>
    `).join(``),e.querySelectorAll(`.kelas-edit-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.idx),r=Ze(),i=prompt(`✏️ Edit nama ruangan:`,r[n]);i!==null&&i.trim()&&(r[n]=i.trim(),Qe(r),h(),g(`Ruangan diubah menjadi "${i.trim()}"`))})}),e.querySelectorAll(`.kelas-del-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.idx),r=Ze();if(r.length<=1)return alert(`Minimal harus ada 1 ruangan!`);let i=r[n];confirm(`\u2757 Hapus ruangan "${i}"?`)&&(r.splice(n,1),Qe(r),h(),g(`Ruangan "${i}" dihapus`))})}),e.querySelectorAll(`.kelas-chip`).forEach(e=>{e.addEventListener(`mouseenter`,()=>{e.style.borderColor=`hsl(260 50% 60%)`,e.style.boxShadow=`0 2px 8px rgba(100,60,180,0.15)`}),e.addEventListener(`mouseleave`,()=>{e.style.borderColor=`hsl(260 30% 82%)`,e.style.boxShadow=`0 1px 3px rgba(0,0,0,0.06)`})})}document.getElementById(`btnAddKelas`)?.addEventListener(`click`,()=>{let e=document.getElementById(`kelasNewInput`),t=e?.value?.trim();if(!t)return e?.focus();let n=Ze();if(n.includes(t))return alert(`Ruangan "${t}" sudah ada!`);n.push(t),Qe(n),e.value=``,h(),g(`Ruangan "${t}" berhasil ditambahkan!`)}),document.getElementById(`kelasNewInput`)?.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),document.getElementById(`btnAddKelas`)?.click())});function g(e){let t=document.createElement(`div`);t.textContent=`✅ `+e,t.style.cssText=`position:fixed;bottom:24px;right:24px;background:hsl(200 50% 42%);color:white;padding:10px 20px;border-radius:8px;font-size:0.8rem;font-weight:600;z-index:99999;box-shadow:0 4px 16px rgba(0,0,0,0.2);animation:fadeInUp .3s ease;`,document.body.appendChild(t),setTimeout(()=>{t.style.opacity=`0`,t.style.transition=`opacity .3s`,setTimeout(()=>t.remove(),300)},2500)}}function nt(){let e=[{prodi:`Administrasi Negara`,aktif:420,cuti:8,lulus:285,avgIPK:3.42},{prodi:`Administrasi Niaga`,aktif:380,cuti:5,lulus:248,avgIPK:3.38}],t=e.reduce((e,t)=>e+t.aktif,0),n=e.reduce((e,t)=>e+t.lulus,0);return`
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${F.users}</div>
        <div class="stat-info"><div class="stat-label">Total Mahasiswa Aktif</div><div class="stat-value">${t.toLocaleString()}</div><div class="stat-sub">semua prodi</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${F.award}</div>
        <div class="stat-info"><div class="stat-label">Total Lulusan</div><div class="stat-value">${n}</div><div class="stat-sub">sampai saat ini</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${F.trendUp}</div>
        <div class="stat-info"><div class="stat-label">Rata-rata IPK</div><div class="stat-value">${(e.reduce((e,t)=>e+t.avgIPK,0)/e.length).toFixed(2)}</div><div class="stat-sub">seluruh prodi</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon purple">${F.fileText}</div>
        <div class="stat-info"><div class="stat-label">Total Cuti</div><div class="stat-value">${e.reduce((e,t)=>e+t.cuti,0)}</div><div class="stat-sub">mahasiswa</div></div>
      </div>
    </div>

    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>📊 Statistik per Program Studi</h3></div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>Program Studi</th><th>Aktif</th><th>Cuti</th><th>Lulusan</th><th>Rata-rata IPK</th><th>% dari Total</th></tr></thead>
          <tbody>
            ${e.map((e,n)=>{let r=Math.round(e.aktif/t*100);return`<tr>
                <td>${n+1}.</td>
                <td><strong>${e.prodi}</strong></td>
                <td style="text-align:center;">${e.aktif}</td>
                <td style="text-align:center;">${e.cuti}</td>
                <td style="text-align:center;">${e.lulus}</td>
                <td style="text-align:center;"><span style="background:hsl(150 60% 45%);color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${e.avgIPK}</span></td>
                <td style="width:150px;"><div class="progress-wrap"><div class="progress-bar" style="width:${r}%;background:hsl(210 55% 50%);"></div></div><span style="font-size:0.68rem;color:hsl(215 15% 55%);">${r}%</span></td>
              </tr>`}).join(``)}
          </tbody>
        </table>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">
      <div class="dash-card">
        <div class="dash-card-head"><h3 style="margin:0;font-size:0.85rem;">📈 Trend Mahasiswa Baru</h3></div>
        <div class="dash-card-body">
          ${[{tahun:`2022/2023`,mhs:310},{tahun:`2023/2024`,mhs:345},{tahun:`2024/2025`,mhs:380},{tahun:`2025/2026`,mhs:420}].map(e=>`
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
            <span style="font-size:0.72rem;font-weight:600;min-width:65px;">${e.tahun}</span>
            <div class="progress-wrap" style="flex:1;"><div class="progress-bar" style="width:${Math.round(e.mhs/420*100)}%;background:hsl(210 55% 50%);"></div></div>
            <span style="font-size:0.82rem;font-weight:700;min-width:30px;">${e.mhs}</span>
          </div>`).join(``)}
        </div>
      </div>
      <div class="dash-card">
        <div class="dash-card-head"><h3 style="margin:0;font-size:0.85rem;">🎯 Distribusi IPK Mahasiswa</h3></div>
        <div class="dash-card-body">
          ${[{range:`3.50 - 4.00`,pct:35,color:`hsl(150 60% 45%)`},{range:`3.00 - 3.49`,pct:40,color:`hsl(200 55% 50%)`},{range:`2.50 - 2.99`,pct:18,color:`hsl(40 80% 50%)`},{range:`< 2.50`,pct:7,color:`hsl(0 60% 50%)`}].map(e=>`
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
            <span style="font-size:0.72rem;font-weight:600;min-width:72px;">${e.range}</span>
            <div class="progress-wrap" style="flex:1;"><div class="progress-bar" style="width:${e.pct}%;background:${e.color};"></div></div>
            <span style="font-size:0.82rem;font-weight:700;min-width:30px;">${e.pct}%</span>
          </div>`).join(``)}
        </div>
      </div>
    </div>`}function rt(){return`
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>📄 Transkrip Mahasiswa</h3></div>
      <div class="dash-card-body">
        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:end;">
          <div style="flex:1;min-width:200px;">
            <label style="font-size:0.75rem;font-weight:600;display:block;margin-bottom:4px;">Cari NIM / Nama:</label>
            <input type="text" placeholder="Masukkan NIM atau nama..." style="width:100%;padding:8px 12px;border:1px solid hsl(215 20% 85%);border-radius:6px;font-size:0.85rem;">
          </div>
          <div>
            <label style="font-size:0.75rem;font-weight:600;display:block;margin-bottom:4px;">Prodi:</label>
            <select style="padding:8px 12px;border:1px solid hsl(215 20% 85%);border-radius:6px;font-size:0.85rem;">
              <option>Semua Prodi</option><option>S1 Adm. Publik</option><option>S1 Adm. Bisnis</option><option>S2 Adm. Publik</option><option>D3 Ilmu Adm.</option>
            </select>
          </div>
          <button style="padding:8px 20px;background:hsl(210 55% 50%);color:white;border:none;border-radius:6px;font-size:0.82rem;font-weight:600;cursor:pointer;">🔍 Cari</button>
        </div>
      </div>
    </div>
    <div class="dash-card">
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>NIM</th><th>Nama</th><th>Prodi</th><th>Sem.</th><th>IPK</th><th>SKS</th><th>Status</th><th>Aksi</th></tr></thead>
          <tbody>
            ${[{nim:`2024101001`,nama:`Ahmad Rizky Pratama`,prodi:`Administrasi Negara`,semester:4,ipk:3.69,sksLulus:41,status:`Aktif`},{nim:`2024101002`,nama:`Siti Nurhaliza`,prodi:`Administrasi Negara`,semester:4,ipk:3.52,sksLulus:39,status:`Aktif`},{nim:`2024101003`,nama:`Budi Santoso`,prodi:`Administrasi Negara`,semester:4,ipk:3.85,sksLulus:43,status:`Aktif`},{nim:`2021101001`,nama:`Rina Wulandari`,prodi:`Administrasi Negara`,semester:8,ipk:3.82,sksLulus:148,status:`Lulus`},{nim:`2021101002`,nama:`Agung Prasetya`,prodi:`Administrasi Negara`,semester:8,ipk:3.65,sksLulus:148,status:`Lulus`}].map((e,t)=>{let n=e.status===`Aktif`?`green`:`blue`;return`<tr>
                <td>${t+1}.</td>
                <td><strong>${e.nim}</strong></td>
                <td>${e.nama}</td>
                <td>${e.prodi}</td>
                <td style="text-align:center;">${e.semester}</td>
                <td style="text-align:center;"><span style="background:hsl(150 60% 45%);color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${e.ipk}</span></td>
                <td style="text-align:center;">${e.sksLulus}</td>
                <td style="text-align:center;"><span class="badge-sm ${n}">${e.status}</span></td>
                <td style="text-align:center;"><button style="font-size:0.7rem;padding:4px 12px;border-radius:4px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;">🖨 Cetak</button></td>
              </tr>`}).join(``)}
          </tbody>
        </table>
      </div>
    </div>`}function it(){let e=[{nim:`2024101001`,nama:`Ahmad Rizky Pratama`,prodi:`Adm. Publik`,semester:4,sks:19,tanggal:`10 Feb 2026`,status:`Divalidasi`},{nim:`2024101002`,nama:`Siti Nurhaliza`,prodi:`Adm. Publik`,semester:4,sks:18,tanggal:`11 Feb 2026`,status:`Divalidasi`},{nim:`2024101009`,nama:`Irfan Hakim`,prodi:`Adm. Publik`,semester:4,sks:21,tanggal:`12 Feb 2026`,status:`Menunggu`},{nim:`2024101010`,nama:`Julia Putri`,prodi:`Adm. Publik`,semester:2,sks:20,tanggal:`13 Feb 2026`,status:`Menunggu`},{nim:`2024101011`,nama:`Kurniawan`,prodi:`Adm. Bisnis`,semester:2,sks:22,tanggal:`14 Feb 2026`,status:`Ditolak`}],t=e.filter(e=>e.status===`Divalidasi`).length,n=e.filter(e=>e.status===`Menunggu`).length;return`
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;margin-bottom:16px;">
      <div class="stat-box"><div class="stat-icon green">${F.checkCircle}</div><div class="stat-info"><div class="stat-label">Divalidasi</div><div class="stat-value">${t}</div></div></div>
      <div class="stat-box"><div class="stat-icon gold">${F.clipboard}</div><div class="stat-info"><div class="stat-label">Menunggu</div><div class="stat-value">${n}</div></div></div>
      <div class="stat-box"><div class="stat-icon purple">${F.fileText}</div><div class="stat-info"><div class="stat-label">Ditolak</div><div class="stat-value">${e.filter(e=>e.status===`Ditolak`).length}</div></div></div>
    </div>
    <div class="dash-card">
      <div class="dash-card-head"><h3>📋 Validasi KRS Mahasiswa — Semester Genap ${new Date().getFullYear()}</h3></div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>NIM</th><th>Nama</th><th>Prodi</th><th>Sem.</th><th>SKS</th><th>Tanggal</th><th>Status</th><th>Aksi</th></tr></thead>
          <tbody>
            ${e.map((e,t)=>{let n=e.status===`Divalidasi`?`green`:e.status===`Menunggu`?`gold`:`danger`;return`<tr>
                <td>${t+1}.</td>
                <td><strong>${e.nim}</strong></td>
                <td>${e.nama}</td>
                <td>${e.prodi}</td>
                <td style="text-align:center;">${e.semester}</td>
                <td style="text-align:center;">${e.sks}</td>
                <td>${e.tanggal}</td>
                <td style="text-align:center;"><span class="badge-sm ${n}">${e.status}</span></td>
                <td style="text-align:center;">
                  ${e.status===`Menunggu`?`<button style="font-size:0.68rem;padding:3px 10px;border-radius:4px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;margin-right:4px;">✅ Validasi</button><button style="font-size:0.68rem;padding:3px 10px;border-radius:4px;cursor:pointer;background:hsl(0 60% 50%);color:white;border:none;font-weight:600;">❌ Tolak</button>`:`<button style="font-size:0.68rem;padding:3px 10px;border-radius:4px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;">👁 Detail</button>`}
                </td>
              </tr>`}).join(``)}
          </tbody>
        </table>
      </div>
    </div>`}function at(e){let t=parseInt(e.sem)||4,n=new Date().getFullYear(),r=[{kode:`AP101`,nama:`Pengantar Ilmu Administrasi`,sks:3,hari:`Senin`,jam:`08:00-10:30`,ruang:`A201`,dosen:`Prof. Dr. H. Mulyadi, M.AP.`},{kode:`AP102`,nama:`Teori Organisasi`,sks:3,hari:`Selasa`,jam:`10:00-12:30`,ruang:`A202`,dosen:`Dr. Ir. Bambang Sudarsono, M.Si.`},{kode:`AP201`,nama:`Kebijakan Publik`,sks:3,hari:`Rabu`,jam:`08:00-10:30`,ruang:`B101`,dosen:`Dr. Hendra Wijaya, S.E., M.M.`},{kode:`AP202`,nama:`Manajemen SDM Publik`,sks:3,hari:`Kamis`,jam:`13:00-15:30`,ruang:`B102`,dosen:`Prof. Dr. Sri Wahyuni, M.AP.`},{kode:`AP301`,nama:`Hukum Administrasi Negara`,sks:3,hari:`Jumat`,jam:`08:00-10:30`,ruang:`A301`,dosen:`Dr. Agus Rahardjo, S.H., M.H.`},{kode:`AP302`,nama:`Statistik Sosial`,sks:3,hari:`Senin`,jam:`13:00-15:30`,ruang:`Lab 1`,dosen:`Ir. Siti Nurjanah, M.T.`},{kode:`AP303`,nama:`Sistem Informasi Manajemen`,sks:3,hari:`Selasa`,jam:`08:00-10:30`,ruang:`Lab 2`,dosen:`Ir. Andi Prasetyo, M.Kom.`},{kode:`AP304`,nama:`Etika Administrasi Publik`,sks:2,hari:`Rabu`,jam:`13:00-14:40`,ruang:`A202`,dosen:`Dr. Rina Kartika, M.M.`},{kode:`AP401`,nama:`Metodologi Penelitian`,sks:3,hari:`Kamis`,jam:`08:00-10:30`,ruang:`A301`,dosen:`Dr. Achmad Fauzi, M.AP.`},{kode:`AP402`,nama:`Keuangan Publik`,sks:3,hari:`Jumat`,jam:`10:00-12:30`,ruang:`B101`,dosen:`Dewi Lestari, S.AP., M.AP.`},{kode:`AN101`,nama:`Pengantar Bisnis`,sks:3,hari:`Senin`,jam:`10:00-12:30`,ruang:`C101`,dosen:`Dr. Wahyu Hidayat, S.IP., M.Si.`},{kode:`AN201`,nama:`Manajemen Pemasaran`,sks:3,hari:`Selasa`,jam:`13:00-15:30`,ruang:`C102`,dosen:`Fitri Handayani, S.E., M.M.`}],i=(e.prodi||``).toLowerCase().includes(`niaga`)?r.filter(e=>e.kode.startsWith(`AN`)||e.kode.startsWith(`AP3`)||e.kode.startsWith(`AP4`)):r.filter(e=>e.kode.startsWith(`AP`)),a=i.slice(0,Math.min(6+t%3,i.length)),o=a.reduce((e,t)=>e+t.sks,0);return`
    <style>
      .krs-detail{animation:el-fadeInUp .35s ease}
      .krs-back{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border:none;border-radius:10px;font-size:.78rem;font-weight:600;cursor:pointer;background:hsl(215 15% 93%);color:hsl(215 30% 35%);transition:all .2s;margin-bottom:16px}
      .krs-back:hover{background:hsl(215 20% 87%);transform:translateX(-2px)}
      .krs-profile{background:#fff;border-radius:16px;border:1px solid hsl(215 15% 92%);padding:24px;display:flex;align-items:center;gap:20px;margin-bottom:20px}
      .krs-profile-av{width:56px;height:56px;border-radius:14px;background:hsl(215 55% 50%);color:white;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:800;flex-shrink:0}
      .krs-profile-info h3{margin:0 0 4px;font-size:1rem;font-weight:700;color:hsl(215 40% 18%)}
      .krs-profile-meta{display:flex;gap:16px;flex-wrap:wrap}
      .krs-profile-meta span{font-size:.72rem;color:hsl(215 15% 50%);display:flex;align-items:center;gap:4px}
      .krs-profile-meta strong{color:hsl(215 35% 30%)}
      .krs-stats{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;margin-bottom:20px}
      .krs-stat{background:#fff;border-radius:12px;border:1px solid hsl(215 15% 92%);padding:16px;text-align:center;transition:all .25s}
      .krs-stat:hover{box-shadow:0 3px 14px rgba(0,0,0,.05);transform:translateY(-2px)}
      .krs-stat-val{font-size:1.4rem;font-weight:800;color:hsl(215 40% 18%)}
      .krs-stat-lbl{font-size:.65rem;color:hsl(215 15% 55%);margin-top:2px}
      .krs-table-wrap{background:#fff;border-radius:14px;border:1px solid hsl(215 15% 92%);overflow:hidden}
      .krs-table-head{padding:16px 20px;border-bottom:1px solid hsl(215 15% 93%);display:flex;justify-content:space-between;align-items:center}
      .krs-table-head h4{margin:0;font-size:.88rem;font-weight:700;color:hsl(215 40% 18%)}
      .krs-tbl{width:100%;border-collapse:collapse;font-size:.78rem}
      .krs-tbl th{background:hsl(215 20% 97%);padding:10px 14px;text-align:left;font-weight:700;font-size:.7rem;color:hsl(215 20% 40%);text-transform:uppercase;letter-spacing:.03em;border-bottom:1px solid hsl(215 15% 92%)}
      .krs-tbl td{padding:12px 14px;border-bottom:1px solid hsl(215 10% 95%);color:hsl(215 25% 30%)}
      .krs-tbl tbody tr:hover{background:hsl(215 30% 98%)}
      .krs-tbl .sks-badge{display:inline-flex;align-items:center;justify-content:center;min-width:28px;height:24px;border-radius:6px;font-weight:700;font-size:.72rem}
      .krs-hari{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:6px;font-size:.68rem;font-weight:600}
      .krs-actions{display:flex;gap:8px;margin-top:16px;justify-content:flex-end}
      .krs-btn{padding:8px 20px;border:none;border-radius:10px;font-size:.78rem;font-weight:700;cursor:pointer;transition:all .2s}
      .krs-btn-primary{background:hsl(150 55% 45%);color:white}.krs-btn-primary:hover{background:hsl(150 55% 38%)}
      .krs-btn-danger{background:hsl(0 55% 55%);color:white}.krs-btn-danger:hover{background:hsl(0 55% 48%)}
      .krs-btn-outline{background:transparent;border:1.5px solid hsl(215 15% 85%);color:hsl(215 30% 40%)}.krs-btn-outline:hover{background:hsl(215 15% 95%)}
      @media(max-width:768px){.krs-profile{flex-direction:column;text-align:center}.krs-profile-meta{justify-content:center}}
    </style>
    <div class="krs-detail">
      <button class="krs-back" onclick="_paBackToBimbingan()">← Kembali ke Bimbingan PA</button>
      <div class="krs-profile">
        <div class="krs-profile-av">${e.nama.split(` `).map(e=>e[0]).join(``).substring(0,2).toUpperCase()}</div>
        <div class="krs-profile-info">
          <h3>${e.nama}</h3>
          <div class="krs-profile-meta">
            <span>📋 NIM: <strong>${e.nim}</strong></span>
            <span>🎓 Semester: <strong>${e.sem}</strong></span>
            <span>📊 IPK: <strong>${e.ipk}</strong></span>
            <span>🏛️ Prodi: <strong>${e.prodi}</strong></span>
          </div>
        </div>
      </div>
      <div class="krs-stats">
        <div class="krs-stat"><div class="krs-stat-val">${a.length}</div><div class="krs-stat-lbl">Mata Kuliah</div></div>
        <div class="krs-stat"><div class="krs-stat-val">${o}</div><div class="krs-stat-lbl">Total SKS</div></div>
        <div class="krs-stat"><div class="krs-stat-val" style="color:hsl(150 55% 38%)">Aktif</div><div class="krs-stat-lbl">Status KRS</div></div>
        <div class="krs-stat"><div class="krs-stat-val">Genap ${n}</div><div class="krs-stat-lbl">Semester</div></div>
      </div>
      <div class="krs-table-wrap">
        <div class="krs-table-head">
          <h4>📚 Kartu Rencana Studi — Semester ${e.sem}</h4>
          <span style="font-size:.7rem;color:hsl(215 15% 55%)">${a.length} mata kuliah • ${o} SKS</span>
        </div>
        <table class="krs-tbl">
          <thead><tr><th>No</th><th>Kode</th><th>Mata Kuliah</th><th>SKS</th><th>Hari</th><th>Jam</th><th>Ruang</th><th>Dosen Pengampu</th></tr></thead>
          <tbody>
            ${a.map((e,t)=>`<tr>
                <td style="text-align:center;font-weight:600;color:hsl(215 15% 55%)">${t+1}</td>
                <td><strong style="font-family:var(--font-mono);font-size:.72rem;">${e.kode}</strong></td>
                <td style="font-weight:600">${e.nama}</td>
                <td style="text-align:center"><span class="sks-badge" style="background:hsl(215 50% 94%);color:hsl(215 55% 42%)">${e.sks}</span></td>
                <td><span class="krs-hari" style="background:${{Senin:`hsl(215 55% 94%)`,Selasa:`hsl(150 45% 93%)`,Rabu:`hsl(280 40% 94%)`,Kamis:`hsl(35 60% 93%)`,Jumat:`hsl(0 40% 94%)`}[e.hari]||`hsl(215 15% 94%)`};color:${{Senin:`hsl(215 55% 40%)`,Selasa:`hsl(150 50% 32%)`,Rabu:`hsl(280 45% 40%)`,Kamis:`hsl(35 60% 35%)`,Jumat:`hsl(0 45% 40%)`}[e.hari]||`hsl(215 30% 40%)`}">${e.hari}</span></td>
                <td style="font-family:var(--font-mono);font-size:.72rem;">${e.jam}</td>
                <td style="font-weight:600">${e.ruang}</td>
                <td style="font-size:.72rem;">${e.dosen}</td>
              </tr>`).join(``)}
          </tbody>
        </table>
      </div>
      <div class="krs-actions">
        <button class="krs-btn krs-btn-outline" onclick="window.print()">🖨️ Cetak KRS</button>
        <button class="krs-btn krs-btn-primary" onclick="alert('KRS berhasil divalidasi!');_paBackToBimbingan()">✅ Validasi KRS</button>
      </div>
    </div>`}function ot(){return`
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head" style="display:flex;justify-content:space-between;align-items:center;">
        <h3 style="margin:0;">📊 Rekap Absensi — Semester Genap ${new Date().getFullYear()}</h3>
        <button style="font-size:0.75rem;padding:6px 16px;border-radius:6px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;">📋 Export Excel</button>
      </div>
    </div>
    <div class="dash-card">
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>Kode</th><th>Mata Kuliah</th><th>Kelas</th><th>Dosen</th><th>Pertemuan</th><th>Rata-rata Hadir</th><th>Status</th></tr></thead>
          <tbody>
            ${[{kode:`AP301`,nama:`Kebijakan Publik`,kelas:`EU101`,dosen:`Dr. Bambang Sudarsono, M.Si.`,pertemuan:10,avgHadir:92},{kode:`AP302`,nama:`Statistik Sosial`,kelas:`EU101`,dosen:`Ir. Siti Nurjanah, M.T.`,pertemuan:10,avgHadir:95},{kode:`AP303`,nama:`Teori Administrasi`,kelas:`EU102`,dosen:`Prof. Dr. Sri Wahyuni, M.AP.`,pertemuan:9,avgHadir:88},{kode:`AP304`,nama:`Hukum Administrasi`,kelas:`EU101`,dosen:`Dr. Agus Rahardjo, S.H., M.H.`,pertemuan:10,avgHadir:90},{kode:`AP305`,nama:`Manajemen SDM`,kelas:`EU101`,dosen:`Dr. Rina Kartika, M.M.`,pertemuan:10,avgHadir:97},{kode:`AP306`,nama:`Sistem Informasi Manajemen`,kelas:`EU101`,dosen:`Ir. Andi Prasetyo, M.Kom.`,pertemuan:10,avgHadir:91},{kode:`AP307`,nama:`Etika Administrasi`,kelas:`EU102`,dosen:`Dr. Bambang Sudarsono, M.Si.`,pertemuan:10,avgHadir:85}].map((e,t)=>{let n=e.avgHadir>=90?`hsl(150 60% 45%)`:e.avgHadir>=80?`hsl(40 80% 50%)`:`hsl(0 60% 50%)`;return`<tr>
                <td>${t+1}.</td>
                <td><strong>${e.kode}</strong></td>
                <td>${e.nama}</td>
                <td style="text-align:center;">${e.kelas}</td>
                <td>${e.dosen}</td>
                <td style="text-align:center;">${e.pertemuan}/14</td>
                <td style="text-align:center;"><span style="background:${n};color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${e.avgHadir}%</span></td>
                <td style="text-align:center;"><span class="badge-sm ${e.avgHadir>=90?`green`:`gold`}">${e.avgHadir>=90?`Baik`:`Perhatian`}</span></td>
              </tr>`}).join(``)}
          </tbody>
        </table>
      </div>
    </div>`}function st(){return`
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>📝 Surat Menyurat — Administrasi Akademik</h3></div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-bottom:20px;">
      ${M.map(e=>`
      <div class="dash-card" style="cursor:pointer;transition:transform 0.2s;">
        <div class="dash-card-body" style="display:flex;align-items:center;gap:14px;padding:16px;">
          <div style="width:46px;height:46px;border-radius:10px;background:linear-gradient(135deg,hsl(210 55% 50%),hsl(200 50% 60%));display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <span style="color:white;font-weight:700;font-size:0.78rem;">${e.kode}</span>
          </div>
          <div style="flex:1;">
            <div style="font-size:0.82rem;font-weight:700;">${e.jenis}</div>
            <div style="font-size:0.72rem;color:hsl(215 15% 55%);margin-top:3px;">${e.count} surat diterbitkan</div>
          </div>
          <button style="font-size:0.7rem;padding:5px 12px;border-radius:5px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;">+ Buat</button>
        </div>
      </div>`).join(``)}
    </div>
    <div class="dash-card">
      <div class="dash-card-head"><h3>📋 Riwayat Surat Terbaru</h3></div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>No. Surat</th><th>Jenis</th><th>Untuk</th><th>Tanggal</th><th>Status</th></tr></thead>
          <tbody>
            ${[{no:`001/SKA/III/2026`,jenis:`Surat Keterangan Aktif`,untuk:`Ahmad Rizky Pratama`,tgl:`20 Mar 2026`,status:`Selesai`},{no:`002/SPM/III/2026`,jenis:`Surat Pengantar Magang`,untuk:`Siti Nurhaliza`,tgl:`19 Mar 2026`,status:`Proses`},{no:`003/SRB/III/2026`,jenis:`Surat Rekomendasi`,untuk:`Budi Santoso`,tgl:`18 Mar 2026`,status:`Menunggu`},{no:`004/LGI/III/2026`,jenis:`Legalisir Ijazah`,untuk:`Dewi Lestari`,tgl:`17 Mar 2026`,status:`Selesai`}].map((e,t)=>`<tr>
              <td>${t+1}.</td>
              <td><strong>${e.no}</strong></td>
              <td>${e.jenis}</td>
              <td>${e.untuk}</td>
              <td>${e.tgl}</td>
              <td style="text-align:center;"><span class="badge-sm ${e.status===`Selesai`?`green`:e.status===`Proses`?`blue`:`gold`}">${e.status}</span></td>
            </tr>`).join(``)}
          </tbody>
        </table>
      </div>
    </div>`}function ct(){return`
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>📅 Kalender Akademik — Semester Genap ${new Date().getFullYear()}</h3></div>
    </div>
    <div class="dash-card">
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>Kegiatan</th><th>Mulai</th><th>Selesai</th><th>Status</th></tr></thead>
          <tbody>
            ${A.map(e=>{let t=e.status===`Selesai`?`green`:e.status===`Berjalan`?`blue`:`gold`;return`<tr>
                <td>${e.no}.</td>
                <td><strong>${e.kegiatan}</strong></td>
                <td>${e.mulai}</td>
                <td>${e.selesai}</td>
                <td style="text-align:center;"><span class="badge-sm ${t}">${e.status}</span></td>
              </tr>`}).join(``)}
          </tbody>
        </table>
      </div>
    </div>
    <div class="dash-card" style="margin-top:16px;">
      <div class="dash-card-head"><h3 style="margin:0;font-size:0.88rem;">📊 Progress Semester</h3></div>
      <div class="dash-card-body">
        <div style="display:flex;height:28px;border-radius:8px;overflow:hidden;margin-bottom:8px;">
          <div style="width:30%;background:hsl(150 55% 50%);display:flex;align-items:center;justify-content:center;color:white;font-size:0.7rem;font-weight:600;">Selesai (30%)</div>
          <div style="width:40%;background:hsl(210 55% 50%);display:flex;align-items:center;justify-content:center;color:white;font-size:0.7rem;font-weight:600;">Berjalan (40%)</div>
          <div style="width:30%;background:hsl(215 20% 85%);display:flex;align-items:center;justify-content:center;color:hsl(215 15% 45%);font-size:0.7rem;font-weight:600;">Mendatang (30%)</div>
        </div>
      </div>
    </div>`}function lt(){return`
    <div class="dash-card" style="margin-bottom:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,hsl(35 70% 45%),hsl(25 60% 50%));padding:24px 28px;color:white;">
        <h3 style="margin:0 0 8px;font-size:1.1rem;">🎓 Wisuda ${j.periode}</h3>
        <div style="font-size:0.85rem;opacity:0.9;">📅 ${j.tanggal} · 📍 ${j.tempat}</div>
        <div style="display:flex;gap:16px;margin-top:14px;">
          <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:8px 16px;backdrop-filter:blur(4px);">
            <div style="font-size:0.6rem;opacity:0.7;">Total Calon</div>
            <div style="font-size:1.2rem;font-weight:800;">${j.calon.length}</div>
          </div>
          <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:8px 16px;backdrop-filter:blur(4px);">
            <div style="font-size:0.6rem;opacity:0.7;">Toga Siap</div>
            <div style="font-size:1.2rem;font-weight:800;">${j.calon.filter(e=>e.statusToga===`Sudah`).length}</div>
          </div>
          <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:8px 16px;backdrop-filter:blur(4px);">
            <div style="font-size:0.6rem;opacity:0.7;">IPK Tertinggi</div>
            <div style="font-size:1.2rem;font-weight:800;">${Math.max(...j.calon.map(e=>e.ipk)).toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dash-card">
      <div class="dash-card-head"><h3>📋 Daftar Calon Wisudawan</h3></div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>NIM</th><th>Nama</th><th>Prodi</th><th>IPK</th><th>Judul Skripsi</th><th>Toga</th></tr></thead>
          <tbody>
            ${j.calon.map((e,t)=>`<tr>
              <td>${t+1}.</td>
              <td><strong>${e.nim}</strong></td>
              <td>${e.nama}</td>
              <td>${e.prodi}</td>
              <td style="text-align:center;"><span style="background:hsl(150 60% 45%);color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${e.ipk}</span></td>
              <td style="font-size:0.78rem;max-width:250px;">${e.judulSkripsi}</td>
              <td style="text-align:center;"><span class="badge-sm ${e.statusToga===`Sudah`?`green`:`gold`}">${e.statusToga}</span></td>
            </tr>`).join(``)}
          </tbody>
        </table>
      </div>
    </div>`}function ut(){if(!window._paBimbingan){let e=`Ahmad Rizky Pratama,Siti Nurhaliza,Budi Santoso,Dewi Lestari,Eko Prasetyo,Fitri Handayani,Gani Setiawan,Hana Permata,Irfan Hakim,Julia Putri,Kurniawan Adi,Lina Marlina,M. Faisal,Nadia Rahmawati,Rudi Hermawan,Yeni Fitriani,Rina Wulandari,Agung Prasetya,Mega Safitri,Dimas Nugroho,Putri Ayu K.,Sari Indah,Bagas Firmansyah,Nurul Aini,Rizal Mahendra,Winda Sari,Fajar Nugroho,Aisyah Putri,Doni Setiawan,Ratna Dewi`.split(`,`),t=[`Administrasi Negara`,`Administrasi Niaga`];window._paBimbingan={},l.filter(e=>e.totalMahasiswaBimbingan>0).forEach((n,r)=>{let i=[];for(let a=0;a<n.totalMahasiswaBimbingan;a++){let n=e[(r*3+a)%e.length],o=2021+a%4,s=(2026-o)*2,c=parseFloat((3.1+(r*7+a*13)%80/100).toFixed(2));i.push({nim:o+`10`+String(1e3+r*10+a).substring(1),nama:n,ank:o,sem:s,ipk:c,prodi:t[r%2]})}window._paBimbingan[n.id]=i})}return window._paBimbingan}function dt(e,t){return t.length?t.map((t,n)=>`<div class="pa-mhs-item"><div class="pa-mhs-av">`+t.nama.split(` `).map(e=>e[0]).join(``).substring(0,2).toUpperCase()+`</div><div style="flex:1;min-width:0;"><div class="pa-mhs-name pa-mhs-link" onclick="event.stopPropagation();_paOpenKrs('`+t.nim+`','`+t.nama.replace(/'/g,`\\'`)+`','`+t.sem+`','`+t.ipk.toFixed(2)+`','`+(t.prodi||`Administrasi Negara`).replace(/'/g,`\\'`)+`')" title="Lihat KRS `+t.nama+`">`+t.nama+`</div><div class="pa-mhs-meta"><span style="font-family:var(--font-mono);">`+t.nim+`</span><div class="pa-sep"></div><span>Sem `+t.sem+`</span><div class="pa-sep"></div><span class="pa-ipk" style="color:`+(t.ipk>=3.5?`hsl(150 55% 38%)`:t.ipk>=3?`hsl(215 50% 45%)`:`hsl(35 65% 42%)`)+`;">IPK `+t.ipk.toFixed(2)+`</span></div></div><div class="pa-mhs-actions"><button class="pa-mhs-btn edit" title="Edit" onclick="event.stopPropagation();_paShowModal('`+e+`',`+n+`)"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg></button><button class="pa-mhs-btn del" title="Hapus" onclick="event.stopPropagation();_paDeleteMhs('`+e+`',`+n+`)"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg></button></div></div>`).join(``):`<div style="text-align:center;padding:24px;color:hsl(215 15% 60%);font-size:0.8rem;">Belum ada mahasiswa bimbingan</div>`}function ft(e){let t=ut(),n=t[e]||[],r=document.getElementById(`paGrid_`+e);r&&(r.innerHTML=dt(e,n));let i=document.getElementById(`paBadge_`+e);i&&(i.textContent=n.length);let a=document.getElementById(`paMhsCount_`+e);a&&(a.textContent=n.length+` mahasiswa bimbingan`);let o=Object.values(t).reduce((e,t)=>e+t.length,0),s=Object.keys(t).length,c=document.getElementById(`paStat_mhs`);c&&(c.textContent=o);let l=document.getElementById(`paStat_avg`);l&&(l.textContent=s?(o/s).toFixed(1):0);let u=document.getElementById(`paStat_max`);u&&(u.textContent=Math.max(...Object.values(t).map(e=>e.length),0));let d=r?.closest(`.pa-panel`);d&&d.dataset.open===`true`&&(d.style.maxHeight=d.scrollHeight+50+`px`)}function pt(e,t){let n=ut(),r=n[e]?.[t];r&&confirm(`Hapus `+r.nama+` dari bimbingan dosen ini?`)&&(n[e].splice(t,1),ft(e),_t(`Mahasiswa berhasil dihapus`))}function mt(e,t){let n=ut(),r=t!=null,i=r?n[e]?.[t]:null,a=l.find(t=>t.id===e),o=r?`Edit Mahasiswa Bimbingan`:`Tambah Mahasiswa Bimbingan`;document.getElementById(`paModalContainer`).innerHTML=`<div class="pa-modal-overlay" id="paModalOverlay"><div class="pa-modal"><div class="pa-modal-head"><h3>`+o+`</h3><button class="pa-modal-close" onclick="_paCloseModal()">×</button></div><div class="pa-modal-body"><div style="background:hsl(215 20% 97%);border-radius:10px;padding:10px 14px;margin-bottom:16px;font-size:0.78rem;color:hsl(215 30% 35%);"><strong>Dosen PA:</strong> `+(a?a.nama:``)+`</div><label>Nama Mahasiswa</label><input type="text" id="paFormNama" value="`+(i?i.nama:``)+`" placeholder="Masukkan nama lengkap" /><label>NIM</label><input type="text" id="paFormNim" value="`+(i?i.nim:``)+`" placeholder="Contoh: 202410001" /><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div><label>Angkatan</label><select id="paFormAnk"><option value="2021"`+(i?.ank===2021?` selected`:``)+`>2021</option><option value="2022"`+(i?.ank===2022?` selected`:``)+`>2022</option><option value="2023"`+(i?.ank===2023?` selected`:``)+`>2023</option><option value="2024"`+(i?.ank===2024?` selected`:``)+`>2024</option><option value="2025"`+(i?.ank===2025?` selected`:``)+`>2025</option></select></div><div><label>Semester</label><input type="number" id="paFormSem" value="`+(i?i.sem:`2`)+`" min="1" max="14" /></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div><label>IPK</label><input type="number" id="paFormIpk" value="`+(i?i.ipk:`3.00`)+`" min="0" max="4" step="0.01" /></div><div><label>Prodi</label><select id="paFormProdi"><option value="Administrasi Negara"`+(i?.prodi===`Administrasi Negara`?` selected`:``)+`>Adm. Negara</option><option value="Administrasi Niaga"`+(i?.prodi===`Administrasi Niaga`?` selected`:``)+`>Adm. Niaga</option></select></div></div></div><div class="pa-modal-foot"><button class="pa-cancel" onclick="_paCloseModal()">Batal</button><button class="pa-save" onclick="_paSaveMhs('`+e+`',`+(r?t:`null`)+`)">`+(r?`Simpan`:`Tambah`)+`</button></div></div></div>`,document.getElementById(`paModalOverlay`).addEventListener(`click`,function(e){e.target===this&&ht()}),setTimeout(()=>document.getElementById(`paFormNama`)?.focus(),100)}function ht(){document.getElementById(`paModalContainer`).innerHTML=``}function gt(e,t){let n=document.getElementById(`paFormNama`)?.value.trim(),r=document.getElementById(`paFormNim`)?.value.trim();if(!n){alert(`Nama mahasiswa wajib diisi`);return}if(!r){alert(`NIM wajib diisi`);return}let i=ut();i[e]||(i[e]=[]);let a={nim:r,nama:n,ank:parseInt(document.getElementById(`paFormAnk`)?.value)||2024,sem:parseInt(document.getElementById(`paFormSem`)?.value)||2,ipk:parseFloat(document.getElementById(`paFormIpk`)?.value)||3,prodi:document.getElementById(`paFormProdi`)?.value||`Administrasi Negara`};t==null?(i[e].push(a),_t(`Mahasiswa berhasil ditambahkan`)):(i[e][t]=a,_t(`Data mahasiswa diperbarui`)),ht(),ft(e)}function _t(e){let t=document.createElement(`div`);t.style.cssText=`position:fixed;bottom:24px;right:24px;background:hsl(150 50% 35%);color:white;padding:12px 20px;border-radius:10px;font-size:0.8rem;font-weight:600;z-index:10000;box-shadow:0 4px 16px rgba(0,0,0,.15);animation:el-fadeInUp .25s ease;`,t.textContent=`✓ `+e,document.body.appendChild(t),setTimeout(()=>{t.style.opacity=`0`,t.style.transition=`opacity .3s`,setTimeout(()=>t.remove(),300)},2500)}function vt(e,t,n,r,i){let a={nim:e,nama:t,sem:n,ipk:r,prodi:i},o=document.getElementById(`dashMain`);if(!o)return;let s=o.querySelector(`.dash-iso-footer`)?.outerHTML||``;o.innerHTML=at(a)+s,o.scrollTop=0,document.querySelectorAll(`.sidebar-link`).forEach(e=>{e.classList.remove(`active`),e.removeAttribute(`aria-current`)});let c=document.querySelector(`.sidebar-link[data-page="validasi-krs"]`);c&&(c.classList.add(`active`),c.setAttribute(`aria-current`,`page`))}function yt(){let e=document.getElementById(`dashMain`);if(!e)return;let t=e.querySelector(`.dash-iso-footer`)?.outerHTML||``;e.innerHTML=St()+t,Ct(),e.scrollTop=0,document.querySelectorAll(`.sidebar-link`).forEach(e=>{e.classList.remove(`active`),e.removeAttribute(`aria-current`)});let n=document.querySelector(`.sidebar-link[data-page="bimbingan-pa"]`);n&&(n.classList.add(`active`),n.setAttribute(`aria-current`,`page`))}function bt(){return`
    <div class="dash-section" style="animation:fadeUp .4s ease">
      <h3>⚙️ Setting PMB</h3>
      <p style="color:var(--text-muted);margin-bottom:20px;">Konfigurasi biaya, jadwal gelombang, dan tahun akademik PMB.</p>

      <div id="settingPMBLoader" style="text-align:center;padding:30px;">${F.loader} Memuat settings...</div>
      <form id="settingPMBForm" style="display:none;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;">

          <!-- Biaya -->
          <div class="dash-card" style="padding:20px;">
            <h4 style="margin-bottom:14px;color:hsl(145 60% 40%);">💰 Biaya Pendaftaran</h4>
            <label style="font-size:0.82rem;font-weight:600;display:block;margin-bottom:6px;">Biaya (Rp)</label>
            <input type="number" id="set_biaya_pendaftaran" min="0" step="1000"
              style="width:100%;padding:10px 14px;border:1.5px solid hsl(215 15% 75%);border-radius:8px;font-size:1rem;font-weight:600;">
            <p style="font-size:0.75rem;color:var(--text-muted);margin-top:6px;">Berlaku untuk semua pembayaran baru.</p>
          </div>

          <!-- Tahun Akademik -->
          <div class="dash-card" style="padding:20px;">
            <h4 style="margin-bottom:14px;color:hsl(215 60% 50%);">🎓 Tahun Akademik</h4>
            <label style="font-size:0.82rem;font-weight:600;display:block;margin-bottom:6px;">Tahun Akademik</label>
            <input type="text" id="set_tahun_akademik" placeholder="2026/2027"
              style="width:100%;padding:10px 14px;border:1.5px solid hsl(215 15% 75%);border-radius:8px;font-size:1rem;">
          </div>

          <!-- Gelombang 1 -->
          <div class="dash-card" style="padding:20px;">
            <h4 style="margin-bottom:14px;color:hsl(40 80% 45%);">📅 Gelombang 1</h4>
            <div style="display:flex;gap:10px;">
              <div style="flex:1;">
                <label style="font-size:0.78rem;font-weight:600;display:block;margin-bottom:4px;">Mulai</label>
                <input type="date" id="set_gelombang_1_start" style="width:100%;padding:8px;border:1.5px solid hsl(215 15% 75%);border-radius:8px;">
              </div>
              <div style="flex:1;">
                <label style="font-size:0.78rem;font-weight:600;display:block;margin-bottom:4px;">Selesai</label>
                <input type="date" id="set_gelombang_1_end" style="width:100%;padding:8px;border:1.5px solid hsl(215 15% 75%);border-radius:8px;">
              </div>
            </div>
          </div>

          <!-- Gelombang 2 -->
          <div class="dash-card" style="padding:20px;">
            <h4 style="margin-bottom:14px;color:hsl(200 70% 45%);">📅 Gelombang 2</h4>
            <div style="display:flex;gap:10px;">
              <div style="flex:1;">
                <label style="font-size:0.78rem;font-weight:600;display:block;margin-bottom:4px;">Mulai</label>
                <input type="date" id="set_gelombang_2_start" style="width:100%;padding:8px;border:1.5px solid hsl(215 15% 75%);border-radius:8px;">
              </div>
              <div style="flex:1;">
                <label style="font-size:0.78rem;font-weight:600;display:block;margin-bottom:4px;">Selesai</label>
                <input type="date" id="set_gelombang_2_end" style="width:100%;padding:8px;border:1.5px solid hsl(215 15% 75%);border-radius:8px;">
              </div>
            </div>
          </div>

          <!-- Gelombang 3 -->
          <div class="dash-card" style="padding:20px;">
            <h4 style="margin-bottom:14px;color:hsl(280 50% 50%);">📅 Gelombang 3</h4>
            <div style="display:flex;gap:10px;">
              <div style="flex:1;">
                <label style="font-size:0.78rem;font-weight:600;display:block;margin-bottom:4px;">Mulai</label>
                <input type="date" id="set_gelombang_3_start" style="width:100%;padding:8px;border:1.5px solid hsl(215 15% 75%);border-radius:8px;">
              </div>
              <div style="flex:1;">
                <label style="font-size:0.78rem;font-weight:600;display:block;margin-bottom:4px;">Selesai</label>
                <input type="date" id="set_gelombang_3_end" style="width:100%;padding:8px;border:1.5px solid hsl(215 15% 75%);border-radius:8px;">
              </div>
            </div>
          </div>

        </div>

        <div style="margin-top:24px;display:flex;gap:12px;">
          <button type="submit" id="settingSaveBtn" style="padding:12px 32px;background:hsl(145 60% 40%);color:white;border:none;border-radius:10px;font-weight:600;cursor:pointer;font-size:0.9rem;">
            💾 Simpan Perubahan
          </button>
          <span id="settingSaveStatus" style="color:hsl(145 60% 40%);font-weight:600;align-self:center;"></span>
        </div>
      </form>
    </div>`}async function xt(){let e=document.getElementById(`settingPMBLoader`),t=document.getElementById(`settingPMBForm`);if(t){try{let n=await(await fetch(`${R}/settings`)).json();[`biaya_pendaftaran`,`tahun_akademik`,`gelombang_1_start`,`gelombang_1_end`,`gelombang_2_start`,`gelombang_2_end`,`gelombang_3_start`,`gelombang_3_end`].forEach(e=>{let t=document.getElementById(`set_`+e);t&&n[e]&&(t.value=n[e].value)}),e.style.display=`none`,t.style.display=`block`}catch(t){e.innerHTML=`❌ Gagal memuat settings: `+t.message}t.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`settingSaveBtn`),n=document.getElementById(`settingSaveStatus`);t.disabled=!0,t.textContent=`⏳ Menyimpan...`;let r={};[`biaya_pendaftaran`,`tahun_akademik`,`gelombang_1_start`,`gelombang_1_end`,`gelombang_2_start`,`gelombang_2_end`,`gelombang_3_start`,`gelombang_3_end`].forEach(e=>{let t=document.getElementById(`set_`+e);t&&(r[e]=t.value)});try{let e=await fetch(`${R}/settings`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify(r)}),t=await e.json();e.ok?(n.textContent=`✅ Tersimpan!`,n.style.color=`hsl(145 60% 40%)`):(n.textContent=`❌ `+(t.error||`Gagal`),n.style.color=`hsl(0 70% 50%)`)}catch(e){n.textContent=`❌ Gagal: `+e.message,n.style.color=`hsl(0 70% 50%)`}t.disabled=!1,t.textContent=`💾 Simpan Perubahan`,setTimeout(()=>{n.textContent=``},3e3)})}}function St(){let e=ut(),t=l.filter(e=>e.totalMahasiswaBimbingan>0),n=Object.values(e).reduce((e,t)=>e+t.length,0),r=t.length?(n/t.length).toFixed(1):0,i=Math.max(...Object.values(e).map(e=>e.length),0);return`
    <style>
      .pa-page{animation:el-fadeInUp .35s ease}.pa-mhs-link{cursor:pointer;transition:color .2s}.pa-mhs-link:hover{color:hsl(215 55% 50%)!important;text-decoration:underline}.pa-header{display:flex;gap:20px;margin-bottom:20px}.pa-stat-card{flex:1;background:#fff;border-radius:14px;border:1px solid hsl(215 15% 92%);padding:20px;display:flex;align-items:center;gap:14px;transition:all .25s}.pa-stat-card:hover{box-shadow:0 4px 20px rgba(0,0,0,.06);transform:translateY(-2px)}.pa-stat-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0}.pa-stat-num{font-size:1.6rem;font-weight:800;line-height:1;color:hsl(215 40% 18%)}.pa-stat-label{font-size:.68rem;color:hsl(215 15% 55%);margin-top:2px}.pa-search-bar{background:#fff;border-radius:12px;border:1px solid hsl(215 15% 92%);padding:12px 18px;display:flex;align-items:center;gap:10px;margin-bottom:16px}.pa-search-bar input{flex:1;border:none;outline:none;font-size:.85rem;color:hsl(215 40% 18%);font-family:inherit;background:transparent}.pa-search-bar input::placeholder{color:hsl(215 15% 65%)}.pa-count{font-size:.72rem;color:hsl(215 15% 55%);flex-shrink:0}.pa-card{background:#fff;border-radius:14px;border:1px solid hsl(215 15% 92%);margin-bottom:10px;overflow:hidden;transition:all .25s}.pa-card:hover{border-color:hsl(215 30% 85%);box-shadow:0 2px 12px rgba(0,0,0,.04)}.pa-card-head{display:flex;align-items:center;gap:14px;padding:14px 18px;cursor:pointer;user-select:none}.pa-avatar{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.75rem;color:white;flex-shrink:0}.pa-info{flex:1;min-width:0}.pa-info h4{margin:0;font-size:.85rem;font-weight:700;color:hsl(215 40% 18%);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pa-badge{display:flex;align-items:center;gap:6px;flex-shrink:0}.pa-badge-num{min-width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:.85rem;font-weight:800}.pa-arrow{width:24px;height:24px;border-radius:6px;display:flex;align-items:center;justify-content:center;color:hsl(215 15% 65%);transition:all .25s}.pa-arrow svg{pointer-events:none;transition:transform .3s cubic-bezier(.4,0,.2,1)}.pa-panel{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.4,0,.2,1)}.pa-panel-inner{padding:0 18px 16px}.pa-panel-toolbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-top:4px}.pa-btn-add{display:inline-flex;align-items:center;gap:5px;padding:6px 14px;border:none;border-radius:8px;font-size:.72rem;font-weight:700;cursor:pointer;background:hsl(215 55% 50%);color:white;transition:all .2s}.pa-btn-add:hover{background:hsl(215 55% 42%);transform:scale(1.03)}.pa-mhs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px}.pa-mhs-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;background:hsl(215 20% 98%);border:1px solid hsl(215 15% 94%);transition:all .2s}.pa-mhs-item:hover{background:hsl(215 30% 96%);border-color:hsl(215 30% 87%)}.pa-mhs-item:hover .pa-mhs-actions{opacity:1}.pa-mhs-av{width:32px;height:32px;border-radius:8px;background:hsl(215 15% 90%);color:hsl(215 30% 40%);display:flex;align-items:center;justify-content:center;font-size:.58rem;font-weight:700;flex-shrink:0}.pa-mhs-name{font-size:.78rem;font-weight:600;color:hsl(215 35% 22%);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pa-mhs-meta{font-size:.65rem;color:hsl(215 15% 55%);display:flex;gap:8px;margin-top:1px}.pa-mhs-meta span{white-space:nowrap}.pa-ipk{font-weight:700}.pa-sep{width:1px;height:14px;background:hsl(215 15% 88%);margin:0 2px}.pa-mhs-actions{display:flex;gap:4px;flex-shrink:0;opacity:0;transition:opacity .2s}.pa-mhs-btn{width:26px;height:26px;border:none;border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s}.pa-mhs-btn.edit{background:hsl(215 50% 94%);color:hsl(215 50% 45%)}.pa-mhs-btn.edit:hover{background:hsl(215 50% 88%)}.pa-mhs-btn.del{background:hsl(0 50% 95%);color:hsl(0 50% 45%)}.pa-mhs-btn.del:hover{background:hsl(0 50% 88%)}.pa-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9999;display:flex;align-items:center;justify-content:center;animation:el-fadeInUp .2s ease}.pa-modal{background:white;border-radius:16px;width:480px;max-width:92vw;max-height:85vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.15)}.pa-modal-head{padding:20px 24px 16px;border-bottom:1px solid hsl(215 15% 93%);display:flex;justify-content:space-between;align-items:center}.pa-modal-head h3{margin:0;font-size:.95rem;font-weight:700;color:hsl(215 40% 18%)}.pa-modal-close{width:32px;height:32px;border:none;border-radius:8px;background:hsl(215 15% 95%);color:hsl(215 15% 50%);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.1rem}.pa-modal-close:hover{background:hsl(0 50% 94%);color:hsl(0 50% 45%)}.pa-modal-body{padding:20px 24px}.pa-modal-body label{display:block;font-size:.72rem;font-weight:700;color:hsl(215 20% 40%);margin-bottom:5px;text-transform:uppercase;letter-spacing:.03em}.pa-modal-body input,.pa-modal-body select{width:100%;padding:10px 14px;border:1px solid hsl(215 15% 88%);border-radius:10px;font-size:.82rem;outline:none;font-family:inherit;box-sizing:border-box;transition:border-color .2s;margin-bottom:14px}.pa-modal-body input:focus,.pa-modal-body select:focus{border-color:hsl(215 55% 55%)}.pa-modal-foot{padding:14px 24px 20px;display:flex;gap:8px;justify-content:flex-end}.pa-modal-foot button{padding:8px 20px;border:none;border-radius:8px;font-size:.8rem;font-weight:700;cursor:pointer;transition:all .2s}.pa-modal-foot .pa-cancel{background:hsl(215 15% 93%);color:hsl(215 20% 40%)}.pa-modal-foot .pa-cancel:hover{background:hsl(215 15% 87%)}.pa-modal-foot .pa-save{background:hsl(215 55% 50%);color:white}.pa-modal-foot .pa-save:hover{background:hsl(215 55% 42%)}@media(max-width:768px){.pa-header{flex-direction:column;gap:10px}.pa-mhs-grid{grid-template-columns:1fr}.pa-info h4{font-size:.8rem}.pa-mhs-actions{opacity:1}}
    </style>
    <div class="pa-page">
      <div class="pa-header">
        <div class="pa-stat-card"><div class="pa-stat-icon" style="background:hsl(215 60% 95%);color:hsl(215 55% 45%);">👨‍🏫</div><div><div class="pa-stat-num" id="paStat_dosen">${t.length}</div><div class="pa-stat-label">Dosen PA Aktif</div></div></div>
        <div class="pa-stat-card"><div class="pa-stat-icon" style="background:hsl(150 50% 94%);color:hsl(150 50% 35%);">👨‍🎓</div><div><div class="pa-stat-num" id="paStat_mhs">${n}</div><div class="pa-stat-label">Total Mahasiswa</div></div></div>
        <div class="pa-stat-card"><div class="pa-stat-icon" style="background:hsl(280 40% 94%);color:hsl(280 45% 45%);">📊</div><div><div class="pa-stat-num" id="paStat_avg">${r}</div><div class="pa-stat-label">Rata-rata / Dosen</div></div></div>
        <div class="pa-stat-card"><div class="pa-stat-icon" style="background:hsl(35 70% 94%);color:hsl(35 70% 42%);">🏆</div><div><div class="pa-stat-num" id="paStat_max">${i}</div><div class="pa-stat-label">Mhs Terbanyak</div></div></div>
      </div>
      <div class="pa-search-bar">
        <svg class="pa-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" id="paSearchInput" placeholder="Cari nama dosen PA..." />
        <div class="pa-count"><span id="paCount">${t.length}</span> dosen</div>
      </div>
      ${t.map((t,n)=>{let r=t.nama.split(` `).filter(e=>e.length>2&&!e.includes(`.`)).map(e=>e[0]).join(``).substring(0,2).toUpperCase(),i=(n*37+200)%360,a=`hsl(`+i+` 45% 50%)`,o=`hsl(`+i+` 50% 94%)`,s=`hsl(`+i+` 50% 38%)`,c=e[t.id]||[];return`<div class="pa-card" data-dosen="`+t.nama.toLowerCase()+`" data-dsn-id="`+t.id+`"><div class="pa-card-head" data-idx="`+n+`"><div class="pa-avatar" style="background:`+a+`;">`+r+`</div><div class="pa-info"><h4>`+t.nama+`</h4></div><div class="pa-badge"><div class="pa-badge-num" style="background:`+o+`;color:`+s+`;" id="paBadge_`+t.id+`">`+c.length+`</div><div class="pa-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div></div></div><div class="pa-panel" id="paMhs_`+n+`"><div class="pa-panel-inner"><div class="pa-panel-toolbar"><span style="font-size:0.72rem;color:hsl(215 15% 55%);" id="paMhsCount_`+t.id+`">`+c.length+` mahasiswa bimbingan</span><button class="pa-btn-add" onclick="event.stopPropagation();_paShowModal('`+t.id+`',null)">+ Tambah</button></div><div class="pa-mhs-grid" id="paGrid_`+t.id+`">`+dt(t.id,c)+`</div></div></div></div>`}).join(``)}
    </div>
    <div id="paModalContainer"></div>`}function Ct(){document.querySelectorAll(`.pa-card-head`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.idx,n=document.getElementById(`paMhs_`+t),r=e.querySelector(`.pa-arrow svg`),i=e.closest(`.pa-card`),a=n.dataset.open===`true`;document.querySelectorAll(`.pa-panel`).forEach(e=>{e.id!==`paMhs_`+t&&e.dataset.open===`true`&&(e.style.maxHeight=`0`,e.dataset.open=`false`,e.closest(`.pa-card`).querySelector(`.pa-arrow svg`).style.transform=``,e.closest(`.pa-card`).style.borderColor=``)}),a?(n.style.maxHeight=`0`,n.dataset.open=`false`,r.style.transform=``,i.style.borderColor=``):(n.style.maxHeight=n.scrollHeight+50+`px`,n.dataset.open=`true`,r.style.transform=`rotate(180deg)`,i.style.borderColor=`hsl(215 40% 80%)`,setTimeout(()=>e.scrollIntoView({behavior:`smooth`,block:`nearest`}),200))})}),document.getElementById(`paSearchInput`)?.addEventListener(`input`,function(){let e=this.value.toLowerCase(),t=0;document.querySelectorAll(`.pa-card`).forEach(n=>{let r=n.dataset.dosen.includes(e);n.style.display=r?``:`none`,r&&t++}),document.getElementById(`paCount`).textContent=t}),window._paShowModal=mt,window._paDeleteMhs=pt,window._paCloseModal=ht,window._paSaveMhs=gt,window._paOpenKrs=vt,window._paBackToBimbingan=yt}var R=`/api/pmb`;function wt(){return`
    <div class="dash-card" style="margin-bottom:20px;">
      <div class="dash-card-head">
        <h3>${F.userPlus} Manajemen PMB</h3>
        <div class="pmb-header-btns">
          <button class="pmb-mgmt-btn active" data-tab="list">Daftar Pendaftar</button>
          <button class="pmb-mgmt-btn" data-tab="add">+ Tambah Offline</button>
        </div>
      </div>
      <div class="dash-card-body" id="pmbMgmtContent">
        <div style="text-align:center;padding:20px;color:var(--text-muted);">Memuat data...</div>
      </div>
    </div>
    <!-- Detail Modal -->
    <div id="pmbDetailModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;align-items:center;justify-content:center;">
      <div style="background:white;border-radius:16px;width:580px;max-width:92vw;max-height:85vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,0.2);margin:auto;padding:24px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
          <h3 style="font-family:var(--font-heading);font-size:1.1rem;margin:0;">Detail Pendaftar</h3>
          <button id="closeDetailModal" style="width:32px;height:32px;border:none;border-radius:8px;background:hsl(215 15% 95%);color:hsl(215 15% 50%);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.2rem;">&times;</button>
        </div>
        <div id="pmbDetailContent"></div>
      </div>
    </div>`}async function Tt(){document.querySelectorAll(`.pmb-mgmt-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.pmb-mgmt-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),e.dataset.tab===`list`?B():e.dataset.tab===`add`&&zt()})}),document.getElementById(`closeDetailModal`)?.addEventListener(`click`,()=>{document.getElementById(`pmbDetailModal`).style.display=`none`}),document.getElementById(`pmbDetailModal`)?.addEventListener(`click`,e=>{e.target.id===`pmbDetailModal`&&(e.target.style.display=`none`)}),B()}var z=[];async function B(){let e=document.getElementById(`pmbMgmtContent`);if(e){e.innerHTML=`<div style="text-align:center;padding:24px;">
    <div class="anim-spin" style="width:24px;height:24px;border:2.5px solid var(--gray-200);border-top-color:var(--primary-500);border-radius:50%;margin:0 auto 8px;"></div>
    <p style="color:var(--text-muted);font-size:var(--text-sm);">Memuat data pendaftar...</p>
  </div>`;try{let[e,t]=await Promise.all([fetch(`${R}/registrations`),fetch(`${R}/stats`)]),n=await e.json(),r=await t.json();z=n.data||[],Dt(r,z)}catch{e.innerHTML=`<div style="text-align:center;padding:24px;">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--danger-500)" stroke-width="1.5" style="margin:0 auto 12px;display:block;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <p style="color:var(--danger-600);font-weight:var(--font-semibold);margin-bottom:4px;">Gagal memuat data</p>
      <p style="color:var(--text-muted);font-size:var(--text-sm);">Pastikan backend server berjalan di port 8080</p>
      <button class="btn btn-outline" style="margin-top:12px;" onclick="loadRegistrationList()">Coba Lagi</button>
    </div>`}}}var V=1,Et=20,H={key:`created_at`,dir:`desc`},U=new Set;function Dt(e,t){let n=document.getElementById(`pmbMgmtContent`);if(!n)return;n.innerHTML=`
    <!-- Stat Cards -->
    <div class="stat-grid pmb-stat-grid" style="margin-bottom:20px;">
      <div class="pmb-glow-card" style="background:linear-gradient(135deg,hsl(215 65% 50%),hsl(230 70% 58%));">
        <div class="pmb-gc-icon">${F.users}</div>
        <div class="pmb-gc-info"><div class="pmb-gc-value">${e.total_pendaftar}</div><div class="pmb-gc-label">Total Pendaftar</div></div>
        <div class="pmb-gc-ring"></div>
      </div>
      <div class="pmb-glow-card" style="background:linear-gradient(135deg,hsl(38 75% 52%),hsl(28 80% 48%));">
        <div class="pmb-gc-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <div class="pmb-gc-info"><div class="pmb-gc-value">${e.total_proses}</div><div class="pmb-gc-label">Proses</div></div>
        <div class="pmb-gc-ring"></div>
      </div>
      <div class="pmb-glow-card" style="background:linear-gradient(135deg,hsl(150 55% 42%),hsl(160 60% 38%));">
        <div class="pmb-gc-icon">${F.checkCircle}</div>
        <div class="pmb-gc-info"><div class="pmb-gc-value">${e.total_diterima}</div><div class="pmb-gc-label">Diterima</div></div>
        <div class="pmb-gc-ring"></div>
      </div>
      <div class="pmb-glow-card" style="background:linear-gradient(135deg,hsl(0 60% 55%),hsl(350 65% 48%));">
        <div class="pmb-gc-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg></div>
        <div class="pmb-gc-info"><div class="pmb-gc-value">${e.total_ditolak}</div><div class="pmb-gc-label">Ditolak</div></div>
        <div class="pmb-gc-ring"></div>
      </div>
    </div>

    <!-- Search & Filter Bar -->
    <div class="pmb-filter-bar">
      <div style="flex:1;min-width:200px;position:relative;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2" style="position:absolute;left:12px;top:50%;transform:translateY(-50%);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" id="pmbSearch" class="form-input" placeholder="Cari nama, NIK, atau no. pendaftaran..." style="padding-left:36px;">
      </div>
      <select id="pmbFilterStatus" class="form-select" style="width:auto;min-width:140px;">
        <option value="">Semua Status</option>
        <option value="menunggu">Menunggu</option><option value="proses">Proses</option>
        <option value="diterima">Diterima</option><option value="ditolak">Ditolak</option>
      </select>
      <select id="pmbFilterProdi" class="form-select" style="width:auto;min-width:160px;">
        <option value="">Semua Prodi</option>
        <option value="Administrasi Negara">Adm. Negara</option>
        <option value="Administrasi Niaga">Adm. Niaga</option>
      </select>
      <button class="btn btn-secondary btn-sm" id="pmbExportBtn" title="Export CSV">${F.fileText} Export</button>
    </div>

    <!-- Date Filter -->
    <div class="pmb-date-bar">
      <label style="font-size:0.75rem;color:var(--text-muted);font-weight:600;">📅 Periode:</label>
      <input type="date" id="pmbDateFrom" class="form-input" style="width:auto;min-width:140px;font-size:0.78rem;">
      <span style="color:var(--text-muted);font-size:0.8rem;">—</span>
      <input type="date" id="pmbDateTo" class="form-input" style="width:auto;min-width:140px;font-size:0.78rem;">
      <button class="btn btn-ghost btn-sm" id="pmbClearDate" style="font-size:0.72rem;">✕ Reset</button>
    </div>

    <!-- Bulk Actions -->
    <div id="pmbBulkBar" style="display:none;background:hsl(215 80% 96%);border:1px solid hsl(215 70% 85%);border-radius:10px;padding:10px 16px;margin-bottom:12px;gap:12px;align-items:center;flex-wrap:wrap;">
      <span id="pmbBulkCount" style="font-size:0.82rem;font-weight:600;color:hsl(215 70% 40%);"></span>
      <div style="display:flex;gap:6px;margin-left:auto;">
        <button class="btn btn-success btn-sm" id="pmbBulkValidate">✅ Validasi Semua</button>
        <button class="btn btn-primary btn-sm" id="pmbBulkAccount">🔐 Buat Akun Semua</button>
        <button class="btn btn-danger btn-sm" id="pmbBulkDelete">🗑️ Hapus Semua</button>
        <button class="btn btn-ghost btn-sm" id="pmbBulkCancel">Batal</button>
      </div>
    </div>

    <!-- Table -->
    <div id="pmbTableWrapper"></div>

    <!-- Pagination & Count -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px;flex-wrap:wrap;gap:8px;">
      <p style="font-size:var(--text-xs);color:var(--text-muted);" id="pmbResultCount"></p>
      <div id="pmbPagination" style="display:flex;gap:4px;align-items:center;"></div>
    </div>`;let r=()=>{V=1,Ot()};document.getElementById(`pmbSearch`)?.addEventListener(`input`,r),document.getElementById(`pmbFilterStatus`)?.addEventListener(`change`,r),document.getElementById(`pmbFilterProdi`)?.addEventListener(`change`,r),document.getElementById(`pmbDateFrom`)?.addEventListener(`change`,r),document.getElementById(`pmbDateTo`)?.addEventListener(`change`,r),document.getElementById(`pmbClearDate`)?.addEventListener(`click`,()=>{document.getElementById(`pmbDateFrom`).value=``,document.getElementById(`pmbDateTo`).value=``,r()}),document.getElementById(`pmbExportBtn`)?.addEventListener(`click`,()=>Lt(z)),document.getElementById(`pmbBulkValidate`)?.addEventListener(`click`,Mt),document.getElementById(`pmbBulkAccount`)?.addEventListener(`click`,Nt),document.getElementById(`pmbBulkDelete`)?.addEventListener(`click`,Pt),document.getElementById(`pmbBulkCancel`)?.addEventListener(`click`,()=>{U.clear(),jt(),Ot()}),Ot()}function Ot(){let e=(document.getElementById(`pmbSearch`)?.value||``).toLowerCase(),t=document.getElementById(`pmbFilterStatus`)?.value||``,n=document.getElementById(`pmbFilterProdi`)?.value||``,r=document.getElementById(`pmbDateFrom`)?.value||``,i=document.getElementById(`pmbDateTo`)?.value||``,a=z.filter(a=>{let o=!e||(a.nama||``).toLowerCase().includes(e)||(a.nik||``).includes(e)||(a.no_pendaftaran||``).toLowerCase().includes(e),s=!t||a.status===t,c=!n||a.prodi_pilihan===n,l=!0;if(r||i){let e=a.created_at?a.created_at.slice(0,10):``;r&&e<r&&(l=!1),i&&e>i&&(l=!1)}return o&&s&&c&&l}),{key:o,dir:s}=H;a.sort((e,t)=>{let n=e[o]||``,r=t[o]||``;return typeof n==`string`&&(n=n.toLowerCase()),typeof r==`string`&&(r=r.toLowerCase()),n<r?s===`asc`?-1:1:n>r?s===`asc`?1:-1:0});let c=a.length,l=Math.max(1,Math.ceil(c/Et));V>l&&(V=l);let u=(V-1)*Et,d=a.slice(u,u+Et);document.getElementById(`pmbTableWrapper`).innerHTML=At(d),document.getElementById(`pmbResultCount`).textContent=c>0?`Menampilkan ${u+1}–${Math.min(u+Et,c)} dari ${c} pendaftar`:`Tidak ada data`,kt(l),Ft()}function kt(e){let t=document.getElementById(`pmbPagination`);if(!t||e<=1){t&&(t.innerHTML=``);return}let n=e=>`style="padding:4px 10px;border-radius:6px;border:1px solid ${e?`var(--primary-500)`:`var(--gray-200)`};background:${e?`var(--primary-500)`:`#fff`};color:${e?`#fff`:`var(--text-primary)`};cursor:pointer;font-size:0.75rem;font-weight:600;"`,r=`<button ${n(!1)} ${V<=1?`disabled`:``} data-pg="${V-1}">‹</button>`,i=Math.max(1,V-2),a=Math.min(e,i+4);a-i<4&&(i=Math.max(1,a-4));for(let e=i;e<=a;e++)r+=`<button ${n(e===V)} data-pg="${e}">${e}</button>`;r+=`<button ${n(!1)} ${V>=e?`disabled`:``} data-pg="${V+1}">›</button>`,t.innerHTML=r,t.querySelectorAll(`button[data-pg]`).forEach(t=>t.addEventListener(`click`,()=>{let n=parseInt(t.dataset.pg);n>=1&&n<=e&&(V=n,Ot())}))}function At(e){if(e.length===0)return`<div style="text-align:center;padding:32px;">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gray-300)" stroke-width="1.5" style="margin:0 auto 12px;display:block;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
      <p style="color:var(--text-muted);font-size:var(--text-sm);">Tidak ada pendaftar ditemukan</p>
    </div>`;let t=e=>H.key===e?H.dir===`asc`?`<span style="font-size:0.7em;">↑</span>`:`<span style="font-size:0.7em;">↓</span>`:`<span style="opacity:.3;font-size:0.7em;">⇅</span>`;return`
    <table class="sch-table" style="font-size:0.82rem;">
      <thead><tr>
        <th style="width:36px;text-align:center;"><input type="checkbox" id="pmbSelectAll" ${e.every(e=>U.has(e.id))?`checked`:``} title="Pilih semua"></th>
        <th class="sortable-th" data-sort="no_pendaftaran" style="cursor:pointer;">No. Daftar ${t(`no_pendaftaran`)}</th>
        <th class="sortable-th" data-sort="nama" style="cursor:pointer;">Nama ${t(`nama`)}</th>
        <th>Prodi</th><th>Metode</th>
        <th class="sortable-th" data-sort="status" style="cursor:pointer;">Status ${t(`status`)}</th>
        <th class="sortable-th" data-sort="created_at" style="cursor:pointer;">Tanggal ${t(`created_at`)}</th>
        <th>Aksi</th>
      </tr></thead>
      <tbody>
        ${e.map(e=>`<tr class="pmb-tr" data-id="${e.id}" style="cursor:pointer;${U.has(e.id)?`background:hsl(215 80% 97%);`:``}">
          <td onclick="event.stopPropagation();" style="text-align:center;"><input type="checkbox" class="pmb-chk" data-id="${e.id}" ${U.has(e.id)?`checked`:``}></td>
          <td style="font-family:var(--font-mono);font-weight:600;white-space:nowrap;">${e.no_pendaftaran}</td>
          <td><strong>${e.nama}</strong><br><span style="font-size:0.7rem;color:var(--text-muted);font-family:var(--font-mono);">${e.nik}</span></td>
          <td style="font-size:0.8rem;">${e.prodi_pilihan||`-`}</td>
          <td><span class="badge-sm ${e.metode===`online`?`blue`:`warning`}">${e.metode===`online`?`Online`:`Offline`}</span></td>
          <td><span class="badge-sm ${e.status===`diterima`?`success`:e.status===`ditolak`?`danger`:e.status===`proses`?`blue`:`warning`}">${e.status}</span></td>
          <td style="font-size:0.72rem;color:var(--text-muted);white-space:nowrap;">${e.created_at?new Date(e.created_at).toLocaleDateString(`id-ID`,{day:`2-digit`,month:`short`,year:`numeric`}):`-`}</td>
          <td onclick="event.stopPropagation();">
            <div style="display:flex;gap:4px;white-space:nowrap;flex-wrap:wrap;align-items:center;">
              <button class="mgmt-action-btn" data-action="view" data-id="${e.id}" title="Lihat Kelengkapan Data" style="color:hsl(210 60% 50%);font-size:0.68rem;">👁️ Lihat</button>
              <span style="color:var(--gray-300);font-size:0.65rem;">│</span>
              <button class="mgmt-action-btn" data-action="confirm-pay" data-id="${e.id}" title="Step 1: Pembayaran" style="font-size:0.68rem;">① 💰 Bayar</button>
              <button class="mgmt-action-btn" data-action="create-account" data-id="${e.id}" data-email="${e.email}" data-prodi="${e.prodi_pilihan}" title="Step 2: Buat Akun (harus bayar dulu)" style="font-size:0.68rem;">② 🔐 Akun</button>
              <button class="mgmt-action-btn" data-action="validate" data-id="${e.id}" title="Step 3: Validasi (harus buat akun dulu)" style="font-size:0.68rem;">③ ✅ Validasi</button>
              <span style="color:var(--gray-300);font-size:0.65rem;">│</span>
              <button class="mgmt-action-btn" data-action="edit" data-id="${e.id}" title="Edit Data" style="color:hsl(215 70% 50%);font-size:0.68rem;">✏️ Edit</button>
              <button class="mgmt-action-btn" data-action="delete" data-id="${e.id}" title="Hapus Data" style="color:hsl(0 65% 50%);font-size:0.68rem;">🗑️ Hapus</button>
            </div>
          </td>
        </tr>`).join(``)}
      </tbody>
    </table>`}function jt(){let e=document.getElementById(`pmbBulkBar`),t=document.getElementById(`pmbBulkCount`);e&&(U.size>0?(e.style.display=`flex`,t&&(t.textContent=`${U.size} pendaftar dipilih`)):e.style.display=`none`)}async function Mt(){if(!confirm(`Validasi ${U.size} pendaftar sekaligus?`))return;let e=0,t=0;for(let n of U)try{(await fetch(`${R}/account/${n}/validate`,{method:`PUT`})).ok?e++:t++}catch{t++}alert(`✅ Berhasil: ${e}\n❌ Gagal: ${t}`),U.clear(),B()}async function Nt(){if(!confirm(`Buat akun untuk ${U.size} pendaftar sekaligus?`))return;let e=0,t=0;for(let n of U)try{(await fetch(`${R}/account/create`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({registration_id:n})})).ok?e++:t++}catch{t++}alert(`✅ Berhasil: ${e}\n❌ Gagal: ${t}`),U.clear(),B()}async function Pt(){if(!confirm(`⚠️ HAPUS ${U.size} pendaftar?\n\nAksi ini tidak bisa dibatalkan!`))return;let e=0,t=0;for(let n of U)try{(await fetch(`${R}/registration/${n}`,{method:`DELETE`})).ok?e++:t++}catch{t++}alert(`✅ Terhapus: ${e}\n❌ Gagal: ${t}`),U.clear(),B()}function Ft(){document.querySelectorAll(`.mgmt-action-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),Rt(e.dataset.action,e.dataset)})}),document.querySelectorAll(`.pmb-tr`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.id),n=z.find(e=>e.id===t);n&&It(n)})}),document.querySelectorAll(`.sortable-th`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.sort;H.key===t?H.dir=H.dir===`asc`?`desc`:`asc`:H={key:t,dir:`asc`},Ot()})}),document.getElementById(`pmbSelectAll`)?.addEventListener(`change`,e=>{document.querySelectorAll(`.pmb-chk`).forEach(t=>{let n=parseInt(t.dataset.id);e.target.checked?U.add(n):U.delete(n),t.checked=e.target.checked}),jt()}),document.querySelectorAll(`.pmb-chk`).forEach(e=>{e.addEventListener(`change`,()=>{let t=parseInt(e.dataset.id);e.checked?U.add(t):U.delete(t),jt()})})}function It(e){let t=document.getElementById(`pmbDetailModal`),n=document.getElementById(`pmbDetailContent`);if(!t||!n)return;let r={diterima:`badge-success`,ditolak:`badge-danger`,proses:`badge-primary`,menunggu:`badge-warning`},i=e=>e||`<span style="color:var(--danger-400);font-style:italic;">— kosong</span>`,a=e=>e?`✅`:`❌`,o=e=>e?new Date(e).toLocaleDateString(`id-ID`,{day:`numeric`,month:`long`,year:`numeric`}):`-`,s=[`nik`,`nama`,`email`,`telepon_1`,`prodi_pilihan`,`asal_sekolah`,`alamat`,`tempat_lahir`,`tanggal_lahir`,`gender`],c=s.filter(t=>e[t]&&String(e[t]).trim()).length,l=Math.round(c/s.length*100),u=l===100?`hsl(145 60% 45%)`:l>=70?`hsl(38 90% 50%)`:`hsl(0 70% 55%)`;n.innerHTML=`
    <div style="max-height:65vh;overflow-y:auto;padding-right:6px;">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--gray-100);">
        <div style="width:52px;height:52px;border-radius:var(--radius-xl);background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:1.1rem;flex-shrink:0;">
          ${(e.nama||`X`).charAt(0).toUpperCase()}
        </div>
        <div style="flex:1;">
          <h4 style="font-family:var(--font-heading);font-size:1rem;margin-bottom:2px;">${e.nama}</h4>
          <code style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-muted);background:var(--gray-50);padding:2px 8px;border-radius:var(--radius-sm);">${e.no_pendaftaran}</code>
        </div>
        <span class="badge ${r[e.status]||`badge-warning`}" style="font-size:0.75rem;">${e.status}</span>
      </div>

      <!-- Kelengkapan Data -->
      <div style="background:hsl(215 40% 97%);border-radius:10px;padding:12px 16px;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:0.78rem;font-weight:600;">📋 Kelengkapan Data</span>
          <span style="font-size:0.82rem;font-weight:700;color:${u};">${l}%</span>
        </div>
        <div style="background:#e2e8f0;border-radius:8px;height:6px;overflow:hidden;">
          <div style="width:${l}%;height:100%;background:${u};border-radius:8px;transition:width .3s;"></div>
        </div>
      </div>

      <!-- Data Pribadi -->
      <div style="margin-bottom:14px;">
        <h5 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:.06em;color:var(--primary-500);font-weight:700;margin-bottom:8px;">👤 Data Pribadi</h5>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><p class="dl">NIK</p><p class="dv" style="font-family:var(--font-mono);">${i(e.nik)}</p></div>
          <div><p class="dl">NISN</p><p class="dv">${i(e.nisn)}</p></div>
          <div><p class="dl">Tempat Lahir</p><p class="dv">${i(e.tempat_lahir)}</p></div>
          <div><p class="dl">Tanggal Lahir</p><p class="dv">${i(e.tanggal_lahir)}</p></div>
          <div><p class="dl">Gender</p><p class="dv">${i(e.gender)}</p></div>
          <div><p class="dl">Agama</p><p class="dv">${i(e.agama)}</p></div>
          <div><p class="dl">Email</p><p class="dv">${i(e.email)}</p></div>
          <div><p class="dl">Telepon 1</p><p class="dv">${i(e.telepon_1)}</p></div>
          <div><p class="dl">Telepon 2</p><p class="dv">${i(e.telepon_2)}</p></div>
          <div><p class="dl">KIP</p><p class="dv">${i(e.kip)}</p></div>
          <div><p class="dl">KKS</p><p class="dv">${i(e.kks)}</p></div>
        </div>
      </div>

      <!-- Alamat -->
      <div style="margin-bottom:14px;">
        <h5 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:.06em;color:var(--primary-500);font-weight:700;margin-bottom:8px;">📍 Alamat</h5>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div style="grid-column:span 2;"><p class="dl">Alamat Lengkap</p><p class="dv">${i(e.alamat)}</p></div>
          <div><p class="dl">Kota</p><p class="dv">${i(e.kota)}</p></div>
          <div><p class="dl">Provinsi</p><p class="dv">${i(e.provinsi)}</p></div>
          <div><p class="dl">Kecamatan</p><p class="dv">${i(e.kecamatan)}</p></div>
          <div><p class="dl">Kelurahan</p><p class="dv">${i(e.kelurahan)}</p></div>
          <div><p class="dl">Kode Pos</p><p class="dv">${i(e.kode_pos)}</p></div>
        </div>
      </div>

      <!-- Data Keluarga -->
      <div style="margin-bottom:14px;">
        <h5 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:.06em;color:var(--primary-500);font-weight:700;margin-bottom:8px;">👨‍👩‍👧 Data Keluarga</h5>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><p class="dl">Anak Ke</p><p class="dv">${e.anak_ke||`-`} dari ${e.dari_jumlah||`-`}</p></div>
          <div><p class="dl">No. KK</p><p class="dv">${i(e.no_kk)}</p></div>
          <div><p class="dl">Nama Ayah</p><p class="dv">${i(e.nama_ayah)}</p></div>
          <div><p class="dl">Pekerjaan Ayah</p><p class="dv">${i(e.pekerjaan_ayah)}</p></div>
          <div><p class="dl">NIK Ayah</p><p class="dv">${i(e.nik_ayah)}</p></div>
          <div><p class="dl">Nama Ibu</p><p class="dv">${i(e.nama_ibu)}</p></div>
          <div><p class="dl">Pekerjaan Ibu</p><p class="dv">${i(e.pekerjaan_ibu)}</p></div>
          <div><p class="dl">NIK Ibu</p><p class="dv">${i(e.nik_ibu)}</p></div>
        </div>
      </div>

      <!-- Akademik -->
      <div style="margin-bottom:14px;">
        <h5 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:.06em;color:var(--primary-500);font-weight:700;margin-bottom:8px;">🎓 Akademik</h5>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><p class="dl">Program Studi</p><p class="dv">${i(e.prodi_pilihan)}</p></div>
          <div><p class="dl">Asal Sekolah</p><p class="dv">${i(e.asal_sekolah)}</p></div>
          <div><p class="dl">Metode</p><span class="badge ${e.metode===`online`?`badge-primary`:`badge-warning`}" style="font-size:0.72rem;">${e.metode===`online`?`Online`:`Offline`}</span></div>
          <div><p class="dl">Tanggal Daftar</p><p class="dv">${o(e.created_at)}</p></div>
        </div>
      </div>

      <!-- Checklist Kelengkapan -->
      <div style="margin-bottom:14px;">
        <h5 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:.06em;color:var(--primary-500);font-weight:700;margin-bottom:8px;">📎 Checklist Kelengkapan</h5>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:0.8rem;">
          <div>${a(e.nik)} NIK</div>
          <div>${a(e.nama)} Nama</div>
          <div>${a(e.email)} Email</div>
          <div>${a(e.telepon_1)} Telepon</div>
          <div>${a(e.tempat_lahir)} Tempat Lahir</div>
          <div>${a(e.tanggal_lahir)} Tanggal Lahir</div>
          <div>${a(e.gender)} Gender</div>
          <div>${a(e.alamat)} Alamat</div>
          <div>${a(e.prodi_pilihan)} Prodi</div>
          <div>${a(e.asal_sekolah)} Asal Sekolah</div>
        </div>
      </div>
    </div>

    <div style="display:flex;gap:8px;margin-top:16px;padding-top:14px;border-top:1px solid var(--gray-100);flex-wrap:wrap;">
      <button class="btn btn-accent btn-sm mgmt-action-btn" data-action="confirm-pay" data-id="${e.id}">💰 Bayar</button>
      <button class="btn btn-success btn-sm mgmt-action-btn" data-action="validate" data-id="${e.id}">✅ Validasi</button>
      <button class="btn btn-primary btn-sm mgmt-action-btn" data-action="create-account" data-id="${e.id}" data-email="${e.email}" data-prodi="${e.prodi_pilihan}">🔐 Buat Akun</button>
      <button class="btn btn-secondary btn-sm mgmt-action-btn" data-action="edit" data-id="${e.id}">✏️ Edit</button>
      <button class="btn btn-danger btn-sm mgmt-action-btn" data-action="delete" data-id="${e.id}" style="margin-left:auto;">🗑️ Hapus</button>
    </div>`,n.querySelectorAll(`.mgmt-action-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),Rt(e.dataset.action,e.dataset)})}),t.style.display=`flex`}function Lt(e){if(!e.length){alert(`Tidak ada data untuk diexport.`);return}let t=[[`No Pendaftaran`,`Nama`,`NIK`,`Email`,`Prodi`,`Metode`,`Status`,`Asal Sekolah`,`Telepon`],...e.map(e=>[e.no_pendaftaran,e.nama,e.nik,e.email||``,e.prodi_pilihan||``,e.metode||``,e.status,e.asal_sekolah||``,e.telepon_1||``])].map(e=>e.map(e=>`"${e}"`).join(`,`)).join(`
`),n=new Blob([t],{type:`text/csv`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`PMB_Data_${new Date().toISOString().slice(0,10)}.csv`,i.click(),URL.revokeObjectURL(r)}async function Rt(e,t){try{let n,r;switch(e){case`view`:{let e=z.find(e=>e.id===parseInt(t.id));e&&It(e);return}case`create-account`:if(n=await fetch(`${R}/account/create`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({registration_id:parseInt(t.id)})}),r=await n.json(),n.ok){let e=r.password;alert(e?`✅ Akun dibuat!\n\nNIM: ${r.nim}\nPassword: ${e}\nEmail: ${r.email}`:`ℹ️ Akun sudah dibuat sebelumnya.\n\nNIM: ${r.nim}\nEmail: ${r.email}\n\nPassword hanya ditampilkan saat pertama kali dibuat.`)}else alert(`❌ `+(r.error||`Gagal membuat akun`));break;case`validate`:if(!(await fetch(`${R}/account/${t.id}`)).ok){alert(`❌ Akun belum dibuat. Buat akun terlebih dahulu.`);return}let e=await fetch(`${R}/account/${t.id}/validate`,{method:`PUT`});r=await e.json(),e.ok?(alert(`✅ `+r.message),B()):alert(`❌ `+(r.error||`Gagal validasi`));break;case`confirm-pay`:{let e=z.find(e=>e.id===parseInt(t.id)),n=e?e.nama:`Pendaftar`,r=prompt(`💰 Pembayaran untuk: ${n}\n\nPilih metode:\n1 = Cash (langsung konfirmasi)\n2 = Online (Midtrans)\n\nKetik 1 atau 2:`);if(!r||![`1`,`2`].includes(r.trim())){alert(`Dibatalkan`);return}let i=r.trim()===`1`?`cash`:`online`,a=await fetch(`${R}/payment`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({registration_id:parseInt(t.id),metode_bayar:i})}),o=await a.json();if(!a.ok){alert(`❌ `+(o.error||`Gagal membuat pembayaran`));return}if(i===`cash`){let e=await fetch(`${R}/payment/${o.id}/confirm`,{method:`PUT`});if(e.ok){let t=await e.json();alert(`✅ Pembayaran cash dikonfirmasi!
Rp `+Number(t.jumlah||0).toLocaleString(`id-ID`)),B()}else alert(`❌ Gagal konfirmasi pembayaran`)}else{let e=o.snap_token;if(!e){alert(`⚠️ Snap token gagal dibuat.

Detail: `+(o.error_detail||o.error||`Unknown`));break}if(window.snap&&typeof window.snap.pay==`function`)window.snap.pay(e,{onSuccess:function(e){alert(`✅ Pembayaran berhasil!

Metode: `+(e.payment_type||`-`)+`
Order ID: `+(e.order_id||`-`)),B()},onPending:function(e){alert(`⏳ Pembayaran pending.
Silakan selesaikan pembayaran.`),B()},onError:function(e){alert(`❌ Pembayaran gagal.`),B()},onClose:function(){B()}});else{let t=o.snap_url||`https://app.sandbox.midtrans.com/snap/v4/redirection/${e}`;window.open(t,`_blank`),alert(`💳 Halaman pembayaran dibuka di tab baru.
Setelah selesai bayar, refresh halaman ini.`)}}break}case`edit`:Bt(parseInt(t.id));return;case`delete`:let i=z.find(e=>e.id===parseInt(t.id));if(!i||!confirm(`⚠️ Hapus data pendaftaran?\n\n${i.nama} (${i.no_pendaftaran})\n\nSemua data terkait (akun, pembayaran) juga akan dihapus.`))return;n=await fetch(`${R}/registration/${t.id}`,{method:`DELETE`}),r=await n.json(),n.ok?(alert(`✅ `+r.message),B()):alert(`❌ `+(r.error||`Gagal menghapus`));break}}catch(e){alert(`❌ Error: `+e.message)}}function zt(){let e=document.getElementById(`pmbMgmtContent`);e&&(e.innerHTML=`
    <form id="offlineRegForm" style="max-width:640px;">
      <h4 style="font-family:var(--font-heading);margin:0 0 20px;display:flex;align-items:center;gap:8px;">
        ${F.userPlus} Input Data Mahasiswa Baru (Offline)
      </h4>
      <p style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:20px;">Lengkapi data berikut. Tanda <span style="color:hsl(0 70% 55%);">*</span> wajib diisi.</p>

      <!-- Program Studi -->
      <div class="off-section">
        <h5 class="off-section-title">🎓 Program Studi Pilihan</h5>
        <div class="off-row">
          <div class="form-group">
            <label class="form-label">Program Studi *</label>
            <select name="prodi_pilihan" required class="form-select">
              <option value="">Pilih Program Studi</option>
              ${[`Administrasi Negara`,`Administrasi Niaga`].map(e=>`<option value="${e}">${e}</option>`).join(``)}
            </select>
          </div>
        </div>
        <div class="off-row">
          <div class="form-group">
            <label class="form-label">Angkatan *</label>
            <select name="angkatan" required class="form-select">
              ${Array.from({length:10},(e,t)=>2026-t).map(e=>`<option value="${e}">${e}</option>`).join(``)}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Semester *</label>
            <select name="semester" required class="form-select">
              ${Array.from({length:14},(e,t)=>t+1).map(e=>`<option value="${e}">Semester ${e}</option>`).join(``)}
            </select>
          </div>
        </div>
      </div>

      <!-- Data Pribadi -->
      <div class="off-section">
        <h5 class="off-section-title">👤 Data Pribadi</h5>
        <div class="off-row">
          <div class="form-group"><label class="form-label">NISN</label><input type="text" name="nisn" placeholder="NISN" class="form-input"></div>
          <div class="form-group"><label class="form-label">KIP</label><input type="text" name="kip" placeholder="KIP" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">KKS</label><input type="text" name="kks" placeholder="KKS" class="form-input"></div>
          <div class="form-group"><label class="form-label">NIK *</label><input type="text" name="nik" required placeholder="16 digit NIK" class="form-input" pattern="[0-9]{16}" minlength="16" maxlength="16" inputmode="numeric" title="NIK harus 16 digit angka"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Nama Lengkap *</label><input type="text" name="nama" required placeholder="Nama Lengkap" class="form-input"></div>
          <div class="form-group"><label class="form-label">Tempat Lahir</label><input type="text" name="tempat_lahir" placeholder="Tempat Lahir" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group">
            <label class="form-label">Tanggal Lahir</label>
            <input type="date" name="tanggal_lahir" class="form-input">
          </div>
          <div class="form-group">
            <label class="form-label">Gender</label>
            <div style="display:flex;gap:16px;padding-top:8px;">
              <label style="display:flex;align-items:center;gap:6px;font-size:var(--text-sm);cursor:pointer;"><input type="radio" name="gender" value="Laki-laki"> Laki-laki</label>
              <label style="display:flex;align-items:center;gap:6px;font-size:var(--text-sm);cursor:pointer;"><input type="radio" name="gender" value="Perempuan"> Perempuan</label>
            </div>
          </div>
        </div>
        <div class="off-row">
          <div class="form-group">
            <label class="form-label">Agama</label>
            <select name="agama" class="form-select">
              <option value="">Agama</option>
              ${[`Islam`,`Kristen`,`Katolik`,`Hindu`,`Budha`,`Konghucu`].map(e=>`<option value="${e}">${e}</option>`).join(``)}
            </select>
          </div>
          <div class="form-group"><label class="form-label">Email *</label><input type="email" name="email" required placeholder="Email" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Telepon 1 *</label><input type="tel" name="telepon_1" required placeholder="08xxxxxxxxxx" class="form-input" maxlength="12" pattern="[0-9]{10,12}" title="Nomor telepon 10-12 digit"></div>
          <div class="form-group"><label class="form-label">Telepon 2</label><input type="tel" name="telepon_2" placeholder="Telepon 2 (Optional)" class="form-input" maxlength="12"></div>
        </div>
      </div>

      <!-- Alamat -->
      <div class="off-section">
        <h5 class="off-section-title">📍 Alamat</h5>
        <div class="form-group" style="margin-bottom:14px;">
          <label class="form-label">Alamat Lengkap</label>
          <textarea name="alamat" placeholder="Alamat Lengkap" rows="3" class="form-input" style="resize:vertical;"></textarea>
        </div>
        <div class="off-row">
          <div class="form-group">
            <label class="form-label">Provinsi</label>
            <select name="provinsi" class="form-select">
              <option value="">Provinsi</option>
              ${[`Jawa Timur`,`Jawa Tengah`,`Jawa Barat`,`DKI Jakarta`,`Bali`,`Sumatera Utara`,`Sumatera Barat`,`Kalimantan Timur`,`Sulawesi Selatan`,`Lainnya`].map(e=>`<option value="${e}">${e}</option>`).join(``)}
            </select>
          </div>
          <div class="form-group"><label class="form-label">Kota/Kabupaten</label><input type="text" name="kota" placeholder="Kota/Kabupaten" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Kecamatan</label><input type="text" name="kecamatan" placeholder="Kecamatan" class="form-input"></div>
          <div class="form-group"><label class="form-label">Desa/Kelurahan</label><input type="text" name="kelurahan" placeholder="Desa/Kelurahan" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Kode Pos</label><input type="text" name="kode_pos" placeholder="Kode Pos" class="form-input"></div>
          <div class="form-group"><label class="form-label">Anak Ke</label><input type="number" name="anak_ke" placeholder="Anak Ke" class="form-input"></div>
        </div>
      </div>

      <!-- Data Orang Tua / Wali -->
      <div class="off-section">
        <h5 class="off-section-title">👨‍👩‍👧 Data Orang Tua / Wali</h5>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Dari Jumlah Anak</label><input type="number" name="dari_jumlah" placeholder="Dari Jumlah Anak" class="form-input"></div>
          <div class="form-group"><label class="form-label">Nama Ayah</label><input type="text" name="nama_ayah" placeholder="Nama Ayah" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Nama Ibu</label><input type="text" name="nama_ibu" placeholder="Nama Ibu" class="form-input"></div>
          <div class="form-group"><label class="form-label">Pekerjaan Ayah</label><input type="text" name="pekerjaan_ayah" placeholder="Pekerjaan Ayah" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Pekerjaan Ibu</label><input type="text" name="pekerjaan_ibu" placeholder="Pekerjaan Ibu" class="form-input"></div>
          <div class="form-group"><label class="form-label">NIK Ayah</label><input type="text" name="nik_ayah" placeholder="NIK Ayah" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">NIK Ibu</label><input type="text" name="nik_ibu" placeholder="NIK Ibu" class="form-input"></div>
          <div class="form-group"><label class="form-label">No. KK</label><input type="text" name="no_kk" placeholder="No. KK" class="form-input"></div>
        </div>
      </div>

      <!-- Asal Sekolah -->
      <div class="off-section">
        <h5 class="off-section-title">🏫 Asal Sekolah</h5>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Asal Sekolah *</label><input type="text" name="asal_sekolah" required placeholder="Asal Sekolah" class="form-input"></div>
        </div>
      </div>

      <!-- Upload Berkas -->
      <div class="off-section">
        <h5 class="off-section-title">📎 Upload Berkas Persyaratan</h5>
        <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:12px;">Format: PDF, JPG, PNG (maks. 5MB per file)</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <label class="pmb-upload-label" style="border:2px dashed hsl(215 30% 82%);border-radius:10px;padding:14px 10px;cursor:pointer;text-align:center;transition:all .2s;">
            <span style="font-size:1.4rem;">📄</span>
            <span style="font-size:0.78rem;font-weight:600;">Ijazah SMA/SMK/MA *</span>
            <span class="pmb-upload-name" style="font-size:0.7rem;color:var(--primary-500);">Pilih file...</span>
            <input type="file" name="file_ijazah" accept=".pdf,.jpg,.jpeg,.png" required style="display:none;" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
          </label>
          <label class="pmb-upload-label" style="border:2px dashed hsl(215 30% 82%);border-radius:10px;padding:14px 10px;cursor:pointer;text-align:center;transition:all .2s;">
            <span style="font-size:1.4rem;">🪪</span>
            <span style="font-size:0.78rem;font-weight:600;">Fotokopi KTP / KK *</span>
            <span class="pmb-upload-name" style="font-size:0.7rem;color:var(--primary-500);">Pilih file...</span>
            <input type="file" name="file_ktp_kk" accept=".pdf,.jpg,.jpeg,.png" required style="display:none;" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
          </label>
          <label class="pmb-upload-label" style="border:2px dashed hsl(215 30% 82%);border-radius:10px;padding:14px 10px;cursor:pointer;text-align:center;transition:all .2s;">
            <span style="font-size:1.4rem;">📷</span>
            <span style="font-size:0.78rem;font-weight:600;">Pas Foto 3×4 *</span>
            <span class="pmb-upload-name" style="font-size:0.7rem;color:var(--primary-500);">Pilih file...</span>
            <input type="file" name="file_pas_foto" accept=".jpg,.jpeg,.png" required style="display:none;" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
          </label>
          <label class="pmb-upload-label" style="border:2px dashed hsl(215 30% 82%);border-radius:10px;padding:14px 10px;cursor:pointer;text-align:center;transition:all .2s;">
            <span style="font-size:1.4rem;">📊</span>
            <span style="font-size:0.78rem;font-weight:600;">Transkip Rapor</span>
            <span class="pmb-upload-name" style="font-size:0.7rem;color:var(--primary-500);">Pilih file...</span>
            <input type="file" name="file_rapor" accept=".pdf,.jpg,.jpeg,.png" style="display:none;" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
          </label>
          <label class="pmb-upload-label" style="border:2px dashed hsl(215 30% 82%);border-radius:10px;padding:14px 10px;cursor:pointer;text-align:center;transition:all .2s;grid-column:span 2;">
            <span style="font-size:1.4rem;">🏥</span>
            <span style="font-size:0.78rem;font-weight:600;">Surat Keterangan Sehat</span>
            <span class="pmb-upload-name" style="font-size:0.7rem;color:var(--primary-500);">Pilih file...</span>
            <input type="file" name="file_surat_sehat" accept=".pdf,.jpg,.jpeg,.png" style="display:none;" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
          </label>
        </div>
      </div>

      <button type="submit" class="btn btn-primary" id="offlineSubmitBtn" style="width:100%;padding:14px;">
        ✨ Daftarkan & Buat Akun
      </button>
    </form>`,document.getElementById(`offlineRegForm`)?.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`offlineSubmitBtn`);n.disabled=!0,n.textContent=`Memproses...`;let r=new FormData(t.target),i={},a=t.target.querySelectorAll(`input[type="file"]`),o=new Set([...a].map(e=>e.name)),s=new Set([`anak_ke`,`dari_jumlah`,`semester`,`angkatan`]);r.forEach((e,t)=>{o.has(t)||(i[t]=s.has(t)?parseInt(e)||0:e)});try{let t=await fetch(`${R}/register/offline`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(i)}),r=await t.json();if(t.ok){let t=new FormData,n=!1;if(a.forEach(e=>{e.files.length>0&&(t.append(e.name,e.files[0]),n=!0)}),n&&r.id)try{await fetch(`${R}/registration/${r.id}/upload`,{method:`POST`,body:t})}catch{}let i=r.account||{};e.innerHTML=`
          <div style="text-align:center;padding:24px;">
            <div style="font-size:2.5rem;margin-bottom:8px;">✅</div>
            <h3 style="color:hsl(150 60% 35%);margin:0 0 12px;">Pendaftaran Offline Berhasil!</h3>
            <div style="background:hsl(215 80% 96%);border:2px solid hsl(215 70% 55%);border-radius:10px;padding:12px;display:inline-block;font-size:1.1rem;font-weight:800;letter-spacing:2px;margin-bottom:12px;">${r.no_pendaftaran}</div>
            ${i.nim?`
              <div style="background:hsl(215 20% 97%);border:1px solid hsl(215 20% 88%);border-radius:10px;padding:16px;max-width:350px;margin:12px auto;text-align:left;">
                <h4 style="margin:0 0 10px;text-align:center;">🔐 Akun Login</h4>
                <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid hsl(215 20% 92%);"><span style="color:hsl(215 15% 55%);font-size:0.82rem;">NIM</span><strong style="font-family:monospace;">${i.nim}</strong></div>
                <div style="display:flex;justify-content:space-between;padding:8px 0;"><span style="color:hsl(215 15% 55%);font-size:0.82rem;">Password</span><strong style="font-family:monospace;">${i.password}</strong></div>
              </div>
            `:``}
            <button onclick="document.querySelector('.pmb-mgmt-btn').click()" style="background:hsl(215 70% 50%);color:#fff;border:none;padding:8px 20px;border-radius:8px;font-weight:600;cursor:pointer;margin-top:10px;">← Kembali ke Daftar</button>
          </div>`}else alert(`❌ `+(r.error||`Gagal`)),n.disabled=!1,n.textContent=`📝 Daftarkan & Buat Akun`}catch(e){alert(`❌ `+e.message),n.disabled=!1,n.textContent=`📝 Daftarkan & Buat Akun`}}))}function Bt(e){let t=z.find(t=>t.id===e);if(!t)return;let n=document.getElementById(`pmbDetailModal`),r=document.getElementById(`pmbDetailContent`);if(!n||!r)return;let i=[`Administrasi Negara`,`Administrasi Niaga`],a=e=>e||``;r.innerHTML=`
    <form id="editRegForm" style="max-height:65vh;overflow-y:auto;padding-right:8px;">
      <p style="font-size:0.75rem;color:var(--text-muted);margin:0 0 16px;">No. Daftar: <strong>${t.no_pendaftaran}</strong></p>

      <!-- Akademik -->
      <div class="off-section">
        <h5 class="off-section-title">🎓 Program Studi Pilihan</h5>
        <div class="off-row">
          <div class="form-group">
            <label class="form-label">Program Studi *</label>
            <select name="prodi_pilihan" required class="form-select">
              ${i.map(e=>`<option value="${e}" ${t.prodi_pilihan===e?`selected`:``}>${e}</option>`).join(``)}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Status</label>
            <select name="status" class="form-select">
              ${[`menunggu`,`proses`,`diterima`,`ditolak`].map(e=>`<option value="${e}" ${t.status===e?`selected`:``}>${e}</option>`).join(``)}
            </select>
          </div>
        </div>
      </div>

      <!-- Data Pribadi -->
      <div class="off-section">
        <h5 class="off-section-title">👤 Data Pribadi</h5>
        <div class="off-row">
          <div class="form-group"><label class="form-label">NISN</label><input type="text" name="nisn" value="${a(t.nisn)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">KIP</label><input type="text" name="kip" value="${a(t.kip)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">KKS</label><input type="text" name="kks" value="${a(t.kks)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">NIK *</label><input type="text" name="nik" value="${a(t.nik)}" required class="form-input" pattern="[0-9]{16}" maxlength="16" minlength="16"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Nama Lengkap *</label><input type="text" name="nama" value="${a(t.nama)}" required class="form-input"></div>
          <div class="form-group"><label class="form-label">Tempat Lahir</label><input type="text" name="tempat_lahir" value="${a(t.tempat_lahir)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Tanggal Lahir</label><input type="date" name="tanggal_lahir" value="${a(t.tanggal_lahir)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Gender</label>
            <div style="display:flex;gap:16px;padding-top:8px;">
              <label style="display:flex;align-items:center;gap:6px;font-size:var(--text-sm);cursor:pointer;"><input type="radio" name="gender" value="Laki-laki" ${t.gender===`Laki-laki`?`checked`:``}> Laki-laki</label>
              <label style="display:flex;align-items:center;gap:6px;font-size:var(--text-sm);cursor:pointer;"><input type="radio" name="gender" value="Perempuan" ${t.gender===`Perempuan`?`checked`:``}> Perempuan</label>
            </div>
          </div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Agama</label>
            <select name="agama" class="form-select">
              <option value="">-</option>
              ${[`Islam`,`Kristen`,`Katolik`,`Hindu`,`Budha`,`Konghucu`].map(e=>`<option value="${e}" ${t.agama===e?`selected`:``}>${e}</option>`).join(``)}
            </select>
          </div>
          <div class="form-group"><label class="form-label">Email *</label><input type="email" name="email" value="${a(t.email)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Telepon 1 *</label><input type="tel" name="telepon_1" value="${a(t.telepon_1)}" class="form-input" maxlength="12"></div>
          <div class="form-group"><label class="form-label">Telepon 2</label><input type="tel" name="telepon_2" value="${a(t.telepon_2)}" class="form-input" maxlength="12"></div>
        </div>
      </div>

      <!-- Alamat -->
      <div class="off-section">
        <h5 class="off-section-title">📍 Alamat</h5>
        <div class="form-group" style="margin-bottom:14px;">
          <label class="form-label">Alamat Lengkap</label>
          <textarea name="alamat" class="form-input" rows="2" style="resize:vertical;">${a(t.alamat)}</textarea>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Provinsi</label><input type="text" name="provinsi" value="${a(t.provinsi)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Kota/Kabupaten</label><input type="text" name="kota" value="${a(t.kota)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Kecamatan</label><input type="text" name="kecamatan" value="${a(t.kecamatan)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Desa/Kelurahan</label><input type="text" name="kelurahan" value="${a(t.kelurahan)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Kode Pos</label><input type="text" name="kode_pos" value="${a(t.kode_pos)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Anak Ke</label><input type="number" name="anak_ke" value="${t.anak_ke||``}" class="form-input"></div>
        </div>
      </div>

      <!-- Data Orang Tua -->
      <div class="off-section">
        <h5 class="off-section-title">👨‍👩‍👧 Data Orang Tua / Wali</h5>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Dari Jumlah Anak</label><input type="number" name="dari_jumlah" value="${t.dari_jumlah||``}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Nama Ayah</label><input type="text" name="nama_ayah" value="${a(t.nama_ayah)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Nama Ibu</label><input type="text" name="nama_ibu" value="${a(t.nama_ibu)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Pekerjaan Ayah</label><input type="text" name="pekerjaan_ayah" value="${a(t.pekerjaan_ayah)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Pekerjaan Ibu</label><input type="text" name="pekerjaan_ibu" value="${a(t.pekerjaan_ibu)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">NIK Ayah</label><input type="text" name="nik_ayah" value="${a(t.nik_ayah)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">NIK Ibu</label><input type="text" name="nik_ibu" value="${a(t.nik_ibu)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">No. KK</label><input type="text" name="no_kk" value="${a(t.no_kk)}" class="form-input"></div>
        </div>
      </div>

      <!-- Asal Sekolah -->
      <div class="off-section">
        <h5 class="off-section-title">🏫 Asal Sekolah</h5>
        <div class="form-group"><label class="form-label">Asal Sekolah *</label><input type="text" name="asal_sekolah" value="${a(t.asal_sekolah)}" class="form-input"></div>
      </div>

      <!-- Upload Berkas -->
      <div class="off-section">
        <h5 class="off-section-title">📎 Upload Berkas Persyaratan</h5>
        <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:12px;">Upload ulang untuk mengganti file. Format: PDF, JPG, PNG (maks. 5MB)</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <label style="border:2px dashed hsl(215 30% 82%);border-radius:10px;padding:12px 10px;cursor:pointer;text-align:center;display:flex;flex-direction:column;align-items:center;gap:4px;">
            <span style="font-size:1.2rem;">📄</span><span style="font-size:0.75rem;font-weight:600;">Ijazah</span>
            <span class="pmb-upload-name" style="font-size:0.68rem;color:var(--primary-500);">Pilih file...</span>
            <input type="file" name="file_ijazah" accept=".pdf,.jpg,.jpeg,.png" style="display:none;" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
          </label>
          <label style="border:2px dashed hsl(215 30% 82%);border-radius:10px;padding:12px 10px;cursor:pointer;text-align:center;display:flex;flex-direction:column;align-items:center;gap:4px;">
            <span style="font-size:1.2rem;">🪪</span><span style="font-size:0.75rem;font-weight:600;">KTP/KK</span>
            <span class="pmb-upload-name" style="font-size:0.68rem;color:var(--primary-500);">Pilih file...</span>
            <input type="file" name="file_ktp_kk" accept=".pdf,.jpg,.jpeg,.png" style="display:none;" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
          </label>
          <label style="border:2px dashed hsl(215 30% 82%);border-radius:10px;padding:12px 10px;cursor:pointer;text-align:center;display:flex;flex-direction:column;align-items:center;gap:4px;">
            <span style="font-size:1.2rem;">📷</span><span style="font-size:0.75rem;font-weight:600;">Pas Foto</span>
            <span class="pmb-upload-name" style="font-size:0.68rem;color:var(--primary-500);">Pilih file...</span>
            <input type="file" name="file_pas_foto" accept=".jpg,.jpeg,.png" style="display:none;" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
          </label>
          <label style="border:2px dashed hsl(215 30% 82%);border-radius:10px;padding:12px 10px;cursor:pointer;text-align:center;display:flex;flex-direction:column;align-items:center;gap:4px;">
            <span style="font-size:1.2rem;">📊</span><span style="font-size:0.75rem;font-weight:600;">Rapor</span>
            <span class="pmb-upload-name" style="font-size:0.68rem;color:var(--primary-500);">Pilih file...</span>
            <input type="file" name="file_rapor" accept=".pdf,.jpg,.jpeg,.png" style="display:none;" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
          </label>
          <label style="border:2px dashed hsl(215 30% 82%);border-radius:10px;padding:12px 10px;cursor:pointer;text-align:center;display:flex;flex-direction:column;align-items:center;gap:4px;grid-column:span 2;">
            <span style="font-size:1.2rem;">🏥</span><span style="font-size:0.75rem;font-weight:600;">Surat Sehat</span>
            <span class="pmb-upload-name" style="font-size:0.68rem;color:var(--primary-500);">Pilih file...</span>
            <input type="file" name="file_surat_sehat" accept=".pdf,.jpg,.jpeg,.png" style="display:none;" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
          </label>
        </div>
      </div>

      <div style="display:flex;gap:8px;margin-top:16px;">
        <button type="submit" class="btn btn-primary" style="flex:1;" id="editSaveBtn">💾 Simpan Perubahan</button>
        <button type="button" class="btn btn-secondary" style="flex:0;" onclick="document.getElementById('pmbDetailModal').style.display='none'">Batal</button>
      </div>
    </form>`,n.style.display=`flex`,document.getElementById(`editRegForm`)?.addEventListener(`submit`,async t=>{t.preventDefault();let r=document.getElementById(`editSaveBtn`);r.disabled=!0,r.textContent=`Menyimpan...`;let i=new FormData(t.target),a={},o=t.target.querySelectorAll(`input[type="file"]`),s=new Set([...o].map(e=>e.name));i.forEach((e,t)=>{e&&!s.has(t)&&(a[t]=e)});try{let t=await fetch(`${R}/registration/${e}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify(a)}),i=await t.json();if(t.ok){let t=new FormData,r=!1;if(o.forEach(e=>{e.files.length>0&&(t.append(e.name,e.files[0]),r=!0)}),r)try{await fetch(`${R}/registration/${e}/upload`,{method:`POST`,body:t})}catch{}alert(`✅ `+i.message),n.classList.remove(`active`),B()}else alert(`❌ `+(i.error||`Gagal menyimpan`)),r.disabled=!1,r.textContent=`💾 Simpan Perubahan`}catch(e){alert(`❌ `+e.message),r.disabled=!1,r.textContent=`💾 Simpan Perubahan`}})}var Vt=`/api/pmb`,W=[];function Ht(){return`
    <div class="dash-card">
      <div class="dash-card-header">
        <h2 class="dash-card-title">${F.graduationCap} Data Mahasiswa</h2>
      </div>
      <div class="dash-card-body">
        <!-- Stat Cards -->
        <div class="stat-grid" id="mhsStatCards">
          <div class="stat-card">
            <div class="stat-icon blue">${F.users}</div>
            <div class="stat-num" id="mhsTotal">-</div>
            <div class="stat-label">Total Mahasiswa</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon green">${F.checkCircle}</div>
            <div class="stat-num" id="mhsAktif">-</div>
            <div class="stat-label">Aktif</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon gold">${F.clock}</div>
            <div class="stat-num" id="mhsCuti">-</div>
            <div class="stat-label">Cuti</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon purple">${F.award}</div>
            <div class="stat-num" id="mhsLulus">-</div>
            <div class="stat-label">Lulus</div>
          </div>
        </div>

        <!-- Search & Filters -->
        <div style="display:flex;gap:10px;margin:20px 0 16px;flex-wrap:wrap;align-items:center;">
          <div style="flex:1;min-width:220px;position:relative;">
            <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--text-muted);pointer-events:none;">${F.search}</span>
            <input type="text" id="mhsSearch" placeholder="Cari NIM atau Nama..." class="form-input" style="padding-left:38px;">
          </div>
          <select id="mhsFilterProdi" class="form-select" style="min-width:160px;">
            <option value="">Semua Prodi</option>
            <option value="Administrasi Negara">Adm. Negara</option>
            <option value="Administrasi Niaga">Adm. Niaga</option>
          </select>
          <select id="mhsFilterStatus" class="form-select" style="min-width:130px;">
            <option value="">Semua Status</option>
            <option value="aktif">Aktif</option>
            <option value="cuti">Cuti</option>
            <option value="lulus">Lulus</option>
            <option value="do">DO</option>
          </select>
        </div>

        <!-- Student Table -->
        <div id="mhsTableContainer" style="margin-top:8px;">
          <div style="text-align:center;padding:32px;color:var(--text-muted);">Memuat data mahasiswa...</div>
        </div>
        <div id="mhsCount" style="margin-top:10px;font-size:0.78rem;color:var(--text-muted);"></div>
      </div>
    </div>

    <!-- Modal for Mahasiswa Profile/Edit -->
    <div id="mhsModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;align-items:center;justify-content:center;animation:fadeIn .2s ease;">
      <div style="background:white;border-radius:16px;width:580px;max-width:92vw;max-height:85vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,0.2);margin:auto;">
        <div style="padding:18px 24px 14px;border-bottom:1px solid hsl(215 15% 93%);display:flex;justify-content:space-between;align-items:center;">
          <h3 id="mhsModalTitle" style="margin:0;font-size:1rem;font-weight:700;color:hsl(215 40% 18%);">Detail</h3>
          <button onclick="document.getElementById('mhsModal').style.display='none'" style="width:32px;height:32px;border:none;border-radius:8px;background:hsl(215 15% 95%);color:hsl(215 15% 50%);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.2rem;">&times;</button>
        </div>
        <div id="mhsModalBody" style="padding:20px 24px;"></div>
      </div>
    </div>`}function Ut(){Wt(),document.getElementById(`mhsSearch`)?.addEventListener(`input`,Kt),document.getElementById(`mhsFilterProdi`)?.addEventListener(`change`,Kt),document.getElementById(`mhsFilterStatus`)?.addEventListener(`change`,Kt)}async function Wt(){try{let e=await fetch(`${Vt}/registrations`);if(!e.ok)throw Error(`Gagal memuat data`);let t=await e.json();W=(Array.isArray(t)?t:t.data||[]).filter(e=>e.status===`diterima`).map((e,t)=>({...e,nim:e.nim||`20260${String(t+1).padStart(4,`0`)}`,angkatan:e.angkatan||(e.created_at?new Date(e.created_at).getFullYear():2026),semester:e.semester||1,status_mhs:e.status_mhs||`aktif`})),W.length===0&&(W=te.map(e=>({...e}))),Gt(),qt(W)}catch{W=te.map(e=>({...e})),Gt(),qt(W)}}function Gt(){let e=W.length,t=W.filter(e=>e.status_mhs===`aktif`).length,n=W.filter(e=>e.status_mhs===`cuti`).length,r=W.filter(e=>e.status_mhs===`lulus`).length,i=e=>document.getElementById(e);i(`mhsTotal`)&&(i(`mhsTotal`).textContent=e),i(`mhsAktif`)&&(i(`mhsAktif`).textContent=t),i(`mhsCuti`)&&(i(`mhsCuti`).textContent=n),i(`mhsLulus`)&&(i(`mhsLulus`).textContent=r)}function Kt(){let e=(document.getElementById(`mhsSearch`)?.value||``).toLowerCase(),t=document.getElementById(`mhsFilterProdi`)?.value||``,n=document.getElementById(`mhsFilterStatus`)?.value||``;qt(W.filter(r=>{let i=!e||(r.nama||``).toLowerCase().includes(e)||(r.nim||``).toLowerCase().includes(e)||(r.nik||``).includes(e),a=!t||r.prodi_pilihan===t,o=!n||r.status_mhs===n;return i&&a&&o}))}function qt(e){let t=document.getElementById(`mhsTableContainer`),n=document.getElementById(`mhsCount`);if(t){if(e.length===0){t.innerHTML=`<div style="text-align:center;padding:32px;">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gray-300)" stroke-width="1.5" style="margin:0 auto 12px;display:block;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
      <p style="color:var(--text-muted);font-size:var(--text-sm);">Tidak ada mahasiswa ditemukan</p>
    </div>`,n&&(n.textContent=``);return}t.innerHTML=`
    <table class="sch-table" style="font-size:0.82rem;">
      <thead><tr>
        <th>NIM</th><th>Nama</th><th>Prodi</th><th>Angkatan</th><th>Semester</th><th>Status</th><th>Aksi</th>
      </tr></thead>
      <tbody>
        ${e.map(e=>`<tr class="mhs-tr" data-id="${e.id}" style="cursor:pointer;">
          <td style="font-family:var(--font-mono);font-weight:600;white-space:nowrap;">${e.nim}</td>
          <td>
            <strong>${e.nama}</strong><br>
            <span style="font-size:0.7rem;color:var(--text-muted);">${e.email||`-`}</span>
          </td>
          <td style="font-size:0.8rem;">${e.prodi_pilihan||`-`}</td>
          <td style="text-align:center;">${e.angkatan}</td>
          <td style="text-align:center;">${e.semester}</td>
          <td><span class="badge-sm ${e.status_mhs===`aktif`?`success`:e.status_mhs===`cuti`?`warning`:e.status_mhs===`lulus`?`blue`:`danger`}">${e.status_mhs}</span></td>
          <td onclick="event.stopPropagation();">
            <div style="display:flex;gap:4px;">
              <button class="mgmt-action-btn mhs-view-btn" data-id="${e.id}" title="Lihat Detail" style="color:hsl(210 60% 50%);">👁️</button>
              <button class="mgmt-action-btn mhs-edit-btn" data-id="${e.id}" title="Edit">✏️</button>
              <button class="mgmt-action-btn mhs-del-btn" data-id="${e.id}" title="Hapus" style="color:hsl(0 65% 50%);">🗑️</button>
            </div>
          </td>
        </tr>`).join(``)}
      </tbody>
    </table>`,n&&(n.textContent=`Menampilkan ${e.length} mahasiswa`),t.querySelectorAll(`.mhs-tr`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.id,n=W.find(e=>e.id==t||e.id===t);n&&Jt(n)})}),t.querySelectorAll(`.mhs-view-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.id,n=W.find(e=>e.id==t||e.id===t);n&&Jt(n)})}),t.querySelectorAll(`.mhs-edit-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.id,n=W.find(e=>e.id==t||e.id===t);n&&Yt(n)})}),t.querySelectorAll(`.mhs-del-btn`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.dataset.id,n=W.find(e=>e.id==t||e.id===t);if(n&&confirm(`⚠️ Hapus data mahasiswa ${n.nama}?\n\nAkun dan data terkait akan dihapus.`))try{let e=await fetch(`${R}/registration/${t}`,{method:`DELETE`});if(e.ok)alert(`✅ Data mahasiswa berhasil dihapus`),Wt();else{let t=await e.json();alert(`❌ `+(t.error||`Gagal menghapus`))}}catch(e){alert(`❌ `+e.message)}})})}}function Jt(e){let t=document.getElementById(`mhsModal`),n=document.getElementById(`mhsModalBody`),r=document.getElementById(`mhsModalTitle`);if(!t||!n)return;r&&(r.textContent=`Profil Mahasiswa`);let i=(e,t)=>`
    <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--gray-50);">
      <span style="font-size:0.78rem;color:var(--text-muted);">${e}</span>
      <span style="font-size:0.85rem;font-weight:600;text-align:right;">${t||`-`}</span>
    </div>`;n.innerHTML=`
    <!-- Header -->
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;">
      <div style="width:56px;height:56px;border-radius:50%;background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:1.2rem;">${(e.nama||`?`)[0]}</div>
      <div>
        <h3 style="margin:0;font-size:1.1rem;">${e.nama}</h3>
        <div style="font-family:var(--font-mono);font-size:0.85rem;color:var(--text-muted);">NIM: ${e.nim}</div>
        <span class="badge-sm ${e.status_mhs===`aktif`?`success`:e.status_mhs===`cuti`?`warning`:`blue`}" style="margin-top:4px;">${e.status_mhs}</span>
      </div>
    </div>

    <!-- Akun Login -->
    <h4 style="font-size:0.82rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;margin:0 0 8px;">🔐 Akun Login</h4>
    <div style="background:hsl(215 25% 96%);border-radius:8px;padding:12px 14px;margin-bottom:16px;">
      ${i(`Username / NIM`,e.nim)}
      ${i(`Email`,e.email||`-`)}
      ${i(`Password`,`<code style="background:hsl(215 20% 90%);padding:2px 8px;border-radius:4px;font-size:0.8rem;">mahasiswa123</code>`)}
      ${i(`Role`,`<span class="badge-sm blue">Mahasiswa</span>`)}
    </div>

    <!-- Akademik -->
    <h4 style="font-size:0.82rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;margin:0 0 8px;">🎓 Akademik</h4>
    ${i(`Program Studi`,e.prodi_pilihan)}
    ${i(`Angkatan`,e.angkatan)}
    ${i(`Semester`,e.semester)}
    ${i(`IPK`,e.ipk?e.ipk.toFixed(2):`Belum ada`)}

    <!-- Data Pribadi -->
    <h4 style="font-size:0.82rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;margin:20px 0 8px;">👤 Data Pribadi</h4>
    ${i(`NIK`,e.nik)}
    ${i(`Email`,e.email)}
    ${i(`Telepon`,e.telepon||e.telepon_1||`-`)}
    ${i(`Jenis Kelamin`,e.jenis_kelamin===`L`?`Laki-laki`:e.jenis_kelamin===`P`?`Perempuan`:e.gender||`-`)}
    ${i(`Tempat Lahir`,e.tempat_lahir)}
    ${i(`Tanggal Lahir`,e.tanggal_lahir)}
    ${i(`Agama`,e.agama)}

    <!-- Alamat -->
    <h4 style="font-size:0.82rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;margin:20px 0 8px;">📍 Alamat</h4>
    ${i(`Alamat`,e.alamat)}
    ${i(`Kota`,[e.kecamatan,e.kota,e.provinsi].filter(Boolean).join(`, `)||`-`)}

    <!-- Orang Tua -->
    <h4 style="font-size:0.82rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;margin:20px 0 8px;">👨‍👩‍👧 Orang Tua / Wali</h4>
    ${i(`Nama Ayah`,e.nama_ayah)}
    ${i(`Nama Ibu`,e.nama_ibu)}
    ${i(`Pekerjaan Ayah`,e.pekerjaan_ayah||`-`)}
    ${i(`Asal Sekolah`,e.asal_sekolah||`-`)}
  `,t.style.display=`flex`}function Yt(e){let t=document.getElementById(`mhsModal`),n=document.getElementById(`mhsModalBody`),r=document.getElementById(`mhsModalTitle`);if(!t||!n)return;r&&(r.textContent=`Edit Data Mahasiswa`);let i=[`Administrasi Negara`,`Administrasi Niaga`],a=e=>e||``;n.innerHTML=`
    <form id="mhsEditForm" style="max-height:55vh;overflow-y:auto;padding-right:6px;">
      <div class="off-section">
        <h5 class="off-section-title">🎓 Akademik</h5>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Program Studi</label>
            <select name="prodi_pilihan" class="form-select">
              ${i.map(t=>`<option value="${t}" ${e.prodi_pilihan===t?`selected`:``}>${t}</option>`).join(``)}
            </select>
          </div>
          <div class="form-group"><label class="form-label">Status Mahasiswa</label>
            <select name="status_mhs" class="form-select">
              ${[`aktif`,`cuti`,`lulus`,`do`].map(t=>`<option value="${t}" ${e.status_mhs===t?`selected`:``}>${t}</option>`).join(``)}
            </select>
          </div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Semester</label><input type="number" name="semester" value="${e.semester||1}" min="1" max="14" class="form-input"></div>
          <div class="form-group"><label class="form-label">NIM</label><input type="text" name="nim" value="${a(e.nim)}" class="form-input" readonly style="opacity:.6;"></div>
        </div>
      </div>

      <div class="off-section">
        <h5 class="off-section-title">👤 Data Pribadi</h5>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Nama *</label><input type="text" name="nama" value="${a(e.nama)}" required class="form-input"></div>
          <div class="form-group"><label class="form-label">NIK</label><input type="text" name="nik" value="${a(e.nik)}" class="form-input" maxlength="16"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Email</label><input type="email" name="email" value="${a(e.email)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Telepon</label><input type="tel" name="telepon_1" value="${a(e.telepon_1)}" class="form-input" maxlength="12"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Tempat Lahir</label><input type="text" name="tempat_lahir" value="${a(e.tempat_lahir)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Tanggal Lahir</label><input type="date" name="tanggal_lahir" value="${a(e.tanggal_lahir)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Gender</label>
            <select name="gender" class="form-select">
              <option value="">-</option>
              <option value="Laki-laki" ${e.gender===`Laki-laki`?`selected`:``}>Laki-laki</option>
              <option value="Perempuan" ${e.gender===`Perempuan`?`selected`:``}>Perempuan</option>
            </select>
          </div>
          <div class="form-group"><label class="form-label">Agama</label>
            <select name="agama" class="form-select">
              <option value="">-</option>
              ${[`Islam`,`Kristen`,`Katolik`,`Hindu`,`Budha`,`Konghucu`].map(t=>`<option value="${t}" ${e.agama===t?`selected`:``}>${t}</option>`).join(``)}
            </select>
          </div>
        </div>
      </div>

      <div class="off-section">
        <h5 class="off-section-title">📍 Alamat</h5>
        <div class="form-group" style="margin-bottom:12px;"><label class="form-label">Alamat</label><textarea name="alamat" class="form-input" rows="2">${a(e.alamat)}</textarea></div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Kota</label><input type="text" name="kota" value="${a(e.kota)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Provinsi</label><input type="text" name="provinsi" value="${a(e.provinsi)}" class="form-input"></div>
        </div>
      </div>

      <div class="off-section">
        <h5 class="off-section-title">🏫 Pendidikan</h5>
        <div class="form-group"><label class="form-label">Asal Sekolah</label><input type="text" name="asal_sekolah" value="${a(e.asal_sekolah)}" class="form-input"></div>
      </div>

      <div style="display:flex;gap:8px;margin-top:16px;">
        <button type="submit" class="btn btn-primary" style="flex:1;" id="mhsEditSaveBtn">💾 Simpan</button>
        <button type="button" class="btn btn-secondary" onclick="document.getElementById('mhsModal').style.display='none'">Batal</button>
      </div>
    </form>`,t.style.display=`flex`,document.getElementById(`mhsEditForm`)?.addEventListener(`submit`,async n=>{n.preventDefault();let r=document.getElementById(`mhsEditSaveBtn`);r.disabled=!0,r.textContent=`Menyimpan...`;let i=new FormData(n.target),a={};i.forEach((e,t)=>{e&&(a[t]=e)});try{let n=await fetch(`${R}/registration/${e.id}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify(a)}),i=await n.json();n.ok?(alert(`✅ Data berhasil diperbarui`),t.classList.remove(`active`),Wt()):(alert(`❌ `+(i.error||`Gagal`)),r.disabled=!1,r.textContent=`💾 Simpan`)}catch(e){alert(`❌ `+e.message),r.disabled=!1,r.textContent=`💾 Simpan`}})}function Xt(e){let t=(e.nama||`?`).split(` `).map(e=>e[0]).join(``).substring(0,2).toUpperCase(),n=e=>e?`<span class="profil-row-value">`+e+`</span>`:`<span class="profil-row-value muted">Belum diisi</span>`,r=e=>e?`<span class="profil-row-value mono">`+e+`</span>`:`<span class="profil-row-value muted">Belum diisi</span>`,i=(e,t,n)=>`<div class="profil-row`+(n?` `+n:``)+`"><div class="profil-row-label">`+e+`</div>`+t+`</div>`,a=(e,t)=>t?i(e,`<span class="profil-row-value"><a href="`+(`/api/`+t)+`" target="_blank" style="color:hsl(215 70% 50%);text-decoration:none;font-weight:600;display:inline-flex;align-items:center;gap:4px;">📄 Lihat Dokumen</a></span>`):i(e,`<span class="profil-row-value muted" style="display:inline-flex;align-items:center;gap:4px;">⚠️ Belum diupload</span>`),o=[`Islam`,`Kristen`,`Katolik`,`Hindu`,`Budha`,`Konghucu`].map(t=>`<option value="`+t+`" `+(e.agama===t?`selected`:``)+`>`+t+`</option>`).join(``);return`<div style="background:var(--gradient-primary);border-radius:16px;padding:28px 24px;display:flex;align-items:center;gap:20px;flex-wrap:wrap;margin-bottom:20px;position:relative;overflow:hidden;" role="banner" aria-label="Profil mahasiswa"><div style="position:absolute;top:-40px;right:-40px;width:140px;height:140px;background:rgba(255,255,255,.05);border-radius:50%;"></div><div style="position:absolute;bottom:-30px;left:30%;width:100px;height:100px;background:rgba(255,255,255,.03);border-radius:50%;"></div><div id="avatarWrap" style="position:relative;width:72px;height:72px;flex-shrink:0;cursor:pointer;" title="Klik untuk ganti foto" aria-label="Ganti foto profil"><div id="avatarCircle" style="width:72px;height:72px;border-radius:50%;background:`+(e.avatar?`url(`+e.avatar+`) center/cover`:`rgba(255,255,255,.15)`)+`;backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:1.5rem;border:2px solid rgba(255,255,255,.3);overflow:hidden;">`+(e.avatar?``:t)+`</div><div style="position:absolute;bottom:0;right:0;width:24px;height:24px;background:var(--primary-500);border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid white;font-size:0.65rem;">📷</div><input type="file" id="avatarInput" accept="image/*" style="display:none;" aria-label="Upload foto profil"></div><div style="flex:1;color:white;min-width:180px;"><h2 style="font-family:var(--font-heading);margin:0 0 4px;font-size:1.25rem;font-weight:800;">`+e.nama+`</h2><p style="margin:0 0 8px;opacity:.8;font-size:0.82rem;">`+e.prodi+`</p><div style="display:flex;gap:6px;flex-wrap:wrap;"><span style="background:rgba(255,255,255,.15);padding:3px 10px;border-radius:16px;font-size:0.7rem;font-family:var(--font-mono);border:1px solid rgba(255,255,255,.15);">NIM `+e.nim+`</span><span style="background:rgba(255,255,255,.15);padding:3px 10px;border-radius:16px;font-size:0.7rem;border:1px solid rgba(255,255,255,.15);">Semester `+e.semester+`</span><span style="background:hsl(145 65% 38%);padding:3px 10px;border-radius:16px;font-size:0.7rem;font-weight:700;" role="status">✓ Aktif</span></div></div><button class="profil-edit-btn" id="editProfilToggle" aria-label="Edit profil" style="background:linear-gradient(135deg,rgba(255,255,255,.22),rgba(255,255,255,.08));color:white;border:1.5px solid rgba(255,255,255,.3);padding:10px 22px;border-radius:12px;font-size:0.82rem;font-weight:700;cursor:pointer;backdrop-filter:blur(8px);display:inline-flex;align-items:center;gap:8px;transition:all .3s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 15px rgba(0,0,0,.15);letter-spacing:0.3px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Edit Profil</button></div><div id="editProfilSection" style="display:none;margin-bottom:16px;" role="form" aria-label="Form edit profil"><div class="profil-section" style="border:2px solid var(--primary-100);"><div class="profil-section-header"><h3 class="profil-section-title"><span class="pst-icon" style="background:var(--primary-100);color:var(--primary-600);">📝</span> Edit Data Profil</h3></div><div style="padding:20px;"><form id="editProfilForm"><div class="off-section"><h5 class="off-section-title">👤 Data Pribadi</h5><div class="off-row"><div class="form-group"><label class="form-label" for="ep_nama">Nama Lengkap</label><input type="text" id="ep_nama" name="nama" value="`+e.nama+`" class="form-input" required></div><div class="form-group"><label class="form-label" for="ep_nik">NIK</label><input type="text" id="ep_nik" name="nik" value="`+(e.nik||``)+`" class="form-input" maxlength="16"></div></div><div class="off-row"><div class="form-group"><label class="form-label" for="ep_email">Email</label><input type="email" id="ep_email" name="email" value="`+e.email+`" class="form-input"></div><div class="form-group"><label class="form-label" for="ep_telepon">Telepon</label><input type="tel" id="ep_telepon" name="telepon_1" value="`+(e.telepon_1||``)+`" class="form-input" maxlength="13"></div></div><div class="off-row"><div class="form-group"><label class="form-label" for="ep_tempat">Tempat Lahir</label><input type="text" id="ep_tempat" name="tempat_lahir" value="`+(e.tempat_lahir||``)+`" class="form-input"></div><div class="form-group"><label class="form-label" for="ep_tgl">Tanggal Lahir</label><input type="date" id="ep_tgl" name="tanggal_lahir" value="`+(e.tanggal_lahir||``)+`" class="form-input"></div></div><div class="off-row"><div class="form-group"><label class="form-label" for="ep_gender">Gender</label><select id="ep_gender" name="gender" class="form-select"><option value="">—</option><option value="Laki-laki" `+(e.gender===`Laki-laki`?`selected`:``)+`>Laki-laki</option><option value="Perempuan" `+(e.gender===`Perempuan`?`selected`:``)+`>Perempuan</option></select></div><div class="form-group"><label class="form-label" for="ep_agama">Agama</label><select id="ep_agama" name="agama" class="form-select"><option value="">—</option>`+o+`</select></div></div></div><div class="off-section"><h5 class="off-section-title">📍 Alamat</h5><div class="form-group" style="margin-bottom:12px;"><label class="form-label" for="ep_alamat">Alamat</label><textarea id="ep_alamat" name="alamat" class="form-input" rows="2">`+(e.alamat||``)+`</textarea></div><div class="off-row"><div class="form-group"><label class="form-label" for="ep_prov">Provinsi</label><input type="text" id="ep_prov" name="provinsi" value="`+(e.provinsi||``)+`" class="form-input"></div><div class="form-group"><label class="form-label" for="ep_kota">Kota</label><input type="text" id="ep_kota" name="kota" value="`+(e.kota||``)+`" class="form-input"></div></div><div class="off-row"><div class="form-group"><label class="form-label" for="ep_kec">Kecamatan</label><input type="text" id="ep_kec" name="kecamatan" value="`+(e.kecamatan||``)+`" class="form-input"></div><div class="form-group"><label class="form-label" for="ep_kel">Kelurahan</label><input type="text" id="ep_kel" name="kelurahan" value="`+(e.kelurahan||``)+`" class="form-input"></div></div></div><div class="off-section"><h5 class="off-section-title">👨‍👩‍👧 Data Keluarga</h5><div class="off-row"><div class="form-group"><label class="form-label" for="ep_ayah">Nama Ayah</label><input type="text" id="ep_ayah" name="nama_ayah" value="`+(e.nama_ayah||``)+`" class="form-input"></div><div class="form-group"><label class="form-label" for="ep_pkayah">Pekerjaan Ayah</label><input type="text" id="ep_pkayah" name="pekerjaan_ayah" value="`+(e.pekerjaan_ayah||``)+`" class="form-input"></div></div><div class="off-row"><div class="form-group"><label class="form-label" for="ep_ibu">Nama Ibu</label><input type="text" id="ep_ibu" name="nama_ibu" value="`+(e.nama_ibu||``)+`" class="form-input"></div><div class="form-group"><label class="form-label" for="ep_pkibu">Pekerjaan Ibu</label><input type="text" id="ep_pkibu" name="pekerjaan_ibu" value="`+(e.pekerjaan_ibu||``)+`" class="form-input"></div></div></div><div class="off-section"><h5 class="off-section-title">📂 Upload Dokumen Persyaratan</h5><p style="font-size:0.78rem;color:var(--text-muted);margin:0 0 12px;">Format: JPG, PNG, PDF — Maks. 5MB per file</p><div class="off-row"><div class="form-group"><label class="form-label" for="ep_ijazah">Ijazah SMA/SMK/MA `+(e.file_ijazah?`<span style="color:hsl(150 55% 42%);font-size:0.7rem;">✅ Sudah ada</span>`:`<span style="color:hsl(40 70% 45%);font-size:0.7rem;">⚠️ Belum</span>`)+`</label><input type="file" id="ep_ijazah" name="file_ijazah" accept=".jpg,.jpeg,.png,.pdf" class="form-input" style="padding:8px;"></div><div class="form-group"><label class="form-label" for="ep_ktp">Fotokopi KTP / KK `+(e.file_ktp?`<span style="color:hsl(150 55% 42%);font-size:0.7rem;">✅ Sudah ada</span>`:`<span style="color:hsl(40 70% 45%);font-size:0.7rem;">⚠️ Belum</span>`)+`</label><input type="file" id="ep_ktp" name="file_ktp" accept=".jpg,.jpeg,.png,.pdf" class="form-input" style="padding:8px;"></div></div><div class="off-row"><div class="form-group"><label class="form-label" for="ep_pasfoto">Pas Foto 3×4 `+(e.file_pasfoto?`<span style="color:hsl(150 55% 42%);font-size:0.7rem;">✅ Sudah ada</span>`:`<span style="color:hsl(40 70% 45%);font-size:0.7rem;">⚠️ Belum</span>`)+`</label><input type="file" id="ep_pasfoto" name="file_pasfoto" accept=".jpg,.jpeg,.png,.pdf" class="form-input" style="padding:8px;"></div><div class="form-group"><label class="form-label" for="ep_rapor">Transkip Nilai Rapor `+(e.file_rapor?`<span style="color:hsl(150 55% 42%);font-size:0.7rem;">✅ Sudah ada</span>`:``)+`</label><input type="file" id="ep_rapor" name="file_rapor" accept=".jpg,.jpeg,.png,.pdf" class="form-input" style="padding:8px;"></div></div><div class="off-row"><div class="form-group"><label class="form-label" for="ep_sehat">Surat Keterangan Sehat `+(e.file_surat_sehat?`<span style="color:hsl(150 55% 42%);font-size:0.7rem;">✅ Sudah ada</span>`:``)+`</label><input type="file" id="ep_sehat" name="file_surat_sehat" accept=".jpg,.jpeg,.png,.pdf" class="form-input" style="padding:8px;"></div><div class="form-group"></div></div></div><div style="display:flex;gap:10px;margin-top:16px;"><button type="submit" class="btn btn-primary" style="flex:1;border-radius:10px;padding:10px;">💾 Simpan Perubahan</button><button type="button" class="btn btn-secondary" id="cancelEditProfil" style="border-radius:10px;padding:10px 20px;">Batal</button></div></form></div></div></div><div class="profil-tabs" role="tablist" aria-label="Profil sections"><button class="profil-tab active" data-tab="pribadi" role="tab" aria-selected="true">👤 Pribadi</button><button class="profil-tab" data-tab="alamat" role="tab">📍 Alamat</button><button class="profil-tab" data-tab="keluarga" role="tab">👨‍👩‍👧 Keluarga</button><button class="profil-tab" data-tab="sekolah" role="tab">🏫 Akademik</button><button class="profil-tab" data-tab="dokumen" role="tab">📂 Dokumen</button><button class="profil-tab" data-tab="keuangan" role="tab">💰 Keuangan</button><button class="profil-tab" data-tab="akun" role="tab">⚙️ Akun</button></div><div class="profil-tab-panel active" data-panel="pribadi" role="tabpanel"><div class="profil-section" role="region" aria-labelledby="secPribadi"><div class="profil-section-header"><h3 class="profil-section-title" id="secPribadi"><span class="pst-icon" style="background:hsl(215 50% 94%);color:var(--primary-600);">👤</span> Data Pribadi</h3></div><div class="profil-2col">`+i(`Nama Lengkap`,n(e.nama))+i(`NIM`,r(e.nim))+i(`NIK`,r(e.nik))+i(`NISN`,r(e.nisn))+i(`Email`,n(e.email))+i(`Telepon`,n(e.telepon_1))+i(`Tempat Lahir`,n(e.tempat_lahir))+i(`Tanggal Lahir`,n(e.tanggal_lahir))+i(`Jenis Kelamin`,n(e.gender))+i(`Agama`,n(e.agama))+i(`No. KIP`,n(e.kip))+i(`No. KKS`,n(e.kks))+`</div></div></div><div class="profil-tab-panel" data-panel="alamat" role="tabpanel"><div class="profil-section" role="region" aria-labelledby="secAlamat"><div class="profil-section-header"><h3 class="profil-section-title" id="secAlamat"><span class="pst-icon" style="background:hsl(145 40% 93%);color:hsl(145 55% 35%);">📍</span> Alamat</h3></div><div>`+i(`Alamat Lengkap`,n(e.alamat))+`<div class="profil-2col">`+i(`Provinsi`,n(e.provinsi))+i(`Kota / Kabupaten`,n(e.kota))+i(`Kecamatan`,n(e.kecamatan))+i(`Kelurahan`,n(e.kelurahan))+`</div>`+i(`Kode Pos`,r(e.kode_pos))+`</div></div></div><div class="profil-tab-panel" data-panel="keluarga" role="tabpanel"><div class="profil-section" role="region" aria-labelledby="secKeluarga"><div class="profil-section-header"><h3 class="profil-section-title" id="secKeluarga"><span class="pst-icon" style="background:hsl(38 50% 93%);color:hsl(38 70% 40%);">👨‍👩‍👧</span> Data Orang Tua / Wali</h3></div><div class="profil-2col">`+i(`Anak Ke`,`<span class="profil-row-value">`+(e.anak_ke||`—`)+` dari `+(e.dari_jumlah||`—`)+` bersaudara</span>`)+i(`No. KK`,r(e.no_kk))+i(`Nama Ayah`,n(e.nama_ayah))+i(`Pekerjaan Ayah`,n(e.pekerjaan_ayah))+i(`NIK Ayah`,r(e.nik_ayah))+i(`Nama Ibu`,n(e.nama_ibu))+i(`Pekerjaan Ibu`,n(e.pekerjaan_ibu))+i(`NIK Ibu`,r(e.nik_ibu))+`</div></div></div><div class="profil-tab-panel" data-panel="sekolah" role="tabpanel"><div class="profil-section" role="region" aria-labelledby="secSekolah"><div class="profil-section-header"><h3 class="profil-section-title" id="secSekolah"><span class="pst-icon" style="background:hsl(280 40% 93%);color:hsl(280 55% 45%);">🏫</span> Asal Sekolah & Akademik</h3></div><div class="profil-2col">`+i(`Asal Sekolah`,n(e.asal_sekolah))+i(`Program Studi`,n(e.prodi))+i(`Jenjang`,`<span class="profil-row-value">Strata 1 (S1)</span>`)+i(`Status`,`<span class="profil-row-value"><span style="background:hsl(145 55% 45%);color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:600;">✓ Aktif</span></span>`)+`</div></div></div><div class="profil-tab-panel" data-panel="dokumen" role="tabpanel"><div class="profil-section" role="region" aria-labelledby="secDokumen"><div class="profil-section-header"><h3 class="profil-section-title" id="secDokumen"><span class="pst-icon" style="background:hsl(35 80% 93%);color:hsl(35 70% 42%);">📂</span> Dokumen Persyaratan</h3></div><div class="profil-2col">`+a(`Ijazah SMA/SMK/MA`,e.file_ijazah)+a(`Fotokopi KTP / KK`,e.file_ktp)+a(`Pas Foto 3×4`,e.file_pasfoto)+a(`Transkip Nilai Rapor`,e.file_rapor)+a(`Surat Keterangan Sehat`,e.file_surat_sehat)+`</div></div></div><div class="profil-tab-panel" data-panel="keuangan" role="tabpanel"><div class="profil-section" role="region" aria-labelledby="secKeuangan"><div class="profil-section-header"><h3 class="profil-section-title" id="secKeuangan"><span class="pst-icon" style="background:hsl(145 90% 92%);color:hsl(145 60% 35%);">💰</span> Riwayat Keuangan</h3></div><div style="padding:20px;" id="riwayatKeuanganArea"><div style="text-align:center;padding:20px;color:var(--text-muted);">`+F.loader+` Memuat riwayat keuangan...</div></div></div></div><div class="profil-tab-panel" data-panel="akun" role="tabpanel"><div class="profil-section" role="region" aria-labelledby="secAkun"><div class="profil-section-header"><h3 class="profil-section-title" id="secAkun"><span class="pst-icon" style="background:hsl(0 0% 94%);color:var(--text-muted);">⚙️</span> Pengaturan Akun</h3></div><div style="padding:20px;"><form id="profilForm" style="max-width:380px;" autocomplete="off" aria-label="Ubah password"><div class="form-group" style="margin-bottom:12px;"><label class="form-label" for="profOldPw">Password Lama</label><input type="password" id="profOldPw" class="form-input" placeholder="••••••••" autocomplete="current-password"></div><div class="form-group" style="margin-bottom:12px;"><label class="form-label" for="profNewPw">Password Baru</label><input type="password" id="profNewPw" class="form-input" placeholder="Minimal 8 karakter" autocomplete="new-password" minlength="8"></div><div class="form-group" style="margin-bottom:16px;"><label class="form-label" for="profConfPw">Konfirmasi Password Baru</label><input type="password" id="profConfPw" class="form-input" placeholder="Ulangi password baru" autocomplete="new-password"></div><button type="button" class="btn btn-primary btn-sm" style="border-radius:8px;" >🔐 Ubah Password</button></form></div></div></div>`}function Zt(){return`<div style="padding:16px;"><h2 style="font-size:1.15rem;font-weight:700;margin:0 0 4px;">📚 Kurikulum Program Studi</h2><p style="color:var(--text-muted);font-size:0.82rem;margin:0 0 16px;">Struktur kurikulum Administrasi Niaga & Negara — STIA Bayuangga</p><div id="kurikulumTabs" style="display:flex;gap:8px;margin-bottom:16px;"><button class="kur-tab active" data-prodi="niaga" style="padding:8px 20px;border:none;border-radius:8px;font-size:0.82rem;font-weight:600;cursor:pointer;background:hsl(210 70% 50%);color:white;transition:all .2s;">🏪 Adm. Niaga (145 SKS)</button><button class="kur-tab" data-prodi="negara" style="padding:8px 20px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.82rem;font-weight:600;cursor:pointer;background:white;color:var(--text-primary);transition:all .2s;">🏦 Adm. Negara (146 SKS)</button></div><div id="kurikulumContent"></div><div id="mkEditModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.45);z-index:9999;align-items:center;justify-content:center;"><div style="background:white;border-radius:16px;width:500px;max-width:92vw;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.25);"><div style="padding:16px 20px;border-bottom:1px solid var(--gray-100);display:flex;justify-content:space-between;align-items:center;"><h3 style="margin:0;font-size:0.95rem;font-weight:700;">✏️ Edit Mata Kuliah</h3><button id="closeMkEdit" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--text-muted);">&times;</button></div><form id="mkEditForm" style="padding:20px;"><input type="hidden" id="mkEditProdi"><input type="hidden" id="mkEditSem"><input type="hidden" id="mkEditIdx"><div style="margin-bottom:12px;"><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;color:var(--text-secondary);">Kode MK</label><input id="mkEditKode" readonly style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;background:var(--gray-50);color:var(--text-muted);"></div><div style="margin-bottom:12px;"><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;color:var(--text-secondary);">Mata Kuliah *</label><input id="mkEditNama" required style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div><div style="margin-bottom:12px;"><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;color:var(--text-secondary);">Dosen <span style="font-size:0.62rem;color:hsl(150 50% 45%);">(dari Data Dosen)</span></label><select id="mkEditDosen" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;cursor:pointer;"><option value="">— Pilih Dosen —</option>`+(l===void 0?``:l.filter(e=>e.status===`Aktif`).map(e=>`<option value="${e.nama}">${e.nama}</option>`).join(``))+`</select></div><div style="margin-bottom:14px;"><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;color:var(--text-secondary);">SKS</label><input id="mkEditSks" type="number" min="1" max="10" required style="width:100px;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div><div style="display:flex;justify-content:flex-end;gap:8px;"><button type="button" id="cancelMkEdit" style="padding:8px 18px;border:1px solid var(--gray-200);background:white;border-radius:8px;font-size:0.82rem;cursor:pointer;">Batal</button><button type="submit" style="padding:8px 18px;border:none;background:var(--primary-500);color:white;border-radius:8px;font-size:0.82rem;font-weight:600;cursor:pointer;">Simpan</button></div></form></div></div></div>`}function Qt(e){let t=w[e];if(!t)return``;let n=e===`niaga`,r=n?`hsl(210 70% 50%)`:`hsl(145 55% 45%)`,i=n?`hsl(210 70% 95%)`:`hsl(145 55% 93%)`,a=t.semester.reduce((e,t)=>e+t.mk.length,0),o=``;o+=`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:18px;">`,o+=`<div style="background:linear-gradient(135deg,${r},${n?`hsl(230 60% 55%)`:`hsl(160 50% 40%)`});border-radius:12px;padding:14px;color:white;"><div style="font-size:1.6rem;font-weight:800;">${t.totalSKS}</div><div style="font-size:0.72rem;opacity:.85;">Total SKS</div></div>`,o+=`<div style="background:linear-gradient(135deg,hsl(35 80% 55%),hsl(25 75% 50%));border-radius:12px;padding:14px;color:white;"><div style="font-size:1.6rem;font-weight:800;">8</div><div style="font-size:0.72rem;opacity:.85;">Semester</div></div>`,o+=`<div style="background:linear-gradient(135deg,hsl(270 55% 55%),hsl(280 50% 45%));border-radius:12px;padding:14px;color:white;"><div style="font-size:1.6rem;font-weight:800;">${a}</div><div style="font-size:0.72rem;opacity:.85;">Mata Kuliah</div></div>`,o+=`<div style="background:linear-gradient(135deg,hsl(340 60% 55%),hsl(350 55% 45%));border-radius:12px;padding:14px;color:white;"><div style="font-size:1.6rem;font-weight:800;">S1</div><div style="font-size:0.72rem;opacity:.85;">Jenjang</div></div>`,o+=`</div>`,o+=`<div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap;">`,o+=`<button class="sem-filter active" data-sem="all" style="padding:5px 14px;border:1px solid ${r};border-radius:20px;font-size:0.72rem;font-weight:600;cursor:pointer;background:${r};color:white;transition:all .2s;">Semua</button>`;for(let e=1;e<=8;e++)o+=`<button class="sem-filter" data-sem="${e}" style="padding:5px 14px;border:1px solid var(--gray-200);border-radius:20px;font-size:0.72rem;font-weight:600;cursor:pointer;background:white;color:var(--text-primary);transition:all .2s;">Smt ${e}</button>`;return o+=`</div>`,o+=`<div style="margin-bottom:14px;display:flex;align-items:center;gap:10px;">`,o+=`<div style="position:relative;flex:1;max-width:400px;">`,o+=`<input id="dosenSearchInput" type="text" placeholder="🔍 Cari nama dosen..." style="width:100%;padding:8px 12px 8px 34px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.82rem;box-sizing:border-box;transition:border-color .2s;">`,o+=`<span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:0.85rem;pointer-events:none;">👤</span>`,o+=`</div>`,o+=`<span id="dosenSearchCount" style="font-size:0.72rem;color:var(--text-muted);white-space:nowrap;"></span>`,o+=`</div>`,t.semester.forEach(e=>{o+=`<div class="sem-section" data-semester="${e.no}" style="margin-bottom:16px;">`,o+=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">`,o+=`<div style="display:flex;align-items:center;gap:8px;"><h3 style="font-size:0.88rem;font-weight:700;margin:0;"><span style="display:inline-block;background:${r};color:white;padding:2px 10px;border-radius:6px;font-size:0.72rem;">Semester ${e.no}</span></h3>`,o+=`<button class="btn-mk-add" data-sem="${e.no}" style="padding:3px 10px;border:1px dashed ${r};border-radius:6px;background:${i};color:${r};font-size:0.68rem;font-weight:600;cursor:pointer;transition:all .2s;" title="Tambah MK">+ Tambah MK</button></div>`,o+=`<span style="font-size:0.72rem;font-weight:600;color:${r};background:${i};padding:2px 10px;border-radius:10px;">${e.sks} SKS</span>`,o+=`</div>`,o+=`<div style="background:white;border-radius:12px;border:1px solid var(--gray-100);overflow:hidden;">`,o+=`<table style="width:100%;border-collapse:collapse;font-size:0.78rem;">`,o+=`<thead><tr style="background:var(--gray-50);"><th style="padding:8px 10px;text-align:left;font-weight:600;color:var(--text-secondary);width:30px;">No</th><th style="padding:8px 10px;text-align:left;font-weight:600;color:var(--text-secondary);width:85px;">Kode MK</th><th style="padding:8px 10px;text-align:left;font-weight:600;color:var(--text-secondary);">Mata Kuliah</th><th style="padding:8px 10px;text-align:left;font-weight:600;color:var(--text-secondary);">Dosen</th><th style="padding:8px 10px;text-align:center;font-weight:600;color:var(--text-secondary);width:45px;">SKS</th><th style="padding:8px 10px;text-align:center;font-weight:600;color:var(--text-secondary);width:65px;">Aksi</th></tr></thead><tbody>`,e.mk.forEach((t,n)=>{let a=n%2==0?`white`:`var(--gray-50)`;o+=`<tr style="background:${a};border-top:1px solid var(--gray-100);">`,o+=`<td style="padding:7px 10px;color:var(--text-muted);">${n+1}</td>`,o+=`<td style="padding:7px 10px;"><code style="background:${i};color:${r};padding:1px 6px;border-radius:4px;font-size:0.72rem;font-weight:600;">${t.kode}</code></td>`,o+=`<td style="padding:7px 10px;font-weight:500;">${t.nama}</td>`,o+=`<td style="padding:7px 10px;color:var(--text-secondary);font-size:0.72rem;">${t.dosen===`-`?`<em style="opacity:.5">-</em>`:t.dosen}</td>`,o+=`<td style="padding:7px 10px;text-align:center;font-weight:700;color:${r};">${t.sks}</td>`,o+=`<td style="padding:7px 10px;text-align:center;white-space:nowrap;"><button class="btn-mk-edit" data-sem="${e.no}" data-idx="${n}" style="background:none;border:none;cursor:pointer;font-size:0.8rem;padding:2px 3px;" title="Edit">\u270f\ufe0f</button><button class="btn-mk-del" data-sem="${e.no}" data-idx="${n}" style="background:none;border:none;cursor:pointer;font-size:0.8rem;padding:2px 3px;" title="Hapus">\ud83d\uddd1\ufe0f</button></td>`,o+=`</tr>`}),o+=`<tr style="background:${i};border-top:2px solid ${r};">`,o+=`<td colspan="5" style="padding:7px 10px;font-weight:700;text-align:right;font-size:0.75rem;">Total SKS Semester ${e.no}</td>`,o+=`<td style="padding:7px 10px;text-align:center;font-weight:800;color:${r};">${e.sks}</td></tr>`,o+=`</tbody></table></div></div>`}),o+=`<div style="background:${r};color:white;padding:12px 16px;border-radius:10px;display:flex;justify-content:space-between;align-items:center;margin-top:4px;">`,o+=`<span style="font-weight:700;font-size:0.88rem;">\ud83c\udf93 Total SKS ${t.nama}</span>`,o+=`<span style="font-size:1.3rem;font-weight:800;">${t.totalSKS} SKS</span>`,o+=`</div>`,o}function $t(){let e=document.getElementById(`kurikulumContent`);if(!e)return;function t(){return document.querySelector(`.kur-tab.active`)?.dataset.prodi||`niaga`}function n(e){let t=w[e];t.semester.forEach(e=>{e.sks=e.mk.reduce((e,t)=>e+t.sks,0)}),t.totalSKS=t.semester.reduce((e,t)=>e+t.sks,0)}function r(t){e.innerHTML=Qt(t),en(),i(),c(),l(),u()}function i(){let t=document.getElementById(`dosenSearchInput`),n=document.getElementById(`dosenSearchCount`);t&&t.addEventListener(`input`,()=>{let r=t.value.trim().toLowerCase(),i=e.querySelectorAll(`tbody tr:not([style*="border-top:2px"])`),a=0,o=0;i.forEach(e=>{let t=e.querySelectorAll(`td`)[3];if(!t||e.querySelector(`td[colspan]`))return;o++;let n=t.textContent.toLowerCase();!r||n.includes(r)?(e.style.display=``,a++):e.style.display=`none`}),r&&n?(n.textContent=`${a} dari ${o} mata kuliah ditemukan`,n.style.color=a>0?`hsl(150 55% 40%)`:`hsl(0 55% 50%)`):n&&(n.textContent=``)})}r(`niaga`),document.querySelectorAll(`.kur-tab`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.kur-tab`).forEach(e=>{e.classList.remove(`active`),e.style.background=`white`,e.style.color=`var(--text-primary)`,e.style.border=`1px solid var(--gray-200)`}),e.classList.add(`active`);let t=e.dataset.prodi,n=t===`niaga`?`hsl(210 70% 50%)`:`hsl(145 55% 45%)`;e.style.background=n,e.style.color=`white`,e.style.border=`none`,r(t)})});let a=document.getElementById(`mkEditModal`),o=()=>{a&&(a.style.display=`none`)};document.getElementById(`closeMkEdit`)?.addEventListener(`click`,o),document.getElementById(`cancelMkEdit`)?.addEventListener(`click`,o),a?.addEventListener(`click`,e=>{e.target===a&&o()}),document.getElementById(`mkEditForm`)?.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`mkEditProdi`).value,i=parseInt(document.getElementById(`mkEditSem`).value),a=document.getElementById(`mkEditIdx`).value,s=a===`-1`,c=w[t]?.semester.find(e=>e.no===i);if(!c)return;let l=document.getElementById(`mkEditKode`).value.trim(),u=document.getElementById(`mkEditNama`).value.trim(),d=document.getElementById(`mkEditDosen`).value.trim(),f=parseInt(document.getElementById(`mkEditSks`).value);if(!l){alert(`⚠️ Kode MK harus diisi`);return}if(!u){alert(`⚠️ Nama mata kuliah harus diisi`);return}if(s)c.mk.push({kode:l,nama:u,dosen:d||`-`,sks:f||3});else{let e=parseInt(a);if(!c.mk[e])return;c.mk[e].kode=l,c.mk[e].nama=u,c.mk[e].dosen=d||`-`,c.mk[e].sks=f}n(t),o(),alert(s?`✅ Mata kuliah berhasil ditambahkan!`:`✅ Mata kuliah berhasil diperbarui!`),r(t)});function s(e,t,n,r){let i=n===-1;document.querySelector(`#mkEditModal h3`).textContent=i?`➕ Tambah Mata Kuliah`:`✏️ Edit Mata Kuliah`,document.getElementById(`mkEditProdi`).value=e,document.getElementById(`mkEditSem`).value=t,document.getElementById(`mkEditIdx`).value=n;let o=document.getElementById(`mkEditKode`);o.value=r.kode,o.readOnly=!i,o.style.background=i?`white`:`var(--gray-50)`,o.style.color=i?`var(--text-primary)`:`var(--text-muted)`,document.getElementById(`mkEditNama`).value=r.nama;let s=document.getElementById(`mkEditDosen`);if(s){let e=r.dosen===`-`?``:r.dosen,t=!1;for(let n=0;n<s.options.length;n++)if(s.options[n].value&&s.options[n].value===e){s.selectedIndex=n,t=!0;break}if(!t&&e){for(let n=0;n<s.options.length;n++)if(s.options[n].value&&(e.includes(s.options[n].value)||s.options[n].value.includes(e))){s.selectedIndex=n,t=!0;break}}t||(s.selectedIndex=0)}document.getElementById(`mkEditSks`).value=r.sks,a.style.display=`flex`}function c(){document.querySelectorAll(`.btn-mk-edit`).forEach(e=>{e.addEventListener(`click`,()=>{let n=t(),r=parseInt(e.dataset.sem),i=parseInt(e.dataset.idx),a=w[n]?.semester.find(e=>e.no===r);!a||!a.mk[i]||s(n,r,i,a.mk[i])})})}function l(){document.querySelectorAll(`.btn-mk-add`).forEach(e=>{e.addEventListener(`click`,()=>{s(t(),parseInt(e.dataset.sem),-1,{kode:``,nama:``,dosen:``,sks:3})})})}function u(){document.querySelectorAll(`.btn-mk-del`).forEach(e=>{e.addEventListener(`click`,()=>{let i=t(),a=parseInt(e.dataset.sem),o=parseInt(e.dataset.idx),s=w[i]?.semester.find(e=>e.no===a);if(!s||!s.mk[o])return;let c=s.mk[o];confirm(`\ud83d\uddd1\ufe0f Hapus mata kuliah "${c.nama}" (${c.kode})?\n\nAksi ini tidak dapat dibatalkan.`)&&(s.mk.splice(o,1),n(i),alert(`✅ Mata kuliah berhasil dihapus!`),r(i))})})}}function en(){document.querySelectorAll(`.sem-filter`).forEach(e=>{e.addEventListener(`click`,()=>{let t=document.querySelector(`.kur-tab.active`)?.dataset.prodi===`negara`?`hsl(145 55% 45%)`:`hsl(210 70% 50%)`;document.querySelectorAll(`.sem-filter`).forEach(e=>{e.classList.remove(`active`),e.style.background=`white`,e.style.color=`var(--text-primary)`,e.style.border=`1px solid var(--gray-200)`}),e.classList.add(`active`),e.style.background=t,e.style.color=`white`,e.style.border=`1px solid ${t}`;let n=e.dataset.sem;document.querySelectorAll(`.sem-section`).forEach(e=>{e.style.display=n===`all`||e.dataset.semester===n?`block`:`none`})})})}function tn(){let e=l===void 0?[]:l,t={Dekan:`hsl(280 60% 50%)`,Wadek:`hsl(215 60% 50%)`,Kaprodi:`hsl(145 50% 40%)`,Dosen:`hsl(38 60% 45%)`},n={total:e.length,dekan:e.filter(e=>e.jabatanFungsional===`Dekan`).length,wadek:e.filter(e=>e.jabatanFungsional===`Wadek`).length,kaprodi:e.filter(e=>e.jabatanFungsional===`Kaprodi`).length,dosen:e.filter(e=>e.jabatanFungsional===`Dosen`).length};return`<div style="margin-bottom:16px;"><h2 style="font-family:var(--font-heading);font-size:1.15rem;font-weight:800;margin:0 0 4px;color:var(--text-primary);">👨‍🏫 Data Dosen</h2><p style="color:var(--text-muted);font-size:0.8rem;margin:0;">Manajemen data dosen STIA Bayuangga</p></div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:20px;"><div style="background:var(--gradient-primary);border-radius:12px;padding:16px;color:white;"><div style="font-size:1.8rem;font-weight:800;">`+n.total+`</div><div style="font-size:0.72rem;opacity:.8;">Total Dosen</div></div><div style="background:linear-gradient(135deg,hsl(280 60% 50%),hsl(280 60% 40%));border-radius:12px;padding:16px;color:white;"><div style="font-size:1.8rem;font-weight:800;">`+n.dekan+`</div><div style="font-size:0.72rem;opacity:.8;">Dekan</div></div><div style="background:linear-gradient(135deg,hsl(215 60% 50%),hsl(215 60% 40%));border-radius:12px;padding:16px;color:white;"><div style="font-size:1.8rem;font-weight:800;">`+n.wadek+`</div><div style="font-size:0.72rem;opacity:.8;">Wadek</div></div><div style="background:linear-gradient(135deg,hsl(145 50% 40%),hsl(145 50% 30%));border-radius:12px;padding:16px;color:white;"><div style="font-size:1.8rem;font-weight:800;">`+n.kaprodi+`</div><div style="font-size:0.72rem;opacity:.8;">Kaprodi</div></div><div style="background:linear-gradient(135deg,hsl(38 60% 45%),hsl(38 60% 35%));border-radius:12px;padding:16px;color:white;"><div style="font-size:1.8rem;font-weight:800;">`+n.dosen+`</div><div style="font-size:0.72rem;opacity:.8;">Dosen</div></div></div><div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;"><input type="text" id="dosenSearch" placeholder="🔍 Cari dosen..." style="flex:1;min-width:200px;padding:8px 14px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.82rem;outline:none;" aria-label="Cari dosen"><select id="dosenFilterJabatan" style="padding:8px 12px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.82rem;" aria-label="Filter jabatan"><option value="">Semua Jabatan</option><option value="Dekan">Dekan</option><option value="Wadek">Wadek</option><option value="Kaprodi">Kaprodi</option><option value="Dosen">Dosen</option></select><select id="dosenFilterGolongan" style="padding:8px 12px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.82rem;" aria-label="Filter golongan"><option value="">Semua Golongan</option><option value="IV">Gol IV</option><option value="III">Gol III</option></select><button id="btnTambahDosen" style="padding:8px 16px;background:var(--primary-500);color:white;border:none;border-radius:8px;font-size:0.82rem;font-weight:600;cursor:pointer;white-space:nowrap;">➕ Tambah Dosen</button></div><div class="profil-section" style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:0.8rem;" aria-label="Tabel data dosen"><thead><tr style="background:var(--gray-50);border-bottom:2px solid var(--gray-100);"><th style="padding:10px 14px;text-align:left;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">Dosen</th><th style="padding:10px 14px;text-align:left;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">NIP / NIDN</th><th style="padding:10px 14px;text-align:left;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">Akun Login</th><th style="padding:10px 14px;text-align:left;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">Jabatan</th><th style="padding:10px 14px;text-align:left;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">Golongan</th><th style="padding:10px 14px;text-align:center;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">Status</th><th style="padding:10px 14px;text-align:center;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">Aksi</th></tr></thead><tbody id="dosenTableBody">`+e.map(e=>{let n=e.nama.split(` `).filter(e=>![`Dr.`,`Ir.`,`Prof.`,`H.`,`Hj.`,`S.AP.`,`M.AP.`,`M.Si.`,`M.T.`,`M.M.`,`M.Kom.`,`S.H.`,`M.H.`,`S.Sos.`,`S.E.`].includes(e)).map(e=>e[0]).join(``).substring(0,2).toUpperCase(),r=t[e.jabatanFungsional]||`var(--text-muted)`;return`<tr class="dosen-row" data-nama="`+e.nama.toLowerCase()+`" data-jabatan="`+e.jabatanFungsional+`" data-gol="`+e.golongan+`" style="border-bottom:1px solid var(--gray-50);transition:background .15s;" onmouseover="this.style.background='hsl(215 30% 98%)';" onmouseout="this.style.background='transparent';"><td style="padding:10px 14px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;border-radius:50%;background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.7rem;flex-shrink:0;">`+n+`</div><div><div style="font-weight:600;font-size:0.82rem;">`+e.nama+`</div><div style="font-size:0.7rem;color:var(--text-muted);">`+e.email+`</div></div></div></td><td style="padding:10px 14px;font-family:var(--font-mono);font-size:0.75rem;"><div>`+e.nip+`</div><div style="color:var(--text-muted);font-size:0.7rem;">NIDN: `+e.nidn+`</div></td><td style="padding:10px 14px;"><div style="font-size:0.72rem;"><span style="color:var(--text-muted);">👤</span> <strong>`+(e.username||`-`)+`</strong></div><div style="font-size:0.68rem;color:var(--text-muted);margin-top:2px;">🔑 `+(e.password?`•`.repeat(e.password.length):`-`)+`</div></td><td style="padding:10px 14px;"><span style="background:`+r+`;color:white;padding:2px 10px;border-radius:10px;font-size:0.7rem;font-weight:600;">`+e.jabatanFungsional+`</span></td><td style="padding:10px 14px;font-size:0.8rem;font-weight:600;">`+e.golongan+`</td><td style="padding:10px 14px;text-align:center;"><span style="background:hsl(145 55% 45%);color:white;padding:2px 10px;border-radius:10px;font-size:0.7rem;font-weight:600;">✓ `+e.status+`</span></td><td style="padding:10px 14px;text-align:center;"><button class="btn-dosen-detail" data-id="`+e.id+`" style="background:none;border:1px solid var(--primary-300);color:var(--primary-500);padding:4px 10px;border-radius:6px;font-size:0.7rem;cursor:pointer;margin-right:4px;" title="Detail">👁️</button><button class="btn-dosen-edit" data-id="`+e.id+`" style="background:none;border:1px solid hsl(215 50% 85%);color:hsl(215 50% 45%);padding:4px 10px;border-radius:6px;font-size:0.7rem;cursor:pointer;margin-right:4px;" title="Edit">✏️</button><button class="btn-dosen-delete" data-id="`+e.id+`" data-nama="`+e.nama+`" style="background:none;border:1px solid hsl(0 60% 80%);color:hsl(0 60% 45%);padding:4px 10px;border-radius:6px;font-size:0.7rem;cursor:pointer;" title="Hapus">🗑️</button></td></tr>`}).join(``)+`</tbody></table></div><div id="dosenDetailModal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:1000;display:none;align-items:center;justify-content:center;"><div style="background:white;border-radius:16px;max-width:600px;width:90%;max-height:80vh;overflow-y:auto;padding:24px;" id="dosenDetailContent"></div></div><div id="dosenFormModal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:1001;align-items:center;justify-content:center;"><div style="background:white;border-radius:16px;max-width:640px;width:92%;max-height:85vh;overflow-y:auto;padding:24px;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h3 id="dosenFormTitle" style="margin:0;font-size:1rem;">Tambah Dosen Baru</h3><button id="closeDosenForm" style="background:none;border:none;font-size:1.2rem;cursor:pointer;">✖</button></div><form id="dosenCrudForm"><input type="hidden" id="dosenFormId" value=""><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;"><div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Nama Lengkap *</label><input name="nama" id="dfNama" required style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div><div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">NIP *</label><input name="nip" id="dfNip" required style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div><div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">NIDN</label><input name="nidn" id="dfNidn" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div><div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Email</label><input name="email" id="dfEmail" type="email" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div><div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Telepon</label><input name="telepon" id="dfTelepon" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div><div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Jabatan *</label><select name="jabatan_fungsional" id="dfJabFung" required style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"><option value="">-- Pilih --</option><option>Dekan</option><option>Wadek</option><option>Kaprodi</option><option>Dosen</option></select></div><div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Golongan</label><input name="golongan" id="dfGolongan" placeholder="cth: III/d" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div><div style="grid-column:span 2"><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Pendidikan Terakhir</label><input name="pendidikan" id="dfPendidikan" placeholder="cth: S3 Ilmu Administrasi — Universitas Brawijaya" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div><div style="grid-column:span 2"><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Bidang Keahlian</label><input name="bidang_keahlian" id="dfBidang" placeholder="pisahkan dengan koma" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div></div><div style="margin-top:14px;padding:14px;background:hsl(38 60% 97%);border-radius:10px;border:1px solid hsl(38 60% 88%);"><div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;"><span style="font-size:0.9rem;">🔑</span><span style="font-size:0.78rem;font-weight:700;color:var(--text-secondary);">Akun Login</span></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;"><div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Username *</label><input name="username" id="dfUsername" required style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div><div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Password *</label><input name="password" id="dfPassword" required style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div></div></div><div id="dosenPwSection" style="display:none;margin-top:14px;padding:14px;background:var(--gray-50);border-radius:10px;border:1px solid var(--gray-100);"><div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;"><span style="font-size:0.9rem;">🔐</span><span style="font-size:0.78rem;font-weight:700;color:var(--text-secondary);">Ubah Password (opsional)</span></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;"><div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Password Baru</label><input type="password" id="dfNewPw" placeholder="Kosongkan jika tidak diubah" autocomplete="new-password" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div><div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Konfirmasi Password</label><input type="password" id="dfConfPw" placeholder="Ulangi password baru" autocomplete="new-password" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div></div><div id="dfPwMatch" style="margin-top:6px;font-size:0.7rem;"></div></div><div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px;"><button type="button" id="cancelDosenForm" style="padding:8px 18px;border:1px solid var(--gray-200);background:white;border-radius:8px;font-size:0.82rem;cursor:pointer;">Batal</button><button type="submit" id="submitDosenForm" style="padding:8px 18px;border:none;background:var(--primary-500);color:white;border-radius:8px;font-size:0.82rem;font-weight:600;cursor:pointer;">Simpan</button></div></form></div></div>`}function nn(e,t){function n(){let e=(document.getElementById(`dosenSearch`)?.value||``).toLowerCase(),t=document.getElementById(`dosenFilterJabatan`)?.value||``,n=document.getElementById(`dosenFilterGolongan`)?.value||``;document.querySelectorAll(`.dosen-row`).forEach(r=>{let i=!e||r.dataset.nama.includes(e),a=!t||r.dataset.jabatan===t,o=!n||r.dataset.gol.startsWith(n);r.style.display=i&&a&&o?``:`none`})}document.getElementById(`dosenSearch`)?.addEventListener(`input`,n),document.getElementById(`dosenFilterJabatan`)?.addEventListener(`change`,n),document.getElementById(`dosenFilterGolongan`)?.addEventListener(`change`,n),document.querySelectorAll(`.btn-dosen-detail`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.id,n=l.find(e=>e.id===t);if(!n)return;let r=document.getElementById(`dosenDetailModal`),i=document.getElementById(`dosenDetailContent`);i.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h3 style="margin:0;font-size:1rem;">Detail Dosen</h3><button id="closeDosenModal" style="background:none;border:none;font-size:1.2rem;cursor:pointer;">✖</button></div><div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;"><div style="width:56px;height:56px;border-radius:50%;background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:1rem;">`+n.nama[0]+`</div><div><div style="font-weight:700;font-size:1rem;">`+n.nama+`</div><div style="color:var(--text-muted);font-size:0.8rem;">`+n.jabatanFungsional+` — `+n.golongan+`</div></div></div><div class="profil-section" style="margin-bottom:12px;"><div class="profil-section-header"><h3 class="profil-section-title"><span class="pst-icon" style="background:hsl(215 50% 94%);color:var(--primary-600);">💼</span> Informasi</h3></div><div class="profil-row"><div class="profil-row-label">NIP</div><span class="profil-row-value mono">`+n.nip+`</span></div><div class="profil-row"><div class="profil-row-label">NIDN</div><span class="profil-row-value mono">`+n.nidn+`</span></div><div class="profil-row"><div class="profil-row-label">Email</div><span class="profil-row-value">`+n.email+`</span></div><div class="profil-row"><div class="profil-row-label">Telepon</div><span class="profil-row-value">`+n.telepon+`</span></div><div class="profil-row"><div class="profil-row-label">Pendidikan</div><span class="profil-row-value">`+n.pendidikan+`</span></div><div class="profil-row"><div class="profil-row-label">Bidang Keahlian</div><span class="profil-row-value">`+n.bidangKeahlian.join(`, `)+`</span></div><div class="profil-row"><div class="profil-row-label">Mata Kuliah</div><span class="profil-row-value">`+n.mataKuliah.join(`, `)+`</span></div></div><div class="profil-section" style="margin-bottom:12px;"><div class="profil-section-header"><h3 class="profil-section-title"><span class="pst-icon" style="background:hsl(38 60% 92%);color:hsl(38 60% 40%);">🔑</span> Akun Login</h3></div><div class="profil-row"><div class="profil-row-label">Username</div><span class="profil-row-value mono" style="font-weight:700;">`+(n.username||`-`)+`</span></div><div class="profil-row"><div class="profil-row-label">Password</div><span class="profil-row-value mono">`+(n.password||`-`)+`</span></div></div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;"><div style="text-align:center;padding:12px;background:var(--gray-50);border-radius:10px;"><div style="font-size:1.3rem;font-weight:800;color:var(--primary-600);">`+n.totalPublikasi+`</div><div style="font-size:0.68rem;color:var(--text-muted);">Publikasi</div></div><div style="text-align:center;padding:12px;background:var(--gray-50);border-radius:10px;"><div style="font-size:1.3rem;font-weight:800;color:var(--primary-600);">`+n.totalPenelitian+`</div><div style="font-size:0.68rem;color:var(--text-muted);">Penelitian</div></div><div style="text-align:center;padding:12px;background:var(--gray-50);border-radius:10px;"><div style="font-size:1.3rem;font-weight:800;color:var(--primary-600);">`+n.totalPengabdian+`</div><div style="font-size:0.68rem;color:var(--text-muted);">Pengabdian</div></div><div style="text-align:center;padding:12px;background:var(--gray-50);border-radius:10px;"><div style="font-size:1.3rem;font-weight:800;color:var(--primary-600);">`+(n.totalMahasiswaBimbingan||0)+`</div><div style="font-size:0.68rem;color:var(--text-muted);">Bimbingan</div></div></div>`,r.style.display=`flex`,document.getElementById(`closeDosenModal`)?.addEventListener(`click`,()=>{r.style.display=`none`}),r.addEventListener(`click`,e=>{e.target===r&&(r.style.display=`none`)})})});let r=document.getElementById(`dosenFormModal`),i=()=>{r.style.display=`none`,document.getElementById(`dosenCrudForm`)?.reset(),document.getElementById(`dosenFormId`).value=``};document.getElementById(`btnTambahDosen`)?.addEventListener(`click`,()=>{document.getElementById(`dosenFormTitle`).textContent=`➕ Tambah Dosen Baru`,document.getElementById(`dosenCrudForm`)?.reset(),document.getElementById(`dosenFormId`).value=``;let e=document.getElementById(`dosenPwSection`);e&&(e.style.display=`none`),r.style.display=`flex`}),document.getElementById(`closeDosenForm`)?.addEventListener(`click`,i),document.getElementById(`cancelDosenForm`)?.addEventListener(`click`,i),r?.addEventListener(`click`,e=>{e.target===r&&i()}),document.getElementById(`dfConfPw`)?.addEventListener(`input`,e=>{let t=document.getElementById(`dfPwMatch`);if(!t)return;let n=document.getElementById(`dfNewPw`)?.value||``;if(!e.target.value){t.textContent=``;return}t.textContent=n===e.target.value?`✅ Password cocok`:`❌ Tidak cocok`,t.style.color=n===e.target.value?`hsl(145 60% 40%)`:`hsl(0 70% 50%)`}),document.getElementById(`dosenCrudForm`)?.addEventListener(`submit`,n=>{n.preventDefault();let r=document.getElementById(`dosenFormId`).value,a={nama:document.getElementById(`dfNama`).value,nip:document.getElementById(`dfNip`).value,nidn:document.getElementById(`dfNidn`).value,email:document.getElementById(`dfEmail`).value,telepon:document.getElementById(`dfTelepon`).value,jabatanFungsional:document.getElementById(`dfJabFung`).value,golongan:document.getElementById(`dfGolongan`).value,pendidikan:document.getElementById(`dfPendidikan`).value,bidangKeahlian:document.getElementById(`dfBidang`).value.split(`,`).map(e=>e.trim()).filter(Boolean),mataKuliah:[],totalMK:0,totalMahasiswaBimbingan:0,totalPublikasi:0,totalPenelitian:0,totalPengabdian:0,status:`Aktif`,avatar:null,username:document.getElementById(`dfUsername`).value.trim(),password:document.getElementById(`dfPassword`).value.trim()};if(r){let e=document.getElementById(`dfNewPw`)?.value,t=document.getElementById(`dfConfPw`)?.value;if(e){if(e.length<8){alert(`⚠️ Password baru minimal 8 karakter`);return}if(e!==t){alert(`⚠️ Konfirmasi password tidak cocok`);return}}let n=l.findIndex(e=>e.id===r);n>=0&&(Object.assign(l[n],a),alert(e?`✅ Data dosen & password berhasil diperbarui!`:`✅ Data dosen berhasil diperbarui!`))}else a.id=`DSN`+String(l.length+1).padStart(3,`0`),l.push(a),alert(`✅ Dosen baru berhasil ditambahkan!`);i(),e.innerHTML=tn()+t,nn(e,t)}),document.querySelectorAll(`.btn-dosen-edit`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.id,n=l.find(e=>e.id===t);if(!n)return;document.getElementById(`dosenFormTitle`).textContent=`✏️ Edit Dosen`,document.getElementById(`dosenFormId`).value=n.id,document.getElementById(`dfNama`).value=n.nama,document.getElementById(`dfNip`).value=n.nip,document.getElementById(`dfNidn`).value=n.nidn,document.getElementById(`dfEmail`).value=n.email,document.getElementById(`dfTelepon`).value=n.telepon||``,document.getElementById(`dfJabFung`).value=n.jabatanFungsional,document.getElementById(`dfGolongan`).value=n.golongan,document.getElementById(`dfPendidikan`).value=n.pendidikan||``,document.getElementById(`dfBidang`).value=(n.bidangKeahlian||[]).join(`, `),document.getElementById(`dfUsername`).value=n.username||``,document.getElementById(`dfPassword`).value=n.password||``;let i=document.getElementById(`dosenPwSection`);i&&(i.style.display=`block`);let a=document.getElementById(`dfNewPw`),o=document.getElementById(`dfConfPw`);a&&(a.value=``),o&&(o.value=``);let s=document.getElementById(`dfPwMatch`);s&&(s.textContent=``),r.style.display=`flex`})}),document.querySelectorAll(`.btn-dosen-delete`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.dataset.id,i=n.dataset.nama;if(!confirm(`⚠️ Yakin ingin menghapus dosen:

`+i+`

Data yang dihapus tidak dapat dikembalikan.`))return;let a=l.findIndex(e=>e.id===r);a>=0&&(l.splice(a,1),alert(`✅ Dosen berhasil dihapus`),e.innerHTML=tn()+t,nn(e,t))})})}var rn={mahasiswa:Te,dosen:Fe,kaprodi:Ye,bap:Xe};function an(e){let t=Gn();if(!t){window.location.hash=`#/login`;return}let n=rn[t.role]||Te;if(e.innerHTML=`
  <a href="#dashMain" class="skip-to-content" aria-label="Langsung ke konten utama">Skip to content</a>
  <div class="dash" role="application" aria-label="SIAKAD - Sistem Informasi Akademik">
    ${Ce(t)}
    <div class="mobile-sidebar-overlay" id="sidebarOverlay" aria-hidden="true"></div>
    ${we(t)}
    <main class="dash-content" id="dashMain" role="main" aria-label="Konten utama SIAKAD">
      ${n(t)}
      <footer class="dash-iso-footer" role="contentinfo" aria-label="Sertifikasi ISO">
        <span class="dash-iso-badge">${F.shield} ISO 27001 — Security</span>
        <span class="dash-iso-badge">${F.checkCircle} ISO 9241 — Usability</span>
        <span class="dash-iso-badge">${F.checkCircle} ISO 40500 — Accessibility</span>
      </footer>
    </main>
  </div>`,t.role===`bap`&&!window.snap&&!document.getElementById(`midtrans-snap-script`)){let e=document.createElement(`script`);e.id=`midtrans-snap-script`,e.src=`https://app.sandbox.midtrans.com/snap/snap.js`,e.setAttribute(`data-client-key`,`Mid-client-mGA7v04cXrux3KNF`),document.head.appendChild(e)}let r=document.getElementById(`dashHamburger`),i=document.getElementById(`dashSidebar`),a=document.getElementById(`sidebarOverlay`);r?.addEventListener(`click`,()=>{let e=i?.classList.toggle(`open`);a?.classList.toggle(`open`),r.setAttribute(`aria-expanded`,e?`true`:`false`)}),a?.addEventListener(`click`,()=>{i?.classList.remove(`open`),a?.classList.remove(`open`)}),document.querySelectorAll(`.sidebar-link[data-page]`).forEach(e=>{e.addEventListener(`click`,async o=>{o.preventDefault(),document.querySelectorAll(`.sidebar-link`).forEach(e=>{e.classList.remove(`active`),e.removeAttribute(`aria-current`)}),e.classList.add(`active`),e.setAttribute(`aria-current`,`page`),i?.classList.remove(`open`),a?.classList.remove(`open`),r?.setAttribute(`aria-expanded`,`false`);let s=e.dataset.page,c=document.getElementById(`dashMain`),l=`<footer class="dash-iso-footer" role="contentinfo" aria-label="Sertifikasi ISO">
            <span class="dash-iso-badge">${F.shield} ISO 27001 — Security</span>
            <span class="dash-iso-badge">${F.checkCircle} ISO 9241 — Usability</span>
            <span class="dash-iso-badge">${F.checkCircle} ISO 40500 — Accessibility</span>
          </footer>`;if(c&&s===`pmb`&&t.role===`bap`)c.innerHTML=wt()+l,Tt();else if(c&&s===`mahasiswa`&&t.role===`bap`)c.innerHTML=Ht()+l,Ut();else if(c&&s===`kurikulum`&&(t.role===`bap`||t.role===`kaprodi`))c.innerHTML=Zt()+l,$t();else if(c&&s===`dosen`&&(t.role===`bap`||t.role===`kaprodi`))c.innerHTML=tn()+l,nn(c,l);else if(c&&s===`home`)c.innerHTML=n(t)+l;else if(c&&s===`krs`&&t.role===`mahasiswa`)c.innerHTML=Ee(t)+l;else if(c&&s===`khs`&&t.role===`mahasiswa`)c.innerHTML=De(t)+l,Oe(t,c,l);else if(c&&s===`jadwal`&&t.role===`mahasiswa`)await ye(),c.innerHTML=ke(t)+l;else if(c&&s===`absensi`&&t.role===`mahasiswa`)c.innerHTML=Ae(t)+l;else if(c&&s===`nilai`&&t.role===`mahasiswa`)c.innerHTML=Me(t)+l;else if(c&&s===`evaluasi`&&t.role===`mahasiswa`)c.innerHTML=je(t)+l;else if(c&&s===`perkembangan`&&t.role===`mahasiswa`)c.innerHTML=Ne(t)+l;else if(c&&s===`jadwal-dosen`&&t.role===`dosen`)c.innerHTML=Ie(t)+l,Re();else if(c&&s===`mhs-dosen`&&t.role===`dosen`)c.innerHTML=ze(t)+l;else if(c&&s===`input-nilai`&&t.role===`dosen`)c.innerHTML=Be(t)+l,Ve();else if(c&&s===`rekap-nilai`&&t.role===`dosen`)c.innerHTML=He(t)+l;else if(c&&s===`absensi-dosen`&&t.role===`dosen`)c.innerHTML=Ue(t)+l,Ge();else if(c&&s===`bimbingan`&&t.role===`dosen`)c.innerHTML=Je(t)+l;else if(c&&s===`profil-dosen`&&t.role===`dosen`)c.innerHTML=Fe(t)+l;else if(c&&s===`statistik`&&t.role===`bap`)c.innerHTML=nt()+l;else if(c&&s===`transkrip`&&t.role===`bap`)c.innerHTML=rt()+l;else if(c&&s===`validasi-krs`&&t.role===`bap`)c.innerHTML=it()+l;else if(c&&s===`rekap-absensi`&&t.role===`bap`)c.innerHTML=ot()+l;else if(c&&s===`surat`&&t.role===`bap`)c.innerHTML=st()+l;else if(c&&s===`kalender`&&t.role===`bap`)c.innerHTML=ct()+l;else if(c&&s===`wisuda`&&t.role===`bap`)c.innerHTML=lt()+l;else if(c&&s===`bimbingan-pa`&&t.role===`bap`)c.innerHTML=St()+l,Ct();else if(c&&s===`setting-pmb`&&t.role===`bap`)c.innerHTML=bt()+l,xt();else if(c&&s===`jadwal-manage`&&t.role===`bap`)await ye(),c.innerHTML=$e()+l,tt();else if(c&&s===`data`&&t.role===`mahasiswa`){let e=`/api/profile`,n={...t};try{let r=await fetch(e+`/`+t.nim);if(r.ok){let e=await r.json();n={...t,...e,avatar:e.avatar_url||t.avatar}}}catch{console.log(`Profile API offline, using local data`)}c.innerHTML=Xt(n)+l,(async()=>{let e=document.getElementById(`riwayatKeuanganArea`);if(e)try{let n=await fetch(`/api/pmb/payments/${encodeURIComponent(t.nim)}`);if(!n.ok)throw Error(`API error`);let r=await n.json();if(!r||r.length===0){e.innerHTML=`<div style="text-align:center;padding:20px;color:var(--text-muted);">Belum ada riwayat pembayaran.</div>`;return}let i=e=>`<span style="background:${{paid:`hsl(145 60% 40%)`,pending:`hsl(40 80% 45%)`,expired:`hsl(0 70% 50%)`}[e]||`#888`};color:white;padding:3px 10px;border-radius:20px;font-size:0.75rem;font-weight:600;">${{paid:`✅ Lunas`,pending:`⏳ Pending`,expired:`❌ Expired`}[e]||e}</span>`,a=e=>`Rp `+Number(e).toLocaleString(`id-ID`),o=e=>e?new Date(e).toLocaleDateString(`id-ID`,{day:`numeric`,month:`short`,year:`numeric`}):`-`;e.innerHTML=`
              <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
                  <thead>
                    <tr style="background:hsl(215 20% 96%);text-align:left;">
                      <th style="padding:10px 14px;font-weight:600;">Jenis</th>
                      <th style="padding:10px 14px;font-weight:600;">Jumlah</th>
                      <th style="padding:10px 14px;font-weight:600;">Metode</th>
                      <th style="padding:10px 14px;font-weight:600;">Status</th>
                      <th style="padding:10px 14px;font-weight:600;">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${r.map(e=>`
                      <tr style="border-bottom:1px solid hsl(215 15% 90%);">
                        <td style="padding:10px 14px;">
                          <span style="display:inline-block;padding:2px 8px;border-radius:6px;font-size:0.72rem;font-weight:600;margin-bottom:2px;
                            background:${e.type===`pmb`?`hsl(215 80% 92%)`:`hsl(145 60% 92%)`};
                            color:${e.type===`pmb`?`hsl(215 70% 40%)`:`hsl(145 60% 30%)`};">
                            ${e.type===`pmb`?`📝 PMB`:`📚 Semester`}
                          </span><br>
                          <span style="font-size:0.78rem;color:var(--text-muted);">${e.jenis||e.order_id}</span>
                        </td>
                        <td style="padding:10px 14px;font-weight:600;">${a(e.jumlah)}</td>
                        <td style="padding:10px 14px;">${e.metode_bayar===`online`?`🌐 Online`:e.metode_bayar===`cash`?`💵 Cash`:e.metode_bayar||`-`}</td>
                        <td style="padding:10px 14px;">${i(e.status)}</td>
                        <td style="padding:10px 14px;">${o(e.paid_at||e.created_at)}</td>
                      </tr>
                    `).join(``)}
                  </tbody>
                </table>
              </div>`}catch{e.innerHTML=`<div style="text-align:center;padding:20px;color:var(--text-muted);">Tidak dapat memuat riwayat keuangan.</div>`}})(),document.querySelectorAll(`.profil-tab`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab;document.querySelectorAll(`.profil-tab`).forEach(e=>{e.classList.remove(`active`),e.setAttribute(`aria-selected`,`false`)}),document.querySelectorAll(`.profil-tab-panel`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),e.setAttribute(`aria-selected`,`true`);let n=document.querySelector(`.profil-tab-panel[data-panel="${t}"]`);n&&n.classList.add(`active`)})});let r=document.getElementById(`editProfilToggle`),i=document.getElementById(`editProfilSection`),a=document.getElementById(`cancelEditProfil`);i&&(i.style.cssText=`overflow:hidden;max-height:0;opacity:0;transition:max-height .5s cubic-bezier(.4,0,.2,1),opacity .4s ease,margin .3s ease;margin-bottom:0;`),r?.addEventListener(`click`,()=>{let e=i.dataset.open===`true`;r.style.transform=`scale(0.93)`,setTimeout(()=>{r.style.transform=``},150),e?(i.style.maxHeight=`0`,i.style.opacity=`0`,i.style.marginBottom=`0`,i.dataset.open=`false`,r.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Edit Profil`,r.style.background=`linear-gradient(135deg,rgba(255,255,255,.22),rgba(255,255,255,.08))`):(i.style.display=`block`,i.style.maxHeight=i.scrollHeight+800+`px`,i.style.opacity=`1`,i.style.marginBottom=`16px`,i.dataset.open=`true`,r.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Tutup Form`,r.style.background=`linear-gradient(135deg,rgba(239,68,68,.5),rgba(220,38,38,.3))`,setTimeout(()=>i.scrollIntoView({behavior:`smooth`,block:`start`}),300))}),a?.addEventListener(`click`,()=>{i.style.maxHeight=`0`,i.style.opacity=`0`,i.style.marginBottom=`0`,i.dataset.open=`false`,r.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Edit Profil`,r.style.background=`linear-gradient(135deg,rgba(255,255,255,.22),rgba(255,255,255,.08))`}),document.getElementById(`editProfilForm`)?.addEventListener(`submit`,async r=>{r.preventDefault();let i=r.target.querySelector(`button[type="submit"]`),a=i.textContent;i.textContent=`⏳ Menyimpan...`,i.disabled=!0;let o=new FormData(r.target),s={},u=[`file_ijazah`,`file_ktp`,`file_pasfoto`,`file_rapor`,`file_surat_sehat`],d=new FormData,f=!1;o.forEach((e,t)=>{u.includes(t)?e instanceof File&&e.size>0&&(d.append(t,e),f=!0):s[t]=e});try{let r=await fetch(e+`/`+t.nim,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify(s)}),i=await r.json();if(f)try{await fetch(`/api/profile/`+t.nim+`/documents`,{method:`POST`,body:d})}catch(e){console.log(`File upload note:`,e)}r.ok?(alert(`✅ `+(i.message||`Profil berhasil diperbarui!`)),Object.assign(n,s),f&&u.forEach(e=>{d.has(e)&&(n[e]=`uploaded`)}),sessionStorage.setItem(`user`,JSON.stringify(n)),c.innerHTML=Xt(n)+l):alert(`❌ `+(i.error||`Gagal memperbarui profil`))}catch{Object.assign(n,s),sessionStorage.setItem(`user`,JSON.stringify(n)),alert(`✅ Profil disimpan secara lokal (server offline)`),c.innerHTML=Xt(n)+l}i.textContent=a,i.disabled=!1});let o=document.getElementById(`avatarWrap`),s=document.getElementById(`avatarInput`);o?.addEventListener(`click`,()=>s?.click()),s?.addEventListener(`change`,async r=>{let i=r.target.files[0];if(!i||!i.type.startsWith(`image/`))return;if(i.size>2*1024*1024){alert(`⚠️ Ukuran foto maksimal 2MB`);return}let a=document.getElementById(`avatarCircle`),o=a?.style.background,s=new FileReader;s.onload=e=>{a&&(a.style.background=`url(`+e.target.result+`) center/cover`,a.textContent=``)},s.readAsDataURL(i);try{let r=new FormData;r.append(`avatar`,i);let s=await fetch(e+`/`+t.nim+`/avatar`,{method:`POST`,body:r}),c=await s.json();if(s.ok){n.avatar=c.avatar_url,n.avatar_url=c.avatar_url,sessionStorage.setItem(`user`,JSON.stringify(n));let e=document.querySelector(`.sidebar-avatar`);e&&(e.style.background=`url(`+c.avatar_url+`) center/cover`,e.textContent=``),alert(`✅ Foto profil berhasil diperbarui!`)}else alert(`❌ `+(c.error||`Gagal upload foto`)),a&&(a.style.background=o)}catch{alert(`✅ Foto disimpan secara lokal (server offline)`)}});let u=document.getElementById(`profilForm`),d=u?.querySelector(`button`);d&&(d.removeAttribute(`onclick`),d.addEventListener(`click`,async()=>{let n=document.getElementById(`profOldPw`)?.value,r=document.getElementById(`profNewPw`)?.value,i=document.getElementById(`profConfPw`)?.value;if(!n||!r||!i){alert(`⚠️ Semua field password harus diisi`);return}if(r.length<8){alert(`⚠️ Password baru minimal 8 karakter`);return}if(r!==i){alert(`⚠️ Konfirmasi password tidak cocok`);return}d.textContent=`⏳ Memproses...`,d.disabled=!0;try{let a=await fetch(e+`/`+t.nim+`/password`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({old_password:n,new_password:r,confirm_password:i})}),o=await a.json();a.ok?(alert(`✅ `+(o.message||`Password berhasil diubah!`)),u.reset()):alert(`❌ `+(o.error||`Gagal mengubah password`))}catch{alert(`⚠️ Server offline, tidak bisa mengubah password`)}d.textContent=`🔐 Ubah Password`,d.disabled=!1}))}else c&&s===`settings`&&(c.innerHTML=`
          <div style="padding:24px;max-width:640px;">
            <h2 style="font-size:1.2rem;font-weight:700;margin:0 0 4px;">⚙️ Pengaturan Akun</h2>
            <p style="color:var(--text-muted);font-size:0.82rem;margin:0 0 24px;">Kelola keamanan akun Anda</p>

            <div class="profil-section" role="region" aria-labelledby="secPwd" style="background:white;border-radius:16px;border:1px solid var(--gray-100);overflow:hidden;">
              <div class="profil-section-header"><h3 class="profil-section-title" id="secPwd"><span class="pst-icon" style="background:hsl(45 90% 92%);color:hsl(35 80% 45%);">🔐</span> Ubah Sandi</h3></div>
              <div style="padding:20px;">
                <form id="settingsPwForm" autocomplete="off" aria-label="Form ubah sandi" style="max-width:400px;">
                  <div style="margin-bottom:14px;">
                    <label for="setPwOld" style="font-size:0.75rem;font-weight:600;display:block;margin-bottom:4px;color:var(--text-secondary);">Password Lama</label>
                    <div style="position:relative;">
                      <input type="password" id="setPwOld" required autocomplete="current-password" placeholder="••••••••" style="width:100%;padding:10px 40px 10px 12px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.85rem;box-sizing:border-box;transition:border-color .2s;">
                      <button type="button" class="toggle-pw-btn" data-target="setPwOld" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:1rem;color:var(--text-muted);">👁️</button>
                    </div>
                  </div>
                  <div style="margin-bottom:14px;">
                    <label for="setPwNew" style="font-size:0.75rem;font-weight:600;display:block;margin-bottom:4px;color:var(--text-secondary);">Password Baru</label>
                    <div style="position:relative;">
                      <input type="password" id="setPwNew" required autocomplete="new-password" placeholder="Minimal 8 karakter" minlength="8" style="width:100%;padding:10px 40px 10px 12px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.85rem;box-sizing:border-box;transition:border-color .2s;">
                      <button type="button" class="toggle-pw-btn" data-target="setPwNew" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:1rem;color:var(--text-muted);">👁️</button>
                    </div>
                    <div id="pwStrength" style="margin-top:6px;font-size:0.7rem;color:var(--text-muted);"></div>
                  </div>
                  <div style="margin-bottom:18px;">
                    <label for="setPwConf" style="font-size:0.75rem;font-weight:600;display:block;margin-bottom:4px;color:var(--text-secondary);">Konfirmasi Password Baru</label>
                    <div style="position:relative;">
                      <input type="password" id="setPwConf" required autocomplete="new-password" placeholder="Ulangi password baru" style="width:100%;padding:10px 40px 10px 12px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.85rem;box-sizing:border-box;transition:border-color .2s;">
                      <button type="button" class="toggle-pw-btn" data-target="setPwConf" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:1rem;color:var(--text-muted);">👁️</button>
                    </div>
                    <div id="pwMatch" style="margin-top:6px;font-size:0.7rem;"></div>
                  </div>
                  <button type="submit" id="submitPwChange" style="padding:10px 24px;border:none;background:var(--primary-500);color:white;border-radius:8px;font-size:0.85rem;font-weight:600;cursor:pointer;transition:opacity .2s;">🔑 Simpan Sandi Baru</button>
                </form>
              </div>
            </div>
          </div>`+l,document.querySelectorAll(`.toggle-pw-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=document.getElementById(e.dataset.target);if(t){let n=t.type===`password`;t.type=n?`text`:`password`,e.textContent=n?`🙈`:`👁️`}})}),document.getElementById(`setPwNew`)?.addEventListener(`input`,e=>{let t=e.target.value,n=document.getElementById(`pwStrength`);if(!n)return;let r=0;t.length>=8&&r++,/[A-Z]/.test(t)&&r++,/[0-9]/.test(t)&&r++,/[^A-Za-z0-9]/.test(t)&&r++;let i=[``,`🔴 Lemah`,`🟠 Sedang`,`🟡 Baik`,`🟢 Kuat`],a=[``,`hsl(0 70% 50%)`,`hsl(30 80% 50%)`,`hsl(50 80% 45%)`,`hsl(145 60% 40%)`];n.textContent=t.length>0?i[r]:``,n.style.color=a[r]||``}),document.getElementById(`setPwConf`)?.addEventListener(`input`,e=>{let t=document.getElementById(`pwMatch`);if(!t)return;let n=document.getElementById(`setPwNew`)?.value||``;if(!e.target.value){t.textContent=``;return}t.textContent=n===e.target.value?`✅ Password cocok`:`❌ Tidak cocok`,t.style.color=n===e.target.value?`hsl(145 60% 40%)`:`hsl(0 70% 50%)`}),document.getElementById(`settingsPwForm`)?.addEventListener(`submit`,async e=>{e.preventDefault();let n=document.getElementById(`setPwOld`)?.value,r=document.getElementById(`setPwNew`)?.value,i=document.getElementById(`setPwConf`)?.value;if(!n||!r||!i){alert(`⚠️ Semua field harus diisi`);return}if(r.length<8){alert(`⚠️ Password baru minimal 8 karakter`);return}if(r!==i){alert(`⚠️ Konfirmasi password tidak cocok`);return}let a=document.getElementById(`submitPwChange`);a.textContent=`⏳ Memproses...`,a.disabled=!0;try{let e=t.nim||t.nip||`admin`,a=await fetch(`/api/profile/`+e+`/password`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({old_password:n,new_password:r,confirm_password:i})}),o=await a.json();a.ok?(alert(`✅ `+(o.message||`Password berhasil diubah!`)),document.getElementById(`settingsPwForm`)?.reset(),document.getElementById(`pwStrength`).textContent=``,document.getElementById(`pwMatch`).textContent=``):alert(`❌ `+(o.error||`Gagal mengubah password`))}catch{alert(`⚠️ Server offline — tidak bisa mengubah password saat ini`)}a.textContent=`🔑 Simpan Sandi Baru`,a.disabled=!1}))})}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&i?.classList.contains(`open`)&&(i.classList.remove(`open`),a?.classList.remove(`open`),r?.setAttribute(`aria-expanded`,`false`),r?.focus())}),document.getElementById(`logoutBtn`)?.addEventListener(`click`,()=>Kn())}var G={logOut:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,lock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,camera:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,building:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,graduationCap:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`,mapPin:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,phone:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,megaphone:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,compass:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,arrowRight:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,shield:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,menu:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,clock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`};function on(){let e=new Date().getHours();return e<12?`Selamat Pagi`:e<15?`Selamat Siang`:e<18?`Selamat Sore`:`Selamat Malam`}function sn(){let e=[`Minggu`,`Senin`,`Selasa`,`Rabu`,`Kamis`,`Jumat`,`Sabtu`],t=[`Januari`,`Februari`,`Maret`,`April`,`Mei`,`Juni`,`Juli`,`Agustus`,`September`,`Oktober`,`November`,`Desember`],n=new Date;return`${e[n.getDay()]}, ${n.getDate()} ${t[n.getMonth()]} ${n.getFullYear()}`}function cn(){return new Date().toLocaleTimeString(`id-ID`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`,hour12:!1})}function ln(e){let t=[];return e.role===`mahasiswa`?(t.push({icon:`blue`,svg:G.building,text:s.fullName}),t.push({icon:`green`,svg:G.graduationCap,text:`${e.prodi} — Semester ${e.semester}`}),t.push({icon:`gold`,svg:G.mapPin,text:`Probolinggo, Jawa Timur`}),t.push({icon:`purple`,svg:G.phone,text:s.phone})):e.role===`dosen`?(t.push({icon:`blue`,svg:G.building,text:s.fullName}),t.push({icon:`green`,svg:G.graduationCap,text:`${e.prodi} — ${e.jabatan}`}),t.push({icon:`gold`,svg:G.mapPin,text:`NIP: `+e.nip}),t.push({icon:`purple`,svg:G.phone,text:s.phone})):e.role===`kaprodi`?(t.push({icon:`blue`,svg:G.building,text:s.fullName}),t.push({icon:`green`,svg:G.graduationCap,text:`${e.jabatan} — ${e.prodi}`}),t.push({icon:`gold`,svg:G.mapPin,text:`Probolinggo, Jawa Timur`}),t.push({icon:`purple`,svg:G.phone,text:s.phone})):(t.push({icon:`blue`,svg:G.building,text:s.fullName}),t.push({icon:`green`,svg:G.graduationCap,text:e.jabatan}),t.push({icon:`gold`,svg:G.mapPin,text:`Probolinggo, Jawa Timur`}),t.push({icon:`purple`,svg:G.phone,text:s.phone})),t}function un(e){return e.role===`mahasiswa`?[{value:e.ipk,label:`Indeks Prestasi Kumulatif`},{value:e.totalSks,label:`SKS Lulus`}]:e.role===`dosen`?[{value:e.totalMK,label:`Mata Kuliah`},{value:e.totalMahasiswa,label:`Mahasiswa`}]:e.role===`kaprodi`?[{value:e.totalMahasiswa,label:`Mahasiswa Aktif`},{value:e.totalDosen,label:`Dosen Tetap`}]:[{value:`1.250`,label:`Total Mahasiswa`},{value:`4`,label:`Program Studi`}]}function dn(e){let t=Gn();if(!t){window.location.hash=`#/login`;return}let n=t.nim||t.nip||t.id,r=ln(t),i=un(t);e.innerHTML=`
  <div class="portal" role="main" aria-label="Portal STIA Bayuangga">
    <!-- Mobile Toggle -->
    <button class="portal-mobile-toggle" id="portalMobileToggle" aria-label="Buka menu profil">${G.menu}</button>
    <div class="portal-mobile-overlay" id="portalMobileOverlay"></div>

    <!-- LEFT SIDEBAR -->
    <aside class="portal-sidebar" id="portalSidebar" aria-label="Profil pengguna">
      <div class="portal-sidebar-header">
        <div class="logo-row">
          <img src="/assets/images/logo.png" alt="Logo STIA Bayuangga">
          <span class="logo-name">STIA BAYUANGGA</span>
        </div>
        <button class="logout-btn" onclick="document.getElementById('portalLogoutBtn').click()" title="Keluar" aria-label="Keluar">
          ${G.logOut}
        </button>
      </div>

      <div class="portal-avatar-section">
        <div class="portal-avatar" role="img" aria-label="Avatar ${t.nama}">
          ${S(t.nama)}
        </div>
        <div class="portal-name">${t.nama}</div>
        <div class="portal-id">${n}</div>
        <div class="portal-actions">
          <a href="#" class="portal-action-btn" aria-label="Ganti Password">
            ${G.lock} Ganti Password
          </a>
          <a href="#" class="portal-action-btn gold" aria-label="Ganti Avatar">
            ${G.camera} Ganti Avatar
          </a>
        </div>
      </div>

      <div class="portal-info" role="list" aria-label="Informasi pengguna">
        ${r.map(e=>`
          <div class="portal-info-item" role="listitem">
            <div class="portal-info-icon ${e.icon}">${e.svg}</div>
            <span class="portal-info-text">${e.text}</span>
          </div>
        `).join(``)}
      </div>

      <nav class="portal-menu" aria-label="Menu portal">
        <a class="portal-menu-item" href="#" data-coming-soon="Pengumuman">
          ${G.megaphone} Pengumuman
          <span class="portal-menu-badge" aria-label="17 pengumuman baru">17</span>
        </a>
        <a class="portal-menu-item" href="#" data-coming-soon="Panduan">
          ${G.compass} Panduan
        </a>
      </nav>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="portal-main">
      <!-- Welcome Card -->
      <div class="portal-welcome">
        <div class="portal-welcome-text">
          <h2>${on()}, ${t.nama.split(` `)[0]}</h2>
          <p>${sn()} &nbsp;•&nbsp; <span class="portal-clock-icon">${G.clock}</span> <span id="portalClock">${cn()}</span></p>
          <div class="portal-welcome-stats">
            ${i.map(e=>`
              <div class="portal-welcome-stat">
                <strong>${e.value}</strong>
                <span>${e.label}</span>
              </div>
            `).join(``)}
          </div>
        </div>
        <img class="portal-welcome-img" src="/assets/images/${t.gender===`Laki-laki`?`portal-welcome-male`:`portal-welcome`}.png" alt="Welcome illustration" loading="lazy">
      </div>

      <!-- Ticker -->
      <div class="portal-ticker" role="marquee" aria-label="Pengumuman terbaru">
        <span class="portal-ticker-label">INFO</span>
        <div class="portal-ticker-scroll">
          <span class="portal-ticker-content">
            🔔 Waspada Penipuan!&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;📚 Kesempatan Kuliah Beasiswa di China!&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;💻 Webinar Softskill&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;⚠️ Kendala E-Learning?&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;📖 Batas Pengisian KRS 31 Maret 2026
          </span>
        </div>
      </div>

      <!-- SSO Section -->
      <h2 class="portal-section-title">Website Single Sign On</h2>
      <div class="portal-sso-grid" role="list" aria-label="Layanan utama">
        <a class="portal-sso-card" href="#/dashboard" role="listitem" aria-label="SIAKAD — Sistem Informasi Akademik">
          <div class="portal-sso-thumb">
            <img src="/assets/images/portal-siakad.png" alt="SIAKAD Illustration" loading="lazy">
          </div>
          <div class="portal-sso-body">
            <div>
              <h3>SiAkad</h3>
              <p>Sistem Informasi Akademik</p>
            </div>
            <div class="portal-sso-arrow">${G.arrowRight}</div>
          </div>
        </a>
        <a class="portal-sso-card" href="#/elearning" role="listitem" aria-label="E-Learning — Sistem Pembelajaran Online">
          <div class="portal-sso-thumb">
            <img src="/assets/images/portal-elearning.png" alt="E-Learning Illustration" loading="lazy">
          </div>
          <div class="portal-sso-body">
            <div>
              <h3>E-Learning</h3>
              <p>Sistem Pembelajaran Online</p>
            </div>
            <div class="portal-sso-arrow">${G.arrowRight}</div>
          </div>
        </a>
      </div>

      <!-- Additional Services -->
      <h2 class="portal-section-title">Website-website</h2>
      <div class="portal-services-grid" role="list" aria-label="Layanan tambahan">
        <a class="portal-service-card" href="#" role="listitem" data-coming-soon="Perpustakaan">
          <div class="portal-service-icon">
            <img src="/assets/images/portal-library.png" alt="">
          </div>
          <h4>Perpustakaan</h4>
          <p>Digital Library</p>
        </a>
        <a class="portal-service-card" href="#" role="listitem" data-coming-soon="Portal Ortu">
          <div class="portal-service-icon" style="background:hsl(215 60% 95%);border-radius:14px;">
            ${G.building}
          </div>
          <h4>Portal Ortu</h4>
          <p>Monitoring Akademik</p>
        </a>
        <a class="portal-service-card" href="#" role="listitem" data-coming-soon="Konseling">
          <div class="portal-service-icon" style="background:hsl(42 80% 92%);border-radius:14px;">
            ${G.megaphone}
          </div>
          <h4>Konseling</h4>
          <p>Bimbingan Mahasiswa</p>
        </a>
        <a class="portal-service-card" href="#" role="listitem" data-coming-soon="Tracer Study">
          <div class="portal-service-icon" style="background:hsl(150 50% 92%);border-radius:14px;">
            ${G.graduationCap}
          </div>
          <h4>Tracer Study</h4>
          <p>Alumni & Karir</p>
        </a>
      </div>

      <!-- ISO Badges -->
      <div class="portal-iso-bar" role="contentinfo" aria-label="Sertifikasi ISO">
        <span class="portal-iso-badge">${G.shield} ISO 27001 — Security</span>
        <span class="portal-iso-badge">${G.check} ISO 9241 — Usability</span>
        <span class="portal-iso-badge">${G.check} ISO 40500 — Accessibility</span>
      </div>
    </main>

    <!-- Hidden logout button -->
    <button id="portalLogoutBtn" style="display:none;"></button>
  </div>`,document.getElementById(`portalLogoutBtn`)?.addEventListener(`click`,()=>Kn());let a=document.getElementById(`portalMobileToggle`),o=document.getElementById(`portalSidebar`),s=document.getElementById(`portalMobileOverlay`);a?.addEventListener(`click`,()=>{o?.classList.toggle(`open`),s?.classList.toggle(`open`)}),s?.addEventListener(`click`,()=>{o?.classList.remove(`open`),s?.classList.remove(`open`)});let c=document.getElementById(`portalClock`);if(c){let e=setInterval(()=>{if(!document.getElementById(`portalClock`)){clearInterval(e);return}c.textContent=cn()},1e3)}document.querySelectorAll(`[data-coming-soon]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),fn(e.getAttribute(`data-coming-soon`))})})}function fn(e){document.querySelector(`.coming-soon-toast`)?.remove();let t=document.createElement(`div`);t.className=`coming-soon-toast`,t.innerHTML=`
    <div class="coming-soon-toast-icon">🚀</div>
    <div class="coming-soon-toast-text">
      <strong>${e}</strong>
      <span>Coming Soon — Fitur ini sedang dalam pengembangan</span>
    </div>
  `,document.body.appendChild(t),requestAnimationFrame(()=>{t.classList.add(`show`)}),setTimeout(()=>{t.classList.remove(`show`),setTimeout(()=>t.remove(),400)},3e3)}var K={home:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,book:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,monitor:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,clipboard:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,users:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,fileText:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,messageSquare:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,checkCircle:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,play:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,settings:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,logOut:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,bell:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,search:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,menu:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,clock:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,upload:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>`,video:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,shield:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`},pn={mahasiswa:[{label:`E-Learning`,items:[{icon:K.home,text:`Dashboard`,id:`home`,active:!0}]}],dosen:[{label:`E-Learning`,items:[{icon:K.home,text:`Dashboard`,id:`home`,active:!0},{icon:K.monitor,text:`Kelas Ajar`,id:`kelas`}]}],kaprodi:[{label:`E-Learning`,items:[{icon:K.home,text:`Dashboard`,id:`home`,active:!0},{icon:K.monitor,text:`Semua Kelas`,id:`kelas`},{icon:K.users,text:`Aktivitas Dosen`,id:`dosen-activity`},{icon:K.checkCircle,text:`Laporan E-Learning`,id:`laporan`}]}],bap:[{label:`E-Learning`,items:[{icon:K.home,text:`Dashboard`,id:`home`,active:!0},{icon:K.monitor,text:`Monitoring Kelas`,id:`monitoring`},{icon:K.users,text:`Rekap Penggunaan`,id:`rekap`}]}]},mn={mahasiswa:`Mahasiswa`,dosen:`Dosen`,kaprodi:`Kaprodi`,bap:`BAP`};function hn(){let e=new Date().getHours();return e<12?`Selamat Pagi`:e<15?`Selamat Siang`:e<18?`Selamat Sore`:`Selamat Malam`}function gn(e){let t=pn[e.role]||pn.mahasiswa;return`
  <aside class="dash-sidebar elearning-sidebar" id="dashSidebar" role="navigation" aria-label="Menu navigasi E-Learning">
    <a href="#/portal" class="sidebar-brand" aria-label="Kembali ke Portal STIA Bayuangga">
      <img src="/assets/images/logo.png" alt="Logo STIA Bayuangga" class="sidebar-brand-logo">
      <div>
        <div class="sidebar-brand-name">E-LEARNING</div>
        <div class="sidebar-brand-sub">STIA Bayuangga</div>
      </div>
    </a>
    <div class="sidebar-user" role="status" aria-label="Informasi pengguna aktif">
      <div class="sidebar-avatar" role="img" aria-label="Avatar ${e.nama}">${S(e.nama)}</div>
      <div>
        <div class="sidebar-user-name">${e.nama}</div>
        <div class="sidebar-user-role">${mn[e.role]}${e.nim?` — `+e.nim:``}</div>
      </div>
    </div>
    ${t.map(e=>`
      <span class="sidebar-label" id="el-nav-${e.label.toLowerCase().replace(/[^a-z]/g,``)}">${e.label}</span>
      <nav class="sidebar-nav" aria-labelledby="el-nav-${e.label.toLowerCase().replace(/[^a-z]/g,``)}">
        ${e.items.map(e=>`
          <a class="sidebar-link${e.active?` active`:``}" href="#" data-page="${e.id}"
             aria-label="${e.text}${e.badge?` (${e.badge} baru)`:``}"
             ${e.active?`aria-current="page"`:``}
             role="menuitem" tabindex="0">
            ${e.icon}<span>${e.text}</span>
            ${e.badge?`<span class="sidebar-badge" aria-hidden="true">${e.badge}</span>`:``}
          </a>
        `).join(``)}
      </nav>
    `).join(``)}
    <div class="sidebar-footer">
      <nav class="sidebar-nav" aria-label="Menu sekunder">
        <a class="sidebar-link" href="#/portal" aria-label="Kembali ke Portal">${K.home}<span>Kembali Portal</span></a>
        <a class="sidebar-link" href="#" data-page="settings" aria-label="Pengaturan" role="menuitem" tabindex="0">${K.settings}<span>Pengaturan</span></a>
        <button class="sidebar-link" id="logoutBtn" aria-label="Keluar dari sistem">${K.logOut}<span>Keluar</span></button>
      </nav>
    </div>
  </aside>`}function _n(e){return`
  <header class="dash-topbar" role="banner" aria-label="Header E-Learning">
    <div class="dash-topbar-left">
      <button class="dash-hamburger" id="dashHamburger" aria-label="Buka/tutup menu navigasi" aria-expanded="false" aria-controls="dashSidebar">${K.menu}</button>
      <div>
        <h1>${hn()}, ${e.nama.split(` `)[0]}!</h1>
        <p>E-Learning — Semester Genap 2025/2026</p>
      </div>
    </div>
    <div class="dash-topbar-right">
      <button class="topbar-icon-btn" aria-label="Cari">${K.search}</button>
      <button class="topbar-icon-btn" aria-label="Notifikasi">${K.bell}<span class="notif-dot" aria-hidden="true"></span></button>
    </div>
  </header>`}function vn(e){let t=x.filter(e=>e.status===`Belum`);x.filter(e=>e.status===`Sudah`);let n=Math.round(b.reduce((e,t)=>e+t.progress,0)/b.length),r=b.reduce((e,t)=>e+t.sks,0),i=new Date().toLocaleDateString(`id-ID`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`}),a=[`🏛️`,`📊`,`🏢`,`⚖️`,`👥`,`💻`,`📜`],o=e&&e.nim||`2024001`,s={};b.forEach(e=>{let t=q[e.id]||{tugas:[],uts:[],uas:[],quiz:[]},n=[];(t.quiz||[]).forEach(e=>{e.status===`Selesai`&&e.nilai!==null&&n.push(e.nilai)}),(t.tugas||[]).forEach(e=>{let t=(J[e.judul]||[]).find(e=>e.nim===o);t&&t.nilai!==null&&t.nilai!==void 0&&n.push(t.nilai)}),(t.uts||[]).forEach(e=>{if(e.mode===`upload`){let t=(J[e.judul]||[]).find(e=>e.nim===o);t&&t.nilai!=null&&n.push(t.nilai)}else e.status===`Selesai`&&e.nilai!=null&&n.push(e.nilai)}),(t.uas||[]).forEach(e=>{if(e.mode===`upload`){let t=(J[e.judul]||[]).find(e=>e.nim===o);t&&t.nilai!=null&&n.push(t.nilai)}else e.status===`Selesai`&&e.nilai!=null&&n.push(e.nilai)}),s[e.id]=n.length?Math.round(n.reduce((e,t)=>e+t,0)/n.length):null});let c=Object.values(s).filter(e=>e!==null),l=c.length?Math.round(c.reduce((e,t)=>e+t,0)/c.length):`—`,u=typeof l==`number`?l>=80?`#10b981`:l>=60?`#3b82f6`:`#ef4444`:`#94a3b8`;return`
    <!-- Hero Welcome Banner -->
    <div class="el-welcome-banner">
      <div class="el-wb-particles">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
      <div class="el-welcome-text">
        <span class="el-welcome-date">${K.clock} ${i}</span>
        <h2>${hn()}, ${(e.nama||e.name||`Mahasiswa`).split(` `)[0]}! 👋</h2>
        <p>Kamu punya <strong>${t.length} tugas</strong> yang perlu dikerjakan dan <strong>${b.length} kelas aktif</strong> (${r} SKS) semester ini.</p>
      </div>
      <div class="el-welcome-stats">
        <div class="el-mini-ring">
          <svg viewBox="0 0 36 36"><path class="el-ring-bg" d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831 15.9155 15.9155 0 0 1 0-31.831"/>
          <path class="el-ring-fill" stroke-dasharray="${n}, 100" d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831 15.9155 15.9155 0 0 1 0-31.831"/></svg>
          <span class="el-ring-text">${n}%</span>
        </div>
        <span class="el-ring-label">Progress Keseluruhan</span>
      </div>
    </div>

    <!-- Stat Cards -->
    <div class="el-stat-row" style="grid-template-columns: repeat(2, 1fr);">
      <div class="el-stat-card el-stat-blue">
        <div class="el-stat-card-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div class="el-stat-card-info">
          <span class="el-stat-card-num">${b.length}</span>
          <span class="el-stat-card-label">Kelas Aktif</span>
        </div>
        <div class="el-stat-card-badge">Semester Ini</div>
      </div>
      <div class="el-stat-card el-stat-purple">
        <div class="el-stat-card-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        </div>
        <div class="el-stat-card-info">
          <span class="el-stat-card-num">${r}</span>
          <span class="el-stat-card-label">Total SKS</span>
        </div>
        <div class="el-stat-card-badge">📚 Beban</div>
      </div>
    </div>

    <!-- Kelas Saya -->
    <div class="el-section-title"><h3>📚 Kelas Saya</h3>
      <button id="toggleNilaiView" style="display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;border:1.5px solid ${u};background:${u}10;color:${u};font-size:0.72rem;font-weight:600;cursor:pointer;transition:all .2s;">
        📊 Lihat Semua Nilai <span style="background:${u};color:#fff;padding:1px 7px;border-radius:10px;font-size:0.62rem;">${l}</span>
      </button>
    </div>
    <div class="el-kelas-list" aria-label="Daftar kelas" style="margin-bottom:16px;">
      ${b.map((e,t)=>{let n=[`linear-gradient(135deg,#1e3a5f,#2563eb)`,`linear-gradient(135deg,#065f46,#10b981)`,`linear-gradient(135deg,#92400e,#f59e0b)`,`linear-gradient(135deg,#5b21b6,#8b5cf6)`,`linear-gradient(135deg,#9d174d,#ec4899)`,`linear-gradient(135deg,#0e7490,#06b6d4)`,`linear-gradient(135deg,#7c2d12,#ea580c)`],r=n[t%n.length],i=e.progress>70?`#10b981`:e.progress>50?`#3b82f6`:`#f59e0b`,o=a[t%a.length],c=s[e.id],l=c===null?`#94a3b8`:c>=80?`#10b981`:c>=60?`#3b82f6`:`#ef4444`,u=c===null?`—`:c;return`
        <div class="el-kelas-card" tabindex="0" role="article" aria-label="${e.nama}">
          <div class="el-kelas-banner" style="background:${r}">
            <div class="el-kelas-banner-content">
              <span class="el-kelas-badge">${e.kode}</span>
              <h3 class="el-kelas-banner-title">${e.nama}</h3>
              <p class="el-kelas-banner-sub">${e.dosen} · ${e.sks} SKS · ${e.semester}</p>
            </div>
            <div class="el-kelas-banner-icon">${o}</div>
          </div>
          <div class="el-kelas-body">
            <div class="el-kelas-info-row">
              <div class="el-kelas-info-item">
                ${K.clock} <span>${e.jadwal}</span>
              </div>
              <div class="el-kelas-info-item">
                ${K.book} <span>${e.materiSelesai}/${e.totalMateri} materi</span>
              </div>
            </div>
            <div class="el-kelas-progress-section">
              <div class="el-kelas-progress-header">
                <span>Progress</span>
                <span style="color:${i};font-weight:700">${e.progress}%</span>
              </div>
              <div class="progress-wrap"><div class="progress-bar" style="width:${e.progress}%;background:${i}"></div></div>
            </div>
            <div style="display:flex;gap:6px;">
              <button class="el-kelas-enter enter-course-btn" data-class-id="${e.id}" aria-label="Masuk kelas ${e.nama}" style="flex:1;">
                Masuk Kelas →
              </button>
              <button class="el-kelas-nilai-btn" data-class-id="${e.id}" style="flex-shrink:0;padding:8px 12px;border:none;border-radius:8px;background:${l}15;color:${l};font-size:0.7rem;font-weight:700;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:4px;" aria-label="Lihat nilai ${e.nama}">
                📊 <span>${u}</span>
              </button>
            </div>
          </div>
        </div>`}).join(``)}
    </div>

    <!-- Two column grid -->
    <div class="dash-grid">
      <div>
        <div class="el-section-title"><h3>📋 Tugas Mendatang</h3></div>
        <div class="dash-card el-card-modern">
          <div class="dash-card-body">
            ${x.map(e=>{let t=C(e.deadline);return`<div class="el-task-row">
                <div class="el-task-icon-wrap">${e.status===`Sudah`?`✅`:t.class===`danger`?`🔴`:`🟡`}</div>
                <div class="el-task-info">
                  <h4>${e.judul}</h4>
                  <p>${e.kelas} · ${e.type}</p>
                </div>
                <div class="el-task-deadline">
                  <span class="badge-sm ${e.status===`Sudah`?`success`:t.class}">${e.status===`Sudah`?`✓ Selesai`:t.text}</span>
                </div>
              </div>`}).join(``)}
          </div>
        </div>
      </div>

      <div>
        <div class="el-section-title"><h3>📚 Materi Terbaru</h3></div>
        <div class="dash-card el-card-modern">
          <div class="dash-card-body">
            <div class="el-task-row"><div class="el-materi-icon-wrap">📄</div><div class="el-task-info"><h4>BAB 5 — Birokrasi & Reformasi</h4><p>Pengantar Ilmu Administrasi · PDF, 2.3 MB</p></div><span class="badge-sm blue">PDF</span></div>
            <div class="el-task-row"><div class="el-materi-icon-wrap">📊</div><div class="el-task-info"><h4>Slide — Analisis Kebijakan</h4><p>Kebijakan Publik · PPT, 5.1 MB</p></div><span class="badge-sm gold">PPT</span></div>
            <div class="el-task-row"><div class="el-materi-icon-wrap">🎬</div><div class="el-task-info"><h4>Video Lecture — Manajemen Kinerja</h4><p>Manajemen SDM · MP4, 45 menit</p></div><span class="badge-sm green">MP4</span></div>
            <div class="el-task-row"><div class="el-materi-icon-wrap">📄</div><div class="el-task-info"><h4>Modul — Metode Penelitian</h4><p>Metode Penelitian · PDF, 3.8 MB</p></div><span class="badge-sm blue">PDF</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Nilai Modal -->
    <div class="el-modal-overlay" id="nilaiSayaModal" style="display:none">
      <div class="el-modal" style="max-width:680px">
        <div class="el-modal-header">
          <h3>📊 Nilai Saya — Semester Genap 2025/2026</h3>
          <button class="el-modal-close" id="closeNilaiModal">✕</button>
        </div>
        <div class="el-modal-form" style="max-height:75vh;overflow-y:auto;" id="nilaiModalContent"></div>
      </div>
    </div>`}function yn(e){return`
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${K.monitor}</div>
        <div class="stat-info"><div class="stat-label">Kelas Ajar</div><div class="stat-value">${e.totalMK}</div><div class="stat-sub">semester ini</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${K.upload}</div>
        <div class="stat-info"><div class="stat-label">Materi Upload</div><div class="stat-value">36</div><div class="stat-sub">file tersedia</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${K.checkCircle}</div>
        <div class="stat-info"><div class="stat-label">Tugas Dinilai</div><div class="stat-value">28</div><div class="stat-sub">dari 45 tugas</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon purple">${K.messageSquare}</div>
        <div class="stat-info"><div class="stat-label">Diskusi Aktif</div><div class="stat-value">14</div><div class="stat-sub">thread baru</div></div>
      </div>
    </div>

    <div class="dash-grid">
      <div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Kelas yang Diampu</h3></div>
          <div class="dash-card-body">
            <div class="course-grid">
              ${b.slice(0,4).map(e=>`
                <div class="course-card">
                  <div class="course-card-code">${e.kode}</div>
                  <h4>${e.nama}</h4>
                  <p>${e.mahasiswa} Mahasiswa</p>
                  <div class="course-card-foot">
                    <span>${e.materiSelesai}/${e.totalMateri} Materi</span>
                    <span class="badge-sm blue">${e.progress}%</span>
                  </div>
                </div>
              `).join(``)}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Tugas Perlu Dinilai</h3></div>
          <div class="dash-card-body">
            ${x.slice(0,4).map(e=>`
              <div class="task-item">
                <span class="task-dot warning"></span>
                <div class="task-body">
                  <h4>${e.judul}</h4>
                  <p>${e.kelas} — ${e.type}</p>
                  <div class="task-meta"><span class="badge-sm warning">Perlu Dinilai</span></div>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Forum Diskusi</h3></div>
          <div class="dash-card-body">
            <div class="task-item"><span class="task-dot info"></span><div class="task-body"><h4>RE: Teori Birokrasi Weber</h4><p>5 balasan baru — Pengantar Ilmu Administrasi</p></div></div>
            <div class="task-item"><span class="task-dot warning"></span><div class="task-body"><h4>Pertanyaan UTS — Kebijakan Publik</h4><p>3 pertanyaan menunggu jawaban</p></div></div>
          </div>
        </div>
      </div>
    </div>`}function bn(e){return`
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${K.monitor}</div>
        <div class="stat-info"><div class="stat-label">Total Kelas</div><div class="stat-value">${b.length*3}</div><div class="stat-sub">semua prodi</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${K.users}</div>
        <div class="stat-info"><div class="stat-label">Mahasiswa Aktif</div><div class="stat-value">890</div><div class="stat-sub">pengguna e-learning</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${K.upload}</div>
        <div class="stat-info"><div class="stat-label">Total Materi</div><div class="stat-value">245</div><div class="stat-sub">file tersedia</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon purple">${K.checkCircle}</div>
        <div class="stat-info"><div class="stat-label">Tugas Aktif</div><div class="stat-value">67</div><div class="stat-sub">semester ini</div></div>
      </div>
    </div>

    <div class="dash-grid">
      <div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Rekap Penggunaan E-Learning</h3></div>
          <div class="dash-card-body">
            <table class="sch-table">
              <thead><tr><th>Prodi</th><th>Kelas</th><th>Materi</th><th>Aktivitas</th></tr></thead>
              <tbody>
                <tr><td class="sch-day">S1 Adm. Publik</td><td>18</td><td>95</td><td>Tinggi</td></tr>
                <tr><td class="sch-day">S1 Adm. Bisnis</td><td>15</td><td>78</td><td>Sedang</td></tr>
                <tr><td class="sch-day">S2 Adm. Publik</td><td>8</td><td>42</td><td>Tinggi</td></tr>
                <tr><td class="sch-day">D3 Ilmu Adm.</td><td>12</td><td>30</td><td>Rendah</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Aktivitas Terbaru</h3></div>
          <div class="dash-card-body">
            <div class="task-item"><span class="task-dot success"></span><div class="task-body"><h4>Materi baru diupload</h4><p>Dr. Bambang — Kebijakan Publik</p></div></div>
            <div class="task-item"><span class="task-dot info"></span><div class="task-body"><h4>Kelas baru dibuat</h4><p>Metode Penelitian — Semester Genap</p></div></div>
            <div class="task-item"><span class="task-dot warning"></span><div class="task-body"><h4>45 tugas belum dinilai</h4><p>Perlu tindak lanjut dosen</p></div></div>
          </div>
        </div>
      </div>
    </div>`}var xn={mahasiswa:vn,dosen:yn,kaprodi:bn,bap:bn},q={};b.forEach(e=>{q[e.id]={materi:[],tugas:[],uts:[],uas:[],forum:[],quiz:[],video:[]}}),q[1].materi=[{judul:`BAB 1 — Konsep Dasar Kebijakan`,tipe:`PDF`,ukuran:`1.8 MB`,tanggal:`5 Feb 2026`,icon:`📄`,pertemuan:1},{judul:`BAB 2 — Siklus Kebijakan Publik`,tipe:`PDF`,ukuran:`2.1 MB`,tanggal:`12 Feb 2026`,icon:`📄`,pertemuan:2},{judul:`Slide — Analisis Stakeholder`,tipe:`PPT`,ukuran:`4.5 MB`,tanggal:`19 Feb 2026`,icon:`📊`,pertemuan:3},{judul:`BAB 3 — Implementasi Kebijakan`,tipe:`PDF`,ukuran:`2.4 MB`,tanggal:`26 Feb 2026`,icon:`📄`,pertemuan:4},{judul:`Studi Kasus — Kebijakan Daerah`,tipe:`PDF`,ukuran:`3.2 MB`,tanggal:`5 Mar 2026`,icon:`📝`,pertemuan:5},{judul:`Video — Evaluasi Kebijakan`,tipe:`MP4`,ukuran:`85 MB`,tanggal:`12 Mar 2026`,icon:`🎬`,pertemuan:6},{judul:`BAB 4 — Kebijakan Transportasi`,tipe:`PDF`,ukuran:`2.8 MB`,tanggal:`19 Mar 2026`,icon:`📄`,pertemuan:7},{judul:`Slide — Kebijakan Lingkungan`,tipe:`PPT`,ukuran:`5.1 MB`,tanggal:`26 Mar 2026`,icon:`📊`,pertemuan:8},{judul:`BAB 5 — Kebijakan Pendidikan`,tipe:`PDF`,ukuran:`3.0 MB`,tanggal:`2 Apr 2026`,icon:`📄`,pertemuan:9},{judul:`Slide — Analisis SWOT Kebijakan`,tipe:`PPT`,ukuran:`4.2 MB`,tanggal:`9 Apr 2026`,icon:`📊`,pertemuan:10},{judul:`BAB 6 — Reformasi Kebijakan`,tipe:`PDF`,ukuran:`2.9 MB`,tanggal:`16 Apr 2026`,icon:`📄`,pertemuan:11},{judul:`Rangkuman Materi UAS`,tipe:`PDF`,ukuran:`5.5 MB`,tanggal:`23 Apr 2026`,icon:`📚`,pertemuan:12}],q[1].tugas=[{judul:`Presentasi Kelompok — Studi Kasus`,type:`Tugas Kelompok`,deadline:`2026-03-15 23:59`,status:`Sudah`,nilai:82,pertemuan:4},{judul:`Analisis Kebijakan Publik Daerah`,type:`Tugas Individu`,deadline:`2026-03-28 23:59`,status:`Sudah`,nilai:88,pertemuan:5},{judul:`Review Paper Kebijakan Transportasi`,type:`Tugas Individu`,deadline:`2026-04-05 23:59`,status:`Belum`,nilai:null,pertemuan:7},{judul:`Makalah Kebijakan Lingkungan`,type:`Tugas Kelompok`,deadline:`2026-04-12 23:59`,status:`Belum`,nilai:null,pertemuan:9},{judul:`Presentasi Akhir — Reformasi Kebijakan`,type:`Tugas Kelompok`,deadline:`2026-04-25 23:59`,status:`Belum`,nilai:null,pertemuan:11}];var J={},Sn={};J[`Presentasi Kelompok — Studi Kasus`]=[{nama:`Ahmad Rizki`,nim:`2024101001`,file:`Presentasi_StudiKasus_Kel1.pdf`,waktu:`14 Mar 2026, 22:45`,nilai:85},{nama:`Siti Nurhaliza`,nim:`2024002`,file:`StudiKasus_Kelompok2.pdf`,waktu:`15 Mar 2026, 10:20`,nilai:80},{nama:`Budi Santoso`,nim:`2024003`,file:`Presentasi_Kel3_Final.pdf`,waktu:`15 Mar 2026, 23:01`,nilai:78},{nama:`Dewi Anggraini`,nim:`2024004`,file:`SK_Kelompok4.pdf`,waktu:`14 Mar 2026, 18:30`,nilai:88}],J[`Analisis Kebijakan Publik Daerah`]=[{nama:`Ahmad Rizki`,nim:`2024101001`,file:`Analisis_KP_AhmadR.pdf`,waktu:`27 Mar 2026, 20:15`,nilai:90},{nama:`Siti Nurhaliza`,nim:`2024002`,file:`KP_Daerah_Siti.pdf`,waktu:`28 Mar 2026, 08:42`,nilai:85},{nama:`Budi Santoso`,nim:`2024003`,file:`Analisis_Budi.pdf`,waktu:`28 Mar 2026, 22:50`,nilai:82},{nama:`Dewi Anggraini`,nim:`2024004`,file:`KBJ_Publik_Dewi.pdf`,waktu:`26 Mar 2026, 15:00`,nilai:92}],J[`Review Paper Kebijakan Transportasi`]=[{nama:`Ahmad Rizki`,nim:`2024101001`,file:`Review_Transport_Ahmad.pdf`,waktu:`4 Apr 2026, 21:30`,nilai:null},{nama:`Siti Nurhaliza`,nim:`2024002`,file:`Paper_Review_Siti.pdf`,waktu:`5 Apr 2026, 11:15`,nilai:null},{nama:`Budi Santoso`,nim:`2024003`,file:null,waktu:null,nilai:null},{nama:`Dewi Anggraini`,nim:`2024004`,file:`Review_Dewi.pdf`,waktu:`3 Apr 2026, 09:45`,nilai:null}],q[1].forum=[{judul:`Sharing Referensi Jurnal`,balasan:4,waktu:`3 hari lalu`,author:`Siti N.`,hot:!1,pertemuan:2,deadline:`2026-02-20`,replies:[{author:`Siti N.`,text:`Ada yang punya jurnal tentang kebijakan transportasi publik?`,waktu:`3 hari lalu`,role:`mahasiswa`},{author:`Dr. Bambang S.`,text:`Coba cari di Google Scholar dengan kata kunci "public transport policy Indonesia". Ada beberapa paper bagus dari UI dan UGM.`,waktu:`3 hari lalu`,role:`dosen`},{author:`Ahmad R.`,text:`Saya punya referensi dari Journal of Public Policy, nanti saya share link-nya.`,waktu:`2 hari lalu`,role:`mahasiswa`},{author:`Siti N.`,text:`Terima kasih Pak dan Ahmad! 🙏`,waktu:`2 hari lalu`,role:`mahasiswa`}]},{judul:`Diskusi: Implementasi Kebijakan di Era Digital`,balasan:8,waktu:`2 jam lalu`,author:`Dr. Bambang S.`,hot:!0,pertemuan:4,deadline:`2026-03-10`,replies:[{author:`Dr. Bambang S.`,text:`Bagaimana menurut kalian dampak digitalisasi terhadap implementasi kebijakan publik di Indonesia? Berikan contoh konkret.`,waktu:`5 jam lalu`,role:`dosen`},{author:`Ahmad R.`,text:`Menurut saya digitalisasi mempercepat distribusi informasi kebijakan ke masyarakat, contohnya aplikasi JAKI di Jakarta.`,waktu:`4 jam lalu`,role:`mahasiswa`},{author:`Siti N.`,text:`Saya setuju, tapi ada gap digital di daerah pedesaan yang membuat implementasi tidak merata.`,waktu:`3 jam lalu`,role:`mahasiswa`},{author:`Dr. Bambang S.`,text:`Poin bagus Siti! Ini yang disebut digital divide. Bagaimana solusinya menurut kalian?`,waktu:`2 jam lalu`,role:`dosen`}]},{judul:`Tanya Jawab UTS`,balasan:15,waktu:`1 hari lalu`,author:`Ahmad R.`,hot:!0,pertemuan:6,deadline:`2026-03-14`,replies:[{author:`Ahmad R.`,text:`Pak, apakah materi Bab 4-6 termasuk dalam UTS?`,waktu:`2 hari lalu`,role:`mahasiswa`},{author:`Dr. Bambang S.`,text:`UTS hanya mencakup Bab 1-3. Bab 4-6 akan masuk UAS.`,waktu:`1 hari lalu`,role:`dosen`},{author:`Siti N.`,text:`Pak, boleh bawa catatan saat UTS?`,waktu:`1 hari lalu`,role:`mahasiswa`},{author:`Dr. Bambang S.`,text:`UTS bersifat closed book. Silakan pelajari ringkasan yang sudah saya upload di pertemuan 6.`,waktu:`1 hari lalu`,role:`dosen`}]},{judul:`Diskusi: Kebijakan Lingkungan Hidup`,balasan:6,waktu:`5 jam lalu`,author:`Dr. Bambang S.`,hot:!1,pertemuan:8,deadline:`2026-04-15`,replies:[{author:`Dr. Bambang S.`,text:`Analisis kebijakan pengelolaan sampah plastik di Indonesia. Apakah sudah efektif?`,waktu:`8 jam lalu`,role:`dosen`},{author:`Ahmad R.`,text:`Belum efektif karena masih banyak kantong plastik di pasar tradisional.`,waktu:`6 jam lalu`,role:`mahasiswa`}]},{judul:`Review Bersama — Materi UAS`,balasan:22,waktu:`2 jam lalu`,author:`Ahmad R.`,hot:!0,pertemuan:12,deadline:`2026-04-28`,replies:[{author:`Ahmad R.`,text:`Yuk kita review bareng materi UAS. Mulai dari Bab 4 tentang apa saja?`,waktu:`5 jam lalu`,role:`mahasiswa`},{author:`Siti N.`,text:`Bab 4 tentang Evaluasi Kebijakan, metodologi dan indikator keberhasilan.`,waktu:`4 jam lalu`,role:`mahasiswa`},{author:`Dr. Bambang S.`,text:`Benar. Fokus juga ke studi kasus yang sudah kita bahas di kelas.`,waktu:`2 jam lalu`,role:`dosen`}]}],q[1].uts=[{judul:`UTS — Kebijakan Publik`,type:`Pilihan Ganda`,mode:`pg`,soal:30,waktu:90,deadline:`2026-03-20 10:00`,status:`Belum`,nilai:null,pertemuan:7}],q[1].uas=[{judul:`UAS — Kebijakan Publik`,type:`Upload PDF`,mode:`upload`,deadline:`2026-05-10 10:00`,status:`Belum`,nilai:null,pertemuan:12}],q[1].quiz=[{judul:`Quiz BAB 1-3`,soal:20,durasi:`30 menit`,status:`Selesai`,deadline:`20 Feb 2026`,nilai:85,pertemuan:3},{judul:`UTS Kebijakan Publik`,soal:40,durasi:`90 menit`,status:`Selesai`,deadline:`15 Mar 2026`,nilai:78,pertemuan:6},{judul:`Quiz BAB 4-6`,soal:25,durasi:`35 menit`,status:`Belum`,deadline:`2 Apr 2026`,nilai:null,pertemuan:9},{judul:`UAS Kebijakan Publik`,soal:50,durasi:`120 menit`,status:`Belum`,deadline:`30 Apr 2026`,nilai:null,pertemuan:12}],q[1].video=[{judul:`Pengantar Kebijakan Publik`,durasi:`42:15`,views:198,status:`watched`,pertemuan:1},{judul:`Analisis Stakeholder`,durasi:`35:30`,views:156,status:`watched`,pertemuan:3},{judul:`Evaluasi Kebijakan Publik`,durasi:`48:00`,views:89,status:`watched`,pertemuan:6},{judul:`Studi Kasus Kebijakan Transportasi`,durasi:`38:20`,views:45,status:`new`,pertemuan:8},{judul:`Reformasi Kebijakan Indonesia`,durasi:`55:10`,views:12,status:`new`,pertemuan:11}],q[2].materi=[{judul:`BAB 1 — Statistik Deskriptif`,tipe:`PDF`,ukuran:`2.0 MB`,tanggal:`6 Feb 2026`,icon:`📄`,pertemuan:1},{judul:`Panduan SPSS — Dasar`,tipe:`PDF`,ukuran:`3.5 MB`,tanggal:`13 Feb 2026`,icon:`📄`,pertemuan:2},{judul:`Slide — Distribusi Frekuensi`,tipe:`PPT`,ukuran:`3.8 MB`,tanggal:`20 Feb 2026`,icon:`📊`,pertemuan:3},{judul:`Latihan Soal — Ukuran Pemusatan`,tipe:`PDF`,ukuran:`1.1 MB`,tanggal:`27 Feb 2026`,icon:`📝`,pertemuan:4},{judul:`BAB 2 — Probabilitas`,tipe:`PDF`,ukuran:`2.4 MB`,tanggal:`6 Mar 2026`,icon:`📄`,pertemuan:5},{judul:`Slide — Distribusi Normal`,tipe:`PPT`,ukuran:`3.2 MB`,tanggal:`13 Mar 2026`,icon:`📊`,pertemuan:6},{judul:`Rangkuman Materi UTS`,tipe:`PDF`,ukuran:`4.0 MB`,tanggal:`20 Mar 2026`,icon:`📚`,pertemuan:7},{judul:`BAB 3 — Statistik Inferensial`,tipe:`PDF`,ukuran:`2.7 MB`,tanggal:`27 Mar 2026`,icon:`📄`,pertemuan:8},{judul:`Panduan SPSS — Regresi`,tipe:`PDF`,ukuran:`3.0 MB`,tanggal:`3 Apr 2026`,icon:`📄`,pertemuan:9},{judul:`Slide — Uji Hipotesis`,tipe:`PPT`,ukuran:`3.5 MB`,tanggal:`10 Apr 2026`,icon:`📊`,pertemuan:10},{judul:`BAB 4 — Analisis Korelasi`,tipe:`PDF`,ukuran:`2.3 MB`,tanggal:`17 Apr 2026`,icon:`📄`,pertemuan:11},{judul:`Rangkuman Materi UAS`,tipe:`PDF`,ukuran:`5.0 MB`,tanggal:`24 Apr 2026`,icon:`📚`,pertemuan:12}],q[2].tugas=[{judul:`Laporan Statistik Penduduk`,type:`Tugas Individu`,deadline:`2026-03-25 23:59`,status:`Sudah`,pertemuan:3},{judul:`Analisis Data SPSS`,type:`Tugas Individu`,deadline:`2026-04-01 23:59`,status:`Sudah`,pertemuan:5},{judul:`Proyek Uji Hipotesis`,type:`Tugas Kelompok`,deadline:`2026-04-15 23:59`,status:`Belum`,pertemuan:9},{judul:`Laporan Akhir Analisis Regresi`,type:`Tugas Individu`,deadline:`2026-04-28 23:59`,status:`Belum`,pertemuan:11}],q[2].forum=[{judul:`Pertanyaan: Metode Sampling`,balasan:3,waktu:`3 hari lalu`,author:`Budi P.`,hot:!1,pertemuan:2},{judul:`Diskusi: Korelasi vs Kausalitas`,balasan:7,waktu:`5 hari lalu`,author:`Ir. Siti N.`,hot:!1,pertemuan:4},{judul:`Tanya Jawab UTS Statistik`,balasan:18,waktu:`1 hari lalu`,author:`Ir. Siti N.`,hot:!0,pertemuan:7},{judul:`Diskusi: Interpretasi P-Value`,balasan:9,waktu:`4 jam lalu`,author:`Budi P.`,hot:!1,pertemuan:10}],q[2].quiz=[{judul:`Quiz Statistik Deskriptif`,soal:15,durasi:`25 menit`,status:`Selesai`,deadline:`18 Mar 2026`,nilai:92,pertemuan:2},{judul:`UTS Statistik Sosial`,soal:30,durasi:`75 menit`,status:`Selesai`,deadline:`20 Mar 2026`,nilai:85,pertemuan:7},{judul:`Quiz Statistik Inferensial`,soal:20,durasi:`30 menit`,status:`Belum`,deadline:`5 Apr 2026`,nilai:null,pertemuan:9},{judul:`UAS Statistik Sosial`,soal:40,durasi:`100 menit`,status:`Belum`,deadline:`28 Apr 2026`,nilai:null,pertemuan:12}],q[2].video=[{judul:`Panduan SPSS Lengkap`,durasi:`55:00`,views:145,status:`watched`,pertemuan:2},{judul:`Statistik Inferensial`,durasi:`35:10`,views:312,status:`watched`,pertemuan:3},{judul:`Distribusi Normal & Z-Score`,durasi:`40:20`,views:98,status:`watched`,pertemuan:6},{judul:`Tutorial Regresi Linear SPSS`,durasi:`48:30`,views:56,status:`new`,pertemuan:9},{judul:`Analisis Korelasi Lanjut`,durasi:`33:45`,views:22,status:`new`,pertemuan:11}],q[3].materi=[{judul:`BAB 1 — Teori Klasik Administrasi`,tipe:`PDF`,ukuran:`2.3 MB`,tanggal:`4 Feb 2026`,icon:`📄`,pertemuan:1},{judul:`Slide — Birokrasi Weber`,tipe:`PPT`,ukuran:`4.0 MB`,tanggal:`11 Feb 2026`,icon:`📊`,pertemuan:2},{judul:`BAB 2 — New Public Management`,tipe:`PDF`,ukuran:`2.8 MB`,tanggal:`18 Feb 2026`,icon:`📄`,pertemuan:3},{judul:`E-Book — Good Governance`,tipe:`PDF`,ukuran:`6.2 MB`,tanggal:`25 Feb 2026`,icon:`📚`,pertemuan:4},{judul:`Slide — Teori Organisasi Modern`,tipe:`PPT`,ukuran:`4.2 MB`,tanggal:`4 Mar 2026`,icon:`📊`,pertemuan:5},{judul:`BAB 3 — Administrasi Pembangunan`,tipe:`PDF`,ukuran:`3.1 MB`,tanggal:`11 Mar 2026`,icon:`📄`,pertemuan:6},{judul:`Rangkuman Materi UTS`,tipe:`PDF`,ukuran:`4.5 MB`,tanggal:`18 Mar 2026`,icon:`📚`,pertemuan:7},{judul:`BAB 4 — E-Government`,tipe:`PDF`,ukuran:`2.6 MB`,tanggal:`25 Mar 2026`,icon:`📄`,pertemuan:8},{judul:`Slide — Reformasi Birokrasi`,tipe:`PPT`,ukuran:`5.0 MB`,tanggal:`1 Apr 2026`,icon:`📊`,pertemuan:9},{judul:`BAB 5 — Etika Administrasi Publik`,tipe:`PDF`,ukuran:`2.4 MB`,tanggal:`8 Apr 2026`,icon:`📄`,pertemuan:10},{judul:`Slide — Desentralisasi & Otonomi`,tipe:`PPT`,ukuran:`4.8 MB`,tanggal:`15 Apr 2026`,icon:`📊`,pertemuan:11},{judul:`Rangkuman Materi UAS`,tipe:`PDF`,ukuran:`5.8 MB`,tanggal:`22 Apr 2026`,icon:`📚`,pertemuan:12}],q[3].tugas=[{judul:`Review Paper Good Governance`,type:`Tugas Individu`,deadline:`2026-03-20 23:59`,status:`Sudah`,pertemuan:4},{judul:`Makalah Teori Birokrasi Weber`,type:`Tugas Kelompok`,deadline:`2026-04-01 23:59`,status:`Sudah`,pertemuan:6},{judul:`Analisis E-Government Indonesia`,type:`Tugas Individu`,deadline:`2026-04-10 23:59`,status:`Belum`,pertemuan:8},{judul:`Presentasi Reformasi Birokrasi`,type:`Tugas Kelompok`,deadline:`2026-04-20 23:59`,status:`Belum`,pertemuan:10},{judul:`Paper Akhir — Desentralisasi`,type:`Tugas Individu`,deadline:`2026-04-28 23:59`,status:`Belum`,pertemuan:12}],q[3].forum=[{judul:`Diskusi: Teori Administrasi Modern`,balasan:12,waktu:`2 jam lalu`,author:`Prof. Sri W.`,hot:!0,pertemuan:3},{judul:`Review Paper: Good Governance`,balasan:15,waktu:`2 hari lalu`,author:`Prof. Sri W.`,hot:!0,pertemuan:4},{judul:`Tanya Jawab UTS`,balasan:20,waktu:`1 hari lalu`,author:`Ahmad R.`,hot:!0,pertemuan:7},{judul:`Diskusi: E-Government di Daerah`,balasan:8,waktu:`3 jam lalu`,author:`Prof. Sri W.`,hot:!1,pertemuan:9},{judul:`Review Bersama Materi UAS`,balasan:25,waktu:`1 jam lalu`,author:`Budi P.`,hot:!0,pertemuan:12}],q[3].quiz=[{judul:`Quiz Teori Organisasi`,soal:25,durasi:`40 menit`,status:`Selesai`,deadline:`28 Mar 2026`,nilai:80,pertemuan:5},{judul:`UTS Teori Administrasi`,soal:35,durasi:`90 menit`,status:`Selesai`,deadline:`18 Mar 2026`,nilai:82,pertemuan:7},{judul:`Quiz E-Government`,soal:20,durasi:`30 menit`,status:`Belum`,deadline:`8 Apr 2026`,nilai:null,pertemuan:9},{judul:`UAS Teori Administrasi`,soal:45,durasi:`120 menit`,status:`Belum`,deadline:`25 Apr 2026`,nilai:null,pertemuan:12}],q[3].video=[{judul:`Pengantar Birokrasi Indonesia`,durasi:`45:20`,views:234,status:`watched`,pertemuan:1},{judul:`New Public Management`,durasi:`38:45`,views:167,status:`watched`,pertemuan:3},{judul:`Administrasi Pembangunan`,durasi:`42:00`,views:120,status:`watched`,pertemuan:6},{judul:`E-Government & Transformasi Digital`,durasi:`50:15`,views:78,status:`new`,pertemuan:8},{judul:`Reformasi Birokrasi Indonesia`,durasi:`44:30`,views:35,status:`new`,pertemuan:11}],q[4].materi=[{judul:`BAB 1 — Dasar Hukum Administrasi`,tipe:`PDF`,ukuran:`2.5 MB`,tanggal:`5 Feb 2026`,icon:`📄`,pertemuan:1},{judul:`E-Book — Hukum Tata Negara`,tipe:`PDF`,ukuran:`8.5 MB`,tanggal:`12 Feb 2026`,icon:`📚`,pertemuan:2},{judul:`Slide — PTUN & Sengketa`,tipe:`PPT`,ukuran:`3.9 MB`,tanggal:`19 Feb 2026`,icon:`📊`,pertemuan:3},{judul:`BAB 2 — Pejabat Tata Usaha Negara`,tipe:`PDF`,ukuran:`2.7 MB`,tanggal:`26 Feb 2026`,icon:`📄`,pertemuan:4},{judul:`Slide — Keputusan & Tindakan Pemerintah`,tipe:`PPT`,ukuran:`4.3 MB`,tanggal:`5 Mar 2026`,icon:`📊`,pertemuan:5},{judul:`BAB 3 — Perlindungan Hukum`,tipe:`PDF`,ukuran:`3.0 MB`,tanggal:`12 Mar 2026`,icon:`📄`,pertemuan:6},{judul:`Rangkuman Materi UTS`,tipe:`PDF`,ukuran:`4.2 MB`,tanggal:`19 Mar 2026`,icon:`📚`,pertemuan:7},{judul:`BAB 4 — Hukum Perizinan`,tipe:`PDF`,ukuran:`2.8 MB`,tanggal:`26 Mar 2026`,icon:`📄`,pertemuan:8},{judul:`Slide — Diskresi Pejabat Publik`,tipe:`PPT`,ukuran:`3.6 MB`,tanggal:`2 Apr 2026`,icon:`📊`,pertemuan:9},{judul:`BAB 5 — Kontrak Pemerintah`,tipe:`PDF`,ukuran:`3.1 MB`,tanggal:`9 Apr 2026`,icon:`📄`,pertemuan:10},{judul:`Slide — Sengketa Tata Usaha Negara`,tipe:`PPT`,ukuran:`4.0 MB`,tanggal:`16 Apr 2026`,icon:`📊`,pertemuan:11},{judul:`Rangkuman Materi UAS`,tipe:`PDF`,ukuran:`5.2 MB`,tanggal:`23 Apr 2026`,icon:`📚`,pertemuan:12}],q[4].tugas=[{judul:`Analisis Kasus PTUN`,type:`Tugas Individu`,deadline:`2026-03-18 23:59`,status:`Sudah`,pertemuan:3},{judul:`Makalah Keputusan Pemerintah`,type:`Tugas Kelompok`,deadline:`2026-03-28 23:59`,status:`Sudah`,pertemuan:5},{judul:`Quiz UTS Hukum Administrasi`,type:`Ujian`,deadline:`2026-03-30 23:59`,status:`Belum`,pertemuan:7},{judul:`Analisis Hukum Perizinan`,type:`Tugas Individu`,deadline:`2026-04-12 23:59`,status:`Belum`,pertemuan:9},{judul:`Paper Akhir — Sengketa TUN`,type:`Tugas Individu`,deadline:`2026-04-28 23:59`,status:`Belum`,pertemuan:11}],q[4].forum=[{judul:`Diskusi: Kasus PTUN Terbaru`,balasan:6,waktu:`1 hari lalu`,author:`Dr. Agus R.`,hot:!1,pertemuan:3},{judul:`Diskusi: Pejabat TUN & Kewenangan`,balasan:10,waktu:`2 hari lalu`,author:`Dr. Agus R.`,hot:!0,pertemuan:5},{judul:`Tanya Jawab UTS`,balasan:14,waktu:`1 hari lalu`,author:`Ahmad R.`,hot:!0,pertemuan:7},{judul:`Diskusi: Diskresi vs Penyalahgunaan`,balasan:11,waktu:`6 jam lalu`,author:`Dr. Agus R.`,hot:!0,pertemuan:9}],q[4].quiz=[{judul:`Quiz Hukum Dasar`,soal:15,durasi:`25 menit`,status:`Selesai`,deadline:`5 Mar 2026`,nilai:76,pertemuan:3},{judul:`UTS Hukum Administrasi`,soal:35,durasi:`75 menit`,status:`Selesai`,deadline:`30 Mar 2026`,nilai:72,pertemuan:7},{judul:`Quiz Hukum Perizinan`,soal:20,durasi:`30 menit`,status:`Belum`,deadline:`10 Apr 2026`,nilai:null,pertemuan:9},{judul:`UAS Hukum Administrasi`,soal:40,durasi:`100 menit`,status:`Belum`,deadline:`28 Apr 2026`,nilai:null,pertemuan:12}],q[4].video=[{judul:`Hukum Administrasi Negara`,durasi:`48:00`,views:67,status:`watched`,pertemuan:1},{judul:`Pejabat & Keputusan TUN`,durasi:`40:30`,views:89,status:`watched`,pertemuan:4},{judul:`Perlindungan Hukum Rakyat`,durasi:`36:15`,views:55,status:`new`,pertemuan:6},{judul:`Hukum Perizinan Indonesia`,durasi:`42:45`,views:30,status:`new`,pertemuan:8},{judul:`Sengketa TUN & Penyelesaian`,durasi:`50:00`,views:15,status:`new`,pertemuan:11}],q[5].materi=[{judul:`BAB 1 — Manajemen Sumber Daya Manusia`,tipe:`PDF`,ukuran:`2.0 MB`,tanggal:`3 Feb 2026`,icon:`📄`,pertemuan:1},{judul:`Slide — Rekrutmen & Seleksi`,tipe:`PPT`,ukuran:`4.1 MB`,tanggal:`10 Feb 2026`,icon:`📊`,pertemuan:2},{judul:`Video Lecture — Manajemen Kinerja`,tipe:`MP4`,ukuran:`120 MB`,tanggal:`17 Feb 2026`,icon:`🎬`,pertemuan:3},{judul:`BAB 2 — Pengembangan Kompetensi`,tipe:`PDF`,ukuran:`2.6 MB`,tanggal:`24 Feb 2026`,icon:`📄`,pertemuan:4},{judul:`Slide — Kompensasi & Benefit`,tipe:`PPT`,ukuran:`3.8 MB`,tanggal:`3 Mar 2026`,icon:`📊`,pertemuan:5},{judul:`BAB 3 — Hubungan Industrial`,tipe:`PDF`,ukuran:`2.9 MB`,tanggal:`10 Mar 2026`,icon:`📄`,pertemuan:6},{judul:`Rangkuman Materi UTS`,tipe:`PDF`,ukuran:`3.5 MB`,tanggal:`17 Mar 2026`,icon:`📚`,pertemuan:7},{judul:`BAB 4 — Manajemen Talenta`,tipe:`PDF`,ukuran:`2.4 MB`,tanggal:`24 Mar 2026`,icon:`📄`,pertemuan:8},{judul:`Slide — HR Analytics`,tipe:`PPT`,ukuran:`4.5 MB`,tanggal:`31 Mar 2026`,icon:`📊`,pertemuan:9},{judul:`BAB 5 — Budaya Organisasi`,tipe:`PDF`,ukuran:`2.7 MB`,tanggal:`7 Apr 2026`,icon:`📄`,pertemuan:10},{judul:`Slide — Kepemimpinan Transformasional`,tipe:`PPT`,ukuran:`5.2 MB`,tanggal:`14 Apr 2026`,icon:`📊`,pertemuan:11},{judul:`Rangkuman Materi UAS`,tipe:`PDF`,ukuran:`4.8 MB`,tanggal:`21 Apr 2026`,icon:`📚`,pertemuan:12}],q[5].tugas=[{judul:`Studi Kasus Manajemen Kinerja ASN`,type:`Tugas Kelompok`,deadline:`2026-03-15 23:59`,status:`Sudah`,pertemuan:3},{judul:`Analisis Kompensasi Perusahaan`,type:`Tugas Individu`,deadline:`2026-03-28 23:59`,status:`Sudah`,pertemuan:5},{judul:`Makalah Manajemen Talenta`,type:`Tugas Kelompok`,deadline:`2026-04-10 23:59`,status:`Belum`,pertemuan:8},{judul:`Proyek HR Analytics Dashboard`,type:`Tugas Kelompok`,deadline:`2026-04-18 23:59`,status:`Belum`,pertemuan:10},{judul:`Presentasi Akhir — Kepemimpinan`,type:`Tugas Kelompok`,deadline:`2026-04-25 23:59`,status:`Belum`,pertemuan:12}],q[5].forum=[{judul:`Sharing: Pengalaman Magang`,balasan:20,waktu:`4 hari lalu`,author:`Rina K.`,hot:!0,pertemuan:2},{judul:`Diskusi Kelompok: Studi Kasus BUMN`,balasan:5,waktu:`1 hari lalu`,author:`Siti N.`,hot:!1,pertemuan:4},{judul:`Tanya Jawab UTS MSDM`,balasan:16,waktu:`2 hari lalu`,author:`Dr. Rina K.`,hot:!0,pertemuan:7},{judul:`Diskusi: HR Analytics Tren 2026`,balasan:12,waktu:`3 jam lalu`,author:`Dr. Rina K.`,hot:!0,pertemuan:9},{judul:`Review Bersama Materi UAS`,balasan:18,waktu:`1 jam lalu`,author:`Siti N.`,hot:!0,pertemuan:12}],q[5].quiz=[{judul:`Quiz MSDM BAB 1-2`,soal:15,durasi:`20 menit`,status:`Selesai`,deadline:`10 Mar 2026`,nilai:88,pertemuan:2},{judul:`UTS Manajemen SDM`,soal:30,durasi:`75 menit`,status:`Selesai`,deadline:`17 Mar 2026`,nilai:82,pertemuan:7},{judul:`Quiz HR Analytics`,soal:20,durasi:`25 menit`,status:`Belum`,deadline:`5 Apr 2026`,nilai:null,pertemuan:9},{judul:`UAS Manajemen SDM`,soal:40,durasi:`100 menit`,status:`Belum`,deadline:`25 Apr 2026`,nilai:null,pertemuan:12}],q[5].video=[{judul:`Rekrutmen Modern`,durasi:`33:15`,views:201,status:`watched`,pertemuan:2},{judul:`Manajemen Kinerja ASN`,durasi:`52:30`,views:156,status:`watched`,pertemuan:3},{judul:`Hubungan Industrial Indonesia`,durasi:`38:20`,views:90,status:`watched`,pertemuan:6},{judul:`HR Analytics untuk Pemula`,durasi:`45:00`,views:42,status:`new`,pertemuan:9},{judul:`Kepemimpinan Transformasional`,durasi:`40:30`,views:18,status:`new`,pertemuan:11}],q[6].materi=[{judul:`BAB 1 — Konsep Dasar Sistem Informasi`,tipe:`PDF`,ukuran:`2.2 MB`,tanggal:`5 Feb 2026`,icon:`📄`,pertemuan:1},{judul:`Slide — Komponen Sistem Informasi`,tipe:`PPT`,ukuran:`3.8 MB`,tanggal:`12 Feb 2026`,icon:`📊`,pertemuan:2},{judul:`BAB 2 — Database Management System`,tipe:`PDF`,ukuran:`2.6 MB`,tanggal:`19 Feb 2026`,icon:`📄`,pertemuan:3},{judul:`Slide — Data Warehouse & Mining`,tipe:`PPT`,ukuran:`4.2 MB`,tanggal:`26 Feb 2026`,icon:`📊`,pertemuan:4},{judul:`BAB 3 — E-Government`,tipe:`PDF`,ukuran:`2.9 MB`,tanggal:`5 Mar 2026`,icon:`📄`,pertemuan:5},{judul:`Slide — Keamanan Sistem Informasi`,tipe:`PPT`,ukuran:`3.5 MB`,tanggal:`12 Mar 2026`,icon:`📊`,pertemuan:6},{judul:`Rangkuman Materi UTS`,tipe:`PDF`,ukuran:`3.2 MB`,tanggal:`19 Mar 2026`,icon:`📚`,pertemuan:7},{judul:`BAB 4 — Enterprise Resource Planning`,tipe:`PDF`,ukuran:`2.5 MB`,tanggal:`26 Mar 2026`,icon:`📄`,pertemuan:8}],q[6].tugas=[{judul:`Analisis Sistem Informasi Instansi`,type:`Tugas Kelompok`,deadline:`2026-03-10 23:59`,status:`Sudah`,pertemuan:3},{judul:`Desain Database Sederhana`,type:`Tugas Individu`,deadline:`2026-03-20 23:59`,status:`Sudah`,pertemuan:4},{judul:`Studi Kasus E-Government`,type:`Tugas Kelompok`,deadline:`2026-04-05 23:59`,status:`Belum`,pertemuan:6},{judul:`Proyek Akhir — Prototype Aplikasi`,type:`Tugas Kelompok`,deadline:`2026-04-25 23:59`,status:`Belum`,pertemuan:8}],q[6].forum=[{judul:`Diskusi: Tantangan Digitalisasi Birokrasi`,balasan:14,waktu:`2 hari lalu`,author:`Andi P.`,hot:!0,pertemuan:1},{judul:`Sharing: Tools Database Gratis`,balasan:8,waktu:`4 hari lalu`,author:`Siti N.`,hot:!1,pertemuan:3},{judul:`Diskusi: Keamanan Data Pemerintah`,balasan:11,waktu:`1 hari lalu`,author:`Ir. Andi P.`,hot:!0,pertemuan:6}],q[6].quiz=[{judul:`Quiz Konsep SI BAB 1-2`,soal:15,durasi:`20 menit`,status:`Selesai`,deadline:`12 Mar 2026`,nilai:80,pertemuan:2},{judul:`UTS Sistem Informasi Manajemen`,soal:30,durasi:`75 menit`,status:`Selesai`,deadline:`19 Mar 2026`,nilai:78,pertemuan:7},{judul:`Quiz ERP & Cloud`,soal:20,durasi:`25 menit`,status:`Belum`,deadline:`8 Apr 2026`,nilai:null,pertemuan:8}],q[6].video=[{judul:`Pengantar Sistem Informasi`,durasi:`28:40`,views:180,status:`watched`,pertemuan:1},{judul:`Tutorial SQL Dasar`,durasi:`45:15`,views:142,status:`watched`,pertemuan:3},{judul:`E-Government Indonesia`,durasi:`35:20`,views:76,status:`new`,pertemuan:5}],q[6].uts=[{judul:`UTS — Sistem Informasi Manajemen`,mode:`upload`,type:`Upload File`,deadline:`2026-03-19 23:59`,status:`Sudah`,nilai:null,pertemuan:7}],q[6].uas=[{judul:`UAS — Sistem Informasi Manajemen`,mode:`upload`,type:`Upload File`,deadline:`2026-04-28 23:59`,status:`Belum`,nilai:null,pertemuan:12}],q[7].materi=[{judul:`BAB 1 — Pengertian Etika & Moral`,tipe:`PDF`,ukuran:`1.8 MB`,tanggal:`6 Feb 2026`,icon:`📄`,pertemuan:1},{judul:`Slide — Etika Profesi PNS`,tipe:`PPT`,ukuran:`3.2 MB`,tanggal:`13 Feb 2026`,icon:`📊`,pertemuan:2},{judul:`BAB 2 — Kode Etik ASN`,tipe:`PDF`,ukuran:`2.1 MB`,tanggal:`20 Feb 2026`,icon:`📄`,pertemuan:3},{judul:`Slide — Integritas & Anti Korupsi`,tipe:`PPT`,ukuran:`3.5 MB`,tanggal:`27 Feb 2026`,icon:`📊`,pertemuan:4},{judul:`BAB 3 — Etika Pelayanan Publik`,tipe:`PDF`,ukuran:`2.4 MB`,tanggal:`6 Mar 2026`,icon:`📄`,pertemuan:5},{judul:`Rangkuman Materi UTS`,tipe:`PDF`,ukuran:`2.8 MB`,tanggal:`13 Mar 2026`,icon:`📚`,pertemuan:6},{judul:`BAB 4 — Dilema Etika Birokrasi`,tipe:`PDF`,ukuran:`2.0 MB`,tanggal:`20 Mar 2026`,icon:`📄`,pertemuan:7}],q[7].tugas=[{judul:`Analisis Kasus Etika Pelayanan`,type:`Tugas Individu`,deadline:`2026-03-08 23:59`,status:`Sudah`,pertemuan:2},{judul:`Essay Anti Korupsi di Birokrasi`,type:`Tugas Individu`,deadline:`2026-03-22 23:59`,status:`Sudah`,pertemuan:4},{judul:`Studi Kasus Dilema Etika`,type:`Tugas Kelompok`,deadline:`2026-04-12 23:59`,status:`Belum`,pertemuan:7}],q[7].forum=[{judul:`Diskusi: Etika vs Hukum dalam Birokrasi`,balasan:18,waktu:`3 hari lalu`,author:`Bambang S.`,hot:!0,pertemuan:1},{judul:`Sharing: Kasus Nyata Dilema Etika`,balasan:12,waktu:`2 hari lalu`,author:`Ahmad R.`,hot:!0,pertemuan:4}],q[7].quiz=[{judul:`Quiz Etika BAB 1-2`,soal:15,durasi:`20 menit`,status:`Selesai`,deadline:`20 Mar 2026`,nilai:90,pertemuan:3},{judul:`UTS Etika Administrasi`,soal:25,durasi:`60 menit`,status:`Selesai`,deadline:`27 Mar 2026`,nilai:85,pertemuan:6},{judul:`Quiz Dilema Etika`,soal:15,durasi:`20 menit`,status:`Belum`,deadline:`15 Apr 2026`,nilai:null,pertemuan:7}],q[7].video=[{judul:`Pengantar Etika Administrasi`,durasi:`25:30`,views:165,status:`watched`,pertemuan:1},{judul:`Kode Etik ASN — Penjelasan`,durasi:`32:10`,views:130,status:`watched`,pertemuan:3},{judul:`Studi Kasus: Whistleblowing`,durasi:`28:45`,views:54,status:`new`,pertemuan:5}],q[7].uts=[{judul:`UTS — Etika Administrasi`,mode:`upload`,type:`Upload File`,deadline:`2026-03-27 23:59`,status:`Sudah`,nilai:null,pertemuan:6}],q[7].uas=[{judul:`UAS — Etika Administrasi`,mode:`upload`,type:`Upload File`,deadline:`2026-04-24 23:59`,status:`Belum`,nilai:null,pertemuan:10}];var Y={};function Cn(e,t){let n=e.replace(/Quiz |UTS |UAS /g,``).trim(),r=[];for(let e=1;e<=Math.min(t,5);e++)r.push({soal:`Pertanyaan ${e}: Manakah yang paling tepat mengenai ${n}?`,opsi:[{key:`A`,text:`Pilihan A — Konsep dasar ${n} dalam konteks modern`},{key:`B`,text:`Pilihan B — Penerapan ${n} di tingkat nasional`},{key:`C`,text:`Pilihan C — Evaluasi dan analisis ${n}`},{key:`D`,text:`Pilihan D — Kritik terhadap teori ${n}`}],jawaban:[`A`,`B`,`C`,`D`][e%4]});return r}Y[`Quiz BAB 1-3`]=[{soal:`Apa yang dimaksud dengan kebijakan publik menurut Thomas R. Dye?`,opsi:[{key:`A`,text:`Segala yang dilakukan maupun tidak dilakukan oleh pemerintah`},{key:`B`,text:`Keputusan yang dibuat oleh legislatif saja`},{key:`C`,text:`Rencana strategis organisasi swasta`},{key:`D`,text:`Peraturan yang dibuat oleh masyarakat`}],jawaban:`A`},{soal:`Tahap pertama dalam siklus kebijakan publik adalah...`,opsi:[{key:`A`,text:`Implementasi kebijakan`},{key:`B`,text:`Evaluasi kebijakan`},{key:`C`,text:`Identifikasi masalah (agenda setting)`},{key:`D`,text:`Legitimasi kebijakan`}],jawaban:`C`},{soal:`Analisis stakeholder bertujuan untuk...`,opsi:[{key:`A`,text:`Menghitung anggaran kebijakan`},{key:`B`,text:`Mengidentifikasi aktor yang terlibat dan kepentingannya`},{key:`C`,text:`Membuat laporan keuangan`},{key:`D`,text:`Mengevaluasi kinerja pegawai`}],jawaban:`B`},{soal:`Model rasional dalam pembuatan kebijakan mengasumsikan...`,opsi:[{key:`A`,text:`Pembuat kebijakan memiliki informasi lengkap`},{key:`B`,text:`Kebijakan selalu menguntungkan semua pihak`},{key:`C`,text:`Proses kebijakan bersifat acak`},{key:`D`,text:`Masyarakat selalu setuju dengan kebijakan`}],jawaban:`A`},{soal:`Implementasi kebijakan menurut Edward III dipengaruhi oleh faktor berikut, KECUALI...`,opsi:[{key:`A`,text:`Komunikasi`},{key:`B`,text:`Sumber daya`},{key:`C`,text:`Disposisi`},{key:`D`,text:`Popularitas pejabat`}],jawaban:`D`}],Y[`UTS Kebijakan Publik`]=[{soal:`Pendekatan top-down dalam implementasi kebijakan dikemukakan oleh...`,opsi:[{key:`A`,text:`Lipsky`},{key:`B`,text:`Sabatier dan Mazmanian`},{key:`C`,text:`Wildavsky`},{key:`D`,text:`Lindblom`}],jawaban:`B`},{soal:`Garbage Can Model dikemukakan oleh...`,opsi:[{key:`A`,text:`Cohen, March, dan Olsen`},{key:`B`,text:`Herbert Simon`},{key:`C`,text:`Charles Lindblom`},{key:`D`,text:`Harold Lasswell`}],jawaban:`A`},{soal:`Evaluasi kebijakan bertujuan untuk...`,opsi:[{key:`A`,text:`Membuat kebijakan baru`},{key:`B`,text:`Menilai efektivitas dan efisiensi kebijakan`},{key:`C`,text:`Menghapus semua kebijakan lama`},{key:`D`,text:`Mengubah struktur organisasi`}],jawaban:`B`},{soal:`Policy window menurut Kingdon terbuka ketika...`,opsi:[{key:`A`,text:`Ada pemilihan umum`},{key:`B`,text:`Tiga stream (problem, policy, politics) bertemu`},{key:`C`,text:`Presiden mengeluarkan dekrit`},{key:`D`,text:`Terjadi bencana alam`}],jawaban:`B`},{soal:`Street-level bureaucracy merujuk pada...`,opsi:[{key:`A`,text:`Birokrasi tingkat atas`},{key:`B`,text:`Pejabat yang berinteraksi langsung dengan masyarakat`},{key:`C`,text:`Struktur organisasi vertikal`},{key:`D`,text:`Sistem pengawasan internal`}],jawaban:`B`}];function wn(e){let t=(Y[e.judul]||[]).length||e.soal,n=e.deadline?new Date(e.deadline).toLocaleDateString(`id-ID`,{day:`numeric`,month:`long`,year:`numeric`}):`-`;return`
    <div class="el-quiz-intro">
      <div class="el-quiz-intro-card">
        <div class="el-quiz-intro-icon">📋</div>
        <h2 class="el-quiz-intro-title">${e.judul}</h2>
        <p class="el-quiz-intro-sub">Pilihan Ganda · ${e.durasi}</p>
        
        <div class="el-quiz-intro-stats">
          <div class="el-quiz-intro-stat">
            <span class="el-qi-stat-num">${t}</span>
            <span class="el-qi-stat-label">Soal</span>
          </div>
          <div class="el-qi-stat-divider"></div>
          <div class="el-quiz-intro-stat">
            <span class="el-qi-stat-num">${e.durasi}</span>
            <span class="el-qi-stat-label">Waktu</span>
          </div>
          <div class="el-qi-stat-divider"></div>
          <div class="el-quiz-intro-stat">
            <span class="el-qi-stat-num">60</span>
            <span class="el-qi-stat-label">Nilai Min.</span>
          </div>
        </div>
        
        <div class="el-quiz-intro-info">
          <h4>📌 Ketentuan Quiz</h4>
          <ul>
            <li>⏱️ Waktu akan berjalan otomatis setelah klik <strong>Kerjakan</strong></li>
            <li>📝 Jawaban bisa diubah selama waktu belum habis</li>
            <li>⚠️ Quiz akan otomatis dikumpulkan saat waktu habis</li>
            <li>🔒 Tidak bisa kembali setelah quiz dikumpulkan</li>
            <li>📅 Deadline: <strong>${n}</strong></li>
          </ul>
        </div>
        
        <div class="el-quiz-intro-actions">
          <button class="el-quiz-btn secondary" data-action="back-from-quiz">← Kembali</button>
          <button class="el-quiz-btn primary el-start-quiz-now" style="background:#10b981;flex:1;font-size:0.88rem">🚀 Kerjakan Sekarang</button>
        </div>
      </div>
    </div>`}function Tn(e,t){let n=Y[e.judul]||Cn(e.judul,e.soal),r=n.length;return`
    <div class="el-quiz-container">
      <div class="el-quiz-header">
        <button class="el-detail-back" data-action="back-from-quiz" style="background:rgba(37,99,235,0.1);color:hsl(215 55% 45%)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          Kembali
        </button>
        <div class="el-quiz-title-section">
          <h2 class="el-quiz-title">📋 ${e.judul}</h2>
          <p class="el-quiz-meta">${r} soal · ${e.durasi} · Pilihan Ganda</p>
        </div>
        <div class="el-quiz-timer" id="quizTimer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span id="timerText">${e.durasi}</span>
        </div>
      </div>
      
      <div class="el-quiz-body">
        <div class="el-quiz-sidebar" id="quizNav">
          ${n.map((e,t)=>`<button class="el-quiz-nav-btn`+(t===0?` active`:``)+`" data-q="`+t+`">`+(t+1)+`</button>`).join(``)}
        </div>
        <div class="el-quiz-main">
          <div id="quizContent">
            ${n.map((e,t)=>`
              <div class="el-quiz-question${t===0?``:` hidden`}" data-qi="${t}">
                <div class="el-quiz-q-header">
                  <span class="el-quiz-q-num">Soal ${t+1} dari ${r}</span>
                </div>
                <p class="el-quiz-q-text">${e.soal}</p>
                <div class="el-quiz-options">
                  ${e.opsi.map(e=>`
                    <label class="el-quiz-option" data-qi="${t}" data-key="${e.key}">
                      <input type="radio" name="q${t}" value="${e.key}" />
                      <span class="el-quiz-option-key">${e.key}</span>
                      <span class="el-quiz-option-text">${e.text}</span>
                    </label>
                  `).join(``)}
                </div>
              </div>
            `).join(``)}
          </div>
          <div class="el-quiz-footer">
            <button class="el-quiz-btn secondary" id="quizPrev" disabled>← Sebelumnya</button>
            <span class="el-quiz-progress" id="quizProgress">1 / ${r}</span>
            <button class="el-quiz-btn primary" id="quizNext">Selanjutnya →</button>
            <button class="el-quiz-btn submit hidden" id="quizSubmit">✓ Selesai & Kirim</button>
          </div>
        </div>
      </div>
    </div>`}function En(e,t,n,r,i){let a=Math.round(t/n*100),o=a>=60;return`
    <div class="el-quiz-result">
      <div class="el-quiz-result-card ${o?`pass`:`fail`}">
        <div class="el-quiz-result-icon">${o?`🎉`:`😔`}</div>
        <h2>${o?`Selamat!`:`Belum Lulus`}</h2>
        <p>${o?`Anda berhasil menyelesaikan quiz ini.`:`Silakan coba lagi untuk mendapatkan nilai yang lebih baik.`}</p>
        <div class="el-quiz-score-ring">
          <svg viewBox="0 0 36 36" width="100" height="100">
            <circle cx="18" cy="18" r="16" fill="none" stroke="hsl(215 15% 90%)" stroke-width="3"/>
            <circle cx="18" cy="18" r="16" fill="none" stroke="${o?`#10b981`:`#ef4444`}" stroke-width="3" stroke-linecap="round"
              stroke-dasharray="${a}, 100" transform="rotate(-90 18 18)"/>
          </svg>
          <span class="el-quiz-score-text">${a}</span>
        </div>
        <div class="el-quiz-score-detail">
          <div class="el-quiz-score-item correct">✓ Benar: ${t}</div>
          <div class="el-quiz-score-item wrong">✗ Salah: ${n-t}</div>
        </div>
        <button class="el-quiz-btn primary" data-action="back-from-quiz" style="margin-top:16px">Kembali ke Kelas</button>
      </div>
      
      <h3 style="margin:24px 0 12px;font-size:0.92rem;color:hsl(215 40% 20%)">📝 Pembahasan Jawaban</h3>
      <div class="el-quiz-review">
        ${i.map((e,t)=>{let n=r[t]||`-`,i=n===e.jawaban;return`<div class="el-quiz-review-item ${i?`correct`:`wrong`}">
            <div class="el-quiz-review-num">${t+1}</div>
            <div class="el-quiz-review-body">
              <p class="el-quiz-review-q">${e.soal}</p>
              <p class="el-quiz-review-ans">Jawaban Anda: <strong>${n}</strong> ${i?`✓`:`✗ (Benar: <strong>`+e.jawaban+`</strong>)`}</p>
            </div>
          </div>`}).join(``)}
      </div>
    </div>`}function Dn(e,t,n,r){let i=e.replies||[],a=e=>e.split(` `).map(e=>e[0]).join(``).substring(0,2).toUpperCase(),o=e.deadline&&new Date(e.deadline)<new Date,s=r===`dosen`||!o,c=e.deadline?new Date(e.deadline).toLocaleDateString(`id-ID`,{day:`numeric`,month:`short`,year:`numeric`}):``,l=e.deadline?` · ${o?`<span style="color:#ef4444;font-weight:600">⚠️ Ditutup `+c+`</span>`:`<span style="color:#64748b">📅 Batas: `+c+`</span>`}`:``,u=s?`
      <div class="el-forum-reply-box">
        <div class="el-forum-avatar me">${a(n)}</div>
        <div class="el-forum-input-wrap">
          <textarea id="forumReplyInput" placeholder="Tulis balasan..." rows="2"></textarea>
          <button class="el-forum-send" id="forumSendBtn">Kirim →</button>
        </div>
      </div>`:`
      <div class="el-forum-reply-box el-forum-locked">
        <div style="display:flex;align-items:center;gap:8px;width:100%;justify-content:center">
          <span style="font-size:1.1rem">🔒</span>
          <span style="font-size:0.82rem;font-weight:600;color:#94a3b8">Diskusi telah ditutup (${c})</span>
        </div>
      </div>`;return`
    <div class="el-forum-container">
      <div class="el-forum-header">
        <button class="el-detail-back" data-action="back-from-forum" style="background:rgba(139,92,246,0.1);color:#8b5cf6">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          Kembali
        </button>
        <div class="el-forum-title-section">
          <h2 class="el-forum-title">💬 ${e.judul}</h2>
          <p class="el-forum-meta">Dibuat oleh <strong>${e.author}</strong> · ${e.waktu} · ${i.length} balasan${l} ${e.hot?`<span class="el-forum-hot">🔥 Hot</span>`:``}</p>
        </div>
      </div>
      
      <div class="el-forum-thread" id="forumThread">
        ${i.map(e=>`
          <div class="el-forum-reply ${e.role===`dosen`?`dosen`:``}">
            <div class="el-forum-avatar ${e.role===`dosen`?`dosen`:``}">${a(e.author)}</div>
            <div class="el-forum-reply-content">
              <div class="el-forum-reply-header">
                <span class="el-forum-reply-author">${e.author}</span>
                ${e.role===`dosen`?`<span class="el-forum-role-badge">Dosen</span>`:``}
                <span class="el-forum-reply-time">${e.waktu}</span>
              </div>
              <p class="el-forum-reply-text">${e.text}</p>
            </div>
          </div>
        `).join(``)}
      </div>
      ${u}
    </div>`}function On(e,t,n,r){let i=n===`dosen`,a=q[e.id]||{materi:[],tugas:[],uts:[],uas:[],forum:[],quiz:[],video:[]},o={1:`linear-gradient(135deg, #2563eb, #3b82f6, #60a5fa)`,2:`linear-gradient(135deg, #e67e22, #f39c12, #f9bf3b)`,3:`linear-gradient(135deg, #e74c3c, #ef5350, #ff7043)`,4:`linear-gradient(135deg, #8e44ad, #9b59b6, #ab68c8)`,5:`linear-gradient(135deg, #16a085, #1abc9c, #48c9b0)`},s=o[e.id]||o[1],c=e.progress>70?`#10b981`:e.progress>50?`rgba(255,255,255,0.9)`:`#fbbf24`,l={},u=e=>{l[e]||(l[e]={materi:[],tugas:[],uts:[],uas:[],forum:[],quiz:[],video:[]})};a.materi.forEach(e=>{u(e.pertemuan||0),l[e.pertemuan||0].materi.push(e)}),a.tugas.forEach(e=>{u(e.pertemuan||0),l[e.pertemuan||0].tugas.push(e)}),a.uts.forEach(e=>{u(e.pertemuan||0),l[e.pertemuan||0].uts.push(e)}),a.uas.forEach(e=>{u(e.pertemuan||0),l[e.pertemuan||0].uas.push(e)}),a.forum.forEach(e=>{u(e.pertemuan||0),l[e.pertemuan||0].forum.push(e)}),a.quiz.forEach(e=>{u(e.pertemuan||0),l[e.pertemuan||0].quiz.push(e)}),a.video.forEach(e=>{u(e.pertemuan||0),l[e.pertemuan||0].video.push(e)});let d=Object.keys(l).map(Number).sort((e,t)=>e-t).map(t=>{let n=l[t],o=n.materi[0],s=o?o.judul:`Pertemuan `+t,c=n.materi.length+n.tugas.length+n.uts.length+n.uas.length+n.forum.length+n.quiz.length+n.video.length,u=``;function d(e){if(!e)return``;let t=new Date(e),n=(t-new Date)/(1e3*60*60*24),r=t.toLocaleDateString(`id-ID`,{day:`numeric`,month:`short`,year:`numeric`}),i=`#64748b`,a=`📅`;return n<0?(i=`#ef4444`,a=`⚠️`):n<3&&(i=`#f59e0b`,a=`⏰`),` · <span style="color:`+i+`;font-weight:600">`+a+` `+r+`</span>`}function f(e){return e&&new Date(e)<new Date}n.materi.forEach(t=>{let n=t.tipe===`PDF`?`#3b82f6`:t.tipe===`PPT`?`#f59e0b`:`#10b981`,r=a.materi.indexOf(t),o=i?`<div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="materi" data-idx="`+r+`" data-class-id="`+e.id+`">✏️</button><button class="el-prt-delete-item" data-type="materi" data-idx="`+r+`" data-class-id="`+e.id+`">🗑</button></div>`:``;u+=`<div class="el-prt-item"><div class="el-prt-item-icon">`+t.icon+`</div><div class="el-prt-item-info"><h4>`+t.judul+`</h4><p><span class="el-prt-badge" style="background:`+n+`15;color:`+n+`">`+t.tipe+`</span> `+t.ukuran+` · `+t.tanggal+`</p></div><button class="el-prt-action" style="color:`+n+`">📥 Unduh</button>`+o+`</div>`}),n.tugas.forEach(t=>{let n=f(t.deadline),o=t.status===`Sudah`?`#10b981`:n?`#94a3b8`:`#f59e0b`,s=a.tugas.indexOf(t),c=J[t.judul]||[],l=c.filter(e=>e.file).length,p=c.filter(e=>e.nilai!==null).length,m=i?`<div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="tugas" data-idx="`+s+`" data-class-id="`+e.id+`">✏️</button><button class="el-prt-delete-item" data-type="tugas" data-idx="`+s+`" data-class-id="`+e.id+`">🗑</button></div>`:``,h=r||`2024001`,g=c.find(e=>e.nim===h),_=g?.nilai,v=``;v=i?`<button class="el-prt-action el-grade-tugas" style="color:#e67e22;border-color:#e67e22" data-tugas-idx="`+s+`" data-class-id="`+e.id+`">📊 Nilai (`+p+`/`+l+`)</button>`:_==null?(t.status===`Sudah`||g&&g.file)&&!n?`<button class="el-prt-action el-upload-tugas" style="color:#3b82f6;border-color:#3b82f6" data-tugas-idx="`+s+`" data-class-id="`+e.id+`">✏️ Edit</button>`:(t.status===`Sudah`||g&&g.file)&&n?`<span class="el-prt-status" style="color:#3b82f6">📤 Belum dinilai</span>`:n?`<span class="el-prt-status el-expired-badge">🔒 Ditutup</span>`:`<button class="el-prt-action el-upload-tugas" style="color:#f59e0b;border-color:#f59e0b" data-tugas-idx="`+s+`" data-class-id="`+e.id+`">📤 Kerjakan</button>`:`<span class="el-prt-status" style="color:#10b981;font-weight:700">✓ `+_+`</span>`;let y=_!=null&&!i?` · Nilai: <strong>`+_+`</strong>`:i&&t.nilai!==null&&t.nilai!==void 0?` · Rata-rata: <strong>`+t.nilai+`</strong>`:``;u+=`<div class="el-prt-item`+(n&&t.status!==`Sudah`?` el-item-expired`:``)+`"><div class="el-prt-item-icon">`+(t.status===`Sudah`?`✅`:n?`🔒`:`📝`)+`</div><div class="el-prt-item-info"><h4>`+t.judul+`</h4><p><span class="el-prt-badge" style="background:`+o+`15;color:`+o+`">Tugas</span> `+t.type+y+d(t.deadline)+`</p></div>`+v+m+`</div>`}),n.uts.forEach(t=>{let n=f(t.deadline);t.status;let o=a.uts.indexOf(t),s=t.mode===`upload`,c=i?`<div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="uts" data-idx="`+o+`" data-class-id="`+e.id+`">✏️</button><button class="el-prt-delete-item" data-type="uts" data-idx="`+o+`" data-class-id="`+e.id+`">🗑</button></div>`:``,l=``;if(i)l=`<span class="el-prt-status" style="color:#e67e22">📊 Kelola</span>`;else if(s){let i=r||`2024101001`,a=(J[t.judul]||[]).find(e=>e.nim===i),s=a?.nilai;l=s==null?(t.status===`Sudah`||a&&a.file)&&!n?`<button class="el-prt-action el-upload-tugas" style="color:#3b82f6;border-color:#3b82f6" data-tugas-idx="`+o+`" data-class-id="`+e.id+`" data-tugas-type="uts">✏️ Edit</button>`:n?`<span class="el-prt-status el-expired-badge">🔒 Ditutup</span>`:`<button class="el-prt-action el-upload-tugas" style="color:#f59e0b;border-color:#f59e0b" data-tugas-idx="`+o+`" data-class-id="`+e.id+`" data-tugas-type="uts">📤 Kerjakan</button>`:`<span class="el-prt-status" style="color:#10b981;font-weight:700">✓ `+s+`</span>`}else l=t.status===`Selesai`&&t.nilai!==null?`<span class="el-prt-status" style="color:#10b981;font-weight:700">✓ `+t.nilai+`</span>`:n?`<span class="el-prt-status el-expired-badge">🔒 Ditutup</span>`:`<button class="el-prt-action el-start-quiz" style="color:#ef4444;border-color:#ef4444" data-quiz-idx="`+o+`" data-class-id="`+e.id+`" data-quiz-type="uts">🚀 Mulai</button>`;u+=`<div class="el-prt-item`+(n&&t.status!==`Sudah`&&t.status!==`Selesai`?` el-item-expired`:``)+`"><div class="el-prt-item-icon">📝</div><div class="el-prt-item-info"><h4>`+t.judul+`</h4><p><span class="el-prt-badge" style="background:#ef444415;color:#ef4444">UTS</span> `+t.type+(s?``:` · `+t.soal+` soal · `+t.waktu+` menit`)+d(t.deadline)+`</p></div>`+l+c+`</div>`}),n.uas.forEach(t=>{let n=f(t.deadline);t.status;let o=a.uas.indexOf(t),s=t.mode===`upload`,c=i?`<div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="uas" data-idx="`+o+`" data-class-id="`+e.id+`">✏️</button><button class="el-prt-delete-item" data-type="uas" data-idx="`+o+`" data-class-id="`+e.id+`">🗑</button></div>`:``,l=``;if(i)l=`<span class="el-prt-status" style="color:#e67e22">📊 Kelola</span>`;else if(s){let i=r||`2024101001`,a=(J[t.judul]||[]).find(e=>e.nim===i),s=a?.nilai;l=s==null?(t.status===`Sudah`||a&&a.file)&&!n?`<button class="el-prt-action el-upload-tugas" style="color:#3b82f6;border-color:#3b82f6" data-tugas-idx="`+o+`" data-class-id="`+e.id+`" data-tugas-type="uas">✏️ Edit</button>`:n?`<span class="el-prt-status el-expired-badge">🔒 Ditutup</span>`:`<button class="el-prt-action el-upload-tugas" style="color:#f59e0b;border-color:#f59e0b" data-tugas-idx="`+o+`" data-class-id="`+e.id+`" data-tugas-type="uas">📤 Kerjakan</button>`:`<span class="el-prt-status" style="color:#10b981;font-weight:700">✓ `+s+`</span>`}else l=t.status===`Selesai`&&t.nilai!==null?`<span class="el-prt-status" style="color:#10b981;font-weight:700">✓ `+t.nilai+`</span>`:n?`<span class="el-prt-status el-expired-badge">🔒 Ditutup</span>`:`<button class="el-prt-action el-start-quiz" style="color:#ef4444;border-color:#ef4444" data-quiz-idx="`+o+`" data-class-id="`+e.id+`" data-quiz-type="uas">🚀 Mulai</button>`;u+=`<div class="el-prt-item`+(n&&t.status!==`Sudah`&&t.status!==`Selesai`?` el-item-expired`:``)+`"><div class="el-prt-item-icon">📝</div><div class="el-prt-item-info"><h4>`+t.judul+`</h4><p><span class="el-prt-badge" style="background:#8b5cf615;color:#8b5cf6">UAS</span> `+t.type+(s?``:` · `+t.soal+` soal · `+t.waktu+` menit`)+d(t.deadline)+`</p></div>`+l+c+`</div>`}),n.quiz.forEach(t=>{let n=f(t.deadline),r=t.status===`Selesai`?`#10b981`:n?`#94a3b8`:`#ef4444`,o=a.quiz.indexOf(t),s=(Y[t.judul]||[]).length,c=``;c=i?`<button class="el-prt-action el-edit-quiz" style="color:#8b5cf6;border-color:#8b5cf6" data-quiz-idx="`+o+`" data-class-id="`+e.id+`">📝 Soal (`+s+`)</button><div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="quiz" data-idx="`+o+`" data-class-id="`+e.id+`">✏️</button><button class="el-prt-delete-item" data-type="quiz" data-idx="`+o+`" data-class-id="`+e.id+`">🗑</button></div>`:t.status===`Selesai`?`<span class="el-prt-status" style="color:`+r+`">✓ `+t.nilai+`</span>`:n?`<span class="el-prt-status el-expired-badge">🔒 Ditutup</span>`:`<button class="el-prt-action el-start-quiz" style="color:#ef4444;border-color:#ef4444" data-quiz-idx="`+o+`" data-class-id="`+e.id+`">🚀 Mulai</button>`,u+=`<div class="el-prt-item`+(n&&t.status!==`Selesai`?` el-item-expired`:``)+`"><div class="el-prt-item-icon">`+(t.status===`Selesai`?`✅`:n?`🔒`:`📋`)+`</div><div class="el-prt-item-info"><h4>`+t.judul+`</h4><p><span class="el-prt-badge" style="background:`+r+`15;color:`+r+`">Quiz</span> `+t.soal+` soal · `+t.durasi+(t.nilai===null?``:` · Nilai: <strong>`+t.nilai+`</strong>`)+` · Pilihan Ganda`+d(t.deadline)+`</p></div>`+c+`</div>`}),n.forum.forEach(t=>{let n=a.forum.indexOf(t),r=f(t.deadline),o=i?`<div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="forum" data-idx="`+n+`" data-class-id="`+e.id+`">✏️</button><button class="el-prt-delete-item" data-type="forum" data-idx="`+n+`" data-class-id="`+e.id+`">🗑</button></div>`:``,s=r&&!i?`<span class="el-expired-badge" style="margin-left:6px">🔒</span>`:``;u+=`<div class="el-prt-item`+(r?` el-item-expired`:``)+`"><div class="el-prt-item-icon">💬</div><div class="el-prt-item-info"><h4>`+t.judul+s+`</h4><p><span class="el-prt-badge" style="background:#8b5cf615;color:#8b5cf6">Forum</span> `+t.balasan+` balasan · `+t.waktu+d(t.deadline)+`</p></div><button class="el-prt-action el-open-forum" style="color:#8b5cf6" data-forum-idx="`+n+`" data-class-id="`+e.id+`">💬 Buka</button>`+o+`</div>`}),n.video.forEach(t=>{let n=a.video.indexOf(t),r=i?`<div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="video" data-idx="`+n+`" data-class-id="`+e.id+`">✏️</button><button class="el-prt-delete-item" data-type="video" data-idx="`+n+`" data-class-id="`+e.id+`">🗑</button></div>`:``;u+=`<div class="el-prt-item"><div class="el-prt-item-icon">🎬</div><div class="el-prt-item-info"><h4>`+t.judul+`</h4><p><span class="el-prt-badge" style="background:#06b6d415;color:#06b6d4">Video</span> `+t.durasi+` · `+t.views+` views</p></div><button class="el-prt-action" style="color:#06b6d4">▶ Putar</button>`+r+`</div>`});let p=i?`<button class="el-prt-add-btn" data-meeting="`+t+`" data-class-id="`+e.id+`">＋ Tambah Konten</button>`:``,m=_(e.jadwal?e.jadwal.split(`,`)[0].trim():`Senin`,14)[t-1],h=m?y(m):``;return m&&v(m),`<div class="el-prt-section"><div class="el-prt-header" onclick="this.parentElement.classList.toggle('collapsed')"><div class="el-prt-header-left"><span class="el-prt-num">Ke-`+t+`</span><div><h3 class="el-prt-title">`+s+`</h3><p class="el-prt-meta"><span style="display:inline-flex;align-items:center;gap:4px;color:hsl(210 50% 45%);font-weight:600;">📅 `+h+`</span> · `+c+` item</p></div></div><svg class="el-prt-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="el-prt-body">`+u+p+`</div></div>`}).join(``);return`
    <div class="el-detail-banner" style="background:${s}">
      <button class="el-detail-back" data-action="back-to-kelas" aria-label="Kembali ke daftar kelas">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        Kembali
      </button>
      <div class="el-detail-banner-body">
        <div class="el-detail-banner-left">
          <span class="el-detail-badge">${e.kode}</span>
          <h2 class="el-detail-title">${e.nama}</h2>
          <p class="el-detail-sub">${K.users} ${e.dosen} &nbsp;·&nbsp; ${K.clock} ${e.jadwal} &nbsp;·&nbsp; ${e.sks||3} SKS &nbsp;·&nbsp; ${e.semester}</p>
        </div>
        <div class="el-detail-progress-ring">
          <svg viewBox="0 0 36 36" width="70" height="70">
            <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
            <circle cx="18" cy="18" r="16" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"
              stroke-dasharray="${e.progress}, 100" transform="rotate(-90 18 18)"/>
          </svg>
          <span class="el-detail-ring-text">${e.progress}%</span>
        </div>
      </div>
    </div>
    ${i?``:(()=>{let e=r||`2024001`,t=a.tugas||[],n=a.quiz||[],i=a.uts||[],o=a.uas||[],s=[...t.map(e=>({...e,_cat:`TUGAS`,_catColor:`#f59e0b`})),...i.map(e=>({...e,_cat:`UTS`,_catColor:`#ef4444`})),...o.map(e=>({...e,_cat:`UAS`,_catColor:`#8b5cf6`}))];function c(t){let n=(J[t.judul]||[]).find(t=>t.nim===e);return t.status!==`Sudah`&&!n?.file&&!(t.deadline&&new Date(t.deadline)<new Date)}function l(t){let n=(J[t.judul]||[]).find(t=>t.nim===e);return t.status===`Sudah`||n?.file}function u(t){let n=(J[t.judul]||[]).find(t=>t.nim===e);return t.status!==`Sudah`&&!n?.file&&t.deadline&&new Date(t.deadline)<new Date}let d=s.filter(c),f=s.filter(l),p=s.filter(u),m=n.filter(e=>e.status!==`Selesai`),h=n.filter(e=>e.status===`Selesai`);function g(e,t,n,r,i){let a=e.deadline?new Date(e.deadline).toLocaleDateString(`id-ID`,{day:`numeric`,month:`short`,year:`numeric`}):`—`,o=e.pertemuan?`Pertemuan `+e.pertemuan:``;return`<div class="el-panel-row" style="display:flex;align-items:center;gap:12px;padding:13px 18px;border-bottom:1px solid hsl(215 15% 93%);font-size:0.82rem;`+(i%2==0?`background:hsl(215 20% 98.5%);`:``)+`transition:background .15s;"><span style="background:`+e._catColor+`12;color:`+e._catColor+`;padding:4px 10px;border-radius:8px;font-size:0.7rem;font-weight:700;min-width:52px;text-align:center;letter-spacing:0.3px;border:1px solid `+e._catColor+`20;">`+e._cat+`</span><div style="flex:1;min-width:0;"><div style="font-weight:600;font-size:0.82rem;color:hsl(215 30% 20%);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">`+e.judul+`</div><div style="color:hsl(215 15% 52%);font-size:0.72rem;margin-top:3px;display:flex;align-items:center;gap:6px;"><span style="display:inline-flex;align-items:center;gap:3px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`+o+`</span><span>·</span><span>`+a+`</span></div></div><span style="color:`+r+`;font-weight:700;font-size:0.75rem;white-space:nowrap;display:flex;align-items:center;gap:4px;">`+t+` `+n+`</span></div>`}function _(e,t,n,r,i){e.deadline;let a=e.pertemuan?`Pertemuan `+e.pertemuan:``,o=e.nilai!==null&&e.nilai!==void 0?`<span style="background:#10b98115;color:#10b981;padding:2px 8px;border-radius:6px;font-size:0.68rem;font-weight:700;margin-left:6px;">`+e.nilai+`/100</span>`:``;return`<div class="el-panel-row" style="display:flex;align-items:center;gap:12px;padding:13px 18px;border-bottom:1px solid hsl(215 15% 93%);font-size:0.82rem;`+(i%2==0?`background:hsl(215 20% 98.5%);`:``)+`transition:background .15s;"><span style="background:#6366f112;color:#6366f1;padding:4px 10px;border-radius:8px;font-size:0.7rem;font-weight:700;min-width:52px;text-align:center;letter-spacing:0.3px;border:1px solid #6366f120;">QUIZ</span><div style="flex:1;min-width:0;"><div style="font-weight:600;font-size:0.82rem;color:hsl(215 30% 20%);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">`+e.judul+o+`</div><div style="color:hsl(215 15% 52%);font-size:0.72rem;margin-top:3px;">`+a+(a?` · `:``)+e.soal+` soal · `+e.durasi+`</div></div><span style="color:`+r+`;font-weight:700;font-size:0.75rem;white-space:nowrap;display:flex;align-items:center;gap:4px;">`+t+` `+n+`</span></div>`}let v=d.map((e,t)=>g(e,`⏳`,`Belum dikerjakan`,`#b45309`,t)).join(``),y=f.map((t,n)=>{let r=(J[t.judul]||[]).find(t=>t.nim===e);return g(t,`✅`,`Selesai`+(r?.nilai==null?t.nilai==null?``:` (`+t.nilai+`)`:` (`+r.nilai+`)`),`#047857`,n)}).join(``),b=p.map((e,t)=>g(e,`🔒`,`Ditutup`,`#dc2626`,t)).join(``),x=[...h.map((e,t)=>_(e,`✅`,`Selesai`,`#047857`,t)),...m.map((e,t)=>_(e,`⏳`,`Belum`,`#6366f1`,h.length+t))].join(``);return`
      <div class="el-tugas-summary">
        <div class="el-summary-card" data-panel="pending">
          <div class="el-sc-icon el-sc-icon-amber"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
          <div class="el-sc-body">
            <span class="el-sc-num" style="color:#b45309;">${d.length}</span>
            <span class="el-sc-label">Tugas Pending</span>
          </div>
          <div class="el-sc-badge el-sc-badge-amber">⚡ Segera</div>
        </div>
        <div class="el-summary-card" data-panel="completed">
          <div class="el-sc-icon el-sc-icon-green"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
          <div class="el-sc-body">
            <span class="el-sc-num" style="color:#047857;">${f.length}</span>
            <span class="el-sc-label">Selesai</span>
          </div>
          <div class="el-sc-badge el-sc-badge-green">✓ Bagus</div>
        </div>
        <div class="el-summary-card" data-panel="expired">
          <div class="el-sc-icon el-sc-icon-red"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="el-sc-body">
            <span class="el-sc-num" style="color:#dc2626;">${p.length}</span>
            <span class="el-sc-label">Expired</span>
          </div>
          <div class="el-sc-badge el-sc-badge-red">${p.length>0?`⚠ Lewat`:`✓ Aman`}</div>
        </div>
        <div class="el-summary-card" data-panel="quiz">
          <div class="el-sc-icon el-sc-icon-indigo"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg></div>
          <div class="el-sc-body">
            <span class="el-sc-num" style="color:#4338ca;">${h.length}<span style="font-size:0.75rem;font-weight:600;color:hsl(215 15% 55%);">/${n.length}</span></span>
            <span class="el-sc-label">Quiz</span>
          </div>
          <div class="el-sc-badge el-sc-badge-indigo">${h.length===n.length?`✓ Complete`:`⏳ Progress`}</div>
        </div>
      </div>
      <!-- Detail panels (hidden by default) -->
      <div id="summaryDetailPanel" class="el-summary-detail-panel">
        <div class="el-sdp-header">
          <h4 id="summaryPanelTitle"></h4>
          <button id="closeSummaryPanel" class="el-sdp-close">✕</button>
        </div>
        <div id="summaryPanelBody" style="max-height:340px;overflow-y:auto;"></div>
        <div id="summaryPanelEmpty" style="display:none;padding:28px;text-align:center;color:hsl(215 15% 60%);font-size:0.82rem;">🎉 Tidak ada item.</div>
      </div>
      <!-- Hidden data containers for JS -->
      <div id="panelData_pending" data-title="📝 Tugas Pending — Belum Dikerjakan" style="display:none">${v}</div>
      <div id="panelData_completed" data-title="✅ Tugas Selesai" style="display:none">${y}</div>
      <div id="panelData_expired" data-title="🔒 Tugas Expired" style="display:none">${b}</div>
      <div id="panelData_quiz" data-title="📋 Quiz Progress" style="display:none">${x}</div>`})()}
    <div class="el-prt-list">${d}</div>
    ${i?`<button class="el-prt-add-pertemuan" id="addNewPertemuan" data-class-id="${e.id}">＋ Tambah Pertemuan Baru</button>`:``}
    <!-- Modal Tambah Konten -->
    <div class="el-modal-overlay" id="addContentModal" style="display:none">
      <div class="el-modal">
        <div class="el-modal-header">
          <h3 id="modalTitle">Tambah Konten</h3>
          <button class="el-modal-close" id="closeModal">✕</button>
        </div>
        <form id="addContentForm" class="el-modal-form">
          <input type="hidden" id="formMeeting" />
          <input type="hidden" id="formClassId" />
          <div class="el-form-group">
            <label>Tipe Konten</label>
            <select id="formType" required>
              <option value="materi">📄 Materi</option>
              <option value="tugas">📝 Tugas</option>
              <option value="quiz">📋 Quiz</option>
              <option value="uts">📝 UTS</option>
              <option value="uas">📝 UAS</option>
              <option value="forum">💬 Forum Diskusi</option>
              <option value="video">🎬 Video</option>
            </select>
          </div>
          <div class="el-form-group">
            <label>Judul</label>
            <input type="text" id="formJudul" placeholder="Masukkan judul..." required />
          </div>
          <div id="dynamicFields"></div>
          <div class="el-form-actions">
            <button type="button" class="el-btn-cancel" id="cancelModal">Batal</button>
            <button type="submit" class="el-btn-submit">Simpan</button>
          </div>
        </form>
      </div>
    </div>
    <!-- Modal Kelola Soal Quiz -->
    <div class="el-modal-overlay" id="quizEditorModal" style="display:none">
      <div class="el-modal" style="max-width:620px">
        <div class="el-modal-header">
          <h3 id="quizEditorTitle">📝 Kelola Soal Quiz</h3>
          <button class="el-modal-close" id="closeQuizEditor">✕</button>
        </div>
        <div class="el-modal-form" style="max-height:70vh;overflow-y:auto">
          <div id="quizEditorList"></div>
          <hr style="border:none;border-top:2px dashed hsl(215 15% 88%);margin:16px 0">
          <h4 style="font-size:0.82rem;color:hsl(215 40% 20%);margin:0 0 12px">＋ Tambah Soal Baru</h4>
          <div class="el-form-group">
            <label>Pertanyaan</label>
            <textarea id="qeSoal" rows="2" placeholder="Tulis pertanyaan..." style="resize:vertical"></textarea>
          </div>
          <div class="el-form-group">
            <label>Pilihan A</label>
            <input type="text" id="qeA" placeholder="Pilihan A" />
          </div>
          <div class="el-form-group">
            <label>Pilihan B</label>
            <input type="text" id="qeB" placeholder="Pilihan B" />
          </div>
          <div class="el-form-group">
            <label>Pilihan C</label>
            <input type="text" id="qeC" placeholder="Pilihan C" />
          </div>
          <div class="el-form-group">
            <label>Pilihan D</label>
            <input type="text" id="qeD" placeholder="Pilihan D" />
          </div>
          <div class="el-form-group">
            <label>Jawaban Benar</label>
            <select id="qeJawaban">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
          <div class="el-form-actions" style="border:none;margin-top:8px;padding-top:0">
            <button type="button" class="el-btn-submit" id="addQuizQuestion">＋ Tambah Soal</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Penilaian Tugas -->
    <div class="el-modal-overlay" id="gradingModal" style="display:none">
      <div class="el-modal" style="max-width:650px">
        <div class="el-modal-header">
          <h3 id="gradingTitle">📊 Penilaian Tugas</h3>
          <button class="el-modal-close" id="closeGrading">✕</button>
        </div>
        <div class="el-modal-form" style="max-height:70vh;overflow-y:auto">
          <div id="gradingList"></div>
          <div class="el-form-actions" style="border:none;margin-top:12px;padding-top:0">
            <button type="button" class="el-btn-submit" id="saveGrades">💾 Simpan Nilai</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Preview File -->
    <div class="el-preview-overlay" id="filePreviewModal" style="display:none">
      <div class="el-preview-container">
        <div class="el-preview-toolbar">
          <div class="el-preview-toolbar-left">
            <span id="previewFileName" class="el-preview-filename">📄 document.pdf</span>
            <span id="previewStudentName" class="el-preview-student-label"></span>
          </div>
          <div class="el-preview-toolbar-right">
            <button class="el-preview-tool-btn" id="previewZoomOut">−</button>
            <span id="previewZoomLevel">100%</span>
            <button class="el-preview-tool-btn" id="previewZoomIn">+</button>
            <button class="el-preview-tool-btn" id="previewDownload">📥 Unduh</button>
            <button class="el-preview-close" id="closePreview">✕</button>
          </div>
        </div>
        <div class="el-preview-body" id="previewBody">
          <div class="el-preview-page" id="previewContent"></div>
        </div>
      </div>
    </div>
    <!-- Modal Upload Tugas (Mahasiswa) - Two Step: Detail → Upload -->
    <div class="el-modal-overlay" id="studentUploadModal" style="display:none">
      <div class="el-modal" style="max-width:520px">
        <div class="el-modal-header">
          <h3 id="uploadTugasTitle">📋 Detail Tugas</h3>
          <button class="el-modal-close" id="closeStudentUpload">✕</button>
        </div>
        <div class="el-modal-form">
          <!-- Step 1: Detail View -->
          <div id="tugasDetailStep">
            <div id="uploadTugasInfo" style="margin-bottom:14px"></div>
            <div id="tugasInstruksi" style="margin-bottom:14px"></div>
            <div id="tugasDosenFile" style="margin-bottom:14px"></div>
            <div id="tugasMySubmission" style="margin-bottom:14px"></div>
            <div class="el-form-actions" style="border-top:1px solid hsl(215 15% 92%);padding-top:14px">
              <button type="button" class="el-btn-cancel" id="cancelStudentUpload">Tutup</button>
              <button type="button" class="el-btn-submit" id="goToUploadStep" style="background:#f59e0b">📤 Kumpulkan Jawaban</button>
            </div>
          </div>
          <!-- Step 2: Upload Form -->
          <div id="tugasUploadStep" style="display:none">
            <div style="margin-bottom:12px">
              <button type="button" id="backToDetail" style="background:none;border:none;color:#3b82f6;font-size:0.78rem;cursor:pointer;padding:0">← Kembali ke detail</button>
            </div>
            <div class="el-form-group">
              <label>Upload File Jawaban</label>
              <div class="el-upload-zone" id="studentUploadZone">
                <input type="file" id="studentFileInput" class="el-upload-input" accept=".pdf,.doc,.docx,.ppt,.pptx,.zip,.rar" />
                <div class="el-upload-content">
                  <span class="el-upload-icon">📁</span>
                  <p class="el-upload-text">Klik atau drag file ke sini</p>
                  <p class="el-upload-hint">PDF, DOCX, PPT, ZIP (maks 50MB)</p>
                </div>
                <p class="el-upload-filename" id="studentFileName" style="display:none"></p>
              </div>
            </div>
            <div class="el-form-group">
              <label>Catatan (opsional)</label>
              <textarea id="studentUploadNote" rows="2" placeholder="Tambahkan catatan untuk dosen..." style="resize:vertical"></textarea>
            </div>
            <div class="el-form-actions">
              <button type="button" class="el-btn-cancel" id="cancelUploadStep">Batal</button>
              <button type="button" class="el-btn-submit" id="submitStudentUpload">📤 Kirim</button>
            </div>
          </div>
        </div>
      </div>
    </div>`}function kn(e){Math.round(b.reduce((e,t)=>e+t.progress,0)/b.length),b.reduce((e,t)=>e+t.totalMateri,0);let t=b.reduce((e,t)=>e+t.sks,0),n=[`linear-gradient(135deg, #2563eb, #3b82f6, #60a5fa)`,`linear-gradient(135deg, #e67e22, #f39c12, #f9bf3b)`,`linear-gradient(135deg, #e74c3c, #ef5350, #ff7043)`,`linear-gradient(135deg, #8e44ad, #9b59b6, #ab68c8)`,`linear-gradient(135deg, #16a085, #1abc9c, #48c9b0)`,`linear-gradient(135deg, #2980b9, #3498db, #5dade2)`,`linear-gradient(135deg, #c0392b, #e74c3c, #ec7063)`],r=e&&e.nim||`2024001`,i={};b.forEach(e=>{let t=q[e.id]||{tugas:[],uts:[],uas:[],quiz:[]},n=[];(t.quiz||[]).forEach(e=>{e.status===`Selesai`&&e.nilai!==null&&n.push(e.nilai)}),(t.tugas||[]).forEach(e=>{let t=(J[e.judul]||[]).find(e=>e.nim===r);t&&t.nilai!==null&&t.nilai!==void 0&&n.push(t.nilai)}),(t.uts||[]).forEach(e=>{if(e.mode===`upload`){let t=(J[e.judul]||[]).find(e=>e.nim===r);t&&t.nilai!=null&&n.push(t.nilai)}else e.status===`Selesai`&&e.nilai!=null&&n.push(e.nilai)}),(t.uas||[]).forEach(e=>{if(e.mode===`upload`){let t=(J[e.judul]||[]).find(e=>e.nim===r);t&&t.nilai!=null&&n.push(t.nilai)}else e.status===`Selesai`&&e.nilai!=null&&n.push(e.nilai)}),i[e.id]=n.length?Math.round(n.reduce((e,t)=>e+t,0)/n.length):null});let a=Object.values(i).filter(e=>e!==null),o=a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0,s=o>=80?`#10b981`:o>=60?`#3b82f6`:`#f59e0b`;return`
    <!-- Summary Bar -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:0.82rem;font-weight:700;color:hsl(215 40% 20%);">📚 ${b.length} Kelas Aktif</span>
        <span style="font-size:0.68rem;color:hsl(215 15% 55%);">•</span>
        <span style="font-size:0.72rem;color:hsl(215 15% 50%);">${t} SKS</span>
      </div>
      <button id="toggleNilaiView" style="display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;border:1.5px solid ${s};background:${s}10;color:${s};font-size:0.72rem;font-weight:600;cursor:pointer;transition:all .2s;">
        📊 Lihat Semua Nilai <span style="background:${s};color:#fff;padding:1px 7px;border-radius:10px;font-size:0.62rem;">${o}</span>
      </button>
    </div>

    <!-- Course List -->
    <div class="el-kelas-list" aria-label="Daftar kelas">
      ${b.map((e,t)=>{let r=n[t%n.length],a=e.progress>70?`#10b981`:e.progress>50?`#3b82f6`:`#f59e0b`,o=i[e.id],s=o===null?`#94a3b8`:o>=80?`#10b981`:o>=60?`#3b82f6`:`#ef4444`,c=o===null?`—`:o,l=[`🏛️`,`📊`,`🏢`,`⚖️`,`👥`,`💻`,`📜`],u=l[t%l.length];return`
        <div class="el-kelas-card" tabindex="0" role="article" aria-label="${e.nama}">
          <div class="el-kelas-banner" style="background:${r}">
            <div class="el-kelas-banner-content">
              <span class="el-kelas-badge">${e.kode}</span>
              <h3 class="el-kelas-banner-title">${e.nama}</h3>
              <p class="el-kelas-banner-sub">${e.dosen} · ${e.sks} SKS · ${e.semester}</p>
            </div>
            <div class="el-kelas-banner-icon">${u}</div>
          </div>
          <div class="el-kelas-body">
            <div class="el-kelas-info-row">
              <div class="el-kelas-info-item">
                ${K.clock} <span>${e.jadwal}</span>
              </div>
              <div class="el-kelas-info-item">
                ${K.book} <span>${e.materiSelesai}/${e.totalMateri} materi selesai</span>
              </div>
            </div>
            <div class="el-kelas-progress-section">
              <div class="el-kelas-progress-header">
                <span>Progress</span>
                <span style="color:${a};font-weight:700">${e.progress}%</span>
              </div>
              <div class="progress-wrap"><div class="progress-bar" style="width:${e.progress}%;background:${a}"></div></div>
            </div>
            <div style="display:flex;gap:6px;">
              <button class="el-kelas-enter enter-course-btn" data-class-id="${e.id}" aria-label="Masuk kelas ${e.nama}" style="flex:1;">
                Masuk Kelas →
              </button>
              <button class="el-kelas-nilai-btn" data-class-id="${e.id}" style="flex-shrink:0;padding:8px 12px;border:none;border-radius:8px;background:${s}15;color:${s};font-size:0.7rem;font-weight:700;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:4px;" aria-label="Lihat nilai ${e.nama}">
                📊 <span>${c}</span>
              </button>
            </div>
          </div>
        </div>`}).join(``)}
    </div>

    <!-- Nilai Modal -->
    <div class="el-modal-overlay" id="nilaiSayaModal" style="display:none">
      <div class="el-modal" style="max-width:680px">
        <div class="el-modal-header">
          <h3>📊 Nilai Saya — Semester Genap 2025/2026</h3>
          <button class="el-modal-close" id="closeNilaiModal">✕</button>
        </div>
        <div class="el-modal-form" style="max-height:75vh;overflow-y:auto;" id="nilaiModalContent"></div>
      </div>
    </div>`}var An={home:null,kelas:kn};function jn(e,t,n){if(n&&n.activeForum)return Dn(n.activeForum.forum,n.activeForum.classId,t.nama||`User`,t.role);if(n&&n.quizIntro)return wn(n.quizIntro);if(n&&n.quizResult){let e=n.quizResult;return En(e.quiz,e.score,e.total,e.answers,e.questions)}if(n&&n.activeQuiz)return Tn(n.activeQuiz,n.kelas.id);if(n&&n.kelas)return On(n.kelas,n.tab,t.role,t.nim);let r=xn[t.role]||vn,i=An[e];return i?i(t):r(t)}function Mn(e){let t=Gn();if(!t){window.location.hash=`#/login`;return}let n=`home`,r=null,i={},a=null;function o(){let e=document.getElementById(`dashMain`);e&&(e.innerHTML=jn(n,t,r)+`
      <footer class="dash-iso-footer" role="contentinfo" aria-label="Sertifikasi ISO">
        <span class="dash-iso-badge">${K.shield} ISO 27001 — Security</span>
        <span class="dash-iso-badge">${K.checkCircle} ISO 9241 — Usability</span>
        <span class="dash-iso-badge">${K.checkCircle} ISO 40500 — Accessibility</span>
      </footer>`,e.scrollTop=0,s())}function s(){let e=null;document.querySelectorAll(`.el-summary-card`).forEach(t=>{t.addEventListener(`click`,function(){let t=this.dataset.panel,n=document.getElementById(`summaryDetailPanel`),r=document.getElementById(`summaryPanelTitle`),i=document.getElementById(`summaryPanelBody`),a=document.getElementById(`summaryPanelEmpty`),o=document.getElementById(`panelData_`+t);if(!(!n||!o)){if(e===t){n.style.display=`none`,e=null,document.querySelectorAll(`.el-summary-card`).forEach(e=>e.classList.remove(`active`));return}e=t,r.textContent=o.dataset.title,i.innerHTML=o.innerHTML,a.style.display=o.innerHTML.trim()?`none`:`block`,i.style.display=o.innerHTML.trim()?`block`:`none`,n.style.display=`block`,document.querySelectorAll(`.el-summary-card`).forEach(e=>e.classList.remove(`active`)),this.classList.add(`active`)}})}),document.getElementById(`closeSummaryPanel`)?.addEventListener(`click`,()=>{document.getElementById(`summaryDetailPanel`).style.display=`none`,e=null,document.querySelectorAll(`.el-summary-card`).forEach(e=>e.classList.remove(`active`))});let s=document.getElementById(`gradeDetailModal`);function c(){s&&(s.style.display=`none`)}document.getElementById(`closeGradeDetail`)?.addEventListener(`click`,c),s?.addEventListener(`click`,e=>{e.target===s&&c()}),document.querySelectorAll(`.el-view-quiz-result`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.quiz,n=Sn[t];if(!n||!s)return;let{answers:r,questions:i,score:a,total:o,pct:c}=n,l=c>=80?`#10b981`:c>=60?`#3b82f6`:`#ef4444`,u=i.map((e,t)=>{let n=r[t]||`-`,i=n===e.jawaban;return`
            <div class="el-gd-question ${i?`correct`:`wrong`}">
              <div class="el-gd-q-header">
                <span class="el-gd-q-num">${t+1}</span>
                <span class="el-gd-q-icon">${i?`✅`:`❌`}</span>
              </div>
              <p class="el-gd-q-text">${e.soal}</p>
              <div class="el-gd-q-options">
                ${e.opsi.map(t=>{let r=t.key===e.jawaban,a=t.key===n,o=``;return r?o=`correct`:a&&!i&&(o=`wrong`),`<div class="el-gd-q-opt `+o+`">`+(r?`✓ `:a&&!i?`✗ `:``)+t.key+`. `+t.text+`</div>`}).join(``)}
              </div>
            </div>`}).join(``);document.getElementById(`gradeDetailTitle`).textContent=`📋 `+t,document.getElementById(`gradeDetailContent`).innerHTML=`
          <div class="el-gd-score-header" style="background:${l}">
            <div class="el-gd-score-ring">
              <svg viewBox="0 0 36 36" width="64" height="64">
                <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="3"/>
                <circle cx="18" cy="18" r="16" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"
                  stroke-dasharray="${c}, 100" transform="rotate(-90 18 18)"/>
              </svg>
              <span>${c}</span>
            </div>
            <div>
              <strong style="font-size:1.1rem">${a} / ${o} benar</strong>
              <p style="font-size:0.72rem;opacity:0.85;margin:2px 0 0">Pilihan Ganda · Dinilai otomatis</p>
            </div>
          </div>
          <div class="el-gd-questions">${u}</div>`,s.style.display=`flex`})}),document.querySelectorAll(`.el-view-tugas-result`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.tugas,r=t.nim||`2024001`,i=(J[n]||[]).find(e=>e.nim===r);if(!s)return;let a=i?.nilai,o=a==null?`#64748b`:a>=60?`#10b981`:`#ef4444`,c=a??`—`;document.getElementById(`gradeDetailTitle`).textContent=`📋 `+n,document.getElementById(`gradeDetailContent`).innerHTML=`
          <div class="el-gd-score-header" style="background:${o}">
            <div class="el-gd-score-ring">
              <svg viewBox="0 0 36 36" width="64" height="64">
                <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="3"/>
                <circle cx="18" cy="18" r="16" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"
                  stroke-dasharray="${a||0}, 100" transform="rotate(-90 18 18)"/>
              </svg>
              <span>${c}</span>
            </div>
            <div>
              <strong style="font-size:1.1rem">Nilai Tugas</strong>
              <p style="font-size:0.72rem;opacity:0.85;margin:2px 0 0">Dinilai oleh dosen</p>
            </div>
          </div>
          <div class="el-gd-tugas-info">
            ${i&&i.file?`<div class="el-gd-info-row"><span class="el-gd-label">📎 File</span><span class="el-gd-value">`+i.file+`</span></div>`:``}
            ${i&&i.waktu?`<div class="el-gd-info-row"><span class="el-gd-label">🕐 Dikirim</span><span class="el-gd-value">`+i.waktu+`</span></div>`:``}
            <div class="el-gd-info-row"><span class="el-gd-label">📊 Nilai</span><span class="el-gd-value" style="font-weight:700;font-size:1.1rem;color:${o}">${c} / 100</span></div>
          </div>`,s.style.display=`flex`})}),document.querySelectorAll(`.enter-course-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.classId),i=b.find(e=>e.id===n);i&&(r={kelas:i,tab:`materi`},o())})});let l=document.getElementById(`nilaiSayaModal`),u=document.getElementById(`nilaiModalContent`);function d(){l&&(l.style.display=`none`)}document.getElementById(`closeNilaiModal`)?.addEventListener(`click`,d),l?.addEventListener(`click`,e=>{e.target===l&&d()});function f(e){if(!u)return;let n=t.nim||`2024001`,r=[],i=b.map(t=>{let i=q[t.id]||{tugas:[],uts:[],uas:[],quiz:[]},a=``,o=[];(i.quiz||[]).forEach(e=>{let t=e.nilai;e.status===`Selesai`&&t!==null&&(o.push(t),r.push(t));let n=e.status===`Selesai`&&t!==null?`<span style="color:`+(t>=60?`#10b981`:`#ef4444`)+`;font-weight:700">`+t+`</span>`:`<span style="color:#94a3b8">—</span>`;a+=`<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid hsl(215 15% 96%);font-size:0.72rem;"><span style="background:#ef444415;color:#ef4444;padding:1px 6px;border-radius:4px;font-size:0.58rem;font-weight:700">QUIZ</span><span style="flex:1;color:hsl(215 30% 30%)">`+e.judul+`</span>`+n+`</div>`}),(i.tugas||[]).forEach(e=>{let t=(J[e.judul]||[]).find(e=>e.nim===n),i=t?.nilai;i!=null&&(o.push(i),r.push(i));let s=i==null?`<span style="color:#94a3b8">`+(t&&t.file?`Belum dinilai`:`—`)+`</span>`:`<span style="color:`+(i>=60?`#10b981`:`#ef4444`)+`;font-weight:700">`+i+`</span>`;a+=`<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid hsl(215 15% 96%);font-size:0.72rem;"><span style="background:#f59e0b15;color:#f59e0b;padding:1px 6px;border-radius:4px;font-size:0.58rem;font-weight:700">TUGAS</span><span style="flex:1;color:hsl(215 30% 30%)">`+e.judul+`</span>`+s+`</div>`}),(i.uts||[]).forEach(e=>{let t=null;e.mode===`upload`?t=(J[e.judul]||[]).find(e=>e.nim===n)?.nilai:e.status===`Selesai`&&(t=e.nilai),t!=null&&(o.push(t),r.push(t));let i=t==null?`<span style="color:#94a3b8">—</span>`:`<span style="color:`+(t>=60?`#10b981`:`#ef4444`)+`;font-weight:700">`+t+`</span>`;a+=`<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid hsl(215 15% 96%);font-size:0.72rem;"><span style="background:#8b5cf615;color:#8b5cf6;padding:1px 6px;border-radius:4px;font-size:0.58rem;font-weight:700">UTS</span><span style="flex:1;color:hsl(215 30% 30%)">`+e.judul+`</span>`+i+`</div>`}),(i.uas||[]).forEach(e=>{let t=null;e.mode===`upload`?t=(J[e.judul]||[]).find(e=>e.nim===n)?.nilai:e.status===`Selesai`&&(t=e.nilai),t!=null&&(o.push(t),r.push(t));let i=t==null?`<span style="color:#94a3b8">—</span>`:`<span style="color:`+(t>=60?`#10b981`:`#ef4444`)+`;font-weight:700">`+t+`</span>`;a+=`<div style="display:flex;align-items:center;gap:10px;padding:6px 0;font-size:0.72rem;"><span style="background:#6366f115;color:#6366f1;padding:1px 6px;border-radius:4px;font-size:0.58rem;font-weight:700">UAS</span><span style="flex:1;color:hsl(215 30% 30%)">`+e.judul+`</span>`+i+`</div>`});let s=o.length?Math.round(o.reduce((e,t)=>e+t,0)/o.length):null,c=s===null?`#94a3b8`:s>=80?`#10b981`:s>=60?`#3b82f6`:`#ef4444`,l=s===null?`—`:s,u=e?t.id===e:!0;return`<div style="margin-bottom:10px;border:1px solid hsl(215 15% 92%);border-radius:10px;overflow:hidden;"><div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:hsl(215 20% 98%);cursor:pointer;" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'"><div><strong style="font-size:0.78rem;color:hsl(215 40% 18%)">`+t.nama+`</strong><br><span style="font-size:0.62rem;color:hsl(215 15% 55%)">`+t.kode+` · `+t.dosen+`</span></div><span style="font-size:0.92rem;font-weight:800;color:`+c+`">`+l+`</span></div><div style="padding:8px 14px;`+(u?``:`display:none`)+`">`+a+`</div></div>`}).join(``),a=r.length?Math.round(r.reduce((e,t)=>e+t,0)/r.length):0,o=a>=80?`#10b981`:a>=60?`#3b82f6`:`#f59e0b`;u.innerHTML=`<div style="text-align:center;padding:12px 0 16px;"><div style="display:inline-block;position:relative;"><svg viewBox="0 0 36 36" width="64" height="64"><circle cx="18" cy="18" r="16" fill="none" stroke="hsl(215 15% 92%)" stroke-width="3"/><circle cx="18" cy="18" r="16" fill="none" stroke="`+o+`" stroke-width="3" stroke-linecap="round" stroke-dasharray="`+a+`, 100" transform="rotate(-90 18 18)"/></svg><span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:0.92rem;font-weight:800;color:`+o+`">`+a+`</span></div><p style="font-size:0.68rem;color:hsl(215 15% 55%);margin:6px 0 0">Rata-rata keseluruhan dari `+r.length+` komponen yang dinilai</p></div>`+i}document.getElementById(`toggleNilaiView`)?.addEventListener(`click`,()=>{f(null),l&&(l.style.display=`flex`)}),document.querySelectorAll(`.el-kelas-nilai-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),f(parseInt(e.dataset.classId)),l&&(l.style.display=`flex`)})}),document.querySelectorAll(`[data-action="back-to-kelas"]`).forEach(e=>{e.addEventListener(`click`,()=>{r=null,n=`home`,o()})}),document.querySelectorAll(`[data-action="back-from-quiz"]`).forEach(e=>{e.addEventListener(`click`,()=>{r&&(r.activeQuiz=null,r.quizResult=null,r.quizIntro=null,a&&=(clearInterval(a),null),i={},o())})}),document.querySelectorAll(`[data-action="back-from-forum"]`).forEach(e=>{e.addEventListener(`click`,()=>{r&&(r.activeForum=null,o())})}),document.querySelectorAll(`.el-open-forum`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.classId),i=parseInt(e.dataset.forumIdx),a=q[n];!a||!a.forum[i]||(a.forum[i].replies||(a.forum[i].replies=[]),r.activeForum={forum:a.forum[i],classId:n},o())})}),document.getElementById(`forumSendBtn`)?.addEventListener(`click`,()=>{let e=document.getElementById(`forumReplyInput`)?.value.trim();if(!e||!r?.activeForum)return;let n=r.activeForum.forum;n.replies||=[],n.replies.push({author:t.nama||`User`,text:e,waktu:`baru saja`,role:t.role||`mahasiswa`}),n.balasan=n.replies.length,n.waktu=`baru saja`,o(),setTimeout(()=>{let e=document.getElementById(`forumThread`);e&&(e.scrollTop=e.scrollHeight)},100)}),document.querySelectorAll(`.el-start-quiz`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.classId),a=parseInt(e.dataset.quizIdx),s=q[n];!s||!s.quiz[a]||(i={},r.quizIntro=s.quiz[a],o())})}),document.querySelector(`.el-start-quiz-now`)?.addEventListener(`click`,()=>{if(!r?.quizIntro)return;r.activeQuiz=r.quizIntro,r.quizIntro=null,o();let e=r.activeQuiz.durasi||`30 menit`,t=(parseInt(e)||30)*60,n=document.getElementById(`timerText`),i=document.getElementById(`quizTimer`);a&&clearInterval(a),a=setInterval(()=>{if(t--,t<=0){clearInterval(a),a=null,document.getElementById(`quizSubmit`)?.click();return}let e=Math.floor(t/60),r=t%60;n&&(n.textContent=String(e).padStart(2,`0`)+`:`+String(r).padStart(2,`0`)),i&&t<60&&i.classList.add(`danger`)},1e3)});let p=document.getElementById(`quizContent`);if(p){let e=0,t=p.querySelectorAll(`.el-quiz-question`),n=t.length,s=document.getElementById(`quizPrev`),c=document.getElementById(`quizNext`),l=document.getElementById(`quizSubmit`),u=document.getElementById(`quizProgress`);function d(r){t.forEach((e,t)=>{e.classList.toggle(`hidden`,t!==r)}),e=r,s&&(s.disabled=r===0),c&&c.classList.toggle(`hidden`,r===n-1),l&&l.classList.toggle(`hidden`,r!==n-1),u&&(u.textContent=r+1+` / `+n),document.querySelectorAll(`.el-quiz-nav-btn`).forEach((e,t)=>{e.classList.toggle(`active`,t===r),i[t]!==void 0&&e.classList.add(`answered`)})}s?.addEventListener(`click`,()=>{e>0&&d(e-1)}),c?.addEventListener(`click`,()=>{e<n-1&&d(e+1)}),document.querySelectorAll(`.el-quiz-nav-btn`).forEach(e=>{e.addEventListener(`click`,()=>d(parseInt(e.dataset.q)))}),document.querySelectorAll(`.el-quiz-option`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.qi),n=e.dataset.key;i[t]=n,e.closest(`.el-quiz-options`).querySelectorAll(`.el-quiz-option`).forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),e.querySelector(`input`).checked=!0,document.querySelectorAll(`.el-quiz-nav-btn`).forEach((e,t)=>{i[t]!==void 0&&e.classList.add(`answered`)})})}),l?.addEventListener(`click`,()=>{a&&=(clearInterval(a),null);let e=r.activeQuiz,t=Y[e.judul]||Cn(e.judul,e.soal),n=0;t.forEach((e,t)=>{i[t]===e.jawaban&&n++});let s=Math.round(n/t.length*100);e.status=`Selesai`,e.nilai=s,Sn[e.judul]={answers:{...i},questions:t,score:n,total:t.length,pct:s},r.activeQuiz=null,r.quizResult={quiz:e,score:n,total:t.length,answers:i,questions:t},o()})}document.querySelectorAll(`.course-tab`).forEach(e=>{e.addEventListener(`click`,()=>{r&&(r.tab=e.dataset.tab,o())})}),document.querySelectorAll(`.course-card:not(.video-card)`).forEach(e=>{let t=e.querySelector(`.enter-course-btn`);t&&(e.addEventListener(`click`,e=>{e.target.closest(`.enter-course-btn`)||t.click()}),e.style.cursor=`pointer`)});let m=document.getElementById(`addContentModal`),h=document.getElementById(`formType`),g=document.getElementById(`dynamicFields`);function _(e,t){m&&(document.getElementById(`formMeeting`).value=e,document.getElementById(`formClassId`).value=t,document.getElementById(`modalTitle`).textContent=`Tambah Konten — Pertemuan `+e,document.getElementById(`formJudul`).value=``,y(),m.style.display=`flex`)}function v(){m&&(m.style.display=`none`)}function y(){if(!g)return;let e=h?.value||`materi`,t=`<div class="el-form-group"><label>Upload File</label><div class="el-upload-zone" id="uploadZone"><input type="file" id="fFile" class="el-upload-input" /><div class="el-upload-content"><span class="el-upload-icon">📁</span><p class="el-upload-text">Klik atau drag file ke sini</p><p class="el-upload-hint">`;g.innerHTML={materi:t+`PDF, PPT, DOCX, MP4 (maks 50MB)</p></div><p class="el-upload-filename" id="uploadedFileName"></p></div></div><div class="el-form-row"><div class="el-form-group"><label>Tipe File</label><select id="fTipe"><option>PDF</option><option>PPT</option><option>DOCX</option><option>MP4</option></select></div><div class="el-form-group"><label>Ukuran</label><input type="text" id="fUkuran" placeholder="otomatis dari file" /></div></div><div class="el-form-group"><label>Deskripsi (opsional)</label><textarea id="fDesc" rows="2" placeholder="Deskripsi materi..." style="resize:vertical"></textarea></div>`,tugas:`<div class="el-form-row"><div class="el-form-group"><label>Jenis Tugas</label><select id="fTugasType"><option>Tugas Individu</option><option>Tugas Kelompok</option><option>UTS</option><option>UAS</option><option>Ujian Praktikum</option></select></div><div class="el-form-group"><label>Deadline</label><input type="datetime-local" id="fDeadline" /></div></div>`+t+`Soal / instruksi tugas (PDF, DOCX)</p></div><p class="el-upload-filename" id="uploadedFileName"></p></div></div><div class="el-form-group"><label>Instruksi (opsional)</label><textarea id="fDesc" rows="2" placeholder="Instruksi pengerjaan tugas..." style="resize:vertical"></textarea></div>`,quiz:`<div class="el-form-row"><div class="el-form-group"><label>Tipe Quiz</label><select id="fQuizTipe"><option>Quiz Harian</option><option>UTS</option><option>UAS</option><option>Kuis Praktikum</option></select></div><div class="el-form-group"><label>Durasi</label><input type="text" id="fDurasi" placeholder="30 menit" /></div></div><div class="el-form-row"><div class="el-form-group"><label>Jumlah Soal</label><input type="number" id="fSoal" placeholder="20" /></div><div class="el-form-group"><label>Deadline</label><input type="datetime-local" id="fQDeadline" /></div></div>`+t+`Import soal dari file (opsional)</p></div><p class="el-upload-filename" id="uploadedFileName"></p></div></div><p class="el-upload-note">💡 Soal juga bisa ditambah manual lewat <strong>Kelola Soal</strong> setelah quiz dibuat</p>`,forum:`<div class="el-form-group"><label>Topik Diskusi (opsional)</label><textarea id="fDesc" rows="2" placeholder="Deskripsi topik diskusi..."></textarea></div><div class="el-form-group"><label>Deadline Diskusi</label><input type="datetime-local" id="fForumDeadline" /></div>`,video:`<div class="el-form-row"><div class="el-form-group"><label>Durasi Video</label><input type="text" id="fVDurasi" placeholder="cth: 45:30" /></div><div class="el-form-group"><label>URL Video (opsional)</label><input type="text" id="fVUrl" placeholder="https://youtube.com/..." /></div></div>`+t+`Upload video (MP4, maks 200MB)</p></div><p class="el-upload-filename" id="uploadedFileName"></p></div></div>`,uts:`<div class="el-form-row"><div class="el-form-group"><label>Mode UTS</label><select id="fTugasType"><option value="Pilihan Ganda">📋 Pilihan Ganda (auto-score)</option><option value="Upload PDF">📄 Upload PDF (manual)</option></select></div><div class="el-form-group"><label>Deadline</label><input type="datetime-local" id="fDeadline" /></div></div><div id="pgFields"><div class="el-form-row"><div class="el-form-group"><label>Durasi (menit)</label><input type="number" id="fDurasi" placeholder="90" /></div><div class="el-form-group"><label>Jumlah Soal</label><input type="number" id="fSoal" placeholder="30" /></div></div><p class="el-upload-note">💡 Soal pilihan ganda dikerjakan online. Soal bisa ditambah manual setelah UTS dibuat.</p></div><div id="uploadFields" style="display:none">`+t+`Mahasiswa upload jawaban UTS (PDF, DOCX)</p></div><p class="el-upload-filename" id="uploadedFileName"></p></div></div><div class="el-form-group"><label>Instruksi (opsional)</label><textarea id="fDesc" rows="2" placeholder="Instruksi pengerjaan UTS..." style="resize:vertical"></textarea></div></div>`,uas:`<div class="el-form-row"><div class="el-form-group"><label>Mode UAS</label><select id="fTugasType"><option value="Upload PDF">📄 Upload PDF (manual)</option><option value="Pilihan Ganda">📋 Pilihan Ganda (auto-score)</option></select></div><div class="el-form-group"><label>Deadline</label><input type="datetime-local" id="fDeadline" /></div></div><div id="pgFields" style="display:none"><div class="el-form-row"><div class="el-form-group"><label>Durasi (menit)</label><input type="number" id="fDurasi" placeholder="120" /></div><div class="el-form-group"><label>Jumlah Soal</label><input type="number" id="fSoal" placeholder="40" /></div></div><p class="el-upload-note">💡 Soal pilihan ganda dikerjakan online. Soal bisa ditambah manual setelah UAS dibuat.</p></div><div id="uploadFields">`+t+`Mahasiswa upload jawaban UAS (PDF, DOCX)</p></div><p class="el-upload-filename" id="uploadedFileName"></p></div></div><div class="el-form-group"><label>Instruksi (opsional)</label><textarea id="fDesc" rows="2" placeholder="Instruksi pengerjaan UAS..." style="resize:vertical"></textarea></div></div>`}[e]||``;let n=document.getElementById(`fTugasType`),r=document.getElementById(`pgFields`),i=document.getElementById(`uploadFields`);if(n&&r&&i&&(e===`uts`||e===`uas`)){function e(){let e=n.value===`Pilihan Ganda`;r.style.display=e?``:`none`,i.style.display=e?`none`:``}n.addEventListener(`change`,e)}let a=document.getElementById(`fFile`),o=document.getElementById(`uploadedFileName`),s=document.getElementById(`uploadZone`);a&&o&&a.addEventListener(`change`,()=>{if(a.files.length>0){let e=a.files[0],t=(e.size/1024/1024).toFixed(1);o.textContent=`📎 `+e.name+` (`+t+` MB)`,o.style.display=`block`,s.classList.add(`has-file`);let n=document.getElementById(`fUkuran`);n&&(n.value=t+` MB`);let r=document.getElementById(`fTipe`);if(r){let t=e.name.split(`.`).pop().toUpperCase();for(let e of r.options)if(e.value===t){r.value=t;break}}}})}h?.addEventListener(`change`,y),document.getElementById(`closeModal`)?.addEventListener(`click`,v),document.getElementById(`cancelModal`)?.addEventListener(`click`,v),m?.addEventListener(`click`,e=>{e.target===m&&v()}),document.querySelectorAll(`.el-prt-add-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),_(e.dataset.meeting,e.dataset.classId)})}),document.querySelectorAll(`.el-prt-delete-item`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.type,r=parseInt(e.dataset.idx),i=q[parseInt(e.dataset.classId)];!i||!i[n]||confirm(`Hapus konten ini?`)&&(i[n].splice(r,1),o())})});let x=null;document.querySelectorAll(`.el-prt-edit-item`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.type,r=parseInt(e.dataset.idx),i=parseInt(e.dataset.classId),a=q[i];if(!a||!a[n]||!a[n][r])return;let o=a[n][r];x={type:n,idx:r,classId:i},m&&(document.getElementById(`formMeeting`).value=o.pertemuan||1,document.getElementById(`formClassId`).value=i,document.getElementById(`modalTitle`).textContent=`✏️ Edit `+n.charAt(0).toUpperCase()+n.slice(1)+` — `+o.judul,document.getElementById(`formJudul`).value=o.judul,h&&(h.value=n,y()),setTimeout(()=>{if(n===`materi`){let e=document.getElementById(`fTipe`),t=document.getElementById(`fUkuran`);e&&(e.value=o.tipe||`PDF`),t&&(t.value=o.ukuran||``)}else if(n===`tugas`){let e=document.getElementById(`fTugasType`),t=document.getElementById(`fDeadline`);e&&(e.value=o.type||`Tugas Individu`),t&&o.deadline&&(t.value=o.deadline.replace(` `,`T`))}else if(n===`quiz`){let e=document.getElementById(`fSoal`),t=document.getElementById(`fDurasi`),n=document.getElementById(`fQDeadline`);e&&(e.value=o.soal||``),t&&(t.value=o.durasi||``),n&&o.deadline&&(n.value=o.deadline)}else if(n===`video`){let e=document.getElementById(`fVDurasi`);e&&(e.value=o.durasi||``)}else if(n===`forum`){let e=document.getElementById(`fForumDeadline`);e&&o.deadline&&(e.value=o.deadline.replace(` `,`T`))}},50),m.style.display=`flex`)})});let S=document.getElementById(`addContentForm`);S&&S.addEventListener(`submit`,e=>{if(!x)return;e.preventDefault(),e.stopImmediatePropagation();let{type:t,idx:n,classId:r}=x,i=q[r];if(!i||!i[t]||!i[t][n]){x=null;return}let a=i[t][n];a.judul=document.getElementById(`formJudul`).value.trim(),t===`materi`?(a.tipe=document.getElementById(`fTipe`)?.value||a.tipe,a.ukuran=document.getElementById(`fUkuran`)?.value||a.ukuran,a.icon={PDF:`📄`,PPT:`📊`,DOCX:`📃`,MP4:`🎬`}[a.tipe]||`📄`):t===`tugas`?(a.type=document.getElementById(`fTugasType`)?.value||a.type,a.deadline=document.getElementById(`fDeadline`)?.value||a.deadline):t===`quiz`?(a.soal=parseInt(document.getElementById(`fSoal`)?.value)||a.soal,a.durasi=document.getElementById(`fDurasi`)?.value||a.durasi,a.deadline=document.getElementById(`fQDeadline`)?.value||a.deadline):t===`video`?a.durasi=document.getElementById(`fVDurasi`)?.value||a.durasi:t===`forum`&&(a.deadline=document.getElementById(`fForumDeadline`)?.value||a.deadline),x=null,v(),o()},!0),document.getElementById(`addNewPertemuan`)?.addEventListener(`click`,()=>{let e=parseInt(document.getElementById(`addNewPertemuan`).dataset.classId),t=q[e];if(!t)return;let n=[...new Set([...t.materi.map(e=>e.pertemuan),...t.tugas.map(e=>e.pertemuan),...(t.uts||[]).map(e=>e.pertemuan),...(t.uas||[]).map(e=>e.pertemuan),...t.forum.map(e=>e.pertemuan),...t.quiz.map(e=>e.pertemuan),...t.video.map(e=>e.pertemuan)])];_(n.length?Math.max(...n)+1:1,e)}),document.getElementById(`addContentForm`)?.addEventListener(`submit`,e=>{e.preventDefault();let n=parseInt(document.getElementById(`formClassId`).value),r=parseInt(document.getElementById(`formMeeting`).value),i=h.value,a=document.getElementById(`formJudul`).value.trim();if(!a)return;let s=q[n];if(!s)return;let c=new Date().toLocaleDateString(`id-ID`,{day:`numeric`,month:`short`,year:`numeric`});if(i===`materi`){let e=document.getElementById(`fTipe`)?.value||`PDF`,t=document.getElementById(`fUkuran`)?.value||`1.0 MB`;s.materi.push({judul:a,tipe:e,ukuran:t,tanggal:c,icon:{PDF:`📄`,PPT:`📊`,MP4:`🎬`}[e]||`📄`,pertemuan:r})}else if(i===`tugas`){let e=document.getElementById(`fTugasType`)?.value||`Tugas Individu`,t=document.getElementById(`fDeadline`)?.value||``;s.tugas.push({judul:a,type:e,deadline:t||`2026-05-01 23:59`,status:`Belum`,pertemuan:r})}else if(i===`quiz`){let e=parseInt(document.getElementById(`fSoal`)?.value)||20,t=document.getElementById(`fDurasi`)?.value||`30 menit`,n=document.getElementById(`fQDeadline`)?.value||`2026-05-01`;s.quiz.push({judul:a,soal:e,durasi:t,status:`Belum`,deadline:n,nilai:null,pertemuan:r})}else if(i===`forum`){let e=document.getElementById(`fForumDeadline`)?.value||``;s.forum.push({judul:a,balasan:0,waktu:`baru saja`,author:t.nama||`Dosen`,hot:!1,pertemuan:r,deadline:e,replies:[]})}else if(i===`video`){let e=document.getElementById(`fVDurasi`)?.value||`00:00`;s.video.push({judul:a,durasi:e,views:0,status:`new`,pertemuan:r})}else if(i===`uts`||i===`uas`){let e=document.getElementById(`fDeadline`)?.value||``,t=document.getElementById(`fTugasType`)?.value||`Upload PDF`,n=t===`Pilihan Ganda`?`pg`:`upload`,o={judul:a,type:t,mode:n,deadline:e||`2026-05-01 23:59`,status:`Belum`,nilai:null,pertemuan:r};n===`pg`&&(o.soal=30,o.waktu=90),s[i]||(s[i]=[]),s[i].push(o)}v(),o()});let C=document.getElementById(`quizEditorModal`),w=null;function T(){C&&(C.style.display=`none`)}function E(){let e=document.getElementById(`quizEditorList`);if(!e||!w)return;let t=Y[w.judul]||[];if(t.length===0){e.innerHTML=`<p style="color:hsl(215 15% 55%);font-size:0.78rem;text-align:center;padding:10px">Belum ada soal. Tambahkan soal baru di bawah.</p>`;return}e.innerHTML=t.map((e,t)=>`
        <div class="el-qe-item">
          <div class="el-qe-num">${t+1}</div>
          <div class="el-qe-body">
            <p class="el-qe-soal">${e.soal}</p>
            <div class="el-qe-options">
              ${e.opsi.map(t=>`<span class="el-qe-opt`+(t.key===e.jawaban?` correct`:``)+`">`+t.key+`. `+t.text+`</span>`).join(``)}
            </div>
          </div>
          <button class="el-qe-delete" data-qi="${t}" title="Hapus soal">🗑</button>
        </div>
      `).join(``),e.querySelectorAll(`.el-qe-delete`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.qi),n=Y[w.judul];n&&(n.splice(t,1),w.soal=n.length,E())})})}document.querySelectorAll(`.el-edit-quiz`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.classId),r=parseInt(e.dataset.quizIdx),i=q[n];!i||!i.quiz[r]||(w=i.quiz[r],Y[w.judul]||(Y[w.judul]=[]),document.getElementById(`quizEditorTitle`).textContent=`📝 `+w.judul,E(),C.style.display=`flex`)})}),document.getElementById(`closeQuizEditor`)?.addEventListener(`click`,()=>{T(),o()}),C?.addEventListener(`click`,e=>{e.target===C&&(T(),o())}),document.getElementById(`addQuizQuestion`)?.addEventListener(`click`,()=>{if(!w)return;let e=document.getElementById(`qeSoal`)?.value.trim(),t=document.getElementById(`qeA`)?.value.trim(),n=document.getElementById(`qeB`)?.value.trim(),r=document.getElementById(`qeC`)?.value.trim(),i=document.getElementById(`qeD`)?.value.trim(),a=document.getElementById(`qeJawaban`)?.value;if(!e||!t||!n||!r||!i){alert(`Mohon isi pertanyaan dan semua pilihan A-D.`);return}Y[w.judul]||(Y[w.judul]=[]),Y[w.judul].push({soal:e,jawaban:a,opsi:[{key:`A`,text:t},{key:`B`,text:n},{key:`C`,text:r},{key:`D`,text:i}]}),w.soal=Y[w.judul].length,document.getElementById(`qeSoal`).value=``,document.getElementById(`qeA`).value=``,document.getElementById(`qeB`).value=``,document.getElementById(`qeC`).value=``,document.getElementById(`qeD`).value=``,E()});let D=document.getElementById(`filePreviewModal`),O=100;function ee(e,t){if(!D)return;document.getElementById(`previewFileName`).textContent=`📄 `+e,document.getElementById(`previewStudentName`).textContent=`oleh `+t,O=100,document.getElementById(`previewZoomLevel`).textContent=`100%`;let n=e.split(`.`).pop().toLowerCase()===`pdf`,r=e.replace(/\.[^.]+$/,``).replace(/_/g,` `),i=`
        <div class="el-preview-doc ${n?`pdf`:`word`}">
          <div class="el-preview-doc-header">
            <div class="el-preview-doc-icon">${n?`📕`:`📘`}</div>
            <div>
              <h2>${r}</h2>
              <p class="el-preview-doc-meta">${n?`PDF Document`:`Microsoft Word`} · Dikirim oleh ${t}</p>
            </div>
          </div>
          <hr style="border:none;border-top:2px solid hsl(215 15% 90%);margin:16px 0">
          <div class="el-preview-doc-body">
            <h3>I. Pendahuluan</h3>
            <p>Kebijakan publik merupakan serangkaian tindakan yang ditetapkan dan dilaksanakan oleh pemerintah dengan tujuan tertentu demi kepentingan masyarakat. Dalam konteks Indonesia, kebijakan publik menjadi instrumen penting dalam pembangunan nasional yang berkelanjutan.</p>
            <p>Analisis kebijakan publik bertujuan untuk mengevaluasi efektivitas dan efisiensi dari kebijakan yang telah diimplementasikan. Proses ini melibatkan pengumpulan data, identifikasi masalah, dan formulasi rekomendasi perbaikan.</p>
            
            <h3>II. Tinjauan Pustaka</h3>
            <p>Menurut Thomas R. Dye (2012), kebijakan publik adalah "apapun yang dipilih pemerintah untuk dilakukan atau tidak dilakukan." Definisi ini menunjukkan bahwa kebijakan publik tidak hanya mencakup tindakan aktif pemerintah, tetapi juga keputusan untuk tidak bertindak.</p>
            <blockquote>
              <em>"Public policy is whatever governments choose to do or not to do."</em> — Thomas R. Dye, Understanding Public Policy
            </blockquote>
            <p>Anderson (2015) mendefinisikan kebijakan publik sebagai serangkaian tindakan yang saling terkait yang diambil oleh aktor atau sekelompok aktor untuk menangani suatu masalah atau keprihatinan tertentu.</p>
            
            <h3>III. Metodologi</h3>
            <p>Penelitian ini menggunakan pendekatan kualitatif deskriptif dengan metode studi kasus. Data dikumpulkan melalui wawancara mendalam, observasi partisipatif, dan analisis dokumen.</p>
            <table class="el-preview-table">
              <thead><tr><th>Aspek</th><th>Metode</th><th>Sumber Data</th></tr></thead>
              <tbody>
                <tr><td>Konteks Kebijakan</td><td>Analisis Dokumen</td><td>Peraturan Pemerintah</td></tr>
                <tr><td>Implementasi</td><td>Wawancara</td><td>Pelaksana Kebijakan</td></tr>
                <tr><td>Dampak</td><td>Observasi</td><td>Masyarakat Sasaran</td></tr>
                <tr><td>Evaluasi</td><td>Mixed Method</td><td>Stakeholder</td></tr>
              </tbody>
            </table>
            
            <h3>IV. Kesimpulan</h3>
            <p>Berdasarkan hasil analisis, dapat disimpulkan bahwa kebijakan publik daerah dalam bidang yang diteliti telah menunjukkan dampak positif terhadap kehidupan masyarakat, meskipun masih terdapat beberapa aspek yang perlu diperbaiki dalam tahap implementasi.</p>
          </div>
          <div class="el-preview-doc-footer">
            <span>📄 Halaman 1 dari 1</span>
            <span>${n?`PDF`:`DOCX`} — Dibaca di E-Learning STIA Bayuangga</span>
          </div>
        </div>`;document.getElementById(`previewContent`).innerHTML=i,document.getElementById(`previewContent`).style.transform=`scale(1)`,D.style.display=`flex`}document.getElementById(`closePreview`)?.addEventListener(`click`,()=>{D&&(D.style.display=`none`)}),D?.addEventListener(`click`,e=>{e.target===D&&(D.style.display=`none`)}),document.getElementById(`previewZoomIn`)?.addEventListener(`click`,()=>{O<200&&(O+=25,document.getElementById(`previewZoomLevel`).textContent=O+`%`,document.getElementById(`previewContent`).style.transform=`scale(`+O/100+`)`)}),document.getElementById(`previewZoomOut`)?.addEventListener(`click`,()=>{O>75&&(O-=25,document.getElementById(`previewZoomLevel`).textContent=O+`%`,document.getElementById(`previewContent`).style.transform=`scale(`+O/100+`)`)});let k=document.getElementById(`studentUploadModal`),A=null,j=`tugas`;function M(){k&&(k.style.display=`none`);let e=document.getElementById(`tugasDetailStep`),t=document.getElementById(`tugasUploadStep`);e&&(e.style.display=``),t&&(t.style.display=`none`)}function te(e,n){A=e,j=n||`tugas`;let r=j===`uts`?`UTS`:j===`uas`?`UAS`:`Tugas`;document.getElementById(`uploadTugasTitle`).textContent=`📋 Detail `+r;let i=e.deadline?new Date(e.deadline).toLocaleDateString(`id-ID`,{day:`numeric`,month:`long`,year:`numeric`,hour:`2-digit`,minute:`2-digit`}):`-`,a=new Date,o=e.deadline?new Date(e.deadline):null,s=o?Math.ceil((o-a)/(1e3*60*60*24)):null,c=`#10b981`,l=s+` hari lagi`;s!==null&&(s<0?(c=`#ef4444`,l=`Sudah lewat`):s<3?(c=`#f59e0b`,l=s+` hari lagi`):s===0&&(c=`#ef4444`,l=`Hari ini!`)),document.getElementById(`uploadTugasInfo`).innerHTML=`
        <div style="background:linear-gradient(135deg,hsl(215 40% 97%),hsl(215 30% 94%));padding:14px 18px;border-radius:10px;margin-bottom:4px">
          <h3 style="margin:0 0 6px;font-size:0.95rem;color:hsl(215 40% 22%)">${e.judul}</h3>
          <div style="display:flex;gap:8px;flex-wrap:wrap;font-size:0.72rem">
            <span style="background:${j===`uts`?`#ef444415`:j===`uas`?`#8b5cf615`:`#f59e0b15`};color:${j===`uts`?`#ef4444`:j===`uas`?`#8b5cf6`:`#f59e0b`};padding:2px 8px;border-radius:4px;font-weight:700">${r}</span>
            <span style="color:hsl(215 15% 50%)">${e.type||``}</span>
            <span style="color:${c};font-weight:600">📅 ${i} · ${l}</span>
          </div>
        </div>`;let u=document.getElementById(`tugasInstruksi`);u&&(u.innerHTML=e.instruksi?`<div style="padding:12px 16px;background:#fff;border:1px solid hsl(215 15% 92%);border-radius:8px"><p style="font-size:0.68rem;color:hsl(215 15% 50%);margin:0 0 4px;font-weight:600">📝 INSTRUKSI DOSEN</p><p style="font-size:0.78rem;color:hsl(215 25% 25%);margin:0;line-height:1.6">`+e.instruksi+`</p></div>`:`<div style="padding:12px 16px;background:#fff;border:1px solid hsl(215 15% 92%);border-radius:8px"><p style="font-size:0.68rem;color:hsl(215 15% 50%);margin:0 0 4px;font-weight:600">📝 INSTRUKSI</p><p style="font-size:0.78rem;color:hsl(215 15% 60%);margin:0;font-style:italic">Kerjakan sesuai dengan materi perkuliahan. Upload file jawaban dalam format PDF atau DOCX.</p></div>`);let d=document.getElementById(`tugasDosenFile`);d&&(d.innerHTML=e.soalFile?`<div style="padding:10px 14px;background:hsl(215 30% 97%);border-radius:8px;font-size:0.75rem;display:flex;align-items:center;gap:8px"><span>📄</span><span style="flex:1;color:hsl(215 25% 30%)"><strong>Soal:</strong> `+e.soalFile+`</span><button style="background:#3b82f6;color:#fff;border:none;padding:4px 10px;border-radius:5px;font-size:0.65rem;cursor:pointer">📥 Unduh</button></div>`:``);let f=document.getElementById(`tugasMySubmission`);if(f){let n=t.nim||`2024101001`,r=(J[e.judul]||[]).find(e=>e.nim===n);r&&r.file?f.innerHTML=`<div style="padding:10px 14px;background:hsl(150 40% 96%);border:1px solid hsl(150 30% 88%);border-radius:8px;font-size:0.75rem"><p style="margin:0 0 4px;font-weight:600;color:#059669">✅ Sudah dikumpulkan</p><p style="margin:0;color:hsl(215 25% 35%)">📎 `+r.file+` · `+(r.waktu||``)+`</p>`+(r.nilai!==null&&r.nilai!==void 0?`<p style="margin:4px 0 0;font-weight:700;color:#10b981">Nilai: `+r.nilai+`/100</p>`:``)+`</div>`:f.innerHTML=`<div style="padding:10px 14px;background:hsl(40 60% 96%);border:1px solid hsl(40 40% 88%);border-radius:8px;font-size:0.75rem;color:#92400e"><span>⏳</span> Belum mengumpulkan jawaban</div>`}let p=document.getElementById(`goToUploadStep`);if(p)if(o&&o<a)p.style.display=`none`;else{p.style.display=``;let n=t.nim||`2024101001`,r=(J[e.judul]||[]).find(e=>e.nim===n);p.textContent=r&&r.file?`✏️ Edit Jawaban`:`📤 Kumpulkan Jawaban`}document.getElementById(`tugasDetailStep`).style.display=``,document.getElementById(`tugasUploadStep`).style.display=`none`,k.style.display=`flex`}document.querySelectorAll(`.el-upload-tugas`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.classId),r=parseInt(e.dataset.tugasIdx),i=e.dataset.tugasType||`tugas`,a=q[n];if(!a)return;let o=a[i]||a.tugas;!o||!o[r]||te(o[r],i)})}),document.getElementById(`goToUploadStep`)?.addEventListener(`click`,()=>{document.getElementById(`tugasDetailStep`).style.display=`none`,document.getElementById(`tugasUploadStep`).style.display=``,document.getElementById(`uploadTugasTitle`).textContent=`📤 Upload Jawaban`;let e=document.getElementById(`studentFileInput`);e&&(e.value=``);let t=document.getElementById(`studentFileName`);t&&(t.style.display=`none`,t.textContent=``);let n=document.getElementById(`studentUploadZone`);n&&n.classList.remove(`has-file`);let r=document.getElementById(`studentUploadNote`);r&&(r.value=``)}),document.getElementById(`backToDetail`)?.addEventListener(`click`,()=>{document.getElementById(`tugasDetailStep`).style.display=``,document.getElementById(`tugasUploadStep`).style.display=`none`;let e=j===`uts`?`UTS`:j===`uas`?`UAS`:`Tugas`;document.getElementById(`uploadTugasTitle`).textContent=`📋 Detail `+e}),document.getElementById(`cancelUploadStep`)?.addEventListener(`click`,M),document.getElementById(`studentFileInput`)?.addEventListener(`change`,function(){let e=document.getElementById(`studentFileName`),t=document.getElementById(`studentUploadZone`);if(this.files.length>0){let n=this.files[0],r=(n.size/1024/1024).toFixed(1);e.textContent=`📎 `+n.name+` (`+r+` MB)`,e.style.display=`block`,t.classList.add(`has-file`)}}),document.getElementById(`closeStudentUpload`)?.addEventListener(`click`,M),document.getElementById(`cancelStudentUpload`)?.addEventListener(`click`,M),k?.addEventListener(`click`,e=>{e.target===k&&M()}),document.getElementById(`submitStudentUpload`)?.addEventListener(`click`,()=>{if(!A)return;let e=document.getElementById(`studentFileInput`);if(!e||!e.files.length){alert(`Pilih file terlebih dahulu!`);return}let n=e.files[0],r=new Date,i=r.toLocaleDateString(`id-ID`,{day:`numeric`,month:`short`,year:`numeric`})+`, `+r.toLocaleTimeString(`id-ID`,{hour:`2-digit`,minute:`2-digit`});J[A.judul]||(J[A.judul]=[]);let a=J[A.judul].find(e=>e.nim===(t.nim||`2024001`));a?(a.file=n.name,a.waktu=i):J[A.judul].push({nama:t.nama||`Mahasiswa`,nim:t.nim||`2024001`,file:n.name,waktu:i,nilai:null}),A.status=`Sudah`,M(),o()});let N=document.getElementById(`gradingModal`),P=null;function ne(){N&&(N.style.display=`none`)}function re(){let e=document.getElementById(`gradingList`);if(!e||!P)return;let t=J[P.judul]||[];if(t.length===0){e.innerHTML=`<p style="color:hsl(215 15% 55%);font-size:0.78rem;text-align:center;padding:10px">Belum ada mahasiswa yang mengumpulkan tugas.</p>`;return}e.innerHTML=t.map((e,t)=>{let n=e.file?e.file.split(`.`).pop().toLowerCase():``,r=n===`pdf`||n===`doc`||n===`docx`,i=e.file?r?`<button class="el-file-preview-btn" data-file="`+e.file+`" data-student="`+e.nama+`">👁 Baca</button>`:`<button class="el-file-download-btn" data-file="`+e.file+`">📥 Unduh</button>`:``;return`
        <div class="el-grade-row">
          <div class="el-grade-student">
            <div class="el-grade-avatar">${e.nama.split(` `).map(e=>e[0]).join(``).substring(0,2)}</div>
            <div>
              <span class="el-grade-name">${e.nama}</span>
              <span class="el-grade-nim">${e.nim}</span>
            </div>
          </div>
          <div class="el-grade-file ${e.file?``:`empty`}">
            ${e.file?`📎 `+e.file:`<span style="color:#ef4444">✗ Belum submit</span>`}
            ${e.waktu?`<br><small style="color:hsl(215 15% 55%)">`+e.waktu+`</small>`:``}
            ${i}
          </div>
          <div class="el-grade-input-wrap">
            <input type="number" class="el-grade-input" data-si="${t}" min="0" max="100" placeholder="—" value="${e.nilai!==null&&e.nilai!==void 0?e.nilai:``}" ${e.file?``:`disabled`} />
            <span class="el-grade-max">/100</span>
          </div>
        </div>`}).join(``),e.querySelectorAll(`.el-file-preview-btn`).forEach(e=>{e.addEventListener(`click`,()=>{ee(e.dataset.file,e.dataset.student)})})}document.querySelectorAll(`.el-grade-tugas`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.classId),r=parseInt(e.dataset.tugasIdx),i=q[n];!i||!i.tugas[r]||(P=i.tugas[r],J[P.judul]||(J[P.judul]=[]),document.getElementById(`gradingTitle`).textContent=`📊 `+P.judul,re(),N.style.display=`flex`)})}),document.getElementById(`closeGrading`)?.addEventListener(`click`,ne),N?.addEventListener(`click`,e=>{e.target===N&&ne()}),document.getElementById(`saveGrades`)?.addEventListener(`click`,()=>{if(!P)return;let e=J[P.judul]||[];document.querySelectorAll(`.el-grade-input`).forEach(t=>{let n=parseInt(t.dataset.si);e[n]&&t.value!==``&&(e[n].nilai=parseInt(t.value))});let t=e.filter(e=>e.nilai!==null&&e.nilai!==void 0);t.length>0&&(P.nilai=Math.round(t.reduce((e,t)=>e+t.nilai,0)/t.length)),ne(),o()})}e.innerHTML=`
  <a href="#dashMain" class="skip-to-content" aria-label="Langsung ke konten utama">Skip to content</a>
  <div class="dash elearning" role="application" aria-label="E-Learning - Sistem Pembelajaran Online">
    ${gn(t)}
    <div class="mobile-sidebar-overlay" id="sidebarOverlay" aria-hidden="true"></div>
    ${_n(t)}
    <main class="dash-content" id="dashMain" role="main" aria-label="Konten utama E-Learning"></main>
  </div>`,o();let c=document.getElementById(`dashHamburger`),l=document.getElementById(`dashSidebar`),u=document.getElementById(`sidebarOverlay`);c?.addEventListener(`click`,()=>{let e=l?.classList.toggle(`open`);u?.classList.toggle(`open`),c.setAttribute(`aria-expanded`,e?`true`:`false`)}),u?.addEventListener(`click`,()=>{l?.classList.remove(`open`),u?.classList.remove(`open`),c?.setAttribute(`aria-expanded`,`false`)}),document.querySelectorAll(`.sidebar-link[data-page]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let i=e.dataset.page;document.querySelectorAll(`.sidebar-link`).forEach(e=>{e.classList.remove(`active`),e.removeAttribute(`aria-current`)}),e.classList.add(`active`),e.setAttribute(`aria-current`,`page`),l?.classList.remove(`open`),u?.classList.remove(`open`),c?.setAttribute(`aria-expanded`,`false`),r=null,n=i,o()})}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&l?.classList.contains(`open`)&&(l.classList.remove(`open`),u?.classList.remove(`open`),c?.setAttribute(`aria-expanded`,`false`),c?.focus())}),document.getElementById(`logoutBtn`)?.addEventListener(`click`,()=>Kn())}var X=`/api/pmb`,Nn=35e4,Z={users:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,clipboard:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,checkCircle:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,xCircle:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,clock:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,search:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,creditCard:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,shield:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,arrowLeft:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,loader:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>`},Pn=[`S1 Administrasi Niaga`,`S1 Administrasi Negara`],Fn=[`Islam`,`Kristen`,`Katolik`,`Hindu`,`Budha`,`Konghucu`],In=[`Jawa Timur`,`Jawa Tengah`,`Jawa Barat`,`DKI Jakarta`,`Bali`,`Sumatera Utara`,`Sumatera Barat`,`Kalimantan Timur`,`Sulawesi Selatan`,`Lainnya`];function Ln(e){return`
    <div class="pmb-stats">
      <div class="pmb-stat-card">
        <div class="pmb-stat-icon blue">${Z.users}</div>
        <div class="pmb-stat-value">${e.total_pendaftar||0}</div>
        <div class="pmb-stat-label">Total Pendaftar</div>
      </div>
      <div class="pmb-stat-card">
        <div class="pmb-stat-icon gold">${Z.clock}</div>
        <div class="pmb-stat-value">${e.total_proses||0}</div>
        <div class="pmb-stat-label">Total Proses</div>
      </div>
      <div class="pmb-stat-card">
        <div class="pmb-stat-icon green">${Z.checkCircle}</div>
        <div class="pmb-stat-value">${e.total_diterima||0}</div>
        <div class="pmb-stat-label">Total Diterima</div>
      </div>
      <div class="pmb-stat-card">
        <div class="pmb-stat-icon red">${Z.xCircle}</div>
        <div class="pmb-stat-value">${e.total_ditolak||0}</div>
        <div class="pmb-stat-label">Total Ditolak</div>
      </div>
    </div>`}function Rn(e){return`
    <div class="pmb-nav">
      <h3>📋 Navigasi</h3>
      ${[{id:`info`,text:`Informasi PMB`,icon:Z.clipboard,desc:`Jadwal & Persyaratan`},{id:`daftar`,text:`Daftar PMB`,icon:Z.users,desc:`Formulir Pendaftaran`},{id:`status`,text:`Cek Status`,icon:Z.search,desc:`Tracking Pendaftaran`},{id:`bayar`,text:`Pembayaran`,icon:Z.creditCard,desc:`Biaya & Metode`}].map((t,n)=>`
        <a href="#" class="pmb-nav-link${e===t.id?` active`:``}" data-pmb-page="${t.id}" style="animation-delay:${.05*(n+1)}s">
          <span class="pmb-nav-icon">${t.icon}</span>
          <span class="pmb-nav-text">
            <span class="pmb-nav-title">${t.text}</span>
            <span class="pmb-nav-desc">${t.desc}</span>
          </span>
        </a>
      `).join(``)}
    </div>`}function Q(e,t,n=`text`,r=!1,i=null,a={}){let o=Object.entries(a).map(([e,t])=>`${e}="${t}"`).join(` `);return i?`
      <div class="pmb-field">
        <select name="${t}" id="pmb-${t}" ${r?`required`:``} ${o}>
          <option value="">${e}</option>
          ${i.map(e=>`<option value="${e}">${e}</option>`).join(``)}
        </select>
      </div>`:n===`textarea`?`
      <div class="pmb-field full">
        <textarea name="${t}" id="pmb-${t}" placeholder="${a.placeholder||e}" rows="3" ${r?`required`:``} ${o}></textarea>
      </div>`:n===`radio`?``:`
    <div class="pmb-field">
      <input type="${n}" name="${t}" id="pmb-${t}" placeholder="${a.placeholder||e}" ${r?`required`:``} ${o}>
    </div>`}function zn(){return`
    <div class="pmb-form-container">
      <h2>📝 Formulir Pendaftaran Mahasiswa Baru</h2>
      <p class="pmb-form-sub">Lengkapi data berikut untuk mendaftar. Tanda <span style="color:hsl(0 70% 55%);">*</span> wajib diisi.</p>
      
      <form id="pmbForm" class="pmb-form">
        <!-- Program Studi -->
        <div class="pmb-section">
          <h3>🎓 Program Studi Pilihan</h3>
          <div class="pmb-row">
            ${Q(`Pilih Program Studi *`,`prodi_pilihan`,`text`,!0,Pn)}
          </div>
        </div>

        <!-- Data Pribadi -->
        <div class="pmb-section">
          <h3>👤 Data Pribadi</h3>
          <div class="pmb-row">
            ${Q(`NISN`,`nisn`)}
            ${Q(`KIP`,`kip`)}
          </div>
          <div class="pmb-row">
            ${Q(`KKS`,`kks`)}
            ${Q(`NIK *`,`nik`,`text`,!0,null,{pattern:`[0-9]{16}`,minlength:16,maxlength:16,inputmode:`numeric`,title:`NIK harus 16 digit angka`,placeholder:`16 digit NIK`})}
          </div>
          <div class="pmb-row">
            ${Q(`Nama Lengkap *`,`nama`,`text`,!0)}
            ${Q(`Tempat Lahir`,`tempat_lahir`)}
          </div>
          <div class="pmb-row">
            <div class="pmb-field">
              <label class="pmb-label">Tanggal Lahir</label>
              <input type="date" name="tanggal_lahir" id="pmb-tanggal_lahir">
            </div>
            <div class="pmb-field">
              <label class="pmb-label">Gender</label>
              <div class="pmb-radio-group">
                <label class="pmb-radio"><input type="radio" name="gender" value="Laki-laki"> Laki-laki</label>
                <label class="pmb-radio"><input type="radio" name="gender" value="Perempuan"> Perempuan</label>
              </div>
            </div>
          </div>
          <div class="pmb-row">
            ${Q(`Agama`,`agama`,`text`,!1,Fn)}
            ${Q(`Email *`,`email`,`email`,!0)}
          </div>
          <div class="pmb-row">
            ${Q(`Telepon 1 *`,`telepon_1`,`tel`,!0,null,{maxlength:12,pattern:`[0-9]{10,12}`,title:`Nomor telepon 10-12 digit`})}
            ${Q(`Telepon 2 (Optional)`,`telepon_2`,`tel`,!1,null,{maxlength:12})}
          </div>
        </div>

        <!-- Alamat -->
        <div class="pmb-section">
          <h3>📍 Alamat</h3>
          <div class="pmb-row">
            ${Q(`Alamat Lengkap`,`alamat`,`textarea`)}
          </div>
          <div class="pmb-row">
            ${Q(`Provinsi`,`provinsi`,`text`,!1,In)}
            ${Q(`Kota/Kabupaten`,`kota`)}
          </div>
          <div class="pmb-row">
            ${Q(`Kecamatan`,`kecamatan`)}
            ${Q(`Desa/Kelurahan`,`kelurahan`)}
          </div>
          <div class="pmb-row">
            ${Q(`Kode Pos`,`kode_pos`)}
            ${Q(`Anak Ke`,`anak_ke`,`number`)}
          </div>
        </div>

        <!-- Data Keluarga -->
        <div class="pmb-section">
          <h3>👨‍👩‍👧 Data Orang Tua / Wali</h3>
          <div class="pmb-row">
            ${Q(`Dari Jumlah Anak`,`dari_jumlah`,`number`)}
            ${Q(`Nama Ayah`,`nama_ayah`)}
          </div>
          <div class="pmb-row">
            ${Q(`Nama Ibu`,`nama_ibu`)}
            ${Q(`Pekerjaan Ayah`,`pekerjaan_ayah`)}
          </div>
          <div class="pmb-row">
            ${Q(`Pekerjaan Ibu`,`pekerjaan_ibu`)}
            ${Q(`NIK Ayah`,`nik_ayah`)}
          </div>
          <div class="pmb-row">
            ${Q(`NIK Ibu`,`nik_ibu`)}
            ${Q(`No. KK`,`no_kk`)}
          </div>
        </div>

        <!-- Asal Sekolah -->
        <div class="pmb-section">
          <h3>🏫 Asal Sekolah</h3>
          <div class="pmb-row">
            ${Q(`Asal Sekolah *`,`asal_sekolah`,`text`,!0)}
          </div>
        </div>

        <!-- Upload Berkas -->
        <div class="pmb-section">
          <h3>📎 Upload Berkas Persyaratan</h3>
          <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:16px;">Format: PDF, JPG, PNG (maks. 5MB per file)</p>
          
          <div class="pmb-upload-grid">
            <div class="pmb-upload-item">
              <label class="pmb-upload-label">
                <span class="pmb-upload-icon">📄</span>
                <span class="pmb-upload-title">Ijazah SMA/SMK/MA <span style="color:var(--danger-500);">*</span></span>
                <span class="pmb-upload-name" id="file-ijazah-name">Pilih file...</span>
                <input type="file" name="file_ijazah" accept=".pdf,.jpg,.jpeg,.png" required class="pmb-upload-input" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
              </label>
            </div>
            <div class="pmb-upload-item">
              <label class="pmb-upload-label">
                <span class="pmb-upload-icon">🪪</span>
                <span class="pmb-upload-title">Fotokopi KTP / KK <span style="color:var(--danger-500);">*</span></span>
                <span class="pmb-upload-name" id="file-ktp-name">Pilih file...</span>
                <input type="file" name="file_ktp_kk" accept=".pdf,.jpg,.jpeg,.png" required class="pmb-upload-input" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
              </label>
            </div>
            <div class="pmb-upload-item">
              <label class="pmb-upload-label">
                <span class="pmb-upload-icon">📷</span>
                <span class="pmb-upload-title">Pas Foto 3×4 <span style="color:var(--danger-500);">*</span></span>
                <span class="pmb-upload-name" id="file-foto-name">Pilih file...</span>
                <input type="file" name="file_pas_foto" accept=".jpg,.jpeg,.png" required class="pmb-upload-input" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
              </label>
            </div>
            <div class="pmb-upload-item">
              <label class="pmb-upload-label">
                <span class="pmb-upload-icon">📊</span>
                <span class="pmb-upload-title">Transkip Nilai Rapor</span>
                <span class="pmb-upload-name" id="file-rapor-name">Pilih file...</span>
                <input type="file" name="file_rapor" accept=".pdf,.jpg,.jpeg,.png" class="pmb-upload-input" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
              </label>
            </div>
            <div class="pmb-upload-item">
              <label class="pmb-upload-label">
                <span class="pmb-upload-icon">🏥</span>
                <span class="pmb-upload-title">Surat Keterangan Sehat</span>
                <span class="pmb-upload-name" id="file-sehat-name">Pilih file...</span>
                <input type="file" name="file_surat_sehat" accept=".pdf,.jpg,.jpeg,.png" class="pmb-upload-input" onchange="this.parentElement.querySelector('.pmb-upload-name').textContent = this.files[0]?.name || 'Pilih file...'">
              </label>
            </div>
          </div>
        </div>

        <button type="submit" class="pmb-submit-btn" id="pmbSubmitBtn">
          DAFTAR
        </button>
      </form>
    </div>`}function Bn(){return`
    <div class="pmb-form-container">
      <h2>🔍 Cek Status Pendaftaran</h2>
      <p class="pmb-form-sub">Masukkan nomor pendaftaran untuk melihat status.</p>
      
      <div class="pmb-search-box">
        <input type="text" id="pmbStatusInput" placeholder="Contoh: PMB-2026-0001" class="pmb-search-input">
        <button id="pmbStatusBtn" class="pmb-search-btn">${Z.search} Cek Status</button>
      </div>

      <div id="pmbStatusResult"></div>
    </div>`}function Vn(){return`
    <div class="pmb-form-container">
      <h2>💳 Pembayaran Biaya Pendaftaran</h2>
      <p class="pmb-form-sub">Biaya pendaftaran: <strong>Rp ${Nn.toLocaleString(`id-ID`)}</strong></p>

      <div class="pmb-search-box">
        <input type="text" id="pmbPayInput" placeholder="No. Pendaftaran: PMB-2026-0001" class="pmb-search-input">
        <button id="pmbPaySearchBtn" class="pmb-search-btn">${Z.search} Cari</button>
      </div>

      <div id="pmbPayResult"></div>
    </div>`}function Hn(){return`
    <div class="pmb-form-container">
      <h2>📋 Informasi PMB</h2>
      
      <div class="pmb-info-cards">
        <div class="pmb-info-card">
          <h3>📅 Jadwal Pendaftaran</h3>
          <table class="pmb-info-table">
            <tr><td>Gelombang 1</td><td>1 Maret — 30 April 2026</td></tr>
            <tr><td>Gelombang 2</td><td>1 Mei — 30 Juni 2026</td></tr>
            <tr><td>Gelombang 3</td><td>1 Juli — 31 Agustus 2026</td></tr>
          </table>
        </div>

        <div class="pmb-info-card">
          <h3>💰 Biaya Pendaftaran</h3>
          <table class="pmb-info-table">
            <tr><td>Biaya Formulir</td><td><strong>Rp ${Nn.toLocaleString(`id-ID`)}</strong></td></tr>
            <tr><td>Metode Bayar</td><td>Online (Transfer) / Cash</td></tr>
          </table>
        </div>

        <div class="pmb-info-card">
          <h3>📝 Persyaratan</h3>
          <ul class="pmb-req-list">
            <li>Ijazah SMA/SMK/MA atau sederajat</li>
            <li>Fotokopi KTP / KK</li>
            <li>Pas foto 3x4 (3 lembar)</li>
            <li>Transkip nilai rapor</li>
            <li>Surat keterangan sehat</li>
          </ul>
        </div>

        <div class="pmb-info-card">
          <h3>🎓 Program Studi</h3>
          <ul class="pmb-req-list">
            ${Pn.map(e=>`<li>${e}</li>`).join(``)}
          </ul>
        </div>
      </div>
    </div>`}async function Un(e){let t={total_pendaftar:0,total_proses:0,total_diterima:0,total_ditolak:0};try{let[e,n]=await Promise.all([fetch(`${X}/stats`),fetch(`${X}/settings/biaya`)]);e.ok&&(t=await e.json()),n.ok&&(Nn=(await n.json()).biaya_pendaftaran||35e4)}catch(e){console.warn(`Init fetch failed:`,e)}function n(e){let t=document.getElementById(`pmbMainArea`);if(t){switch(e){case`info`:t.innerHTML=Hn();break;case`daftar`:t.innerHTML=zn();break;case`status`:t.innerHTML=Bn();break;case`bayar`:t.innerHTML=Vn();break}document.querySelectorAll(`.pmb-nav-link`).forEach(t=>{t.classList.toggle(`active`,t.dataset.pmbPage===e)}),r(e)}}e.innerHTML=`
    <div class="pmb-page">
      <!-- Header -->
      <header class="pmb-header">
        <div class="pmb-header-inner">
          <a href="#/" class="pmb-back">${Z.arrowLeft}</a>
          <div>
            <h1>🎓 Pendaftaran Mahasiswa Baru</h1>
            <p>STIA Bayuangga Probolinggo — Tahun Akademik 2026/2027</p>
          </div>
          <span class="pmb-header-tag">✨ PMB OPEN</span>
          <img src="/assets/images/logo.png" alt="Logo" class="pmb-header-logo">
        </div>
      </header>

      <!-- Content -->
      <div class="pmb-content">
        <div class="pmb-main" id="pmbMainArea">
          ${Hn()}
        </div>
        ${Rn(`info`)}
      </div>

      <!-- Footer -->
      <footer class="pmb-footer">
        <span>${Z.shield} ISO 27001 — Security</span>
        <span>${Z.monitor} ISO 9241 — Usability</span>
        <span>${Z.checkCircle} ISO 40500 — Accessibility</span>
      </footer>
    </div>`,document.querySelectorAll(`.pmb-nav-link`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),n(e.dataset.pmbPage)})}),r(`info`);function r(e){e===`daftar`&&i(),e===`status`&&a(),e===`bayar`&&o()}function i(){let e=document.getElementById(`pmbForm`);e&&e.addEventListener(`submit`,async r=>{r.preventDefault();let i=document.getElementById(`pmbSubmitBtn`);i.disabled=!0,i.innerHTML=`${Z.loader} Mengirim...`;let a=new FormData(e),o={},s=e.querySelectorAll(`input[type="file"]`),c=new Set([...s].map(e=>e.name));a.forEach((e,t)=>{c.has(t)||(t===`anak_ke`||t===`dari_jumlah`?o[t]=e?parseInt(e):0:o[t]=e)});try{let e=await fetch(`${X}/register`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(o)}),r=await e.json();if(e.ok){let e=new FormData,i=!1;if(s.forEach(t=>{t.files.length>0&&(e.append(t.name,t.files[0]),i=!0)}),i&&r.id)try{await fetch(`${X}/registration/${r.id}/upload`,{method:`POST`,body:e})}catch{}let a=document.getElementById(`pmbMainArea`),c=r.account||{};a.innerHTML=`
            <div class="pmb-success">
              <div class="pmb-success-icon">✅</div>
              <h2>Pendaftaran Berhasil!</h2>
              <p>Simpan nomor pendaftaran Anda:</p>
              <div class="pmb-no-reg">${r.no_pendaftaran}</div>

              ${c.nim?`
                <div class="pmb-account-card">
                  <h3>🔐 Akun Login Anda</h3>
                  <div class="pmb-account-grid">
                    <div class="pmb-account-item">
                      <span class="pmb-account-label">NIM</span>
                      <span class="pmb-account-value" id="nimValue">${c.nim}</span>
                    </div>
                    <div class="pmb-account-item">
                      <span class="pmb-account-label">Password</span>
                      <span class="pmb-account-value" id="pwdValue">${c.password}</span>
                    </div>
                  </div>
                  <div class="pmb-account-warning">
                    ⚠️ <strong>Simpan data ini!</strong> Password hanya ditampilkan sekali.
                  </div>
                  ${c.email_sent?`
                    <div class="pmb-account-email">
                      📧 Email notifikasi + link validasi telah dikirim ke <strong>${o.email||`email Anda`}</strong>.<br>
                      Klik tombol validasi di email untuk mengaktifkan akun.
                    </div>
                  `:``}
                </div>
              `:``}

              <p class="pmb-success-info">Lakukan pembayaran biaya pendaftaran untuk melanjutkan proses.</p>
              <div class="pmb-success-actions">
                <button class="pmb-btn blue" onclick="navigator.clipboard.writeText('${c.nim||r.no_pendaftaran}')">📋 Copy NIM</button>
                <button class="pmb-btn green" id="goToPayBtn">💳 Bayar Sekarang</button>
              </div>
            </div>`;try{let e=await fetch(`${X}/stats`);e.ok&&(t=await e.json(),document.querySelector(`.pmb-stats`).outerHTML=Ln(t))}catch{}document.getElementById(`goToPayBtn`)?.addEventListener(`click`,()=>n(`bayar`))}else alert(`❌ `+(r.error||`Gagal mendaftar`)),i.disabled=!1,i.innerHTML=`DAFTAR`}catch(e){alert(`❌ Gagal menghubungi server: `+e.message),i.disabled=!1,i.innerHTML=`DAFTAR`}})}function a(){let e=document.getElementById(`pmbStatusBtn`),t=document.getElementById(`pmbStatusInput`);if(!e||!t)return;async function n(){let e=t.value.trim();if(!e){alert(`Masukkan No. Pendaftaran`);return}let n=document.getElementById(`pmbStatusResult`);n.innerHTML=`<div style="text-align:center;padding:20px;">${Z.loader} Mencari...</div>`;try{let t=await fetch(`${X}/status/${encodeURIComponent(e)}`),r=await t.json();if(t.ok){let e={menunggu:`gold`,proses:`blue`,diterima:`green`,ditolak:`red`},t={menunggu:`⏳ Menunggu`,proses:`🔄 Proses`,diterima:`✅ Diterima`,ditolak:`❌ Ditolak`},i=r.payment?r.payment.status===`paid`?`✅ Lunas`:`⏳ Belum Bayar`:`❌ Belum Bayar`;n.innerHTML=`
            <div class="pmb-status-card">
              <div class="pmb-status-header">
                <div>
                  <h3>${r.nama}</h3>
                  <p class="pmb-status-no">${r.no_pendaftaran}</p>
                </div>
                <span class="pmb-badge ${e[r.status]}">${t[r.status]}</span>
              </div>
              <div class="pmb-status-grid">
                <div><strong>NIK:</strong> ${r.nik}</div>
                <div><strong>Email:</strong> ${r.email||`-`}</div>
                <div><strong>Prodi:</strong> ${r.prodi_pilihan||`-`}</div>
                <div><strong>Metode:</strong> ${r.metode===`online`?`🌐 Online`:`🏢 Offline`}</div>
                <div><strong>Telepon:</strong> ${r.telepon_1||`-`}</div>
                <div><strong>Pembayaran:</strong> ${i}</div>
              </div>
              <div class="pmb-status-date">
                Tanggal daftar: ${new Date(r.created_at).toLocaleDateString(`id-ID`,{day:`numeric`,month:`long`,year:`numeric`,hour:`2-digit`,minute:`2-digit`})}
              </div>
            </div>`}else n.innerHTML=`<div class="pmb-error">❌ ${r.error}</div>`}catch{n.innerHTML=`<div class="pmb-error">❌ Gagal menghubungi server</div>`}}e.addEventListener(`click`,n),t.addEventListener(`keydown`,e=>{e.key===`Enter`&&n()})}function o(){let e=document.getElementById(`pmbPaySearchBtn`),n=document.getElementById(`pmbPayInput`);if(!e||!n)return;async function r(){let e=n.value.trim();if(!e){alert(`Masukkan No. Pendaftaran`);return}let r=document.getElementById(`pmbPayResult`);r.innerHTML=`<div style="text-align:center;padding:20px;">${Z.loader} Mencari...</div>`;try{let n=await fetch(`${X}/status/${encodeURIComponent(e)}`),i=await n.json();if(!n.ok){r.innerHTML=`<div class="pmb-error">❌ ${i.error}</div>`;return}let a=i.payment&&i.payment.status===`paid`;r.innerHTML=`
          <div class="pmb-payment-card">
            <div class="pmb-pay-info">
              <h3>${i.nama}</h3>
              <p>${i.no_pendaftaran} — ${i.prodi_pilihan||`Belum pilih prodi`}</p>
            </div>

            <div class="pmb-pay-amount">
              <span>Biaya Pendaftaran</span>
              <strong>Rp ${Nn.toLocaleString(`id-ID`)}</strong>
            </div>

            ${a?`
              <div class="pmb-pay-done">
                <div class="pmb-success-icon">✅</div>
                <h3>Pembayaran Lunas</h3>
                <p>Dibayar pada ${i.payment.paid_at?new Date(i.payment.paid_at).toLocaleDateString(`id-ID`):`-`}</p>
                <p>Metode: ${i.payment.metode_bayar===`online`?`🌐 Online`:`💵 Cash`}</p>
              </div>
            `:`
              <div class="pmb-pay-methods">
                <h4>Pilih Metode Pembayaran:</h4>
                <div class="pmb-pay-options">
                  <button class="pmb-pay-option" data-method="online" data-reg-id="${i.id}">
                    <span class="pmb-pay-option-icon">🌐</span>
                    <span class="pmb-pay-option-title">Bayar Online</span>
                    <span class="pmb-pay-option-desc">Transfer langsung via payment gateway</span>
                  </button>
                  <button class="pmb-pay-option" data-method="cash" data-reg-id="${i.id}">
                    <span class="pmb-pay-option-icon">💵</span>
                    <span class="pmb-pay-option-title">Bayar Cash</span>
                    <span class="pmb-pay-option-desc">Bayar langsung ke BAP kampus</span>
                  </button>
                </div>
              </div>
            `}
          </div>`,a||document.querySelectorAll(`.pmb-pay-option`).forEach(e=>{e.addEventListener(`click`,async()=>{let n=e.dataset.method,i=parseInt(e.dataset.regId);e.disabled=!0,e.querySelector(`.pmb-pay-option-title`).textContent=`Memproses...`;try{let a=await fetch(`${X}/payment`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({registration_id:i,metode_bayar:n,jumlah:Nn})}),o=await a.json();if(a.ok){if(n===`online`){let n=o.snap_token;n&&window.snap&&typeof window.snap.pay==`function`?window.snap.pay(n,{onSuccess:function(e){r.innerHTML=`
                            <div class="pmb-pay-done">
                              <div class="pmb-success-icon">✅</div>
                              <h3>Pembayaran Berhasil!</h3>
                              <p>Metode: ${e.payment_type||`-`}</p>
                              <p>Order ID: ${e.order_id||`-`}</p>
                              <p>Status pendaftaran Anda telah diupdate menjadi <strong>Proses</strong>.</p>
                            </div>`,fetch(`${X}/stats`).then(e=>e.json()).then(e=>{t=e;let n=document.querySelector(`.pmb-stats`);n&&(n.outerHTML=Ln(t))}).catch(()=>{})},onPending:function(e){r.innerHTML=`
                            <div class="pmb-pay-done cash">
                              <div class="pmb-success-icon">⏳</div>
                              <h3>Pembayaran Pending</h3>
                              <p>Silakan selesaikan pembayaran. Status akan otomatis terupdate.</p>
                            </div>`},onError:function(e){r.innerHTML=`<div class="pmb-error">❌ Pembayaran gagal. Silakan coba lagi.</div>`},onClose:function(){e.disabled=!1,e.querySelector(`.pmb-pay-option-title`).textContent=`Bayar Online`}}):r.innerHTML=`
                        <div class="pmb-pay-done">
                          <div class="pmb-success-icon">💳</div>
                          <h3>Lanjutkan Pembayaran</h3>
                          <p>Klik tombol di bawah untuk membayar:</p>
                          <a href="${o.snap_url||`https://app.sandbox.midtrans.com/snap/v4/redirection/${n}`}" target="_blank" style="display:inline-block;margin-top:12px;padding:12px 32px;background:hsl(215 70% 50%);color:white;border-radius:10px;text-decoration:none;font-weight:600;">🌐 Bayar Sekarang</a>
                        </div>`}else r.innerHTML=`
                      <div class="pmb-pay-done cash">
                        <div class="pmb-success-icon">📋</div>
                        <h3>Pembayaran Cash Tercatat</h3>
                        <p>Silakan datang ke kantor BAP untuk melakukan pembayaran.</p>
                        <p>Status akan diupdate setelah BAP mengkonfirmasi pembayaran.</p>
                        <div class="pmb-pay-cash-info">
                          <strong>Alamat:</strong> ${s.address}<br>
                          <strong>Jam:</strong> Senin-Jumat, 08:00-16:00
                        </div>
                      </div>`;try{let e=await fetch(`${X}/stats`);e.ok&&(t=await e.json(),document.querySelector(`.pmb-stats`).outerHTML=Ln(t))}catch{}}else alert(`❌ `+(o.error||`Gagal memproses pembayaran`)),e.disabled=!1,e.querySelector(`.pmb-pay-option-title`).textContent=n===`online`?`Bayar Online`:`Bayar Cash`}catch{alert(`❌ Gagal menghubungi server`),e.disabled=!1}})})}catch{r.innerHTML=`<div class="pmb-error">❌ Gagal menghubungi server</div>`}}e.addEventListener(`click`,r),n.addEventListener(`keydown`,e=>{e.key===`Enter`&&r()})}}var $={user:null,role:null,theme:localStorage.getItem(`theme`)||`light`};$.theme===`dark`&&document.documentElement.setAttribute(`data-theme`,`dark`);function Wn(e){$.user=e,$.role=e?.role||null,sessionStorage.setItem(`user`,JSON.stringify(e))}function Gn(){if(!$.user){let e=sessionStorage.getItem(`user`);e&&($.user=JSON.parse(e),$.role=$.user?.role||null)}return $.user}function Kn(){$.user=null,$.role=null,sessionStorage.removeItem(`user`),i(`#/login`)}r(`/`,e=>oe(e),`Beranda`),r(`/login`,e=>fe(e),`Login`),r(`/portal`,e=>dn(e),`Portal`),r(`/dashboard`,e=>an(e),`SIAKAD`),r(`/elearning`,e=>Mn(e),`E-Learning`),r(`/pmb`,e=>Un(e),`PMB`),document.addEventListener(`DOMContentLoaded`,()=>{a(`app`)});