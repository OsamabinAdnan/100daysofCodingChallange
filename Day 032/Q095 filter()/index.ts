// This function filters an array, keeping only numbers greater than 10
function greaterThan10 (num:number[]):number[]{
    return num.filter((number)=> number > 10)
}
//FILTER : Returns the elements of an array that meet the condition specified in a callback function.
let arrayOfNumber = [5, 10, 15, 20, 25]

console.log(greaterThan10(arrayOfNumber));
// The new array contains only the numbers that are greater than 10.