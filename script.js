// Language Switching Functionality
const enBtn = document.getElementById('en-btn');
const frBtn = document.getElementById('fr-btn');
const body = document.body;

if (enBtn && frBtn) {
    enBtn.addEventListener('click', function() {
        body.classList.remove('fr-active');
        enBtn.classList.add('active');
        frBtn.classList.remove('active');
    });

    frBtn.addEventListener('click', function() {
        body.classList.add('fr-active');
        frBtn.classList.add('active');
        enBtn.classList.remove('active');
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetPath = this.getAttribute('href');
        
        // If it's an external link or a different domain, open it normally
        if (targetPath.startsWith('http')) {
            window.open(targetPath, '_blank');
            return;
        }
        
        // For internal links, navigate to the page
        window.location.href = targetPath;
    });
});

// Update Active Navigation Link Based on Current Page
function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.endsWith(linkPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call the function when the page loads
window.addEventListener('load', updateActiveNavLink);

// Add Animation to Investment Areas Cards
const areaCards = document.querySelectorAll('.area-card, .focus-card');

areaCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Add Scroll Animation for Banner Sections
const banners = document.querySelectorAll('.banner, .about-banner, .sustainability-banner');

function checkBannerVisibility() {
    banners.forEach(banner => {
        const bannerTop = banner.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (bannerTop < windowHeight * 0.8) {
            banner.style.opacity = '1';
            banner.style.transform = 'translateY(0)';
        }
    });
}

// Initialize banner styles
window.addEventListener('load', function() {
    banners.forEach(banner => {
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(20px)';
        banner.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check visibility after a short delay to ensure the page has loaded
    setTimeout(checkBannerVisibility, 100);
});

// Check banner visibility on scroll
window.addEventListener('scroll', checkBannerVisibility);

// Responsive Navigation Toggle (for mobile devices)
function handleMobileNavigation() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 768) {
        // Mobile view: stack elements vertically
        if (nav) {
            nav.style.flexDirection = 'column';
            nav.style.alignItems = 'center';
        }
        
        if (navLinks) {
            navLinks.style.flexWrap = 'wrap';
            navLinks.style.justifyContent = 'center';
        }
    } else {
        // Desktop view: horizontal layout
        if (nav) {
            nav.style.flexDirection = 'row';
            nav.style.alignItems = 'center';
        }
        
        if (navLinks) {
            navLinks.style.flexWrap = 'nowrap';
            navLinks.style.justifyContent = 'flex-start';
        }
    }
}

// Call on load and resize
window.addEventListener('load', handleMobileNavigation);
window.addEventListener('resize', handleMobileNavigation);