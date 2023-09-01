function getComputerChoice(){
    let choiceNum = Math.floor(Math.random()*3);
    const choices = ["Rock", "Paper","Scissors"];
    return choices[choiceNum];
}

function getUserChoice(){
    let input = prompt();
    // make input case insensitive and return it
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
}

function displayResult(result){
    document.getElementById("result").innerHTML = "";   
    const resultDiv = document.createElement("div");
    resultDiv.setAttribute("id", "result");
    resultDiv.innerHTML = result;
    document.getElementById("result").appendChild(resultDiv);
}

function playRound(user_choice){
    let com_choice = getComputerChoice();
    console.log(com_choice);
    console.log(user_choice);

    let result = 0;


    if (user_choice == "Rock"){
        if (com_choice == "Rock"){
            result = 0;
        } else if (com_choice == "Paper"){
            result = -1;
        } else {
            result = 1;
        }
    } else if (user_choice == "Paper"){
        if (com_choice == "Paper"){
            result = 0;
        } else if (com_choice == "Scissors"){
            result = -1;
        } else {
            result = 1;
        }
    } else if (user_choice == "Scissors"){
        if (com_choice == "Scissors"){
            result = 0;
        } else if (com_choice == "Rock"){
            result = -1;
        } else {
            result = 1;
        }
    }

    if (result == 1){
        displayResult(`You Won! ${user_choice} beats ${com_choice}`);
    } else if (result == -1){
        displayResult(`You Lost! ${com_choice} beats ${user_choice}`);
    } else{
        displayResult(`It's a Draw!`);
    }

    game(result);
}

let com_points = 0;
let user_points = 0;

function game(result){

    
    // let result = playRound();
    if (result === 1){
        user_points += 1;
    } else if (result === -1){
        com_points += 1;
    }
    // displayScore();

    if (user_points === 5 || com_points === 5){
        if (user_points < com_points){
            console.log("YOU LOST HAHAH:(((");
        } else if (user_points > com_points){
            console.log("YOU WIN THE GAMEEE!!!!");
        } else {
            console.log("It's a DRAW! BRUH");
        }
        console.log("computer points: " + com_points);
        console.log("user points: " + user_points);
        return;
    }

    const score = document.createElement("div");
    score.setAttribute("id", "score");
    score.innerHTML = `Computer: ${com_points} User: ${user_points}`;
    document.getElementById("score").appendChild(score );

    console.log(com_points);
    console.log(user_points);
    

    console.log("computer points: " + com_points);
    console.log("user points: " + user_points);
    return;
}


// Create a button element

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");



// Set button attributes

rockBtn.setAttribute("id", "rock");
rockBtn.setAttribute("type", "butotn");
rockBtn.setAttribute("value", "Rock");

paperBtn.setAttribute("id", "paper");
paperBtn.setAttribute("type", "butotn");
paperBtn.setAttribute("value", "Paper");
scissorsBtn.setAttribute("id", "scissors");
scissorsBtn.setAttribute("type", "butotn");
scissorsBtn.setAttribute("value", "Scissors");
// Add text to the button
rockBtn.innerHTML = "Rock";
paperBtn.innerHTML = "Paper";
scissorsBtn.innerHTML = "Scissors";

// Add an event listener to the button

rockBtn.addEventListener("click", function() {
    playRound("Rock");
});

paperBtn.addEventListener("click", function() {
    playRound("Paper");
});

scissorsBtn.addEventListener("click", function() {
    playRound("Scissors");
});

// Append the button to a div element

document.getElementById("rock").appendChild(rockBtn);
document.getElementById("paper").appendChild(paperBtn);
document.getElementById("scissors").appendChild(scissorsBtn);