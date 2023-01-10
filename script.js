// Array of special characters to be included in password
// Function to generate password with user input
function generatePassword() {
  var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];

  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  //Browser prompt to establish users character preference
  noOfChar = prompt("No. Of Characters Required? (10 - 64)");
  if (noOfChar < 10) {
    noOfChar = alert("Invalid");
  } else if (noOfChar > 64) {
    noOfChat = alert("Invalid");
  } else {
    noOfChar = alert("Your Password Will Be " + noOfChar + " Characters");
  }

  charLowercase = confirm("Would You Like Lowercase Characters");
  if (confirm) {
    charLowercase = alert("Password Will Contain Lowercase Characters");
  } else {
    charLowercase = alert("Password Will Not Contain Lowercase Characters");
  }

  charUppercase = confirm("Would You Like Uppercase Characters");
  if (confirm) {
    charUppercase = alert("Password Will Contain Uppercase Characters");
  } else {
    charUppercase = alert("Password Will Not Contain Uppercase Characters");
  }

  charNumber = confirm("Would You Like Numerical Characters");
  if (confirm) {
    charUppercase = alert("Password Will Contain Numerical Characters");
  } else {
    charUppercase = alert("Password Will Not Contain Numerical Characters");
  }

};



// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);