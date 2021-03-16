const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

if (!document.cookie) {
  modal.classList.add("modal_active");
} else {
  modal.classList.remove("modal_active");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  let name = "status";
  let value = "Modal Was Closed";
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
});
