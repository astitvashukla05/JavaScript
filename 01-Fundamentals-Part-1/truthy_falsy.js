// ************** Thruthy and Falsy Values in JS *****************

// There are 6 falsy values in JS : 0 , '',null,undefined,false,NaN

console.log(Boolean(0)); //false
console.log(Boolean(1)); //true

let money = 0;

if (money) {
  console.log(`Your balance is ${money}`);
} else {
  console.log('Need to get a job');
}
// Empty object {} returns true
