const capitalize = require('../capitalize');

describe('capitalize', () => {
  test('returns the capitalized string', () => {
    expect(capitalize('microverse')).toBe('Microverse');
  });
  test('throws an error if the argument is not of type string', () => {
    expect(() => capitalize(24)).toThrow('Provided argument must be of type string');
  });
});
