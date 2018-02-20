/*
Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any integer from 0-9 (in the appropriate spots) will produce a valid phone number. This is what a valid phone number looks like: (123) 456-7890

Examples
"(123) 456-7890" ➞ true
"1111)555 2345" ➞ false
"098) 123 4567" ➞ false

Notes
- Don't forget the space after the closing parenthese.
 */

function isValidPhoneNumber(str) {
    return /^(\(\d{3}\) )(\d{3}(-|–))(\d{4})$/.test(str);
}

console.log(isValidPhoneNumber("(123) 456-7890"));