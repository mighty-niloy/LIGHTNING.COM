<?php
header('Content-Type: application/json');

// Email configuration
$to = 'your@gmail.com'; // Your Gmail address
$subject = 'New Subscriber - THE LIGHTNING';
$from = 'noreply@thelightning.com'; // Can be your domain email

// Get the email from POST data
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

if (!$email) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// Email content
$message = "
<html>
<head>
    <title>New Subscriber Notification</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #243347; color: white; padding: 10px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .footer { text-align: center; padding: 10px; font-size: 12px; color: #777; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>THE LIGHTNING</h2>
        </div>
        <div class='content'>
            <h3>New Subscriber</h3>
            <p>You have a new subscriber to your newsletter:</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Subscription Date:</strong> " . date('Y-m-d H:i:s') . "</p>
        </div>
        <div class='footer'>
            <p>© " . date('Y') . " THE LIGHTNING. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: $from\r\n";
$headers .= "Reply-To: $from\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mailSent = mail($to, $subject, $message, $headers);

if ($mailSent) {
    // You might want to store the email in a database here
    echo json_encode(['success' => true, 'message' => 'Thank you for subscribing!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send subscription. Please try again.']);
}
?>
