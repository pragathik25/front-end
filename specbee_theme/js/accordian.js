const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header");
const hamburgerInner = document.querySelector(".hamburger__inner");
const navMenuSubMenu = document.querySelector(".nav-menu__sub-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
})

hamburgerInner.addEventListener("click", () => {
    hamburgerInner.classList.toggle("active");
    navMenuSubMenu.classList.toggle("active");
})
