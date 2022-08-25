module.exports = class Calculator {
  static add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both operands must be numbers');
    }

    return a + b;
  }

  static subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both operands must be numbers');
    }

    return a - b;
  }

  static multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both operands must be numbers');
    }

    return a * b;
  }

  static divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both operands must be numbers');
    }

    if (b === 0) throw new Error("Division by 0 is not allowed by math's rules");

    return a / b;
  }
};
