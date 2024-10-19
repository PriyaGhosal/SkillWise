document.addEventListener("DOMContentLoaded", () => {
    // Cache DOM elements
    const stars = Array.from(document.getElementsByClassName("star"));
    const output = document.getElementById("output");
    const popup = document.getElementById("popup");
    const reviewInput = document.getElementById("reviewInput");
    const ratingForm = document.getElementById("ratingForm");
    const btns = document.querySelectorAll(".btn");
    const slideRow = document.getElementById("slide-row");
    const main = document.querySelector("main");
    let currentIndex = 0;
    let intervalId;

    // Mapping star numbers to classes
    const starClasses = ["one", "two", "three", "four", "five"];

    // Function to update the star rating
    function updateRating(n) {
        removeStarStyles();
        stars.slice(0, n).forEach(star => star.className = `star ${starClasses[n - 1]}`);
        output.innerText = `Rating is: ${n}/5`;
    }

    // Remove all star classes
    function removeStarStyles() {
        stars.forEach(star => star.className = "star");
    }

    // Ensure at least 1 star is selected
    function validateRating() {
        const rating = parseInt(output.innerText.split("/")[0].split(": ")[1]);
        if (isNaN(rating) || rating < 1) {
            updateRating(1); // Set minimum rating to 1 star
            return false;
        }
        return true;
    }

    // Form submission event listener
    ratingForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission
        if (validateRating()) {
            showPopup();
        }
    });

    // Show popup and reset rating form
    function showPopup() {
        popup.style.display = "block";
        setTimeout(() => {
            popup.style.display = "none";
            resetRatingForm();
        }, 2000);
    }

    // Reset rating form
    function resetRatingForm() {
        removeStarStyles();
        output.innerText = "";
        reviewInput.value = ""; // Clear the review text area
    }

    // Slide show functionality
    function updateSlide() {
        const mainWidth = main.offsetWidth;
        const translateValue = currentIndex * -mainWidth;
        slideRow.style.transform = `translateX(${translateValue}px)`;

        btns.forEach((btn, index) => {
            btn.classList.toggle("active", index === currentIndex);
        });
    }

    btns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            currentIndex = index;
            updateSlide();
        });
    });

    // Debounced resize event for performance optimization
    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateSlide();
        }, 200); // Delay to prevent excessive recalculations
    });

    // Start auto-slideshow
    function startSlideshow() {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % btns.length;
            updateSlide();
        }, 3000);
    }

    // Stop slideshow when user interacts with buttons
    btns.forEach((btn) => {
        btn.addEventListener("click", () => clearInterval(intervalId));
    });

    // Initiate slideshow on page load
    startSlideshow();
});
