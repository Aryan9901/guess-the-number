'use strict';
let displayvalue = function (message) {
  document.querySelector('.message').textContent = message;
};
let displayScore = function () {
  document.querySelector('.score').textContent = score;
};

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // when no input is given
  if (!guess) {
    displayvalue('⛔ No Number');
    // when wins the game
  } else if (guess === secretNumber) {
    displayvalue('🎊 Correct number');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.name').textContent = '🎉 HIGHSCORE 🎉';
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // when guess is incorrect
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayvalue(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore();
    } else {
      displayvalue('😨 YOU LOST!');
      score--;
      displayScore();
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayvalue('Start guessing...');
  displayScore();
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';

  document.querySelector('body').style.backgroundColor = '#1190b4';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.name').textContent = 'Guess My Number!';
});
