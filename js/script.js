// Crete an object of HTML elements
const refs = {
  openMenueBtn: document.querySelector("[data-open-menu]"),
  closeMenueBtn: document.querySelector("[data-close-menu]"),
  menue: document.querySelector("[data-menu]"),
  openModalBtn: document.querySelector("[data-open-modal]"),
  closeModalBtn: document.querySelector("[data-close-modal]"),
  backdrop: document.querySelector("[data-backdrop]"),
};

// Add Events Listener to the HTML elements
refs.openModalBtn.addEventListener("click", toogleModal);
refs.closeModalBtn.addEventListener("click", toogleModal);
refs.openMenueBtn.addEventListener("click", toogleMenue);
refs.closeMenueBtn.addEventListener("click", toogleMenue);

// Create function to change/toogle "is-open" class on the backdrop element to open/close modal window
function toogleModal() {
  refs.backdrop.classList.toggle("is-open");
}

function toogleMenue() {
  refs.menue.classList.toggle("is-open");
}