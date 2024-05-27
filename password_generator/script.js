function generatePassword(passLength, allowLowerCaseChar, allowUpperCaseChar, allowNumbers, allowSymbols) {
    let allowedChar = [];
    let myPassword = [];
    const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*_+=\|?/';
    if (isNaN(passLength) || passLength == undefined || passLength == '') {
        alert("Enter a valid number");
    }
    if (allowLowerCaseChar == true) {
        allowedChar.push(...lowerCaseChar);
    }
    if (allowUpperCaseChar == true) {
        allowedChar.push(...upperCaseChar);
    }
    if (allowNumbers == true) {
        allowedChar.push(...numbers);
    }
    if (allowSymbols == true) {
        allowedChar.push(...symbols);
    }
    console.log(allowedChar);
    for (let i = 0; i < passLength; i++) {
        let random = Math.floor(Math.random() * allowedChar.length - 1) + 1
        console.log(random)
        myPassword += allowedChar[random];
    }

    return myPassword;
}

document.getElementById("sumbit").addEventListener('click', () => {
    const passLength = document.getElementById("passLength").value;
    const allowLowerCaseChar = document.getElementById("allowLowerCaseChar").checked;
    const allowUpperCaseChar = document.getElementById("allowUpperCaseChar").checked;
    const allowNumbers = document.getElementById("allowNumbers").checked;
    const allowSymbols = document.getElementById("allowSymbols").checked;

    const finalPassword = generatePassword(passLength, allowLowerCaseChar, allowUpperCaseChar, allowNumbers, allowSymbols);
    if (finalPassword != undefined || finalPassword != '') {
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("result").innerHTML = `${finalPassword} <br><button id="copyButton">Copy Password</button>`;

        document.getElementById("copyButton").addEventListener('click', () => {
            navigator.clipboard.writeText(finalPassword)
                .then(() => {
                    alert("Password copied to clipboard!");
                })
                .catch(err => {
                    console.error('Could not copy text: ', err);
                });
        });
    }
});

