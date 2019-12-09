// Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key.Without utilizing any of the built -in methods available to your language, return the index of the array’s element that is equal to the search key, or - 1 if the element does not exist.
//     Example
// Input	Output
// [4, 8, 15, 16, 23, 42], 15	2

// [11, 22, 33, 44, 55, 66, 77], 90 - 1

const binarySearch = (arr, val) => {
  let leftPoint = 0;
  let rightPoint = arr.length - 1;
  while(leftPoint <= rightPoint) {
    let midPoint = leftPoint + (rightPoint - 1) / 2;
    if(arr[midPoint] === val) {
      return midPoint;
    } 
    if(arr[midPoint] < val) {
      leftPoint = midPoint + 1;
    } 
    else {
      rightPoint = midPoint - 1;
    }
  
  }
  return -1;
};



// Resources
// Wikipedia: Binary Search Algorithm
// Stretch Goal
// Once you’ve achieved a working solution, benchmark with varying array sizes(100, 10000, 100000 elements)