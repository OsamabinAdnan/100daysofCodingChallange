// Demonstrates 'this' behavior change in a nested function
let nestedFunction = {
    name:"Osama bin Adnan",
    outerMethod: function(){
        console.log((this.name).toUpperCase());
        // Works as expected, logs "Osama bin Adnan" in upper case
        const innerMethod = () => {
        console.log((this.name).toLowerCase());
        // Still accesses myObject's 'property' due to 
      // arrow function capturing 'this' from outer scope
        }
        innerMethod()
    }
}
nestedFunction.outerMethod();
// This example shows that using an arrow function for the inner 
//method preserves the 'this' context from the outer method.