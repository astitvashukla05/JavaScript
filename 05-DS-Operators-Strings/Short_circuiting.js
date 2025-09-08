// ********* && || ***********

/* 
 Logical operator can accept any data type 
 they can return any data type
 they are used for short circuiting
*/
console.log('------ OR -------');
// In case of || is the first value is truthy it will return that element immediately
console.log(3 || 'moew'); // return first value
console.log(0 || 'meow'); // return 2nd value
console.log('meow' || 3); // return first value
console.log(undefined || null || false || 0 || 'hello' || '' || 23 || ' '); //prints first truth value
console.log(undefined || null || false || 0 || '' || '' || 0 || false); //returns last false value

console.log(`--------- AND --------`);
console.log(0 && ' '); // if the fist value is falsy then it ends and returns it
console.log('meow' && 'Astitva'); // if the first value is truthy it continues the eval and then returns the last element
console.log('meow ' && 'awstit' && 0); // if one of the values are falsy it returns the first falsy value
