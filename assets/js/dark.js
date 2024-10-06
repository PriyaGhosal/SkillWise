const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeIcon.setAttribute('name', 'moon-outline');  // Use setAttribute to change the icon
  } else {
    themeIcon.setAttribute('name', 'sunny-outline');
  }
});
