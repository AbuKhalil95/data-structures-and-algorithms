'use strict';

const insertionSort = require('../challenges/insertionSort/insertion-sort');

describe('Insertion Sort tests ', ()=> {
  it('function works happily while sorting [8,4,23,42,16,15]', ()=> {
    expect(insertionSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
  });

  it('function works happily while sorting [8,4,23,42,16,15]', ()=> {
    expect(insertionSort(['data',4,23,42,16,15])).toBeFalsy;
  });

  it('function works happily while sorting [20,18,12,8,5,-2]', ()=> {
    expect(insertionSort([20,18,12,8,5,-2])).toEqual([-2,5,8,12,18,20]);
  });

  it('function works happily while sorting [5,12,7,5,5,7]', ()=> {
    expect(insertionSort([5,12,7,5,5,7])).toEqual([5,5,5,7,7,12]);
  });

  it('function works happily while sorting [2,3,5,7,13,11]', ()=> {
    expect(insertionSort([2,3,5,7,13,11])).toEqual([2,3,5,7,11,13]);
  });
});