const firstList = document.querySelector("ul li");
const firstListMainInput = firstList.querySelector("input");
const firstSubList = firstList.querySelector("ul");
const firstListSubInputs = [...firstSubList.querySelectorAll("input")];

const secondList = firstList.nextElementSibling;
const secondListMainInput = secondList.querySelector("input");
const secondSubList = secondList.querySelector("ul");
const secondListSubInputs = [...secondSubList.querySelectorAll("input")];

firstListMainInput.addEventListener("click", () => {
  firstListSubInputs.forEach((item) => {
    if (!item.checked) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  });
});

secondListMainInput.addEventListener("click", () => {
  secondListSubInputs.forEach((item) => {
    if (!item.checked) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  });
});
