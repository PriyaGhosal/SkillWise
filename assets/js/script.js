'use strict';



/**
 * add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  circle.style.animation = "none";
  document.body.classList.add("loaded");
});



/**
 * NAVBAR TOGGLER FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * 
 * add active class on header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

// dynamically updating year in footer for copyright
document.getElementById('year').textContent = new Date().getFullYear();


window.addEventListener("scroll", headerActive);

// Feedback
let selectedEmotion = '';
let selectedRating = 0; // Initialize selectedRating for stars

// Open Feedback Modal
document.getElementById('feedbackButton').onclick = function() {
    document.getElementById('feedbackModal').style.display = 'flex';
}

// Close Feedback Modal
document.getElementById('closeModal').onclick = function() {
    document.getElementById('feedbackModal').style.display = 'none';
}

// Move to Feedback Step (Step 2)
document.getElementById('nextToFeedback').onclick = function() {
    const selectedEmoji = document.querySelector('.emoji.selected');
    if (!selectedEmoji) {
        alert('Please select an emotion!');
        return;
    }
    selectedEmotion = selectedEmoji.dataset.value;
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
}

// Select Emoji
document.querySelectorAll('.emoji').forEach(emoji => {
    emoji.onclick = function() {
        document.querySelectorAll('.emoji').forEach(e => e.classList.remove('selected'));
        emoji.classList.add('selected');
    }
});

// Move to Email Step (Step 3)
document.getElementById('nextToEmail').onclick = function() {
    if (!document.getElementById('feedback').value) {
        alert('Please provide your feedback!');
        return;
    }

    if (selectedRating === 0) { // Check if star rating is selected
        alert('Please provide a star rating!');
        return;
    }

    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}

// Go Back to Emoji Step (Step 1)
document.getElementById('backToEmoji').onclick = function() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
}

// Go Back to Feedback Step (Step 2)
document.getElementById('backToFeedback').onclick = function() {
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
}

// Submit Feedback Form
document.getElementById('feedbackForm').onsubmit = function(event) {
    event.preventDefault();
    document.getElementById('feedbackForm').reset();
    document.getElementById('feedbackModal').style.display = 'none';

    sessionStorage.setItem('showPopUp', 'true'); // Set a flag to show pop-up after reload
    window.location.reload(); 
};

// Show Thank You Popup After Submission
window.onload = () => {
  if (sessionStorage.getItem('showPopUp') === 'true') {
      popUpDisplay();
      sessionStorage.removeItem('showPopUp'); 
  }
};

const popUpDisplay = () => {
  setTimeout(() => {
      document.querySelector('.feedbackPopUp').style.transform = 'translate(0)';
      setTimeout(() => {
          document.querySelector('.feedbackPopUp').style.transform = 'translate(120%)';
      }, 3000);
  }, 1000);
};

// Star Rating Logic
document.querySelectorAll('.star').forEach((star, index) => {
  star.addEventListener('click', function() {
      selectedRating = index + 1;  // Update the selected rating based on clicked star

      // Clear all stars
      document.querySelectorAll('.star').forEach(s => {
          s.classList.remove('selected');
          s.style.color = ''; // Reset color for all stars
      });

      // Highlight the stars up to the selected one
      for (let i = 0; i <= index; i++) {
          document.querySelectorAll('.star')[i].classList.add('selected');
          document.querySelectorAll('.star')[i].style.color = 'goldenrod'; // Turn selected stars red
      }
  });
});

