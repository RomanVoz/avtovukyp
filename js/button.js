const form = document.querySelector('.form__avto-body');
const button = document.querySelector('.form__avto-bt');

button.addEventListener('click', () => {
  // отправка данных на почту и телеграм
  // ...

  // перенаправление на страницу Google
  window.location.href = 'http://127.0.0.1:5500/success.html';
});

