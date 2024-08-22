// This function multiplies two decimal numbers
function decimalNumber (num1:number, num2:number):number{
    // Multiplies the numbers and rounds the result to two decimal places
    return num1 * num2
}
// Trying it with 0.5 and 0.3
let multiplyDecimal = (decimalNumber(0.5,0.3).toFixed(2))
console.log(multiplyDecimal);
// After multiplying, we round to make the result easier to read.