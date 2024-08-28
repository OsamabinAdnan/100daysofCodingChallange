// Traditional function expression
const traditionFunction =  function (a:number, b:number){
    return a+b;
}
// Converted to arrow function
const arrowFunction = (a:number, b:number) => {
    return a+b;
}

console.log(traditionFunction(6,6));
console.log(arrowFunction(6,6));
// Demonstrates the conversion of a
// traditional function expression to an arrow function.