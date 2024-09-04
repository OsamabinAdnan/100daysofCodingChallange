"use strict";
//The postfix and prefix forms
//What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(`a =`, a); //2
console.log(`b =`, b); //2
console.log(`c =`, c); //2
console.log(`d =`, d); //1
//Assignment result
//What are the values of a and x after the code below?
let A = 2;
let x = 1 + (A *= 2);
console.log(`A =`, A); //4
console.log(`x =`, x); //5
