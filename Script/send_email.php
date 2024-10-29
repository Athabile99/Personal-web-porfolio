<?php

use PHPMailer\PHPMailer\PHPMailer;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = 'fatyela21@gmail.com';
    $from =' $name\nEmail:'
    $subject = 'New Contact Form Message';
    $body = "\n$message";
    $headers = "$email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Message successfully sent!";
    } else {
        echo "Message delivery failed...";
    }
}
?>
