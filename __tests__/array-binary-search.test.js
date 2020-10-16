'use strict';

const bsFunc = require('../challenges/arrayBinarySearch/array-binary-search');

describe('Array Binary Search', ()=> {
  let sortedArrays = [
    [4,8,15,16,23,42],
    [11,22,33,44,55,66,77, 88, 90],
    [1,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59],
    [1,2,3,4,5,6,7,8,9,10,11,13,17,19,23,29,31,37,41,43,47,53,59]];

  let lookup = [15, 90, 37, 12];
  let expected = [2,8,11,-1];
  let test = [];

  it('Search works properly with the following test arrays', ()=> {
    sortedArrays.forEach((array, index) => {
      test[index] = bsFunc(array, lookup[index]);
    });

    expect(test[0]).toEqual(expected[0]);
    expect(test[1]).toEqual(expected[1]);
    expect(test[2]).toEqual(expected[2]);
    expect(test[3]).toEqual(expected[3]);
  });
});
