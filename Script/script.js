// import 'bootstrap/dist/css/bootstrap.min.css';

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Get all buttons by their IDs
    const buttons = {
        bio: document.getElementById("Bio_id"),
        resume: document.getElementById("Resume_id"),
        projects: document.getElementById("Projects_id"),
        contact: document.getElementById("Contact_id")
    };

    // Initialize EmailJS
    (function() {
        emailjs.init({
            publicKey: "ieDMdAoOtPvda6Sua",
        });
    })();

    // Handle form submission
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault(); 

        // Get form data
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const subject = document.querySelector('#subject').value.trim();
        const message = document.querySelector('#message').value.trim();

        // Validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Send email using EmailJS
        emailjs.sendForm('service_ldvw85w', 'template_j25lzze', this)
            .then(() => {
                alert('Email sent successfully!'); // Notify user of success
                document.querySelector('.contact-form').reset(); // Clear form fields
            }, (error) => {
                alert('Failed to send email. Please try again later.'); // Notify user of failure
                console.log('FAILED...', error);
            });
    });

    // Add event listeners to buttons
    Object.keys(buttons).forEach(key => {
        if (buttons[key]) {
            buttons[key].addEventListener("click", function() {
                window.location.href = `${key}.html`; // Navigate to the corresponding page
            });
        }
    });
});
