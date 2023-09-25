const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");

const newArray = document.createDocumentFragment();
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  newArray.appendChild(li);
});

ul.appendChild(newArray);
