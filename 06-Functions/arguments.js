// JS only has pass by value not pass by refernce

const person = {
  name: 'Astitva',
  passport: 23456563312,
};
let flightNumber = 1234;
const verify = function (passenger, flightNum) {
  flightNum = flightNum + 234567;
  passenger.name = 'Mr' + passenger.name;
  if (passenger.passport === 23456563312) console.log('checked In');
  else console.log('wrong passs');
};
verify(person, flightNumber);
console.log(person, flightNumber); // here a value is passed that is in the memory for person object and a copy of value is passed for flight number... any change in person objext is permanent but not for same flight

// same as doing
// const flight=flightNumber
// const passenger=person

const passPortChange = function (passenger) {
  passenger.passport = 123456; // changes the real passport of the passenger
};
passPortChange(person);
verify(person, flightNumber);
