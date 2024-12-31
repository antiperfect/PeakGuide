document.addEventListener('DOMContentLoaded', function () {
    

    // Parallax effect
    window.addEventListener('scroll', function() {
        let scrollPosition = window.pageYOffset;
        document.querySelectorAll('.parallax').forEach(function(element) {
            let speed = element.getAttribute('data-speed');
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    });

    // Initial console log
    console.log('PeakGuide');

    document.addEventListener('DOMContentLoaded', function() {
        const gridWrapper = document.querySelector('.product-grid-wrapper');
        const items = gridWrapper.innerHTML; // Store initial items
        gridWrapper.innerHTML += items; // Duplicate items for infinite scroll effect
    
        // Optional: Adjust speed based on the number of items or length of the scroll
        const speed = 30; // Seconds
        gridWrapper.style.animationDuration = `${speed}s`;
    });
    
});
