const buttonNav = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".nav-menu");
const navLinks = navMenu.querySelectorAll("li a");

function navClose(){
  navMenu.classList.remove("show")
}

navLinks.forEach(link => {
  link.addEventListener("click", navClose);
});

buttonNav.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav-container");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});