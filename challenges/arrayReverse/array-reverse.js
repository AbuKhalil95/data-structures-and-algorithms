let arraysToReverse = [
  [1, 2, 3, 4, 5, 6],
  [89, 2354, 3546, 23, 10, -923, 823, -12],
  [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
     53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 
     109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 
     173, 179, 181, 191, 193, 197, 199]
];

function reverseArray_1(arr){
  // method 1
  let tempArr = [];
  for(i = 0; i < arr.length; i++){
    tempArr[i] = arr[arr.length - i - 1];
  }
  return tempArr;
}


function reverseArray_2(arr){
  // method 2
  let newArr = arr.map((element, index) => {
    return element = arr[arr.length - index - 1];
  });
  return newArr;
}


function reverseArray_3(arr){
  // method 3
  let recursiveArr = [];
  function recurse(arr) {
    let maxIndex = arr.length - 1;
    recursiveArr.push(arr[maxIndex]);
    arr.pop();
    if (maxIndex > 0){
      recurse(arr);
    }
  }
  recurse(arr);
  return recursiveArr;
}

arraysToReverse.map(arr => arr = reverseArray_1(arr));

module.exports.reverseArray_1 = reverseArray_1;
module.exports.reverseArray_2 = reverseArray_2;
module.exports.reverseArray_3 = reverseArray_3;