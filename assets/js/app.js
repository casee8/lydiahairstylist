const serviceGroups = document.querySelectorAll(".service-groups");
const menuBtnCont = document.querySelector("#menu-btn-container");
const menuBtn = document.querySelector("#menu-btn");

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

menuBtnCont.addEventListener("click", () => {
  const mobileMenu = document.querySelector("#mobile-menu");
  mobileMenu.classList.toggle("hidden");
  if (!mobileMenu.classList.contains("hidden")) {
    menuBtn.src = "./assets/media/svg/close.svg";
  } else {
    menuBtn.src = "./assets/media/svg/menu.svg";
  }
});
