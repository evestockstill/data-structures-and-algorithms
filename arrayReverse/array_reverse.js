const arrOne = [1, 2, 3, 4, 5, 6];
const arrTwo = [89, 2354, 3546, 23, 10, -923, 823, -12];
const arrayReverser = arr => {
  let reversedArray = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
};
const backwardsArray = arrayReverser(arrOne);

console.log(backwardsArray);

module.exports  = arrayReverser;
