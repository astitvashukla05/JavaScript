const details = {
  name: 'Astitva',
  age: 21,
  prof: 'Student',
  getName: function () {
    return this.name;
  },
  getNameArrow: () => {
    return this.name;
  },
};
console.log(details.getName()); // returns name
console.log(details.getNameArrow()); // return undefined as arrow functions do not get their own this : Here this refers to the global object which do not have name property
