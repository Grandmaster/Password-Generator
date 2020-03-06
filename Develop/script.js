// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = lowerCase.toUpperCase();
  var numbers = '0123456789';
  var specialCharacters =  " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  console.log(specialCharacters[2]);
}

generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
