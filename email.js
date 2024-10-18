// Initialize EmailJS service with the user ID
(function () {
    emailjs.init(CONFIG.USER_ID_KEY);
  })();
  
  // Function to handle the form submission and send email
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Send email via EmailJS
    emailjs.sendForm(CONFIG.SERVICE_ID, CONFIG.TEMPLATE_ID_KEY, this)
      .then(function () {
        alert('Email sent successfully!'); // Success message
      }, function (error) {
        alert('Failed to send email. Error: ' + JSON.stringify(error)); // Error message
      });
  });
  
  JavaScript to toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const logo = document.getElementById('logo');
    
    // Change the logo based on the mode
    if (document.body.classList.contains('dark-mode')) {
        logo.src = 'path/to/your/logo-dark.png'; // Dark mode logo
    } else {
        logo.src = 'path/to/your/logo-light.png'; // Light mode logo
    }
};