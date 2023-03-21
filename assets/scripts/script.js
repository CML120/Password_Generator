// Assignment code here


//set available characters
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var useableCharacters = "";

// special characters copy/pasted from https://owasp.org/www-community/password-special-characters
//issue with including quote into character > will research later
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {

  var passwordLength = prompt("Choose the length of your password 8-128 characters");

  // check for a valid password length
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 to 128 characters.");
    var passwordLength = prompt("Please choose a password length between 8 to 128 characters.");
  }


  var lowercaseLetter = confirm("Use lower case letters?");
  var uppercaseLetter = confirm("Use upper case letters?");
  var numericCharacter = confirm("Use numbers?");
  var specialCharacter = confirm("Use special characters?");

  while (lowercaseLetter === false && uppercaseLetter === false && numericCharacter === false && specialCharacter === false) {
    alert("Please select at least one password criteria")
    var lowercaseLetter = confirm("Use lower case letters?");
    var uppercaseLetter = confirm("Use upper case letters?");
    var numericCharacter = confirm("Use numbers?");
    var specialCharacter = confirm("Use special characters?");

  }


  if (lowercaseLetter) {
    useableCharacters += lowercaseLetters;
  }

  if (uppercaseLetter) {
    useableCharacters += uppercaseLetters;
  }

  if (numericCharacter) {
    useableCharacters += numbers;
  }

  if (specialCharacter) {
    useableCharacters += specialCharacters;
  }



  // set for loop to create password based on length

  var randomPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    randomPassword += useableCharacters.charAt(Math.floor(Math.random() * useableCharacters.length));
  }

  // clear out useable characters, return password string
  useableCharacters = "";
  return randomPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(password.value);