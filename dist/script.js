const button = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#menu'); // Menu
const dbutt = document.querySelector('#dmenu');

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  dbutt.classList.toggle('hidden');
});