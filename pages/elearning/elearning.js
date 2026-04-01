// ============================================
// STIA BAYUANGGA - E-Learning Dashboard
// Separate E-Learning module
// ============================================

import { CAMPUS, KELAS_LIST, TUGAS_LIST, getInitials, getDeadlineStatus, generatePertemuanDates, formatTanggalShort, formatTanggalFull } from '../../js/data.js';
import { getUser, logout } from '../../js/app.js';

// ---- SVG Icons ----
const I = {
  home: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  book: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  monitor: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  clipboard: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  users: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  fileText: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  messageSquare: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  checkCircle: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  play: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  settings: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  logOut: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  bell: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  clock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  upload: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>',
  video: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
  shield: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
};

// ---- E-Learning Sidebar Menus per role ----
const EL_MENUS = {
  mahasiswa: [
    { label: 'E-Learning', items: [
      { icon: I.home, text: 'Dashboard', id: 'home', active: true },
    ]},
  ],
  dosen: [
    { label: 'E-Learning', items: [
      { icon: I.home, text: 'Dashboard', id: 'home', active: true },
      { icon: I.monitor, text: 'Kelas Ajar', id: 'kelas' },
    ]},
  ],
  kaprodi: [
    { label: 'E-Learning', items: [
      { icon: I.home, text: 'Dashboard', id: 'home', active: true },
      { icon: I.monitor, text: 'Semua Kelas', id: 'kelas' },
      { icon: I.users, text: 'Aktivitas Dosen', id: 'dosen-activity' },
      { icon: I.checkCircle, text: 'Laporan E-Learning', id: 'laporan' },
    ]},
  ],
  bap: [
    { label: 'E-Learning', items: [
      { icon: I.home, text: 'Dashboard', id: 'home', active: true },
      { icon: I.monitor, text: 'Monitoring Kelas', id: 'monitoring' },
      { icon: I.users, text: 'Rekap Penggunaan', id: 'rekap' },
    ]},
  ],
};

const ROLE_LABELS = { mahasiswa: 'Mahasiswa', dosen: 'Dosen', kaprodi: 'Kaprodi', bap: 'BAP' };

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Selamat Pagi';
  if (h < 15) return 'Selamat Siang';
  if (h < 18) return 'Selamat Sore';
  return 'Selamat Malam';
}

function buildSidebar(user) {
  const menus = EL_MENUS[user.role] || EL_MENUS.mahasiswa;
  return `
  <aside class="dash-sidebar elearning-sidebar" id="dashSidebar" role="navigation" aria-label="Menu navigasi E-Learning">
    <a href="#/portal" class="sidebar-brand" aria-label="Kembali ke Portal STIA Bayuangga">
      <img src="/assets/images/logo.png" alt="Logo STIA Bayuangga" class="sidebar-brand-logo">
      <div>
        <div class="sidebar-brand-name">E-LEARNING</div>
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
      <span class="sidebar-label" id="el-nav-${group.label.toLowerCase().replace(/[^a-z]/g, '')}">${group.label}</span>
      <nav class="sidebar-nav" aria-labelledby="el-nav-${group.label.toLowerCase().replace(/[^a-z]/g, '')}">
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

function buildTopbar(user) {
  return `
  <header class="dash-topbar" role="banner" aria-label="Header E-Learning">
    <div class="dash-topbar-left">
      <button class="dash-hamburger" id="dashHamburger" aria-label="Buka/tutup menu navigasi" aria-expanded="false" aria-controls="dashSidebar">${I.menu}</button>
      <div>
        <h1>${getGreeting()}, ${user.nama.split(' ')[0]}!</h1>
        <p>E-Learning — Semester Genap 2025/2026</p>
      </div>
    </div>
    <div class="dash-topbar-right">
      <button class="topbar-icon-btn" aria-label="Cari">${I.search}</button>
      <button class="topbar-icon-btn" aria-label="Notifikasi">${I.bell}<span class="notif-dot" aria-hidden="true"></span></button>
    </div>
  </header>`;
}

// ---- E-Learning Content (Mahasiswa) ----
function mahasiswaElearning(user) {
  const pendingTasks = TUGAS_LIST.filter(t => t.status === 'Belum');
  const completedTasks = TUGAS_LIST.filter(t => t.status === 'Sudah');
  const totalProgress = Math.round(KELAS_LIST.reduce((a, k) => a + k.progress, 0) / KELAS_LIST.length);
  const totalSKS = KELAS_LIST.reduce((a,k) => a + k.sks, 0);
  const now = new Date();
  const dateStr = now.toLocaleDateString('id-ID', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
  const courseIcons = ['🏛️','📊','🏢','⚖️','👥','💻','📜'];

  // Grade computation
  const myNim = (user && user.nim) || '2024001';
  const kelasGrades = {};
  KELAS_LIST.forEach(kelas => {
    const data = CLASS_CONTENT[kelas.id] || { tugas:[], uts:[], uas:[], quiz:[] };
    let grades = [];
    (data.quiz||[]).forEach(q => { if (q.status==='Selesai' && q.nilai!==null) grades.push(q.nilai); });
    (data.tugas||[]).forEach(t => {
      const subs = TUGAS_SUBMISSIONS[t.judul] || [];
      const mySub = subs.find(s => s.nim === myNim);
      if (mySub && mySub.nilai !== null && mySub.nilai !== undefined) grades.push(mySub.nilai);
    });
    (data.uts||[]).forEach(t => {
      if (t.mode==='upload') { const subs = TUGAS_SUBMISSIONS[t.judul]||[]; const m = subs.find(s=>s.nim===myNim); if(m&&m.nilai!=null) grades.push(m.nilai); }
      else if (t.status==='Selesai'&&t.nilai!=null) grades.push(t.nilai);
    });
    (data.uas||[]).forEach(t => {
      if (t.mode==='upload') { const subs = TUGAS_SUBMISSIONS[t.judul]||[]; const m = subs.find(s=>s.nim===myNim); if(m&&m.nilai!=null) grades.push(m.nilai); }
      else if (t.status==='Selesai'&&t.nilai!=null) grades.push(t.nilai);
    });
    kelasGrades[kelas.id] = grades.length ? Math.round(grades.reduce((a,b)=>a+b,0)/grades.length) : null;
  });
  const allGrades = Object.values(kelasGrades).filter(v => v !== null);
  const overallAvg = allGrades.length ? Math.round(allGrades.reduce((a,b)=>a+b,0)/allGrades.length) : '—';
  const avgColor = typeof overallAvg === 'number' ? (overallAvg >= 80 ? '#10b981' : overallAvg >= 60 ? '#3b82f6' : '#ef4444') : '#94a3b8';

  return `
    <!-- Hero Welcome Banner -->
    <div class="el-welcome-banner">
      <div class="el-wb-particles">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
      <div class="el-welcome-text">
        <span class="el-welcome-date">${I.clock} ${dateStr}</span>
        <h2>${getGreeting()}, ${(user.nama || user.name || 'Mahasiswa').split(' ')[0]}! 👋</h2>
        <p>Kamu punya <strong>${pendingTasks.length} tugas</strong> yang perlu dikerjakan dan <strong>${KELAS_LIST.length} kelas aktif</strong> (${totalSKS} SKS) semester ini.</p>
      </div>
      <div class="el-welcome-stats">
        <div class="el-mini-ring">
          <svg viewBox="0 0 36 36"><path class="el-ring-bg" d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831 15.9155 15.9155 0 0 1 0-31.831"/>
          <path class="el-ring-fill" stroke-dasharray="${totalProgress}, 100" d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831 15.9155 15.9155 0 0 1 0-31.831"/></svg>
          <span class="el-ring-text">${totalProgress}%</span>
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
          <span class="el-stat-card-num">${KELAS_LIST.length}</span>
          <span class="el-stat-card-label">Kelas Aktif</span>
        </div>
        <div class="el-stat-card-badge">Semester Ini</div>
      </div>
      <div class="el-stat-card el-stat-purple">
        <div class="el-stat-card-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        </div>
        <div class="el-stat-card-info">
          <span class="el-stat-card-num">${totalSKS}</span>
          <span class="el-stat-card-label">Total SKS</span>
        </div>
        <div class="el-stat-card-badge">📚 Beban</div>
      </div>
    </div>

    <!-- Kelas Saya -->
    <div class="el-section-title"><h3>📚 Kelas Saya</h3>
      <button id="toggleNilaiView" style="display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;border:1.5px solid ${avgColor};background:${avgColor}10;color:${avgColor};font-size:0.72rem;font-weight:600;cursor:pointer;transition:all .2s;">
        📊 Lihat Semua Nilai <span style="background:${avgColor};color:#fff;padding:1px 7px;border-radius:10px;font-size:0.62rem;">${overallAvg}</span>
      </button>
    </div>
    <div class="el-kelas-list" aria-label="Daftar kelas" style="margin-bottom:16px;">
      ${KELAS_LIST.map((k, i) => {
        const bannerColors = ['linear-gradient(135deg,#1e3a5f,#2563eb)','linear-gradient(135deg,#065f46,#10b981)','linear-gradient(135deg,#92400e,#f59e0b)','linear-gradient(135deg,#5b21b6,#8b5cf6)','linear-gradient(135deg,#9d174d,#ec4899)','linear-gradient(135deg,#0e7490,#06b6d4)','linear-gradient(135deg,#7c2d12,#ea580c)'];
        const bg = bannerColors[i % bannerColors.length];
        const progressColor = k.progress > 70 ? '#10b981' : k.progress > 50 ? '#3b82f6' : '#f59e0b';
        const cIcon = courseIcons[i % courseIcons.length];
        const grade = kelasGrades[k.id];
        const gradeColor = grade !== null ? (grade >= 80 ? '#10b981' : grade >= 60 ? '#3b82f6' : '#ef4444') : '#94a3b8';
        const gradeLabel = grade !== null ? grade : '—';
        return `
        <div class="el-kelas-card" tabindex="0" role="article" aria-label="${k.nama}">
          <div class="el-kelas-banner" style="background:${bg}">
            <div class="el-kelas-banner-content">
              <span class="el-kelas-badge">${k.kode}</span>
              <h3 class="el-kelas-banner-title">${k.nama}</h3>
              <p class="el-kelas-banner-sub">${k.dosen} · ${k.sks} SKS · ${k.semester}</p>
            </div>
            <div class="el-kelas-banner-icon">${cIcon}</div>
          </div>
          <div class="el-kelas-body">
            <div class="el-kelas-info-row">
              <div class="el-kelas-info-item">
                ${I.clock} <span>${k.jadwal}</span>
              </div>
              <div class="el-kelas-info-item">
                ${I.book} <span>${k.materiSelesai}/${k.totalMateri} materi</span>
              </div>
            </div>
            <div class="el-kelas-progress-section">
              <div class="el-kelas-progress-header">
                <span>Progress</span>
                <span style="color:${progressColor};font-weight:700">${k.progress}%</span>
              </div>
              <div class="progress-wrap"><div class="progress-bar" style="width:${k.progress}%;background:${progressColor}"></div></div>
            </div>
            <div style="display:flex;gap:6px;">
              <button class="el-kelas-enter enter-course-btn" data-class-id="${k.id}" aria-label="Masuk kelas ${k.nama}" style="flex:1;">
                Masuk Kelas →
              </button>
              <button class="el-kelas-nilai-btn" data-class-id="${k.id}" style="flex-shrink:0;padding:8px 12px;border:none;border-radius:8px;background:${gradeColor}15;color:${gradeColor};font-size:0.7rem;font-weight:700;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:4px;" aria-label="Lihat nilai ${k.nama}">
                📊 <span>${gradeLabel}</span>
              </button>
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>

    <!-- Two column grid -->
    <div class="dash-grid">
      <div>
        <div class="el-section-title"><h3>📋 Tugas Mendatang</h3></div>
        <div class="dash-card el-card-modern">
          <div class="dash-card-body">
            ${TUGAS_LIST.map(t => {
              const dl = getDeadlineStatus(t.deadline);
              const icon = t.status === 'Sudah' ? '✅' : (dl.class === 'danger' ? '🔴' : '🟡');
              return `<div class="el-task-row">
                <div class="el-task-icon-wrap">${icon}</div>
                <div class="el-task-info">
                  <h4>${t.judul}</h4>
                  <p>${t.kelas} · ${t.type}</p>
                </div>
                <div class="el-task-deadline">
                  <span class="badge-sm ${t.status === 'Sudah' ? 'success' : dl.class}">${t.status === 'Sudah' ? '✓ Selesai' : dl.text}</span>
                </div>
              </div>`;
            }).join('')}
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
    </div>`;
}

// ---- E-Learning Content (Dosen) ----
function dosenElearning(user) {
  return `
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${I.monitor}</div>
        <div class="stat-info"><div class="stat-label">Kelas Ajar</div><div class="stat-value">${user.totalMK}</div><div class="stat-sub">semester ini</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${I.upload}</div>
        <div class="stat-info"><div class="stat-label">Materi Upload</div><div class="stat-value">36</div><div class="stat-sub">file tersedia</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${I.checkCircle}</div>
        <div class="stat-info"><div class="stat-label">Tugas Dinilai</div><div class="stat-value">28</div><div class="stat-sub">dari 45 tugas</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon purple">${I.messageSquare}</div>
        <div class="stat-info"><div class="stat-label">Diskusi Aktif</div><div class="stat-value">14</div><div class="stat-sub">thread baru</div></div>
      </div>
    </div>

    <div class="dash-grid">
      <div>
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
            ${TUGAS_LIST.slice(0, 4).map(t => `
              <div class="task-item">
                <span class="task-dot warning"></span>
                <div class="task-body">
                  <h4>${t.judul}</h4>
                  <p>${t.kelas} — ${t.type}</p>
                  <div class="task-meta"><span class="badge-sm warning">Perlu Dinilai</span></div>
                </div>
              </div>
            `).join('')}
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
    </div>`;
}

// ---- Generic fallback for kaprodi & bap ----
function genericElearning(user) {
  return `
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${I.monitor}</div>
        <div class="stat-info"><div class="stat-label">Total Kelas</div><div class="stat-value">${KELAS_LIST.length * 3}</div><div class="stat-sub">semua prodi</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${I.users}</div>
        <div class="stat-info"><div class="stat-label">Mahasiswa Aktif</div><div class="stat-value">890</div><div class="stat-sub">pengguna e-learning</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${I.upload}</div>
        <div class="stat-info"><div class="stat-label">Total Materi</div><div class="stat-value">245</div><div class="stat-sub">file tersedia</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon purple">${I.checkCircle}</div>
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
    </div>`;
}

const EL_RENDERERS = { mahasiswa: mahasiswaElearning, dosen: dosenElearning, kaprodi: genericElearning, bap: genericElearning };

// ============================================
// PER-CLASS CONTENT DATA
// ============================================
const CLASS_CONTENT = {};
KELAS_LIST.forEach(k => {
  CLASS_CONTENT[k.id] = {
    materi: [], tugas: [], uts: [], uas: [], forum: [], quiz: [], video: []
  };
});

// Kebijakan Publik (id:1)
CLASS_CONTENT[1].materi = [
  { judul:'BAB 1 — Konsep Dasar Kebijakan', tipe:'PDF', ukuran:'1.8 MB', tanggal:'5 Feb 2026', icon:'📄', pertemuan:1 },
  { judul:'BAB 2 — Siklus Kebijakan Publik', tipe:'PDF', ukuran:'2.1 MB', tanggal:'12 Feb 2026', icon:'📄', pertemuan:2 },
  { judul:'Slide — Analisis Stakeholder', tipe:'PPT', ukuran:'4.5 MB', tanggal:'19 Feb 2026', icon:'📊', pertemuan:3 },
  { judul:'BAB 3 — Implementasi Kebijakan', tipe:'PDF', ukuran:'2.4 MB', tanggal:'26 Feb 2026', icon:'📄', pertemuan:4 },
  { judul:'Studi Kasus — Kebijakan Daerah', tipe:'PDF', ukuran:'3.2 MB', tanggal:'5 Mar 2026', icon:'📝', pertemuan:5 },
  { judul:'Video — Evaluasi Kebijakan', tipe:'MP4', ukuran:'85 MB', tanggal:'12 Mar 2026', icon:'🎬', pertemuan:6 },
  { judul:'BAB 4 — Kebijakan Transportasi', tipe:'PDF', ukuran:'2.8 MB', tanggal:'19 Mar 2026', icon:'📄', pertemuan:7 },
  { judul:'Slide — Kebijakan Lingkungan', tipe:'PPT', ukuran:'5.1 MB', tanggal:'26 Mar 2026', icon:'📊', pertemuan:8 },
  { judul:'BAB 5 — Kebijakan Pendidikan', tipe:'PDF', ukuran:'3.0 MB', tanggal:'2 Apr 2026', icon:'📄', pertemuan:9 },
  { judul:'Slide — Analisis SWOT Kebijakan', tipe:'PPT', ukuran:'4.2 MB', tanggal:'9 Apr 2026', icon:'📊', pertemuan:10 },
  { judul:'BAB 6 — Reformasi Kebijakan', tipe:'PDF', ukuran:'2.9 MB', tanggal:'16 Apr 2026', icon:'📄', pertemuan:11 },
  { judul:'Rangkuman Materi UAS', tipe:'PDF', ukuran:'5.5 MB', tanggal:'23 Apr 2026', icon:'📚', pertemuan:12 },
];
CLASS_CONTENT[1].tugas = [
  { judul:'Presentasi Kelompok — Studi Kasus', type:'Tugas Kelompok', deadline:'2026-03-15 23:59', status:'Sudah', nilai:82, pertemuan:4 },
  { judul:'Analisis Kebijakan Publik Daerah', type:'Tugas Individu', deadline:'2026-03-28 23:59', status:'Sudah', nilai:88, pertemuan:5 },
  { judul:'Review Paper Kebijakan Transportasi', type:'Tugas Individu', deadline:'2026-04-05 23:59', status:'Belum', nilai:null, pertemuan:7 },
  { judul:'Makalah Kebijakan Lingkungan', type:'Tugas Kelompok', deadline:'2026-04-12 23:59', status:'Belum', nilai:null, pertemuan:9 },
  { judul:'Presentasi Akhir — Reformasi Kebijakan', type:'Tugas Kelompok', deadline:'2026-04-25 23:59', status:'Belum', nilai:null, pertemuan:11 },
];
// Sample student submissions for grading (dosen sees this)
const TUGAS_SUBMISSIONS = {};
// Store quiz results for review (keyed by quiz judul)
const QUIZ_RESULTS = {};
TUGAS_SUBMISSIONS['Presentasi Kelompok — Studi Kasus'] = [
  { nama:'Ahmad Rizki', nim:'2024101001', file:'Presentasi_StudiKasus_Kel1.pdf', waktu:'14 Mar 2026, 22:45', nilai:85 },
  { nama:'Siti Nurhaliza', nim:'2024002', file:'StudiKasus_Kelompok2.pdf', waktu:'15 Mar 2026, 10:20', nilai:80 },
  { nama:'Budi Santoso', nim:'2024003', file:'Presentasi_Kel3_Final.pdf', waktu:'15 Mar 2026, 23:01', nilai:78 },
  { nama:'Dewi Anggraini', nim:'2024004', file:'SK_Kelompok4.pdf', waktu:'14 Mar 2026, 18:30', nilai:88 },
];
TUGAS_SUBMISSIONS['Analisis Kebijakan Publik Daerah'] = [
  { nama:'Ahmad Rizki', nim:'2024101001', file:'Analisis_KP_AhmadR.pdf', waktu:'27 Mar 2026, 20:15', nilai:90 },
  { nama:'Siti Nurhaliza', nim:'2024002', file:'KP_Daerah_Siti.pdf', waktu:'28 Mar 2026, 08:42', nilai:85 },
  { nama:'Budi Santoso', nim:'2024003', file:'Analisis_Budi.pdf', waktu:'28 Mar 2026, 22:50', nilai:82 },
  { nama:'Dewi Anggraini', nim:'2024004', file:'KBJ_Publik_Dewi.pdf', waktu:'26 Mar 2026, 15:00', nilai:92 },
];
TUGAS_SUBMISSIONS['Review Paper Kebijakan Transportasi'] = [
  { nama:'Ahmad Rizki', nim:'2024101001', file:'Review_Transport_Ahmad.pdf', waktu:'4 Apr 2026, 21:30', nilai:null },
  { nama:'Siti Nurhaliza', nim:'2024002', file:'Paper_Review_Siti.pdf', waktu:'5 Apr 2026, 11:15', nilai:null },
  { nama:'Budi Santoso', nim:'2024003', file:null, waktu:null, nilai:null },
  { nama:'Dewi Anggraini', nim:'2024004', file:'Review_Dewi.pdf', waktu:'3 Apr 2026, 09:45', nilai:null },
];
CLASS_CONTENT[1].forum = [
  { judul:'Sharing Referensi Jurnal', balasan:4, waktu:'3 hari lalu', author:'Siti N.', hot:false, pertemuan:2, deadline:'2026-02-20', replies:[
    {author:'Siti N.', text:'Ada yang punya jurnal tentang kebijakan transportasi publik?', waktu:'3 hari lalu', role:'mahasiswa'},
    {author:'Dr. Bambang S.', text:'Coba cari di Google Scholar dengan kata kunci "public transport policy Indonesia". Ada beberapa paper bagus dari UI dan UGM.', waktu:'3 hari lalu', role:'dosen'},
    {author:'Ahmad R.', text:'Saya punya referensi dari Journal of Public Policy, nanti saya share link-nya.', waktu:'2 hari lalu', role:'mahasiswa'},
    {author:'Siti N.', text:'Terima kasih Pak dan Ahmad! 🙏', waktu:'2 hari lalu', role:'mahasiswa'},
  ]},
  { judul:'Diskusi: Implementasi Kebijakan di Era Digital', balasan:8, waktu:'2 jam lalu', author:'Dr. Bambang S.', hot:true, pertemuan:4, deadline:'2026-03-10', replies:[
    {author:'Dr. Bambang S.', text:'Bagaimana menurut kalian dampak digitalisasi terhadap implementasi kebijakan publik di Indonesia? Berikan contoh konkret.', waktu:'5 jam lalu', role:'dosen'},
    {author:'Ahmad R.', text:'Menurut saya digitalisasi mempercepat distribusi informasi kebijakan ke masyarakat, contohnya aplikasi JAKI di Jakarta.', waktu:'4 jam lalu', role:'mahasiswa'},
    {author:'Siti N.', text:'Saya setuju, tapi ada gap digital di daerah pedesaan yang membuat implementasi tidak merata.', waktu:'3 jam lalu', role:'mahasiswa'},
    {author:'Dr. Bambang S.', text:'Poin bagus Siti! Ini yang disebut digital divide. Bagaimana solusinya menurut kalian?', waktu:'2 jam lalu', role:'dosen'},
  ]},
  { judul:'Tanya Jawab UTS', balasan:15, waktu:'1 hari lalu', author:'Ahmad R.', hot:true, pertemuan:6, deadline:'2026-03-14', replies:[
    {author:'Ahmad R.', text:'Pak, apakah materi Bab 4-6 termasuk dalam UTS?', waktu:'2 hari lalu', role:'mahasiswa'},
    {author:'Dr. Bambang S.', text:'UTS hanya mencakup Bab 1-3. Bab 4-6 akan masuk UAS.', waktu:'1 hari lalu', role:'dosen'},
    {author:'Siti N.', text:'Pak, boleh bawa catatan saat UTS?', waktu:'1 hari lalu', role:'mahasiswa'},
    {author:'Dr. Bambang S.', text:'UTS bersifat closed book. Silakan pelajari ringkasan yang sudah saya upload di pertemuan 6.', waktu:'1 hari lalu', role:'dosen'},
  ]},
  { judul:'Diskusi: Kebijakan Lingkungan Hidup', balasan:6, waktu:'5 jam lalu', author:'Dr. Bambang S.', hot:false, pertemuan:8, deadline:'2026-04-15', replies:[
    {author:'Dr. Bambang S.', text:'Analisis kebijakan pengelolaan sampah plastik di Indonesia. Apakah sudah efektif?', waktu:'8 jam lalu', role:'dosen'},
    {author:'Ahmad R.', text:'Belum efektif karena masih banyak kantong plastik di pasar tradisional.', waktu:'6 jam lalu', role:'mahasiswa'},
  ]},
  { judul:'Review Bersama — Materi UAS', balasan:22, waktu:'2 jam lalu', author:'Ahmad R.', hot:true, pertemuan:12, deadline:'2026-04-28', replies:[
    {author:'Ahmad R.', text:'Yuk kita review bareng materi UAS. Mulai dari Bab 4 tentang apa saja?', waktu:'5 jam lalu', role:'mahasiswa'},
    {author:'Siti N.', text:'Bab 4 tentang Evaluasi Kebijakan, metodologi dan indikator keberhasilan.', waktu:'4 jam lalu', role:'mahasiswa'},
    {author:'Dr. Bambang S.', text:'Benar. Fokus juga ke studi kasus yang sudah kita bahas di kelas.', waktu:'2 jam lalu', role:'dosen'},
  ]},
];
CLASS_CONTENT[1].uts = [
  { judul:'UTS — Kebijakan Publik', type:'Pilihan Ganda', mode:'pg', soal:30, waktu:90, deadline:'2026-03-20 10:00', status:'Belum', nilai:null, pertemuan:7 },
];
CLASS_CONTENT[1].uas = [
  { judul:'UAS — Kebijakan Publik', type:'Upload PDF', mode:'upload', deadline:'2026-05-10 10:00', status:'Belum', nilai:null, pertemuan:12 },
];
CLASS_CONTENT[1].quiz = [
  { judul:'Quiz BAB 1-3', soal:20, durasi:'30 menit', status:'Selesai', deadline:'20 Feb 2026', nilai:85, pertemuan:3 },
  { judul:'UTS Kebijakan Publik', soal:40, durasi:'90 menit', status:'Selesai', deadline:'15 Mar 2026', nilai:78, pertemuan:6 },
  { judul:'Quiz BAB 4-6', soal:25, durasi:'35 menit', status:'Belum', deadline:'2 Apr 2026', nilai:null, pertemuan:9 },
  { judul:'UAS Kebijakan Publik', soal:50, durasi:'120 menit', status:'Belum', deadline:'30 Apr 2026', nilai:null, pertemuan:12 },
];
CLASS_CONTENT[1].video = [
  { judul:'Pengantar Kebijakan Publik', durasi:'42:15', views:198, status:'watched', pertemuan:1 },
  { judul:'Analisis Stakeholder', durasi:'35:30', views:156, status:'watched', pertemuan:3 },
  { judul:'Evaluasi Kebijakan Publik', durasi:'48:00', views:89, status:'watched', pertemuan:6 },
  { judul:'Studi Kasus Kebijakan Transportasi', durasi:'38:20', views:45, status:'new', pertemuan:8 },
  { judul:'Reformasi Kebijakan Indonesia', durasi:'55:10', views:12, status:'new', pertemuan:11 },
];

// Statistik Sosial (id:2)
CLASS_CONTENT[2].materi = [
  { judul:'BAB 1 — Statistik Deskriptif', tipe:'PDF', ukuran:'2.0 MB', tanggal:'6 Feb 2026', icon:'📄', pertemuan:1 },
  { judul:'Panduan SPSS — Dasar', tipe:'PDF', ukuran:'3.5 MB', tanggal:'13 Feb 2026', icon:'📄', pertemuan:2 },
  { judul:'Slide — Distribusi Frekuensi', tipe:'PPT', ukuran:'3.8 MB', tanggal:'20 Feb 2026', icon:'📊', pertemuan:3 },
  { judul:'Latihan Soal — Ukuran Pemusatan', tipe:'PDF', ukuran:'1.1 MB', tanggal:'27 Feb 2026', icon:'📝', pertemuan:4 },
  { judul:'BAB 2 — Probabilitas', tipe:'PDF', ukuran:'2.4 MB', tanggal:'6 Mar 2026', icon:'📄', pertemuan:5 },
  { judul:'Slide — Distribusi Normal', tipe:'PPT', ukuran:'3.2 MB', tanggal:'13 Mar 2026', icon:'📊', pertemuan:6 },
  { judul:'Rangkuman Materi UTS', tipe:'PDF', ukuran:'4.0 MB', tanggal:'20 Mar 2026', icon:'📚', pertemuan:7 },
  { judul:'BAB 3 — Statistik Inferensial', tipe:'PDF', ukuran:'2.7 MB', tanggal:'27 Mar 2026', icon:'📄', pertemuan:8 },
  { judul:'Panduan SPSS — Regresi', tipe:'PDF', ukuran:'3.0 MB', tanggal:'3 Apr 2026', icon:'📄', pertemuan:9 },
  { judul:'Slide — Uji Hipotesis', tipe:'PPT', ukuran:'3.5 MB', tanggal:'10 Apr 2026', icon:'📊', pertemuan:10 },
  { judul:'BAB 4 — Analisis Korelasi', tipe:'PDF', ukuran:'2.3 MB', tanggal:'17 Apr 2026', icon:'📄', pertemuan:11 },
  { judul:'Rangkuman Materi UAS', tipe:'PDF', ukuran:'5.0 MB', tanggal:'24 Apr 2026', icon:'📚', pertemuan:12 },
];
CLASS_CONTENT[2].tugas = [
  { judul:'Laporan Statistik Penduduk', type:'Tugas Individu', deadline:'2026-03-25 23:59', status:'Sudah', pertemuan:3 },
  { judul:'Analisis Data SPSS', type:'Tugas Individu', deadline:'2026-04-01 23:59', status:'Sudah', pertemuan:5 },
  { judul:'Proyek Uji Hipotesis', type:'Tugas Kelompok', deadline:'2026-04-15 23:59', status:'Belum', pertemuan:9 },
  { judul:'Laporan Akhir Analisis Regresi', type:'Tugas Individu', deadline:'2026-04-28 23:59', status:'Belum', pertemuan:11 },
];
CLASS_CONTENT[2].forum = [
  { judul:'Pertanyaan: Metode Sampling', balasan:3, waktu:'3 hari lalu', author:'Budi P.', hot:false, pertemuan:2 },
  { judul:'Diskusi: Korelasi vs Kausalitas', balasan:7, waktu:'5 hari lalu', author:'Ir. Siti N.', hot:false, pertemuan:4 },
  { judul:'Tanya Jawab UTS Statistik', balasan:18, waktu:'1 hari lalu', author:'Ir. Siti N.', hot:true, pertemuan:7 },
  { judul:'Diskusi: Interpretasi P-Value', balasan:9, waktu:'4 jam lalu', author:'Budi P.', hot:false, pertemuan:10 },
];
CLASS_CONTENT[2].quiz = [
  { judul:'Quiz Statistik Deskriptif', soal:15, durasi:'25 menit', status:'Selesai', deadline:'18 Mar 2026', nilai:92, pertemuan:2 },
  { judul:'UTS Statistik Sosial', soal:30, durasi:'75 menit', status:'Selesai', deadline:'20 Mar 2026', nilai:85, pertemuan:7 },
  { judul:'Quiz Statistik Inferensial', soal:20, durasi:'30 menit', status:'Belum', deadline:'5 Apr 2026', nilai:null, pertemuan:9 },
  { judul:'UAS Statistik Sosial', soal:40, durasi:'100 menit', status:'Belum', deadline:'28 Apr 2026', nilai:null, pertemuan:12 },
];
CLASS_CONTENT[2].video = [
  { judul:'Panduan SPSS Lengkap', durasi:'55:00', views:145, status:'watched', pertemuan:2 },
  { judul:'Statistik Inferensial', durasi:'35:10', views:312, status:'watched', pertemuan:3 },
  { judul:'Distribusi Normal & Z-Score', durasi:'40:20', views:98, status:'watched', pertemuan:6 },
  { judul:'Tutorial Regresi Linear SPSS', durasi:'48:30', views:56, status:'new', pertemuan:9 },
  { judul:'Analisis Korelasi Lanjut', durasi:'33:45', views:22, status:'new', pertemuan:11 },
];

// Teori Administrasi (id:3)
CLASS_CONTENT[3].materi = [
  { judul:'BAB 1 — Teori Klasik Administrasi', tipe:'PDF', ukuran:'2.3 MB', tanggal:'4 Feb 2026', icon:'📄', pertemuan:1 },
  { judul:'Slide — Birokrasi Weber', tipe:'PPT', ukuran:'4.0 MB', tanggal:'11 Feb 2026', icon:'📊', pertemuan:2 },
  { judul:'BAB 2 — New Public Management', tipe:'PDF', ukuran:'2.8 MB', tanggal:'18 Feb 2026', icon:'📄', pertemuan:3 },
  { judul:'E-Book — Good Governance', tipe:'PDF', ukuran:'6.2 MB', tanggal:'25 Feb 2026', icon:'📚', pertemuan:4 },
  { judul:'Slide — Teori Organisasi Modern', tipe:'PPT', ukuran:'4.2 MB', tanggal:'4 Mar 2026', icon:'📊', pertemuan:5 },
  { judul:'BAB 3 — Administrasi Pembangunan', tipe:'PDF', ukuran:'3.1 MB', tanggal:'11 Mar 2026', icon:'📄', pertemuan:6 },
  { judul:'Rangkuman Materi UTS', tipe:'PDF', ukuran:'4.5 MB', tanggal:'18 Mar 2026', icon:'📚', pertemuan:7 },
  { judul:'BAB 4 — E-Government', tipe:'PDF', ukuran:'2.6 MB', tanggal:'25 Mar 2026', icon:'📄', pertemuan:8 },
  { judul:'Slide — Reformasi Birokrasi', tipe:'PPT', ukuran:'5.0 MB', tanggal:'1 Apr 2026', icon:'📊', pertemuan:9 },
  { judul:'BAB 5 — Etika Administrasi Publik', tipe:'PDF', ukuran:'2.4 MB', tanggal:'8 Apr 2026', icon:'📄', pertemuan:10 },
  { judul:'Slide — Desentralisasi & Otonomi', tipe:'PPT', ukuran:'4.8 MB', tanggal:'15 Apr 2026', icon:'📊', pertemuan:11 },
  { judul:'Rangkuman Materi UAS', tipe:'PDF', ukuran:'5.8 MB', tanggal:'22 Apr 2026', icon:'📚', pertemuan:12 },
];
CLASS_CONTENT[3].tugas = [
  { judul:'Review Paper Good Governance', type:'Tugas Individu', deadline:'2026-03-20 23:59', status:'Sudah', pertemuan:4 },
  { judul:'Makalah Teori Birokrasi Weber', type:'Tugas Kelompok', deadline:'2026-04-01 23:59', status:'Sudah', pertemuan:6 },
  { judul:'Analisis E-Government Indonesia', type:'Tugas Individu', deadline:'2026-04-10 23:59', status:'Belum', pertemuan:8 },
  { judul:'Presentasi Reformasi Birokrasi', type:'Tugas Kelompok', deadline:'2026-04-20 23:59', status:'Belum', pertemuan:10 },
  { judul:'Paper Akhir — Desentralisasi', type:'Tugas Individu', deadline:'2026-04-28 23:59', status:'Belum', pertemuan:12 },
];
CLASS_CONTENT[3].forum = [
  { judul:'Diskusi: Teori Administrasi Modern', balasan:12, waktu:'2 jam lalu', author:'Prof. Sri W.', hot:true, pertemuan:3 },
  { judul:'Review Paper: Good Governance', balasan:15, waktu:'2 hari lalu', author:'Prof. Sri W.', hot:true, pertemuan:4 },
  { judul:'Tanya Jawab UTS', balasan:20, waktu:'1 hari lalu', author:'Ahmad R.', hot:true, pertemuan:7 },
  { judul:'Diskusi: E-Government di Daerah', balasan:8, waktu:'3 jam lalu', author:'Prof. Sri W.', hot:false, pertemuan:9 },
  { judul:'Review Bersama Materi UAS', balasan:25, waktu:'1 jam lalu', author:'Budi P.', hot:true, pertemuan:12 },
];
CLASS_CONTENT[3].quiz = [
  { judul:'Quiz Teori Organisasi', soal:25, durasi:'40 menit', status:'Selesai', deadline:'28 Mar 2026', nilai:80, pertemuan:5 },
  { judul:'UTS Teori Administrasi', soal:35, durasi:'90 menit', status:'Selesai', deadline:'18 Mar 2026', nilai:82, pertemuan:7 },
  { judul:'Quiz E-Government', soal:20, durasi:'30 menit', status:'Belum', deadline:'8 Apr 2026', nilai:null, pertemuan:9 },
  { judul:'UAS Teori Administrasi', soal:45, durasi:'120 menit', status:'Belum', deadline:'25 Apr 2026', nilai:null, pertemuan:12 },
];
CLASS_CONTENT[3].video = [
  { judul:'Pengantar Birokrasi Indonesia', durasi:'45:20', views:234, status:'watched', pertemuan:1 },
  { judul:'New Public Management', durasi:'38:45', views:167, status:'watched', pertemuan:3 },
  { judul:'Administrasi Pembangunan', durasi:'42:00', views:120, status:'watched', pertemuan:6 },
  { judul:'E-Government & Transformasi Digital', durasi:'50:15', views:78, status:'new', pertemuan:8 },
  { judul:'Reformasi Birokrasi Indonesia', durasi:'44:30', views:35, status:'new', pertemuan:11 },
];

// Hukum Administrasi (id:4)
CLASS_CONTENT[4].materi = [
  { judul:'BAB 1 — Dasar Hukum Administrasi', tipe:'PDF', ukuran:'2.5 MB', tanggal:'5 Feb 2026', icon:'📄', pertemuan:1 },
  { judul:'E-Book — Hukum Tata Negara', tipe:'PDF', ukuran:'8.5 MB', tanggal:'12 Feb 2026', icon:'📚', pertemuan:2 },
  { judul:'Slide — PTUN & Sengketa', tipe:'PPT', ukuran:'3.9 MB', tanggal:'19 Feb 2026', icon:'📊', pertemuan:3 },
  { judul:'BAB 2 — Pejabat Tata Usaha Negara', tipe:'PDF', ukuran:'2.7 MB', tanggal:'26 Feb 2026', icon:'📄', pertemuan:4 },
  { judul:'Slide — Keputusan & Tindakan Pemerintah', tipe:'PPT', ukuran:'4.3 MB', tanggal:'5 Mar 2026', icon:'📊', pertemuan:5 },
  { judul:'BAB 3 — Perlindungan Hukum', tipe:'PDF', ukuran:'3.0 MB', tanggal:'12 Mar 2026', icon:'📄', pertemuan:6 },
  { judul:'Rangkuman Materi UTS', tipe:'PDF', ukuran:'4.2 MB', tanggal:'19 Mar 2026', icon:'📚', pertemuan:7 },
  { judul:'BAB 4 — Hukum Perizinan', tipe:'PDF', ukuran:'2.8 MB', tanggal:'26 Mar 2026', icon:'📄', pertemuan:8 },
  { judul:'Slide — Diskresi Pejabat Publik', tipe:'PPT', ukuran:'3.6 MB', tanggal:'2 Apr 2026', icon:'📊', pertemuan:9 },
  { judul:'BAB 5 — Kontrak Pemerintah', tipe:'PDF', ukuran:'3.1 MB', tanggal:'9 Apr 2026', icon:'📄', pertemuan:10 },
  { judul:'Slide — Sengketa Tata Usaha Negara', tipe:'PPT', ukuran:'4.0 MB', tanggal:'16 Apr 2026', icon:'📊', pertemuan:11 },
  { judul:'Rangkuman Materi UAS', tipe:'PDF', ukuran:'5.2 MB', tanggal:'23 Apr 2026', icon:'📚', pertemuan:12 },
];
CLASS_CONTENT[4].tugas = [
  { judul:'Analisis Kasus PTUN', type:'Tugas Individu', deadline:'2026-03-18 23:59', status:'Sudah', pertemuan:3 },
  { judul:'Makalah Keputusan Pemerintah', type:'Tugas Kelompok', deadline:'2026-03-28 23:59', status:'Sudah', pertemuan:5 },
  { judul:'Quiz UTS Hukum Administrasi', type:'Ujian', deadline:'2026-03-30 23:59', status:'Belum', pertemuan:7 },
  { judul:'Analisis Hukum Perizinan', type:'Tugas Individu', deadline:'2026-04-12 23:59', status:'Belum', pertemuan:9 },
  { judul:'Paper Akhir — Sengketa TUN', type:'Tugas Individu', deadline:'2026-04-28 23:59', status:'Belum', pertemuan:11 },
];
CLASS_CONTENT[4].forum = [
  { judul:'Diskusi: Kasus PTUN Terbaru', balasan:6, waktu:'1 hari lalu', author:'Dr. Agus R.', hot:false, pertemuan:3 },
  { judul:'Diskusi: Pejabat TUN & Kewenangan', balasan:10, waktu:'2 hari lalu', author:'Dr. Agus R.', hot:true, pertemuan:5 },
  { judul:'Tanya Jawab UTS', balasan:14, waktu:'1 hari lalu', author:'Ahmad R.', hot:true, pertemuan:7 },
  { judul:'Diskusi: Diskresi vs Penyalahgunaan', balasan:11, waktu:'6 jam lalu', author:'Dr. Agus R.', hot:true, pertemuan:9 },
];
CLASS_CONTENT[4].quiz = [
  { judul:'Quiz Hukum Dasar', soal:15, durasi:'25 menit', status:'Selesai', deadline:'5 Mar 2026', nilai:76, pertemuan:3 },
  { judul:'UTS Hukum Administrasi', soal:35, durasi:'75 menit', status:'Selesai', deadline:'30 Mar 2026', nilai:72, pertemuan:7 },
  { judul:'Quiz Hukum Perizinan', soal:20, durasi:'30 menit', status:'Belum', deadline:'10 Apr 2026', nilai:null, pertemuan:9 },
  { judul:'UAS Hukum Administrasi', soal:40, durasi:'100 menit', status:'Belum', deadline:'28 Apr 2026', nilai:null, pertemuan:12 },
];
CLASS_CONTENT[4].video = [
  { judul:'Hukum Administrasi Negara', durasi:'48:00', views:67, status:'watched', pertemuan:1 },
  { judul:'Pejabat & Keputusan TUN', durasi:'40:30', views:89, status:'watched', pertemuan:4 },
  { judul:'Perlindungan Hukum Rakyat', durasi:'36:15', views:55, status:'new', pertemuan:6 },
  { judul:'Hukum Perizinan Indonesia', durasi:'42:45', views:30, status:'new', pertemuan:8 },
  { judul:'Sengketa TUN & Penyelesaian', durasi:'50:00', views:15, status:'new', pertemuan:11 },
];

// Manajemen SDM (id:5)
CLASS_CONTENT[5].materi = [
  { judul:'BAB 1 — Manajemen Sumber Daya Manusia', tipe:'PDF', ukuran:'2.0 MB', tanggal:'3 Feb 2026', icon:'📄', pertemuan:1 },
  { judul:'Slide — Rekrutmen & Seleksi', tipe:'PPT', ukuran:'4.1 MB', tanggal:'10 Feb 2026', icon:'📊', pertemuan:2 },
  { judul:'Video Lecture — Manajemen Kinerja', tipe:'MP4', ukuran:'120 MB', tanggal:'17 Feb 2026', icon:'🎬', pertemuan:3 },
  { judul:'BAB 2 — Pengembangan Kompetensi', tipe:'PDF', ukuran:'2.6 MB', tanggal:'24 Feb 2026', icon:'📄', pertemuan:4 },
  { judul:'Slide — Kompensasi & Benefit', tipe:'PPT', ukuran:'3.8 MB', tanggal:'3 Mar 2026', icon:'📊', pertemuan:5 },
  { judul:'BAB 3 — Hubungan Industrial', tipe:'PDF', ukuran:'2.9 MB', tanggal:'10 Mar 2026', icon:'📄', pertemuan:6 },
  { judul:'Rangkuman Materi UTS', tipe:'PDF', ukuran:'3.5 MB', tanggal:'17 Mar 2026', icon:'📚', pertemuan:7 },
  { judul:'BAB 4 — Manajemen Talenta', tipe:'PDF', ukuran:'2.4 MB', tanggal:'24 Mar 2026', icon:'📄', pertemuan:8 },
  { judul:'Slide — HR Analytics', tipe:'PPT', ukuran:'4.5 MB', tanggal:'31 Mar 2026', icon:'📊', pertemuan:9 },
  { judul:'BAB 5 — Budaya Organisasi', tipe:'PDF', ukuran:'2.7 MB', tanggal:'7 Apr 2026', icon:'📄', pertemuan:10 },
  { judul:'Slide — Kepemimpinan Transformasional', tipe:'PPT', ukuran:'5.2 MB', tanggal:'14 Apr 2026', icon:'📊', pertemuan:11 },
  { judul:'Rangkuman Materi UAS', tipe:'PDF', ukuran:'4.8 MB', tanggal:'21 Apr 2026', icon:'📚', pertemuan:12 },
];
CLASS_CONTENT[5].tugas = [
  { judul:'Studi Kasus Manajemen Kinerja ASN', type:'Tugas Kelompok', deadline:'2026-03-15 23:59', status:'Sudah', pertemuan:3 },
  { judul:'Analisis Kompensasi Perusahaan', type:'Tugas Individu', deadline:'2026-03-28 23:59', status:'Sudah', pertemuan:5 },
  { judul:'Makalah Manajemen Talenta', type:'Tugas Kelompok', deadline:'2026-04-10 23:59', status:'Belum', pertemuan:8 },
  { judul:'Proyek HR Analytics Dashboard', type:'Tugas Kelompok', deadline:'2026-04-18 23:59', status:'Belum', pertemuan:10 },
  { judul:'Presentasi Akhir — Kepemimpinan', type:'Tugas Kelompok', deadline:'2026-04-25 23:59', status:'Belum', pertemuan:12 },
];
CLASS_CONTENT[5].forum = [
  { judul:'Sharing: Pengalaman Magang', balasan:20, waktu:'4 hari lalu', author:'Rina K.', hot:true, pertemuan:2 },
  { judul:'Diskusi Kelompok: Studi Kasus BUMN', balasan:5, waktu:'1 hari lalu', author:'Siti N.', hot:false, pertemuan:4 },
  { judul:'Tanya Jawab UTS MSDM', balasan:16, waktu:'2 hari lalu', author:'Dr. Rina K.', hot:true, pertemuan:7 },
  { judul:'Diskusi: HR Analytics Tren 2026', balasan:12, waktu:'3 jam lalu', author:'Dr. Rina K.', hot:true, pertemuan:9 },
  { judul:'Review Bersama Materi UAS', balasan:18, waktu:'1 jam lalu', author:'Siti N.', hot:true, pertemuan:12 },
];
CLASS_CONTENT[5].quiz = [
  { judul:'Quiz MSDM BAB 1-2', soal:15, durasi:'20 menit', status:'Selesai', deadline:'10 Mar 2026', nilai:88, pertemuan:2 },
  { judul:'UTS Manajemen SDM', soal:30, durasi:'75 menit', status:'Selesai', deadline:'17 Mar 2026', nilai:82, pertemuan:7 },
  { judul:'Quiz HR Analytics', soal:20, durasi:'25 menit', status:'Belum', deadline:'5 Apr 2026', nilai:null, pertemuan:9 },
  { judul:'UAS Manajemen SDM', soal:40, durasi:'100 menit', status:'Belum', deadline:'25 Apr 2026', nilai:null, pertemuan:12 },
];
CLASS_CONTENT[5].video = [
  { judul:'Rekrutmen Modern', durasi:'33:15', views:201, status:'watched', pertemuan:2 },
  { judul:'Manajemen Kinerja ASN', durasi:'52:30', views:156, status:'watched', pertemuan:3 },
  { judul:'Hubungan Industrial Indonesia', durasi:'38:20', views:90, status:'watched', pertemuan:6 },
  { judul:'HR Analytics untuk Pemula', durasi:'45:00', views:42, status:'new', pertemuan:9 },
  { judul:'Kepemimpinan Transformasional', durasi:'40:30', views:18, status:'new', pertemuan:11 },
];

// Sistem Informasi Manajemen (id:6)
CLASS_CONTENT[6].materi = [
  { judul:'BAB 1 — Konsep Dasar Sistem Informasi', tipe:'PDF', ukuran:'2.2 MB', tanggal:'5 Feb 2026', icon:'📄', pertemuan:1 },
  { judul:'Slide — Komponen Sistem Informasi', tipe:'PPT', ukuran:'3.8 MB', tanggal:'12 Feb 2026', icon:'📊', pertemuan:2 },
  { judul:'BAB 2 — Database Management System', tipe:'PDF', ukuran:'2.6 MB', tanggal:'19 Feb 2026', icon:'📄', pertemuan:3 },
  { judul:'Slide — Data Warehouse & Mining', tipe:'PPT', ukuran:'4.2 MB', tanggal:'26 Feb 2026', icon:'📊', pertemuan:4 },
  { judul:'BAB 3 — E-Government', tipe:'PDF', ukuran:'2.9 MB', tanggal:'5 Mar 2026', icon:'📄', pertemuan:5 },
  { judul:'Slide — Keamanan Sistem Informasi', tipe:'PPT', ukuran:'3.5 MB', tanggal:'12 Mar 2026', icon:'📊', pertemuan:6 },
  { judul:'Rangkuman Materi UTS', tipe:'PDF', ukuran:'3.2 MB', tanggal:'19 Mar 2026', icon:'📚', pertemuan:7 },
  { judul:'BAB 4 — Enterprise Resource Planning', tipe:'PDF', ukuran:'2.5 MB', tanggal:'26 Mar 2026', icon:'📄', pertemuan:8 },
];
CLASS_CONTENT[6].tugas = [
  { judul:'Analisis Sistem Informasi Instansi', type:'Tugas Kelompok', deadline:'2026-03-10 23:59', status:'Sudah', pertemuan:3 },
  { judul:'Desain Database Sederhana', type:'Tugas Individu', deadline:'2026-03-20 23:59', status:'Sudah', pertemuan:4 },
  { judul:'Studi Kasus E-Government', type:'Tugas Kelompok', deadline:'2026-04-05 23:59', status:'Belum', pertemuan:6 },
  { judul:'Proyek Akhir — Prototype Aplikasi', type:'Tugas Kelompok', deadline:'2026-04-25 23:59', status:'Belum', pertemuan:8 },
];
CLASS_CONTENT[6].forum = [
  { judul:'Diskusi: Tantangan Digitalisasi Birokrasi', balasan:14, waktu:'2 hari lalu', author:'Andi P.', hot:true, pertemuan:1 },
  { judul:'Sharing: Tools Database Gratis', balasan:8, waktu:'4 hari lalu', author:'Siti N.', hot:false, pertemuan:3 },
  { judul:'Diskusi: Keamanan Data Pemerintah', balasan:11, waktu:'1 hari lalu', author:'Ir. Andi P.', hot:true, pertemuan:6 },
];
CLASS_CONTENT[6].quiz = [
  { judul:'Quiz Konsep SI BAB 1-2', soal:15, durasi:'20 menit', status:'Selesai', deadline:'12 Mar 2026', nilai:80, pertemuan:2 },
  { judul:'UTS Sistem Informasi Manajemen', soal:30, durasi:'75 menit', status:'Selesai', deadline:'19 Mar 2026', nilai:78, pertemuan:7 },
  { judul:'Quiz ERP & Cloud', soal:20, durasi:'25 menit', status:'Belum', deadline:'8 Apr 2026', nilai:null, pertemuan:8 },
];
CLASS_CONTENT[6].video = [
  { judul:'Pengantar Sistem Informasi', durasi:'28:40', views:180, status:'watched', pertemuan:1 },
  { judul:'Tutorial SQL Dasar', durasi:'45:15', views:142, status:'watched', pertemuan:3 },
  { judul:'E-Government Indonesia', durasi:'35:20', views:76, status:'new', pertemuan:5 },
];
CLASS_CONTENT[6].uts = [
  { judul:'UTS — Sistem Informasi Manajemen', mode:'upload', type:'Upload File', deadline:'2026-03-19 23:59', status:'Sudah', nilai:null, pertemuan:7 }
];
CLASS_CONTENT[6].uas = [
  { judul:'UAS — Sistem Informasi Manajemen', mode:'upload', type:'Upload File', deadline:'2026-04-28 23:59', status:'Belum', nilai:null, pertemuan:12 }
];

// Etika Administrasi (id:7)
CLASS_CONTENT[7].materi = [
  { judul:'BAB 1 — Pengertian Etika & Moral', tipe:'PDF', ukuran:'1.8 MB', tanggal:'6 Feb 2026', icon:'📄', pertemuan:1 },
  { judul:'Slide — Etika Profesi PNS', tipe:'PPT', ukuran:'3.2 MB', tanggal:'13 Feb 2026', icon:'📊', pertemuan:2 },
  { judul:'BAB 2 — Kode Etik ASN', tipe:'PDF', ukuran:'2.1 MB', tanggal:'20 Feb 2026', icon:'📄', pertemuan:3 },
  { judul:'Slide — Integritas & Anti Korupsi', tipe:'PPT', ukuran:'3.5 MB', tanggal:'27 Feb 2026', icon:'📊', pertemuan:4 },
  { judul:'BAB 3 — Etika Pelayanan Publik', tipe:'PDF', ukuran:'2.4 MB', tanggal:'6 Mar 2026', icon:'📄', pertemuan:5 },
  { judul:'Rangkuman Materi UTS', tipe:'PDF', ukuran:'2.8 MB', tanggal:'13 Mar 2026', icon:'📚', pertemuan:6 },
  { judul:'BAB 4 — Dilema Etika Birokrasi', tipe:'PDF', ukuran:'2.0 MB', tanggal:'20 Mar 2026', icon:'📄', pertemuan:7 },
];
CLASS_CONTENT[7].tugas = [
  { judul:'Analisis Kasus Etika Pelayanan', type:'Tugas Individu', deadline:'2026-03-08 23:59', status:'Sudah', pertemuan:2 },
  { judul:'Essay Anti Korupsi di Birokrasi', type:'Tugas Individu', deadline:'2026-03-22 23:59', status:'Sudah', pertemuan:4 },
  { judul:'Studi Kasus Dilema Etika', type:'Tugas Kelompok', deadline:'2026-04-12 23:59', status:'Belum', pertemuan:7 },
];
CLASS_CONTENT[7].forum = [
  { judul:'Diskusi: Etika vs Hukum dalam Birokrasi', balasan:18, waktu:'3 hari lalu', author:'Bambang S.', hot:true, pertemuan:1 },
  { judul:'Sharing: Kasus Nyata Dilema Etika', balasan:12, waktu:'2 hari lalu', author:'Ahmad R.', hot:true, pertemuan:4 },
];
CLASS_CONTENT[7].quiz = [
  { judul:'Quiz Etika BAB 1-2', soal:15, durasi:'20 menit', status:'Selesai', deadline:'20 Mar 2026', nilai:90, pertemuan:3 },
  { judul:'UTS Etika Administrasi', soal:25, durasi:'60 menit', status:'Selesai', deadline:'27 Mar 2026', nilai:85, pertemuan:6 },
  { judul:'Quiz Dilema Etika', soal:15, durasi:'20 menit', status:'Belum', deadline:'15 Apr 2026', nilai:null, pertemuan:7 },
];
CLASS_CONTENT[7].video = [
  { judul:'Pengantar Etika Administrasi', durasi:'25:30', views:165, status:'watched', pertemuan:1 },
  { judul:'Kode Etik ASN — Penjelasan', durasi:'32:10', views:130, status:'watched', pertemuan:3 },
  { judul:'Studi Kasus: Whistleblowing', durasi:'28:45', views:54, status:'new', pertemuan:5 },
];
CLASS_CONTENT[7].uts = [
  { judul:'UTS — Etika Administrasi', mode:'upload', type:'Upload File', deadline:'2026-03-27 23:59', status:'Sudah', nilai:null, pertemuan:6 }
];
CLASS_CONTENT[7].uas = [
  { judul:'UAS — Etika Administrasi', mode:'upload', type:'Upload File', deadline:'2026-04-24 23:59', status:'Belum', nilai:null, pertemuan:10 }
];

// ============================================
// QUIZ QUESTIONS (Pilihan Ganda)
// ============================================
const QUIZ_QUESTIONS = {};

// Helper to generate sample questions for a quiz
function generateQuestions(quizTitle, count) {
  const topics = quizTitle.replace(/Quiz |UTS |UAS /g, '').trim();
  const qs = [];
  for (let i = 1; i <= Math.min(count, 5); i++) {
    qs.push({
      soal: `Pertanyaan ${i}: Manakah yang paling tepat mengenai ${topics}?`,
      opsi: [
        { key:'A', text:`Pilihan A — Konsep dasar ${topics} dalam konteks modern` },
        { key:'B', text:`Pilihan B — Penerapan ${topics} di tingkat nasional` },
        { key:'C', text:`Pilihan C — Evaluasi dan analisis ${topics}` },
        { key:'D', text:`Pilihan D — Kritik terhadap teori ${topics}` },
      ],
      jawaban: ['A','B','C','D'][i % 4]
    });
  }
  return qs;
}

// Pre-populate sample questions for class 1 quizzes
QUIZ_QUESTIONS['Quiz BAB 1-3'] = [
  { soal:'Apa yang dimaksud dengan kebijakan publik menurut Thomas R. Dye?', opsi:[
    {key:'A',text:'Segala yang dilakukan maupun tidak dilakukan oleh pemerintah'},
    {key:'B',text:'Keputusan yang dibuat oleh legislatif saja'},
    {key:'C',text:'Rencana strategis organisasi swasta'},
    {key:'D',text:'Peraturan yang dibuat oleh masyarakat'}
  ], jawaban:'A'},
  { soal:'Tahap pertama dalam siklus kebijakan publik adalah...', opsi:[
    {key:'A',text:'Implementasi kebijakan'},
    {key:'B',text:'Evaluasi kebijakan'},
    {key:'C',text:'Identifikasi masalah (agenda setting)'},
    {key:'D',text:'Legitimasi kebijakan'}
  ], jawaban:'C'},
  { soal:'Analisis stakeholder bertujuan untuk...', opsi:[
    {key:'A',text:'Menghitung anggaran kebijakan'},
    {key:'B',text:'Mengidentifikasi aktor yang terlibat dan kepentingannya'},
    {key:'C',text:'Membuat laporan keuangan'},
    {key:'D',text:'Mengevaluasi kinerja pegawai'}
  ], jawaban:'B'},
  { soal:'Model rasional dalam pembuatan kebijakan mengasumsikan...', opsi:[
    {key:'A',text:'Pembuat kebijakan memiliki informasi lengkap'},
    {key:'B',text:'Kebijakan selalu menguntungkan semua pihak'},
    {key:'C',text:'Proses kebijakan bersifat acak'},
    {key:'D',text:'Masyarakat selalu setuju dengan kebijakan'}
  ], jawaban:'A'},
  { soal:'Implementasi kebijakan menurut Edward III dipengaruhi oleh faktor berikut, KECUALI...', opsi:[
    {key:'A',text:'Komunikasi'},
    {key:'B',text:'Sumber daya'},
    {key:'C',text:'Disposisi'},
    {key:'D',text:'Popularitas pejabat'}
  ], jawaban:'D'},
];

QUIZ_QUESTIONS['UTS Kebijakan Publik'] = [
  { soal:'Pendekatan top-down dalam implementasi kebijakan dikemukakan oleh...', opsi:[
    {key:'A',text:'Lipsky'},
    {key:'B',text:'Sabatier dan Mazmanian'},
    {key:'C',text:'Wildavsky'},
    {key:'D',text:'Lindblom'}
  ], jawaban:'B'},
  { soal:'Garbage Can Model dikemukakan oleh...', opsi:[
    {key:'A',text:'Cohen, March, dan Olsen'},
    {key:'B',text:'Herbert Simon'},
    {key:'C',text:'Charles Lindblom'},
    {key:'D',text:'Harold Lasswell'}
  ], jawaban:'A'},
  { soal:'Evaluasi kebijakan bertujuan untuk...', opsi:[
    {key:'A',text:'Membuat kebijakan baru'},
    {key:'B',text:'Menilai efektivitas dan efisiensi kebijakan'},
    {key:'C',text:'Menghapus semua kebijakan lama'},
    {key:'D',text:'Mengubah struktur organisasi'}
  ], jawaban:'B'},
  { soal:'Policy window menurut Kingdon terbuka ketika...', opsi:[
    {key:'A',text:'Ada pemilihan umum'},
    {key:'B',text:'Tiga stream (problem, policy, politics) bertemu'},
    {key:'C',text:'Presiden mengeluarkan dekrit'},
    {key:'D',text:'Terjadi bencana alam'}
  ], jawaban:'B'},
  { soal:'Street-level bureaucracy merujuk pada...', opsi:[
    {key:'A',text:'Birokrasi tingkat atas'},
    {key:'B',text:'Pejabat yang berinteraksi langsung dengan masyarakat'},
    {key:'C',text:'Struktur organisasi vertikal'},
    {key:'D',text:'Sistem pengawasan internal'}
  ], jawaban:'B'},
];

// ============================================
// QUIZ INTRO SCREEN
// ============================================
function renderQuizIntro(quiz) {
  const questions = QUIZ_QUESTIONS[quiz.judul] || [];
  const totalQ = questions.length || quiz.soal;
  const dlFormatted = quiz.deadline ? new Date(quiz.deadline).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'}) : '-';
  
  return `
    <div class="el-quiz-intro">
      <div class="el-quiz-intro-card">
        <div class="el-quiz-intro-icon">📋</div>
        <h2 class="el-quiz-intro-title">${quiz.judul}</h2>
        <p class="el-quiz-intro-sub">Pilihan Ganda · ${quiz.durasi}</p>
        
        <div class="el-quiz-intro-stats">
          <div class="el-quiz-intro-stat">
            <span class="el-qi-stat-num">${totalQ}</span>
            <span class="el-qi-stat-label">Soal</span>
          </div>
          <div class="el-qi-stat-divider"></div>
          <div class="el-quiz-intro-stat">
            <span class="el-qi-stat-num">${quiz.durasi}</span>
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
            <li>📅 Deadline: <strong>${dlFormatted}</strong></li>
          </ul>
        </div>
        
        <div class="el-quiz-intro-actions">
          <button class="el-quiz-btn secondary" data-action="back-from-quiz">← Kembali</button>
          <button class="el-quiz-btn primary el-start-quiz-now" style="background:#10b981;flex:1;font-size:0.88rem">🚀 Kerjakan Sekarang</button>
        </div>
      </div>
    </div>`;
}

// ============================================
// QUIZ TAKING ENGINE
// ============================================
function renderQuizTaking(quiz, classId) {
  const questions = QUIZ_QUESTIONS[quiz.judul] || generateQuestions(quiz.judul, quiz.soal);
  const totalQ = questions.length;
  
  return `
    <div class="el-quiz-container">
      <div class="el-quiz-header">
        <button class="el-detail-back" data-action="back-from-quiz" style="background:rgba(37,99,235,0.1);color:hsl(215 55% 45%)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          Kembali
        </button>
        <div class="el-quiz-title-section">
          <h2 class="el-quiz-title">📋 ${quiz.judul}</h2>
          <p class="el-quiz-meta">${totalQ} soal · ${quiz.durasi} · Pilihan Ganda</p>
        </div>
        <div class="el-quiz-timer" id="quizTimer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span id="timerText">${quiz.durasi}</span>
        </div>
      </div>
      
      <div class="el-quiz-body">
        <div class="el-quiz-sidebar" id="quizNav">
          ${questions.map((_, i) => '<button class="el-quiz-nav-btn'+(i===0?' active':'')+'" data-q="'+i+'">'+(i+1)+'</button>').join('')}
        </div>
        <div class="el-quiz-main">
          <div id="quizContent">
            ${questions.map((q, i) => `
              <div class="el-quiz-question${i===0?'':' hidden'}" data-qi="${i}">
                <div class="el-quiz-q-header">
                  <span class="el-quiz-q-num">Soal ${i+1} dari ${totalQ}</span>
                </div>
                <p class="el-quiz-q-text">${q.soal}</p>
                <div class="el-quiz-options">
                  ${q.opsi.map(o => `
                    <label class="el-quiz-option" data-qi="${i}" data-key="${o.key}">
                      <input type="radio" name="q${i}" value="${o.key}" />
                      <span class="el-quiz-option-key">${o.key}</span>
                      <span class="el-quiz-option-text">${o.text}</span>
                    </label>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
          <div class="el-quiz-footer">
            <button class="el-quiz-btn secondary" id="quizPrev" disabled>← Sebelumnya</button>
            <span class="el-quiz-progress" id="quizProgress">1 / ${totalQ}</span>
            <button class="el-quiz-btn primary" id="quizNext">Selanjutnya →</button>
            <button class="el-quiz-btn submit hidden" id="quizSubmit">✓ Selesai & Kirim</button>
          </div>
        </div>
      </div>
    </div>`;
}

function renderQuizResult(quiz, score, total, answers, questions) {
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 60;
  return `
    <div class="el-quiz-result">
      <div class="el-quiz-result-card ${passed ? 'pass' : 'fail'}">
        <div class="el-quiz-result-icon">${passed ? '🎉' : '😔'}</div>
        <h2>${passed ? 'Selamat!' : 'Belum Lulus'}</h2>
        <p>${passed ? 'Anda berhasil menyelesaikan quiz ini.' : 'Silakan coba lagi untuk mendapatkan nilai yang lebih baik.'}</p>
        <div class="el-quiz-score-ring">
          <svg viewBox="0 0 36 36" width="100" height="100">
            <circle cx="18" cy="18" r="16" fill="none" stroke="hsl(215 15% 90%)" stroke-width="3"/>
            <circle cx="18" cy="18" r="16" fill="none" stroke="${passed?'#10b981':'#ef4444'}" stroke-width="3" stroke-linecap="round"
              stroke-dasharray="${pct}, 100" transform="rotate(-90 18 18)"/>
          </svg>
          <span class="el-quiz-score-text">${pct}</span>
        </div>
        <div class="el-quiz-score-detail">
          <div class="el-quiz-score-item correct">✓ Benar: ${score}</div>
          <div class="el-quiz-score-item wrong">✗ Salah: ${total - score}</div>
        </div>
        <button class="el-quiz-btn primary" data-action="back-from-quiz" style="margin-top:16px">Kembali ke Kelas</button>
      </div>
      
      <h3 style="margin:24px 0 12px;font-size:0.92rem;color:hsl(215 40% 20%)">📝 Pembahasan Jawaban</h3>
      <div class="el-quiz-review">
        ${questions.map((q, i) => {
          const userAns = answers[i] || '-';
          const isCorrect = userAns === q.jawaban;
          return `<div class="el-quiz-review-item ${isCorrect ? 'correct' : 'wrong'}">
            <div class="el-quiz-review-num">${i+1}</div>
            <div class="el-quiz-review-body">
              <p class="el-quiz-review-q">${q.soal}</p>
              <p class="el-quiz-review-ans">Jawaban Anda: <strong>${userAns}</strong> ${isCorrect ? '✓' : '✗ (Benar: <strong>'+q.jawaban+'</strong>)'}</p>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
}

// ============================================
// FORUM THREAD VIEW
// ============================================
function renderForumThread(forum, classId, userName, userRole) {
  const replies = forum.replies || [];
  const getInitial = (name) => name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  const expired = forum.deadline && new Date(forum.deadline) < new Date();
  const canReply = userRole === 'dosen' || !expired;
  const dlFormatted = forum.deadline ? new Date(forum.deadline).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}) : '';
  const dlHtml = forum.deadline ? ` · ${expired ? '<span style="color:#ef4444;font-weight:600">⚠️ Ditutup '+dlFormatted+'</span>' : '<span style="color:#64748b">📅 Batas: '+dlFormatted+'</span>'}` : '';
  
  const replyBox = canReply ? `
      <div class="el-forum-reply-box">
        <div class="el-forum-avatar me">${getInitial(userName)}</div>
        <div class="el-forum-input-wrap">
          <textarea id="forumReplyInput" placeholder="Tulis balasan..." rows="2"></textarea>
          <button class="el-forum-send" id="forumSendBtn">Kirim →</button>
        </div>
      </div>` : `
      <div class="el-forum-reply-box el-forum-locked">
        <div style="display:flex;align-items:center;gap:8px;width:100%;justify-content:center">
          <span style="font-size:1.1rem">🔒</span>
          <span style="font-size:0.82rem;font-weight:600;color:#94a3b8">Diskusi telah ditutup (${dlFormatted})</span>
        </div>
      </div>`;

  return `
    <div class="el-forum-container">
      <div class="el-forum-header">
        <button class="el-detail-back" data-action="back-from-forum" style="background:rgba(139,92,246,0.1);color:#8b5cf6">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          Kembali
        </button>
        <div class="el-forum-title-section">
          <h2 class="el-forum-title">💬 ${forum.judul}</h2>
          <p class="el-forum-meta">Dibuat oleh <strong>${forum.author}</strong> · ${forum.waktu} · ${replies.length} balasan${dlHtml} ${forum.hot ? '<span class="el-forum-hot">🔥 Hot</span>' : ''}</p>
        </div>
      </div>
      
      <div class="el-forum-thread" id="forumThread">
        ${replies.map(r => `
          <div class="el-forum-reply ${r.role === 'dosen' ? 'dosen' : ''}">
            <div class="el-forum-avatar ${r.role === 'dosen' ? 'dosen' : ''}">${getInitial(r.author)}</div>
            <div class="el-forum-reply-content">
              <div class="el-forum-reply-header">
                <span class="el-forum-reply-author">${r.author}</span>
                ${r.role === 'dosen' ? '<span class="el-forum-role-badge">Dosen</span>' : ''}
                <span class="el-forum-reply-time">${r.waktu}</span>
              </div>
              <p class="el-forum-reply-text">${r.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
      ${replyBox}
    </div>`;
}

// ============================================
// COURSE DETAIL VIEW (tabbed)
// ============================================
const COURSE_TABS = [
  { id:'materi', label:'Materi', icon: 'book' },
  { id:'tugas', label:'Tugas', icon: 'clipboard' },
  { id:'uts', label:'UTS', icon: 'checkCircle' },
  { id:'uas', label:'UAS', icon: 'checkCircle' },
  { id:'forum', label:'Forum', icon: 'messageSquare' },
  { id:'quiz', label:'Quiz', icon: 'checkCircle' },
  { id:'video', label:'Video', icon: 'play' },
];

function courseTabMateri(items) {
  if (!items.length) return '<p style="color:hsl(215 15% 55%);text-align:center;padding:30px">Belum ada materi untuk kelas ini.</p>';
  return `<table class="sch-table" aria-label="Materi kelas">
    <thead><tr><th></th><th>Pertemuan</th><th>Judul Materi</th><th>Tipe</th><th>Ukuran</th><th>Tanggal</th><th></th></tr></thead>
    <tbody>${items.map(m => `<tr>
      <td style="font-size:1.3rem">${m.icon}</td>
      <td><span class="badge-sm blue">Ke-${m.pertemuan}</span></td>
      <td><strong>${m.judul}</strong></td>
      <td><span class="badge-sm ${m.tipe==='PDF'?'blue':m.tipe==='PPT'?'gold':'green'}">${m.tipe}</span></td>
      <td>${m.ukuran}</td><td>${m.tanggal}</td>
      <td><button class="btn-sm blue">${I.upload} Unduh</button></td>
    </tr>`).join('')}</tbody></table>`;
}

function courseTabTugas(items) {
  if (!items.length) return '<p style="color:hsl(215 15% 55%);text-align:center;padding:30px">Belum ada tugas untuk kelas ini.</p>';
  return items.map(t => {
    const dl = getDeadlineStatus(t.deadline);
    return `<div class="task-item"><span class="task-dot ${t.status==='Sudah'?'success':dl.class}"></span>
      <div class="task-body" style="flex:1"><h4>${t.judul}</h4><p>Pertemuan ${t.pertemuan} — ${t.type}</p>
      <div class="task-meta"><span>${I.clock} ${dl.text}</span>
      <span class="badge-sm ${t.status==='Sudah'?'success':dl.class}">${t.status==='Sudah'?'✓ Selesai':'Belum'}</span></div></div>
      ${t.status!=='Sudah'?'<button class="btn-sm gold">Kerjakan</button>':''}</div>`;
  }).join('');
}

function courseTabForum(items) {
  if (!items.length) return '<p style="color:hsl(215 15% 55%);text-align:center;padding:30px">Belum ada diskusi untuk kelas ini.</p>';
  return items.map(f => `<div class="task-item" tabindex="0" style="cursor:pointer">
    <span class="task-dot ${f.hot?'warning':'info'}"></span>
    <div class="task-body" style="flex:1"><h4>${f.judul} ${f.hot?'<span class="badge-sm warning" style="font-size:.6rem">🔥 Hot</span>':''}</h4>
    <div class="task-meta"><span>${I.messageSquare} ${f.balasan} balasan</span><span>${I.clock} ${f.waktu}</span></div></div>
    <button class="btn-sm blue">Buka</button></div>`).join('');
}

function courseTabQuiz(items) {
  if (!items.length) return '<p style="color:hsl(215 15% 55%);text-align:center;padding:30px">Belum ada quiz untuk kelas ini.</p>';
  return `<table class="sch-table"><thead><tr><th>Quiz / Ujian</th><th>Soal</th><th>Durasi</th><th>Deadline</th><th>Status</th><th></th></tr></thead>
    <tbody>${items.map(q => `<tr><td><strong>${q.judul}</strong></td><td>${q.soal}</td><td>${q.durasi}</td><td>${q.deadline}</td>
    <td><span class="badge-sm ${q.status==='Selesai'?'success':'warning'}">${q.status==='Selesai'?'✓ '+q.nilai+'/100':'Belum'}</span></td>
    <td>${q.status!=='Selesai'?'<button class="btn-sm blue">Mulai</button>':''}</td></tr>`).join('')}</tbody></table>`;
}

function courseTabVideo(items) {
  if (!items.length) return '<p style="color:hsl(215 15% 55%);text-align:center;padding:30px">Belum ada video untuk kelas ini.</p>';
  return `<div class="course-grid">${items.map(v => `
    <div class="course-card video-card" tabindex="0"><div class="video-thumb">
      <div class="video-play-icon">${I.play}</div><span class="video-duration">${v.durasi}</span>
    </div><h4>${v.judul}</h4><div class="course-card-foot" style="margin-bottom:14px;margin-left:16px;margin-right:16px">
      <span>${v.views} views</span><span class="badge-sm ${v.status==='watched'?'success':'blue'}">${v.status==='watched'?'✓ Ditonton':'Baru'}</span>
    </div></div>`).join('')}</div>`;
}

const TAB_RENDERERS = { materi: courseTabMateri, tugas: courseTabTugas, uts: courseTabTugas, uas: courseTabTugas, forum: courseTabForum, quiz: courseTabQuiz, video: courseTabVideo };

function renderCourseDetail(kelas, activeTab, userRole, userNim) {
  const isDosen = userRole === 'dosen';
  const data = CLASS_CONTENT[kelas.id] || { materi:[], tugas:[], uts:[], uas:[], forum:[], quiz:[], video:[] };
  const bannerColors = {
    1: 'linear-gradient(135deg, #2563eb, #3b82f6, #60a5fa)',
    2: 'linear-gradient(135deg, #e67e22, #f39c12, #f9bf3b)',
    3: 'linear-gradient(135deg, #e74c3c, #ef5350, #ff7043)',
    4: 'linear-gradient(135deg, #8e44ad, #9b59b6, #ab68c8)',
    5: 'linear-gradient(135deg, #16a085, #1abc9c, #48c9b0)'
  };
  const bg = bannerColors[kelas.id] || bannerColors[1];
  const progressColor = kelas.progress > 70 ? '#10b981' : kelas.progress > 50 ? 'rgba(255,255,255,0.9)' : '#fbbf24';

  // Group all content by pertemuan
  const mm = {};
  const ensure = (p) => { if (!mm[p]) mm[p] = {materi:[],tugas:[],uts:[],uas:[],forum:[],quiz:[],video:[]}; };
  data.materi.forEach(x => { ensure(x.pertemuan||0); mm[x.pertemuan||0].materi.push(x); });
  data.tugas.forEach(x => { ensure(x.pertemuan||0); mm[x.pertemuan||0].tugas.push(x); });
  data.uts.forEach(x => { ensure(x.pertemuan||0); mm[x.pertemuan||0].uts.push(x); });
  data.uas.forEach(x => { ensure(x.pertemuan||0); mm[x.pertemuan||0].uas.push(x); });
  data.forum.forEach(x => { ensure(x.pertemuan||0); mm[x.pertemuan||0].forum.push(x); });
  data.quiz.forEach(x => { ensure(x.pertemuan||0); mm[x.pertemuan||0].quiz.push(x); });
  data.video.forEach(x => { ensure(x.pertemuan||0); mm[x.pertemuan||0].video.push(x); });

  const sorted = Object.keys(mm).map(Number).sort((a,b) => a - b);

  const meetingsHTML = sorted.map(num => {
    const m = mm[num];
    const mainMateri = m.materi[0];
    const topic = mainMateri ? mainMateri.judul : 'Pertemuan ' + num;
    const total = m.materi.length + m.tugas.length + m.uts.length + m.uas.length + m.forum.length + m.quiz.length + m.video.length;
    let items = '';
    // Helper: format deadline with color coding
    function fmtDL(dl) {
      if (!dl) return '';
      const d = new Date(dl);
      const now = new Date();
      const diff = (d - now) / (1000*60*60*24);
      const formatted = d.toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'});
      let color = '#64748b';
      let icon = '📅';
      if (diff < 0) { color = '#ef4444'; icon = '⚠️'; }
      else if (diff < 3) { color = '#f59e0b'; icon = '⏰'; }
      return ' · <span style="color:'+color+';font-weight:600">'+icon+' '+formatted+'</span>';
    }
    function isExpired(dl) { return dl && new Date(dl) < new Date(); }

    m.materi.forEach(mt => {
      const tc = mt.tipe==='PDF'?'#3b82f6':mt.tipe==='PPT'?'#f59e0b':'#10b981';
      const idx = data.materi.indexOf(mt);
      const dosenBtns = isDosen ? '<div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="materi" data-idx="'+idx+'" data-class-id="'+kelas.id+'">✏️</button><button class="el-prt-delete-item" data-type="materi" data-idx="'+idx+'" data-class-id="'+kelas.id+'">🗑</button></div>' : '';
      items += '<div class="el-prt-item"><div class="el-prt-item-icon">'+mt.icon+'</div><div class="el-prt-item-info"><h4>'+mt.judul+'</h4><p><span class="el-prt-badge" style="background:'+tc+'15;color:'+tc+'">'+mt.tipe+'</span> '+mt.ukuran+' · '+mt.tanggal+'</p></div><button class="el-prt-action" style="color:'+tc+'">📥 Unduh</button>'+dosenBtns+'</div>';
    });
    m.tugas.forEach(t => {
      const expired = isExpired(t.deadline);
      const sc = t.status==='Sudah'?'#10b981': expired?'#94a3b8':'#f59e0b';
      const idx = data.tugas.indexOf(t);
      const subs = TUGAS_SUBMISSIONS[t.judul] || [];
      const subCount = subs.filter(s => s.file).length;
      const gradedCount = subs.filter(s => s.nilai !== null).length;
      const dosenBtns = isDosen ? '<div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="tugas" data-idx="'+idx+'" data-class-id="'+kelas.id+'">✏️</button><button class="el-prt-delete-item" data-type="tugas" data-idx="'+idx+'" data-class-id="'+kelas.id+'">🗑</button></div>' : '';
      // Get individual student grade
      const myNim = userNim || '2024001';
      const mySub = subs.find(s => s.nim === myNim);
      const myNilai = mySub?.nilai;
      let statusHtml = '';
      if (isDosen) {
        statusHtml = '<button class="el-prt-action el-grade-tugas" style="color:#e67e22;border-color:#e67e22" data-tugas-idx="'+idx+'" data-class-id="'+kelas.id+'">📊 Nilai ('+gradedCount+'/'+subCount+')</button>';
      } else {
        if (myNilai !== null && myNilai !== undefined) {
          statusHtml = '<span class="el-prt-status" style="color:#10b981;font-weight:700">✓ '+myNilai+'</span>';
        } else if ((t.status==='Sudah' || (mySub && mySub.file)) && !expired) {
          statusHtml = '<button class="el-prt-action el-upload-tugas" style="color:#3b82f6;border-color:#3b82f6" data-tugas-idx="'+idx+'" data-class-id="'+kelas.id+'">✏️ Edit</button>';
        } else if ((t.status==='Sudah' || (mySub && mySub.file)) && expired) {
          statusHtml = '<span class="el-prt-status" style="color:#3b82f6">📤 Belum dinilai</span>';
        } else if (expired) {
          statusHtml = '<span class="el-prt-status el-expired-badge">🔒 Ditutup</span>';
        } else {
          statusHtml = '<button class="el-prt-action el-upload-tugas" style="color:#f59e0b;border-color:#f59e0b" data-tugas-idx="'+idx+'" data-class-id="'+kelas.id+'">📤 Kerjakan</button>';
        }
      }
      const nilaiInfo = myNilai !== null && myNilai !== undefined && !isDosen ? ' · Nilai: <strong>'+myNilai+'</strong>' : (isDosen && t.nilai !== null && t.nilai !== undefined ? ' · Rata-rata: <strong>'+t.nilai+'</strong>' : '');
      items += '<div class="el-prt-item'+(expired && t.status!=='Sudah'?' el-item-expired':'')+'"><div class="el-prt-item-icon">'+(t.status==='Sudah'?'✅': expired?'🔒':'📝')+'</div><div class="el-prt-item-info"><h4>'+t.judul+'</h4><p><span class="el-prt-badge" style="background:'+sc+'15;color:'+sc+'">Tugas</span> '+t.type+nilaiInfo+fmtDL(t.deadline)+'</p></div>'+statusHtml+dosenBtns+'</div>';
    });
    // UTS items
    m.uts.forEach(t => {
      const expired = isExpired(t.deadline);
      const sc = t.status==='Sudah'?'#10b981': expired?'#94a3b8':'#ef4444';
      const idx = data.uts.indexOf(t);
      const isUpload = t.mode === 'upload';
      const dosenBtns = isDosen ? '<div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="uts" data-idx="'+idx+'" data-class-id="'+kelas.id+'">✏️</button><button class="el-prt-delete-item" data-type="uts" data-idx="'+idx+'" data-class-id="'+kelas.id+'">🗑</button></div>' : '';
      let statusHtml = '';
      if (isDosen) {
        statusHtml = '<span class="el-prt-status" style="color:#e67e22">📊 Kelola</span>';
      } else if (isUpload) {
        const myNim = userNim || '2024101001';
        const subs = TUGAS_SUBMISSIONS[t.judul] || [];
        const mySub = subs.find(s => s.nim === myNim);
        const myNilai = mySub?.nilai;
        if (myNilai !== null && myNilai !== undefined) statusHtml = '<span class="el-prt-status" style="color:#10b981;font-weight:700">✓ '+myNilai+'</span>';
        else if ((t.status==='Sudah' || (mySub && mySub.file)) && !expired) statusHtml = '<button class="el-prt-action el-upload-tugas" style="color:#3b82f6;border-color:#3b82f6" data-tugas-idx="'+idx+'" data-class-id="'+kelas.id+'" data-tugas-type="uts">✏️ Edit</button>';
        else if (expired) statusHtml = '<span class="el-prt-status el-expired-badge">🔒 Ditutup</span>';
        else statusHtml = '<button class="el-prt-action el-upload-tugas" style="color:#f59e0b;border-color:#f59e0b" data-tugas-idx="'+idx+'" data-class-id="'+kelas.id+'" data-tugas-type="uts">📤 Kerjakan</button>';
      } else {
        if (t.status === 'Selesai' && t.nilai !== null) statusHtml = '<span class="el-prt-status" style="color:#10b981;font-weight:700">✓ '+t.nilai+'</span>';
        else if (expired) statusHtml = '<span class="el-prt-status el-expired-badge">🔒 Ditutup</span>';
        else statusHtml = '<button class="el-prt-action el-start-quiz" style="color:#ef4444;border-color:#ef4444" data-quiz-idx="'+idx+'" data-class-id="'+kelas.id+'" data-quiz-type="uts">🚀 Mulai</button>';
      }
      items += '<div class="el-prt-item'+(expired && t.status!=='Sudah' && t.status!=='Selesai'?' el-item-expired':'')+'">' +
        '<div class="el-prt-item-icon">📝</div><div class="el-prt-item-info"><h4>'+t.judul+'</h4>' +
        '<p><span class="el-prt-badge" style="background:#ef444415;color:#ef4444">UTS</span> '+t.type+(isUpload?'':' · '+t.soal+' soal · '+t.waktu+' menit')+fmtDL(t.deadline)+'</p></div>'+statusHtml+dosenBtns+'</div>';
    });
    // UAS items
    m.uas.forEach(t => {
      const expired = isExpired(t.deadline);
      const sc = t.status==='Sudah'?'#10b981': expired?'#94a3b8':'#8b5cf6';
      const idx = data.uas.indexOf(t);
      const isUpload = t.mode === 'upload';
      const dosenBtns = isDosen ? '<div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="uas" data-idx="'+idx+'" data-class-id="'+kelas.id+'">✏️</button><button class="el-prt-delete-item" data-type="uas" data-idx="'+idx+'" data-class-id="'+kelas.id+'">🗑</button></div>' : '';
      let statusHtml = '';
      if (isDosen) {
        statusHtml = '<span class="el-prt-status" style="color:#e67e22">📊 Kelola</span>';
      } else if (isUpload) {
        const myNim = userNim || '2024101001';
        const subs = TUGAS_SUBMISSIONS[t.judul] || [];
        const mySub = subs.find(s => s.nim === myNim);
        const myNilai = mySub?.nilai;
        if (myNilai !== null && myNilai !== undefined) statusHtml = '<span class="el-prt-status" style="color:#10b981;font-weight:700">✓ '+myNilai+'</span>';
        else if ((t.status==='Sudah' || (mySub && mySub.file)) && !expired) statusHtml = '<button class="el-prt-action el-upload-tugas" style="color:#3b82f6;border-color:#3b82f6" data-tugas-idx="'+idx+'" data-class-id="'+kelas.id+'" data-tugas-type="uas">✏️ Edit</button>';
        else if (expired) statusHtml = '<span class="el-prt-status el-expired-badge">🔒 Ditutup</span>';
        else statusHtml = '<button class="el-prt-action el-upload-tugas" style="color:#f59e0b;border-color:#f59e0b" data-tugas-idx="'+idx+'" data-class-id="'+kelas.id+'" data-tugas-type="uas">📤 Kerjakan</button>';
      } else {
        if (t.status === 'Selesai' && t.nilai !== null) statusHtml = '<span class="el-prt-status" style="color:#10b981;font-weight:700">✓ '+t.nilai+'</span>';
        else if (expired) statusHtml = '<span class="el-prt-status el-expired-badge">🔒 Ditutup</span>';
        else statusHtml = '<button class="el-prt-action el-start-quiz" style="color:#ef4444;border-color:#ef4444" data-quiz-idx="'+idx+'" data-class-id="'+kelas.id+'" data-quiz-type="uas">🚀 Mulai</button>';
      }
      items += '<div class="el-prt-item'+(expired && t.status!=='Sudah' && t.status!=='Selesai'?' el-item-expired':'')+'">' +
        '<div class="el-prt-item-icon">📝</div><div class="el-prt-item-info"><h4>'+t.judul+'</h4>' +
        '<p><span class="el-prt-badge" style="background:#8b5cf615;color:#8b5cf6">UAS</span> '+t.type+(isUpload?'':' · '+t.soal+' soal · '+t.waktu+' menit')+fmtDL(t.deadline)+'</p></div>'+statusHtml+dosenBtns+'</div>';
    });
    m.quiz.forEach(q => {
      const expired = isExpired(q.deadline);
      const qc = q.status==='Selesai'?'#10b981': expired?'#94a3b8':'#ef4444';
      const qIdx = data.quiz.indexOf(q);
      const qCount = (QUIZ_QUESTIONS[q.judul] || []).length;
      let actionHtml = '';
      if (isDosen) {
        actionHtml = '<button class="el-prt-action el-edit-quiz" style="color:#8b5cf6;border-color:#8b5cf6" data-quiz-idx="'+qIdx+'" data-class-id="'+kelas.id+'">📝 Soal ('+qCount+')</button><div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="quiz" data-idx="'+qIdx+'" data-class-id="'+kelas.id+'">✏️</button><button class="el-prt-delete-item" data-type="quiz" data-idx="'+qIdx+'" data-class-id="'+kelas.id+'">🗑</button></div>';
      } else {
        if (q.status==='Selesai') {
          actionHtml = '<span class="el-prt-status" style="color:'+qc+'">✓ '+q.nilai+'</span>';
        } else if (expired) {
          actionHtml = '<span class="el-prt-status el-expired-badge">🔒 Ditutup</span>';
        } else {
          actionHtml = '<button class="el-prt-action el-start-quiz" style="color:#ef4444;border-color:#ef4444" data-quiz-idx="'+qIdx+'" data-class-id="'+kelas.id+'">🚀 Mulai</button>';
        }
      }
      items += '<div class="el-prt-item'+(expired && q.status!=='Selesai'?' el-item-expired':'')+'"><div class="el-prt-item-icon">'+(q.status==='Selesai'?'✅': expired?'🔒':'📋')+'</div><div class="el-prt-item-info"><h4>'+q.judul+'</h4><p><span class="el-prt-badge" style="background:'+qc+'15;color:'+qc+'">Quiz</span> '+q.soal+' soal · '+q.durasi+(q.nilai!==null?' · Nilai: <strong>'+q.nilai+'</strong>':'')+' · Pilihan Ganda'+fmtDL(q.deadline)+'</p></div>'+actionHtml+'</div>';
    });
    m.forum.forEach(f => {
      const idx = data.forum.indexOf(f);
      const expired = isExpired(f.deadline);
      const dosenBtns = isDosen ? '<div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="forum" data-idx="'+idx+'" data-class-id="'+kelas.id+'">✏️</button><button class="el-prt-delete-item" data-type="forum" data-idx="'+idx+'" data-class-id="'+kelas.id+'">🗑</button></div>' : '';
      const expiredTag = (expired && !isDosen) ? '<span class="el-expired-badge" style="margin-left:6px">🔒</span>' : '';
      items += '<div class="el-prt-item'+(expired?' el-item-expired':'')+'"><div class="el-prt-item-icon">💬</div><div class="el-prt-item-info"><h4>'+f.judul+expiredTag+'</h4><p><span class="el-prt-badge" style="background:#8b5cf615;color:#8b5cf6">Forum</span> '+f.balasan+' balasan · '+f.waktu+fmtDL(f.deadline)+'</p></div><button class="el-prt-action el-open-forum" style="color:#8b5cf6" data-forum-idx="'+idx+'" data-class-id="'+kelas.id+'">💬 Buka</button>'+dosenBtns+'</div>';
    });
    m.video.forEach(v => {
      const idx = data.video.indexOf(v);
      const dosenBtns = isDosen ? '<div class="el-prt-dosen-actions"><button class="el-prt-edit-item" data-type="video" data-idx="'+idx+'" data-class-id="'+kelas.id+'">✏️</button><button class="el-prt-delete-item" data-type="video" data-idx="'+idx+'" data-class-id="'+kelas.id+'">🗑</button></div>' : '';
      items += '<div class="el-prt-item"><div class="el-prt-item-icon">🎬</div><div class="el-prt-item-info"><h4>'+v.judul+'</h4><p><span class="el-prt-badge" style="background:#06b6d415;color:#06b6d4">Video</span> '+v.durasi+' · '+v.views+' views</p></div><button class="el-prt-action" style="color:#06b6d4">▶ Putar</button>'+dosenBtns+'</div>';
    });

    const addBtn = isDosen ? '<button class="el-prt-add-btn" data-meeting="'+num+'" data-class-id="'+kelas.id+'">＋ Tambah Konten</button>' : '';
    // Get day from jadwal (e.g. "Senin, 07:30-09:10")
    const hariFromJadwal = kelas.jadwal ? kelas.jadwal.split(',')[0].trim() : 'Senin';
    const allDates = generatePertemuanDates(hariFromJadwal, 14);
    const meetingDate = allDates[num - 1];
    const dateStr = meetingDate ? formatTanggalFull(meetingDate) : '';
    const dateShort = meetingDate ? formatTanggalShort(meetingDate) : '';
    return '<div class="el-prt-section"><div class="el-prt-header" onclick="this.parentElement.classList.toggle(\'collapsed\')"><div class="el-prt-header-left"><span class="el-prt-num">Ke-'+num+'</span><div><h3 class="el-prt-title">'+topic+'</h3><p class="el-prt-meta"><span style="display:inline-flex;align-items:center;gap:4px;color:hsl(210 50% 45%);font-weight:600;">📅 '+dateStr+'</span> · '+total+' item</p></div></div><svg class="el-prt-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="el-prt-body">'+items+addBtn+'</div></div>';
  }).join('');

  return `
    <div class="el-detail-banner" style="background:${bg}">
      <button class="el-detail-back" data-action="back-to-kelas" aria-label="Kembali ke daftar kelas">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        Kembali
      </button>
      <div class="el-detail-banner-body">
        <div class="el-detail-banner-left">
          <span class="el-detail-badge">${kelas.kode}</span>
          <h2 class="el-detail-title">${kelas.nama}</h2>
          <p class="el-detail-sub">${I.users} ${kelas.dosen} &nbsp;·&nbsp; ${I.clock} ${kelas.jadwal} &nbsp;·&nbsp; ${kelas.sks || 3} SKS &nbsp;·&nbsp; ${kelas.semester}</p>
        </div>
        <div class="el-detail-progress-ring">
          <svg viewBox="0 0 36 36" width="70" height="70">
            <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
            <circle cx="18" cy="18" r="16" fill="none" stroke="${progressColor}" stroke-width="3" stroke-linecap="round"
              stroke-dasharray="${kelas.progress}, 100" transform="rotate(-90 18 18)"/>
          </svg>
          <span class="el-detail-ring-text">${kelas.progress}%</span>
        </div>
      </div>
    </div>
    ${!isDosen ? (() => {
      const myNm = userNim || '2024001';
      const allTugas = data.tugas || [];
      const allQuiz = data.quiz || [];
      const allUts = data.uts || [];
      const allUas = data.uas || [];
      // Combine tugas + uts + uas into allAssignments with category labels
      const allAssignments = [
        ...allTugas.map(t => ({...t, _cat:'TUGAS', _catColor:'#f59e0b'})),
        ...allUts.map(t => ({...t, _cat:'UTS', _catColor:'#ef4444'})),
        ...allUas.map(t => ({...t, _cat:'UAS', _catColor:'#8b5cf6'})),
      ];
      function isPending(t) {
        const subs = TUGAS_SUBMISSIONS[t.judul] || [];
        const mySub = subs.find(s => s.nim === myNm);
        return t.status !== 'Sudah' && !mySub?.file && !(t.deadline && new Date(t.deadline) < new Date());
      }
      function isCompleted(t) {
        const subs = TUGAS_SUBMISSIONS[t.judul] || [];
        const mySub = subs.find(s => s.nim === myNm);
        return t.status === 'Sudah' || mySub?.file;
      }
      function isExpired(t) {
        const subs = TUGAS_SUBMISSIONS[t.judul] || [];
        const mySub = subs.find(s => s.nim === myNm);
        return t.status !== 'Sudah' && !mySub?.file && t.deadline && new Date(t.deadline) < new Date();
      }
      const pending = allAssignments.filter(isPending);
      const completed = allAssignments.filter(isCompleted);
      const expired = allAssignments.filter(isExpired);
      const quizPending = allQuiz.filter(q => q.status !== 'Selesai');
      const quizDone = allQuiz.filter(q => q.status === 'Selesai');
      // SVG icons for summary cards
      const svgPending = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>';
      const svgDone = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
      const svgExpired = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
      const svgQuiz = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>';
      // Helper: render item row for detail panel — premium version
      function renderItem(t, statusIcon, statusText, statusColor, idx) {
        const dl = t.deadline ? new Date(t.deadline).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}) : '—';
        const prt = t.pertemuan ? 'Pertemuan '+t.pertemuan : '';
        const bgAlt = idx % 2 === 0 ? 'background:hsl(215 20% 98.5%);' : '';
        return '<div class="el-panel-row" style="display:flex;align-items:center;gap:12px;padding:13px 18px;border-bottom:1px solid hsl(215 15% 93%);font-size:0.82rem;'+bgAlt+'transition:background .15s;">'
          +'<span style="background:'+t._catColor+'12;color:'+t._catColor+';padding:4px 10px;border-radius:8px;font-size:0.7rem;font-weight:700;min-width:52px;text-align:center;letter-spacing:0.3px;border:1px solid '+t._catColor+'20;">'+t._cat+'</span>'
          +'<div style="flex:1;min-width:0;"><div style="font-weight:600;font-size:0.82rem;color:hsl(215 30% 20%);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+t.judul+'</div><div style="color:hsl(215 15% 52%);font-size:0.72rem;margin-top:3px;display:flex;align-items:center;gap:6px;"><span style="display:inline-flex;align-items:center;gap:3px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'+prt+'</span><span>·</span><span>'+dl+'</span></div></div>'
          +'<span style="color:'+statusColor+';font-weight:700;font-size:0.75rem;white-space:nowrap;display:flex;align-items:center;gap:4px;">'+statusIcon+' '+statusText+'</span>'
          +'</div>';
      }
      function renderQuizItem(q, statusIcon, statusText, statusColor, idx) {
        const dl = q.deadline || '—';
        const prt = q.pertemuan ? 'Pertemuan '+q.pertemuan : '';
        const nilaiStr = q.nilai !== null && q.nilai !== undefined ? '<span style="background:#10b98115;color:#10b981;padding:2px 8px;border-radius:6px;font-size:0.68rem;font-weight:700;margin-left:6px;">'+q.nilai+'/100</span>' : '';
        const bgAlt = idx % 2 === 0 ? 'background:hsl(215 20% 98.5%);' : '';
        return '<div class="el-panel-row" style="display:flex;align-items:center;gap:12px;padding:13px 18px;border-bottom:1px solid hsl(215 15% 93%);font-size:0.82rem;'+bgAlt+'transition:background .15s;">'
          +'<span style="background:#6366f112;color:#6366f1;padding:4px 10px;border-radius:8px;font-size:0.7rem;font-weight:700;min-width:52px;text-align:center;letter-spacing:0.3px;border:1px solid #6366f120;">QUIZ</span>'
          +'<div style="flex:1;min-width:0;"><div style="font-weight:600;font-size:0.82rem;color:hsl(215 30% 20%);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+q.judul+nilaiStr+'</div><div style="color:hsl(215 15% 52%);font-size:0.72rem;margin-top:3px;">'+prt+(prt?' · ':'')+q.soal+' soal · '+q.durasi+'</div></div>'
          +'<span style="color:'+statusColor+';font-weight:700;font-size:0.75rem;white-space:nowrap;display:flex;align-items:center;gap:4px;">'+statusIcon+' '+statusText+'</span>'
          +'</div>';
      }
      // Build detail panels
      const pendingDetail = pending.map((t,i) => renderItem(t,'⏳','Belum dikerjakan','#b45309',i)).join('');
      const completedDetail = completed.map((t,i) => {
        const subs = TUGAS_SUBMISSIONS[t.judul] || [];
        const mySub = subs.find(s => s.nim === myNm);
        const nilaiStr = mySub?.nilai != null ? ' ('+mySub.nilai+')' : (t.nilai != null ? ' ('+t.nilai+')' : '');
        return renderItem(t,'✅','Selesai'+nilaiStr,'#047857',i);
      }).join('');
      const expiredDetail = expired.map((t,i) => renderItem(t,'🔒','Ditutup','#dc2626',i)).join('');
      const quizDetail = [...quizDone.map((q,i) => renderQuizItem(q,'✅','Selesai','#047857',i)), ...quizPending.map((q,i) => renderQuizItem(q,'⏳','Belum','#6366f1',quizDone.length+i))].join('');
      return `
      <div class="el-tugas-summary">
        <div class="el-summary-card" data-panel="pending">
          <div class="el-sc-icon el-sc-icon-amber">${svgPending}</div>
          <div class="el-sc-body">
            <span class="el-sc-num" style="color:#b45309;">${pending.length}</span>
            <span class="el-sc-label">Tugas Pending</span>
          </div>
          <div class="el-sc-badge el-sc-badge-amber">⚡ Segera</div>
        </div>
        <div class="el-summary-card" data-panel="completed">
          <div class="el-sc-icon el-sc-icon-green">${svgDone}</div>
          <div class="el-sc-body">
            <span class="el-sc-num" style="color:#047857;">${completed.length}</span>
            <span class="el-sc-label">Selesai</span>
          </div>
          <div class="el-sc-badge el-sc-badge-green">✓ Bagus</div>
        </div>
        <div class="el-summary-card" data-panel="expired">
          <div class="el-sc-icon el-sc-icon-red">${svgExpired}</div>
          <div class="el-sc-body">
            <span class="el-sc-num" style="color:#dc2626;">${expired.length}</span>
            <span class="el-sc-label">Expired</span>
          </div>
          <div class="el-sc-badge el-sc-badge-red">${expired.length > 0 ? '⚠ Lewat' : '✓ Aman'}</div>
        </div>
        <div class="el-summary-card" data-panel="quiz">
          <div class="el-sc-icon el-sc-icon-indigo">${svgQuiz}</div>
          <div class="el-sc-body">
            <span class="el-sc-num" style="color:#4338ca;">${quizDone.length}<span style="font-size:0.75rem;font-weight:600;color:hsl(215 15% 55%);">/${allQuiz.length}</span></span>
            <span class="el-sc-label">Quiz</span>
          </div>
          <div class="el-sc-badge el-sc-badge-indigo">${quizDone.length === allQuiz.length ? '✓ Complete' : '⏳ Progress'}</div>
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
      <div id="panelData_pending" data-title="📝 Tugas Pending — Belum Dikerjakan" style="display:none">${pendingDetail}</div>
      <div id="panelData_completed" data-title="✅ Tugas Selesai" style="display:none">${completedDetail}</div>
      <div id="panelData_expired" data-title="🔒 Tugas Expired" style="display:none">${expiredDetail}</div>
      <div id="panelData_quiz" data-title="📋 Quiz Progress" style="display:none">${quizDetail}</div>`;
    })() : ''}
    <div class="el-prt-list">${meetingsHTML}</div>
    ${isDosen ? `<button class="el-prt-add-pertemuan" id="addNewPertemuan" data-class-id="${kelas.id}">＋ Tambah Pertemuan Baru</button>` : ''}
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
    </div>`;
}

// ============================================
// SUB-PAGE: Kelas Saya (vertical banner cards)
// ============================================
function pageKelas(user) {
  const avgProgress = Math.round(KELAS_LIST.reduce((a,k) => a + k.progress, 0) / KELAS_LIST.length);
  const totalMateri = KELAS_LIST.reduce((a,k) => a + k.totalMateri, 0);
  const totalSKS = KELAS_LIST.reduce((a,k) => a + k.sks, 0);
  const bannerColors = [
    'linear-gradient(135deg, #2563eb, #3b82f6, #60a5fa)',
    'linear-gradient(135deg, #e67e22, #f39c12, #f9bf3b)',
    'linear-gradient(135deg, #e74c3c, #ef5350, #ff7043)',
    'linear-gradient(135deg, #8e44ad, #9b59b6, #ab68c8)',
    'linear-gradient(135deg, #16a085, #1abc9c, #48c9b0)',
    'linear-gradient(135deg, #2980b9, #3498db, #5dade2)',
    'linear-gradient(135deg, #c0392b, #e74c3c, #ec7063)'
  ];

  // Compute grade per class for inline display
  const myNim = (user && user.nim) || '2024001';
  const kelasGrades = {};
  KELAS_LIST.forEach(kelas => {
    const data = CLASS_CONTENT[kelas.id] || { tugas:[], uts:[], uas:[], quiz:[] };
    let grades = [];
    (data.quiz||[]).forEach(q => { if (q.status==='Selesai' && q.nilai!==null) grades.push(q.nilai); });
    (data.tugas||[]).forEach(t => {
      const subs = TUGAS_SUBMISSIONS[t.judul] || [];
      const mySub = subs.find(s => s.nim === myNim);
      if (mySub && mySub.nilai !== null && mySub.nilai !== undefined) grades.push(mySub.nilai);
    });
    (data.uts||[]).forEach(t => {
      if (t.mode==='upload') { const subs = TUGAS_SUBMISSIONS[t.judul]||[]; const m = subs.find(s=>s.nim===myNim); if(m&&m.nilai!=null) grades.push(m.nilai); }
      else if (t.status==='Selesai'&&t.nilai!=null) grades.push(t.nilai);
    });
    (data.uas||[]).forEach(t => {
      if (t.mode==='upload') { const subs = TUGAS_SUBMISSIONS[t.judul]||[]; const m = subs.find(s=>s.nim===myNim); if(m&&m.nilai!=null) grades.push(m.nilai); }
      else if (t.status==='Selesai'&&t.nilai!=null) grades.push(t.nilai);
    });
    kelasGrades[kelas.id] = grades.length ? Math.round(grades.reduce((a,b)=>a+b,0)/grades.length) : null;
  });

  const allGrades = Object.values(kelasGrades).filter(v => v !== null);
  const overallAvg = allGrades.length ? Math.round(allGrades.reduce((a,b)=>a+b,0)/allGrades.length) : 0;
  const avgColor = overallAvg >= 80 ? '#10b981' : overallAvg >= 60 ? '#3b82f6' : '#f59e0b';

  return `
    <!-- Summary Bar -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:0.82rem;font-weight:700;color:hsl(215 40% 20%);">📚 ${KELAS_LIST.length} Kelas Aktif</span>
        <span style="font-size:0.68rem;color:hsl(215 15% 55%);">•</span>
        <span style="font-size:0.72rem;color:hsl(215 15% 50%);">${totalSKS} SKS</span>
      </div>
      <button id="toggleNilaiView" style="display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;border:1.5px solid ${avgColor};background:${avgColor}10;color:${avgColor};font-size:0.72rem;font-weight:600;cursor:pointer;transition:all .2s;">
        📊 Lihat Semua Nilai <span style="background:${avgColor};color:#fff;padding:1px 7px;border-radius:10px;font-size:0.62rem;">${overallAvg}</span>
      </button>
    </div>

    <!-- Course List -->
    <div class="el-kelas-list" aria-label="Daftar kelas">
      ${KELAS_LIST.map((k, i) => {
        const bg = bannerColors[i % bannerColors.length];
        const progressColor = k.progress > 70 ? '#10b981' : k.progress > 50 ? '#3b82f6' : '#f59e0b';
        const grade = kelasGrades[k.id];
        const gradeColor = grade !== null ? (grade >= 80 ? '#10b981' : grade >= 60 ? '#3b82f6' : '#ef4444') : '#94a3b8';
        const gradeLabel = grade !== null ? grade : '—';
        const courseIcons = ['🏛️','📊','🏢','⚖️','👥','💻','📜'];
        const cIcon = courseIcons[i % courseIcons.length];
        return `
        <div class="el-kelas-card" tabindex="0" role="article" aria-label="${k.nama}">
          <div class="el-kelas-banner" style="background:${bg}">
            <div class="el-kelas-banner-content">
              <span class="el-kelas-badge">${k.kode}</span>
              <h3 class="el-kelas-banner-title">${k.nama}</h3>
              <p class="el-kelas-banner-sub">${k.dosen} · ${k.sks} SKS · ${k.semester}</p>
            </div>
            <div class="el-kelas-banner-icon">${cIcon}</div>
          </div>
          <div class="el-kelas-body">
            <div class="el-kelas-info-row">
              <div class="el-kelas-info-item">
                ${I.clock} <span>${k.jadwal}</span>
              </div>
              <div class="el-kelas-info-item">
                ${I.book} <span>${k.materiSelesai}/${k.totalMateri} materi selesai</span>
              </div>
            </div>
            <div class="el-kelas-progress-section">
              <div class="el-kelas-progress-header">
                <span>Progress</span>
                <span style="color:${progressColor};font-weight:700">${k.progress}%</span>
              </div>
              <div class="progress-wrap"><div class="progress-bar" style="width:${k.progress}%;background:${progressColor}"></div></div>
            </div>
            <div style="display:flex;gap:6px;">
              <button class="el-kelas-enter enter-course-btn" data-class-id="${k.id}" aria-label="Masuk kelas ${k.nama}" style="flex:1;">
                Masuk Kelas →
              </button>
              <button class="el-kelas-nilai-btn" data-class-id="${k.id}" style="flex-shrink:0;padding:8px 12px;border:none;border-radius:8px;background:${gradeColor}15;color:${gradeColor};font-size:0.7rem;font-weight:700;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:4px;" aria-label="Lihat nilai ${k.nama}">
                📊 <span>${gradeLabel}</span>
              </button>
            </div>
          </div>
        </div>`;
      }).join('')}
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
    </div>`;
}

// ============================================
// SUB-PAGE: Nilai Saya (Grade Summary)
// ============================================
function pageNilai(user) {
  const myNim = user.nim || '2024001';
  let allGrades = [];
  
  const classRows = KELAS_LIST.map(kelas => {
    const data = CLASS_CONTENT[kelas.id] || { tugas:[], uts:[], uas:[], quiz:[] };
    let rows = '';
    let classGrades = [];
    
    // Quiz grades
    data.quiz.forEach(q => {
      const score = q.nilai;
      const hasResult = QUIZ_RESULTS[q.judul];
      let actionHtml = '';
      if (q.status === 'Selesai' && score !== null) {
        classGrades.push(score); allGrades.push(score);
        actionHtml = '<button class="el-nilai-view-btn el-view-quiz-result" data-quiz="'+q.judul+'">👁 Lihat</button>';
      }
      const statusHtml = q.status === 'Selesai' && score !== null
        ? '<span class="el-nilai-score '+(score>=60?'pass':'fail')+'">'+score+'</span>'
        : '<span class="el-nilai-pending">'+(q.status==='Selesai'?'—':'Belum dikerjakan')+'</span>';
      rows += '<div class="el-nilai-row"><span class="el-nilai-badge quiz">Quiz</span><span class="el-nilai-title">'+q.judul+'</span>'+actionHtml+statusHtml+'</div>';
    });
    
    // UTS grades
    (data.uts||[]).forEach(t => {
      const isUpload = t.mode === 'upload';
      let score = null;
      if (isUpload) {
        const subs = TUGAS_SUBMISSIONS[t.judul] || [];
        const mySub = subs.find(s => s.nim === myNim);
        score = mySub?.nilai;
      } else {
        score = (t.status === 'Selesai' && t.nilai !== null) ? t.nilai : null;
      }
      if (score !== null && score !== undefined) { classGrades.push(score); allGrades.push(score); }
      const statusHtml = score !== null && score !== undefined
        ? '<span class="el-nilai-score '+(score>=60?'pass':'fail')+'">'+score+'</span>'
        : '<span class="el-nilai-pending">Belum dikerjakan</span>';
      rows += '<div class="el-nilai-row"><span class="el-nilai-badge" style="background:#ef444415;color:#ef4444">UTS</span><span class="el-nilai-title">'+t.judul+'</span>'+statusHtml+'</div>';
    });
    
    // UAS grades
    (data.uas||[]).forEach(t => {
      const isUpload = t.mode === 'upload';
      let score = null;
      if (isUpload) {
        const subs = TUGAS_SUBMISSIONS[t.judul] || [];
        const mySub = subs.find(s => s.nim === myNim);
        score = mySub?.nilai;
      } else {
        score = (t.status === 'Selesai' && t.nilai !== null) ? t.nilai : null;
      }
      if (score !== null && score !== undefined) { classGrades.push(score); allGrades.push(score); }
      const statusHtml = score !== null && score !== undefined
        ? '<span class="el-nilai-score '+(score>=60?'pass':'fail')+'">'+score+'</span>'
        : '<span class="el-nilai-pending">Belum dikerjakan</span>';
      rows += '<div class="el-nilai-row"><span class="el-nilai-badge" style="background:#8b5cf615;color:#8b5cf6">UAS</span><span class="el-nilai-title">'+t.judul+'</span>'+statusHtml+'</div>';
    });
    
    // Tugas grades
    data.tugas.forEach(t => {
      const subs = TUGAS_SUBMISSIONS[t.judul] || [];
      const mySub = subs.find(s => s.nim === myNim);
      const score = mySub?.nilai;
      const submitted = t.status === 'Sudah' || (mySub && mySub.file);
      let actionHtml = '';
      if (score !== null && score !== undefined) {
        classGrades.push(score); allGrades.push(score);
        actionHtml = '<button class="el-nilai-view-btn el-view-tugas-result" data-tugas="'+t.judul+'">👁 Lihat</button>';
      } else if (submitted) {
        actionHtml = '<button class="el-nilai-view-btn el-view-tugas-result" data-tugas="'+t.judul+'" style="opacity:0.6">📎 File</button>';
      }
      const statusHtml = score !== null && score !== undefined
        ? '<span class="el-nilai-score '+(score>=60?'pass':'fail')+'">'+score+'</span>'
        : '<span class="el-nilai-pending">'+(submitted?'Belum dinilai':'Belum dikerjakan')+'</span>';
      rows += '<div class="el-nilai-row"><span class="el-nilai-badge tugas">'+t.type+'</span><span class="el-nilai-title">'+t.judul+'</span>'+actionHtml+statusHtml+'</div>';
    });
    
    const avg = classGrades.length ? Math.round(classGrades.reduce((a,b)=>a+b,0)/classGrades.length) : null;
    const avgHtml = avg !== null ? '<span class="el-nilai-class-avg '+(avg>=60?'pass':'fail')+'">'+avg+'</span>' : '<span class="el-nilai-class-avg pending">—</span>';
    
    return '<div class="el-nilai-class"><div class="el-nilai-class-header"><div><h3>'+kelas.nama+'</h3><span class="el-nilai-class-sub">'+kelas.kode+' · '+kelas.dosen+'</span></div>'+avgHtml+'</div><div class="el-nilai-class-body">'+rows+'</div></div>';
  }).join('');
  
  const totalAvg = allGrades.length ? Math.round(allGrades.reduce((a,b)=>a+b,0)/allGrades.length) : 0;
  const graded = allGrades.length;
  const totalItems = KELAS_LIST.reduce((a,k) => { const d = CLASS_CONTENT[k.id]||{tugas:[],uts:[],uas:[],quiz:[]}; return a + d.quiz.length + d.tugas.length + (d.uts||[]).length + (d.uas||[]).length; }, 0);
  const pending = totalItems - graded;
  const avgColor = totalAvg >= 80 ? '#10b981' : totalAvg >= 60 ? '#3b82f6' : '#ef4444';
  
  return `
    <div class="el-nilai-header" style="background:linear-gradient(135deg,${avgColor},${avgColor}cc)">
      <div class="el-nilai-header-left">
        <h2>📊 Nilai Saya</h2>
        <p>Semester Genap 2025/2026</p>
      </div>
      <div class="el-nilai-header-right">
        <div class="el-nilai-ring">
          <svg viewBox="0 0 36 36" width="80" height="80">
            <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="3"/>
            <circle cx="18" cy="18" r="16" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"
              stroke-dasharray="${totalAvg}, 100" transform="rotate(-90 18 18)"/>
          </svg>
          <span class="el-nilai-ring-text">${totalAvg}</span>
        </div>
        <div class="el-nilai-summary-stats">
          <span>✅ ${graded} dinilai</span>
          <span>⏳ ${pending} belum</span>
        </div>
      </div>
    </div>
    <div class="el-nilai-list">${classRows}</div>
    <!-- Grade Detail Modal -->
    <div class="el-modal-overlay" id="gradeDetailModal" style="display:none">
      <div class="el-modal" style="max-width:600px">
        <div class="el-modal-header">
          <h3 id="gradeDetailTitle">📋 Detail Nilai</h3>
          <button class="el-modal-close" id="closeGradeDetail">✕</button>
        </div>
        <div class="el-modal-form" style="max-height:75vh;overflow-y:auto">
          <div id="gradeDetailContent"></div>
        </div>
      </div>
    </div>`;
}

// ============================================
// PAGE ROUTER MAP
// ============================================
const PAGE_MAP = {
  home: null,
  kelas: pageKelas,
};

function renderPageContent(pageId, user, courseState) {
  if (courseState && courseState.activeForum) {
    return renderForumThread(courseState.activeForum.forum, courseState.activeForum.classId, user.nama || 'User', user.role);
  }
  if (courseState && courseState.quizIntro) {
    return renderQuizIntro(courseState.quizIntro);
  }
  if (courseState && courseState.quizResult) {
    const q = courseState.quizResult;
    return renderQuizResult(q.quiz, q.score, q.total, q.answers, q.questions);
  }
  if (courseState && courseState.activeQuiz) {
    return renderQuizTaking(courseState.activeQuiz, courseState.kelas.id);
  }
  if (courseState && courseState.kelas) {
    return renderCourseDetail(courseState.kelas, courseState.tab, user.role, user.nim);
  }
  const roleFn = EL_RENDERERS[user.role] || mahasiswaElearning;
  const fn = PAGE_MAP[pageId];
  return fn ? fn(user) : roleFn(user);
}

// ============================================
// MAIN RENDER
// ============================================
export function renderElearning(container) {
  const user = getUser();
  if (!user) { window.location.hash = '#/login'; return; }

  let currentPage = 'home';
  let courseState = null; // { kelas, tab, activeQuiz, quizResult, quizIntro, activeForum }
  let quizAnswers = {};
  let quizTimerInterval = null;

  function renderMain() {
    const main = document.getElementById('dashMain');
    if (!main) return;
    main.innerHTML = renderPageContent(currentPage, user, courseState) + `
      <footer class="dash-iso-footer" role="contentinfo" aria-label="Sertifikasi ISO">
        <span class="dash-iso-badge">${I.shield} ISO 27001 — Security</span>
        <span class="dash-iso-badge">${I.checkCircle} ISO 9241 — Usability</span>
        <span class="dash-iso-badge">${I.checkCircle} ISO 40500 — Accessibility</span>
      </footer>`;
    main.scrollTop = 0;
    bindMainEvents();
  }

  function bindMainEvents() {
    // === Summary card click handlers ===
    let activeSummaryPanel = null;
    document.querySelectorAll('.el-summary-card').forEach(card => {
      card.addEventListener('click', function() {
        const key = this.dataset.panel;
        const panel = document.getElementById('summaryDetailPanel');
        const titleEl = document.getElementById('summaryPanelTitle');
        const body = document.getElementById('summaryPanelBody');
        const empty = document.getElementById('summaryPanelEmpty');
        const dataDiv = document.getElementById('panelData_' + key);
        if (!panel || !dataDiv) return;
        // Toggle same panel
        if (activeSummaryPanel === key) {
          panel.style.display = 'none'; activeSummaryPanel = null;
          document.querySelectorAll('.el-summary-card').forEach(c => c.classList.remove('active'));
          return;
        }
        activeSummaryPanel = key;
        titleEl.textContent = dataDiv.dataset.title;
        body.innerHTML = dataDiv.innerHTML;
        empty.style.display = dataDiv.innerHTML.trim() ? 'none' : 'block';
        body.style.display = dataDiv.innerHTML.trim() ? 'block' : 'none';
        panel.style.display = 'block';
        document.querySelectorAll('.el-summary-card').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
      });
    });
    document.getElementById('closeSummaryPanel')?.addEventListener('click', () => {
      document.getElementById('summaryDetailPanel').style.display = 'none';
      activeSummaryPanel = null;
      document.querySelectorAll('.el-summary-card').forEach(c => c.classList.remove('active'));
    });

    // === Nilai Saya: Grade Detail View ===
    const gradeDetailModal = document.getElementById('gradeDetailModal');
    function closeGradeDetail() { if (gradeDetailModal) gradeDetailModal.style.display = 'none'; }
    document.getElementById('closeGradeDetail')?.addEventListener('click', closeGradeDetail);
    gradeDetailModal?.addEventListener('click', (e) => { if (e.target === gradeDetailModal) closeGradeDetail(); });

    // Quiz result view
    document.querySelectorAll('.el-view-quiz-result').forEach(btn => {
      btn.addEventListener('click', () => {
        const quizTitle = btn.dataset.quiz;
        const result = QUIZ_RESULTS[quizTitle];
        if (!result || !gradeDetailModal) return;
        const { answers, questions, score, total, pct } = result;
        const scoreColor = pct >= 80 ? '#10b981' : pct >= 60 ? '#3b82f6' : '#ef4444';
        
        let qList = questions.map((q, i) => {
          const studentAns = answers[i] || '-';
          const correct = studentAns === q.jawaban;
          return `
            <div class="el-gd-question ${correct ? 'correct' : 'wrong'}">
              <div class="el-gd-q-header">
                <span class="el-gd-q-num">${i+1}</span>
                <span class="el-gd-q-icon">${correct ? '✅' : '❌'}</span>
              </div>
              <p class="el-gd-q-text">${q.soal}</p>
              <div class="el-gd-q-options">
                ${q.opsi.map(o => {
                  const isCorrect = o.key === q.jawaban;
                  const isStudent = o.key === studentAns;
                  let cls = '';
                  if (isCorrect) cls = 'correct';
                  else if (isStudent && !correct) cls = 'wrong';
                  return '<div class="el-gd-q-opt '+cls+'">'+(isCorrect?'✓ ':isStudent&&!correct?'✗ ':'')+o.key+'. '+o.text+'</div>';
                }).join('')}
              </div>
            </div>`;
        }).join('');
        
        document.getElementById('gradeDetailTitle').textContent = '📋 ' + quizTitle;
        document.getElementById('gradeDetailContent').innerHTML = `
          <div class="el-gd-score-header" style="background:${scoreColor}">
            <div class="el-gd-score-ring">
              <svg viewBox="0 0 36 36" width="64" height="64">
                <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="3"/>
                <circle cx="18" cy="18" r="16" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"
                  stroke-dasharray="${pct}, 100" transform="rotate(-90 18 18)"/>
              </svg>
              <span>${pct}</span>
            </div>
            <div>
              <strong style="font-size:1.1rem">${score} / ${total} benar</strong>
              <p style="font-size:0.72rem;opacity:0.85;margin:2px 0 0">Pilihan Ganda · Dinilai otomatis</p>
            </div>
          </div>
          <div class="el-gd-questions">${qList}</div>`;
        gradeDetailModal.style.display = 'flex';
      });
    });

    // Tugas result view
    document.querySelectorAll('.el-view-tugas-result').forEach(btn => {
      btn.addEventListener('click', () => {
        const tugasTitle = btn.dataset.tugas;
        const myNim = user.nim || '2024001';
        const subs = TUGAS_SUBMISSIONS[tugasTitle] || [];
        const mySub = subs.find(s => s.nim === myNim);
        if (!gradeDetailModal) return;
        
        const score = mySub?.nilai;
        const scoreColor = score !== null && score !== undefined ? (score >= 60 ? '#10b981' : '#ef4444') : '#64748b';
        const scoreDisplay = score !== null && score !== undefined ? score : '—';

        document.getElementById('gradeDetailTitle').textContent = '📋 ' + tugasTitle;
        document.getElementById('gradeDetailContent').innerHTML = `
          <div class="el-gd-score-header" style="background:${scoreColor}">
            <div class="el-gd-score-ring">
              <svg viewBox="0 0 36 36" width="64" height="64">
                <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="3"/>
                <circle cx="18" cy="18" r="16" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"
                  stroke-dasharray="${score || 0}, 100" transform="rotate(-90 18 18)"/>
              </svg>
              <span>${scoreDisplay}</span>
            </div>
            <div>
              <strong style="font-size:1.1rem">Nilai Tugas</strong>
              <p style="font-size:0.72rem;opacity:0.85;margin:2px 0 0">Dinilai oleh dosen</p>
            </div>
          </div>
          <div class="el-gd-tugas-info">
            ${mySub && mySub.file ? '<div class="el-gd-info-row"><span class="el-gd-label">📎 File</span><span class="el-gd-value">'+mySub.file+'</span></div>' : ''}
            ${mySub && mySub.waktu ? '<div class="el-gd-info-row"><span class="el-gd-label">🕐 Dikirim</span><span class="el-gd-value">'+mySub.waktu+'</span></div>' : ''}
            <div class="el-gd-info-row"><span class="el-gd-label">📊 Nilai</span><span class="el-gd-value" style="font-weight:700;font-size:1.1rem;color:${scoreColor}">${scoreDisplay} / 100</span></div>
          </div>`;
        gradeDetailModal.style.display = 'flex';
      });
    });

    // "Masuk Kelas" buttons
    document.querySelectorAll('.enter-course-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const classId = parseInt(btn.dataset.classId);
        const kelas = KELAS_LIST.find(k => k.id === classId);
        if (kelas) {
          courseState = { kelas, tab: 'materi' };
          renderMain();
        }
      });
    });

    // === Nilai Integration ===
    const nilaiModal = document.getElementById('nilaiSayaModal');
    const nilaiContent = document.getElementById('nilaiModalContent');
    function closeNilaiModal() { if (nilaiModal) nilaiModal.style.display = 'none'; }
    document.getElementById('closeNilaiModal')?.addEventListener('click', closeNilaiModal);
    nilaiModal?.addEventListener('click', (e) => { if (e.target === nilaiModal) closeNilaiModal(); });

    function renderNilaiModalContent(focusClassId) {
      if (!nilaiContent) return;
      const myNim = user.nim || '2024001';
      let allGrades = [];
      const classRows = KELAS_LIST.map(kelas => {
        const data = CLASS_CONTENT[kelas.id] || { tugas:[], uts:[], uas:[], quiz:[] };
        let rows = '';
        let classGrades = [];
        (data.quiz||[]).forEach(q => {
          const score = q.nilai;
          if (q.status === 'Selesai' && score !== null) { classGrades.push(score); allGrades.push(score); }
          const statusHtml = q.status === 'Selesai' && score !== null
            ? '<span style="color:'+(score>=60?'#10b981':'#ef4444')+';font-weight:700">'+score+'</span>'
            : '<span style="color:#94a3b8">—</span>';
          rows += '<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid hsl(215 15% 96%);font-size:0.72rem;"><span style="background:#ef444415;color:#ef4444;padding:1px 6px;border-radius:4px;font-size:0.58rem;font-weight:700">QUIZ</span><span style="flex:1;color:hsl(215 30% 30%)">'+q.judul+'</span>'+statusHtml+'</div>';
        });
        (data.tugas||[]).forEach(t => {
          const subs = TUGAS_SUBMISSIONS[t.judul] || [];
          const mySub = subs.find(s => s.nim === myNim);
          const score = mySub?.nilai;
          if (score !== null && score !== undefined) { classGrades.push(score); allGrades.push(score); }
          const statusHtml = score !== null && score !== undefined
            ? '<span style="color:'+(score>=60?'#10b981':'#ef4444')+';font-weight:700">'+score+'</span>'
            : '<span style="color:#94a3b8">'+(mySub && mySub.file?'Belum dinilai':'—')+'</span>';
          rows += '<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid hsl(215 15% 96%);font-size:0.72rem;"><span style="background:#f59e0b15;color:#f59e0b;padding:1px 6px;border-radius:4px;font-size:0.58rem;font-weight:700">TUGAS</span><span style="flex:1;color:hsl(215 30% 30%)">'+t.judul+'</span>'+statusHtml+'</div>';
        });
        (data.uts||[]).forEach(t => {
          let score = null;
          if (t.mode==='upload') { const subs = TUGAS_SUBMISSIONS[t.judul]||[]; const m = subs.find(s=>s.nim===myNim); score = m?.nilai; }
          else if (t.status==='Selesai') score = t.nilai;
          if (score !== null && score !== undefined) { classGrades.push(score); allGrades.push(score); }
          const statusHtml = score !== null && score !== undefined
            ? '<span style="color:'+(score>=60?'#10b981':'#ef4444')+';font-weight:700">'+score+'</span>'
            : '<span style="color:#94a3b8">—</span>';
          rows += '<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid hsl(215 15% 96%);font-size:0.72rem;"><span style="background:#8b5cf615;color:#8b5cf6;padding:1px 6px;border-radius:4px;font-size:0.58rem;font-weight:700">UTS</span><span style="flex:1;color:hsl(215 30% 30%)">'+t.judul+'</span>'+statusHtml+'</div>';
        });
        (data.uas||[]).forEach(t => {
          let score = null;
          if (t.mode==='upload') { const subs = TUGAS_SUBMISSIONS[t.judul]||[]; const m = subs.find(s=>s.nim===myNim); score = m?.nilai; }
          else if (t.status==='Selesai') score = t.nilai;
          if (score !== null && score !== undefined) { classGrades.push(score); allGrades.push(score); }
          const statusHtml = score !== null && score !== undefined
            ? '<span style="color:'+(score>=60?'#10b981':'#ef4444')+';font-weight:700">'+score+'</span>'
            : '<span style="color:#94a3b8">—</span>';
          rows += '<div style="display:flex;align-items:center;gap:10px;padding:6px 0;font-size:0.72rem;"><span style="background:#6366f115;color:#6366f1;padding:1px 6px;border-radius:4px;font-size:0.58rem;font-weight:700">UAS</span><span style="flex:1;color:hsl(215 30% 30%)">'+t.judul+'</span>'+statusHtml+'</div>';
        });
        const avg = classGrades.length ? Math.round(classGrades.reduce((a,b)=>a+b,0)/classGrades.length) : null;
        const avgColor = avg !== null ? (avg >= 80 ? '#10b981' : avg >= 60 ? '#3b82f6' : '#ef4444') : '#94a3b8';
        const avgLabel = avg !== null ? avg : '—';
        const isOpen = focusClassId ? kelas.id === focusClassId : true;
        return '<div style="margin-bottom:10px;border:1px solid hsl(215 15% 92%);border-radius:10px;overflow:hidden;">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:hsl(215 20% 98%);cursor:pointer;" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display===\'none\'?\'block\':\'none\'">' +
            '<div><strong style="font-size:0.78rem;color:hsl(215 40% 18%)">'+kelas.nama+'</strong><br><span style="font-size:0.62rem;color:hsl(215 15% 55%)">'+kelas.kode+' · '+kelas.dosen+'</span></div>' +
            '<span style="font-size:0.92rem;font-weight:800;color:'+avgColor+'">'+avgLabel+'</span>' +
          '</div>' +
          '<div style="padding:8px 14px;'+(isOpen?'':'display:none')+'">'+rows+'</div>' +
        '</div>';
      }).join('');

      const totalAvg = allGrades.length ? Math.round(allGrades.reduce((a,b)=>a+b,0)/allGrades.length) : 0;
      const totalColor = totalAvg >= 80 ? '#10b981' : totalAvg >= 60 ? '#3b82f6' : '#f59e0b';
      nilaiContent.innerHTML =
        '<div style="text-align:center;padding:12px 0 16px;">' +
          '<div style="display:inline-block;position:relative;"><svg viewBox="0 0 36 36" width="64" height="64"><circle cx="18" cy="18" r="16" fill="none" stroke="hsl(215 15% 92%)" stroke-width="3"/><circle cx="18" cy="18" r="16" fill="none" stroke="'+totalColor+'" stroke-width="3" stroke-linecap="round" stroke-dasharray="'+totalAvg+', 100" transform="rotate(-90 18 18)"/></svg><span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:0.92rem;font-weight:800;color:'+totalColor+'">'+totalAvg+'</span></div>' +
          '<p style="font-size:0.68rem;color:hsl(215 15% 55%);margin:6px 0 0">Rata-rata keseluruhan dari '+allGrades.length+' komponen yang dinilai</p>' +
        '</div>' + classRows;
    }

    // "Lihat Semua Nilai" button
    document.getElementById('toggleNilaiView')?.addEventListener('click', () => {
      renderNilaiModalContent(null);
      if (nilaiModal) nilaiModal.style.display = 'flex';
    });

    // Per-card 📊 buttons
    document.querySelectorAll('.el-kelas-nilai-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const classId = parseInt(btn.dataset.classId);
        renderNilaiModalContent(classId);
        if (nilaiModal) nilaiModal.style.display = 'flex';
      });
    });
    // "Kembali" button — back to Dashboard
    document.querySelectorAll('[data-action="back-to-kelas"]').forEach(btn => {
      btn.addEventListener('click', () => {
        courseState = null;
        currentPage = 'home';
        renderMain();
      });
    });
    // "Back from quiz" button
    document.querySelectorAll('[data-action="back-from-quiz"]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (courseState) {
          courseState.activeQuiz = null;
          courseState.quizResult = null;
          courseState.quizIntro = null;
          if (quizTimerInterval) { clearInterval(quizTimerInterval); quizTimerInterval = null; }
          quizAnswers = {};
          renderMain();
        }
      });
    });
    // "Back from forum" button
    document.querySelectorAll('[data-action="back-from-forum"]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (courseState) { courseState.activeForum = null; renderMain(); }
      });
    });
    // "Buka" forum buttons
    document.querySelectorAll('.el-open-forum').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const classId = parseInt(btn.dataset.classId);
        const forumIdx = parseInt(btn.dataset.forumIdx);
        const d = CLASS_CONTENT[classId];
        if (!d || !d.forum[forumIdx]) return;
        if (!d.forum[forumIdx].replies) d.forum[forumIdx].replies = [];
        courseState.activeForum = { forum: d.forum[forumIdx], classId };
        renderMain();
      });
    });
    // Forum reply send
    document.getElementById('forumSendBtn')?.addEventListener('click', () => {
      const input = document.getElementById('forumReplyInput');
      const text = input?.value.trim();
      if (!text || !courseState?.activeForum) return;
      const forum = courseState.activeForum.forum;
      if (!forum.replies) forum.replies = [];
      forum.replies.push({
        author: user.nama || 'User',
        text,
        waktu: 'baru saja',
        role: user.role || 'mahasiswa'
      });
      forum.balasan = forum.replies.length;
      forum.waktu = 'baru saja';
      renderMain();
      // Auto-scroll to bottom
      setTimeout(() => {
        const thread = document.getElementById('forumThread');
        if (thread) thread.scrollTop = thread.scrollHeight;
      }, 100);
    });
    // "Start Quiz" buttons (now goes to intro)
    document.querySelectorAll('.el-start-quiz').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const classId = parseInt(btn.dataset.classId);
        const quizIdx = parseInt(btn.dataset.quizIdx);
        const data = CLASS_CONTENT[classId];
        if (!data || !data.quiz[quizIdx]) return;
        quizAnswers = {};
        courseState.quizIntro = data.quiz[quizIdx];
        renderMain();
      });
    });
    // "Kerjakan Sekarang" from intro → start quiz + timer
    document.querySelector('.el-start-quiz-now')?.addEventListener('click', () => {
      if (!courseState?.quizIntro) return;
      courseState.activeQuiz = courseState.quizIntro;
      courseState.quizIntro = null;
      renderMain();
      // Start countdown timer
      const durasiStr = courseState.activeQuiz.durasi || '30 menit';
      const mins = parseInt(durasiStr) || 30;
      let totalSeconds = mins * 60;
      const timerEl = document.getElementById('timerText');
      const timerWrap = document.getElementById('quizTimer');
      if (quizTimerInterval) clearInterval(quizTimerInterval);
      quizTimerInterval = setInterval(() => {
        totalSeconds--;
        if (totalSeconds <= 0) {
          clearInterval(quizTimerInterval);
          quizTimerInterval = null;
          // Auto submit
          document.getElementById('quizSubmit')?.click();
          return;
        }
        const m = Math.floor(totalSeconds / 60);
        const s = totalSeconds % 60;
        if (timerEl) timerEl.textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
        if (timerWrap && totalSeconds < 60) timerWrap.classList.add('danger');
      }, 1000);
    });
    // Quiz navigation
    const quizContent = document.getElementById('quizContent');
    if (quizContent) {
      let currentQ = 0;
      const questions = quizContent.querySelectorAll('.el-quiz-question');
      const totalQ = questions.length;
      const prevBtn = document.getElementById('quizPrev');
      const nextBtn = document.getElementById('quizNext');
      const submitBtn = document.getElementById('quizSubmit');
      const progressEl = document.getElementById('quizProgress');

      function goToQuestion(idx) {
        questions.forEach((q, i) => { q.classList.toggle('hidden', i !== idx); });
        currentQ = idx;
        if (prevBtn) prevBtn.disabled = idx === 0;
        if (nextBtn) nextBtn.classList.toggle('hidden', idx === totalQ - 1);
        if (submitBtn) submitBtn.classList.toggle('hidden', idx !== totalQ - 1);
        if (progressEl) progressEl.textContent = (idx+1) + ' / ' + totalQ;
        document.querySelectorAll('.el-quiz-nav-btn').forEach((b, i) => {
          b.classList.toggle('active', i === idx);
          if (quizAnswers[i] !== undefined) b.classList.add('answered');
        });
      }

      prevBtn?.addEventListener('click', () => { if (currentQ > 0) goToQuestion(currentQ - 1); });
      nextBtn?.addEventListener('click', () => { if (currentQ < totalQ - 1) goToQuestion(currentQ + 1); });

      // Nav sidebar
      document.querySelectorAll('.el-quiz-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => goToQuestion(parseInt(btn.dataset.q)));
      });

      // Option selection
      document.querySelectorAll('.el-quiz-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const qi = parseInt(opt.dataset.qi);
          const key = opt.dataset.key;
          quizAnswers[qi] = key;
          opt.closest('.el-quiz-options').querySelectorAll('.el-quiz-option').forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
          opt.querySelector('input').checked = true;
          document.querySelectorAll('.el-quiz-nav-btn').forEach((b, i) => {
            if (quizAnswers[i] !== undefined) b.classList.add('answered');
          });
        });
      });

      // Submit
      submitBtn?.addEventListener('click', () => {
        if (quizTimerInterval) { clearInterval(quizTimerInterval); quizTimerInterval = null; }
        const quiz = courseState.activeQuiz;
        const qs = QUIZ_QUESTIONS[quiz.judul] || generateQuestions(quiz.judul, quiz.soal);
        let score = 0;
        qs.forEach((q, i) => { if (quizAnswers[i] === q.jawaban) score++; });
        const pct = Math.round((score / qs.length) * 100);
        // Update quiz status
        quiz.status = 'Selesai';
        quiz.nilai = pct;
        // Save results for review on Nilai Saya page
        QUIZ_RESULTS[quiz.judul] = { answers: {...quizAnswers}, questions: qs, score, total: qs.length, pct };
        courseState.activeQuiz = null;
        courseState.quizResult = { quiz, score, total: qs.length, answers: quizAnswers, questions: qs };
        renderMain();
      });
    }
    // Course tab switching
    document.querySelectorAll('.course-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        if (courseState) {
          courseState.tab = tab.dataset.tab;
          renderMain();
        }
      });
    });
    // Also make course cards clickable (whole card)
    document.querySelectorAll('.course-card:not(.video-card)').forEach(card => {
      const btn = card.querySelector('.enter-course-btn');
      if (btn) {
        card.addEventListener('click', (e) => {
          if (e.target.closest('.enter-course-btn')) return;
          btn.click();
        });
        card.style.cursor = 'pointer';
      }
    });

    // === DOSEN: Content Management ===
    const modal = document.getElementById('addContentModal');
    const formType = document.getElementById('formType');
    const dynFields = document.getElementById('dynamicFields');

    function openModal(meetingNum, classId) {
      if (!modal) return;
      document.getElementById('formMeeting').value = meetingNum;
      document.getElementById('formClassId').value = classId;
      document.getElementById('modalTitle').textContent = 'Tambah Konten — Pertemuan ' + meetingNum;
      document.getElementById('formJudul').value = '';
      updateDynamicFields();
      modal.style.display = 'flex';
    }
    function closeModalFn() { if (modal) modal.style.display = 'none'; }

    function updateDynamicFields() {
      if (!dynFields) return;
      const type = formType?.value || 'materi';
      const uploadBox = '<div class="el-form-group"><label>Upload File</label><div class="el-upload-zone" id="uploadZone"><input type="file" id="fFile" class="el-upload-input" /><div class="el-upload-content"><span class="el-upload-icon">📁</span><p class="el-upload-text">Klik atau drag file ke sini</p><p class="el-upload-hint">';
      const fields = {
        materi: uploadBox + 'PDF, PPT, DOCX, MP4 (maks 50MB)</p></div><p class="el-upload-filename" id="uploadedFileName"></p></div></div><div class="el-form-row"><div class="el-form-group"><label>Tipe File</label><select id="fTipe"><option>PDF</option><option>PPT</option><option>DOCX</option><option>MP4</option></select></div><div class="el-form-group"><label>Ukuran</label><input type="text" id="fUkuran" placeholder="otomatis dari file" /></div></div><div class="el-form-group"><label>Deskripsi (opsional)</label><textarea id="fDesc" rows="2" placeholder="Deskripsi materi..." style="resize:vertical"></textarea></div>',
        tugas: '<div class="el-form-row"><div class="el-form-group"><label>Jenis Tugas</label><select id="fTugasType"><option>Tugas Individu</option><option>Tugas Kelompok</option><option>UTS</option><option>UAS</option><option>Ujian Praktikum</option></select></div><div class="el-form-group"><label>Deadline</label><input type="datetime-local" id="fDeadline" /></div></div>' + uploadBox + 'Soal / instruksi tugas (PDF, DOCX)</p></div><p class="el-upload-filename" id="uploadedFileName"></p></div></div><div class="el-form-group"><label>Instruksi (opsional)</label><textarea id="fDesc" rows="2" placeholder="Instruksi pengerjaan tugas..." style="resize:vertical"></textarea></div>',
        quiz: '<div class="el-form-row"><div class="el-form-group"><label>Tipe Quiz</label><select id="fQuizTipe"><option>Quiz Harian</option><option>UTS</option><option>UAS</option><option>Kuis Praktikum</option></select></div><div class="el-form-group"><label>Durasi</label><input type="text" id="fDurasi" placeholder="30 menit" /></div></div><div class="el-form-row"><div class="el-form-group"><label>Jumlah Soal</label><input type="number" id="fSoal" placeholder="20" /></div><div class="el-form-group"><label>Deadline</label><input type="datetime-local" id="fQDeadline" /></div></div>' + uploadBox + 'Import soal dari file (opsional)</p></div><p class="el-upload-filename" id="uploadedFileName"></p></div></div><p class="el-upload-note">💡 Soal juga bisa ditambah manual lewat <strong>Kelola Soal</strong> setelah quiz dibuat</p>',
        forum: '<div class="el-form-group"><label>Topik Diskusi (opsional)</label><textarea id="fDesc" rows="2" placeholder="Deskripsi topik diskusi..."></textarea></div><div class="el-form-group"><label>Deadline Diskusi</label><input type="datetime-local" id="fForumDeadline" /></div>',
        video: '<div class="el-form-row"><div class="el-form-group"><label>Durasi Video</label><input type="text" id="fVDurasi" placeholder="cth: 45:30" /></div><div class="el-form-group"><label>URL Video (opsional)</label><input type="text" id="fVUrl" placeholder="https://youtube.com/..." /></div></div>' + uploadBox + 'Upload video (MP4, maks 200MB)</p></div><p class="el-upload-filename" id="uploadedFileName"></p></div></div>',
        uts: '<div class="el-form-row"><div class="el-form-group"><label>Mode UTS</label><select id="fTugasType"><option value="Pilihan Ganda">📋 Pilihan Ganda (auto-score)</option><option value="Upload PDF">📄 Upload PDF (manual)</option></select></div><div class="el-form-group"><label>Deadline</label><input type="datetime-local" id="fDeadline" /></div></div>' +
              '<div id="pgFields"><div class="el-form-row"><div class="el-form-group"><label>Durasi (menit)</label><input type="number" id="fDurasi" placeholder="90" /></div><div class="el-form-group"><label>Jumlah Soal</label><input type="number" id="fSoal" placeholder="30" /></div></div><p class="el-upload-note">💡 Soal pilihan ganda dikerjakan online. Soal bisa ditambah manual setelah UTS dibuat.</p></div>' +
              '<div id="uploadFields" style="display:none">' + uploadBox + 'Mahasiswa upload jawaban UTS (PDF, DOCX)</p></div><p class="el-upload-filename" id="uploadedFileName"></p></div></div><div class="el-form-group"><label>Instruksi (opsional)</label><textarea id="fDesc" rows="2" placeholder="Instruksi pengerjaan UTS..." style="resize:vertical"></textarea></div></div>',
        uas: '<div class="el-form-row"><div class="el-form-group"><label>Mode UAS</label><select id="fTugasType"><option value="Upload PDF">📄 Upload PDF (manual)</option><option value="Pilihan Ganda">📋 Pilihan Ganda (auto-score)</option></select></div><div class="el-form-group"><label>Deadline</label><input type="datetime-local" id="fDeadline" /></div></div>' +
              '<div id="pgFields" style="display:none"><div class="el-form-row"><div class="el-form-group"><label>Durasi (menit)</label><input type="number" id="fDurasi" placeholder="120" /></div><div class="el-form-group"><label>Jumlah Soal</label><input type="number" id="fSoal" placeholder="40" /></div></div><p class="el-upload-note">💡 Soal pilihan ganda dikerjakan online. Soal bisa ditambah manual setelah UAS dibuat.</p></div>' +
              '<div id="uploadFields">' + uploadBox + 'Mahasiswa upload jawaban UAS (PDF, DOCX)</p></div><p class="el-upload-filename" id="uploadedFileName"></p></div></div><div class="el-form-group"><label>Instruksi (opsional)</label><textarea id="fDesc" rows="2" placeholder="Instruksi pengerjaan UAS..." style="resize:vertical"></textarea></div></div>'
      };
      dynFields.innerHTML = fields[type] || '';

      // Bind mode toggle for UTS/UAS
      const modeSelect = document.getElementById('fTugasType');
      const pgDiv = document.getElementById('pgFields');
      const uploadDiv = document.getElementById('uploadFields');
      if (modeSelect && pgDiv && uploadDiv && (type === 'uts' || type === 'uas')) {
        function toggleMode() {
          const isPG = modeSelect.value === 'Pilihan Ganda';
          pgDiv.style.display = isPG ? '' : 'none';
          uploadDiv.style.display = isPG ? 'none' : '';
        }
        modeSelect.addEventListener('change', toggleMode);
      }

      // Bind file input change to show filename
      const fileInput = document.getElementById('fFile');
      const fileNameEl = document.getElementById('uploadedFileName');
      const uploadZone = document.getElementById('uploadZone');
      if (fileInput && fileNameEl) {
        fileInput.addEventListener('change', () => {
          if (fileInput.files.length > 0) {
            const f = fileInput.files[0];
            const sizeMB = (f.size / 1024 / 1024).toFixed(1);
            fileNameEl.textContent = '📎 ' + f.name + ' (' + sizeMB + ' MB)';
            fileNameEl.style.display = 'block';
            uploadZone.classList.add('has-file');
            // Auto-fill ukuran if materi
            const ukuranEl = document.getElementById('fUkuran');
            if (ukuranEl) ukuranEl.value = sizeMB + ' MB';
            // Auto-detect tipe
            const tipeEl = document.getElementById('fTipe');
            if (tipeEl) {
              const ext = f.name.split('.').pop().toUpperCase();
              for (let opt of tipeEl.options) {
                if (opt.value === ext) { tipeEl.value = ext; break; }
              }
            }
          }
        });
      }
    }

    formType?.addEventListener('change', updateDynamicFields);
    document.getElementById('closeModal')?.addEventListener('click', closeModalFn);
    document.getElementById('cancelModal')?.addEventListener('click', closeModalFn);
    modal?.addEventListener('click', (e) => { if (e.target === modal) closeModalFn(); });

    // "+ Tambah Konten" buttons
    document.querySelectorAll('.el-prt-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(btn.dataset.meeting, btn.dataset.classId);
      });
    });

    // Delete content item
    document.querySelectorAll('.el-prt-delete-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const type = btn.dataset.type;
        const idx = parseInt(btn.dataset.idx);
        const classId = parseInt(btn.dataset.classId);
        const d = CLASS_CONTENT[classId];
        if (!d || !d[type]) return;
        if (!confirm('Hapus konten ini?')) return;
        d[type].splice(idx, 1);
        renderMain();
      });
    });

    // Edit content item
    let editMode = null; // { type, idx, classId }
    document.querySelectorAll('.el-prt-edit-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const type = btn.dataset.type;
        const idx = parseInt(btn.dataset.idx);
        const classId = parseInt(btn.dataset.classId);
        const d = CLASS_CONTENT[classId];
        if (!d || !d[type] || !d[type][idx]) return;
        const item = d[type][idx];
        editMode = { type, idx, classId };
        // Open modal pre-filled
        if (!modal) return;
        document.getElementById('formMeeting').value = item.pertemuan || 1;
        document.getElementById('formClassId').value = classId;
        document.getElementById('modalTitle').textContent = '✏️ Edit ' + type.charAt(0).toUpperCase() + type.slice(1) + ' — ' + item.judul;
        document.getElementById('formJudul').value = item.judul;
        // Set type dropdown
        if (formType) { formType.value = type; updateDynamicFields(); }
        // Pre-fill dynamic fields after a brief delay
        setTimeout(() => {
          if (type === 'materi') {
            const tipeEl = document.getElementById('fTipe');
            const ukuranEl = document.getElementById('fUkuran');
            if (tipeEl) tipeEl.value = item.tipe || 'PDF';
            if (ukuranEl) ukuranEl.value = item.ukuran || '';
          } else if (type === 'tugas') {
            const tugasEl = document.getElementById('fTugasType');
            const dlEl = document.getElementById('fDeadline');
            if (tugasEl) tugasEl.value = item.type || 'Tugas Individu';
            if (dlEl && item.deadline) dlEl.value = item.deadline.replace(' ', 'T');
          } else if (type === 'quiz') {
            const soalEl = document.getElementById('fSoal');
            const durasiEl = document.getElementById('fDurasi');
            const dlEl = document.getElementById('fQDeadline');
            if (soalEl) soalEl.value = item.soal || '';
            if (durasiEl) durasiEl.value = item.durasi || '';
            if (dlEl && item.deadline) dlEl.value = item.deadline;
          } else if (type === 'video') {
            const durEl = document.getElementById('fVDurasi');
            if (durEl) durEl.value = item.durasi || '';
          } else if (type === 'forum') {
            const dlEl = document.getElementById('fForumDeadline');
            if (dlEl && item.deadline) dlEl.value = item.deadline.replace(' ', 'T');
          }
        }, 50);
        modal.style.display = 'flex';
      });
    });

    // Override form submit to handle edit mode
    const origFormHandler = document.getElementById('addContentForm');
    if (origFormHandler) {
      origFormHandler.addEventListener('submit', (e) => {
        if (!editMode) return; // let the original handler work
        e.preventDefault();
        e.stopImmediatePropagation();
        const { type, idx, classId } = editMode;
        const d = CLASS_CONTENT[classId];
        if (!d || !d[type] || !d[type][idx]) { editMode = null; return; }
        const item = d[type][idx];
        item.judul = document.getElementById('formJudul').value.trim();
        if (type === 'materi') {
          item.tipe = document.getElementById('fTipe')?.value || item.tipe;
          item.ukuran = document.getElementById('fUkuran')?.value || item.ukuran;
          const icons = { PDF:'📄', PPT:'📊', DOCX:'📃', MP4:'🎬' };
          item.icon = icons[item.tipe] || '📄';
        } else if (type === 'tugas') {
          item.type = document.getElementById('fTugasType')?.value || item.type;
          item.deadline = document.getElementById('fDeadline')?.value || item.deadline;
        } else if (type === 'quiz') {
          item.soal = parseInt(document.getElementById('fSoal')?.value) || item.soal;
          item.durasi = document.getElementById('fDurasi')?.value || item.durasi;
          item.deadline = document.getElementById('fQDeadline')?.value || item.deadline;
        } else if (type === 'video') {
          item.durasi = document.getElementById('fVDurasi')?.value || item.durasi;
        } else if (type === 'forum') {
          item.deadline = document.getElementById('fForumDeadline')?.value || item.deadline;
        }
        editMode = null;
        closeModalFn();
        renderMain();
      }, true); // 'true' for capture phase to run before original
    }

    // "+ Tambah Pertemuan Baru"
    document.getElementById('addNewPertemuan')?.addEventListener('click', () => {
      const classId = parseInt(document.getElementById('addNewPertemuan').dataset.classId);
      const data = CLASS_CONTENT[classId];
      if (!data) return;
      const allPrt = [...new Set([
        ...data.materi.map(x=>x.pertemuan), ...data.tugas.map(x=>x.pertemuan),
        ...(data.uts||[]).map(x=>x.pertemuan), ...(data.uas||[]).map(x=>x.pertemuan),
        ...data.forum.map(x=>x.pertemuan), ...data.quiz.map(x=>x.pertemuan),
        ...data.video.map(x=>x.pertemuan)
      ])];
      const nextPrt = allPrt.length ? Math.max(...allPrt) + 1 : 1;
      openModal(nextPrt, classId);
    });

    // Form submission
    document.getElementById('addContentForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const classId = parseInt(document.getElementById('formClassId').value);
      const meeting = parseInt(document.getElementById('formMeeting').value);
      const type = formType.value;
      const judul = document.getElementById('formJudul').value.trim();
      if (!judul) return;

      const data = CLASS_CONTENT[classId];
      if (!data) return;
      const today = new Date().toLocaleDateString('id-ID', {day:'numeric',month:'short',year:'numeric'});

      if (type === 'materi') {
        const tipe = document.getElementById('fTipe')?.value || 'PDF';
        const ukuran = document.getElementById('fUkuran')?.value || '1.0 MB';
        const icons = { PDF:'📄', PPT:'📊', MP4:'🎬' };
        data.materi.push({ judul, tipe, ukuran, tanggal:today, icon:icons[tipe]||'📄', pertemuan:meeting });
      } else if (type === 'tugas') {
        const tugasType = document.getElementById('fTugasType')?.value || 'Tugas Individu';
        const dl = document.getElementById('fDeadline')?.value || '';
        data.tugas.push({ judul, type:tugasType, deadline:dl||'2026-05-01 23:59', status:'Belum', pertemuan:meeting });
      } else if (type === 'quiz') {
        const soal = parseInt(document.getElementById('fSoal')?.value) || 20;
        const durasi = document.getElementById('fDurasi')?.value || '30 menit';
        const deadline = document.getElementById('fQDeadline')?.value || '2026-05-01';
        data.quiz.push({ judul, soal, durasi, status:'Belum', deadline, nilai:null, pertemuan:meeting });
      } else if (type === 'forum') {
        const dl = document.getElementById('fForumDeadline')?.value || '';
        data.forum.push({ judul, balasan:0, waktu:'baru saja', author:user.nama||'Dosen', hot:false, pertemuan:meeting, deadline:dl, replies:[] });
      } else if (type === 'video') {
        const durasi = document.getElementById('fVDurasi')?.value || '00:00';
        data.video.push({ judul, durasi, views:0, status:'new', pertemuan:meeting });
      } else if (type === 'uts' || type === 'uas') {
        const dl = document.getElementById('fDeadline')?.value || '';
        const tugasType = document.getElementById('fTugasType')?.value || 'Upload PDF';
        const mode = tugasType === 'Pilihan Ganda' ? 'pg' : 'upload';
        const item = { judul, type:tugasType, mode, deadline:dl||'2026-05-01 23:59', status:'Belum', nilai:null, pertemuan:meeting };
        if (mode === 'pg') { item.soal = 30; item.waktu = 90; }
        if (!data[type]) data[type] = [];
        data[type].push(item);
      }

      closeModalFn();
      renderMain();
    });

    // === DOSEN: Quiz Question Editor ===
    const quizEditorModal = document.getElementById('quizEditorModal');
    let activeEditQuiz = null; // reference to the quiz being edited

    function closeQuizEditor() { if (quizEditorModal) quizEditorModal.style.display = 'none'; }

    function renderQuizEditorList() {
      const list = document.getElementById('quizEditorList');
      if (!list || !activeEditQuiz) return;
      const questions = QUIZ_QUESTIONS[activeEditQuiz.judul] || [];
      if (questions.length === 0) {
        list.innerHTML = '<p style="color:hsl(215 15% 55%);font-size:0.78rem;text-align:center;padding:10px">Belum ada soal. Tambahkan soal baru di bawah.</p>';
        return;
      }
      list.innerHTML = questions.map((q, i) => `
        <div class="el-qe-item">
          <div class="el-qe-num">${i+1}</div>
          <div class="el-qe-body">
            <p class="el-qe-soal">${q.soal}</p>
            <div class="el-qe-options">
              ${q.opsi.map(o => '<span class="el-qe-opt'+(o.key===q.jawaban?' correct':'')+'">'+o.key+'. '+o.text+'</span>').join('')}
            </div>
          </div>
          <button class="el-qe-delete" data-qi="${i}" title="Hapus soal">🗑</button>
        </div>
      `).join('');
      // Bind delete buttons
      list.querySelectorAll('.el-qe-delete').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.qi);
          const qs = QUIZ_QUESTIONS[activeEditQuiz.judul];
          if (qs) {
            qs.splice(idx, 1);
            activeEditQuiz.soal = qs.length;
            renderQuizEditorList();
          }
        });
      });
    }

    // "Kelola Soal" button
    document.querySelectorAll('.el-edit-quiz').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const classId = parseInt(btn.dataset.classId);
        const quizIdx = parseInt(btn.dataset.quizIdx);
        const data = CLASS_CONTENT[classId];
        if (!data || !data.quiz[quizIdx]) return;
        activeEditQuiz = data.quiz[quizIdx];
        if (!QUIZ_QUESTIONS[activeEditQuiz.judul]) QUIZ_QUESTIONS[activeEditQuiz.judul] = [];
        document.getElementById('quizEditorTitle').textContent = '📝 ' + activeEditQuiz.judul;
        renderQuizEditorList();
        quizEditorModal.style.display = 'flex';
      });
    });

    document.getElementById('closeQuizEditor')?.addEventListener('click', () => { closeQuizEditor(); renderMain(); });
    quizEditorModal?.addEventListener('click', (e) => { if (e.target === quizEditorModal) { closeQuizEditor(); renderMain(); } });

    // "Tambah Soal" button
    document.getElementById('addQuizQuestion')?.addEventListener('click', () => {
      if (!activeEditQuiz) return;
      const soal = document.getElementById('qeSoal')?.value.trim();
      const a = document.getElementById('qeA')?.value.trim();
      const b = document.getElementById('qeB')?.value.trim();
      const c = document.getElementById('qeC')?.value.trim();
      const d = document.getElementById('qeD')?.value.trim();
      const jawaban = document.getElementById('qeJawaban')?.value;
      if (!soal || !a || !b || !c || !d) {
        alert('Mohon isi pertanyaan dan semua pilihan A-D.');
        return;
      }
      if (!QUIZ_QUESTIONS[activeEditQuiz.judul]) QUIZ_QUESTIONS[activeEditQuiz.judul] = [];
      QUIZ_QUESTIONS[activeEditQuiz.judul].push({
        soal, jawaban,
        opsi: [{key:'A',text:a},{key:'B',text:b},{key:'C',text:c},{key:'D',text:d}]
      });
      activeEditQuiz.soal = QUIZ_QUESTIONS[activeEditQuiz.judul].length;
      // Clear form
      document.getElementById('qeSoal').value = '';
      document.getElementById('qeA').value = '';
      document.getElementById('qeB').value = '';
      document.getElementById('qeC').value = '';
      document.getElementById('qeD').value = '';
      renderQuizEditorList();
    });

    // === FILE PREVIEW (PDF/DOCX in-browser reader) ===
    const previewModal = document.getElementById('filePreviewModal');
    let previewZoom = 100;

    function openFilePreview(fileName, studentName) {
      if (!previewModal) return;
      document.getElementById('previewFileName').textContent = '📄 ' + fileName;
      document.getElementById('previewStudentName').textContent = 'oleh ' + studentName;
      previewZoom = 100;
      document.getElementById('previewZoomLevel').textContent = '100%';
      
      const ext = fileName.split('.').pop().toLowerCase();
      const isPDF = ext === 'pdf';
      const title = fileName.replace(/\.[^.]+$/, '').replace(/_/g, ' ');
      
      const content = `
        <div class="el-preview-doc ${isPDF ? 'pdf' : 'word'}">
          <div class="el-preview-doc-header">
            <div class="el-preview-doc-icon">${isPDF ? '📕' : '📘'}</div>
            <div>
              <h2>${title}</h2>
              <p class="el-preview-doc-meta">${isPDF ? 'PDF Document' : 'Microsoft Word'} · Dikirim oleh ${studentName}</p>
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
            <span>${isPDF ? 'PDF' : 'DOCX'} — Dibaca di E-Learning STIA Bayuangga</span>
          </div>
        </div>`;
      
      document.getElementById('previewContent').innerHTML = content;
      document.getElementById('previewContent').style.transform = 'scale(1)';
      previewModal.style.display = 'flex';
    }

    document.getElementById('closePreview')?.addEventListener('click', () => {
      if (previewModal) previewModal.style.display = 'none';
    });
    previewModal?.addEventListener('click', (e) => {
      if (e.target === previewModal) previewModal.style.display = 'none';
    });
    document.getElementById('previewZoomIn')?.addEventListener('click', () => {
      if (previewZoom < 200) {
        previewZoom += 25;
        document.getElementById('previewZoomLevel').textContent = previewZoom + '%';
        document.getElementById('previewContent').style.transform = 'scale(' + (previewZoom / 100) + ')';
      }
    });
    document.getElementById('previewZoomOut')?.addEventListener('click', () => {
      if (previewZoom > 75) {
        previewZoom -= 25;
        document.getElementById('previewZoomLevel').textContent = previewZoom + '%';
        document.getElementById('previewContent').style.transform = 'scale(' + (previewZoom / 100) + ')';
      }
    });

    // === MAHASISWA: Upload Tugas (Two-Step: Detail → Upload) ===
    const studentUploadModal = document.getElementById('studentUploadModal');
    let activeUploadTugas = null;
    let activeUploadType = 'tugas'; // 'tugas', 'uts', or 'uas'

    function closeStudentUpload() {
      if (studentUploadModal) studentUploadModal.style.display = 'none';
      // Reset to detail step
      const detailStep = document.getElementById('tugasDetailStep');
      const uploadStep = document.getElementById('tugasUploadStep');
      if (detailStep) detailStep.style.display = '';
      if (uploadStep) uploadStep.style.display = 'none';
    }

    function showDetailStep(tugas, tugasType) {
      activeUploadTugas = tugas;
      activeUploadType = tugasType || 'tugas';
      const typeLabel = activeUploadType === 'uts' ? 'UTS' : activeUploadType === 'uas' ? 'UAS' : 'Tugas';
      
      // Title
      document.getElementById('uploadTugasTitle').textContent = '📋 Detail ' + typeLabel;
      
      // Info header
      const dlDate = tugas.deadline ? new Date(tugas.deadline).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'}) : '-';
      const now = new Date();
      const dlObj = tugas.deadline ? new Date(tugas.deadline) : null;
      const timeLeft = dlObj ? Math.ceil((dlObj - now) / (1000*60*60*24)) : null;
      let timeColor = '#10b981', timeText = timeLeft + ' hari lagi';
      if (timeLeft !== null) {
        if (timeLeft < 0) { timeColor = '#ef4444'; timeText = 'Sudah lewat'; }
        else if (timeLeft < 3) { timeColor = '#f59e0b'; timeText = timeLeft + ' hari lagi'; }
        else if (timeLeft === 0) { timeColor = '#ef4444'; timeText = 'Hari ini!'; }
      }

      document.getElementById('uploadTugasInfo').innerHTML = `
        <div style="background:linear-gradient(135deg,hsl(215 40% 97%),hsl(215 30% 94%));padding:14px 18px;border-radius:10px;margin-bottom:4px">
          <h3 style="margin:0 0 6px;font-size:0.95rem;color:hsl(215 40% 22%)">${tugas.judul}</h3>
          <div style="display:flex;gap:8px;flex-wrap:wrap;font-size:0.72rem">
            <span style="background:${activeUploadType==='uts'?'#ef444415':activeUploadType==='uas'?'#8b5cf615':'#f59e0b15'};color:${activeUploadType==='uts'?'#ef4444':activeUploadType==='uas'?'#8b5cf6':'#f59e0b'};padding:2px 8px;border-radius:4px;font-weight:700">${typeLabel}</span>
            <span style="color:hsl(215 15% 50%)">${tugas.type || ''}</span>
            <span style="color:${timeColor};font-weight:600">📅 ${dlDate} · ${timeText}</span>
          </div>
        </div>`;

      // Instruksi (if any)
      const instrEl = document.getElementById('tugasInstruksi');
      if (instrEl) {
        instrEl.innerHTML = tugas.instruksi 
          ? '<div style="padding:12px 16px;background:#fff;border:1px solid hsl(215 15% 92%);border-radius:8px"><p style="font-size:0.68rem;color:hsl(215 15% 50%);margin:0 0 4px;font-weight:600">📝 INSTRUKSI DOSEN</p><p style="font-size:0.78rem;color:hsl(215 25% 25%);margin:0;line-height:1.6">' + tugas.instruksi + '</p></div>'
          : '<div style="padding:12px 16px;background:#fff;border:1px solid hsl(215 15% 92%);border-radius:8px"><p style="font-size:0.68rem;color:hsl(215 15% 50%);margin:0 0 4px;font-weight:600">📝 INSTRUKSI</p><p style="font-size:0.78rem;color:hsl(215 15% 60%);margin:0;font-style:italic">Kerjakan sesuai dengan materi perkuliahan. Upload file jawaban dalam format PDF atau DOCX.</p></div>';
      }

      // Dosen file (soal)
      const dosenFileEl = document.getElementById('tugasDosenFile');
      if (dosenFileEl) {
        dosenFileEl.innerHTML = tugas.soalFile 
          ? '<div style="padding:10px 14px;background:hsl(215 30% 97%);border-radius:8px;font-size:0.75rem;display:flex;align-items:center;gap:8px"><span>📄</span><span style="flex:1;color:hsl(215 25% 30%)"><strong>Soal:</strong> ' + tugas.soalFile + '</span><button style="background:#3b82f6;color:#fff;border:none;padding:4px 10px;border-radius:5px;font-size:0.65rem;cursor:pointer">📥 Unduh</button></div>'
          : '';
      }

      // My submission status
      const mySubEl = document.getElementById('tugasMySubmission');
      if (mySubEl) {
        const myNim = user.nim || '2024101001';
        const subs = TUGAS_SUBMISSIONS[tugas.judul] || [];
        const mySub = subs.find(s => s.nim === myNim);
        if (mySub && mySub.file) {
          mySubEl.innerHTML = '<div style="padding:10px 14px;background:hsl(150 40% 96%);border:1px solid hsl(150 30% 88%);border-radius:8px;font-size:0.75rem"><p style="margin:0 0 4px;font-weight:600;color:#059669">✅ Sudah dikumpulkan</p><p style="margin:0;color:hsl(215 25% 35%)">📎 ' + mySub.file + ' · ' + (mySub.waktu || '') + '</p>' + (mySub.nilai !== null && mySub.nilai !== undefined ? '<p style="margin:4px 0 0;font-weight:700;color:#10b981">Nilai: ' + mySub.nilai + '/100</p>' : '') + '</div>';
        } else {
          mySubEl.innerHTML = '<div style="padding:10px 14px;background:hsl(40 60% 96%);border:1px solid hsl(40 40% 88%);border-radius:8px;font-size:0.75rem;color:#92400e"><span>⏳</span> Belum mengumpulkan jawaban</div>';
        }
      }

      // Show/hide kumpulkan button based on expired
      const goBtn = document.getElementById('goToUploadStep');
      if (goBtn) {
        const expired = dlObj && dlObj < now;
        if (expired) {
          goBtn.style.display = 'none';
        } else {
          goBtn.style.display = '';
          const myNim = user.nim || '2024101001';
          const subs = TUGAS_SUBMISSIONS[tugas.judul] || [];
          const mySub = subs.find(s => s.nim === myNim);
          goBtn.textContent = (mySub && mySub.file) ? '✏️ Edit Jawaban' : '📤 Kumpulkan Jawaban';
        }
      }

      // Show detail step, hide upload step
      document.getElementById('tugasDetailStep').style.display = '';
      document.getElementById('tugasUploadStep').style.display = 'none';
      studentUploadModal.style.display = 'flex';
    }

    document.querySelectorAll('.el-upload-tugas').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const classId = parseInt(btn.dataset.classId);
        const tugasIdx = parseInt(btn.dataset.tugasIdx);
        const tugasType = btn.dataset.tugasType || 'tugas';
        const data = CLASS_CONTENT[classId];
        if (!data) return;
        const arr = data[tugasType] || data.tugas;
        if (!arr || !arr[tugasIdx]) return;
        showDetailStep(arr[tugasIdx], tugasType);
      });
    });

    // Step navigation
    document.getElementById('goToUploadStep')?.addEventListener('click', () => {
      document.getElementById('tugasDetailStep').style.display = 'none';
      document.getElementById('tugasUploadStep').style.display = '';
      document.getElementById('uploadTugasTitle').textContent = '📤 Upload Jawaban';
      // Reset file input
      const fInput = document.getElementById('studentFileInput');
      if (fInput) fInput.value = '';
      const fName = document.getElementById('studentFileName');
      if (fName) { fName.style.display = 'none'; fName.textContent = ''; }
      const zone = document.getElementById('studentUploadZone');
      if (zone) zone.classList.remove('has-file');
      const note = document.getElementById('studentUploadNote');
      if (note) note.value = '';
    });
    document.getElementById('backToDetail')?.addEventListener('click', () => {
      document.getElementById('tugasDetailStep').style.display = '';
      document.getElementById('tugasUploadStep').style.display = 'none';
      const typeLabel = activeUploadType === 'uts' ? 'UTS' : activeUploadType === 'uas' ? 'UAS' : 'Tugas';
      document.getElementById('uploadTugasTitle').textContent = '📋 Detail ' + typeLabel;
    });
    document.getElementById('cancelUploadStep')?.addEventListener('click', closeStudentUpload);

    document.getElementById('studentFileInput')?.addEventListener('change', function() {
      const fName = document.getElementById('studentFileName');
      const zone = document.getElementById('studentUploadZone');
      if (this.files.length > 0) {
        const f = this.files[0];
        const sizeMB = (f.size / 1024 / 1024).toFixed(1);
        fName.textContent = '📎 ' + f.name + ' (' + sizeMB + ' MB)';
        fName.style.display = 'block';
        zone.classList.add('has-file');
      }
    });

    document.getElementById('closeStudentUpload')?.addEventListener('click', closeStudentUpload);
    document.getElementById('cancelStudentUpload')?.addEventListener('click', closeStudentUpload);
    studentUploadModal?.addEventListener('click', (e) => { if (e.target === studentUploadModal) closeStudentUpload(); });

    document.getElementById('submitStudentUpload')?.addEventListener('click', () => {
      if (!activeUploadTugas) return;
      const fInput = document.getElementById('studentFileInput');
      if (!fInput || !fInput.files.length) { alert('Pilih file terlebih dahulu!'); return; }
      const file = fInput.files[0];
      const now = new Date();
      const waktu = now.toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}) + ', ' + now.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
      if (!TUGAS_SUBMISSIONS[activeUploadTugas.judul]) TUGAS_SUBMISSIONS[activeUploadTugas.judul] = [];
      const existing = TUGAS_SUBMISSIONS[activeUploadTugas.judul].find(s => s.nim === (user.nim || '2024001'));
      if (existing) { existing.file = file.name; existing.waktu = waktu; }
      else {
        TUGAS_SUBMISSIONS[activeUploadTugas.judul].push({ nama: user.nama || 'Mahasiswa', nim: user.nim || '2024001', file: file.name, waktu, nilai: null });
      }
      activeUploadTugas.status = 'Sudah';
      closeStudentUpload();
      renderMain();
    });

    // === DOSEN: Tugas Grading ===
    const gradingModal = document.getElementById('gradingModal');
    let activeGradeTugas = null;

    function closeGrading() { if (gradingModal) gradingModal.style.display = 'none'; }

    function renderGradingList() {
      const list = document.getElementById('gradingList');
      if (!list || !activeGradeTugas) return;
      const subs = TUGAS_SUBMISSIONS[activeGradeTugas.judul] || [];
      if (subs.length === 0) {
        list.innerHTML = '<p style="color:hsl(215 15% 55%);font-size:0.78rem;text-align:center;padding:10px">Belum ada mahasiswa yang mengumpulkan tugas.</p>';
        return;
      }
      list.innerHTML = subs.map((s, i) => {
        const ext = s.file ? s.file.split('.').pop().toLowerCase() : '';
        const canPreview = ext === 'pdf' || ext === 'doc' || ext === 'docx';
        const fileAction = !s.file ? '' : (canPreview
          ? '<button class="el-file-preview-btn" data-file="'+s.file+'" data-student="'+s.nama+'">👁 Baca</button>'
          : '<button class="el-file-download-btn" data-file="'+s.file+'">📥 Unduh</button>');
        return `
        <div class="el-grade-row">
          <div class="el-grade-student">
            <div class="el-grade-avatar">${s.nama.split(' ').map(n=>n[0]).join('').substring(0,2)}</div>
            <div>
              <span class="el-grade-name">${s.nama}</span>
              <span class="el-grade-nim">${s.nim}</span>
            </div>
          </div>
          <div class="el-grade-file ${s.file ? '' : 'empty'}">
            ${s.file ? '📎 '+s.file : '<span style="color:#ef4444">✗ Belum submit</span>'}
            ${s.waktu ? '<br><small style="color:hsl(215 15% 55%)">'+s.waktu+'</small>' : ''}
            ${fileAction}
          </div>
          <div class="el-grade-input-wrap">
            <input type="number" class="el-grade-input" data-si="${i}" min="0" max="100" placeholder="—" value="${s.nilai !== null && s.nilai !== undefined ? s.nilai : ''}" ${!s.file ? 'disabled' : ''} />
            <span class="el-grade-max">/100</span>
          </div>
        </div>`;
      }).join('');

      // Bind preview buttons
      list.querySelectorAll('.el-file-preview-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          openFilePreview(btn.dataset.file, btn.dataset.student);
        });
      });
    }

    document.querySelectorAll('.el-grade-tugas').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const classId = parseInt(btn.dataset.classId);
        const tugasIdx = parseInt(btn.dataset.tugasIdx);
        const data = CLASS_CONTENT[classId];
        if (!data || !data.tugas[tugasIdx]) return;
        activeGradeTugas = data.tugas[tugasIdx];
        if (!TUGAS_SUBMISSIONS[activeGradeTugas.judul]) TUGAS_SUBMISSIONS[activeGradeTugas.judul] = [];
        document.getElementById('gradingTitle').textContent = '📊 ' + activeGradeTugas.judul;
        renderGradingList();
        gradingModal.style.display = 'flex';
      });
    });

    document.getElementById('closeGrading')?.addEventListener('click', closeGrading);
    gradingModal?.addEventListener('click', (e) => { if (e.target === gradingModal) closeGrading(); });

    document.getElementById('saveGrades')?.addEventListener('click', () => {
      if (!activeGradeTugas) return;
      const subs = TUGAS_SUBMISSIONS[activeGradeTugas.judul] || [];
      document.querySelectorAll('.el-grade-input').forEach(inp => {
        const si = parseInt(inp.dataset.si);
        if (subs[si] && inp.value !== '') {
          subs[si].nilai = parseInt(inp.value);
        }
      });
      // Calculate average for the tugas item
      const graded = subs.filter(s => s.nilai !== null && s.nilai !== undefined);
      if (graded.length > 0) {
        activeGradeTugas.nilai = Math.round(graded.reduce((a,s) => a + s.nilai, 0) / graded.length);
      }
      closeGrading();
      renderMain();
    });
  }

  container.innerHTML = `
  <a href="#dashMain" class="skip-to-content" aria-label="Langsung ke konten utama">Skip to content</a>
  <div class="dash elearning" role="application" aria-label="E-Learning - Sistem Pembelajaran Online">
    ${buildSidebar(user)}
    <div class="mobile-sidebar-overlay" id="sidebarOverlay" aria-hidden="true"></div>
    ${buildTopbar(user)}
    <main class="dash-content" id="dashMain" role="main" aria-label="Konten utama E-Learning"></main>
  </div>`;

  renderMain();

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
    hamburger?.setAttribute('aria-expanded', 'false');
  });

  document.querySelectorAll('.sidebar-link[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = link.dataset.page;
      document.querySelectorAll('.sidebar-link').forEach(l => { l.classList.remove('active'); l.removeAttribute('aria-current'); });
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
      sidebar?.classList.remove('open');
      overlay?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      courseState = null;
      currentPage = pageId;
      renderMain();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar?.classList.contains('open')) {
      sidebar.classList.remove('open');
      overlay?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      hamburger?.focus();
    }
  });

  document.getElementById('logoutBtn')?.addEventListener('click', () => logout());
}
