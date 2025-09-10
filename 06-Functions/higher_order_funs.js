// JS treats functions as first class i.e functions are simply values that have a type of object
// We can store functions in variables or obejct keys
// we can pass other functions into a function like event listeners

// return functions from functions and use methods on functions

// ******** HIGHER ORDER FUNCTION **********

// A function that recieves a function as argument or return function
// Btn.addEvenlistener('click',greet)  *greet is a callback function*
// higher order are used for abstraction and code modularization
const word = 'Javascript is fun';
const oneWord = function (str) {
  return str.replace(' ', '').toLowerCase();
};
const uppercase = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join();
};
const higherOrderFn = function (str, fn) {
  // fn used a callback function
  console.log('Transformed the string ', fn(str));
  console.log(fn.name);
};
higherOrderFn(word, oneWord);
higherOrderFn(word, uppercase);

//function returning function
const greet = (greeting) => {
  return (name) => {
    console.log(greeting, name);
  };
};
greet('Hey')('astitva');
