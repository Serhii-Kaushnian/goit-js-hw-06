function informationMessage() {
  const allCategories = document.querySelectorAll(".item");
  const amountOfCategories = allCategories.length;

  console.log(`Number of categories: ${amountOfCategories}`);
  allCategories.forEach((value, index, array) => {
    let nameOfCategory = `Number of categories: ${
      value.querySelector("h2").textContent
    }`;
    let amountOfElements = `Elements: ${value.querySelectorAll("li").length}`;
    console.log(nameOfCategory);
    console.log(amountOfElements);
  });
}

informationMessage();
