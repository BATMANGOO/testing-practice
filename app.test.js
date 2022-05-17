import { capitalize, reversedStr, Calculator, ceaserCypher, analyzeArray } from './app.js';

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

test('returns ceaser cypher encoded string', () => {
  expect(ceaserCypher('james', 3)).toBe('mdphv');
})

test('returns ceaser cypher decoded string', () => {
  expect(ceaserCypher('mdphv', -3)).toBe('james');
})

test('returns average, min, max, and length of array', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = {
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  }
  expect(analyzeArray(arr)).toEqual(result);
})