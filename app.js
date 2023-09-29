const bookingBtn = document.querySelector("#bookingBtn");
const bookingField = document.querySelector("#sbw_45sh9i");
const pointers = document.querySelectorAll(".pointer");
const menuBtn = document.querySelector("#menu-btn");

// Add a click event listener to each pointer element
pointers.forEach((pointer) => {
  pointer.addEventListener("click", () => {
    // Get the price details element contained within the pointer element
    const priceDetailsElement = pointer.querySelector(".price-details");
    
    // Toggle the visibility of the price details element.
    priceDetailsElement.classList.toggle("not-visible");
  });
});

menuBtn.addEventListener("click", () => {
  const mobileMenu = document.querySelector("#mobile-menu");
  mobileMenu.classList.toggle("hidden");
});
