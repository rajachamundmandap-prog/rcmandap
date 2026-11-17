function toggleMenu() {
  const menu = document.getElementById('navlinks');
  if (!menu) return;
  const isOpen = menu.classList.toggle('open');
  const button = document.querySelector('.menu');
  if (button) button.setAttribute('aria-expanded', String(isOpen));
}
