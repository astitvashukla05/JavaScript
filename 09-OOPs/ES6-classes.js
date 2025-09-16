// **** ES6 Classes ***
// BTS they are sugar coated implementation of prototypal inheritances

// expression
// const PeronCl=class{}

// declaration
class PersonCl {
  constructor(firstName, yob) {
    // method of the class
    this.firstName = firstName;
    this.year = yob;
  }
  calcAge() {
    // this will be in prototype of the objects
    console.log(2025 - this.year);
  }
  greet() {
    console.log(`Hello ${this.firstName}, welcome to learning OOP`);
  }
  static hey() {
    console.log('hello');
  }
}

const jess = new PersonCl('jessi', 2020);
console.log(jess);
jess.calcAge();
jess.greet();
PersonCl.hey();

console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');

// *** Getter And Setter ***
const account = {
  name: 'astitva',
  movements: [10, 20, 30, 40, 50, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(move) {
    this.movements.push(move);
  },
};
console.log(account.latest);
(account.latest = 50), console.log(account);

// ** Static methods **
// Methods not available to instances only available to the classes or constructor functions

const Person = function (name, rollNo) {
  (this.name = name), (this.rollNo = rollNo);
};
Person.hey = function () {
  console.log('Hello');
};
const details = new Person('astitva', 20);
Person.hey();
