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
        updateScore();
    } else if (result === true) {
        player++;
        alert('Congrats! You\'ve won this round!');
        updateScore();
    } else if (result === false) {
        computer++;
        alert('Sorry! You\'ve lost this round!');
        updateScore();
    }
    console.log('Player: ' + player + '. Computer: ' + computer + '.');
}

function updateScore() {
    let pScore = document.querySelector('.p-score');
    let cScore = dcoument.querySelector('.c-score');
    pScore.textContent = player;
    cScore.textContent = computer;
}


//Play 5 rounds
// function game() {
    // for (i = 0; i < 5; i++) {
    //     let computerSelection = getComputerChoice();
    //     console.log('Computer\'s selection = ' + computerSelection);

    //     let playerSelection;
    //     while (playerSelection === undefined) {
    //         playerSelection = getPlayerChoice();
    //     }
    //     console.log('Player selection = ' + playerSelection);

        
    // }

    // if (player > computer) {
    //     alert('Congrats! You won it all!  Player: ' + player + ' Computer: ' + computer);
    // } else if (computer > player) {
    //     alert('Sorry! The computer won it all!  Player: ' + player + ' Computer: ' + computer);
    // } else {
    //     alert('Tie game!  Player: ' + player + ' Computer: ' + computer);
    // }
// }

// game();

getPlayerChoice();