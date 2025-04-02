const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let timeout; // Variable for timeout reference

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Instantly update the small dot
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Delay the outline movement
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        cursorOutline.animate(
            { left: `${posX}px`, top: `${posY}px` },
            { duration: 800, fill: "forwards" }
        );
    }, 1); // Adjust delay time
});
