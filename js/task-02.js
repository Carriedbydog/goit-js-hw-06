const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientstFirst = document.createElement(`li`);
// ingredientstFirst.classList.add(`item`);

// const titleElFirst = document.createElement(`h2`);
// titleElFirst.textContent = "Potatoes";

// const ingredientstSecond = document.createElement(`li`);
// ingredientstSecond.classList.add(`item`);

// const titleElSecond = document.createElement(`h2`);
// titleElSecond.textContent = "Mushrooms";

// const ingredientstThird = document.createElement(`li`);
// ingredientstThird.classList.add(`item`);

// const titleElThird = document.createElement(`h2`);
// titleElThird.textContent = "Garlic";

// const ingredientstFourth = document.createElement(`li`);
// ingredientstFourth.classList.add(`item`);

// const titleElFourth = document.createElement(`h2`);
// titleElFourth.textContent = "Tomatos";

// const ingredientstFifth = document.createElement(`li`);
// ingredientstFifth.classList.add(`item`);

// const titleElFifth = document.createElement(`h2`);
// titleElFifth.textContent = "Herbs";

// const ingredientstSixth = document.createElement(`li`);
// ingredientstSixth.classList.add(`item`);

// const titleElSixth = document.createElement(`h2`);
// titleElSixth.textContent = "Condiments";

// ingredientstFirst.append(titleElFirst);
// ingredientstSecond.append(titleElSecond);
// ingredientstThird.append(titleElThird);
// ingredientstFourth.append(titleElFourth);
// ingredientstFifth.append(titleElFifth);
// ingredientstSixth.append(titleElSixth);

// const ingredientsList = document.querySelector("#ingredients");
// ingredientsList.append(
//   ingredientstFirst,
//   ingredientstSecond,
//   ingredientstThird,
//   ingredientstFourth,
//   ingredientstFifth,
//   ingredientstSixth
// );
// console.log(ingredientsList);

const ingredientsList = document.querySelector("#ingredients");

const ingredientElements = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  return ingredientItem;
});

ingredientsList.append(...ingredientElements);
console.log(ingredientsList);
