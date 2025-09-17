// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Fade-in animation on scroll
const faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  faders.forEach(fader => {
    const rect = fader.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fader.classList.add("show");
    }
  });
});
