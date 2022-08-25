const capitalize = require('../capitalize');

describe('capitalize', () => {
  test('returns the capitalized string', () => {
    expect(capitalize('microverse')).toBe('Microverse');
  });
});
