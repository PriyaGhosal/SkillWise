// Select necessary DOM elements for theme toggling
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeStyle = document.getElementById('theme-style');

// Constants for light and dark theme styles
const lightTheme = './assets/css/style.css';
const darkTheme = './assets/css/darkmode.css';

// Function to switch theme and update UI elements
function toggleTheme() {
  // Determine current theme and toggle it
  const currentTheme = themeStyle.getAttribute('href');
  const isLightTheme = currentTheme === lightTheme;
  const newTheme = isLightTheme ? darkTheme : lightTheme;
  const newIcon = isLightTheme ? 'moon-outline' : 'sunny-outline';

  // Apply the new theme and icon
  themeStyle.setAttribute('href', newTheme);
  themeIcon.name = newIcon;

  // Persist the theme choice in localStorage
  localStorage.setItem('theme', newTheme);
  localStorage.setItem('icon', newIcon);

  console.log(isLightTheme ? "Switched to Dark Mode" : "Switched to Light Mode");
}

// Load the theme from localStorage (if available)
function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  const savedIcon = localStorage.getItem('icon');

  if (savedTheme && savedIcon) {
    themeStyle.setAttribute('href', savedTheme);
    themeIcon.name = savedIcon;
  } else {
    // Default to light theme
    themeStyle.setAttribute('href', lightTheme);
    themeIcon.name = 'sunny-outline';
  }
}

// Event listener for the toggle button
themeToggleButton.addEventListener('click', toggleTheme);

// Initialize the saved theme on page load
document.addEventListener('DOMContentLoaded', loadSavedTheme);
