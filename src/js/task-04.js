let counterValue = 0;

const plusButton = document.querySelector('[data-action="increment"]');
const minusButton = document.querySelector('[data-action="decrement"]');
const valueElement = document.getElementById("value");

const updateCounterUI = () => {
  valueElement.textContent = counterValue;
};

plusButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterUI();
});

minusButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterUI();
});

updateCounterUI();
