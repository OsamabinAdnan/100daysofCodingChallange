// A generic function that returns the input value as is
function returnType <T>(val:T):T{
    return val
}

const numValue: number = returnType(100)
const strValue: string = returnType("Hello")
const boolValue:boolean = returnType(true)
const arrValue:number[] = returnType([1,2,3,4,5])

console.log(`Number Value: ${numValue}`);
console.log(`String Value: ${strValue}`);
console.log(`Boolean Value: ${boolValue}`);
console.log(`Array Value: ${arrValue}`);

/***************************
 * GENERICS MULTIPLE TYPES *
 ***************************/

// Generic Function `returnTypeEx`
function returnTypeEX<T> (val:T):T{
    return val
}
console.log(returnType(100));
console.log(returnType("Osama"));

// Arrow Function with Generics `returnTypeArrowSyntax`
const returnTypeArrowSyntax = <T>(val:T):T => val

console.log(returnTypeArrowSyntax(35));
console.log(returnTypeArrowSyntax(false));

// Generic Function `testType`

function testType <T> (val:T):string {
    return `This value is ${val} and it type is ${typeof val}`
}
console.log(testType(true));
console.log(testType(undefined))
console.log(testType("Ponka"));

// Generic Function `multipleTypes`
function multipleTypes<T,S>(val1:T, val2:S):string{
    return `The first value is ${val1} and second value is ${val2}`
}

console.log(multipleTypes("Osama",35));
console.log(multipleTypes(true,null));

/********************
 * GENERICS CLASSES *
 ********************/

// Generic Class `User`
class User<T>{
    constructor(public value:T){}
    // Method that takes a message of type `T` and displays it along with the `value` property
    show(msg:T):void{
        console.log(`${msg}, ${this.value}`);        
    }
}
let userOne = new User ("Osama")
    console.log(userOne.value);
    userOne.show("Message")
let userTwo = new User <number | string>(100)
    console.log(userTwo.value);
    userTwo.show("Message")

/***************************
 * GENERICS AND INTERFACES *
 ***************************/

// Interface definitions for Book and Game
interface Book {
    itemType:string,
    title:string
    isbn:number
}
interface Game {
    itemType:string,
    title:string,
    style:string,
    price:number
}

class Collection <T> {
    public data:T[] =[]

    add(item:T):void {
        this.data.push(item)
    }
}

let itemOne = new Collection<Book>()
itemOne.add({itemType:"Book", title: "Atomic Habit", isbn:150510})
itemOne.add({itemType:"Book", title: "Follow your heart", isbn:650650})
console.log(itemOne);

let itemTwo = new Collection <Game>()
itemTwo.add({itemType: "Game", title:"Uncharted", style:"Action", price:1500})
console.log(itemTwo);
