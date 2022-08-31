const selectionBtn = document.querySelectorAll("[data-btn]");
const finalCol = document.querySelector("[data-final-col]");
const computerScoreSpan = document.querySelector("[data-computer-scr]");
const yourScoreSpan = document.querySelector("[data-your-scr]");
const result = document.querySelector(".winer");
const restart = document.querySelector(".restart");
const buttonsContainer = document.querySelector('.select-btn')

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

selectionBtn.forEach((selectionBtn) => {
  selectionBtn.addEventListener("click", (e) => {
    const playerSelection = selectionBtn.dataset.btn;
    const selection = SELECTIONS.find((btn) => btn.name === playerSelection);
    makeSelection(selection);
  });
});

function makeSelection(btn) {
  const computerSelection = getComputerChoice();
  const youAreWinner = whoWins(btn, computerSelection);
  const computerWins = whoWins(computerSelection, btn);

  addResult(computerSelection, computerWins);
  addResult(btn, youAreWinner);

  if (youAreWinner) incrementScore(yourScoreSpan);
  if (computerWins) incrementScore(computerScoreSpan);

  if (
    parseInt(computerScoreSpan.innerHTML) === 5 &&
    parseInt(yourScoreSpan.innerHTML) < parseInt(computerScoreSpan.innerHTML)
  ) {
    buttonsContainer.classList.add('d-none');
    result.innerHTML = "Computer WINS!!";
    restart.addEventListener("click", () => {
      location.reload();
    });
  } else if (
    parseInt(yourScoreSpan.innerHTML) === 5 &&
    parseInt(yourScoreSpan.innerHTML) > parseInt(computerScoreSpan.innerHTML)
  ) {
    buttonsContainer.classList.add('d-none');
    result.innerHTML = "You WIN!!";
    restart.addEventListener("click", () => {
      location.reload();
      
    });
  }
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
