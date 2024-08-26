// Calculates the absolute difference between -5 and 5
function difference (num1:number, num2:number):number{
    let diff = Math.abs(num1 - num2)
    return diff;
}
// This line shows the absolute value of the difference between -5 and 5, ignoring the sign.
console.log(difference(-5,5));

// Returns the absolute value of a number (the value without regard to whether it is positive or negative). 
// For example, the absolute value of -5 is the same as the absolute value of 5.