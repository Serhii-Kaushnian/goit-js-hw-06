const body = document.body;
const ulElement = body.querySelector("#categories");

const numberOfCategories = ulElement.querySelectorAll("h2").length;

const nameOfFirstCategori = ulElement.querySelectorAll("h2")[0].textContent;

const nameOfSecondCategori = ulElement.querySelectorAll("h2")[1].textContent;

const nameOfThirdCategori = ulElement.querySelectorAll("h2")[2].textContent;

const animalsUl = ulElement.querySelectorAll(".item > ul");
const animalsUlLength = animalsUl[0].querySelectorAll("li").length;

const productsUl = ulElement.querySelectorAll(".item > ul");
const productsUlLength = productsUl[1].querySelectorAll("li").length;

const technologiesUl = ulElement.querySelectorAll(".item > ul");
const technologiesUlLength = technologiesUl[2].querySelectorAll("li").length;

console.log(`
Number of categories: ${numberOfCategories}

Category:  ${nameOfFirstCategori}
Elements:  ${animalsUlLength}

Category:  ${nameOfSecondCategori}
Elements:  ${productsUlLength}

Category:  ${nameOfThirdCategori}
Elements:  ${technologiesUlLength}
`);
