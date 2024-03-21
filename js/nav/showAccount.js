document.addEventListener("DOMContentLoaded", function() {
    const navAccount = document.querySelector(".nav-account");
    const navIcons = document.querySelectorAll(".nav-icons i");

    navIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            navAccount.classList.toggle("account-show");
        });
    });
});
