// using console.table will tabularize the array/object's index/key-values
const myArr = ["PJ", "VR", 10, true];
const myObj = {
  name: "Paolo",
  title: "freeCodeCamp student",
  goal: "to be a Computer Scientist",
};

console.log(myArr);
console.table(myArr);
console.log(myArr);
console.table(myObj);

// use template strings/string interpolation for concatenation
const name1 = "PJ Angeloni";
const age1 = 25;

const plusConcat =
  "Hi there 👋🏽 \nMy name is " + name1 + " and I am " + age1 + " years old.";

const templateLiteralConcat = `Hi there 👋🏽 \nMy name is, ${name1} and I am ${age1} years old.`;

// convert strings to numbers with unary plus and number constructor
const myNum = "5";

convertNum1 = +myNum; // unary plus
convertNum2 = Number(myNum); // number constructor

console.log(convertNum1, typeof convertNum1); // 5 'number'
console.log(convertNum2, typeof convertNum2); // 5 'number'

// declare multiple variables with same keyword
let x, y, z;

x = 1;
y = 2;
z = 3;
console.log(x, y, z); // 1, 2, 3
// declare other variables after the first one without the keyword.
const a = "Hello",
  b = "How are you today?",
  c = "Are you coding today?";

console.log(x, y, z);
console.log(a, b, c);

// use console.group() with multiple console.log()s to group related items
console.group("Bio:");

console.log("My name is Kolade");
console.warn("I don't like to be late");
console.error("You came late");

console.groupEnd();

// style console output with `%c` specifier (used for browser console output)
const styles = `padding: 15px;
                background-color: #2ecc71;
                color: black`;

console.log("%c Hello, Everyone!", styles);
// or directly in the method:
console.log(
  "%c Hello, Everyone!",
  "padding: 15px; background-color: #2ecc71; color: black"
);

// generating a random number
Math.floor(Math.random() * 100 + 1);
// Math.random() generates a random floating point number between [0 - 1)
// Math.random() * 100 --> the random number is now between 0 and 99
// Math.floor(Math.random() * 100) --> rounds the floating-point number to the nearest integer between 0 and 99
// Math.floor(Math.random() * 100 + 1) --> add 1 to the result and shift the range to 1 - 100

// Methods of the Math Object
let f;

// Get the square root of a number
f = Math.sqrt(9);

// convert a number to absolute value
f = Math.abs(-5); // 5

// Round up a number to the nearest whole number
f = Math.round(4.6);

// Round up a number
f = Math.ceil(4.2); // 5

// Round down a number
f = Math.floor(4.9); // 4

// Exponent of a number
f = Math.pow(2, 3); // 8

// Get the minimum number
f = Math.min(4, 5, 3); // 3

// Get the maximum number
f = Math.max(4, 5, 3); // 5

// Get a random number/decimal between 0 and 1
f = Math.random();

// Get a random number between 1 and 200
f = Math.floor(Math.random() * 200 + 1); // any number between and 200

console.log(f);

// capitalize first letter of a word
const str = "paolo";
const capitalizeStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalizeStr(str));
console.log(capitalizeStr("junior"));

// destructure arrays with default values to avoid getting `undefined`
// for arrays:
// Destructuring without default values
const fruits = ["Apple", "Banana"];
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit); // Apple
console.log(secondFruit); // Banana
console.log(thirdFruit); // undefined

// Destructuring with default values
const [fruit1, fruit2, fruit3 = "Orange"] = fruits;

console.log(fruit1); // Apple
console.log(fruit2); // Banana
console.log(fruit3); // Orange

// for objects:
// Without default values
const person = { name: "John Doe", age: 30 };
const { name, age, occupation } = person;
console.log(name); // John Doe
console.log(age); // 30
console.log(occupation); // undefined

// With default values
const { firstName = "John", lastName = "Doe", gender = "Male" } = person;
console.log(firstName); // John
console.log(lastName); // Doe
console.log(gender); // Male
