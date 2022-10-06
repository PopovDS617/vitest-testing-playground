import { it, describe, expect, beforeEach } from 'vitest';

import { savePost, extractPostData } from './posts';

const testTitle = 'test title';
const testContent = 'test content';
let testFormData;

describe('extractPostData()', () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });

  it('should extract title and content from form', () => {
    const data = extractPostData(testFormData);
    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});

// describe('',()=>{})

// it('',()=>{})
