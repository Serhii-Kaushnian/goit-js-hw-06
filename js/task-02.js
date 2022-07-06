const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function creatingUlListFromArray() {
  let ulToInclude = document.createElement("ul");
  ulToInclude.id = "#ingredients";

  ingredients.forEach((el) => {
    var li = document.createElement("li");
    li.textContent = el;
    li.classList.add("item");
    ulToInclude.append(li);
  });

  document.querySelector("#ingredients").replaceWith(ulToInclude);
}

creatingUlListFromArray();
