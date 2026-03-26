// ============================================
// STIA BAYUANGGA - Login Page
// ============================================

import { CAMPUS, USERS, DOSEN_LIST } from '../js/data.js';
import { setUser } from '../js/app.js';
import { navigate } from '../js/router.js';

export function renderLogin(container) {
  container.innerHTML = `
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
            <h1>${CAMPUS.name}</h1>
            <p class="login-branding-subtitle">${CAMPUS.fullName}</p>
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

              <!-- Dosen Account Selector -->
              <div class="form-group" id="dosenSelectorGroup" style="display:none;">
                <label class="form-label" for="dosenSelect">
                  <span>Pilih Akun Dosen</span>
                </label>
                <div class="input-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <select id="dosenSelect" class="form-input" style="appearance:auto;cursor:pointer;">
                  </select>
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
  `;

  // Initialize login interactions
  initLoginInteractions();
}

function initLoginInteractions() {
  let selectedRole = 'mahasiswa';

  // Role selector
  const roleOptions = document.querySelectorAll('.role-option');
  const loginIdLabel = document.getElementById('loginIdLabel');
  const loginIdInput = document.getElementById('loginId');

  roleOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      roleOptions.forEach(o => {
        o.classList.remove('active');
        o.setAttribute('aria-checked', 'false');
      });
      opt.classList.add('active');
      opt.setAttribute('aria-checked', 'true');
      selectedRole = opt.dataset.role;
      
      // Update label and placeholder
      const labels = {
        mahasiswa: { label: 'NIM', placeholder: 'Masukkan NIM', value: '2024101001' },
        dosen: { label: 'NIP', placeholder: 'Masukkan NIP', value: '' },
        kaprodi: { label: 'NIP', placeholder: 'Masukkan NIP', value: '197809152005011001' },
        bap: { label: 'NIP', placeholder: 'Masukkan NIP', value: '198203202008012001' }
      };
      
      const l = labels[selectedRole];
      loginIdLabel.textContent = l.label;
      loginIdInput.placeholder = l.placeholder;
      loginIdInput.value = l.value;

      // Show/hide dosen selector
      const dosenGroup = document.getElementById('dosenSelectorGroup');
      if (selectedRole === 'dosen') {
        dosenGroup.style.display = 'block';
        // Populate dropdown
        const dosenSelect = document.getElementById('dosenSelect');
        dosenSelect.innerHTML = DOSEN_LIST.map(d =>
          `<option value="${d.id}">${d.nama} — ${d.jabatanFungsional}</option>`
        ).join('');
        // Auto-fill NIP from first dosen
        if (DOSEN_LIST.length > 0) {
          loginIdInput.value = DOSEN_LIST[0].nip;
        }
        dosenSelect.addEventListener('change', () => {
          const dsn = DOSEN_LIST.find(d => d.id === dosenSelect.value);
          if (dsn) loginIdInput.value = dsn.nip;
        });
      } else {
        dosenGroup.style.display = 'none';
      }
    });
  });

  // Password toggle
  const passwordToggle = document.getElementById('passwordToggle');
  const passwordInput = document.getElementById('loginPassword');
  passwordToggle?.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    passwordToggle.setAttribute('aria-pressed', String(isPassword));
    passwordToggle.setAttribute('aria-label', isPassword ? 'Sembunyikan password' : 'Tampilkan password');
  });

  // Login form submit
  const loginForm = document.getElementById('loginForm');
  const loginBtn = document.getElementById('loginBtn');

  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Set loading state
    loginBtn.innerHTML = `
      <span class="spinner"></span> Memproses...
    `;
    loginBtn.disabled = true;
    
    // Simulate login delay
    setTimeout(() => {
      let user;
      if (selectedRole === 'dosen') {
        const dosenSelect = document.getElementById('dosenSelect');
        const dsn = DOSEN_LIST.find(d => d.id === dosenSelect?.value) || DOSEN_LIST[0];
        user = {
          id: dsn.id,
          nip: dsn.nip,
          nama: dsn.nama,
          email: dsn.email,
          jabatan: dsn.jabatanFungsional,
          totalMK: dsn.totalMK,
          totalMahasiswa: dsn.totalMahasiswaBimbingan,
          avatar: dsn.avatar,
          role: 'dosen'
        };
      } else {
        user = USERS[selectedRole];
      }
      setUser(user);
      navigate('#/portal');
    }, 800);
  });

  // Set initial value
  loginIdInput.value = '2024101001';
}
