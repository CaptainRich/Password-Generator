# Password Generator Project
Richard Ay, August 2020

## Table of Contents
* [Project Objective](#project-objective)
* [Acceptance Criteria](#acceptance-criteria)
* [Deployment Link](#deployment-link)
* [Password Generation Logic](#password-generation-logic)
* [Application Screen Shot](#application-screen-shot)



## Project Objective
As an employee with access to sensitive data I want to randomly generate a password that meets certain criteria
so that I can create a strong password that provides greater security.

## Acceptance Criteria
GIVEN I need a new, secure password.

1) WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria.
2) WHEN prompted for password criteria, THEN I select which criteria to include in the password.
3) WHEN prompted for the length of the password, THEN I choose a length of at least 8 characters and no more than 128 characters.
4) WHEN prompted for character types to include in the password, THEN I choose lowercase, uppercase, numeric, and/or special characters.
5) WHEN I answer each prompt, THEN my input should be validated and at least one character type should be selected.
6) WHEN all prompts are answered, THEN a password is generated that matches the selected criteria.
7) WHEN the password is generated, THEN the password is either displayed in an alert or written to the page.

## Deployment Link
The deployment link to display the updated web page is: 
[GitHub Pages](https://captainrich.github.io/Password-Generator/).  

## Password Generation Logic

1) Obtain user input (password criteria) and verify against specified criteria.
   a) Requested password is between 8 and 128 characters.
   b) At least one character set (lower case, upper case, numbers, special characters) was selected.
2) Based on the user's specified criteria, create the character set of valid password characters, a combination of all selected character sets.
3) From the starting character set, generate two shuffled character sets, from which the password characters will be extracted from.
4) Build the password by extracting random characters from the two character sets, alternating between the character sets.
5) When a password is available, verify that the specified criteria have been met.
   a) For each character type (lower, upper, etc) required by the user, scan the password looking for a member of that set.
   b) When all 4 possible sets have been scanned for, verify what was found against what is required.
6) If the criteria are not met (perhaps a required character set is missing), generate a new password (step 5 above).
7) Once a valid password is obtained, send it to the console and the window.


## Application Screen Shot

![Password Generator Image](https://github.com/CaptainRich/Password-Generator/blob/master/screenshot.png)
