
const userMove = document.querySelector('.user-move')

const comMoves = document.querySelector('.com-move');
const newComMove = document.createElement('p')
comMoves.appendChild(newComMove)

const result = document.querySelector('.result')
const outcome = document.createElement('h1')
result.appendChild(outcome)

const yourScoreSpan = document.querySelector('[data-your-score]');
const computerScoreSpan = document.querySelector('[data-com-score]');

const finalOutcome = document.querySelector('.final-outcome')

const resetButton = document.querySelector('#reset')


const selectionButtons = document.querySelectorAll('[data-selection]')
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click',()=> {
        playerSelection = selectionButton.dataset.selection
        
        userMove.innerText = playerSelection
        const computerSelection = computerPlay()
        newComMove.innerText = computerSelection
        
        outcome.innerText = playGame(playerSelection,computerSelection);
        
        
        if (playGame(playerSelection,computerSelection).includes('Win')) {
            incrementScore(yourScoreSpan)}
            if (playGame(playerSelection,computerSelection).includes('Lose')) {
                incrementScore(computerScoreSpan)};
                
            })
            
        } ) 
        
        function incrementScore(scoreSpan) {
            scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
            
        }

function computerPlay(){
    let choice = ['✊','✋','✌']
    move = choice[Math.floor(Math.random()* choice.length)]
    return move
}     


       
function playGame(playerSelection,computerSelection) {
    if ( playerSelection === computerSelection) {
        return (` it's a tie ! you both chose ${playerSelection}.`)}
     else if ( playerSelection === '✊' && computerSelection === '✋') {
     return ('You Lose! Paper beats Rock') }
     else if (playerSelection === '✋' && computerSelection === '✊') {
        return ('You Win! Paper beats Rock') }
     else if (playerSelection === '✊' && computerSelection === '✌') {
        return ('You Win! Rock beats Scissors') }
     else if (playerSelection === '✌' && computerSelection === '✊') {
        return ('You Lose! Rock beats Scissors') }
     else if (playerSelection === '✋' && computerSelection === '✌') {
        return ('You Lose! Scissors beat Paper')}
     else if (playerSelection === '✌' && computerSelection === '✋') {
       return ('You Win! Scissors beat Paper')}
       
    }
    resetButton.addEventListener('click',()  => location.reload())
