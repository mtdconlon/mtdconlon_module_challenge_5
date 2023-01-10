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
  var emptyPassword = [];

  //Browser prompt to establish users character length preference
  noOfChar = prompt("No. Of Characters Required? (10 - 64)");
  if (noOfChar < 10) {
    noOfChar = alert("Invalid");
  } else if (noOfChar > 64) {
    noOfChat = alert("Invalid");
  } else {
    noOfChar = alert("Your Password Will Be " + noOfChar + " Characters");
  }

  //Browser prompt to establish users lowercase character preference
  charLowercase = confirm("Would You Like Lowercase Characters?");
  if (charLowercase) {
    charLowercase = alert("Password Will Contain Lowercase Characters");
  } else {
    charLowercase = alert("Password Will Not Contain Lowercase Characters");
  }
  //Browser prompt to establish users uppercase character preference
  charUppercase = confirm("Would You Like Uppercase Characters?");
  if (charUppercase) {
    charUppercase = alert("Password Will Contain Uppercase Characters");
  } else {
    charUppercase = alert("Password Will Not Contain Uppercase Characters");
  }

  //Browser prompt to establish users numerical character preference
  charNumber = confirm("Would You Like Numerical Characters?");
  if (charNumber) {
    charNumber = alert("Password Will Contain Numerical Characters");
  } else {
    charNumber = alert("Password Will Not Contain Numerical Characters");
  }

  //Browser prompt to establish users special character preference
  charSpecial = confirm("Would You Like Special Characters?");
  if (charSpecial) {
    charSpecial = alert("Password Will Contain Special Characters");
  } else {
    charSpecial = alert("Password Will Not Contain Special Characters");
  }

  //Alert to show if no variations have been selected, the user must select one
  if (charSpecial === false && charNumber === false && charUppercase === false && charLowercase === false) {
    console.log ("Select One Variation");
  }

  // Function to prompt user for password options
  function getPasswordOptions() {
    if (charLowercase) {
      emptyPassword = emptypassword.concat(lowerCasedCharacters);
    } if (charUppercase) {
      emptyPassword = emptypassword.concat(upperCasedCharacters);
    } if (charNumber) {
      emptyPassword = emptypassword.concat(numericCharacters);
    } if (charSpecial) {
      emptyPassword = emptypassword.concat(specialCharacters);
    }
  };

  // Function for getting a random element from an array
  function random_item(arr) {
    var inputPassword = ""
    for (let i = 0; i < noOfChar; i++ ) {
      var arr = [Math.floor(Math.random() * emptyPassword.length)];
      emptyPassword = emptyPassword + noOfChar[arr]
    }
  return emptyPassword;
  }
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