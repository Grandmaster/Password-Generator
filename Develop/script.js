// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// randomIndex is a function that takes an array/string and generates a random number
// between 0 and the length of the array/string - 1, to be used to pick out a random
// member of the array/string.
function randomIndex(array) {
  rand = Math.floor(Math.random() * array.length);
  return rand;
}
function generatePassword() {
  while (true) {
    // The use of the while loop is to restart the process if the user makes an error.
    var passwordCharacters = {
      lowerCase: "abcdefghijklmnopqrstuvwxyz",
      upperCase: "abcdefghijklmnopqrstuvwxyz".toUpperCase(),
      numbers: "0123456789",
      specialCharacters: " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"
    };

    var passwordLength = prompt(
      "How long do you want your password to be? (Choose a number between 8 and 128)"
    );
    if (isNaN(parseInt(passwordLength))) {
      alert("That is not a number. Please choose a number");
      continue;
    } else if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
      alert("Please choose a number between 8 and 128");
      continue;
    }

    var includeLower = confirm(
      "Do you want lowercase letters in your password?"
    );
    var includeUpper = confirm(
      "Do you want uppercase letters in your password?"
    );
    var includeNumber = confirm("Do you want numbers in your password?");
    var includeSpecial = confirm(
      "Do you want special characters in your password?"
    );

    var password = "";
    for (var i = 1; i < passwordLength + 1; i++) {}
    break;
  }
}

generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
