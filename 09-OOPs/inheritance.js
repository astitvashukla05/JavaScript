// ** Inheritance **

const Person = function (fName, yob) {
  (this.fName = fName), (this.yob = yob);
};
Person.prototype.calcAge = function () {
  return 2025 - this.yob;
};
const Student = function (fName, yob, course) {
  Person.call(this, fName, yob), (this.course = course);
};
// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.intro = function () {
  console.log(
    `Hello my name is ${this.fName} and i am pursuing ${this.course}`
  );
};
const s1 = new Student('mikey', '2004', 'CS');
s1.intro();
console.log(s1.calcAge());
