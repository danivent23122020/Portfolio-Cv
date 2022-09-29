// anim btn menu
const btnMenu = document.querySelector(".btn-rond-menu");
const nav = document.querySelector(".nav-left");
const ligne = document.querySelector(".cont-ligne");
const allItemNav = document.querySelectorAll(".nav-menu-item");
//
btnMenu.addEventListener("click", () => {
    ligne.classList.toggle("active");
    nav.classList.toggle("menu-visible");
});
// media query for btn menu
if (window.matchMedia("(max-width: 1200px)")) {
    allItemNav.forEach((element) => {
        element.addEventListener("click", () => {
            nav.classList.toggle("menu-visible");
            ligne.classList.toggle("active");
        });
    });
}
