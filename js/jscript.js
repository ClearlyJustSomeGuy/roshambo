const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
let player = 0;
let computer = 0;


//Play 5 rounds
for (i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    console.log(computerSelection);

    //Get user's input of rock, paper or scissors, store in playerSelection
    let playerSelection = prompt('Enter Rock, Paper or Scissors, please:');
    while (playerSelection.toUpperCase() !== 'ROCK' && playerSelection.toUpperCase() !== 'PAPER' && playerSelection.toUpperCase() !== 'SCISSORS') {
        playerSelection = prompt('Hmm... why don\'t we try that again. Rock, paper or scissors, please.');
    }
    console.log(playerSelection);

    // Determine if win, loss or tie
    if (playRound(playerSelection, computerSelection) === 'TIE') {
        console.log('Tie game!');
    } else if (playRound(playerSelection, computerSelection) === true) {
        player++;
        console.log('Congrats! ' + playerSelection.toUpperCase() + ' beats ' + computerSelection + '!');
    } else if (playRound(playerSelection, computerSelection) === false) {
        computer++;
        console.log('Sorry! ' + computerSelection + ' beats ' + playerSelection.toUpperCase() + '!');
    }
    console.log('Player: ' + player + '. Computer: ' + computer + '.');
}



// Write function getComputerChoice to randomly return 'Rock' 'Paper' or 'Scissor' store as computerSelection
function getComputerChoice() {
    let choice = CHOICES[Math.floor(Math.random() * 3)];
    return choice;
}


//Write function to compare computerSelection and playerSelection and return true, false, tie
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