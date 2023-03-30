let menu = document.getElementById('menu')
let men = document.getElementById('men')
const rect = menu.getBoundingClientRect()
let mendiv = document.getElementById('mendiv')

function clicked(x) {
  x.classList.toggle('change')
  menu.classList.toggle('slide')
  mendiv.classList.toggle('pointer-events-none')
}

const sectionOne = document.querySelector('.section1')
const sections = document.querySelectorAll("section")
const div = document.querySelectorAll('.fadeDiv')

const options = {
  root: null,
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    }
  });
}, options);

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));