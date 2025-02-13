const bsubmenu = document.querySelector(".b-submenu");
const navMenu = document.querySelector(".nav-menu");

bsubmenu.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    bsubmenu.setAttribute("aria-label", "Cerrar menú");
  } else {
    bsubmenu.setAttribute("aria-label", "Abrir menú");
  }
});

document.addEventListener("click", (event) => {
  if (
    !navMenu.contains(event.target) && 
    !bsubmenu.contains(event.target) && 
    navMenu.classList.contains("nav-menu_visible")
  ) {
    navMenu.classList.remove("nav-menu_visible");
    bsubmenu.setAttribute("aria-label", "Abrir menú");
  }
});
