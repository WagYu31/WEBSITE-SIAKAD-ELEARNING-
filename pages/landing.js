// ============================================
// STIA BAYUANGGA - Landing Page (Professional)
// Design: Dribbble/Figma-inspired, ISO 9241
// ============================================

import { CAMPUS, PRODI_LIST, NEWS_LIST } from '../js/data.js';

// SVG Icons (Lucide-based, no emojis)
const ICONS = {
  login: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>',
  chevDown: '<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.06 12.8 19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  user: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  users: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  help: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  award: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  target: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  handshake: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>',
  lightbulb: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
  calendar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  arrowRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  mapPin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  graduationCap: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>',
  briefcase: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  building: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
  chartBar: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
  bookOpen: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  clipboard: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  globe: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  facebook: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  youtube: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2c.312-1.732.466-3.49.46-5.25a29.005 29.005 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>',
};

const PRODI_ICONS = {
  '🏛️': ICONS.building,
  '💼': ICONS.chartBar,
  '🎓': ICONS.bookOpen,
  '📋': ICONS.clipboard,
};
function getProdiIcon(emoji) { return PRODI_ICONS[emoji] || ICONS.graduationCap; }

const PRESTASI_DATA = [
  { medal: '1st', title: 'Juara 1 Debat Administrasi Publik', desc: 'Kompetisi Nasional Ilmu Administrasi — Solo, 2025', color: '#f59e0b' },
  { medal: '2nd', title: 'Runner-up Lomba Karya Tulis Ilmiah', desc: 'LKTI Nasional "Good Governance" — Surabaya, 2025', color: '#94a3b8' },
  { medal: 'Best', title: 'Best Paper Award ICPAS 2024', desc: 'International Conference Public Administration — Bali', color: '#3b82f6' },
  { medal: 'Win', title: 'Juara Umum Dies Natalis ke-15', desc: 'Kompetisi Olahraga & Seni PT se-Jawa Timur', color: '#10b981' },
];

const AGENDA_DATA = [
  { day: '28', month: 'MAR', title: 'Seminar Nasional Administrasi Publik', loc: 'Aula Utama STIA Bayuangga', time: '08:00 — 16:00 WIB', tag: 'Seminar', tagColor: 'info' },
  { day: '02', month: 'APR', title: 'Workshop Penulisan Jurnal Ilmiah', loc: 'Lab Komputer Lt.2', time: '09:00 — 12:00 WIB', tag: 'Workshop', tagColor: 'warning' },
  { day: '10', month: 'APR', title: 'Penerimaan Mahasiswa Baru Gelombang 2', loc: 'Pendaftaran online via portal PMB', time: 'Deadline', tag: 'PMB', tagColor: 'success' },
  { day: '15', month: 'APR', title: 'Dies Natalis STIA Bayuangga ke-16', loc: 'Gedung Serba Guna', time: 'Seharian', tag: 'Event', tagColor: 'primary' },
];

const TESTIMONIALS = [
  { quote: 'Ilmu yang saya peroleh di STIA Bayuangga sangat aplikatif dan relevan untuk karir di instansi pemerintah.', name: 'Ahmad Rizky, S.AP', role: 'ASN Kab. Probolinggo', initials: 'AR' },
  { quote: 'Dosen yang berpengalaman, lingkungan yang kondusif, dan networking alumni yang sangat kuat menjadi modal berharga.', name: 'Sari Nurhasanah, S.AB', role: 'HR Manager PT Maspion', initials: 'SN' },
  { quote: 'STIA Bayuangga mengajarkan saya berpikir kritis dan analitis. Kini saya berhasil melanjutkan studi S2 di UB.', name: 'Dwi Wahyu, S.AP', role: 'Mahasiswa S2 Univ. Brawijaya', initials: 'DW' },
];

export function renderLanding(container) {
  container.innerHTML = `
    <!-- Top Utility Bar -->
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-left">
          <a href="#">${ICONS.phone} <span>(0335) 421173</span></a>
          <a href="#">${ICONS.mail} <span>info@stiabayuangga.ac.id</span></a>
        </div>
        <div class="topbar-right">
          <a href="#/login">${ICONS.user} <span>Portal Mahasiswa</span></a>
          <a href="#">${ICONS.globe} <span>EN</span></a>
        </div>
      </div>
    </div>

    <!-- Main Nav -->
    <nav class="main-nav" id="mainNav" role="navigation" aria-label="Navigasi utama">
      <div class="container nav-container">
        <a href="#/" class="nav-brand" aria-label="${CAMPUS.name}">
          <img src="/assets/images/logo.png" alt="" class="nav-brand-logo" aria-hidden="true">
          <div class="nav-brand-text">
            <span class="nav-brand-name">${CAMPUS.name}</span>
            <span class="nav-brand-sub">Probolinggo</span>
          </div>
        </a>

        <div class="nav-menu" id="navMenu">
          <div class="nav-dropdown">
            <button class="nav-item" aria-expanded="false">Profil ${ICONS.chevDown}</button>
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
          <a href="#/login" class="nav-cta">${ICONS.login} Login</a>
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
        <strong>${CAMPUS.name}</strong>
      </div>
      <a href="#" onclick="closeMob();scrollTo('hero')">Beranda</a>
      <a href="#" onclick="closeMob();scrollTo('about')">Profil</a>
      <a href="#" onclick="closeMob();scrollTo('news')">Berita</a>
      <a href="#" onclick="closeMob();scrollTo('achievements')">Prestasi</a>
      <a href="#" onclick="closeMob();scrollTo('alumni')">Alumni</a>
      <a href="#" onclick="closeMob();scrollTo('events')">Agenda</a>
      <a href="#" onclick="closeMob();scrollTo('gallery')">Galeri</a>
      <a href="#" onclick="closeMob();scrollTo('prodi')">Program Studi</a>
      <a href="#/login" class="mobile-login-btn" onclick="closeMob()">${ICONS.login} Login Portal</a>
    </aside>

    <!-- ====== HERO ====== -->
    <section class="hero" id="hero" role="banner">
      <div class="hero-bg"><img src="/assets/images/campus-building.jpg" alt="" role="presentation"></div>
      <div class="hero-overlay"></div>
      
      <div class="container hero-grid">
        <div class="hero-text anim-up">
          <span class="hero-chip">Terakreditasi ${CAMPUS.stats.akreditasi} — BAN PT</span>
          <h1>${CAMPUS.name}<br><span>Probolinggo</span></h1>
          <p>${CAMPUS.fullName} — ${CAMPUS.tagline}. Mempersiapkan generasi muda yang kompeten, profesional, dan bermoral Pancasila.</p>
          <div class="hero-cta">
            <a href="#/pmb" class="btn-primary-l">${ICONS.graduationCap} Daftar Sekarang</a>
            <a href="#" onclick="scrollTo('about')" class="btn-ghost-l">Tentang Kami ${ICONS.arrowRight}</a>
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
            <div class="stat-card"><strong data-count="${CAMPUS.stats.mahasiswa}">0</strong><span>Mahasiswa</span></div>
            <div class="stat-card"><strong data-count="${CAMPUS.stats.dosen}">0</strong><span>Dosen</span></div>
            <div class="stat-card"><strong data-count="${CAMPUS.stats.prodi}">0</strong><span>Program Studi</span></div>
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
            <div class="layanan-icon-wrap">${ICONS.users}</div>
            <strong>Portal Ortu</strong>
            <small>Monitoring Akademik</small>
          </a>
          <a href="#" class="layanan-card">
            <div class="layanan-icon-wrap gold">${ICONS.help}</div>
            <strong>Konseling</strong>
            <small>Bimbingan Mahasiswa</small>
          </a>
        </div>
      </div>
    </section>

    <!-- ====== PROFIL ====== -->
    <section class="sec" id="about">
      <div class="container">
        <div class="sec-head reveal"><h2>Profil Kampus</h2><p>Mengenal lebih dekat ${CAMPUS.fullName}</p></div>
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
              <div class="tab-panel" data-panel="visi"><p>${CAMPUS.visi}</p></div>
              <div class="tab-panel" data-panel="misi"><ul>${CAMPUS.misi.map(m => `<li>${m}</li>`).join('')}</ul></div>
            </div>
          </div>
          <div class="about-img reveal">
            <img src="/assets/images/campus-courtyard.png" alt="Kampus STIA Bayuangga">
            <div class="about-badge">Terakreditasi B</div>
          </div>
        </div>
        <div class="usp-row">
          <div class="usp-card reveal"><div class="usp-icon">${ICONS.target}</div><h3>Kurikulum Terapan</h3><p>Berbasis kompetensi, sesuai kebutuhan dunia kerja dan instansi pemerintah.</p></div>
          <div class="usp-card reveal"><div class="usp-icon gold">${ICONS.handshake}</div><h3>Kerjasama Luas</h3><p>MoU dengan instansi pemerintah dan perusahaan swasta untuk magang.</p></div>
          <div class="usp-card reveal"><div class="usp-icon cyan">${ICONS.lightbulb}</div><h3>Dosen Profesional</h3><p>${CAMPUS.stats.dosen} dosen S2/S3 dengan pengalaman praktisi di bidangnya.</p></div>
        </div>
      </div>
    </section>

    <!-- ====== PROGRAM STUDI ====== -->
    <section class="sec sec-alt" id="prodi">
      <div class="container">
        <div class="sec-head reveal"><h2>Program Studi</h2><p>Pilihan program studi berkualitas di bidang Ilmu Administrasi</p></div>
        <div class="prodi-row">
          ${PRODI_LIST.map((p, i) => `
          <div class="prodi-card reveal" style="--delay:${i * 0.08}s">
            <div class="prodi-header">
              <span class="prodi-icon">${getProdiIcon(p.icon)}</span>
              <span class="badge-sm ${p.akreditasi === 'A' ? 'green' : 'blue'}">${p.jenjang} — Akreditasi ${p.akreditasi}</span>
            </div>
            <h4>${p.name}</h4>
            <p>${p.desc}</p>
            <div class="prodi-meta">
              <span>${ICONS.graduationCap} ${p.mahasiswa} Mahasiswa</span>
              <span>${ICONS.briefcase} ${p.dosen} Dosen</span>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- ====== BERITA ====== -->
    <section class="sec" id="news">
      <div class="container">
        <div class="sec-head-row reveal">
          <div><h2>Berita & Pengumuman</h2><p>Informasi terbaru dari STIA Bayuangga</p></div>
          <a href="#" class="link-btn">Lihat Semua ${ICONS.arrowRight}</a>
        </div>
        <div class="news-grid reveal">
          <article class="news-main">
            <div class="news-main-thumb">
              <img src="/assets/images/campus-seminar.png" alt="">
              <span class="badge-sm gold">${NEWS_LIST[0].category}</span>
            </div>
            <div class="news-main-body">
              <h3>${NEWS_LIST[0].title}</h3>
              <p>${NEWS_LIST[0].excerpt}</p>
              <div class="news-foot">
                <span>${ICONS.calendar} ${NEWS_LIST[0].date}</span>
                <a href="#">Selengkapnya ${ICONS.arrowRight}</a>
              </div>
            </div>
          </article>
          <div class="news-list">
            ${NEWS_LIST.slice(1).map(n => `
            <article class="news-item">
              <div class="news-item-dot"></div>
              <div class="news-item-body">
                <span class="badge-sm ${n.category === 'Event' ? 'blue' : n.category === 'PMB' ? 'green' : ''}">${n.category}</span>
                <h4>${n.title}</h4>
                <span class="text-muted">${n.date}</span>
              </div>
            </article>`).join('')}
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
            ${PRESTASI_DATA.map(p => `
            <div class="achiev-item">
              <div class="achiev-medal" style="--medal-color:${p.color}">${p.medal}</div>
              <div><h4>${p.title}</h4><p>${p.desc}</p></div>
            </div>`).join('')}
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
          ${TESTIMONIALS.map(t => `
          <div class="testi-card">
            <p>"${t.quote}"</p>
            <div class="testi-author">
              <div class="testi-avatar">${t.initials}</div>
              <div><strong>${t.name}</strong><span>${t.role}</span></div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- ====== AGENDA ====== -->
    <section class="sec sec-alt" id="events">
      <div class="container">
        <div class="sec-head-row reveal">
          <div><h2>Agenda Kampus</h2><p>Kegiatan dan acara mendatang</p></div>
          <a href="#" class="link-btn">Lihat Semua ${ICONS.arrowRight}</a>
        </div>
        <div class="events-grid">
          <div class="events-visual reveal"><img src="/assets/images/3d-calendar.png" alt="" class="float-3d d3"></div>
          <div class="events-list reveal">
            ${AGENDA_DATA.map(e => `
            <div class="event-card">
              <div class="event-date"><span class="event-day">${e.day}</span><span class="event-month">${e.month}</span></div>
              <div class="event-body">
                <h4>${e.title}</h4>
                <p>${ICONS.mapPin} ${e.loc} &nbsp; ${ICONS.clock} ${e.time}</p>
              </div>
              <span class="badge-sm ${e.tagColor}">${e.tag}</span>
            </div>`).join('')}
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
        <h2>Siap Bergabung dengan ${CAMPUS.name}?</h2>
        <p>Pendaftaran Mahasiswa Baru TA 2026/2027 telah dibuka. Daftarkan diri Anda sekarang!</p>
        <div class="cta-btns">
          <a href="#/pmb" class="btn-primary-l">${ICONS.graduationCap} Daftar Sekarang</a>
          <a href="#" onclick="scrollTo('about')" class="btn-ghost-l">${ICONS.phone} Hubungi Kami</a>
        </div>
      </div>
    </section>

    <!-- ====== FOOTER ====== -->
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-top">
          <div class="footer-about">
            <div class="footer-brand"><img src="/assets/images/logo.png" alt="" style="width:44px;height:44px;border-radius:50%;"><strong>${CAMPUS.name}</strong></div>
            <p>${CAMPUS.fullName}<br>${CAMPUS.address}</p>
            <p>${ICONS.phone} ${CAMPUS.phone}<br>${ICONS.mail} ${CAMPUS.email}</p>
            <div class="footer-social">
              <a href="#" aria-label="Facebook">${ICONS.facebook}</a>
              <a href="#" aria-label="Instagram">${ICONS.instagram}</a>
              <a href="#" aria-label="YouTube">${ICONS.youtube}</a>
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
            ${PRODI_LIST.map(p => `<a href="#">${p.jenjang} ${p.name}</a>`).join('')}
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; 2026 ${CAMPUS.name}. All rights reserved.</span>
          <div class="iso-badges"><span class="iso-b">ISO 27001</span><span class="iso-b">ISO 40500</span><span class="iso-b">ISO 9241</span></div>
          <div class="footer-legal"><a href="#">Kebijakan Privasi</a><a href="#">Syarat & Ketentuan</a></div>
        </div>
      </div>
    </footer>
  `;

  initNav();
  initTabs();
  initCounters();
  initReveal();
}

/* --- Utilities --- */
function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }
window.scrollTo = function(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

function closeMob() {
  document.getElementById('mobileMenu')?.classList.remove('open');
  document.getElementById('mobileOverlay')?.classList.remove('open');
  document.getElementById('navToggle')?.classList.remove('open');
  document.body.style.overflow = '';
}
window.closeMob = closeMob;

function initNav() {
  const nav = document.getElementById('mainNav');
  const topbar = document.querySelector('.topbar');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 60;
    nav?.classList.toggle('scrolled', scrolled);
    topbar?.classList.toggle('hidden', scrolled);
  });

  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  toggle?.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    toggle.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
  });
  overlay?.addEventListener('click', closeMob);
}

function initTabs() {
  document.querySelectorAll('.tab').forEach(t => {
    t.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      document.querySelector(`.tab-panel[data-panel="${t.dataset.tab}"]`)?.classList.add('active');
    });
  });
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      let current = 0;
      const step = Math.max(1, target / 120);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.floor(current).toLocaleString('id-ID');
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
