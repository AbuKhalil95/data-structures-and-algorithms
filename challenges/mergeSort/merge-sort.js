
function mergeSort(arr) {
 let n = arr.length;

 if (n > 1) {
   let mid = Math.floor(n/2);
   let left = arr.slice(0, mid);
   let right = arr.slice(mid, n);
   console.log('slicing arr into left and right', arr, left, right)

   mergeSort(left);
   mergeSort(right);
   merge(left, right, arr);
 }

 return arr;
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  console.log('left, right', left, right)
  while (i < left.length && j < right.length) {
    console.log('i , j , k', i , j , k);
    if (left[i] <= right[j]) {
      console.log(`inserting left ${left[i]} in ${arr} at ${k}`);
      arr[k] = left[i];
      // arr[k+1] = right[j];
      i++;
    } else {
      console.log(`inserting right ${right[j]} in ${arr} at ${k}`);
      arr[k] = right[j]
      // arr[k+1] = left[i];

      j++;
    }
    console.log('arr is ', arr);
    k++;
  }

  console.log('before merge is ', arr, left, right);
  if (i == left.length) {
    console.log(`mergin with right starting at arr[${k}] = ${arr[k]} and right[${j}] = ${right[j]}`, arr, right);
    while (j < right.length) {
      arr[k] = right[j];
      k++;
      j++;
    }
  } else {
    console.log(`mergin with left starting at arr[${k}] = ${arr[k]} and left[${i}] = ${left[i]}`, arr, left);
    while (i < left.length) {
      arr[k] = left[i];
      k++;
      i++;
    }
  }

  console.log('final merge is ', arr);
}

module.exports = mergeSort;