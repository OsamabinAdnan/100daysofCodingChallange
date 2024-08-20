Q47 - Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

Array destructuring 
It is a feature in JavaScript that allows you to extract values from arrays and assign them to variables using a concise and readable syntax. It’s a part of ES6 (ECMAScript 2015) and simplifies working with arrays and objects by making it easier to extract data.

//Example # 01
const numbers = [1, 2, 3];

const [first, second, third] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3

//Example # 02
const colors = ['red', 'green', 'blue'];

const [, secondColor, ] = colors;

console.log(secondColor);  // Output: 'green'

//Example # 03
const fruits = ['apple'];

const [firstFruit, secondFruit = 'banana'] = fruits;

console.log(firstFruit);  // Output: 'apple'
console.log(secondFruit); // Output: 'banana'
