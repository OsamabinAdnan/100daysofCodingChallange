// This function prints numbers from 1 to 5 using a loop
function printNumberWithLet (){
    for(let i=1;i<=5;i++){
        // Uses let for loop variable i
        console.log(i);
    }
    // i is not accessible here, outside the loop,
    // because it's defined with let
}
printNumberWithLet();
// This shows that let limits i to the loop, preventing errors from 
// using i where it's not intended.