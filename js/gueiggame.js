 $(document).ready(function(){
  
    var randomNumber = Math.floor(Math.random() * 50) + 1;
    console.log("generatedNumber: " + randomNumber);
    
    var numberOfGuesses = document.getElementById("guessesLeft");
    numberOfGuesses.value = 6;
    
    document.getElementById("guess").onclick = function guess()
    {
        
        var userGuess = document.getElementById("userGuess").value;
        if(userGuess < 0 || userGuess > 100)
        {
            $('#answer').text("please enter a number between 0 and 50");
            numberOfGuesses.value++;
        }
        else if(numberOfGuesses.value == 1 && randomNumber != userGuess)
        {
            $("#answer").text("You are out of guesses. The correct number was " + randomNumber + ". Please press reset to play again.");
            $('#guess').hide();
            $('#reset').show();
          
        }
        else if(randomNumber == userGuess)
        {
            $("#answer").text("That is correct!!! Please press reset to play again.");
            $('#guess').hide();
            $('#reset').show();
        }
        else if(userGuess > randomNumber && userGuess > randomNumber + 20)
        {
            $("#answer").text("way too high");
        }
        else if(userGuess > randomNumber)
        {
            $("#answer").text("too high");
        }
        else if(userGuess < randomNumber && userGuess < randomNumber - 20)
        {
            $("#answer").text("way too low");
        }
        else
        {
            $("#answer").text("too low")    
        }
      
        numberOfGuesses.value--;
    }
    document.getElementById("reset").onclick = function reset()
    {
        location.reload(true);
    }
     });