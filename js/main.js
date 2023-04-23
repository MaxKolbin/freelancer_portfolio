const btnDarkMode = document.querySelector('.dark__mode-btn');

// Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add('dark__mode-btn--activ');
  document.body.classList.add('dark');
}
// }else if (localStorage.getItem('darkMode') === 'light') {
//   btnDarkMode.classList.add('dark__mode-btn--activ');
//   document.body.classList.add('dark');
// }

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark__mode-btn--activ");
  const isDark = document.body.classList.toggle('dark');

  if (isDark) {
    localStorage.setItem('darkMode', 'dark');
  
  }else {
    localStorage.setItem('darkMode', 'light');
  }
}