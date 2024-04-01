function changeColor() {
  // звертаємося до властивості style елементу body
  document.body.style.backgroundColor = getRandomColor();

  document.querySelector('.color').textContent =
    document.body.style.backgroundColor;
  console.log(document.querySelector('.color').textContent);
}

// додаємо слухач подій на кожен елемент
const allBox = document.querySelectorAll('.widget');
allBox.forEach(box => {
  box.addEventListener('click', handleClick);
});

// отримуємо колір квадрата по якому було здійснено клік
function handleClick(event) {
  const color = event.currentTarget.dataset.color;
  console.log(color);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
