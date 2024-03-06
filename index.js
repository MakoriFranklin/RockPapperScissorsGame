
const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultsDisplay =document.getElementById('resultsDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

let playerScore = 0;
let computerScore = 0;

function playGame(playChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result ='';
    if(playChoice===computerChoice){
        result = "IT'S A TIE!!!"
    }else{
        switch(playChoice){
            case "rock":
                result = (computerChoice==='scissors')? "YOU WIN":"YOU LOSE";
                break;
            
            case "paper":
              result = (computerChoice==='rock')? "YOU WIN":"YOU LOSE";
                break;
            case "scissors":
                result = (computerChoice==='paper')? "YOU WIN":"YOU LOSE";
                break;

        }
    }

    playerDisplay.textContent = `Player: ${playChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultsDisplay.textContent = `Result: ${result}`;

    resultsDisplay.classList.remove("greenText", "redText");
    switch(result){
        case "YOU WIN":
            resultsDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore
            break;
        case "YOU LOSE":
            resultsDisplay.classList.add("redText");
            computerScore++
            computerScoreDisplay.textContent = computerScore;
            break;            
    }
}