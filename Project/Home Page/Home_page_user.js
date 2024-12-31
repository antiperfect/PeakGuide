document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    var modal = document.getElementById("image-modal");
    var img = document.getElementById("illustration-image");
    var modalImg = document.getElementById("modal-img");
    var span = document.getElementsByClassName("close")[0];

    if (img) {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    }

    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    

    // Scroll to section functionality
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href=')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax Scrolling Effect
    window.addEventListener('scroll', function() {
        let scrollPosition = window.pageYOffset;
        document.querySelectorAll('.parallax').forEach(function(element) {
            let speed = parseFloat(element.getAttribute('data-speed'));
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    });

    // Trigger animations on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.banner .text-content, .banner .illustration, footer');
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight - 100) {
                element.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial call to animate elements on page load

    console.log('CareerUp');
});
// Ensure this code is in a <script> tag or an external JS file linked to your home page.
document.addEventListener("DOMContentLoaded", function() {
    // Check if the URL contains a hash
    if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const userNameDisplay = document.getElementById('userNameDisplay');
    const username = localStorage.getItem('username');

    if (username) {
        userNameDisplay.textContent = username;  // Display the username
    } else {
        userNameDisplay.textContent = 'Guest';  // Fallback in case no username is found
    }
});