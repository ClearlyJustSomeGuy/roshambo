const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
let player = 0;
let computer = 0;


// return player's choice by clicking the buttons
function getPlayerChoice() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            winOrLose(playRound(button.id, getComputerChoice()));
        })
        })
    };

//getComputerChoice to randomly return 'Rock' 'Paper' or 'Scissor' store as computerSelection
function getComputerChoice() {
    let choice = CHOICES[Math.floor(Math.random() * 3)];
    return choice;
}


//Write function to compare computerSelection and playerSelection and return true, false, tie
function playRound (player, comp) {
    console.log('Play Round player choice is ' + player);
    console.log('Play Round Comp choice is ' + comp);
    if (player.toUpperCase() === comp) {
        return 'TIE';
    } else if (player.toUpperCase() === 'ROCK') {
        if (comp === 'PAPER') {
            return false;
        } else if (comp === 'SCISSORS') {
            return true;
        }
    } else if (player.toUpperCase() === 'PAPER') {
        if (comp === 'SCISSORS') {
            return false;
        } else if (comp === 'ROCK') {
            return true;
        }
    } else if (player.toUpperCase() === 'SCISSORS') {
        if (comp === 'ROCK') {
            return false;
        } else if (comp === 'PAPER') {
            return true;
        }
    }
}


// Determine if win, loss or tie and iterate points for winner
function winOrLose(result) {
    if (result === 'TIE') {
        alert('Tie game!');
    } else if (result === true) {
        player++;
        alert('Congrats! You\'ve won this round!');
    } else if (result === false) {
        computer++;
        alert('Sorry! You\'ve lost this round!');
    }
    updateScore();
    console.log('Player: ' + player + '. Computer: ' + computer + '.');
}

function updateScore() {
    if (player === 5) {
        document.getElementById("final").textContent = "Congrats! You're the winner!";
    }
    else if (computer === 5) {
        document.getElementById("final").textContent = "Sorry! You've lost the whole thing!";
    }
    document.getElementById("p-score").textContent = player;
    document.getElementById("c-score").textContent = computer;
}

getPlayerChoice();