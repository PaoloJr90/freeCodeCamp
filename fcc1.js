function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else if (startNum === endNum) {
    return [(startNum + endNum) / 2];
  } else {
    const myNumbers = rangeOfNumbers(startNum + 1, endNum);
    myNumbers.unshift(startNum);
    return myNumbers;
  }
}

console.log(rangeOfNumbers(1, 5));
