// We're creating the game: Rock, Paper, Scissors
//
// HOW THE PROGRAM WORKS:
// A player is going to select rock, paper, or scissors
// A computer is going to *randomly* select rock, paper, or scissors ✅
//
// RULES OF THE GAME:
// - Rock beats Scissors
// - Scissors beats Paper
// - Paper beats Rock
//
// - Rock and Rock is a tie
// - Scissors and Scissors is a tie
// - Paper and Paper is a tie
//
// The game is usually best 2 out of 3 wins.

const choices = ["Rock", "Paper", "Scissors"];
let score = 0;

let getComputersChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

const computersChoice = getComputersChoice(choices);

function getRock() {
    const playerSelection = `Rock`;

    if (computersChoice === choices[0]) {
        alert(`It's a tie! You both selected ${computersChoice}`);
    } else if (computersChoice === choices[1]) {
        alert(`You lost! Paper beats Rock`);
    } else alert(`You won! Rock beats Scissors`);
}

function getPaper() {
    playerSelection = `Paper`;

    if (computersChoice === choices[1]) {
        alert(`It's a tie! You both selected ${computersChoice}`);
    } else if (computersChoice === choices[2]) {
        alert(`You lost! Scissors beats Paper`);
    } else alert(`You won! Paper beats Rock`);
}

function getScissors() {
    playerSelection = `Scissors`;

    if (computersChoice === choices[2]) {
        alert(`It's a tie! You both selected ${computersChoice}`);
    } else if (computersChoice === choices[0]) {
        alert(`You lost! Rock beats Scissors`);
    } else alert(`You won! Scissors beats Papaer`);
}