// This function divides two numbers and finds the quotient and remainder
function finding (num1:number, num2:number){
    // Calculates the quotient and remainder
    let remainder:number = num1 % num2
    let quotient:number = Math.floor(num1 / num2)
    return {quotient,remainder}
}
// Trying it with 40 divided by 6
console.log(finding(40,6))