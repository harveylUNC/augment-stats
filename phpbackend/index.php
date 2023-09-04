<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if (isset($_GET['checkHeaders'])) {
    exit();
}

// Database configuration
$hostname = $_ENV['HOST'];
$dbname = $_ENV['DATABASE'];
$username = $_ENV['USERNAME'];
$password = $_ENV['PASSWORD'];

try {
    $pdo = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    die();
}

// basic sanitize, maybe parameterize (may be difficult tbd)
function sanitizeInput($input) {
    $sanitizedInput = trim($input);
    $sanitizedInput = htmlspecialchars($sanitizedInput, ENT_QUOTES, 'UTF-8');

    return $sanitizedInput;
}

if (isset($_POST['sql_query'])) {
    $userQuery = $_POST['sql_query'];
    // $sanitizedQuery = sanitizeInput($userQuery);

    try {
        $stmt = $pdo->prepare($userQuery);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);

    } catch (PDOException $e) {
        echo "Error executing query: " . $e->getMessage();
    }
}
?>
