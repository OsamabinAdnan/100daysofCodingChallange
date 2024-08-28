// Arrow function that calculates the product of all its parameters
const productall = (...num:number[]):number =>
    num.reduce((acc,value)=> acc*value,1)
console.log(productall(2,3,4,5,6)) // 120

// This function uses the rest parameter syntax to take 
// any number of arguments, then multiplies them together.