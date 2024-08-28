"use strict";
// This function evaluates a grade and logs the corresponding remark
function evaluateExpression(grade) {
    switch (grade) {
        case "A":
            console.log(`Excellent`);
            break;
        case "B":
            console.log(`Good`);
            break;
        case "C":
            console.log(`Fair`);
            break;
        case "D":
            console.log(`Need Improvement`);
            break;
        case "F":
            console.log(`Very Poor!, Fail`);
            break;
        default:
            console.log(`Invalid Input, Enter correct grade`);
    }
}
// Uses a switch statement to evaluate the grade and defaults 
// to "Invalid grade" if no match is found.
evaluateExpression("A");
evaluateExpression("B");
evaluateExpression("C");
evaluateExpression("D");
evaluateExpression("F");
evaluateExpression("G");
