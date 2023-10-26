const cookieBtn = document.querySelector("#cookie-btn");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");

// Toggle cookie note
cookieBtn.addEventListener("click", () => {
  document.querySelector(".cookie-desc").classList.toggle("hidden-desktop");
});

setTimeout(showModal, 500);

function showModal() {
  modal.classList.remove("hidden-desktop");
}

// Open - close modal, cookie
modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hidden-desktop");
});
