const increaseBTN = document.getElementById("increaseBTN");
const decreaseBTN = document.getElementById("decreaseBTN");
const resetBTN = document.getElementById("resetBTN");
const counter = document.getElementById("counter");
let count = 0;

increaseBTN.onclick = function() {
    count++;
    counter.textContent = count;
}

decreaseBTN.onclick = function() {
    count--;
    counter.textContent = count;
}

resetBTN.onclick = function() {
    count = 0;
    counter.textContent = count;
}