const cart = document.querySelector(".cart__products");
const products = document.querySelectorAll(".product");
const decs = [...document.querySelectorAll(".product__quantity-control_dec")];
const incs = [...document.querySelectorAll(".product__quantity-control_inc")];
const values = [...document.querySelectorAll(".product__quantity-value")];
const addButtons = [...document.querySelectorAll(".product__add")];

// уменьшить количество товара
for (let dec of decs) {
  dec.addEventListener("click", () => {
    let index = decs.indexOf(dec);
    if (values[index].textContent > 1) {
      values[index].textContent--;
    }
  });
}

// увеличить количество товара
for (let inc of incs) {
  inc.addEventListener("click", () => {
    let index = incs.indexOf(inc);
    values[index].textContent++;
  });
}

for (let button of addButtons) {
  button.addEventListener("click", () => {
    let index = addButtons.indexOf(button);
    const dataId = products[index].dataset.id;
    const imageSrc = products[index].children[1].getAttribute("src");
    const value = values[index].textContent;
    cart.insertAdjacentHTML(
      "afterBegin",
      `<div class="cart__product" data-id=${dataId}><img class="cart__product-image" src=${imageSrc}><div class="cart__product-count">${value}</div></div>`
    );
  });
}
