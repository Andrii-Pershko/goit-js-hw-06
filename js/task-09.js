const colorBackgroud = document.querySelector(".color");
const body = document.querySelector("body");
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', changesBackgroundColor);

function changesBackgroundColor() {
  const backgroundColor = getRandomHexColor();

  body.style.backgroundColor = `${backgroundColor}`
  colorBackgroud.textContent = `${backgroundColor}`;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};




