const menuButton = document.querySelector(".header__menu");
const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const header = document.querySelector(".header");

menuButton.addEventListener("click", function() {
    if (menu.style.display === "none") {
        menu.style.display = "block";
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
        header.style.paddingRight = "67px";
    } else {
        menu.style.display = "none";
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
        header.style.paddingRight = "";
    }
});