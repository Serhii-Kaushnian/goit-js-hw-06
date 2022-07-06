const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueCounterSpan = document.querySelector("#value");

let globalCounter = 0;

decrementBtn.addEventListener("click", () => {
  return (valueCounterSpan.innerHTML = globalCounter -= 1);
});

incrementBtn.addEventListener("click", () => {
  return (valueCounterSpan.innerHTML = globalCounter += 1);
});
