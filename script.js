const selectionBtn = document.querySelectorAll(".btn");
const finalCol = document.querySelector("[data-final-col]");
const computerScoreSpan = document.querySelector("[data-computer-scr]");
const yourScoreSpan = document.querySelector("[data-your-scr]");
const result = document.querySelector(".winer");
const restart = document.querySelector(".restart");
const buttonsContainer = document.querySelector(".select-btn");

const roundsToWin = '3';

const SELECTIONS = [
  {
    name: "rock",
    text: "Big Rock",
    beats: "scissors",
  },
  {
    name: "paper",
    text: "Big ass sheet Of Paper",
    beats: "rock",
  },
  {
    name: "scissors",
    text: "Even biger Scissors",
    beats: "paper",
  },
];


const declareWinner = () => {
  if(yourScoreSpan.innerHTML !== roundsToWin && computerScoreSpan.innerHTML !== roundsToWin) {
    return;
  }
  
  if(yourScoreSpan.innerHTML === roundsToWin) {
    result.innerHTML = "You WIN!!";
    
  }
  if(computerScoreSpan.innerHTML === roundsToWin) {
    result.innerHTML = "Computer WINS!!";
  }

  if(computerScoreSpan.innerHTML === roundsToWin || yourScoreSpan.innerHTML === roundsToWin) {
    buttonsContainer.classList.add("d-none");
    restart.classList.remove("btn-none");
  }
  
}

selectionBtn.forEach((selectionBtn) => {
  selectionBtn.addEventListener("click", () => {
    const playerSelection = selectionBtn.dataset.btn;
    const selection = SELECTIONS.find((btn) => btn.name === playerSelection);
    const computerSelection = getComputerChoice();
    whoGetsPoint(selection, computerSelection);
  });
});


function whoGetsPoint(btn, computerSelection) {
  const playerWins = whoWins(btn, computerSelection);
  const computerWins = whoWins(computerSelection, btn);

  addResult(computerSelection, computerWins);
  addResult(btn, playerWins);

  if (playerWins) incrementScore(yourScoreSpan);
  if (computerWins) incrementScore(computerScoreSpan);

  declareWinner();
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.text;
  div.classList.add("result-selection");
  if (winner) {
    div.classList.add("winner");
  }
  finalCol.after(div);
}

function whoWins(selection, rivalSelection) {
  return selection.beats === rivalSelection.name;
}

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[choice];
};

restart.addEventListener("click", () => {
  location.reload();
});
