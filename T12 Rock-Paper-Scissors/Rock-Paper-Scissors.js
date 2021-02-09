let playerScore = 0
let computerScore = 0
let winningScore = 10
let choices = ['rock', 'papers', 'scissors']

const new_btn = document.querySelector('#new-game')
const play_btn = document.querySelector('#play-game')
const winning_score = document.querySelector('#winning-score')

play_btn.addEventListener('click', makeSelection)
new_btn.addEventListener('click', reset)
winning_score.addEventListener('input', e => {
    e.target.value === '' ? winningScore = 10 : winningScore = parseInt(e.target.value)
    console.log(winningScore);
})

function reset() {
    playerScore = 0
    computerScore = 0
    document.querySelector('#player-choice').textContent = ''
    document.querySelector('#computer-choice').textContent = ''
    document.querySelector('#player-win').style.display = 'none'
    document.querySelector('#computer-win').style.display = 'none'
    document.querySelector('#player-score').textContent = playerScore;
    document.querySelector('#computer-score').textContent = computerScore;
    winning_score.value = ''
}

function makeSelection() {
    const playerChoice = makeChoice()
    const computerChoice = makeChoice()
    if (playerScore < winningScore && computerScore < winningScore) getWinner(playerChoice, computerChoice)
}

function makeChoice() {
    const choice = Math.floor(Math.random() * 3)
    return choice
}

function getWinner(playerChoice, computerChoice) {
    const player_choice = document.querySelector('#player-choice')
    const computer_choice = document.querySelector('#computer-choice')

    player_choice.innerText = choices[playerChoice];
    computer_choice.innerText = choices[computerChoice];

    if (playerChoice === computerChoice) {
        console.log(choices[playerChoice] + '  ' + choices[computerChoice] + '  ' + 'Draw')
    } else if (playerChoice === 0 && computerChoice === 1) {
        console.log(choices[playerChoice] + '  ' + choices[computerChoice] + '  ' + 'Computer Choice')
        incScore('computer')
    } else if (playerChoice === 1 && computerChoice === 2) {
        console.log(choices[playerChoice] + '  ' + choices[computerChoice] + '  ' + 'Computer Choice')
        incScore('computer')
    } else if (playerChoice === 2 && computerChoice === 0) {
        console.log(choices[playerChoice] + '  ' + choices[computerChoice] + '  ' + 'Computer Choice')
        incScore('computer')
    } else {
        console.log(choices[playerChoice] + '  ' + choices[computerChoice] + '  ' + 'Player Choice')
        incScore('player')
    }
}

function incScore(user) {
    const user_score = document.querySelector(`#${user}-score`)
    // console.log();
    user === 'player' ? playerScore++ : computerScore++;
    if (playerScore === winningScore || computerScore === winningScore) document.querySelector(`#${user}-win`).style.display = 'inline-block'
    user_score.innerText = (user === 'player' ? playerScore : computerScore);
}