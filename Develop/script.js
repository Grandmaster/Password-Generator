// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// ===========================================
// CUSTOM CODE BEGINS

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
    // This section prompts the user for the password length and validates his/her choice
    var passwordLength = parseInt(
      prompt(
        "How long do you want your password to be? (Choose a number between 8 and 128)"
      )
    );
    if (isNaN(parseInt(passwordLength))) {
      alert("That is not a number. Please choose a number");
      continue;
    } else if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
      alert("Please choose a number between 8 and 128");
      continue;
    }
    // These lines of code prompt the user for what types of characters to include in his/her password,
    // and stores his/her choices in an array
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

    var criteria = [includeLower, includeUpper, includeNumber, includeSpecial];
    var keys = Object.keys(passwordCharacters);
    // The next bit of code ensures the user selects at least one of the character types
    // to include in his/her password.
    var atLeastOne = criteria.filter(a => {
      return a == true;
    });
    if (atLeastOne.length == 0) {
      alert(
        "Your password must contain at least one letter, number or special character"
      );
      continue;
    }
    // The following loop checks to see which character types the user does not want,
    // and eliminates the corresponding key from the keys array.
    for (var i = 0; i < criteria.length; i++) {
      if (criteria[i] == false) {
        keys[i] = "";
      }
    }
    var validKeys = keys.filter(a => {
      return a !== "";
    });
    // This bit of the code actually generates the password from the Passwordcharacters
    // object, to the specified length.
    var password = "";
    for (var i = 1; i < passwordLength + 1; i++) {
      var pickType = validKeys[randomIndex(validKeys)];
      var pickChar = passwordCharacters[pickType];
      var Char = pickChar[randomIndex(pickChar)];
      password = password + Char;
    }
    // Finally, this section of the function checks whether at least one of the desired character
    // types appears in the password, and reconstructs the password if that is not the case.
    // It uses regular expressions.
    var test;
    for (let i of password) {
      for (let j of validKeys) {
        // Here I had to escape special characters so I could construct regular expressions for them.
        if (passwordCharacters.specialCharacters.indexOf(i) !== -1) {
          test = new RegExp('\\' + i);
        }
        else {
          test = new RegExp(i);
        }
        if (test.test(passwordCharacters[j])) {
          validKeys.splice(validKeys.indexOf(j), 1);
        }
      }
    }
    if (validKeys.length == 0) {
      return password;
    } else {
      alert(
        "The password constructed does not match your criteria. According to our security test, the password has omitted one or more of your desired classes. To create a secure password, please try again."
      );
      continue;
    }
  }
}
// CUSTOM CODE ENDS
// ==============================

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
