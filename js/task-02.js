const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const uiIngridiens = document.querySelector("#ingredients");

for (var i = 0; i < ingredients.length; i += 1) {
  var li = document.createElement("li");
  li.textContent = ingredients[i];
  li.classList.add("item");
  uiIngridiens.appendChild(li);
}
