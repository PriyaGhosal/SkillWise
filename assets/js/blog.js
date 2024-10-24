const blogs = [
    {
      title: "Blog Title 1",
      description: "Short description of Blog 1.",
      image: "../assets/images/blog1.jpg", // Path to your image
      link: "/pages/blog1.html", // Link to the full blog post
    },
    {
      title: "Blog Title 2",
      description: "Short description of Blog 2.",
      image: "../assets/images/blog2.jpg", // Path to your image
      link: "/pages/blog2.html", // Link to the full blog post
    },
    // Add more blog entries as needed
  ];
  
  // Function to display blogs
  function displayBlogs() {
    const blogList = document.querySelector(".grid-list");
    blogs.forEach(blog => {
      const blogCard = document.createElement("li");
      blogCard.classList.add("blog-card");
      
      blogCard.innerHTML = `
    <a href="${escapeHTML(blog.link)}">
    <img src="${escapeHTML(blog.image)}" alt="${escapeHTML(blog.title)}" />
    <h3>${escapeHTML(blog.title)}</h3>
    <p>${escapeHTML(blog.description)}</p>
  </a>
`;
      
      blogList.appendChild(blogCard);
    });
  }
  
  // Call the function to display blogs when the page loads
  window.onload = displayBlogs;
  
  
