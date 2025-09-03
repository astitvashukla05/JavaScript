// ******************* Variables *********************

// Smallest piece of data is a value
// It is always good to store value in a variable

let firstName = 'Astitva Shukla';
// We can access our data through containers (variables)
console.log(firstName);
let course = 'JS';

// JS follows camelCase standard (just a convention), not to start with CAPITAL
let firstPersonName = 'Astitva';

// Invalid Formats of Declaring variables
// let 3years = 12;

// No special chars allowed except '_' , '$'
// let firstName&lastName = "Astitva Shukla";

// No reserved keywords allowed
// let new = "my";
// let function = "func1"

// Always use Descriptive variables

// let job1 = 'student';
// let job2 = 'developer';

let myFirstJob = 'student';
let mySecondJob = 'developer';

// ******************* Variable Declaration *********************

// There are three ways let, const, var (let and const being modern and var being the older means of variable declaration)

// 1. let is used to declare variable that value can be changed later easily (mutating values)
let age = 50;
age = 20;

// 2. const is used for constant values that cannot be changed later .. We cannot declare empty const variables
const twentyOne = 21;
// twentyOne = 20; Error

// 3. var is an older method and not recommended for usage
// var and let seem to be similar but they are different in form of scopes
// let is block scoped and var is function scoped
var date = 2;
date = 3;
