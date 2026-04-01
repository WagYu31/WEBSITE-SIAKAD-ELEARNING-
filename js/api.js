// ============================================
// STIA BAYUANGGA - API Client
// ============================================

const API_BASE = 'http://localhost:8080/api';

export async function apiGet(path) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const res = await fetch(`${API_BASE}${path}`, { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(`API GET ${path} failed:`, err);
    return null;
  }
}

export async function apiPost(path, body) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(`API POST ${path} failed:`, err);
    return null;
  }
}

// ===== KRS =====
export async function fetchKRS(nim, semester) {
  return apiGet(`/akademik/krs/${nim}${semester ? `?semester=${semester}` : ''}`);
}

// ===== KHS / Nilai =====
export async function fetchKHS(nim, semester) {
  return apiGet(`/akademik/khs/${nim}${semester ? `?semester=${semester}` : ''}`);
}

// ===== Jadwal =====
export async function fetchJadwal(nim, semester) {
  return apiGet(`/akademik/jadwal/${nim}${semester ? `?semester=${semester}` : ''}`);
}

// ===== Dosen: Jadwal Mengajar =====
export async function fetchJadwalMengajar(nip) {
  return apiGet(`/dosen/jadwal-mengajar/${nip}`);
}

// ===== Dosen: Absensi =====
export async function fetchAbsensi(mataKuliahId) {
  return apiGet(`/dosen/absensi/${mataKuliahId}`);
}

export async function saveAbsensi(krsId, nim, pertemuan, status) {
  return apiPost('/dosen/absensi', { krs_id: krsId, nim, pertemuan, status });
}

export async function bulkSaveAbsensi(items) {
  return apiPost('/dosen/absensi/bulk', { items });
}

// ===== Dosen: Nilai =====
export async function fetchNilaiKelas(mataKuliahId) {
  return apiGet(`/dosen/nilai/${mataKuliahId}`);
}

export async function saveNilaiMahasiswa(nim, mataKuliahId, semester, uts, uas, tugas, kelas) {
  return apiPost('/dosen/nilai', { nim, mata_kuliah_id: mataKuliahId, semester, uts, uas, tugas, kelas });
}

export async function bulkSaveNilai(items) {
  return apiPost('/dosen/nilai/bulk', { items });
}

// ===== Mata Kuliah =====
export async function fetchMataKuliah() {
  return apiGet('/akademik/matakuliah');
}
