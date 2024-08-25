// This function finds where "code" first shows up in a text
function substring (str:string){
    let text = "Would you like to write some code in TS today?"
    let result = text.indexOf(str)
    return result
}

console.log(substring("code"));
// Outputs the start position of "code"
// It tells us the position number where "code" starts.