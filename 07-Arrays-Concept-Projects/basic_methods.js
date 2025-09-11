// // ******** SLICE *******
// // returns an subsequence of elements based on indexes
// // Slice do not mutate the array the elements returns the same

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.slice(0, 6)); // arguments are starting index and the ending-1 index elements
// console.log(arr.slice(2, 6));
// console.log(arr.slice(-1)); // gives last element
// console.log(arr.slice());
// console.log(arr);
// // ********* SPLICE **********
// // the first arguement give the starting index and the 2nd index is delete count denotes how many elements you want to del after the starting index
// console.log(arr.splice(4, 6));
// console.log(arr.splice(1, 2));
// console.log(arr.splice(-1));
// console.log(arr.splice());
// console.log(arr);

// // ********* REVERSE *********
// // Reverses the array
// // also mutate the original array
// const arr2 = [1, 2, 3, 4, 5, 6];
// console.log(arr2.reverse());

// // ******** CONCAT ********
// // join 2 arrays
// // do not mutate any array
// let arr3 = ['a', 'b', 'c', 'd'];
// let arr4 = ['e', 'f', 'g', 'h'];
// let arr5 = arr3.concat(arr4);
// console.log(arr5);
// console.log(arr3);
// console.log(arr4);

// // ******** JOIN ********
// console.log(arr5.join('""'));

// // ******* AT **********
// console.log(arr.at(2)); // returns the 2nd index element
// //getting the last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// // ******FOR EACH ********
// const arr6 = [100, -200, 50, -50, 10, -10, 50, -200];
// arr6.forEach(function (element, index) {
//   console.log('on element  ' + index + 1);
//   if (element > 0) console.log(`you deposited ${element}`);
//   else console.log(`you withdrew ${-1 * element}`);
// });

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth()); // 0 based month 10 means month 11
//console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.toISOString());
console.log(date.getTime());
console.log(Date.now());
