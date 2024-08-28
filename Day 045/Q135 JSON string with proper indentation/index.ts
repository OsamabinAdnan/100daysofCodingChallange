let person = {
    name: "John",
    age: 30,
    city: "New York"
}

// Converts the object into a JSON string with indentation
const jsonstring = JSON.stringify(person,null,2)
// The '2' specifies the number of spaces to use as white space

console.log(jsonstring);
// Shows how adding indentation to the JSON string 
// makes it easier to read.