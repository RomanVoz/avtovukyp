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

// const form = document.querySelector('form'); // выбираем форму по id
// const nameInput = document.querySelector('input[name="name"]'); // выбираем поле "Имя" по имени атрибута
// const phoneInput = document.querySelector('input[name="phone"]'); // выбираем поле "Телефон" по имени атрибута
// const carInput = document.querySelector('input[name="car"]'); // выбираем поле "Марка авто" по имени атрибута

// form.addEventListener('submit', (event) => { // добавляем обработчик события отправки формы
//   event.preventDefault(); // отменяем стандартное поведение формы

//   if (nameInput.value.trim() === '' || phoneInput.value.trim() === '' || carInput.value.trim() === '') { // проверяем, заполнены ли все поля
//     alert('Пожалуйста, заполните все поля формы.'); // если какое-то поле не заполнено, выводим сообщение об ошибке
//   } else { // если все поля заполнены
//     window.location.href = 'https://www.google.com'; // перенаправляем пользователя на страницу Google
//     form.submit(); // submit the form
//   }
// });

// function myFunction() {
//   if (nameInput.value.trim() === '' || phoneInput.value.trim() === '' || carInput.value.trim() === '') { // проверяем, заполнены ли все поля
//     alert('Пожалуйста, заполните все поля формы.'); // если какое-то поле не заполнено, выводим сообщение об ошибке
//   } else {
//   window.location.href='https://google.com';}
// }

const TOKEN = "6106717904:AAFHZPYsdN2YxBYv0NsIRpetDI93zcwbw7U";
const CHAT_ID = "-1001709346820";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('avto-form').addEventListener('submit', function(e) { 
    e.preventDefault();

    let message = '<b> Расчет стоимости!</b>\n';
    message += `<b>Отправитель: </b> ${this.name.value} \n`;
    message += `<b>Телефон: </b> ${this.phone.value} \n`;
    message += `<b>Марка авто: </b> ${this.car.value}`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
    })
    
    .then(function(response) {
        // Handle success
        console.log(response);
        // Redirect to Google.com
        window.location.href = 'https://www.google.com/';
    })
    .catch(function(error) {
        // Handle error
        console.error(error);
    });
})

document.getElementById('faq-form').addEventListener('submit', function(e) { 
    e.preventDefault();

    let message = '<b> Дополнительные вопросы!</b>\n';
    message += `<b>Отправитель: </b> ${this.name.value} \n`;
    message += `<b>Телефон: </b> ${this.phone.value} \n`;
    message += `<b>Марка авто: </b> ${this.car.value}`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
    })
    
    .then(function(response) {
        // Handle success
        console.log(response);
        // Redirect to Google.com
        window.location.href = 'https://www.google.com/';
    })
    .catch(function(error) {
        // Handle error
        console.error(error);
    });
})