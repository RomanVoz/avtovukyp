// // получаем все элементы с классом faq-item
// const faqItems = document.querySelectorAll('.faq-item');

// // для каждого элемента в faqItems устанавливаем обработчик события на клик
// faqItems.forEach(item => {
//   const question = item.querySelector('.faq-question'); // получаем блок вопроса
//   const answer = item.querySelector('.faq-answer'); // получаем блок ответа
//   const icon = question.querySelector('.icon'); // получаем иконку вопроса
  
//   question.addEventListener('click', () => {
//     answer.classList.toggle('visible'); // добавляем/удаляем класс visible у блока ответа
//     icon.classList.toggle('open'); // добавляем/удаляем класс open у иконки вопроса
//   });
// });

// let answers = document.querySelectorAll(".accordion");

// answers.forEach((event) => {
//   event.addEventListener("click", () => {
//     if (event.classList.contains("active")) {
//       event.classList.remove("active");
//     } else {
//       answers.forEach((otherEvent) => {
//         if (otherEvent.classList.contains("active")) {
//           otherEvent.classList.remove("active");
//         }
//       });
//       event.classList.add("active");
//     }
//   });
// });