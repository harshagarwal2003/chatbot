'use strict';

/**
 * Navbar toggle
 */
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navElemArr = [navOpenBtn, navCloseBtn];

function toggleNavbar() {
  navbar.classList.toggle("active");
}

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", toggleNavbar);
}

/**
 * Toggle navbar when clicking any navbar link
 */
const navbarLinks = document.querySelectorAll("[data-nav-link]");

function closeNavbar() {
  navbar.classList.remove("active");
}

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", closeNavbar);
}

/**
 * Header active when window is scrolled down
 */
const header = document.querySelector("[data-header]");

function toggleHeader() {
  header.classList.toggle("active", window.scrollY >= 50);
}

window.addEventListener("scroll", toggleHeader);
