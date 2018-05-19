// Declaring Score Board //

var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var guessesTaken = [];

// declaring user movement funtion by object key //
document.onkeyup = function(event) {

var userChoice = event.key;

{guessesTaken.push(userChoice)

}

// declaring guesses and reseting game //
document.getElementById("guessesTaken").innerHTML = guessesTaken;

function resetGame()

{guessesRemaining=9;
guessesTaken=[];
}

//setting randomize computer choice + declaring user win//
var computerChoice = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))]

if (userChoice === computerChoice) {
    {wins++ && resetGame()}

    {document.getElementById('userWins').innerHTML = wins;}

    {alert("You Got Game ! Winner !")}


}
//declaring remaining guesses after move made//
else{guessesRemaining--}

{document.getElementById("guessesRemaining").innerHTML = guessesRemaining;}

//declaring user loss//
if (guessesRemaining === 0){
    alert("Try Again Playa ! You LOOZ !");
    losses++;
    resetGame();
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    document.getElementById("guessesTaken").innerHTML = null;
    {document.getElementById("userLosses").innerHTML = losses;}

}


console.log(computerChoice)
console.log(userChoice)
console.log(wins)
console.log(guessesRemaining)
console.log(losses)


}