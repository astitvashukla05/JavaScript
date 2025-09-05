'use strict';

let flag = -1;
let getRandomNumber;
let highscore = Number(document.querySelector('.highscore').textContent);
let turnsLeft = Number(document.querySelector('.score').textContent);
if (flag === -1) {
  getRandomNumber = Number(Math.floor(Math.random() * 20 + 1));
  turnsLeft = Number(document.querySelector('.score').textContent);
  flag = 1;
}
document.querySelector('.again').addEventListener('click', () => {
  getRandomNumber = Number(Math.floor(Math.random() * 20 + 1));
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
  turnsLeft = document.querySelector('.score').textContent;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});

console.log(getRandomNumber);

document.querySelector('.check').addEventListener('click', () => {
  let guessedNumber = Number(document.querySelector('.guess').value);
  if (turnsLeft > 1) {
    console.log(turnsLeft);
    if (!guessedNumber || guessedNumber <= 0 || guessedNumber > 20) {
      document.querySelector('.message').textContent =
        'Guess a Number Between 1 and 20';
    } else if (guessedNumber === getRandomNumber) {
      document.querySelector('.message').textContent = 'You Gueesed it right';
      document.querySelector('.number').textContent = getRandomNumber;
      document.querySelector('body').style.backgroundColor = 'green';
      if (turnsLeft > highscore) {
        highscore = turnsLeft;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guessedNumber < getRandomNumber) {
      document.querySelector('.message').textContent = 'Too Low';
      turnsLeft--;
      document.querySelector('.score').textContent = turnsLeft;
    } else {
      document.querySelector('.message').textContent = 'Too High';
      turnsLeft--;
      document.querySelector('.score').textContent = turnsLeft;
    }
  } else {
    document.querySelector('.message').textContent = 'You Lost The Game';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'red';
  }
});
