"use strict";
function make_shirt(size = "Large", message = "I love Typescript") {
    console.log(`Shirt size is ${size} and ${message} is printed on it`);
}
make_shirt(); // Default large and message
make_shirt("Medium"); // Default message, medium size
make_shirt("Small", "I love Python"); // Custom message, small size
