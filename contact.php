<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $to = "sodedara@gmail.com";

    $name = trim($_POST['full_name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $message = trim($_POST['message'] ?? '');

    if (!$name || !$email || !$message) {
        echo json_encode([
            "status" => "error",
            "message" => "Please fill all required fields."
        ]);
        exit;
    }

    $email_subject = "New Contact Enquiry: $subject";

    $email_body = "
Name: $name
Email: $email
Phone: $phone
Subject: $subject

Message:
$message
";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode([
            "status" => "success",
            "message" => "✅ Your enquiry has been sent successfully!"
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "❌ Email sending failed."
        ]);
    }
}
?>