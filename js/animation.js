// --------------------------Up--------------------------

// Create the observer
var observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
      // Add the CSS class that has your animation
      entry.target.classList.add('fade-in-up');
      return;
    }

    // entry.target.classList.remove('fade-in-up');
  })
});

// Observe the element
var element = document.getElementsByClassName('fade-up');

for(var i = 0; i < element.length; i++){
  observer.observe(element[i]);
}

// --------------------------Down--------------------------

var observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-down');
      return;
    }
  })
});

var element = document.getElementsByClassName('fade-down');
for(var i = 0; i < element.length; i++){
  observer.observe(element[i]);
}

// --------------------------Left--------------------------

var observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-left');
      return;
    }
  })
});

var element = document.getElementsByClassName('fade-left');
for(var i = 0; i < element.length; i++){
  observer.observe(element[i]);
}

// --------------------------Right--------------------------

var observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-right');
      return;
    }
  })
});

var element = document.getElementsByClassName('fade-right');
for(var i = 0; i < element.length; i++){
  observer.observe(element[i]);
}
  

// --------------------------Progress bar--------------------------


var observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('progress-bar-animation');
      return;
    }
  })
})

var element = document.getElementsByClassName('progress-bar');
for(var i = 0; i < element.length; i++){
  observer.observe(element[i]);
}

// --------------------------Skill Button--------------------------

function showList(listId, clickedButton) {
  // Hide all elements with the IDs 'tech-skills' or 'soft-skills'
  document.querySelectorAll('#tech-skills, #soft-skills').forEach(div => {
      div.classList.add('hidden');
  });
  
  // Show the selected list
  document.getElementById(listId).classList.remove('hidden');
  
  // Reset button colors
  document.querySelectorAll('.btn-group .btn').forEach(button => {
      button.classList.remove('btn-danger');
      button.classList.add('btn-outline-secondary');
  });
  
  // Set the clicked button to 'btn-danger'
  clickedButton.classList.remove('btn-outline-secondary');
  clickedButton.classList.add('btn-danger');
}

// --------------------------Projects Button--------------------------

function showProjects(listId, clickedButton) {
  // Hide all elements with the IDs 'personal-projects' or 'academic-projects'
  document.querySelectorAll('#personal-projects, #academic-projects').forEach(div => {
      div.classList.add('hidden');
  });
  
  // Show the selected list
  document.getElementById(listId).classList.remove('hidden');
  
  // Reset button colors within the projects button group
  document.querySelectorAll('.projects-btn-group .btn').forEach(button => {
      button.classList.remove('btn-danger');
      button.classList.add('btn-outline-secondary');
  });
  
  // Set the clicked button to 'btn-danger'
  clickedButton.classList.remove('btn-outline-secondary');
  clickedButton.classList.add('btn-danger');
}

// --------------------------Documentation Button--------------------------

function showDocs(listId, clickedButton) {
  // Hide all elements with the IDs 'guides' or 'write-ups'
  document.querySelectorAll('#guides, #write-ups').forEach(div => {
      div.classList.add('hidden');
  });
  
  // Show the selected list
  document.getElementById(listId).classList.remove('hidden');
  
  // Reset button colors within the documentation button group
  document.querySelectorAll('.docs-btn-group .btn').forEach(button => {
      button.classList.remove('btn-danger');
      button.classList.add('btn-outline-secondary');
  });
  
  // Set the clicked button to 'btn-danger'
  clickedButton.classList.remove('btn-outline-secondary');
  clickedButton.classList.add('btn-danger');
}

// --------------------------Clone Button--------------------------

document.querySelectorAll('.gitclone').forEach(button => {
  button.addEventListener('click', function() {
      const repoName = this.getAttribute('data-repo');
      if (!repoName) {
          alert('Repository name not specified.');
          return;
      }
      
      const zipUrl = `https://github.com/time0ut07/${repoName}/archive/refs/heads/main.zip`;
      
      window.location.href = zipUrl;
  });
});

// --------------------------Repo Link Button--------------------------

document.querySelectorAll('.repoButton').forEach(button => {
  button.addEventListener('click', function() {
      const repoName = this.getAttribute('data-repo');
      if (!repoName) {
          alert('Repository name not specified.');
          return;
      }
      
      const zipUrl = `https://github.com/time0ut07/${repoName}`;
      
      window.open(zipUrl, '_blank');
  });
});

// --------------------------Docs Link Button--------------------------

document.querySelectorAll('.docsButton').forEach(button => {
  button.addEventListener('click', function() {
      const docType = this.getAttribute('doc-type');
      if (!docType) {
          alert('Doc Type not specified.');
          return;
      }

      const directory = this.getAttribute('directory');
      if (!directory) {
          alert('Directory not specified.');
          return;
      }
      
      const zipUrl = `https://time0ut07.github.io/${docType}/${directory}`;
      
      window.open(zipUrl, '_blank');
  });
});

// --------------------------Navbar scroll Button--------------------------

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) { // Adjust the scroll value as needed
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});


// --------------------------Typing Animation--------------------------

var i = 0;
var txt = 'Driven to advance cybersecurity and protect against emerging threats.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Function to observe when the element is in view
function onScreen(entry) {
  if (entry[0].isIntersecting) {
    typeWriter();
    observer.unobserve(entry[0].target); // Unobserve after typing starts
  }
}

// Set up the IntersectionObserver
var observer = new IntersectionObserver(onScreen, {
  root: null, // Use the viewport as the root
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Start observing the element
observer.observe(document.getElementById("typing"));



// document.addEventListener("DOMContentLoaded", function() {
//         function checkViewport() {
//             const placeholder = document.querySelector('.line-break-placeholder');
//             if (window.innerWidth <= 768) {
//                 // Only add the <br> if it's not already present
//                 if (!placeholder.querySelector('br')) {
//                     const br = document.createElement('br');
//                     placeholder.appendChild(br);
//                 }
//             } else {
//                 // Remove the <br> if it exists
//                 const existingBr = placeholder.querySelector('br');
//                 if (existingBr) {
//                     placeholder.removeChild(existingBr);
//                 }
//             }
//         }

//         // Check on page load
//         checkViewport();

//         // Check on window resize
//         window.addEventListener('resize', checkViewport);
//     });
