const body = document.body;

const menuButton =
  document.querySelector(".menu-button");

const closeButton =
  document.querySelector(".menu__close");

const backdrop =
  document.querySelector(".menu-backdrop");

const menu =
  document.querySelector(".menu");

const menuLinks =
  document.querySelectorAll(".menu__links a");


function openMenu() {
  body.classList.add("menu-open");

  menuButton.setAttribute(
    "aria-expanded",
    "true"
  );

  menuButton.setAttribute(
    "aria-label",
    "Cerrar menú"
  );
}


function closeMenu() {
  body.classList.remove("menu-open");

  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );

  menuButton.setAttribute(
    "aria-label",
    "Abrir menú"
  );
}


/* Abrir/cerrar desde hamburguesa */

menuButton.addEventListener(
  "click",
  () => {

    const isOpen =
      body.classList.contains(
        "menu-open"
      );

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }

  }
);


/* Botón X */

closeButton.addEventListener(
  "click",
  closeMenu
);


/* Pulsar fuera del menú */

backdrop.addEventListener(
  "click",
  closeMenu
);


/* Cerrar cuando se pulsa un enlace */

menuLinks.forEach((link) => {

  link.addEventListener(
    "click",
    closeMenu
  );

});


/* Cerrar con ESC */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {
      closeMenu();
    }

  }
);