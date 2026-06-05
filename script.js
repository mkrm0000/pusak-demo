// Mobile Navigation
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const brandLogo = document.getElementById('brand-logo');

if (themeToggle) {
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
  

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDark = document.body.classList.contains('dark-mode');

    themeToggle.textContent = isDark ? '☀️' : '🌙';
    brandLogo.src = isDark ? 'logo-bg.png' : 'logo.png';


    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}