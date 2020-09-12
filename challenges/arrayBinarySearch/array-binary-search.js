let sortedArrays = [
  [4,8,15,16,23,42],
  [11,22,33,44,55,66,77, 88, 90],
  [1,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59]
]

let lookup = [
  15,
  90,
  37
]

function BinarySearch(arr, value) {
  let currentPos = arr.length - 1;
  let flagExist = false;

  for (let i = 0; i <= arr.length; i+= currentPos) {
    // console.log("i: " + i, "currentPos: " + currentPos, "currentValue: " + arr[i], "value: " + value);
    currentPos = Math.abs(currentPos); // resets into positive after addition

    if (arr[i] != value && flagExist) {   // its impossible not to find match when halving reaches 1 and moves to that position
      break;
    }
    if (currentPos == 1) {flagExist = true}; // prepare last move 

    if (arr[i] < value) {
      currentPos = Math.ceil(currentPos/2);
    }
    if (arr[i] == value) {
      return i;
    }
    if (arr[i] > value) {
      currentPos = Math.ceil(currentPos/-2);
    }
  }
  return -1;
}

BinarySearch(sortedArrays[0], lookup[0]);

module.exports = BinarySearch;