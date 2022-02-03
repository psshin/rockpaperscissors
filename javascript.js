// Returns computer's random hand

function computerPlay() {
    const handOptions = ["Rock", "Paper", "Scissors"]
    let computerHand = handOptions[Math.floor(Math.random() * handOptions.length)];
    return computerHand;
}

function myPlay() {
    let myTurn = prompt("Rock, Paper, or Scissors?");
    let myHand = myTurn.charAt(0).toUpperCase() + myTurn.slice(1).toLowerCase();
    return myHand;
}

//function playRound(playerSelection, computerSelection) {
//    let win = false;
//    return win ? "Congrats! You win!" : ` You lose! ${computerSelection} beats ${playerSelection}! `;
//}

// Play
//const playerSelection = myPlay();
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
//}

//Game
function game() {
    let roundsPlayed = 0;
    let computerScore = 0;
    let playerScore = 0;
    for (var i = 0; i <=5; i++) {
        roundsPlayed++;
        if (roundsPlayed > 5) {
            return "Game Over.";
        } else {
            console.log(roundsPlayed);
        }
    }
}