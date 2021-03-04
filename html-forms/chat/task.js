let currentData = new Date().toString().substring(16, 21);
const chatWidget = document.querySelector(".chat-widget");
const messages = document.getElementById("chat-widget__messages");
const chatInput = document.getElementById("chat-widget__input");

const robotMsgs = [
  "И вам здрасьте",
  "Я занят, тч давай до свидания",
  "Мне не интересно с вами разговаривать",
  "Бла-бла-бла",
  "Оторвись от компа, камон!",
  "Всё уже продано без вас, ха-ха",
  "Идите, куда хотите",
  "Совести нет, всё продали",
];

chatWidget.addEventListener("click", () => {
  chatWidget.classList.add("chat-widget_active");
});

chatInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${currentData}</div>
    <div class="message__text">${chatInput.value}</div>
  </div>`;
    chatInput.value = "";

    let randomMsg = Math.floor(Math.random() * robotMsgs.length);
    function robotMsg() {
      messages.innerHTML += `
    <div class="message">
      <div class="message__time">${currentData}</div>
      <div class="message__text">${robotMsgs[randomMsg]}</div>
    </div>`;
    }
    setTimeout(robotMsg, 500);
  }
});
