// Write function getComputerChoice to randomly return 'Rock' 'Paper' or 'Scissor' store as computerSelection

let choices = ['ROCK', '[PAPER]', 'SCISSORS'];
let computerSelection = getComputerChoice();

console.log(computerSelection);

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

//Get user's input of rock, paper or scissors, store in playerSelection
let playerSelection = prompt('Enter Rock, Paper or Scissors, please:');


//Write function to compare computerSelection and playerSelection and return win or lose

