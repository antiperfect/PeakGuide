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

    // Infinite Scroll for Product Grid
    const productGrid = document.querySelector('.product-grid-wrapper');

    // Clone nodes for infinite scrolling effect
    const cloneNodes = () => {
        const productItems = Array.from(productGrid.children);
        productItems.forEach(item => {
            let clone = item.cloneNode(true);
            productGrid.appendChild(clone); // Append clone to the end
        });
    };

    cloneNodes(); // Clone items to create an infinite scroll effect

    // Scroll animation
    const scrollSpeed = 2; // Adjust speed of scrolling (higher is faster)
    let positionX = 0;

    const scrollGrid = () => {
        positionX -= scrollSpeed;
        productGrid.style.transform = `translateX(${positionX}px)`;

        // Reset scroll position if end is reached
        if (Math.abs(positionX) >= productGrid.scrollWidth / 4) {
            positionX = 0;
        }

        requestAnimationFrame(scrollGrid); // Continue animation
    };

    // Start infinite scroll
    scrollGrid();
});
