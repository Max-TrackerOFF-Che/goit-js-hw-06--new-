const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArray = [];
totalCategories.forEach((category) => {
  const categoryName = category.children[0].textContent;
  const elementCount = category.children[1].children.length;
  categoriesArray.push(`Category: ${categoryName}\nElements: ${elementCount}`);
});

console.log(categoriesArray.join("\n\n"));
