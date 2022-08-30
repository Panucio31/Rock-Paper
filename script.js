
const computerSelectionArray = ['Rock', 'Paper', 'Scissors']
let result = '';
let playerChose = prompt(`Chose Your weapon!!`).toLowerCase();



const getComputerChoice = () => {
let choice = computerSelectionArray[Math.floor(Math.random() * computerSelectionArray.length)];
return choice.toLowerCase();
}


// const playerChose = () => { 
//     return playerResult;
// }
// console.log(playerChose())

//let palyerSelection = prompt(`Chose Your weapon!!`).toLowerCase();


const playerResult = () => {
    
    if(playerChose === computerSelectionArray[0].toLowerCase()) {
        result = `rock`;
    } else if (playerChose === computerSelectionArray[1].toLowerCase()) {
        result = `paper`;
    } else if (playerChose === computerSelectionArray[2].toLowerCase()) {
        result = `scissors`
    } else {
        result = `There is no move like that`
    }

    return result
}

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerResult().valueOf();
    computerSelection = getComputerChoice().valueOf();
    console.log(computerSelection)
    if (playerSelection === computerSelection) {
        console.log(computerSelection)
        return `tie`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log(playerChose)
        return `Paper covers Rock`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return `Scissors cut Paper`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `Rock Crushes Scissors`
    }
}

console.log(playRound())


