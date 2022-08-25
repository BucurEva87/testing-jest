const stringLength = require('../stringLength');

describe('stringLength', () => {
  test('Returns the actual number of characters in the string', () => {
    expect(stringLength('Microverse')).toBe(10);
  });
  test('Throws error when string is less than one character long', () => {
    expect(() => stringLength('')).toThrow("String's characters number over or under limit");
  });
  test('Throws error when string is more than ten characters long', () => {
    expect(() => stringLength('Pneumonoultramicroscopicsilicovolcanoconiosis')).toThrow(
      "String's characters number over or under limit",
    );
  });
});
