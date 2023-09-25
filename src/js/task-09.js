function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElement = document.body;
const colorStyle = document.querySelector(".color");
const colorButton = document.querySelector(".change-color");

colorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;
  colorStyle.textContent = randomColor;
});
