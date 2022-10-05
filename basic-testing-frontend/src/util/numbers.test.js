import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform argument into a number', () => {
  const input = '1';
  const result = transformToNumber(input);
  expect(result).toBe(1).toBeTypeOf('number');
});
it('should return NaN if argument cannot be transformed into a number', () => {
  const inputString = 'string';
  const inputObj = {};

  const resultString = transformToNumber(inputString);
  const resultObj = transformToNumber(inputObj);

  expect(resultString).toBeNaN();
  expect(resultObj).toBeNaN();
});
it('should throw an error if function called without any arguments', () => {
  const restulFn = () => {
    transformToNumber();
    expect(restulFn).toThrow();
  };
});
