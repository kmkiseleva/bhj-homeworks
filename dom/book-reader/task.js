const book = document.getElementById("book");

// FONT SIZE
let fz = document.querySelectorAll(".font-size");
const fzArr = [...fz];

let indexSize;
for (let item of fzArr) {
  if (item.classList.contains("font-size_active")) {
    indexSize = fzArr.indexOf(item);
  }

  item.addEventListener("click", (e) => {
    e.preventDefault();
    fzArr[indexSize].classList.remove("font-size_active");
    item.classList.add("font-size_active");
    if (item.classList.contains("font-size_small")) {
      book.classList.remove("book_fs-big");
      book.classList.add("book_fs-small");
    } else if (item.classList.contains("font-size_big")) {
      book.classList.remove("book_fs-small");
      book.classList.add("book_fs-big");
    } else {
      book.classList.remove("book_fs-big");
      book.classList.remove("book_fs-small");
    }
    indexSize = fzArr.indexOf(item);
  });
}

// TEXT COLOR
let color = document.querySelectorAll(".book__control_color .color");
const colorArr = [...color];

let indexColor;
for (let color of colorArr) {
  if (color.classList.contains("color_active")) {
    indexColor = colorArr.indexOf(color);
  }

  color.addEventListener("click", (e) => {
    e.preventDefault();
    colorArr[indexColor].classList.remove("color_active");
    color.classList.add("color_active");
    if (color.classList.contains("text_color_black")) {
      book.classList.add("book_color-black");
      book.classList.remove("book_color-whitesmoke");
      book.classList.remove("book_color-gray");
    } else if (color.classList.contains("text_color_gray")) {
      book.classList.add("book_color-gray");
      book.classList.remove("book_color-black");
      book.classList.remove("book_color-whitesmoke");
    } else if (color.classList.contains("text_color_whitesmoke")) {
      book.classList.add("book_color-whitesmoke");
      book.classList.remove("book_color-black");
      book.classList.remove("book_color-gray");
    }
    indexColor = colorArr.indexOf(color);
  });
}

// BACKGROUND COLOR
let bgColors = document.querySelectorAll(".book__control_background .color");
const bgColorsArr = [...bgColors];

let indexBg;
for (let bg of bgColorsArr) {
  if (bg.classList.contains("color_active")) {
    indexBg = bgColorsArr.indexOf(bg);
  }

  bg.addEventListener("click", (e) => {
    e.preventDefault();
    bgColorsArr[indexBg].classList.remove("color_active");
    bg.classList.add("color_active");
    if (bg.classList.contains("bg_color_black")) {
      book.classList.add("book_bg-black");
      book.classList.remove("book_bg-white");
      book.classList.remove("book_bg-gray");
    } else if (bg.classList.contains("bg_color_gray")) {
      book.classList.add("book_bg-gray");
      book.classList.remove("book_bg-black");
      book.classList.remove("book_bg-white");
    } else if (bg.classList.contains("bg_color_white")) {
      book.classList.add("book_bg-white");
      book.classList.remove("book_bg-black");
      book.classList.remove("book_bg-gray");
    }
    indexBg = bgColorsArr.indexOf(bg);
  });
}
