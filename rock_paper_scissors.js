function getComputerChoice () {
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

function getHumanChoice () {
    let answer;

    while (answer !== 'rock' && answer !== 'paper' && answer !== 'scissors') {
        answer = prompt('Enter rock, paper or scissors : ');
        answer = answer.toLowerCase();
    }

    return answer;
}

let humanScore = 0;
let computerScore = 0;
