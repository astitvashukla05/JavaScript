let arr = [10, 20, 30, 40, 50, 60];

// JS has very power methods to transform new array from exsisting arrays they take in the arrays and forms new values

// ************** MAP *************
// map basically take the array elements and returns new array while performing the function that has been written in it
let mapArr = arr.map(element => element * 2);
console.log(mapArr);

// ************** REDUCE *************
// Reduce method returns takes in elements and a default value and performs operation and returns that one value
let reduceVal = arr.reduce((e, sum = 0) => sum + e);
console.log(reduceVal);

// ********* FILTER **********
// Filter performs some operations and based on that it returns a new array
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let filteredArr = arr2.filter(e => e % 2 == 0);
console.log(filteredArr);
