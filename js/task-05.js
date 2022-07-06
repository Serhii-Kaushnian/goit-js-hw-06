const inputValue = document.getElementById("name-input");
const nameOutput = document.querySelector("#name-output");

inputValue.addEventListener("input", () => {
  inputValue.value.length !== 0
    ? (nameOutput.textContent = inputValue.value.trim())
    : (nameOutput.textContent = "Anonymous");
});
