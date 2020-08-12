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
function formPassWord( characterSet2, passWordLength, passWordLength ) {

  // Loop over the desired length, and extract that many characters, from random positionss
  // in characterSet2, and stuff them into the passWord string.

  var passWord = "";

  for( var i = 0; i < passWordLength; i++ ) {
    indexRandom = Math.floor( Math.random() * passWordLength );
    passWord += characterSet2[indexRandom];
  }

  return passWord;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function verifyPassword(funnyCharacters, passWord, passWordLength, allowLowerCase, allowUpperCase, allowNumbers, allowSpecials) {

  // Define another set of boolean values indicating if we have satisfied the four component requirements.
  // We will set each of these "tracker variables" to "true" as a corresponding character is found.

  var haveLowerCase = false;
  for (var i = 0; i < passWordLength; i++) {
    var characterToTest = passWord[i];
    var asciiValue = characterToTest.charCodeAt(0);    // get the ascii code for the character

    if (asciiValue > 96  && asciiValue < 123) {
      haveLowerCase = true;
      break;                 // no need to test further
    }
  }

  var haveUpperCase = false;
  for (var i = 0; i < passWordLength; i++) {
    var characterToTest = passWord[i];
    var asciiValue = characterToTest.charCodeAt(0);    // get the ascii code for the character

    if (asciiValue > 64  && asciiValue < 91) {
      haveUpperCase = true;
      break;                 // no need to test further
    }
  }

  var haveNumbers = false;
  for (var i = 0; i < passWordLength; i++) {
    var characterToTest = passWord[i];
    var asciiValue = characterToTest.charCodeAt(0);    // get the ascii code for the character

    if (asciiValue > 47  && asciiValue < 58 ) {
      haveNumbers = true;
      break;                 // no need to test further
    }
  }

  var haveSpecials = false;
  for (var i = 0; i < passWordLength; i++) {

    var characterToTest = passWord[i];
    if( funnyCharacters.indexOf(characterToTest) != -1 ) {
    //if (funnyCharacters.indexOf(passWord.value.charAt(i)) != -1) {
      haveSpecials = true;
      break;                 // no need to test further
    }
  }

  // Now compare what we have with what is required.

  var requirementSatisfied = true;    // assume we're good

  if( !(allowLowerCase && haveLowerCase) ) {
    requirementSatisfied = false;
  }
  if( !(allowUpperCase && haveUpperCase) ) {
    requirementSatisfied = false;
  }

  if( !(allowNumbers && haveNumbers) ) {
    requirementSatisfied = false;
  }
  
  if( !(allowSpecials && haveSpecials) ) {
    requirementSatisfied = false;
  }

  return requirementSatisfied;
  
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
function buildPassword( passWordLength, allowLowerCase, allowUpperCase, allowNumbers, allowSpecials ) {

  // Define the various character sets that possible make up the password.

  var lowerCaseLetters  = "abcdefghihklmnopqrstuvwxyz";
  var upperCaseLetters  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters  = "1234567890";
  var funnyCharacters = "!@#$%^&*()_+=-?><,.:;[]{}/~|";

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

  // When building the password, we will pick random characters from characterSet 2.
  // When the password (of the desired length is complete), we must insure that we
  // have characters from each of the required categories.

  var requirementSatisfied = false;

  while( !requirementSatisfied ) {
    // Construct the password string
    passWord = formPassWord( characterSet2, passWordLength, passWordLength );

    // Verify that the password string meets requirements
    requirementSatisfied = verifyPassword( funnyCharacters, passWord, passWordLength, allowLowerCase, allowUpperCase, allowNumbers, allowSpecials );

  }

  // Have a password that meets requirements.
  console.log( "The generated password is: ", passWord );

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