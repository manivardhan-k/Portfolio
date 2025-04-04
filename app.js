// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    const container = document.querySelector('.nav-links');
    const indicator = document.querySelector('.active-indicator');

    // Initialize indicator
    function updateIndicator(link) {
        const topPosition = link.offsetTop + (link.offsetHeight / 2) - (indicator.offsetHeight / 2);
        indicator.style.cssText = `
            top: ${topPosition}px;
            opacity: 1;
        `;
    }

    // Combined click handler
    function handleLinkClick(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        updateIndicator(this);
        target.scrollIntoView({ behavior: 'smooth' });
    }

    // Enhanced scroll handler
    function setActiveLink() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight/3)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href').slice(1);
            link.classList.remove('active');
            if (href === currentSection) {
                link.classList.add('active');
                updateIndicator(link);
            }
        });
    }

    // Event listeners
    navLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // Throttled scroll handler
    let isScrolling;
    window.addEventListener('scroll', () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(setActiveLink, 100);
    });

    // Initial setup
    setActiveLink();
});


// Form validation 
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.length < 2) { 
        alert('Please enter a valid name');
        return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert('Please enter a valid email address');
        return;
    }

    if (message.length < 10) {
        alert('Message must be at least 10 characters long');
        return;
    }

    alert('Thanks for your message! I\'ll get back to you soon.');
    this.reset();
});