// ** Differnce between synchronus and asynchronus nature and code in JS **

// Synchronus is the code that is executed line by line sequentially
//eg
let head = document.querySelector('.head');
head.style.color = 'blue';
alert('hello'); // now this will not finish until the user clicks the buttons and the code behind the line stops to executes
head.textContent = 'meow';

// in this first 5th line executes ,then 6th line and at last 7th line this is a synchronus code
// the curr line waits for its previous line to execute

// Asynchronus code is that executes after a task that runs in a bg finishes
// Asynchronus code is non-blocking

const p = document.querySelector('.p');
setTimeout(() => {
  p.textContent = 'yo';
}, 6000); // this is a asynchronus code
p.style.color = 'pink'; // it will not block the execution code the code will keep on running in the bg and after it finsihes the chnages will be made

//  AJAX stands for asynchronus javascript and XML
// Allows to comm web servers in asynchrnous way
// With ajax we can request data from web server dynamically

// API : Application Programming Interface
// It is a peice of software that can be used by another peice of software to talk to each other and share information and data
