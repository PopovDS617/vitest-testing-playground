import { it, expect, describe } from 'vitest';
import { add } from './math';

import { generateResultText, outputResult } from './output';

describe('generateResultText()', () => {
  it('should return a string, no matter which value is passed to', () => {
    const inputNumber = 1;
    const inputString = 'string';
    const inputBoolean = false;

    const resultNumber = generateResultText(inputNumber);
    const resultString = generateResultText(inputString);
    const resultBoolean = generateResultText(inputBoolean);

    expect(resultNumber).toBeTypeOf('string');
    expect(resultString).toBeTypeOf('string');
    expect(resultBoolean).toBeTypeOf('string');
  });

  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const result = 5;

    const resultText = generateResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = 'no-calc';

    const resultText = generateResultText(result);

    expect(resultText).toBe('');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';

    const resultText = generateResultText(result);

    expect(resultText).toContain('Invalid');
  });
});

// describe('outputResult()',()=>{

// })
