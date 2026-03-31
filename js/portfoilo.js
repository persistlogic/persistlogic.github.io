// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Back to Top button functionality
document.getElementById('backToTop').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// WhatsApp button functionality - CORRECT NUMBER
document.getElementById('whatsappBtn').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://wa.me/919996315463?text=Hello%20Persist%20Logic%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services', '_blank');
});

// ========== FILTER FUNCTIONALITY ==========
document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('.filter-item');
  
  console.log('Filter buttons found:', filterButtons.length);
  console.log('Filter items found:', filterItems.length);
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      console.log('Filter clicked:', filterValue);
      
      filterItems.forEach(item => {
        if (filterValue === 'all') {
          item.style.display = 'block';
        } else {
          if (item.classList.contains(filterValue)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
  
  // Modal functions - make them globally accessible
  window.openProject = function(projectId) {
    console.log('Opening project:', projectId);
    const modal = document.getElementById(projectId + '-modal');
    if (modal) {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    } else {
      console.error('Modal not found:', projectId + '-modal');
    }
  };
  
  window.closeProject = function(projectId) {
    console.log('Closing project:', projectId);
    const modal = document.getElementById(projectId + '-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };
  
  // Close modal when clicking outside
  window.onclick = function(event) {
    if (event.target.classList.contains('project-modal')) {
      event.target.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]:not(#backToTop):not(#whatsappBtn)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Trigger animations on scroll
  const animateElements = document.querySelectorAll('.slide-left, .slide-right, .fade-up');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });
  
  animateElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
  
  // Initial check for elements in view
  setTimeout(() => {
    animateElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.style.animationPlayState = 'running';
      }
    });
  }, 100);
  
  console.log('Portfolio JS loaded successfully!');
});
