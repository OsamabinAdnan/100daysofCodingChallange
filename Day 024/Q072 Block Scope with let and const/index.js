"use strict";
// Demonstrating block scope
{
    let blocklet = "Visible inside the block";
    let blockconst = "Also visible inside the block";
    console.log(blocklet); // Works fine here
    console.log(blockconst); // Also works fine here
}
try {
    console.log(blocklet); // This will fail
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(blockconst);
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
// This shows that `let` and `const` keep variables safe
// inside the block where they're defined.
