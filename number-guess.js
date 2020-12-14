var computerNumber = 5; //will add math random later
var userGuess;

var guessIsCorrect = false;

while (guessIsCorrect === false) {
  
  //prompt user guess
  userGuess = prompt("Guess a number between 1 and 10.");
  
  //validate guess
  if (userGuess < 1 || userGuess > 10) {
    alert("Entry is not valid. Please enter a number between 1 and 10."); 
  } 
  
    //compare user guess to computer's number
    else { 
      
      //alerts to incorrect guess
      if (userGuess != computerNumber) { 
      alert("Sorry, that's not the number. Guess again!"); 
    } 
        //alerts to correct guess
        else if (userGuess = computerNumber) { 
        alert("Bingo! " + userGuess + " was the right number.");
        guessIsCorrect === true;
    }
  }
  
} //WHILE