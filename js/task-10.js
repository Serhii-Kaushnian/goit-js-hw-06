function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsInputEl = document.querySelector('[type="number"]');

const createBtn = document.querySelector("button[data-create]");

const resetBtn = document.querySelector("button[data-destroy]");

const boxesDivEl = document.getElementById("boxes");
var divElWidth = 30;
var divElHeight = 30;

function createBoxes(amount) {
  for (var i = 0; i < amount; i += 1) {
    var divEl = document.createElement("div");
    divEl.style.width = `${(divElWidth += 10)}px`;
    divEl.style.height = `${(divElHeight += 10)}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesDivEl.appendChild(divEl);
  }
}

createBtn.addEventListener("click", () => {
  createBoxes(controlsInputEl.value);
});

resetBtn.addEventListener("click", () => {
  boxesDivEl.innerHTML = "";
  divElWidth = 30;
  divElHeight = 30;
});
