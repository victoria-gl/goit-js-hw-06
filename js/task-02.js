const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients")
console.log(list)



ingredients.forEach((ingredient) => {
  const element = document.createElement("li");
  element.textContent = `${ingredient}`;
  element.classList.add("item");
  list.append(element)
  
});