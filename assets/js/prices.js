const serviceGroups = document.querySelectorAll(".service-groups");

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