'use strict';

// ********* Default parameter ********
// const bookings = [];

// const createBookings = function (
//   flightNumber = 1,
//   passenger = 5,
//   price = 100 * passenger
// ) {
//   const booking = { flightNumber, passenger, price };

//   bookings.push(booking);
// };
// createBookings();
// createBookings(2, 10);
// createBookings(3, 100, 1000);
// createBookings(3, undefined, 1200);
// console.log(bookings);

// *** Bind with Event listeners **
// const airIndia = {
//   airline: 'airIndia',
//   iatacode: 'LH',
//   bookings: [],
//   book(fligtNumber, name) {
//     this.bookings.push({
//       name: name,
//       flight: `${(this.iatacode, fligtNumber)}`,
//     });
//     console.log(this);
//   },
// };
// airIndia.planes = 300;
// airIndia.buyPlane = function () {
//   this.planes++;
//   console.log(this, this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', airIndia.buyPlane.bind(airIndia));

// Partial application
// first arguement of bind is this keyword means what object u want to bind it with
const addTax = (rate, value) => console.log(value + value * rate);
addTax(0.1, 1000);

const taxVAT = addTax.bind(null, 0.23);
taxVAT(1000);
