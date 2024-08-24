javascript
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let valid = true;

    // Validate username
    if (username.length < 3) {
        showError('usernameError', 'Username must be at least 3 characters long.');
        valid = false;
    }

    // Validate email
    if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address.');
        valid = false;
    }

    // Validate password
    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        valid = false;
    }

    // If valid, submit the form (or perform any other action)
    if (valid) {
        alert('Registration successful!');
        // Here you could send the data to a server, etc.
    }
});

// Function to show error messages
function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

// Function to clear error messages
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.innerText = '');
}

// Function to validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

