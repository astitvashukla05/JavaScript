// ********************* Condition based logics (if else ternary) ***********************

const firstPersonAge = 16;
const secondPersonAge = 19;
let isEligible = false;
if (firstPersonAge > 18) {
  isEligible = true;
}
if (isEligible === true) {
  console.log(`first person is eligible`);
} else {
  console.log(`first person is not eligible`);
}

if (secondPersonAge > 18) {
  isEligible = true;
}
if (isEligible === true) {
  console.log(`second person is eligible`);
} else {
  console.log(`second person is not eligible`);
}

// Use of Comparision Operator if else if else blocks type conversions

// Types of Comparision operators : ==,===,!==,!=
// == is used to check the values and return boolean type
// the != operator checks if the value at both sides are not equal then returns true
// the !== does the same work as != but is a strict format and also checks the data type of the values
// similarly === works same as == but checks the data type

// prompt is used to take input

let faveNumber = prompt('Type you fav number'); // by default the value stored will be of string type we need to type convert it
// Number(prompt("Type your fav number"))

// first check if then else if lastly returns else if everything else is false
if (faveNumber == 7) console.log('You are right 7 is good ');
// as this only checks the value here '7' == 7 will give true
else if (faveNumber == 9) console.log('yes 9 is also good');
else console.log('Neh this is not what i was expecting');

// If we want to strictly check the values as using == will give us bugs in higher level of codes we use ===
// if we type convert favNumber to Number then it checks for 7===7 else it will check for '7'===7 and return false
