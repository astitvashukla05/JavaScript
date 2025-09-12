'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jon',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];
const account1 = {
  owner: 'John',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
const updateUI = function (account) {
  calcSummary(account.movements, account.interestRate);
  calcBalance(account.movements);
  displayMovements(account);
  setDate();
};
const setDate = function () {
  const dateNow = new Date();
  const date = `${dateNow.getDate()}`.padStart(2.0);
  const month = `${dateNow.getMonth() + 1}`.padStart(2, 0);
  const year = dateNow.getFullYear();
  const hours = `${dateNow.getHours()}`.padStart(2, 0);
  const mins = `${dateNow.getMinutes()}`.padStart(2, 0);
  labelDate.textContent = `${date}/${month}/${year},${hours}:${mins}`;
};
// Display Movements Fn
const displayMovements = function (acc) {
  containerMovements.innerHTML = '';
  //  const movs = toSort
  //  ? acc.movements.slice().sort((a, b) => a - b)
  // : acc.movements;
  acc.movements.forEach((movement, index) => {
    const dateNow = new Date(acc.movementsDates[index]);
    const date = `${dateNow.getDate()}`.padStart(2.0);
    const month = `${dateNow.getMonth() + 1}`.padStart(2, 0);
    const year = dateNow.getFullYear();
    const displayDate = `${date}/${month}/${year}`;
    let type = movement > 0 ? 'deposit' : 'withdrawal';
    let html = ` 
  <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
     <div class="movements__date">${displayDate}</div>
         
          <div class="movements__value">${movement}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Create UserName Fn
const createUserName = function (accounts) {
  accounts.forEach(account => {
    let user = account.owner
      .toLowerCase()
      .split(' ')
      .map(e => e[0])
      .join('');
    account.userName = user;
  });
};
createUserName(accounts);
let currBalance;
// Calculate Balance Fn
const calcBalance = function (movement) {
  currBalance = movement.reduce((acc, e) => acc + e, 0);

  labelBalance.textContent = currBalance;
};

// Calculate the Summary Fn
const calcSummary = function (movements, rate) {
  let deposited = movements.filter(e => e > 0).reduce((acc, e) => acc + e, 0);
  let withdrew = movements.filter(e => e < 0).reduce((acc, e) => acc + e, 0);
  let interest = movements
    .filter(e => e > 0)
    .map(e => (e * rate) / 100)

    .reduce((acc, e) => acc + e, 0);
  labelSumIn.textContent = Math.floor(deposited);
  labelSumOut.textContent = Math.floor(-1 * withdrew);
  labelSumInterest.textContent = Math.floor(interest);
};

// User Login
let currentActive;
const verifyLogin = function (e) {
  e.preventDefault();
  let userName = inputLoginUsername.value;
  let pass = inputLoginPin.value;
  currentActive = accounts.find(acc => acc.userName === userName);
  if (currentActive?.pin === +pass) {
    inputLoginPin.value = '';
    inputLoginUsername.value = '';
    inputLoginPin.blur();
    labelWelcome.textContent = `Welcome ${currentActive.owner}`;
    containerApp.style.opacity = 1;
    updateUI(currentActive);
  } else {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Invalid Credentials';
  }
};
btnLogin.addEventListener('click', verifyLogin);

// Money Transfer Fn
const transferMoney = function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const sendTo = inputTransferTo.value;
  const reqAcc = accounts.find(ele => ele.userName === sendTo);

  if (
    amount <= +currBalance &&
    reqAcc &&
    amount > 0 &&
    reqAcc?.userName !== currentActive.userName
  ) {
    currentActive.movements.push(-1 * amount);
    reqAcc.movements.push(amount);
    currentActive.movementsDates.push(new Date().toISOString);
    reqAcc.movementsDates.push(new Date().toISOString);
    updateUI(currentActive);
  }
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
};
btnTransfer.addEventListener('click', transferMoney);

// Close Account Fn

const closeAccount = function (e) {
  console.log('indel');
  e.preventDefault();
  const user = inputCloseUsername.value;
  console.log(user);
  const pin = inputClosePin.value;
  console.log(pin);
  const idx = accounts.findIndex(e => e.userName === user);
  console.log(idx);
  if (
    idx !== -1 &&
    currentActive.userName === user &&
    currentActive.pin === +pin
  ) {
    accounts.splice(idx, 1);
    inputClosePin.value = '';
    inputCloseUsername.value = '';
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Login to get Started';
    currentActive = null;
  }
};
btnClose.addEventListener('click', closeAccount);

// Loan Fn
const grantLoan = function (e) {
  e.preventDefault();

  const amnt = +inputLoanAmount.value;
  const approve = currentActive.movements.some(e => e > amnt * 0.1);
  if (approve && amnt > 0) {
    currentActive.movements.push(amnt);
    currentActive.movementsDates.push(new Date().toISOString());
    updateUI(currentActive);
    inputLoanAmount.value = '';
  }
};
btnLoan.addEventListener('click', grantLoan);

// let sorted = false;
// btnSort.addEventListener('click', () => {
//   displayMovements(currentActive, !sorted);
//   sorted = !sorted;
// });
