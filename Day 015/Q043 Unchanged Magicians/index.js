"use strict";
let magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let copy_magicians = magicians.slice();
let copy_great_magicians = make_great(copy_magicians);
console.log("\nOriginal magicians:");
show_magicians(magicians);
console.log("\nGreat magicians:");
show_magicians(copy_great_magicians);
