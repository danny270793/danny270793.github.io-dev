import { useState, useEffect } from "preact/hooks";
import "../libraries/arrays";
import type Certification from "../libraries/me/knowledges/certification";

export default function Certifications({
  certifications,
  background,
  order,
  parallaxHeight = "25vh",
}) {
  const [category, setCategory] = useState("stared");
  const [animationInitialized, setAnimationInitialized] = useState(false);

  const onCategoryClicked = (selectedCategory: string) => {
    // Add fade-out animation
    const currentVisible = document.querySelector('.certification-category-active');
    if (currentVisible) {
      (currentVisible as HTMLElement).style.opacity = '0';
      (currentVisible as HTMLElement).style.transform = 'translateY(20px)';
    }

    setTimeout(() => {
      setCategory(selectedCategory);
    }, 300);
  };

  // Initialize animations on component mount
  useEffect(() => {
    if (!animationInitialized) {
      initializeAnimations();
      setAnimationInitialized(true);
    }
  }, [animationInitialized]);

  // Animation system
  const initializeAnimations = () => {
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
    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach(element => {
      observer.observe(element);
    });

    // Add smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offsetTop = (target as HTMLElement).offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    console.log('Certifications TSX animations initialized! 🏆');
  };

  // Animate counters
  const animateCounters = (container) => {
    const counters = container.querySelectorAll('[data-count]');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current) + suffix;
        }
      }, 16);
    });
  };

  return (
    <>
      {/* Enhanced Hero Section */}
      <section class="hero-modern parallax header" style={`background-image: url("${background.src}")`}>
        <div class="hero-overlay"></div>
        
        {/* Floating Certification Icons */}
        <div class="floating-elements">
          <div class="floating-icon animate-float" style="top: 15%; left: 8%; animation-delay: 0s;">
            <i class="fas fa-certificate"></i>
          </div>
          <div class="floating-icon animate-float" style="top: 70%; right: 12%; animation-delay: 2s;">
            <i class="fas fa-award"></i>
          </div>
          <div class="floating-icon animate-float" style="bottom: 25%; left: 15%; animation-delay: 4s;">
            <i class="fas fa-medal"></i>
          </div>
          <div class="floating-icon animate-float" style="top: 35%; right: 20%; animation-delay: 6s;">
            <i class="fas fa-star"></i>
          </div>
          <div class="floating-icon animate-float" style="top: 60%; left: 25%; animation-delay: 8s;">
            <i class="fas fa-trophy"></i>
          </div>
        </div>

        <div class="hero-content animate-fade-in-up">
          <h1 class="hero-title animate-fade-in-up animate-delay-200">
            Professional Certifications
          </h1>
          <p class="hero-subtitle animate-fade-in-up animate-delay-500">
            Industry Recognition & Continuous Professional Development
          </p>
          <p class="hero-description animate-fade-in-up animate-delay-700">
            Demonstrating expertise through {certifications.length}+ professional certifications across cloud, development, and emerging technologies
          </p>
          
          <div class="hero-actions animate-fade-in-up animate-delay-1000">
            <a href="#certifications-content" class="btn-modern btn-primary">
              <i class="fas fa-certificate"></i>
              Explore Certifications
            </a>
            <a href="#technologies" class="btn-modern btn-outline">
              <i class="fas fa-cogs"></i>
              View Technologies
            </a>
          </div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <div class="scroll-indicator animate-bounce">
          <p>Scroll to explore</p>
          <i class="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Beautiful Certifications Section */}
      <section id="certifications-content" class="certifications-section">
        <div class="container">
          {/* Section Header */}
          <div class="section-header scroll-animate">
            <h2 class="section-title">Professional Certifications</h2>
            <p class="section-subtitle">
              Industry-recognized credentials demonstrating expertise across cloud platforms, development frameworks, and emerging technologies
            </p>
          </div>
          
          {/* Modern Filter System */}
          <div class="certification-filters scroll-animate">
            <div
              class={`filter-btn ${category === "stared" ? "active" : ""}`}
              onClick={() => onCategoryClicked("stared")}
            >
              <span class="filter-count">
                {certifications.filter((certification: Certification) => certification.stared).length}
              </span>
              <span class="filter-label">Starred Certifications</span>
            </div>
            <div
              class={`filter-btn ${category === "all" ? "active" : ""}`}
              onClick={() => onCategoryClicked("all")}
            >
              <span class="filter-count">{certifications.length}</span>
              <span class="filter-label">All Certifications</span>
            </div>
            {[
              ...new Set(
                certifications
                  .map((certification: Certification) => certification.category)
                  .sort((a: string, b: string) => order[a] - order[b]),
              ),
            ].map((eachCategory: string) => (
              <div
                class={`filter-btn ${category === eachCategory ? "active" : ""}`}
                onClick={() => onCategoryClicked(eachCategory)}
              >
                <span class="filter-count">
                  {certifications.filter((certification: Certification) => certification.category === eachCategory).length}
                </span>
                <span class="filter-label">{eachCategory}</span>
              </div>
            ))}
          </div>
          
          {/* Certification Grid */}
          <div class="certification-grid scroll-animate">
            <div class={`certification-category certification-category-active`}>
              <div class="category-header">
                <h3 class="category-title text-gradient">
                  {category === "all" 
                    ? "All Professional Certifications"
                    : category === "stared"
                    ? "Starred Certifications"  
                    : category
                  }
                </h3>
                <div class="category-count-badge">
                  {certifications.filter((certification: Certification) =>
                    category === "all"
                      ? true
                      : category === "stared"
                        ? certification.stared
                        : certification.category === category,
                  ).length} certifications
                </div>
              </div>
              
              <div class="certification-cards">
                {certifications
                  .filter((certification: Certification) =>
                    category === "all"
                      ? true
                      : category === "stared"
                        ? certification.stared
                        : certification.category === category,
                  )
                  .sort((a: Certification, b: Certification) => {
                    const first = (order[a.category] + 1) * 10 + a.order;
                    const second = (order[b.category] + 1) * 10 + b.order;
                    const result = first - second;
                    return result;
                  })
                  .chunk(3)
                  .map((subCertifications: Certification[], rowIndex) => (
                    <div class="certification-row">
                      {subCertifications.map((certification: Certification, index) => (
                        <div class={`certification-wrapper scroll-animate animate-delay-${index * 100}`}>
                          {/* Mobile View */}
                          <div class="mobile-cert">
                            <div class="w3-row w3-hover-shadow category-item modern-cert-mobile">
                              <a href={certification.link} target="_blank">
                                <div class="w3-col" style="width: 150px;">
                                  <img
                                    src={certification.image.src}
                                    class="w3-padding cert-image"
                                    alt={certification.name}
                                    style="width: 100%; height: auto;"
                                  />
                                </div>
                                <div class="w3-rest cert-content">
                                  <h5>
                                    <strong>
                                      {certification.code === ""
                                        ? certification.name
                                        : `(${certification.code}) - ${certification.name}`}
                                    </strong>
                                  </h5>
                                  <p>{certification.brand}</p>
                                </div>
                              </a>
                            </div>
                          </div>

                          {/* Desktop View */}
                          <div class="desktop-cert">
                            <div class="w3-third w3-center w3-padding">
                              <div class="modern-cert-card w3-hover-shadow w3-padding">
                                <a href={certification.link} target="_blank">
                                  <img
                                    src={certification.image.src}
                                    class="w3-center cert-image"
                                    alt={certification.name}
                                    style="width: 100%; height: auto;"
                                  />
                                  <h5>
                                    <strong>
                                      {certification.code === ""
                                        ? certification.name
                                        : `(${certification.code}) - ${certification.name}`}
                                    </strong>
                                  </h5>
                                  <p>{certification.brand}</p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          
          {/* Certification Summary */}
          <div class="certification-summary scroll-animate">
            <div class="summary-card modern-card">
              <div class="summary-header">
                <div class="summary-icon">
                  <i class="fas fa-chart-line"></i>
                </div>
                <h3 class="summary-title">Certification Journey</h3>
              </div>
              
              <div class="summary-content">
                <p>
                  My commitment to continuous learning is demonstrated through {certifications.length}+ professional certifications 
                  spanning cloud platforms, development methodologies, and emerging technologies. These credentials validate 
                  hands-on expertise and dedication to staying current with industry best practices.
                </p>
                
                <div class="summary-stats">
                  <div class="stat-item">
                    <div class="stat-icon">
                      <i class="fas fa-certificate"></i>
                    </div>
                    <div class="stat-content">
                      <span class="stat-number" data-count={certifications.length}>0</span>
                      <span class="stat-label">Professional Certifications</span>
                    </div>
                  </div>
                  
                  <div class="stat-item">
                    <div class="stat-icon">
                      <i class="fas fa-layer-group"></i>
                    </div>
                    <div class="stat-content">
                      <span class="stat-number" data-count={[...new Set(certifications.map(c => c.category))].length}>0</span>
                      <span class="stat-label">Technology Categories</span>
                    </div>
                  </div>
                  
                  <div class="stat-item">
                    <div class="stat-icon">
                      <i class="fas fa-trophy"></i>
                    </div>
                    <div class="stat-content">
                      <span class="stat-number" data-count="5" data-suffix="+">0</span>
                      <span class="stat-label">Years Learning</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="summary-actions">
                <a href="#technologies" class="btn-modern btn-primary">
                  <i class="fas fa-cogs"></i>
                  View Technical Skills
                </a>
                <a href="#projects" class="btn-modern btn-secondary">
                  <i class="fas fa-rocket"></i>
                  See Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
