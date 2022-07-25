//return random number between 0-2
function random() {
  let rand = Math.floor(Math.random() * 3);
  return rand;
}

function getComputerChoice() {
  let select = random();
  switch (select) {
    case 0:
        console.log("Computer selected Rock");
      return "ROCK";
      break;
    case 1:
        console.log("Computer selected Paper");

      return "PAPER";
      break;
    case 2:
        console.log("Computer selected Scissor");
      return "SCISSOR";
      break;
    default:
      return "Error getComputerChoice";
  }
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();

  //tie
  if (player === computer) {
    return "Its a Tie";
   
  } else if (player === "rock") {
    if (computer === "paper") {
      return "You Lose! Paper beats Rock";
      
    } else if (computer === "scissor") {
      return "You Win! Rock beats Scissor";
      
    }
  } else if (player === "paper") {
    if (computer === "scissor") {
      return "You Lose! Paper beats Rock";
      
    } else if (computer === "rock") {
      return "You Win! Rock beats Scissor";
      
    }
  } else if (player === "scissor") {
    if (computer === "rock") {
      return "You Lose! Paper beats Rock";
    } else if (computer === "paper") {
      return "You Win! Rock beats Scissor";
      
    }
  }

  return "Error playRound() ";
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
