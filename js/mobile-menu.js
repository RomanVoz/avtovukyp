$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu,.header__logo--white,.header--scrolled,.header__phone--mob').toggleClass('active');
		$('body').toggleClass('lock');
	})
})

