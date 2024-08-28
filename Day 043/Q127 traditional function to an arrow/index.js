"use strict";
// Traditional function expression
const traditionFunction = function (a, b) {
    return a + b;
};
// Converted to arrow function
const arrowFunction = (a, b) => {
    return a + b;
};
console.log(traditionFunction(6, 6));
console.log(arrowFunction(6, 6));
// Demonstrates the conversion of a
// traditional function expression to an arrow function.
