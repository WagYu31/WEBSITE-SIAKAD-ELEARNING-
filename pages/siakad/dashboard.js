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
};

// ---- Sidebar menu config per role ----
const MENUS = {
  mahasiswa: [
    { label: 'SIAKAD', items: [
      { icon: I.home, text: 'Dashboard', id: 'home', active: true },
      { icon: I.calendar, text: 'Jadwal Kuliah', id: 'jadwal' },
      { icon: I.clipboard, text: 'KRS / KHS', id: 'krs' },
      { icon: I.award, text: 'Nilai', id: 'nilai' },
      { icon: I.users, text: 'Data Mahasiswa', id: 'data' },
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
      { icon: I.users, text: 'Manajemen PMB', id: 'pmb' },
      { icon: I.users, text: 'Data Mahasiswa', id: 'mahasiswa' },
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
      <div class="dash-card-head" style="display:flex;justify-content:space-between;align-items:center;">
        <h3>📋 Manajemen PMB</h3>
        <div style="display:flex;gap:8px;">
          <button class="pmb-mgmt-btn active" data-tab="list">Daftar Pendaftar</button>
          <button class="pmb-mgmt-btn" data-tab="add">+ Tambah Offline</button>
        </div>
      </div>
      <div class="dash-card-body" id="pmbMgmtContent">
        <div style="text-align:center;padding:20px;color:hsl(215 15% 55%);">Memuat data...</div>
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
  loadRegistrationList();
}

async function loadRegistrationList() {
  const content = document.getElementById('pmbMgmtContent');
  if (!content) return;
  content.innerHTML = '<div style="text-align:center;padding:20px;">Memuat...</div>';

  try {
    const [regRes, statsRes] = await Promise.all([
      fetch(`${PMB_API}/registrations`),
      fetch(`${PMB_API}/stats`)
    ]);
    const regData = await regRes.json();
    const stats = await statsRes.json();
    const registrations = regData.data || [];

    content.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px;">
        <div style="background:hsl(215 80% 95%);padding:10px;border-radius:8px;text-align:center;">
          <div style="font-weight:800;font-size:1.3rem;color:hsl(215 70% 45%);">${stats.total_pendaftar}</div>
          <div style="font-size:0.75rem;color:hsl(215 15% 50%);">Total</div>
        </div>
        <div style="background:hsl(40 80% 93%);padding:10px;border-radius:8px;text-align:center;">
          <div style="font-weight:800;font-size:1.3rem;color:hsl(40 60% 40%);">${stats.total_proses}</div>
          <div style="font-size:0.75rem;color:hsl(215 15% 50%);">Proses</div>
        </div>
        <div style="background:hsl(150 50% 92%);padding:10px;border-radius:8px;text-align:center;">
          <div style="font-weight:800;font-size:1.3rem;color:hsl(150 50% 35%);">${stats.total_diterima}</div>
          <div style="font-size:0.75rem;color:hsl(215 15% 50%);">Diterima</div>
        </div>
        <div style="background:hsl(0 60% 93%);padding:10px;border-radius:8px;text-align:center;">
          <div style="font-weight:800;font-size:1.3rem;color:hsl(0 55% 45%);">${stats.total_ditolak}</div>
          <div style="font-size:0.75rem;color:hsl(215 15% 50%);">Ditolak</div>
        </div>
      </div>

      ${registrations.length === 0 ? 
        '<p style="text-align:center;color:hsl(215 15% 55%);padding:20px;">Belum ada pendaftar.</p>' :
        `<table class="sch-table" style="font-size:0.82rem;">
          <thead><tr>
            <th>No. Daftar</th><th>Nama</th><th>NIK</th><th>Prodi</th><th>Metode</th><th>Status</th><th>Aksi</th>
          </tr></thead>
          <tbody>
            ${registrations.map(r => `<tr>
              <td style="font-family:monospace;font-weight:600;">${r.no_pendaftaran}</td>
              <td><strong>${r.nama}</strong></td>
              <td>${r.nik}</td>
              <td>${r.prodi_pilihan || '-'}</td>
              <td><span class="badge-sm ${r.metode === 'online' ? 'blue' : 'warning'}">${r.metode}</span></td>
              <td><span class="badge-sm ${r.status === 'diterima' ? 'success' : r.status === 'ditolak' ? 'danger' : r.status === 'proses' ? 'blue' : 'warning'}">${r.status}</span></td>
              <td>
                <div style="display:flex;gap:4px;flex-wrap:wrap;">
                  <button class="mgmt-action-btn" data-action="create-account" data-id="${r.id}" data-email="${r.email}" data-prodi="${r.prodi_pilihan}" title="Buat Akun">🔐 Akun</button>
                  <button class="mgmt-action-btn" data-action="validate" data-id="${r.id}" title="Validasi">✅ Validasi</button>
                  <button class="mgmt-action-btn" data-action="confirm-pay" data-id="${r.id}" title="Konfirmasi Bayar">💰 Bayar</button>
                </div>
              </td>
            </tr>`).join('')}
          </tbody>
        </table>`
      }`;

    // Bind action buttons
    document.querySelectorAll('.mgmt-action-btn').forEach(btn => {
      btn.addEventListener('click', () => handleMgmtAction(btn.dataset.action, btn.dataset));
    });
  } catch (err) {
    content.innerHTML = '<p style="color:hsl(0 60% 50%);text-align:center;">❌ Gagal memuat data. Pastikan server backend berjalan.</p>';
  }
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
          alert(`✅ Akun dibuat!\n\nNIM: ${result.nim}\nPassword: ${result.password}\nEmail: ${result.email}`);
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
    <form id="offlineRegForm" style="max-width:600px;">
      <h4 style="margin:0 0 16px;">➕ Input Data Mahasiswa Baru (Offline)</h4>
      
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
        <div>
          <label style="font-size:0.78rem;font-weight:600;color:hsl(215 15% 50%);display:block;margin-bottom:4px;">Program Studi *</label>
          <select name="prodi_pilihan" required style="width:100%;padding:8px 12px;border:1.5px solid hsl(215 20% 88%);border-radius:8px;font-size:0.85rem;">
            <option value="">Pilih Prodi</option>
            ${prodiOptions.map(p => `<option value="${p}">${p}</option>`).join('')}
          </select>
        </div>
        <div>
          <label style="font-size:0.78rem;font-weight:600;color:hsl(215 15% 50%);display:block;margin-bottom:4px;">NIK *</label>
          <input type="text" name="nik" required placeholder="NIK" style="width:100%;padding:8px 12px;border:1.5px solid hsl(215 20% 88%);border-radius:8px;font-size:0.85rem;box-sizing:border-box;">
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
        <div>
          <label style="font-size:0.78rem;font-weight:600;color:hsl(215 15% 50%);display:block;margin-bottom:4px;">Nama Lengkap *</label>
          <input type="text" name="nama" required placeholder="Nama" style="width:100%;padding:8px 12px;border:1.5px solid hsl(215 20% 88%);border-radius:8px;font-size:0.85rem;box-sizing:border-box;">
        </div>
        <div>
          <label style="font-size:0.78rem;font-weight:600;color:hsl(215 15% 50%);display:block;margin-bottom:4px;">Email</label>
          <input type="email" name="email" placeholder="Email" style="width:100%;padding:8px 12px;border:1.5px solid hsl(215 20% 88%);border-radius:8px;font-size:0.85rem;box-sizing:border-box;">
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
        <div>
          <label style="font-size:0.78rem;font-weight:600;color:hsl(215 15% 50%);display:block;margin-bottom:4px;">Telepon</label>
          <input type="tel" name="telepon_1" placeholder="08xxx" style="width:100%;padding:8px 12px;border:1.5px solid hsl(215 20% 88%);border-radius:8px;font-size:0.85rem;box-sizing:border-box;">
        </div>
        <div>
          <label style="font-size:0.78rem;font-weight:600;color:hsl(215 15% 50%);display:block;margin-bottom:4px;">Asal Sekolah *</label>
          <input type="text" name="asal_sekolah" required placeholder="Asal Sekolah" style="width:100%;padding:8px 12px;border:1.5px solid hsl(215 20% 88%);border-radius:8px;font-size:0.85rem;box-sizing:border-box;">
        </div>
      </div>
      
      <button type="submit" style="background:linear-gradient(135deg,hsl(180 70% 42%),hsl(180 60% 36%));color:#fff;border:none;padding:10px 24px;border-radius:8px;font-weight:700;cursor:pointer;font-size:0.88rem;" id="offlineSubmitBtn">
        📝 Daftarkan & Buat Akun
      </button>
    </form>`;

  document.getElementById('offlineRegForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('offlineSubmitBtn');
    btn.disabled = true;
    btn.textContent = 'Memproses...';

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((v, k) => { data[k] = v; });

    try {
      const res = await fetch(`${PMB_API}/register/offline`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok) {
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

// ---- Content Router ----
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
      if (mainContent && page === 'pmb' && user.role === 'bap') {
        mainContent.innerHTML = `
          ${bapPMBContent()}
          <footer class="dash-iso-footer" role="contentinfo" aria-label="Sertifikasi ISO">
            <span class="dash-iso-badge">${I.shield} ISO 27001 — Security</span>
            <span class="dash-iso-badge">${I.checkCircle} ISO 9241 — Usability</span>
            <span class="dash-iso-badge">${I.checkCircle} ISO 40500 — Accessibility</span>
          </footer>`;
        initPMBManagement();
      } else if (mainContent && page === 'home') {
        mainContent.innerHTML = `
          ${contentFn(user)}
          <footer class="dash-iso-footer" role="contentinfo" aria-label="Sertifikasi ISO">
            <span class="dash-iso-badge">${I.shield} ISO 27001 — Security</span>
            <span class="dash-iso-badge">${I.checkCircle} ISO 9241 — Usability</span>
            <span class="dash-iso-badge">${I.checkCircle} ISO 40500 — Accessibility</span>
          </footer>`;
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
