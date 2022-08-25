const reverseString = require('../reverseString');

describe('reverseString', () => {
  test('Returns the reverse of a string', () => {
    expect(reverseString('Microverse')).toBe('esrevorciM');
  });
});
