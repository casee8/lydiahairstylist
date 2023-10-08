const serviceGroups = document.querySelectorAll(".service-groups");
const mobileMenu = document.querySelector("#mobile-menu");
const menuBtnCont = document.querySelector("#menu-btn-container");
const menuBtn = document.querySelector("#menu-btn");
const mainElement = document.querySelector("main");
const footerElement = document.querySelector("footer");
let isMenuOpen = false;

// Add a click event listener to each pointer element
serviceGroups.forEach((serviceGroup) => {
  serviceGroup.addEventListener("click", () => {
    // Get the price details element contained within the pointer element
    const priceDetailsElement = serviceGroup.querySelector(".price-details");
    const openCloseMarker = serviceGroup.querySelector("img");

    // Animate menu status marker
    // openCloseMarker.style = "transform: rotate(180deg); animation: openPos 0.2s;";
    openCloseMarker.classList.toggle("openPosDetails");

    // Toggle the visibility of the price details element.
    priceDetailsElement.classList.toggle("not-visible");
  });
});

// Swap menu btn depending on it's position (opened, closed)
menuBtnCont.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  if (!mobileMenu.classList.contains("hidden")) {
    menuBtn.src = "./assets/media/svg/close.svg";
    isMenuOpen = true;
  } else {
    menuBtn.src = "./assets/media/svg/menu.svg";
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
