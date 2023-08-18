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


function playRound(){
    let com_choice = getComputerChoice();
    let user_choice = getUserChoice();
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
        console.log(`You Won! ${user_choice} beats ${com_choice}`);
    } else if (result == -1){
        console.log(`You Lost! ${com_choice} beats ${user_choice}`);
    } else{
        console.log(`It's a Draw!`);
    }

    return result;
}


function game(){
    let com_points = 0;
    let user_points = 0;

    for (i = 0; i < 5; i++){
        let result = playRound();
        if (result == 1){
            user_points += 1;
        } else if (result == -1){
            com_points += 1;
        }
        console.log(com_points);
        console.log(user_points);
    }
    if (user_points < com_points){
        console.log("YOU LOSE :(((");
    } else if (user_points > com_points){
        console.log("YOU WIN!!!!");
    } else {
        console.log("It's a DRAW! :)");
    }
    return;
}


// Create a button element
const btn = document.createElement("button");

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");



// Set button attributes
btn.setAttribute("id", "myBtn");
btn.setAttribute("type", "button");
btn.setAttribute("value", "Click me");

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
btn.innerHTML = "Click me";
rockBtn.innerHTML = "Rock";
paperBtn.innerHTML = "Paper";
scissorsBtn.innerHTML = "Scissors";

// Add an event listener to the button
btn.addEventListener("click", function() {
  alert("Button clicked!");
});

// Append the button to a div element
document.getElementById("myDiv").appendChild(btn);

document.getElementById("rock").appendChild(rockBtn);
document.getElementById("paper").appendChild(paperBtn);
document.getElementById("scissors").appendChild(scissorsBtn);