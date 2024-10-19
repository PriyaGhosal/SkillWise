'use strict';

// Config object for button properties
const configObj = {
  buttonD: "M8 18.568L10.8 21.333 16 16.198 21.2 21.333 24 18.568 16 10.667z",
  buttonT: "translate(-1148 -172) translate(832 140) translate(32 32) translate(284)",
  shadowSize: "none",
  roundnessSize: "12px",
  buttonDToBottom: "32px",
  buttonDToRight: "32px",
  selectedBackgroundColor: "#FF8086",
  selectedIconColor: "#000",
  buttonWidth: "40px",
  buttonHeight: "40px",
  svgWidth: "32px",
  svgHeight: "32px",
};

// Function to create a back-to-top button
function createButton(config, pageSimulator = null) {
  const body = document.body;
  const backToTopButton = document.createElement("span");

  backToTopButton.classList.add("softr-back-to-top-button");
  backToTopButton.id = "softr-back-to-top-button";

  // Append to the page or page simulator
  if (pageSimulator) {
    pageSimulator.appendChild(backToTopButton);
    backToTopButton.style.position = "absolute";
  } else {
    body.appendChild(backToTopButton);
    backToTopButton.style.position = "fixed";
  }

  // Apply styles dynamically using configObj values
  Object.assign(backToTopButton.style, {
    width: config.buttonWidth,
    height: config.buttonHeight,
    marginRight: config.buttonDToRight,
    marginBottom: config.buttonDToBottom,
    borderRadius: config.roundnessSize,
    boxShadow: config.shadowSize,
    backgroundColor: config.selectedBackgroundColor,
    color: config.selectedBackgroundColor,
    bottom: "0px",
    right: "0px",
    outline: "none",
    cursor: "pointer",
    display: "none",  // Hidden by default
  });

  // Create SVG element for the button icon
  backToTopButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${config.svgWidth}" height="${config.svgHeight}" viewBox="0 0 32 32" class="back-to-top-button-svg">
      <g fill="none" fill-rule="evenodd">
        <path d="M0 0H32V32H0z" transform="${config.buttonT}" />
        <path class="back-to-top-button-img" fill="${config.selectedIconColor}" d="${config.buttonD}" />
      </g>
    </svg>
  `;

  // Scroll behavior setup
  if (!pageSimulator) {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });

    // Smooth scrolling to the top on button click
    backToTopButton.addEventListener("click", smoothScrollToTop);
  }
}

// Smooth scroll functionality
function smoothScrollToTop() {
  const scrollStep = -window.scrollY / 20;
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 16); // Approximately 60 frames per second (1000ms / 60 = 16.6)
}

// Initialize the button after the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  createButton(configObj);
});
