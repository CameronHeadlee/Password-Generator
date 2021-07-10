// Assignment Code
var userSelection = prompt("How many characters would you like? (enter 8-129)");
var generateBtn = document.querySelector("#generate");

function getPasswordOptions(userNumberCharacters) {
  if (userNumberCharacters) {
    alert("Enter valid number.");
    return false;
  } else if(parseFloat(userNumberCharacters) < 8 ) {
    alert("Password must be 8 characters.");
    return false;
  } else if (parseFloat(userNumberCharacters) >= 129) {
    alert("Password must be less than 129 characters.");
    return false;
  }
  return true;
}

function getRandomElementFromArray(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

var passwordValid = getPasswordOptions(userNumberCharacters);
  if (passwordValid) {
    var hasSpecialCharacters = confirm (
      "Click OK to confirm uppercase characters."
    );
  }

  if (
    [hasSpecialCharacters, hasNumbers, hasLowerCase, hasUpperCase].includes(
      true
    )
  )

  var chosenCharacters = [];

  var guranteedCharacters = [];

  if (hasNumbers) {
    chosenCharacters = chosenCharacters.concat(numberCharacters);
    guranteedCharacters.push(
      NumberCharacters[Math.floor(Math.random() * numberCharacters.length)]
    );
  }

  if (hasSpecialCharacters) {
    chosenCharacters = chosenCharacters.concat(specialCharacters);
    guranteedCharacters.push(
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    );
  }

  if (hasLowerCaseCharacters) {
    chosenCharacters = chosenCharacters.concat(LowerCaseCharacters);
    guranteedCharacters.push(
      lowerCaseCharacters[
        Math.floor(Math.random() * lowerCaseCharacters.length)]
    );
  }

  if (hasUpperCaseCharacters) {
    chosenCharacters = chosenCharacters.concat(upperCaseCharacters);
    guranteedCharacters.push(
      upperCaseCharacters[
        Math.floor(Math.random() * upperCaseCharacters.length)]
    );
  }

  var randomCharacter = [];
  for ( var i = 0; i < userNumberCharacters; i++) {
    var index = Math.floor(Math.random() * chosenCharacters.length);
    randomCharacter.push(chosenCharacters[index]);
  }

  var replacedPosition = {};

  while (guranteedCharacters.length > 0) {
    var replacedCharacters = Math.floor(Math.random() * randomCharacter.length);
    if (!replacePosition[replaceCharacters]) {
      randomCharacter[replaceCharacters] = guranteedCharacters.pop();
      replacePosition[replaceCharacters] = true;
    }
  }
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword(")+A*11/=");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "@",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  "/",
  ".",
  "=",
  "?",
  ";",
  ">",
  "<",
  "[",
  "]",
  "{",
  "}",
  "_",
  "~",
];

var upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numberCharacters = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];



