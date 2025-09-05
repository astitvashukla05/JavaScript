'use strict';

//Selecting Elements
let score1Ele = document.querySelector('#score--0');
let score2Ele = document.querySelector('#score--1');
let dice = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');
let curr0 = document.querySelector('#current--0');
let curr1 = document.querySelector('#current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

let scores = [0, 0];
let currActive = 0;
let currScore = 0;

score1Ele.textContent = 0;
score2Ele.textContent = 0;
dice.classList.add('hidden');
function changePlayer() {
  document.querySelector(`#current--${currActive}`).textContent = 0;

  document
    .querySelector(`.player--${currActive}`)
    .classList.remove('player--active');

  if (currActive === 0) currActive = 1;
  else currActive = 0;
  document
    .querySelector(`.player--${currActive}`)
    .classList.add('player--active');
}
// When roll is clicked
btnRoll.addEventListener('click', () => {
  let diceNum = Math.floor(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNum}.png`;

  if (diceNum !== 1) {
    currScore += diceNum;
    document.querySelector(`#current--${currActive}`).textContent = currScore;
  }
  if (diceNum == 1) {
    currScore = 0;
    changePlayer();
  }
});

btnHold.addEventListener('click', () => {
  scores[currActive] += currScore;
  currScore = 0;
  document.querySelector(`#current--${currActive}`).textContent = 0;
  document.querySelector(`#score--${currActive}`).textContent =
    scores[currActive];
  if (scores[currActive] >= 100) {
    let currPlayer = document.querySelector(`.player--${currActive}`);
    currPlayer.classList.add('player--winner');
    btnHold.disabled = true;
    btnRoll.disabled = true;
  } else changePlayer();
});

btnNew.addEventListener('click', () => {
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  scores = [0, 0];
  currActive = 0;
  currScore = 0;
  curr0.textContent = 0;
  curr1.textContent = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  score1Ele.textContent = 0;
  score2Ele.textContent = 0;
  dice.classList.add('hidden');
  btnHold.disabled = false;
  btnRoll.disabled = false;
});
