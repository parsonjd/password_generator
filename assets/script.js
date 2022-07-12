// // Assignment code here

// //Function to determine what criteria will be in the password
// function passwordCriteria() {
//   passwordLength = parseInt(prompt('Please choose a password length between 8-128 characters.'));

//   //Validate that password length is a number
//   if (isNaN(passwordLength)) {
//     alert('Please enter a number for password length.');
//     return;
//   }

//   //Validate password is between 8-128 characters long
//   if (passwordLength < 8 || passwordLength > 128) {
//     alert('Password length must be between 8-128 characters');
//     return;
//   }

//   //User determines if lower case letters are included
//   let includeLowerCase = confirm('Do you want lower case letters in your password? Ok to confirm.');

//   //User determines if upper case letters are included
//   let includeUpperCase = confirm('Do you want upper case letters in your password? Ok to confirm.');

//   //User determines if numbers are included
//   let includeNumbers = confirm('Do you want numbers in your password? Ok to confirm.');

//   //User determines if special characters are included
//   let includeSpecialCharacters = confirm('Do you want special characters in your password? Ok to confirm.');

//   //Validate that at least one character type was selected by user
//   if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
//     alert('You must include at least one type of character!')
//     return;
//   }
//   //User stored criteria
//   let passwordCriteria = {
//     length: passwordLength,
//     lowerCase: includeLowerCase,
//     upperCase: includeUpperCase,
//     numbers: includeNumbers,
//     specialCharacters: includeSpecialCharacters,

//   };

//   return passwordCriteria;

// }



// let criteria = passwordCriteria();

// console.log(criteria);

//Array of lower case letters to choose from
let lowerCased = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Array of upper case letters to choose from
let upperCased = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Array of numbers to choose from
let numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Array of password special characters on owasp.org to choose from
let specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

//Generate a random character from which of the four above arrays are passed into it
function randomCharacter(charArray) {
  let characterIndex = Math.floor(Math.random() * charArray.length)
  let character = charArray[characterIndex];
  return character;
}

let char = randomCharacter(specialCharacters);
console.log(char);


// // Get references to the #generate element
// let generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
