/**
 * COUNTER ANIMATION
 */

// Add event listener for scroll to activate header
window.addEventListener("scroll", headerActive);

// Ensure DOM is fully loaded before initializing counters
document.addEventListener("DOMContentLoaded", function () {
  const animationDuration = 3000; // Animation duration in milliseconds (3 seconds)

  /**
   * Function to start counter animation
   * @param {HTMLElement} counter - The counter element to animate.
   */
  function startCounter(counter) {
    const targetValue = parseInt(counter.getAttribute("data-count"), 10); // Target number from data attribute
    const incrementStep = targetValue / (animationDuration / 100); // Increment per update
    let currentValue = 0;

    // Update counter value at regular intervals
    const updateCounter = setInterval(() => {
      currentValue += incrementStep;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(updateCounter); // Stop once the target is reached
      }
      counter.textContent = Math.floor(currentValue) + "+"; // Display the updated value
    }, 100); // Update every 100ms
  }

  /**
   * IntersectionObserver callback to start counters when boxes come into view.
   * @param {IntersectionObserverEntry[]} entries - Array of observer entries.
   * @param {IntersectionObserver} observer - The observer object itself.
   */
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target.querySelector("h1"); // Assuming <h1> holds the counter value
        startCounter(counter); // Start the counter animation
        observer.unobserve(entry.target); // Unobserve the element after animation
      }
    });
  }

  // Create a new IntersectionObserver instance with a threshold
  const observerOptions = {
    threshold: 0.2, // Trigger when 20% of the element is visible
  };
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Observe all elements with the class `.box` for animation
  document.querySelectorAll(".box").forEach((box) => {
    observer.observe(box); // Observe each box to trigger counter animation
  });
});
