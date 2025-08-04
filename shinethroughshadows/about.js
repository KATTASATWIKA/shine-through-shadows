// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      // Toggle mobile menu
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }
    });
  }
  
  // Update current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Handle article modal if on the articles page
  const articleModal = document.getElementById('article-modal');
  const articleCards = document.querySelectorAll('.article-card');
  const closeArticleModalBtn = document.querySelector('.close-modal');
  
  if (articleModal && articleCards.length > 0 && closeArticleModalBtn) {
    // Show article modal when clicking on an article
    articleCards.forEach(card => {
      card.addEventListener('click', function() {
        articleModal.style.display = 'block';
      });
    });
    
    // Close article modal when clicking the close button
    closeArticleModalBtn.addEventListener('click', function() {
      articleModal.style.display = 'none';
    });
    
    // Close article modal when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === articleModal) {
        articleModal.style.display = 'none';
      }
    });
  }
  
  // Handle form submissions
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for subscribing to our newsletter!');
      newsletterForm.reset();
    });
  }
  
  // Handle contact form on about page
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
});

// Add animation classes to elements when they enter the viewport
function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in:not(.animated)');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    
    // Check if element is in viewport
    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.classList.add('animated');
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Initialize scroll animation
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);