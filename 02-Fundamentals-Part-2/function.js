// ***************** FUNCTIONS *****************

// Function is a block of code that performs a specific task and can be reused over and over again

// Function declaration
function logger() {
  console.log('My name is Astitva');
}
// Function calling
// Prints "My name is Astitva" 3 times
logger();
logger();
logger();

// Functions can accept data and return data
// These are called parameters or arguments
function addNumbers(num1 = 7, num2 = 8) {
  // Parameters with default values if no arguments are passed
  console.log(num1 + num2); // We can print the sum within the function
  return num1 + num2; // We can also return the sum to use it later
}
const sum = addNumbers(5, 10); // Function call with arguments 5 and 10
console.log(sum); // Prints 15
console.log(addNumbers(20, 30)); // Prints 50

// If we call the function without arguments, default values will be used
console.log(addNumbers()); // Prints 15 (7 + 8)

// Function Declarations vs Expressions

// Function Declaration
function calcAge1(birthYear) {
  return 2025 - birthYear;
}
console.log(calcAge1(2000)); // Works

// Function Expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};
console.log(calcAge2(2000)); // Works
// Difference:
// Function declarations are hoisted, meaning they can be called before they are defined in the code.
// Function expressions are not hoisted, so they cannot be called before they are defined.
// Both methods are good to use, it depends on the use case and personal preference.

// Arrow Functions
const calcAge3 = (birthYear) => 2025 - birthYear; // One-liner arrow function; return is implicit
console.log(calcAge3(2000)); // 25
// If the number of lines and parameters increases, we need to modify the function:
const calcAge4 = (birthYear, currentYear) => {
  let age = currentYear - birthYear; // ✅ fixed order
  return age;
}; // If the arrow function has multiple lines, we need to write a return statement explicitly
console.log(calcAge4(2000, 2025)); // 25

// Function calls in a Function
// Other functions can be called inside another function

const multipleBy5 = (num) => num * 5;

function sumOfNumbers(a, b) {
  const c = multipleBy5(a); // a goes as an argument in multipleBy5 arrow function, result returned
  const d = multipleBy5(b); // b goes as an argument in multipleBy5 arrow function, result returned
  return c + d; // returns 5 + 10 = 15
}
console.log(sumOfNumbers(1, 2)); // 15
