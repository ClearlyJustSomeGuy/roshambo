const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
let player = 0;
let computer = 0;

//game();

getPlayerChoice();

function getPlayerChoice() {
    let buttons = document.querySelectorAll('button');
    console.log(buttons);
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            alert(button.id);
        })
    })
        
    };
        // Previous implementation used a prompt to get user's input
        // //Get user's input of rock, paper or scissors, store in playerSelection
        // let playerSelection = prompt('Enter Rock, Paper or Scissors, please:');
        // while (playerSelection.toUpperCase() !== 'ROCK' && 
        //     playerSelection.toUpperCase() !== 'PAPER' && 
        //     playerSelection.toUpperCase() !== 'SCISSORS') {
        //     playerSelection = prompt('Hmm... why don\'t we try that again. Rock, paper or scissors, please.');
        // }
        // console.log(playerSelection);
        // return playerSelection;

// }

//getComputerChoice to randomly return 'Rock' 'Paper' or 'Scissor' store as computerSelection
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
        //alert('Sorry! ' + computerSelection + ' beats ' + playerSelection.toUpperCase() + '!');
    }
    console.log('Player: ' + player + '. Computer: ' + computer + '.');
}

//Play 5 rounds
function game() {
    for (i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        console.log(computerSelection);

        let playerSelection = getPlayerChoice();

        winOrLose(playRound(playerSelection, computerSelection));
    }

    if (player > computer) {
        alert('Congrats! You won it all!  Player: ' + player + ' Computer: ' + computer);
    } else if (computer > player) {
        alert('Sorry! The computer won it all!  Player: ' + player + ' Computer: ' + computer);
    } else {
        alert('Tie game!  Player: ' + player + ' Computer: ' + computer);
    }
}