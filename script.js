
// Sound
const contactLinks = document.querySelectorAll(".nav-links a, .contact-btn, button[type='submit']");
const hoverSound = document.getElementById("hover-sound");

hoverSound.volume = 0.3;

contactLinks.forEach(link => {
    link.addEventListener("click", () => {
        hoverSound.currentTime = 0; // Restart sound on each hover
        hoverSound.play();
    });
});


// Scroll ring
const statusElement = document.querySelector('.status');
const bar = new ProgressBar.Circle(statusElement, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 100, // Keep this small for smooth transitions
    color: '#ffffff',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});

// Throttle function to limit how often the progress bar updates
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function updateProgressBar() {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollPercent = scrollTop / scrollHeight;

    // Use `set` instead of `animate` for instant updates
    bar.set(scrollPercent);
}

// Throttle the scroll event to update every 16ms (approx. 60fps)
window.addEventListener('scroll', throttle(updateProgressBar, 16));




// Animations on scroll - fade in and slide
document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const aboutSection = document.getElementById("about");
    const projectsSection = document.getElementById("projects");
    const skillsContent = document.querySelector(".skills-container");
    const frontend = document.getElementById("frontend");
    const tools = document.getElementById("tools");

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const target = entry.target;

                if (target === frontend || target === tools) {
                    // If either frontend or tools is visible, activate both
                    if (entry.isIntersecting) {
                        frontend.classList.add("animate-in");
                        frontend.classList.remove("animate-out");
                        tools.classList.add("animate-in");
                        tools.classList.remove("animate-out");
                    } else {
                        frontend.classList.remove("animate-in");
                        frontend.classList.add("animate-out");
                        tools.classList.remove("animate-in");
                        tools.classList.add("animate-out");
                    }
                } else {
                    // Default animation for other sections
                    if (entry.isIntersecting) {
                        target.classList.add("animate-in");
                        target.classList.remove("animate-out");
                    } else {
                        target.classList.remove("animate-in");
                        target.classList.add("animate-out");
                    }
                }
            });
        },
        {
            threshold: 0.3, // Trigger when 30% of the element is visible
        }
    );

    // Start observing elements
    [aboutSection, projectsSection, skillsContent, frontend, tools].forEach((el) => {
        if (el) observer.observe(el);
    });
});


// Theme
const theme = document.querySelector('.theme');
const toggleTheme = document.querySelector('.toggle-theme');
const toggleCircle = document.querySelector('.circle');
const themeChange = document.querySelector('.theme-change');
const root = document.documentElement;

const status = document.querySelector('.status');

let isClickable = true;
theme.addEventListener('click', () => {
    if (!isClickable) return; // Exit early if not clickable

    theme.classList.add('no-hover');

    hoverSound.currentTime = 0; // Restart sound on each click
    hoverSound.play();

    isClickable = false; // Disable further clicks
    setTimeout(() => isClickable = true, 2000); // Re-enable after 2 seconds

    toggleTheme.classList.toggle('active');
    toggleCircle.classList.toggle('active');

    // Remove previous classes and reset animation
    themeChange.classList.remove('active', 'active2');
    void themeChange.offsetWidth; // Trigger reflow

    // Determine which class to add
    const newClass = toggleTheme.classList.contains('active') ? 'active' : 'active2';
    themeChange.classList.add(newClass);

    setTimeout(() => {
        if (toggleTheme.classList.contains('active')) {
            // Set new colors for light mode
            root.style.setProperty('--primary-color', '#141924');
            root.style.setProperty('--secondary-color', '#1b212e');
            root.style.setProperty('--tertiary-color', '#dbcc74');
            root.style.setProperty('--quaternary-color', '#faecaf');

            root.style.setProperty('--canvas-bg', '#ffffff');
            root.style.setProperty('--theme-base', '#000000');
            root.style.setProperty('--navbar-bg', '#ffdf5f');
            root.style.setProperty('--nav-color', '#000000');
            root.style.setProperty('--nav-hover', '#a24e2c');

            root.style.setProperty('--particle-color', '#ffc830');

            status.classList.toggle('active');

        } else {
            // Set back to dark mode colors
            root.style.setProperty('--primary-color', '#051633');
            root.style.setProperty('--secondary-color', '#3C3C3C');
            root.style.setProperty('--tertiary-color', '#B4B4B4');
            root.style.setProperty('--quaternary-color', '#E5E5E5');

            root.style.setProperty('--canvas-bg', '#051633');
            root.style.setProperty('--theme-base', '#ffffff');
            root.style.setProperty('--navbar-bg', '#12101d');
            root.style.setProperty('--nav-color', '#E5E5E5');
            root.style.setProperty('--nav-hover', '#E5E5E5');

            root.style.setProperty('--particle-color', '#E5E5E5');

            status.classList.toggle('active');

        }


    }, 700);

    // Remove class after animation completes
    themeChange.addEventListener('transitionend', () => {
        themeChange.classList.remove('active', 'active2');
    }, { once: true });

    setTimeout(() => {
        isClickable = true;
        theme.classList.remove('no-hover'); // Re-enable hover
    }, 2000);
    
});



// Time
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.querySelector('.time').textContent = `${hours} ${minutes}`;
  }
  
  // Update time immediately and every minute
  updateTime();
  setInterval(updateTime, 1000); // Update every minute
;


// Navbar toggle
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const sideStage = document.querySelector('.stage-3');

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navToggle.classList.toggle('active');
    sideStage.classList.toggle('active');

});

document.addEventListener("click", (event) => {
    if (!navToggle.contains(event.target) && !sideStage.contains(event.target) && navbar.classList.contains("active")) {
        navbar.classList.remove('active');
        navToggle.classList.remove("active");
        sideStage.classList.remove("active");
    }
});

function toggleNav() {
    const navToggle = document.querySelector('.nav-toggle');

    if (window.innerWidth <= 1250) {
        navToggle.classList.add('active'); // Force menu to 'X' state
    } else {
        navToggle.classList.remove('active'); // Reset if screen size increases
    }
}

// Run when the page loads
window.addEventListener('load', toggleNav);

// Run when the window resizes
window.addEventListener('resize', toggleNav);
