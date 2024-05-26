function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    let values = [];
    let images = [];

    if (isNaN(numOfDice) || numOfDice == undefined || numOfDice == "") {
        alert("Select a valid number")
    } else {
        for (let i = 0; i < numOfDice; i++) {
            console.log(numOfDice);
            const random = Math.floor(Math.random() * 6) + 1;
            values.push(random);
            images.push(`<img src="images/dice_${random}.png" alt="Dice: ${random}">`);
        }
        diceResult.textContent = `dice: ${values.join(", ")}`;
        diceImages.innerHTML = images.join(" ")
    }


}