function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const colorOfBodySpan = document.querySelector(".color");
changeColorBtn.addEventListener("click", () => {
  const colorOfBodyEl = getRandomHexColor();
  document.body.style.backgroundColor = colorOfBodyEl;
  colorOfBodySpan.textContent = colorOfBodyEl;
});
