
// ============================================
// VISHWASH BATRA PORTFOLIO - JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize active nav links
    updateActiveNavLink();
    
    // Handle contact form
    initContactForm();
    
    // Smooth scroll for anchor links
    initSmoothScroll();
    
    // Initialize scroll to top button
    initScrollToTop();
    
    // Initialize scroll animations
    initScrollAnimations();
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// ============================================
// UPDATE ACTIVE NAV LINK
// ============================================

function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const isActive = href.includes(currentPage) || 
                        (currentPage === '' && href === 'index.html') ||
                        (currentPage === 'index.html' && href === 'index.html');
        
        if (isActive) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// CONTACT FORM HANDLER
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: form.querySelector('#name').value,
            email: form.querySelector('#email').value,
            company: form.querySelector('#company').value,
            subject: form.querySelector('#subject').value,
            message: form.querySelector('#message').value
        };
        
        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showAlert('Please fill in all required fields', 'error');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showAlert('Please enter a valid email address', 'error');
            return;
        }
        
        // Create mailto link
        const mailtoLink = `mailto:vishwash.iitrpr@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`)}`;
        
        window.location.href = mailtoLink;
        
        // Show success message
        showAlert('Thank you! Your message will be sent through your email client.', 'success');
        
        // Reset form after a delay
        setTimeout(() => {
            form.reset();
        }, 1000);
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// ALERT/NOTIFICATION HELPER
// ============================================

function showAlert(message, type = 'info') {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert--${type}`;
    alert.textContent = message;
    
    // Determine colors based on type
    let bgColor = '#626c71';
    if (type === 'success') bgColor = '#2b8a8d';
    if (type === 'error') bgColor = '#c01527';
    if (type === 'warning') bgColor = '#a84b2f';
    
    // Style the alert
    Object.assign(alert.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 20px',
        borderRadius: '8px',
        backgroundColor: bgColor,
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: '500',
        zIndex: '10000',
        maxWidth: '300px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        animation: 'slideInRight 0.3s ease-out'
    });
    
    document.body.appendChild(alert);
    
    // Add animation styles if not already present
    if (!document.querySelector('style[data-alert-animations]')) {
        const styleSheet = document.createElement('style');
        styleSheet.setAttribute('data-alert-animations', 'true');
        styleSheet.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    
    // Remove after 4 seconds
    setTimeout(() => {
        alert.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            alert.remove();
        }, 300);
    }, 4000);
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function initScrollToTop() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: var(--color-primary, rgba(33, 128, 141, 1));
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 999;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        font-weight: bold;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.pointerEvents = 'none';
        }
    });
    
    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// NEWSLETTER FORM (if present)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Validate email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showAlert('Please enter a valid email address', 'error');
                    return;
                }
                
                showAlert('Thanks for subscribing! You\'ll receive updates soon.', 'success');
                this.reset();
            } else {
                showAlert('Please enter your email address', 'error');
            }
        });
    }
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', function(e) {
    // Esc key to close mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const menuToggle = document.querySelector('.menu-toggle');
        if (navMenu && menuToggle) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }
});

// ============================================
// PERFORMANCE MONITORING (Optional)
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`📊 Page load time: ${pageLoadTime}ms`);
    });
}

// ============================================
// UTILITY: Check if element is in viewport
// ============================================

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// ACCESSIBILITY: Skip to main content
// ============================================

document.addEventListener('keydown', function(e) {
    // Alt + / to show keyboard shortcuts info
    if ((e.altKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        console.log(`
        ⌨️  Keyboard Shortcuts:
        - Esc: Close mobile menu
        - Tab: Navigate page elements
        - Enter: Activate buttons and links
        `);
    }
});

console.log('✅ Portfolio JavaScript loaded successfully');
