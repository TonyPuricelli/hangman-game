//array for alphabet
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//array to store user guesses
var guesses = [];

// link values to span tags
var youPick = document.getElementById("userPick");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesRemaining = document.getElementById("guessesLeft");

var gameStart = true; //boolean to determine whether new game

// initialize totals
var winTotal = 0;
var lossTotal = 0;
var guessesTotal = 9;

//print initial totals
wins.textContent = winTotal;
losses.textContent = lossTotal;
guessesRemaining.textContent = guessesTotal;

//JS function to generate random number within size of index
var randomInt = Math.floor(Math.random() * alphabet.length);
//sets computer's choice based on the random number
var compChoice = alphabet[randomInt];
console.log(compChoice);


// EVENT LISTENER: keystroke
document.onkeyup = function(event) {
  //loads user's keystroke into variable for evaluation
  let eventKey = event.key;

  // determine computer's choice (but only at start of each game)
    if (gameStart) {
        reset();
        // set game status to ongoing
        gameStart = false;
    }

  //Check whether user's keystroke is part of alphabet and hasn't already been guessed
  if ((alphabet.indexOf(eventKey) > -1) && (guesses.indexOf(eventKey) < 0)) {

    // IF USER WINS, win recorded and values reset
    console.log(eventKey);
    console.log(compChoice);
    if (eventKey == compChoice) {
        // user wins -- win total increases by 1
        winTotal++;
        reset();
    // If guess is wrong, game continues
    } else {
        guessesTotal--; //decrease guess total by 1
        guesses.push(eventKey); // add current guess to array for display
    }

    // When runs out of guesses, loss recorded and values reset
    if (guessesTotal == 0) {
        lossTotal++;
        reset(); //resets computer choice
    }

    
//END OF GAME DISPLAYS
    // print wins in span
    wins.textContent = winTotal;

    // print losses in span
    losses.textContent = lossTotal;

    // print how many guesses left in span
    guessesRemaining.textContent = guessesTotal;

    // print current guesses
    youPick.textContent = guesses;


  }
}

// FUNCTIONS
function reset() {
    //JS function to generate random number within size of index
    randomInt = Math.floor(Math.random() * alphabet.length);
    //sets computer's choice based on the random number
    compChoice = alphabet[randomInt];
    console.log(compChoice);

    // initializes guesses for each new game
    guesses = [];
    guessesTotal = 9;
}