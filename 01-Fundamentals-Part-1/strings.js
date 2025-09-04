//*************       Strings In JS      ***************

const firstName = 'Astitva';
const lastName = 'Shukla';
const birthYear = 2005;

//String can be written using template literals  where we can use '' or " " without issue and can use variables using ${}
const myDetails = `I'm ${firstName} ${lastName} and my age is ${
  birthYear - 2025
}`;
console.log(myDetails);
