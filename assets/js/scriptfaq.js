'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const searchInput = document.getElementById("searchInput");
  let showMore = false;
  let visibleItemCount = 4; // Initial visible items
  
  /**
   * Utility Functions
   */
  const closeAllItems = () => {
    items.forEach(item => {
      item.classList.remove("selected");
      item.querySelector(".FAQ-content").classList.remove("show");
      item.querySelector(".expand").style.display = "flex"; // Show expand icon
      item.querySelector(".revert").style.display = "none"; // Hide revert icon
    });
  };

  const openItem = (item) => {
    const expandIcon = item.querySelector(".expand");
    const revertIcon = item.querySelector(".revert");
    const content = item.querySelector(".FAQ-content");

    item.classList.add("selected");
    content.classList.add("show");
    expandIcon.style.display = "none"; // Hide expand icon
    revertIcon.style.display = "flex"; // Show revert icon
  };

  const toggleItemVisibility = (item, index) => {
    item.style.display = index < visibleItemCount ? "block" : "none";
  };

  /**
   * Show More/Show Less Functionality
   */
  const toggleShowMore = () => {
    showMore = !showMore;
    visibleItemCount = showMore ? items.length : 4;
    items.forEach((item, index) => toggleItemVisibility(item, index));
    showMoreBtn.textContent = showMore ? "Show Less" : "Show More";
  };

  showMoreBtn.addEventListener("click", toggleShowMore);

  // Initially show only the first 4 items
  items.forEach((item, index) => toggleItemVisibility(item, index));

  /**
   * Search Functionality with Debounce
   */
  const debounce = (func, wait = 300) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase().trim();
    let matchCount = 0;

    items.forEach((item) => {
      const title = item.querySelector(".FAQ-title").textContent.toLowerCase();
      const content = item.querySelector(".FAQ-content").textContent.toLowerCase();

      const matchesQuery = title.includes(query) || content.includes(query);
      item.style.display = matchesQuery ? "block" : "none";
      
      if (matchesQuery) matchCount++;
    });

    // Reset show more/less functionality based on search results
    if (!query) {
      visibleItemCount = 4;
      items.forEach((item, index) => toggleItemVisibility(item, index));
      showMoreBtn.style.display = "block"; // Reset button display
    } else {
      showMoreBtn.style.display = "none"; // Hide button when searching
    }
  };

  searchInput.addEventListener("input", debounce(handleSearch));

  /**
   * FAQ Item Click Handlers
   */
  items.forEach((item) => {
    const title = item.querySelector(".FAQ-title");

    title.addEventListener("click", () => {
      const isOpen = item.classList.contains("selected");

      // Close all other items before opening the clicked one
      closeAllItems();
      if (!isOpen) openItem(item);
    });
  });
});
