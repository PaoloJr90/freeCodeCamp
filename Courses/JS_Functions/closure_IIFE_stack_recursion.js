// Closure --> inner functions have access to the variables and parameters of the outer function even after the outer function has returned
function outerFunction(outerParam) {
  function innerFunction(innerParam) {
    // this is the closure
    return outerParam + innerParam;
  }
  return innerFunction;
}
const outerReturn = outerFunction(10); // the outer function is called with the outerParam argument; the inner function is returned; the value of outerParam is stored in the closure
// the closure is stored in the outerReturn variable and can be called with the innerParam argument
// even after the outerFunction has executed, the value persists in the closure and can be used by the innerFunction
console.log(outerReturn); // returns the inner function
console.log(outerReturn(20)); // 30; the inner function is called with the innerParam argument; the value of outerParam is still stored in the closure

// console.log(outerFunction(10)); // returns the inner function; the value of outerParam is stored in the closure
// console.log(outerFunction(10)(20)); // 30; the first set of parenthesis calls the outer function with the outerParam argument; the second set of parenthesis calls the inner function with the innerParam argument; the value of outerParam is still stored in the closure

// Callback functions --> functions that are passed as arguments to other functions
function foo(bar) {
  bar(); // bar() is a callback function
}
foo(function () {
  console.log("Hello World");
}); // Hello World; the function is passed as an argument to the foo function; the foo function calls the function passed as an argument

function named() {
  console.log("bar");
}
foo(named); // bar; named is the callback function; the foo function calls the named function

// HOF --> Higher Order Functions; functions that take other functions as arguments or return functions as their results
// not the same as callbacks; callbacks do not necessarily return functions
// HOF example 1
function getCapture(camera) {
  camera();
}
getCapture(function () {
  console.log("Canon");
}); // Canon; the function is passed as an argument to the getCapture function; the getCapture function calls the function passed as an argument

function returnFn() {
  return function () {
    console.log("returned function");
  };
}
const fn = returnFn(); // the returnFn function is called and returns the function; the returned function is stored in the fn variable
console.log(fn); // the returned function is printed
fn(); // returned function; the returned function is called
// map, filter, reduce are HOFs

// Pure functions --> functions that always return the same result if the same arguments are passed; same output for the same input

function sayGreeting(name) {
  return `Hello ${name}`;
}
console.log(sayGreeting("John")); // Hello John

// Impure functions --> functions that do not always return the same result if the same arguments are passed; different output for the same input

let greeting = "Hello";
function sayGreetingAgain(name) {
  return `${greeting} ${name}`;
}
console.log(sayGreetingAgain("John")); // Hello John
// the side-effect is that the greeting variable is changed

// IIFE --> Immediately Invoked Function Expression; a function that is executed immediately after it is created
// the function is wrapped in parenthesis and called with the parenthesis
(function () {
  console.log(`using IIFE`);
})(); // using IIFE; the function is called with the second set of parenthesis

console.log(function () {
  console.log(`test without second set of parenthesis`);
}); // the function is printed; the function is not called

// Function execution stack (call stack) --> data structure for the order in which functions are called; LIFO (Last In First Out)

// simple call stack example
function first() {
  console.log("first");
}
function second() {
  console.log("second");
}
first(); // first
second(); // second

// nested call stack example
function first() {
  console.log("first");
  second();
}
function second() {
  console.log("second");
  third();
}
function third() {
  console.log("third");
}
first(); // first; second; third

// Recursion --> a function that calls itself

function recurse() {
  recurse();
}
// recurse(); // RangeError: Maximum call stack size exceeded; the function calls itself infinitely

const bar = function buzz() {
  foo();
};
// foo(); // RangeError: Maximum call stack size exceeded; the function calls itself infinitely

// recursion without a base condition --> the function calls itself infinitely

function recurse1() {
  if (base_condition) {
    // do something
    return;
  }
  recurse1();
}
// recurse1(); // RangeError: Maximum call stack size exceeded; the function calls itself infinitely

function fetchWater(count) {
  if (count === 0) {
    console.log("All water fetched");

    return;
  }
  console.log("Fetching water...");
  fetchWater(count - 1);
}
fetchWater(5); // will fetch water 5 times
// could also use a for loop to fetch water 5 times; recursion may be more readable
