<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page with Email Validation</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    /* Add some basic styling for the form */
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .login-form {
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .login-form h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    .login-form input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .login-form button {
      width: 100%;
      padding: 10px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .login-form button:hover {
      background-color: #218838;
    }
    #error-message {
      color: red;
      text-align: center;
      display: none;
    }
  </style>
</head>
<body>

  <div class="login-form">
    <h2>Login</h2>
    <form id="loginForm">
      <input type="email" id="email" placeholder="Enter your email" required>
      <input type="password" id="password" placeholder="Enter your password" required>
      <button type="submit">Login</button>
    </form>
    <!-- Error Message for Invalid Email -->
    <div id="error-message">Invalid email format!</div>
  </div>

  <script>
    // Email validation function using regex
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Simple regex for email validation
      return emailRegex.test(email);  // Returns true if the email matches the pattern
    }

    // Add event listener to the form submit
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();  // Prevent form from refreshing the page
      
      // Get the email value
      const email = document.getElementById('email').value;
      
      // Check if the email is valid
      if (validateEmail(email)) {
        // Email is valid, you can proceed with login
        alert("Login successful!");
      } else {
        // Show an error message if email is invalid
        document.getElementById('error-message').style.display = 'block';
      }
    });
  </script>

</body>
</html>
