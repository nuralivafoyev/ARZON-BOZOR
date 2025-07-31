//<?php
//header('Content-Type: application/json');
//
//// Faqat POST so‘rovlarni qabul qilamiz
//if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
//    http_response_code(405);
//    echo json_encode(['success' => false, 'error' => 'Faqat POST so‘rovlar qabul qilinadi']);
//    exit;
//}
//
//// Telegram bot token va chat_id ni o‘zingizga moslashtiring
//$token = '8435137696:AAHSGRnGysLfwEgxhYIt-l-K94isWj8InVw';
//$chat_id = '-1002113812512';
//
//// POST dan ism va xabarni olamiz
//$name = isset($_POST['name']) ? trim($_POST['name']) : '';
//$message = isset($_POST['message']) ? trim($_POST['message']) : '';
//
//if (!$name || !$message) {
//    echo json_encode(['success' => false, 'error' => 'Ism va xabar bo‘sh bo‘lishi mumkin emas']);
//    exit;
//}
//
//// Telegramga yuboriladigan matn tayyorlash
//$text = "Yangi xabar!\nIsm: $name\nXabar: $message";
//
//// Telegram API URL
//$url = "https://api.telegram.org/bot$token/sendMessage";
//
//// So‘rov parametrlari
//$params = [
//    'chat_id' => $chat_id,
//    'text' => $text,
//];
//
//// cURL orqali POST so‘rov yuboramiz
//$ch = curl_init();
//curl_setopt($ch, CURLOPT_URL, $url);
//curl_setopt($ch, CURLOPT_POST, true);
//curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
//curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//
//$result = curl_exec($ch);
//$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
//curl_close($ch);
//
//// Javobni tekshirish
//if ($http_code == 200) {
//    echo json_encode(['success' => true]);
//} else {
//    echo json_encode(['success' => false, 'error' => 'Telegramga yuborishda muammo yuz berdi']);
//}
//