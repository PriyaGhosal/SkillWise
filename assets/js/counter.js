/**
 * COUNTER ANIMATION
 */

window.addEventListener("scroll", headerActive);

document.addEventListener("DOMContentLoaded", function() {
  const duration = 3000; // 3 seconds

  function startCounter(counter) {
    const target = +counter.getAttribute("data-count");
    const increment = target / (duration / 100);
    let count = 0;

    const updateCounter = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(updateCounter);
      }
      counter.textContent = Math.floor(count) + '+';
    }, 100);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target.querySelector("h1");
        startCounter(counter);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".box").forEach(box => {
    observer.observe(box);
  });
});