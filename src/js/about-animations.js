/**
 * About Me Animation System
 * Handles scroll-triggered animations and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Setup Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Handle animated counters
                if (entry.target.querySelector('[data-count]')) {
                    animateCounters(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all scroll-animate elements
    const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
    scrollElements.forEach(element => {
        observer.observe(element);
    });

    // Animate counters
    function animateCounters(container) {
        const counters = container.querySelectorAll('[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 16);
        });
    }

    // Add hover effects to tech badges
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Add smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add parallax effect to floating elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const floatingIcons = document.querySelectorAll('.floating-icon');
        
        floatingIcons.forEach((icon, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            icon.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Add typing effect to hero description (optional enhancement)
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        const text = heroDescription.textContent;
        heroDescription.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroDescription.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing after a delay
        setTimeout(typeWriter, 1500);
    }

    // Enhanced button interactions
    const modernButtons = document.querySelectorAll('.btn-modern');
    modernButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple effect
    const rippleCSS = `
        .btn-modern {
            position: relative;
            overflow: hidden;
        }
        
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            pointer-events: none;
            animation: ripple-animation 0.6s ease-out;
        }
        
        @keyframes ripple-animation {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    
    // Add ripple styles if not already present
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = rippleCSS;
        document.head.appendChild(style);
    }

    // Add staggered animations to expertise items
    const expertiseItems = document.querySelectorAll('.expertise-item');
    expertiseItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Add hover effect to achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Performance optimization: throttle scroll events
    let ticking = false;
    function updateScrollEffects() {
        // Your scroll-based animations here
        ticking = false;
    }

    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestScrollUpdate, { passive: true });

    // Add fade-in animation to the entire about section when it comes into view
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        observer.observe(aboutSection);
    }

    console.log('About Me animations initialized successfully! 🎉');
});
