"use strict";
let grade = [56, 89, 59, 98, 95, 76, 64];
let averageGrade = grade.reduce((total, grade) => total + grade, 0) / grade.length;
console.log(averageGrade);
/*
The callback function provided to reduce has two parameters: total and grade.
total is the accumulator that holds the sum of grades as the function iterates through the array.
grade is the current element in the array being processed.
Initial total is 0.
*/ 
