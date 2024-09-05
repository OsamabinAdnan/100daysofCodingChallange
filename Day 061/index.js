"use strict";
//Replace Function Expressions with arrow functions in the code below:
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );
let qna = (question, yes, no) => {
    if (question = "Do you Agree?") {
        console.log(yes);
    }
    else if (question != "Do you Agree?") {
        console.log(no);
    }
};
qna("Do you Agree?", "You Agreed", "You canceled the execution.");
