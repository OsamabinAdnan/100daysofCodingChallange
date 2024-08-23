let a = 5
let b = 10

console.log("Before swap: a =", a, "b =", b);

let temp:number = a
a=b
b=temp

console.log(`After swap: a =`,a, `b =`,b);

//@@@@@@@@@@ OR @@@@@@@@@@@@

function swap(){
    let a = 5
    let b = 10
    console.log("Before swap: a =", a, "b =", b);

    let temp:number = a
    a=b
    b=temp
    console.log(`After swap: a =`,a, `b =`,b);
}
swap()