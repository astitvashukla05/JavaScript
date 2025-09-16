'use strict';

// *** OOP implementation in JS ***

/*
 Every object that is created using a class (in this case through constructor func) has a property called 
 protoype. The prototype belongs to the object not the class which the object is made of.
 Prototype object contains methods in it that can be accessed and used by objects 
 Object are linked to prototype object
*/

// ** Implementation through Constructor function **
/*
 Technique used to create objects through function
 Diff btw a regular function and a constructor func is the "new" keyword
 */

const Person = function (name, rollNo) {
  (this.name = name), (this.rollNo = rollNo);
  // bad practice never assign the methods inside the constructor func this will make a copy whenever
  // a new object is created
  //   const calcAge = function (age) {
  //     console.log(2025 - age);
  //   };
};
const details = new Person('astitva', 20);
console.log(details);

// Behind the scenes working of this constructor func and new keyword.
/*
 when function is called with new keyword
 1. a new empty object is created {}
 2. function is called with "this keyword"={}
 3. {} obj is linked to the prototype
 4. function automatically return the object with values in defined in the func 
*/

// To created methods for a class or constructor function we use prototype
Person.prototype.calcAge = function (yob) {
  console.log(2025 - yob);
};
// now we can use a method called calcAge() on our created object this will be available for every object
// created through this constructor function
details.calcAge(2000);
// we can also define properties common to al objects
Person.prototype.kind = 'human';
const details2 = new Person('as', 21);
console.log(details2);
console.log(details.kind === details2.kind);
