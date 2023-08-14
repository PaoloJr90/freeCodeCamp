[Big O Notation](https://www.youtube.com/watch?v=Mo4vesaut8g)

## Big O Notation

Big O Noation is used to analyze the efficiency of an algorithm as its input approaches infinity. \
As the size of the input increases, the number of operations required to complete the algorithm increases at a certain rate. \
Big O has two components:

- time complexity
- space complexity

_Linear Function - O(n)_

```javascript
function linearFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(1000 * 100000); // this takes constant time
  }
}
// if the array is very large, the number of operations will increase at a linear rate
const arr = [1, 2, 3, 4, 5, 6, 7];
linearFunc(arr);
```

A constant is any step that doesn't scale with the inputs to the function.

_Constant Function - O(1)_

```javascript
function constant(arr) {
  let result = 100 * 1000; // this will always take the same amount of time
  return result;
}
```

Big O notation has a growth hierarchy:

- O(1) - Constant - best
- O(log n) - Logarithmic
- O(n) - Linear
- O(n log n) - Linearithmic
- O(n<sup>2</sup>) - Quadratic
- O(n<sup>3</sup>) - Cubic
- O(2<sup>n</sup>) - Exponential
- O(n!) - Factorial - worst

we always look at the worst case scenario when analyzing the efficiency of an algorithm.

Example:

```javascript
function linearFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    console.log(1000 * 100000); // O(1)
    let something = (2000000 * 2000000) / 2; // O(1)
    console.log(something); // O(1)
  }
}
// O(n) + O(1) + O(1) + O(1) = O(n + 3) = O(n)
// the constants get cancelled out as they are non-dominant items
// as we reach infinity, the constants become insignificant
```

_O(n<sup>2)</sup> - Quadratic_

```javascript
function square(n) {
  for (let i = 0; i < n; i++) {
    // O(n)
    for (let j = 0; j < n; j++) {
      // O(n)
      console.log(i, j); // O(1)
    }
  }
}
// i are the rows and j are the columns of the matrix
// O(n) * O(n) * O(1) = O(n^2)
// as n approaches infinity, the number of operations increases at a quadratic rate
// and the constants become insignificant
// O(n^2) is the worst case scenario
```

_O(n<sup>3)</sup> - Cubic_

```javascript
function cube(n) {
  for (let i = 0; i < n; i++) {
    // O(n)
    for (let j = 0; j < n; j++) {
      // O(n)
      for (let k = 0; k < n; k++) {
        // O(n)
        console.log(i, j, k); // O(1)
      }
    }
  }
}
// i are the rows, j are the columns, k is the height (x, y and z axes) of the 3D matrix
// O(n) * O(n) * O(n) * O(1) = O(n^3)
// as n approaches infinity, the number of operations increases at a cubic rate
// and the constants become insignificant
// O(n^3) is the worst case scenario
```

_O(log n) - Logarithmic_ \

- a logarithmic function is the inverse of an exponential function
- a logarithm is the power to which a number must be raised in order to get some other number
- log<sub>2</sub>8 = 3
- 2<sup>3</sup> = 8

```javascript
// recursive function
function logFunc(n) {
  if (n === 0) {
    // base case
    return "Done";
  }
  n = Math.floor(n / 2);
  return logFunc(n);
}
// if n = 8, the function will run 3 times
// the function will go 3 levels deep until n = 0
// as the input increases, the number of operations increases at a logarithmic rate
// O(log n) is the best case scenario

// iterative/non-recursive function
function logFunc(n) {
  while (n > 1) {
    n = Math.floor(n / 2);
  }
}
// if n = 8, the function will run 3 times
// as the input increases, the number of operations increases at a logarithmic rate
// O(log n) is the best case scenario
```

_Binary Search - O(log n)_

- binary search is a search algorithm that finds the position of a target value within a sorted array

```javascript
// start by finding the middle index of the array
// if the target value is greater than the middle value, search the right half of the array
// if the target value is less than the middle value, search the left half of the array
// repeat until the target value is found
let arr = [];
let start = 0;
let target = 999;

// create an array of 1024 numbers
for (let i = 1; i <= 1024; i++) {
  arr.push(i);
}
let end = arr.length - 1;

function binarySearch(arr, start, end, target) {
  console.log(arr.slice(start, end)); // to show the array being searched
  if (start > end) return false; // base case - target value not found
  let midIndex = Math.floor((start + end) / 2);
  if (arr[midIndex] === target) return true;
  if (arr[midIndex] > target) {
    return binarySearch(arr, start, midIndex - 1, target);
  } else {
    return binarySearch(arr, midIndex + 1, end, target);
  }
}

binarySearch(arr, start, end, target);
```

_O(n log n) - Linearithmic_

- a linearithmic function is a function that is the product of a linear and a logarithmic function

```javascript
function nLogNfunc(n) {
  let y = n; // used to store the original value of n for the inner loop
  while (n > 1) {
    // O(log n) - runs half the number of times as n (inverse of exponential)
    n = Math.floor(n / 2);
    for (let i = 0; i < y; i++) {
      // O(n) - runs n times
      console.log(i);
    }
  }
}
// O(log n) * O(n) = O(n log n)
```

_Merge Sort - O(n log n)_

```javascript
function mergeSort(arr) {
  // O(n log n)
  if (arr.length < 2) {
    return arr;
  }
  // divide the array into two halves - left and right - divide and conquer
  const middleIndex = Math.floor(arr.length / 2); // use Math.floor to round down to the nearest integer
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex, arr.length); // arr.length used since the end index is not included in the slice method.
  return merge(mergeSort(leftArr), mergeSort(rightArr)); // O(log n)
}

// this function helps merge ordered arrays
function merge(leftArr, rightArr) {
  // O(n)
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex += 1;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }
  return resultArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}
```

_O(2<sup>n</sup>) - Exponential_

- Fibonacci sequence
- a sequence of numbers where each number is the sum of the two preceding numbers
- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
- the number of operations increases exponentially as the input increases

```javascript
// recursive function
function fib(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
// O(2^n) is the worst case scenario
// as n approaches infinity, the number of operations increases at an exponential rate
// and the constants become insignificant
```

_O(n!) - Factorial_

- the factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n
- 5! = 5 x 4 x 3 x 2 x 1 = 120
- the number of operations increases at a factorial rate as the input increases

```javascript
// recursive function
function f(n) {
  if (n === 0) {
    console.log("***");
    return;
  }
  for (let i = 0; i < n; i++) {
    f(n - 1);
  }
}
// O(n!) - the function will run n! times
// as n approaches infinity, the number of operations increases at a factorial rate
// and the constants become insignificant
// this is the worst case scenario
// this function will run 6 times if n = 3
```

## Space Complexity

- space complexity is the amount of memory used by the algorithm to run and produce the result

```javascript
function countDown(n) {
  if (n === 0) {
    return;
  }
  return countDown(n - 1);
}
// the space complexity of this function is O(n)
// the function will run n times and each time it runs, it will store the value of n in memory
// as n approaches infinity, the space complexity increases at a linear rate
```

---

_Common Mistakes_

```javascript
function twoLoops(a) {
  for (let i = 0; i < a; i++) { // O(n)
    // do something
  }
  for (let j = 0; j < a; j++) { // O(n)
    // do something
  }
}
// O(n) + O(n) = O(2n) = O(n)
// the constants are insignificant
// not the same as:
function twoLoops(a) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < a; j++) {
      // do something
    }
}
// O(n) * O(n) = O(n^2)
```

```javascript
function twoInputsAdd(a, b) {
  for (let i = 0; i < a; i++) {
    // O(a)
    // do something
  }
  for (let j = 0; j < b; j++) {
    // O(b)
    // do something
  }
}
// O(a) + O(b) = O(a + b)
// we have two inputs, a and b
// we do not know the size of a and b
// similarly:
function twoInputsMult(a, b) {
  for (let i = 0; i < a; i++) {
    // O(a)
    for (let j = 0; j < b; j++) {
      // O(b)
      // do something
    }
  }
}
// O(a) * O(b) = O(a * b)
// we have two inputs, a and b
// we do not know the size of a and b
```
