// Write function getComputerChoice to randomly return 'Rock' 'Paper' or 'Scissor' store as computerSelection

let choices = ['ROCK', 'PAPER', 'SCISSORS'];
let computerSelection = getComputerChoice();

console.log(computerSelection);

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

//Get user's input of rock, paper or scissors, store in playerSelection
let playerSelection = prompt('Enter Rock, Paper or Scissors, please:');
console.log(playerSelection);

//Write function to compare computerSelection and playerSelection and return win or lose

function playRound (player, comp) {
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


// Determine if win, loss or tie
if (playRound(playerSelection, computerSelection) === 'TIE') {
    console.log('Tie game!');
} else if (playRound(playerSelection, computerSelection) === true) {
    console.log('Congrats! ' + playerSelection.toUpperCase() + ' beats ' + computerSelection + '!');
} else if (playRound(playerSelection, computerSelection) === false) {
    console.log('Sorry! ' + computerSelection + ' beats ' + playerSelection.toUpperCase() + '!');
}