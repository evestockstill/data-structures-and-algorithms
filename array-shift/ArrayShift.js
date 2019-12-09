// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
// Example
// Input	Output
// [2, 4, 6, 8], 5                  [2, 4, 5, 6, 8]
// [4, 8, 15, 23, 42], 16       [4, 8, 15, 16, 23, 42]

const insertShiftArray = (arr, val) => {
  let midPoint = Math.floor(arr.length / 2);
  let newArray = [];
  let firstHalfUpper;
  let secondHalfLower;
  if(arr.length % 2 === 0){
     firstHalfUpper = midPoint - 1;
     secondHalfLower = midPoint;
  
  } else {
     firstHalfUpper = midPoint;
     secondHalfLower = midPoint + 1;
  }
  for(let i = 0; i <= firstHalfUpper; i++) {
    newArray.push(arr[i]);
  }
  newArray.push(val);
  for(let i = secondHalfLower; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
};
