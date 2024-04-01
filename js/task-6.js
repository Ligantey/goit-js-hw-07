// Завдання 6 - функція createBoxes має приймати amount - кількість дівів, яку потрібно створити. В івент-ліснери потрібно передавати окремі колбеки, правильно іменовані за допомогою on або handle, а вже в них викликати функції createBoxes і destroyBoxes відповідно.
const numberAll = document.querySelector('#controls');
console.log(numberAll);
const input = document.querySelector('input');
const btn = document.querySelector('button');
const box = document.querySelector('#boxes');
console.log(input);
console.log(btn);
console.log(box);


// const destroyBtn = document.querySelector('#destroyBtn');
// const collection = document.querySelector('#collection');

// додаємо слухач події на кнопку
btn.addEventListener('click', () => {
  //введене число - перетворити рядок на ціле число
  const count = parseInt(input.value);}

  if (Number(input.min) <= amount && amount <= Number(input.max));

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
