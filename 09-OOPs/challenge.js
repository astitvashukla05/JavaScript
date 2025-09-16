// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 10, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mer' going at 95 km/h
*/

// const Car = function (make, speed) {
//   (this.make = make), (this.speed = speed);
// };

// const c1 = new Car('BMW', 120);
// const c2 = new Car('Mer', 95);

// console.log(c1, c2);
// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   return this.speed;
// };
// Car.prototype.brake = function () {
//   this.speed = this.speed - 10;
//   return this.speed;
// };
// console.log(c1.accelerate());
// console.log(c1.accelerate());
// console.log(c1.brake());

// console.log(c2.accelerate());
// console.log(c2.accelerate());
// console.log(c2.brake());
// console.log(c2.brake());
// console.log(c1, c2);

// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h
*/

// class Car2 {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const c3 = new Car2('Ford', 120);

// console.log(c3.speedUS);
// console.log(c3.speed);
// console.log(c3);

// Coding Challenge #
// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car.
//    - This tests understanding of prototypal inheritance using constructor functions, key in classical JS OOP.
//    - The EV class extends Car and adds a 'charge' property.
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'.
//    - This checks ability to add instance methods and manage encapsulated state.
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%.
//    - The logging requirement encourages clear output and shows understanding of instance manipulation.
//    - Example log: 'Tesla going at 140 km/h, with a charge of 22%'.
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake', and 'chargeBattery (chargeTo = 90%)'.
//    - The note about "polymorphism" hints at method overriding (i.e., changing 'accelerate' in EV).
// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
// GOOD LUCK

const Car = function (name, speed) {
  (this.name = name), (this.speed = speed);
};

Car.prototype.acc = function () {
  return (this.speed = this.speed + 10);
};

const EV = function (name, speed, charge) {
  Car.call(this, name, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  return (this.charge = chargeTo);
};

EV.prototype.acc = function () {
  this.speed = this.speed + 10;
  this.charge = this.charge - 10;
  console.log(
    `your battery is down by ${this.charge} and speed is ${this.speed}`
  );
};
const ev1 = new EV('tesla', 120, 23);
console.log(ev1);
console.log(ev1.acc());
console.log(ev1.chargeBattery(90));
console.log(ev1);
