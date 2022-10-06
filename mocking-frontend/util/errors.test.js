import { it, expect, describe } from 'vitest';

import { HttpError, ValidationError } from './errors';

describe('HttpError class', () => {
  const code = '200';
  const message = 'error message';
  const data = 'some data';

  it('should have property statusCode', () => {
    const httpError = new HttpError(code);
    expect(httpError).toHaveProperty('statusCode');
    expect(httpError.statusCode).toBe(code);
  });

  it('should have property message', () => {
    const httpError = new HttpError(null, message);
    expect(httpError).toHaveProperty('message');
    expect(httpError.message).toBe(message);
  });

  it('should have property data', () => {
    const httpError = new HttpError(null, null, data);
    expect(httpError).toHaveProperty('data');
    expect(httpError.data).toBe(data);
  });

  it('should have three properties if three arguments are provided', () => {
    const httpError = new HttpError(code, message, data);

    expect(httpError.statusCode).toBe(code);
    expect(httpError.message).toBe(message);
    expect(httpError.data).toBe(data);
  });

  it('should contain undefined if arguments are not provided', () => {
    const httpError = new HttpError();

    expect(httpError.statusCode).toBeUndefined();
    expect(httpError.message).toBeUndefined();
    expect(httpError.data).toBeUndefined();
  });
});

describe('ValidationError class', () => {
  it('should contain provided message', () => {
    const message = 'message text';
    const validationMessage = new ValidationError(message);
    expect(validationMessage).toHaveProperty('message');

    it('should contain undefined if argument is not provided', () => {
      const validationMessage = new ValidationError(message);
      expect(validationMessage.message).toBeUndefined();
    });
  });
});
