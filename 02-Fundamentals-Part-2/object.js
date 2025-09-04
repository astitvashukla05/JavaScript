// *************** OBJECTS *******************

// Objects are used to store values in key-value pair format
let details = {
  name: 'astitva',
  profession: 'Student',
  age: 21,
  getSummary: function summary() {
    return `My name is ${this.name}, I am a ${this.profession} and my age is ${this.age}`;
  },
}; // we can access values by passing keys
// Objects are used for more structured data

// ** Dot and Bracket Notation **

// We can access the elements by the following operators
console.log(details.name); // after . we give the key of which we want a value
console.log(details['name']); // we need to give key in form of string

// Adding values

details.email = 'astitvashukla1605@gmail.com';
details['location'] = 'India';

// we can add functions to the object also
details.getGreetings = function greeting() {
  return 'Hello';
};
console.log(details);
console.log(details.getGreetings());
console.log(details.getSummary());

// ARRAYS ARE ALSO OBJECTS
