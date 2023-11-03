'use strict';



// add event on multiple elements
const addEventOnElem = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const header = document.querySelector("[data-header]");
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-navbar-link]");
const sideBar = document.querySelector("[data-sidebar]");
const sidebarToggler = document.querySelectorAll("[data-sidebar-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



// sidebar toggle function

const toggleSidebar = function () {
  sideBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(sidebarToggler, "click", toggleSidebar);


// header active when scroll down to 50px

const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  console.log("Scrolled!");
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElem);