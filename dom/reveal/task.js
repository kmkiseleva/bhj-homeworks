let reveal = document.querySelectorAll(".reveal");
const reveals = [...reveal];

let isInViewport = function (element) {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;
  return (elementTop < viewportHeight && elementTop > 0) ||
    (elementBottom < viewportHeight && elementBottom > 0)
    ? true
    : false;
};

window.addEventListener("scroll", () => {
  for (let reveal of reveals) {
    if (isInViewport(reveal)) {
      reveal.classList.add("reveal_active");
    }
  }
});
