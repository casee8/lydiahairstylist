const bookingBtn = document.querySelector("#bookingBtn");
const bookingField = document.querySelector("#sbw_45sh9i");

const pointers = document.querySelectorAll(".pointer");

function toggleBtn() {
  bookingField.classList.toggle("not-visible");
}

// Add a click event listener to each pointer element
pointers.forEach((pointer) => {
  pointer.addEventListener("click", () => {
    // Get the price details element contained within the pointer element
    const priceDetailsElement = pointer.querySelector(".price-details");

    // Toggle the visibility of the price details element.
    priceDetailsElement.classList.toggle("not-visible");
  });
});
