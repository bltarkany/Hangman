// Global Variables
// ======================================================================
var userOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var movies = ["nightmare before christmas", "edward scissorhands", "sweeney todd", "beetlejuice", "corpse bride", "sleepy hollow", "frankenweenie"];
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
var lettersGuessed = [];



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

    titleSplit = compGuess.split("");
    numBlanks = titleSplit.length;

    // reset game counters
    guessesLeft = 10;
    lettersGuessed = [];

    usedLetters.textContent = lettersGuessed;
    turnsLeft.textContent = guessesLeft;
    winScore.textContent = winCount;
    lossScore.textContent = lossCount;
    moviePic.setAttribute("src", "assets/images/blackandwhite.jpg");

    // console log actions
    console.log(titleSplit);
    console.log(numBlanks);

}

// full restart of game
function restartGame() {


}

// movie title selection 
function movieTitle() {

    compGuess = movies[Math.floor(Math.random() * movies.length)];



    console.log(compGuess);
}








// Game Logic
// ============================================================================

movieTitle();
startGame();