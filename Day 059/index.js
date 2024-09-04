"use strict";
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ LOOP @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Which values does the while loop show?
let i = 0;
while (++i < 5)
    console.log(i);
while (i++ < 5)
    console.log(i);
{
    `\n`;
}
//Which values get shown by the "for" loop?
for (i = 0; i < 5; ++i) {
    console.log(i);
}
for (i = 0; i < 5; i++) {
    console.log(i);
}
//Output even numbers in the loop
for (i = 2; i <= 10; i++)
    if (i % 2 == 0) {
        console.log(i);
    }
//Replace "for" with "while"
i = 0;
while (i < 3) {
    console.log(`number ${i}`);
    i++;
}
//Output prime numbers
let n = 100;
nextPrime: for (i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue nextPrime;
        }
    }
    console.log(`Prime #: `, i);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ SWITCH @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Write the code using if..else which would correspond to the following switch:
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }
//Rewriting
let browser = 'Edge';
if (browser === "Edge") {
    console.log("You've got the Edge!");
}
else if (browser === "Chrome" || browser === "FireFox" || browser === "Safari" || browser === "Opera") {
    console.log("Okay we support these browsers too");
}
else {
    console.log("We hope that this page looks ok!");
}
//Rewrite the code below using a single switch statement:
// let a = +prompt('a?', '');
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
//Rewriting
let num = 1;
switch (num) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log("2, 3");
        break;
}
