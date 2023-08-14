// merge sort
function mergeSort(arr) {
  // O(n log n)
  // O(n log n)
  if (arr.length < 2) {
    return arr;
  }
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
  console.log(resultArr);
  return resultArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}

let arr = [5, 3, 7, 10, 4, 1, 2, 6, 8];
console.log(mergeSort(arr));
