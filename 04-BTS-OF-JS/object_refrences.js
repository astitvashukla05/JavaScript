//****************** Shallow vs Deep copy *****************

/*
Shallow Copy 🪞
- Copies top-level values only.
- Nested objects/arrays share the same reference.
- Change in copy affects original (for nested).

Deep Copy 🧬
- Creates a full independent clone.
- Nested objects/arrays are also copied separately.
- Change in copy does NOT affect original.

Analogy:
Shallow = photocopy with shared sticky notes.
Deep    = rewrite everything including sticky notes.
*/

// Original object
const details = {
  name: 'Astitva',
  age: 21,
  prof: 'Student',
  getSummary: function () {
    return `${this.name} is ${this.age} old and is a ${details.prof}`;
  },
  family: ['M', 'F', 'C'],
};

// ---------------- SHALLOW COPY ----------------
// const new_details = details; // same reference, changes affect both

// ---------------- DEEP COPY (for array) ----------------
const updated_details = {
  ...details, // shallow copy
  family: [...details.family], // deep copy of 'family' array
};

updated_details.name = 'Meow';
updated_details.family.push('Bro');

console.log(details); // original unchanged
console.log(updated_details); // independent copy
