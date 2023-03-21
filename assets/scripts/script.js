// Assignment code here


//set available characters
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";

// copied from https://owasp.org/www-community/password-special-characters
//issue with including quote into character > will research later
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword(){

  var passwordLength = prompt("Choose the length of your password 8-128 characters");
  var lowercaseLetter = confirm("Use lower case letters?");
  var uppercaseLetter = confirm("Use upper case letters?");
  var numericCharacter = confirm("Use numbers?");
  var specialCharacter = confirm("Use special characters?");


  // check password length


  // all other selections set as boolean
  //set up if statements for each character/letter choice



  // set for loop to create password based on length


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

console.log(password);