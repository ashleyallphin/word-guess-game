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


//HTML variables
//=================================================


//JS variables
//=================================================

//possible answers stored in hangmanArray
var hangmanArray = ["WIMBLEDON", "THE GREAT BRITISH BAKING SHOW", "KURUPT FM", "LONDON BRIDGE", "THE MIGHTY BOOSH"];

//pick a random variable from the array to be the answer
var answer = hangmanArray[Math.floor(Math.random() * hangmanArray.length)];





//variables to hold the number of wins, losses, and ties; starts at 0
var wins = 0;
var attemptsLeft = 10;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var attemptsLeftText = document.getElementById("attempts-left-text");
var guessedLettersText = document.getElementById("guessed-letters-text");


//Functions
//=================================================

//removes userDirections element from the document

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}




//call functions
//=================================================

//when a key is pressed and released:
document.onkeyup = function(event) {

    //determines which key was pressed and stores it in "guessedLetters"
    var guessedLetters = event.key;
    
    //removes userDirections and stores it in the variable "removed1"
    var removed1 = userDirectionsParent.removeChild(userDirections);

        //removes userDirections and stores it in the variable "removed2"
        var removed2 = getStartedParent.removeChild(getStarted);


}

console.log(answer);

winsText.textContent = wins;
attemptsLeftText.textContent = attemptsLeft;
guessedLettersText.textContent = guessedLetters;

