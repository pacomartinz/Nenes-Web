const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");


function openMenu() {
    menuButton.classList.add("active");
    nav.classList.add("open");

    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Cerrar menú");

    document.body.style.overflow = "hidden";
}


function closeMenu() {
    menuButton.classList.remove("active");
    nav.classList.remove("open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú");

    document.body.style.overflow = "";
}


function toggleMenu() {

    const isOpen = nav.classList.contains("open");

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }

}


menuButton.addEventListener("click", toggleMenu);


/* Cerrar al pulsar un enlace */

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        closeMenu();
    });

});


/* Cerrar con Escape */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        nav.classList.contains("open")
    ) {
        closeMenu();
    }

});