// Global Variables
// ======================================================================
// var userOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var movies = ["jack", "edward", "sweeney", "beetlejuice", "lydia", "bonejangles", "ichabod", "frankenweenie", "sally", "batman", "wonka", "oogieboogie"];
var compGuess = "";



// word contanier
var titleSplit = [];
var numBlanks = 0;
// n _ _ _ _
var blanksAndLetters = [];



// game counters

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;
var lettersGuessed = "";
var lettersWrong = [];



// documentation in to html

var gameMovie = document.getElementById("movieClass");
var usedLetters = document.getElementById("letters");
var winScore = document.getElementById("wins");
var lossScore = document.getElementById("losses");
var moviePic = document.getElementById("image");
var turnsLeft = document.getElementById("turns");



// Global Functions
// ===========================================================================

// start of next round
function startGame() {

    // split random word - find the number fo letters - push character for each letter
    titleSplit = compGuess.split("");
    numBlanks = titleSplit.length;

    for (var i = 0; i < numBlanks; i++) {
        blanksAndLetters.push("_");
    }

    gameMovie.textContent = blanksAndLetters.join(" ");

    // reset game counters
    guessesLeft = 10;
    lettersGuessed = [];

    usedLetters.textContent = lettersGuessed.join(" ");
    turnsLeft.textContent = guessesLeft;
    winScore.textContent = winCount;
    lossScore.textContent = lossCount;
    moviePic.setAttribute("src", "assets/images/blackandwhite.jpg");

    // console log actions
    console.log(titleSplit);
    console.log(numBlanks);
    console.log(blanksAndLetters);

}

// full restart of game
function restartGame() {

    // split random word - find the number fo letters - push character for each letter
    titleSplit = compGuess.split("");
    numBlanks = titleSplit.length;

    for (var i = 0; i < numBlanks; i++) {
        blanksAndLetters.push("_");
    }

    gameMovie.textContent = blanksAndLetters.join(" ");

    // reset game counters
    winCount = 0;
    lossCount = 0;
    guessesLeft = 10;
    lettersGuessed = [];

    usedLetters.textContent = lettersGuessed.join(" ");
    turnsLeft.textContent = guessesLeft;
    winScore.textContent = winCount;
    lossScore.textContent = lossCount;
    moviePic.setAttribute("src", "assets/images/blackandwhite.jpg");

    // console log actions
    console.log(titleSplit);
    console.log(numBlanks);
    console.log(blanksAndLetters);

}

// movie title selection 
function movieTitle() {

    compGuess = movies[Math.floor(Math.random() * movies.length)];



    console.log(compGuess);
}

// check if user letter guesses are in mystery word

function letterChecker(letter) {
    // start with no letters correct because it is the start of game
    var letterFound = false;

    // look to see if user letter choice is in game word. If so letterFound is now true
    for (var i = 0; i < numBlanks; i++) {

        if (compGuess[i] === letter);

        letterFound = true;
    }

    // If letterfound is true, find where the true letters are and put them into the blanksandletters
    if (letterFound) {

        for (var j = 0; j < numBlanks; j++) {

            if (compGuess[j] === letter) {

                blanksAndLetters[j] = letter;
            }

            console.log(blanksAndLetters);
        }

        // if letterfound stays false, remove a turn and put wrong guess into used letters
    } else {

        guessesLeft--;

        lettersGuessed.push(letter);

        console.log(lettersGuessed);
    }
}








// Game Logic
// ============================================================================

document.onkeyup = function(event) {

    lettersGuessed = String.fromCharCode(event.which).toLowerCase();

    letterChecker(lettersGuessed);


    gameMovie.textContent = blanksAndLetters.join(" ");
    usedLetters.textContent = lettersGuessed.join(" ");
    turnsLeft.textContent = guessesLeft;
    winScore.textContent = winCount;
    lossScore.textContent = lossCount;


}



movieTitle();
startGame();
letterChecker();