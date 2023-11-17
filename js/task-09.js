function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const div = document.querySelector(".widget")
console.log(div)

const colorSpan = document.querySelector(".color")
console.log(colorSpan)

const button = document.querySelector(".change-color")
console.log(button)


button.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});

