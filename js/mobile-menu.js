// (() => {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');
  
//     const toggleMenu = () => {
//       const isMenuOpen =
//         openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//       openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//       mobileMenu.classList.toggle('is-open');
  
//       const scrollLockMethod = !isMenuOpen
//         ? 'disableBodyScroll'
//         : 'enableBodyScroll';
//       bodyScrollLock[scrollLockMethod](document.body);
//     };
  
//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);
  
//     // Close the mobile menu on wider screens if the device orientation changes
//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//       if (!e.matches) return;
//       mobileMenu.classList.remove('is-open');
//       openMenuBtn.setAttribute('aria-expanded', false);
//       bodyScrollLock.enableBodyScroll(document.body);
//     });
//   })();

/////////////////

// const headerBurger = document.querySelector('.header__burger');
// const headerMenu = document.querySelector('.header__menu');

// headerBurger.addEventListener('click', function() {
//   this.classList.toggle('active');
//   headerMenu.classList.toggle('open');
// });

// let menuBtn = document.querySelector('.menu-btn');
// let menu = document.querySelector('.menu');

// menuBtn.addEventListener('click', function(){
// 	menuBtn.classList.toggle('active');
// 	menu.classList.toggle('active');
// })

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
})