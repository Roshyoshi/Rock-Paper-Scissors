function computerPlay() {
  let choiceNum = Math.floor(Math.random() * 3 + 1);
  return choiceNum;
}

function playerPlay() {
  let doAlways = true;
  let playerSelection;
  while (doAlways) {
    playerSelection = prompt("Rock paper or scissors?").toLowerCase();
    switch (playerSelection) {
      case "rock":
        return 1;
      case "paper":
        return 2;
      case "scissors":
        return 3;
      default:
        console.log("Invalid selection! Try again.");
        break;
    }
  }
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

function printWinner(gameStatus, playerSelection, computerSelection) {
  const defineOption = (selection) => {
    switch (selection) {
      case 1:
        return "Rock";
      case 2:
        return "Paper";
      case 3:
        return "Scissors";
    }
  };
  let playerChoice = defineOption(playerSelection);
  let computerChoice = defineOption(computerSelection);
  console.log(
    gameStatus
      ? `You win! ${playerChoice} beats ${computerChoice}`
      : `You lose! ${computerChoice} beats ${playerChoice}`
  );
}
let playerSelection, computerSelection, gameStatus;
for (let i = 0; i < 5; i++) {
  playerSelection = playerPlay();
  computerSelection = computerPlay();
  if (playerSelection === computerSelection){
    console.log("Tie!");
    continue;
  } 
  gameStatus = playRound(playerSelection, computerSelection);
  printWinner(gameStatus, playerSelection, computerSelection);
}