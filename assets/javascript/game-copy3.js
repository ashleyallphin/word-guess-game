//PSEUDOCODE
//=================================================
//display directions to user
//number of guesses remaining starts at 10
//directions will disappear when key is pressed
//need an array of strings of British things
//computer picks random variable from the array
//computer counts the number of characters in the answer
//computer displays number of characters in the random variable from the array (var answer) as underscores
//user guesses a letter
//if the letter is in the variable, the letter will replace the underscore
//if the letter is not in the variable, the number of attempts remaining will decrease by 1
//if the user guesses all of the letters, the wins will increase by 1
//if the user guesses the answer, the image will change
//if the attempts remaining hits 0, the user will lose
//the guesses will be displayed to the user as they guess them


//GLOBAL VARIABLES
//=================================================

//possible answers
var hangmanArray = ["wimbledon", "the great british baking show", "kurupt fm", "london bridge", "the mighty boosh"];
//answer the computer chose from hangmanArray
var answer = "";
//characters in the correct answer
var charactersInAnswer = [];
//letters in the correct answer (no spaces)
var lettersInAnswer = [];
//number of blanks for the correct answer
var numberOfUnderscores = 0;
//like a _ _ l _ e _
var underscoresAndCorrectLetters = [];
//incorrect guesses the user has pressed
var wrongGuesses = [];
//number of times the user has won
var winCount = 0;
//number of guesses the user has left
var guessesLeft = 10;





//FUNCTIONS
//=================================================

function startGame () {
    //select an answer
    answer = hangmanArray[Math.floor(Math.random()*hangmanArray.length)];
    //replaces spaces with nothing *took this out*
    //splits the letters in answer into individual segments
    lettersInAnswer = answer.split("");
    //change the letters into underscores
    numberOfUnderscores = lettersInAnswer.length;

    //resetting for another round
    guessesLeft = 10;
    wrongGuesses = [];
    underscoresAndCorrectLetters = [];

    //show underscores for each letter in answer
    for (var i=0; i<numberOfUnderscores; i++) {
        underscoresAndCorrectLetters.push("_");
    }

    //show underscores in the HTML
    document.getElementById("answer-text").innerHTML = underscoresAndCorrectLetters.join(" ");
    //show the number of guesses left
    document.getElementById("attempts-left-text").innerHTML = guessesLeft;

    //testing
    console.log(answer);
    console.log(charactersInAnswer);
    console.log(lettersInAnswer)
    console.log(numberOfUnderscores);
    console.log(underscoresAndCorrectLetters);
} 

function check(letter) {
    //check if letter is found in answer
    var isLetterCorrect = false;
    for (var i=0; i<numberOfUnderscores; i++) {
        if(answer[i] == letter) {
            isLetterCorrect=true;
        }
    }
    //check where the letter is found and fill it in
    if(isLetterCorrect) {
        for (var i=0; i<numberOfUnderscores; i++) {
            if(answer[i] == letter) {
            underscoresAndCorrectLetters[i] = letter;
            }
        }
    }
    //if guess is wrong
    else {
        wrongGuesses.push(letter);
        guessesLeft--;
    }

    //testing
    console.log(underscoresAndCorrectLetters);
}

function gameOver() {
    //testing
    console.log("Win count:" + winCount + " | Guesses left: " + guessesLeft);
    
    //keep track of everything in HTML
    document.getElementById("wins-text").innerHTML = winCount;
    document.getElementById("attempts-left-text").innerHTML = guessesLeft;
    document.getElementById("answer-text").innerHTML = underscoresAndCorrectLetters.join(" ");
    document.getElementById("guessed-letters-text").innerHTML = wrongGuesses.join("   ");




    //if user wins
    if (lettersInAnswer.toString() == underscoresAndCorrectLetters.toString()) {
        
        //increase wins
        winCount++;

        //alert "You win!"
        alert("You win!");
        
        //play sound "You win!"
        var audioWin = new Audio('assets/sounds/youwin.mp3');
        audioWin.play();

        //update winCount on page
        document.getElementById("wins-text").innerHTML = winCount;

        //start a new game
        startGame();
    }

    //if user loses
    else if (guessesLeft=0) {
        //alert the user "You lose."
        alert ("You lose.");
        
        //play sound "You lose!"
        var audioLose = new Audio('assets/sounds/youlose.mp3');
        audioLose.play();
        
        //start new game
        startGame();
    }



}



//CALL FUNCTIONS
//=================================================

//to start the game
startGame();

//registering keys pressed
document.onkeyup = function(event) {
    
      // captures keypress, eliminating repeat letters
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    letterGuessed = event.key;

    if (wrongGuesses.indexOf(letterGuessed) !== -1) {
        alert("You've already guessed that letter.");
        return;
      }

    
    var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();
    


    check(guessedLetter);
    
    gameOver();

    }

    //test
    console.log(guessedLetter);
    console.log(winCount)
}


