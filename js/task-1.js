const category = categories.querySelectorAll('li.item');
console.log(`Number of categories ${category.length}`);

const categoriesList = document.querySelectorAll('ul#categories li.item');

categoriesList.forEach(item => {
  const categoriesTitle = item.querySelector('h2');
  const categoriesItems = item.querySelectorAll('li');

  console.log(
    `Category: ${categoriesTitle.textContent},
    Elements: ${categoriesItems.length}`
  );
});
