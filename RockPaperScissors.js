let playerScore = 0;
let computerScore = 0;
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
        computerScore++;
        return 'You Lose! Paper beats Rock';
    }
    else if (playerSelection1 == 'paper' && computerSelection1 == 'rock'){
        playerScore++;
        return 'You Win! Paper beats Rock';
    }
    else if (playerSelection1 == 'rock' && computerSelection1 == 'scissors'){
        playerScore++;
        return 'You Win! Rock beats Scissors';
    }
    else if (playerSelection1 == 'scissors' && computerSelection1 == 'rock'){
        computerScore++;
        return 'You Lose! Scissors beats Rock';   
    }
    else if (playerSelection1 == 'scissors' && computerSelection1 == 'paper'){
        playerScore++;
        return 'You Win! Scissors beats Paper';
    }
    else if (playerSelection1 == 'paper' && computerSelection1 == 'scissors'){
        computerScore++;
        return 'You Lose! Scissors beats Paper';
    }
    
}
/*
function game() { 
    let choice = prompt('Rock, Paper, or Scissors: ');
    for (let i=0; i<5 ;i++){
        let computerSelection = getComputerChoice();
        console.log(playRound(choice,computerSelection));
    }
}
game();
*/
function capitalize (word) { 
    const firlet = word.charAt(0).toUpperCase();
    const rest = word.slice(1);
    const newWord = firlet + rest;
    return newWord;

}
function createButton() {
    const buttonList = ['rock','paper','scissors'];
    for (let button of buttonList) {
        let btn = document.createElement('button');
        btn.classList.add('option');
        btn.id = button;
        btn.textContent = capitalize(button);
        mainContainer.appendChild(btn);
    }
}
const mainContainer = document.createElement('div');
mainContainer.id = 'container';
document.body.appendChild(mainContainer);
createButton();

const subContainer1 = document.createElement('div');
subContainer1.id = 'sub1';
const scoreContainer = document.createElement('div');
scoreContainer.id = 'score';
const playerScoreCont = document.createElement('div');
const computerScoreCont = document.createElement('div');
playerScoreCont.id = 'playerScore';
computerScoreCont.id = 'computerScore';




function onClickEvent(e){
    let id = 0;
    let playerSelection = e.target.id;
    const paragraphSub1 = document.createElement('p');
    paragraphSub1.textContent = playRound(playerSelection,getComputerChoice());
    paragraphSub1.id = id;
    id++;
    subContainer1.appendChild(paragraphSub1);
    mainContainer.appendChild(subContainer1);
    

    const paragraphSub2 = document.createElement('p');
    const paragraphSub3 = document.createElement('p');
    let id2 = 0;
    paragraphSub2.textContent = playerScore;
    paragraphSub3.textContent = computerScore
    playerScoreCont.appendChild(paragraphSub2);
    computerScoreCont.appendChild(paragraphSub3);
    scoreContainer.appendChild(playerScoreCont);
    scoreContainer.appendChild(computerScoreCont);
    mainContainer.appendChild(scoreContainer);
   
    
}




const buttons = document.querySelectorAll(".option");
    buttons.forEach((button)=>{
        button.addEventListener('click',onClickEvent)
    })
