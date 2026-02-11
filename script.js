// DARK MODE TOGGLE
const toggleBtn = document.getElementById("darkModeToggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}

// SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// SIMPLE FADE IN ANIMATION
const boxes = document.querySelectorAll(".box");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

boxes.forEach(box => {
    box.style.opacity = 0;
    box.style.transform = "translateY(20px)";
    box.style.transition = "0.6s ease";
    observer.observe(box);
});
