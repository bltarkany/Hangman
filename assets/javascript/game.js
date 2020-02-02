// Global Variables
// ======================================================================

var movies = ["jack", "edward", "sweeney", "beetlejuice", "lydia", "bonejangles", "ichabod", 
"frankenweenie", "sally", "batman", "wonka", "oogieboogie"];

var compGuess = "";

// word container
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

// audio files
var audio1 = new Audio("assets/images/sleep.m4a");

// documentation in to html
var gameMovie = document.getElementById("movieClass");
var usedLetters = document.getElementById("letters");
var winScore = document.getElementById("wins");
var lossScore = document.getElementById("losses");
var moviePic = document.getElementById("image");
var turnsLeft = document.getElementById("turns");
var gameOutcome = document.getElementById("outcome");
var movieName = document.getElementById("title");
var audioList = document.getElementById("audio");


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
    lettersWrong = [];
    usedLetters.textContent = lettersWrong.join(" ");
    turnsLeft.textContent = guessesLeft;
    winScore.textContent = winCount;
    lossScore.textContent = lossCount;
    // moviePic.setAttribute("src", "assets/images/blackandwhite.jpg");

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
    lettersWrong = [];

    movieName.textContent = "Movie Title";
    usedLetters.textContent = lettersWrong.join(" ");
    turnsLeft.textContent = guessesLeft;
    winScore.textContent = winCount;
    lossScore.textContent = lossCount;
    gameOutcome.textContent = "";
    moviePic.setAttribute("src", "assets/images/blackandwhite.jpg");

    // console log actions
    console.log(titleSplit);
    console.log(numBlanks);
    console.log(blanksAndLetters);
}

// movie title selection 
function movieTitle() {

    compGuess = movies[Math.floor(Math.random() * movies.length)];
    blanksAndLetters = [];

    console.log(compGuess);
}

// check if user letter guesses are in mystery word
function letterChecker(letter) {
    // start with no letters correct because it is the start of game
    var letterFound = false;

    // look to see if user letter choice is in game word. If so letterFound is now true
    for (var i = 0; i < numBlanks; i++) {

        if (compGuess[i] === letter) {

            letterFound = true;
        };
    }

    // If letter found is true, find where the true letters are and put them into the blanksandletters
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

        lettersWrong.push(letter);

        console.log(lettersWrong);
    }
}








// Game Logic
// ============================================================================

document.onkeyup = function (event) {

    lettersGuessed = String.fromCharCode(event.which).toLowerCase();

    letterChecker(lettersGuessed);

    if (titleSplit.toString() === blanksAndLetters.toString()) {

        gameOutcome.textContent = "You won!! Let's play again!"
        winCount++;

        if (compGuess === "beetlejuice") {
            moviePic.setAttribute("src", "assets/images/betleljuice-f.jpg");
            movieName.textContent = "Beetlejuice!";
        } else if (compGuess === "jack") {
            moviePic.setAttribute("src", "assets/images/jack.gif");
            movieName.textContent = "Nightmare Before Christmas!";
        } else if (compGuess === "sally") {
            moviePic.setAttribute("src", "assets/images/sally.gif");
            movieName.textContent = "Nightmare Before Christmas!";
        } else if (compGuess === "batman") {
            moviePic.setAttribute("src", "assets/images/batman.jpg");
            movieName.textContent = "Batman!";
        } else if (compGuess === "edward") {
            moviePic.setAttribute("src", "assets/images/edward.jpg");
            movieName.textContent = "Edward Scissorhands!";
        } else if (compGuess === "frankenweenie") {
            moviePic.setAttribute("src", "assets/images/frank.jpg");
            movieName.textContent = "Frankenweenie!";
        } else if (compGuess === "sweeney") {
            moviePic.setAttribute("src", "assets/images/SweeneyTodd.jpg");
            movieName.textContent = "Sweeney Todd!";
        } else if (compGuess === "lydia") {
            moviePic.setAttribute("src", "assets/images/lydia.jpg");
            movieName.textContent = "Beetlejuice!";
        } else if (compGuess === "bonejangles") {
            moviePic.setAttribute("src", "assets/images/bone.jpg");
            movieName.textContent = "Corpse Bride!";
        } else if (compGuess === "ichabod") {
            moviePic.setAttribute("src", "assets/images/ichabod.jpg");
            movieName.textContent = "Sleepy Hollow!";
            audio1.play();
        } else if (compGuess === "wonka") {
            moviePic.setAttribute("src", "assets/images/wonka.jpg");
            movieName.textContent = "Willy Wonka and the Chocolate Factory!";
        } else if (compGuess === "oogieboogie") {
            moviePic.setAttribute("src", "assets/images/oogie.jpg");
            movieName.textContent = "Nightmare Before Christmas!";
        }

        movieTitle();
        startGame();
    } else if (guessesLeft === 0) {

        gameOutcome.textContent = "You Lost! Try harder this time!"
        lossCount++;

        movieTitle();
        startGame();
    }

    if (lossCount === 10) {

        gameOutcome.textContent = "You've lost to many times. Time to restart the score board!"

        movieTitle();
        restartGame();
    }




    gameMovie.textContent = blanksAndLetters.join(" ");
    usedLetters.textContent = lettersWrong.join(" ");
    turnsLeft.textContent = guessesLeft;
    winScore.textContent = winCount;
    lossScore.textContent = lossCount;


}



movieTitle();
startGame();
// letterChecker();