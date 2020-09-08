let testInsertArrays = [[2,4,6,8], [4,8,15,23,42]];
let testDeleteArrays = [[2,4,5,6,8], [4,8,15,16,23,42]];

let testInput = [5, 16];

function insertShiftArray(arr, input) {
  let middle = Math.ceil(arr.length/2);
  let newArr = [];
  let length = arr.length; 
  // method 1
  // let beforeMiddle = [];
  // let afterMiddle = [];
  // for (let i = 0; i < middle; i++) {
  //   beforeMiddle[i] = arr[i];
  // }

  // for (let i = middle; i < arr.length; i++) {
  //   afterMiddle[i] = arr[i];
  // }

  // return [...beforeMiddle, input, ...afterMiddle]

  // method 2
  for (let i = 0; i < length; i++) {

    if (i < middle) {
      newArr[i] = arr[i];
    }

    if (i == middle) {
      newArr[i] = input;
      length++;
    }

    if (i > middle) {
      newArr[i] = arr[i - 1];
    }
  }
  return newArr;
}

function deleteShiftArray (arr) {
  let middle = Math.ceil(arr.length/2);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {

    if (i < middle) {
      newArr[i] = arr[i];
    }

    if (i == middle) {
    }

    if (i > middle) {
      newArr[i - 1] = arr[i];
    }
  }
  return newArr;
}

insertShiftArray(testInsertArrays[1], testInput[1]);
deleteShiftArray(testDeleteArrays[1]);