"use strict";
//Rewrite the function using '?' or '||'
// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.
// function checkAge(age) {
//     if (age > 18) {
//     return true;
//     } else {
//     return confirm('Did parents allow you?');
//     }
// }
//Using a question mark operator ?
function checkAge(age) {
    return (age > 18) ? true : 'Did parents allow you?';
}
console.log(checkAge(19));
//Using OR ||
function ageCheck(age) {
    return (age > 18) || 'Did parents allow you?';
}
console.log(ageCheck(18));
//Function pow(x,n)
//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
function pow(x, n) {
    let result = (x ** n);
    return result;
}
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));
