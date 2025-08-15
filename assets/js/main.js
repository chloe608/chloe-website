function toggleMenu(){
  var el = document.getElementById('site-nav');
  if(!el) return;
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');

  body.classList.toggle('light-mode');

  const isLightMode = body.classList.contains('light-mode');
  localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

  // Update the icon
  themeToggle.innerHTML = isLightMode ? '🌙' : '☀️';
}

// Apply saved theme on page load
(function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  const themeToggle = document.getElementById('theme-toggle');

  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.innerHTML = '🌙';
  } else {
    themeToggle.innerHTML = '☀️';
  }
})();