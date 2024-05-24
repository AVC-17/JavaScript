const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const body = document.querySelector('body')

let randomColor = function () {
    let newColor = '#'
    const hex = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++) {
        newColor += hex[Math.floor(Math.random() * 16)]
    }
    console.log(newColor)
    body.style.background = newColor
}
start.addEventListener('click', function () {
    let stopChange = setInterval(randomColor,50)
    stop.addEventListener('click', function () {
        clearInterval(stopChange)    
    })

})