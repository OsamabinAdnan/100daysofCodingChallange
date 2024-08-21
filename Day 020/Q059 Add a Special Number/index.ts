// This program makes a function that adds a specific number
function specialNumber(valuetoAdd:number){
    // It takes a number and adds your special number to it
    return function(num1: number){
    return num1 + valuetoAdd
    }
}
// Making a magic box that adds 10
let addTen = specialNumber(10);

console.log(addTen(25));
// We made a function (magic box) that adds 10 to any number.