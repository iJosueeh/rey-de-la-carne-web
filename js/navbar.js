const navToggle = document.querySelector(".nav-toggler");
const navMenuOf = document.querySelector(".nav-menu");
const navIconsOf = document.querySelector(".nav-icons");

navToggle.addEventListener("click", () => {
  navMenuOf.classList.remove("nav-menu_visible");
  navMenuOf.classList.toggle("nav-menu")
  navMenuOf.classList.remove("nav-icons_visible");
  navMenuOf.classList.toggle("nav-icons");
});
