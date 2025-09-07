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

// *********** DESTRUCTURING OBJECTS *************
const { name, openingHours } = restaurant;
console.log(openingHours, name);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // nested destructuring

let a = 11;
let b = 12;
const obje = { a: 1, b: 2, c: 3 };
({ a, b, c } = obje);
console.log(a, b, c);
console.log(`******************************`);
const { thu, ...otherHours } = openingHours;
console.log(thu, otherHours);
