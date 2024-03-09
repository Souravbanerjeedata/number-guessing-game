//number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = prompt(`Guess a number between ${minNum} - ${maxNum}. `);
  guess = Number(guess);
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < minNum || guess > maxNum) {
    alert("Please enter a valid number.");
  } else {
    attempts++;
    if (guess > answer) {
      alert("the answer is lower than your guess");
    } else if (guess < answer) {
      alert("the answer is greater than you guess.");
    } else {
      alert(`your answer is correct! it took you ${attempts} attempts`);
      running = false;
    }
  }
}
