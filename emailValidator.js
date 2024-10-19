function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return re.test(String(email).toLowerCase());
}
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const emailInput = document.querySelector("input[name='username']");
        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            event.preventDefault(); 
        }
    });
});
