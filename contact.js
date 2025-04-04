document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.querySelector(".contact-btn");
    const contactCard = document.querySelector(".contact-card");

    // Toggle the contact card visibility when the "Contact Me" button is clicked
    contactBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent the event from bubbling and closing immediately
        contactCard.classList.toggle("active");
        contactBtn.classList.toggle("active");
    });

    // Close the contact card if you click anywhere outside of it
    document.addEventListener("click", (event) => {
        if (!contactCard.contains(event.target) && !contactBtn.contains(event.target)) {
            contactCard.classList.remove("active");
            contactBtn.classList.remove("active");
        }
    });

    // Prevent clicks inside the contact card from closing it
    contactCard.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent the click from propagating to the document listener
    });
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