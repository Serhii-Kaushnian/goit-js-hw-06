const fontController = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

fontController.addEventListener("input", () => {
  spanText.style.fontSize = `${fontController.value}px`;
});
