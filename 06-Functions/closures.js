// A closure makes all the function variables that exsists at the function birthpalce
const secureBooking = function () {
  let passengerBooking = 0;
  return function () {
    passengerBooking++;
    console.log(passengerBooking);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
// a function has access to the
// variable environement of the execution context it was created in
// the closure is then exactly that
// variable environment that is attached to that function

// Closure is the variable environment of the
// execution context in which th efunction was created in after that execution context is gone

// A closure give access to all the variables of its
// parent function even after parent function is returned. The function keeps a reference of its outer scope

// ****** Closures Examples ********
// EXE 1
let f;
const g = function () {
  let a = 23;
  f = function () {
    console.log('Inside function f');
    console.log(a * 2);
  };
};
g();
f();
// This is an example of a closure where a is preserved
// and accessed by function f even though the execution context of the g function has ended

// EXE 2
function boarding(passengers, time) {
  const group = passengers / 3;
  setTimeout(() => {
    console.log(
      `the wait is over we are now boarding ${passengers} in groups of ${group}`
    );
  }, 1000 * time);
  console.log(`Passengers will be boarding in ${time} mins`);
}
boarding(60, 3);
