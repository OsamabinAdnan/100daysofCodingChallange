// Initializes the counter at 10
let num:number = 10
// This while loop counts down from 10 to 1 and stops at 5
while (num > 0){
    if (num === 5){
        break // Exits the loop when counter reaches 5
    }
    console.log(num);
    num --; // Decrements the num by 1
}
//Logs the countdown from 10 but stops abruptly when it hits 5.