// Dark mode toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Dark mode styles
const style = document.createElement('style');
style.innerHTML = `
  body.dark {
    background: #121212;
    color: #eee;
  }
  body.dark nav, body.dark footer {
    background: #000;
  }
  body.dark .card {
    background: #1e1e1e;
    color: #eee;
  }
  body.dark .socials a {
    color: #eee;
  }
`;
document.head.appendChild(style);
