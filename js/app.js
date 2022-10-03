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

// *** anim txt/skills type writer ****
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

// *** anim title contact ****
let titleContact = document.querySelector(".contact-animation");

let contactTypewriter = new Typewriter(titleContact, {
    loop: true,
    deleteSpeed: 120,
});

contactTypewriter
    .pauseFor(1500)
    .changeDelay(120)
    .pauseFor(1500)
    .typeString("Entrons en Contact")
    .pauseFor(2000)
    .start();

// *** anim input contact ****
const inputFields = document.querySelectorAll(".form-group");
//
for (let index = 0; index < inputFields.length; index++) {
    const field = inputFields[index];
    field.addEventListener("input", (e) => {
        if (e.target.value != "") {
            e.target.parentNode.classList.add("animation");
        } else if (e.target.value === "") {
            e.target.parentNode.classList.remove("animation");
        }
    });
}

// *** anim GSAP Greensock ****
// anime navbar left + accueil
const navLeft = document.querySelector(".nav-left");
const titre = document.querySelector("h1");
const btn = document.querySelectorAll(".btn-hero");
const btnMedias = document.querySelectorAll(".media");
// init timeline
const timeLine1 = gsap.timeline({ paused: true });
// anim timeline
timeLine1
    .to(navLeft, { left: "0px", ease: Power3.easeOut, duration: 0.4 })
    .from(titre, { y: -60, opacity: 0, ease: Power3.easeOut, duration: 0.5 })
    .staggerFrom(btn, 1, { opacity: 0 }, 0.4, "-=0.30")
    .staggerFrom(btnMedias, 1, { opacity: 0 }, 0.4, "-=0.40");
window.addEventListener("load", () => {
    timeLine1.play();
});

// *** anim ScrollMagic ****
// anime presentation
const presentationContainer = document.querySelector(".presentation");
const titrePres = document.querySelector(".size-title");
const presGauche = document.querySelector(".pres-gauche");
const listePres = document.querySelectorAll(".item-liste");
// init timeline
const timelinePres = new TimelineMax();
// anim timeline
timelinePres
    .from(titrePres, {
        y: -150,
        opacity: 0,
        duration: 0.6,
    })
    .from(
        presGauche,
        {
            y: -50,
            opacity: 0,
            duration: 0.7,
        },
        "-=0.1"
    )
    .staggerFrom(
        listePres,
        1,
        {
            opacity: 0,
        },
        0.2,

        "-=0.2"
    );
//
const controller = new ScrollMagic.Controller();
//
const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.4,
    // reverse: false,
    reverse: true,
})
    .setTween(timelinePres)
    // .addIndicators()
    .addTo(controller);

// anim Portfolio
// vague 1
const portfolioContainer = document.querySelector(".portfolio");
const titrePortfolio = document.querySelector(".title-port");
const itemPortfolio = document.querySelectorAll(".vague1");
// init timeline
const tlPortfolio = new TimelineMax();
// anim timeline
tlPortfolio
    .from(titrePortfolio, {
        y: -50,
        opacity: 0,
        duration: 0.6,
    })
    .staggerFrom(
        itemPortfolio,
        1,
        {
            opacity: 0,
        },
        0.3,

        "-=0.3"
    );
//
const scene1 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.4,
    // reverse: false,
    reverse: true,
})
    .setTween(tlPortfolio)
    .addIndicators()
    .addTo(controller);

// vague 2
const itemPortfolio2 = document.querySelectorAll(".vague2");
// init timeline
const tlPortfolio2 = new TimelineMax();
// anim timeline
tlPortfolio2
    .staggerFrom(
        itemPortfolio2,
        1,
        {
            opacity: 0,
        },
        0.3,

        "-=0.3"
    );
//
const scene2 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    // reverse: false,
    reverse: true,
})
    .setTween(tlPortfolio2)
    .addIndicators()
    .addTo(controller);

// vague 3
const itemPortfolio3 = document.querySelectorAll(".vague3");
// init timeline
const tlPortfolio3 = new TimelineMax();
// anim timeline
tlPortfolio3
    .staggerFrom(
        itemPortfolio3,
        1,
        {
            opacity: 0,
        },
        0.3,

        "-=0.3"
    );
//
const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.2,
    // reverse: false,
    reverse: true,
})
    .setTween(tlPortfolio3)
    .addIndicators()
    .addTo(controller);
