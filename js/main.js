// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = 80; // Nav height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    });
});

// Scroll Progress Indicator
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    let progressBar = document.getElementById('scrollProgress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'scrollProgress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            z-index: 9999;
            transition: width 0.2s;
        `;
        document.body.appendChild(progressBar);
    }
    progressBar.style.width = scrolled + "%";
}

window.addEventListener('scroll', updateScrollProgress);

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.phase-card, .problem-card, .solution-card, .guarantee-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// CTA Button Pulse Animation
const ctaButton = document.querySelector('.btn-mega');
if (ctaButton) {
    setInterval(() => {
        ctaButton.style.animation = 'none';
        setTimeout(() => {
            ctaButton.style.animation = 'pulse 1s ease-in-out';
        }, 10);
    }, 5000);
}

// Add pulse animation to styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(style);

// Track Payment Button Clicks
document.querySelectorAll('a[href*="stripe.com"]').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Payment button clicked');
        // Add analytics tracking here if needed
    });
});

// Lazy Load Images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Print console art
console.log('%c🤖 DCB Office AI Automation', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
console.log('%cBuilt by Automatrix (Lucas + Gustavo)', 'font-size: 12px; color: #a1a1aa;');
console.log('%cQuestions? t.me/lucasautomatrix', 'font-size: 12px; color: #22c55e;');
