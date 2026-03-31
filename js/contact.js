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

// ===== FORM SUBMISSION - DYNAMIC SUBJECT LINE =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    
    //DYNAMIC SUBJECT - User ke message se
    let subjectLine = message.substring(0, 50);
    if (message.length > 50) {
      subjectLine = subjectLine + '...';
    }
    
    
    const subject = message ? 
      `Project Inquiry: ${subjectLine}` : 
      'New Contact Form Submission';
    
    // Create email body
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;
    
    // Open default email client with dynamic subject
    window.location.href = `mailto:info@persistlogic.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Reset form
    this.reset();
  });
}

// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to get service name from value
function getServiceName(serviceValue) {
  const services = {
    'web': 'Web Development',
    'ecommerce': 'E-commerce Development',
    'mobile': 'Mobile App Development',
    'cloud': 'Cloud Solutions',
    'consulting': 'IT Consulting',
    'security': 'Cyber Security',
    'Other': 'Other'
  };
  return services[serviceValue] || serviceValue;
}

// Trigger animations on scroll
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

// Initial check for elements in view
setTimeout(() => {
  animateElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.style.animationPlayState = 'running';
    }
  });
}, 100);