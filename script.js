const computerSelectionArray = ["Rock", "Paper", "Scissors"];
let playerResult = 0;
let computerResult = 0;
let outcome = "";
// const rock = document.querySelector('#rock')
// rock.addEventListener('click', () => {

// })

const getComputerChoice = () => {
  let choice =
    computerSelectionArray[
      Math.floor(Math.random() * computerSelectionArray.length)
    ];
  return choice.toLowerCase();
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = prompt(`Chose Your weapon!!`).toLowerCase().valueOf();
  computerSelection = getComputerChoice().valueOf();

  if (playerSelection === computerSelection) {
    outcome = `It's a Tie`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    outcome = `You lose!! Paper covers Rock`;
    computerResult++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    outcome = `You lose!! Scissors cut Paper`;
    computerResult++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    outcome = `You lose!! Rock Crushes Scissors`;
    computerResult++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    outcome = `You win!! Paper covers Rock`;
    playerResult++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    outcome = `You win!! Scissors cut Paper`;
    playerResult++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    outcome = `You win!! Rock Crushes Scissors`;
    playerResult++;
  }

  return outcome;
};

// console.log(playRound())

const game = () => {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(playerResult);
    console.log(computerResult);
  }
  if (computerResult > playerResult) {
    return `Computer Wins`;
  } else {
    return `You Win`;
  }
};

console.log(game());
