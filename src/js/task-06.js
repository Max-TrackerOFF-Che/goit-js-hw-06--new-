const validationInput = document.getElementById("validation-input");
const expectedLength = parseInt(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value.trim();

  const validClass = inputValue.length === expectedLength ? "valid" : "invalid";
  const invalidClass =
    inputValue.length === expectedLength ? "invalid" : "valid";
  validationInput.classList.remove(invalidClass);
  validationInput.classList.add(validClass);
});
