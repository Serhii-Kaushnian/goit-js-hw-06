const inputValue = document.getElementById("validation-input");

inputValue.addEventListener("blur", () => {
  inputValue.classList.remove("valid", "invalid");
  inputValue.value.length === 6
    ? inputValue.classList.add("valid")
    : inputValue.classList.add("invalid");
});
