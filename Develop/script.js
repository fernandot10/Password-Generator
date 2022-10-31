// Assignment Code
var generateBtn = document.querySelector("#generate");

          // # & CHARACTER ARRAYS

var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateBtn = document.querySelector("#generate");
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

          //DETERMINING LENGTH OF PASSWORD
function determineLength() {
  passwordLength = prompt("Choose the desired length for your new password (between 8-128 Characters): ");

  if (passwordLength < 8) {
    alert("Password length must be a NUMBER between 8-128 characters");
    determineLength();

  } else if (passwordLength > 128) {
    alert("Password length must be a NUMBER between 8-128 characters");
    determineLength();

  } else if (isNaN(passwordLength)) {
    alert("Password length must be a NUMBER between 8-128 characters");
    determineLength();

  } else {
    alert("Answer what character types you would like your new password to contain \n if you choose 'no' for all, your password will only contain lowercase letters.");
  }

  return passwordLength;
}

          //DETERMINING UPPER CASE 
function determineUppercase() {
  uppercaseCheck = prompt("Include uppercase letters in your password? \n(Yes or No)");
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Please answer Yes or No");
    determineUppercase();

  } else if (uppercaseCheck === "yes" || uppercaseCheck === "y") {
    uppercaseCheck = true;
    return uppercaseCheck;

  } else if (uppercaseCheck === "no" || uppercaseCheck === "n") {
    uppercaseCheck = false;
    return uppercaseCheck;

  } else {
    alert("Please answer Yes or No");
    determineUppercase();
  }
  return uppercaseCheck;
}

          //DETERMINING NUMBERS
function determineNumbers() {
  numberCheck = prompt("Include numbers in your password? \n(Yes or No)");
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === "") {
    alert("Please answer Yes or No");
    determineNumbers();

  } else if (numberCheck === "yes" || numberCheck === "y") {
    numberCheck = true;
    return numberCheck;

  } else if (numberCheck === "no" || numberCheck === "n") {
    numberCheck = false;
    return numberCheck;

  } else {
    alert("Please answer Yes or No");
    determineNumbers();
  }
  return numberCheck;
}

          //DETERMINING SPECIAL CHARACTERS
function determineSpecialChar() {
  specialCheck = prompt("Include special characters in your password? \n(Yes or No)");
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === null || specialCheck === "") {
    alert("Please answer Yes or No");
    determineSpeciaChar();

  } else if (specialCheck === "yes" || specialCheck === "y") {
    specialCheck = true;
    return specialCheck;

  } else if (specialCheck === "no" || specialCheck === "n") {
    specialCheck = false;
    return specialCheck;

  } else {
    alert("Please answer Yes or No");
    determineSpecialChar();
  }
  return specialCheck;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
