const categories = document.querySelectorAll('ul#categories li.item');

console.log(`Number of categories: ${categories.length}\n`);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}\n`);
});