const box = document.getElementById('box');

// List of elements to trigger hover effect
const hoverElements = document.querySelectorAll('.project-card-1, .project-card-2, .contact-link, .project-link svg');

const beeWidth = box.offsetWidth;
const beeHeight = box.offsetHeight;

let x = 135;
let y = 10;
const speed = 15;
let keysPressed = {};
let angle = 0;

function moveBox() {
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;

  let currentAngle = parseFloat(box.dataset.angle) || 0;
  let shortestAngle = ((angle - currentAngle + 540) % 360) - 180;
  let newAngle = currentAngle + shortestAngle;
  box.style.transform = `rotate(${newAngle}deg)`;
  box.dataset.angle = newAngle;

  checkHover(); // Check for hover
  checkScroll(); // Adjust scroll if bee nears the screen edge
}

// Function to check if the bee is hovering over an element
function checkHover() {
  hoverElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const beeRect = box.getBoundingClientRect();

    const isHovering =
      beeRect.left < rect.right &&
      beeRect.right > rect.left &&
      beeRect.top < rect.bottom &&
      beeRect.bottom > rect.top;

    if (isHovering) {
      element.classList.add('hovered');
    } else {
      element.classList.remove('hovered');
    }
  });
}

// Key event handlers
function onKeyDown(event) {
  keysPressed[event.key] = true;
}
function onKeyUp(event) {
  keysPressed[event.key] = false;
}

function updateMovement() {
  let movingHorizontally = false;
  let movingVertically = false;

  const minX = 10;
  const minY = 10;
  const maxX = document.documentElement.scrollWidth - beeWidth - 10;
  const maxY = document.documentElement.scrollHeight - beeHeight - 15;

  if (keysPressed['ArrowUp']) {
    y = Math.max(minY, y - speed);
    movingVertically = 'up';
  }
  if (keysPressed['ArrowDown']) {
    y = Math.min(maxY, y + speed);
    movingVertically = 'down';
  }
  if (keysPressed['ArrowLeft']) {
    x = Math.max(minX, x - speed);
    movingHorizontally = 'left';
  }
  if (keysPressed['ArrowRight']) {
    x = Math.min(maxX, x + speed);
    movingHorizontally = 'right';
  }

  if (movingHorizontally && movingVertically) {
    if (movingHorizontally === 'left' && movingVertically === 'up') angle = -45;
    if (movingHorizontally === 'left' && movingVertically === 'down') angle = -135;
    if (movingHorizontally === 'right' && movingVertically === 'up') angle = 45;
    if (movingHorizontally === 'right' && movingVertically === 'down') angle = 135;
  } else if (movingHorizontally) {
    angle = movingHorizontally === 'left' ? -90 : 90;
  } else if (movingVertically) {
    angle = movingVertically === 'up' ? 0 : 180;
  }

  moveBox();
  requestAnimationFrame(updateMovement);
}

function checkScroll() {
  const currentScroll = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const viewportBeeY = y - currentScroll;

  let newScrollY = currentScroll;

  if (viewportBeeY < 100) {
    newScrollY = Math.max(0, y - 100);
  } else if (viewportBeeY + beeHeight > window.innerHeight - 100) {
    newScrollY = Math.min(y + beeHeight - (window.innerHeight - 100), maxScroll);
  }

  if (Math.abs(newScrollY - currentScroll) > 1) {
    window.scrollTo(0, newScrollY);
  }
}

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

moveBox();
updateMovement();
