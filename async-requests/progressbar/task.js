"use strict";
const progress = document.getElementById("progress");
progress.value = 0.0;

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/upload.php");
xhr.send();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState !== xhr.DONE) {
    progress.value += 0.1;
  }
});
