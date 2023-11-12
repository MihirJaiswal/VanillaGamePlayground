const square = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left') 
const score = document.querySelector('#score')

let result = 0

function randomSquare() {
    square.forEach(square => {
        square.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    console.log(randomPosition)
    console.log(Math.floor(Math.random() * 9))
}
randomSquare()