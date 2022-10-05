import { it, expect } from 'vitest';
import { add } from './math';

it('should summarize all numbers in an array', () => {
  //arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);
  //act
  const result = add(numbers);
  //assert
  expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one number value is invalid', () => {
  const inputs = ['invalid value', 1, 2, 3];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
  const numbers = ['1', '2', '3'];
  const expectedResult = numbers.reduce((prev, curr) => +prev + +curr, 0);
  const result = add(numbers);

  expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});

it('should throw an error if no value has been passed to the function', () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow(/is not iterable/);
});

it('should throw and error if provided with multiple arguments instead of an array', () => {
  const arg1 = 1;
  const arg2 = 2;

  const resultFn = () => {
    add(arg1, arg2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
