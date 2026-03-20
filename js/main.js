// Tab switching
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Update tab buttons
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update panels
        const target = tab.dataset.tab;
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        document.getElementById(target).classList.add('active');

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Scroll progress bar
const progress = document.createElement('div');
progress.style.cssText = 'position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,#3b82f6,#a855f7);z-index:999;transition:width 0.15s';
document.body.appendChild(progress);

window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = h > 0 ? (window.scrollY / h * 100) + '%' : '0%';
});

// Animate elements on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.phase-card, .vision-card, .tool-card, .t-frame, .t-summary').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(el);
});
