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

function ceaserCypher(str, shift) {
  return str.split('').map(char => {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    } else {
      return char;
    }
  }).join('');
}

function analyzeArray(arr) {
  const result = {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  }

  return result;
}

ceaserCypher('james', 3);

module.exports = { capitalize, reversedStr, Calculator, ceaserCypher, analyzeArray };