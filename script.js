const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

function createPassword() {
    const length = parseInt(lengthInput.value);
    const useUppercase = uppercaseCheckbox.checked;
    const useLowercase = lowercaseCheckbox.checked;
    const useNumbers = numbersCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;

    let characters = "";
    let password = "";

    if (useUppercase) characters += "ABCDEFGHIJKLMOPRSTUVZQWXY";
    if (useLowercase) characters += "abcdefghijklmnoprstuvzqwxy";
    if (useNumbers) characters += "1234567890";
    if (useSymbols) characters += "?!=-/<>[]{}()_|~&$@^*#+";

    if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
        document.querySelector(".error").style.display = "block";
        return;
    } else {
        document.querySelector(".error").style.display = "none";
        for (let i = 0; i < length; i++) {
            password += characters[Math.floor(Math.random() * characters.length)];
        }
        passwordBox.value = password;
    }

}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
