// ============================================
// STIA BAYUANGGA - Portal / SSO Page
// ISO 9241 Usability | ISO 40500 Accessibility
// ============================================

import { CAMPUS, USERS, getInitials } from '../js/data.js';
import { getUser, logout } from '../js/app.js';

// ---- SVG Icons ----
const I = {
  logOut: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
  graduationCap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  megaphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
};

// ---- Greeting ----
function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Selamat Pagi';
  if (h < 15) return 'Selamat Siang';
  if (h < 18) return 'Selamat Sore';
  return 'Selamat Malam';
}

function getDayDate() {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const d = new Date();
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function getTimeString() {
  const d = new Date();
  return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}

const ROLE_LABELS = { mahasiswa: 'Mahasiswa', dosen: 'Dosen', kaprodi: 'Kaprodi', bap: 'BAP' };

// ---- Role-specific profile info ----
function getProfileInfo(user) {
  const items = [];
  if (user.role === 'mahasiswa') {
    items.push({ icon: 'blue', svg: I.building, text: CAMPUS.fullName });
    items.push({ icon: 'green', svg: I.graduationCap, text: `${user.prodi} — Semester ${user.semester}` });
    items.push({ icon: 'gold', svg: I.mapPin, text: 'Probolinggo, Jawa Timur' });
    items.push({ icon: 'purple', svg: I.phone, text: CAMPUS.phone });
  } else if (user.role === 'dosen') {
    items.push({ icon: 'blue', svg: I.building, text: CAMPUS.fullName });
    items.push({ icon: 'green', svg: I.graduationCap, text: `${user.prodi} — ${user.jabatan}` });
    items.push({ icon: 'gold', svg: I.mapPin, text: 'NIP: ' + user.nip });
    items.push({ icon: 'purple', svg: I.phone, text: CAMPUS.phone });
  } else if (user.role === 'kaprodi') {
    items.push({ icon: 'blue', svg: I.building, text: CAMPUS.fullName });
    items.push({ icon: 'green', svg: I.graduationCap, text: `${user.jabatan} — ${user.prodi}` });
    items.push({ icon: 'gold', svg: I.mapPin, text: 'Probolinggo, Jawa Timur' });
    items.push({ icon: 'purple', svg: I.phone, text: CAMPUS.phone });
  } else {
    items.push({ icon: 'blue', svg: I.building, text: CAMPUS.fullName });
    items.push({ icon: 'green', svg: I.graduationCap, text: user.jabatan });
    items.push({ icon: 'gold', svg: I.mapPin, text: 'Probolinggo, Jawa Timur' });
    items.push({ icon: 'purple', svg: I.phone, text: CAMPUS.phone });
  }
  return items;
}

// ---- Role-specific stats ----
function getWelcomeStats(user) {
  if (user.role === 'mahasiswa') {
    return [
      { value: user.ipk, label: 'Indeks Prestasi Kumulatif' },
      { value: user.totalSks, label: 'SKS Lulus' },
    ];
  } else if (user.role === 'dosen') {
    return [
      { value: user.totalMK, label: 'Mata Kuliah' },
      { value: user.totalMahasiswa, label: 'Mahasiswa' },
    ];
  } else if (user.role === 'kaprodi') {
    return [
      { value: user.totalMahasiswa, label: 'Mahasiswa Aktif' },
      { value: user.totalDosen, label: 'Dosen Tetap' },
    ];
  } else {
    return [
      { value: '1.250', label: 'Total Mahasiswa' },
      { value: '4', label: 'Program Studi' },
    ];
  }
}

// ============================================
// MAIN RENDER
// ============================================
export function renderPortal(container) {
  const user = getUser();
  if (!user) { window.location.hash = '#/login'; return; }

  const userId = user.nim || user.nip || user.id;
  const profileInfo = getProfileInfo(user);
  const stats = getWelcomeStats(user);

  container.innerHTML = `
  <div class="portal" role="main" aria-label="Portal STIA Bayuangga">
    <!-- Mobile Toggle -->
    <button class="portal-mobile-toggle" id="portalMobileToggle" aria-label="Buka menu profil">${I.menu}</button>
    <div class="portal-mobile-overlay" id="portalMobileOverlay"></div>

    <!-- LEFT SIDEBAR -->
    <aside class="portal-sidebar" id="portalSidebar" aria-label="Profil pengguna">
      <div class="portal-sidebar-header">
        <div class="logo-row">
          <img src="/assets/images/logo.png" alt="Logo STIA Bayuangga">
          <span class="logo-name">STIA BAYUANGGA</span>
        </div>
        <button class="logout-btn" onclick="document.getElementById('portalLogoutBtn').click()" title="Keluar" aria-label="Keluar">
          ${I.logOut}
        </button>
      </div>

      <div class="portal-avatar-section">
        <div class="portal-avatar" role="img" aria-label="Avatar ${user.nama}">
          ${getInitials(user.nama)}
        </div>
        <div class="portal-name">${user.nama}</div>
        <div class="portal-id">${userId}</div>
        <div class="portal-actions">
          <a href="#" class="portal-action-btn" aria-label="Ganti Password">
            ${I.lock} Ganti Password
          </a>
          <a href="#" class="portal-action-btn gold" aria-label="Ganti Avatar">
            ${I.camera} Ganti Avatar
          </a>
        </div>
      </div>

      <div class="portal-info" role="list" aria-label="Informasi pengguna">
        ${profileInfo.map(item => `
          <div class="portal-info-item" role="listitem">
            <div class="portal-info-icon ${item.icon}">${item.svg}</div>
            <span class="portal-info-text">${item.text}</span>
          </div>
        `).join('')}
      </div>

      <nav class="portal-menu" aria-label="Menu portal">
        <a class="portal-menu-item" href="#">
          ${I.megaphone} Pengumuman
          <span class="portal-menu-badge" aria-label="17 pengumuman baru">17</span>
        </a>
        <a class="portal-menu-item" href="#">
          ${I.compass} Panduan
        </a>
      </nav>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="portal-main">
      <!-- Welcome Card -->
      <div class="portal-welcome">
        <div class="portal-welcome-text">
          <h2>${getGreeting()}, ${user.nama.split(' ')[0]}</h2>
          <p>${getDayDate()} &nbsp;•&nbsp; <span class="portal-clock-icon">${I.clock}</span> <span id="portalClock">${getTimeString()}</span></p>
          <div class="portal-welcome-stats">
            ${stats.map(s => `
              <div class="portal-welcome-stat">
                <strong>${s.value}</strong>
                <span>${s.label}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <img class="portal-welcome-img" src="/assets/images/portal-welcome.png" alt="Welcome illustration" loading="lazy">
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
            <div class="portal-sso-arrow">${I.arrowRight}</div>
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
            <div class="portal-sso-arrow">${I.arrowRight}</div>
          </div>
        </a>
      </div>

      <!-- Additional Services -->
      <h2 class="portal-section-title">Website-website</h2>
      <div class="portal-services-grid" role="list" aria-label="Layanan tambahan">
        <a class="portal-service-card" href="#" role="listitem">
          <div class="portal-service-icon">
            <img src="/assets/images/portal-library.png" alt="">
          </div>
          <h4>Perpustakaan</h4>
          <p>Digital Library</p>
        </a>
        <a class="portal-service-card" href="#" role="listitem">
          <div class="portal-service-icon" style="background:hsl(215 60% 95%);border-radius:14px;">
            ${I.building}
          </div>
          <h4>Portal Ortu</h4>
          <p>Monitoring Akademik</p>
        </a>
        <a class="portal-service-card" href="#" role="listitem">
          <div class="portal-service-icon" style="background:hsl(42 80% 92%);border-radius:14px;">
            ${I.megaphone}
          </div>
          <h4>Konseling</h4>
          <p>Bimbingan Mahasiswa</p>
        </a>
        <a class="portal-service-card" href="#" role="listitem">
          <div class="portal-service-icon" style="background:hsl(150 50% 92%);border-radius:14px;">
            ${I.graduationCap}
          </div>
          <h4>Tracer Study</h4>
          <p>Alumni & Karir</p>
        </a>
      </div>

      <!-- ISO Badges -->
      <div class="portal-iso-bar" role="contentinfo" aria-label="Sertifikasi ISO">
        <span class="portal-iso-badge">${I.shield} ISO 27001 — Security</span>
        <span class="portal-iso-badge">${I.check} ISO 9241 — Usability</span>
        <span class="portal-iso-badge">${I.check} ISO 40500 — Accessibility</span>
      </div>
    </main>

    <!-- Hidden logout button -->
    <button id="portalLogoutBtn" style="display:none;"></button>
  </div>`;

  // ---- Event Handlers ----
  // Logout
  document.getElementById('portalLogoutBtn')?.addEventListener('click', () => logout());

  // Mobile sidebar toggle
  const mobileToggle = document.getElementById('portalMobileToggle');
  const sidebar = document.getElementById('portalSidebar');
  const overlay = document.getElementById('portalMobileOverlay');
  mobileToggle?.addEventListener('click', () => {
    sidebar?.classList.toggle('open');
    overlay?.classList.toggle('open');
  });
  overlay?.addEventListener('click', () => {
    sidebar?.classList.remove('open');
    overlay?.classList.remove('open');
  });

  // Live clock update
  const clockEl = document.getElementById('portalClock');
  if (clockEl) {
    const clockInterval = setInterval(() => {
      if (!document.getElementById('portalClock')) {
        clearInterval(clockInterval);
        return;
      }
      clockEl.textContent = getTimeString();
    }, 1000);
  }
}
