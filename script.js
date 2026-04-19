// Reveal-on-scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));


// Floating Next/Top button logic
// Include BOTH header#hero and all sections
const sections = [...document.querySelectorAll("header.hero, section")];
const btn = document.getElementById("next-section-btn");

function updateNextButton() {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    // Detect bottom of page
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;

    if (atBottom) {
        btn.textContent = "Top ↑";
        btn.href = "#top";
        return;
    }

    // Find next section
    let next = null;

    for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        const top = rect.top + window.scrollY;

        if (top > scrollPos) {
            next = sections[i];
            break;
        }
    }

    if (next) {
        btn.textContent = "Next ↓";
        btn.href = "#" + next.id;
    } else {
        btn.textContent = "Top ↑";
        btn.href = "#top";
    }

    // Navbar transparency toggle
const navbar = document.querySelector("nav");

function updateNavbar() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateNavbar);
window.addEventListener("load", updateNavbar);

}

window.addEventListener("scroll", updateNextButton);
window.addEventListener("load", updateNextButton);


