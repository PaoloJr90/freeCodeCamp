// using the spread operator to copy and merge arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]

// merge two or more arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// for objects
const originalObj = { name: "John", age: 30 };
const clonedObj = { ...originalObj };

console.log(clonedObj); // { name: 'John', age: 30 }

// passing multiple arguments in functions
function addNumbers(a, b, c) {
  return a + b + c;
}

const numbers = [10, 12, 8];
const sum = addNumbers(...numbers);

console.log(sum); // 30

// arrow syntax (ES6) for shorter functions
// Traditional Function Expression
function add1(a, b) {
  return a + b;
}

// Arrow Function
const add2 = (a, b) => a + b;

console.log(add1(1, 2)); // 3
console.log(add2(5, 8)); // 13

// Using Traditional Function Expression
const numbers1 = [3, 4];
const numbers2 = [2, 8];

const squared1 = numbers1.map(function (num) {
  return num * num;
});

// Using Arrow Function
const squared2 = numbers2.map((num) => num * num);

console.log(squared1); // [ 9, 16 ]
console.log(squared2); // [ 4, 64 ]

// use destructuring to extract properties from objects
const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
};

// Traditional way
const name2 = person.name;
const age2 = person.age;
const gender2 = person.gender;

console.log(name2, age2, gender2); // John Doe 30 male

// with destructuring
const { name, age, gender } = person;

console.log(name, age, gender);
// John Doe 30 male

// use startsWith() and endsWith() string methods to get start and end of a string
// they both return boolean values
const message = "Hello world";

console.log(message.startsWith("H")); // true
console.log(message.startsWith("h")); // false
console.log(message.endsWith("d")); // true
console.log(message.endsWith("D")); // false

const files = [
  "text.txt",
  "document.txt",
  "image.jpg",
  "script.js",
  "docs.txt",
];

// Get .txt files
const textFiles = files.filter((file) => file.endsWith(".txt"));
console.log(textFiles); // ["text.txt", "document.txt", "docs.txt"];

// startsWith() and endsWith() support optional start and end positions to limit the range of the string for the check
const text = "Welcome to freeCodeCamp";

console.log(text.startsWith("W", 0)); // true;
console.log(text.startsWith("freeCodeCamp", 11)); // true
console.log(text.endsWith("f", 11)); // false

// use trim(), trimStart() and trimEnd() to handle white-spaces
const greet = "   Hello world!   ";
console.log(greet.trim()); // Hello world!

const greet2 = "   Hello world!   ";
console.log(greet2.trimStart()); // Output: 'Hello, world!   '

const text1 = "   Hello world!   ";
console.log(text1.trimEnd()); // Output: '   Hello world!'

const input = "   ";
if (input.trim() === "") {
  console.log("The input is empty but has whitespace characters.");
} else {
  console.log("The input contains non-whitespace characters.");
}
// Output: The input is empty but has whitespace characters.

// use replace() with toUpperCase() and toLowerCase() to convert between cases
function toTitleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}

console.log(toTitleCase("welcome to twitter (now x)!")); // Welcome To Twitter (now X)!
function toSnakeCase(str) {
  return str.toLowerCase().replace(/\s+/g, "_");
}

console.log(toSnakeCase("Convert this to snake case")); // convert_this_to_snake_case

// without replace() and RegEx
function toSentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(toSentenceCase("hELLo TwEePs! HOW ARE YOU TODAY?")); // Hello tweeps! how are you today?
