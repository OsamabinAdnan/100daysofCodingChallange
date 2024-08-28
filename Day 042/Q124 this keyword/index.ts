// Defines an object with a name property and a method
// to return its name
const person = {
    name:"Osama bin Adnan",
    getName:function(){
        return this.name
        // Uses 'this' to refer to the object itself
        // and return its 'name' property
    }
}
console.log(person.getName());
// This method correctly identifies and returns
//  the object's 'name' property using 'this'.