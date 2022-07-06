const inputValue = document.getElementById("name-input");
const nameOutput = document.querySelector("#name-output");

inputValue.addEventListener("input", () => {
  if (inputValue.value.length !== 0) {
    nameOutput.textContent = inputValue.value.trim();
  } else if (inputValue.value.length === 0) {
    nameOutput.textContent = "Anonymous";
  }
});
