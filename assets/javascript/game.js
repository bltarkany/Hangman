// global variables
var userOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var movies = ["nightmare before christmas", "edward scissorhands", "sweeney todd", "beetlejuice", "corpse bride", "sleepy hollow", "frankenweenie"];
var compGuess = "";
var titleSplit = "";



// word contanier


// game counters

var winCount = 0;
var lossCount = 0;
var lettersGuessed = [];



// documentation in to html

var gameMovie = document.getElementById("movieClass");
var usedLetters = document.getElementById("letters");
var winScore = document.getElementById("wins");
var lossScore = document.getElementById("losses");
var moviePic = document.getElementById("image")




// global functions

function startGame() {


}

function restartGame() {


}

function movieTitle() {

    compGuess = movies[Math.floor(Math.random() * movies.length)];

    console.log(compGuess);
}








// game logic

movieTitle();
