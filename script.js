const computerSelectionArray = ["Rock", "Paper", "Scissors"];
let result = "";
let outcome = "";
const getComputerChoice = () => {
  let choice =
    computerSelectionArray[
      Math.floor(Math.random() * computerSelectionArray.length)
    ];
  return choice.toLowerCase();
};

const playerResult = () => {
  if (playerChose === computerSelectionArray[0].toLowerCase()) {
    result = `rock`;
  } else if (playerChose === computerSelectionArray[1].toLowerCase()) {
    result = `paper`;
  } else if (playerChose === computerSelectionArray[2].toLowerCase()) {
    result = `scissors`;
  } else {
    result = `There is no move like that`;
  }

  return result;
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = prompt(`Chose Your weapon!!`).toLowerCase().valueOf();
  computerSelection = getComputerChoice().valueOf();
  

  if (playerSelection === computerSelection) {
    outcome = `It's a Tie`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    outcome = `You lose!! Paper covers Rock`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    outcome = `You lose!! Scissors cut Paper`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    outcome = `You lose!! Rock Crushes Scissors`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    outcome = `You win!! Paper covers Rock`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    outcome = `You win!! Scissors cut Paper`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    outcome = `You win!! Rock Crushes Scissors`;
  }
  
  return outcome;
};

//console.log(playRound())

const game = () => {
    for (let i = 0; i < 5; i++){
        playRound();
        console.log(playRound())
        // if (){
        //     console.log(`tie`)
        // }
    }
}

console.log(game())
