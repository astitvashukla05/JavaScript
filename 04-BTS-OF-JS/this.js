// ********* THIS ************

// this is a special keyword created for every execution context (every function ) . takes the values of the "owner" of the function in which it is called
// values of this is not static it depends on how the function is called and its values is assigned when the function is actually called

// Uses and values of this
// METHODS

const details = {
  name: 'Astitva',
  age: 21,
  prof: 'Student',
  getSummary: function () {
    return `${this.name} is ${this.age} old and is a ${details.prof}`; // here this refers to the details that called the getSummary function
  },
};
//console.log(details.getSummary());

// Simple functions
//function add() {
//console.log(this);
//return this.num + this.num2; //here this will be undefined and here throws error
//} //only in strict mode else it will point to global object i.e window
// Event Listener
// In this "this" keyword points to the object it is attached to
