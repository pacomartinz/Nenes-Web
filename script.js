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


/* ==========================================
   CARRUSEL "QUÉ ES NENES"
========================================== */

const aboutCarousel =
  document.querySelector(".about__carousel");

const aboutTrack =
  document.querySelector(".about__track");

const aboutDots =
  document.querySelectorAll(
    ".about__pagination-dot"
  );


let currentAboutSlide = 0;


/* Mostrar una tarjeta */

function showAboutSlide(index) {

  const totalSlides =
    aboutDots.length;


  if (index < 0) {
    index = totalSlides - 1;
  }


  if (index >= totalSlides) {
    index = 0;
  }


  currentAboutSlide = index;


  aboutTrack.style.transform =
    `translateX(-${index * 100}%)`;


  aboutDots.forEach(
    (dot, dotIndex) => {

      const isActive =
        dotIndex === index;


      dot.classList.toggle(
        "about__pagination-dot--active",
        isActive
      );


      if (isActive) {

        dot.setAttribute(
          "aria-current",
          "true"
        );

      } else {

        dot.removeAttribute(
          "aria-current"
        );

      }

    }
  );

}


/* Cambiar pulsando los puntos */

aboutDots.forEach((dot) => {

  dot.addEventListener(
    "click",
    () => {

      const slide =
        Number(dot.dataset.slide);

      showAboutSlide(slide);

    }
  );

});


/* Cambiar deslizando */

let aboutStartX = 0;


aboutCarousel.addEventListener(
  "pointerdown",
  (event) => {

    aboutStartX =
      event.clientX;

  }
);


aboutCarousel.addEventListener(
  "pointerup",
  (event) => {

    const difference =
      event.clientX - aboutStartX;


    if (Math.abs(difference) < 40) {
      return;
    }


    if (difference < 0) {

      showAboutSlide(
        currentAboutSlide + 1
      );

    } else {

      showAboutSlide(
        currentAboutSlide - 1
      );

    }

  }
);