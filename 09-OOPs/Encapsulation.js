// ** Data encapsulation and Privacy **
/*
  1. Public feilds
  2. Public methods
  3. Private feilds
  4. Private methods
 */
class Account {
  // public feilds
  locale = navigator.language;
  bank = 'bankist';
  // private feilds
  #movements = [];
  #pin;
  constructor(name, age, pin) {
    (this.name = name), (this.age = age), (this.#pin = pin);
    //(this.movements = []);
  }
  // public api keys
  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.#movements.push(-val);
  }
  #reqLoan() {
    // private method
    return true;
  }
  approveLoan() {
    if (this.#reqLoan()) {
      this.loan = true;
    } else this.loan = false;
    return this.loan;
  }
}
const a1 = new Account('astitva', 20, 1111);
a1.deposit(120);
a1.withdraw(60);

console.log(a1);
console.log(a1.approveLoan());
console.log(a1.pin); // this is a privacy breach and that s why we need encapsulation and privacy of data
//console.log(a1.reqLoan()); // this is not needed and this is where we need encapsualtion
//console.log(a1.#movements);
