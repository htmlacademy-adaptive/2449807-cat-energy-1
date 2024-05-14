const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const sliderControl = document.querySelector('.slider__control');
const slider = document.querySelector ('.slider');

nav.classList.add('nav--closed');
let flag = false;

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--closed');
  nav.classList.toggle('nav--active');
});

sliderControl.addEventListener('click', () => {
  if (flag) {
    slider.classList.toggle('slider--after');
    slider.classList.toggle('slider--before');
  }
  else {
    slider.classList.add('slider--after');
    flag = true;
  }
})
