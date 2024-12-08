//Js code for hamburger menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
  navItems.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
      navLinks.classList.remove('show');
    });
  });
});
