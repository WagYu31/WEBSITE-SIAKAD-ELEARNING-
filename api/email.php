<?php
// ============================================
// Email Notification Helper — STIA Bayuangga
// Uses PHP mail() via cPanel hosting SMTP
// ============================================

if (!defined('MAIL_FROM'))      define('MAIL_FROM',      'noreply@stiabayuanggajobs.online');
if (!defined('MAIL_FROM_NAME')) define('MAIL_FROM_NAME', 'STIA Bayuangga — PMB');
if (!defined('SITE_URL'))       define('SITE_URL',       'https://stiabayuanggajobs.online');

// ============================================
// Core send function
// ============================================
function sendEmail($to, $subject, $htmlBody) {
    if (empty($to) || !filter_var($to, FILTER_VALIDATE_EMAIL)) {
        error_log("[EMAIL] Invalid address: $to");
        return false;
    }

    $fromName = MAIL_FROM_NAME;
    $fromAddr = MAIL_FROM;
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: =?UTF-8?B?" . base64_encode($fromName) . "?= <{$fromAddr}>\r\n";
    $headers .= "Reply-To: {$fromAddr}\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $result = mail($to, $encodedSubject, $htmlBody, $headers);
    if (!$result) {
        error_log("[EMAIL] Failed to send to $to — subject: $subject");
    }
    return $result;
}

// ============================================
// Shared HTML wrapper
// ============================================
function emailWrap($title, $body) {
    $year = date('Y');
    return <<<HTML
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{$title}</title>
</head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:32px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08);max-width:600px;width:100%;">
      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#1a3a6b 0%,#0f2447 100%);padding:32px 40px;text-align:center;">
          <div style="font-size:28px;font-weight:800;color:#fff;letter-spacing:1px;">STIA BAYUANGGA</div>
          <div style="font-size:12px;color:rgba(255,255,255,.7);margin-top:4px;">Sekolah Tinggi Ilmu Administrasi Bayuangga</div>
          <div style="width:48px;height:3px;background:#f59e0b;border-radius:2px;margin:12px auto 0;"></div>
        </td>
      </tr>
      <!-- Body -->
      <tr>
        <td style="padding:36px 40px;">
          {$body}
        </td>
      </tr>
      <!-- Footer -->
      <tr>
        <td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e8edf5;text-align:center;">
          <p style="margin:0;font-size:12px;color:#94a3b8;">Email ini dikirim otomatis oleh sistem STIA Bayuangga. Jangan balas email ini.</p>
          <p style="margin:6px 0 0;font-size:12px;color:#94a3b8;">Jl. Raya Dringu No.62, Probolinggo, Jawa Timur &nbsp;|&nbsp; (0335) 421173</p>
          <p style="margin:6px 0 0;font-size:11px;color:#cbd5e1;">&copy; {$year} STIA Bayuangga. All rights reserved.</p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>
HTML;
}

// ============================================
// Template 1: Pembayaran Berhasil
// ============================================
function emailPaymentSuccess($reg, $payment) {
    $nama       = htmlspecialchars($reg['nama'] ?? 'Pendaftar');
    $noPend     = htmlspecialchars($reg['no_pendaftaran'] ?? '-');
    $orderId    = htmlspecialchars($payment['order_id'] ?? '-');
    $metode     = ucfirst($payment['metode_bayar'] ?? '-');
    $jumlah     = 'Rp ' . number_format((float)($payment['jumlah'] ?? 0), 0, ',', '.');
    $tanggal    = date('d F Y, H:i', strtotime($payment['paid_at'] ?? 'now'));
    $siteUrl    = SITE_URL;

    $body = <<<HTML
<h2 style="margin:0 0 8px;font-size:22px;color:#1a3a6b;">✅ Pembayaran Diterima</h2>
<p style="margin:0 0 24px;font-size:14px;color:#64748b;">Konfirmasi pembayaran biaya pendaftaran mahasiswa baru</p>

<p style="font-size:15px;color:#334155;">Yth. <strong>{$nama}</strong>,</p>
<p style="font-size:14px;color:#475569;line-height:1.7;">
  Pembayaran biaya pendaftaran Anda telah <strong style="color:#16a34a;">berhasil dikonfirmasi</strong>. 
  Berikut detail transaksi Anda:
</p>

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;padding:20px;margin:20px 0;border:1px solid #e2e8f0;">
  <tr><td style="padding:7px 0;font-size:13px;color:#64748b;width:180px;">No. Pendaftaran</td><td style="font-size:13px;color:#1e293b;font-weight:600;">{$noPend}</td></tr>
  <tr><td style="padding:7px 0;font-size:13px;color:#64748b;">ID Transaksi</td><td style="font-size:13px;color:#1e293b;">{$orderId}</td></tr>
  <tr><td style="padding:7px 0;font-size:13px;color:#64748b;">Metode Bayar</td><td style="font-size:13px;color:#1e293b;">{$metode}</td></tr>
  <tr><td style="padding:7px 0;font-size:13px;color:#64748b;">Jumlah</td><td style="font-size:18px;color:#16a34a;font-weight:800;">{$jumlah}</td></tr>
  <tr><td style="padding:7px 0;font-size:13px;color:#64748b;">Tanggal</td><td style="font-size:13px;color:#1e293b;">{$tanggal}</td></tr>
</table>

<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:16px;margin:20px 0;">
  <p style="margin:0;font-size:13px;color:#166534;line-height:1.6;">
    📋 <strong>Langkah Selanjutnya:</strong><br>
    Tim BAP akan memproses berkas pendaftaran Anda. 
    Akun SIAKAD Anda akan dikirim melalui email setelah verifikasi selesai.
  </p>
</div>

<div style="text-align:center;margin:28px 0 8px;">
  <a href="{$siteUrl}/#/pmb" style="background:linear-gradient(135deg,#1a3a6b,#0f2447);color:#fff;text-decoration:none;padding:12px 32px;border-radius:8px;font-size:14px;font-weight:600;display:inline-block;">
    Cek Status Pendaftaran →
  </a>
</div>
HTML;

    return sendEmail(
        $reg['email'],
        '✅ Pembayaran Diterima — PMB STIA Bayuangga',
        emailWrap('Konfirmasi Pembayaran', $body)
    );
}

// ============================================
// Template 2: Akun SIAKAD Dibuat
// ============================================
function emailAkunDibuat($reg, $akun, $plainPassword) {
    $nama       = htmlspecialchars($reg['nama'] ?? 'Mahasiswa');
    $nim        = htmlspecialchars($akun['nim'] ?? '-');
    $emailLogin = htmlspecialchars($akun['email'] ?? $reg['email'] ?? '-');
    $password   = htmlspecialchars($plainPassword);
    $prodi      = htmlspecialchars($reg['prodi_pilihan'] ?? '-');
    $siteUrl    = SITE_URL;

    $body = <<<HTML
<h2 style="margin:0 0 8px;font-size:22px;color:#1a3a6b;">🔐 Akun SIAKAD Anda Telah Dibuat</h2>
<p style="margin:0 0 24px;font-size:14px;color:#64748b;">Informasi login portal akademik mahasiswa</p>

<p style="font-size:15px;color:#334155;">Yth. <strong>{$nama}</strong>,</p>
<p style="font-size:14px;color:#475569;line-height:1.7;">
  Selamat! Akun SIAKAD Anda telah dibuat oleh tim BAP. 
  Simpan informasi berikut dengan aman dan jangan bagikan kepada siapapun:
</p>

<table width="100%" cellpadding="0" cellspacing="0" style="background:#1a3a6b;border-radius:12px;padding:24px;margin:20px 0;">
  <tr>
    <td style="padding:8px 0;font-size:13px;color:rgba(255,255,255,.65);width:150px;">NIM</td>
    <td style="font-size:20px;color:#fff;font-weight:800;letter-spacing:2px;">{$nim}</td>
  </tr>
  <tr>
    <td style="padding:8px 0;font-size:13px;color:rgba(255,255,255,.65);">Email Login</td>
    <td style="font-size:14px;color:#93c5fd;">{$emailLogin}</td>
  </tr>
  <tr>
    <td style="padding:8px 0;font-size:13px;color:rgba(255,255,255,.65);">Password</td>
    <td style="font-size:18px;color:#fbbf24;font-weight:700;font-family:monospace;letter-spacing:2px;">{$password}</td>
  </tr>
  <tr>
    <td style="padding:8px 0;font-size:13px;color:rgba(255,255,255,.65);">Program Studi</td>
    <td style="font-size:14px;color:#fff;">{$prodi}</td>
  </tr>
</table>

<div style="background:#fef3c7;border:1px solid #fcd34d;border-radius:10px;padding:16px;margin:20px 0;">
  <p style="margin:0;font-size:13px;color:#92400e;line-height:1.6;">
    ⚠️ <strong>Penting:</strong> Segera ganti password Anda setelah login pertama kali melalui menu Profil → Ganti Password.
  </p>
</div>

<div style="text-align:center;margin:28px 0 8px;">
  <a href="{$siteUrl}/#/login" style="background:linear-gradient(135deg,#1a3a6b,#0f2447);color:#fff;text-decoration:none;padding:12px 32px;border-radius:8px;font-size:14px;font-weight:600;display:inline-block;">
    Login ke SIAKAD →
  </a>
</div>
HTML;

    $toEmail = !empty($akun['email']) ? $akun['email'] : $reg['email'];
    return sendEmail(
        $toEmail,
        '🔐 Akun SIAKAD Anda Telah Dibuat — STIA Bayuangga',
        emailWrap('Info Akun SIAKAD', $body)
    );
}

// ============================================
// Template 3: Akun Tervalidasi
// ============================================
function emailAkunValidasi($reg, $akun) {
    $nama       = htmlspecialchars($reg['nama'] ?? 'Mahasiswa');
    $nim        = htmlspecialchars($akun['nim'] ?? '-');
    $prodi      = htmlspecialchars($reg['prodi_pilihan'] ?? '-');
    $tglValidasi = date('d F Y, H:i');
    $siteUrl    = SITE_URL;

    $body = <<<HTML
<h2 style="margin:0 0 8px;font-size:22px;color:#1a3a6b;">✅ Akun Anda Telah Diverifikasi</h2>
<p style="margin:0 0 24px;font-size:14px;color:#64748b;">Notifikasi validasi akun SIAKAD mahasiswa baru</p>

<p style="font-size:15px;color:#334155;">Yth. <strong>{$nama}</strong>,</p>
<p style="font-size:14px;color:#475569;line-height:1.7;">
  Akun SIAKAD Anda dengan NIM <strong>{$nim}</strong> telah 
  <strong style="color:#16a34a;">divalidasi oleh tim BAP</strong> pada {$tglValidasi}. 
  Anda kini dapat mengakses seluruh fitur portal akademik STIA Bayuangga.
</p>

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border:1px solid #86efac;border-radius:12px;padding:20px;margin:20px 0;">
  <tr><td style="padding:6px 0;font-size:13px;color:#166534;width:150px;">NIM</td><td style="font-size:15px;color:#166534;font-weight:700;">{$nim}</td></tr>
  <tr><td style="padding:6px 0;font-size:13px;color:#166534;">Program Studi</td><td style="font-size:13px;color:#166534;">{$prodi}</td></tr>
  <tr><td style="padding:6px 0;font-size:13px;color:#166534;">Status</td><td style="font-size:13px;font-weight:700;color:#15803d;">✅ Tervalidasi</td></tr>
</table>

<p style="font-size:13px;color:#64748b;line-height:1.7;">
  Gunakan NIM dan password yang telah Anda terima sebelumnya untuk login. 
  Jika lupa password, hubungi BAP atau gunakan fitur "Lupa Password" di halaman login.
</p>

<div style="text-align:center;margin:28px 0 8px;">
  <a href="{$siteUrl}/#/login" style="background:linear-gradient(135deg,#16a34a,#15803d);color:#fff;text-decoration:none;padding:12px 32px;border-radius:8px;font-size:14px;font-weight:600;display:inline-block;">
    Login ke SIAKAD Sekarang →
  </a>
</div>
HTML;

    $toEmail = !empty($akun['email']) ? $akun['email'] : $reg['email'];
    return sendEmail(
        $toEmail,
        '✅ Akun SIAKAD Terverifikasi — STIA Bayuangga',
        emailWrap('Verifikasi Akun', $body)
    );
}

// ============================================
// Test endpoint — GET /api/email/test
// ============================================
function emailTest() {
    $testTo = $_GET['to'] ?? MAIL_FROM;
    $result = sendEmail(
        $testTo,
        '🧪 Test Email — STIA Bayuangga SIAKAD',
        emailWrap('Test Email', '<h3 style="color:#1a3a6b;">Email sistem bekerja dengan baik ✅</h3><p style="color:#64748b;">Test dikirim: ' . date('d M Y H:i:s') . '</p>')
    );
    jsonResponse(['success' => $result, 'to' => $testTo, 'from' => MAIL_FROM]);
}
