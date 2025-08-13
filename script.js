document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // stop form from submitting

    // Clear messages
    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('messageError').textContent = "";
    document.getElementById('successMsg').textContent = "";

    let isValid = true;

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate Name
    if (name === "") {
        document.getElementById('nameError').textContent = "Name is required.";
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById('emailError').textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Enter a valid email.";
        isValid = false;
    }

    // Validate Message
    if (message === "") {
        document.getElementById('messageError').textContent = "Message cannot be empty.";
        isValid = false;
    }

    // If valid
    if (isValid) {
        document.getElementById('successMsg').textContent = "✅ Message sent successfully!";
        document.getElementById('contactForm').reset();

        // Success animation
        document.getElementById('successMsg').style.animation = "fadeIn 0.5s ease-in-out";
    }
});
