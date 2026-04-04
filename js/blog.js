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

// Back to Top button
document.getElementById('backToTop').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// WhatsApp button
document.getElementById('whatsappBtn').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://wa.me/919996315463?text=Hello%20Persist%20Logic%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services', '_blank');
});

// Filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const filterItems = document.querySelectorAll('.filter-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
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

// Read more buttons will navigate to individual blog pages (default link behavior)

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

// Animation observer
const animateElements = document.querySelectorAll('.slide-left, .slide-right, .fade-up, .zoom-in');
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

// Initial check
setTimeout(() => {
  animateElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.style.animationPlayState = 'running';
    }
  });
}, 100);