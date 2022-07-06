const submitFormEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector('[name="email"]');
const inputPasswordlEl = document.querySelector('[name="password"]');
let userObj = {};

submitFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputPasswordlEl.value.length === 0) {
    alert("Enter valid password");
  } else if (inputPasswordlEl.value.length !== 0) {
    const {
      elements: { email, password },
    } = event.currentTarget;
    //  Можно ли десктруктуризировать или присвоить elements сразу в объект?
    // просто если в форме будет больше полей, как все прописывать, вручную?
    userObj.email = email.value;
    userObj.password = password.value;
    console.log("userObj: ", userObj);

    document.querySelector(".login-form").reset();
  }
});
