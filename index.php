<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Passwortgeschützte IFrames</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<?php
// Benutzername und Passwort hier festlegen
$valid_username = "sinnh";
$valid_password = "iwidB49!";

// Login-Prüfung
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($username === $valid_username && $password === $valid_password) {
        $authenticated = true;
    } else {
        $error_message = "Ungültiger Benutzername oder Passwort.";
    }
}

if (!isset($authenticated)) {
?>
    <div class="login-container">
        <h1>Login erforderlich</h1>
        <?php if (isset($error_message)) { echo "<p class='error'>$error_message</p>"; } ?>
        <form method="POST">
            <label for="username">Benutzername:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Passwort:</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Login</button>
        </form>
    </div>
<?php
    exit;
}
?>

    <h1>Meine eingebetteten Inhalte</h1>
    <div class="iframe-container">
        <div class="iframe-wrapper">
            <div class="iframe-title">IFrame 1</div>
            <iframe src="https://example.com"></iframe>
        </div>
        <div class="iframe-wrapper">
            <div class="iframe-title">IFrame 2</div>
            <iframe src="https://example.com"></iframe>
        </div>
        <div class="iframe-wrapper">
            <div class="iframe-title">IFrame 3</div>
            <iframe src="https://example.com"></iframe>
        </div>
    </div>
</body>
</html>
