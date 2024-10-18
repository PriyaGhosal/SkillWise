document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const searchInput = document.getElementById("searchInput"); 
  let showMore = false;

  // Add click event for each FAQ item
  items.forEach((item) => {
    const title = item.querySelector(".FAQ-title");
    const content = item.querySelector(".FAQ-content");
    const expandIcon = item.querySelector(".expand");
    const revertIcon = item.querySelector(".revert");
  
    title.addEventListener("click", () => {
      const isOpen = item.classList.contains("selected");
  
      // Close all open items
      closeAllItems();
  
      if (!isOpen) {
        // Open the clicked item
        openItem(item, expandIcon, revertIcon, content);
      }
    });
  });

  function closeAllItems() {
    items.forEach((el) => {
      el.classList.remove("selected");
      el.querySelector(".FAQ-content").classList.remove("show");
      el.querySelector(".expand").style.display = "flex"; // Show plus icon
      el.querySelector(".revert").style.display = "none"; // Hide minus icon
    });
  }
  
  function openItem(item, expandIcon, revertIcon, content) {
    item.classList.add("selected");
    content.classList.add("show");
    expandIcon.style.display = "none"; // Hide plus icon
    revertIcon.style.display = "flex"; // Show minus icon
  }

  // Show More/Show Less functionality
  showMoreBtn.addEventListener("click", () => {
    showMore = !showMore;
    const itemsToShow = showMore ? items.length : 4;
    document.querySelectorAll(".item").forEach((item, index) => {
      item.style.display = index < itemsToShow ? "block" : "none";
    });
    showMoreBtn.textContent = showMore ? "Show Less" : "Show More";
  });
  
  // Initially show only the first 4 items
  document.querySelectorAll(".item").forEach((item, index) => {
    item.style.display = index < 4 ? "block" : "none";
  });

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase(); // Get search query and convert to lowercase
    let matchCount = 0;
  
    items.forEach((item) => {
      const title = item.querySelector(".FAQ-title").textContent.toLowerCase();
      const content = item.querySelector(".FAQ-content").textContent.toLowerCase();
  
      // Check if the title or content includes the search query
      if (title.includes(query) || content.includes(query)) {
        item.style.display = "block"; // Show matching items
        matchCount++;
      } else {
        item.style.display = "none"; // Hide non-matching items
      }
    });

    // Optionally reset the "Show More/Show Less" button if needed
    if (!query) {
      // If the search is cleared, show first 4 items
      items.forEach((item, index) => {
        item.style.display = index < 4 ? "block" : "none";
      });
    }
  });
});
