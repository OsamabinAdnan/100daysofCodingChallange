// This function takes out the first 10 characters from any text
function extract (str:string):string{
    return str.substring(0,10) // Gets characters from start to position 10
}

console.log(extract("I love Coding"));
// Shows the first 10 characters
// It gives us a smaller piece of the original text,
// just the beginning part.

