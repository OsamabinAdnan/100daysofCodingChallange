// This function creates a random number between 1 and 10
function generatingRandom_Number ():number {
    return Math.floor(Math.random()*10+1) // Scales up and rounds down
}
console.log(generatingRandom_Number());


/*
Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).

Math.random() * 10 scales this random number up to a range between 0 (inclusive) and 10 (exclusive). This means you could get values from 0 up to, but not including, 10.

Math.floor(Math.random() * 10) rounds this scaled value down to the nearest whole number. This gives you integers from 0 to 9 (inclusive).

Adding +1 shifts this range from 0-9 to 1-10. This is because:

If Math.random() * 10 generates a number in the range [0, 9.999], Math.floor will convert it to an integer from 0 to 9.
By adding 1, you adjust this to the range 1 to 10.
So the code generates a random integer between 1 and 10 (both inclusive). Without the +1, it would generate integers between 0 and 9.
*/