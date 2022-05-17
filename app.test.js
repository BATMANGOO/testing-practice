import { capitalize, reversedStr, Calculator } from './app.js';

test('capitalizes the first letter', () => {
  expect(capitalize('james')).toBe('James');
});

test('returns a reversed string', () => {
  expect(reversedStr('james')).toBe('semaj');
})

test('calculator returns added numbers', () => {
  const calculator = new Calculator();
  expect(calculator.add(1, 2)).toBe(3);
})

test('calculator returns subtracted numbers', () => {
  const calculator = new Calculator();
  expect(calculator.subtract(1, 3)).toBe(-2);
})

test('calculator returns multiplied numbers', () => {
  const calculator = new Calculator();
  expect(calculator.multiply(1, 3)).toBe(3);
})

test('calculator returns divided numbers', () => {
  const calculator = new Calculator();
  expect(calculator.divide(4, 2)).toBe(2);
})