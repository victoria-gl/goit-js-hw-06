const input = document.querySelector("#font-size-control")
console.log(input)
const span = document.querySelector("#text")
console.log(span)


input.addEventListener("input", () => {
    span.style.fontSize = `${input.value}px`;
});
