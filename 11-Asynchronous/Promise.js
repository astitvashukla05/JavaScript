// XML Format of sending req and requests lead to callback help if one request depends on the data recieved by the prev req using nesting
// To solve this problem we use fetch and Promises
const res1 = fetch('https://restcountries.com/v3.1/name/india'); // correct endpoint
const res2 = fetch('https://restcountries.com/v2/name/india');
// console.log(res1, res2);
// these reutrn promises: They are like placeholders that are used for future result of asynchronus operations
// Promising gets rid of nesting as it can be chianed

//consume prmomise

const res3 = function () {
  fetch('https://restcountries.com/v3.1/name/meow')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch((err) => console.log(err.message));
};
res3();
