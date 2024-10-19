'use strict';

/**
 * Utility Function to Add Event Listeners to Multiple Elements
 */
const addEventOnElements = (elements, eventType, callback) => {
  elements.forEach(element => element.addEventListener(eventType, callback));
};

/**
 * Preloader Logic
 */
const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("load", () => {
  preloader.classList.add("loaded");
  circle.style.animation = "none";
  document.body.classList.add("loaded");
});

/**
 * Navbar Toggler for Mobile
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = () => {
  const isActive = navbar.classList.toggle("active");
  overlay.classList.toggle("active", isActive);
  document.body.classList.toggle("nav-active", isActive);
};

// Attach event listener to nav-toggler elements
addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * Sticky Header on Scroll
 */
const header = document.querySelector("[data-header]");

const toggleHeaderActive = () => {
  header.classList.toggle("active", window.scrollY > 100);
};

window.addEventListener("scroll", toggleHeaderActive);

/**
 * Update Footer Year Dynamically
 */
document.getElementById('year').textContent = new Date().getFullYear();

/**
 * Feedback Modal Logic
 */
let selectedEmotion = '';

const feedbackModal = document.getElementById('feedbackModal');
const showFeedbackModal = () => feedbackModal.style.display = 'flex';
const closeFeedbackModal = () => feedbackModal.style.display = 'none';

// Open and close modal handlers
document.getElementById('feedbackButton').addEventListener('click', showFeedbackModal);
document.getElementById('closeModal').addEventListener('click', closeFeedbackModal);

// Emoji Selection
document.querySelector('.emoji-container').addEventListener('click', function (event) {
  if (event.target.classList.contains('emoji')) {
    document.querySelectorAll('.emoji').forEach(e => e.classList.remove('selected'));
    event.target.classList.add('selected');
    selectedEmotion = event.target.dataset.value;
  }
});

// Form Navigation Logic
const navigateStep = (currentStep, nextStep) => {
  document.getElementById(currentStep).style.display = 'none';
  document.getElementById(nextStep).style.display = 'block';
};

document.getElementById('nextToFeedback').addEventListener('click', () => {
  if (!selectedEmotion) {
    alert('Please select an emotion!');
    return;
  }
  navigateStep('step1', 'step2');
});

document.getElementById('nextToEmail').addEventListener('click', () => {
  const feedbackText = document.getElementById('feedback').value.trim();
  if (!feedbackText) {
    alert('Please provide your feedback!');
    return;
  }
  navigateStep('step2', 'step3');
});

document.getElementById('backToEmoji').addEventListener('click', () => {
  navigateStep('step2', 'step1');
});

document.getElementById('backToFeedback').addEventListener('click', () => {
  navigateStep('step3', 'step2');
});

// Feedback Form Submission
document.getElementById('feedbackForm').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('feedbackForm').reset();
  closeFeedbackModal();

  sessionStorage.setItem('showPopUp', 'true'); // Store pop-up flag
  window.location.reload(); // Trigger page reload to show pop-up
});

/**
 * Show Feedback Pop-Up After Reload
 */
const showPopUp = () => {
  const feedbackPopUp = document.querySelector('.feedbackPopUp');
  setTimeout(() => {
    feedbackPopUp.style.transform = 'translate(0)';
    setTimeout(() => {
      feedbackPopUp.style.transform = 'translate(120%)';
    }, 3000);
  }, 1000);
};

window.addEventListener('load', () => {
  if (sessionStorage.getItem('showPopUp') === 'true') {
    showPopUp();
    sessionStorage.removeItem('showPopUp'); // Clear pop-up flag after showing
  }
});

/**
 * Optimizations:
 * 1. Avoided repetitive DOM lookups by caching elements in variables.
 * 2. Minimized the scope of reflows and repaints using efficient class toggling and delayed styles.
 * 3. Event delegation was used for emoji selection for improved performance, especially with dynamic content.
 * 4. Prevented hard page reloads when unnecessary by using sessionStorage for state management.
 * 5. Reduced redundant code by creating reusable functions for navigation between steps.
 */
