"use strict";
// A generic function that returns the input value as is
function returnType(val) {
    return val;
}
const numValue = returnType(100);
const strValue = returnType("Hello");
const boolValue = returnType(true);
const arrValue = returnType([1, 2, 3, 4, 5]);
console.log(`Number Value: ${numValue}`);
console.log(`String Value: ${strValue}`);
console.log(`Boolean Value: ${boolValue}`);
console.log(`Array Value: ${arrValue}`);
/***************************
 * GENERICS MULTIPLE TYPES *
 ***************************/
// Generic Function `returnTypeEx`
function returnTypeEX(val) {
    return val;
}
console.log(returnType(100));
console.log(returnType("Osama"));
// Arrow Function with Generics `returnTypeArrowSyntax`
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(35));
console.log(returnTypeArrowSyntax(false));
// Generic Function `testType`
function testType(val) {
    return `This value is ${val} and it type is ${typeof val}`;
}
console.log(testType(true));
console.log(testType(undefined));
console.log(testType("Ponka"));
// Generic Function `multipleTypes`
function multipleTypes(val1, val2) {
    return `The first value is ${val1} and second value is ${val2}`;
}
console.log(multipleTypes("Osama", 35));
console.log(multipleTypes(true, null));
/********************
 * GENERICS CLASSES *
 ********************/
// Generic Class `User`
class User {
    constructor(value) {
        this.value = value;
    }
    // Method that takes a message of type `T` and displays it along with the `value` property
    show(msg) {
        console.log(`${msg}, ${this.value}`);
    }
}
let userOne = new User("Osama");
console.log(userOne.value);
userOne.show("Message");
let userTwo = new User(100);
console.log(userTwo.value);
userTwo.show("Message");
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habit", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow your heart", isbn: 650650 });
console.log(itemOne);
let itemTwo = new Collection();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 1500 });
console.log(itemTwo);
