// const form = document.querySelector('form'); // выбираем форму по тегу 'form'
// const nameInput = document.querySelector('input[name="name"]'); // выбираем поле "Имя" по имени атрибута
// const phoneInput = document.querySelector('input[name="phone"]'); // выбираем поле "Телефон" по имени атрибута
// const carInput = document.querySelector('input[name="car"]'); // выбираем поле "Марка авто" по имени атрибута

// form.addEventListener('submit', (event) => { // добавляем обработчик события отправки формы
//   event.preventDefault(); // отменяем стандартное поведение формы

//   if (nameInput.value.trim() === '' || phoneInput.value.trim() === '' || carInput.value.trim() === '') { // проверяем, заполнены ли все поля
//     alert('Пожалуйста, заполните все поля формы.'); // если какое-то поле не заполнено, выводим сообщение об ошибке
//   } else { // если все поля заполнены
//     window.location.href = 'https://www.google.com'; // перенаправляем пользователя на страницу Google
//   }
// });

const form = document.querySelector('form'); // выбираем форму по id
const nameInput = document.querySelector('input[name="name"]'); // выбираем поле "Имя" по имени атрибута
const phoneInput = document.querySelector('input[name="phone"]'); // выбираем поле "Телефон" по имени атрибута
const carInput = document.querySelector('input[name="car"]'); // выбираем поле "Марка авто" по имени атрибута

form.addEventListener('submit', (event) => { // добавляем обработчик события отправки формы
  event.preventDefault(); // отменяем стандартное поведение формы

  if (nameInput.value.trim() === '' || phoneInput.value.trim() === '' || carInput.value.trim() === '') { // проверяем, заполнены ли все поля
    alert('Пожалуйста, заполните все поля формы.'); // если какое-то поле не заполнено, выводим сообщение об ошибке
  } else { // если все поля заполнены
    window.location.href = 'https://www.google.com'; // перенаправляем пользователя на страницу Google
    form.submit(); // submit the form
  }
});
