// ============================================
// STIA BAYUANGGA - Dashboard Page
// Shared layout with role-specific content
// ============================================

import { CAMPUS, USERS, JADWAL, MATA_KULIAH, NILAI, KELAS_LIST, TUGAS_LIST, getInitials, getDeadlineStatus , DOSEN_LIST, KURIKULUM_DATA, KRS_DATA, ABSENSI_DATA, EVALUASI_DATA, JADWAL_UTS_UAS, DOSEN_KELAS_MAHASISWA, DOSEN_BIMBINGAN, KALENDER_AKADEMIK, WISUDA_DATA, SURAT_TEMPLATES, generatePertemuanDates, formatTanggalShort, formatTanggalFull} from '../../js/data.js';
import { getUser, logout } from '../../js/app.js';
import { bulkSaveAbsensi, bulkSaveNilai, fetchAbsensi, fetchKHS } from '../../js/api.js';

// ---- Global JADWAL_DUMMY initialization (shared by BAP & Mahasiswa) ----
function initJadwalDummy() {
  if (window.JADWAL_DUMMY && window.JADWAL_DUMMY.length > 0) return; // Already initialized

  const days = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const timeSlots = [
    { mulai:'07:30', selesai:'09:10' },
    { mulai:'09:20', selesai:'11:00' },
    { mulai:'11:10', selesai:'12:50' },
    { mulai:'13:00', selesai:'14:40' },
    { mulai:'14:50', selesai:'16:30' }
  ];
  const niagaRooms = ['RN-101','RN-102','RN-103','RN-104','RN-105'];
  const negaraRooms = ['RA-201','RA-202','RA-203','RA-204','RA-205'];
  const labRooms = ['LAB-K1','LAB-K2'];
  const onlineCodes = ['MDK 121','MDK 220','MDK 200','ANA 154'];
  const hybridCodes = ['ANA 140','MDK 135','MDK 124','MDK 127','ANA 147','ANA 159','ANA 160','MDK 129'];
  const labCodes = ['ANI 131','ANI 132','ANI 249','MDK 220','ANA 154'];
  const skipCodes = ['ANI 180','ANA 180','MDK 129'];

  window.JADWAL_DUMMY = [];
  let idCounter = 1;

  ['niaga','negara'].forEach(prodi => {
    const d = KURIKULUM_DATA[prodi];
    if (!d) return;
    const rooms = prodi === 'niaga' ? niagaRooms : negaraRooms;
    let dayIdx = 0;
    let slotIdx = 0;
    let roomIdx = 0;

    d.semester.forEach(sem => {
      const kelas = sem.no <= 2 ? 'A' : sem.no <= 4 ? 'B' : sem.no <= 6 ? 'C' : 'D';
      sem.mk.forEach(mk => {
        if (skipCodes.includes(mk.kode)) return;
        const isOnline = onlineCodes.includes(mk.kode);
        const isHybrid = hybridCodes.includes(mk.kode);
        const isLab = labCodes.includes(mk.kode);
        const tipe = isOnline ? 'Online' : isHybrid ? 'Hybrid' : 'Offline';
        let ruang;
        if (isOnline) ruang = '\u2014';
        else if (isLab) ruang = labRooms[roomIdx % labRooms.length];
        else ruang = rooms[roomIdx % rooms.length];
        const dosenName = mk.dosen === '-' ? '-' : mk.dosen;
        JADWAL_DUMMY.push({
          id: idCounter++,
          prodi,
          semester: sem.no,
          kodeMK: mk.kode,
          namaMK: mk.nama,
          dosen: dosenName,
          hari: days[dayIdx % days.length],
          jamMulai: timeSlots[slotIdx % timeSlots.length].mulai,
          jamSelesai: timeSlots[slotIdx % timeSlots.length].selesai,
          ruang,
          tipeKelas: tipe,
          kelas,
          sks: mk.sks,
          modePertemuan: Array.from({length:14}, (_,pi) => {
            if (isOnline) return 'online';
            if (isHybrid) return pi % 2 === 0 ? 'offline' : 'online';
            return [3,6,10].includes(pi) ? 'online' : 'offline';
          })
        });
        slotIdx++;
        if (slotIdx % timeSlots.length === 0) dayIdx++;
        roomIdx++;
      });
    });
  });
}
// Initialize immediately so JADWAL_DUMMY is ready for all roles
initJadwalDummy();

// Load persisted jadwal pertemuan from backend and merge into JADWAL_DUMMY
async function loadSavedJadwalPertemuan() {
  try {
    const resp = await fetch('/api/jadwal-pertemuan/all');
    if (!resp.ok) return;
    const json = await resp.json();
    if (!json.data || json.data.length === 0) return;

    // Group by kodeMK (from kode_mk direct field OR mata_kuliah.kode) + kelas
    json.data.forEach(jp => {
      const kodeMK = jp.kode_mk || jp.mata_kuliah?.kode || '';
      if (!kodeMK) return;

      // Find matching JADWAL_DUMMY entry — try exact prodi+kelas match first, then fallback
      const entry = JADWAL_DUMMY.find(j =>
        (j.kodeMK === kodeMK || j.kodeMK.replace(/\s+/g,'') === kodeMK.replace(/\s+/g,''))
        && j.kelas === (jp.kelas || 'B')
      ) || JADWAL_DUMMY.find(j =>
        j.kodeMK === kodeMK || j.kodeMK.replace(/\s+/g,'') === kodeMK.replace(/\s+/g,'')
      );

      if (!entry) return;

      const pi = jp.pertemuan - 1; // Convert 1-based to 0-based
      if (pi < 0 || pi >= 14) return;

      // Merge mode
      if (jp.mode) entry.modePertemuan[pi] = jp.mode;

      // Merge customSchedule
      if (!entry.customSchedule) entry.customSchedule = {};
      entry.customSchedule[pi] = {
        date: jp.tanggal,
        start: jp.jam_mulai,
        end: jp.jam_selesai,
        note: jp.catatan || '',
        mode: jp.mode || 'offline'
      };
    });

    console.log(`✅ Loaded ${json.data.length} saved jadwal pertemuan from database`);
  } catch (err) {
    console.warn('⚠️ Could not load saved jadwal from backend:', err.message);
  }
}
// Load on startup
loadSavedJadwalPertemuan();

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
      { icon: I.clipboard, text: 'KRS', id: 'krs' },
      { icon: I.award, text: 'KHS', id: 'khs' },
      { icon: I.calendar, text: 'Jadwal Kuliah', id: 'jadwal' },
      { icon: I.checkCircle, text: 'Absensi', id: 'absensi' },
      { icon: I.barChart, text: 'Nilai', id: 'nilai' },
    ]},
    { label: 'Lainnya', items: [
      { icon: I.fileText, text: 'Evaluasi Kuliah', id: 'evaluasi' },
      { icon: I.trendUp, text: 'Perkembangan', id: 'perkembangan' },
      { icon: I.users, text: 'Profil Saya', id: 'data' },
    ]},
  ],
  dosen: [
    { label: 'SIAKAD', items: [
      { icon: I.home, text: 'Dashboard', id: 'home', active: true },
      { icon: I.calendar, text: 'Jadwal Mengajar', id: 'jadwal-dosen' },
      { icon: I.barChart, text: 'Rekap Nilai', id: 'rekap-nilai' },
    ]},
    { label: 'Lainnya', items: [
      { icon: I.fileText, text: 'Bimbingan PA', id: 'bimbingan' },
      { icon: I.users, text: 'Profil Saya', id: 'profil-dosen' },
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
      { icon: I.users, text: 'Data Dosen', id: 'dosen' },
      { icon: I.barChart, text: 'Statistik Akademik', id: 'statistik' },
      { icon: I.clipboard, text: 'Transkrip', id: 'transkrip' },
      { icon: I.fileText, text: 'Kurikulum', id: 'kurikulum' },
    ]},
    { label: 'Administrasi', items: [
      { icon: I.calendar, text: 'Manajemen Jadwal', id: 'jadwal-manage' },
      { icon: I.checkCircle, text: 'Validasi KRS', id: 'validasi-krs' },
      { icon: I.checkCircle, text: 'Rekap Absensi', id: 'rekap-absensi' },
      { icon: I.fileText, text: 'Surat Menyurat', id: 'surat' },
      { icon: I.calendar, text: 'Kalender Akademik', id: 'kalender' },
      { icon: I.award, text: 'Wisuda', id: 'wisuda' },
      { icon: I.users, text: 'Bimbingan PA', id: 'bimbingan-pa' },
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
        <p>Semester Genap ${new Date().getFullYear()} — ${ROLE_LABELS[user.role]}</p>
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
  // Derive today's schedule from KRS data
  const dayNames = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const todayName = dayNames[new Date().getDay()];
  const todaySchedule = KRS_DATA.mataKuliah.filter(m => m.waktu.startsWith(todayName)).map(m => {
    const jam = m.waktu.split(', ')[1] || m.waktu;
    return { jam, mk: m.nama, ruang: m.ruang || 'TBA', dosen: m.dosen };
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

        <!-- Jadwal Hari Ini — derived from KRS -->
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

// ============================================
// MAHASISWA SUB-PAGES
// ============================================

function mhsInfoHeader(user) {
  return `
    <div class="dash-card" style="margin-bottom:20px;">
      <div style="padding:20px;display:flex;flex-wrap:wrap;gap:24px;background:linear-gradient(135deg,hsl(152 60% 96%),hsl(180 40% 96%));border-radius:12px;">
        <div style="flex:1;min-width:200px;">
          <div style="font-size:0.72rem;color:hsl(215 15% 55%);font-weight:600;margin-bottom:2px;">Mahasiswa</div>
          <div style="font-size:0.95rem;font-weight:700;">${user.nim} — ${user.nama}</div>
          <div style="margin-top:8px;display:grid;grid-template-columns:auto 1fr;gap:2px 12px;font-size:0.78rem;">
            <span style="font-weight:600;">Fakultas</span><span>: Ilmu Administrasi</span>
            <span style="font-weight:600;">Jurusan</span><span>: ${user.prodi}</span>
            <span style="font-weight:600;">Semester</span><span>: ${user.semester}</span>
            <span style="font-weight:600;">Basis</span><span>: ${KRS_DATA.basis}</span>
          </div>
        </div>
        <div style="flex:1;min-width:200px;">
          <div style="display:grid;grid-template-columns:auto 1fr;gap:2px 12px;font-size:0.78rem;margin-top:20px;">
            <span style="font-weight:600;">Dosen PA</span><span>: ${KRS_DATA.dosenPA}</span>
            <span style="font-weight:600;">NIP Dosen</span><span>: ${KRS_DATA.nipDosenPA}</span>
            <span style="font-weight:600;">Periode Masuk</span><span>: ${KRS_DATA.periodeMasuk}</span>
          </div>
        </div>
      </div>
    </div>`;
}

// ---------- KRS Page ----------
function krsContent(user) {
  const totalSks = KRS_DATA.mataKuliah.reduce((a,m) => a + m.sks, 0);
  return mhsInfoHeader(user) + `
    ${KRS_DATA.statusKRS === 'Divalidasi' ? `
      <div style="background:hsl(0 70% 95%);border:1px solid hsl(0 50% 85%);border-radius:10px;padding:14px 18px;margin-bottom:18px;text-align:center;">
        <div style="font-size:0.82rem;font-weight:600;color:hsl(0 60% 40%);">KRS telah divalidasi oleh ${KRS_DATA.validatedBy} pada tanggal ${KRS_DATA.validatedAt}</div>
        <div style="font-size:0.72rem;color:hsl(0 40% 50%);margin-top:4px;">Untuk membuka validasi/kunci silahkan hubungi Dosen PA (Pembimbing Akademik) / Ka Prodi</div>
      </div>` : ''}
    <div class="dash-card">
      <div class="dash-card-head" style="background:linear-gradient(135deg,hsl(200 60% 25%),hsl(180 50% 35%));color:white;border-radius:10px 10px 0 0;padding:12px 18px;display:flex;align-items:center;justify-content:space-between;">
        <h3 style="margin:0;font-size:0.9rem;">📋 Kartu Rencana Studi (KRS) — Semester ${KRS_DATA.semester}</h3>
        <button style="background:white;border:none;border-radius:6px;padding:4px 10px;font-size:0.72rem;cursor:pointer;">🖨️ Cetak</button>
      </div>
      <div class="dash-card-body" style="padding:0;">
        <div style="overflow-x:auto;">
          <table class="sch-table" style="width:100%;">
            <thead><tr style="background:hsl(215 20% 95%);">
              <th style="width:40px;">No.</th><th>Kode</th><th>Nama Matakuliah</th><th>Seksi</th><th>SKS</th><th>Waktu</th><th>Dosen</th><th>Jenis Kelas</th>
            </tr></thead>
            <tbody>
              ${KRS_DATA.mataKuliah.map((m,i) => `<tr>
                <td>${i+1}.</td><td><strong>${m.kode}</strong></td><td>${m.nama}</td><td>${m.seksi}</td>
                <td style="text-align:center;">${m.sks}</td><td style="font-size:0.76rem;">${m.waktu}</td><td style="font-size:0.76rem;">${m.dosen}</td><td>${m.jenisKelas}</td>
              </tr>`).join('')}
              <tr style="background:hsl(215 20% 95%);font-weight:700;"><td colspan="4" style="text-align:center;">Total SKS</td><td style="text-align:center;">${totalSks}</td><td colspan="3"></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}

// ---------- KHS Page ----------
function khsContent(user, selectedSem) {
  // Map semester data
  const pastSemesters = [...new Set(NILAI.map(n => n.semester))].sort();
  const krsSemester = user.semester || 4;
  const krsCourses = KRS_DATA.mataKuliah.map(m => ({
    kode: m.kode, nama: m.nama, sks: m.sks, nilai: '—', bobot: 0, semester: krsSemester, kelas: m.seksi, pending: true
  }));
  const allSemesters = [...new Set([...pastSemesters, krsSemester])].sort();
  const activeSem = selectedSem || allSemesters[allSemesters.length - 1];
  const semNilai = activeSem === krsSemester ? krsCourses : NILAI.filter(n => n.semester === activeSem);
  const gradedItems = semNilai.filter(n => !n.pending);
  const totalSks = semNilai.reduce((a,n) => a + n.sks, 0);
  const totalBobot = gradedItems.reduce((a,n) => a + n.sks * n.bobot, 0);
  const gradedSks = gradedItems.reduce((a,n) => a + n.sks, 0);
  const ips = gradedSks > 0 ? (totalBobot / gradedSks).toFixed(2) : '—';

  // Year/Semester mapping
  const startYear = parseInt(KRS_DATA.periodeMasuk) || 2023;
  const uniqueTahun = [];
  const nowYear = new Date().getFullYear();
  for (let y = startYear; y <= nowYear; y++) {
    uniqueTahun.push(`${y}`);
  }
  const yearIdx = Math.floor((activeSem - 1) / 2);
  const activeTahun = `${startYear + yearIdx}`;
  const activeJenis = activeSem % 2 === 1 ? 'Ganjil' : 'Genap';

  const selectStyle = `appearance:none;-webkit-appearance:none;padding:7px 32px 7px 12px;border:1px solid hsl(215 20% 85%);border-radius:8px;font-size:0.8rem;font-weight:600;color:hsl(215 20% 30%);background:white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") no-repeat right 10px center;cursor:pointer;min-width:140px;`;

  const emptyRow = semNilai.length === 0
    ? `<tr><td colspan="8" style="text-align:center;padding:28px;color:hsl(215 15% 55%);font-size:0.85rem;">Tidak ada data KHS untuk periode ini</td></tr>` : '';

  return mhsInfoHeader(user) + `
    <div style="display:flex;gap:12px;margin-bottom:16px;align-items:center;flex-wrap:wrap;">
      <div style="display:flex;align-items:center;gap:6px;">
        <label style="font-size:0.75rem;font-weight:600;color:hsl(215 15% 50%);">Tahun</label>
        <select id="khsTahun" style="${selectStyle}">
          ${uniqueTahun.map(t => `<option value="${t}"${t === activeTahun ? ' selected' : ''}>${t}</option>`).join('')}
        </select>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <label style="font-size:0.75rem;font-weight:600;color:hsl(215 15% 50%);">Semester</label>
        <select id="khsSemester" style="${selectStyle}">
          <option value="Ganjil"${activeJenis === 'Ganjil' ? ' selected' : ''}>Ganjil</option>
          <option value="Genap"${activeJenis === 'Genap' ? ' selected' : ''}>Genap</option>
        </select>
      </div>
    </div>
    <div class="dash-card">
      <div class="dash-card-head" style="background:linear-gradient(135deg,hsl(200 60% 25%),hsl(180 50% 35%));color:white;border-radius:10px 10px 0 0;padding:12px 18px;display:flex;align-items:center;justify-content:space-between;">
        <h3 style="margin:0;font-size:0.9rem;">✅ Kartu Hasil Studi — ${activeJenis} ${activeTahun}</h3>
        <button style="background:white;border:none;border-radius:6px;padding:4px 10px;font-size:0.72rem;cursor:pointer;">🖨️ Cetak</button>
      </div>
      <div class="dash-card-body" style="padding:0;">
        <div style="overflow-x:auto;">
          <table class="sch-table" style="width:100%;">
            <thead><tr style="background:hsl(215 20% 95%);">
              <th style="width:40px;">No.</th><th>Kode</th><th>Nama Matakuliah</th><th>Kelas</th><th>SKS</th><th>Nilai</th><th>Lulus</th><th>Detail</th>
            </tr></thead>
            <tbody>
              ${emptyRow || semNilai.map((n,i) => {
                const isPending = n.pending;
                const badgeClass = isPending ? '' : (n.nilai.startsWith('A') ? 'success' : n.nilai.startsWith('B') ? 'blue' : 'warning');
                const lulusText = isPending ? '<span style="color:hsl(30 70% 50%);font-size:0.72rem;">Belum</span>' : (n.bobot >= 2.0 ? 'L' : 'TL');
                return `<tr${isPending ? ' style="background:hsl(45 80% 97%);"' : ''}>
                <td>${i+1}.</td><td><strong>${n.kode}</strong></td><td>${n.nama}${isPending ? ' <span style="font-size:0.65rem;color:hsl(30 70% 50%);font-weight:600;">📋 KRS</span>' : ''}</td><td>${n.kelas || 'EU101'}</td>
                <td style="text-align:center;">${n.sks}</td>
                <td style="text-align:center;">${isPending ? '<span style="color:hsl(215 15% 60%);font-size:0.78rem;">—</span>' : `<span class="badge-sm ${badgeClass}">${n.nilai}</span>`}</td>
                <td style="text-align:center;">${lulusText}</td>
                <td style="text-align:center;"><button class="khs-detail-btn" data-kode="${n.kode}" data-nama="${n.nama}" data-nilai="${n.nilai || ''}" data-sks="${n.sks}" data-pending="${isPending}" style="font-size:0.65rem;padding:3px 10px;border-radius:4px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;white-space:nowrap;">📊 Detail</button></td>
              </tr>`;
              }).join('')}
              ${semNilai.length ? `<tr style="background:hsl(215 20% 95%);font-weight:700;"><td colspan="4" style="text-align:center;">Total</td><td style="text-align:center;">${totalSks}</td><td style="text-align:center;">${gradedSks > 0 ? totalBobot.toFixed(1) : '—'}</td><td></td><td></td></tr>` : ''}
            </tbody>
          </table>
        </div>
        ${semNilai.length ? `<div style="text-align:center;padding:16px;font-weight:700;font-size:1rem;background:hsl(215 20% 97%);border-top:1px solid hsl(215 20% 90%);">
          Indeks Prestasi Semester = ${ips}${ips === '—' ? ' <span style="font-size:0.78rem;font-weight:500;color:hsl(215 15% 55%);">(nilai belum diinput dosen)</span>' : ''}
        </div>` : ''}
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
            <td>${user.totalSks + totalSks}</td><td>${user.totalSks}</td><td style="color:hsl(200 70% 40%);">${user.ipk}</td>
          </tr></tbody>
        </table>
      </div>
    </div>`;
}

// Wire up KHS filter dropdowns
function initKHSPage(user, mainContent, isoFooter) {
  const startYear = parseInt(KRS_DATA.periodeMasuk) || 2023;
  function getSelectedSem() {
    const tahunEl = document.getElementById('khsTahun');
    const jenisEl = document.getElementById('khsSemester');
    if (!tahunEl || !jenisEl) return null;
    const yearOffset = parseInt(tahunEl.value) - startYear;
    return jenisEl.value === 'Ganjil' ? yearOffset * 2 + 1 : yearOffset * 2 + 2;
  }
  const handler = () => {
    const sem = getSelectedSem();
    if (sem && mainContent) {
      mainContent.innerHTML = khsContent(user, sem) + isoFooter;
      initKHSPage(user, mainContent, isoFooter);
    }
  };
  const t = document.getElementById('khsTahun');
  const s = document.getElementById('khsSemester');
  if (t) t.addEventListener('change', handler);
  if (s) s.addEventListener('change', handler);

  // KHS Detail button handlers
  document.querySelectorAll('.khs-detail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = document.getElementById('khsDetailPanel');
      if (!panel) return;
      const kode = btn.dataset.kode;
      const nama = btn.dataset.nama;
      const nilai = btn.dataset.nilai;
      const sks = btn.dataset.sks;
      const isPending = btn.dataset.pending === 'true';

      // Generate component scores based on final grade
      let absensi = 0, tugas = 0, quiz = 0, uts = 0, uas = 0;
      if (!isPending && nilai) {
        const base = nilai === 'A' ? 90 : nilai === 'A-' ? 83 : nilai === 'B+' ? 78 : nilai === 'B' ? 72 : nilai === 'B-' ? 67 : nilai === 'C+' ? 62 : nilai === 'C' ? 57 : 45;
        absensi = Math.min(100, base + Math.floor(Math.random()*8));
        tugas = Math.min(100, base + Math.floor(Math.random()*10) - 3);
        quiz = Math.min(100, base + Math.floor(Math.random()*10) - 5);
        uts = Math.min(100, base + Math.floor(Math.random()*8) - 2);
        uas = Math.min(100, base + Math.floor(Math.random()*10) - 3);
      }

      function scoreColor(v) { return v >= 85 ? 'hsl(150 60% 45%)' : v >= 70 ? 'hsl(200 55% 50%)' : v >= 55 ? 'hsl(40 80% 50%)' : 'hsl(0 55% 52%)'; }
      function scoreBar(label, emoji, value, weight) {
        const color = scoreColor(value);
        return `<div style="margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span style="font-size:0.8rem;font-weight:600;">${emoji} ${label} <span style="font-size:0.68rem;color:hsl(215 15% 55%);">(${weight})</span></span>
            <span style="font-size:0.85rem;font-weight:800;color:${color};">${isPending ? '\u2014' : value}</span>
          </div>
          <div style="height:8px;background:hsl(215 20% 92%);border-radius:4px;overflow:hidden;">
            <div style="height:100%;width:${isPending ? 0 : value}%;background:${color};border-radius:4px;transition:width 0.5s ease;"></div>
          </div>
        </div>`;
      }

      const nilaiAkhir = isPending ? '\u2014' : Math.round(uts * 0.3 + uas * 0.4 + tugas * 0.3);
      const nilaiColor = isPending ? 'hsl(215 15% 60%)' : scoreColor(nilaiAkhir);
      const hurufColor = !isPending && nilai ? (nilai.startsWith('A') ? 'hsl(150 60% 45%)' : nilai.startsWith('B') ? 'hsl(200 55% 50%)' : 'hsl(40 80% 50%)') : 'hsl(215 15% 60%)';

      panel.style.display = 'block';
      panel.innerHTML = `
        <div class="dash-card" style="overflow:hidden;border:1px solid hsl(215 20% 88%);">
          <div style="background:linear-gradient(135deg,hsl(210 55% 42%),hsl(200 50% 55%));padding:18px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
            <div>
              <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);">${kode} \u00b7 ${sks} SKS</div>
              <div style="font-size:1.1rem;font-weight:700;color:white;">\ud83d\udcca Detail Nilai \u2014 ${nama}</div>
            </div>
            <div style="display:flex;gap:10px;">
              <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:8px 16px;color:white;text-align:center;backdrop-filter:blur(4px);">
                <div style="font-size:0.55rem;opacity:0.7;">Nilai Akhir</div>
                <div style="font-size:1.2rem;font-weight:800;">${nilaiAkhir}</div>
              </div>
              <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:8px 16px;color:white;text-align:center;backdrop-filter:blur(4px);">
                <div style="font-size:0.55rem;opacity:0.7;">Grade</div>
                <div style="font-size:1.2rem;font-weight:800;">${isPending ? '\u2014' : nilai}</div>
              </div>
            </div>
          </div>
          <div class="dash-card-body" style="padding:20px 24px;">
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px;">
              <div>
                <div style="font-size:0.82rem;font-weight:700;margin-bottom:14px;color:hsl(215 20% 25%);">\ud83d\udccb Komponen Penilaian</div>
                ${scoreBar('Absensi / Kehadiran', '\u2705', absensi, '10%')}
                ${scoreBar('Tugas', '\ud83d\udcdd', tugas, '15%')}
                ${scoreBar('Quiz', '\u2753', quiz, '5%')}
                ${scoreBar('UTS (Ujian Tengah Semester)', '\ud83d\udcd6', uts, '30%')}
                ${scoreBar('UAS (Ujian Akhir Semester)', '\ud83d\udcda', uas, '40%')}
              </div>
              <div>
                <div style="font-size:0.82rem;font-weight:700;margin-bottom:14px;color:hsl(215 20% 25%);">\ud83d\udcca Ringkasan</div>
                <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
                  <div style="text-align:center;padding:14px;background:hsl(210 50% 96%);border-radius:8px;">
                    <div style="font-size:0.65rem;color:hsl(215 15% 50%);">Nilai Akhir</div>
                    <div style="font-size:1.4rem;font-weight:800;color:${nilaiColor};">${nilaiAkhir}</div>
                  </div>
                  <div style="text-align:center;padding:14px;background:hsl(150 50% 95%);border-radius:8px;">
                    <div style="font-size:0.65rem;color:hsl(150 40% 40%);">Grade</div>
                    <div style="font-size:1.4rem;font-weight:800;color:${hurufColor};">${isPending ? '\u2014' : nilai}</div>
                  </div>
                  <div style="text-align:center;padding:14px;background:hsl(200 50% 95%);border-radius:8px;">
                    <div style="font-size:0.65rem;color:hsl(200 40% 40%);">SKS</div>
                    <div style="font-size:1.4rem;font-weight:800;color:hsl(200 50% 40%);">${sks}</div>
                  </div>
                  <div style="text-align:center;padding:14px;background:${isPending ? 'hsl(40 50% 95%)' : 'hsl(150 50% 95%)'};border-radius:8px;">
                    <div style="font-size:0.65rem;color:hsl(215 15% 50%);">Status</div>
                    <div style="font-size:0.85rem;font-weight:800;color:${isPending ? 'hsl(40 80% 45%)' : 'hsl(150 60% 40%)'};">${isPending ? 'Belum Dinilai' : 'Lulus'}</div>
                  </div>
                </div>
                ${isPending ? '<div style="margin-top:14px;padding:12px 16px;background:hsl(45 80% 94%);border-left:4px solid hsl(40 80% 50%);border-radius:0 8px 8px 0;font-size:0.78rem;color:hsl(40 60% 35%);">\u26a0\ufe0f Nilai belum diinput oleh dosen. Komponen penilaian akan muncul setelah dosen menyelesaikan input nilai.</div>' : ''}
              </div>
            </div>
            <div style="margin-top:16px;text-align:right;">
              <button id="closeKhsDetail" style="font-size:0.78rem;padding:7px 20px;border-radius:6px;cursor:pointer;background:hsl(215 20% 92%);color:hsl(215 20% 35%);border:1px solid hsl(215 20% 82%);font-weight:600;">\u2716 Tutup</button>
            </div>
          </div>
        </div>`;
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('closeKhsDetail')?.addEventListener('click', () => {
        panel.style.display = 'none';
        panel.innerHTML = '';
      });
    });
  });
}

// ---------- Jadwal Full Page ----------
function jadwalContent(user) {
  const totalPertemuan = 14;
  const days = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];

  // Build per-day grouped data with P1-P14 detail
  const grouped = {};
  days.forEach(d => { grouped[d] = []; });

  const mhsProdi = (user.prodi || '').toLowerCase().includes('niaga') ? 'niaga' : 'negara';
  const mhsSemester = user.semester || 4;

  KRS_DATA.mataKuliah.forEach(m => {
    // Match by kodeMK + prodi + semester to find the exact JADWAL_DUMMY entry
    // (some MDK codes appear in both niaga and negara kurikulum)
    const jadwalEntry = JADWAL_DUMMY.find(j =>
      (j.kodeMK === m.kode || j.kodeMK.replace(/\s+/g,'') === m.kode.replace(/\s+/g,''))
      && j.prodi === mhsProdi && j.semester === mhsSemester
    ) || JADWAL_DUMMY.find(j => j.kodeMK === m.kode || j.kodeMK.replace(/\s+/g,'') === m.kode.replace(/\s+/g,''));

    // Use JADWAL_DUMMY's hari/jam (source of truth, same as BAP) 
    // Fallback to KRS_DATA if no JADWAL_DUMMY entry
    const hari = (jadwalEntry && jadwalEntry.hari) || m.waktu.split(', ')[0];
    const jam = jadwalEntry ? (jadwalEntry.jamMulai + '-' + jadwalEntry.jamSelesai) : (m.waktu.split(', ')[1] || m.waktu);
    const ruang = (jadwalEntry && jadwalEntry.ruang) || m.ruang || 'TBA';
    const dates = generatePertemuanDates(hari, totalPertemuan);

    const modes = (jadwalEntry && jadwalEntry.modePertemuan) || m.modePertemuan || Array(14).fill('offline');
    const customSchedule = (jadwalEntry && jadwalEntry.customSchedule) || {};
    const onlineCount = modes.filter(x => x === 'online').length;
    const offlineCount = modes.filter(x => x === 'offline').length;

    if (grouped[hari]) {
      grouped[hari].push({
        kode: m.kode, nama: m.nama, jam, seksi: m.seksi, ruang,
        dosen: m.dosen, sks: m.sks, onlineCount, offlineCount, modes, dates, customSchedule
      });
    }
  });

  // Render BAP-style P1-P14 card grid
  function renderPertemuanGrid(mk, mkIdx) {
    return mk.dates.map((d, pi) => {
      const mode = mk.modes[pi] || 'offline';
      const isOnline = mode === 'online';
      const custom = mk.customSchedule[pi];
      const origISO = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
      const isRescheduled = custom && custom.date && custom.date !== origISO;
      const today = new Date(); today.setHours(0,0,0,0);
      const displayDate = isRescheduled ? new Date(custom.date + 'T00:00:00') : d;
      const isPast = displayDate < today;
      const isToday = displayDate.getDate() === today.getDate() && displayDate.getMonth() === today.getMonth() && displayDate.getFullYear() === today.getFullYear();

      const bg = isRescheduled ? 'linear-gradient(135deg,hsl(40 65% 92%),hsl(40 60% 88%))'
        : isToday ? 'linear-gradient(135deg,hsl(45 85% 90%),hsl(45 80% 85%))'
        : isOnline ? 'linear-gradient(135deg,hsl(150 50% 92%),hsl(150 45% 88%))'
        : isPast ? 'linear-gradient(135deg,hsl(215 15% 95%),hsl(215 12% 92%))'
        : 'linear-gradient(135deg,hsl(210 40% 95%),hsl(210 35% 91%))';
      const borderColor = isRescheduled ? 'hsl(40 65% 65%)' : isToday ? 'hsl(45 80% 55%)' : isOnline ? 'hsl(150 55% 70%)' : isPast ? 'hsl(215 15% 85%)' : 'hsl(210 40% 82%)';
      const icon = isRescheduled ? '🔄' : isOnline ? '🌐' : '🏫';
      const label = isRescheduled ? 'Pengganti' : isOnline ? 'Online' : 'Offline';
      const labelColor = isRescheduled ? 'hsl(40 65% 35%)' : isOnline ? 'hsl(150 55% 35%)' : isPast ? 'hsl(215 10% 55%)' : 'hsl(210 45% 40%)';
      const dateColor = isRescheduled ? 'hsl(40 60% 30%)' : isOnline ? 'hsl(150 50% 32%)' : isPast ? 'hsl(215 10% 55%)' : 'hsl(210 40% 38%)';
      const timeStr = custom && custom.start ? custom.start + '-' + custom.end : mk.jam;
      const noteStr = custom && custom.note ? custom.note : '';
      const todayBorder = isToday ? 'box-shadow:0 0 0 2px hsl(45 80% 50%);' : '';
      const tooltipParts = [formatTanggalFull(displayDate), isOnline ? 'Online (E-Learning)' : 'Offline (Tatap Muka)', 'Jam: ' + timeStr];
      if (isRescheduled) tooltipParts.push('🔄 Kelas Pengganti');
      if (noteStr) tooltipParts.push('📝 ' + noteStr);

      return `<div style="background:${bg};border:1px solid ${borderColor};border-radius:8px;padding:5px 3px;text-align:center;position:relative;transition:all 0.2s ease;${todayBorder}" title="${tooltipParts.join(' — ')}">
        <div style="font-size:0.5rem;font-weight:800;color:hsl(210 30% 45%);">P${pi+1}</div>
        <div style="font-size:0.6rem;font-weight:700;color:${dateColor};margin:1px 0;">${formatTanggalShort(displayDate)}</div>
        <div style="font-size:0.48rem;color:hsl(215 20% 50%);margin-bottom:1px;">${timeStr}</div>
        <div style="font-size:0.65rem;">${icon}</div>
        <div style="font-size:0.46rem;font-weight:700;color:${labelColor};margin-top:1px;">${label}</div>
        ${noteStr ? '<div style="position:absolute;top:-4px;right:-4px;width:14px;height:14px;border-radius:50%;background:hsl(40 85% 55%);font-size:0.42rem;line-height:14px;color:white;font-weight:800;" title="📝 ' + noteStr + '">📝</div>' : ''}
      </div>`;
    }).join('');
  }

  const totalMK = Object.values(grouped).reduce((a, arr) => a + arr.length, 0);

  return mhsInfoHeader(user) + `
    <div class="dash-card">
      <div class="dash-card-head" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <h3 style="margin:0;">📅 Jadwal Perkuliahan — ${KRS_DATA.semester}</h3>
        <div style="display:flex;gap:10px;align-items:center;font-size:0.72rem;flex-wrap:wrap;">
          <span style="display:inline-flex;align-items:center;gap:4px;background:hsl(215 20% 94%);padding:3px 10px;border-radius:12px;font-weight:600;">📚 ${totalMK} MK</span>
          <span style="display:inline-flex;align-items:center;gap:4px;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:hsl(210 55% 50%);"></span> Offline</span>
          <span style="display:inline-flex;align-items:center;gap:4px;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:hsl(150 60% 45%);"></span> Online</span>
          <span style="display:inline-flex;align-items:center;gap:4px;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:hsl(40 85% 55%);"></span> Pengganti</span>
        </div>
      </div>
      <div class="dash-card-body" style="padding:0;">
        ${days.map(d => grouped[d].length ? `
          <div style="padding:10px 18px 6px;font-weight:700;font-size:0.88rem;background:linear-gradient(135deg,hsl(215 25% 94%),hsl(215 20% 97%));border-bottom:1px solid hsl(215 20% 90%);display:flex;align-items:center;gap:8px;">
            <span style="background:hsl(210 55% 50%);color:white;padding:2px 10px;border-radius:6px;font-size:0.7rem;">${d}</span>
            <span style="font-size:0.68rem;font-weight:400;color:hsl(215 15% 55%);">${grouped[d].length} mata kuliah</span>
          </div>
          ${grouped[d].map((mk, mkIdx) => {
            const [start,end] = mk.jam.split('-');
            const rowId = 'mhs-jadwal-' + d + '-' + mkIdx;
            return `
            <div style="border-bottom:1px solid hsl(215 20% 92%);">
              <div class="mhs-jadwal-row" data-target="${rowId}" style="display:grid;grid-template-columns:75px 1fr 40px 80px 55px 70px 1fr 32px;align-items:center;padding:10px 18px;gap:8px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='hsl(215 20% 97%)'" onmouseout="this.style.background=''" onclick="const el=document.getElementById('${rowId}');if(el){el.style.display=el.style.display==='none'?'block':'none';this.querySelector('.expand-icon').textContent=el.style.display==='none'?'▶':'▼'}">
                <span style="font-weight:700;font-size:0.76rem;color:hsl(210 55% 40%);">${mk.kode}</span>
                <span style="font-size:0.76rem;font-weight:500;">${mk.nama}</span>
                <span style="text-align:center;font-size:0.72rem;">${mk.sks}</span>
                <span style="font-size:0.72rem;color:hsl(215 20% 40%);">${start}-${end}</span>
                <span style="font-size:0.68rem;color:hsl(215 15% 50%);">${mk.ruang}</span>
                <span style="display:inline-flex;align-items:center;gap:4px;">
                  <span style="background:hsl(210 55% 92%);color:hsl(210 55% 38%);padding:1px 6px;border-radius:6px;font-size:0.58rem;font-weight:700;">🏫${mk.offlineCount}</span>
                  ${mk.onlineCount > 0 ? `<span style="background:hsl(150 55% 92%);color:hsl(150 55% 35%);padding:1px 6px;border-radius:6px;font-size:0.58rem;font-weight:700;">🌐${mk.onlineCount}</span>` : ''}
                </span>
                <span style="font-size:0.68rem;color:hsl(215 15% 45%);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${mk.dosen}</span>
                <span class="expand-icon" style="font-size:0.6rem;color:hsl(215 20% 55%);text-align:center;">▶</span>
              </div>
              <div id="${rowId}" style="display:none;padding:8px 18px 14px;background:hsl(215 18% 98%);border-top:1px solid hsl(215 20% 92%);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                  <span style="font-size:0.68rem;font-weight:600;color:hsl(210 30% 45%);">📆 Detail ${totalPertemuan} Pertemuan — ${mk.kode} ${mk.nama}</span>
                  <span style="display:inline-flex;gap:8px;font-size:0.62rem;">
                    <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:8px;height:8px;border-radius:2px;background:hsl(210 55% 50%);display:inline-block;"></span> Offline (🏫 ${mk.offlineCount})</span>
                    <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:8px;height:8px;border-radius:2px;background:hsl(150 60% 45%);display:inline-block;"></span> Online (🌐 ${mk.onlineCount})</span>
                  </span>
                </div>
                <div style="display:grid;grid-template-columns:repeat(14,1fr);gap:4px;">
                  ${renderPertemuanGrid(mk, mkIdx)}
                </div>
              </div>
            </div>`;
          }).join('')}
        ` : '').join('')}
      </div>
    </div>

    <div class="dash-card" style="margin-top:20px;">
      <div class="dash-card-head"><h3>📝 Jadwal UTS / UAS</h3></div>
      <div class="dash-card-body" style="padding:0;">
        <p style="padding:12px 18px 0;font-size:0.76rem;color:hsl(0 60% 45%);margin:0;">*)Pastikan tagihan yang berhubungan dengan ujian telah lunas dan presensi diatas 75%</p>
        ${JADWAL_UTS_UAS.map(j => `
          <div style="padding:10px 18px 2px;font-weight:700;font-size:0.82rem;background:hsl(215 20% 96%);border-bottom:1px solid hsl(215 20% 90%);">${j.tanggal}</div>
          <div style="overflow-x:auto;">
            <table class="sch-table" style="width:100%;">
              <thead><tr><th>Mulai</th><th>Selesai</th><th>Kode MK</th><th>Mata Kuliah</th><th>Sesi</th><th>Jenis Ujian</th><th>Kelompok</th></tr></thead>
              <tbody><tr><td>${j.mulai}</td><td>${j.selesai}</td><td style="font-weight:600;">${j.kode}</td><td>${j.nama}</td><td>${j.sesi}</td><td><span class="badge-sm ${j.jenis==='UTS'?'warning':'blue'}">${j.jenis}</span></td><td>${j.kelompok}</td></tr></tbody>
            </table>
          </div>`).join('')}
      </div>
    </div>`;
}

// ---------- Absensi Page ----------
function absensiContent(user) {
  // Build dynamic absensi from DOSEN_KELAS_MAHASISWA (single source of truth)
  const totalPertemuan = 14;
  const mhsNIM = user.nim || USERS.mahasiswa.nim;
  
  // Map KRS courses and cross-reference with DOSEN_KELAS_MAHASISWA for live kehadiran
  const absensiRows = KRS_DATA.mataKuliah.map(krs => {
    // Find matching dosen kelas entry
    let kehadiran = null;
    let tidakHadirPertemuan = [];
    
    for (const dk of DOSEN_KELAS_MAHASISWA) {
      const mhs = dk.mahasiswa.find(m => m.nim === mhsNIM);
      if (mhs && dk.kode.replace(/\s+/g,'') === krs.kode.replace(/\s+/g,'')) {
        kehadiran = mhs.kehadiran;
        break;
      }
      // Also match by nama matakuliah
      if (mhs && dk.nama.toLowerCase() === krs.nama.toLowerCase()) {
        kehadiran = mhs.kehadiran;
        break;
      }
    }
    
    // Fallback to ABSENSI_DATA if not found in DOSEN_KELAS_MAHASISWA
    if (kehadiran === null) {
      const absensiEntry = ABSENSI_DATA.find(a => a.kode === krs.kode);
      kehadiran = absensiEntry ? absensiEntry.presensiMhs : totalPertemuan;
      tidakHadirPertemuan = absensiEntry && absensiEntry.tidakHadirKe !== '-' 
        ? absensiEntry.tidakHadirKe.split(',').map(s => s.trim()) : [];
    } else {
      // Compute "tidak hadir ke" from kehadiran count using deterministic pattern
      const attendance = Array.from({length:totalPertemuan}, (_,j) => j < kehadiran ? '✓' : '✗');
      const nimCode = mhsNIM;
      for (let k = attendance.length - 1; k > 0; k--) {
        const j2 = Math.floor((nimCode.charCodeAt(nimCode.length-1) + k) % (k + 1));
        [attendance[k], attendance[j2]] = [attendance[j2], attendance[k]];
      }
      tidakHadirPertemuan = attendance.map((a, idx) => a === '✗' ? (idx+1).toString() : null).filter(Boolean);
    }
    
    const pct = Math.round(kehadiran / totalPertemuan * 100);
    const tidakHadirStr = tidakHadirPertemuan.length > 0 ? tidakHadirPertemuan.join(', ') : '-';
    
    return {
      kode: krs.kode,
      nama: krs.nama,
      kelas: krs.seksi || 'EU101',
      jenisKuliah: krs.nama.toLowerCase().includes('sistem informasi') ? 'Praktikum' : 'Teori',
      kel: 1,
      presensiMhs: kehadiran,
      presensiDosen: totalPertemuan,
      pctPresensi: pct,
      tidakHadirKe: tidakHadirStr
    };
  });

  return mhsInfoHeader(user) + `
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
              ${absensiRows.map((a,i) => `<tr>
                <td>${i+1}.</td><td><strong>${a.kode}</strong></td><td>${a.nama}</td><td>${a.kelas}</td>
                <td>${a.jenisKuliah}</td><td>${a.kel}</td>
                <td style="text-align:center;font-weight:600;">${a.presensiMhs}</td>
                <td style="text-align:center;">${a.presensiDosen}</td>
                <td style="text-align:center;"><span class="badge-sm ${a.pctPresensi >= 100 ? 'success' : a.pctPresensi >= 85 ? 'blue' : 'warning'}">${a.pctPresensi} %</span></td>
                <td style="text-align:center;color:${a.tidakHadirKe === '-' ? 'hsl(150 60% 40%)' : 'hsl(0 60% 50%)'};font-weight:600;">${a.tidakHadirKe}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
        <div style="padding:14px 18px;background:hsl(215 20% 97%);border-top:1px solid hsl(215 20% 90%);font-size:0.76rem;">
          <strong>Keterangan:</strong> Presensi mahasiswa dihitung secara real-time dari data kehadiran yang diinput dosen
        </div>
      </div>
    </div>`;
}

// ---------- Evaluasi Kuliah Page ----------
function evaluasiContent(user) {
  return mhsInfoHeader(user) + `
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
              ${EVALUASI_DATA.map((e,i) => `<tr>
                <td>${i+1}.</td><td><strong>${e.kode}</strong></td><td>${e.nama}</td><td>${e.kelas}</td>
                <td style="text-align:center;">${e.sks}</td><td style="font-size:0.78rem;">${e.dosen}</td>
                <td style="text-align:center;">${e.sudahEvaluasi ? '<span style="color:hsl(150 70% 35%);font-size:1.1rem;">✅</span>' : '<button class="btn-eval" style="background:hsl(200 70% 50%);color:white;border:none;border-radius:6px;padding:4px 12px;font-size:0.72rem;cursor:pointer;">📝 Isi Evaluasi</button>'}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}

// ---------- Nilai / Daftar Nilai Page ----------
function nilaiContent(user) {
  const startYear = parseInt(KRS_DATA.periodeMasuk) || 2023;
  const krsSemester = user.semester || 4;
  // Combine past NILAI + current KRS courses
  const krsCourses = KRS_DATA.mataKuliah.map(m => ({
    kode: m.kode, nama: m.nama, sks: m.sks, nilai: '—', bobot: 0, semester: krsSemester, pending: true
  }));
  const allCourses = [...NILAI, ...krsCourses];
  const gradedCourses = allCourses.filter(n => !n.pending);
  const allSks = allCourses.reduce((a,n) => a + n.sks, 0);
  const gradedSks = gradedCourses.reduce((a,n) => a + n.sks, 0);
  const allBobot = gradedCourses.reduce((a,n) => a + n.sks * n.bobot, 0);
  const ipk = gradedSks > 0 ? (allBobot / gradedSks).toFixed(2) : '—';

  // Map semester number to academic year string
  function semToYear(sem) {
    const yr = startYear + Math.floor((sem - 1) / 2);
    return `${yr}`;
  }
  function semToCode(sem) {
    const yr = startYear + Math.floor((sem - 1) / 2);
    const jenis = sem % 2 === 1 ? '1' : '2';
    return `${jenis}${yr.toString().slice(-2)}${(yr+1).toString().slice(-2)}`;
  }

  return mhsInfoHeader(user) + `
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
              ${allCourses.map((n,i) => {
                const isPending = n.pending;
                const nk = isPending ? '—' : (n.sks * n.bobot).toFixed(1);
                const badgeClass = isPending ? '' : (n.nilai.startsWith('A') ? 'success' : n.nilai.startsWith('B') ? 'blue' : 'warning');
                return `<tr${isPending ? ' style="background:hsl(45 80% 97%);"' : ''}>
                  <td>${i+1}.</td><td>${semToYear(n.semester)}</td><td><strong>${n.kode}</strong></td><td>${n.nama}${isPending ? ' <span style="font-size:0.65rem;color:hsl(30 70% 50%);font-weight:600;">📋 KRS</span>' : ''}</td>
                  <td style="text-align:center;">${isPending ? '<span style="color:hsl(215 15% 60%);">—</span>' : `<span class="badge-sm ${badgeClass}">${n.nilai}</span>`}</td>
                  <td style="text-align:center;">${n.sks}</td><td style="text-align:center;">${nk}</td><td>${semToCode(n.semester)}</td>
                </tr>`;
              }).join('')}
              <tr style="background:hsl(215 20% 95%);font-weight:700;text-align:center;"><td colspan="4">J U M L A H</td><td></td><td>${allSks}</td><td>${allBobot.toFixed(1)}</td><td></td></tr>
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
            <td>${allSks}</td><td>${gradedSks}</td><td style="color:hsl(200 70% 40%);">${ipk}</td>
          </tr></tbody>
        </table>
      </div>
    </div>`;
}

// ---------- Perkembangan Page ----------
function perkembanganContent(user) {
  const semesters = [...new Set(NILAI.map(n => n.semester))].sort();
  const semData = semesters.map(sem => {
    const nilaiSem = NILAI.filter(n => n.semester === sem);
    const sks = nilaiSem.reduce((a,n) => a + n.sks, 0);
    const bobot = nilaiSem.reduce((a,n) => a + n.sks * n.bobot, 0);
    return { sem, sks, ips: (bobot / sks).toFixed(2), count: nilaiSem.length };
  });
  const totalSks = NILAI.reduce((a,n) => a + n.sks, 0);
  const totalBobot = NILAI.reduce((a,n) => a + n.sks * n.bobot, 0);
  const ipk = (totalBobot / totalSks).toFixed(2);
  const gradeCount = {};
  NILAI.forEach(n => { gradeCount[n.nilai] = (gradeCount[n.nilai] || 0) + 1; });
  // cumulative IPK
  const ipkData = [];
  let cumSks = 0, cumBobot = 0;
  semesters.forEach(sem => {
    const ns = NILAI.filter(n => n.semester === sem);
    cumSks += ns.reduce((a,n) => a + n.sks, 0);
    cumBobot += ns.reduce((a,n) => a + n.sks * n.bobot, 0);
    ipkData.push((cumBobot / cumSks).toFixed(2));
  });

  // SVG line chart builder
  function buildLineChart(title, yLabel, dataPoints, maxY, color, id) {
    const W = 340, H = 200, pad = { t: 25, r: 25, b: 40, l: 40 };
    const cW = W - pad.l - pad.r, cH = H - pad.t - pad.b;
    const n = dataPoints.length;
    const pts = dataPoints.map((v, i) => ({
      x: pad.l + (n > 1 ? (i / (n-1)) * cW : cW/2),
      y: pad.t + cH - (parseFloat(v) / maxY) * cH,
      v
    }));
    const path = pts.map((p,i) => `${i===0?'M':'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    const gridLines = [0, maxY*0.25, maxY*0.5, maxY*0.75, maxY].map(v => {
      const y = pad.t + cH - (v / maxY) * cH;
      return `<line x1="${pad.l}" y1="${y}" x2="${W-pad.r}" y2="${y}" stroke="hsl(215 20% 88%)" stroke-width="0.5"/>
              <text x="${pad.l-6}" y="${y+3}" text-anchor="end" fill="hsl(215 15% 55%)" font-size="9">${Number.isInteger(v)?v:v.toFixed(1)}</text>`;
    }).join('');
    const xLabels = pts.map((p,i) => `<text x="${p.x}" y="${H-8}" text-anchor="middle" fill="hsl(215 15% 55%)" font-size="9">${i+1}</text>`).join('');
    const dots = pts.map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${color}" stroke="white" stroke-width="2"/>
      <text x="${p.x}" y="${p.y - 10}" text-anchor="middle" fill="hsl(215 15% 35%)" font-size="9.5" font-weight="600">${p.v}</text>`).join('');
    const area = `M${pts[0].x},${pad.t+cH} ${path.replace('M','')} L${pts[pts.length-1].x},${pad.t+cH} Z`;
    return `
      <div class="dash-card" style="flex:1;min-width:280px;">
        <div class="dash-card-head" style="display:flex;justify-content:space-between;align-items:center;">
          <h3 style="margin:0;font-size:0.88rem;">${title}</h3>
        </div>
        <div class="dash-card-body" style="padding:12px;">
          <svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;" id="${id}">
            ${gridLines}
            <line x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${pad.t+cH}" stroke="hsl(215 20% 85%)" stroke-width="1"/>
            <line x1="${pad.l}" y1="${pad.t+cH}" x2="${W-pad.r}" y2="${pad.t+cH}" stroke="hsl(215 20% 85%)" stroke-width="1"/>
            <path d="${area}" fill="${color}" opacity="0.08"/>
            <path d="${path}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            ${dots}
            ${xLabels}
            <text x="${pad.l + cW/2}" y="${H}" text-anchor="middle" fill="hsl(215 15% 50%)" font-size="10" font-weight="600">Semester</text>
            <text x="8" y="${pad.t + cH/2}" text-anchor="middle" fill="hsl(215 15% 50%)" font-size="10" font-weight="600" transform="rotate(-90, 8, ${pad.t + cH/2})">${yLabel}</text>
          </svg>
        </div>
      </div>`;
  }

  // SVG bar chart builder
  function buildBarChart(title, yLabel, dataPoints, maxY, color, id) {
    const W = 340, H = 200, pad = { t: 25, r: 20, b: 40, l: 40 };
    const cW = W - pad.l - pad.r, cH = H - pad.t - pad.b;
    const n = dataPoints.length;
    const barW = Math.min(30, (cW / n) * 0.6);
    const gap = cW / n;
    const gridLines = [0, maxY*0.25, maxY*0.5, maxY*0.75, maxY].map(v => {
      const y = pad.t + cH - (v / maxY) * cH;
      return `<line x1="${pad.l}" y1="${y}" x2="${W-pad.r}" y2="${y}" stroke="hsl(215 20% 88%)" stroke-width="0.5"/>
              <text x="${pad.l-6}" y="${y+3}" text-anchor="end" fill="hsl(215 15% 55%)" font-size="9">${Math.round(v)}</text>`;
    }).join('');
    const bars = dataPoints.map((v, i) => {
      const x = pad.l + gap * i + gap/2 - barW/2;
      const h = (parseInt(v) / maxY) * cH;
      const y = pad.t + cH - h;
      return `<rect x="${x}" y="${y}" width="${barW}" height="${h}" rx="3" fill="${color}" opacity="0.85"/>
              <text x="${x + barW/2}" y="${y - 6}" text-anchor="middle" fill="hsl(215 15% 35%)" font-size="9.5" font-weight="600">${v}</text>
              <text x="${x + barW/2}" y="${H-8}" text-anchor="middle" fill="hsl(215 15% 55%)" font-size="9">${i+1}</text>`;
    }).join('');
    return `
      <div class="dash-card" style="flex:1;min-width:280px;">
        <div class="dash-card-head"><h3 style="margin:0;font-size:0.88rem;">${title}</h3></div>
        <div class="dash-card-body" style="padding:12px;">
          <svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;" id="${id}">
            ${gridLines}
            <line x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${pad.t+cH}" stroke="hsl(215 20% 85%)" stroke-width="1"/>
            <line x1="${pad.l}" y1="${pad.t+cH}" x2="${W-pad.r}" y2="${pad.t+cH}" stroke="hsl(215 20% 85%)" stroke-width="1"/>
            ${bars}
            <text x="${pad.l + cW/2}" y="${H}" text-anchor="middle" fill="hsl(215 15% 50%)" font-size="10" font-weight="600">Semester</text>
            <text x="8" y="${pad.t + cH/2}" text-anchor="middle" fill="hsl(215 15% 50%)" font-size="10" font-weight="600" transform="rotate(-90, 8, ${pad.t + cH/2})">${yLabel}</text>
          </svg>
        </div>
      </div>`;
  }

  // Donut chart
  function buildDonutChart(title, data) {
    const entries = Object.entries(data).sort((a,b) => b[1] - a[1]);
    const total = entries.reduce((a,[,c]) => a + c, 0);
    const colors = ['hsl(210 65% 55%)','hsl(150 55% 50%)','hsl(35 80% 55%)','hsl(280 45% 55%)','hsl(0 60% 55%)','hsl(180 50% 45%)','hsl(45 70% 50%)'];
    const cx = 100, cy = 100, r = 70, ir = 40;
    let cum = 0;
    const slices = entries.map(([grade, count], i) => {
      const pct = count / total;
      const startAngle = cum * 2 * Math.PI - Math.PI/2;
      cum += pct;
      const endAngle = cum * 2 * Math.PI - Math.PI/2;
      const large = pct > 0.5 ? 1 : 0;
      const x1o = cx + r * Math.cos(startAngle), y1o = cy + r * Math.sin(startAngle);
      const x2o = cx + r * Math.cos(endAngle), y2o = cy + r * Math.sin(endAngle);
      const x1i = cx + ir * Math.cos(endAngle), y1i = cy + ir * Math.sin(endAngle);
      const x2i = cx + ir * Math.cos(startAngle), y2i = cy + ir * Math.sin(startAngle);
      const midAngle = (startAngle + endAngle) / 2;
      const lx = cx + (r + 22) * Math.cos(midAngle), ly = cy + (r + 22) * Math.sin(midAngle);
      return `<path d="M${x1o},${y1o} A${r},${r} 0 ${large} 1 ${x2o},${y2o} L${x1i},${y1i} A${ir},${ir} 0 ${large} 0 ${x2i},${y2i} Z" fill="${colors[i % colors.length]}" stroke="white" stroke-width="1.5"/>
        <text x="${lx}" y="${ly+4}" text-anchor="middle" fill="hsl(215 15% 35%)" font-size="8" font-weight="600">${grade}: ${(pct*100).toFixed(1)}%</text>`;
    }).join('');
    return `
      <div class="dash-card" style="flex:1;min-width:280px;">
        <div class="dash-card-head"><h3 style="margin:0;font-size:0.88rem;">${title}</h3></div>
        <div class="dash-card-body" style="padding:12px;">
          <svg viewBox="0 0 200 200" style="width:100%;max-width:260px;height:auto;margin:0 auto;display:block;">
            ${slices}
          </svg>
          <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:6px 14px;margin-top:10px;">
            ${entries.map(([grade, count], i) => `
              <div style="display:flex;align-items:center;gap:4px;font-size:0.7rem;">
                <span style="width:10px;height:10px;border-radius:2px;background:${colors[i % colors.length]};display:inline-block;"></span>
                <span>${grade} (${count})</span>
              </div>`).join('')}
          </div>
        </div>
      </div>`;
  }

  const totalMax = 8;
  const done = semesters.length;
  const cur = 1;
  const left = totalMax - done - cur;
  const donePct = (done / totalMax * 100).toFixed(0);
  const curPct = (cur / totalMax * 100).toFixed(0);
  const leftPct = (left / totalMax * 100).toFixed(0);

  return `
    <!-- Student Profile Card -->
    <div class="dash-card" style="margin-bottom:20px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,hsl(200 55% 30%),hsl(180 45% 40%));padding:24px 28px;display:flex;align-items:center;gap:22px;flex-wrap:wrap;">
        <div style="width:90px;height:90px;border-radius:12px;background:linear-gradient(135deg,hsl(200 40% 60%),hsl(180 40% 70%));border:3px solid rgba(255,255,255,0.4);display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;">
          <span style="font-size:2rem;color:white;font-weight:700;">${getInitials(user.nama)}</span>
        </div>
        <div style="color:white;">
          <div style="font-size:1.15rem;font-weight:700;letter-spacing:0.3px;">${user.nim} — ${user.nama}</div>
          <div style="font-size:0.85rem;opacity:0.85;margin-top:4px;">Ilmu Administrasi / ${user.prodi}</div>
          <div style="font-size:0.82rem;opacity:0.8;margin-top:6px;">Angkatan: 2023, Semester: ${user.semester}</div>
          <div style="display:flex;gap:20px;margin-top:10px;">
            <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;backdrop-filter:blur(4px);">
              <div style="font-size:0.65rem;opacity:0.7;">IPK</div>
              <div style="font-size:1.1rem;font-weight:800;">${ipk}</div>
            </div>
            <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;backdrop-filter:blur(4px);">
              <div style="font-size:0.65rem;opacity:0.7;">SKS Lulus</div>
              <div style="font-size:1.1rem;font-weight:800;">${totalSks}</div>
            </div>
            <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;backdrop-filter:blur(4px);">
              <div style="font-size:0.65rem;opacity:0.7;">Semester</div>
              <div style="font-size:1.1rem;font-weight:800;">${user.semester} / 8</div>
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
          <div style="width:${donePct}%;background:linear-gradient(90deg,hsl(90 55% 50%),hsl(120 50% 55%));display:flex;align-items:center;justify-content:center;color:white;font-size:0.72rem;font-weight:700;transition:width 0.5s;"></div>
          <div style="width:${curPct}%;background:linear-gradient(90deg,hsl(30 80% 55%),hsl(35 80% 60%));display:flex;align-items:center;justify-content:center;color:white;font-size:0.72rem;font-weight:700;"></div>
          <div style="width:${leftPct}%;background:linear-gradient(90deg,hsl(220 55% 55%),hsl(220 60% 60%));display:flex;align-items:center;justify-content:center;color:white;font-size:0.72rem;font-weight:700;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:0.68rem;color:hsl(215 15% 55%);">
          ${Array.from({length:totalMax+1},(_,i)=>`<span>${i}</span>`).join('')}
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
      ${buildLineChart('IPK Mahasiswa', 'IPK', ipkData, 4, 'hsl(210 60% 50%)', 'chartIPK')}
      ${buildLineChart('IPS Mahasiswa', 'IPS', semData.map(s => s.ips), 4, 'hsl(150 55% 45%)', 'chartIPS')}
      ${buildBarChart('SKS Mahasiswa', 'SKS', semData.map(s => s.sks), 30, 'hsl(210 55% 50%)', 'chartSKS')}
      ${buildDonutChart('Perbandingan Nilai', gradeCount)}
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
    </div>`;
}

// ---- Helper: build DOSEN_KELAS_MAHASISWA-compatible data from JADWAL_DUMMY ----
// This ensures dosen jadwal matches exactly what BAP sees in Manajemen Jadwal
function getDosenJadwal(user) {
  initJadwalDummy();
  const nama = user.nama || '';
  // Filter JADWAL_DUMMY by dosen name — supports slash-separated multi-dosen format
  const filtered = JADWAL_DUMMY.filter(j => {
    if (!j.dosen || j.dosen === '-') return false;
    // Split slash-separated dosen names and check each
    const dosenNames = j.dosen.split('/').map(n => n.trim());
    return dosenNames.some(dn => dn === nama);
  });
  // Convert to DOSEN_KELAS_MAHASISWA-compatible format
  return filtered.map(j => {
    // Generate consistent mahasiswa list per course (seeded by kodeMK for reproducibility)
    const seed = j.kodeMK.split('').reduce((a,c) => a + c.charCodeAt(0), 0);
    const allNames = [
      'Ahmad Rizky Pratama','Siti Nurhaliza','Budi Santoso','Dewi Lestari','Eko Prasetyo',
      'Fitri Handayani','Gani Setiawan','Hana Permata','Irfan Hakim','Julia Putri',
      'Kurniawan','Lina Marlina','Muhammad Faisal','Nadia Rahmawati','Rudi Hermawan',
      'Yeni Fitriani','Farhan Maulana','Rizki Amelia','Dian Puspita','Bayu Nugroho',
      'Sari Wulandari','Andi Firmansyah','Mega Safitri','Dimas Nugroho','Putri Ayu'
    ];
    const count = 5 + (seed % 8); // 5-12 students per class
    const mahasiswa = [];
    for (let i = 0; i < count; i++) {
      const ni = (seed + i * 7) % allNames.length;
      const nimBase = 2024101000 + ((seed + i * 13) % 100);
      mahasiswa.push({
        nim: String(nimBase + i),
        nama: allNames[ni],
        angkatan: 2022 + (i % 3),
        nilaiUTS: 60 + ((seed + i * 3) % 35),
        nilaiUAS: 60 + ((seed + i * 5) % 35),
        nilaiTugas: 65 + ((seed + i * 7) % 30),
        nilaiQuiz: 60 + ((seed + i * 11) % 35),
        kehadiran: 10 + ((seed + i * 2) % 5)
      });
    }
    return {
      kode: j.kodeMK,
      nama: j.namaMK,
      sks: j.sks,
      kelas: j.kelas,
      semester: `Genap ${new Date().getFullYear()}`,
      hari: j.hari,
      jam: `${j.jamMulai}-${j.jamSelesai}`,
      ruang: j.ruang,
      tipeKelas: j.tipeKelas || 'Offline',
      prodi: j.prodi,
      semesterNo: j.semester,
      bobot: { uts: 20, uas: 30, tugas: 20, quiz: 15, absensi: 15 },
      mahasiswa
    };
  });
}

function dosenContent(user) {
  const dj = getDosenJadwal(user);
  window._dosenJadwalCache = dj; // cache for sub-pages
  const totalMhs = dj.reduce((s,k) => s + k.mahasiswa.length, 0);
  // Jadwal hari ini
  const hariArr = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const hariIni = hariArr[new Date().getDay()];
  const jadwalHariIni = dj.filter(k => k.hari === hariIni);
  return `
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${I.monitor}</div>
        <div class="stat-info"><div class="stat-label">Mata Kuliah</div><div class="stat-value">${dj.length}</div><div class="stat-sub">semester ini</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${I.users}</div>
        <div class="stat-info"><div class="stat-label">Total Mahasiswa</div><div class="stat-value">${totalMhs}</div><div class="stat-sub">semua kelas</div></div>
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
                ${jadwalHariIni.length ? jadwalHariIni.map(j => `<tr>
                  <td class="sch-time">${j.jam}</td>
                  <td><strong>${j.nama}</strong></td>
                  <td>${j.kelas}</td>
                  <td>${j.ruang}</td>
                </tr>`).join('') : `<tr><td colspan="4" style="text-align:center;padding:20px;color:hsl(215 15% 60%);font-size:0.85rem;">Tidak ada jadwal hari ini (${hariIni})</td></tr>`}
              </tbody>
            </table>
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-card-head"><h3>Kelas yang Diampu</h3></div>
          <div class="dash-card-body">
            <div class="course-grid">
              ${dj.slice(0, 4).map(k => `
                <div class="course-card">
                  <div class="course-card-code">${k.kode}</div>
                  <h4>${k.nama}</h4>
                  <p>${k.mahasiswa.length} Mahasiswa</p>
                  <div class="course-card-foot">
                    <span>${k.sks} SKS · ${k.kelas}</span>
                    <span class="badge-sm blue">${k.hari}</span>
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

// ---- DOSEN SUB-PAGES ----

function dosenInfoHeader(user) {
  const dj = window._dosenJadwalCache || getDosenJadwal(user);
  return `<div class="dash-card" style="margin-bottom:20px;overflow:hidden;">
    <div style="background:linear-gradient(135deg,hsl(200 55% 28%),hsl(170 45% 38%));padding:18px 24px;display:flex;align-items:center;gap:18px;flex-wrap:wrap;">
      <div style="width:60px;height:60px;border-radius:10px;background:linear-gradient(135deg,hsl(200 40% 55%),hsl(180 40% 65%));border:2px solid rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="font-size:1.3rem;color:white;font-weight:700;">${getInitials(user.nama)}</span>
      </div>
      <div style="color:white;flex:1;">
        <div style="font-size:1rem;font-weight:700;">${user.nama}</div>
        <div style="font-size:0.8rem;opacity:0.85;">NIP: ${user.nip || '198501012010011001'} — ${user.prodi || 'Administrasi Negara'}</div>
      </div>
      <div style="display:flex;gap:12px;">
        <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;color:white;text-align:center;backdrop-filter:blur(4px);">
          <div style="font-size:0.6rem;opacity:0.7;">Mata Kuliah</div>
          <div style="font-size:1rem;font-weight:800;">${dj.length}</div>
        </div>
        <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;color:white;text-align:center;backdrop-filter:blur(4px);">
          <div style="font-size:0.6rem;opacity:0.7;">Mahasiswa PA</div>
          <div style="font-size:1rem;font-weight:800;">${DOSEN_BIMBINGAN.length}</div>
        </div>
      </div>
    </div>
  </div>`;
}

function jadwalDosenContent(user) {
  const days = ['Senin','Selasa','Rabu','Kamis','Jumat'];
  const dj = window._dosenJadwalCache || getDosenJadwal(user);
  window._dosenJadwalCache = dj;
  const allJadwal = dj.map((k,idx) => ({
    hari: k.hari, jam: k.jam, kode: k.kode, nama: k.nama, kelas: k.kelas, ruang: k.ruang,
    jmlMhs: k.mahasiswa.length, idx
  }));
  return `${dosenInfoHeader(user)}
    <div class="dash-card">
      <div class="dash-card-head"><h3>📅 Jadwal Mengajar — Semester Genap ${new Date().getFullYear()}</h3></div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>Hari</th><th>Jam</th><th>Kode MK</th><th>Mata Kuliah</th><th>Kelas</th><th>Ruang</th><th>Mhs</th><th>Aksi</th></tr></thead>
          <tbody>
            ${allJadwal.map((j,i) => `<tr>
              <td>${i+1}.</td>
              <td><strong>${j.hari}</strong></td>
              <td class="sch-time">${j.jam}</td>
              <td><strong>${j.kode}</strong></td>
              <td>${j.nama}</td>
              <td>${j.kelas}</td>
              <td>${j.ruang}</td>
              <td style="text-align:center;">${j.jmlMhs}</td>
              <td style="text-align:center;white-space:nowrap;">
                <button class="jadwal-absensi-btn" data-kelas-idx="${j.idx}" style="font-size:0.68rem;padding:4px 10px;border-radius:4px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;">📋 Absensi</button>
                <button class="jadwal-nilai-btn" data-kelas-idx="${j.idx}" style="font-size:0.68rem;padding:4px 10px;border-radius:4px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;margin-left:4px;">✏️ Nilai</button>
              </td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
    <div style="margin-top:16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">
      ${days.map(day => {
        const jadwal = allJadwal.filter(j => j.hari === day);
        return `<div class="dash-card">
          <div class="dash-card-head" style="background:hsl(210 50% 95%);"><h3 style="margin:0;font-size:0.85rem;">${day}</h3></div>
          <div class="dash-card-body" style="padding:${jadwal.length?'0':'16px'};">
            ${jadwal.length ? jadwal.map(j => `
              <div style="padding:12px 16px;border-bottom:1px solid hsl(215 20% 92%);">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                  <div style="flex:1;">
                    <div style="font-weight:700;font-size:0.82rem;">${j.kode} — ${j.nama}</div>
                    <div style="font-size:0.72rem;color:hsl(215 15% 55%);margin-top:4px;">${j.jam} · ${j.kelas} · ${j.ruang} · ${j.jmlMhs} mhs</div>
                  </div>
                  <div style="display:flex;gap:4px;flex-shrink:0;">
                    <button class="jadwal-absensi-btn" data-kelas-idx="${j.idx}" style="font-size:0.65rem;padding:4px 10px;border-radius:4px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;">📋 Absensi</button>
                    <button class="jadwal-nilai-btn" data-kelas-idx="${j.idx}" style="font-size:0.65rem;padding:4px 10px;border-radius:4px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;">✏️ Nilai</button>
                  </div>
                </div>
              </div>`).join('') : '<div style="color:hsl(215 15% 60%);font-size:0.8rem;text-align:center;">Tidak ada jadwal</div>'}
          </div>
        </div>`;
      }).join('')}
    </div>
    <div id="jadwalAbsensiDetail" style="display:none;margin-top:20px;"></div>
    <div id="jadwalNilaiDetail" style="display:none;margin-top:20px;"></div>`;
}

function renderInputNilaiDetail(kelasIdx) {
  function calcGrade(v) {
    if (v >= 85) return 'A'; if (v >= 80) return 'A-'; if (v >= 75) return 'B+';
    if (v >= 70) return 'B'; if (v >= 65) return 'B-'; if (v >= 60) return 'C+';
    if (v >= 55) return 'C'; if (v >= 45) return 'D'; return 'E';
  }
  const kelas = (window._dosenJadwalCache || [])[kelasIdx];
  const b = kelas.bobot || { uts: 20, uas: 30, tugas: 20, quiz: 15, absensi: 15 };
  const totalPertemuan = 14;
  const rumusStr = `UTS×${b.uts}% + UAS×${b.uas}% + Tugas×${b.tugas}% + Quiz×${b.quiz}% + Absensi×${b.absensi}%`;
  return `
    <div class="dash-card" style="margin-bottom:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,hsl(210 55% 42%),hsl(200 50% 55%));padding:18px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <div>
          <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);">${kelas.kode} · ${kelas.kelas}</div>
          <div style="font-size:1.1rem;font-weight:700;color:white;">✏️ Input Nilai — ${kelas.nama}</div>
          <div id="nilaiRumusLabel" style="font-size:0.78rem;color:rgba(255,255,255,0.8);margin-top:4px;">Rumus: ${rumusStr}</div>
        </div>
        <button id="btnToggleBobot" onclick="document.getElementById('bobotPanel').style.display = document.getElementById('bobotPanel').style.display === 'none' ? 'block' : 'none'" style="font-size:0.72rem;padding:6px 14px;border-radius:6px;cursor:pointer;background:rgba(255,255,255,0.2);color:white;border:1px solid rgba(255,255,255,0.4);font-weight:600;backdrop-filter:blur(4px);">⚙️ Atur Bobot</button>
      </div>
      <!-- Bobot Settings Panel -->
      <div id="bobotPanel" style="display:none;padding:16px 24px;background:hsl(210 30% 96%);border-bottom:2px solid hsl(210 40% 85%);">
        <div style="font-size:0.82rem;font-weight:700;color:hsl(210 50% 35%);margin-bottom:10px;">⚙️ Pengaturan Bobot Penilaian</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;">
          <label style="display:flex;flex-direction:column;gap:3px;font-size:0.72rem;font-weight:600;color:hsl(215 20% 40%);">UTS (%)
            <input id="bobotUTS" type="number" value="${b.uts}" min="0" max="100" style="width:55px;padding:5px 6px;border:1px solid hsl(215 20% 82%);border-radius:5px;text-align:center;font-size:0.82rem;font-weight:700;">
          </label>
          <label style="display:flex;flex-direction:column;gap:3px;font-size:0.72rem;font-weight:600;color:hsl(215 20% 40%);">UAS (%)
            <input id="bobotUAS" type="number" value="${b.uas}" min="0" max="100" style="width:55px;padding:5px 6px;border:1px solid hsl(215 20% 82%);border-radius:5px;text-align:center;font-size:0.82rem;font-weight:700;">
          </label>
          <label style="display:flex;flex-direction:column;gap:3px;font-size:0.72rem;font-weight:600;color:hsl(215 20% 40%);">Tugas (%)
            <input id="bobotTugas" type="number" value="${b.tugas}" min="0" max="100" style="width:55px;padding:5px 6px;border:1px solid hsl(215 20% 82%);border-radius:5px;text-align:center;font-size:0.82rem;font-weight:700;">
          </label>
          <label style="display:flex;flex-direction:column;gap:3px;font-size:0.72rem;font-weight:600;color:hsl(215 20% 40%);">Quiz (%)
            <input id="bobotQuiz" type="number" value="${b.quiz}" min="0" max="100" style="width:55px;padding:5px 6px;border:1px solid hsl(215 20% 82%);border-radius:5px;text-align:center;font-size:0.82rem;font-weight:700;">
          </label>
          <label style="display:flex;flex-direction:column;gap:3px;font-size:0.72rem;font-weight:600;color:hsl(215 20% 40%);">Absensi (%)
            <input id="bobotAbsensi" type="number" value="${b.absensi}" min="0" max="100" style="width:55px;padding:5px 6px;border:1px solid hsl(215 20% 82%);border-radius:5px;text-align:center;font-size:0.82rem;font-weight:700;">
          </label>
          <div style="display:flex;flex-direction:column;gap:3px;">
            <span id="bobotTotalLabel" style="font-size:0.72rem;font-weight:700;color:hsl(150 60% 40%);">Total: ${b.uts+b.uas+b.tugas+b.quiz+b.absensi}%</span>
            <button id="btnApplyBobot" data-kelas-idx="${kelasIdx}" onclick="window.__applyBobot && window.__applyBobot()" style="padding:5px 14px;border-radius:5px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;font-size:0.75rem;">✅ Terapkan</button>
          </div>
        </div>
        <div id="bobotWarning" style="display:none;margin-top:8px;padding:6px 12px;background:hsl(0 70% 95%);color:hsl(0 60% 45%);border-radius:4px;font-size:0.72rem;font-weight:600;">⚠️ Total bobot harus = 100%!</div>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px;">
      <button id="backFromNilai" style="font-size:0.78rem;padding:7px 16px;border-radius:6px;cursor:pointer;background:hsl(215 20% 92%);color:hsl(215 20% 35%);border:1px solid hsl(215 20% 82%);font-weight:600;">← Kembali ke Jadwal</button>
      <button id="btnSimpanNilaiInline" data-kelas-idx="${kelasIdx}" style="font-size:0.72rem;padding:6px 14px;border-radius:5px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;">💾 Simpan Nilai</button>
    </div>
    <div class="dash-card">
      <div class="dash-card-body" style="padding:0;overflow-x:auto;">
        <table id="nilaiTable" class="sch-table" style="width:100%;font-size:0.78rem;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>NIM</th><th>Nama</th><th class="th-uts">UTS (${b.uts}%)</th><th class="th-uas">UAS (${b.uas}%)</th><th class="th-tugas">Tugas (${b.tugas}%)</th><th class="th-quiz">Quiz (${b.quiz}%)</th><th class="th-absensi">Absensi (${b.absensi}%)</th><th>Akhir</th><th>Huruf</th></tr></thead>
          <tbody>
            ${kelas.mahasiswa.map((m,i) => {
              const nilaiAbsensi = Math.round(m.kehadiran / totalPertemuan * 100);
              const akhir = Math.round(m.nilaiUTS * b.uts/100 + m.nilaiUAS * b.uas/100 + m.nilaiTugas * b.tugas/100 + (m.nilaiQuiz||0) * b.quiz/100 + nilaiAbsensi * b.absensi/100);
              const huruf = calcGrade(akhir);
              const hColor = huruf.startsWith('A') ? 'hsl(150 60% 45%)' : huruf.startsWith('B') ? 'hsl(200 55% 50%)' : huruf.startsWith('C') ? 'hsl(40 80% 50%)' : 'hsl(0 60% 50%)';
              const inputStyle = 'width:50px;padding:4px 4px;border:1px solid hsl(215 20% 85%);border-radius:4px;text-align:center;font-size:0.78rem;';
              return `<tr>
                <td>${i+1}.</td>
                <td><strong>${m.nim}</strong></td>
                <td style="white-space:nowrap;">${m.nama}</td>
                <td style="text-align:center;"><input type="number" data-field="uts" value="${m.nilaiUTS}" min="0" max="100" style="${inputStyle}"></td>
                <td style="text-align:center;"><input type="number" data-field="uas" value="${m.nilaiUAS}" min="0" max="100" style="${inputStyle}"></td>
                <td style="text-align:center;"><input type="number" data-field="tugas" value="${m.nilaiTugas}" min="0" max="100" style="${inputStyle}"></td>
                <td style="text-align:center;"><input type="number" data-field="quiz" value="${m.nilaiQuiz||0}" min="0" max="100" style="${inputStyle}"></td>
                <td style="text-align:center;"><span style="display:inline-block;padding:3px 8px;border-radius:4px;background:${nilaiAbsensi>=85?'hsl(150 50% 92%)':'hsl(40 50% 92%)'};color:${nilaiAbsensi>=85?'hsl(150 60% 35%)':'hsl(40 70% 35%)'};font-weight:600;font-size:0.75rem;" title="Otomatis: ${m.kehadiran}/${totalPertemuan} hadir">${nilaiAbsensi}</span></td>
                <td style="text-align:center;font-weight:700;" class="td-akhir">${akhir}</td>
                <td style="text-align:center;" class="td-huruf"><span style="background:${hColor};color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${huruf}</span></td>
              </tr>`;
            }).join('')}
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
    </div>`;
}

function initJadwalDosenPage() {
  const absensiDiv = document.getElementById('jadwalAbsensiDetail');
  const nilaiDiv = document.getElementById('jadwalNilaiDetail');

  function hideAllDetails() {
    if (absensiDiv) { absensiDiv.style.display = 'none'; absensiDiv.innerHTML = ''; }
    if (nilaiDiv) { nilaiDiv.style.display = 'none'; nilaiDiv.innerHTML = ''; }
  }

  // Absensi buttons
  document.querySelectorAll('.jadwal-absensi-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      hideAllDetails();
      const idx = parseInt(btn.dataset.kelasIdx);
      if (absensiDiv) {
        absensiDiv.style.display = 'block';
        absensiDiv.innerHTML = renderAbsensiDetail(idx);
        absensiDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById('backToClassList')?.addEventListener('click', () => hideAllDetails());
        // Attach cell toggle handlers
        attachAbsensiCellHandlers(absensiDiv);
        // Attach save + print handlers
        attachAbsensiSaveHandlers(absensiDiv, idx);
      }
    });
  });

  // Input Nilai buttons
  document.querySelectorAll('.jadwal-nilai-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      hideAllDetails();
      const idx = parseInt(btn.dataset.kelasIdx);
      if (nilaiDiv) {
        nilaiDiv.style.display = 'block';
        nilaiDiv.innerHTML = renderInputNilaiDetail(idx);
        nilaiDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById('backFromNilai')?.addEventListener('click', () => hideAllDetails());
        
        // ── Apply Bobot handler ──
        window.__applyBobot = function() {
          const bUts = parseInt(document.getElementById('bobotUTS')?.value) || 0;
          const bUas = parseInt(document.getElementById('bobotUAS')?.value) || 0;
          const bTugas = parseInt(document.getElementById('bobotTugas')?.value) || 0;
          const bQuiz = parseInt(document.getElementById('bobotQuiz')?.value) || 0;
          const bAbsensi = parseInt(document.getElementById('bobotAbsensi')?.value) || 0;
          const total = bUts + bUas + bTugas + bQuiz + bAbsensi;
          
          const totalLabel = document.getElementById('bobotTotalLabel');
          const warning = document.getElementById('bobotWarning');
          if (totalLabel) {
            totalLabel.textContent = 'Total: ' + total + '%';
            totalLabel.style.color = total === 100 ? 'hsl(150 60% 40%)' : 'hsl(0 60% 50%)';
          }
          if (total !== 100) {
            if (warning) warning.style.display = 'block';
            return;
          }
          if (warning) warning.style.display = 'none';
          
          // Save bobot to data
          const kls2 = (window._dosenJadwalCache || [])[idx];
          kls2.bobot = { uts: bUts, uas: bUas, tugas: bTugas, quiz: bQuiz, absensi: bAbsensi };
          
          // Update header labels
          const thUts = nilaiDiv.querySelector('.th-uts'); if (thUts) thUts.textContent = 'UTS (' + bUts + '%)';
          const thUas = nilaiDiv.querySelector('.th-uas'); if (thUas) thUas.textContent = 'UAS (' + bUas + '%)';
          const thTugas = nilaiDiv.querySelector('.th-tugas'); if (thTugas) thTugas.textContent = 'Tugas (' + bTugas + '%)';
          const thQuiz = nilaiDiv.querySelector('.th-quiz'); if (thQuiz) thQuiz.textContent = 'Quiz (' + bQuiz + '%)';
          const thAbsensi = nilaiDiv.querySelector('.th-absensi'); if (thAbsensi) thAbsensi.textContent = 'Absensi (' + bAbsensi + '%)';
          
          // Update rumus label
          const rumusLabel = document.getElementById('nilaiRumusLabel');
          if (rumusLabel) rumusLabel.textContent = 'Rumus: UTS×' + bUts + '% + UAS×' + bUas + '% + Tugas×' + bTugas + '% + Quiz×' + bQuiz + '% + Absensi×' + bAbsensi + '%';
          
          // Recalculate all rows
          function calcGrade2(v) {
            if (v >= 85) return 'A'; if (v >= 80) return 'A-'; if (v >= 75) return 'B+';
            if (v >= 70) return 'B'; if (v >= 65) return 'B-'; if (v >= 60) return 'C+';
            if (v >= 55) return 'C'; if (v >= 45) return 'D'; return 'E';
          }
          const rows2 = nilaiDiv.querySelectorAll('#nilaiTable tbody tr');
          rows2.forEach((row, ri) => {
            const inputs = row.querySelectorAll('input[type=number]');
            if (inputs.length >= 4 && kls2.mahasiswa[ri]) {
              const uts = parseFloat(inputs[0].value) || 0;
              const uas = parseFloat(inputs[1].value) || 0;
              const tugas = parseFloat(inputs[2].value) || 0;
              const quiz = parseFloat(inputs[3].value) || 0;
              const nilaiAbsensi = Math.round(kls2.mahasiswa[ri].kehadiran / 14 * 100);
              const akhir = Math.round(uts*bUts/100 + uas*bUas/100 + tugas*bTugas/100 + quiz*bQuiz/100 + nilaiAbsensi*bAbsensi/100);
              const huruf = calcGrade2(akhir);
              const hColor = huruf.startsWith('A') ? 'hsl(150 60% 45%)' : huruf.startsWith('B') ? 'hsl(200 55% 50%)' : huruf.startsWith('C') ? 'hsl(40 80% 50%)' : 'hsl(0 60% 50%)';
              const tdAkhir = row.querySelector('.td-akhir'); if (tdAkhir) tdAkhir.textContent = akhir;
              const tdHuruf = row.querySelector('.td-huruf'); if (tdHuruf) tdHuruf.innerHTML = '<span style="background:' + hColor + ';color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">' + huruf + '</span>';
            }
          });
          
          // Close panel with success feedback
          document.getElementById('bobotPanel').style.display = 'none';
        };
        
        // ── Simpan Nilai → POST to backend ──
        document.getElementById('btnSimpanNilaiInline')?.addEventListener('click', async () => {
          const kelasIdx2 = parseInt(document.getElementById('btnSimpanNilaiInline').dataset.kelasIdx);
          const kls = (window._dosenJadwalCache || [])[kelasIdx2];
          const rows = nilaiDiv.querySelectorAll('#nilaiTable tbody tr');
          const items = [];
          rows.forEach((row, ri) => {
            const inputs = row.querySelectorAll('input[type=number]');
            if (inputs.length >= 4 && kls.mahasiswa[ri]) {
              const uts = parseFloat(inputs[0].value) || 0;
              const uas = parseFloat(inputs[1].value) || 0;
              const tugas = parseFloat(inputs[2].value) || 0;
              const quiz = parseFloat(inputs[3].value) || 0;
              // Update in-memory
              kls.mahasiswa[ri].nilaiUTS = uts;
              kls.mahasiswa[ri].nilaiUAS = uas;
              kls.mahasiswa[ri].nilaiTugas = tugas;
              kls.mahasiswa[ri].nilaiQuiz = quiz;
              items.push({
                nim: kls.mahasiswa[ri].nim,
                mata_kuliah_id: kls.mkId || 0,
                semester: 4,
                uts, uas, tugas, quiz,
                kelas: kls.kelas
              });
            }
          });
          const btn = document.getElementById('btnSimpanNilaiInline');
          btn.textContent = '⏳ Menyimpan...';
          btn.disabled = true;
          const result = await bulkSaveNilai(items);
          if (result) {
            btn.textContent = '✅ Tersimpan!';
            setTimeout(() => { btn.textContent = '💾 Simpan Nilai'; btn.disabled = false; }, 2000);
          } else {
            btn.textContent = '✅ Tersimpan (Lokal)';
            btn.style.background = 'hsl(40 70% 48%)';
            setTimeout(() => { btn.textContent = '💾 Simpan Nilai'; btn.style.background = 'hsl(150 55% 45%)'; btn.disabled = false; }, 2000);
          }
        });
      }
    });
  });
}

function mhsDosenContent(user) {
  return `${dosenInfoHeader(user)}
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>👥 Data Mahasiswa per Kelas</h3></div>
    </div>
    ${(window._dosenJadwalCache || []).map(kelas => `
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;">
        <h3 style="margin:0;font-size:0.88rem;">${kelas.kode} — ${kelas.nama} (${kelas.kelas})</h3>
        <span class="badge-sm blue">${kelas.mahasiswa.length} mahasiswa</span>
      </div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>NIM</th><th>Nama Mahasiswa</th><th>Angkatan</th><th>Kehadiran</th><th>% Hadir</th></tr></thead>
          <tbody>
            ${kelas.mahasiswa.map((m,i) => {
              const pct = Math.round(m.kehadiran / 14 * 100);
              const color = pct >= 85 ? 'hsl(150 60% 45%)' : pct >= 75 ? 'hsl(40 80% 50%)' : 'hsl(0 60% 50%)';
              return `<tr>
                <td>${i+1}.</td>
                <td><strong>${m.nim}</strong></td>
                <td>${m.nama}</td>
                <td style="text-align:center;">${m.angkatan}</td>
                <td style="text-align:center;">${m.kehadiran}/14</td>
                <td style="text-align:center;"><span style="background:${color};color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:600;">${pct}%</span></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`).join('')}`;
}

function inputNilaiContent(user) {
  function calcGrade(v) {
    if (v >= 85) return 'A'; if (v >= 80) return 'A-'; if (v >= 75) return 'B+';
    if (v >= 70) return 'B'; if (v >= 65) return 'B-'; if (v >= 60) return 'C+';
    if (v >= 55) return 'C'; if (v >= 45) return 'D'; return 'E';
  }
  const totalPertemuan = 14;
  return `${dosenInfoHeader(user)}
    <div style="margin-bottom:16px;padding:14px 20px;background:hsl(200 60% 94%);border-left:4px solid hsl(200 60% 50%);border-radius:0 8px 8px 0;">
      <strong style="font-size:0.85rem;">📝 Petunjuk:</strong>
      <span style="font-size:0.82rem;color:hsl(215 15% 40%);"> Pilih kelas, edit nilai pada tabel, lalu klik Simpan Nilai. Bobot bisa dikonfigurasi per kelas via ⚙️ Atur Bobot di Jadwal Mengajar.</span>
    </div>
    ${(window._dosenJadwalCache || []).map((kelas, ki) => {
      const b = kelas.bobot || { uts: 20, uas: 30, tugas: 20, quiz: 15, absensi: 15 };
      return `
    <div class="dash-card" style="margin-bottom:20px;">
      <div class="dash-card-head" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <div>
          <h3 style="margin:0;font-size:0.88rem;">${kelas.kode} — ${kelas.nama} (${kelas.kelas})</h3>
          <div style="font-size:0.7rem;color:hsl(215 20% 55%);margin-top:2px;">Bobot: UTS ${b.uts}% · UAS ${b.uas}% · Tugas ${b.tugas}% · Quiz ${b.quiz}% · Absensi ${b.absensi}%</div>
        </div>
        <button class="btn-simpan-nilai" data-kelas-idx="${ki}" style="font-size:0.75rem;padding:6px 16px;border-radius:6px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;">💾 Simpan Nilai</button>
      </div>
      <div class="dash-card-body" style="padding:0;overflow-x:auto;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>NIM</th><th>Nama</th><th>UTS (${b.uts}%)</th><th>UAS (${b.uas}%)</th><th>Tugas (${b.tugas}%)</th><th>Quiz (${b.quiz}%)</th><th>Absensi (${b.absensi}%)</th><th>Akhir</th><th>Huruf</th></tr></thead>
          <tbody>
            ${kelas.mahasiswa.map((m,i) => {
              const nilaiAbsensi = Math.round(m.kehadiran / totalPertemuan * 100);
              const akhir = Math.round(m.nilaiUTS * b.uts/100 + m.nilaiUAS * b.uas/100 + m.nilaiTugas * b.tugas/100 + (m.nilaiQuiz||0) * b.quiz/100 + nilaiAbsensi * b.absensi/100);
              const huruf = calcGrade(akhir);
              const hColor = huruf.startsWith('A') ? 'hsl(150 60% 45%)' : huruf.startsWith('B') ? 'hsl(200 55% 50%)' : huruf.startsWith('C') ? 'hsl(40 80% 50%)' : 'hsl(0 60% 50%)';
              const inputStyle = 'width:50px;padding:4px 4px;border:1px solid hsl(215 20% 85%);border-radius:4px;text-align:center;font-size:0.78rem;';
              return `<tr>
                <td>${i+1}.</td>
                <td><strong>${m.nim}</strong></td>
                <td style="white-space:nowrap;">${m.nama}</td>
                <td style="text-align:center;"><input type="number" value="${m.nilaiUTS}" min="0" max="100" style="${inputStyle}"></td>
                <td style="text-align:center;"><input type="number" value="${m.nilaiUAS}" min="0" max="100" style="${inputStyle}"></td>
                <td style="text-align:center;"><input type="number" value="${m.nilaiTugas}" min="0" max="100" style="${inputStyle}"></td>
                <td style="text-align:center;"><input type="number" value="${m.nilaiQuiz||0}" min="0" max="100" style="${inputStyle}"></td>
                <td style="text-align:center;"><span style="display:inline-block;padding:3px 8px;border-radius:4px;background:${nilaiAbsensi>=85?'hsl(150 50% 92%)':'hsl(40 50% 92%)'};color:${nilaiAbsensi>=85?'hsl(150 60% 35%)':'hsl(40 70% 35%)'};font-weight:600;font-size:0.75rem;" title="${m.kehadiran}/${totalPertemuan} hadir">${nilaiAbsensi}</span></td>
                <td style="text-align:center;font-weight:700;">${akhir}</td>
                <td style="text-align:center;"><span style="background:${hColor};color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${huruf}</span></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
    }).join('')}`;
}

function initInputNilaiPage() {
  document.querySelectorAll('.btn-simpan-nilai').forEach(btn => {
    btn.addEventListener('click', async () => {
      const kelasIdx = parseInt(btn.dataset.kelasIdx);
      const kls = (window._dosenJadwalCache || [])[kelasIdx];
      const card = btn.closest('.dash-card');
      const rows = card.querySelectorAll('tbody tr');
      const items = [];
      rows.forEach((row, ri) => {
        const inputs = row.querySelectorAll('input[type=number]');
        if (inputs.length >= 4 && kls.mahasiswa[ri]) {
          const uts = parseFloat(inputs[0].value) || 0;
          const uas = parseFloat(inputs[1].value) || 0;
          const tugas = parseFloat(inputs[2].value) || 0;
          const quiz = parseFloat(inputs[3].value) || 0;
          // Update in-memory
          kls.mahasiswa[ri].nilaiUTS = uts;
          kls.mahasiswa[ri].nilaiUAS = uas;
          kls.mahasiswa[ri].nilaiTugas = tugas;
          kls.mahasiswa[ri].nilaiQuiz = quiz;
          items.push({
            nim: kls.mahasiswa[ri].nim,
            mata_kuliah_id: kls.mkId || 0,
            semester: 4,
            uts, uas, tugas, quiz,
            kelas: kls.kelas
          });
        }
      });
      btn.textContent = '⏳ Menyimpan...';
      btn.disabled = true;
      const result = await bulkSaveNilai(items);
      if (result) {
        btn.textContent = '✅ Tersimpan!';
        setTimeout(() => { btn.textContent = '💾 Simpan Nilai'; btn.disabled = false; }, 2000);
      } else {
        btn.textContent = '✅ Tersimpan (Lokal)';
        btn.style.background = 'hsl(40 70% 48%)';
        setTimeout(() => { btn.textContent = '💾 Simpan Nilai'; btn.style.background = 'hsl(150 55% 45%)'; btn.disabled = false; }, 2000);
      }
    });
  });
}

function rekapNilaiContent(user) {
  function calcGrade(v) {
    if (v >= 85) return 'A'; if (v >= 80) return 'A-'; if (v >= 75) return 'B+';
    if (v >= 70) return 'B'; if (v >= 65) return 'B-'; if (v >= 60) return 'C+';
    if (v >= 55) return 'C'; if (v >= 45) return 'D'; return 'E';
  }
  const totalPertemuan = 14;
  const stats = (window._dosenJadwalCache || []).map(k => {
    const b = k.bobot || { uts: 20, uas: 30, tugas: 20, quiz: 15, absensi: 15 };
    const scores = k.mahasiswa.map(m => {
      const nilaiAbsensi = Math.round(m.kehadiran / totalPertemuan * 100);
      return Math.round(m.nilaiUTS * b.uts/100 + m.nilaiUAS * b.uas/100 + m.nilaiTugas * b.tugas/100 + (m.nilaiQuiz||0) * b.quiz/100 + nilaiAbsensi * b.absensi/100);
    });
    const avg = (scores.reduce((a,b) => a+b, 0) / scores.length).toFixed(1);
    const max = Math.max(...scores);
    const min = Math.min(...scores);
    const grades = {};
    scores.forEach(s => { const g = calcGrade(s); grades[g] = (grades[g]||0)+1; });
    return { ...k, avg, max, min, grades, total: k.mahasiswa.length, bobot: b };
  });
  return `${dosenInfoHeader(user)}
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>📊 Rekap Nilai — Semester Genap ${new Date().getFullYear()}</h3></div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;margin-bottom:16px;">
      ${stats.map(s => `
      <div class="dash-card">
        <div class="dash-card-head"><h3 style="margin:0;font-size:0.85rem;">${s.kode} — ${s.nama}</h3></div>
        <div class="dash-card-body">
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px;">
            <div style="text-align:center;padding:8px;background:hsl(200 60% 94%);border-radius:6px;">
              <div style="font-size:0.65rem;color:hsl(215 15% 50%);">Rata-rata</div>
              <div style="font-size:1.1rem;font-weight:800;color:hsl(200 50% 40%);">${s.avg}</div>
            </div>
            <div style="text-align:center;padding:8px;background:hsl(150 50% 94%);border-radius:6px;">
              <div style="font-size:0.65rem;color:hsl(150 40% 40%);">Tertinggi</div>
              <div style="font-size:1.1rem;font-weight:800;color:hsl(150 50% 40%);">${s.max}</div>
            </div>
            <div style="text-align:center;padding:8px;background:hsl(0 50% 95%);border-radius:6px;">
              <div style="font-size:0.65rem;color:hsl(0 40% 45%);">Terendah</div>
              <div style="font-size:1.1rem;font-weight:800;color:hsl(0 50% 45%);">${s.min}</div>
            </div>
          </div>
          <div style="font-size:0.75rem;font-weight:600;margin-bottom:8px;">Distribusi Nilai (${s.total} mhs):</div>
          ${Object.entries(s.grades).sort().map(([g,c]) => {
            const pct = Math.round(c / s.total * 100);
            const color = g.startsWith('A') ? 'hsl(150 60% 45%)' : g.startsWith('B') ? 'hsl(200 55% 50%)' : 'hsl(40 80% 50%)';
            return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:5px;">
              <span style="font-size:0.72rem;font-weight:700;min-width:22px;">${g}</span>
              <div class="progress-wrap" style="flex:1;"><div class="progress-bar" style="width:${pct}%;background:${color};"></div></div>
              <span style="font-size:0.68rem;color:hsl(215 15% 55%);min-width:45px;">${c} (${pct}%)</span>
            </div>`;
          }).join('')}
        </div>
      </div>`).join('')}
    </div>`;
}

function absensiDosenContent(user) {
  const totalPertemuan = 14;
  // Class selector cards view
  return `${dosenInfoHeader(user)}
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>✅ Absensi Kelas — Pilih Kelas</h3></div>
      <div class="dash-card-body">
        <p style="font-size:0.82rem;color:hsl(215 15% 50%);margin:0;">Klik kelas di bawah untuk melihat dan mengelola absensi mahasiswa.</p>
      </div>
    </div>
    <div id="absensiClassGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px;">
      ${(window._dosenJadwalCache || []).map((kelas,idx) => {
        const totalMhs = kelas.mahasiswa.length;
        const avgHadir = Math.round(kelas.mahasiswa.reduce((a,m) => a + m.kehadiran,0) / totalMhs);
        const avgPct = Math.round(avgHadir / totalPertemuan * 100);
        const pctColor = avgPct >= 85 ? 'hsl(150 60% 45%)' : avgPct >= 75 ? 'hsl(40 80% 50%)' : 'hsl(0 60% 50%)';
        return `
        <div class="dash-card absensi-class-card" data-kelas-idx="${idx}" style="cursor:pointer;transition:all 0.25s;border:2px solid transparent;">
          <div style="background:linear-gradient(135deg,hsl(210 55% 42%),hsl(200 50% 55%));padding:16px 20px;border-radius:8px 8px 0 0;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);">${kelas.kode}</div>
                <div style="font-size:1rem;font-weight:700;color:white;margin-top:2px;">${kelas.nama}</div>
              </div>
              <div style="background:rgba(255,255,255,0.18);border-radius:8px;padding:6px 12px;backdrop-filter:blur(4px);">
                <div style="font-size:0.55rem;color:rgba(255,255,255,0.7);">Kelas</div>
                <div style="font-size:0.9rem;font-weight:800;color:white;">${kelas.kelas}</div>
              </div>
            </div>
          </div>
          <div class="dash-card-body" style="padding:14px 20px;">
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px;">
              <div style="text-align:center;padding:8px;background:hsl(210 50% 96%);border-radius:6px;">
                <div style="font-size:0.58rem;color:hsl(215 15% 50%);">Mahasiswa</div>
                <div style="font-size:1rem;font-weight:800;color:hsl(210 50% 40%);">${totalMhs}</div>
              </div>
              <div style="text-align:center;padding:8px;background:hsl(150 50% 95%);border-radius:6px;">
                <div style="font-size:0.58rem;color:hsl(150 40% 40%);">Avg Hadir</div>
                <div style="font-size:1rem;font-weight:800;color:hsl(150 50% 40%);">${avgHadir}/${totalPertemuan}</div>
              </div>
              <div style="text-align:center;padding:8px;background:${avgPct>=85?'hsl(150 50% 95%)':'hsl(40 50% 95%)'};border-radius:6px;">
                <div style="font-size:0.58rem;color:hsl(215 15% 50%);">Rata-rata</div>
                <div style="font-size:1rem;font-weight:800;color:${pctColor};">${avgPct}%</div>
              </div>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:0.72rem;color:hsl(215 15% 55%);">📅 ${kelas.hari}, ${kelas.jam} · 📍 ${kelas.ruang}</span>
              <span style="font-size:0.72rem;font-weight:600;color:hsl(210 55% 50%);">Buka →</span>
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>
    <div id="absensiDetailView" style="display:none;"></div>`;
}

function renderAbsensiDetail(kelasIdx) {
  const totalPertemuan = 14;
  const kelas = (window._dosenJadwalCache || [])[kelasIdx];
  const totalMhs = kelas.mahasiswa.length;
  const avgHadir = Math.round(kelas.mahasiswa.reduce((a,m) => a + m.kehadiran,0) / totalMhs);
  const avgPct = Math.round(avgHadir / totalPertemuan * 100);
  const pertemuanDates = generatePertemuanDates(kelas.hari, totalPertemuan);

  return `
    <div class="dash-card" style="margin-bottom:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,hsl(210 55% 42%),hsl(200 50% 55%));padding:18px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <div>
          <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);">${kelas.kode} · ${kelas.kelas}</div>
          <div style="font-size:1.1rem;font-weight:700;color:white;">${kelas.nama}</div>
          <div style="font-size:0.78rem;color:rgba(255,255,255,0.8);margin-top:4px;">📅 ${kelas.hari}, ${kelas.jam} · 📍 ${kelas.ruang} · 👥 ${totalMhs} mahasiswa</div>
        </div>
        <div style="display:flex;gap:10px;">
          <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;color:white;text-align:center;backdrop-filter:blur(4px);">
            <div style="font-size:0.55rem;opacity:0.7;">Avg Hadir</div>
            <div style="font-size:1rem;font-weight:800;">${avgPct}%</div>
          </div>
          <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px;color:white;text-align:center;backdrop-filter:blur(4px);">
            <div style="font-size:0.55rem;opacity:0.7;">Pertemuan</div>
            <div style="font-size:1rem;font-weight:800;">${totalPertemuan}</div>
          </div>
        </div>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px;">
      <button id="backToClassList" style="font-size:0.78rem;padding:7px 16px;border-radius:6px;cursor:pointer;background:hsl(215 20% 92%);color:hsl(215 20% 35%);border:1px solid hsl(215 20% 82%);font-weight:600;">← Kembali ke Daftar Kelas</button>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button id="btnSimpanAbsensi" data-kelas-idx="${kelasIdx}" onclick="window.__simpanAbsensi && window.__simpanAbsensi()" style="font-size:0.72rem;padding:6px 14px;border-radius:5px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;">💾 Simpan Absensi</button>
        <button id="btnCetakRekap" data-kelas-idx="${kelasIdx}" onclick="window.__cetakRekap && window.__cetakRekap()" style="font-size:0.72rem;padding:6px 14px;border-radius:5px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;">🖨️ Cetak Rekap</button>
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
              <th colspan="${totalPertemuan}" style="text-align:center;">Pertemuan ke-</th>
              <th rowspan="3" style="vertical-align:middle;">Hadir</th>
              <th rowspan="3" style="vertical-align:middle;">%</th>
            </tr>
            <tr style="background:hsl(215 20% 93%);">
              ${Array.from({length:totalPertemuan},(_,i)=>`<th style="padding:4px 6px;font-size:0.68rem;">${i+1}</th>`).join('')}
            </tr>
            <tr style="background:hsl(210 30% 90%);">
              ${pertemuanDates.map(d => `<th style="padding:2px 4px;font-size:0.55rem;font-weight:600;color:hsl(210 40% 45%);white-space:nowrap;">${formatTanggalShort(d)}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${kelas.mahasiswa.map((m,i) => {
              const pct = Math.round(m.kehadiran / totalPertemuan * 100);
              // Generate deterministic attendance pattern
              const attendance = Array.from({length:totalPertemuan}, (_,j) => j < m.kehadiran ? '✓' : '✗');
              for (let k = attendance.length - 1; k > 0; k--) {
                const j2 = Math.floor((m.nim.charCodeAt(m.nim.length-1) + k) % (k + 1));
                [attendance[k], attendance[j2]] = [attendance[j2], attendance[k]];
              }
              return `<tr>
                <td>${i+1}.</td>
                <td><strong>${m.nim}</strong></td>
                <td style="white-space:nowrap;">${m.nama}</td>
                ${attendance.map((a,ai) => `<td style="text-align:center;">
                  <span class="absensi-cell" data-nim="${m.nim}" data-pertemuan="${ai+1}" style="display:inline-block;width:22px;height:22px;line-height:22px;border-radius:4px;cursor:pointer;font-size:0.7rem;font-weight:700;background:${a==='✓'?'hsl(150 60% 45%)':'hsl(0 55% 52%)'};color:white;text-align:center;transition:background 0.15s;">${a==='✓'?'H':'A'}</span>
                </td>`).join('')}
                <td style="text-align:center;font-weight:700;">${m.kehadiran}</td>
                <td style="text-align:center;"><span style="background:${pct>=85?'hsl(150 60% 45%)':pct>=75?'hsl(40 80% 50%)':'hsl(0 60% 50%)'};color:white;padding:2px 8px;border-radius:10px;font-size:0.68rem;font-weight:600;">${pct}%</span></td>
              </tr>`;
            }).join('')}
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
    </div>`;
}

function initAbsensiDosenPage() {
  // Class card click → show detail
  document.querySelectorAll('.absensi-class-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.kelasIdx);
      const grid = document.getElementById('absensiClassGrid');
      const detail = document.getElementById('absensiDetailView');
      if (grid) grid.style.display = 'none';
      if (detail) {
        detail.style.display = 'block';
        detail.innerHTML = renderAbsensiDetail(idx);
        // Back button
        document.getElementById('backToClassList')?.addEventListener('click', () => {
          detail.style.display = 'none';
          detail.innerHTML = '';
          grid.style.display = 'grid';
        });
        // Attach cell toggle handlers
        attachAbsensiCellHandlers(detail);
        // Attach save + print handlers
        attachAbsensiSaveHandlers(detail, idx);
      }
    });
    // Hover effect
    card.addEventListener('mouseenter', () => { card.style.borderColor = 'hsl(210 55% 50%)'; card.style.transform = 'translateY(-2px)'; card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; });
    card.addEventListener('mouseleave', () => { card.style.borderColor = 'transparent'; card.style.transform = 'none'; card.style.boxShadow = 'none'; });
  });
}

// ─── Shared Absensi Helpers ─────────────────────────────────────────────
function attachAbsensiCellHandlers(container) {
  container.querySelectorAll('.absensi-cell').forEach(cell => {
    cell.addEventListener('click', (e) => {
      e.stopPropagation();
      const states = [{label:'H',bg:'hsl(150 60% 45%)'},{label:'I',bg:'hsl(40 80% 50%)'},{label:'S',bg:'hsl(30 70% 52%)'},{label:'A',bg:'hsl(0 55% 52%)'}];
      const current = cell.textContent.trim();
      const curIdx = states.findIndex(s => s.label === current);
      const next = states[(curIdx + 1) % states.length];
      cell.textContent = next.label;
      cell.style.background = next.bg;
      // Update Hadir count + % in the same row
      const row = cell.closest('tr');
      if (row) {
        const cells = row.querySelectorAll('.absensi-cell');
        const hadirCount = Array.from(cells).filter(c => c.textContent.trim() === 'H').length;
        const tds = row.querySelectorAll('td');
        // Hadir count is second-to-last td, % is last td
        if (tds.length >= 2) {
          tds[tds.length - 2].textContent = hadirCount;
          const pct = Math.round(hadirCount / cells.length * 100);
          tds[tds.length - 1].innerHTML = `<span style="background:${pct>=85?'hsl(150 60% 45%)':pct>=75?'hsl(40 80% 50%)':'hsl(0 60% 50%)'};color:white;padding:2px 8px;border-radius:10px;font-size:0.68rem;font-weight:600;">${pct}%</span>`;
        }
      }
    });
  });
}

function attachAbsensiSaveHandlers(container, kelasIdx) {
  // ── Simpan Absensi (window-level for inline onclick) ──
  window.__simpanAbsensi = async function() {
    const kls = (window._dosenJadwalCache || [])[kelasIdx];
    const items = [];
    container.querySelectorAll('.absensi-cell').forEach(cell => {
      items.push({
        krs_id: 0,
        nim: cell.dataset.nim,
        pertemuan: parseInt(cell.dataset.pertemuan),
        status: cell.textContent.trim()
      });
    });

    const btn = document.getElementById('btnSimpanAbsensi');
    if (btn) {
      btn.textContent = '⏳ Menyimpan...';
      btn.disabled = true;
    }

    // Update in-memory data
    kls.mahasiswa.forEach(m => {
      const mhsCells = items.filter(it => it.nim === m.nim);
      m.kehadiran = mhsCells.filter(it => it.status === 'H').length;
    });

    // Try backend
    try {
      const result = await bulkSaveAbsensi(items);
      if (btn) {
        if (result) {
          btn.textContent = '✅ Tersimpan!';
          btn.style.background = 'hsl(150 60% 40%)';
        } else {
          btn.textContent = '✅ Tersimpan (Lokal)';
          btn.style.background = 'hsl(40 70% 48%)';
        }
      }
    } catch(e) {
      if (btn) {
        btn.textContent = '✅ Tersimpan (Lokal)';
        btn.style.background = 'hsl(40 70% 48%)';
      }
    }
    setTimeout(() => {
      if (btn) {
        btn.textContent = '💾 Simpan Absensi';
        btn.style.background = 'hsl(150 55% 45%)';
        btn.disabled = false;
      }
    }, 2500);
  };

  // ── Cetak Rekap (window-level for inline onclick) ──
  window.__cetakRekap = function() {
    const kls = (window._dosenJadwalCache || [])[kelasIdx];
    const totalPertemuan = 14;
    // Collect current cell data
    const rowsData = [];
    const rows = container.querySelectorAll('tbody tr');
    rows.forEach((row, i) => {
      const cells = row.querySelectorAll('.absensi-cell');
      const attendance = Array.from(cells).map(c => c.textContent.trim());
      const hadir = attendance.filter(a => a === 'H').length;
      const izin = attendance.filter(a => a === 'I').length;
      const sakit = attendance.filter(a => a === 'S').length;
      const alpa = attendance.filter(a => a === 'A').length;
      rowsData.push({
        no: i + 1,
        nim: kls.mahasiswa[i]?.nim || '-',
        nama: kls.mahasiswa[i]?.nama || '-',
        attendance, hadir, izin, sakit, alpa,
        pct: Math.round(hadir / totalPertemuan * 100)
      });
    });

    const printWin = window.open('', '_blank', 'width=900,height=700');
    printWin.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Rekap Absensi - ${kls.nama}</title>
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
        <h3 style="text-align:center;margin:4px 0;">${kls.kode} — ${kls.nama} (Kelas ${kls.kelas})</h3>
        <div class="info">${kls.hari}, ${kls.jam} · Ruang ${kls.ruang} · Semester Genap ${new Date().getFullYear()}</div>
        <table>
          <thead>
            <tr>
              <th rowspan="2">No.</th>
              <th rowspan="2">NIM</th>
              <th rowspan="2">Nama</th>
              <th colspan="${totalPertemuan}">Pertemuan</th>
              <th rowspan="2">H</th>
              <th rowspan="2">I</th>
              <th rowspan="2">S</th>
              <th rowspan="2">A</th>
              <th rowspan="2">%</th>
            </tr>
            <tr>
              ${Array.from({length: totalPertemuan}, (_, i) => `<th>${i+1}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rowsData.map(r => `
              <tr>
                <td>${r.no}</td>
                <td>${r.nim}</td>
                <td style="text-align:left;">${r.nama}</td>
                ${r.attendance.map(a => `<td class="${a==='H'?'hadir':a==='I'?'izin':a==='S'?'sakit':'alpa'}">${a}</td>`).join('')}
                <td>${r.hadir}</td>
                <td>${r.izin}</td>
                <td>${r.sakit}</td>
                <td>${r.alpa}</td>
                <td>${r.pct}%</td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">Rata-rata</td>
              ${Array.from({length: totalPertemuan}, (_, i) => {
                const hadirCount = rowsData.filter(r => r.attendance[i] === 'H').length;
                return `<td>${hadirCount}/${rowsData.length}</td>`;
              }).join('')}
              <td>${rowsData.reduce((a,r)=>a+r.hadir,0)}</td>
              <td>${rowsData.reduce((a,r)=>a+r.izin,0)}</td>
              <td>${rowsData.reduce((a,r)=>a+r.sakit,0)}</td>
              <td>${rowsData.reduce((a,r)=>a+r.alpa,0)}</td>
              <td>${Math.round(rowsData.reduce((a,r)=>a+r.pct,0)/rowsData.length)}%</td>
            </tr>
          </tfoot>
        </table>
        <div style="margin-top:30px;display:flex;justify-content:space-between;font-size:12px;">
          <div>Dicetak: ${new Date().toLocaleDateString('id-ID', {day:'numeric',month:'long',year:'numeric'})}</div>
          <div style="text-align:center;">Dosen Pengampu<br><br><br><br>_______________________</div>
        </div>
      </body>
      </html>
    `);
    printWin.document.close();
    setTimeout(() => printWin.print(), 500);
  };
}

function bimbinganContent(user) {
  const avgIPK = (DOSEN_BIMBINGAN.reduce((a,m) => a + m.ipk, 0) / DOSEN_BIMBINGAN.length).toFixed(2);
  return `${dosenInfoHeader(user)}
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>🎓 Bimbingan Akademik (PA) — Dosen Pembimbing</h3></div>
      <div class="dash-card-body">
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;margin-bottom:0;">
          <div style="text-align:center;padding:12px;background:hsl(200 60% 94%);border-radius:8px;">
            <div style="font-size:0.68rem;color:hsl(215 15% 50%);">Total Mahasiswa PA</div>
            <div style="font-size:1.3rem;font-weight:800;color:hsl(200 50% 40%);">${DOSEN_BIMBINGAN.length}</div>
          </div>
          <div style="text-align:center;padding:12px;background:hsl(150 50% 94%);border-radius:8px;">
            <div style="font-size:0.68rem;color:hsl(150 40% 40%);">Rata-rata IPK</div>
            <div style="font-size:1.3rem;font-weight:800;color:hsl(150 50% 40%);">${avgIPK}</div>
          </div>
          <div style="text-align:center;padding:12px;background:hsl(40 60% 94%);border-radius:8px;">
            <div style="font-size:0.68rem;color:hsl(40 50% 40%);">Status Aktif</div>
            <div style="font-size:1.3rem;font-weight:800;color:hsl(40 60% 45%);">${DOSEN_BIMBINGAN.filter(m=>m.status==='Aktif').length}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dash-card">
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>NIM</th><th>Nama</th><th>Prodi</th><th>Angkatan</th><th>Sem.</th><th>IPK</th><th>SKS Lulus</th><th>Status</th></tr></thead>
          <tbody>
            ${DOSEN_BIMBINGAN.map((m,i) => {
              const color = m.ipk >= 3.5 ? 'hsl(150 60% 45%)' : m.ipk >= 3.0 ? 'hsl(200 55% 50%)' : 'hsl(40 80% 50%)';
              return `<tr>
                <td>${i+1}.</td>
                <td><strong>${m.nim}</strong></td>
                <td>${m.nama}</td>
                <td>${m.prodi}</td>
                <td style="text-align:center;">${m.angkatan}</td>
                <td style="text-align:center;">${m.semester}</td>
                <td style="text-align:center;"><span style="background:${color};color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${m.ipk}</span></td>
                <td style="text-align:center;">${m.sksLulus}</td>
                <td style="text-align:center;"><span class="badge-sm green">${m.status}</span></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
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

// ---- BAP SUB-PAGES ----

// ---- Kelas Management (persisted in localStorage) ----
function getKelasList() {
  try {
    const stored = localStorage.getItem('siakad_kelas_list');
    if (stored) return JSON.parse(stored);
  } catch(e) {}
  return ['RA-101','RA-201','RA-202','RA-203','RA-204','RA-205','RN-101','RN-102','RN-103','RN-104','RN-105','LAB-K1'];
}
function saveKelasList(list) {
  localStorage.setItem('siakad_kelas_list', JSON.stringify(list));
}

function jadwalManageContent() {
  const yr = new Date().getFullYear();
  const kelasList = getKelasList();
  // Build MK list from KURIKULUM_DATA
  const allMK = [];
  ['niaga','negara'].forEach(prodi => {
    const d = KURIKULUM_DATA[prodi];
    if (!d) return;
    d.semester.forEach(sem => {
      sem.mk.forEach(mk => {
        allMK.push({ ...mk, prodi, prodiNama: d.nama, semester: sem.no });
      });
    });
  });
  // Build unique dosen from DOSEN_LIST
  const dosenOptions = DOSEN_LIST.filter(d => d.status === 'Aktif').map(d => d.nama);

  // Dummy jadwal data for preview — using real MK names
  // ---- Generate full schedule from KURIKULUM_DATA ----
  // Ensure JADWAL_DUMMY is initialized (reuse global function)
  initJadwalDummy();

  const tipeColors = { 'Offline':'hsl(210 55% 50%)','Online':'hsl(150 55% 45%)','Hybrid':'hsl(275 55% 55%)' };
  const tipeBg = { 'Offline':'hsl(210 50% 94%)','Online':'hsl(150 50% 94%)','Hybrid':'hsl(275 50% 94%)' };
  const prodiColors = { 'niaga':'hsl(35 75% 50%)','negara':'hsl(145 55% 45%)' };
  const prodiBg = { 'niaga':'hsl(35 70% 94%)','negara':'hsl(145 50% 93%)' };

  const totalOnline = JADWAL_DUMMY.filter(j=>j.tipeKelas==='Online').length;
  const totalOffline = JADWAL_DUMMY.filter(j=>j.tipeKelas==='Offline').length;
  const totalHybrid = JADWAL_DUMMY.filter(j=>j.tipeKelas==='Hybrid').length;
  const totalNiaga = JADWAL_DUMMY.filter(j=>j.prodi==='niaga').length;
  const totalNegara = JADWAL_DUMMY.filter(j=>j.prodi==='negara').length;

  return `
    <div class="dash-card" style="margin-bottom:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,hsl(210 55% 35%),hsl(200 50% 48%));padding:24px 28px;">
        <div style="font-size:1.2rem;font-weight:700;color:white;">\ud83d\udcc5 Manajemen Jadwal Perkuliahan</div>
        <div style="font-size:0.82rem;color:rgba(255,255,255,0.75);margin-top:4px;">Semester Genap ${yr} \u2014 Kelola ruang, jam, dan tipe kelas \u2022 ${allMK.length} Mata Kuliah tersedia</div>
      </div>
      <div class="dash-card-body">
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;margin-bottom:0;">
          <div style="text-align:center;padding:14px;background:hsl(210 50% 96%);border-radius:8px;">
            <div style="font-size:0.65rem;color:hsl(215 15% 50%);">Total Jadwal</div>
            <div style="font-size:1.5rem;font-weight:800;color:hsl(210 50% 40%);">${JADWAL_DUMMY.length}</div>
          </div>
          <div style="text-align:center;padding:14px;background:hsl(35 70% 94%);border-radius:8px;">
            <div style="font-size:0.65rem;color:hsl(35 60% 40%);">\ud83c\udfea Adm. Niaga</div>
            <div style="font-size:1.5rem;font-weight:800;color:hsl(35 75% 50%);">${totalNiaga}</div>
          </div>
          <div style="text-align:center;padding:14px;background:hsl(145 50% 93%);border-radius:8px;">
            <div style="font-size:0.65rem;color:hsl(145 40% 38%);">\ud83c\udfe6 Adm. Negara</div>
            <div style="font-size:1.5rem;font-weight:800;color:hsl(145 55% 45%);">${totalNegara}</div>
          </div>
          <div style="text-align:center;padding:14px;background:hsl(210 50% 94%);border-radius:8px;">
            <div style="font-size:0.65rem;color:hsl(210 45% 45%);">\ud83c\udfeb Offline</div>
            <div style="font-size:1.5rem;font-weight:800;color:hsl(210 55% 50%);">${totalOffline}</div>
          </div>
          <div style="text-align:center;padding:14px;background:hsl(150 50% 94%);border-radius:8px;">
            <div style="font-size:0.65rem;color:hsl(150 40% 40%);">\ud83c\udf10 Online</div>
            <div style="font-size:1.5rem;font-weight:800;color:hsl(150 55% 45%);">${totalOnline}</div>
          </div>
          <div style="text-align:center;padding:14px;background:hsl(275 50% 94%);border-radius:8px;">
            <div style="font-size:0.65rem;color:hsl(275 40% 45%);">\ud83d\udd04 Hybrid</div>
            <div style="font-size:1.5rem;font-weight:800;color:hsl(275 55% 55%);">${totalHybrid}</div>
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
          ${[...new Set(JADWAL_DUMMY.map(j => j.dosen).filter(d => d && d !== '-'))].sort().map(d => `<option value="${d}">${d}</option>`).join('')}
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
            ${JADWAL_DUMMY.map((j,i) => {
              const tColor = tipeColors[j.tipeKelas] || 'hsl(215 15% 50%)';
              const tBg = tipeBg[j.tipeKelas] || 'hsl(215 20% 95%)';
              const tIcon = j.tipeKelas === 'Online' ? '\ud83c\udf10' : j.tipeKelas === 'Hybrid' ? '\ud83d\udd04' : '\ud83c\udfeb';
              const pColor = prodiColors[j.prodi] || 'hsl(215 15% 50%)';
              const pBg = prodiBg[j.prodi] || 'hsl(215 20% 95%)';
              const pLabel = j.prodi === 'niaga' ? 'Niaga' : 'Negara';
              const pertemuanDates = generatePertemuanDates(j.hari, 14);
              const modes = j.modePertemuan || Array(14).fill('offline');
              const onlineCount = modes.filter(x => x === 'online').length;
              const offlineCount = 14 - onlineCount;
              return `<tr data-id="${j.id}" data-prodi="${j.prodi}" data-smt="${j.semester}" data-hari="${j.hari}" data-tipe="${j.tipeKelas}" data-dosen="${j.dosen}">
                <td>${i+1}.</td>
                <td><span style="padding:2px 8px;border-radius:10px;font-size:0.62rem;font-weight:700;background:${pBg};color:${pColor};">${pLabel}</span></td>
                <td style="text-align:center;"><span style="display:inline-block;width:22px;height:22px;line-height:22px;border-radius:50%;background:hsl(215 20% 92%);font-size:0.65rem;font-weight:800;color:hsl(215 30% 45%);">${j.semester}</span></td>
                <td><strong>${j.kodeMK}</strong></td>
                <td style="white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;">${j.namaMK}</td>
                <td style="white-space:nowrap;font-size:0.72rem;max-width:180px;overflow:hidden;text-overflow:ellipsis;">${j.dosen}</td>
                <td><strong>${j.hari}</strong></td>
                <td class="sch-time" style="white-space:nowrap;">${j.jamMulai}-${j.jamSelesai}</td>
                <td style="font-weight:600;font-size:0.72rem;">${j.tipeKelas === 'Online' ? '<span style="color:hsl(215 15% 60%);font-style:italic;">\u2014 (Online)</span>' : j.ruang}</td>
                <td><span style="padding:3px 10px;border-radius:12px;font-size:0.68rem;font-weight:700;background:${tBg};color:${tColor};">${tIcon} ${j.tipeKelas}</span></td>

                <td style="text-align:center;">${j.sks}</td>
                <td style="text-align:center;white-space:nowrap;">
                  <button class="jadwal-date-btn" data-id="${j.id}" title="Lihat Detail Pertemuan" style="font-size:0.6rem;padding:3px 6px;border-radius:4px;cursor:pointer;background:linear-gradient(135deg,hsl(200 60% 50%),hsl(210 55% 45%));color:white;border:none;font-weight:700;margin-right:2px;">📆</button>
                  <button class="jadwal-ai-btn" data-id="${j.id}" title="AI Rekomendasi Jadwal" style="font-size:0.6rem;padding:3px 6px;border-radius:4px;cursor:pointer;background:linear-gradient(135deg,hsl(260 65% 55%),hsl(280 55% 50%));color:white;border:none;font-weight:700;margin-right:3px;">\ud83e\udd16</button>
                  <button class="jadwal-edit-btn" data-id="${j.id}" style="font-size:0.65rem;padding:3px 8px;border-radius:4px;cursor:pointer;background:hsl(40 80% 50%);color:white;border:none;font-weight:600;">\u270f\ufe0f Edit</button>
                  <button class="jadwal-del-btn" data-id="${j.id}" style="font-size:0.65rem;padding:3px 8px;border-radius:4px;cursor:pointer;background:hsl(0 55% 52%);color:white;border:none;font-weight:600;margin-left:3px;">\ud83d\uddd1\ufe0f</button>
                </td>
              </tr>
              <tr class="jadwal-detail-row" data-parent-id="${j.id}" style="display:none;">
                <td colspan="12" style="padding:0;border-top:none;">
                  <div style="background:linear-gradient(180deg,hsl(210 30% 97%),hsl(210 20% 99%));padding:14px 18px;border-top:2px solid hsl(200 55% 75%);">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px;">
                      <div>
                        <div style="font-size:0.78rem;font-weight:700;color:hsl(210 50% 38%);">📆 Detail 14 Pertemuan — ${j.kodeMK} ${j.namaMK}</div>
                        <div style="font-size:0.62rem;color:hsl(215 15% 55%);margin-top:2px;">💡 Klik kartu untuk atur jadwal, tanggal, dan jam pertemuan • Cocok untuk kelas pengganti</div>
                      </div>
                      <div style="display:flex;gap:8px;align-items:center;">
                        <span class="jadwal-mode-legend" data-jid="${j.id}" style="display:inline-flex;gap:8px;font-size:0.65rem;">
                          <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:8px;height:8px;border-radius:2px;background:hsl(210 55% 50%);display:inline-block;"></span> Offline (🏫 <span class="off-count">${offlineCount}</span>)</span>
                          <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:8px;height:8px;border-radius:2px;background:hsl(150 60% 45%);display:inline-block;"></span> Online (🌐 <span class="on-count">${onlineCount}</span>)</span>
                        </span>
                        <button class="jadwal-save-mode-btn" data-jid="${j.id}" style="font-size:0.62rem;padding:4px 12px;border-radius:6px;cursor:pointer;background:linear-gradient(135deg,hsl(150 55% 45%),hsl(160 50% 42%));color:white;border:none;font-weight:700;display:none;">💾 Simpan</button>
                      </div>
                    </div>
                    <div class="jadwal-pertemuan-grid" data-jid="${j.id}" style="display:grid;grid-template-columns:repeat(14,1fr);gap:4px;">
                      ${pertemuanDates.map((d, pi) => {
                        const custom = j.customSchedule && j.customSchedule[pi];
                        const mode = custom ? (custom.mode || modes[pi]) : modes[pi];
                        const isOnline = mode === 'online';
                        const origIsoDate = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
                        const displayIsoDate = custom && custom.date ? custom.date : origIsoDate;
                        const displayDate = custom && custom.date ? new Date(custom.date + 'T00:00:00') : d;
                        const isRescheduled = custom && custom.date && custom.date !== origIsoDate;
                        const cardStart = custom && custom.start ? custom.start : j.jamMulai;
                        const cardEnd = custom && custom.end ? custom.end : j.jamSelesai;
                        const cardNote = custom && custom.note ? custom.note : '';
                        const bg = isRescheduled ? 'linear-gradient(135deg,hsl(40 65% 92%),hsl(40 60% 88%))' : isOnline ? 'linear-gradient(135deg,hsl(150 50% 92%),hsl(150 45% 88%))' : 'linear-gradient(135deg,hsl(210 40% 95%),hsl(210 35% 91%))';
                        const borderColor = isRescheduled ? 'hsl(40 65% 65%)' : isOnline ? 'hsl(150 55% 70%)' : 'hsl(210 40% 82%)';
                        const icon = isRescheduled ? '🔄' : isOnline ? '🌐' : '🏫';
                        const label = isRescheduled ? 'Pengganti' : isOnline ? 'Online' : 'Offline';
                        const labelColor = isRescheduled ? 'hsl(40 65% 35%)' : isOnline ? 'hsl(150 55% 35%)' : 'hsl(210 45% 40%)';
                        const dateColor = isRescheduled ? 'hsl(40 60% 30%)' : 'hsl(210 40% 38%)';
                        return `<div class="prt-mode-card" data-jid="${j.id}" data-pi="${pi}" data-mode="${mode}" data-orig-date="${origIsoDate}" data-date="${displayIsoDate}" data-start="${cardStart}" data-end="${cardEnd}" data-note="${cardNote.replace(/"/g,'&quot;')}" style="background:${bg};border:1px solid ${borderColor};border-radius:8px;padding:5px 3px;text-align:center;cursor:pointer;transition:all 0.2s ease;user-select:none;position:relative;" title="${formatTanggalFull(displayDate)} — ${label} • ${cardStart}-${cardEnd}${cardNote ? ' • 📝 ' + cardNote : ''} (Klik untuk edit)" onclick="window.__openPertemuanEdit && window.__openPertemuanEdit(this,${j.id},${pi})">
                          <div style="font-size:0.5rem;font-weight:800;color:hsl(210 30% 45%);">P${pi+1}</div>
                          <div class="prt-date-label" style="font-size:0.58rem;font-weight:700;color:${dateColor};margin:1px 0;">${formatTanggalShort(displayDate)}</div>
                          <div class="prt-time-label" style="font-size:0.48rem;color:hsl(215 20% 50%);margin-bottom:1px;">${cardStart}-${cardEnd}</div>
                          <div class="prt-icon" style="font-size:0.65rem;">${icon}</div>
                          <div class="prt-label" style="font-size:0.46rem;font-weight:700;color:${labelColor};margin-top:1px;">${label}</div>
                          <div class="prt-note-badge" style="${cardNote ? '' : 'display:none;'}position:absolute;top:-4px;right:-4px;width:14px;height:14px;border-radius:50%;background:hsl(40 85% 55%);font-size:0.42rem;line-height:14px;color:white;font-weight:800;" title="${cardNote ? '📝 ' + cardNote : 'Ada catatan'}">📝</div>
                        </div>`;
                      }).join('')}
                    </div>
                  </div>
                </td>
              </tr>`;
            }).join('')}
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
          <span>Adm. Niaga: <strong>${totalNiaga} jadwal</strong></span>
          <span>Adm. Negara: <strong>${totalNegara} jadwal</strong></span>
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
    </div>`;
}

function renderJadwalForm(editData) {
  const isEdit = !!editData;
  const days = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const inputStyle = `padding:8px 12px;border:1px solid hsl(215 20% 85%);border-radius:6px;font-size:0.8rem;width:100%;box-sizing:border-box;`;
  const labelStyle = `font-size:0.72rem;font-weight:600;color:hsl(215 15% 45%);margin-bottom:4px;display:block;`;

  // Build MK options grouped by semester
  function mkOptionsForProdi(prodiKey) {
    const d = KURIKULUM_DATA[prodiKey];
    if (!d) return '';
    let opts = '';
    d.semester.forEach(sem => {
      opts += `<optgroup label="Semester ${sem.no}">`;
      sem.mk.forEach(mk => {
        const sel = editData && editData.kodeMK === mk.kode ? ' selected' : '';
        opts += `<option value="${mk.kode}" data-nama="${mk.nama}" data-dosen="${mk.dosen}" data-sks="${mk.sks}"${sel}>${mk.kode} \u2014 ${mk.nama} (${mk.sks} SKS)</option>`;
      });
      opts += '</optgroup>';
    });
    return opts;
  }

  // Build dosen options
  const dosenOpts = DOSEN_LIST.filter(d => d.status === 'Aktif').map(d => {
    const sel = editData && editData.dosen === d.nama ? ' selected' : '';
    return `<option value="${d.nama}"${sel}>${d.nama}</option>`;
  }).join('');

  const selProdi = editData?.prodi || 'niaga';

  return `
    <div class="dash-card" style="overflow:hidden;border:2px solid hsl(210 55% 50%);">
      <div style="background:linear-gradient(135deg,hsl(210 55% 42%),hsl(200 50% 55%));padding:14px 20px;">
        <div style="font-size:0.95rem;font-weight:700;color:white;">${isEdit ? '\u270f\ufe0f Edit Jadwal' : '\u2795 Tambah Jadwal Baru'}</div>
        <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);margin-top:2px;">Pilih prodi terlebih dahulu, lalu pilih mata kuliah dari kurikulum</div>
      </div>
      <div class="dash-card-body" style="padding:20px;">
        <!-- Row 1: Prodi + MK -->
        <div style="display:grid;grid-template-columns:200px 1fr;gap:14px;margin-bottom:14px;">
          <div>
            <label style="${labelStyle}">\ud83c\udf93 Program Studi</label>
            <select id="jfProdi" style="${inputStyle}font-weight:600;">
              <option value="niaga"${selProdi==='niaga'?' selected':''}>\ud83c\udfea Adm. Niaga</option>
              <option value="negara"${selProdi==='negara'?' selected':''}>\ud83c\udfe6 Adm. Negara</option>
            </select>
          </div>
          <div>
            <label style="${labelStyle}">\ud83d\udcda Mata Kuliah <span style="font-size:0.62rem;color:hsl(150 50% 45%);">(otomatis dari kurikulum)</span></label>
            <select id="jfMK" style="${inputStyle}">
              <option value="">-- Pilih Mata Kuliah --</option>
              ${mkOptionsForProdi(selProdi)}
            </select>
          </div>
        </div>
        <!-- Row 2: Details auto-filled -->
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px;margin-bottom:14px;">
          <div><label style="${labelStyle}">Kode MK</label><input id="jfKode" type="text" value="${editData?.kodeMK||''}" readonly style="${inputStyle}background:hsl(215 20% 97%);color:hsl(215 15% 55%);"></div>
          <div><label style="${labelStyle}">Dosen Pengampu <span style="font-size:0.62rem;color:hsl(200 50% 50%);">(bisa diganti)</span></label>
            <select id="jfDosen" style="${inputStyle}">
              <option value="">-- Pilih Dosen --</option>
              ${dosenOpts}
            </select>
          </div>
          <div><label style="${labelStyle}">SKS</label><input id="jfSks" type="number" value="${editData?.sks||''}" readonly style="${inputStyle}background:hsl(215 20% 97%);width:80px;font-weight:700;"></div>
        </div>
        <!-- Row 3: Schedule -->
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:14px;margin-bottom:14px;">
          <div><label style="${labelStyle}">Hari</label><select id="jfHari" style="${inputStyle}">${days.map(d=>`<option${editData?.hari===d?' selected':''}>${d}</option>`).join('')}</select></div>
          <div><label style="${labelStyle}">Jam Mulai</label><input id="jfMulai" type="time" value="${editData?.jamMulai||'07:30'}" style="${inputStyle}"></div>
          <div><label style="${labelStyle}">Jam Selesai</label><input id="jfSelesai" type="time" value="${editData?.jamSelesai||'09:10'}" style="${inputStyle}"></div>
          <div><label style="${labelStyle}">Tipe Kelas</label>
            <div style="display:flex;gap:6px;margin-top:2px;" id="jfTipeGroup">
              ${['Offline','Online','Hybrid'].map(t => {
                const sel = (editData?.tipeKelas||'Offline') === t;
                const icon = t==='Offline'?'\ud83c\udfeb':t==='Online'?'\ud83c\udf10':'\ud83d\udd04';
                const tc = t==='Offline'?'hsl(210 55% 50%)':t==='Online'?'hsl(150 55% 45%)':'hsl(275 55% 55%)';
                return `<button class="tipe-kelas-opt" data-tipe="${t}" style="flex:1;padding:8px 6px;border-radius:6px;cursor:pointer;font-size:0.72rem;font-weight:700;border:2px solid ${sel?tc:'hsl(215 20% 85%)'};background:${sel?tc:'white'};color:${sel?'white':tc};transition:all 0.2s;">${icon} ${t}</button>`;
              }).join('')}
            </div>
          </div>
          <div id="jfRuangWrap"><label style="${labelStyle}">Ruang Kelas</label><input id="jfRuang" type="text" value="${editData?.ruang||''}" placeholder="RA-201" style="${inputStyle}"></div>
        </div>
        <div style="display:flex;gap:10px;margin-top:18px;justify-content:flex-end;">
          <button id="jfCancel" style="padding:8px 20px;border-radius:6px;background:hsl(215 20% 92%);color:hsl(215 20% 35%);border:1px solid hsl(215 20% 82%);font-weight:600;font-size:0.8rem;cursor:pointer;">Batal</button>
          <button id="jfSave" style="padding:8px 24px;border-radius:6px;background:linear-gradient(135deg,hsl(150 55% 45%),hsl(160 50% 42%));color:white;border:none;font-weight:700;font-size:0.8rem;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.12);">\ud83d\udcbe ${isEdit ? 'Simpan Perubahan' : 'Tambah Jadwal'}</button>
        </div>
      </div>
    </div>`;
}

function initJadwalManagePage() {
  const formArea = document.getElementById('jadwalFormArea');

  // ---- Table filter handlers ----
  function applyTableFilters() {
    const fProdi = document.getElementById('jadwalFilterProdi')?.value || '';
    const fSmt = document.getElementById('jadwalFilterSmt')?.value || '';
    const fHari = document.getElementById('jadwalFilterHari')?.value || '';
    const fTipe = document.getElementById('jadwalFilterTipe')?.value || '';
    const fDosen = document.getElementById('jadwalFilterDosen')?.value || '';

    let visibleCount = 0;
    // Hide all detail rows when filtering
    document.querySelectorAll('.jadwal-detail-row').forEach(r => r.style.display = 'none');
    document.querySelectorAll('#jadwalTable tbody tr:not(.jadwal-detail-row)').forEach(row => {
      const show = (!fProdi || row.dataset.prodi === fProdi)
        && (!fSmt || row.dataset.smt === fSmt)
        && (!fHari || row.dataset.hari === fHari)
        && (!fTipe || row.dataset.tipe === fTipe)
        && (!fDosen || (row.dataset.dosen || '').includes(fDosen))
;
      row.style.display = show ? '' : 'none';
      if (show) visibleCount++;
    });
    const countEl = document.getElementById('jadwalCount');
    if (countEl) countEl.textContent = `Menampilkan ${visibleCount} dari ${JADWAL_DUMMY.length} jadwal`;
  }
  document.getElementById('jadwalFilterProdi')?.addEventListener('change', applyTableFilters);
  document.getElementById('jadwalFilterSmt')?.addEventListener('change', applyTableFilters);
  document.getElementById('jadwalFilterHari')?.addEventListener('change', applyTableFilters);
  document.getElementById('jadwalFilterTipe')?.addEventListener('change', applyTableFilters);
  document.getElementById('jadwalFilterDosen')?.addEventListener('change', applyTableFilters);

  applyTableFilters(); // show initial count

  // ---- Add button ----
  document.getElementById('btnTambahJadwal')?.addEventListener('click', () => {
    formArea.style.display = 'block';
    formArea.innerHTML = renderJadwalForm(null);
    formArea.scrollIntoView({ behavior:'smooth', block:'start' });
    initFormHandlers();
  });

  // ---- Detail Pertemuan toggle (📆 button) ----
  document.querySelectorAll('.jadwal-date-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const jid = btn.dataset.id;
      const detailRow = document.querySelector(`.jadwal-detail-row[data-parent-id="${jid}"]`);
      if (detailRow) {
        const isVisible = detailRow.style.display !== 'none';
        // Close all other detail rows first
        document.querySelectorAll('.jadwal-detail-row').forEach(r => r.style.display = 'none');
        document.querySelectorAll('.jadwal-date-btn').forEach(b => b.style.background = 'linear-gradient(135deg,hsl(200 60% 50%),hsl(210 55% 45%))');
        if (!isVisible) {
          detailRow.style.display = 'table-row';
          btn.style.background = 'linear-gradient(135deg,hsl(200 60% 35%),hsl(210 55% 30%))';
        }
      }
    });
  });

  // ---- Pertemuan Edit Popup ----
  // Create the popup once
  let prtPopup = document.getElementById('prt-edit-popup');
  if (!prtPopup) {
    prtPopup = document.createElement('div');
    prtPopup.id = 'prt-edit-popup';
    prtPopup.style.cssText = 'display:none;position:absolute;z-index:9999;background:white;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.22);padding:16px;width:300px;border:2px solid hsl(210 40% 82%);';
    document.body.appendChild(prtPopup);
  }

  // Close popup when clicking outside
  document.addEventListener('click', (e) => {
    if (prtPopup.style.display !== 'none' && !prtPopup.contains(e.target) && !e.target.closest('.prt-mode-card')) {
      prtPopup.style.display = 'none';
    }
  });

  window.__openPertemuanEdit = function(cardEl, jadwalId, pi) {
    const entry = JADWAL_DUMMY.find(j => j.id === jadwalId);
    if (!entry) return;

    // Get card data
    const currentMode = cardEl.dataset.mode || 'offline';
    const currentDate = cardEl.dataset.date;
    const origDate = cardEl.dataset.origDate;
    const currentStart = cardEl.dataset.start || entry.jamMulai;
    const currentEnd = cardEl.dataset.end || entry.jamSelesai;
    const currentNote = cardEl.dataset.note || '';
    const isRescheduled = currentDate !== origDate;

    // Position popup near the card
    const rect = cardEl.getBoundingClientRect();
    prtPopup.style.display = 'block';
    const popupLeft = Math.min(rect.left + window.scrollX, window.innerWidth - 320);
    const popupTop = rect.bottom + window.scrollY + 6;
    prtPopup.style.left = popupLeft + 'px';
    prtPopup.style.top = popupTop + 'px';

    prtPopup.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div style="font-size:0.82rem;font-weight:800;color:hsl(210 50% 35%);">📝 Edit Pertemuan ${pi+1}</div>
        <button id="prtPopupClose" style="background:none;border:none;font-size:1rem;cursor:pointer;color:hsl(215 15% 50%);">✕</button>
      </div>
      <div style="font-size:0.68rem;color:hsl(215 15% 55%);margin-bottom:12px;padding:6px 8px;background:hsl(210 30% 97%);border-radius:6px;">
        <strong>${entry.kodeMK}</strong> — ${entry.namaMK}
        ${isRescheduled ? '<span style="margin-left:6px;padding:1px 6px;border-radius:6px;background:hsl(40 85% 55%);color:white;font-size:0.55rem;font-weight:700;">🔄 Reschedule</span>' : ''}
      </div>

      <div style="margin-bottom:10px;">
        <label style="font-size:0.68rem;font-weight:700;color:hsl(215 20% 40%);display:block;margin-bottom:3px;">📅 Tanggal</label>
        <input type="date" id="prtEditDate" value="${currentDate}" style="width:100%;padding:6px 8px;border:1px solid hsl(215 20% 82%);border-radius:6px;font-size:0.75rem;box-sizing:border-box;">
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
        <div>
          <label style="font-size:0.68rem;font-weight:700;color:hsl(215 20% 40%);display:block;margin-bottom:3px;">🕐 Jam Mulai</label>
          <input type="time" id="prtEditStart" value="${currentStart}" style="width:100%;padding:6px 8px;border:1px solid hsl(215 20% 82%);border-radius:6px;font-size:0.75rem;box-sizing:border-box;">
        </div>
        <div>
          <label style="font-size:0.68rem;font-weight:700;color:hsl(215 20% 40%);display:block;margin-bottom:3px;">🕐 Jam Selesai</label>
          <input type="time" id="prtEditEnd" value="${currentEnd}" style="width:100%;padding:6px 8px;border:1px solid hsl(215 20% 82%);border-radius:6px;font-size:0.75rem;box-sizing:border-box;">
        </div>
      </div>

      <div style="margin-bottom:10px;">
        <label style="font-size:0.68rem;font-weight:700;color:hsl(215 20% 40%);display:block;margin-bottom:5px;">🔀 Mode Kelas</label>
        <div style="display:flex;gap:6px;">
          <button id="prtModeOffline" style="flex:1;padding:6px;border-radius:6px;border:2px solid ${currentMode === 'offline' ? 'hsl(210 55% 50%)' : 'hsl(215 20% 85%)'};background:${currentMode === 'offline' ? 'hsl(210 50% 94%)' : 'white'};cursor:pointer;font-size:0.7rem;font-weight:700;color:hsl(210 55% 40%);">🏫 Offline</button>
          <button id="prtModeOnline" style="flex:1;padding:6px;border-radius:6px;border:2px solid ${currentMode === 'online' ? 'hsl(150 55% 45%)' : 'hsl(215 20% 85%)'};background:${currentMode === 'online' ? 'hsl(150 50% 94%)' : 'white'};cursor:pointer;font-size:0.7rem;font-weight:700;color:hsl(150 55% 38%);">🌐 Online</button>
        </div>
      </div>

      <div style="margin-bottom:12px;">
        <label style="font-size:0.68rem;font-weight:700;color:hsl(215 20% 40%);display:block;margin-bottom:3px;">📄 Catatan <span style="font-weight:400;color:hsl(215 15% 60%);">(opsional, misal: Kelas Pengganti)</span></label>
        <input type="text" id="prtEditNote" value="${currentNote}" placeholder="Cth: Kelas Pengganti - Dosen Izin" style="width:100%;padding:6px 8px;border:1px solid hsl(215 20% 82%);border-radius:6px;font-size:0.72rem;box-sizing:border-box;">
      </div>

      <div style="display:flex;gap:6px;justify-content:flex-end;">
        <button id="prtResetBtn" style="padding:5px 12px;border-radius:6px;border:1px solid hsl(215 20% 82%);background:white;cursor:pointer;font-size:0.68rem;font-weight:600;color:hsl(215 15% 50%);">↩️ Reset</button>
        <button id="prtCancelBtn" style="padding:5px 12px;border-radius:6px;border:1px solid hsl(215 20% 82%);background:white;cursor:pointer;font-size:0.68rem;font-weight:600;color:hsl(0 55% 50%);">Batal</button>
        <button id="prtSaveBtn" style="padding:5px 16px;border-radius:6px;border:none;background:linear-gradient(135deg,hsl(150 55% 45%),hsl(160 50% 42%));color:white;cursor:pointer;font-size:0.68rem;font-weight:700;">✅ Simpan</button>
      </div>
    `;

    // Mode selection state
    let selectedMode = currentMode;
    const offBtn = document.getElementById('prtModeOffline');
    const onBtn = document.getElementById('prtModeOnline');

    function updateModeButtons() {
      offBtn.style.borderColor = selectedMode === 'offline' ? 'hsl(210 55% 50%)' : 'hsl(215 20% 85%)';
      offBtn.style.background = selectedMode === 'offline' ? 'hsl(210 50% 94%)' : 'white';
      onBtn.style.borderColor = selectedMode === 'online' ? 'hsl(150 55% 45%)' : 'hsl(215 20% 85%)';
      onBtn.style.background = selectedMode === 'online' ? 'hsl(150 50% 94%)' : 'white';
    }

    offBtn.onclick = (e) => { e.stopPropagation(); selectedMode = 'offline'; updateModeButtons(); };
    onBtn.onclick = (e) => { e.stopPropagation(); selectedMode = 'online'; updateModeButtons(); };

    // Close
    document.getElementById('prtPopupClose').onclick = (e) => { e.stopPropagation(); prtPopup.style.display = 'none'; };
    document.getElementById('prtCancelBtn').onclick = (e) => { e.stopPropagation(); prtPopup.style.display = 'none'; };

    // Reset to original
    document.getElementById('prtResetBtn').onclick = (e) => {
      e.stopPropagation();
      document.getElementById('prtEditDate').value = origDate;
      document.getElementById('prtEditStart').value = entry.jamMulai;
      document.getElementById('prtEditEnd').value = entry.jamSelesai;
      document.getElementById('prtEditNote').value = '';
      selectedMode = entry.modePertemuan[pi];
      updateModeButtons();
    };

    // Save
    document.getElementById('prtSaveBtn').onclick = async (e) => {
      e.stopPropagation();
      const newDate = document.getElementById('prtEditDate').value;
      const newStart = document.getElementById('prtEditStart').value;
      const newEnd = document.getElementById('prtEditEnd').value;
      const newNote = document.getElementById('prtEditNote').value.trim();

      // Update JADWAL_DUMMY
      entry.modePertemuan[pi] = selectedMode;

      // Store custom schedule in entry
      if (!entry.customSchedule) entry.customSchedule = {};
      entry.customSchedule[pi] = { date: newDate, start: newStart, end: newEnd, note: newNote, mode: selectedMode };

      // Update card visually
      const isOnline = selectedMode === 'online';
      const isChanged = newDate !== origDate;
      cardEl.dataset.mode = selectedMode;
      cardEl.dataset.date = newDate;
      cardEl.dataset.start = newStart;
      cardEl.dataset.end = newEnd;
      cardEl.dataset.note = newNote;

      // Background
      const cardBg = isChanged
        ? (isOnline ? 'linear-gradient(135deg,hsl(40 70% 92%),hsl(150 40% 90%))' : 'linear-gradient(135deg,hsl(40 70% 92%),hsl(40 60% 88%))')
        : (isOnline ? 'linear-gradient(135deg,hsl(150 50% 92%),hsl(150 45% 88%))' : 'linear-gradient(135deg,hsl(210 40% 95%),hsl(210 35% 91%))');
      const cardBorder = isChanged ? 'hsl(40 70% 65%)' : (isOnline ? 'hsl(150 55% 70%)' : 'hsl(210 40% 82%)');
      cardEl.style.background = cardBg;
      cardEl.style.borderColor = cardBorder;

      // Update inner elements
      const dateLabel = cardEl.querySelector('.prt-date-label');
      const timeLabel = cardEl.querySelector('.prt-time-label');
      const iconEl = cardEl.querySelector('.prt-icon');
      const labelEl = cardEl.querySelector('.prt-label');
      const noteBadge = cardEl.querySelector('.prt-note-badge');

      if (dateLabel) {
        const dp = newDate.split('-');
        const dObj = new Date(parseInt(dp[0]), parseInt(dp[1])-1, parseInt(dp[2]));
        dateLabel.textContent = formatTanggalShort(dObj);
        if (isChanged) dateLabel.style.color = 'hsl(40 70% 35%)';
        else dateLabel.style.color = 'hsl(210 40% 38%)';
      }
      if (timeLabel) {
        timeLabel.textContent = newStart + '-' + newEnd;
        if (newStart !== entry.jamMulai || newEnd !== entry.jamSelesai) timeLabel.style.color = 'hsl(40 60% 40%)';
        else timeLabel.style.color = 'hsl(215 20% 50%)';
      }
      if (iconEl) iconEl.textContent = isOnline ? '🌐' : '🏫';
      if (labelEl) {
        if (isChanged) {
          labelEl.textContent = '🔄 Pengganti';
          labelEl.style.color = 'hsl(40 70% 35%)';
          labelEl.style.fontSize = '0.42rem';
        } else {
          labelEl.textContent = isOnline ? 'Online' : 'Offline';
          labelEl.style.color = isOnline ? 'hsl(150 55% 35%)' : 'hsl(210 45% 40%)';
          labelEl.style.fontSize = '0.46rem';
        }
      }
      if (noteBadge) {
        noteBadge.style.display = newNote ? 'block' : 'none';
        noteBadge.title = newNote || 'Ada catatan';
      }

      // Animation
      cardEl.style.transform = 'scale(1.08)';
      setTimeout(() => cardEl.style.transform = 'scale(1)', 200);

      // Update legend counts
      const onCount = entry.modePertemuan.filter(m => m === 'online').length;
      const offCount = 14 - onCount;
      const legend = document.querySelector(`.jadwal-mode-legend[data-jid="${jadwalId}"]`);
      if (legend) {
        const offEl = legend.querySelector('.off-count');
        const onEl = legend.querySelector('.on-count');
        if (offEl) offEl.textContent = offCount;
        if (onEl) onEl.textContent = onCount;
      }

      // Show save button
      const mainSaveBtn = document.querySelector(`.jadwal-save-mode-btn[data-jid="${jadwalId}"]`);
      if (mainSaveBtn) mainSaveBtn.style.display = 'inline-block';

      // Close popup
      prtPopup.style.display = 'none';

      // Brief toast
      const miniToast = document.createElement('div');
      miniToast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:linear-gradient(135deg,hsl(210 50% 42%),hsl(200 45% 38%));color:white;padding:10px 20px;border-radius:8px;font-size:0.75rem;font-weight:600;box-shadow:0 4px 16px rgba(0,0,0,0.18);z-index:99999;';
      miniToast.innerHTML = `✏️ P${pi+1} diperbarui — ${isChanged ? '🔄 Kelas Pengganti' : selectedMode === 'online' ? '🌐 Online' : '🏫 Offline'}${newNote ? ' • 📝 ' + newNote : ''}`;
      document.body.appendChild(miniToast);
      setTimeout(() => { miniToast.style.opacity = '0'; miniToast.style.transition = 'opacity 0.3s'; setTimeout(() => miniToast.remove(), 300); }, 2500);

      // ---- Persist to backend database ----
      try {
        const resp = await fetch('/api/jadwal-pertemuan', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            kode_mk: entry.kodeMK,
            kelas: entry.kelas || 'B',
            pertemuan: pi + 1,
            tanggal: newDate,
            tanggal_asli: origDate,
            jam_mulai: newStart,
            jam_selesai: newEnd,
            mode: selectedMode,
            catatan: newNote,
            updated_by: user?.nip || 'BAP'
          })
        });
        if (!resp.ok) console.warn('⚠️ Failed to persist jadwal pertemuan:', await resp.text());
        else console.log('✅ P' + (pi+1) + ' saved to database');
      } catch (err) {
        console.warn('⚠️ Backend not available, saved in-memory only:', err.message);
      }
    };
  };

  // ---- Save all mode changes (connected to backend API) ----
  const JADWAL_PRT_API = '/api/jadwal-pertemuan';

  document.querySelectorAll('.jadwal-save-mode-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const jid = parseInt(btn.dataset.jid);
      const entry = JADWAL_DUMMY.find(j => j.id === jid);
      if (!entry) return;

      const origText = btn.textContent;
      btn.textContent = '⏳ Menyimpan...';
      btn.style.opacity = '0.7';
      btn.disabled = true;

      // Build items for all 14 meetings
      const cards = document.querySelectorAll(`.prt-mode-card[data-jid="${jid}"]`);
      const items = [];
      cards.forEach(card => {
        const pi = parseInt(card.dataset.pi);
        items.push({
          pertemuan: pi + 1,
          tanggal: card.dataset.date || '',
          tanggal_asli: card.dataset.origDate || '',
          jam_mulai: card.dataset.start || entry.jamMulai,
          jam_selesai: card.dataset.end || entry.jamSelesai,
          mode: card.dataset.mode || 'offline',
          catatan: card.dataset.note || ''
        });
      });

      // Try API first, fallback to local-only
      let apiSuccess = false;
      try {
        const res = await fetch(`${JADWAL_PRT_API}/bulk`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            kode_mk: entry.kodeMK,
            kelas: entry.kelas || 'A',
            updated_by: 'BAP',
            items
          })
        });
        if (res.ok) apiSuccess = true;
      } catch (e) {
        console.warn('API jadwal-pertemuan not available, saving locally only:', e.message);
      }

      btn.textContent = '✅ Tersimpan!';
      btn.style.background = 'linear-gradient(135deg,hsl(150 55% 38%),hsl(160 50% 35%))';
      btn.style.opacity = '1';

      const toast = document.createElement('div');
      toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:linear-gradient(135deg,hsl(150 55% 42%),hsl(160 50% 38%));color:white;padding:12px 24px;border-radius:10px;font-size:0.82rem;font-weight:700;box-shadow:0 8px 24px rgba(0,0,0,0.2);z-index:99999;';
      const onCount = entry.modePertemuan.filter(m => m === 'online').length;
      const offCount = 14 - onCount;
      const rescheduled = entry.customSchedule ? Object.keys(entry.customSchedule).filter(k => {
        const card = document.querySelector(`.prt-mode-card[data-jid="${jid}"][data-pi="${k}"]`);
        return card && entry.customSchedule[k].date !== card.dataset.origDate;
      }).length : 0;
      const dbIcon = apiSuccess ? '🗄️ DB' : '💾 Lokal';
      toast.innerHTML = `✅ Jadwal <strong>${entry.kodeMK}</strong> berhasil disimpan ke ${dbIcon}! (🏫 ${offCount} Offline, 🌐 ${onCount} Online${rescheduled > 0 ? ', 🔄 ' + rescheduled + ' Reschedule' : ''})`;
      document.body.appendChild(toast);
      setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, 3000);
      setTimeout(() => { btn.style.display = 'none'; btn.textContent = origText; btn.style.background = 'linear-gradient(135deg,hsl(150 55% 45%),hsl(160 50% 42%))'; btn.disabled = false; }, 1500);
    });
  });


  // ---- Edit buttons ----
  document.querySelectorAll('.jadwal-edit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = btn.closest('tr');
      const cells = row.querySelectorAll('td');
      const jamParts = cells[6].textContent.trim().split('-');
      const tipeText = cells[8].textContent.trim().replace(/\ud83c\udfeb|\ud83c\udf10|\ud83d\udd04/g,'').trim();
      formArea.style.display = 'block';
      formArea.innerHTML = renderJadwalForm({
        prodi: row.dataset.prodi || 'niaga',
        kodeMK: cells[2].textContent.trim(),
        namaMK: cells[3].textContent.trim(),
        dosen: cells[4].textContent.trim(),
        hari: cells[5].textContent.trim(),
        jamMulai: jamParts[0],
        jamSelesai: jamParts[1] || '',
        ruang: cells[7].textContent.trim().replace('\u2014 (Online)',''),
        tipeKelas: tipeText,
        sks: parseInt(cells[9].textContent) || 3
      });
      formArea.scrollIntoView({ behavior:'smooth', block:'start' });
      initFormHandlers();
    });
  });

  // ---- Delete buttons ----
  document.querySelectorAll('.jadwal-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('\u2757 Hapus jadwal ini? Data tidak dapat dikembalikan.')) {
        btn.closest('tr').style.opacity = '0.3';
        setTimeout(() => btn.closest('tr').remove(), 300);
      }
    });
  });

  // ──── AI Scheduling Assistant ────────────────────────────────────────────
  const aiModal = document.getElementById('aiModal');
  const aiModalBody = document.getElementById('aiModalBody');
  const AI_API = 'http://localhost:5050/api/ai';

  // Room lists
  const niagaRoomList = ['RN-101','RN-102','RN-103','RN-104','RN-105'];
  const negaraRoomList = ['RA-201','RA-202','RA-203','RA-204','RA-205'];
  const allRoomList = [...niagaRoomList, ...negaraRoomList, 'LAB-K1', 'LAB-K2'];

  function showAiModal() { aiModal.style.display = 'flex'; }
  function hideAiModal() { aiModal.style.display = 'none'; }

  document.getElementById('aiModalClose')?.addEventListener('click', hideAiModal);
  aiModal?.addEventListener('click', (e) => { if (e.target === aiModal) hideAiModal(); });

  // Score color helper
  function scoreColor(s) {
    if (s >= 85) return 'hsl(145 55% 45%)';
    if (s >= 70) return 'hsl(45 80% 50%)';
    if (s >= 50) return 'hsl(25 70% 50%)';
    return 'hsl(0 55% 50%)';
  }
  function scoreLabel(s) {
    if (s >= 85) return 'Sangat Baik';
    if (s >= 70) return 'Baik';
    if (s >= 50) return 'Cukup';
    return 'Kurang';
  }

  document.querySelectorAll('.jadwal-ai-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const jid = parseInt(btn.dataset.id);
      const target = JADWAL_DUMMY.find(j => j.id === jid);
      if (!target) return;

      showAiModal();
      aiModalBody.innerHTML = `
        <div style="text-align:center;padding:40px;">
          <div style="font-size:2rem;margin-bottom:12px;">🧠</div>
          <div style="font-size:0.9rem;font-weight:700;color:hsl(260 50% 45%);">AI sedang menganalisis jadwal...</div>
          <div style="font-size:0.72rem;color:hsl(215 15% 55%);margin-top:6px;">Memeriksa ${JADWAL_DUMMY.length} jadwal • ${allRoomList.length} ruang • Menghitung konflik</div>
          <div style="margin-top:16px;height:4px;background:hsl(215 20% 90%);border-radius:4px;overflow:hidden;width:200px;margin-left:auto;margin-right:auto;">
            <div style="height:100%;background:linear-gradient(90deg,hsl(260 65% 55%),hsl(280 55% 50%));border-radius:4px;animation:aiPulse 1.5s infinite;width:60%;"></div>
          </div>
        </div>
        <style>@keyframes aiPulse{0%{width:20%;opacity:0.5}50%{width:80%;opacity:1}100%{width:20%;opacity:0.5}}</style>
      `;

      // Determine rooms based on prodi
      const preferredRooms = target.prodi === 'niaga' ? niagaRoomList : negaraRoomList;

      try {
        const res = await fetch(`${AI_API}/recommend`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            schedule: JADWAL_DUMMY,
            targetId: jid,
            rooms: allRoomList,
            preferredRooms: preferredRooms,
            maxResults: 6
          })
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (!data.success) throw new Error(data.error || 'AI error');

        renderAiResults(data, target);

      } catch (err) {
        console.warn('AI Server unavailable, using fallback:', err);
        // Fallback: generate basic recommendations client-side
        const fallback = generateFallbackRecommendations(target);
        renderAiResults(fallback, target);
      }
    });
  });

  // Fallback client-side AI when Python server is unavailable
  function generateFallbackRecommendations(target) {
    const days = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    const slots = [
      {mulai:'07:30',selesai:'09:10'},{mulai:'09:20',selesai:'11:00'},
      {mulai:'11:10',selesai:'12:50'},{mulai:'13:00',selesai:'14:40'},
      {mulai:'14:50',selesai:'16:30'}
    ];
    const preferredRooms = target.prodi === 'niaga' ? niagaRoomList : negaraRoomList;
    const recs = [];

    for (const day of days) {
      for (const slot of slots) {
        for (const room of preferredRooms) {
          // Check basic conflicts
          const roomConflict = JADWAL_DUMMY.some(j =>
            j.id !== target.id && j.hari === day && j.jamMulai === slot.mulai &&
            j.ruang === room && j.tipeKelas !== 'Online'
          );
          const dosenConflict = JADWAL_DUMMY.some(j =>
            j.id !== target.id && j.hari === day && j.jamMulai === slot.mulai &&
            j.dosen === target.dosen
          );
          if (roomConflict || dosenConflict) continue;

          let score = 80;
          const reasons = [`✅ Ruang ${room} tersedia`, `✅ Dosen tersedia`];
          if (slot.mulai === '07:30' || slot.mulai === '09:20') { score += 10; reasons.push('⏰ Jam pagi (ideal)'); }
          if (day === 'Sabtu') { score -= 15; reasons.push('⚠️ Hari Sabtu'); }
          if (day === target.hari) { score += 5; reasons.push(`🔄 Hari sama (${day})`); }

          recs.push({ hari: day, jamMulai: slot.mulai, jamSelesai: slot.selesai, ruang: room, score: Math.min(100, score), reasons, conflicts: [] });
        }
      }
    }

    recs.sort((a,b) => b.score - a.score);
    return {
      success: true,
      targetMK: target.namaMK,
      targetKodeMK: target.kodeMK,
      targetDosen: target.dosen,
      targetCurrentDay: target.hari,
      targetCurrentTime: `${target.jamMulai}-${target.jamSelesai}`,
      totalAnalyzed: JADWAL_DUMMY.length,
      recommendations: recs.slice(0, 6),
      fallback: true
    };
  }

  function renderAiResults(data, target) {
    const recs = data.recommendations || [];
    const isFallback = data.fallback || false;

    aiModalBody.innerHTML = `
      <!-- Target Info -->
      <div style="background:linear-gradient(135deg,hsl(215 25% 96%),hsl(260 20% 96%));border-radius:12px;padding:16px;margin-bottom:16px;border:1px solid hsl(260 20% 90%);">
        <div style="font-size:0.72rem;color:hsl(215 15% 55%);margin-bottom:8px;font-weight:600;">📚 MATA KULIAH YANG AKAN DIJADWALKAN ULANG</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          <div>
            <div style="font-size:0.68rem;color:hsl(215 15% 50%);">Mata Kuliah</div>
            <div style="font-size:0.9rem;font-weight:800;color:hsl(260 45% 40%);">${data.targetKodeMK} — ${data.targetMK}</div>
          </div>
          <div>
            <div style="font-size:0.68rem;color:hsl(215 15% 50%);">Dosen Pengampu</div>
            <div style="font-size:0.82rem;font-weight:700;color:hsl(215 30% 35%);">${data.targetDosen}</div>
          </div>
          <div>
            <div style="font-size:0.68rem;color:hsl(215 15% 50%);">Jadwal Saat Ini</div>
            <div style="font-size:0.82rem;font-weight:700;color:hsl(215 30% 35%);">${data.targetCurrentDay}, ${data.targetCurrentTime}</div>
          </div>
          <div>
            <div style="font-size:0.68rem;color:hsl(215 15% 50%);">Status</div>
            <div style="font-size:0.82rem;font-weight:700;color:hsl(${target.tipeKelas==='Online'?'150 55% 45%':'210 55% 50%'});">
              ${target.tipeKelas === 'Online' ? '🌐 Online → 🏫 Offline' : '🏫 ' + target.tipeKelas}
            </div>
          </div>
        </div>
      </div>

      <!-- AI Badge -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div>
          <span style="font-size:0.85rem;font-weight:800;color:hsl(260 45% 40%);">🎯 Top ${recs.length} Rekomendasi AI</span>
          <span style="font-size:0.65rem;color:hsl(215 15% 55%);margin-left:8px;">${data.totalAnalyzed} jadwal dianalisis</span>
        </div>
        ${isFallback ? '<span style="font-size:0.6rem;padding:3px 8px;border-radius:8px;background:hsl(40 70% 92%);color:hsl(40 60% 40%);font-weight:600;">⚠️ Fallback Mode</span>' : '<span style="font-size:0.6rem;padding:3px 8px;border-radius:8px;background:hsl(260 50% 94%);color:hsl(260 50% 45%);font-weight:600;">🐍 Python AI Engine</span>'}
      </div>

      <!-- Recommendations -->
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${recs.map((r, idx) => `
          <div class="ai-rec-card" style="border:1px solid hsl(215 20% 90%);border-radius:12px;padding:14px 16px;transition:all 0.2s;cursor:pointer;position:relative;overflow:hidden;${idx===0?'border-color:hsl(260 50% 70%);box-shadow:0 2px 12px rgba(100,50,200,0.1);':''}">
            ${idx===0 ? '<div style="position:absolute;top:0;right:0;padding:3px 12px;background:linear-gradient(135deg,hsl(260 65% 55%),hsl(280 55% 50%));color:white;font-size:0.55rem;font-weight:800;border-radius:0 12px 0 8px;">⭐ TERBAIK</div>' : ''}
            <div style="display:flex;justify-content:space-between;align-items:flex-start;">
              <div style="flex:1;">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                  <span style="display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;background:hsl(260 40% 94%);font-size:0.7rem;font-weight:800;color:hsl(260 45% 45%);">${idx+1}</span>
                  <span style="font-size:0.88rem;font-weight:800;color:hsl(215 30% 30%);">📅 ${r.hari}</span>
                  <span style="font-size:0.82rem;font-weight:700;color:hsl(260 45% 45%);">⏰ ${r.jamMulai}-${r.jamSelesai}</span>
                  <span style="padding:3px 10px;border-radius:8px;background:hsl(210 50% 94%);color:hsl(210 55% 45%);font-size:0.72rem;font-weight:700;">🏢 ${r.ruang}</span>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:4px;">
                  ${r.reasons.slice(0,4).map(reason => `<span style="font-size:0.62rem;padding:2px 8px;border-radius:6px;background:hsl(145 40% 95%);color:hsl(145 40% 35%);">${reason}</span>`).join('')}
                </div>
              </div>
              <div style="text-align:center;min-width:70px;">
                <div style="font-size:1.4rem;font-weight:900;color:${scoreColor(r.score)};">${r.score}</div>
                <div style="font-size:0.55rem;font-weight:600;color:${scoreColor(r.score)};">${scoreLabel(r.score)}</div>
                <div style="height:5px;background:hsl(215 20% 92%);border-radius:3px;margin-top:4px;overflow:hidden;">
                  <div style="height:100%;width:${r.score}%;background:${scoreColor(r.score)};border-radius:3px;"></div>
                </div>
              </div>
            </div>
            <div style="margin-top:10px;text-align:right;">
              <button class="ai-apply-btn" data-hari="${r.hari}" data-mulai="${r.jamMulai}" data-selesai="${r.jamSelesai}" data-ruang="${r.ruang}" data-target="${target.id}" style="padding:5px 16px;border-radius:8px;background:linear-gradient(135deg,hsl(260 55% 50%),hsl(280 50% 48%));color:white;border:none;font-size:0.72rem;font-weight:700;cursor:pointer;box-shadow:0 2px 8px rgba(100,50,200,0.2);transition:transform 0.15s;">✅ Terapkan Jadwal Ini</button>
            </div>
          </div>
        `).join('')}
      </div>

      ${recs.length === 0 ? '<div style="text-align:center;padding:30px;color:hsl(0 55% 50%);font-weight:600;">❌ Tidak ditemukan slot yang tersedia tanpa konflik</div>' : ''}
    `;

    // Add hover effects
    aiModalBody.querySelectorAll('.ai-rec-card').forEach(card => {
      card.addEventListener('mouseenter', () => { card.style.borderColor = 'hsl(260 50% 70%)'; card.style.boxShadow = '0 4px 16px rgba(100,50,200,0.12)'; });
      card.addEventListener('mouseleave', () => { card.style.borderColor = 'hsl(215 20% 90%)'; card.style.boxShadow = 'none'; });
    });

    // Apply button handlers
    aiModalBody.querySelectorAll('.ai-apply-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tid = parseInt(btn.dataset.target);
        const row = document.querySelector(`tr[data-id="${tid}"]`);
        if (row) {
          const cells = row.querySelectorAll('td');
          // Update row data attributes
          row.dataset.hari = btn.dataset.hari;
          row.dataset.tipe = 'Offline';
          // Update visible cells: [0]=No, [1]=Prodi, [2]=Smt, [3]=Kode, [4]=Nama, [5]=Dosen, [6]=Hari, [7]=Jam, [8]=Ruang, [9]=Tipe, [10]=Kelas, [11]=SKS, [12]=Aksi
          cells[6].innerHTML = `<strong>${btn.dataset.hari}</strong>`;
          cells[7].textContent = `${btn.dataset.mulai}-${btn.dataset.selesai}`;
          cells[8].innerHTML = `<span style="font-weight:600;font-size:0.72rem;">${btn.dataset.ruang}</span>`;
          cells[9].innerHTML = `<span style="padding:3px 10px;border-radius:12px;font-size:0.68rem;font-weight:700;background:hsl(210 50% 94%);color:hsl(210 55% 50%);">🏫 Offline</span>`;
          // Flash effect
          row.style.transition = 'background 0.3s';
          row.style.background = 'hsl(260 40% 95%)';
          setTimeout(() => { row.style.background = ''; }, 2000);
        }
        // Update JADWAL_DUMMY
        const jEntry = JADWAL_DUMMY.find(j => j.id === tid);
        if (jEntry) {
          jEntry.hari = btn.dataset.hari;
          jEntry.jamMulai = btn.dataset.mulai;
          jEntry.jamSelesai = btn.dataset.selesai;
          jEntry.ruang = btn.dataset.ruang;
          jEntry.tipeKelas = 'Offline';
        }
        hideAiModal();
        alert(`✅ Jadwal berhasil diperbarui!\n\n${target.namaMK}\n→ ${btn.dataset.hari}, ${btn.dataset.mulai}-${btn.dataset.selesai}\n→ Ruang: ${btn.dataset.ruang}\n→ Tipe: Offline`);
      });
    });
  }

  function initFormHandlers() {
    // ---- Prodi change → refresh MK dropdown ----
    const prodiSelect = document.getElementById('jfProdi');
    const mkSelect = document.getElementById('jfMK');
    prodiSelect?.addEventListener('change', () => {
      const prodi = prodiSelect.value;
      const d = KURIKULUM_DATA[prodi];
      let opts = '<option value="">-- Pilih Mata Kuliah --</option>';
      if (d) {
        d.semester.forEach(sem => {
          opts += `<optgroup label="Semester ${sem.no}">`;
          sem.mk.forEach(mk => {
            opts += `<option value="${mk.kode}" data-nama="${mk.nama}" data-dosen="${mk.dosen}" data-sks="${mk.sks}">${mk.kode} \u2014 ${mk.nama} (${mk.sks} SKS)</option>`;
          });
          opts += '</optgroup>';
        });
      }
      mkSelect.innerHTML = opts;
      document.getElementById('jfKode').value = '';
      document.getElementById('jfSks').value = '';
    });

    // ---- MK change → auto-fill kode, dosen, sks ----
    mkSelect?.addEventListener('change', () => {
      const opt = mkSelect.options[mkSelect.selectedIndex];
      if (opt && opt.value) {
        document.getElementById('jfKode').value = opt.value;
        const dosenVal = opt.dataset.dosen || '';
        document.getElementById('jfSks').value = opt.dataset.sks || '';
        // Try to match dosen from dropdown
        const dosenSelect = document.getElementById('jfDosen');
        if (dosenSelect) {
          let matched = false;
          for (let i = 0; i < dosenSelect.options.length; i++) {
            if (dosenVal.includes(dosenSelect.options[i].value)) {
              dosenSelect.selectedIndex = i;
              matched = true;
              break;
            }
          }
          if (!matched) dosenSelect.selectedIndex = 0;
        }
      }
    });

    // ---- Tipe kelas toggle ----
    document.querySelectorAll('.tipe-kelas-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        const tipe = opt.dataset.tipe;
        const colors = {Offline:'hsl(210 55% 50%)',Online:'hsl(150 55% 45%)',Hybrid:'hsl(275 55% 55%)'};
        document.querySelectorAll('.tipe-kelas-opt').forEach(o => {
          const c = colors[o.dataset.tipe];
          if (o.dataset.tipe === tipe) { o.style.background = c; o.style.color = 'white'; o.style.borderColor = c; }
          else { o.style.background = 'white'; o.style.color = c; o.style.borderColor = 'hsl(215 20% 85%)'; }
        });
        const ruangWrap = document.getElementById('jfRuangWrap');
        if (tipe === 'Online') { ruangWrap.style.opacity = '0.4'; document.getElementById('jfRuang').value = ''; document.getElementById('jfRuang').placeholder = 'Tidak diperlukan'; }
        else { ruangWrap.style.opacity = '1'; document.getElementById('jfRuang').placeholder = 'R.201'; }
      });
    });

    // Cancel
    document.getElementById('jfCancel')?.addEventListener('click', () => { formArea.style.display = 'none'; formArea.innerHTML = ''; });
    // Save (demo)
    document.getElementById('jfSave')?.addEventListener('click', () => {
      const btn = document.getElementById('jfSave');
      btn.textContent = '\u23f3 Menyimpan...';
      setTimeout(() => { btn.textContent = '\u2705 Tersimpan!'; setTimeout(() => { formArea.style.display = 'none'; formArea.innerHTML = ''; }, 1000); }, 800);
    });
  }

  // ---- Kelas panel toggle ----
  document.getElementById('btnToggleKelasPanel')?.addEventListener('click', () => {
    const body = document.getElementById('kelasPanelBody');
    body.style.display = body.style.display === 'none' ? 'block' : 'none';
    if (body.style.display === 'block') renderKelasList();
  });

  function renderKelasList() {
    const container = document.getElementById('kelasListContainer');
    if (!container) return;
    const list = getKelasList();
    container.innerHTML = list.map((k, i) => `
      <div class="kelas-chip" data-idx="${i}" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;background:white;border:1px solid hsl(260 30% 82%);border-radius:8px;font-size:0.8rem;font-weight:600;color:hsl(260 40% 40%);cursor:pointer;transition:all .2s;box-shadow:0 1px 3px rgba(0,0,0,0.06);">
        <span class="kelas-chip-name" style="min-width:20px;text-align:center;">${k}</span>
        <button class="kelas-edit-btn" data-idx="${i}" style="background:none;border:none;cursor:pointer;font-size:0.7rem;padding:0 2px;color:hsl(40 70% 50%);" title="Edit">\u270f\ufe0f</button>
        ${list.length > 1 ? `<button class="kelas-del-btn" data-idx="${i}" style="background:none;border:none;cursor:pointer;font-size:0.8rem;padding:0 2px;color:hsl(0 50% 55%);line-height:1;" title="Hapus">\u00d7</button>` : ''}
      </div>
    `).join('');

    // Edit handlers
    container.querySelectorAll('.kelas-edit-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.idx);
        const list = getKelasList();
        const newName = prompt('\u270f\ufe0f Edit nama ruangan:', list[idx]);
        if (newName !== null && newName.trim()) {
          list[idx] = newName.trim();
          saveKelasList(list);
          renderKelasList();
          showKelasToast(`Ruangan diubah menjadi "${newName.trim()}"`);
        }
      });
    });

    // Delete handlers
    container.querySelectorAll('.kelas-del-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.idx);
        const list = getKelasList();
        if (list.length <= 1) return alert('Minimal harus ada 1 ruangan!');
        const removed = list[idx];
        if (confirm(`\u2757 Hapus ruangan "${removed}"?`)) {
          list.splice(idx, 1);
          saveKelasList(list);
          renderKelasList();
          showKelasToast(`Ruangan "${removed}" dihapus`);
        }
      });
    });

    // Click chip to highlight
    container.querySelectorAll('.kelas-chip').forEach(chip => {
      chip.addEventListener('mouseenter', () => { chip.style.borderColor = 'hsl(260 50% 60%)'; chip.style.boxShadow = '0 2px 8px rgba(100,60,180,0.15)'; });
      chip.addEventListener('mouseleave', () => { chip.style.borderColor = 'hsl(260 30% 82%)'; chip.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; });
    });
  }

  // Add kelas
  document.getElementById('btnAddKelas')?.addEventListener('click', () => {
    const input = document.getElementById('kelasNewInput');
    const val = input?.value?.trim();
    if (!val) return input?.focus();
    const list = getKelasList();
    if (list.includes(val)) return alert(`Ruangan "${val}" sudah ada!`);
    list.push(val);
    saveKelasList(list);
    input.value = '';
    renderKelasList();
    showKelasToast(`Ruangan "${val}" berhasil ditambahkan!`);
  });

  // Enter key on input
  document.getElementById('kelasNewInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); document.getElementById('btnAddKelas')?.click(); }
  });

  function showKelasToast(msg) {
    const toast = document.createElement('div');
    toast.textContent = '\u2705 ' + msg;
    toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:hsl(200 50% 42%);color:white;padding:10px 20px;border-radius:8px;font-size:0.8rem;font-weight:600;z-index:99999;box-shadow:0 4px 16px rgba(0,0,0,0.2);animation:fadeInUp .3s ease;';
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity .3s'; setTimeout(() => toast.remove(), 300); }, 2500);
  }
}
function statistikContent() {
  const prodiStats = [
    { prodi: 'Administrasi Negara', aktif: 420, cuti: 8, lulus: 285, avgIPK: 3.42 },
    { prodi: 'Administrasi Niaga', aktif: 380, cuti: 5, lulus: 248, avgIPK: 3.38 },
  ];
  const totalAktif = prodiStats.reduce((a,p) => a + p.aktif, 0);
  const totalLulus = prodiStats.reduce((a,p) => a + p.lulus, 0);
  return `
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-icon blue">${I.users}</div>
        <div class="stat-info"><div class="stat-label">Total Mahasiswa Aktif</div><div class="stat-value">${totalAktif.toLocaleString()}</div><div class="stat-sub">semua prodi</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon green">${I.award}</div>
        <div class="stat-info"><div class="stat-label">Total Lulusan</div><div class="stat-value">${totalLulus}</div><div class="stat-sub">sampai saat ini</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon gold">${I.trendUp}</div>
        <div class="stat-info"><div class="stat-label">Rata-rata IPK</div><div class="stat-value">${(prodiStats.reduce((a,p) => a + p.avgIPK, 0) / prodiStats.length).toFixed(2)}</div><div class="stat-sub">seluruh prodi</div></div>
      </div>
      <div class="stat-box">
        <div class="stat-icon purple">${I.fileText}</div>
        <div class="stat-info"><div class="stat-label">Total Cuti</div><div class="stat-value">${prodiStats.reduce((a,p) => a + p.cuti, 0)}</div><div class="stat-sub">mahasiswa</div></div>
      </div>
    </div>

    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>📊 Statistik per Program Studi</h3></div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>Program Studi</th><th>Aktif</th><th>Cuti</th><th>Lulusan</th><th>Rata-rata IPK</th><th>% dari Total</th></tr></thead>
          <tbody>
            ${prodiStats.map((p,i) => {
              const pct = Math.round(p.aktif / totalAktif * 100);
              return `<tr>
                <td>${i+1}.</td>
                <td><strong>${p.prodi}</strong></td>
                <td style="text-align:center;">${p.aktif}</td>
                <td style="text-align:center;">${p.cuti}</td>
                <td style="text-align:center;">${p.lulus}</td>
                <td style="text-align:center;"><span style="background:hsl(150 60% 45%);color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${p.avgIPK}</span></td>
                <td style="width:150px;"><div class="progress-wrap"><div class="progress-bar" style="width:${pct}%;background:hsl(210 55% 50%);"></div></div><span style="font-size:0.68rem;color:hsl(215 15% 55%);">${pct}%</span></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">
      <div class="dash-card">
        <div class="dash-card-head"><h3 style="margin:0;font-size:0.85rem;">📈 Trend Mahasiswa Baru</h3></div>
        <div class="dash-card-body">
          ${[{tahun:'2022/2023', mhs: 310},{tahun:'2023/2024', mhs: 345},{tahun:'2024/2025', mhs: 380},{tahun:'2025/2026', mhs: 420}].map(t => `
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
            <span style="font-size:0.72rem;font-weight:600;min-width:65px;">${t.tahun}</span>
            <div class="progress-wrap" style="flex:1;"><div class="progress-bar" style="width:${Math.round(t.mhs/420*100)}%;background:hsl(210 55% 50%);"></div></div>
            <span style="font-size:0.82rem;font-weight:700;min-width:30px;">${t.mhs}</span>
          </div>`).join('')}
        </div>
      </div>
      <div class="dash-card">
        <div class="dash-card-head"><h3 style="margin:0;font-size:0.85rem;">🎯 Distribusi IPK Mahasiswa</h3></div>
        <div class="dash-card-body">
          ${[{range:'3.50 - 4.00', pct: 35, color:'hsl(150 60% 45%)'},{range:'3.00 - 3.49', pct: 40, color:'hsl(200 55% 50%)'},{range:'2.50 - 2.99', pct: 18, color:'hsl(40 80% 50%)'},{range:'< 2.50', pct: 7, color:'hsl(0 60% 50%)'}].map(d => `
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
            <span style="font-size:0.72rem;font-weight:600;min-width:72px;">${d.range}</span>
            <div class="progress-wrap" style="flex:1;"><div class="progress-bar" style="width:${d.pct}%;background:${d.color};"></div></div>
            <span style="font-size:0.82rem;font-weight:700;min-width:30px;">${d.pct}%</span>
          </div>`).join('')}
        </div>
      </div>
    </div>`;
}

function transkripContent() {
  const sampleMhs = [
    { nim: '2024101001', nama: 'Ahmad Rizky Pratama', prodi: 'Administrasi Negara', semester: 4, ipk: 3.69, sksLulus: 41, status: 'Aktif' },
    { nim: '2024101002', nama: 'Siti Nurhaliza', prodi: 'Administrasi Negara', semester: 4, ipk: 3.52, sksLulus: 39, status: 'Aktif' },
    { nim: '2024101003', nama: 'Budi Santoso', prodi: 'Administrasi Negara', semester: 4, ipk: 3.85, sksLulus: 43, status: 'Aktif' },
    { nim: '2021101001', nama: 'Rina Wulandari', prodi: 'Administrasi Negara', semester: 8, ipk: 3.82, sksLulus: 148, status: 'Lulus' },
    { nim: '2021101002', nama: 'Agung Prasetya', prodi: 'Administrasi Negara', semester: 8, ipk: 3.65, sksLulus: 148, status: 'Lulus' },
  ];
  return `
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
            ${sampleMhs.map((m,i) => {
              const sColor = m.status === 'Aktif' ? 'green' : 'blue';
              return `<tr>
                <td>${i+1}.</td>
                <td><strong>${m.nim}</strong></td>
                <td>${m.nama}</td>
                <td>${m.prodi}</td>
                <td style="text-align:center;">${m.semester}</td>
                <td style="text-align:center;"><span style="background:hsl(150 60% 45%);color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${m.ipk}</span></td>
                <td style="text-align:center;">${m.sksLulus}</td>
                <td style="text-align:center;"><span class="badge-sm ${sColor}">${m.status}</span></td>
                <td style="text-align:center;"><button style="font-size:0.7rem;padding:4px 12px;border-radius:4px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;">🖨 Cetak</button></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
}

function validasiKrsContent() {
  const krsRequests = [
    { nim: '2024101001', nama: 'Ahmad Rizky Pratama', prodi: 'Adm. Publik', semester: 4, sks: 19, tanggal: '10 Feb 2026', status: 'Divalidasi' },
    { nim: '2024101002', nama: 'Siti Nurhaliza', prodi: 'Adm. Publik', semester: 4, sks: 18, tanggal: '11 Feb 2026', status: 'Divalidasi' },
    { nim: '2024101009', nama: 'Irfan Hakim', prodi: 'Adm. Publik', semester: 4, sks: 21, tanggal: '12 Feb 2026', status: 'Menunggu' },
    { nim: '2024101010', nama: 'Julia Putri', prodi: 'Adm. Publik', semester: 2, sks: 20, tanggal: '13 Feb 2026', status: 'Menunggu' },
    { nim: '2024101011', nama: 'Kurniawan', prodi: 'Adm. Bisnis', semester: 2, sks: 22, tanggal: '14 Feb 2026', status: 'Ditolak' },
  ];
  const validated = krsRequests.filter(k => k.status === 'Divalidasi').length;
  const pending = krsRequests.filter(k => k.status === 'Menunggu').length;
  return `
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;margin-bottom:16px;">
      <div class="stat-box"><div class="stat-icon green">${I.checkCircle}</div><div class="stat-info"><div class="stat-label">Divalidasi</div><div class="stat-value">${validated}</div></div></div>
      <div class="stat-box"><div class="stat-icon gold">${I.clipboard}</div><div class="stat-info"><div class="stat-label">Menunggu</div><div class="stat-value">${pending}</div></div></div>
      <div class="stat-box"><div class="stat-icon purple">${I.fileText}</div><div class="stat-info"><div class="stat-label">Ditolak</div><div class="stat-value">${krsRequests.filter(k => k.status === 'Ditolak').length}</div></div></div>
    </div>
    <div class="dash-card">
      <div class="dash-card-head"><h3>📋 Validasi KRS Mahasiswa — Semester Genap ${new Date().getFullYear()}</h3></div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>NIM</th><th>Nama</th><th>Prodi</th><th>Sem.</th><th>SKS</th><th>Tanggal</th><th>Status</th><th>Aksi</th></tr></thead>
          <tbody>
            ${krsRequests.map((k,i) => {
              const sColor = k.status === 'Divalidasi' ? 'green' : k.status === 'Menunggu' ? 'gold' : 'danger';
              return `<tr>
                <td>${i+1}.</td>
                <td><strong>${k.nim}</strong></td>
                <td>${k.nama}</td>
                <td>${k.prodi}</td>
                <td style="text-align:center;">${k.semester}</td>
                <td style="text-align:center;">${k.sks}</td>
                <td>${k.tanggal}</td>
                <td style="text-align:center;"><span class="badge-sm ${sColor}">${k.status}</span></td>
                <td style="text-align:center;">
                  ${k.status === 'Menunggu' ? `<button style="font-size:0.68rem;padding:3px 10px;border-radius:4px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;margin-right:4px;">✅ Validasi</button><button style="font-size:0.68rem;padding:3px 10px;border-radius:4px;cursor:pointer;background:hsl(0 60% 50%);color:white;border:none;font-weight:600;">❌ Tolak</button>` : `<button style="font-size:0.68rem;padding:3px 10px;border-radius:4px;cursor:pointer;background:hsl(210 55% 50%);color:white;border:none;font-weight:600;">👁 Detail</button>`}
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
}

function _krsDetailContent(mhs) {
  const semNum = parseInt(mhs.sem) || 4;
  const year = new Date().getFullYear();
  // Generate realistic KRS based on semester and prodi
  const mkPool = [
    { kode:'AP101', nama:'Pengantar Ilmu Administrasi', sks:3, hari:'Senin', jam:'08:00-10:30', ruang:'A201', dosen:'Prof. Dr. H. Mulyadi, M.AP.' },
    { kode:'AP102', nama:'Teori Organisasi', sks:3, hari:'Selasa', jam:'10:00-12:30', ruang:'A202', dosen:'Dr. Ir. Bambang Sudarsono, M.Si.' },
    { kode:'AP201', nama:'Kebijakan Publik', sks:3, hari:'Rabu', jam:'08:00-10:30', ruang:'B101', dosen:'Dr. Hendra Wijaya, S.E., M.M.' },
    { kode:'AP202', nama:'Manajemen SDM Publik', sks:3, hari:'Kamis', jam:'13:00-15:30', ruang:'B102', dosen:'Prof. Dr. Sri Wahyuni, M.AP.' },
    { kode:'AP301', nama:'Hukum Administrasi Negara', sks:3, hari:'Jumat', jam:'08:00-10:30', ruang:'A301', dosen:'Dr. Agus Rahardjo, S.H., M.H.' },
    { kode:'AP302', nama:'Statistik Sosial', sks:3, hari:'Senin', jam:'13:00-15:30', ruang:'Lab 1', dosen:'Ir. Siti Nurjanah, M.T.' },
    { kode:'AP303', nama:'Sistem Informasi Manajemen', sks:3, hari:'Selasa', jam:'08:00-10:30', ruang:'Lab 2', dosen:'Ir. Andi Prasetyo, M.Kom.' },
    { kode:'AP304', nama:'Etika Administrasi Publik', sks:2, hari:'Rabu', jam:'13:00-14:40', ruang:'A202', dosen:'Dr. Rina Kartika, M.M.' },
    { kode:'AP401', nama:'Metodologi Penelitian', sks:3, hari:'Kamis', jam:'08:00-10:30', ruang:'A301', dosen:'Dr. Achmad Fauzi, M.AP.' },
    { kode:'AP402', nama:'Keuangan Publik', sks:3, hari:'Jumat', jam:'10:00-12:30', ruang:'B101', dosen:'Dewi Lestari, S.AP., M.AP.' },
    { kode:'AN101', nama:'Pengantar Bisnis', sks:3, hari:'Senin', jam:'10:00-12:30', ruang:'C101', dosen:'Dr. Wahyu Hidayat, S.IP., M.Si.' },
    { kode:'AN201', nama:'Manajemen Pemasaran', sks:3, hari:'Selasa', jam:'13:00-15:30', ruang:'C102', dosen:'Fitri Handayani, S.E., M.M.' },
  ];
  const isNiaga = (mhs.prodi || '').toLowerCase().includes('niaga');
  const baseMk = isNiaga ? mkPool.filter(m => m.kode.startsWith('AN') || m.kode.startsWith('AP3') || m.kode.startsWith('AP4')) : mkPool.filter(m => m.kode.startsWith('AP'));
  const selectedMk = baseMk.slice(0, Math.min(6 + (semNum % 3), baseMk.length));
  const totalSks = selectedMk.reduce((s, m) => s + m.sks, 0);
  const mhsIni = mhs.nama.split(' ').map(w => w[0]).join('').substring(0,2).toUpperCase();

  return `
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
        <div class="krs-profile-av">${mhsIni}</div>
        <div class="krs-profile-info">
          <h3>${mhs.nama}</h3>
          <div class="krs-profile-meta">
            <span>📋 NIM: <strong>${mhs.nim}</strong></span>
            <span>🎓 Semester: <strong>${mhs.sem}</strong></span>
            <span>📊 IPK: <strong>${mhs.ipk}</strong></span>
            <span>🏛️ Prodi: <strong>${mhs.prodi}</strong></span>
          </div>
        </div>
      </div>
      <div class="krs-stats">
        <div class="krs-stat"><div class="krs-stat-val">${selectedMk.length}</div><div class="krs-stat-lbl">Mata Kuliah</div></div>
        <div class="krs-stat"><div class="krs-stat-val">${totalSks}</div><div class="krs-stat-lbl">Total SKS</div></div>
        <div class="krs-stat"><div class="krs-stat-val" style="color:hsl(150 55% 38%)">Aktif</div><div class="krs-stat-lbl">Status KRS</div></div>
        <div class="krs-stat"><div class="krs-stat-val">Genap ${year}</div><div class="krs-stat-lbl">Semester</div></div>
      </div>
      <div class="krs-table-wrap">
        <div class="krs-table-head">
          <h4>📚 Kartu Rencana Studi — Semester ${mhs.sem}</h4>
          <span style="font-size:.7rem;color:hsl(215 15% 55%)">${selectedMk.length} mata kuliah • ${totalSks} SKS</span>
        </div>
        <table class="krs-tbl">
          <thead><tr><th>No</th><th>Kode</th><th>Mata Kuliah</th><th>SKS</th><th>Hari</th><th>Jam</th><th>Ruang</th><th>Dosen Pengampu</th></tr></thead>
          <tbody>
            ${selectedMk.map((mk, i) => {
              const hariColors = { Senin:'hsl(215 55% 94%)', Selasa:'hsl(150 45% 93%)', Rabu:'hsl(280 40% 94%)', Kamis:'hsl(35 60% 93%)', Jumat:'hsl(0 40% 94%)' };
              const hariTxtColors = { Senin:'hsl(215 55% 40%)', Selasa:'hsl(150 50% 32%)', Rabu:'hsl(280 45% 40%)', Kamis:'hsl(35 60% 35%)', Jumat:'hsl(0 45% 40%)' };
              return `<tr>
                <td style="text-align:center;font-weight:600;color:hsl(215 15% 55%)">${i+1}</td>
                <td><strong style="font-family:var(--font-mono);font-size:.72rem;">${mk.kode}</strong></td>
                <td style="font-weight:600">${mk.nama}</td>
                <td style="text-align:center"><span class="sks-badge" style="background:hsl(215 50% 94%);color:hsl(215 55% 42%)">${mk.sks}</span></td>
                <td><span class="krs-hari" style="background:${hariColors[mk.hari]||'hsl(215 15% 94%)'};color:${hariTxtColors[mk.hari]||'hsl(215 30% 40%)'}">${mk.hari}</span></td>
                <td style="font-family:var(--font-mono);font-size:.72rem;">${mk.jam}</td>
                <td style="font-weight:600">${mk.ruang}</td>
                <td style="font-size:.72rem;">${mk.dosen}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
      <div class="krs-actions">
        <button class="krs-btn krs-btn-outline" onclick="window.print()">🖨️ Cetak KRS</button>
        <button class="krs-btn krs-btn-primary" onclick="alert('KRS berhasil divalidasi!');_paBackToBimbingan()">✅ Validasi KRS</button>
      </div>
    </div>`;
}

function rekapAbsensiContent() {
  const rekapData = [
    { kode: 'AP301', nama: 'Kebijakan Publik', kelas: 'EU101', dosen: 'Dr. Bambang Sudarsono, M.Si.', pertemuan: 10, avgHadir: 92 },
    { kode: 'AP302', nama: 'Statistik Sosial', kelas: 'EU101', dosen: 'Ir. Siti Nurjanah, M.T.', pertemuan: 10, avgHadir: 95 },
    { kode: 'AP303', nama: 'Teori Administrasi', kelas: 'EU102', dosen: 'Prof. Dr. Sri Wahyuni, M.AP.', pertemuan: 9, avgHadir: 88 },
    { kode: 'AP304', nama: 'Hukum Administrasi', kelas: 'EU101', dosen: 'Dr. Agus Rahardjo, S.H., M.H.', pertemuan: 10, avgHadir: 90 },
    { kode: 'AP305', nama: 'Manajemen SDM', kelas: 'EU101', dosen: 'Dr. Rina Kartika, M.M.', pertemuan: 10, avgHadir: 97 },
    { kode: 'AP306', nama: 'Sistem Informasi Manajemen', kelas: 'EU101', dosen: 'Ir. Andi Prasetyo, M.Kom.', pertemuan: 10, avgHadir: 91 },
    { kode: 'AP307', nama: 'Etika Administrasi', kelas: 'EU102', dosen: 'Dr. Bambang Sudarsono, M.Si.', pertemuan: 10, avgHadir: 85 },
  ];
  return `
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
            ${rekapData.map((r,i) => {
              const color = r.avgHadir >= 90 ? 'hsl(150 60% 45%)' : r.avgHadir >= 80 ? 'hsl(40 80% 50%)' : 'hsl(0 60% 50%)';
              return `<tr>
                <td>${i+1}.</td>
                <td><strong>${r.kode}</strong></td>
                <td>${r.nama}</td>
                <td style="text-align:center;">${r.kelas}</td>
                <td>${r.dosen}</td>
                <td style="text-align:center;">${r.pertemuan}/14</td>
                <td style="text-align:center;"><span style="background:${color};color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${r.avgHadir}%</span></td>
                <td style="text-align:center;"><span class="badge-sm ${r.avgHadir >= 90 ? 'green' : 'gold'}">${r.avgHadir >= 90 ? 'Baik' : 'Perhatian'}</span></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
}

function suratContent() {
  return `
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>📝 Surat Menyurat — Administrasi Akademik</h3></div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-bottom:20px;">
      ${SURAT_TEMPLATES.map(s => `
      <div class="dash-card" style="cursor:pointer;transition:transform 0.2s;">
        <div class="dash-card-body" style="display:flex;align-items:center;gap:14px;padding:16px;">
          <div style="width:46px;height:46px;border-radius:10px;background:linear-gradient(135deg,hsl(210 55% 50%),hsl(200 50% 60%));display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <span style="color:white;font-weight:700;font-size:0.78rem;">${s.kode}</span>
          </div>
          <div style="flex:1;">
            <div style="font-size:0.82rem;font-weight:700;">${s.jenis}</div>
            <div style="font-size:0.72rem;color:hsl(215 15% 55%);margin-top:3px;">${s.count} surat diterbitkan</div>
          </div>
          <button style="font-size:0.7rem;padding:5px 12px;border-radius:5px;cursor:pointer;background:hsl(150 55% 45%);color:white;border:none;font-weight:600;">+ Buat</button>
        </div>
      </div>`).join('')}
    </div>
    <div class="dash-card">
      <div class="dash-card-head"><h3>📋 Riwayat Surat Terbaru</h3></div>
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>No. Surat</th><th>Jenis</th><th>Untuk</th><th>Tanggal</th><th>Status</th></tr></thead>
          <tbody>
            ${[
              { no: '001/SKA/III/2026', jenis: 'Surat Keterangan Aktif', untuk: 'Ahmad Rizky Pratama', tgl: '20 Mar 2026', status: 'Selesai' },
              { no: '002/SPM/III/2026', jenis: 'Surat Pengantar Magang', untuk: 'Siti Nurhaliza', tgl: '19 Mar 2026', status: 'Proses' },
              { no: '003/SRB/III/2026', jenis: 'Surat Rekomendasi', untuk: 'Budi Santoso', tgl: '18 Mar 2026', status: 'Menunggu' },
              { no: '004/LGI/III/2026', jenis: 'Legalisir Ijazah', untuk: 'Dewi Lestari', tgl: '17 Mar 2026', status: 'Selesai' },
            ].map((s,i) => `<tr>
              <td>${i+1}.</td>
              <td><strong>${s.no}</strong></td>
              <td>${s.jenis}</td>
              <td>${s.untuk}</td>
              <td>${s.tgl}</td>
              <td style="text-align:center;"><span class="badge-sm ${s.status==='Selesai'?'green':s.status==='Proses'?'blue':'gold'}">${s.status}</span></td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
}

function kalenderContent() {
  return `
    <div class="dash-card" style="margin-bottom:16px;">
      <div class="dash-card-head"><h3>📅 Kalender Akademik — Semester Genap ${new Date().getFullYear()}</h3></div>
    </div>
    <div class="dash-card">
      <div class="dash-card-body" style="padding:0;">
        <table class="sch-table" style="width:100%;">
          <thead><tr style="background:hsl(215 20% 95%);"><th>No.</th><th>Kegiatan</th><th>Mulai</th><th>Selesai</th><th>Status</th></tr></thead>
          <tbody>
            ${KALENDER_AKADEMIK.map(k => {
              const sColor = k.status === 'Selesai' ? 'green' : k.status === 'Berjalan' ? 'blue' : 'gold';
              return `<tr>
                <td>${k.no}.</td>
                <td><strong>${k.kegiatan}</strong></td>
                <td>${k.mulai}</td>
                <td>${k.selesai}</td>
                <td style="text-align:center;"><span class="badge-sm ${sColor}">${k.status}</span></td>
              </tr>`;
            }).join('')}
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
    </div>`;
}

function wisudaContent() {
  return `
    <div class="dash-card" style="margin-bottom:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,hsl(35 70% 45%),hsl(25 60% 50%));padding:24px 28px;color:white;">
        <h3 style="margin:0 0 8px;font-size:1.1rem;">🎓 Wisuda ${WISUDA_DATA.periode}</h3>
        <div style="font-size:0.85rem;opacity:0.9;">📅 ${WISUDA_DATA.tanggal} · 📍 ${WISUDA_DATA.tempat}</div>
        <div style="display:flex;gap:16px;margin-top:14px;">
          <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:8px 16px;backdrop-filter:blur(4px);">
            <div style="font-size:0.6rem;opacity:0.7;">Total Calon</div>
            <div style="font-size:1.2rem;font-weight:800;">${WISUDA_DATA.calon.length}</div>
          </div>
          <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:8px 16px;backdrop-filter:blur(4px);">
            <div style="font-size:0.6rem;opacity:0.7;">Toga Siap</div>
            <div style="font-size:1.2rem;font-weight:800;">${WISUDA_DATA.calon.filter(c => c.statusToga === 'Sudah').length}</div>
          </div>
          <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:8px 16px;backdrop-filter:blur(4px);">
            <div style="font-size:0.6rem;opacity:0.7;">IPK Tertinggi</div>
            <div style="font-size:1.2rem;font-weight:800;">${Math.max(...WISUDA_DATA.calon.map(c => c.ipk)).toFixed(2)}</div>
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
            ${WISUDA_DATA.calon.map((c,i) => `<tr>
              <td>${i+1}.</td>
              <td><strong>${c.nim}</strong></td>
              <td>${c.nama}</td>
              <td>${c.prodi}</td>
              <td style="text-align:center;"><span style="background:hsl(150 60% 45%);color:white;padding:2px 10px;border-radius:10px;font-size:0.72rem;font-weight:700;">${c.ipk}</span></td>
              <td style="font-size:0.78rem;max-width:250px;">${c.judulSkripsi}</td>
              <td style="text-align:center;"><span class="badge-sm ${c.statusToga === 'Sudah' ? 'green' : 'gold'}">${c.statusToga}</span></td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
}

// ============================================
// BIMBINGAN AKADEMIK (PA) — BAP Content
// ============================================

function _getPaBimbingan() {
  if (!window._paBimbingan) {
    const mhsPool = ['Ahmad Rizky Pratama','Siti Nurhaliza','Budi Santoso','Dewi Lestari','Eko Prasetyo','Fitri Handayani','Gani Setiawan','Hana Permata','Irfan Hakim','Julia Putri','Kurniawan Adi','Lina Marlina','M. Faisal','Nadia Rahmawati','Rudi Hermawan','Yeni Fitriani','Rina Wulandari','Agung Prasetya','Mega Safitri','Dimas Nugroho','Putri Ayu K.','Sari Indah','Bagas Firmansyah','Nurul Aini','Rizal Mahendra','Winda Sari','Fajar Nugroho','Aisyah Putri','Doni Setiawan','Ratna Dewi'];
    const prodiArr = ['Administrasi Negara','Administrasi Niaga'];
    window._paBimbingan = {};
    DOSEN_LIST.filter(d => d.totalMahasiswaBimbingan > 0).forEach((d, idx) => {
      const list = [];
      for (let i = 0; i < d.totalMahasiswaBimbingan; i++) {
        const nm = mhsPool[(idx * 3 + i) % mhsPool.length];
        const ank = 2021 + (i % 4); const sem = (2026 - ank) * 2;
        const ipk = parseFloat((3.1 + ((idx * 7 + i * 13) % 80) / 100).toFixed(2));
        list.push({ nim: ank + '10' + String(1000 + idx * 10 + i).substring(1), nama: nm, ank, sem, ipk, prodi: prodiArr[idx % 2] });
      }
      window._paBimbingan[d.id] = list;
    });
  }
  return window._paBimbingan;
}

function _paRenderMhsGrid(dsnId, mhsList) {
  if (!mhsList.length) return '<div style="text-align:center;padding:24px;color:hsl(215 15% 60%);font-size:0.8rem;">Belum ada mahasiswa bimbingan</div>';
  return mhsList.map((m, mi) => {
    const mIni = m.nama.split(' ').map(w => w[0]).join('').substring(0,2).toUpperCase();
    return '<div class="pa-mhs-item"><div class="pa-mhs-av">' + mIni + '</div><div style="flex:1;min-width:0;"><div class="pa-mhs-name pa-mhs-link" onclick="event.stopPropagation();_paOpenKrs(\'' + m.nim + '\',\'' + m.nama.replace(/'/g,"\\'") + '\',\'' + m.sem + '\',\'' + m.ipk.toFixed(2) + '\',\'' + (m.prodi||'Administrasi Negara').replace(/'/g,"\\'") + '\')" title="Lihat KRS ' + m.nama + '">' + m.nama + '</div><div class="pa-mhs-meta"><span style="font-family:var(--font-mono);">' + m.nim + '</span><div class="pa-sep"></div><span>Sem ' + m.sem + '</span><div class="pa-sep"></div><span class="pa-ipk" style="color:' + (m.ipk >= 3.5 ? 'hsl(150 55% 38%)' : m.ipk >= 3.0 ? 'hsl(215 50% 45%)' : 'hsl(35 65% 42%)') + ';">IPK ' + m.ipk.toFixed(2) + '</span></div></div><div class="pa-mhs-actions"><button class="pa-mhs-btn edit" title="Edit" onclick="event.stopPropagation();_paShowModal(\'' + dsnId + '\',' + mi + ')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg></button><button class="pa-mhs-btn del" title="Hapus" onclick="event.stopPropagation();_paDeleteMhs(\'' + dsnId + '\',' + mi + ')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg></button></div></div>';
  }).join('');
}

function _paRefreshGrid(dsnId) {
  const bimb = _getPaBimbingan(); const mhsList = bimb[dsnId] || [];
  const grid = document.getElementById('paGrid_' + dsnId);
  if (grid) grid.innerHTML = _paRenderMhsGrid(dsnId, mhsList);
  const badge = document.getElementById('paBadge_' + dsnId);
  if (badge) badge.textContent = mhsList.length;
  const cnt = document.getElementById('paMhsCount_' + dsnId);
  if (cnt) cnt.textContent = mhsList.length + ' mahasiswa bimbingan';
  const allMhs = Object.values(bimb).reduce((s, a) => s + a.length, 0);
  const dc = Object.keys(bimb).length;
  const e1 = document.getElementById('paStat_mhs'); if (e1) e1.textContent = allMhs;
  const e2 = document.getElementById('paStat_avg'); if (e2) e2.textContent = dc ? (allMhs / dc).toFixed(1) : 0;
  const e3 = document.getElementById('paStat_max'); if (e3) e3.textContent = Math.max(...Object.values(bimb).map(a => a.length), 0);
  const panel = grid?.closest('.pa-panel');
  if (panel && panel.dataset.open === 'true') panel.style.maxHeight = panel.scrollHeight + 50 + 'px';
}

function _paDeleteMhs(dsnId, i) {
  const bimb = _getPaBimbingan(); const mhs = bimb[dsnId]?.[i]; if (!mhs) return;
  if (!confirm('Hapus ' + mhs.nama + ' dari bimbingan dosen ini?')) return;
  bimb[dsnId].splice(i, 1); _paRefreshGrid(dsnId); _paToast('Mahasiswa berhasil dihapus');
}

function _paShowModal(dsnId, mhsIdx) {
  const bimb = _getPaBimbingan(); const isEdit = mhsIdx !== null && mhsIdx !== undefined;
  const mhs = isEdit ? bimb[dsnId]?.[mhsIdx] : null;
  const dosen = DOSEN_LIST.find(d => d.id === dsnId);
  const t = isEdit ? 'Edit Mahasiswa Bimbingan' : 'Tambah Mahasiswa Bimbingan';
  document.getElementById('paModalContainer').innerHTML = '<div class="pa-modal-overlay" id="paModalOverlay"><div class="pa-modal"><div class="pa-modal-head"><h3>' + t + '</h3><button class="pa-modal-close" onclick="_paCloseModal()">×</button></div><div class="pa-modal-body"><div style="background:hsl(215 20% 97%);border-radius:10px;padding:10px 14px;margin-bottom:16px;font-size:0.78rem;color:hsl(215 30% 35%);"><strong>Dosen PA:</strong> ' + (dosen ? dosen.nama : '') + '</div><label>Nama Mahasiswa</label><input type="text" id="paFormNama" value="' + (mhs ? mhs.nama : '') + '" placeholder="Masukkan nama lengkap" /><label>NIM</label><input type="text" id="paFormNim" value="' + (mhs ? mhs.nim : '') + '" placeholder="Contoh: 202410001" /><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div><label>Angkatan</label><select id="paFormAnk"><option value="2021"' + (mhs?.ank===2021?' selected':'') + '>2021</option><option value="2022"' + (mhs?.ank===2022?' selected':'') + '>2022</option><option value="2023"' + (mhs?.ank===2023?' selected':'') + '>2023</option><option value="2024"' + (mhs?.ank===2024?' selected':'') + '>2024</option><option value="2025"' + (mhs?.ank===2025?' selected':'') + '>2025</option></select></div><div><label>Semester</label><input type="number" id="paFormSem" value="' + (mhs ? mhs.sem : '2') + '" min="1" max="14" /></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div><label>IPK</label><input type="number" id="paFormIpk" value="' + (mhs ? mhs.ipk : '3.00') + '" min="0" max="4" step="0.01" /></div><div><label>Prodi</label><select id="paFormProdi"><option value="Administrasi Negara"' + (mhs?.prodi==='Administrasi Negara'?' selected':'') + '>Adm. Negara</option><option value="Administrasi Niaga"' + (mhs?.prodi==='Administrasi Niaga'?' selected':'') + '>Adm. Niaga</option></select></div></div></div><div class="pa-modal-foot"><button class="pa-cancel" onclick="_paCloseModal()">Batal</button><button class="pa-save" onclick="_paSaveMhs(\'' + dsnId + '\',' + (isEdit ? mhsIdx : 'null') + ')">' + (isEdit ? 'Simpan' : 'Tambah') + '</button></div></div></div>';
  document.getElementById('paModalOverlay').addEventListener('click', function(e) { if (e.target === this) _paCloseModal(); });
  setTimeout(() => document.getElementById('paFormNama')?.focus(), 100);
}

function _paCloseModal() { document.getElementById('paModalContainer').innerHTML = ''; }

function _paSaveMhs(dsnId, mhsIdx) {
  const nama = document.getElementById('paFormNama')?.value.trim();
  const nim = document.getElementById('paFormNim')?.value.trim();
  if (!nama) { alert('Nama mahasiswa wajib diisi'); return; }
  if (!nim) { alert('NIM wajib diisi'); return; }
  const bimb = _getPaBimbingan(); if (!bimb[dsnId]) bimb[dsnId] = [];
  const entry = { nim, nama, ank: parseInt(document.getElementById('paFormAnk')?.value)||2024, sem: parseInt(document.getElementById('paFormSem')?.value)||2, ipk: parseFloat(document.getElementById('paFormIpk')?.value)||3.0, prodi: document.getElementById('paFormProdi')?.value||'Administrasi Negara' };
  if (mhsIdx !== null && mhsIdx !== undefined) { bimb[dsnId][mhsIdx] = entry; _paToast('Data mahasiswa diperbarui'); }
  else { bimb[dsnId].push(entry); _paToast('Mahasiswa berhasil ditambahkan'); }
  _paCloseModal(); _paRefreshGrid(dsnId);
}

function _paToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:hsl(150 50% 35%);color:white;padding:12px 20px;border-radius:10px;font-size:0.8rem;font-weight:600;z-index:10000;box-shadow:0 4px 16px rgba(0,0,0,.15);animation:el-fadeInUp .25s ease;';
  t.textContent = '\u2713 ' + msg; document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; setTimeout(() => t.remove(), 300); }, 2500);
}

function _paOpenKrs(nim, nama, sem, ipk, prodi) {
  const mhs = { nim, nama, sem, ipk, prodi };
  const mainContent = document.getElementById('dashMain');
  if (!mainContent) return;
  const isoFooter = mainContent.querySelector('.dash-iso-footer')?.outerHTML || '';
  mainContent.innerHTML = _krsDetailContent(mhs) + isoFooter;
  mainContent.scrollTop = 0;
  // Update sidebar active state
  document.querySelectorAll('.sidebar-link').forEach(l => { l.classList.remove('active'); l.removeAttribute('aria-current'); });
  const krsLink = document.querySelector('.sidebar-link[data-page="validasi-krs"]');
  if (krsLink) { krsLink.classList.add('active'); krsLink.setAttribute('aria-current', 'page'); }
}

function _paBackToBimbingan() {
  const mainContent = document.getElementById('dashMain');
  if (!mainContent) return;
  const isoFooter = mainContent.querySelector('.dash-iso-footer')?.outerHTML || '';
  mainContent.innerHTML = bimbinganPAContent() + isoFooter;
  initBimbinganPA();
  mainContent.scrollTop = 0;
  // Update sidebar active state
  document.querySelectorAll('.sidebar-link').forEach(l => { l.classList.remove('active'); l.removeAttribute('aria-current'); });
  const paLink = document.querySelector('.sidebar-link[data-page="bimbingan-pa"]');
  if (paLink) { paLink.classList.add('active'); paLink.setAttribute('aria-current', 'page'); }
}

function bimbinganPAContent() {
  const bimb = _getPaBimbingan();
  const dosenList = DOSEN_LIST.filter(d => d.totalMahasiswaBimbingan > 0);
  const totalMhs = Object.values(bimb).reduce((s, a) => s + a.length, 0);
  const avgMhs = dosenList.length ? (totalMhs / dosenList.length).toFixed(1) : 0;
  const maxMhs = Math.max(...Object.values(bimb).map(a => a.length), 0);

  return `
    <style>
      .pa-page{animation:el-fadeInUp .35s ease}.pa-mhs-link{cursor:pointer;transition:color .2s}.pa-mhs-link:hover{color:hsl(215 55% 50%)!important;text-decoration:underline}.pa-header{display:flex;gap:20px;margin-bottom:20px}.pa-stat-card{flex:1;background:#fff;border-radius:14px;border:1px solid hsl(215 15% 92%);padding:20px;display:flex;align-items:center;gap:14px;transition:all .25s}.pa-stat-card:hover{box-shadow:0 4px 20px rgba(0,0,0,.06);transform:translateY(-2px)}.pa-stat-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0}.pa-stat-num{font-size:1.6rem;font-weight:800;line-height:1;color:hsl(215 40% 18%)}.pa-stat-label{font-size:.68rem;color:hsl(215 15% 55%);margin-top:2px}.pa-search-bar{background:#fff;border-radius:12px;border:1px solid hsl(215 15% 92%);padding:12px 18px;display:flex;align-items:center;gap:10px;margin-bottom:16px}.pa-search-bar input{flex:1;border:none;outline:none;font-size:.85rem;color:hsl(215 40% 18%);font-family:inherit;background:transparent}.pa-search-bar input::placeholder{color:hsl(215 15% 65%)}.pa-count{font-size:.72rem;color:hsl(215 15% 55%);flex-shrink:0}.pa-card{background:#fff;border-radius:14px;border:1px solid hsl(215 15% 92%);margin-bottom:10px;overflow:hidden;transition:all .25s}.pa-card:hover{border-color:hsl(215 30% 85%);box-shadow:0 2px 12px rgba(0,0,0,.04)}.pa-card-head{display:flex;align-items:center;gap:14px;padding:14px 18px;cursor:pointer;user-select:none}.pa-avatar{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.75rem;color:white;flex-shrink:0}.pa-info{flex:1;min-width:0}.pa-info h4{margin:0;font-size:.85rem;font-weight:700;color:hsl(215 40% 18%);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pa-badge{display:flex;align-items:center;gap:6px;flex-shrink:0}.pa-badge-num{min-width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:.85rem;font-weight:800}.pa-arrow{width:24px;height:24px;border-radius:6px;display:flex;align-items:center;justify-content:center;color:hsl(215 15% 65%);transition:all .25s}.pa-arrow svg{pointer-events:none;transition:transform .3s cubic-bezier(.4,0,.2,1)}.pa-panel{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.4,0,.2,1)}.pa-panel-inner{padding:0 18px 16px}.pa-panel-toolbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-top:4px}.pa-btn-add{display:inline-flex;align-items:center;gap:5px;padding:6px 14px;border:none;border-radius:8px;font-size:.72rem;font-weight:700;cursor:pointer;background:hsl(215 55% 50%);color:white;transition:all .2s}.pa-btn-add:hover{background:hsl(215 55% 42%);transform:scale(1.03)}.pa-mhs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px}.pa-mhs-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;background:hsl(215 20% 98%);border:1px solid hsl(215 15% 94%);transition:all .2s}.pa-mhs-item:hover{background:hsl(215 30% 96%);border-color:hsl(215 30% 87%)}.pa-mhs-item:hover .pa-mhs-actions{opacity:1}.pa-mhs-av{width:32px;height:32px;border-radius:8px;background:hsl(215 15% 90%);color:hsl(215 30% 40%);display:flex;align-items:center;justify-content:center;font-size:.58rem;font-weight:700;flex-shrink:0}.pa-mhs-name{font-size:.78rem;font-weight:600;color:hsl(215 35% 22%);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pa-mhs-meta{font-size:.65rem;color:hsl(215 15% 55%);display:flex;gap:8px;margin-top:1px}.pa-mhs-meta span{white-space:nowrap}.pa-ipk{font-weight:700}.pa-sep{width:1px;height:14px;background:hsl(215 15% 88%);margin:0 2px}.pa-mhs-actions{display:flex;gap:4px;flex-shrink:0;opacity:0;transition:opacity .2s}.pa-mhs-btn{width:26px;height:26px;border:none;border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s}.pa-mhs-btn.edit{background:hsl(215 50% 94%);color:hsl(215 50% 45%)}.pa-mhs-btn.edit:hover{background:hsl(215 50% 88%)}.pa-mhs-btn.del{background:hsl(0 50% 95%);color:hsl(0 50% 45%)}.pa-mhs-btn.del:hover{background:hsl(0 50% 88%)}.pa-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9999;display:flex;align-items:center;justify-content:center;animation:el-fadeInUp .2s ease}.pa-modal{background:white;border-radius:16px;width:480px;max-width:92vw;max-height:85vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.15)}.pa-modal-head{padding:20px 24px 16px;border-bottom:1px solid hsl(215 15% 93%);display:flex;justify-content:space-between;align-items:center}.pa-modal-head h3{margin:0;font-size:.95rem;font-weight:700;color:hsl(215 40% 18%)}.pa-modal-close{width:32px;height:32px;border:none;border-radius:8px;background:hsl(215 15% 95%);color:hsl(215 15% 50%);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.1rem}.pa-modal-close:hover{background:hsl(0 50% 94%);color:hsl(0 50% 45%)}.pa-modal-body{padding:20px 24px}.pa-modal-body label{display:block;font-size:.72rem;font-weight:700;color:hsl(215 20% 40%);margin-bottom:5px;text-transform:uppercase;letter-spacing:.03em}.pa-modal-body input,.pa-modal-body select{width:100%;padding:10px 14px;border:1px solid hsl(215 15% 88%);border-radius:10px;font-size:.82rem;outline:none;font-family:inherit;box-sizing:border-box;transition:border-color .2s;margin-bottom:14px}.pa-modal-body input:focus,.pa-modal-body select:focus{border-color:hsl(215 55% 55%)}.pa-modal-foot{padding:14px 24px 20px;display:flex;gap:8px;justify-content:flex-end}.pa-modal-foot button{padding:8px 20px;border:none;border-radius:8px;font-size:.8rem;font-weight:700;cursor:pointer;transition:all .2s}.pa-modal-foot .pa-cancel{background:hsl(215 15% 93%);color:hsl(215 20% 40%)}.pa-modal-foot .pa-cancel:hover{background:hsl(215 15% 87%)}.pa-modal-foot .pa-save{background:hsl(215 55% 50%);color:white}.pa-modal-foot .pa-save:hover{background:hsl(215 55% 42%)}@media(max-width:768px){.pa-header{flex-direction:column;gap:10px}.pa-mhs-grid{grid-template-columns:1fr}.pa-info h4{font-size:.8rem}.pa-mhs-actions{opacity:1}}
    </style>
    <div class="pa-page">
      <div class="pa-header">
        <div class="pa-stat-card"><div class="pa-stat-icon" style="background:hsl(215 60% 95%);color:hsl(215 55% 45%);">👨‍🏫</div><div><div class="pa-stat-num" id="paStat_dosen">${dosenList.length}</div><div class="pa-stat-label">Dosen PA Aktif</div></div></div>
        <div class="pa-stat-card"><div class="pa-stat-icon" style="background:hsl(150 50% 94%);color:hsl(150 50% 35%);">👨‍🎓</div><div><div class="pa-stat-num" id="paStat_mhs">${totalMhs}</div><div class="pa-stat-label">Total Mahasiswa</div></div></div>
        <div class="pa-stat-card"><div class="pa-stat-icon" style="background:hsl(280 40% 94%);color:hsl(280 45% 45%);">📊</div><div><div class="pa-stat-num" id="paStat_avg">${avgMhs}</div><div class="pa-stat-label">Rata-rata / Dosen</div></div></div>
        <div class="pa-stat-card"><div class="pa-stat-icon" style="background:hsl(35 70% 94%);color:hsl(35 70% 42%);">🏆</div><div><div class="pa-stat-num" id="paStat_max">${maxMhs}</div><div class="pa-stat-label">Mhs Terbanyak</div></div></div>
      </div>
      <div class="pa-search-bar">
        <svg class="pa-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" id="paSearchInput" placeholder="Cari nama dosen PA..." />
        <div class="pa-count"><span id="paCount">${dosenList.length}</span> dosen</div>
      </div>
      ${dosenList.map((d, idx) => {
        const ini = d.nama.split(' ').filter(w => w.length > 2 && !w.includes('.')).map(n => n[0]).join('').substring(0,2).toUpperCase();
        const hue = (idx * 37 + 200) % 360;
        const bgSolid = 'hsl(' + hue + ' 45% 50%)'; const bgLight = 'hsl(' + hue + ' 50% 94%)'; const txtColor = 'hsl(' + hue + ' 50% 38%)';
        const mhsList = bimb[d.id] || [];
        return '<div class="pa-card" data-dosen="' + d.nama.toLowerCase() + '" data-dsn-id="' + d.id + '"><div class="pa-card-head" data-idx="' + idx + '"><div class="pa-avatar" style="background:' + bgSolid + ';">' + ini + '</div><div class="pa-info"><h4>' + d.nama + '</h4></div><div class="pa-badge"><div class="pa-badge-num" style="background:' + bgLight + ';color:' + txtColor + ';" id="paBadge_' + d.id + '">' + mhsList.length + '</div><div class="pa-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div></div></div><div class="pa-panel" id="paMhs_' + idx + '"><div class="pa-panel-inner"><div class="pa-panel-toolbar"><span style="font-size:0.72rem;color:hsl(215 15% 55%);" id="paMhsCount_' + d.id + '">' + mhsList.length + ' mahasiswa bimbingan</span><button class="pa-btn-add" onclick="event.stopPropagation();_paShowModal(\'' + d.id + '\',null)">+ Tambah</button></div><div class="pa-mhs-grid" id="paGrid_' + d.id + '">' + _paRenderMhsGrid(d.id, mhsList) + '</div></div></div></div>';
      }).join('')}
    </div>
    <div id="paModalContainer"></div>`;
}

function initBimbinganPA() {
  document.querySelectorAll('.pa-card-head').forEach(header => {
    header.addEventListener('click', () => {
      const idx = header.dataset.idx;
      const panel = document.getElementById('paMhs_' + idx);
      const arrow = header.querySelector('.pa-arrow svg');
      const card = header.closest('.pa-card');
      const isOpen = panel.dataset.open === 'true';
      document.querySelectorAll('.pa-panel').forEach(p => {
        if (p.id !== 'paMhs_' + idx && p.dataset.open === 'true') {
          p.style.maxHeight = '0'; p.dataset.open = 'false';
          p.closest('.pa-card').querySelector('.pa-arrow svg').style.transform = '';
          p.closest('.pa-card').style.borderColor = '';
        }
      });
      if (isOpen) { panel.style.maxHeight = '0'; panel.dataset.open = 'false'; arrow.style.transform = ''; card.style.borderColor = ''; }
      else { panel.style.maxHeight = panel.scrollHeight + 50 + 'px'; panel.dataset.open = 'true'; arrow.style.transform = 'rotate(180deg)'; card.style.borderColor = 'hsl(215 40% 80%)'; setTimeout(() => header.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 200); }
    });
  });
  document.getElementById('paSearchInput')?.addEventListener('input', function() {
    const q = this.value.toLowerCase(); let c = 0;
    document.querySelectorAll('.pa-card').forEach(card => { const show = card.dataset.dosen.includes(q); card.style.display = show ? '' : 'none'; if (show) c++; });
    document.getElementById('paCount').textContent = c;
  });
  // Expose to window for inline onclick handlers (ES module scope)
  window._paShowModal = _paShowModal;
  window._paDeleteMhs = _paDeleteMhs;
  window._paCloseModal = _paCloseModal;
  window._paSaveMhs = _paSaveMhs;
  window._paOpenKrs = _paOpenKrs;
  window._paBackToBimbingan = _paBackToBimbingan;
}



// ---- PMB Management Page (BAP) ----
const PMB_API = '/api/pmb';

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
        <option value="Administrasi Negara">Adm. Negara</option>
        <option value="Administrasi Niaga">Adm. Niaga</option>
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

  const prodiOptions = ['Administrasi Negara', 'Administrasi Niaga'];

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

  const prodiOptions = ['Administrasi Negara','Administrasi Niaga'];
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
const MHS_API = '/api/pmb';
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

  const prodiOptions = ['Administrasi Negara','Administrasi Niaga'];
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
  const dokRow = (label, filePath) => {
    if (filePath) {
      const apiUrl = '/api/' + filePath;
      return row(label, '<span class="profil-row-value"><a href="' + apiUrl + '" target="_blank" style="color:hsl(215 70% 50%);text-decoration:none;font-weight:600;display:inline-flex;align-items:center;gap:4px;">📄 Lihat Dokumen</a></span>');
    }
    return row(label, '<span class="profil-row-value muted" style="display:inline-flex;align-items:center;gap:4px;">⚠️ Belum diupload</span>');
  };

  const agamaOpts = ['Islam','Kristen','Katolik','Hindu','Budha','Konghucu'].map(a => '<option value="'+a+'" '+(user.agama===a?'selected':'')+'>'+a+'</option>').join('');

  return '<div style="background:var(--gradient-primary);border-radius:16px;padding:28px 24px;display:flex;align-items:center;gap:20px;flex-wrap:wrap;margin-bottom:20px;position:relative;overflow:hidden;" role="banner" aria-label="Profil mahasiswa">'
    + '<div style="position:absolute;top:-40px;right:-40px;width:140px;height:140px;background:rgba(255,255,255,.05);border-radius:50%;"></div>'
    + '<div style="position:absolute;bottom:-30px;left:30%;width:100px;height:100px;background:rgba(255,255,255,.03);border-radius:50%;"></div>'
    + '<div id="avatarWrap" style="position:relative;width:72px;height:72px;flex-shrink:0;cursor:pointer;" title="Klik untuk ganti foto" aria-label="Ganti foto profil">'
    + '<div id="avatarCircle" style="width:72px;height:72px;border-radius:50%;background:' + (user.avatar ? 'url('+user.avatar+') center/cover' : 'rgba(255,255,255,.15)') + ';backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:1.5rem;border:2px solid rgba(255,255,255,.3);overflow:hidden;">' + (user.avatar ? '' : initials) + '</div>'
    + '<div style="position:absolute;bottom:0;right:0;width:24px;height:24px;background:var(--primary-500);border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid white;font-size:0.65rem;">\u{1F4F7}</div>'
    + '<input type="file" id="avatarInput" accept="image/*" style="display:none;" aria-label="Upload foto profil">'
    + '</div>'
    + '<div style="flex:1;color:white;min-width:180px;">'
    + '<h2 style="font-family:var(--font-heading);margin:0 0 4px;font-size:1.25rem;font-weight:800;">' + user.nama + '</h2>'
    + '<p style="margin:0 0 8px;opacity:.8;font-size:0.82rem;">' + user.prodi + '</p>'
    + '<div style="display:flex;gap:6px;flex-wrap:wrap;">'
    + '<span style="background:rgba(255,255,255,.15);padding:3px 10px;border-radius:16px;font-size:0.7rem;font-family:var(--font-mono);border:1px solid rgba(255,255,255,.15);">NIM ' + user.nim + '</span>'
    + '<span style="background:rgba(255,255,255,.15);padding:3px 10px;border-radius:16px;font-size:0.7rem;border:1px solid rgba(255,255,255,.15);">Semester ' + user.semester + '</span>'
    + '<span style="background:hsl(145 65% 38%);padding:3px 10px;border-radius:16px;font-size:0.7rem;font-weight:700;" role="status">\u2713 Aktif</span>'
    + '</div></div>'
    + '<button class="profil-edit-btn" id="editProfilToggle" aria-label="Edit profil" style="background:linear-gradient(135deg,rgba(255,255,255,.22),rgba(255,255,255,.08));color:white;border:1.5px solid rgba(255,255,255,.3);padding:10px 22px;border-radius:12px;font-size:0.82rem;font-weight:700;cursor:pointer;backdrop-filter:blur(8px);display:inline-flex;align-items:center;gap:8px;transition:all .3s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 15px rgba(0,0,0,.15);letter-spacing:0.3px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Edit Profil</button>'
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
    + '<div class="off-section"><h5 class="off-section-title">\ud83d\udcc2 Upload Dokumen Persyaratan</h5>'
    + '<p style="font-size:0.78rem;color:var(--text-muted);margin:0 0 12px;">Format: JPG, PNG, PDF — Maks. 5MB per file</p>'
    + '<div class="off-row"><div class="form-group"><label class="form-label" for="ep_ijazah">Ijazah SMA/SMK/MA ' + (user.file_ijazah ? '<span style="color:hsl(150 55% 42%);font-size:0.7rem;">✅ Sudah ada</span>' : '<span style="color:hsl(40 70% 45%);font-size:0.7rem;">⚠️ Belum</span>') + '</label><input type="file" id="ep_ijazah" name="file_ijazah" accept=".jpg,.jpeg,.png,.pdf" class="form-input" style="padding:8px;"></div>'
    + '<div class="form-group"><label class="form-label" for="ep_ktp">Fotokopi KTP / KK ' + (user.file_ktp ? '<span style="color:hsl(150 55% 42%);font-size:0.7rem;">✅ Sudah ada</span>' : '<span style="color:hsl(40 70% 45%);font-size:0.7rem;">⚠️ Belum</span>') + '</label><input type="file" id="ep_ktp" name="file_ktp" accept=".jpg,.jpeg,.png,.pdf" class="form-input" style="padding:8px;"></div></div>'
    + '<div class="off-row"><div class="form-group"><label class="form-label" for="ep_pasfoto">Pas Foto 3×4 ' + (user.file_pasfoto ? '<span style="color:hsl(150 55% 42%);font-size:0.7rem;">✅ Sudah ada</span>' : '<span style="color:hsl(40 70% 45%);font-size:0.7rem;">⚠️ Belum</span>') + '</label><input type="file" id="ep_pasfoto" name="file_pasfoto" accept=".jpg,.jpeg,.png,.pdf" class="form-input" style="padding:8px;"></div>'
    + '<div class="form-group"><label class="form-label" for="ep_rapor">Transkip Nilai Rapor ' + (user.file_rapor ? '<span style="color:hsl(150 55% 42%);font-size:0.7rem;">✅ Sudah ada</span>' : '') + '</label><input type="file" id="ep_rapor" name="file_rapor" accept=".jpg,.jpeg,.png,.pdf" class="form-input" style="padding:8px;"></div></div>'
    + '<div class="off-row"><div class="form-group"><label class="form-label" for="ep_sehat">Surat Keterangan Sehat ' + (user.file_surat_sehat ? '<span style="color:hsl(150 55% 42%);font-size:0.7rem;">✅ Sudah ada</span>' : '') + '</label><input type="file" id="ep_sehat" name="file_surat_sehat" accept=".jpg,.jpeg,.png,.pdf" class="form-input" style="padding:8px;"></div><div class="form-group"></div></div></div>'
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

    // Dokumen Persyaratan Section
    + '<div class="profil-section" role="region" aria-labelledby="secDokumen">'
    + '<div class="profil-section-header"><h3 class="profil-section-title" id="secDokumen"><span class="pst-icon" style="background:hsl(35 80% 93%);color:hsl(35 70% 42%);">\ud83d\udcc2</span> Dokumen Persyaratan</h3></div>'
    + '<div class="profil-2col">'
    + dokRow('Ijazah SMA/SMK/MA', user.file_ijazah)
    + dokRow('Fotokopi KTP / KK', user.file_ktp)
    + dokRow('Pas Foto 3×4', user.file_pasfoto)
    + dokRow('Transkip Nilai Rapor', user.file_rapor)
    + dokRow('Surat Keterangan Sehat', user.file_surat_sehat)
    + '</div></div>'

    // Pengaturan Akun Section
    + '<div class="profil-section" role="region" aria-labelledby="secAkun">'
    + '<div class="profil-section-header"><h3 class="profil-section-title" id="secAkun"><span class="pst-icon" style="background:hsl(0 0% 94%);color:var(--text-muted);">\u2699\ufe0f</span> Pengaturan Akun</h3></div>'
    + '<div style="padding:20px;">'
    + '<form id="profilForm" style="max-width:380px;" autocomplete="off" aria-label="Ubah password">'
    + '<div class="form-group" style="margin-bottom:12px;"><label class="form-label" for="profOldPw">Password Lama</label><input type="password" id="profOldPw" class="form-input" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" autocomplete="current-password"></div>'
    + '<div class="form-group" style="margin-bottom:12px;"><label class="form-label" for="profNewPw">Password Baru</label><input type="password" id="profNewPw" class="form-input" placeholder="Minimal 8 karakter" autocomplete="new-password" minlength="8"></div>'
    + '<div class="form-group" style="margin-bottom:16px;"><label class="form-label" for="profConfPw">Konfirmasi Password Baru</label><input type="password" id="profConfPw" class="form-input" placeholder="Ulangi password baru" autocomplete="new-password"></div>'
    + '<button type="button" class="btn btn-primary btn-sm" style="border-radius:8px;" >\ud83d\udd10 Ubah Password</button>'
    + '</form></div></div>';
}


// ============================================
// KURIKULUM — Content Renderer
// ============================================

function kurikulumContent() {
  let html = '<div style="padding:16px;">'
    + '<h2 style="font-size:1.15rem;font-weight:700;margin:0 0 4px;">\ud83d\udcda Kurikulum Program Studi</h2>'
    + '<p style="color:var(--text-muted);font-size:0.82rem;margin:0 0 16px;">Struktur kurikulum Administrasi Niaga & Negara \u2014 STIA Bayuangga</p>'

    // Tab buttons
    + '<div id="kurikulumTabs" style="display:flex;gap:8px;margin-bottom:16px;">'
    + '<button class="kur-tab active" data-prodi="niaga" style="padding:8px 20px;border:none;border-radius:8px;font-size:0.82rem;font-weight:600;cursor:pointer;background:hsl(210 70% 50%);color:white;transition:all .2s;">\ud83c\udfea Adm. Niaga (145 SKS)</button>'
    + '<button class="kur-tab" data-prodi="negara" style="padding:8px 20px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.82rem;font-weight:600;cursor:pointer;background:white;color:var(--text-primary);transition:all .2s;">\ud83c\udfe6 Adm. Negara (146 SKS)</button>'
    + '</div>'

    // Content area
    + '<div id="kurikulumContent"></div>'

    // Edit Modal
    + '<div id="mkEditModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.45);z-index:9999;align-items:center;justify-content:center;">'
    + '<div style="background:white;border-radius:16px;width:500px;max-width:92vw;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.25);">'
    + '<div style="padding:16px 20px;border-bottom:1px solid var(--gray-100);display:flex;justify-content:space-between;align-items:center;">'
    + '<h3 style="margin:0;font-size:0.95rem;font-weight:700;">\u270f\ufe0f Edit Mata Kuliah</h3>'
    + '<button id="closeMkEdit" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--text-muted);">&times;</button>'
    + '</div>'
    + '<form id="mkEditForm" style="padding:20px;">'
    + '<input type="hidden" id="mkEditProdi">'
    + '<input type="hidden" id="mkEditSem">'
    + '<input type="hidden" id="mkEditIdx">'
    + '<div style="margin-bottom:12px;"><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;color:var(--text-secondary);">Kode MK</label><input id="mkEditKode" readonly style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;background:var(--gray-50);color:var(--text-muted);"></div>'
    + '<div style="margin-bottom:12px;"><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;color:var(--text-secondary);">Mata Kuliah *</label><input id="mkEditNama" required style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '<div style="margin-bottom:12px;"><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;color:var(--text-secondary);">Dosen <span style="font-size:0.62rem;color:hsl(150 50% 45%);">(dari Data Dosen)</span></label>'
    + '<select id="mkEditDosen" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;cursor:pointer;">'
    + '<option value="">— Pilih Dosen —</option>'
    + (typeof DOSEN_LIST !== 'undefined' ? DOSEN_LIST.filter(d => d.status === 'Aktif').map(d => `<option value="${d.nama}">${d.nama}</option>`).join('') : '')
    + '</select></div>'
    + '<div style="margin-bottom:14px;"><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;color:var(--text-secondary);">SKS</label><input id="mkEditSks" type="number" min="1" max="10" required style="width:100px;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '<div style="display:flex;justify-content:flex-end;gap:8px;">'
    + '<button type="button" id="cancelMkEdit" style="padding:8px 18px;border:1px solid var(--gray-200);background:white;border-radius:8px;font-size:0.82rem;cursor:pointer;">Batal</button>'
    + '<button type="submit" style="padding:8px 18px;border:none;background:var(--primary-500);color:white;border-radius:8px;font-size:0.82rem;font-weight:600;cursor:pointer;">Simpan</button>'
    + '</div>'
    + '</form></div></div>'
    + '</div>';

  return html;
}

function renderKurikulumProdi(prodiKey) {
  const data = KURIKULUM_DATA[prodiKey];
  if (!data) return '';
  const isNiaga = prodiKey === 'niaga';
  const accent = isNiaga ? 'hsl(210 70% 50%)' : 'hsl(145 55% 45%)';
  const accentLight = isNiaga ? 'hsl(210 70% 95%)' : 'hsl(145 55% 93%)';
  const totalMK = data.semester.reduce((s, sem) => s + sem.mk.length, 0);

  let html = '';

  // Stats cards
  html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:18px;">';
  html += `<div style="background:linear-gradient(135deg,${accent},${isNiaga ? 'hsl(230 60% 55%)' : 'hsl(160 50% 40%)'});border-radius:12px;padding:14px;color:white;"><div style="font-size:1.6rem;font-weight:800;">${data.totalSKS}</div><div style="font-size:0.72rem;opacity:.85;">Total SKS</div></div>`;
  html += `<div style="background:linear-gradient(135deg,hsl(35 80% 55%),hsl(25 75% 50%));border-radius:12px;padding:14px;color:white;"><div style="font-size:1.6rem;font-weight:800;">8</div><div style="font-size:0.72rem;opacity:.85;">Semester</div></div>`;
  html += `<div style="background:linear-gradient(135deg,hsl(270 55% 55%),hsl(280 50% 45%));border-radius:12px;padding:14px;color:white;"><div style="font-size:1.6rem;font-weight:800;">${totalMK}</div><div style="font-size:0.72rem;opacity:.85;">Mata Kuliah</div></div>`;
  html += `<div style="background:linear-gradient(135deg,hsl(340 60% 55%),hsl(350 55% 45%));border-radius:12px;padding:14px;color:white;"><div style="font-size:1.6rem;font-weight:800;">S1</div><div style="font-size:0.72rem;opacity:.85;">Jenjang</div></div>`;
  html += '</div>';

  // Semester filter
  html += '<div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap;">';
  html += `<button class="sem-filter active" data-sem="all" style="padding:5px 14px;border:1px solid ${accent};border-radius:20px;font-size:0.72rem;font-weight:600;cursor:pointer;background:${accent};color:white;transition:all .2s;">Semua</button>`;
  for (let i = 1; i <= 8; i++) {
    html += `<button class="sem-filter" data-sem="${i}" style="padding:5px 14px;border:1px solid var(--gray-200);border-radius:20px;font-size:0.72rem;font-weight:600;cursor:pointer;background:white;color:var(--text-primary);transition:all .2s;">Smt ${i}</button>`;
  }
  html += '</div>';

  // Dosen search filter
  html += '<div style="margin-bottom:14px;display:flex;align-items:center;gap:10px;">';
  html += '<div style="position:relative;flex:1;max-width:400px;">';
  html += '<input id="dosenSearchInput" type="text" placeholder="🔍 Cari nama dosen..." style="width:100%;padding:8px 12px 8px 34px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.82rem;box-sizing:border-box;transition:border-color .2s;">';
  html += '<span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:0.85rem;pointer-events:none;">👤</span>';
  html += '</div>';
  html += '<span id="dosenSearchCount" style="font-size:0.72rem;color:var(--text-muted);white-space:nowrap;"></span>';
  html += '</div>';

  // Semesters
  data.semester.forEach(sem => {
    html += `<div class="sem-section" data-semester="${sem.no}" style="margin-bottom:16px;">`;
    html += `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">`;
    html += `<div style="display:flex;align-items:center;gap:8px;"><h3 style="font-size:0.88rem;font-weight:700;margin:0;"><span style="display:inline-block;background:${accent};color:white;padding:2px 10px;border-radius:6px;font-size:0.72rem;">Semester ${sem.no}</span></h3>`;
    html += `<button class="btn-mk-add" data-sem="${sem.no}" style="padding:3px 10px;border:1px dashed ${accent};border-radius:6px;background:${accentLight};color:${accent};font-size:0.68rem;font-weight:600;cursor:pointer;transition:all .2s;" title="Tambah MK">+ Tambah MK</button></div>`;
    html += `<span style="font-size:0.72rem;font-weight:600;color:${accent};background:${accentLight};padding:2px 10px;border-radius:10px;">${sem.sks} SKS</span>`;
    html += '</div>';
    html += '<div style="background:white;border-radius:12px;border:1px solid var(--gray-100);overflow:hidden;">';
    html += '<table style="width:100%;border-collapse:collapse;font-size:0.78rem;">';
    html += '<thead><tr style="background:var(--gray-50);">'
      + '<th style="padding:8px 10px;text-align:left;font-weight:600;color:var(--text-secondary);width:30px;">No</th>'
      + '<th style="padding:8px 10px;text-align:left;font-weight:600;color:var(--text-secondary);width:85px;">Kode MK</th>'
      + '<th style="padding:8px 10px;text-align:left;font-weight:600;color:var(--text-secondary);">Mata Kuliah</th>'
      + '<th style="padding:8px 10px;text-align:left;font-weight:600;color:var(--text-secondary);">Dosen</th>'
      + '<th style="padding:8px 10px;text-align:center;font-weight:600;color:var(--text-secondary);width:45px;">SKS</th>'
      + '<th style="padding:8px 10px;text-align:center;font-weight:600;color:var(--text-secondary);width:65px;">Aksi</th>'
      + '</tr></thead><tbody>';
    sem.mk.forEach((mk, idx) => {
      const bgRow = idx % 2 === 0 ? 'white' : 'var(--gray-50)';
      html += `<tr style="background:${bgRow};border-top:1px solid var(--gray-100);">`;
      html += `<td style="padding:7px 10px;color:var(--text-muted);">${idx + 1}</td>`;
      html += `<td style="padding:7px 10px;"><code style="background:${accentLight};color:${accent};padding:1px 6px;border-radius:4px;font-size:0.72rem;font-weight:600;">${mk.kode}</code></td>`;
      html += `<td style="padding:7px 10px;font-weight:500;">${mk.nama}</td>`;
      html += `<td style="padding:7px 10px;color:var(--text-secondary);font-size:0.72rem;">${mk.dosen === '-' ? '<em style="opacity:.5">-</em>' : mk.dosen}</td>`;
      html += `<td style="padding:7px 10px;text-align:center;font-weight:700;color:${accent};">${mk.sks}</td>`;
      html += `<td style="padding:7px 10px;text-align:center;white-space:nowrap;"><button class="btn-mk-edit" data-sem="${sem.no}" data-idx="${idx}" style="background:none;border:none;cursor:pointer;font-size:0.8rem;padding:2px 3px;" title="Edit">\u270f\ufe0f</button><button class="btn-mk-del" data-sem="${sem.no}" data-idx="${idx}" style="background:none;border:none;cursor:pointer;font-size:0.8rem;padding:2px 3px;" title="Hapus">\ud83d\uddd1\ufe0f</button></td>`;
      html += '</tr>';
    });
    html += `<tr style="background:${accentLight};border-top:2px solid ${accent};">`;
    html += `<td colspan="5" style="padding:7px 10px;font-weight:700;text-align:right;font-size:0.75rem;">Total SKS Semester ${sem.no}</td>`;
    html += `<td style="padding:7px 10px;text-align:center;font-weight:800;color:${accent};">${sem.sks}</td></tr>`;
    html += '</tbody></table></div></div>';
  });

  // Grand total
  html += `<div style="background:${accent};color:white;padding:12px 16px;border-radius:10px;display:flex;justify-content:space-between;align-items:center;margin-top:4px;">`;
  html += `<span style="font-weight:700;font-size:0.88rem;">\ud83c\udf93 Total SKS ${data.nama}</span>`;
  html += `<span style="font-size:1.3rem;font-weight:800;">${data.totalSKS} SKS</span>`;
  html += '</div>';

  return html;
}

function initKurikulumPage() {
  const contentArea = document.getElementById('kurikulumContent');
  if (!contentArea) return;

  function getCurrentProdi() {
    return document.querySelector('.kur-tab.active')?.dataset.prodi || 'niaga';
  }

  function recalcSKS(prodi) {
    const d = KURIKULUM_DATA[prodi];
    d.semester.forEach(s => { s.sks = s.mk.reduce((t, m) => t + m.sks, 0); });
    d.totalSKS = d.semester.reduce((t, s) => t + s.sks, 0);
  }

  function renderAndBind(prodi) {
    contentArea.innerHTML = renderKurikulumProdi(prodi);
    attachSemesterFilters();
    attachDosenSearch();
    attachMkEditButtons();
    attachMkAddButtons();
    attachMkDeleteButtons();
  }

  function attachDosenSearch() {
    const input = document.getElementById('dosenSearchInput');
    const countLabel = document.getElementById('dosenSearchCount');
    if (!input) return;
    input.addEventListener('input', () => {
      const query = input.value.trim().toLowerCase();
      const rows = contentArea.querySelectorAll('tbody tr:not([style*="border-top:2px"])');
      let matched = 0, total = 0;
      rows.forEach(row => {
        const dosenCell = row.querySelectorAll('td')[3];
        if (!dosenCell) return;
        const isTotal = row.querySelector('td[colspan]');
        if (isTotal) return;
        total++;
        const dosenText = dosenCell.textContent.toLowerCase();
        if (!query || dosenText.includes(query)) {
          row.style.display = '';
          matched++;
        } else {
          row.style.display = 'none';
        }
      });
      if (query && countLabel) {
        countLabel.textContent = `${matched} dari ${total} mata kuliah ditemukan`;
        countLabel.style.color = matched > 0 ? 'hsl(150 55% 40%)' : 'hsl(0 55% 50%)';
      } else if (countLabel) {
        countLabel.textContent = '';
      }
    });
  }

  // Initial render
  renderAndBind('niaga');

  // Tab switching
  document.querySelectorAll('.kur-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.kur-tab').forEach(t => {
        t.classList.remove('active');
        t.style.background = 'white';
        t.style.color = 'var(--text-primary)';
        t.style.border = '1px solid var(--gray-200)';
      });
      tab.classList.add('active');
      const prodi = tab.dataset.prodi;
      const color = prodi === 'niaga' ? 'hsl(210 70% 50%)' : 'hsl(145 55% 45%)';
      tab.style.background = color;
      tab.style.color = 'white';
      tab.style.border = 'none';
      renderAndBind(prodi);
    });
  });

  // Edit modal logic
  const modal = document.getElementById('mkEditModal');
  const closeModal = () => { if (modal) modal.style.display = 'none'; };
  document.getElementById('closeMkEdit')?.addEventListener('click', closeModal);
  document.getElementById('cancelMkEdit')?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  // Save handler (Add + Edit)
  document.getElementById('mkEditForm')?.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const prodi = document.getElementById('mkEditProdi').value;
    const semNo = parseInt(document.getElementById('mkEditSem').value);
    const mkIdx = document.getElementById('mkEditIdx').value;
    const isAdd = mkIdx === '-1';
    const sem = KURIKULUM_DATA[prodi]?.semester.find(s => s.no === semNo);
    if (!sem) return;

    const newKode = document.getElementById('mkEditKode').value.trim();
    const newNama = document.getElementById('mkEditNama').value.trim();
    const dosenSelect = document.getElementById('mkEditDosen');
    const newDosen = dosenSelect.value.trim();
    const newSks = parseInt(document.getElementById('mkEditSks').value);
    if (!newKode) { alert('\u26a0\ufe0f Kode MK harus diisi'); return; }
    if (!newNama) { alert('\u26a0\ufe0f Nama mata kuliah harus diisi'); return; }

    if (isAdd) {
      sem.mk.push({ kode: newKode, nama: newNama, dosen: newDosen || '-', sks: newSks || 3 });
    } else {
      const idx = parseInt(mkIdx);
      if (!sem.mk[idx]) return;
      sem.mk[idx].kode = newKode;
      sem.mk[idx].nama = newNama;
      sem.mk[idx].dosen = newDosen || '-';
      sem.mk[idx].sks = newSks;
    }

    recalcSKS(prodi);
    closeModal();
    alert(isAdd ? '\u2705 Mata kuliah berhasil ditambahkan!' : '\u2705 Mata kuliah berhasil diperbarui!');
    renderAndBind(prodi);
  });

  function openModal(prodi, semNo, idx, mk) {
    const isAdd = idx === -1;
    document.querySelector('#mkEditModal h3').textContent = isAdd ? '\u2795 Tambah Mata Kuliah' : '\u270f\ufe0f Edit Mata Kuliah';
    document.getElementById('mkEditProdi').value = prodi;
    document.getElementById('mkEditSem').value = semNo;
    document.getElementById('mkEditIdx').value = idx;
    const kodeField = document.getElementById('mkEditKode');
    kodeField.value = mk.kode;
    kodeField.readOnly = !isAdd;
    kodeField.style.background = isAdd ? 'white' : 'var(--gray-50)';
    kodeField.style.color = isAdd ? 'var(--text-primary)' : 'var(--text-muted)';
    document.getElementById('mkEditNama').value = mk.nama;
    // Smart match dosen dropdown
    const dosenSelect = document.getElementById('mkEditDosen');
    if (dosenSelect) {
      const dosenVal = mk.dosen === '-' ? '' : mk.dosen;
      let matched = false;
      // 1st pass: exact match
      for (let i = 0; i < dosenSelect.options.length; i++) {
        if (dosenSelect.options[i].value && dosenSelect.options[i].value === dosenVal) {
          dosenSelect.selectedIndex = i;
          matched = true;
          break;
        }
      }
      // 2nd pass: fuzzy match (includes)
      if (!matched && dosenVal) {
        for (let i = 0; i < dosenSelect.options.length; i++) {
          if (dosenSelect.options[i].value && (dosenVal.includes(dosenSelect.options[i].value) || dosenSelect.options[i].value.includes(dosenVal))) {
            dosenSelect.selectedIndex = i;
            matched = true;
            break;
          }
        }
      }
      if (!matched) dosenSelect.selectedIndex = 0;
    }
    document.getElementById('mkEditSks').value = mk.sks;
    modal.style.display = 'flex';
  }

  function attachMkEditButtons() {
    document.querySelectorAll('.btn-mk-edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodi = getCurrentProdi();
        const semNo = parseInt(btn.dataset.sem);
        const mkIdx = parseInt(btn.dataset.idx);
        const sem = KURIKULUM_DATA[prodi]?.semester.find(s => s.no === semNo);
        if (!sem || !sem.mk[mkIdx]) return;
        openModal(prodi, semNo, mkIdx, sem.mk[mkIdx]);
      });
    });
  }

  function attachMkAddButtons() {
    document.querySelectorAll('.btn-mk-add').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodi = getCurrentProdi();
        const semNo = parseInt(btn.dataset.sem);
        openModal(prodi, semNo, -1, { kode: '', nama: '', dosen: '', sks: 3 });
      });
    });
  }

  function attachMkDeleteButtons() {
    document.querySelectorAll('.btn-mk-del').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodi = getCurrentProdi();
        const semNo = parseInt(btn.dataset.sem);
        const mkIdx = parseInt(btn.dataset.idx);
        const sem = KURIKULUM_DATA[prodi]?.semester.find(s => s.no === semNo);
        if (!sem || !sem.mk[mkIdx]) return;
        const mk = sem.mk[mkIdx];
        if (!confirm(`\ud83d\uddd1\ufe0f Hapus mata kuliah "${mk.nama}" (${mk.kode})?\n\nAksi ini tidak dapat dibatalkan.`)) return;
        sem.mk.splice(mkIdx, 1);
        recalcSKS(prodi);
        alert('\u2705 Mata kuliah berhasil dihapus!');
        renderAndBind(prodi);
      });
    });
  }
}

function attachSemesterFilters() {
  document.querySelectorAll('.sem-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTab = document.querySelector('.kur-tab.active');
      const accent = activeTab?.dataset.prodi === 'negara' ? 'hsl(145 55% 45%)' : 'hsl(210 70% 50%)';
      document.querySelectorAll('.sem-filter').forEach(b => {
        b.classList.remove('active');
        b.style.background = 'white';
        b.style.color = 'var(--text-primary)';
        b.style.border = '1px solid var(--gray-200)';
      });
      btn.classList.add('active');
      btn.style.background = accent;
      btn.style.color = 'white';
      btn.style.border = `1px solid ${accent}`;
      const sem = btn.dataset.sem;
      document.querySelectorAll('.sem-section').forEach(sec => {
        sec.style.display = (sem === 'all' || sec.dataset.semester === sem) ? 'block' : 'none';
      });
    });
  });
}


// ============================================
// DATA DOSEN — Content Renderer
// ============================================

function dataDosenContent() {
  // Import DOSEN_LIST data
  const dosenList = typeof DOSEN_LIST !== 'undefined' ? DOSEN_LIST : [];

  const jabatanColors = {
    'Dekan': 'hsl(280 60% 50%)',
    'Wadek': 'hsl(215 60% 50%)',
    'Kaprodi': 'hsl(145 50% 40%)',
    'Dosen': 'hsl(38 60% 45%)'
  };

  const stats = {
    total: dosenList.length,
    dekan: dosenList.filter(d => d.jabatanFungsional === 'Dekan').length,
    wadek: dosenList.filter(d => d.jabatanFungsional === 'Wadek').length,
    kaprodi: dosenList.filter(d => d.jabatanFungsional === 'Kaprodi').length,
    dosen: dosenList.filter(d => d.jabatanFungsional === 'Dosen').length
  };

  return '<div style="margin-bottom:16px;">'
    + '<h2 style="font-family:var(--font-heading);font-size:1.15rem;font-weight:800;margin:0 0 4px;color:var(--text-primary);">\ud83d\udc68\u200d\ud83c\udfeb Data Dosen</h2>'
    + '<p style="color:var(--text-muted);font-size:0.8rem;margin:0;">Manajemen data dosen STIA Bayuangga</p>'
    + '</div>'

    // Stats Cards
    + '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:20px;">'
    + '<div style="background:var(--gradient-primary);border-radius:12px;padding:16px;color:white;">'
    + '<div style="font-size:1.8rem;font-weight:800;">' + stats.total + '</div>'
    + '<div style="font-size:0.72rem;opacity:.8;">Total Dosen</div></div>'
    + '<div style="background:linear-gradient(135deg,hsl(280 60% 50%),hsl(280 60% 40%));border-radius:12px;padding:16px;color:white;">'
    + '<div style="font-size:1.8rem;font-weight:800;">' + stats.dekan + '</div>'
    + '<div style="font-size:0.72rem;opacity:.8;">Dekan</div></div>'
    + '<div style="background:linear-gradient(135deg,hsl(215 60% 50%),hsl(215 60% 40%));border-radius:12px;padding:16px;color:white;">'
    + '<div style="font-size:1.8rem;font-weight:800;">' + stats.wadek + '</div>'
    + '<div style="font-size:0.72rem;opacity:.8;">Wadek</div></div>'
    + '<div style="background:linear-gradient(135deg,hsl(145 50% 40%),hsl(145 50% 30%));border-radius:12px;padding:16px;color:white;">'
    + '<div style="font-size:1.8rem;font-weight:800;">' + stats.kaprodi + '</div>'
    + '<div style="font-size:0.72rem;opacity:.8;">Kaprodi</div></div>'
    + '<div style="background:linear-gradient(135deg,hsl(38 60% 45%),hsl(38 60% 35%));border-radius:12px;padding:16px;color:white;">'
    + '<div style="font-size:1.8rem;font-weight:800;">' + stats.dosen + '</div>'
    + '<div style="font-size:0.72rem;opacity:.8;">Dosen</div></div>'
    + '</div>'

    // Search & Filter
    + '<div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;">'
    + '<input type="text" id="dosenSearch" placeholder="\ud83d\udd0d Cari dosen..." style="flex:1;min-width:200px;padding:8px 14px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.82rem;outline:none;" aria-label="Cari dosen">'
    
    + '<select id="dosenFilterJabatan" style="padding:8px 12px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.82rem;" aria-label="Filter jabatan"><option value="">Semua Jabatan</option><option value="Dekan">Dekan</option><option value="Wadek">Wadek</option><option value="Kaprodi">Kaprodi</option><option value="Dosen">Dosen</option></select>'
    + '<select id="dosenFilterGolongan" style="padding:8px 12px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.82rem;" aria-label="Filter golongan"><option value="">Semua Golongan</option><option value="IV">Gol IV</option><option value="III">Gol III</option></select>'
    + '<button id="btnTambahDosen" style="padding:8px 16px;background:var(--primary-500);color:white;border:none;border-radius:8px;font-size:0.82rem;font-weight:600;cursor:pointer;white-space:nowrap;">\u2795 Tambah Dosen</button>'
    + '</div>'

    // Dosen Table
    + '<div class="profil-section" style="overflow-x:auto;">'
    + '<table style="width:100%;border-collapse:collapse;font-size:0.8rem;" aria-label="Tabel data dosen">'
    + '<thead><tr style="background:var(--gray-50);border-bottom:2px solid var(--gray-100);">'
    + '<th style="padding:10px 14px;text-align:left;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">Dosen</th>'
    + '<th style="padding:10px 14px;text-align:left;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">NIP / NIDN</th>'
    + '<th style="padding:10px 14px;text-align:left;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">Akun Login</th>'
    + '<th style="padding:10px 14px;text-align:left;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">Jabatan</th>'
    + '<th style="padding:10px 14px;text-align:left;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">Golongan</th>'
    + '<th style="padding:10px 14px;text-align:center;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">Status</th>'
    + '<th style="padding:10px 14px;text-align:center;font-weight:700;font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);">Aksi</th>'
    + '</tr></thead>'
    + '<tbody id="dosenTableBody">'
    + dosenList.map(d => {
        const initials = d.nama.split(' ').filter(n => !['Dr.','Ir.','Prof.','H.','Hj.','S.AP.','M.AP.','M.Si.','M.T.','M.M.','M.Kom.','S.H.','M.H.','S.Sos.','S.E.'].includes(n)).map(n => n[0]).join('').substring(0,2).toUpperCase();
        const jColor = jabatanColors[d.jabatanFungsional] || 'var(--text-muted)';
        return '<tr class="dosen-row" data-nama="' + d.nama.toLowerCase() + '" data-jabatan="' + d.jabatanFungsional + '" data-gol="' + d.golongan + '" style="border-bottom:1px solid var(--gray-50);transition:background .15s;"'
          + ' onmouseover="this.style.background=\'hsl(215 30% 98%)\';" onmouseout="this.style.background=\'transparent\';">'
          + '<td style="padding:10px 14px;">'
          + '<div style="display:flex;align-items:center;gap:10px;">'
          + '<div style="width:36px;height:36px;border-radius:50%;background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.7rem;flex-shrink:0;">' + initials + '</div>'
          + '<div><div style="font-weight:600;font-size:0.82rem;">' + d.nama + '</div>'
          + '<div style="font-size:0.7rem;color:var(--text-muted);">' + d.email + '</div></div></div></td>'
          + '<td style="padding:10px 14px;font-family:var(--font-mono);font-size:0.75rem;"><div>' + d.nip + '</div><div style="color:var(--text-muted);font-size:0.7rem;">NIDN: ' + d.nidn + '</div></td>'
          + '<td style="padding:10px 14px;"><div style="font-size:0.72rem;"><span style="color:var(--text-muted);">\ud83d\udc64</span> <strong>' + (d.username || '-') + '</strong></div><div style="font-size:0.68rem;color:var(--text-muted);margin-top:2px;">\ud83d\udd11 ' + (d.password ? '\u2022'.repeat(d.password.length) : '-') + '</div></td>'
          + '<td style="padding:10px 14px;"><span style="background:' + jColor + ';color:white;padding:2px 10px;border-radius:10px;font-size:0.7rem;font-weight:600;">' + d.jabatanFungsional + '</span></td>'
          + '<td style="padding:10px 14px;font-size:0.8rem;font-weight:600;">' + d.golongan + '</td>'
          + '<td style="padding:10px 14px;text-align:center;"><span style="background:hsl(145 55% 45%);color:white;padding:2px 10px;border-radius:10px;font-size:0.7rem;font-weight:600;">\u2713 ' + d.status + '</span></td>'
          + '<td style="padding:10px 14px;text-align:center;">'
          + '<button class="btn-dosen-detail" data-id="' + d.id + '" style="background:none;border:1px solid var(--primary-300);color:var(--primary-500);padding:4px 10px;border-radius:6px;font-size:0.7rem;cursor:pointer;margin-right:4px;" title="Detail">\ud83d\udc41\ufe0f</button>'
          + '<button class="btn-dosen-edit" data-id="' + d.id + '" style="background:none;border:1px solid hsl(215 50% 85%);color:hsl(215 50% 45%);padding:4px 10px;border-radius:6px;font-size:0.7rem;cursor:pointer;margin-right:4px;" title="Edit">\u270f\ufe0f</button>'
          + '<button class="btn-dosen-delete" data-id="' + d.id + '" data-nama="' + d.nama + '" style="background:none;border:1px solid hsl(0 60% 80%);color:hsl(0 60% 45%);padding:4px 10px;border-radius:6px;font-size:0.7rem;cursor:pointer;" title="Hapus">\ud83d\uddd1\ufe0f</button>'
          + '</td></tr>';
      }).join('')
    + '</tbody></table></div>'

    // Dosen Detail Modal
    + '<div id="dosenDetailModal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:1000;display:none;align-items:center;justify-content:center;">'
    + '<div style="background:white;border-radius:16px;max-width:600px;width:90%;max-height:80vh;overflow-y:auto;padding:24px;" id="dosenDetailContent"></div>'
    + '</div>'

    // Tambah / Edit Form Modal
    + '<div id="dosenFormModal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:1001;align-items:center;justify-content:center;">'
    + '<div style="background:white;border-radius:16px;max-width:640px;width:92%;max-height:85vh;overflow-y:auto;padding:24px;">'
    + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">'
    + '<h3 id="dosenFormTitle" style="margin:0;font-size:1rem;">Tambah Dosen Baru</h3>'
    + '<button id="closeDosenForm" style="background:none;border:none;font-size:1.2rem;cursor:pointer;">\u2716</button></div>'
    + '<form id="dosenCrudForm">'
    + '<input type="hidden" id="dosenFormId" value="">'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">'
    + '<div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Nama Lengkap *</label><input name="nama" id="dfNama" required style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '<div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">NIP *</label><input name="nip" id="dfNip" required style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '<div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">NIDN</label><input name="nidn" id="dfNidn" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '<div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Email</label><input name="email" id="dfEmail" type="email" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '<div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Telepon</label><input name="telepon" id="dfTelepon" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '<div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Jabatan *</label><select name="jabatan_fungsional" id="dfJabFung" required style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"><option value="">-- Pilih --</option><option>Dekan</option><option>Wadek</option><option>Kaprodi</option><option>Dosen</option></select></div>'
    + '<div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Golongan</label><input name="golongan" id="dfGolongan" placeholder="cth: III/d" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '<div style="grid-column:span 2"><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Pendidikan Terakhir</label><input name="pendidikan" id="dfPendidikan" placeholder="cth: S3 Ilmu Administrasi \u2014 Universitas Brawijaya" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '<div style="grid-column:span 2"><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Bidang Keahlian</label><input name="bidang_keahlian" id="dfBidang" placeholder="pisahkan dengan koma" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '</div>'
    + '<div style="margin-top:14px;padding:14px;background:hsl(38 60% 97%);border-radius:10px;border:1px solid hsl(38 60% 88%);">'
    + '<div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;"><span style="font-size:0.9rem;">\ud83d\udd11</span><span style="font-size:0.78rem;font-weight:700;color:var(--text-secondary);">Akun Login</span></div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">'
    + '<div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Username *</label><input name="username" id="dfUsername" required style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '<div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Password *</label><input name="password" id="dfPassword" required style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '</div></div>'
    + '<div id="dosenPwSection" style="display:none;margin-top:14px;padding:14px;background:var(--gray-50);border-radius:10px;border:1px solid var(--gray-100);">'
    + '<div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;"><span style="font-size:0.9rem;">\ud83d\udd10</span><span style="font-size:0.78rem;font-weight:700;color:var(--text-secondary);">Ubah Password (opsional)</span></div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">'
    + '<div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Password Baru</label><input type="password" id="dfNewPw" placeholder="Kosongkan jika tidak diubah" autocomplete="new-password" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '<div><label style="font-size:0.72rem;font-weight:600;display:block;margin-bottom:3px;">Konfirmasi Password</label><input type="password" id="dfConfPw" placeholder="Ulangi password baru" autocomplete="new-password" style="width:100%;padding:7px 10px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.82rem;box-sizing:border-box;"></div>'
    + '</div>'
    + '<div id="dfPwMatch" style="margin-top:6px;font-size:0.7rem;"></div>'
    + '</div>'
    + '<div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px;">'
    + '<button type="button" id="cancelDosenForm" style="padding:8px 18px;border:1px solid var(--gray-200);background:white;border-radius:8px;font-size:0.82rem;cursor:pointer;">Batal</button>'
    + '<button type="submit" id="submitDosenForm" style="padding:8px 18px;border:none;background:var(--primary-500);color:white;border-radius:8px;font-size:0.82rem;font-weight:600;cursor:pointer;">Simpan</button>'
    + '</div></form></div></div>';
}



// ---- Init Data Dosen Page ----
function initDosenPage(mainContent, isoFooter) {
  // Helper: filter all rows
  function applyFilters() {
    const q = (document.getElementById('dosenSearch')?.value || '').toLowerCase();
    const jab = document.getElementById('dosenFilterJabatan')?.value || '';
    const gol = document.getElementById('dosenFilterGolongan')?.value || '';
    document.querySelectorAll('.dosen-row').forEach(row => {
      const matchNama = !q || row.dataset.nama.includes(q);
      const matchJab = !jab || row.dataset.jabatan === jab;
      const matchGol = !gol || row.dataset.gol.startsWith(gol);
      row.style.display = (matchNama && matchJab && matchGol) ? '' : 'none';
    });
  }

  // Search
  document.getElementById('dosenSearch')?.addEventListener('input', applyFilters);
  document.getElementById('dosenFilterJabatan')?.addEventListener('change', applyFilters);
  document.getElementById('dosenFilterGolongan')?.addEventListener('change', applyFilters);

  // Detail buttons
  document.querySelectorAll('.btn-dosen-detail').forEach(btn => {
    btn.addEventListener('click', () => {
      const dId = btn.dataset.id;
      const d = DOSEN_LIST.find(x => x.id === dId);
      if (!d) return;
      const modal = document.getElementById('dosenDetailModal');
      const mc = document.getElementById('dosenDetailContent');
      mc.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">'
        + '<h3 style="margin:0;font-size:1rem;">Detail Dosen</h3>'
        + '<button id="closeDosenModal" style="background:none;border:none;font-size:1.2rem;cursor:pointer;">\u2716</button></div>'
        + '<div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;">'
        + '<div style="width:56px;height:56px;border-radius:50%;background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:1rem;">' + d.nama[0] + '</div>'
        + '<div><div style="font-weight:700;font-size:1rem;">' + d.nama + '</div>'
        + '<div style="color:var(--text-muted);font-size:0.8rem;">' + d.jabatanFungsional + ' \u2014 ' + d.golongan + '</div></div></div>'
        + '<div class="profil-section" style="margin-bottom:12px;"><div class="profil-section-header"><h3 class="profil-section-title"><span class="pst-icon" style="background:hsl(215 50% 94%);color:var(--primary-600);">\ud83d\udcbc</span> Informasi</h3></div>'
        + '<div class="profil-row"><div class="profil-row-label">NIP</div><span class="profil-row-value mono">' + d.nip + '</span></div>'
        + '<div class="profil-row"><div class="profil-row-label">NIDN</div><span class="profil-row-value mono">' + d.nidn + '</span></div>'
        + '<div class="profil-row"><div class="profil-row-label">Email</div><span class="profil-row-value">' + d.email + '</span></div>'
        + '<div class="profil-row"><div class="profil-row-label">Telepon</div><span class="profil-row-value">' + d.telepon + '</span></div>'
        + '<div class="profil-row"><div class="profil-row-label">Pendidikan</div><span class="profil-row-value">' + d.pendidikan + '</span></div>'
        + '<div class="profil-row"><div class="profil-row-label">Bidang Keahlian</div><span class="profil-row-value">' + d.bidangKeahlian.join(', ') + '</span></div>'
        + '<div class="profil-row"><div class="profil-row-label">Mata Kuliah</div><span class="profil-row-value">' + d.mataKuliah.join(', ') + '</span></div>'
        + '</div>'
        + '<div class="profil-section" style="margin-bottom:12px;"><div class="profil-section-header"><h3 class="profil-section-title"><span class="pst-icon" style="background:hsl(38 60% 92%);color:hsl(38 60% 40%);">\ud83d\udd11</span> Akun Login</h3></div>'
        + '<div class="profil-row"><div class="profil-row-label">Username</div><span class="profil-row-value mono" style="font-weight:700;">' + (d.username || '-') + '</span></div>'
        + '<div class="profil-row"><div class="profil-row-label">Password</div><span class="profil-row-value mono">' + (d.password || '-') + '</span></div>'
        + '</div>'
        + '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">'
        + '<div style="text-align:center;padding:12px;background:var(--gray-50);border-radius:10px;"><div style="font-size:1.3rem;font-weight:800;color:var(--primary-600);">' + d.totalPublikasi + '</div><div style="font-size:0.68rem;color:var(--text-muted);">Publikasi</div></div>'
        + '<div style="text-align:center;padding:12px;background:var(--gray-50);border-radius:10px;"><div style="font-size:1.3rem;font-weight:800;color:var(--primary-600);">' + d.totalPenelitian + '</div><div style="font-size:0.68rem;color:var(--text-muted);">Penelitian</div></div>'
        + '<div style="text-align:center;padding:12px;background:var(--gray-50);border-radius:10px;"><div style="font-size:1.3rem;font-weight:800;color:var(--primary-600);">' + d.totalPengabdian + '</div><div style="font-size:0.68rem;color:var(--text-muted);">Pengabdian</div></div>'
        + '<div style="text-align:center;padding:12px;background:var(--gray-50);border-radius:10px;"><div style="font-size:1.3rem;font-weight:800;color:var(--primary-600);">' + (d.totalMahasiswaBimbingan || 0) + '</div><div style="font-size:0.68rem;color:var(--text-muted);">Bimbingan</div></div></div>';
      modal.style.display = 'flex';
      document.getElementById('closeDosenModal')?.addEventListener('click', () => { modal.style.display = 'none'; });
      modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
    });
  });

  // Tambah Dosen
  const formModal = document.getElementById('dosenFormModal');
  const closeFormBtns = () => { formModal.style.display = 'none'; document.getElementById('dosenCrudForm')?.reset(); document.getElementById('dosenFormId').value = ''; };
  document.getElementById('btnTambahDosen')?.addEventListener('click', () => {
    document.getElementById('dosenFormTitle').textContent = '\u2795 Tambah Dosen Baru';
    document.getElementById('dosenCrudForm')?.reset();
    document.getElementById('dosenFormId').value = '';
    const pwSec = document.getElementById('dosenPwSection');
    if (pwSec) pwSec.style.display = 'none';
    formModal.style.display = 'flex';
  });
  document.getElementById('closeDosenForm')?.addEventListener('click', closeFormBtns);
  document.getElementById('cancelDosenForm')?.addEventListener('click', closeFormBtns);
  formModal?.addEventListener('click', (e) => { if (e.target === formModal) closeFormBtns(); });

  // Confirm password match indicator for edit
  document.getElementById('dfConfPw')?.addEventListener('input', (e) => {
    const el = document.getElementById('dfPwMatch');
    if (!el) return;
    const nv = document.getElementById('dfNewPw')?.value || '';
    if (!e.target.value) { el.textContent = ''; return; }
    el.textContent = nv === e.target.value ? '\u2705 Password cocok' : '\u274c Tidak cocok';
    el.style.color = nv === e.target.value ? 'hsl(145 60% 40%)' : 'hsl(0 70% 50%)';
  });

  // Submit Create / Edit
  document.getElementById('dosenCrudForm')?.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const editId = document.getElementById('dosenFormId').value;
    const formData = {
      nama: document.getElementById('dfNama').value,
      nip: document.getElementById('dfNip').value,
      nidn: document.getElementById('dfNidn').value,
      email: document.getElementById('dfEmail').value,
      telepon: document.getElementById('dfTelepon').value,
      jabatanFungsional: document.getElementById('dfJabFung').value,
      golongan: document.getElementById('dfGolongan').value,
      pendidikan: document.getElementById('dfPendidikan').value,
      bidangKeahlian: document.getElementById('dfBidang').value.split(',').map(s => s.trim()).filter(Boolean),
      mataKuliah: [],
      totalMK: 0,
      totalMahasiswaBimbingan: 0,
      totalPublikasi: 0,
      totalPenelitian: 0,
      totalPengabdian: 0,
      status: 'Aktif',
      avatar: null,
      username: document.getElementById('dfUsername').value.trim(),
      password: document.getElementById('dfPassword').value.trim()
    };
    if (editId) {
      // Check password fields
      const newPw = document.getElementById('dfNewPw')?.value;
      const confPw = document.getElementById('dfConfPw')?.value;
      if (newPw) {
        if (newPw.length < 8) { alert('\u26a0\ufe0f Password baru minimal 8 karakter'); return; }
        if (newPw !== confPw) { alert('\u26a0\ufe0f Konfirmasi password tidak cocok'); return; }
      }
      const idx = DOSEN_LIST.findIndex(d => d.id === editId);
      if (idx >= 0) {
        Object.assign(DOSEN_LIST[idx], formData);
        const msg = newPw ? '\u2705 Data dosen & password berhasil diperbarui!' : '\u2705 Data dosen berhasil diperbarui!';
        alert(msg);
      }
    } else {
      formData.id = 'DSN' + String(DOSEN_LIST.length + 1).padStart(3, '0');
      DOSEN_LIST.push(formData);
      alert('\u2705 Dosen baru berhasil ditambahkan!');
    }
    closeFormBtns();
    mainContent.innerHTML = dataDosenContent() + isoFooter;
    initDosenPage(mainContent, isoFooter);
  });

  // Edit Buttons
  document.querySelectorAll('.btn-dosen-edit').forEach(btn => {
    btn.addEventListener('click', () => {
      const dId = btn.dataset.id;
      const d = DOSEN_LIST.find(x => x.id === dId);
      if (!d) return;
      document.getElementById('dosenFormTitle').textContent = '\u270f\ufe0f Edit Dosen';
      document.getElementById('dosenFormId').value = d.id;
      document.getElementById('dfNama').value = d.nama;
      document.getElementById('dfNip').value = d.nip;
      document.getElementById('dfNidn').value = d.nidn;
      document.getElementById('dfEmail').value = d.email;
      document.getElementById('dfTelepon').value = d.telepon || '';
      document.getElementById('dfJabFung').value = d.jabatanFungsional;
      document.getElementById('dfGolongan').value = d.golongan;
      document.getElementById('dfPendidikan').value = d.pendidikan || '';
      document.getElementById('dfBidang').value = (d.bidangKeahlian || []).join(', ');
      document.getElementById('dfUsername').value = d.username || '';
      document.getElementById('dfPassword').value = d.password || '';
      // Show password section for edit
      const pwSec = document.getElementById('dosenPwSection');
      if (pwSec) { pwSec.style.display = 'block'; }
      const dfNewPw = document.getElementById('dfNewPw');
      const dfConfPw = document.getElementById('dfConfPw');
      if (dfNewPw) dfNewPw.value = '';
      if (dfConfPw) dfConfPw.value = '';
      const dfPwMatch = document.getElementById('dfPwMatch');
      if (dfPwMatch) dfPwMatch.textContent = '';
      formModal.style.display = 'flex';
    });
  });

  // Delete Buttons
  document.querySelectorAll('.btn-dosen-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const dId = btn.dataset.id;
      const nama = btn.dataset.nama;
      if (!confirm('\u26a0\ufe0f Yakin ingin menghapus dosen:\n\n' + nama + '\n\nData yang dihapus tidak dapat dikembalikan.')) return;
      const idx = DOSEN_LIST.findIndex(d => d.id === dId);
      if (idx >= 0) {
        DOSEN_LIST.splice(idx, 1);
        alert('\u2705 Dosen berhasil dihapus');
        mainContent.innerHTML = dataDosenContent() + isoFooter;
        initDosenPage(mainContent, isoFooter);
      }
    });
  });
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
    link.addEventListener('click', async (e) => {
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
      } else if (mainContent && page === 'kurikulum' && (user.role === 'bap' || user.role === 'kaprodi')) {
        mainContent.innerHTML = kurikulumContent() + isoFooter;
        initKurikulumPage();
      } else if (mainContent && page === 'dosen' && (user.role === 'bap' || user.role === 'kaprodi')) {
        mainContent.innerHTML = dataDosenContent() + isoFooter;
        initDosenPage(mainContent, isoFooter);
      } else if (mainContent && page === 'home') {
        mainContent.innerHTML = contentFn(user) + isoFooter;
      } else if (mainContent && page === 'krs' && user.role === 'mahasiswa') {
        mainContent.innerHTML = krsContent(user) + isoFooter;
      } else if (mainContent && page === 'khs' && user.role === 'mahasiswa') {
        mainContent.innerHTML = khsContent(user) + isoFooter;
        initKHSPage(user, mainContent, isoFooter);
      } else if (mainContent && page === 'jadwal' && user.role === 'mahasiswa') {
        await loadSavedJadwalPertemuan();
        mainContent.innerHTML = jadwalContent(user) + isoFooter;
      } else if (mainContent && page === 'absensi' && user.role === 'mahasiswa') {
        mainContent.innerHTML = absensiContent(user) + isoFooter;
      } else if (mainContent && page === 'nilai' && user.role === 'mahasiswa') {
        mainContent.innerHTML = nilaiContent(user) + isoFooter;
      } else if (mainContent && page === 'evaluasi' && user.role === 'mahasiswa') {
        mainContent.innerHTML = evaluasiContent(user) + isoFooter;
      } else if (mainContent && page === 'perkembangan' && user.role === 'mahasiswa') {
        mainContent.innerHTML = perkembanganContent(user) + isoFooter;
      // ---- DOSEN ROUTES ----
      } else if (mainContent && page === 'jadwal-dosen' && user.role === 'dosen') {
        mainContent.innerHTML = jadwalDosenContent(user) + isoFooter;
        initJadwalDosenPage();
      } else if (mainContent && page === 'mhs-dosen' && user.role === 'dosen') {
        mainContent.innerHTML = mhsDosenContent(user) + isoFooter;
      } else if (mainContent && page === 'input-nilai' && user.role === 'dosen') {
        mainContent.innerHTML = inputNilaiContent(user) + isoFooter;
        initInputNilaiPage();
      } else if (mainContent && page === 'rekap-nilai' && user.role === 'dosen') {
        mainContent.innerHTML = rekapNilaiContent(user) + isoFooter;
      } else if (mainContent && page === 'absensi-dosen' && user.role === 'dosen') {
        mainContent.innerHTML = absensiDosenContent(user) + isoFooter;
        initAbsensiDosenPage();
      } else if (mainContent && page === 'bimbingan' && user.role === 'dosen') {
        mainContent.innerHTML = bimbinganContent(user) + isoFooter;
      } else if (mainContent && page === 'profil-dosen' && user.role === 'dosen') {
        mainContent.innerHTML = dosenContent(user) + isoFooter;
      // ---- BAP ROUTES ----
      } else if (mainContent && page === 'statistik' && user.role === 'bap') {
        mainContent.innerHTML = statistikContent() + isoFooter;
      } else if (mainContent && page === 'transkrip' && user.role === 'bap') {
        mainContent.innerHTML = transkripContent() + isoFooter;
      } else if (mainContent && page === 'validasi-krs' && user.role === 'bap') {
        mainContent.innerHTML = validasiKrsContent() + isoFooter;
      } else if (mainContent && page === 'rekap-absensi' && user.role === 'bap') {
        mainContent.innerHTML = rekapAbsensiContent() + isoFooter;
      } else if (mainContent && page === 'surat' && user.role === 'bap') {
        mainContent.innerHTML = suratContent() + isoFooter;
      } else if (mainContent && page === 'kalender' && user.role === 'bap') {
        mainContent.innerHTML = kalenderContent() + isoFooter;
      } else if (mainContent && page === 'wisuda' && user.role === 'bap') {
        mainContent.innerHTML = wisudaContent() + isoFooter;
      } else if (mainContent && page === 'bimbingan-pa' && user.role === 'bap') {
        mainContent.innerHTML = bimbinganPAContent() + isoFooter;
        initBimbinganPA();
      } else if (mainContent && page === 'jadwal-manage' && user.role === 'bap') {
        await loadSavedJadwalPertemuan();
        mainContent.innerHTML = jadwalManageContent() + isoFooter;
        initJadwalManagePage();
      } else if (mainContent && page === 'data' && user.role === 'mahasiswa') {
        const PROFILE_API = '/api/profile';
        // Try to fetch profile from backend, fallback to local user data
        let profileUser = { ...user };
        try {
          const res = await fetch(PROFILE_API + '/' + user.nim);
          if (res.ok) {
            const data = await res.json();
            profileUser = { ...user, ...data, avatar: data.avatar_url || user.avatar };
          }
        } catch (e) { console.log('Profile API offline, using local data'); }

        mainContent.innerHTML = profilSayaContent(profileUser) + isoFooter;

        // --- Init Edit Profil Toggle ---
        const editToggle = document.getElementById('editProfilToggle');
        const editSection = document.getElementById('editProfilSection');
        const cancelBtn = document.getElementById('cancelEditProfil');

        // Prepare edit section for animation
        if (editSection) {
          editSection.style.cssText = 'overflow:hidden;max-height:0;opacity:0;transition:max-height .5s cubic-bezier(.4,0,.2,1),opacity .4s ease,margin .3s ease;margin-bottom:0;';
        }

        editToggle?.addEventListener('click', () => {
          const showing = editSection.dataset.open === 'true';
          // Button press animation
          editToggle.style.transform = 'scale(0.93)';
          setTimeout(() => { editToggle.style.transform = ''; }, 150);

          if (showing) {
            // Close
            editSection.style.maxHeight = '0';
            editSection.style.opacity = '0';
            editSection.style.marginBottom = '0';
            editSection.dataset.open = 'false';
            editToggle.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Edit Profil';
            editToggle.style.background = 'linear-gradient(135deg,rgba(255,255,255,.22),rgba(255,255,255,.08))';
          } else {
            // Open
            editSection.style.display = 'block';
            editSection.style.maxHeight = editSection.scrollHeight + 800 + 'px';
            editSection.style.opacity = '1';
            editSection.style.marginBottom = '16px';
            editSection.dataset.open = 'true';
            editToggle.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Tutup Form';
            editToggle.style.background = 'linear-gradient(135deg,rgba(239,68,68,.5),rgba(220,38,38,.3))';
            // Scroll to form
            setTimeout(() => editSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
          }
        });
        cancelBtn?.addEventListener('click', () => {
          editSection.style.maxHeight = '0';
          editSection.style.opacity = '0';
          editSection.style.marginBottom = '0';
          editSection.dataset.open = 'false';
          editToggle.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Edit Profil';
          editToggle.style.background = 'linear-gradient(135deg,rgba(255,255,255,.22),rgba(255,255,255,.08))';
        });

        // --- Edit Form -> PUT /api/profile/:nim ---
        document.getElementById('editProfilForm')?.addEventListener('submit', async (ev) => {
          ev.preventDefault();
          const btn = ev.target.querySelector('button[type="submit"]');
          const origText = btn.textContent;
          btn.textContent = '\u23f3 Menyimpan...';
          btn.disabled = true;

          const fd = new FormData(ev.target);
          const payload = {};
          const fileFields = ['file_ijazah','file_ktp','file_pasfoto','file_rapor','file_surat_sehat'];
          const uploadData = new FormData();
          let hasFiles = false;

          fd.forEach((val, key) => {
            if (fileFields.includes(key)) {
              if (val instanceof File && val.size > 0) {
                uploadData.append(key, val);
                hasFiles = true;
              }
            } else {
              payload[key] = val;
            }
          });

          try {
            const res = await fetch(PROFILE_API + '/' + user.nim, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });
            const data = await res.json();

            // Upload files if any selected
            if (hasFiles) {
              try {
                await fetch('/api/profile/' + user.nim + '/documents', {
                  method: 'POST',
                  body: uploadData
                });
              } catch(e) { console.log('File upload note:', e); }
            }

            if (res.ok) {
              alert('\u2705 ' + (data.message || 'Profil berhasil diperbarui!'));
              Object.assign(profileUser, payload);
              if (hasFiles) {
                fileFields.forEach(f => {
                  if (uploadData.has(f)) profileUser[f] = 'uploaded';
                });
              }
              sessionStorage.setItem('user', JSON.stringify(profileUser));
              mainContent.innerHTML = profilSayaContent(profileUser) + isoFooter;
            } else {
              alert('\u274c ' + (data.error || 'Gagal memperbarui profil'));
            }
          } catch (e) {
            Object.assign(profileUser, payload);
            sessionStorage.setItem('user', JSON.stringify(profileUser));
            alert('\u2705 Profil disimpan secara lokal (server offline)');
            mainContent.innerHTML = profilSayaContent(profileUser) + isoFooter;
          }
          btn.textContent = origText;
          btn.disabled = false;
        });

        // --- Avatar Upload -> POST /api/profile/:nim/avatar ---
        const avatarWrap = document.getElementById('avatarWrap');
        const avatarInput = document.getElementById('avatarInput');
        avatarWrap?.addEventListener('click', () => avatarInput?.click());
        avatarInput?.addEventListener('change', async (ev) => {
          const file = ev.target.files[0];
          if (!file || !file.type.startsWith('image/')) return;
          if (file.size > 2 * 1024 * 1024) { alert('\u26a0\ufe0f Ukuran foto maksimal 2MB'); return; }

          const circle = document.getElementById('avatarCircle');
          const origBg = circle?.style.background;

          // Preview immediately
          const reader = new FileReader();
          reader.onload = (e) => {
            if (circle) {
              circle.style.background = 'url(' + e.target.result + ') center/cover';
              circle.textContent = '';
            }
          };
          reader.readAsDataURL(file);

          // Upload to backend
          try {
            const formData = new FormData();
            formData.append('avatar', file);
            const res = await fetch(PROFILE_API + '/' + user.nim + '/avatar', {
              method: 'POST',
              body: formData
            });
            const data = await res.json();
            if (res.ok) {
              profileUser.avatar = data.avatar_url;
              profileUser.avatar_url = data.avatar_url;
              sessionStorage.setItem('user', JSON.stringify(profileUser));
              const sidebarAvatar = document.querySelector('.sidebar-avatar');
              if (sidebarAvatar) {
                sidebarAvatar.style.background = 'url(' + data.avatar_url + ') center/cover';
                sidebarAvatar.textContent = '';
              }
              alert('\u2705 Foto profil berhasil diperbarui!');
            } else {
              alert('\u274c ' + (data.error || 'Gagal upload foto'));
              if (circle) circle.style.background = origBg;
            }
          } catch (e) {
            alert('\u2705 Foto disimpan secara lokal (server offline)');
          }
        });

        // --- Password Change -> PUT /api/profile/:nim/password ---
        const pwForm = document.getElementById('profilForm');
        const pwBtn = pwForm?.querySelector('button');
        if (pwBtn) {
          pwBtn.removeAttribute('onclick');
          pwBtn.addEventListener('click', async () => {
            const oldPw = document.getElementById('profOldPw')?.value;
            const newPw = document.getElementById('profNewPw')?.value;
            const confPw = document.getElementById('profConfPw')?.value;

            if (!oldPw || !newPw || !confPw) { alert('\u26a0\ufe0f Semua field password harus diisi'); return; }
            if (newPw.length < 8) { alert('\u26a0\ufe0f Password baru minimal 8 karakter'); return; }
            if (newPw !== confPw) { alert('\u26a0\ufe0f Konfirmasi password tidak cocok'); return; }

            pwBtn.textContent = '\u23f3 Memproses...';
            pwBtn.disabled = true;

            try {
              const res = await fetch(PROFILE_API + '/' + user.nim + '/password', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  old_password: oldPw,
                  new_password: newPw,
                  confirm_password: confPw
                })
              });
              const data = await res.json();
              if (res.ok) {
                alert('\u2705 ' + (data.message || 'Password berhasil diubah!'));
                pwForm.reset();
              } else {
                alert('\u274c ' + (data.error || 'Gagal mengubah password'));
              }
            } catch (e) {
              alert('\u26a0\ufe0f Server offline, tidak bisa mengubah password');
            }
            pwBtn.textContent = '\ud83d\udd10 Ubah Password';
            pwBtn.disabled = false;
          });
        }

      } else if (mainContent && page === 'settings') {
        // ---- Settings Page: Ubah Sandi ----
        mainContent.innerHTML = `
          <div style="padding:24px;max-width:640px;">
            <h2 style="font-size:1.2rem;font-weight:700;margin:0 0 4px;">\u2699\ufe0f Pengaturan Akun</h2>
            <p style="color:var(--text-muted);font-size:0.82rem;margin:0 0 24px;">Kelola keamanan akun Anda</p>

            <div class="profil-section" role="region" aria-labelledby="secPwd" style="background:white;border-radius:16px;border:1px solid var(--gray-100);overflow:hidden;">
              <div class="profil-section-header"><h3 class="profil-section-title" id="secPwd"><span class="pst-icon" style="background:hsl(45 90% 92%);color:hsl(35 80% 45%);">\ud83d\udd10</span> Ubah Sandi</h3></div>
              <div style="padding:20px;">
                <form id="settingsPwForm" autocomplete="off" aria-label="Form ubah sandi" style="max-width:400px;">
                  <div style="margin-bottom:14px;">
                    <label for="setPwOld" style="font-size:0.75rem;font-weight:600;display:block;margin-bottom:4px;color:var(--text-secondary);">Password Lama</label>
                    <div style="position:relative;">
                      <input type="password" id="setPwOld" required autocomplete="current-password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" style="width:100%;padding:10px 40px 10px 12px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.85rem;box-sizing:border-box;transition:border-color .2s;">
                      <button type="button" class="toggle-pw-btn" data-target="setPwOld" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:1rem;color:var(--text-muted);">\ud83d\udc41\ufe0f</button>
                    </div>
                  </div>
                  <div style="margin-bottom:14px;">
                    <label for="setPwNew" style="font-size:0.75rem;font-weight:600;display:block;margin-bottom:4px;color:var(--text-secondary);">Password Baru</label>
                    <div style="position:relative;">
                      <input type="password" id="setPwNew" required autocomplete="new-password" placeholder="Minimal 8 karakter" minlength="8" style="width:100%;padding:10px 40px 10px 12px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.85rem;box-sizing:border-box;transition:border-color .2s;">
                      <button type="button" class="toggle-pw-btn" data-target="setPwNew" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:1rem;color:var(--text-muted);">\ud83d\udc41\ufe0f</button>
                    </div>
                    <div id="pwStrength" style="margin-top:6px;font-size:0.7rem;color:var(--text-muted);"></div>
                  </div>
                  <div style="margin-bottom:18px;">
                    <label for="setPwConf" style="font-size:0.75rem;font-weight:600;display:block;margin-bottom:4px;color:var(--text-secondary);">Konfirmasi Password Baru</label>
                    <div style="position:relative;">
                      <input type="password" id="setPwConf" required autocomplete="new-password" placeholder="Ulangi password baru" style="width:100%;padding:10px 40px 10px 12px;border:1px solid var(--gray-200);border-radius:8px;font-size:0.85rem;box-sizing:border-box;transition:border-color .2s;">
                      <button type="button" class="toggle-pw-btn" data-target="setPwConf" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:1rem;color:var(--text-muted);">\ud83d\udc41\ufe0f</button>
                    </div>
                    <div id="pwMatch" style="margin-top:6px;font-size:0.7rem;"></div>
                  </div>
                  <button type="submit" id="submitPwChange" style="padding:10px 24px;border:none;background:var(--primary-500);color:white;border-radius:8px;font-size:0.85rem;font-weight:600;cursor:pointer;transition:opacity .2s;">\ud83d\udd11 Simpan Sandi Baru</button>
                </form>
              </div>
            </div>
          </div>` + isoFooter;

        // Toggle password visibility
        document.querySelectorAll('.toggle-pw-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const input = document.getElementById(btn.dataset.target);
            if (input) {
              const isPassword = input.type === 'password';
              input.type = isPassword ? 'text' : 'password';
              btn.textContent = isPassword ? '\ud83d\ude48' : '\ud83d\udc41\ufe0f';
            }
          });
        });

        // Password strength indicator
        document.getElementById('setPwNew')?.addEventListener('input', (e) => {
          const val = e.target.value;
          const el = document.getElementById('pwStrength');
          if (!el) return;
          let s = 0;
          if (val.length >= 8) s++;
          if (/[A-Z]/.test(val)) s++;
          if (/[0-9]/.test(val)) s++;
          if (/[^A-Za-z0-9]/.test(val)) s++;
          const labels = ['', '\ud83d\udd34 Lemah', '\ud83d\udfe0 Sedang', '\ud83d\udfe1 Baik', '\ud83d\udfe2 Kuat'];
          const colors = ['', 'hsl(0 70% 50%)', 'hsl(30 80% 50%)', 'hsl(50 80% 45%)', 'hsl(145 60% 40%)'];
          el.textContent = val.length > 0 ? labels[s] : '';
          el.style.color = colors[s] || '';
        });

        // Confirm password match
        document.getElementById('setPwConf')?.addEventListener('input', (e) => {
          const el = document.getElementById('pwMatch');
          if (!el) return;
          const nv = document.getElementById('setPwNew')?.value || '';
          if (!e.target.value) { el.textContent = ''; return; }
          el.textContent = nv === e.target.value ? '\u2705 Password cocok' : '\u274c Tidak cocok';
          el.style.color = nv === e.target.value ? 'hsl(145 60% 40%)' : 'hsl(0 70% 50%)';
        });

        // Submit
        document.getElementById('settingsPwForm')?.addEventListener('submit', async (ev) => {
          ev.preventDefault();
          const oldPw = document.getElementById('setPwOld')?.value;
          const newPw = document.getElementById('setPwNew')?.value;
          const confPw = document.getElementById('setPwConf')?.value;
          if (!oldPw || !newPw || !confPw) { alert('\u26a0\ufe0f Semua field harus diisi'); return; }
          if (newPw.length < 8) { alert('\u26a0\ufe0f Password baru minimal 8 karakter'); return; }
          if (newPw !== confPw) { alert('\u26a0\ufe0f Konfirmasi password tidak cocok'); return; }
          const btn = document.getElementById('submitPwChange');
          btn.textContent = '\u23f3 Memproses...';
          btn.disabled = true;
          try {
            const id = user.nim || user.nip || 'admin';
            const res = await fetch('/api/profile/' + id + '/password', {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ old_password: oldPw, new_password: newPw, confirm_password: confPw })
            });
            const data = await res.json();
            if (res.ok) {
              alert('\u2705 ' + (data.message || 'Password berhasil diubah!'));
              document.getElementById('settingsPwForm')?.reset();
              document.getElementById('pwStrength').textContent = '';
              document.getElementById('pwMatch').textContent = '';
            } else {
              alert('\u274c ' + (data.error || 'Gagal mengubah password'));
            }
          } catch (e) {
            alert('\u26a0\ufe0f Server offline \u2014 tidak bisa mengubah password saat ini');
          }
          btn.textContent = '\ud83d\udd11 Simpan Sandi Baru';
          btn.disabled = false;
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
