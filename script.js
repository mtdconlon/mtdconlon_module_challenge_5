// Function to generate password with user input
function generatePassword() {
  // Array of special characters to be included in password
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
  var lowercasedCharacters = [
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
    'z'];

  // Array of uppercase characters to be included in password
  var uppercasedCharacters = [
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
    'Z'];

  var emptyPassword = [];

  //Browser prompt to establish users character length preference
  noOfChar = prompt("No. Of Characters Required? (10 - 64)");
  if (noOfChar < 10) {
    return "Invalid";
  } else if (noOfChar > 64) {
    return "Invalid";
  } else {
    alert("Your Password Will Be " + noOfChar + " Characters");
  }

  //Browser prompt to establish users lowercase character preference
  charLowercase = confirm("Would You Like Lowercase Characters?");
  if (charLowercase) {
    alert("Password Will Contain Lowercase Characters");
  } else {
    alert("Password Will Not Contain Lowercase Characters");
  }

  //Browser prompt to establish users numerical character preference
  charUppercase = confirm("Would You Like Uppercase Characters?");
  if (charUppercase) {
    alert("Password Will Contain Uppercase Characters");
  } else {
    alert("Password Will Not Contain Uppercase Characters");
  }

  //Browser prompt to establish users uppercase character preference
  charNumber = confirm("Would You Like Numerical Characters?");
  if (charNumber) {
    alert("Password Will Contain Numerical Characters");
  } else {
    alert("Password Will Not Contain Numerical Characters");
  }

  //Browser prompt to establish users special character preference
  charSpecial = confirm("Do you want special characters?");
  if (charSpecial) {
    alert("Your password will have special characters.");
  } else {
    alert("Your password will NOT have special characters.");
  }

  //Alert to show if no variations have been selected, the user must select one
  if (charLowercase === false && charUppercase === false && charNumber === false && charSpecial === false) {
    return "Please select at least one character type.";
  };

  // Function to prompt user for password options
  if (charLowercase) {
    emptyPassword = emptyPassword.concat(lowercasedCharacters);
  } if (charUppercase) {
    emptyPassword = emptyPassword.concat(uppercasedCharacters);
  } if (charNumber) {
    emptyPassword = emptyPassword.concat(numericCharacters);
  } if (charSpecial) {
    emptyPassword = emptyPassword.concat(specialCharacters);
  }

  // Function for getting a random element from an array
  var password = ""
  for (var i = 0; i < noOfChar; i++) {
    var arr = [Math.floor(Math.random() * emptyPassword.length)];
    password = password + emptyPassword[arr];
  }
  return password;
};

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