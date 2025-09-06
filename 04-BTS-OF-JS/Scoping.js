// *********** SCOPES AND CHAINING *************
// how program variables are organized and accessed
// lexical scoping is where it is controlled by placement of functions of code and blocks
// scope is the place of environment where a variable is declared eg. function scope ,global scope ,block scope
// scope of variable is very a certain variable can be accessed

// *** Global Scope **
const name = 'Meow'; // can be accessed anywhere and everywhere withing the code

// *** Function scope **

function myAge() {
  let age = 20; // not available outisde this function
}
console.log(age); // this is not the same variable as in the function throws error

// ** Block Scope **
if (1) {
  let year = 2025; // available only withing these paranthesis
}
console.log(year); // throws error

// ** Chaining **

const myName = 'Jonas'; //global scope

function first() {
  const age = 30; //function scope

  if (age >= 30) {
    // true
    const decade = 3; //block scope
    var millenial = true;
  }

  function second() {
    const job = 'teacher'; //function scope
    console.log(`${myName} is a ${age}-old ${job}`); // in nested scoping the inner block has access to all the variables outside it but it is not true for vise versa
    // Jonas is a 30-old teacher
  }

  second();
}

first();
