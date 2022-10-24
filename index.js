const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');

const choices = document.querySelectorAll('button');
let computerChoice;
let userChoice;
let result;


choices.forEach((choice) => choice.addEventListener('click', (e) => {
   userChoice = e.target.id;
   userChoiceDisplay.innerHTML = userChoice
  getComputerChoice();
  getResult()
}))

function getComputerChoice () {
    let randomNumber = Math.ceil(Math.random() * choices.length);
        console.log(randomNumber)
    switch (randomNumber) {
        case 1:
            computerChoice ='rock'
            break;
            case 2:
            computerChoice ='paper'
            break;
        default:
            computerChoice ='scissors'
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;

}

function getResult () {
    if(userChoice === computerChoice){
        result = 'it is a draw'
    }
    if(userChoice ==='paper' && computerChoice ==='rock'){
        result = 'you win'
    }
    if(userChoice ==='rock' && computerChoice ==='paper'){
        result = 'you lost'
    }
    if(userChoice === 'paper' && computerChoice ==='scissors'){
        result = 'you lost'
    }
    if(userChoice ==='scissors' && computerChoice === 'paper'){
        result = 'you win'
    }
    if(userChoice ==='scissors' && computerChoice ==='rock'){
        result = 'you lost'
    }
    if(userChoice ==='rock' && computerChoice ==='scissors'){
        result = 'you win'
    }
  
    resultDisplay.innerHTML = result
    console.log(result)
}
