'use strict';

let diceroll = 0;
let playeOne = true;
let playeTwo = false;
let sumPlayerOne = 0;
let sumPlayerTow = 0;
let currentPointsOne = 0;
let currentPointsTwo = 0;
const btnRoll = document.querySelector('.btn--roll');
const btmHold = document.querySelector('btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const scoreOne = document.getElementById('score--0');
const scoreTwo = document.getElementById('score--1');
const playerOneSide = document.querySelector('.player--0');
const playerTwoSide = document.querySelector('.player--1');
const btnHold = document.getElementById('hold');
const currentOne = document.querySelector('#current--0');
const currentTwo = document.querySelector('#current--1');
// btn to call randomNumber()
btnRoll.onclick = () => randomNumber();
// generate random number and render player game
const randomNumber = () => {
  diceroll = Math.floor(Math.random() * 6) + 1;
  document.querySelector('.dice').src = `dice-${diceroll}.png`;
  renderGame(diceroll);
};
//desable player
const desablePlayer = function (player) {
  player.classList.remove('player--active');
};
//active player
const activePlayer = function (player) {
  player.classList.add('player--active');
};
// dice = 1 player one
function desablePlayerOne() {
  sumPlayerOne = 0;
  scoreOne.textContent = sumPlayerOne;
  playeOne = false;
  playeTwo = true;
  desablePlayer(playerOneSide);
  activePlayer(playerTwoSide);
}
//dice = 1 player two
function desablePlayerTwo() {
  sumPlayerTow = 0;
  scoreTwo.textContent = sumPlayerTow;
  playeTwo = false;
  playeOne = true;
  desablePlayer(playerTwoSide);
  activePlayer(playerOneSide);
}
// render game
function renderGame(points) {
  if (playeOne) {
    if (points !== 1) {
      sumPlayerOne += points;
      scoreOne.textContent = sumPlayerOne;
      return sumPlayerOne;
    } else {
      desablePlayerOne();
    }
  } else if (playeTwo) {
    if (points !== 1) {
      sumPlayerTow += points;
      scoreTwo.textContent = sumPlayerTow;
    } else {
      desablePlayerTwo();
    }
  }
}
//save points
btnHold.addEventListener('click', function () {
  if (playeOne) {
    currentPointsOne += sumPlayerOne;
    currentOne.textContent = currentPointsOne;
    desablePlayerOne();
    if (currentPointsOne >= 100) {
      win(playerOneSide, scoreOne);
      playeTwo = falses;
    }
  } else {
    currentPointsTwo += sumPlayerTow;
    currentTwo.textContent = currentPointsTwo;
    desablePlayerTwo();
    if (currentPointsTwo >= 100) {
      win(playerTwoSide, scoreTwo);
      playeOne = false;
    }
  }
});

btnNewGame.addEventListener('click', function () {
  diceroll = 0;
  playeOne = true;
  playeTwo = false;
  sumPlayerOne = 0;
  currentPointsOne = 0;
  currentPointsTwo = 0;
  currentTwo.textContent = 0;
  currentOne.textContent = 0;
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  desablePlayerTwo();
  playerOneSide.classList.remove('player--winner');
  playerTwoSide.classList.remove('player--winner');
});
console.log(currentPointsOne);
// when someone wins
function win(player, text) {
  player.classList.add('player--winner');
  text.textContent = 'Win';
  text.style.color = 'gold';
}
