const button = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#menu'); // Menu
const dbutt = document.querySelector('#dmenu');

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  dbutt.classList.toggle('hidden');
});

const sectionOne = document.querySelector('.section1')
const sections = document.querySelectorAll("section")
const div = document.querySelectorAll('.fadeDiv')

const options = {
  root: null,
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show');
    }
  });
}, options);

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));