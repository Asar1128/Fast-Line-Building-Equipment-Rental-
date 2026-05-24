<?php
/**
 * Fast Line Building Equipment Rental - Inquiry API Endpoint
 * 
 * Receives form submissions and sends them via Gmail SMTP
 * to info@fastlinerental.com
 */

// Define constant to allow config.php access
define('FASTLINE_API', true);

// CORS headers for the frontend
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Rate limiting (simple file-based)
$rateLimitFile = sys_get_temp_dir() . '/fastline_rate_' . md5($_SERVER['REMOTE_ADDR'] ?? 'unknown');
if (file_exists($rateLimitFile)) {
    $lastTime = (int) file_get_contents($rateLimitFile);
    if (time() - $lastTime < 5) {
        http_response_code(429);
        echo json_encode(['error' => 'Too many requests. Please wait a moment.']);
        exit;
    }
}
file_put_contents($rateLimitFile, time());

// Load SMTP config
require_once __DIR__ . '/config.php';

// Parse input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request body']);
    exit;
}

// Validate required fields
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$company = trim($input['company'] ?? '');
$message = trim($input['message'] ?? '');
$source = trim($input['source'] ?? 'LANDING PAGE');
$category = trim($input['category'] ?? '');

if (strlen($name) < 2) {
    http_response_code(400);
    echo json_encode(['error' => 'Name is required (min 2 characters)']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Valid email is required']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$company = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
$source = htmlspecialchars($source, ENT_QUOTES, 'UTF-8');
$category = htmlspecialchars($category, ENT_QUOTES, 'UTF-8');

// Build subject
$subject = "[INQUIRY][$source]";

// Build email body
$body = "New Inquiry from Fast Line Website\n";
$body .= "===================================\n\n";
$body .= "Source: $source\n";
$body .= "Date: " . date('Y-m-d H:i:s') . " (UAE Time)\n\n";
$body .= "--- Customer Details ---\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
if ($phone) $body .= "Phone: $phone\n";
if ($company) $body .= "Company: $company\n";
$body .= "Category: " . ($category ?: 'No category selected') . "\n";
$body .= "\n--- Message ---\n\n";
$body .= $message ?: '(No message provided)';
$body .= "\n\n===================================\n";
$body .= "This inquiry was submitted via the Fast Line website.\n";

// Send via SMTP
try {
    $result = sendSmtpEmail(
        SMTP_HOST,
        SMTP_PORT,
        SMTP_USERNAME,
        SMTP_PASSWORD,
        SMTP_FROM_EMAIL,
        SMTP_FROM_NAME,
        RECIPIENT_EMAIL,
        $subject,
        $body,
        $email,
        $name
    );

    if ($result === true) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Inquiry sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email. Please try again later.']);
    }
} catch (Exception $e) {
    http_response_code(500);
    // Don't expose internal error details to the client
    error_log('SMTP Error: ' . $e->getMessage());
    echo json_encode(['error' => 'Failed to send email. Please try again later.']);
}

/**
 * Send email via SMTP with TLS (Gmail compatible)
 * Self-contained - no external dependencies required
 */
function sendSmtpEmail($host, $port, $username, $password, $fromEmail, $fromName, $to, $subject, $body, $replyToEmail = '', $replyToName = '') {
    $socket = @fsockopen($host, $port, $errno, $errstr, 30);
    
    if (!$socket) {
        throw new Exception("Could not connect to SMTP server: $errstr ($errno)");
    }

    // Read server greeting
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) !== '220') {
        fclose($socket);
        throw new Exception("SMTP greeting failed: $response");
    }

    // EHLO
    smtpCommand($socket, "EHLO " . gethostname(), '250');

    // STARTTLS
    smtpCommand($socket, "STARTTLS", '220');

    // Enable TLS encryption
    $crypto = stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT);
    if (!$crypto) {
        fclose($socket);
        throw new Exception("Failed to enable TLS encryption");
    }

    // EHLO again after TLS
    smtpCommand($socket, "EHLO " . gethostname(), '250');

    // AUTH LOGIN
    smtpCommand($socket, "AUTH LOGIN", '334');
    smtpCommand($socket, base64_encode($username), '334');
    smtpCommand($socket, base64_encode($password), '235');

    // MAIL FROM
    smtpCommand($socket, "MAIL FROM:<$fromEmail>", '250');

    // RCPT TO
    smtpCommand($socket, "RCPT TO:<$to>", '250');

    // DATA
    smtpCommand($socket, "DATA", '354');

    // Build headers and message
    $headers = "From: $fromName <$fromEmail>\r\n";
    $headers .= "To: <$to>\r\n";
    if ($replyToEmail) {
        $headers .= "Reply-To: $replyToName <$replyToEmail>\r\n";
    }
    $headers .= "Subject: $subject\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "Date: " . date('r') . "\r\n";
    $headers .= "Message-ID: <" . md5(uniqid(time())) . "@fastlinerental.com>\r\n";
    $headers .= "\r\n";

    // Send message content (escape dots at start of line)
    $messageData = $headers . str_replace("\n.", "\n..", $body);
    fputs($socket, $messageData . "\r\n.\r\n");

    $response = fgets($socket, 515);
    if (substr($response, 0, 3) !== '250') {
        fclose($socket);
        throw new Exception("Failed to send message: $response");
    }

    // QUIT
    fputs($socket, "QUIT\r\n");
    fclose($socket);

    return true;
}

/**
 * Send SMTP command and validate response
 */
function smtpCommand($socket, $command, $expectedCode) {
    fputs($socket, $command . "\r\n");
    $response = '';
    while ($line = fgets($socket, 515)) {
        $response .= $line;
        // Check if this is the last line (4th char is space, not hyphen)
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }
    if (substr($response, 0, 3) !== $expectedCode) {
        throw new Exception("SMTP command '$command' failed. Expected $expectedCode, got: $response");
    }
    return $response;
}
