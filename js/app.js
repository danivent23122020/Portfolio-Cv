// *** anim btn menu ****
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
// *** anim name type writer ****
let nameAnim = document.querySelector(".name-animation");

let nameTypewriter = new Typewriter(nameAnim, {
    loop: false,
    deleteSpeed: 40,
});

nameTypewriter
    .pauseFor(1500)
    .changeDelay(40)
    .typeString("Moi c'est Michel Martin.")
    .start();

// *** anim txt type writer ****
let app = document.querySelector(".txt-animation");

let typewriter = new Typewriter(app, {
    loop: true,
    deleteSpeed: 40,
});

typewriter
    .pauseFor(1500)
    .changeDelay(40)
    .pauseFor(1500)
    .typeString(
        " Développeur <span style='font-weight: 600'>Front-End</span> :"
    )
    .pauseFor(2000)
    .typeString("<span style='color: red; font-weight: 600'> HTML/CSS</span>")
    .pauseFor(2500)
    .deleteChars(8)
    .typeString("<span style='color: red; font-weight: 600'> SASS</span>")
    .pauseFor(2500)
    .deleteChars(4)
    .typeString("<span style='color: red; font-weight: 600'> Bootstrap</span>")
    .pauseFor(2500)
    .deleteChars(9)
    .typeString("<span style='color: red; font-weight: 600'> JavaScript</span>")
    .pauseFor(2500)
    .deleteChars(10)
    .typeString("<span style='color: red; font-weight: 600'> WordPress</span>")
    .pauseFor(2500)
    .start();
