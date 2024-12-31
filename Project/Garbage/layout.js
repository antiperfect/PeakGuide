document.addEventListener('DOMContentLoaded', function() {
    function adjustImageSizes() {
        const imagesRight = document.querySelectorAll('.images-right img');
        const imagesLeft = document.querySelectorAll('.images-left img');
        const imagesS = document.querySelectorAll('.images-s img');

        imagesRight.forEach(img => {
            img.style.width = '100%'; // Adjust the width as per your requirement
            img.style.height = 'auto';
        });

        imagesLeft.forEach(img => {
            img.style.width = '100%'; // Adjust the width as per your requirement
            img.style.height = 'auto';
        });

        imagesS.forEach(img => {
            img.style.width = '100%'; // Adjust the width as per your requirement
            img.style.height = 'auto';
        });
    }

    adjustImageSizes(); // Initial adjustment

    window.addEventListener('resize', function() {
        adjustImageSizes(); // Adjust sizes on window resize
    });

    // Functionality for the search button
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', function() {
        const searchInput = document.querySelector('.search-bar input').value;
        window.location.href = 'search.html?query=' + encodeURIComponent(searchInput);
    });

    // Functionality for the register button
    const registerButton = document.querySelector('.register');
    registerButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'registration.html';
    });
});
