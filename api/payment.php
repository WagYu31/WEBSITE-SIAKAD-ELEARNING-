<?php
// ============================================
// PMB Payment API — Midtrans Sandbox Integration
// ============================================

// Midtrans Sandbox Keys — loaded from env.php (not in git)
if (file_exists(__DIR__ . '/env.php')) {
    require_once __DIR__ . '/env.php';
}
if (!defined('MIDTRANS_SERVER_KEY')) define('MIDTRANS_SERVER_KEY', '');
if (!defined('MIDTRANS_CLIENT_KEY')) define('MIDTRANS_CLIENT_KEY', '');
define('MIDTRANS_IS_PRODUCTION', false);
define('MIDTRANS_SNAP_URL', 'https://app.sandbox.midtrans.com/snap/v1/transactions');

// POST /api/pmb/payment
function createPayment() {
    $db = getDB();
    $input = getJsonBody();

    $regId = intval($input['registration_id'] ?? 0);
    $metode = $input['metode_bayar'] ?? 'online';
    $jumlah = floatval($input['jumlah'] ?? 350000);

    if ($regId <= 0) {
        jsonResponse(['error' => 'registration_id wajib diisi'], 400);
    }

    // Check registration exists
    $stmt = $db->prepare('SELECT id, nama, email, no_pendaftaran FROM pmb_registrations WHERE id = ?');
    $stmt->execute([$regId]);
    $reg = $stmt->fetch();
    if (!$reg) {
        jsonResponse(['error' => 'Pendaftaran tidak ditemukan'], 404);
    }

    // Check if payment already exists
    $stmt = $db->prepare('SELECT * FROM pmb_payments WHERE registration_id = ?');
    $stmt->execute([$regId]);
    $existing = $stmt->fetch();

    if ($existing) {
        // If already paid
        if ($existing['status'] === 'paid') {
            jsonResponse(['error' => 'Pembayaran sudah lunas', 'payment' => $existing], 409);
        }
        // Return existing pending payment (reuse snap token)
        if ($metode === 'online' && $existing['snap_token']) {
            jsonResponse([
                'message' => 'Pembayaran sudah dibuat',
                'id' => (int)$existing['id'],
                'order_id' => $existing['order_id'],
                'snap_token' => $existing['snap_token'],
                'snap_url' => $existing['snap_url'],
                'status' => $existing['status'],
            ]);
        }
        // For cash, return existing
        if ($metode === 'cash') {
            jsonResponse([
                'message' => 'Pembayaran sudah dibuat',
                'id' => (int)$existing['id'],
                'order_id' => $existing['order_id'],
                'status' => $existing['status'],
            ]);
        }
    }

    // Generate order ID
    $orderId = 'PMB-' . $regId . '-' . time();

    if ($metode === 'online') {
        // Call Midtrans Snap API
        $snapData = midtransCreateSnap($orderId, $jumlah, $reg);

        if (!$snapData || empty($snapData['token'])) {
            // Fallback: save without snap token
            $stmt = $db->prepare('INSERT INTO pmb_payments (registration_id, order_id, metode_bayar, jumlah, status) VALUES (?, ?, ?, ?, ?)');
            $stmt->execute([$regId, $orderId, 'online', $jumlah, 'pending']);
            jsonResponse([
                'message' => 'Pembayaran dibuat (Midtrans gagal, coba lagi)',
                'id' => (int)$db->lastInsertId(),
                'order_id' => $orderId,
                'error_detail' => $snapData['error'] ?? 'Snap API failed',
            ], 201);
        }

        $stmt = $db->prepare('INSERT INTO pmb_payments (registration_id, order_id, metode_bayar, jumlah, status, snap_token, snap_url) VALUES (?, ?, ?, ?, ?, ?, ?)');
        $stmt->execute([$regId, $orderId, 'online', $jumlah, 'pending', $snapData['token'], $snapData['redirect_url'] ?? '']);

        jsonResponse([
            'message' => 'Pembayaran online dibuat',
            'id' => (int)$db->lastInsertId(),
            'order_id' => $orderId,
            'snap_token' => $snapData['token'],
            'snap_url' => $snapData['redirect_url'] ?? '',
            'client_key' => MIDTRANS_CLIENT_KEY,
        ], 201);

    } else {
        // Cash payment
        $stmt = $db->prepare('INSERT INTO pmb_payments (registration_id, order_id, metode_bayar, jumlah, status) VALUES (?, ?, ?, ?, ?)');
        $stmt->execute([$regId, $orderId, 'cash', $jumlah, 'pending']);

        jsonResponse([
            'message' => 'Pembayaran cash dibuat, menunggu konfirmasi',
            'id' => (int)$db->lastInsertId(),
            'order_id' => $orderId,
            'status' => 'pending',
        ], 201);
    }
}

// GET /api/pmb/payment/:registration_id
function getPaymentStatus($regId) {
    $db = getDB();
    $stmt = $db->prepare('SELECT * FROM pmb_payments WHERE registration_id = ? ORDER BY created_at DESC LIMIT 1');
    $stmt->execute([$regId]);
    $payment = $stmt->fetch();

    if (!$payment) {
        jsonResponse(['error' => 'Belum ada pembayaran'], 404);
    }

    $payment['id'] = (int)$payment['id'];
    $payment['registration_id'] = (int)$payment['registration_id'];
    $payment['jumlah'] = (float)$payment['jumlah'];
    jsonResponse($payment);
}

// PUT /api/pmb/payment/:id/confirm
function confirmPayment($id) {
    $db = getDB();

    $stmt = $db->prepare('SELECT * FROM pmb_payments WHERE id = ?');
    $stmt->execute([$id]);
    $payment = $stmt->fetch();

    if (!$payment) {
        jsonResponse(['error' => 'Pembayaran tidak ditemukan'], 404);
    }

    if ($payment['status'] === 'paid') {
        jsonResponse(['message' => 'Pembayaran sudah dikonfirmasi sebelumnya']);
    }

    // Update to paid
    $db->prepare('UPDATE pmb_payments SET status = ?, paid_at = NOW(), payment_type = ?, updated_at = NOW() WHERE id = ?')
       ->execute(['paid', 'cash', $id]);

    // Update registration status
    $db->prepare('UPDATE pmb_registrations SET status = ?, updated_at = NOW() WHERE id = ?')
       ->execute(['Proses', $payment['registration_id']]);

    jsonResponse(['message' => '✅ Pembayaran cash dikonfirmasi!']);
}

// POST /api/pmb/payment/notification (Midtrans Webhook)
function handlePaymentNotification() {
    $rawBody = file_get_contents('php://input');
    $notification = json_decode($rawBody, true);

    if (!$notification) {
        jsonResponse(['error' => 'Invalid notification'], 400);
    }

    $orderId = $notification['order_id'] ?? '';
    $transactionStatus = $notification['transaction_status'] ?? '';
    $fraudStatus = $notification['fraud_status'] ?? '';
    $paymentType = $notification['payment_type'] ?? '';
    $transactionId = $notification['transaction_id'] ?? '';

    // Verify signature
    $serverKey = MIDTRANS_SERVER_KEY;
    $signatureKey = $notification['signature_key'] ?? '';
    $statusCode = $notification['status_code'] ?? '';
    $grossAmount = $notification['gross_amount'] ?? '';
    $expectedSignature = hash('sha512', $orderId . $statusCode . $grossAmount . $serverKey);

    if ($signatureKey !== $expectedSignature) {
        jsonResponse(['error' => 'Invalid signature'], 403);
    }

    $db = getDB();
    $stmt = $db->prepare('SELECT * FROM pmb_payments WHERE order_id = ?');
    $stmt->execute([$orderId]);
    $payment = $stmt->fetch();

    if (!$payment) {
        jsonResponse(['error' => 'Payment not found'], 404);
    }

    // Map Midtrans status
    $status = 'pending';
    if ($transactionStatus === 'capture' || $transactionStatus === 'settlement') {
        if ($fraudStatus === 'accept' || empty($fraudStatus)) {
            $status = 'paid';
        }
    } elseif ($transactionStatus === 'cancel' || $transactionStatus === 'deny' || $transactionStatus === 'expire') {
        $status = 'failed';
    } elseif ($transactionStatus === 'pending') {
        $status = 'pending';
    }

    // Update payment
    $updateSql = 'UPDATE pmb_payments SET status = ?, payment_type = ?, transaction_id = ?, updated_at = NOW()';
    $params = [$status, $paymentType, $transactionId];

    if ($status === 'paid') {
        $updateSql .= ', paid_at = NOW()';
    }
    $updateSql .= ' WHERE order_id = ?';
    $params[] = $orderId;

    $db->prepare($updateSql)->execute($params);

    // If paid, update registration status
    if ($status === 'paid') {
        $db->prepare('UPDATE pmb_registrations SET status = ?, updated_at = NOW() WHERE id = ?')
           ->execute(['Proses', $payment['registration_id']]);
    }

    jsonResponse(['message' => 'OK', 'status' => $status]);
}

// ---- Midtrans Snap API Helper ----
function midtransCreateSnap($orderId, $amount, $customer) {
    $serverKey = MIDTRANS_SERVER_KEY;

    $payload = [
        'transaction_details' => [
            'order_id' => $orderId,
            'gross_amount' => (int)$amount,
        ],
        'customer_details' => [
            'first_name' => $customer['nama'] ?? 'Pendaftar',
            'email' => $customer['email'] ?? '',
        ],
        'item_details' => [[
            'id' => 'PMB-REG',
            'price' => (int)$amount,
            'quantity' => 1,
            'name' => 'Biaya Pendaftaran STIA Bayuangga',
        ]],
    ];

    $ch = curl_init(MIDTRANS_SNAP_URL);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
            'Accept: application/json',
            'Authorization: Basic ' . base64_encode($serverKey . ':'),
        ],
        CURLOPT_POSTFIELDS => json_encode($payload),
        CURLOPT_TIMEOUT => 15,
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($error || $httpCode >= 400) {
        return ['error' => $error ?: "HTTP $httpCode", 'response' => $response];
    }

    return json_decode($response, true);
}
