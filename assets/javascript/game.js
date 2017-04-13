var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
  "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
  "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];

var answer = letters[Math.floor(Math.random() * letters.length)];

var updateGuessesLeft = function() {
  var item = document.getElementById("guesses");
  item.innerHTML = "Guesses left: " + guessesLeft;
};

var updateAnswer = function() {
  answer = letters[Math.floor(Math.random() * letters.length)];
};
var updateGuessesSoFar = function() {
  var item = document.getElementById("soFar");
  item.innerHTML = "Your Guesses so far: " + guessedLetters.join(", ");
};

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateAnswer();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateGuessesLeft();


document.onkeyup = function(event) {

  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  guessesLeft--;
  updateGuessesLeft();
  updateGuessesSoFar();

  if (guessesLeft > 0){
    if (userGuess == answer){
      wins++;
      var item = document.getElementById("wins");
      item.innerHTML = "Wins: " + wins;
      alert("Winner! Are you psychic?");
      reset();
      }
    }else if(guessesLeft == 0){
      losses++;
      var item = document.getElementById("losses");
      item.innerHTML = "Losses: " + losses;
      alert("Sorry you lose. Try again?");
      reset();
    }
};