"use strict";
let person = {
    name: "John",
    age: 30,
    city: "New York",
    getperson: function () {
        return this.name + " " + this.age + " " + this.city;
    }
};
console.log(person.getperson());
//OR
// An object with multiple properties and a method that
// interacts with them using 'this'
let areaofRectangle = {
    length: 10,
    breadth: 20,
    getarea: function () {
        return this.length * this.breadth;
        // 'this' accesses 'length' and 'width' properties of the object
    }
};
console.log(areaofRectangle.getarea());
// The 'calculateArea' method uses 'this' to compute
// the area based on the object's own dimensions.
