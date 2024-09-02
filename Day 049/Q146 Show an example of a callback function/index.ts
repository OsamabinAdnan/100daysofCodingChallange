// This array of numbers will be filtered
const numbers:number[] = [1,2,3,4,5,6,7,8,9,10]

function isEven(num:number){
    return num % 2 === 0
}

const evenNumber = numbers.filter(isEven)
console.log(evenNumber)

//OR

// Uses .filter() with a callback function to filter
// out numbers greater than 5
const filteredNumber = numbers.filter ((number)=> number > 5)
console.log(filteredNumber);
// The callback function here checks each number, and .filter()
// creates a new array with numbers that meet the criteria.
