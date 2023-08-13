function getComputerChoice() {
    let rps = ["Rock","Paper","Scissors"]
    let choice = Math.floor(Math.random() * rps.length)
    return rps[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.substr(0,1).toUpperCase() +
    playerSelection.substr(1,playerSelection.length-1).toLowerCase();

    let roundResult = gameTable(playerSelection, computerSelection);
    let roundOutcome = gameDeclaration(roundResult, playerSelection, computerSelection);

    return roundOutcome;    
}

function game() {
    return 0;
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
    } else if (gameResult === "Loose") {
        declaration = `${computer} beats ${player}`;
    } else {
        declaration = `${player} ties with ${computer}`;
    }

    roundOutcome = `You ${gameResult}! ${gameDeclaration}.`;
    return roundOutcome;
}