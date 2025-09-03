// *************** Conversion and Coercion ****************

// Type conversion is we convert data from one type to another
// Coercion occurs when JS automatically convert the data itself from one type to another

let year = '2000'; //String
// Type Conversion
console.log(year + 25); // Gives 200025 as the answer js bts convert 25 to string
console.log(Number(year) + 25); // 2025
console.log(Number('jonas')); // Exception return NaN not a Number

// Type Coersion
console.log('I am ' + 21 + ' years old'); // Js automatically converts 21 to string
console.log('23' - '10' - 3); // For -,*,/ operator Js converts string to number while + operator converts number to string

// Guess the output

let n = '1' + 1;
n = n - 1;
console.log(n); // 10
