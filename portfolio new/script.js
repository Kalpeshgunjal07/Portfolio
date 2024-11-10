document.addEventListener("DOMContentLoaded", function() {
    const portfolioIcon = document.getElementById("portfolioIcon");

    portfolioIcon.addEventListener("click", function() {
        location.reload();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.about, .skills-section, .projects, .contact-section, .footer');

    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});




