const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amountInput = document.querySelector('input[type="number"]');
  const amount = Number(amountInput.value);


  let boxes = '';
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    boxes += `<div style="width:${size}px; height:${size}px; background-color:${color}"></div>`;
  }
  boxesContainer.insertAdjacentHTML('beforeend', boxes);
  amountInput.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}