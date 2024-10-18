// config.js
const CONFIG = {
    USER_ID_KEY: 'YOUR_USER_ID',
    SERVICE_ID_KEY: 'YOUR_SERVICE_ID',
    TEMPLATE_ID_KEY: 'YOUR_TEMPLATE_ID',
};

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        alert('Button clicked!');
    });
}); 