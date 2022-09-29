// anim btn menu
const btnMenu = document.querySelector(".btn-rond-menu");
const nav = document.querySelector(".nav-left");
const ligne = document.querySelector(".cont-ligne");
const allItemNav = document.querySelector(".nav-menu-item");
//
btnMenu.addEventListener("click", () => {
    ligne.classList.toggle("active");
});
