const htmlBody = document.querySelector("body");
const cookieBtn = document.querySelector("#cookie-btn");
const cookieDesc = document.querySelector(".cookie-desc");
let isCookieDescOpen = false;
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");

// Toggle cookie note if the user clicks on the cookie btn
cookieBtn.addEventListener("click", (Event) => {
  if (!isCookieDescOpen) {
    cookieDesc.classList.remove("hidden-desktop");
    isCookieDescOpen = true;
  } else {
    cookieDesc.classList.add("hidden-desktop");
    isCookieDescOpen = false;
  }
  Event.stopPropagation();
});

// Hide cookie note if the user clicks anywhere on the page
htmlBody.addEventListener("click", () => {
  if (isCookieDescOpen) {
    cookieDesc.classList.add("hidden-desktop");
    isCookieDescOpen = false;
  }
});

setTimeout(showModal, 500);

function showModal() {
  modal.classList.remove("hidden-desktop");
}

// Open - close modal, cookie
modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hidden-desktop");
});
