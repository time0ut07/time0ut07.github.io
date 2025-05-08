// template up button
// Scroll event listener
window.addEventListener('scroll', function() {
    var scrollUpBtn = document.querySelector('.scroll-to-top-btn');
  
    // Get the scroll position and the height of the document
    var scrollPosition = window.scrollY;
    var documentHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;
    
    // Check if page has scrolled down more than 50px
    if (scrollPosition + windowHeight < documentHeight - 100) {
      scrollUpBtn.classList.remove('stop');
      // Show button when the user is not near the bottom
      if (scrollPosition > 50) {
        scrollUpBtn.classList.add('scrolled');
      } else {
        scrollUpBtn.classList.remove('scrolled');
      }
    } else {
      // Hide the button when the user is near the bottom
      scrollUpBtn.classList.add('stop');
    }
  });
  
  // Function to scroll the page back to the top
  function scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  }
  
  
  
  // Get the elements for the button and the icon
  const tocButton = document.getElementById("template-header-btn");
  const tocIcon = document.getElementById("toc-icon");
  const tocList = document.getElementById("tocList");
  
  // Bootstrap collapse instance
  const collapseInstance = new bootstrap.Collapse(tocList, {
      toggle: false // Disable auto toggle on page load
  });
  
  // Toggle icon when the collapse is expanded
  tocList.addEventListener('show.bs.collapse', function () {
      tocIcon.style.transform = 'rotate(90deg)'; // Rotate icon to face down
  });
  
  // Toggle icon when the collapse is collapsed
  tocList.addEventListener('hide.bs.collapse', function () {
      tocIcon.style.transform = 'rotate(0deg)'; // Reset icon to face right
  });
  