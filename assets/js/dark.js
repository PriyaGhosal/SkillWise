const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeStyle = document.getElementById('theme-style');

themeToggleButton.addEventListener('click', function() {
  
  if (themeStyle.getAttribute('href') === './assets/css/style.css') {
    themeStyle.setAttribute('href', './assets/css/darkmode.css');
    themeIcon.name = 'moon-outline';
    console.log("dark");
  } else {
    themeStyle.setAttribute('href', './assets/css/style.css');
    themeIcon.name = 'sunny-outline';
    console.log("light");
  }
});


