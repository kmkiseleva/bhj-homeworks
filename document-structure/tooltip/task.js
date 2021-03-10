const links = [...document.querySelectorAll("a")];
const tips = [
  '<div class="tooltip tooltip_active">Что бы вы хотели?</div>',
  '<div class="tooltip tooltip_active">Устройтесь на работу!</div>',
  '<div class="tooltip tooltip_active">Это просто подсказка!</div>',
  '<div class="tooltip tooltip_active">Не важный текст подсказки</div>',
  '<div class="tooltip tooltip_active">Подсказка открыта</div>',
  '<div class="tooltip tooltip_active">Выхода нет, скоро рассвет</div>',
];

let index;
for (let link of links) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    index = links.indexOf(link);
    console.log(links[index].getBoundingClientRect());
    links[index].insertAdjacentHTML("afterEnd", tips[index]);
  });
}
