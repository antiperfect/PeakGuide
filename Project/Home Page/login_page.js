// Toggle between sign-up and sign-in forms
let container = document.getElementById('container');

toggle = () => {
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
};

setTimeout(() => {
    container.classList.add('sign-in');
}, 200);

// Handle Sign-Up
document.querySelector('#signup-button').addEventListener('click', async function () {
    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    const confirmPassword = document.querySelector('#signup-confirm-password').value.trim();

    if (!username || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    if (data.message === 'User created successfully') {
        alert('Sign-up successful!');
        toggle();  // Switch to sign-in
    } else {
        alert(data.message);  // Show error message
    }
});

// Handle Sign-In
document.querySelector('#signin-button').addEventListener('click', async function () {
    const username = document.querySelector('#signin-username').value.trim();
    const password = document.querySelector('#signin-password').value.trim();

    if (!username || !password) {
        alert('Please enter your username and password.');
        return;
    }

    const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (data.token) {
        // Store the JWT token in localStorage and redirect to the home page
        localStorage.setItem('authToken', data.token);
        window.location.href = 'Home_page_user.html';  // Redirect to home page
    } else {
        alert(data.message);  // Show error message
    }
});
