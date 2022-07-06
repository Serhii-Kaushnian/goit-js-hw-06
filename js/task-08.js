const submitFormEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector('[name="email"]');
const inputPasswordlEl = document.querySelector('[name="password"]');

submitFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputPasswordlEl.value.length === 0) {
    alert("Enter valid password");
  } else if (inputPasswordlEl.value.length !== 0) {
    const formData = new FormData(event.currentTarget);
    document.querySelector(".login-form").reset();
  }
});
