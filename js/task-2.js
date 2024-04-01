// У другому  завданні не вставляйте елементи списку по черзі в циклі. Додавання елементів у DOM має здійснюватися за одну операцію вставки (зверніть на це особливу увагу).
// При виконанні завдань замість більш звичного вам циклу for віддавайте перевагу методам масиву, що перебирають.

const images = [
  {
    url: '<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: '<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: '<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>',
    alt: 'Group of Horses Running',
  },
];

// Отримали посилання на ul елемент у HTML <ul class="gallery"></ul>
const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

// Використовую перебираючий метод forEach
images.forEach(image => {
  // створення нового елементу HTML
  const liEl = document.createElement('li');
  const imgEl = document.createElement('img');
  //  додаємо елемент зображення (img) до елементу списку (li)
  galleryEl.appendChild(liEl);
  liEl.appendChild(imgEl);

  //  додаємо значення для атрибуту img
  imgEl.src = image.url;
  imgEl.textContent = image.alt;
  return imgEl;
});
