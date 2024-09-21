<?php
session_start();  // Start the session

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect to login page if the session is not set
    header("Location: loginPage.html");
    exit();
}
?>

<!-- Now you can safely display the content for logged-in users -->
<h1>Welcome, <?php echo $_SESSION['user_name']; ?>!</h1>

<?php
$host = 'localhost';
$dbname = 'tequila_moonrise_db';
$user = 'root';
$pass = '';

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

