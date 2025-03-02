document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navList.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Tabs Functionality
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and content
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      
      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Publications Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const publicationItems = document.querySelectorAll('.publication-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Remove active class from all buttons
      filterBtns.forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Filter publications
      publicationItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Testimonial Slider
  const testimonials = document.querySelectorAll('.testimonial-item');
  const prevBtn = document.querySelector('.control-btn.prev');
  const nextBtn = document.querySelector('.control-btn.next');
  let currentTestimonial = 0;
  
  if (testimonials.length > 0) {
    // Hide all testimonials except the first one
    testimonials.forEach((testimonial, index) => {
      if (index !== 0) {
        testimonial.style.display = 'none';
      }
    });
    
    // Previous button click
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
      });
    }
    
    // Next button click
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
      });
    }
  }

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      
      // Toggle active class on clicked item
      faqItem.classList.toggle('active');
      
      // Update toggle icon
      const toggleIcon = this.querySelector('.faq-toggle');
      toggleIcon.textContent = faqItem.classList.contains('active') ? '−' : '+';
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the form data to a server
      // For demonstration purposes, we'll just log it to the console
      console.log('Form submitted:', { name, email, subject, message });
      
      // Show success message
      alert('Thank you for your message. We will get back to you soon!');
      
      // Reset form
      contactForm.reset();
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Load More Publications Button
  const loadMoreBtn = document.querySelector('.load-more .btn');
  const hiddenPublications = document.querySelectorAll('.publication-item.hidden');
  
  if (loadMoreBtn && hiddenPublications.length > 0) {
    loadMoreBtn.addEventListener('click', function() {
      hiddenPublications.forEach(pub => {
        pub.classList.remove('hidden');
        pub.style.display = 'flex';
      });
      
      this.style.display = 'none';
    });
  }
});