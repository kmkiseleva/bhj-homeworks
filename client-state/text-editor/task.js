const textarea = document.getElementById("editor");
const reset = document.getElementById("reset");

textarea.addEventListener("change", () => {
  localStorage.setItem("text", textarea.value);
});
textarea.innerHTML = localStorage.getItem("text") || "";

reset.addEventListener("click", () => {
  localStorage.clear();
  textarea.innerHTML = "";
});
