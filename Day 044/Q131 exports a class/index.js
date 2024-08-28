"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    name;
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
    }
}
exports.Person = Person;
// Exports the Person class
