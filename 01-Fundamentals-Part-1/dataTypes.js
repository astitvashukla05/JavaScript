// ******************* Data Types *********************
// JS has dynamic typing. When you define any variable you don’t need to define its data type, it automatically determines it.
/*  In JS a value is either :
 1. Object
 2. Primitive  */

// PRIMITIVE

// Number, String, Boolean, null, undefined, BigInt, Symbol
// 1. Number are always floating types i.e. always contain decimals even if we don’t define it ... let age = 20;
// 2. Strings: text inside '' or "" ... let str = 'asda';
// 3. Boolean: Logical type which can be true:1 or false:0 .... let teen = age > 18; let human = true;
// 4. Undefined: it is like having a box but currently empty, does not have any value in it ... let student;
// 5. Null: it is also an empty valued container but used in different context
// 6. Symbol: used for values that are unique and cannot be changed
// 7. BigInt: very large constraints of integer values

// typeof operator tells us which data type our value is

let num = 2;
console.log(typeof num); // Number
