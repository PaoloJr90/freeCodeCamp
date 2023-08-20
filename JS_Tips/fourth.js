// clone objects with spread operator, Object.assign() and JSON.parse()
const originalObject = {
  name: "Kolade",
  luckyNum: 10,
  isFootballFan: true,
  club: "Chelsea",
};

// clone with spread operator
const clonedObject1 = { ...originalObject };

// clone with Object.assign()
const clonedObject2 = Object.assign({}, originalObject);

// deep cloning with JSON.stringify() and JSON.parse()
const clonedObject3 = JSON.parse(JSON.stringify(originalObject));
console.table(clonedObject1);
console.table(clonedObject2);
console.table(clonedObject3);

// remove duplicates from an Array with Set and Map
// they both do not accept duplicate values
// create unique arrays with Set()
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // [1, 2, 3, 4, 5]

// create unique arrays with Map()
const fruitsWithDuplicates2 = [
  "Mango",
  "Cashew",
  "Barley",
  "Mango",
  "Barley",
  "Berry",
  "Cashew",
];
const uniqueFruitsWithDuplicates2 = [
  ...new Map(fruitsWithDuplicates2.map((item) => [item, true])).keys(),
];

console.log(uniqueFruitsWithDuplicates2);
// [ 'Mango', 'Cashew', 'Barley', 'Berry' ]

// mat through and Array and flatten it with the flatMap() method
// used on multi-dimensional arrays

// using .flat() and .map()
const numbers = [1, 2, 3, 4, 5];

const doubledAndSquared = numbers.map((num) => [num * 2, num * num]);
const flattenedArr = doubledAndSquared.flat();

console.log(doubledAndSquared); // [ [ 2, 1 ], [ 4, 4 ], [ 6, 9 ], [ 8, 16 ], [ 10, 25 ] ]
console.log(flattenedArr); //  [2, 1, 4, 4, 6, 9, 8, 16, 10, 25]

// using flatMap()
// combine map and flat
const combinedMapAndFlat = numbers.flatMap((num) => [num * 2, num * num]);

console.log(combinedMapAndFlat); // Output: [2, 1, 4, 4, 6, 9, 8, 16, 10, 25];

// use padStart() and padEnd() to pad a string with a character
const originalString = "Hello";
const paddedString = originalString.padStart(10, "*");
console.log(paddedString); // *****Hello

const originalString2 = "World";
const paddedString2 = originalString2.padEnd(10, "-");
console.log(paddedString2); // World-----

// combine both padStart() and padEnd()
const text = "Hello";
const paddedText = text.padStart(10, "-").padEnd(15, "+");
console.log(paddedText); // -----Hello+++++

// another example:
const products = [
  { name: "Apples", price: 1.5 },
  { name: "Bananas", price: 0.75 },
  { name: "Oranges", price: 2 },
];

console.log("Product      Price");
console.log("-------------------");

products.forEach(({ name, price }) => {
  const paddedName = name.padEnd(10, " ");
  const formattedPrice = price.toFixed(2).padStart(8, " ");
  console.log(`${paddedName}${formattedPrice}`);
});

/*
  Output:
  
  Product      Price
  -------------------
  Apples        1.50
  Bananas       0.75
  Oranges       2.00
  */

// and another example:
function formatTime(currentTime, totalTime) {
  // Helper function to pad a number with leading zeros
  const padWithZero = (num) => num.toString().padStart(2, "0");

  // Format current time in minutes:seconds
  const formattedCurrentTime = `${padWithZero(
    Math.floor(currentTime / 60)
  )}:${padWithZero(Math.floor(currentTime % 60))}`;

  // Format total time in minutes:seconds
  const formattedTotalTime = `${padWithZero(
    Math.floor(totalTime / 60)
  )}:${padWithZero(Math.floor(totalTime % 60))}`;

  // Combine formatted current time and total time with "of" in between
  return `${formattedCurrentTime} of ${formattedTotalTime}`;
}

// Example time values
const currentTimeInSeconds = 125; // Example of a current time in seconds
const totalTimeInSeconds = 3600; // Example of a total time in seconds

// Format the time and display the result
const formattedTime = formatTime(currentTimeInSeconds, totalTimeInSeconds);
console.log(formattedTime); // 02:05 of 60:00
