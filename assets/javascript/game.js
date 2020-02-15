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
var hangmanArray = ["wimbledon", "thegreatbritishbakeoff", "kuruptfm", "londonbridge", "themightyboosh"];
// images
var hangmanImages = ["wimbledon.jpg", "thegreatbritishbakingshow.jpg", "kuruptfm.jpg", "londonbridge.jpg", "themightyboosh.jpg"]
//answer the computer chose from hangmanArray
var answer = "";
//image to match answer the computer chose from hangmanArray
var correctImage = "";
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
var questionMarks = "assets/images/questionmarks.png";
var directions = "Press a key to guess a letter."





//FUNCTIONS
//=================================================



function startGame () {
    //select an answer
    var randomNumber = Math.floor(Math.random() * hangmanArray.length);
    answer = hangmanArray[randomNumber];
    //match correct image to answer
    correctImage = hangmanImages[randomNumber];
    //console.log(correctImage);
    //console.log(answer);
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
    // show winning image
    document.getElementById("img").innerHTML = correctImage;
    //remove directions
    document.getElementById("directions-text-mobile").innerHTML = directions;
    document.getElementById("directions-text-desktop").innerHTML = directions;

} 

function check(letter) {
 var isLetterCorrect = false;
    //checks to see if letter is in answer
    for (var i = 0; i < numberOfUnderscores; i++) {
        if(answer[i] == letter) {
            underscoresAndCorrectLetters[i] = letter;
            isLetterCorrect = true; 
       }
    }

    if (!isLetterCorrect) {

            wrongGuesses.push(letter);
            guessesLeft--;

    }
}

function nextRound() {
    
    //keep track of everything in HTML
    document.getElementById("img").src = questionMarks;
    document.getElementById("wins-text").innerHTML = winCount;
    document.getElementById("attempts-left-text").innerHTML = guessesLeft;
    document.getElementById("answer-text").innerHTML = underscoresAndCorrectLetters.join(" ");
    document.getElementById("guessed-letters-text").innerHTML = wrongGuesses.join("   ");

    //if user wins
    if (lettersInAnswer.toString() == underscoresAndCorrectLetters.toString()) {
        
        //show kuruptfm.jpg on win
        //document.getElementById("img").src = "assets/images/kuruptfm.jpg";
        //console.log(correctImage);

        //show CORRESPONDING IMAGE ON WIN
        document.getElementById("img").src = "assets/images/" + correctImage;
        //testing console.log(correctImage);

        //increase wins
        winCount++;

        //alert "You win!"
        alert("Well done you!");
        
        //play sound "You win!"
        var audioWin = new Audio('assets/sounds/jollygood.m4a');
        audioWin.play();

        //update winCount on page
        document.getElementById("wins-text").innerHTML = winCount;

        //start a new game
        startGame();
    }
        //if user loses
    else if (!guessesLeft) {
        
        //alert the user "You lose."
        alert ("Sorry, mate.");
        
        //play sound "You lose!"
        var audioLose = new Audio('assets/sounds/ghastly.m4a');
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
    

    //only letters accepted
    if (event.keyCode >= 65 && event.keyCode <= 90) {
    letterGuessed = event.key;

    //doesn't allow wrong guesses to be repeated
        if (wrongGuesses.indexOf(letterGuessed) !== -1) {
            alert("You've already guessed that letter.");
            return;
            }
        
        var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();
        
        //run check for guessed letter in answer
        check(guessedLetter);
        
        //run next round
        nextRound();



    }
}



