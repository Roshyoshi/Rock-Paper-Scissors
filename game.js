const whoWon = document.getElementById("winner");
const playerPoints = document.getElementById("playerpoints");
const computerPoints = document.getElementById("computerpoints");
const finalWinner = document.getElementById("finalwinner");

function computerPlay() {
  return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

function playRound(playerSelection, computerSelection) {
  let gameVar = playerSelection - computerSelection;
  switch (gameVar) {
    case 1:
      return true;
    case -1:
      return false;
    case 2:
      return false;
    case -2:
      return true;
  }
}

function Winner(gameStatus, playerSelection, computerSelection) {
  const defineOption = (selection) => {
    switch (selection) {
      case 1:
        return "Rock";
      case 2:
        return "Paper";
      case 3:
        return "Scissors";
      default:
        return "ERROR";
    }
  };
  let playerChoice = defineOption(playerSelection);
  let computerChoice = defineOption(computerSelection);
  if (gameStatus) {
    playerPoints.textContent = Number(playerPoints.textContent) + 1;
    return `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerPoints.textContent = Number(computerPoints.textContent) + 1;
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }
}

function game(playerSelection) {
  const computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    whoWon.textContent = "Tie!";
    return;
  }
  const gameStatus = playRound(playerSelection, computerSelection);
  whoWon.textContent = Winner(gameStatus, playerSelection, computerSelection);
}
function playerPlay(e) {
  e.stopPropagation();
  console.log(e.target.getAttribute("class"));
  if (e.target.getAttribute("class") !== "butn") return;
  game(Number(e.target.getAttribute("id")));
  const currentPlayerPoints = Number(playerPoints.textContent);
  const currentComputerPoints = Number(computerPoints.textContent);
  if (currentPlayerPoints == 5 && currentComputerPoints < 5)
    finalWinner.textContent = "You.";
  else if (currentComputerPoints == 5 && currentPlayerPoints < 5) 
    finalWinner.textContent = "The Computer.";
}

const buttons = document.querySelectorAll("button");
buttons.forEach(() =>
  addEventListener("click", playerPlay, {
    capture: false,
  })
);
