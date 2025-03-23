const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const scoreDiv = document.querySelector('#score');
const resultDiv = document.querySelector('#result');
let humanScore = 0;
let computerScore = 0;

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

function displayScore() {
    scoreDiv.innerHTML = `Player: ${humanScore} - Computer: ${computerScore}`;
}

function humanChoiceUI(humanChoice) {
    //resultDiv.innerHTML = `You selected: ${humanChoice}`;
    const computerChoice = getComputerChoice();
    const round = playRoundUI(humanChoice, computerChoice);

    if (round === 0) {
        computerScore++;
    }
    else if (round === 1) {
        humanScore++;
    }

    checkWinner();
    displayScore();
    //return humanChoice;
}

function playRoundUI(humanChoice, computerChoice) {
    let n;
    const resultDiv = document.querySelector('#result');

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        resultDiv.innerHTML = 'You won! Rock beats Scissors!';
        n = 1;
        return n;
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        resultDiv.innerHTML = 'You lost! Paper beats Rock!';
        n = 0;
        return n;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        resultDiv.innerHTML = 'You won! Paper beats Rock!';
        n = 1;
        return n;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        resultDiv.innerHTML = 'You lost! Scissors beats Paper!';
        n = 0;
        return n;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        resultDiv.innerHTML = 'You won! Scissors beats Paper!';
        n = 1;
        return n;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        resultDiv.innerHTML = 'You lost! Rock beats Scissors';
        n = 0;
        return n;
    }
    else if (humanChoice === computerChoice) {
        resultDiv.innerHTML = 'Draw! Start again!';
        n = 2;
        return n;
    }
}

function playGameUI() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;
    let computerChoice;
    let round;

    buttonRock.addEventListener('click', () => humanChoiceUI('rock'));
    buttonPaper.addEventListener('click', () => humanChoiceUI('paper'));
    buttonScissors.addEventListener('click', () => humanChoiceUI('scissors'));

    while (humanScore !== 5 && computerScore !== 5) {
        computerChoice = getComputerChoice();
        round = playRoundUI(humanChoice, computerChoice);
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

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    displayScore();
    resultDiv.innerHTML = ''; // Effacer le message de résultat
}

function checkWinner() {
    if (humanScore === 5) {
        resultDiv.innerHTML = '🎉 You have won the game!';
        resultDiv.style.color = 'green';
        setTimeout(resetGame, 1500);
    } else if (computerScore === 5) {
        resultDiv.innerHTML = '😞 You have lost the game!';
        resultDiv.style.color = 'red';
        setTimeout(resetGame, 1500);
    }
}




buttonRock.addEventListener('click', () => humanChoiceUI('rock'));
buttonPaper.addEventListener('click', () => humanChoiceUI('paper'));
buttonScissors.addEventListener('click', () => humanChoiceUI('scissors'));