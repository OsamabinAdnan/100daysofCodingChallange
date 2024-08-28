// Demonstrating 'this' in traditional vs. arrow functions
let behavior = {
  value: "Tradition VS Arrowfunction",
  traditionFunction: function () {
    console.log(`Tradition function:`, this.value);
  },
  
  arrowFunction: () => {
    console.log(`Arrow function:`, this.value); //Error
    // 'this' is not bound to traditionalVsArrow object
    //  but to the scope in which traditionalVsArrow was defined
  },
  //Arrow functions, on the other hand, do not have their own this context. 
  //Instead, they inherit this from the surrounding lexical scope where the arrow function is defined. 
  //This means that within an arrow function, this is not bound to the object but to the scope in which the object was created.

};
behavior.traditionFunction();
// Logs "traditionalVsArrow value"

behavior.arrowFunction();
// Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how
// 'this' is determined in traditional functions versus arrow functions.
