'use strict';
let modal = document.querySelector('.modal');
let closeModalBtn = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');
let showModalsBtn = document.querySelectorAll('.show-modal');
console.log(closeModalBtn);
// console.log(modal);
// console.log(overlay);
// console.log(showModalsBtn);
for (let i = 0; i < showModalsBtn.length; i++) {
  //   console.log(showModalsBtn[i]);
  showModalsBtn[i].addEventListener('click', () => {
    overlay.classList.remove('hidden');
    // console.log(overlay);
    modal.classList.remove('hidden');
  });
}
function closeModal() {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
}
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (
      !modal.classList.contains('hidden') &&
      !overlay.classList.contains('hidden')
    ) {
      closeModal();
    }
  }
});
