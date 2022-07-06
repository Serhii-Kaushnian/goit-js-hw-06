const inputValue = document.getElementById("validation-input");

inputValue.addEventListener("blur", () => {
  if (inputValue.value.length === 6) {
    inputValue.classList.add("valid");
  } else {
    inputValue.classList.add("invalid");
  }
});
