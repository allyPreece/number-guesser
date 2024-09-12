let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 9)
}
function compareGuesses(userGuess, computerGuess, target) {
    let userDifference = userGuess > target ? userGuess - target : target - userGuess
    let computerDifference = computerGuess > target ? computerGuess - target : target - computerGuess;

    if (userDifference === computerDifference || userDifference < computerDifference) {
        return true;
    }
    else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore +=1
    }
    else {
        computerScore +=1
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}
