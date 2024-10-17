document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    const showMoreBtn = document.getElementById("showMoreBtn");
    let showMore = false;
  
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
  
    showMoreBtn.addEventListener("click", () => {
      showMore = !showMore;
      const itemsToShow = showMore ? items.length : 4;
      document.querySelectorAll(".item").forEach((item, index) => {
        item.style.display = index < itemsToShow ? "block" : "none";
      });
      showMoreBtn.textContent = showMore ? "Show Less" : "Show More";
    });
    document.querySelectorAll(".item").forEach((item, index) => {
      item.style.display = index < 4 ? "block" : "none";
    });
  });
  