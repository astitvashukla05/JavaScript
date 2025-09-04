// ********************** ARRAY *************************
// Arrays are basic DS used to store multiple values in a structured manner
// They are comma-separated
let alphabet = ['a', 'b', 'c'];
const years = new Array(1290, 2003, 1234, 1454);
// Array can hold n number of values

// Extracting values from arrays
// We use square brackets and index of element we need
console.log(alphabet[0]); // a
console.log(years[3]); // 1454

// Arrays have 0-based indexing

console.log(years.length); // returns the number of elements in the array i.e. 4

// Arrays are mutable i.e. we can change values, add values, etc.
years[2] = 2025;
console.log(years[2]); // 2025

// Arrays can hold multiple data type values

let students = ['astitva', 2, 4, 'meow'];

// Arrays can have arrays inside them

students[2] = years;
console.log(students); // 'astitva',2,[1290,2003,2025,1454]

// ************* ARRAY METHODS ***************

let arr = [1, 2, 3, 4];
arr.push(5); // adds the value after the last index
console.log(arr); // 1,2,3,4,5

arr.unshift(0); // adds element at the first index
console.log(arr); // 0,1,2,3,4,5

arr.pop(); // removes the last index element, returns the popped element
console.log(arr); // 0,1,2,3,4

arr.shift(); // removes the first element from the array
console.log(arr); // 1,2,3,4

console.log(arr.indexOf(3)); // returns the index of the element searched; if not present, returns -1

console.log(arr.includes(2)); // returns true if element is present, false if not
