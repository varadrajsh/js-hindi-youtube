const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const input = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaingSlot = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    //validiate number 1 to 100 etc
    const guess = parseInt(input.value);
    console.log(guess);
    validiateguess(guess);
  });
}

function validiateguess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed the right number: ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Guessed number is Too Low");
  } else if (guess > randomNumber) {
    displayMessage("Guessed Number is Too High");
  }
}

function displayGuess(guess) {
  input.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaingSlot.innerHTML = `${10 - numGuess} `;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  input.value = "";
  input.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h3 id="newGame">Start a new game</h3>`;
  startOver.appendChild("p");
  playGame = false;
  newGame();
}

function newGame() {
  document.querySelector("#newGame");
}
