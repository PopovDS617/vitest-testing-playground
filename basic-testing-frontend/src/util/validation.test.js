import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty()', () => {
  it('should throw an error if input length equals zero', () => {
    const input = '';
    const resultFn = () => {
      validateStringNotEmpty(input);
    };
    expect(resultFn).toThrow();
  });
  it('should throw an error if input is not type of string', () => {
    const input = {};
    const resultFn = () => {
      validateStringNotEmpty(input);
    };
    expect(resultFn).toThrow();
  });
  it('should throw an error if no argument has been passed into the function', () => {
    const resultFn = () => {
      validateStringNotEmpty();
    };
    expect(resultFn).toThrow();
  });
});

describe('validateNumber()', () => {
  it('should throw an error if input is NaN', () => {
    const inputString = '5';
    const resultStringFn = () => {
      validateNumber(inputString);
    };
    const inputObj = {};
    const resultObjFn = () => {
      validateNumber(inputObj);
    };

    expect(resultStringFn).toThrow();
    expect(resultObjFn).toThrow();
  });

  it('should not throw an error if input is number', () => {
    const input = 5;
    const resultFn = () => {
      validateNumber(input);
    };
    expect(resultFn).not.toThrow();
  });

  it('should throw an error if no argument has been passed into the function', () => {
    const resultFn = () => {
      validateNumber();
    };
    expect(resultFn).toThrow();
  });
});
