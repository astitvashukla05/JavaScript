// ************* Switch Statements **************

// It is just other method of writing if else statements
// Basically it takes a value and checks if there exists any case equal to that value .
// if nothing matches then it executes default statement
// it is mandatory to use break after a case else every case below it will execute and introduce bugs to our code
const weekday = 90;

switch (weekday) {
  case 1:
    console.log('It is monday');
    break;
  case 2:
    console.log('It is tuesday');
    break;
  case 3:
    console.log('It is wednesday');
    break;
  case 4:
    console.log('It is thrusday');
    break;
  case 5:
    console.log('It is friday');
    break;
  case 6:
    console.log('It is saturday');
    break;
  case 7:
    console.log('It is sunday');
    break;
  default:
    console.log('INVALID WEEKDAY');
}

// Another way of writing conditionals and it is one of the best method : Ternary Operator

let age = 17;
let isEligible = age > 18 ? 'Eligible' : 'Not Eligible';
console.log(isEligible); // NOT ELIGIBLE
// it is like a advance form of if else statement if the condn is truthy it will return the statement after ? else it will return the statement after :
// It helps to decrease the line of code of if else
