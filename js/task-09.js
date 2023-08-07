const refs = {
  widget: document.querySelector(".widget"),
  spanEl: document.querySelector(".color"),
  colorChangeBtn: document.querySelector(".change-color"),
};

refs.colorChangeBtn.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const newColor = (document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  )
    .toString(16)
    .padStart(6, 0)}`);

  return (refs.spanEl.textContent = newColor);
}
