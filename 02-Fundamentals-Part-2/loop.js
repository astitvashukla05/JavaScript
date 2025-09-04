// ********* ITERATIONS / LOOPS ************

// ****** FOR LOOP ********
// If we want to print hello 10 times we have to write 10 console.log() but loops make it easy

for (let i = 0; i < 10; i++) {
  console.log(`hello ${i} time`); // until the counter i is less than 10, this line will run
}

// LOOPS are popularly used for looping through array elements

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // prints all elements of the array
}

// Creating new array through loops
let brr = new Array();
for (let i = 1; i <= 10; i++) {
  brr.push(i);
}
console.log(brr);

// ** Continue & Break **

// these two statements are widely used in arrays during iterations

for (let i = 0; i < brr.length; i++) {
  if (brr[i] == 7) continue; // skips if condition is true; here every element is printed except 7
  console.log(brr[i]);
}

for (let i = 0; i < brr.length; i++) {
  if (brr[i] == 3) break; // break terminates the loop when condition is true
  console.log(brr[i]);
}
// iterating from the end
for (let i = brr.length - 1; i >= 0; i--) {
  console.log(brr[i]);
}

// Creating loops inside of loops

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(`Hello will be printed ${i} times`);
  }
}

// ****** WHILE LOOP *******

let i = 0; // counter

while (i <= 10) {
  console.log(i);
  i++; // updation
} // condition
