// У 3 та 4 завданнях рекомендую використовувати метод для рядків trim() - String.prototype.trim() - JavaScript | MDN
// Уважно визначайте події у завданнях (попри те, що у т/з є прямі підказки, помилок із цього приводу чимало).
const inputEl = document.querySelector('input');
console.log(inputEl);

inputEl.addEventListener('input', handleInput);

function handleInput(event) {
  console.log(event.target.value);
}

// inputEl.addEventListener('blur', handleBlur);

// function handleBlur(event) {
//   const name = event.target.value;
//   // alert(`Hello, ${name} !`);
// }
