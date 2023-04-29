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
        window.location.href = 'http://127.0.0.1:5500/success.html';
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
        window.location.href = 'http://127.0.0.1:5500/success.html';
    })
    .catch(function(error) {
        // Handle error
        console.error(error);
    });
})