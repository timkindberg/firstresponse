/**
 * First Response Tree Service - Static Site JavaScript
 */

(function() {
  'use strict';

  // ============================================
  // DOM Ready Handler
  // ============================================
  document.addEventListener('DOMContentLoaded', function() {
    initMobileNavigation();
    initSmoothScrolling();
    initLightbox();
    initScrollAnimations();
    initGalleryDeck();
  });

  // ============================================
  // Mobile Navigation
  // ============================================
  function initMobileNavigation() {
    const menuButton = document.getElementById('nav-mobile-btn');
    const mobileMenu = document.getElementById('nav-mobile');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileLinks = document.querySelectorAll('.nav-mobile-link');
    const mobileButtons = document.querySelectorAll('.nav-mobile-buttons a, .nav-mobile-buttons button');

    if (!menuButton || !mobileMenu) return;

    let isOpen = false;

    function toggleMenu() {
      isOpen = !isOpen;
      
      if (isOpen) {
        mobileMenu.classList.add('active');
        document.body.classList.add('body-no-scroll');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('body-no-scroll');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    }

    function closeMenu() {
      if (isOpen) {
        isOpen = false;
        mobileMenu.classList.remove('active');
        document.body.classList.remove('body-no-scroll');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    }

    menuButton.addEventListener('click', toggleMenu);

    // Close menu when clicking links
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        setTimeout(closeMenu, 100);
      });
    });

    mobileButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (btn.getAttribute('href') && btn.getAttribute('href').startsWith('#')) {
          setTimeout(closeMenu, 100);
        }
      });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    });
  }

  // ============================================
  // Smooth Scrolling
  // ============================================
  function initSmoothScrolling() {
    const navHeight = 80; // Account for fixed nav

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          const targetPosition = targetElement.offsetTop - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ============================================
  // Lightbox
  // ============================================
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxDescription = document.getElementById('lightbox-description');
    
    if (!lightbox) return;

    const galleryImages = [];
    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    // Collect all gallery images
    document.querySelectorAll('[data-lightbox]').forEach(function(item, index) {
      galleryImages.push({
        src: item.getAttribute('data-lightbox'),
        title: item.getAttribute('data-title') || 'Image ' + (index + 1),
        description: item.getAttribute('data-description') || ''
      });

      item.addEventListener('click', function() {
        openLightbox(index);
      });
    });

    function openLightbox(index) {
      currentIndex = index;
      updateLightbox();
      lightbox.classList.add('active');
      document.body.classList.add('body-no-scroll');
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.classList.remove('body-no-scroll');
    }

    function updateLightbox() {
      const image = galleryImages[currentIndex];
      lightboxImage.src = image.src;
      lightboxImage.alt = image.title;
      lightboxTitle.textContent = image.title;
      lightboxCounter.textContent = (currentIndex + 1) + ' of ' + galleryImages.length;
      
      if (lightboxDescription) {
        lightboxDescription.textContent = image.description;
        lightboxDescription.style.display = image.description ? 'block' : 'none';
      }

      // Hide nav buttons if only one image
      if (galleryImages.length <= 1) {
        lightboxPrev.style.display = 'none';
        lightboxNext.style.display = 'none';
      } else {
        lightboxPrev.style.display = 'block';
        lightboxNext.style.display = 'block';
      }
    }

    function goToPrev() {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      updateLightbox();
    }

    function goToNext() {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      updateLightbox();
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', function(e) {
      e.stopPropagation();
      goToPrev();
    });
    lightboxNext.addEventListener('click', function(e) {
      e.stopPropagation();
      goToNext();
    });

    // Close on backdrop click
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('active')) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          goToPrev();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    });

    // Touch/swipe support
    lightbox.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          goToNext(); // Swipe left
        } else {
          goToPrev(); // Swipe right
        }
      }
    }
  }

  // ============================================
  // Scroll Animations (IntersectionObserver)
  // ============================================
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-scale, .animate-fade-left, .animate-fade-right');
    
    if (animatedElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally stop observing after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(function(element) {
      observer.observe(element);
    });
  }

  // ============================================
  // Gallery Deck Layout
  // ============================================
  function initGalleryDeck() {
    const deckItems = document.querySelectorAll('.gallery-deck-item');
    
    if (deckItems.length === 0) return;

    deckItems.forEach(function(item, index) {
      const scale = index === 0 ? 1.5 : Math.max(0.3, 1.5 - (index * 0.2));
      const translateZ = -index * 50;
      const leftPercent = 22 + (index * 10);
      const overlayOpacity = Math.min(0.7, index * 0.15);
      const zIndex = deckItems.length - index;

      item.style.transform = 'translateZ(' + translateZ + 'px) scale(' + scale + ')';
      item.style.zIndex = zIndex;
      item.style.left = leftPercent + '%';

      const overlay = item.querySelector('.gallery-deck-overlay');
      if (overlay) {
        overlay.style.opacity = overlayOpacity;
      }
    });
  }

})();

