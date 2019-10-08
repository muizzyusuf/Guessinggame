$(document).ready(function(){

var randomNum = Math.floor(Math.random() * 10) + 1;;
var myElement = $("#result");
var element2 = $('#attempts')
var tries = 0;
var chances = 4;
var userGuess = parseInt(window.prompt("Guess the number(1-10), you have "+ chances +" chances left."));
var guessArray =[];
guessArray[tries]=userGuess;


while(chances !=0){
    

    if(randomNum == userGuess){
        window.alert("Correct!");
        myElement.html("<h1> You won the game! </h1>");
        //document.write("You won the game!")
        element2.html("<h3> Your guesses where " + guessArray + "</3>")
        break;

    }else{

        if (randomNum > userGuess) {
            userGuess = parseInt(window.prompt("Wrong. Your guess is low.  Guess the number(1-10), you have "+ chances +" chance(s) left."));
        } else {
            userGuess = parseInt(window.prompt("Wrong. Your guess is high.  Guess the number(1-10), you have "+ chances +" chance(s) left."));
        }

        
            if(guessArray.includes(userGuess)){
                window.alert("Incorrect. You have guessed this before. You have "+chances+" chance(s) left.");
            }else{
                tries++;
                guessArray[tries]=userGuess;
                chances--;
            
            }
    }

    if(chances == 0){
        //document.write("Sorry, you ran out of tries. Game over.<br> The right number was "+randomNum);
        myElement.html("<h3>Sorry, you ran out of tries. Game over.<br> The right number was " +randomNum+"</h3>");
        element2.html("<h3> Your guesses where " + guessArray + "</h3>")
    }
     
}
});