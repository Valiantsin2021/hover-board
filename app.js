const board = document.querySelector('#board')
const colors = ['#a1fc03', '#0324fc', '#14c422', '#c720ab', '#eb3e09', '#1dd5db', '#6505f5']
const SQUARES_NUMBER = 1920

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })


    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`

}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}