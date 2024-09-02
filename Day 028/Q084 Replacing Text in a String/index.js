"use strict";
// This function swaps "JavaScript" with "TypeScript" in a sentence
function replacement(str) {
    let sentence = `I love JavaScript and JavaScript is awesome`;
    let word = sentence.replace(/JavaScript/g, str);
    return word;
}
console.log(replacement("TypeScript"));
//OR
// This function swaps "JavaScript" with "TypeScript" in a sentence
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
    // Uses a regular expression with the 'g' flag for a global replacement
}
// Example: Changing a programming language name in a sentence
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
// Outputs: "I love TypeScript and TypeScript is awesome!"
// Every "JavaScript" in the sentence is changed to "TypeScript".