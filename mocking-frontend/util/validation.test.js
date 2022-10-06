import { it, expect } from 'vitest';

import { validateNotEmpty } from './validation';

it('should throw an error if no text is provided', () => {
  const resultFn = () => {
    validateNotEmpty(null, 'error msg');
  };
  expect(resultFn).toThrow();
});

it('should throw an error if input text length equals zero', () => {
  const text = '';
  const errorMsg = 'error msg';
  const resultFn = () => {
    validateNotEmpty(text, errorMsg);
  };
  expect(resultFn).toThrow();
});

it('should throw an error if input text is a string of spaces', () => {
  const text = ' ';
  const errorMsg = 'error msg';
  const resultFn = () => {
    validateNotEmpty(text, errorMsg);
  };
  expect(resultFn).toThrow();
});

it('should throw an error if no arguments provided', () => {
  const resultFn = () => {
    validateNotEmpty();
  };
  expect(resultFn).toThrow();
});

it('should throw an error with the provided error message', () => {
  const text = '';
  const errorMsg = 'error msg';
  const resultFn = () => {
    validateNotEmpty(text, errorMsg);
  };
  expect(resultFn).toThrow(errorMsg);
});
