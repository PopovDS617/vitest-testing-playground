import { expect, it, describe } from 'vitest';
import { generateToken, generateTokenPromise } from './async';

describe('generateToken()', () => {
  it('should generate a token value', (done) => {
    const testUserEmail = 'test@test.com';

    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

describe('generateTokenPromise()', () => {
  it('should generate a token value, v 1', () => {
    const testUserEmail = 'test@test.com';
    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  });
  it('should generate a token value, v 2', async () => {
    const testUserEmail = 'test@test.com';

    const token = await generateTokenPromise(testUserEmail);
    expect(token).toBeDefined();
  });
});
