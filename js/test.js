// Получаем элементы
var languageSwitcher = document.getElementById('language-select');

// Устанавливаем обработчик события изменения значения
languageSwitcher.addEventListener('change', function() {
  var selectedLanguage = this.value;
  var newUrl;

  // Определяем новый URL на основе выбранного языка
  switch (selectedLanguage) {
    case 'en':
      newUrl = 'https://www.example.com/en';
      break;
    case 'fr':
      newUrl = 'https://www.example.com/fr';
      break;
    case 'es':
      newUrl = 'https://www.example.com/es';
      break;
    default:
      newUrl = 'https://www.example.com';
  }

  // Перенаправляем на новую страницу
  window.location.href = newUrl;
});
