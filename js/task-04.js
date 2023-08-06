const refs = {
  counter: document.querySelector("#counter"),
  onClickBtnDecrement: document.querySelector("[data-action=decrement]"),
  onClickBtnIncrement: document.querySelector("[data-action=increment]"),
  resultValue: document.querySelector("#value"),
};

let counterValue = 0;

refs.onClickBtnDecrement.addEventListener("click", onClickBtnMinus);
refs.onClickBtnIncrement.addEventListener("click", onClickBtnPlus);

function onClickBtnMinus() {
  counterValue -= 1;
  refs.resultValue.textContent = counterValue;
}

function onClickBtnPlus() {
  counterValue += 1;
  refs.resultValue.textContent = counterValue;
}
