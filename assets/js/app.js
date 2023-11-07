const mobileMenu = document.querySelector("#mobile-menu");
const menuBtnCont = document.querySelector("#menu-btn-container");
const menuBtn = document.querySelector("#menu-btn");
const mainElement = document.querySelector("main");
const footerElement = document.querySelector("footer");
// const navBar = document.querySelector("nav");
let isMenuOpen = false;
// let navBarHeight = 195;
// let currentScrollPos;

// window.addEventListener("scroll", () => {
//   currentScrollPos = Math.round(scrollY);
//   if (currentScrollPos > 0) {
//     navBarHeight -= currentScrollPos;
//   } else if (currentScrollPos < 125) {
//     navBarHeight -= 1;
//   }
// else if (currentScrollPos < 125) {
//   scrollPos = 0;
// } else {
//   scrollPos = currentScrollPos
// }
// console.log("storedPos: " + navBarHeight + " scrollY: " + currentScrollPos);
// navBar.style.height = scrollPos + 'px';
// });

// Swap menu btn depending on the menu's state (opened, closed)
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

window.addEventListener("scroll", () => {
  menuBtn.classList.add("menu-btn-scroll");
  if (scrollY == 0) {
    menuBtn.classList.remove("menu-btn-scroll");
  }
});
