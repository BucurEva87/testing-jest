const Calculator = require('../Calculator');

describe('Calculator', () => {
  test('add method adds two numbers correctly', () => {
    expect(Calculator.add(5, 8)).toBe(13);
  });
  test('add method throws an error when at least one argument is not a number', () => {
    expect(() => Calculator.add('5', 5)).toThrow('Both operands must be numbers');
  });
  test('add method throws an error when both arguments are not numbers', () => {
    expect(() => Calculator.add('5', false)).toThrow('Both operands must be numbers');
  });

  test('subtract method subtracts two numbers correctly', () => {
    expect(Calculator.subtract(5, -8)).toBe(13);
  });
  test('subtract method throws an error when at least one argument is not a number', () => {
    expect(() => Calculator.subtract('5', 5)).toThrow('Both operands must be numbers');
  });
  test('subtract method throws an error when both arguments are not numbers', () => {
    expect(() => Calculator.subtract('5', false)).toThrow('Both operands must be numbers');
  });

  test('multiply method multiplies two numbers correctly', () => {
    expect(Calculator.multiply(5, 8)).toBe(40);
  });
  test('multiply method throws an error when at least one argument is not a number', () => {
    expect(() => Calculator.multiply('5', 5)).toThrow('Both operands must be numbers');
  });
  test('multiply method throws an error when both arguments are not numbers', () => {
    expect(() => Calculator.multiply('5', false)).toThrow('Both operands must be numbers');
  });

  test('divide method divides two numbers correctly', () => {
    expect(Calculator.divide(72, 8)).toBe(9);
  });
  test('divide method throws an error when at least one argument is not a number', () => {
    expect(() => Calculator.divide('5', 5)).toThrow('Both operands must be numbers');
  });
  test('divide method throws an error when divisor is 0', () => {
    expect(() => Calculator.divide(10, 0)).toThrow("Division by 0 is not allowed by math's rules");
  });
});
