/**
 * Modern Animation System
 * Handles scroll-triggered animations, intersection observers, and dynamic effects
 */

class AnimationSystem {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupCounterAnimations();
    this.setupParallaxEffects();
    this.setupHoverEnhancements();
  }

  /**
   * Setup scroll-triggered animations using Intersection Observer
   */
  setupScrollAnimations() {
    const animationElements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
    );

    if (animationElements.length === 0) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class
          entry.target.classList.add('animate-in');
          
          // Handle staggered animations for child elements
          this.handleStaggeredAnimation(entry.target);
          
          // Unobserve to prevent re-triggering
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animationElements.forEach(element => {
      observer.observe(element);
    });
  }

  /**
   * Handle staggered animations for child elements
   */
  handleStaggeredAnimation(parent) {
    const children = parent.querySelectorAll('.stagger-child');
    
    children.forEach((child, index) => {
      setTimeout(() => {
        child.classList.add('animate-in');
      }, index * 100);
    });
  }

  /**
   * Setup animated counters for statistics
   */
  setupCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    if (counters.length === 0) return;

    const observerOptions = {
      threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }

  /**
   * Animate a counter element
   */
  animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + (element.hasAttribute('data-suffix') ? element.getAttribute('data-suffix') : '+');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + (element.hasAttribute('data-suffix') ? element.getAttribute('data-suffix') : '+');
      }
    }, 16);
  }

  /**
   * Setup parallax effects for background elements
   */
  setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  /**
   * Enhanced hover effects
   */
  setupHoverEnhancements() {
    // Add magnetic effect to buttons
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0, 0)';
      });
    });

    // Add ripple effect to buttons
    const rippleButtons = document.querySelectorAll('.ripple');
    
    rippleButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        this.createRippleEffect(e, button);
      });
    });
  }

  /**
   * Create ripple effect on button click
   */
  createRippleEffect(event, element) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.classList.add('ripple-effect');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      pointer-events: none;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      animation: ripple-animation 0.6s ease-out;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  /**
   * Add loading skeleton animations
   */
  setupSkeletonLoaders() {
    const skeletons = document.querySelectorAll('.skeleton-loader');
    
    skeletons.forEach(skeleton => {
      // Simulate content loading
      setTimeout(() => {
        skeleton.classList.remove('skeleton-loader');
        skeleton.classList.add('content-loaded');
      }, Math.random() * 2000 + 500);
    });
  }

  /**
   * Text typing animation
   */
  typeText(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    const typeTimer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, speed);
  }

  /**
   * Smooth scroll to element
   */
  scrollToElement(targetId, offset = 80) {
    const target = document.getElementById(targetId);
    if (target) {
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Add entrance animations with delays
   */
  addEntranceAnimations() {
    const elements = document.querySelectorAll('[data-animation-delay]');
    
    elements.forEach(element => {
      const delay = parseInt(element.getAttribute('data-animation-delay'));
      element.style.animationDelay = `${delay}ms`;
    });
  }

  /**
   * Performance-optimized scroll handler
   */
  setupPerformantScrolling() {
    let ticking = false;
    
    const updateScrollEffects = () => {
      const scrolled = window.pageYOffset;
      
      // Update navbar
      const navbar = document.getElementById('navbar');
      if (navbar) {
        navbar.classList.toggle('scrolled', scrolled > 100);
      }
      
      // Update scroll progress
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledPercentage = (winScroll / height) * 100;
        scrollProgress.style.width = scrolledPercentage + '%';
      }
      
      ticking = false;
    };
    
    const requestScrollUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  }
}

// CSS for ripple effect
const rippleCSS = `
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

// Add ripple CSS to head
if (!document.querySelector('#ripple-styles')) {
  const style = document.createElement('style');
  style.id = 'ripple-styles';
  style.textContent = rippleCSS;
  document.head.appendChild(style);
}

// Initialize animation system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new AnimationSystem();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AnimationSystem;
}
