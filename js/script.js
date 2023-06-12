$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        adptiveHeight: true,
        slidesToShow: 3,
        variableWidth: true,
        slidesPerRow: 3,
    });
});



  function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var scrollAmount = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollAmount);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  var aboutLink = document.querySelector('.header__link[href="#about"]');
  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('#about', 1000);
  });

  var contactLink = document.querySelector('.header__link[href="#contact"]');
  contactLink.addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('#contact', 1000);
  });

  var faqLink = document.querySelector('.header__link[href="#faq"]');
  faqLink.addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('#faq', 1000);
  });

  var servicesLink = document.querySelector('.header__link[href="#services"]');
  servicesLink.addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('#services', 1000);
  });
