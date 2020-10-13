'use strict';

const quickSort = require('../challenges/quickSort/quick-sort');

describe('Insertion Sort tests ', ()=> {
  it('function works happily while sorting [8,4,23,42,16,15]', ()=> {
    expect(quickSort([8,4,23,42,16,15], 0, [8,4,23,42,16,15].length - 1)).toEqual([4,8,15,16,23,42]);
  });

  // it('function returns error while sorting ["data",4,23,42,16,15]', ()=> {
  //   expect(quickSort(['data',4,23,42,16,15], 0, ['data',4,23,42,16,15].length - 1)).toBeFalsy;
  // });

  it('function works happily while sorting [20,18,12,8,5,-2]', ()=> {
    expect(quickSort([20,18,12,8,5,-2], 0, [20,18,12,8,5,-2].length - 1)).toEqual([-2,5,8,12,18,20]);
  });

  it('function works happily while sorting [5,12,7,5,5,7]', ()=> {
    expect(quickSort([5,12,7,5,5,7], 0, [5,12,7,5,5,7].length - 1)).toEqual([5,5,5,7,7,12]);
  });

  it('function works happily while sorting [2,3,5,7,13,11]', ()=> {
    expect(quickSort([2,3,5,7,13,11], 0, [2,3,5,7,13,11].length - 1)).toEqual([2,3,5,7,11,13]);
  });
});