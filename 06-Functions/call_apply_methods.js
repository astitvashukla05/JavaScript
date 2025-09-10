// const book = function (fligtNumber, name) {
//   this.bookings.push({
//     name: name,
//     flight: `${(this.iatacode, fligtNumber)}`,
//   });
//   console.log(this.bookings);
// };

const airIndia = {
  airline: 'airIndia',
  iatacode: 'LH',
  bookings: [],
  book(fligtNumber, name) {
    this.bookings.push({
      name: name,
      flight: `${(this.iatacode, fligtNumber)}`,
    });
    console.log(this);
  },
};
//airIndia.book('1234', 'Astitva');
//airIndia.book('1234567', 'Astitva Shukla');

const book = airIndia.book;
//console.log(book);
const airForce = {
  airline: 'Army',
  iatacode: 'Garuda',
  bookings: [],
};
//book('2720', 'MIG'); // now book is just a normal function variable and in normal funcs this is undefined
//book('45670', 'Sukoi'); does not work

// Now to use this keyword correctly we use three function methods they are :call ,apply ,bind
// *** Call Method **
//book.call(airForce, '2720', 'MIG');
//book.call(airIndia, '12345', 'astitva ');

// **** Apply Method ** Apply Method does exactly the same but instead of giving set of arguements it takes array of arguements
//book.apply(airForce, [20, 'monu']);
//book.apply(airIndia, [20, 'monu']);

// ** Bind **
// Bind method returns a function that always then assign the this keyword to that function onl

const bookingsAF = book.bind(airForce);
bookingsAF(123, 'Astitva');
const bookingAI = book.bind(airIndia);
bookingAI('23450', 'Shukla');

// wit
