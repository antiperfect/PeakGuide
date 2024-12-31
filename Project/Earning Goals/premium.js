document.addEventListener('DOMContentLoaded', () => {
    const progressCircles = document.querySelectorAll('.progress-circle');
    
    progressCircles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        updateProgressCircle(circle, percentage);
    });

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });

    function updateProgress() {
        const section = this.closest('section');
        const checkboxes = section.querySelectorAll('input[type="checkbox"]');
        const checkedCount = section.querySelectorAll('input[type="checkbox"]:checked').length;
        const percentage = (checkedCount / checkboxes.length) * 100;
        const progressCircle = section.querySelector('.progress-circle');

        updateProgressCircle(progressCircle, percentage);
    }

    function updateProgressCircle(circle, percentage) {
        const radius = circle.querySelector('circle').r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;
        circle.querySelector('.progress').style.strokeDashoffset = offset;
        circle.querySelector('.percentage').textContent = `${Math.round(percentage)}%`;
    }
});
