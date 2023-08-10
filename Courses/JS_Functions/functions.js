// function declaration/definition
function printMe() {
  console.log("Hello World");
}
printMe; // function printMe() { console.log("Hello World"); }
// this will not call the function, it will just return the function definition

// function call/invocation
printMe(); // Hello World

// function with parameters; anything passed inside the parenthesis of a function declaration/definition is a parameter
function printThis(param) {
  console.log(param);
}
// function call with arguments; anything passed inside the parenthesis of a function call/invocation is an argument
printThis("Buongiorno"); // Buongiorno

// function expressions
const printSomething = function () {
  console.log("Something");
};
printSomething(); // Something

const printSomethingWithParam = function (a, b) {
  console.log(a, b);
};
printSomethingWithParam(10, 20); // Hello World

// returned values from functions
function sum(a, b) {
  return a + b;
}
sum(2, 3); // 5

// default parameters
function calc(a, b) {
  return 2 * (a + b);
}
calc(3, 3); // 12
calc(3); // NaN; if the second argument is not passed, the returned value will be NaN (a + undefined = NaN)

function calcWithDefault(a, b = 0) {
  return 2 * (a + b);
}
calcWithDefault(3); // 6; if the second argument is not passed, the default value will be used (a + 0 = a)

// the rest parameter; it is used to pass an indefinite number of arguments to a function
// the rest parameter argument returns an array
function collectArgs(x, ...args) {
  console.log(x);
  console.log(...args); // the spread operator is used to print the array elements
  console.log(args); // the array is printed as an array
}
collectArgs(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

// arrow function syntax
const add = (a, b) => {
  return a + b;
};
add(2, 3); // 5

// arrow function syntax with implicit return; if the function body is a single line, the return statement can be omitted and remove the curly braces
const addImplicit = (a, b) => a + b;
addImplicit(2, 3); // 5

// could also remove the parenthesis if there is only one parameter
const addImplicitOneParam = (a) => a + 10;
addImplicitOneParam(2); // 12

// nesting functions; closure --> inner functions have access to the variables of the outer
function outer() {
  console.log("outer");
  function inner() {
    console.log("inner");
  }
  inner();
}
outer(); // outer inner

// Scope
// Variables (var, let & const) defined inside a function are not accessible (visible) from outside the function.
// a function can access all the variables and functions defined inside the scope in which it is defined

function doSomething() {
  let x = 10;
  const y = 20;
  var z = 30;
  console.log(x, y, z);
}
doSomething(); // 10 20 30
console.log(x, y, z); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
console.log(z); // ReferenceError: z is not defined

var c = 10;
let d = 20;
const e = 30;
function doSomethingElse() {
  console.log(c, d, e);
}
doSomethingElse(); // 10 20 30
