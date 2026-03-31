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

// ===== BLOG MODAL WITH SQUARE IMAGE =====

// Create modal and add to page
function createBlogModal() {
  // Check if modal already exists
  if (document.getElementById('blogModal')) return;
  
  const modalHTML = `
    <div id="blogModal" class="blog-modal">
      <div class="modal-content">
        <div class="modal-close" onclick="closeBlogModal()"><i class="fas fa-times"></i></div>
        <div class="modal-body">
          <!-- SQUARE IMAGE - exactly 250px by 250px -->
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="" id="modalImage" class="square-image" alt="Blog Image">
          </div>
          
          <div class="project-info">
            <h2><span id="modalTitleFirst"></span> <span id="modalTitleRest"></span></h2>
            
            <div class="project-overview">
              <h3><i class="fas fa-info-circle"></i> Article Overview</h3>
              <p id="modalContent"></p>
            </div>
            
            <h3><i class="fas fa-tags"></i> Topics Covered</h3>
            <div class="tech-stack" id="modalTopics"></div>
            
            <div class="modal-author">
              <div class="modal-author-avatar" id="modalAuthorAvatar"></div>
              <div class="modal-author-info">
                <h4 id="modalAuthorName"></h4>
                <p id="modalAuthorTitle"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Call it when page loads
createBlogModal();

// Open modal function
function openBlogModal(postTitle) {
  const modal = document.getElementById('blogModal');
  if (!modal) return;
  
  // Get post data from the card
  const blogCard = this.closest('.blog-card');
  
  // Get image from the card
  const cardImage = blogCard.querySelector('.blog-image img').src;
  
  // Set square image
  document.getElementById('modalImage').src = cardImage;
  
  // Get title
  const title = blogCard.querySelector('h3').textContent;
  const titleWords = title.split(' ');
  document.getElementById('modalTitleFirst').textContent = titleWords[0];
  document.getElementById('modalTitleRest').textContent = titleWords.slice(1).join(' ');
  
  // Get content
  const content = blogCard.querySelector('p').textContent;
  document.getElementById('modalContent').textContent = content + " This is a detailed article about " + title + ". Read the full post for more insights and practical tips.";
  
  // Topics based on category
  const category = blogCard.querySelector('.blog-category').textContent;
  
  let topics = '';
  if (category === 'Websites') {
    topics = `
      <span class="tech-tag">Websites</span>
      <span class="tech-tag">UI/UX</span>
      <span class="tech-tag">Development</span>
      <span class="tech-tag">2026 Trends</span>
    `;
  } else if (category === 'E-commerce') {
    topics = `
      <span class="tech-tag">E-commerce</span>
      <span class="tech-tag">Online Store</span>
      <span class="tech-tag">Shopping</span>
      <span class="tech-tag">Payment</span>
    `;
  } else if (category === 'Marketing') {
    topics = `
      <span class="tech-tag">Marketing</span>
      <span class="tech-tag">SEO</span>
      <span class="tech-tag">Social Media</span>
      <span class="tech-tag">Analytics</span>
    `;
  } else if (category === 'Apps') {
    topics = `
      <span class="tech-tag">Mobile Apps</span>
      <span class="tech-tag">iOS/Android</span>
      <span class="tech-tag">UI Design</span>
      <span class="tech-tag">Development</span>
    `;
  } else {
    topics = `
      <span class="tech-tag">${category}</span>
      <span class="tech-tag">Web Development</span>
      <span class="tech-tag">2026 Trends</span>
      <span class="tech-tag">Best Practices</span>
    `;
  }
  
  document.getElementById('modalTopics').innerHTML = topics;
  
  // Author info (from card)
  const authorName = blogCard.querySelector('.author-name').textContent;
  const authorAvatar = blogCard.querySelector('.author-avatar').textContent;
  
  document.getElementById('modalAuthorName').textContent = authorName;
  document.getElementById('modalAuthorAvatar').textContent = authorAvatar;
  document.getElementById('modalAuthorTitle').textContent = 'Author • Persist Logic';
  
  // Show modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Close modal function
function closeBlogModal() {
  document.getElementById('blogModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('blogModal');
  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Add click event to all read more buttons
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    openBlogModal.call(this);
  });
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