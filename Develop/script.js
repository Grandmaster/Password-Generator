// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  while (true) {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = lowerCase.toUpperCase();
    var numbers = "0123456789";
    var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
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
    break;
  }
}

generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
