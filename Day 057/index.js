"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Comparisons
5 > 4; //Obviously, true.
"apple" > "pineapple"; //Dictionary comparison, hence false. "a" is smaller than "p".
"2" > "12"; //Again, dictionary comparison, first char "2" is greater than the first char "1".
undefined == null; //Values null and undefined equal each other only.
undefined === null; //Strict equality is strict. Different types from both sides lead to false
null == "\n0\n"; //Similar to (4), null only equals undefined.
null === +"\n0\n"; //Strict equality of different types.
