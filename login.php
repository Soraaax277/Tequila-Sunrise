<?php
session_start();  // Start the session
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the email exists
    $stmt = $conn->prepare("SELECT id, name, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows == 1) {
        $stmt->bind_result($id, $name, $hashedPassword);
        $stmt->fetch();

        // Verify the password
        if (password_verify($password, $hashedPassword)) {
            // Password is correct, start a session and log the user in
            $_SESSION['user_id'] = $id;
            $_SESSION['user_name'] = $name;

            echo "Login successful! Redirecting to homepage...";
            header("refresh:2;url=../index.html");  // Redirect to homepage after 2 seconds
        } else {
            echo "Incorrect password. Please try again.";
        }
    } else {
        echo "No account found with this email.";
    }

    $stmt->close();
    $conn->close();
}
?>
<?php
session_start();
//enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // If the session is not set, redirect to login
    header("Location: loginPage.html");
    exit();
}

// Include database connection
include 'db_connect.php';

// Page content for logged-in users
echo "Welcome, " . $_SESSION['user_name'] . "!";
?>

<!-- The rest of your HTML content for logged-in users -->
