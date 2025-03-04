function getComputerChoice() {
    let number = Math.floor(Math.random()*3);
    let answer;

    if (number === 0) {
        answer = 'rock';
        return answer
    }
    else if (number === 1) {
        answer = 'paper';
        return answer
    } 
    else {
        answer = 'scissors';
        return answer
    }
}

function getHumanChoice() {
    let answer;

    while (answer !== 'rock' && answer !== 'paper' && answer !== 'scissors') {
        answer = prompt('Enter rock, paper or scissors : ');
        answer = answer.toLowerCase();
    }

    return answer;
}

function playRound(humanChoice, computerChoice) {

    let n;

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You won! Rock beats Scissors!');
        n = 1;
        return n;
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lost! Paper beats Rock!');
        n = 0;
        return n;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You won! Paper beats Rock!');
        n = 1;
        return n;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lost! Scissors beats Paper!');
        n = 0;
        return n;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You won! Scissors beats Paper!');
        n = 1;
        return n;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log('You lost! Rock beats Scissors');
        n = 0;
        return n;
    }
    else if (humanChoice === computerChoice) {
        console.log('Draw! Start again!');
        n = 2;
        return n;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;
    let computerChoice;
    let round;

    while (humanScore !== 5 && computerScore !== 5) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        round = playRound(humanChoice, computerChoice);
        if (round === 0) {
            computerScore++;
        }
        else if (round === 1) {
            humanScore++;
        }
    }

    if (humanScore === 5) {
        console.log('You have won! Here is the score : ' + humanScore + ' to ' + computerScore);
    }
    else {
        console.log('You have lost! Here is the score : ' + humanScore + ' to ' + computerScore);
    }
}

playGame();




/*
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
let response = playRound(humanSelection, computerSelection);

console.log(response);*/

