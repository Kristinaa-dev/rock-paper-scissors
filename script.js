function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return "Rock";
    } else if (choice === 1){
        return "Paper";
    } else{
        return "Scissors";
    }
}
// console.log(getComputerChoice())

function playRound(playerSelection, computerSelection){
    let playerInput = playerSelection.toLowerCase();
    let compInput = computerSelection.toLowerCase();
    // console.log(playerInput, compInput);
    if (playerInput === compInput){
        return "Draw";
    } else if (playerInput === "rock" && compInput === "scissors"){
        return "You Win! rock beats scissors";
    } else if (playerInput === "paper" && compInput === "rock"){
        return "You Win! paper beats rock";
    } else if (playerInput === "scissors" && compInput == "paper"){
        return "You Win! scissors beat paper";
    } else {
        return `You Lose! ${compInput} beats ${playerInput}`;
    }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game(){
    let playerComp = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Type your choice");
        let result = playRound(userInput, getComputerChoice());

    }
}