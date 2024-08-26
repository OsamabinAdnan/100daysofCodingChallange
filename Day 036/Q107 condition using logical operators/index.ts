// This function checks if a number is divisible by both 2 and 3
function divisible (num:number):boolean{
    // Uses the modulo operator to check for no remainder
    return (num % 2 === 0 && num % 3 ===0)
}
console.log(divisible(15))
console.log(divisible(12));
// Logical operators help us verify the number's divisibility by both 2 and 3