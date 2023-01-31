function getComputerChoice() {
    var computer = Math.floor(Math.random()*3);
    if (computer == 0){
        return 'Rock';
    }
    else if (computer == 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}
function playRound(playerSelection,computerSelection) {
    let playerSelection1 = playerSelection.toLowerCase();
    let computerSelection1 = computerSelection.toLowerCase();
    if (playerSelection1 == computerSelection1){
        return 'Tie! Play again!';
    }
    else if (playerSelection1 == 'rock' && computerSelection1 == 'paper'){
        return 'You Lose! Paper beats Rock';
    }
    else if (playerSelection1 == 'paper' && computerSelection1 == 'rock'){
        return 'You Win! Paper beats Rock';
    }
    else if (playerSelection1 == 'rock' && computerSelection1 == 'scissors'){
        return 'You Win! Rock beats Scissors';
    }
    else if (playerSelection1 == 'scissors' && computerSelection1 == 'rock'){
        return 'You Lose! Scissors beats Rock';   
    }
    else if (playerSelection1 == 'scissors' && computerSelection1 == 'paper'){
        return 'You Win! Scissors beats Paper';
    }
    else if (playerSelection1 == 'paper' && computerSelection1 == 'scissors'){
        return 'You Lose! Scissors beats Paper';
    }
    
}
function game() { 
    let choice = prompt('Rock, Paper, or Scissors: ');
    for (let i=0; i<5 ;i++){
        let computerSelection = getComputerChoice();
        console.log(playRound(choice,computerSelection));
    }
}
game();