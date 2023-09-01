function game(roundnumbers) {
  let wincount = 0;
  let losecount = 0;
  let display = document.querySelector(".display");
  let lose = document.querySelector("#lose>p");
  let win = document.querySelector("#win>p");

  return (playRound) => {
    display.textContent = playRound.roundOutcome;

    switch (playRound.roundResult) {
      case "Win":
        wincount++;
        win.textContent = "\n" + wincount;
        break;
      case "Lose":
        losecount++;
        lose.textContent = "\n" + losecount;

        if (wincount === roundnumbers) {
          display.innerHTML += "<p>Winner, Winner, Chickendinner!<p>";
          display = null;
        } else if (losecount === roundnumbers) {
          display.innerHTML += "<p>Lost! Better luck next time.<p>";
          display = null;
        }
    }
  };
}

let playAGame = game(5);

function playRound(playerSelection, computerSelection) {
  let roundResult = gameTable(playerSelection, computerSelection);
  let roundOutcome = gameDeclaration(
    roundResult,
    playerSelection,
    computerSelection
  );
  return {
    roundResult,
    roundOutcome,
  };
}

(function getPlayerChoice() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let playedRound;
      playedRound = playRound(e.target.className, getComputerChoice());
      playAGame(playedRound);
    });
  });
})();

function getComputerChoice() {
  let rps = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * rps.length);
  return rps[choice];
}

function gameTable(player, computer) {
  let gameTable = {
    Rock: { Rock: "Tie", Paper: "Lose", Scissors: "Win" },
    Paper: { Rock: "Win", Paper: "Tie", Scissors: "Lose" },
    Scissors: { Rock: "Lose", Paper: "Win", Scissors: "Tie" },
  };

  let roundResult = gameTable[player][computer];
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
