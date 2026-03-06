<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load environment variables from .env file if exists
$env_path = __DIR__ . '/../../.builds/config/.env';
$env = [];
if (file_exists($env_path)) {
    $lines = file($env_path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        if (strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value, " '\"");
            $env[$key] = $value;
        }
    }
}

// Get environment variables
$smtp_host = $env['SMTP_HOST'] ?? getenv('SMTP_HOST') ?: 'smtp.titan.email';
$smtp_port = $env['SMTP_PORT'] ?? getenv('SMTP_PORT') ?: 465;
$smtp_secure = $env['SMTP_SECURE'] ?? getenv('SMTP_SECURE') ?: true;
$smtp_user = $env['SMTP_USER'] ?? getenv('SMTP_USER') ?: '';
$smtp_pass = $env['SMTP_PASS'] ?? getenv('SMTP_PASS') ?: '';
$from_email = $env['FROM_EMAIL'] ?? getenv('FROM_EMAIL') ?: $smtp_user;
$notify_email = $env['NOTIFY_EMAIL'] ?? getenv('NOTIFY_EMAIL') ?: $from_email;

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit();
}

// Validation
$errors = [];

if (empty($input['name'] ?? '')) {
    $errors['name'] = 'Name is required.';
}

$hasEmail = !empty($input['email'] ?? '');
$hasPhone = !empty($input['phone'] ?? '');

if (!$hasEmail && !$hasPhone) {
    $errors['contact'] = 'Email or phone number is required.';
}

if ($hasEmail && !filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Invalid email address.';
}

if (empty($input['message'] ?? '')) {
    $errors['message'] = 'Message is required.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['error' => 'Validation failed', 'errors' => $errors]);
    exit();
}

// Extract data
$name = trim($input['name']);
$email = $hasEmail ? trim($input['email']) : null;
$phone = $hasPhone ? trim($input['phone']) : null;
$service = $input['service'] ?? null;
$propertyType = $input['propertyType'] ?? null;
$frequency = $input['frequency'] ?? null;
$message = trim($input['message']);

// Create email body
$emailBody = "New contact form submission from GTA City Cleaning website:\n\n";
$emailBody .= "Name: $name\n";
if ($email) $emailBody .= "Email: $email\n";
if ($phone) $emailBody .= "Phone: $phone\n";
if ($service) $emailBody .= "Service: $service\n";
if ($propertyType) $emailBody .= "Property Type: $propertyType\n";
if ($frequency) $emailBody .= "Frequency: $frequency\n";
$emailBody .= "\nMessage:\n$message\n";

try {
    $mail = new PHPMailer(true);
    
    // SMTP configuration
    $mail->isSMTP();
    $mail->Host = $smtp_host;
    $mail->Port = (int)$smtp_port;
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = $smtp_secure ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Username = $smtp_user;
    $mail->Password = $smtp_pass;
    
    // Email content
    $mail->setFrom($from_email, 'GTA Cleaning Website');
    $mail->addAddress($notify_email);
    if ($email) {
        $mail->addReplyTo($email);
    }
    $mail->Subject = 'New Lead: ' . $name . ' - ' . ($service ?: 'General Inquiry');
    $mail->Body = $emailBody;
    
    $mail->send();
    
    echo json_encode([
        'success' => true,
        'message' => 'Your message has been sent successfully.'
    ]);
    
} catch (Exception $e) {
    error_log('PHPMailer error: ' . $mail->ErrorInfo);
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send message. Please try again later.',
        'debug' => $mail->ErrorInfo // Remove in production
    ]);
}
?>