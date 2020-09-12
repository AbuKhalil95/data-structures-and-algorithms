'use strict';

const reverseArray_1 = require('../challenges/arrayReverse/array-reverse').reverseArray_1;
const reverseArray_2 = require('../challenges/arrayReverse/array-reverse').reverseArray_2;
const reverseArray_3 = require('../challenges/arrayReverse/array-reverse').reverseArray_3;


describe('Array Binary Search', ()=> {
  
let arraysToReverse = [
  [1, 2, 3, 4, 5, 6],
  [89, 2354, 3546, 23, 10, -923, 823, -12],
  [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
     53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 
     109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 
     173, 179, 181, 191, 193, 197, 199]];

  let expected = [
    [6, 5, 4, 3, 2, 1],
    [-12, 823, -923, 10, 23, 3546, 2354, 89],
    [199, 197, 193, 191, 181, 179, 173, 167, 163, 157, 151,
       149, 139, 137, 131, 127, 113, 109, 107, 103, 101, 97,
       89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 
       29, 23, 19, 17, 13, 11, 7, 5, 3, 2]];

  let test = [];
  test[0] = []; // helps define 2d array without type error
  test[1] = [];
  test[2] = [];

  it('Search works properly with the following test arrays and all different methods', ()=> {
    arraysToReverse.forEach((array, index) => {
      test[0][index] = reverseArray_1(array);   // for loop method
      test[1][index] = reverseArray_2(array);   // map method
      test[2][index] = reverseArray_3(array);   // recursion method
    });

    expect(test[0][0] == test[1][0] == [2][0] == expected[0]).toBeTruthy;
    expect(test[0][1] == test[1][1] == [2][1] == expected[1]).toBeTruthy;
    expect(test[0][2] == test[1][2] == [2][2] == expected[2]).toBeTruthy;
  });
});