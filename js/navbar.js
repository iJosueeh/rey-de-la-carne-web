const buttonNav = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".nav-menu");

buttonNav.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});