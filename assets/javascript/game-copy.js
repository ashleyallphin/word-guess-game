//variables from HTML
//============================================
    var userDirections = document.getElementById("userDirections");
    var winningImage = document.getElementById("img");
    var currentWord = document.getElementById("answer");
    var numberOfWins = document.getElementById("numberOfWins");
    var attemptsLeft = document.getElementById("attemptsLeft");
    var guessedLetters = document.getElementById("guessedLetters");

//variables for JS
//=============================================
    //array that holds the answers
    var hangmanArray = ["WIMBLEDON", "THE GREAT BRITISH BAKE OFF", "LONDON BRIDGE", "THE MIGHTY BOOSH", "KURUPT FM"];

    //variable for the random word string from the hangmanArray
    var randomWord = "";

    //variable for the maximum number of attempts
    var maxAttempts = 10;

    //variable for the starting number of wins
    var wins = 0;

    //array that holds the guessed letters
    var guesses = [];
    
    //chosen word
    var chosenWord = "";

    //variable that holds the number of underscores needed for  the chosenWord length
    var underscores = [];

    //variable for the sounds
    var audio = new Audio('assets/sounds/youwin.mp3')

//Functions
//============================================

    //resets game after win or loss
    function resetGame () {
        maxAttempts = 10;
        guesses = [];
        underscores = [];
        chosenWord = "";
        newWord ();
        splitWord ();
        underscoreWord ();
    }

    //select random word from hangmanArray
        function newWord () {
            randomWord = hangmanArray[Math.floor(Math.random() * hangmanArray.length)];
            console.log(randomWord);
        }

    //puts randomWord into array
        function splitWord () {
            chosenWord = random.split("");
        }


    //creates the corresponding number of underscores needed for the currentWord
        function underscoreWord () {
            for (var i = 0; i < chosenWord.length; i++) {
                underscores[i] = "_";
            }
        }

    //plays "you win" win user wins
        function youWin () {
            audio = new Audio('assets/sounds/youwin.mp3')
            audio.play ();
        }

//functions that run on page load
//=============================================

        //picks new word from hangmanArray
        newWord();
        //splits the word into characters
        splitWord();
        //turns each character into an underscore
        underscoreWord();

        //puts the info into the HTML
        attemptsLeft.textContent = maxGuesses;
        currentWord.textContent = underscores;
        guessedLetters.textContent = guesses;
        wins.textContent = wins;

//functions that run on event code
//=============================================
        
        //when user presses a letter on the keyboard
        document.onkeyup = function(event) {

            //the user directions display: none
            userDirections.textContent = "";

            //
            var key = event.key;
            
            //print answer
            console.log(chosenWord);

            //wrong guesses
            if (guesses.indexOf(key) === -1) {
                //The key is pushed to the letterBank array
                guesses.push(key);


                //for loop that sees if the user guess is in the answer
                for (var i = 0; i < chosenWord.length; i++) {
                    //if correct guess
                    if (chosenWord[i] === key) {
                        //the same index value in underscores array is replaced with the user key
                        underscores[i] = key;
                    }
                }

            //maxAttempts reduced by one when user presses key
            maxGuesses--;

            //if all the underscores are guessed
            if (guesses.indexOf(key) === -1) {
                //add a win
                wins ++;
                //tell the user they won
                alert("You win!")
                //play you win sound mp3
                winSound();
                //show correct win image
                switch (randomWord) {
                    case "LONDON BRIDGE": winningImage.src="assets/images/londonbridge.jpg";
                    break;
                    
                    case "WIMBLEDON": winningImage.src="assets/images/wimbledon.jpg";
                    break;

                    case "KURUPT FM": winningImage.src="assets/images/kuruptfm.jpg";
                    break;

                    case "THE MIGHTY BOOSH": winningImage.src="assets/images/greatbritishbakeoff.jpg";
                    break;

                    case "THE GREAT BRITISH BAKE OFF": winningImage.src="assets/images/greatbritishbakeoff.jpg";
                    break;
            }
                resetGame ();
            }}
            else if (maxAttempts === 0) {
                resetGame();
            }   
            else {
                alert("You already guessed this letter.")
            } 

            //update HTML linked variables
            attemptsRemaining.textContent = maxGuesses;
            currentWord.textContent = underscores;
            alreadyGuessed.textContent = letterBank;
            userWins.textContent = wins;

        } //end of function








