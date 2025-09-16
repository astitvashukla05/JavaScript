const personProto = {
  calcAge() {
    console.log(2025 - this.year);
  },
  init(name, yob) {
    this.name = name;
    this.year = yob;
  },
};
const steven = Object.create(personProto);
console.log(steven);
steven.name = 'stev';
steven.year = 2004;
console.log(steven);
steven.calcAge();

const sarah = Object.create(personProto);
sarah.init('sas', 1950);
console.log(sarah);
sarah.calcAge();
