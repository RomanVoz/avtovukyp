// function redirectToPage() {
//     var selectElement = document.getElementById("languageSelect");
//     var selectedLanguage = selectElement.value;

//     if (selectedLanguage !== "") {
//       var baseUrl = "https://avto-prosto.kiev.ua";
//       var url;

//       if (selectedLanguage === "uk") {
//         url = baseUrl;
//       } else {
//         url = baseUrl + "/" + selectedLanguage;
//       }

//       window.location.href = url;
//     }
//   }

function redirectToPage() {
  var selectElement = document.getElementById("languageSelect");
  var selectedLanguage = selectElement.value;

  var baseUrl = "https://avto-prosto.kiev.ua";
  var url;

  if (selectedLanguage === "uk") {
    url = baseUrl;
  } else {
    url = baseUrl + "/" + selectedLanguage;
  }

  window.location.href = url;
}