const output = document.getElementById("output");
const toCelcius = document.getElementById("toCelcius");
const toFarenhite = document.getElementById("toFarenhite");
const input = document.getElementById("inputText");
let temp;

function convert() {
    if (toCelcius.checked) {
        temp = Number(input.value)
        temp = temp - 32 * (9 / 5)
        output.textContent = `${temp.toFixed(1)} °C`
    } else if (toFarenhite.checked){
        temp = Number(input.value)
        output.textContent = `${temp.toFixed()} °F`
    }else {
        alert("select the unit")
    }
}