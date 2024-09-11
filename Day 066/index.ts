/***************
 * UNION TYPES *
 ***************/

let myVar: string | number;
myVar = "Hello";
console.log(myVar);
myVar = 42;
console.log(myVar);

/*****************
 * LITERAL TYPES *
 *****************/

let direction: "left"|"right"|"up"|"down";
function selectColor (color : "red"|"green"|"blue") {
    console.log(color);
}
selectColor("red")
// selectColor("yellow") ==> //ERROR

/******************
 * NULLABLE TYPES *
 ******************/
let userName: string|null = "Hello";
let ageEx:number |null = null

function greet (name:string |null){
    if (name ===null){
        console.log(`Hello Guest!`);        
    } else {
        console.log(`Hello ${name}!`);        
    }
}
greet("Osama")
greet(null)

/**************
 * TYPE ALIAS *
 **************/

type MyString = string

let myName:MyString = "Osama"

type MyStringorNumber = string | number

let myValue:MyStringorNumber = "Osama"
myValue = 35

//Another Example

type Employee = {
    name:string
    age: string | number
    email?:string
}

let osama:Employee = {
    name:"Osama",
    age: "35 years",
    email:"osama@gmail.com"
}
let arham:Employee = {
    name:"Arham",
    age:3.5
}
console.log(osama);
console.log(arham);

/*********************
 * INTERSECTION TYPE *
 *********************/

type FirstType = {
    name:string
    age:number
    email?:string
}
type SecondType = {
    address:string
    phoneNum:number
}

let person : FirstType | SecondType = {
    name:"Osama bin Adnan",
    age:35,
    email:"osama@gmail.com",
    address: "North Karachi",
    phoneNum: +923001234567
}
console.log(person);
