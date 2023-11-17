
const input = document.querySelector("#name-input");
// console.log(input)

const output = document.querySelector("#name-output")
// console.log(output)


 input.addEventListener("input", () => {
    output.textContent = input.value || "Anonymous";
  });