// *************** Logical Operators *****************
// Basic Logical Operators are : ||, && ,!

// && aka and  operators only return true if it has a truthy value at both the ends
if (7 && 1) console.log('This is expectable'); // true

if ((7 && 0) === 0) console.log('this is not expectable'); // false

// || aka or operators return true  if atleast one end contains truthy value
if (7 || 0) console.log('Will work'); //returns true
if ((0 || 0) === 0) console.log('this will not work'); //returns false

// the ! aka not operator negates the value that is being used means it give false for truth like for 1 it returns 0

if (!(0 || 0)) console.log('this is the magic of ! operator'); // Initially false but after ! it gives true
