const clock = document.getElementById('clock');

setInterval(() => {
    let time = new Date()
    clock.innerText = `${time.toLocaleTimeString()}`
}, 1000);