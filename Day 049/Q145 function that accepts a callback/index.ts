function sum (a: number, b: number, cb:(res:number)=> void) {
    let result = a + b;
    cb (result)
}
function callback (result:number){
    console.log(result);    
}
sum(5,5, callback)


//OR

// This function accepts a callback function and 
// invokes it with given arguments

function executecallback (callback:(arg1:number, arg2:number)=> void, arg1:number, arg2:number):void {
    callback (arg1, arg2) // Invokes the callback with the specified arguments
} 

// Example callback function that adds two numbers
const add = (a:number,b:number)=>{
    console.log(a+b);    
}
executecallback(add,5,3)
// Demonstrates invoking a callback function with arguments to perform an addition.