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
      return "rock";
    case 1:
      console.log("Computer selected Paper");

      return "paper";
    case 2:
      console.log("Computer selected Scissor");
      return "scissor";
    default:
      return "Error getComputerChoice";
  }
}

function playRound(playerSelection, computerSelection) {
  
  let player = this.id;
  console.log("You selected "+player[0].toUpperCase()+player.substring(1));
  let computer = getComputerChoice();

  //tie
  if (player === computer) {
    console.log( "Its a Tie");
  } else if (player === "rock") {
    if (computer === "paper") {
      computerScore++;
      console.log("You Lose! Paper beats Rock");
    } else if (computer === "scissor") {
      playerScore++;
      console.log("You Win! Rock beats Scissor");
    }
  } else if (player === "paper") {
    if (computer === "scissor") {
      computerScore++;
      console.log("You Lose! Scissor beats Paper");
    } else if (computer === "rock") {
      playerScore++;
      console.log("You Win! Paper beats Rock");
    }
  } else if (player === "scissor") {
    if (computer === "rock") {
      computerScore++;
      console.log("You Lose! Rock beats Scissor");
    } else if (computer === "paper") {
      playerScore++;
      console.log("You Win! Scissor beats Paper");
    }
  }
console.log("\n");
 // console.log("Error playRound() ");
}

/*function game() {
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
}*/

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
//game();




const buttons=document.querySelectorAll("button");
console.log(buttons);

buttons.forEach(btn => btn.addEventListener('click',playRound));

function test(){
  console.log(this.id);
 
}