document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Remove the class when the element leaves the viewport
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.01 // Trigger when 1% of the element is visible
    });

    elements.forEach(element => observer.observe(element));
});
