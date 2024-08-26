// This function compares two strings, ignoring case sensitivity
function comparison (str1:string, str2:string):boolean{  
    // Converts both strings to lowercase before comparison 
    return str1.toLowerCase() === str2.toLowerCase()
}

console.log(comparison("Pakistan", "PAKISTAN")); // Outputs: true
console.log(comparison("World", "Word")); // Outputs: false

// We make both strings lowercase to ensure the comparison ignores case differences.