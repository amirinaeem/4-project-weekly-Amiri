const sidNavbar = document.querySelector(".sid-navbar");
const closeMenu = document.querySelector(".close-menu");
const menuBtn = document.querySelector(".menu-container");
const navElements = document.querySelectorAll(".nav");

menuBtn.addEventListener("click", function () {
  sidNavbar.style.display = "flex";
  navElements.style.display = "block";
});

closeMenu.addEventListener("click", function () {
  sidNavbar.style.display = "none";
});
