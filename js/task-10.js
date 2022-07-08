function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsInputEl = document.querySelector('[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const resetBtn = document.querySelector("button[data-destroy]");
const boxesDivEl = document.getElementById("boxes");
var divElWidth = 20;
var divElHeight = 20;

function createBoxes(amount) {
  var emptyArr = [];
  for (var i = 0; i < amount; i += 1) {
    emptyArr.push(`<div style ="background-color:${getRandomHexColor()};
     width: ${(divElWidth += 10)}px;
     height: ${(divElHeight += 10)}px"></div>`);

    // ==================================================================
    // var divEl = document.createElement("div");
    // divEl.style.backgroundColor = getRandomHexColor();
    // divEl.style.width = `${(divElWidth += 10)}px`;
    // divEl.style.height = `${(divElHeight += 10)}px`;
    // boxesDivEl.appendChild(divEl);
  }
  boxesDivEl.insertAdjacentHTML("beforeend", emptyArr.join(""));
}

createBtn.addEventListener("click", () => {
  createBoxes(controlsInputEl.value);
});

resetBtn.addEventListener("click", () => {
  boxesDivEl.innerHTML = "";
  divElWidth = 30;
  divElHeight = 30;
});
