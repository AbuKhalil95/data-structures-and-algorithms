'use strict';

function InsertionSort(arr) {
  if (!arr.some(isNaN)) {
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      let temp = arr[i];
  
      while (j >=0 && temp < arr[j]) {
        arr[j+1] = arr[j];
        j--;
      }
  
      arr[j+1] = temp;
    }
  
    return arr;
  } else {
    return new Error('Input arr can only have numbers');
  }
}

module.exports = InsertionSort;