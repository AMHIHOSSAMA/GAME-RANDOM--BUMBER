var mssg1 = document.getElementById("message1");
var mssg2 = document.getElementById("message2");
var mssg3 = document.getElementById("message3");




var answer = Math.floor(Math.random()*100 + 1);
// L'envoi d'un nombre aléatoire  entre (1 et 100)
var no_of_guesses = 0;
// La d'un variable et leur valeur(0)
var guesses_num = [] ;
// vARIABLE VIDE jusqua mantenet
function play(){
    var user_guess = document.getElementById("number-input").
    value;
    // La Connectivité de l'input avec la variable 'user_guess'
    if(user_guess < 1 || user_guess > 100 ){
        alert("Please enter a number between 1 and 100")
        //La premiere condition si la valeur  de 'user_guess'< 1 ou >100 sera afficher un message ("Please enter a number between 1 and 100")
    } else{
        guesses_num.push(user_guess);
        no_of_guesses += 1;
        // la processu sera passer au suivre
        if(user_guess < answer){
            mssg1.textContent = "Your guess is too low";
            mssg2.textContent = "No. of guesses: " + no_of_guesses ;
            mssg3.textContent = "Guessed numbers are :" + guesses_num;
        }
        else if(user_guess > answer){
            mssg1.textContent = "Your guess is too hight";
            mssg2.textContent = "No. of guesses: " + no_of_guesses ;
            mssg3.textContent = "Guessed numbers are :" + guesses_num;
        }
        else if(user_guess == answer){
            mssg1.textContent = "Yippie you win!!";
            mssg2.textContent = "The number was :" + answer;
            mssg3.textContent = "You guessed it in " + no_of_guesses +" guesses";
            document.getElementById(enter).disabled = true;
        }
    
    }if(no_of_guesses >= 11){
        mssg3.textContent = "You lost the game, exceeded 10 referrals !!";
    }   
}