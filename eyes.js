
// Eye and brow movement
document.addEventListener('mousemove', (event) => {
    const irises = document.querySelectorAll('.iris');
    const balls = document.querySelectorAll('.eye');
    const brows = document.querySelectorAll('.brow-one, .brow-two');

    // if (balls.length !== 2) return; // Ensure we have exactly two eyes

    // Get bounding rectangles
    const ball1Rect = balls[0].getBoundingClientRect();
    const ball2Rect = balls[1].getBoundingClientRect();

    // Calculate midpoint between the two eyes
    const centerX = ((ball1Rect.left + ball2Rect.right)/2);
    const centerY = ((ball1Rect.top + ball2Rect.bottom)/2);

    // Cursor position relative to the midpoint
    const cursorX = event.clientX - centerX;
    const cursorY = event.clientY - centerY;

    const distanceFromCenter = Math.sqrt(cursorX ** 2 + cursorY ** 2);

    const maxDistance = Math.sqrt((window.innerWidth - centerX) ** 2 + (window.innerHeight - centerY) ** 2);

    const ratio = 1.25/(3 + 50*distanceFromCenter/(maxDistance));
    const rotation = ratio * (180 / Math.PI); // Convert radians to degrees

    const maxMultiplier = 1.2; // Maximum rotation multiplier

    brows.forEach((brow, index) => {
        // Alternate rotation direction for each brow
        const rotationDirection = index === 0 ? -1 : 1;
        brow.style.transform = `rotateZ(${-Math.abs(rotation) * maxMultiplier * rotationDirection}deg)`;
    });

    // Calculate movement direction based on the midpoint
    const angle = Math.atan2(cursorY, cursorX);

    irises.forEach((iris) => {
        const ballRect = iris.parentElement.getBoundingClientRect(); // Get corresponding eye
        const maxDistance = ballRect.width / 2 - iris.offsetWidth / 1.5;
        const distance = Math.min(Math.sqrt(cursorX ** 2 + cursorY ** 2), maxDistance);

        // Apply transformation relative to the midpoint
        const translateX = Math.cos(angle) * distance;
        const translateY = Math.sin(angle) * distance;

        // const skewX = Math.sin(angle) * 15; // Example skew effect
        // const skewY = Math.cos(angle) * -10; // Example skew effect
        const scale = 1 - (distance / maxDistance) * .05; // Scale slightly based on distance


        iris.style.transform = 
        `
            translate(${translateX}px, ${translateY}px)
            rotate(${angle}rad)
            scale(${scale})
        `;

    });
});

// Try to add the skews
// skewX(${skewX}deg)
// skewY(${skewY}deg)

