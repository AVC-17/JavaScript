let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
let userInput = document.querySelector('.guessField')
const  guessSlot = document.querySelector('.guesses');
const  remaining = document.querySelector('.lastResult');
const  lowOrHi = document.querySelector('.lowOrHi');
const  startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuss = 0
let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()  
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (guess === '' || guess < 1 || isNaN(guess) || guess > 100) {
        alert('enter a valid number')
    } else {
        prevGuess.push(guess)
        if (numGuss === 10) {
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`)
            submit.setAttribute('disabled','')
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
    }else if (guess < randomNumber){
        displayMessage(`Number is low`)
    }else if (guess > randomNumber){
        displayMessage(`Number is high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuss++
    remaining.innerHTML = `${11 - numGuss}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    submit.setAttribute('disabled','')
    p.innerHTML = '<input type="submit" id="newGame" value="Play Again" class="guessSubmit">'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuss = 1
        guessSlot.innerHTML =  ''
        remaining.innerHTML = `${11 - numGuss}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}