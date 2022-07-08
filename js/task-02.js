const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulEl = document.querySelector("#ingredients");

// const createLiFromArray = (array) =>
//   array.map((element) => `<li>${element}</li>`).join("");

const createLiFromArray = (array) =>
  array.reduce((accum, element) => accum + `<li>${element}</li>`, "");
const listToinclude = createLiFromArray(ingredients);
ulEl.insertAdjacentHTML("beforeend", listToinclude);

console.log(createLiFromArray(ingredients));
