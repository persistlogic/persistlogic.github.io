// ===== HAMBURGER MENU FUNCTIONALITY WITH CROSS EFFECT =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navbarCollapse = document.getElementById('navbarNav');
const menuOverlay = document.getElementById('menuOverlay');

function closeMenu() {
  if (navbarCollapse) navbarCollapse.classList.remove('show');
  if (menuOverlay) menuOverlay.classList.remove('show');
  if (hamburgerBtn) hamburgerBtn.classList.remove('collapsed');  // Cross se ☰
}

function openMenu() {
  if (navbarCollapse) navbarCollapse.classList.add('show');
  if (menuOverlay) menuOverlay.classList.add('show');
  if (hamburgerBtn) hamburgerBtn.classList.add('collapsed');  // ☰ se Cross
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', function() {
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

if (menuOverlay) {
  menuOverlay.addEventListener('click', closeMenu);
}

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});



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

// WhatsApp button functionality
document.getElementById('whatsappBtn').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://wa.me/919996315463?text=Hello%20Persist%20Logic%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services', '_blank');
});

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const filterItems = document.querySelectorAll('.filter-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    filterItems.forEach(item => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Modal functions
function openProject(projectId) {
  document.getElementById(projectId + '-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeProject(projectId) {
  document.getElementById(projectId + '-modal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target.classList.contains('project-modal')) {
    event.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

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