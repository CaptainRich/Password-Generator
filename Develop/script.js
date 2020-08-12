// Assignment code here


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


///////////////////////////////////////////////////////////////////////////
function getPassWordLength() {

  var passWordLength = 0;                // initialize the length value

  // Loop until the permitted length is obtained.  The logic below prevents "NaN" values.
  while( !( passWordLength >= 8  && passWordLength <= 128 ) ) {
    passWordLength = Number( window.prompt( "Enter desired password length (8-128 characters): ") );
  }

  return passWordLength;
}

///////////////////////////////////////////////////////////////////////////
function getLowerCase() {

  var allowLowerCase = true;                // initialize the return value

  // Prompt to allow lower case letters.
  allowLowerCase = window.confirm( "Allow lower case letters (Ok=Yes or Cancel=No): ") ;
  
  return allowLowerCase;
}

///////////////////////////////////////////////////////////////////////////
function getUpperCase() {

  var allowUpperCase = true;                // initialize the return value

  // Prompt to allow upper case letters.
  allowUpperCase = window.confirm( "Allow upper case letters (Ok=Yes or Cancel=No): ") ;
  
  return allowUpperCase;
}

///////////////////////////////////////////////////////////////////////////
function getNumbers() {

  var allowNumbers = true;                // initialize the return value

  // Prompt to allow upper case letters.
  allowNumbers = window.confirm( "Allow numbers (Ok=Yes or Cancel=No): ") ;
  
  return allowNumbers;
}

///////////////////////////////////////////////////////////////////////////
function getSpecials() {

  var allowSpecials = true;                // initialize the return value

  // Prompt to allow upper case letters.
  allowSpecials = window.confirm( "Allow special characters (Ok=Yes or Cancel=No): ") ;
  
  return allowSpecials;
}


///////////////////////////////////////////////////////////////////////////
function buildPassword( passWordLength, allowLowerCase, allowUpperCase, allowNumbers, allowSpecials ) {

  // Define the various character sets that possible make up the password.

  var lowerCaseLetters  = "abcdefghihklmnopqrstuvwxyz";
  var upperCaseLetters  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters  = "1234567890";
  var specialCharacters = "!@#$%^&*()_+=-?><,.:;[]{}/~|";

  var characterSet1 = ""; // the combined set of password characters based on the user's selections
  var characterSet2 = ""; // shuffled version of "characterSet1"

  if( allowLowerCase ) {  // include lower case letters if requested
    characterSet1 += lowerCaseLetters;
  }

  if( allowUpperCase ) {  // include upper case letters if requested
    characterSet1 += upperCaseLetters;
  }

  if( allowNumbers ) {  // include numbers if requested
    characterSet1 += numberCharacters;
  }
  
  if( allowSpecials ) {  // include special characters if requested
    characterSet1 += specialCharacters;
  }

  var setLength = characterSet1.length;



}


///////////////////////////////////////////////////////////////////////////
function generatePassword() {

  // First, obtain the characteristics of the password to be generated.

  var passWordLength = getPassWordLength();
  var allowLowerCase = getLowerCase();
  var allowUpperCase = getUpperCase();
  var allowNumbers   = getNumbers();
  var allowSpecials  = getSpecials();

  // Build the password according to the criteria.

  generatedPassWord = buildPassword( passWordLength, allowLowerCase, allowUpperCase, allowNumbers,           allowSpecials );
}