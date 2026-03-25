// ============================================
// STIA BAYUANGGA - Dashboard Page
// Shared layout with role-specific content
// ============================================

import { CAMPUS, USERS, JADWAL, MATA_KULIAH, NILAI, KELAS_LIST, TUGAS_LIST, getInitials, getDeadlineStatus } from '../../js/data.js';
import { getUser, logout } from '../../js/app.js';

// ---- SVG Icons ----
const I = {
  home: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  book: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  calendar: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  clipboard: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  users: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  award: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  settings: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  logOut: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  bell: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  monitor: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  clock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  trendUp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  fileText: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  barChart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
  checkCircle: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  shield: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  userPlus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>',
  graduationCap: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>',
};

// ---- Sidebar menu config per role ----
const MENUS = {
  mahasiswa: [
    { label: 'SIAKAD', items: [
      { icon: I.home, text: 'Dashboard', id: 'home', active: true },
      { icon: I.calendar, text: 'Jadwal Kuliah', id: 'jadwal' },
      { icon: I.clipboard, text: 'KRS / KHS', id: 'krs' },
      { icon: I.award, text: 'Nilai', id: 'nilai' },
      { icon: I.users, text: 'Profil Saya', id: 'data' },
    ]},
  ],
  dosen: [
    { label: 'SIAKAD', items: [
      { icon: I.home, text: 'Dashboard', id: 'home', active: true },
      { icon: I.calendar, text: 'Jadwal Mengajar', id: 'jadwal' },
      { icon: I.users, text: 'Data Mahasiswa', id: 'mahasiswa' },
      { icon: I.clipboard, text: 'Input Nilai', id: 'input-nilai' },
      { icon: I.barChart, text: 'Rekap Nilai', id: 'rekap' },
    ]},
  ],
  kaprodi: [
    { label: 'SIAKAD', items: [
      { icon: I.home, text: 'Dashboard', id: 'home', active: true },
      { icon: I.users, text: 'Data Mahasiswa', id: 'mahasiswa' },
      { icon: I.users, text: 'Data Dosen', id: 'dosen' },
      { icon: I.barChart, text: 'Statistik Prodi', id: 'statistik' },
    ]},
    { label: 'Akademik', items: [
      { icon: I.clipboard, text: 'Kurikulum', id: 'kurikulum' },
      { icon: I.fileText, text: 'Akreditasi', id: 'akreditasi' },
      { icon: I.checkCircle, text: 'Persetujuan KRS', id: 'approval' },
    ]},
  ],
  bap: [
    { label: 'SIAKAD', items: [
      { icon: I.home, text: 'Dashboard', id: 'home', active: true },
      { icon: I.userPlus, text: 'Manajemen PMB', id: 'pmb' },
      { icon: I.graduationCap, text: 'Data Mahasiswa', id: 'mahasiswa' },
      { icon: I.barChart, text: 'Statistik Akademik', id: 'statistik' },
      { icon: I.clipboard, text: 'Transkrip', id: 'transkrip' },
    ]},
    { label: 'Administrasi', items: [
      { icon: I.fileText, text: 'Surat Menyurat', id: 'surat' },
      { icon: I.calendar, text: 'Kalender Akademik', id: 'kalender' },
      { icon: I.award, text: 'Wisuda', id: 'wisuda' },
    ]},
  ],
};

// ---- Greeting ----
function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Selamat Pagi';
  if (h < 15) return 'Selamat Siang';
  if (h < 18) return 'Selamat Sore';
  return 'Selamat Malam';
}

// ---- ROLE LABELS ----
const ROLE_LABELS = { mahasiswa: 'Mahasiswa', dosen: 'Dosen', kaprodi: 'Kaprodi', bap: 'BAP' };

// ---- Build Sidebar ----
function buildSidebar(user) {
  const menus = MENUS[user.role] || MENUS.mahasiswa;
  return `
  <aside class="dash-sidebar" id="dashSidebar" role="navigation" aria-label="Menu navigasi SIAKAD">
    <a href="#/portal" class="sidebar-brand" aria-label="Kembali ke Portal STIA Bayuangga">
      <img src="/assets/images/logo.png" alt="Logo STIA Bayuangga" class="sidebar-brand-logo">
      <div>
        <div class="sidebar-brand-name">SIAKAD</div>
        <div class="sidebar-brand-sub">STIA Bayuangga</div>
      </div>
    </a>
    <div class="sidebar-user" role="status" aria-label="Informasi pengguna aktif">
      <div class="sidebar-avatar" role="img" aria-label="Avatar ${user.nama}">${getInitials(user.nama)}</div>
      <div>
        <div class="sidebar-user-name">${user.nama}</div>
        <div class="sidebar-user-role">${ROLE_LABELS[user.role]}${user.nim ? ' — ' + user.nim : ''}</div>
      </div>
    </div>
    ${menus.map(group => `
      <span class="sidebar-label" id="nav-${group.label.toLowerCase()}">${group.label}</span>
      <nav class="sidebar-nav" aria-labelledby="nav-${group.label.toLowerCase()}">
        ${group.items.map(item => `
          <a class="sidebar-link${item.active ? ' active' : ''}" href="#" data-page="${item.id}"
             aria-label="${item.text}${item.badge ? ` (${item.badge} baru)` : ''}"
             ${item.active ? 'aria-current="page"' : ''}
             role="menuitem" tabindex="0">
            ${item.icon}<span>${item.text}</span>
            ${item.badge ? `<span class="sidebar-badge" aria-hidden="true">${item.badge}</span>` : ''}
          </a>
        `).join('')}
      </nav>
    `).join('')}
    <div class="sidebar-footer">
      <nav class="sidebar-nav" aria-label="Menu sekunder">
        <a class="sidebar-link" href="#/portal" aria-label="Kembali ke Portal">${I.home}<span>Kembali Portal</span></a>
        <a class="sidebar-link" href="#" data-page="settings" aria-label="Pengaturan" role="menuitem" tabindex="0">${I.settings}<span>Pengaturan</span></a>
        <button class="sidebar-link" id="logoutBtn" aria-label="Keluar dari sistem">${I.logOut}<span>Keluar</span></button>
      </nav>
    </div>
  </aside>`;
}

// ---- Topbar ----
function buildTopbar(user) {
  return `
  <header class="dash-topbar" role="banner" aria-label="Header SIAKAD">
    <div class="dash-topbar-left">
      <button class="dash-hamburger" id="dashHamburger" aria-label="Buka/tutup menu navigasi" aria-expanded="false" aria-controls="dashSidebar">${I.menu}</button>
      <div>
        <h1>${getGreeting()}, ${user.nama.split(' ')[0]}!</h1>
        <p>Semester Genap 2025/2026 — ${ROLE_LABELS[user.role]}</p>
      </div>
    </div>
    <div class="dash-topbar-right">
      <button class="topbar-icon-btn" aria-label="Cari">${I.search}</button>
      <button class="topbar-icon-btn" aria-label="Notifikasi">${I.bell}<span class="notif-dot" aria-hidden="true"></span></button>
    </div>
  </header>`;
}

// ============================================
// ROLE-SPECIFIC CONTENT
// ============================================

function mahasiswaContent(user) {
  const totalSks = NILAI.reduce((a, n) => a + n.sks, 0);
  const todaySchedule = JADWAL.filter(j => {
    const days = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    return j.hari === days[new Date().getDay()];
  });
  const pendingTasks = TUGAS_LIST.filter(t => t.status === 'Belum');

  return `
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${I.trendUp}</div>
        <div class="stat-info">
          <div class="stat-label">IPK</div>
          <div class="stat-value">${user.ipk}</div>
          <div class="stat-sub">dari 4.00</div>
        </div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${I.book}</div>
        <div class="stat-info">
          <div class="stat-label">Total SKS</div>
          <div class="stat-value">${user.totalSks}</div>
          <div class="stat-sub">${user.maxSks} SKS total</div>
        </div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${I.checkCircle}</div>
        <div class="stat-info">
          <div class="stat-label">Semester</div>
          <div class="stat-value">${user.semester}</div>
          <div class="stat-sub">${user.prodi}</div>
        </div>
      </div>
      <div class="stat-box">
        <div class="stat-icon purple">${I.clipboard}</div>
        <div class="stat-info">
          <div class="stat-label">Tugas Pending</div>
          <div class="stat-value">${pendingTasks.length}</div>
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
              <div class="gpa-circle" style="--pct: ${(user.ipk / 4 * 100).toFixed(0)}">
                <span class="gpa-num">${user.ipk}</span>
              </div>
              <div class="gpa-label">Indeks Prestasi Kumulatif</div>
            </div>
            <div style="margin-top:16px;">
              <div style="display:flex;justify-content:space-between;font-size:0.78rem;color:hsl(215 15% 55%);margin-bottom:6px;">
                <span>Progress SKS</span><span>${user.totalSks} / ${user.maxSks}</span>
              </div>
              <div class="progress-wrap"><div class="progress-bar" style="width:${(user.totalSks / user.maxSks * 100).toFixed(0)}%"></div></div>
            </div>
          </div>
        </div>

        <!-- Jadwal Hari Ini -->
        <div class="dash-card">
          <div class="dash-card-head"><h3>Jadwal Hari Ini</h3></div>
          <div class="dash-card-body">
            ${todaySchedule.length ? `
              <table class="sch-table">
                <thead><tr><th>Jam</th><th>Mata Kuliah</th><th>Ruang</th><th>Dosen</th></tr></thead>
                <tbody>
                  ${todaySchedule.map(j => `<tr>
                    <td class="sch-time">${j.jam}</td>
                    <td><strong>${j.mk}</strong></td>
                    <td>${j.ruang}</td>
                    <td>${j.dosen}</td>
                  </tr>`).join('')}
                </tbody>
              </table>
            ` : '<p style="color:hsl(215 15% 55%);font-size:0.88rem;text-align:center;padding:20px 0;">Tidak ada jadwal hari ini 🎉</p>'}
          </div>
        </div>
      </div>

      <div>
        <!-- Tugas -->
        <div class="dash-card">
          <div class="dash-card-head"><h3>Tugas Mendatang</h3></div>
          <div class="dash-card-body">
            ${TUGAS_LIST.map(t => {
              const dl = getDeadlineStatus(t.deadline);
              return `<div class="task-item">
                <span class="task-dot ${t.status === 'Sudah' ? 'success' : dl.class}"></span>
                <div class="task-body">
                  <h4>${t.judul}</h4>
                  <p>${t.kelas} — ${t.type}</p>
                  <div class="task-meta">
                    <span>${I.clock} ${dl.text}</span>
                    <span class="badge-sm ${t.status === 'Sudah' ? 'success' : dl.class}">${t.status === 'Sudah' ? 'Selesai' : 'Belum'}</span>
                  </div>
                </div>
              </div>`;
            }).join('')}
          </div>
        </div>

        <!-- Nilai Semester -->
        <div class="dash-card">
          <div class="dash-card-head"><h3>Nilai Semester Ini</h3></div>
          <div class="dash-card-body">
            <table class="sch-table">
              <thead><tr><th>Mata Kuliah</th><th>SKS</th><th>Nilai</th><th>Bobot</th></tr></thead>
              <tbody>
                ${NILAI.slice(0, 5).map(n => `<tr>
                  <td><strong>${n.nama}</strong></td>
                  <td>${n.sks}</td>
                  <td><span class="badge-sm ${n.nilai.startsWith('A') ? 'success' : n.nilai.startsWith('B') ? 'blue' : 'warning'}">${n.nilai}</span></td>
                  <td>${n.bobot}</td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
}

function dosenContent(user) {
  return `
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${I.monitor}</div>
        <div class="stat-info"><div class="stat-label">Mata Kuliah</div><div class="stat-value">${user.totalMK}</div><div class="stat-sub">semester ini</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${I.users}</div>
        <div class="stat-info"><div class="stat-label">Total Mahasiswa</div><div class="stat-value">${user.totalMahasiswa}</div><div class="stat-sub">semua kelas</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${I.checkCircle}</div>
        <div class="stat-info"><div class="stat-label">Tugas Dinilai</div><div class="stat-value">28</div><div class="stat-sub">dari 45 tugas</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon purple">${I.fileText}</div>
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
                ${JADWAL.filter(j => j.dosen.includes('Bambang')).map(j => `<tr>
                  <td class="sch-time">${j.jam}</td>
                  <td><strong>${j.mk}</strong></td>
                  <td>${j.kelas}</td>
                  <td>${j.ruang}</td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Kelas yang Diampu</h3></div>
          <div class="dash-card-body">
            <div class="course-grid">
              ${KELAS_LIST.slice(0, 4).map(k => `
                <div class="course-card">
                  <div class="course-card-code">${k.kode}</div>
                  <h4>${k.nama}</h4>
                  <p>${k.mahasiswa} Mahasiswa</p>
                  <div class="course-card-foot">
                    <span>${k.materiSelesai}/${k.totalMateri} Materi</span>
                    <span class="badge-sm blue">${k.progress}%</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Tugas Perlu Dinilai</h3></div>
          <div class="dash-card-body">
            ${TUGAS_LIST.filter(t => t.status === 'Sudah').concat(TUGAS_LIST.filter(t => t.status === 'Belum')).slice(0, 4).map(t => `
              <div class="task-item">
                <span class="task-dot ${t.status === 'Sudah' ? 'warning' : 'info'}"></span>
                <div class="task-body">
                  <h4>${t.judul}</h4>
                  <p>${t.kelas}</p>
                  <div class="task-meta"><span class="badge-sm ${t.status === 'Sudah' ? 'warning' : 'info'}">${t.status === 'Sudah' ? 'Perlu Dinilai' : 'Menunggu'}</span></div>
                </div>
              </div>
            `).join('')}
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
    </div>`;
}

function kaprodiContent(user) {
  return `
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${I.users}</div>
        <div class="stat-info"><div class="stat-label">Mahasiswa Aktif</div><div class="stat-value">${user.totalMahasiswa}</div><div class="stat-sub">${user.prodi}</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${I.users}</div>
        <div class="stat-info"><div class="stat-label">Dosen Tetap</div><div class="stat-value">${user.totalDosen}</div><div class="stat-sub">aktif mengajar</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${I.trendUp}</div>
        <div class="stat-info"><div class="stat-label">Rata-rata IPK</div><div class="stat-value">3.42</div><div class="stat-sub">angkatan 2024</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon rose">${I.checkCircle}</div>
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
                ${JADWAL.slice(0, 5).map(j => `<tr><td class="sch-time">${j.mk.substring(0, 6)}</td><td>${j.mk}</td><td>3</td><td>${j.dosen}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Persetujuan KRS</h3></div>
          <div class="dash-card-body">
            ${['Ahmad Rizky P.', 'Siti Nurjanah', 'Budi Santoso', 'Dewi Lestari'].map((n, i) => `
              <div class="task-item">
                <span class="task-dot warning"></span>
                <div class="task-body" style="flex:1;">
                  <h4>${n}</h4>
                  <p>Semester ${4 + i} — ${19 + i} SKS</p>
                  <div class="task-meta" style="gap:6px;margin-top:6px;">
                    <button style="background:hsl(150 50% 45%);color:#fff;border:none;padding:4px 12px;border-radius:6px;font-size:0.72rem;font-weight:600;cursor:pointer;">Setujui</button>
                    <button style="background:hsl(0 0% 92%);color:hsl(215 15% 40%);border:none;padding:4px 12px;border-radius:6px;font-size:0.72rem;font-weight:600;cursor:pointer;">Tinjau</button>
                  </div>
                </div>
              </div>
            `).join('')}
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
    </div>`;
}

function bapContent(user) {
  return `
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${I.users}</div>
        <div class="stat-info"><div class="stat-label">Total Mahasiswa</div><div class="stat-value">1.250</div><div class="stat-sub">semua prodi</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${I.fileText}</div>
        <div class="stat-info"><div class="stat-label">Surat Keluar</div><div class="stat-value">34</div><div class="stat-sub">bulan ini</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${I.award}</div>
        <div class="stat-info"><div class="stat-label">Calon Wisudawan</div><div class="stat-value">87</div><div class="stat-sub">periode depan</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon purple">${I.barChart}</div>
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
            ${['Surat Keterangan Aktif — Ahmad R.', 'Transkrip Nilai — Siti N.', 'Surat Rekomendasi — Budi S.', 'Legalisir Ijazah — Dewi L.'].map((s, i) => `
              <div class="task-item">
                <span class="task-dot ${['success', 'info', 'warning', 'success'][i]}"></span>
                <div class="task-body">
                  <h4>${s}</h4>
                  <p>${['Selesai', 'Proses', 'Menunggu', 'Selesai'][i]} — ${20 - i} Mar 2026</p>
                </div>
              </div>
            `).join('')}
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
    </div>`;
}

// ---- PMB Management Page (BAP) ----
const PMB_API = 'http://localhost:8080/api/pmb';

function bapPMBContent() {
  return `
    <div class="dash-card" style="margin-bottom:20px;">
      <div class="dash-card-head">
        <h3>${I.userPlus} Manajemen PMB</h3>
        <div style="display:flex;gap:8px;">
          <button class="pmb-mgmt-btn active" data-tab="list">Daftar Pendaftar</button>
          <button class="pmb-mgmt-btn" data-tab="add">+ Tambah Offline</button>
        </div>
      </div>
      <div class="dash-card-body" id="pmbMgmtContent">
        <div style="text-align:center;padding:20px;color:var(--text-muted);">Memuat data...</div>
      </div>
    </div>
    <!-- Detail Modal -->
    <div class="modal-overlay" id="pmbDetailModal">
      <div class="modal" style="max-width:580px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
          <h3 style="font-family:var(--font-heading);font-size:1.1rem;">Detail Pendaftar</h3>
          <button class="btn btn-ghost btn-icon" id="closeDetailModal" style="width:32px;height:32px;padding:0;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div id="pmbDetailContent"></div>
      </div>
    </div>`;
}

async function initPMBManagement() {
  // Tab switching
  document.querySelectorAll('.pmb-mgmt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pmb-mgmt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.dataset.tab === 'list') loadRegistrationList();
      else if (btn.dataset.tab === 'add') showOfflineForm();
    });
  });

  // Close detail modal
  document.getElementById('closeDetailModal')?.addEventListener('click', () => {
    document.getElementById('pmbDetailModal')?.classList.remove('active');
  });
  document.getElementById('pmbDetailModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'pmbDetailModal') e.target.classList.remove('active');
  });

  loadRegistrationList();
}

// Store registrations globally for filtering
let _pmbRegistrations = [];

async function loadRegistrationList() {
  const content = document.getElementById('pmbMgmtContent');
  if (!content) return;
  content.innerHTML = `<div style="text-align:center;padding:24px;">
    <div class="anim-spin" style="width:24px;height:24px;border:2.5px solid var(--gray-200);border-top-color:var(--primary-500);border-radius:50%;margin:0 auto 8px;"></div>
    <p style="color:var(--text-muted);font-size:var(--text-sm);">Memuat data pendaftar...</p>
  </div>`;

  try {
    const [regRes, statsRes] = await Promise.all([
      fetch(`${PMB_API}/registrations`),
      fetch(`${PMB_API}/stats`)
    ]);
    const regData = await regRes.json();
    const stats = await statsRes.json();
    _pmbRegistrations = regData.data || [];

    renderPMBList(stats, _pmbRegistrations);
  } catch (err) {
    content.innerHTML = `<div style="text-align:center;padding:24px;">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--danger-500)" stroke-width="1.5" style="margin:0 auto 12px;display:block;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <p style="color:var(--danger-600);font-weight:var(--font-semibold);margin-bottom:4px;">Gagal memuat data</p>
      <p style="color:var(--text-muted);font-size:var(--text-sm);">Pastikan backend server berjalan di port 8080</p>
      <button class="btn btn-outline" style="margin-top:12px;" onclick="loadRegistrationList()">Coba Lagi</button>
    </div>`;
  }
}

// ---- PMB State ----
let _pmbPage = 1;
const PMB_PER_PAGE = 20;
let _pmbSort = { key: 'created_at', dir: 'desc' };
let _pmbSelected = new Set();

function renderPMBList(stats, registrations) {
  const content = document.getElementById('pmbMgmtContent');
  if (!content) return;

  content.innerHTML = `
    <!-- Stat Cards -->
    <div class="stat-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:20px;">
      <div class="stat-box">
        <div class="stat-icon blue">${I.users}</div>
        <div class="stat-info"><div class="stat-value">${stats.total_pendaftar}</div><div class="stat-label">Total Pendaftar</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <div class="stat-info"><div class="stat-value">${stats.total_proses}</div><div class="stat-label">Menunggu</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${I.checkCircle}</div>
        <div class="stat-info"><div class="stat-value">${stats.total_diterima}</div><div class="stat-label">Diterima</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon rose"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg></div>
        <div class="stat-info"><div class="stat-value">${stats.total_ditolak}</div><div class="stat-label">Ditolak</div></div>
      </div>
    </div>

    <!-- Search & Filter Bar -->
    <div style="display:flex;gap:10px;margin-bottom:12px;flex-wrap:wrap;align-items:center;">
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
        <option value="S1 Administrasi Publik">S1 Adm. Publik</option>
        <option value="S1 Administrasi Bisnis">S1 Adm. Bisnis</option>
        <option value="S2 Administrasi Publik">S2 Adm. Publik</option>
        <option value="D3 Ilmu Administrasi">D3 Ilmu Adm.</option>
      </select>
      <button class="btn btn-secondary btn-sm" id="pmbExportBtn" title="Export CSV">${I.fileText} Export</button>
    </div>

    <!-- Date Filter -->
    <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;align-items:center;">
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
    </div>`;

  // Bind controls
  const onFilter = () => { _pmbPage = 1; applyPMBFilters(); };
  document.getElementById('pmbSearch')?.addEventListener('input', onFilter);
  document.getElementById('pmbFilterStatus')?.addEventListener('change', onFilter);
  document.getElementById('pmbFilterProdi')?.addEventListener('change', onFilter);
  document.getElementById('pmbDateFrom')?.addEventListener('change', onFilter);
  document.getElementById('pmbDateTo')?.addEventListener('change', onFilter);
  document.getElementById('pmbClearDate')?.addEventListener('click', () => {
    document.getElementById('pmbDateFrom').value = '';
    document.getElementById('pmbDateTo').value = '';
    onFilter();
  });
  document.getElementById('pmbExportBtn')?.addEventListener('click', () => exportPMBCSV(_pmbRegistrations));
  document.getElementById('pmbBulkValidate')?.addEventListener('click', bulkValidate);
  document.getElementById('pmbBulkAccount')?.addEventListener('click', bulkCreateAccount);
  document.getElementById('pmbBulkDelete')?.addEventListener('click', bulkDelete);
  document.getElementById('pmbBulkCancel')?.addEventListener('click', () => { _pmbSelected.clear(); updateBulkBar(); applyPMBFilters(); });

  applyPMBFilters();
}

function applyPMBFilters() {
  const q = (document.getElementById('pmbSearch')?.value || '').toLowerCase();
  const status = document.getElementById('pmbFilterStatus')?.value || '';
  const prodi = document.getElementById('pmbFilterProdi')?.value || '';
  const dateFrom = document.getElementById('pmbDateFrom')?.value || '';
  const dateTo = document.getElementById('pmbDateTo')?.value || '';

  let filtered = _pmbRegistrations.filter(r => {
    const matchQ = !q || (r.nama||'').toLowerCase().includes(q) || (r.nik||'').includes(q) || (r.no_pendaftaran||'').toLowerCase().includes(q);
    const matchS = !status || r.status === status;
    const matchP = !prodi || r.prodi_pilihan === prodi;
    let matchD = true;
    if (dateFrom || dateTo) {
      const d = r.created_at ? r.created_at.slice(0, 10) : '';
      if (dateFrom && d < dateFrom) matchD = false;
      if (dateTo && d > dateTo) matchD = false;
    }
    return matchQ && matchS && matchP && matchD;
  });

  // Sort
  const { key, dir } = _pmbSort;
  filtered.sort((a, b) => {
    let va = a[key] || '', vb = b[key] || '';
    if (typeof va === 'string') va = va.toLowerCase();
    if (typeof vb === 'string') vb = vb.toLowerCase();
    return va < vb ? (dir === 'asc' ? -1 : 1) : va > vb ? (dir === 'asc' ? 1 : -1) : 0;
  });

  // Paginate
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PMB_PER_PAGE));
  if (_pmbPage > totalPages) _pmbPage = totalPages;
  const start = (_pmbPage - 1) * PMB_PER_PAGE;
  const pageData = filtered.slice(start, start + PMB_PER_PAGE);

  document.getElementById('pmbTableWrapper').innerHTML = renderPMBTable(pageData);
  document.getElementById('pmbResultCount').textContent = total > 0
    ? `Menampilkan ${start + 1}–${Math.min(start + PMB_PER_PAGE, total)} dari ${total} pendaftar`
    : 'Tidak ada data';
  renderPagination(totalPages);
  bindPMBActions();
}

function renderPagination(totalPages) {
  const c = document.getElementById('pmbPagination');
  if (!c || totalPages <= 1) { if (c) c.innerHTML = ''; return; }
  const s = (act) => `style="padding:4px 10px;border-radius:6px;border:1px solid ${act?'var(--primary-500)':'var(--gray-200)'};background:${act?'var(--primary-500)':'#fff'};color:${act?'#fff':'var(--text-primary)'};cursor:pointer;font-size:0.75rem;font-weight:600;"`;
  let h = `<button ${s(false)} ${_pmbPage<=1?'disabled':''} data-pg="${_pmbPage-1}">‹</button>`;
  let sp = Math.max(1, _pmbPage-2), ep = Math.min(totalPages, sp+4);
  if (ep-sp < 4) sp = Math.max(1, ep-4);
  for (let i=sp; i<=ep; i++) h += `<button ${s(i===_pmbPage)} data-pg="${i}">${i}</button>`;
  h += `<button ${s(false)} ${_pmbPage>=totalPages?'disabled':''} data-pg="${_pmbPage+1}">›</button>`;
  c.innerHTML = h;
  c.querySelectorAll('button[data-pg]').forEach(b => b.addEventListener('click', () => {
    const pg = parseInt(b.dataset.pg);
    if (pg >= 1 && pg <= totalPages) { _pmbPage = pg; applyPMBFilters(); }
  }));
}

function renderPMBTable(registrations) {
  if (registrations.length === 0) {
    return `<div style="text-align:center;padding:32px;">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gray-300)" stroke-width="1.5" style="margin:0 auto 12px;display:block;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
      <p style="color:var(--text-muted);font-size:var(--text-sm);">Tidak ada pendaftar ditemukan</p>
    </div>`;
  }
  const si = (k) => _pmbSort.key !== k ? '<span style="opacity:.3;font-size:0.7em;">⇅</span>' : _pmbSort.dir === 'asc' ? '<span style="font-size:0.7em;">↑</span>' : '<span style="font-size:0.7em;">↓</span>';
  const allChk = registrations.every(r => _pmbSelected.has(r.id));
  return `
    <table class="sch-table" style="font-size:0.82rem;">
      <thead><tr>
        <th style="width:36px;text-align:center;"><input type="checkbox" id="pmbSelectAll" ${allChk?'checked':''} title="Pilih semua"></th>
        <th class="sortable-th" data-sort="no_pendaftaran" style="cursor:pointer;">No. Daftar ${si('no_pendaftaran')}</th>
        <th class="sortable-th" data-sort="nama" style="cursor:pointer;">Nama ${si('nama')}</th>
        <th>Prodi</th><th>Metode</th>
        <th class="sortable-th" data-sort="status" style="cursor:pointer;">Status ${si('status')}</th>
        <th class="sortable-th" data-sort="created_at" style="cursor:pointer;">Tanggal ${si('created_at')}</th>
        <th>Aksi</th>
      </tr></thead>
      <tbody>
        ${registrations.map(r => `<tr class="pmb-tr" data-id="${r.id}" style="cursor:pointer;${_pmbSelected.has(r.id)?'background:hsl(215 80% 97%);':''}">
          <td onclick="event.stopPropagation();" style="text-align:center;"><input type="checkbox" class="pmb-chk" data-id="${r.id}" ${_pmbSelected.has(r.id)?'checked':''}></td>
          <td style="font-family:var(--font-mono);font-weight:600;white-space:nowrap;">${r.no_pendaftaran}</td>
          <td><strong>${r.nama}</strong><br><span style="font-size:0.7rem;color:var(--text-muted);font-family:var(--font-mono);">${r.nik}</span></td>
          <td style="font-size:0.8rem;">${r.prodi_pilihan || '-'}</td>
          <td><span class="badge-sm ${r.metode==='online'?'blue':'warning'}">${r.metode}</span></td>
          <td><span class="badge-sm ${r.status==='diterima'?'success':r.status==='ditolak'?'danger':r.status==='proses'?'blue':'warning'}">${r.status}</span></td>
          <td style="font-size:0.72rem;color:var(--text-muted);white-space:nowrap;">${r.created_at ? new Date(r.created_at).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}) : '-'}</td>
          <td onclick="event.stopPropagation();">
            <div style="display:flex;gap:4px;white-space:nowrap;flex-wrap:wrap;">
              <button class="mgmt-action-btn" data-action="confirm-pay" data-id="${r.id}" title="Bayar">💰</button>
              <button class="mgmt-action-btn" data-action="validate" data-id="${r.id}" title="Validasi">✅</button>
              <button class="mgmt-action-btn" data-action="create-account" data-id="${r.id}" data-email="${r.email}" data-prodi="${r.prodi_pilihan}" title="Buat Akun">🔐</button>
              <button class="mgmt-action-btn" data-action="edit" data-id="${r.id}" title="Edit" style="color:hsl(215 70% 50%);">✏️</button>
              <button class="mgmt-action-btn" data-action="delete" data-id="${r.id}" title="Hapus" style="color:hsl(0 65% 50%);">🗑️</button>
            </div>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>`;
}

function updateBulkBar() {
  const bar = document.getElementById('pmbBulkBar');
  const cnt = document.getElementById('pmbBulkCount');
  if (!bar) return;
  if (_pmbSelected.size > 0) { bar.style.display = 'flex'; if (cnt) cnt.textContent = `${_pmbSelected.size} pendaftar dipilih`; }
  else { bar.style.display = 'none'; }
}

async function bulkValidate() {
  if (!confirm(`Validasi ${_pmbSelected.size} pendaftar sekaligus?`)) return;
  let ok = 0, fail = 0;
  for (const id of _pmbSelected) { try { const r = await fetch(`${PMB_API}/account/${id}/validate`, { method: 'PUT' }); if (r.ok) ok++; else fail++; } catch { fail++; } }
  alert(`✅ Berhasil: ${ok}\n❌ Gagal: ${fail}`);
  _pmbSelected.clear(); loadRegistrationList();
}

async function bulkCreateAccount() {
  if (!confirm(`Buat akun untuk ${_pmbSelected.size} pendaftar sekaligus?`)) return;
  let ok = 0, fail = 0;
  for (const id of _pmbSelected) { try { const r = await fetch(`${PMB_API}/account/create`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ registration_id: id }) }); if (r.ok) ok++; else fail++; } catch { fail++; } }
  alert(`✅ Berhasil: ${ok}\n❌ Gagal: ${fail}`);
  _pmbSelected.clear(); loadRegistrationList();
}

async function bulkDelete() {
  if (!confirm(`⚠️ HAPUS ${_pmbSelected.size} pendaftar?\n\nAksi ini tidak bisa dibatalkan!`)) return;
  let ok = 0, fail = 0;
  for (const id of _pmbSelected) { try { const r = await fetch(`${PMB_API}/registration/${id}`, { method: 'DELETE' }); if (r.ok) ok++; else fail++; } catch { fail++; } }
  alert(`✅ Terhapus: ${ok}\n❌ Gagal: ${fail}`);
  _pmbSelected.clear(); loadRegistrationList();
}

function bindPMBActions() {
  document.querySelectorAll('.mgmt-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); handleMgmtAction(btn.dataset.action, btn.dataset); });
  });
  document.querySelectorAll('.pmb-tr').forEach(row => {
    row.addEventListener('click', () => { const id = parseInt(row.dataset.id); const reg = _pmbRegistrations.find(r => r.id === id); if (reg) showRegistrantDetail(reg); });
  });
  // Sort headers
  document.querySelectorAll('.sortable-th').forEach(th => {
    th.addEventListener('click', () => {
      const key = th.dataset.sort;
      if (_pmbSort.key === key) _pmbSort.dir = _pmbSort.dir === 'asc' ? 'desc' : 'asc';
      else _pmbSort = { key, dir: 'asc' };
      applyPMBFilters();
    });
  });
  // Checkboxes
  document.getElementById('pmbSelectAll')?.addEventListener('change', (e) => {
    document.querySelectorAll('.pmb-chk').forEach(chk => { const id = parseInt(chk.dataset.id); if (e.target.checked) _pmbSelected.add(id); else _pmbSelected.delete(id); chk.checked = e.target.checked; });
    updateBulkBar();
  });
  document.querySelectorAll('.pmb-chk').forEach(chk => {
    chk.addEventListener('change', () => { const id = parseInt(chk.dataset.id); if (chk.checked) _pmbSelected.add(id); else _pmbSelected.delete(id); updateBulkBar(); });
  });
}


function showRegistrantDetail(reg) {
  const modal = document.getElementById('pmbDetailModal');
  const content = document.getElementById('pmbDetailContent');
  if (!modal || !content) return;

  const statusColors = { diterima: 'badge-success', ditolak: 'badge-danger', proses: 'badge-primary', menunggu: 'badge-warning' };
  const v = (val) => val || '<span style="color:var(--danger-400);font-style:italic;">— kosong</span>';
  const check = (val) => val ? '✅' : '❌';
  const formatDate = (d) => d ? new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '-';

  // Count completeness
  const requiredFields = ['nik','nama','email','telepon_1','prodi_pilihan','asal_sekolah','alamat','tempat_lahir','tanggal_lahir','gender'];
  const filled = requiredFields.filter(f => reg[f] && String(reg[f]).trim()).length;
  const pct = Math.round((filled / requiredFields.length) * 100);
  const pctColor = pct === 100 ? 'hsl(145 60% 45%)' : pct >= 70 ? 'hsl(38 90% 50%)' : 'hsl(0 70% 55%)';

  content.innerHTML = `
    <div style="max-height:65vh;overflow-y:auto;padding-right:6px;">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--gray-100);">
        <div style="width:52px;height:52px;border-radius:var(--radius-xl);background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:1.1rem;flex-shrink:0;">
          ${(reg.nama || 'X').charAt(0).toUpperCase()}
        </div>
        <div style="flex:1;">
          <h4 style="font-family:var(--font-heading);font-size:1rem;margin-bottom:2px;">${reg.nama}</h4>
          <code style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-muted);background:var(--gray-50);padding:2px 8px;border-radius:var(--radius-sm);">${reg.no_pendaftaran}</code>
        </div>
        <span class="badge ${statusColors[reg.status] || 'badge-warning'}" style="font-size:0.75rem;">${reg.status}</span>
      </div>

      <!-- Kelengkapan Data -->
      <div style="background:hsl(215 40% 97%);border-radius:10px;padding:12px 16px;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:0.78rem;font-weight:600;">📋 Kelengkapan Data</span>
          <span style="font-size:0.82rem;font-weight:700;color:${pctColor};">${pct}%</span>
        </div>
        <div style="background:#e2e8f0;border-radius:8px;height:6px;overflow:hidden;">
          <div style="width:${pct}%;height:100%;background:${pctColor};border-radius:8px;transition:width .3s;"></div>
        </div>
      </div>

      <!-- Data Pribadi -->
      <div style="margin-bottom:14px;">
        <h5 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:.06em;color:var(--primary-500);font-weight:700;margin-bottom:8px;">👤 Data Pribadi</h5>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><p class="dl">NIK</p><p class="dv" style="font-family:var(--font-mono);">${v(reg.nik)}</p></div>
          <div><p class="dl">NISN</p><p class="dv">${v(reg.nisn)}</p></div>
          <div><p class="dl">Tempat Lahir</p><p class="dv">${v(reg.tempat_lahir)}</p></div>
          <div><p class="dl">Tanggal Lahir</p><p class="dv">${v(reg.tanggal_lahir)}</p></div>
          <div><p class="dl">Gender</p><p class="dv">${v(reg.gender)}</p></div>
          <div><p class="dl">Agama</p><p class="dv">${v(reg.agama)}</p></div>
          <div><p class="dl">Email</p><p class="dv">${v(reg.email)}</p></div>
          <div><p class="dl">Telepon 1</p><p class="dv">${v(reg.telepon_1)}</p></div>
          <div><p class="dl">Telepon 2</p><p class="dv">${v(reg.telepon_2)}</p></div>
          <div><p class="dl">KIP</p><p class="dv">${v(reg.kip)}</p></div>
          <div><p class="dl">KKS</p><p class="dv">${v(reg.kks)}</p></div>
        </div>
      </div>

      <!-- Alamat -->
      <div style="margin-bottom:14px;">
        <h5 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:.06em;color:var(--primary-500);font-weight:700;margin-bottom:8px;">📍 Alamat</h5>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div style="grid-column:span 2;"><p class="dl">Alamat Lengkap</p><p class="dv">${v(reg.alamat)}</p></div>
          <div><p class="dl">Kota</p><p class="dv">${v(reg.kota)}</p></div>
          <div><p class="dl">Provinsi</p><p class="dv">${v(reg.provinsi)}</p></div>
          <div><p class="dl">Kecamatan</p><p class="dv">${v(reg.kecamatan)}</p></div>
          <div><p class="dl">Kelurahan</p><p class="dv">${v(reg.kelurahan)}</p></div>
          <div><p class="dl">Kode Pos</p><p class="dv">${v(reg.kode_pos)}</p></div>
        </div>
      </div>

      <!-- Data Keluarga -->
      <div style="margin-bottom:14px;">
        <h5 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:.06em;color:var(--primary-500);font-weight:700;margin-bottom:8px;">👨‍👩‍👧 Data Keluarga</h5>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><p class="dl">Anak Ke</p><p class="dv">${reg.anak_ke || '-'} dari ${reg.dari_jumlah || '-'}</p></div>
          <div><p class="dl">No. KK</p><p class="dv">${v(reg.no_kk)}</p></div>
          <div><p class="dl">Nama Ayah</p><p class="dv">${v(reg.nama_ayah)}</p></div>
          <div><p class="dl">Pekerjaan Ayah</p><p class="dv">${v(reg.pekerjaan_ayah)}</p></div>
          <div><p class="dl">NIK Ayah</p><p class="dv">${v(reg.nik_ayah)}</p></div>
          <div><p class="dl">Nama Ibu</p><p class="dv">${v(reg.nama_ibu)}</p></div>
          <div><p class="dl">Pekerjaan Ibu</p><p class="dv">${v(reg.pekerjaan_ibu)}</p></div>
          <div><p class="dl">NIK Ibu</p><p class="dv">${v(reg.nik_ibu)}</p></div>
        </div>
      </div>

      <!-- Akademik -->
      <div style="margin-bottom:14px;">
        <h5 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:.06em;color:var(--primary-500);font-weight:700;margin-bottom:8px;">🎓 Akademik</h5>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><p class="dl">Program Studi</p><p class="dv">${v(reg.prodi_pilihan)}</p></div>
          <div><p class="dl">Asal Sekolah</p><p class="dv">${v(reg.asal_sekolah)}</p></div>
          <div><p class="dl">Metode</p><span class="badge ${reg.metode === 'online' ? 'badge-primary' : 'badge-warning'}" style="font-size:0.72rem;">${reg.metode}</span></div>
          <div><p class="dl">Tanggal Daftar</p><p class="dv">${formatDate(reg.created_at)}</p></div>
        </div>
      </div>

      <!-- Checklist Kelengkapan -->
      <div style="margin-bottom:14px;">
        <h5 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:.06em;color:var(--primary-500);font-weight:700;margin-bottom:8px;">📎 Checklist Kelengkapan</h5>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:0.8rem;">
          <div>${check(reg.nik)} NIK</div>
          <div>${check(reg.nama)} Nama</div>
          <div>${check(reg.email)} Email</div>
          <div>${check(reg.telepon_1)} Telepon</div>
          <div>${check(reg.tempat_lahir)} Tempat Lahir</div>
          <div>${check(reg.tanggal_lahir)} Tanggal Lahir</div>
          <div>${check(reg.gender)} Gender</div>
          <div>${check(reg.alamat)} Alamat</div>
          <div>${check(reg.prodi_pilihan)} Prodi</div>
          <div>${check(reg.asal_sekolah)} Asal Sekolah</div>
        </div>
      </div>
    </div>

    <div style="display:flex;gap:8px;margin-top:16px;padding-top:14px;border-top:1px solid var(--gray-100);flex-wrap:wrap;">
      <button class="btn btn-accent btn-sm mgmt-action-btn" data-action="confirm-pay" data-id="${reg.id}">💰 Bayar</button>
      <button class="btn btn-success btn-sm mgmt-action-btn" data-action="validate" data-id="${reg.id}">✅ Validasi</button>
      <button class="btn btn-primary btn-sm mgmt-action-btn" data-action="create-account" data-id="${reg.id}" data-email="${reg.email}" data-prodi="${reg.prodi_pilihan}">🔐 Buat Akun</button>
      <button class="btn btn-secondary btn-sm mgmt-action-btn" data-action="edit" data-id="${reg.id}">✏️ Edit</button>
      <button class="btn btn-danger btn-sm mgmt-action-btn" data-action="delete" data-id="${reg.id}" style="margin-left:auto;">🗑️ Hapus</button>
    </div>`;

  // Bind modal action buttons
  content.querySelectorAll('.mgmt-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleMgmtAction(btn.dataset.action, btn.dataset);
    });
  });

  modal.classList.add('active');
}


function exportPMBCSV(registrations) {
  if (!registrations.length) { alert('Tidak ada data untuk diexport.'); return; }
  const headers = ['No Pendaftaran','Nama','NIK','Email','Prodi','Metode','Status','Asal Sekolah','Telepon'];
  const rows = registrations.map(r => [
    r.no_pendaftaran, r.nama, r.nik, r.email || '', r.prodi_pilihan || '',
    r.metode, r.status, r.asal_sekolah || '', r.telepon_1 || ''
  ]);
  const csv = [headers, ...rows].map(row => row.map(c => `"${c}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `PMB_Data_${new Date().toISOString().slice(0,10)}.csv`;
  a.click(); URL.revokeObjectURL(url);
}

async function handleMgmtAction(action, data) {
  try {
    let res, result;
    switch (action) {
      case 'create-account':
        res = await fetch(`${PMB_API}/account/create`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ registration_id: parseInt(data.id) }),
        });
        result = await res.json();
        if (res.ok) {
          const pwd = result.password;
          if (pwd) {
            alert(`✅ Akun dibuat!\n\nNIM: ${result.nim}\nPassword: ${pwd}\nEmail: ${result.email}`);
          } else {
            alert(`ℹ️ Akun sudah dibuat sebelumnya.\n\nNIM: ${result.nim}\nEmail: ${result.email}\n\nPassword hanya ditampilkan saat pertama kali dibuat.`);
          }
        } else {
          alert('❌ ' + (result.error || 'Gagal membuat akun'));
        }
        break;

      case 'validate':
        // First get account
        const accRes = await fetch(`${PMB_API}/account/${data.id}`);
        if (!accRes.ok) {
          alert('❌ Akun belum dibuat. Buat akun terlebih dahulu.');
          return;
        }
        const accData = await accRes.json();
        if (accData.is_validated) {
          alert('ℹ️ Akun sudah divalidasi sebelumnya.');
          return;
        }
        // Get account ID from DB  
        const valRes = await fetch(`${PMB_API}/account/${data.id}/validate`, { method: 'PUT' });
        result = await valRes.json();
        if (valRes.ok) {
          alert('✅ ' + result.message);
          loadRegistrationList();
        } else {
          alert('❌ ' + (result.error || 'Gagal validasi'));
        }
        break;

      case 'confirm-pay':
        // First create payment if needed
        const payCreateRes = await fetch(`${PMB_API}/payment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ registration_id: parseInt(data.id), metode_bayar: 'cash', jumlah: 350000 }),
        });
        if (payCreateRes.ok) {
          const payData = await payCreateRes.json();
          // Confirm cash payment
          const confirmRes = await fetch(`${PMB_API}/payment/${payData.id}/confirm`, { method: 'PUT' });
          if (confirmRes.ok) {
            alert('✅ Pembayaran cash dikonfirmasi!');
            loadRegistrationList();
          }
        } else {
          const payErr = await payCreateRes.json();
          // If payment already exists, try to get and confirm
          if (payErr.error && payErr.error.includes('sudah')) {
            alert('ℹ️ Pembayaran sudah tercatat.');
          } else {
            alert('❌ ' + (payErr.error || 'Gagal'));
          }
        }
        break;

      case 'edit':
        showEditForm(parseInt(data.id));
        return; // don't reload list

      case 'delete':
        const regToDelete = _pmbRegistrations.find(r => r.id === parseInt(data.id));
        if (!regToDelete) return;
        if (!confirm(`⚠️ Hapus data pendaftaran?\n\n${regToDelete.nama} (${regToDelete.no_pendaftaran})\n\nSemua data terkait (akun, pembayaran) juga akan dihapus.`)) return;
        res = await fetch(`${PMB_API}/registration/${data.id}`, { method: 'DELETE' });
        result = await res.json();
        if (res.ok) {
          alert('✅ ' + result.message);
          loadRegistrationList();
        } else {
          alert('❌ ' + (result.error || 'Gagal menghapus'));
        }
        break;
    }
  } catch (err) {
    alert('❌ Error: ' + err.message);
  }
}

function showOfflineForm() {
  const content = document.getElementById('pmbMgmtContent');
  if (!content) return;

  const prodiOptions = ['S1 Administrasi Publik', 'S1 Administrasi Bisnis', 'S2 Administrasi Publik', 'D3 Ilmu Administrasi'];

  content.innerHTML = `
    <form id="offlineRegForm" style="max-width:640px;">
      <h4 style="font-family:var(--font-heading);margin:0 0 20px;display:flex;align-items:center;gap:8px;">
        ${I.userPlus} Input Data Mahasiswa Baru (Offline)
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
              ${prodiOptions.map(p => `<option value="${p}">${p}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="off-row">
          <div class="form-group">
            <label class="form-label">Angkatan *</label>
            <select name="angkatan" required class="form-select">
              ${Array.from({length:10}, (_,i) => 2026-i).map(y => `<option value="${y}">${y}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Semester *</label>
            <select name="semester" required class="form-select">
              ${Array.from({length:14}, (_,i) => i+1).map(s => `<option value="${s}">Semester ${s}</option>`).join('')}
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
              ${['Islam','Kristen','Katolik','Hindu','Budha','Konghucu'].map(a => `<option value="${a}">${a}</option>`).join('')}
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
              ${['Jawa Timur','Jawa Tengah','Jawa Barat','DKI Jakarta','Bali','Sumatera Utara','Sumatera Barat','Kalimantan Timur','Sulawesi Selatan','Lainnya'].map(p => `<option value="${p}">${p}</option>`).join('')}
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
    </form>`;

  document.getElementById('offlineRegForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('offlineSubmitBtn');
    btn.disabled = true;
    btn.textContent = 'Memproses...';

    const formData = new FormData(e.target);
    const data = {};
    const fileInputs = e.target.querySelectorAll('input[type="file"]');
    const fileFieldNames = new Set([...fileInputs].map(f => f.name));
    const intFields = new Set(['anak_ke','dari_jumlah','semester','angkatan']);
    formData.forEach((v, k) => { if (fileFieldNames.has(k)) return; data[k] = intFields.has(k) ? (parseInt(v) || 0) : v; });

    try {
      const res = await fetch(`${PMB_API}/register/offline`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok) {
        // Upload files
        const uploadData = new FormData();
        let hasFiles = false;
        fileInputs.forEach(fi => { if (fi.files.length > 0) { uploadData.append(fi.name, fi.files[0]); hasFiles = true; } });
        if (hasFiles && result.id) { try { await fetch(`${PMB_API}/registration/${result.id}/upload`, { method: 'POST', body: uploadData }); } catch {} }

        const acc = result.account || {};
        content.innerHTML = `
          <div style="text-align:center;padding:24px;">
            <div style="font-size:2.5rem;margin-bottom:8px;">✅</div>
            <h3 style="color:hsl(150 60% 35%);margin:0 0 12px;">Pendaftaran Offline Berhasil!</h3>
            <div style="background:hsl(215 80% 96%);border:2px solid hsl(215 70% 55%);border-radius:10px;padding:12px;display:inline-block;font-size:1.1rem;font-weight:800;letter-spacing:2px;margin-bottom:12px;">${result.no_pendaftaran}</div>
            ${acc.nim ? `
              <div style="background:hsl(215 20% 97%);border:1px solid hsl(215 20% 88%);border-radius:10px;padding:16px;max-width:350px;margin:12px auto;text-align:left;">
                <h4 style="margin:0 0 10px;text-align:center;">🔐 Akun Login</h4>
                <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid hsl(215 20% 92%);"><span style="color:hsl(215 15% 55%);font-size:0.82rem;">NIM</span><strong style="font-family:monospace;">${acc.nim}</strong></div>
                <div style="display:flex;justify-content:space-between;padding:8px 0;"><span style="color:hsl(215 15% 55%);font-size:0.82rem;">Password</span><strong style="font-family:monospace;">${acc.password}</strong></div>
              </div>
            ` : ''}
            <button onclick="document.querySelector('.pmb-mgmt-btn').click()" style="background:hsl(215 70% 50%);color:#fff;border:none;padding:8px 20px;border-radius:8px;font-weight:600;cursor:pointer;margin-top:10px;">← Kembali ke Daftar</button>
          </div>`;
      } else {
        alert('❌ ' + (result.error || 'Gagal'));
        btn.disabled = false;
        btn.textContent = '📝 Daftarkan & Buat Akun';
      }
    } catch (err) {
      alert('❌ ' + err.message);
      btn.disabled = false;
      btn.textContent = '📝 Daftarkan & Buat Akun';
    }
  });
}

// ---- Edit Registration Form (Modal) ----
function showEditForm(regId) {
  const reg = _pmbRegistrations.find(r => r.id === regId);
  if (!reg) return;

  const modal = document.getElementById('pmbDetailModal');
  const content = document.getElementById('pmbDetailContent');
  if (!modal || !content) return;

  const prodiOptions = ['S1 Administrasi Publik','S1 Administrasi Bisnis','S2 Administrasi Publik','D3 Ilmu Administrasi'];
  const v = (val) => val || '';

  content.innerHTML = `
    <form id="editRegForm" style="max-height:65vh;overflow-y:auto;padding-right:8px;">
      <p style="font-size:0.75rem;color:var(--text-muted);margin:0 0 16px;">No. Daftar: <strong>${reg.no_pendaftaran}</strong></p>

      <!-- Akademik -->
      <div class="off-section">
        <h5 class="off-section-title">🎓 Program Studi Pilihan</h5>
        <div class="off-row">
          <div class="form-group">
            <label class="form-label">Program Studi *</label>
            <select name="prodi_pilihan" required class="form-select">
              ${prodiOptions.map(p => `<option value="${p}" ${reg.prodi_pilihan === p ? 'selected' : ''}>${p}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Status</label>
            <select name="status" class="form-select">
              ${['menunggu','proses','diterima','ditolak'].map(s => `<option value="${s}" ${reg.status === s ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </div>
        </div>
      </div>

      <!-- Data Pribadi -->
      <div class="off-section">
        <h5 class="off-section-title">👤 Data Pribadi</h5>
        <div class="off-row">
          <div class="form-group"><label class="form-label">NISN</label><input type="text" name="nisn" value="${v(reg.nisn)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">KIP</label><input type="text" name="kip" value="${v(reg.kip)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">KKS</label><input type="text" name="kks" value="${v(reg.kks)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">NIK *</label><input type="text" name="nik" value="${v(reg.nik)}" required class="form-input" pattern="[0-9]{16}" maxlength="16" minlength="16"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Nama Lengkap *</label><input type="text" name="nama" value="${v(reg.nama)}" required class="form-input"></div>
          <div class="form-group"><label class="form-label">Tempat Lahir</label><input type="text" name="tempat_lahir" value="${v(reg.tempat_lahir)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Tanggal Lahir</label><input type="date" name="tanggal_lahir" value="${v(reg.tanggal_lahir)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Gender</label>
            <div style="display:flex;gap:16px;padding-top:8px;">
              <label style="display:flex;align-items:center;gap:6px;font-size:var(--text-sm);cursor:pointer;"><input type="radio" name="gender" value="Laki-laki" ${reg.gender === 'Laki-laki' ? 'checked' : ''}> Laki-laki</label>
              <label style="display:flex;align-items:center;gap:6px;font-size:var(--text-sm);cursor:pointer;"><input type="radio" name="gender" value="Perempuan" ${reg.gender === 'Perempuan' ? 'checked' : ''}> Perempuan</label>
            </div>
          </div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Agama</label>
            <select name="agama" class="form-select">
              <option value="">-</option>
              ${['Islam','Kristen','Katolik','Hindu','Budha','Konghucu'].map(a => `<option value="${a}" ${reg.agama === a ? 'selected' : ''}>${a}</option>`).join('')}
            </select>
          </div>
          <div class="form-group"><label class="form-label">Email *</label><input type="email" name="email" value="${v(reg.email)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Telepon 1 *</label><input type="tel" name="telepon_1" value="${v(reg.telepon_1)}" class="form-input" maxlength="12"></div>
          <div class="form-group"><label class="form-label">Telepon 2</label><input type="tel" name="telepon_2" value="${v(reg.telepon_2)}" class="form-input" maxlength="12"></div>
        </div>
      </div>

      <!-- Alamat -->
      <div class="off-section">
        <h5 class="off-section-title">📍 Alamat</h5>
        <div class="form-group" style="margin-bottom:14px;">
          <label class="form-label">Alamat Lengkap</label>
          <textarea name="alamat" class="form-input" rows="2" style="resize:vertical;">${v(reg.alamat)}</textarea>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Provinsi</label><input type="text" name="provinsi" value="${v(reg.provinsi)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Kota/Kabupaten</label><input type="text" name="kota" value="${v(reg.kota)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Kecamatan</label><input type="text" name="kecamatan" value="${v(reg.kecamatan)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Desa/Kelurahan</label><input type="text" name="kelurahan" value="${v(reg.kelurahan)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Kode Pos</label><input type="text" name="kode_pos" value="${v(reg.kode_pos)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Anak Ke</label><input type="number" name="anak_ke" value="${reg.anak_ke || ''}" class="form-input"></div>
        </div>
      </div>

      <!-- Data Orang Tua -->
      <div class="off-section">
        <h5 class="off-section-title">👨‍👩‍👧 Data Orang Tua / Wali</h5>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Dari Jumlah Anak</label><input type="number" name="dari_jumlah" value="${reg.dari_jumlah || ''}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Nama Ayah</label><input type="text" name="nama_ayah" value="${v(reg.nama_ayah)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Nama Ibu</label><input type="text" name="nama_ibu" value="${v(reg.nama_ibu)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Pekerjaan Ayah</label><input type="text" name="pekerjaan_ayah" value="${v(reg.pekerjaan_ayah)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Pekerjaan Ibu</label><input type="text" name="pekerjaan_ibu" value="${v(reg.pekerjaan_ibu)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">NIK Ayah</label><input type="text" name="nik_ayah" value="${v(reg.nik_ayah)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">NIK Ibu</label><input type="text" name="nik_ibu" value="${v(reg.nik_ibu)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">No. KK</label><input type="text" name="no_kk" value="${v(reg.no_kk)}" class="form-input"></div>
        </div>
      </div>

      <!-- Asal Sekolah -->
      <div class="off-section">
        <h5 class="off-section-title">🏫 Asal Sekolah</h5>
        <div class="form-group"><label class="form-label">Asal Sekolah *</label><input type="text" name="asal_sekolah" value="${v(reg.asal_sekolah)}" class="form-input"></div>
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
        <button type="button" class="btn btn-secondary" style="flex:0;" onclick="document.getElementById('pmbDetailModal').classList.remove('active')">Batal</button>
      </div>
    </form>`;

  modal.classList.add('active');

  document.getElementById('editRegForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('editSaveBtn');
    btn.disabled = true;
    btn.textContent = 'Menyimpan...';

    const formData = new FormData(e.target);
    const data = {};
    const fileInputs = e.target.querySelectorAll('input[type="file"]');
    const fileFieldNames = new Set([...fileInputs].map(f => f.name));
    formData.forEach((v, k) => { if (v && !fileFieldNames.has(k)) data[k] = v; });

    try {
      const res = await fetch(`${PMB_API}/registration/${regId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        // Upload files if selected
        const uploadData = new FormData();
        let hasFiles = false;
        fileInputs.forEach(fi => { if (fi.files.length > 0) { uploadData.append(fi.name, fi.files[0]); hasFiles = true; } });
        if (hasFiles) { try { await fetch(`${PMB_API}/registration/${regId}/upload`, { method: 'POST', body: uploadData }); } catch {} }

        alert('✅ ' + result.message);
        modal.classList.remove('active');
        loadRegistrationList();
      } else {
        alert('❌ ' + (result.error || 'Gagal menyimpan'));
        btn.disabled = false;
        btn.textContent = '💾 Simpan Perubahan';
      }
    } catch (err) {
      alert('❌ ' + err.message);
      btn.disabled = false;
      btn.textContent = '💾 Simpan Perubahan';
    }
  });
}


// ============================================
// DATA MAHASISWA — Student Management
// ============================================
const MHS_API = 'http://localhost:8080/api/pmb';
let _mahasiswaList = [];

function bapMahasiswaContent() {
  return `
    <div class="dash-card">
      <div class="dash-card-header">
        <h2 class="dash-card-title">${I.graduationCap} Data Mahasiswa</h2>
      </div>
      <div class="dash-card-body">
        <!-- Stat Cards -->
        <div class="stat-grid" id="mhsStatCards">
          <div class="stat-card">
            <div class="stat-icon blue">${I.users}</div>
            <div class="stat-num" id="mhsTotal">-</div>
            <div class="stat-label">Total Mahasiswa</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon green">${I.checkCircle}</div>
            <div class="stat-num" id="mhsAktif">-</div>
            <div class="stat-label">Aktif</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon gold">${I.clock}</div>
            <div class="stat-num" id="mhsCuti">-</div>
            <div class="stat-label">Cuti</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon purple">${I.award}</div>
            <div class="stat-num" id="mhsLulus">-</div>
            <div class="stat-label">Lulus</div>
          </div>
        </div>

        <!-- Search & Filters -->
        <div style="display:flex;gap:10px;margin:20px 0 16px;flex-wrap:wrap;align-items:center;">
          <div style="flex:1;min-width:220px;position:relative;">
            <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--text-muted);pointer-events:none;">${I.search}</span>
            <input type="text" id="mhsSearch" placeholder="Cari NIM atau Nama..." class="form-input" style="padding-left:38px;">
          </div>
          <select id="mhsFilterProdi" class="form-select" style="min-width:160px;">
            <option value="">Semua Prodi</option>
            <option value="S1 Administrasi Publik">S1 Adm. Publik</option>
            <option value="S1 Administrasi Bisnis">S1 Adm. Bisnis</option>
            <option value="S2 Administrasi Publik">S2 Adm. Publik</option>
            <option value="D3 Ilmu Administrasi">D3 Ilmu Adm.</option>
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
    <div class="modal-overlay" id="mhsModal">
      <div class="modal-container" style="max-width:580px;">
        <div class="modal-header">
          <h3 class="modal-title" id="mhsModalTitle">Detail</h3>
          <button class="modal-close" onclick="document.getElementById('mhsModal').classList.remove('active')">&times;</button>
        </div>
        <div class="modal-body" id="mhsModalBody"></div>
      </div>
    </div>`;
}

function initMahasiswaPage() {
  loadMahasiswaList();

  // Search
  document.getElementById('mhsSearch')?.addEventListener('input', filterMahasiswa);
  document.getElementById('mhsFilterProdi')?.addEventListener('change', filterMahasiswa);
  document.getElementById('mhsFilterStatus')?.addEventListener('change', filterMahasiswa);
}

async function loadMahasiswaList() {
  try {
    // Get accounts (validated = mahasiswa aktif)
    const res = await fetch(`${MHS_API}/registrations`);
    if (!res.ok) throw new Error('Gagal memuat data');
    const response = await res.json();
    const registrations = Array.isArray(response) ? response : (response.data || []);

    // Filter only those with accounts (status = diterima)
    _mahasiswaList = registrations
      .filter(r => r.status === 'diterima')
      .map((r, idx) => ({
        ...r,
        nim: r.nim || `20260${String(idx + 1).padStart(4, '0')}`,
        angkatan: r.angkatan || (r.created_at ? new Date(r.created_at).getFullYear() : 2026),
        semester: r.semester || 1,
        status_mhs: r.status_mhs || 'aktif',
      }));

    updateMhsStats();
    renderMhsTable(_mahasiswaList);
  } catch (err) {
    document.getElementById('mhsTableContainer').innerHTML = `
      <div style="text-align:center;padding:32px;">
        <p style="color:var(--text-muted);font-size:var(--text-sm);">⚠️ ${err.message}</p>
      </div>`;
  }
}

function updateMhsStats() {
  const total = _mahasiswaList.length;
  const aktif = _mahasiswaList.filter(m => m.status_mhs === 'aktif').length;
  const cuti = _mahasiswaList.filter(m => m.status_mhs === 'cuti').length;
  const lulus = _mahasiswaList.filter(m => m.status_mhs === 'lulus').length;

  const el = (id) => document.getElementById(id);
  if (el('mhsTotal')) el('mhsTotal').textContent = total;
  if (el('mhsAktif')) el('mhsAktif').textContent = aktif;
  if (el('mhsCuti')) el('mhsCuti').textContent = cuti;
  if (el('mhsLulus')) el('mhsLulus').textContent = lulus;
}

function filterMahasiswa() {
  const query = (document.getElementById('mhsSearch')?.value || '').toLowerCase();
  const prodi = document.getElementById('mhsFilterProdi')?.value || '';
  const status = document.getElementById('mhsFilterStatus')?.value || '';

  const filtered = _mahasiswaList.filter(m => {
    const matchSearch = !query || (m.nama || '').toLowerCase().includes(query) || (m.nim || '').toLowerCase().includes(query) || (m.nik || '').includes(query);
    const matchProdi = !prodi || m.prodi_pilihan === prodi;
    const matchStatus = !status || m.status_mhs === status;
    return matchSearch && matchProdi && matchStatus;
  });

  renderMhsTable(filtered);
}

function renderMhsTable(list) {
  const container = document.getElementById('mhsTableContainer');
  const countEl = document.getElementById('mhsCount');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:32px;">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gray-300)" stroke-width="1.5" style="margin:0 auto 12px;display:block;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
      <p style="color:var(--text-muted);font-size:var(--text-sm);">Tidak ada mahasiswa ditemukan</p>
    </div>`;
    if (countEl) countEl.textContent = '';
    return;
  }

  container.innerHTML = `
    <table class="sch-table" style="font-size:0.82rem;">
      <thead><tr>
        <th>NIM</th><th>Nama</th><th>Prodi</th><th>Angkatan</th><th>Semester</th><th>Status</th><th>Aksi</th>
      </tr></thead>
      <tbody>
        ${list.map(m => `<tr class="mhs-tr" data-id="${m.id}" style="cursor:pointer;">
          <td style="font-family:var(--font-mono);font-weight:600;white-space:nowrap;">${m.nim}</td>
          <td>
            <strong>${m.nama}</strong><br>
            <span style="font-size:0.7rem;color:var(--text-muted);">${m.email || '-'}</span>
          </td>
          <td style="font-size:0.8rem;">${m.prodi_pilihan || '-'}</td>
          <td style="text-align:center;">${m.angkatan}</td>
          <td style="text-align:center;">${m.semester}</td>
          <td><span class="badge-sm ${m.status_mhs === 'aktif' ? 'success' : m.status_mhs === 'cuti' ? 'warning' : m.status_mhs === 'lulus' ? 'blue' : 'danger'}">${m.status_mhs}</span></td>
          <td onclick="event.stopPropagation();">
            <div style="display:flex;gap:4px;">
              <button class="mgmt-action-btn mhs-edit-btn" data-id="${m.id}" title="Edit">✏️</button>
              <button class="mgmt-action-btn mhs-del-btn" data-id="${m.id}" title="Hapus" style="color:hsl(0 65% 50%);">🗑️</button>
            </div>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>`;

  if (countEl) countEl.textContent = `Menampilkan ${list.length} mahasiswa`;

  // Row click → profile modal
  container.querySelectorAll('.mhs-tr').forEach(row => {
    row.addEventListener('click', () => {
      const id = parseInt(row.dataset.id);
      const mhs = _mahasiswaList.find(m => m.id === id);
      if (mhs) showMhsProfile(mhs);
    });
  });

  // Edit buttons
  container.querySelectorAll('.mhs-edit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const mhs = _mahasiswaList.find(m => m.id === id);
      if (mhs) showMhsEditModal(mhs);
    });
  });

  // Delete buttons
  container.querySelectorAll('.mhs-del-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = parseInt(btn.dataset.id);
      const mhs = _mahasiswaList.find(m => m.id === id);
      if (!mhs) return;
      if (!confirm(`⚠️ Hapus data mahasiswa ${mhs.nama}?\n\nAkun dan data terkait akan dihapus.`)) return;
      try {
        const res = await fetch(`${PMB_API}/registration/${id}`, { method: 'DELETE' });
        if (res.ok) { alert('✅ Data mahasiswa berhasil dihapus'); loadMahasiswaList(); }
        else { const r = await res.json(); alert('❌ ' + (r.error || 'Gagal menghapus')); }
      } catch (err) { alert('❌ ' + err.message); }
    });
  });
}

function showMhsProfile(m) {
  const modal = document.getElementById('mhsModal');
  const modalBody = document.getElementById('mhsModalBody');
  const modalTitle = document.getElementById('mhsModalTitle');
  if (!modal || !modalBody) return;

  if (modalTitle) modalTitle.textContent = 'Profil Mahasiswa';

  const row = (label, value) => `
    <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--gray-50);">
      <span style="font-size:0.78rem;color:var(--text-muted);">${label}</span>
      <span style="font-size:0.85rem;font-weight:600;text-align:right;">${value || '-'}</span>
    </div>`;

  modalBody.innerHTML = `
    <!-- Header -->
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;">
      <div style="width:56px;height:56px;border-radius:50%;background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:1.2rem;">${(m.nama || '?')[0]}</div>
      <div>
        <h3 style="margin:0;font-size:1.1rem;">${m.nama}</h3>
        <div style="font-family:var(--font-mono);font-size:0.85rem;color:var(--text-muted);">NIM: ${m.nim}</div>
        <span class="badge-sm ${m.status_mhs === 'aktif' ? 'success' : m.status_mhs === 'cuti' ? 'warning' : 'blue'}" style="margin-top:4px;">${m.status_mhs}</span>
      </div>
    </div>

    <!-- Akademik -->
    <h4 style="font-size:0.82rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;margin:0 0 8px;">🎓 Akademik</h4>
    ${row('Program Studi', m.prodi_pilihan)}
    ${row('Angkatan', m.angkatan)}
    ${row('Semester', m.semester)}

    <!-- Data Pribadi -->
    <h4 style="font-size:0.82rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;margin:20px 0 8px;">👤 Data Pribadi</h4>
    ${row('NIK', m.nik)}
    ${row('Email', m.email)}
    ${row('Telepon', m.telepon_1)}
    ${row('Tempat Lahir', m.tempat_lahir)}
    ${row('Tanggal Lahir', m.tanggal_lahir)}
    ${row('Gender', m.gender)}
    ${row('Agama', m.agama)}

    <!-- Alamat -->
    <h4 style="font-size:0.82rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;margin:20px 0 8px;">📍 Alamat</h4>
    ${row('Alamat', m.alamat)}
    ${row('Kota', [m.kecamatan, m.kota, m.provinsi].filter(Boolean).join(', '))}

    <!-- Orang Tua -->
    <h4 style="font-size:0.82rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;margin:20px 0 8px;">👨‍👩‍👧 Orang Tua / Wali</h4>
    ${row('Nama Ayah', m.nama_ayah)}
    ${row('Nama Ibu', m.nama_ibu)}
    ${row('Pekerjaan Ayah', m.pekerjaan_ayah)}
    ${row('Asal Sekolah', m.asal_sekolah)}
  `;

  modal.classList.add('active');
}

function showMhsEditModal(m) {
  const modal = document.getElementById('mhsModal');
  const modalBody = document.getElementById('mhsModalBody');
  const modalTitle = document.getElementById('mhsModalTitle');
  if (!modal || !modalBody) return;

  if (modalTitle) modalTitle.textContent = 'Edit Data Mahasiswa';

  const prodiOptions = ['S1 Administrasi Publik','S1 Administrasi Bisnis','S2 Administrasi Publik','D3 Ilmu Administrasi'];
  const v = (val) => val || '';

  modalBody.innerHTML = `
    <form id="mhsEditForm" style="max-height:55vh;overflow-y:auto;padding-right:6px;">
      <div class="off-section">
        <h5 class="off-section-title">🎓 Akademik</h5>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Program Studi</label>
            <select name="prodi_pilihan" class="form-select">
              ${prodiOptions.map(p => `<option value="${p}" ${m.prodi_pilihan === p ? 'selected' : ''}>${p}</option>`).join('')}
            </select>
          </div>
          <div class="form-group"><label class="form-label">Status Mahasiswa</label>
            <select name="status_mhs" class="form-select">
              ${['aktif','cuti','lulus','do'].map(s => `<option value="${s}" ${m.status_mhs === s ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Semester</label><input type="number" name="semester" value="${m.semester || 1}" min="1" max="14" class="form-input"></div>
          <div class="form-group"><label class="form-label">NIM</label><input type="text" name="nim" value="${v(m.nim)}" class="form-input" readonly style="opacity:.6;"></div>
        </div>
      </div>

      <div class="off-section">
        <h5 class="off-section-title">👤 Data Pribadi</h5>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Nama *</label><input type="text" name="nama" value="${v(m.nama)}" required class="form-input"></div>
          <div class="form-group"><label class="form-label">NIK</label><input type="text" name="nik" value="${v(m.nik)}" class="form-input" maxlength="16"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Email</label><input type="email" name="email" value="${v(m.email)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Telepon</label><input type="tel" name="telepon_1" value="${v(m.telepon_1)}" class="form-input" maxlength="12"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Tempat Lahir</label><input type="text" name="tempat_lahir" value="${v(m.tempat_lahir)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Tanggal Lahir</label><input type="date" name="tanggal_lahir" value="${v(m.tanggal_lahir)}" class="form-input"></div>
        </div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Gender</label>
            <select name="gender" class="form-select">
              <option value="">-</option>
              <option value="Laki-laki" ${m.gender === 'Laki-laki' ? 'selected' : ''}>Laki-laki</option>
              <option value="Perempuan" ${m.gender === 'Perempuan' ? 'selected' : ''}>Perempuan</option>
            </select>
          </div>
          <div class="form-group"><label class="form-label">Agama</label>
            <select name="agama" class="form-select">
              <option value="">-</option>
              ${['Islam','Kristen','Katolik','Hindu','Budha','Konghucu'].map(a => `<option value="${a}" ${m.agama === a ? 'selected' : ''}>${a}</option>`).join('')}
            </select>
          </div>
        </div>
      </div>

      <div class="off-section">
        <h5 class="off-section-title">📍 Alamat</h5>
        <div class="form-group" style="margin-bottom:12px;"><label class="form-label">Alamat</label><textarea name="alamat" class="form-input" rows="2">${v(m.alamat)}</textarea></div>
        <div class="off-row">
          <div class="form-group"><label class="form-label">Kota</label><input type="text" name="kota" value="${v(m.kota)}" class="form-input"></div>
          <div class="form-group"><label class="form-label">Provinsi</label><input type="text" name="provinsi" value="${v(m.provinsi)}" class="form-input"></div>
        </div>
      </div>

      <div class="off-section">
        <h5 class="off-section-title">🏫 Pendidikan</h5>
        <div class="form-group"><label class="form-label">Asal Sekolah</label><input type="text" name="asal_sekolah" value="${v(m.asal_sekolah)}" class="form-input"></div>
      </div>

      <div style="display:flex;gap:8px;margin-top:16px;">
        <button type="submit" class="btn btn-primary" style="flex:1;" id="mhsEditSaveBtn">💾 Simpan</button>
        <button type="button" class="btn btn-secondary" onclick="document.getElementById('mhsModal').classList.remove('active')">Batal</button>
      </div>
    </form>`;

  modal.classList.add('active');

  document.getElementById('mhsEditForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('mhsEditSaveBtn');
    btn.disabled = true;
    btn.textContent = 'Menyimpan...';

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((v, k) => { if (v) data[k] = v; });

    try {
      const res = await fetch(`${PMB_API}/registration/${m.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        alert('✅ Data berhasil diperbarui');
        modal.classList.remove('active');
        loadMahasiswaList();
      } else {
        alert('❌ ' + (result.error || 'Gagal'));
        btn.disabled = false;
        btn.textContent = '💾 Simpan';
      }
    } catch (err) {
      alert('❌ ' + err.message);
      btn.disabled = false;
      btn.textContent = '💾 Simpan';
    }
  });
}

// ---- Content Router ----
// ============================================
// PROFIL SAYA — Student Profile Page
// ============================================
function profilSayaContent(user) {
  const initials = (user.nama || '?').split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
  const vv = (val) => val ? '<span class="profil-row-value">' + val + '</span>' : '<span class="profil-row-value muted">Belum diisi</span>';
  const vm = (val) => val ? '<span class="profil-row-value mono">' + val + '</span>' : '<span class="profil-row-value muted">Belum diisi</span>';
  const row = (label, value, cls) => '<div class="profil-row' + (cls ? ' '+cls : '') + '"><div class="profil-row-label">' + label + '</div>' + value + '</div>';

  const agamaOpts = ['Islam','Kristen','Katolik','Hindu','Budha','Konghucu'].map(a => '<option value="'+a+'" '+(user.agama===a?'selected':'')+'>'+a+'</option>').join('');

  return '<div style="background:var(--gradient-primary);border-radius:16px;padding:28px 24px;display:flex;align-items:center;gap:20px;flex-wrap:wrap;margin-bottom:20px;position:relative;overflow:hidden;" role="banner" aria-label="Profil mahasiswa">'
    + '<div style="position:absolute;top:-40px;right:-40px;width:140px;height:140px;background:rgba(255,255,255,.05);border-radius:50%;"></div>'
    + '<div style="position:absolute;bottom:-30px;left:30%;width:100px;height:100px;background:rgba(255,255,255,.03);border-radius:50%;"></div>'
    + '<div style="width:72px;height:72px;border-radius:50%;background:rgba(255,255,255,.15);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:1.5rem;border:2px solid rgba(255,255,255,.3);flex-shrink:0;" role="img" aria-label="Avatar">' + initials + '</div>'
    + '<div style="flex:1;color:white;min-width:180px;">'
    + '<h2 style="font-family:var(--font-heading);margin:0 0 4px;font-size:1.25rem;font-weight:800;">' + user.nama + '</h2>'
    + '<p style="margin:0 0 8px;opacity:.8;font-size:0.82rem;">' + user.prodi + '</p>'
    + '<div style="display:flex;gap:6px;flex-wrap:wrap;">'
    + '<span style="background:rgba(255,255,255,.15);padding:3px 10px;border-radius:16px;font-size:0.7rem;font-family:var(--font-mono);border:1px solid rgba(255,255,255,.15);">NIM ' + user.nim + '</span>'
    + '<span style="background:rgba(255,255,255,.15);padding:3px 10px;border-radius:16px;font-size:0.7rem;border:1px solid rgba(255,255,255,.15);">Semester ' + user.semester + '</span>'
    + '<span style="background:hsl(145 65% 38%);padding:3px 10px;border-radius:16px;font-size:0.7rem;font-weight:700;" role="status">\u2713 Aktif</span>'
    + '</div></div>'
    + '<button class="profil-edit-btn" id="editProfilToggle" style="background:rgba(255,255,255,.15);color:white;border-color:rgba(255,255,255,.3);padding:6px 16px;border-radius:8px;" aria-label="Edit profil">\u270f\ufe0f Edit Profil</button>'
    + '</div>'

    // Edit Form (hidden)
    + '<div id="editProfilSection" style="display:none;margin-bottom:16px;" role="form" aria-label="Form edit profil">'
    + '<div class="profil-section" style="border:2px solid var(--primary-100);">'
    + '<div class="profil-section-header"><h3 class="profil-section-title"><span class="pst-icon" style="background:var(--primary-100);color:var(--primary-600);">\ud83d\udcdd</span> Edit Data Profil</h3></div>'
    + '<div style="padding:20px;">'
    + '<form id="editProfilForm">'
    + '<div class="off-section"><h5 class="off-section-title">\ud83d\udc64 Data Pribadi</h5>'
    + '<div class="off-row"><div class="form-group"><label class="form-label" for="ep_nama">Nama Lengkap</label><input type="text" id="ep_nama" name="nama" value="' + user.nama + '" class="form-input" required></div>'
    + '<div class="form-group"><label class="form-label" for="ep_nik">NIK</label><input type="text" id="ep_nik" name="nik" value="' + (user.nik||'') + '" class="form-input" maxlength="16"></div></div>'
    + '<div class="off-row"><div class="form-group"><label class="form-label" for="ep_email">Email</label><input type="email" id="ep_email" name="email" value="' + user.email + '" class="form-input"></div>'
    + '<div class="form-group"><label class="form-label" for="ep_telepon">Telepon</label><input type="tel" id="ep_telepon" name="telepon_1" value="' + (user.telepon_1||'') + '" class="form-input" maxlength="13"></div></div>'
    + '<div class="off-row"><div class="form-group"><label class="form-label" for="ep_tempat">Tempat Lahir</label><input type="text" id="ep_tempat" name="tempat_lahir" value="' + (user.tempat_lahir||'') + '" class="form-input"></div>'
    + '<div class="form-group"><label class="form-label" for="ep_tgl">Tanggal Lahir</label><input type="date" id="ep_tgl" name="tanggal_lahir" value="' + (user.tanggal_lahir||'') + '" class="form-input"></div></div>'
    + '<div class="off-row"><div class="form-group"><label class="form-label" for="ep_gender">Gender</label><select id="ep_gender" name="gender" class="form-select"><option value="">\u2014</option><option value="Laki-laki" ' + (user.gender==='Laki-laki'?'selected':'') + '>Laki-laki</option><option value="Perempuan" ' + (user.gender==='Perempuan'?'selected':'') + '>Perempuan</option></select></div>'
    + '<div class="form-group"><label class="form-label" for="ep_agama">Agama</label><select id="ep_agama" name="agama" class="form-select"><option value="">\u2014</option>' + agamaOpts + '</select></div></div>'
    + '</div>'
    + '<div class="off-section"><h5 class="off-section-title">\ud83d\udccd Alamat</h5>'
    + '<div class="form-group" style="margin-bottom:12px;"><label class="form-label" for="ep_alamat">Alamat</label><textarea id="ep_alamat" name="alamat" class="form-input" rows="2">' + (user.alamat||'') + '</textarea></div>'
    + '<div class="off-row"><div class="form-group"><label class="form-label" for="ep_prov">Provinsi</label><input type="text" id="ep_prov" name="provinsi" value="' + (user.provinsi||'') + '" class="form-input"></div>'
    + '<div class="form-group"><label class="form-label" for="ep_kota">Kota</label><input type="text" id="ep_kota" name="kota" value="' + (user.kota||'') + '" class="form-input"></div></div>'
    + '<div class="off-row"><div class="form-group"><label class="form-label" for="ep_kec">Kecamatan</label><input type="text" id="ep_kec" name="kecamatan" value="' + (user.kecamatan||'') + '" class="form-input"></div>'
    + '<div class="form-group"><label class="form-label" for="ep_kel">Kelurahan</label><input type="text" id="ep_kel" name="kelurahan" value="' + (user.kelurahan||'') + '" class="form-input"></div></div></div>'
    + '<div class="off-section"><h5 class="off-section-title">\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 Data Keluarga</h5>'
    + '<div class="off-row"><div class="form-group"><label class="form-label" for="ep_ayah">Nama Ayah</label><input type="text" id="ep_ayah" name="nama_ayah" value="' + (user.nama_ayah||'') + '" class="form-input"></div>'
    + '<div class="form-group"><label class="form-label" for="ep_pkayah">Pekerjaan Ayah</label><input type="text" id="ep_pkayah" name="pekerjaan_ayah" value="' + (user.pekerjaan_ayah||'') + '" class="form-input"></div></div>'
    + '<div class="off-row"><div class="form-group"><label class="form-label" for="ep_ibu">Nama Ibu</label><input type="text" id="ep_ibu" name="nama_ibu" value="' + (user.nama_ibu||'') + '" class="form-input"></div>'
    + '<div class="form-group"><label class="form-label" for="ep_pkibu">Pekerjaan Ibu</label><input type="text" id="ep_pkibu" name="pekerjaan_ibu" value="' + (user.pekerjaan_ibu||'') + '" class="form-input"></div></div></div>'
    + '<div style="display:flex;gap:10px;margin-top:16px;">'
    + '<button type="submit" class="btn btn-primary" style="flex:1;border-radius:10px;padding:10px;">\ud83d\udcbe Simpan Perubahan</button>'
    + '<button type="button" class="btn btn-secondary" id="cancelEditProfil" style="border-radius:10px;padding:10px 20px;">Batal</button>'
    + '</div></form></div></div></div>'

    // Data Pribadi Section
    + '<div class="profil-section" role="region" aria-labelledby="secPribadi">'
    + '<div class="profil-section-header"><h3 class="profil-section-title" id="secPribadi"><span class="pst-icon" style="background:hsl(215 50% 94%);color:var(--primary-600);">\ud83d\udc64</span> Data Pribadi</h3></div>'
    + '<div class="profil-2col">'
    + row('Nama Lengkap', vv(user.nama))
    + row('NIM', vm(user.nim))
    + row('NIK', vm(user.nik))
    + row('NISN', vm(user.nisn))
    + row('Email', vv(user.email))
    + row('Telepon', vv(user.telepon_1))
    + row('Tempat Lahir', vv(user.tempat_lahir))
    + row('Tanggal Lahir', vv(user.tanggal_lahir))
    + row('Jenis Kelamin', vv(user.gender))
    + row('Agama', vv(user.agama))
    + row('No. KIP', vv(user.kip))
    + row('No. KKS', vv(user.kks))
    + '</div></div>'

    // Alamat Section
    + '<div class="profil-section" role="region" aria-labelledby="secAlamat">'
    + '<div class="profil-section-header"><h3 class="profil-section-title" id="secAlamat"><span class="pst-icon" style="background:hsl(145 40% 93%);color:hsl(145 55% 35%);">\ud83d\udccd</span> Alamat</h3></div>'
    + '<div>'
    + row('Alamat Lengkap', vv(user.alamat))
    + '<div class="profil-2col">'
    + row('Provinsi', vv(user.provinsi))
    + row('Kota / Kabupaten', vv(user.kota))
    + row('Kecamatan', vv(user.kecamatan))
    + row('Kelurahan', vv(user.kelurahan))
    + '</div>'
    + row('Kode Pos', vm(user.kode_pos))
    + '</div></div>'

    // Data Orang Tua Section
    + '<div class="profil-section" role="region" aria-labelledby="secKeluarga">'
    + '<div class="profil-section-header"><h3 class="profil-section-title" id="secKeluarga"><span class="pst-icon" style="background:hsl(38 50% 93%);color:hsl(38 70% 40%);">\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67</span> Data Orang Tua / Wali</h3></div>'
    + '<div class="profil-2col">'
    + row('Anak Ke', '<span class="profil-row-value">' + (user.anak_ke || '\u2014') + ' dari ' + (user.dari_jumlah || '\u2014') + ' bersaudara</span>')
    + row('No. KK', vm(user.no_kk))
    + row('Nama Ayah', vv(user.nama_ayah))
    + row('Pekerjaan Ayah', vv(user.pekerjaan_ayah))
    + row('NIK Ayah', vm(user.nik_ayah))
    + row('Nama Ibu', vv(user.nama_ibu))
    + row('Pekerjaan Ibu', vv(user.pekerjaan_ibu))
    + row('NIK Ibu', vm(user.nik_ibu))
    + '</div></div>'

    // Asal Sekolah & Akademik Section
    + '<div class="profil-section" role="region" aria-labelledby="secSekolah">'
    + '<div class="profil-section-header"><h3 class="profil-section-title" id="secSekolah"><span class="pst-icon" style="background:hsl(280 40% 93%);color:hsl(280 55% 45%);">\ud83c\udfeb</span> Asal Sekolah & Akademik</h3></div>'
    + '<div class="profil-2col">'
    + row('Asal Sekolah', vv(user.asal_sekolah))
    + row('Program Studi', vv(user.prodi))
    + row('Jenjang', '<span class="profil-row-value">Strata 1 (S1)</span>')
    + row('Status', '<span class="profil-row-value"><span style="background:hsl(145 55% 45%);color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:600;">\u2713 Aktif</span></span>')
    + '</div></div>'

    // Pengaturan Akun Section
    + '<div class="profil-section" role="region" aria-labelledby="secAkun">'
    + '<div class="profil-section-header"><h3 class="profil-section-title" id="secAkun"><span class="pst-icon" style="background:hsl(0 0% 94%);color:var(--text-muted);">\u2699\ufe0f</span> Pengaturan Akun</h3></div>'
    + '<div style="padding:20px;">'
    + '<form id="profilForm" style="max-width:380px;" autocomplete="off" aria-label="Ubah password">'
    + '<div class="form-group" style="margin-bottom:12px;"><label class="form-label" for="profOldPw">Password Lama</label><input type="password" id="profOldPw" class="form-input" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" autocomplete="current-password"></div>'
    + '<div class="form-group" style="margin-bottom:12px;"><label class="form-label" for="profNewPw">Password Baru</label><input type="password" id="profNewPw" class="form-input" placeholder="Minimal 8 karakter" autocomplete="new-password" minlength="8"></div>'
    + '<div class="form-group" style="margin-bottom:16px;"><label class="form-label" for="profConfPw">Konfirmasi Password Baru</label><input type="password" id="profConfPw" class="form-input" placeholder="Ulangi password baru" autocomplete="new-password"></div>'
    + '<button type="button" class="btn btn-primary btn-sm" style="border-radius:8px;" onclick="alert(\'\u2705 Password berhasil diubah!\')">\ud83d\udd10 Ubah Password</button>'
    + '</form></div></div>';
}


const CONTENT_RENDERERS = { mahasiswa: mahasiswaContent, dosen: dosenContent, kaprodi: kaprodiContent, bap: bapContent };

// ============================================
// MAIN RENDER
// ============================================
export function renderDashboard(container) {
  const user = getUser();
  if (!user) { window.location.hash = '#/login'; return; }

  const contentFn = CONTENT_RENDERERS[user.role] || mahasiswaContent;

  container.innerHTML = `
  <a href="#dashMain" class="skip-to-content" aria-label="Langsung ke konten utama">Skip to content</a>
  <div class="dash" role="application" aria-label="SIAKAD - Sistem Informasi Akademik">
    ${buildSidebar(user)}
    <div class="mobile-sidebar-overlay" id="sidebarOverlay" aria-hidden="true"></div>
    ${buildTopbar(user)}
    <main class="dash-content" id="dashMain" role="main" aria-label="Konten utama SIAKAD">
      ${contentFn(user)}
      <footer class="dash-iso-footer" role="contentinfo" aria-label="Sertifikasi ISO">
        <span class="dash-iso-badge">${I.shield} ISO 27001 — Security</span>
        <span class="dash-iso-badge">${I.checkCircle} ISO 9241 — Usability</span>
        <span class="dash-iso-badge">${I.checkCircle} ISO 40500 — Accessibility</span>
      </footer>
    </main>
  </div>`;

  // ---- Event Handlers ----
  // Hamburger
  const hamburger = document.getElementById('dashHamburger');
  const sidebar = document.getElementById('dashSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  hamburger?.addEventListener('click', () => {
    const isOpen = sidebar?.classList.toggle('open');
    overlay?.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  overlay?.addEventListener('click', () => {
    sidebar?.classList.remove('open');
    overlay?.classList.remove('open');
  });

  // Sidebar nav
  document.querySelectorAll('.sidebar-link[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.sidebar-link').forEach(l => { l.classList.remove('active'); l.removeAttribute('aria-current'); });
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
      sidebar?.classList.remove('open');
      overlay?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');

      // Page routing
      const page = link.dataset.page;
      const mainContent = document.getElementById('dashMain');
      const isoFooter = `<footer class="dash-iso-footer" role="contentinfo" aria-label="Sertifikasi ISO">
            <span class="dash-iso-badge">${I.shield} ISO 27001 — Security</span>
            <span class="dash-iso-badge">${I.checkCircle} ISO 9241 — Usability</span>
            <span class="dash-iso-badge">${I.checkCircle} ISO 40500 — Accessibility</span>
          </footer>`;

      if (mainContent && page === 'pmb' && user.role === 'bap') {
        mainContent.innerHTML = bapPMBContent() + isoFooter;
        initPMBManagement();
      } else if (mainContent && page === 'mahasiswa' && user.role === 'bap') {
        mainContent.innerHTML = bapMahasiswaContent() + isoFooter;
        initMahasiswaPage();
      } else if (mainContent && page === 'home') {
        mainContent.innerHTML = contentFn(user) + isoFooter;
      } else if (mainContent && page === 'data' && user.role === 'mahasiswa') {
        mainContent.innerHTML = profilSayaContent(user) + isoFooter;
        // Init edit profil handlers
        const editToggle = document.getElementById('editProfilToggle');
        const editSection = document.getElementById('editProfilSection');
        const cancelBtn = document.getElementById('cancelEditProfil');
        editToggle?.addEventListener('click', () => {
          const showing = editSection.style.display !== 'none';
          editSection.style.display = showing ? 'none' : 'block';
          editToggle.textContent = showing ? '✏️ Edit Profil' : '❌ Tutup Form';
        });
        cancelBtn?.addEventListener('click', () => {
          editSection.style.display = 'none';
          editToggle.textContent = '✏️ Edit Profil';
        });
        document.getElementById('editProfilForm')?.addEventListener('submit', (ev) => {
          ev.preventDefault();
          const fd = new FormData(ev.target);
          const updated = { ...user };
          fd.forEach((val, key) => { updated[key] = val; });
          // Persist to session
          sessionStorage.setItem('user', JSON.stringify(updated));
          // Also update appState
          import('../../js/app.js').then(mod => { mod.setUser(updated); });
          alert('✅ Profil berhasil diperbarui!');
          mainContent.innerHTML = profilSayaContent(updated) + isoFooter;
        });
      }
    });
  });

  // Keyboard: Escape to close sidebar (ISO 9241 — predictable interaction)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar?.classList.contains('open')) {
      sidebar.classList.remove('open');
      overlay?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      hamburger?.focus();
    }
  });

  // Logout
  document.getElementById('logoutBtn')?.addEventListener('click', () => logout());
}
