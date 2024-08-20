let ingrediants:string [] = ["Egg", "Chicken", "Toasted Bread", "Cheese", "Vegetable fillings"]

function sandwich(...other:string[]){
    console.log(`Make a sandwich for me with ${other.join(", ")}`);    
}

sandwich("Egg", "Chicken")
sandwich("Egg", "Chicken", "Toasted Bread")
sandwich("Egg", "Chicken", "Toasted Bread", "Cheese")
sandwich("Egg", "Chicken", "Toasted Bread", "Cheese", "Vegetable fillings")