// Function declaration for squaring a number
function squareDeclaration (num1:number):number{
    return num1*num1
}
// Function expression for squaring a number
const squareExpression = function(num1:number):number{
    return num1*num1
}
// Using both functions to square the number 25
console.log(squareDeclaration(25));
console.log(squareExpression(25));

// Both methods give us the same result, showing two
// different ways to create functions that do the same thing.
