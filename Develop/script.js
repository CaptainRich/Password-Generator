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
function shuffle( characterSet1 ) {

  var characterSet2 = ""; // shuffled version of "characterSet1"

  // Convert characterSet1 from a string to an array of individual characters
  var arraySet1 = characterSet1.split('');


  // Determine the length of the character set we have to work with
  var setLength = characterSet1.length;

  // Make one pass through the working character set, and substitute a random replacement 
  // into characterSet2.  We will set characters in set1 to "null" when they have been pulled
  // into set2.

  var indexRandom = Math.floor( Math.random() * setLength+1 );  // starting random position

  for( var i = 0; i < setLength; i++ ) {   // loop over the positions in characterSet2

    // Determine an untouched random position in the characterSet1.  Touched positions will be "null".
    while( arraySet1[indexRandom] === null ) {
      indexRandom = Math.floor( Math.random() * setLength );
    }

    // Take the randomly located character from set1 and put it in the current position [i] of set2.
    // Then set the character position in set1 to "null" so it can't be selected again.
    characterSet2 += arraySet1[indexRandom];
    arraySet1[indexRandom] = null;

  }

  return characterSet2;
}

///////////////////////////////////////////////////////////////////////////
function buildPassword( passWordLength, allowLowerCase, allowUpperCase, allowNumbers, allowSpecials ) {

  // Define the various character sets that possible make up the password.

  var lowerCaseLetters  = "abcdefghihklmnopqrstuvwxyz";
  var upperCaseLetters  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters  = "1234567890";
  var funnyCharacters = "!@#$%^&*()_+=-?><,.:;[]{}/~";

  var characterSet1 = ""; // the combined set of password characters based on the user's selections

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
    characterSet1 += funnyCharacters;
  }


  // Shuffle the character set (into the working set of characters)
  characterSet2 = shuffle( characterSet1 );



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