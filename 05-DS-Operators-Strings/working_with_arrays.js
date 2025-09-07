const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
// ***  Array Destructring *********

//breaking down array into smaller simpler parts
// basic
const arr = [1, 2, 3];
const num1 = arr[0];
const num2 = arr[1];
const num3 = arr[2];

const [a, b, c] = arr; // this line is same as the three lines above
console.log(a, b, c); // 1 2 3 DATA TYPE Number

const [w, x, y, z] = restaurant.categories;
console.log(w, x, y, z); // return the individual strings for array categories
let [first, , third] = restaurant.categories; // Skipping the 2nd element
console.log(first, third);

[first, third] = [third, first]; // swapping the variables
console.log(first, third);

const arr2 = [2, 3, [1, 2, 3], 4]; // we want to get elements 2,[1,2,3]
const [two, , array] = arr2;
console.log(two, array);

const [i, j, [q, r, s], t] = arr2;
console.log(i, j, q, r, s, t);

// ** SPREAD OPERATOR **

let arr3 = [1, 2, 3, 4];
let badArr = [10, 20, arr3[0], arr3[1], arr3[2], arr3[2 + 1]];
console.log(badArr); // 10,20,1,2,3,4

let goodArr = [10, 20, ...arr3];
console.log(goodArr); //10,20,1,2,3,4

console.log(...arr3); // 1,2,3,4

// Difference between spread and destructing is that spread does not make any new variables

// ***** REST operator *****
// used in clubbing elements into 1 unlike the spread operator

// Spread cuz used in the right side

const arr4 = [12, ...arr];

const [n1, n2, ...others] = [1, 2, 3, 4, 5];
console.log(n1, n2, others);

const [italiamn, , vegetarian, ...otherFoods] = [
  ...restaurant.categories,
  ...restaurant.mainMenu,
];
console.log(italiamn, vegetarian, otherFoods);

function summation(...numbers) {
  console.log(numbers);
}
summation(2, 3, 4, 5);
summation(1);
summation(1, 23);
summation(1, 2);
