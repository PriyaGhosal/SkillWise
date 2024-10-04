document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    const showMoreBtn = document.getElementById("showMoreBtn");
    let showMore = false;
  
    items.forEach((item, index) => {
      item.querySelector(".FAQ-title").addEventListener("click", () => {
        if (item.classList.contains("selected")) {
          item.classList.remove("selected");
          item.querySelector(".FAQ-content").classList.remove("show");
        } else {
          document.querySelectorAll(".item").forEach((el) => {
            el.classList.remove("selected");
            el.querySelector(".FAQ-content").classList.remove("show");
          });
          item.classList.add("selected");
          item.querySelector(".FAQ-content").classList.add("show");
        }
      });
    });
  
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
  