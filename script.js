const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMOPRSTUVZQWXY";
const lowerCase = "abcdefghijklmnoprstuvzqwxy";
const numer = "1234567890";
const symbol = "?!=-/<>[]{}()_|~&$@^*#+"

const allCharacters = upperCase + lowerCase + numer + symbol;
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numer[Math.floor(Math.random() * numer.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while(length > password.length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordBox.value = password;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}