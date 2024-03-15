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


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(event) {
    event.preventDefault();

    const linkID = this.getAttribute('href');
    const elementTarget = document.querySelector(linkID);
    if (elementTarget) {
      const targetOffset = elementTarget.offsetTop;
      window.scrollTo({
        top: targetOffset - 100,
        behavior: "smooth"
      });
    }
  });
});