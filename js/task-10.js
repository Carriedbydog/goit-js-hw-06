function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  controls: document.querySelector("#controls"),
  boxes: document.querySelector("#boxes"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  input: document.querySelector("input"),
};

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  destroyBoxes();
  const amount = refs.input.value;
  const arr = [];

  for (let i = 1; i <= amount; i++) {
    const newBoxes = document.createElement("div");
    newBoxes.style.width = `${30 * i}px`;
    newBoxes.style.height = `${30 * i}px`;
    newBoxes.style.border = "1px solid black";
    newBoxes.style.backgroundColor = getRandomHexColor();

    arr.push(newBoxes);
  }
  refs.boxes.append(...arr);
  console.log(refs.boxes);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
