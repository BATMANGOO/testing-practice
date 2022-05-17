function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reversedStr(str) {
  return str.split('').reverse().join('');
}

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
    add(a, b) {
      return a + b;
    }

    subtract(a, b) {
      return a - b;
    }

    multiply(a, b) {
      return a * b;
    }

    divide(a, b) {
      return a / b;
    }
}

module.exports = { capitalize, reversedStr, Calculator };