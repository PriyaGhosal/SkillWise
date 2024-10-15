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

// Select elements
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

// Function to toggle the 'active' class on navbar, overlay, and body
const toggleNavbar = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

// Attach click event to each nav-toggler element
navTogglers.forEach(toggler => toggler.addEventListener("click", toggleNavbar));


document.querySelector("[data-nav-toggler]").addEventListener("click", function() {
  document.body.classList.toggle("nav-active");
});




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


// Feedback Section
let selectedEmotion = '';

document.getElementById('feedbackButton').onclick = function() {
    document.getElementById('feedbackModal').style.display = 'flex';
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('feedbackModal').style.display = 'none';
}

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

document.querySelectorAll('.emoji').forEach(emoji => {
    emoji.onclick = function() {
        document.querySelectorAll('.emoji').forEach(e => e.classList.remove('selected'));
        emoji.classList.add('selected');
    }
});

document.getElementById('nextToEmail').onclick = function() {
    if (!document.getElementById('feedback').value) {
        alert('Please provide your feedback!');
        return;
    }
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}

document.getElementById('backToEmoji').onclick = function() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
}

document.getElementById('backToFeedback').onclick = function() {
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
}

window.onload = () => {
  if (sessionStorage.getItem('showPopUp') === 'true') {
      popUpDisplay();
      sessionStorage.removeItem('showPopUp'); 
  }
};

document.getElementById('feedbackForm').onsubmit = function(event) {
  event.preventDefault();
  document.getElementById('feedbackForm').reset();
  document.getElementById('feedbackModal').style.display = 'none';

  sessionStorage.setItem('showPopUp', 'true'); // Set a flag to show pop-up after reload
  window.location.reload(); 
};

const popUpDisplay = () => {
  setTimeout(() => {
      document.querySelector('.feedbackPopUp').style.transform = 'translate(0)';
      setTimeout(() => {
          document.querySelector('.feedbackPopUp').style.transform = 'translate(120%)';
      }, 3000);
  }, 1000);
};