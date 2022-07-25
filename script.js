var playerScore = 0;
var computerScore = 0;

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
      computerScore++;
      return "You Lose! Paper beats Rock";
    } else if (computer === "scissor") {
      userScore++;
      return "You Win! Rock beats Scissor";
    }
  } else if (player === "paper") {
    if (computer === "scissor") {
      computerScore++;
      return "You Lose! Scissor beats Paper";
    } else if (computer === "rock") {
      userScore++;
      return "You Win! Paper beats Rock";
    }
  } else if (player === "scissor") {
    if (computer === "rock") {
      computerScore++;
      return "You Lose! Rock beats Scissor";
    } else if (computer === "paper") {
      userScore++;
      return "You Win! scissor beats Paper";
    }
  }

  return "Error playRound() ";
}

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

var gameRounds = 5;

function game() {
  for (let rounds = 0; rounds < gameRounds; gameRounds++) {
    //ToDO check userinput
    let playerSelection = prompt("Select between Rock, Paper, Scissor");
    playerSelection = playerSelection.toLocaleLowerCase();
    let inputTrue = checkPlayerInput(playerSelection);
    while (!inputTrue) {
      playerSelection = prompt(
        "Wrong Input. Please Select between Rock, Paper, Scissor"
      );
    }
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("------------------------------------");
  }
  selectWinner(userScore,computerScore);
}

function checkPlayerInput(playerSelection) {
  switch (playerSelection) {
    case "rock":
      console.log("You Selected Rock!");
      return true;
    case "paper":
      console.log("You Selected Paper!");
      return true;
    case "scissor":
      console.log("You Selected Scissor!");
      return true;
    default:
      return false;
  }
}

function selectWinner(userScore, computerScore) {
  const score = "You: " + userScore + " Computer: " + computerScore;

  if(userScore==computerScore){
    console.log("Its a Tie! End Score : " + score);
  }

  if (userScore > computerScore) {
    console.log("You Win! End Score : " + score);
  } else {
    console.log("You Lose! End Score : " + score);
  }
}
game();
