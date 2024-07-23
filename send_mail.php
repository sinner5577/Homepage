<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'deine.email@example.com';  // Ersetze dies durch deine Email-Adresse
    $subject = 'Neue Nachricht von deiner Webseite';
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "<h2>Neue Nachricht</h2>
             <p><strong>Name:</strong> $name</p>
             <p><strong>Email:</strong> $email</p>
             <p><strong>Nachricht:</strong><br>$message</p>";

    if (mail($to, $subject, $body, $headers)) {
        echo '<div style="background-color: #121212; color: #FFFFFF; padding: 2rem; text-align: center;">
                <p>Danke für deine Nachricht. Wir werden uns bald bei dir melden.</p>
                <a href="index.html" style="color: #4CAF50;">Zurück zur Startseite</a>
              </div>';
    } else {
        echo '<div style="background-color: #121212; color: #FFFFFF; padding: 2rem; text-align: center;">
                <p>Entschuldigung, es gab ein Problem beim Versenden deiner Nachricht.</p>
                <a href="index.html" style="color: #4CAF50;">Zurück zur Startseite</a>
              </div>';
    }
} else {
    echo '<div style="background-color: #121212; color: #FFFFFF; padding: 2rem; text-align: center;">
            <p>Es gab ein Problem mit deinem Formularversand, bitte versuche es erneut.</p>
            <a href="index.html" style="color: #4CAF50;">Zurück zur Startseite</a>
          </div>';
}
?>

