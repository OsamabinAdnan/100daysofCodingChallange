// This function adds a number and a string that represents a number
function mixedType (num:number,str:string):number{
     // Converts the string to a number and adds it to the first number
    return num + Number(str)
}
// Trying it with 10 and "10"
console.log(mixedType(10,"10")); //Shows 20
// The string "10" is turned into the number 10, and then added to 10.
