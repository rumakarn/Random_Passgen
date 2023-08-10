const passwordBox = document.getElementById("password");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+|}{[]></-=";

const allChars = lowerCase + upperCase + numbers + symbols;

function CreatePassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
    
}
function copyPassword() {
    passwordBox.select();
    try {
        navigator.clipboard.writeText(passwordBox.value)
            .then(() => {
                console.log("Password copied to clipboard!");
            })
            .catch((error) => {
                console.error("Copying failed:", error);
            });
    } catch (err) {
        console.error("Copying failed:", err);
    }
}