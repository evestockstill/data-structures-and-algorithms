const { arrayReverser } = require('../array_reverse');

describe('arrays', () => {
  it('it can reverse the order of an array', () => {
    expect(arrayReverser([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
    expect(arrayReverser([-1, -2, 5, 6, 8])).toStrictEqual([8, 6, 5, -2, -1]);
    expect(arrayReverser([1, 2, 3])).not.toBe([2, 1, 3]);
  
  });
});

