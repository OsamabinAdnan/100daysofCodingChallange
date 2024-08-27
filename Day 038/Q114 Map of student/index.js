"use strict";
// Creates a Map to store student IDs (keys) and names (values)
const students = new Map();
students.set(1, "John");
students.set(2, "Jane");
students.set(3, "Bob");
students.set(4, "Alice");
// Iterates over the Map and logs each student ID and name
students.forEach((ID, name) => {
    console.log(`\nStudent ID: ${ID}, Student Name: ${name}`);
});
// This loop goes through each student and logs their ID and name.
