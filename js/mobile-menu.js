$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu,.header__logo--white,.header--scrolled,.header__phone--mob').toggleClass('active');
		$('body').toggleClass('lock');
	})
})

const header = document.querySelector('.header');

// Обработчик события прокрутки страницы
window.addEventListener('scroll', function() {
  // Проверяем положение прокрутки страницы
  if (window.pageYOffset > 100) {
    // Добавляем класс фона при прокрутке более 100px
    header.classList.add('header--scrolled');
  } else {
    // Удаляем класс фона при прокрутке менее 100px
    header.classList.remove('header--scrolled');
  }
});