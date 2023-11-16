function getComputerChoice(){
    let choiceNum = Math.floor(Math.random()*3);
    const choices = ["Rock", "Paper","Scissors"];
    return choices[choiceNum];
}



function playRound(user_choice){
    let com_choice = getComputerChoice();
    // let user_choice = getUserChoice();
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
function compInput(choice){
    console.log(choice);
    choice = "computer" + choice;
    document.getElementById('computerRock').style.display = 'none';
    document.getElementById('computerPaper').style.display = 'none';
    document.getElementById('computerScissors').style.display = 'none';
    document.getElementById('choicePrompt').style.display = 'none';
    // Display the button that was clicked
    document.getElementsByClassName("computerInterface").style.display = 'block';
    document.getElementById('ui').style.flexDirection = 'row';
    document.getElementById(choice).style.display = 'block';



    // document.getElementsByClassName('ui').style.display = 'flex';

    
}


function userInput(choice){
    console.log(choice);
    document.getElementById('rock').style.display = 'none';
    document.getElementById('paper').style.display = 'none';
    document.getElementById('scissors').style.display = 'none';
    document.getElementById(choice).style.display = 'block';
    document.getElementById('choicePrompt').style.display = 'none';
    // Display the button that was clicked
    document.getElementById('userPrompt').style.display = 'block';
    compInput(getComputerChoice());

    
}



