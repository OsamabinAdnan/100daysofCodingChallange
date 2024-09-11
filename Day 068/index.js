"use strict";
/*********
 * TUPLE *
 *********/
let article = [11, "arrayOne", true];
article = [12, "arrayTwo", false];
console.log(article);
// Trying to push a new element into a tuple (will result in an error)
// article.push(100)
console.log(article);
// Destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
