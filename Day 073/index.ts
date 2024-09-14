/*******************
 * TYPE ASSERTIONS *
 *******************/

let data:any = "1000"

console.log((data as string).repeat(3));

let data2:any = 1000
console.log((data2 as number).toExponential(0));
