// ============================================
// STIA BAYUANGGA - PMB (Pendaftaran Mahasiswa Baru)
// Online & Offline Registration
// ============================================

import { getUser } from '../js/app.js';
import { CAMPUS, getInitials } from '../js/data.js';

const API = 'http://localhost:8080/api/pmb';

// ---- SVG Icons ----
const I = {
  users: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  clipboard: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  checkCircle: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  xCircle: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
  clock: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  creditCard: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  shield: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  arrowLeft: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  loader: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>',
};

const PRODI_LIST = [
  'S1 Administrasi Publik',
  'S1 Administrasi Bisnis',
  'S2 Administrasi Publik',
  'D3 Ilmu Administrasi',
];

const AGAMA_LIST = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Budha', 'Konghucu'];

const PROVINSI_LIST = [
  'Jawa Timur', 'Jawa Tengah', 'Jawa Barat', 'DKI Jakarta', 'Bali',
  'Sumatera Utara', 'Sumatera Barat', 'Kalimantan Timur', 'Sulawesi Selatan', 'Lainnya'
];

// ---- Stats Section ----
function renderStats(stats) {
  return `
    <div class="pmb-stats">
      <div class="pmb-stat-card">
        <div class="pmb-stat-icon blue">${I.users}</div>
        <div class="pmb-stat-value">${stats.total_pendaftar || 0}</div>
        <div class="pmb-stat-label">Total Pendaftar</div>
      </div>
      <div class="pmb-stat-card">
        <div class="pmb-stat-icon gold">${I.clock}</div>
        <div class="pmb-stat-value">${stats.total_proses || 0}</div>
        <div class="pmb-stat-label">Total Proses</div>
      </div>
      <div class="pmb-stat-card">
        <div class="pmb-stat-icon green">${I.checkCircle}</div>
        <div class="pmb-stat-value">${stats.total_diterima || 0}</div>
        <div class="pmb-stat-label">Total Diterima</div>
      </div>
      <div class="pmb-stat-card">
        <div class="pmb-stat-icon red">${I.xCircle}</div>
        <div class="pmb-stat-value">${stats.total_ditolak || 0}</div>
        <div class="pmb-stat-label">Total Ditolak</div>
      </div>
    </div>`;
}

// ---- Navigation Sidebar ----
function renderPMBNav(activePage) {
  const items = [
    { id: 'info', text: 'Informasi PMB', icon: I.clipboard },
    { id: 'daftar', text: 'Daftar PMB', icon: I.users },
    { id: 'status', text: 'Cek Status', icon: I.search },
    { id: 'bayar', text: 'Pembayaran', icon: I.creditCard },
  ];
  return `
    <div class="pmb-nav">
      <h3>Navigasi</h3>
      ${items.map(item => `
        <a href="#" class="pmb-nav-link${activePage === item.id ? ' active' : ''}" data-pmb-page="${item.id}">
          ${item.text}
        </a>
      `).join('')}
    </div>`;
}

// ---- Form Fields ----
function formField(label, name, type = 'text', required = false, options = null) {
  if (options) {
    return `
      <div class="pmb-field">
        <select name="${name}" id="pmb-${name}" ${required ? 'required' : ''}>
          <option value="">${label}</option>
          ${options.map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>
      </div>`;
  }
  if (type === 'textarea') {
    return `
      <div class="pmb-field full">
        <textarea name="${name}" id="pmb-${name}" placeholder="${label}" rows="3" ${required ? 'required' : ''}></textarea>
      </div>`;
  }
  if (type === 'radio') return '';
  return `
    <div class="pmb-field">
      <input type="${type}" name="${name}" id="pmb-${name}" placeholder="${label}" ${required ? 'required' : ''}>
    </div>`;
}

// ---- Daftar PMB Page ----
function renderDaftarPage() {
  return `
    <div class="pmb-form-container">
      <h2>📝 Formulir Pendaftaran Mahasiswa Baru</h2>
      <p class="pmb-form-sub">Lengkapi data berikut untuk mendaftar. Tanda <span style="color:hsl(0 70% 55%);">*</span> wajib diisi.</p>
      
      <form id="pmbForm" class="pmb-form">
        <!-- Program Studi -->
        <div class="pmb-section">
          <h3>🎓 Program Studi Pilihan</h3>
          <div class="pmb-row">
            ${formField('Pilih Program Studi *', 'prodi_pilihan', 'text', true, PRODI_LIST)}
          </div>
        </div>

        <!-- Data Pribadi -->
        <div class="pmb-section">
          <h3>👤 Data Pribadi</h3>
          <div class="pmb-row">
            ${formField('NISN', 'nisn')}
            ${formField('KIP', 'kip')}
          </div>
          <div class="pmb-row">
            ${formField('KKS', 'kks')}
            ${formField('NIK *', 'nik', 'text', true)}
          </div>
          <div class="pmb-row">
            ${formField('Nama Lengkap *', 'nama', 'text', true)}
            ${formField('Tempat Lahir', 'tempat_lahir')}
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
            ${formField('Agama', 'agama', 'text', false, AGAMA_LIST)}
            ${formField('Email *', 'email', 'email', true)}
          </div>
          <div class="pmb-row">
            ${formField('Telepon 1 *', 'telepon_1', 'tel', true)}
            ${formField('Telepon 2 (Optional)', 'telepon_2', 'tel')}
          </div>
        </div>

        <!-- Alamat -->
        <div class="pmb-section">
          <h3>📍 Alamat</h3>
          <div class="pmb-row">
            ${formField('Alamat Lengkap', 'alamat', 'textarea')}
          </div>
          <div class="pmb-row">
            ${formField('Provinsi', 'provinsi', 'text', false, PROVINSI_LIST)}
            ${formField('Kota/Kabupaten', 'kota')}
          </div>
          <div class="pmb-row">
            ${formField('Kecamatan', 'kecamatan')}
            ${formField('Desa/Kelurahan', 'kelurahan')}
          </div>
          <div class="pmb-row">
            ${formField('Kode Pos', 'kode_pos')}
            ${formField('Anak Ke', 'anak_ke', 'number')}
          </div>
        </div>

        <!-- Data Keluarga -->
        <div class="pmb-section">
          <h3>👨‍👩‍👧 Data Orang Tua / Wali</h3>
          <div class="pmb-row">
            ${formField('Dari Jumlah Anak', 'dari_jumlah', 'number')}
            ${formField('Nama Ayah', 'nama_ayah')}
          </div>
          <div class="pmb-row">
            ${formField('Nama Ibu', 'nama_ibu')}
            ${formField('Pekerjaan Ayah', 'pekerjaan_ayah')}
          </div>
          <div class="pmb-row">
            ${formField('Pekerjaan Ibu', 'pekerjaan_ibu')}
            ${formField('NIK Ayah', 'nik_ayah')}
          </div>
          <div class="pmb-row">
            ${formField('NIK Ibu', 'nik_ibu')}
            ${formField('No. KK', 'no_kk')}
          </div>
        </div>

        <!-- Asal Sekolah -->
        <div class="pmb-section">
          <h3>🏫 Asal Sekolah</h3>
          <div class="pmb-row">
            ${formField('Asal Sekolah *', 'asal_sekolah', 'text', true)}
          </div>
        </div>

        <button type="submit" class="pmb-submit-btn" id="pmbSubmitBtn">
          DAFTAR
        </button>
      </form>
    </div>`;
}

// ---- Cek Status Page ----
function renderStatusPage() {
  return `
    <div class="pmb-form-container">
      <h2>🔍 Cek Status Pendaftaran</h2>
      <p class="pmb-form-sub">Masukkan nomor pendaftaran untuk melihat status.</p>
      
      <div class="pmb-search-box">
        <input type="text" id="pmbStatusInput" placeholder="Contoh: PMB-2026-0001" class="pmb-search-input">
        <button id="pmbStatusBtn" class="pmb-search-btn">${I.search} Cek Status</button>
      </div>

      <div id="pmbStatusResult"></div>
    </div>`;
}

// ---- Payment Page ----
function renderPaymentPage() {
  return `
    <div class="pmb-form-container">
      <h2>💳 Pembayaran Biaya Pendaftaran</h2>
      <p class="pmb-form-sub">Biaya pendaftaran: <strong>Rp 350.000</strong></p>

      <div class="pmb-search-box">
        <input type="text" id="pmbPayInput" placeholder="No. Pendaftaran: PMB-2026-0001" class="pmb-search-input">
        <button id="pmbPaySearchBtn" class="pmb-search-btn">${I.search} Cari</button>
      </div>

      <div id="pmbPayResult"></div>
    </div>`;
}

// ---- Info Page ----
function renderInfoPage() {
  return `
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
            <tr><td>Biaya Formulir</td><td><strong>Rp 350.000</strong></td></tr>
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
            ${PRODI_LIST.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>`;
}

// ============================================
// MAIN RENDER
// ============================================
export async function renderPMB(container) {
  let currentPage = 'info';
  let stats = { total_pendaftar: 0, total_proses: 0, total_diterima: 0, total_ditolak: 0 };

  // Fetch stats
  try {
    const res = await fetch(`${API}/stats`);
    if (res.ok) stats = await res.json();
  } catch (e) { console.warn('Stats fetch failed:', e); }

  function renderPage(page) {
    currentPage = page;
    const mainArea = document.getElementById('pmbMainArea');
    if (!mainArea) return;

    switch (page) {
      case 'info': mainArea.innerHTML = renderInfoPage(); break;
      case 'daftar': mainArea.innerHTML = renderDaftarPage(); break;
      case 'status': mainArea.innerHTML = renderStatusPage(); break;
      case 'bayar': mainArea.innerHTML = renderPaymentPage(); break;
    }

    // Update nav active
    document.querySelectorAll('.pmb-nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.pmbPage === page);
    });

    bindPageEvents(page);
  }

  container.innerHTML = `
    <div class="pmb-page">
      <!-- Header -->
      <header class="pmb-header">
        <div class="pmb-header-inner">
          <a href="#/" class="pmb-back">${I.arrowLeft}</a>
          <div>
            <h1>Pendaftaran Mahasiswa Baru</h1>
            <p>STIA Bayuangga Probolinggo — Tahun Akademik 2026/2027</p>
          </div>
          <img src="/assets/images/logo.png" alt="Logo" class="pmb-header-logo">
        </div>
      </header>

      <!-- Stats -->
      ${renderStats(stats)}

      <!-- Content -->
      <div class="pmb-content">
        <div class="pmb-main" id="pmbMainArea">
          ${renderInfoPage()}
        </div>
        ${renderPMBNav('info')}
      </div>

      <!-- Footer -->
      <footer class="pmb-footer">
        <span>${I.shield} ISO 27001 — Security</span>
        <span>${I.checkCircle} ISO 40500 — Accessibility</span>
      </footer>
    </div>`;

  // ---- Global Events ----
  // Nav clicks
  document.querySelectorAll('.pmb-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      renderPage(link.dataset.pmbPage);
    });
  });

  bindPageEvents('info');

  function bindPageEvents(page) {
    if (page === 'daftar') bindFormEvents();
    if (page === 'status') bindStatusEvents();
    if (page === 'bayar') bindPaymentEvents();
  }

  // ---- Form Submit ----
  function bindFormEvents() {
    const form = document.getElementById('pmbForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('pmbSubmitBtn');
      btn.disabled = true;
      btn.innerHTML = `${I.loader} Mengirim...`;

      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        if (key === 'anak_ke' || key === 'dari_jumlah') {
          data[key] = value ? parseInt(value) : 0;
        } else {
          data[key] = value;
        }
      });

      try {
        const res = await fetch(`${API}/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        const result = await res.json();

        if (res.ok) {
          const mainArea = document.getElementById('pmbMainArea');
          const acc = result.account || {};
          mainArea.innerHTML = `
            <div class="pmb-success">
              <div class="pmb-success-icon">✅</div>
              <h2>Pendaftaran Berhasil!</h2>
              <p>Simpan nomor pendaftaran Anda:</p>
              <div class="pmb-no-reg">${result.no_pendaftaran}</div>

              ${acc.nim ? `
                <div class="pmb-account-card">
                  <h3>🔐 Akun Login Anda</h3>
                  <div class="pmb-account-grid">
                    <div class="pmb-account-item">
                      <span class="pmb-account-label">NIM</span>
                      <span class="pmb-account-value" id="nimValue">${acc.nim}</span>
                    </div>
                    <div class="pmb-account-item">
                      <span class="pmb-account-label">Password</span>
                      <span class="pmb-account-value" id="pwdValue">${acc.password}</span>
                    </div>
                  </div>
                  <div class="pmb-account-warning">
                    ⚠️ <strong>Simpan data ini!</strong> Password hanya ditampilkan sekali.
                  </div>
                  ${acc.email_sent ? `
                    <div class="pmb-account-email">
                      📧 Email notifikasi + link validasi telah dikirim ke <strong>${data.email || 'email Anda'}</strong>.<br>
                      Klik tombol validasi di email untuk mengaktifkan akun.
                    </div>
                  ` : ''}
                </div>
              ` : ''}

              <p class="pmb-success-info">Lakukan pembayaran biaya pendaftaran untuk melanjutkan proses.</p>
              <div class="pmb-success-actions">
                <button class="pmb-btn blue" onclick="navigator.clipboard.writeText('${acc.nim || result.no_pendaftaran}')">📋 Copy NIM</button>
                <button class="pmb-btn green" id="goToPayBtn">💳 Bayar Sekarang</button>
              </div>
            </div>`;

          // Update stats
          try {
            const sRes = await fetch(`${API}/stats`);
            if (sRes.ok) {
              stats = await sRes.json();
              document.querySelector('.pmb-stats').outerHTML = renderStats(stats);
            }
          } catch (_) {}

          document.getElementById('goToPayBtn')?.addEventListener('click', () => renderPage('bayar'));
        } else {
          alert('❌ ' + (result.error || 'Gagal mendaftar'));
          btn.disabled = false;
          btn.innerHTML = 'DAFTAR';
        }
      } catch (err) {
        alert('❌ Gagal menghubungi server: ' + err.message);
        btn.disabled = false;
        btn.innerHTML = 'DAFTAR';
      }
    });
  }

  // ---- Status Check ----
  function bindStatusEvents() {
    const btn = document.getElementById('pmbStatusBtn');
    const input = document.getElementById('pmbStatusInput');
    if (!btn || !input) return;

    async function checkStatus() {
      const no = input.value.trim();
      if (!no) { alert('Masukkan No. Pendaftaran'); return; }

      const result = document.getElementById('pmbStatusResult');
      result.innerHTML = `<div style="text-align:center;padding:20px;">${I.loader} Mencari...</div>`;

      try {
        const res = await fetch(`${API}/status/${encodeURIComponent(no)}`);
        const data = await res.json();

        if (res.ok) {
          const statusColors = { menunggu: 'gold', proses: 'blue', diterima: 'green', ditolak: 'red' };
          const statusLabels = { menunggu: '⏳ Menunggu', proses: '🔄 Proses', diterima: '✅ Diterima', ditolak: '❌ Ditolak' };
          const payStatus = data.payment ? (data.payment.status === 'paid' ? '✅ Lunas' : '⏳ Belum Bayar') : '❌ Belum Bayar';

          result.innerHTML = `
            <div class="pmb-status-card">
              <div class="pmb-status-header">
                <div>
                  <h3>${data.nama}</h3>
                  <p class="pmb-status-no">${data.no_pendaftaran}</p>
                </div>
                <span class="pmb-badge ${statusColors[data.status]}">${statusLabels[data.status]}</span>
              </div>
              <div class="pmb-status-grid">
                <div><strong>NIK:</strong> ${data.nik}</div>
                <div><strong>Email:</strong> ${data.email || '-'}</div>
                <div><strong>Prodi:</strong> ${data.prodi_pilihan || '-'}</div>
                <div><strong>Metode:</strong> ${data.metode === 'online' ? '🌐 Online' : '🏢 Offline'}</div>
                <div><strong>Telepon:</strong> ${data.telepon_1 || '-'}</div>
                <div><strong>Pembayaran:</strong> ${payStatus}</div>
              </div>
              <div class="pmb-status-date">
                Tanggal daftar: ${new Date(data.created_at).toLocaleDateString('id-ID', {day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'})}
              </div>
            </div>`;
        } else {
          result.innerHTML = `<div class="pmb-error">❌ ${data.error}</div>`;
        }
      } catch (err) {
        result.innerHTML = `<div class="pmb-error">❌ Gagal menghubungi server</div>`;
      }
    }

    btn.addEventListener('click', checkStatus);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') checkStatus(); });
  }

  // ---- Payment ----
  function bindPaymentEvents() {
    const btn = document.getElementById('pmbPaySearchBtn');
    const input = document.getElementById('pmbPayInput');
    if (!btn || !input) return;

    async function searchForPayment() {
      const no = input.value.trim();
      if (!no) { alert('Masukkan No. Pendaftaran'); return; }

      const result = document.getElementById('pmbPayResult');
      result.innerHTML = `<div style="text-align:center;padding:20px;">${I.loader} Mencari...</div>`;

      try {
        const res = await fetch(`${API}/status/${encodeURIComponent(no)}`);
        const data = await res.json();

        if (!res.ok) {
          result.innerHTML = `<div class="pmb-error">❌ ${data.error}</div>`;
          return;
        }

        // Check payment status
        const hasPaid = data.payment && data.payment.status === 'paid';

        result.innerHTML = `
          <div class="pmb-payment-card">
            <div class="pmb-pay-info">
              <h3>${data.nama}</h3>
              <p>${data.no_pendaftaran} — ${data.prodi_pilihan || 'Belum pilih prodi'}</p>
            </div>

            <div class="pmb-pay-amount">
              <span>Biaya Pendaftaran</span>
              <strong>Rp 350.000</strong>
            </div>

            ${hasPaid ? `
              <div class="pmb-pay-done">
                <div class="pmb-success-icon">✅</div>
                <h3>Pembayaran Lunas</h3>
                <p>Dibayar pada ${data.payment.paid_at ? new Date(data.payment.paid_at).toLocaleDateString('id-ID') : '-'}</p>
                <p>Metode: ${data.payment.metode_bayar === 'online' ? '🌐 Online' : '💵 Cash'}</p>
              </div>
            ` : `
              <div class="pmb-pay-methods">
                <h4>Pilih Metode Pembayaran:</h4>
                <div class="pmb-pay-options">
                  <button class="pmb-pay-option" data-method="online" data-reg-id="${data.id}">
                    <span class="pmb-pay-option-icon">🌐</span>
                    <span class="pmb-pay-option-title">Bayar Online</span>
                    <span class="pmb-pay-option-desc">Transfer langsung via payment gateway</span>
                  </button>
                  <button class="pmb-pay-option" data-method="cash" data-reg-id="${data.id}">
                    <span class="pmb-pay-option-icon">💵</span>
                    <span class="pmb-pay-option-title">Bayar Cash</span>
                    <span class="pmb-pay-option-desc">Bayar langsung ke BAP kampus</span>
                  </button>
                </div>
              </div>
            `}
          </div>`;

        // Bind payment method buttons
        if (!hasPaid) {
          document.querySelectorAll('.pmb-pay-option').forEach(optBtn => {
            optBtn.addEventListener('click', async () => {
              const method = optBtn.dataset.method;
              const regId = parseInt(optBtn.dataset.regId);
              
              optBtn.disabled = true;
              optBtn.querySelector('.pmb-pay-option-title').textContent = 'Memproses...';

              try {
                const payRes = await fetch(`${API}/payment`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ registration_id: regId, metode_bayar: method, jumlah: 350000 }),
                });
                const payData = await payRes.json();

                if (payRes.ok) {
                  if (method === 'online') {
                    result.innerHTML = `
                      <div class="pmb-pay-done">
                        <div class="pmb-success-icon">✅</div>
                        <h3>Pembayaran Online Berhasil!</h3>
                        <p>Status pendaftaran Anda telah diupdate menjadi <strong>Proses</strong>.</p>
                      </div>`;
                  } else {
                    result.innerHTML = `
                      <div class="pmb-pay-done cash">
                        <div class="pmb-success-icon">📋</div>
                        <h3>Pembayaran Cash Tercatat</h3>
                        <p>Silakan datang ke kantor BAP untuk melakukan pembayaran.</p>
                        <p>Status akan diupdate setelah BAP mengkonfirmasi pembayaran.</p>
                        <div class="pmb-pay-cash-info">
                          <strong>Alamat:</strong> ${CAMPUS.address}<br>
                          <strong>Jam:</strong> Senin-Jumat, 08:00-16:00
                        </div>
                      </div>`;
                  }
                  // Refresh stats
                  try {
                    const sRes = await fetch(`${API}/stats`);
                    if (sRes.ok) {
                      stats = await sRes.json();
                      document.querySelector('.pmb-stats').outerHTML = renderStats(stats);
                    }
                  } catch (_) {}
                } else {
                  alert('❌ ' + (payData.error || 'Gagal memproses pembayaran'));
                  optBtn.disabled = false;
                  optBtn.querySelector('.pmb-pay-option-title').textContent = method === 'online' ? 'Bayar Online' : 'Bayar Cash';
                }
              } catch (err) {
                alert('❌ Gagal menghubungi server');
                optBtn.disabled = false;
              }
            });
          });
        }
      } catch (err) {
        result.innerHTML = `<div class="pmb-error">❌ Gagal menghubungi server</div>`;
      }
    }

    btn.addEventListener('click', searchForPayment);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') searchForPayment(); });
  }
}
