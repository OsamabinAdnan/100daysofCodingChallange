// Defines a function that accepts multiple hobbies as arguments
function hobbies (...rest:string[]){
    // Loops through each hobby in the array
    rest.forEach(hobby =>{
        console.log(`I enjoy ${hobby} very much`);        
    })
}
// Calls the function with different hobbies
hobbies("reading", "coding", "cycling", "cooking")