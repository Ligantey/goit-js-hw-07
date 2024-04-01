// У 3 та 4 завданнях рекомендую використовувати метод для рядків trim() - String.prototype.trim() - JavaScript | MDN
// Уважно визначайте події у завданнях (попри те, що у т/з є прямі підказки, помилок із цього приводу чимало).
// 4 завдання -- всі інпути заповнені. Тільки тоді виводимо об’єкт у консоль.

const form = document.querySelector('.login-form');

// вішаємо submit na form
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  if (event) {
    alert('Будь ласка, заповніть всі поля!');
    // припиняємо дефолтну поведінку браузера
    event.preventDefault();
  }

  const elements = event.target.elements;

  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };
  console.log(info);
  // очищення form
  event.target.reset();
}
