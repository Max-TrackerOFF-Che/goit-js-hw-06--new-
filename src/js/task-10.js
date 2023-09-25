function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginTop = `${1 + i * 5}px`; /// that just from me to test
    boxes.push(box);
  }

  return boxes;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const numberOfBoxes = parseInt(input.value);

  if (numberOfBoxes > 0) {
    const boxes = createBoxes(numberOfBoxes);
    boxesContainer.append(...boxes);
  }
});

destroyButton.addEventListener("click", destroyBoxes);
