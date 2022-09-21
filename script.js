const selectionBtn = document.querySelectorAll(".btn");
const finalCol = document.querySelector("[data-final-col]");
const computerScoreSpan = document.querySelector("[data-computer-scr]");
const yourScoreSpan = document.querySelector("[data-your-scr]");
const result = document.querySelector(".winer");
const restart = document.querySelector(".restart");
const buttonsContainer = document.querySelector(".select-btn");

const STATE = {
  rounds: 3,
  score: 1,
};

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
  if (
    parseInt(computerScoreSpan.innerHTML) === STATE.rounds &&
    parseInt(yourScoreSpan.innerHTML) < parseInt(computerScoreSpan.innerHTML)
  ) {
    buttonsContainer.classList.add("d-none");
    result.innerHTML = "Computer WINS!!";
    restart.classList.remove("btn-none");
    restart.addEventListener("click", () => {
      location.reload();
    });
  } else if (
    parseInt(yourScoreSpan.innerHTML) === STATE.rounds &&
    parseInt(yourScoreSpan.innerHTML) > parseInt(computerScoreSpan.innerHTML)
  ) {
    buttonsContainer.classList.add("d-none");
    result.innerHTML = "You WIN!!";
    restart.classList.remove("btn-none");
    restart.addEventListener("click", () => {
      location.reload();
    });
  }
};

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
  scoreSpan.innerText = STATE.score++;
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
