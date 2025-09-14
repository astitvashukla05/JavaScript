'use strict';

///////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// Scroll Window
// const scrollBtn = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
// scrollBtn.addEventListener('click', () => {
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
// Tabbed Format
let tabsContainer = document.querySelector('.operations__tab-container');
let tabs = document.querySelectorAll('.operations__tab');
let content = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  const data = clicked.getAttribute('data-tab');
  tabs.forEach((e) => e.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  content.forEach((e) => {
    e.classList.remove('operations__content--active');
  });
  document
    .querySelector(`.operations__content--${data}`)
    .classList.add(`operations__content--active`);
});

//NavLinks
let navLink = document.querySelector('.nav__links');
function handleChange(e, opacity) {
  const link = e.target.closest('.nav__link');
  if (!link) return;
  const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');
  siblings.forEach((el) => {
    if (el !== link) el.style.opacity = opacity;
  });
}
navLink.addEventListener('mouseover', (e) => {
  handleChange(e, 0.5);
});
navLink.addEventListener('mouseout', (e) => {
  handleChange(e, 1);
});

// NavBar
// window.addEventListener('scroll', () => {
//   if (window.scrollY >= 85) {
//     console.log('now it is running');
//     document.querySelector('.nav').classList.add('sticky');
//   } else {
//     document.querySelector('.nav').classList.remove('sticky');
//   }
// });

// Slider Func
let slides = document.querySelectorAll('.slide');
let slider = document.querySelector('.slider');
let currSlide = 0;
const maxSlide = slides.length;
slides.forEach((e, i) => (e.style.transform = `translateX(${i * 100}%)`));
let btnLeft = document.querySelector('.slider__btn--left');
let btnRight = document.querySelector('.slider__btn--right');
// slider.style.overflow = 'visible';
btnRight.addEventListener('click', () => {
  if (currSlide == maxSlide - 1) currSlide = 0;
  else currSlide++;
  slides.forEach(
    (e, i) => (e.style.transform = `translateX(${(i - currSlide) * 100}%)`)
  );
});
btnLeft.addEventListener('click', () => {
  if (currSlide == 0) currSlide = maxSlide - 1;
  else currSlide--;
  slides.forEach(
    (e, i) => (e.style.transform = `translateX(${(i - currSlide) * 100}%)`)
  );
});
