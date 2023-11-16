const mobileMenu = document.querySelector("#mobile-menu");
const menuBtnCont = document.querySelector("#menu-btn-container");
const menuBtn = document.querySelector("#menu-btn");
const mainElement = document.querySelector("main");
const footerElement = document.querySelector("footer");
let isMenuOpen = false;

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

// Generate random values
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create snowflakes
function createSnowflakes() {
  const snowflakes = document.getElementById("snowflakes");
  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("img");
    snowflake.src = 'assets/media/svg/snowflake.svg';
    snowflake.alt = 'snowflake'
    snowflake.style.left = `${random(5, 95)}vw`;
    snowflake.style.animationDuration = `${random(5, 40)}s`;
    snowflake.style.opacity = `${random(0.5, 1)}`;
    snowflake.style.width = `${random(10, 24)}px`;
    snowflake.classList.add("snowflake");
    snowflakes.appendChild(snowflake);
  }
}

createSnowflakes();
