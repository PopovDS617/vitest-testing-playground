import { it, expect, describe } from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber()', () => {
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
});

describe('cleanNumbers()', () => {
  it('should return an array or number values if an array of string number values is provided', () => {
    const input = ['1', '2', '3'];
    const transformedNumbers = cleanNumbers(input);

    expect(transformedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numbers = ['', 1, '2'];

    const resultFn = () => {
      cleanNumbers(numbers);
    };
    expect(resultFn).toThrow();
  });
});
