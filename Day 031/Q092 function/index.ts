let favoriteFruits : string[] = ["Apple", "Mango", "Banana", "Cherry"];

function removalLastFruit (){
    let lastFruit = favoriteFruits.pop();
    return lastFruit
}

console.log(removalLastFruit());
console.log(favoriteFruits);


//OR
// This function removes the last element from an array and returns it
function removeLastElement (arr:string[]){
    return arr.pop(); // Removes and returns the last element of the array
}
const fruits: string[] = ["Apple", "Banana", "Cherry", "Mango"]
console.log(removeLastElement(fruits));
console.log(fruits);



