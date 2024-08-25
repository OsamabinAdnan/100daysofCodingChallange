// This function finds "Banana" in the fruits 
// array and replaces it with "Mango"
function favoriteFruit (fruits:string[]){
    console.log(`Before swapping :`,fruits);    
    let index = fruits.indexOf("Banana")
    console.log(`Index of Banana :`, index); // Finds the index of "Banana"
    if(index !== -1) fruits[index] = "Mango" // Replaces "Banana" with "Mango" if found
}
let fruits = ["Apple", "Banana", "Cherry", "Peach"]
favoriteFruit(fruits)
console.log(`After swapping :`,fruits); // We're swapping "Banana" for "Mango" in our fruit list.
