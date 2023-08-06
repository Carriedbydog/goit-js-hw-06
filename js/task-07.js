const refs = {
  input: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.input.addEventListener("input", () => {
  const textFontSize = refs.input.value + "px";
  refs.textEl.style.fontSize = textFontSize;
});
// console.log(refs.textEl.style);
