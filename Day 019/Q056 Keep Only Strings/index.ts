// A mixed bag of items
let mixItems = ["apple", 1, "mango", 2, "orange", 3, "peach", 4, "banana", 5, "cheery", 6, true]
// Picks out only the words
let stringOny = mixItems.filter((items)=> typeof items=== "string")
// Shows the list of just words
console.log(stringOny);
