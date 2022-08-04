var playerScore = 0
const pScore=document.querySelector("#player-score");
pScore.textContent=`${playerScore}`;
var computerScore = 0;
const cScore=document.querySelector('#computer-score');
cScore.textContent=`${computerScore}`;
  

//return random number between 0-2
//get Buttons/choices
const buttons=document.querySelectorAll("button");
//add Eventlistener
buttons.forEach(btn => btn.addEventListener('click',playRound));

//modal
const modelcontainer=document.querySelector(".modal")
const restart=document.querySelector("#restart");
restart.addEventListener('click',restartGame);

function restartGame(){
  playerScore=0;
  computerScore=0;
  cScore.textContent=`${computerScore}`;
  pScore.textContent=`${playerScore}`;
  modelcontainer.classList.remove("show-modal")
}

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

function addPoints(winner){
  
  if(winner>0){
    computerScore++;
    cScore.textContent=`${computerScore}`;
    
  }else{
    playerScore++;
    pScore.textContent=`${playerScore}`;
  }
  if(playerScore==5||computerScore==5){ 
    displayWinner(playerScore,computerScore);
  }

}

function displayWinner(player,computer){
 
  if(player>computer){
    const result=document.querySelector("#result")
    result.textContent="You win!"
    modelcontainer.classList.add("show-modal");
    
  }else{
    result.textContent="You lose!"
    modelcontainer.classList.add("show-modal");
  }
  

}

function result(winner){
  const result=document.querySelector('.result>p');
  switch(winner){
   
    case  0 : addPoints(0); result.textContent="You win, Rock beats Scissor";break;
    case  2 : addPoints(0); result.textContent="You win, Scissor beats Paper";break;
    case  4 : addPoints(0); result.textContent="You win, Paper beats Rock";break;

    case  1 : addPoints(1); result.textContent="You lose, Rock beats Scissor";break;
    case  3 : addPoints(1); result.textContent="You lose, Scissor beats Paper";break;
    case  5 : addPoints(1); result.textContent="You lose, Paper beats Rock";break;
    
    default: result.textContent="It's a tie, try again!";break;
  }
  
}

function playRound(playerSelection, computerSelection) {

  let player = this.id;
  console.log("You selected "+player[0].toUpperCase()+player.substring(1));
  let computer = getComputerChoice();

  //tie
  if (player === computer) {
   result(-1);
    
  } else if (player === "rock") {
    if (computer === "paper") {
      result(5);
    } else if (computer === "scissor") {
      result(0);
    }
  } else if (player === "paper") {
    if (computer === "scissor") {
     result(3)
    } else if (computer === "rock") {
      result(4);
    }
  } else if (player === "scissor") {
    if (computer === "rock") {
      result(1);
    } else if (computer === "paper") {
      result(2);
    }
  }

}








