function game(rounds) {

    let majorityWin = Math.floor(rounds / 2 + 1);
   for (let i = 0, wincount = 0, losecount = 0; i < rounds; i++) {

    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    switch(gameTable(playerSelection, computerSelection)) {
        case "Win":
            wincount++
            break;
        case "Lose":
            losecount++
    }
    
    if (wincount === majorityWin) return "You won the game!";
    else if (losecount === majorityWin) return "You lost the game!"
   }
}

function playRound(playerSelection, computerSelection) {

    let roundResult = gameTable(playerSelection, computerSelection);
    let roundOutcome = gameDeclaration(roundResult, playerSelection, computerSelection);

    return roundOutcome;    
}

function getPlayerChoice() {
    let choice;
    while(true) {
        choice = prompt("Play Rock, Paper, or Scissors.");
        choice = choice.substr(0,1).toUpperCase() +
        choice.substr(1).toLowerCase();

        switch(choice) {
            case "Rock":
            case "Paper":
            case "Scissors":
                return choice;
        }
    }
}

function getComputerChoice() {
    let rps = ["Rock","Paper","Scissors"]
    let choice = Math.floor(Math.random() * rps.length)
    return rps[choice];
}

function gameTable(player, computer) {

    let gameTable = {
        "Rock": {"Rock":"Tie","Paper":"Lose","Scissors":"Win"},
        "Paper": {"Rock":"Win","Paper":"Tie","Scissors":"Lose"},
        "Scissors": {"Rock":"Lose","Paper":"Win","Scissors":"Tie"}
    }
        
    let roundResult = gameTable[player][computer]
    return roundResult;
}

function gameDeclaration(gameResult, player, computer) {

    let declaration;
    if (gameResult === "Win") {
        declaration = `${player} beats ${computer}`; 
    } else if (gameResult === "Lose") {
        declaration = `${computer} beats ${player}`;
    } else {
        declaration = `${player} ties with ${computer}`;
    }

    roundOutcome = `You ${gameResult}! ${declaration}.`;
    return roundOutcome;
}

console.log(game(5))