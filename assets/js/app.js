const mobileMenu = document.querySelector("#mobile-menu");
const menuBtnCont = document.querySelector("#menu-btn-container");
const menuBtn = document.querySelector("#menu-btn");
const mainElement = document.querySelector("main");
const footerElement = document.querySelector("footer");
let isMenuOpen = false;

window.addEventListener("scroll", () => {
  const logo = document.querySelector(".logo");
  const nav = document.querySelector("nav");
  nav.classList.add("shrinking-nav");
  logo.classList.add("shrinking-logo");
  mainElement.classList.add("reduce-padding");
  // if (window.scrollY == 0) {
  //   logo.classList.remove("shrinking-logo");
  //   nav.classList.remove("shrinking-nav");
  //   mainElement.classList.remove("reduce-padding");
  // }
});

// Swap menu btn depending on it's position (opened, closed)
menuBtnCont.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  if (!mobileMenu.classList.contains("hidden")) {
    menuBtn.src = "./assets/media/svg/close.svg";
    menuBtn.alt = "close menu button";
    isMenuOpen = true;
  } else {
    menuBtn.src = "./assets/media/svg/menu.svg";
    menuBtn.alt = "menu button";
    isMenuOpen = false;
  }
});

// Hide menu if the user click on something which is not in the menu
// Hide menu if main content is clicked
mainElement.addEventListener("click", () => {
  if (isMenuOpen) {
    mobileMenu.classList.add("hidden");
    menuBtn.src = "./assets/media/svg/menu.svg";
  }
});

// Hide menu if the footer is clicked
footerElement.addEventListener("click", () => {
  if (isMenuOpen) {
    mobileMenu.classList.add("hidden");
    menuBtn.src = "./assets/media/svg/menu.svg";
  }
});
