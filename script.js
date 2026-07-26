const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function updateThemeButton() {
  const isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? 'Dark Mode' : 'Light Mode';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  updateThemeButton();
});

updateThemeButton();
