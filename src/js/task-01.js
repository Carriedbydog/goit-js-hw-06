const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryEl = category.querySelectorAll("ul li");
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryEl.length}`);
});
// const categoryFirst = document.querySelector(".item");
// console.log(`Category: ${categoryFirst.firstChild.textContent}`);
