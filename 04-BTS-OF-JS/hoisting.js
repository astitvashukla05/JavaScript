// ****** Hoisting *******

// some variables are made accessible before they are actually declared they are automatically lifted to the top of the code
// but bts the code is first scanned for the variable declaration before it is used
// function declarations are hoisted
// var declared variable can also be used but instead of throwing error it used returns undefined until it is not declared
// let and const variables are not hoisted

// Ex.
console.log(x); // undefined
console.log(y); // error
console.log(z); // error
var x = 8;
let y = 9;
const z = 10;

// var variables create window objects
