const header = document.querySelector(".header");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section[id]");

menuBtn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.textContent = open ? "✕" : "☰";
});
navLinks.forEach(link => link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
}));

function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 10);

    let current = "home";
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 140) current = section.id;
    });
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        current = "contact";
    }
    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const footerText = document.querySelector("footer p");
if (footerText) {
    footerText.textContent = "© " + new Date().getFullYear() + " Sameera Singh. All Rights Reserved.";
}