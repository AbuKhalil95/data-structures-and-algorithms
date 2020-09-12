'use strict';

const insertShiftArray_1 = require('../challenges/arrayShift/array-shift').insertShiftArray_1;
const insertShiftArray_2 = require('../challenges/arrayShift/array-shift').insertShiftArray_2;
const deleteShiftArray = require('../challenges/arrayShift/array-shift').deleteShiftArray;


describe('Array Binary Search', ()=> {
  
  let testInsertArrays = [[2,4,6,8], [4,8,15,23,42]];
  let testDeleteArrays = [[2,4,5,6,8], [4,8,15,16,23,42]];
  let test = [];
  test[0] = [];
  test[1] = [];

  it('Arrays should hve middle index inserted with a value, and shifted to the right', ()=> {
    testInsertArrays.forEach((array, index) => {
      test[0][index] = insertShiftArray_1(array);   // interesting method using (... arr)
      test[1][index] = insertShiftArray_2(array);   // traditional for loop method
    });

    expect(test[0][0] == test[1][0] == testDeleteArrays[0]).toBeTruthy;
    expect(test[0][1] == test[1][1] == testDeleteArrays[1]).toBeTruthy;
  });

  it('Arrays should hve middle index deleted and shifted to the left', ()=> {
    testDeleteArrays.forEach((array, index) => {
      test[0][index] = deleteShiftArray(array);   // traditional for loop method
    });

    expect(test[0][0] == testInsertArrays[0]).toBeTruthy;
    expect(test[0][1] == testInsertArrays[1]).toBeTruthy;
  });

});