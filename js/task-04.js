  let counterValue = 0;
 
const buttonDec = document.querySelector('button[data-action="decrement"]')
console.dir(buttonDec)
  
const buttonInc = document.querySelector('button[data-action="increment"]')
console.dir(buttonInc)

const number = document.querySelector("#value")
console.dir(number)

buttonDec.addEventListener("click", function () {
    counterValue -= 1;
    number.textContent = counterValue;
});

buttonInc.addEventListener("click", function () {
    counterValue += 1;
    number.textContent = counterValue;
});

