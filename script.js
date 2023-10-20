// Assignment Code
function generatePassword() {
  const numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
  const uppercaseCharacters =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const lowercaseCharacters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const specialCharacters =['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  const possibleCHaracters=[];

  numberOfCharacters = prompt("How many characters long would you like your password to be? Choose between 8-128 characters.");
  if (numericCharacters < 8 \\ numberOfCharacters > 128){
    return "Passwork must be between 8-128 characters, please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt ("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + numberOfCharacters + "characters long.");
  }
  hasLowercase= confirm("Do you wish to have lowercase characters?");
  if (hasLowercase){
    const turnToLowercase = alert("Your password will include lowercase characters.");
  } else {
    alert('Your password will NOT include lowercase characters.');
  }

  hasUppercase= confirm("Do you wish to have uppercase characters?");
  if (hasLowercase){
    const turnToUppercase = alert("Your password will include uppercase characters.");
  } else {
    alert('Your password will NOT include uppercase characters.');
}

hasNumbers= confirm('Do you wish to have numbers?');
if(hasNumbers) {
  alert('Your password will include numbers.');
} else {
  alert('Your password will NOT include numbers.');
}

hasSpecial= confirm('Do you wish to have special characters?');
if(hasSpecial) {
  alert('Your password will include special characters.');
} else {
  alert('Your password will NOT include special characters.');
}

if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
  return "You must include one character type. Please pick at least one character type.";
};


 
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
