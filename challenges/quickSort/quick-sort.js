function QuickSort(arr, left, right) {
  if (arr.some(isNaN)) {
    return new Error('Input arr can only have numbers');
   }

  console.log('starting arrays and positions: =========>', arr, left ,right);
  if (left < right) {
    let position = Partition(arr, left, right);
    console.log('position at the moment in array', position, arr);
    // Sort the left
    QuickSort(arr, left, position - 1)
    // Sort the right
    QuickSort(arr, position + 1, right)
  }
  return arr;
}

function Partition(arr, left, right) {
  let pivot = arr[right];
  let low = left - 1;

  for(i = left; i < right; i++) {
    if(arr[i] <= pivot) {
      console.log('these values come true: ', arr[i] <= pivot, arr[i], pivot, i )
      low++;
      Swap(arr, i, low)
    }
  } 

  console.log('swap these anyway: ', arr, right, low + 1)
  Swap(arr, right, low + 1)
  // return the pivot index point
  return low + 1;
}

function Swap(arr, i, low) {
  console.log('swap these : ', arr[i], arr[low] )
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

module.exports = QuickSort;

// ALGORITHM QuickSort(arr, left, right)
//     if left < right
//         // Partition the array by setting the position of the pivot value 
//         DEFINE position <-- Partition(arr, left, right)
//         // Sort the left
//         QuickSort(arr, left, position - 1)
//         // Sort the right
//         QuickSort(arr, position + 1, right)

// ALGORITHM Partition(arr, left, right)
//     // set a pivot value as a point of reference
//     DEFINE pivot <-- arr[right]
//     // create a variable to track the largest index of numbers lower than the defined pivot
//     DEFINE low <-- left - 1
//     for i <- left to right do
//         if arr[i] <= pivot
//             low++
//             Swap(arr, i, low)

//      // place the value of the pivot location in the middle.
//      // all numbers smaller than the pivot are on the left, larger on the right. 
//      Swap(arr, right, low + 1)
//     // return the pivot index point
//      return low + 1

// ALGORITHM Swap(arr, i, low)
//     DEFINE temp;
//     temp <-- arr[i]
//     arr[i] <-- arr[low]
//     arr[low] <-- temp