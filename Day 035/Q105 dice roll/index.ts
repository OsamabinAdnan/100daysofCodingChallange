// This function simulates rolling a dice and returns
// a number between 1 and 6
function diceRolling ():number{
    // Calculates a random integer from 1 to 6
    return Math.floor(Math.random()*6+1)
}
console.log(diceRolling());
// Outputs a random number between 1 and 6
// Here, we mimic the action of rolling a dice and getting a result.