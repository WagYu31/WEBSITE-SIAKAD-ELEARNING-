# 🎓 STIA Bayuangga — SIAKAD & E-Learning

> Sistem Informasi Akademik dan E-Learning untuk Sekolah Tinggi Ilmu Administrasi Bayuangga Probolinggo.

[![CI](https://github.com/WagYu31/WEBSITE-SIAKAD-ELEARNING-/actions/workflows/ci.yml/badge.svg)](https://github.com/WagYu31/WEBSITE-SIAKAD-ELEARNING-/actions/workflows/ci.yml)

---

## 📋 Deskripsi

Website SIAKAD & E-Learning STIA Bayuangga adalah Single Page Application (SPA) yang menggabungkan dua sistem utama:

- **SIAKAD** — Sistem Informasi Akademik (KRS, KHS, nilai, jadwal)
- **E-Learning** — Platform pembelajaran daring (materi, tugas, quiz, forum, video, UTS, UAS)

### ✨ Fitur Utama

| Modul | Fitur |
|-------|-------|
| 🏠 **Landing Page** | Hero section, program studi, galeri, statistik kampus |
| 🔐 **Login** | Multi-role authentication (Mahasiswa, Dosen, Kaprodi, BAP) |
| 🚪 **Portal SSO** | Hub navigasi ke SIAKAD, E-Learning, perpustakaan |
| 📊 **SIAKAD** | Dashboard IPK, jadwal kuliah, KRS/KHS, input nilai (dosen) |
| 📚 **E-Learning** | Kelas, materi, tugas, quiz pilihan ganda, forum diskusi, video |
| 📝 **UTS/UAS** | Dual-mode: Pilihan Ganda (auto-score) & Upload PDF (manual grading) |
| 📤 **Upload Tugas** | Detail view → upload flow dengan re-submission sebelum deadline |
| 📈 **Nilai** | Grade visibility untuk mahasiswa (quiz, tugas, UTS, UAS) |
| 📱 **Responsive** | Mobile-first design, sidebar collapse, touch-friendly |

---

## 🏗️ Struktur Proyek

```
WEBSITE-SIAKAD-ELEARNING/
├── assets/images/          # Gambar (logo, hero, icons, portal)
├── css/
│   ├── variables.css       # Design tokens & CSS variables
│   ├── global.css          # Reset & base styles
│   ├── components.css      # Shared components
│   ├── landing.css         # Landing page styles
│   ├── login.css           # Login page styles
│   ├── portal.css          # Portal page styles
│   ├── siakad.css          # SIAKAD & E-Learning dashboard styles
│   └── accessibility.css   # ISO 40500/WCAG 2.1 compliance
├── js/
│   ├── app.js              # Entry point, state management, route registration
│   ├── router.js           # SPA hash-based router
│   └── data.js             # Shared data (users, jadwal, kelas, nilai)
├── pages/
│   ├── siakad/
│   │   ├── index.js        # SIAKAD entry point
│   │   └── dashboard.js    # Dashboard multi-role (mahasiswa/dosen/kaprodi/BAP)
│   ├── elearning/
│   │   ├── index.js        # E-Learning entry point
│   │   └── elearning.js    # Full E-Learning module
│   ├── landing.js          # Landing page
│   ├── login.js            # Login page
│   └── portal.js           # Portal SSO
├── index.html              # Main HTML entry
├── vite.config.js          # Vite dev server config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation
```bash
# Clone repository
git clone https://github.com/WagYu31/WEBSITE-SIAKAD-ELEARNING-.git
cd WEBSITE-SIAKAD-ELEARNING-

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka `http://localhost:3001` di browser.

### Build Production
```bash
npm run build
```

---

## 👤 Demo Accounts

| Role | NIM/NIP | Password |
|------|---------|----------|
| Mahasiswa | `2024101001` | `mhs123` |
| Dosen | `198501012010011001` | `dsn123` |
| Kaprodi | `197601012005011001` | `kp123` |
| BAP | `198001012008011001` | `bap123` |

---

## 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript (ES Modules)
- **Styling:** Pure CSS with CSS Custom Properties
- **Build:** Vite
- **Router:** Custom hash-based SPA router
- **Standards:** ISO 27001 (Security), ISO 40500/WCAG 2.1 (Accessibility)

---

## 🔄 CI/CD

Project menggunakan **GitHub Actions** untuk:

- **CI** — Build validation & lint check pada setiap push/PR
- **Deploy** — Auto deploy ke GitHub Pages pada push ke `main`

---

## 📄 License

© 2026 STIA Bayuangga Probolinggo. All rights reserved.
