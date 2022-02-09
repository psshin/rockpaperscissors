// Rock, Paper, Scissors!

let roundsPlayed = 0;
let computerScore = 0;
let playerScore = 0;
let drawRound = 0;

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

function playRound(playerSelection, computerSelection) {
    let win = false;
    if (playerSelection === computerSelection) {
        roundsPlayed--;
        drawRound++;
        return "Draw!";
    }
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        win = true;
        playerScore++;
    }
    if (
        (computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection === "Paper" && playerSelection === "Rock") ||
        (computerSelection === "Scissors" && playerSelection === "Paper")
    ) {
        win = false;
        computerScore++;
    }
    return win ? "Congrats! You win!" : ` You lose! ${computerSelection} beats ${playerSelection}! `;
}

//Game

function game() {
    for (var i = 0; i >= 0; i++) {
        roundsPlayed++;
        const playerSelection = myPlay();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if (roundsPlayed === 5) {
            return console.log(` Game Over! Computer Score: ${computerScore} | Your Score: ${playerScore} | Draw: ${drawRound} `);
        } else {
            console.log(` ${roundsPlayed} of 5 Rounds Played `);
        }
    }
}
game();