import { it, expect, vi, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

import { showError } from './dom';
import { Window } from 'happy-dom';

const htmlFilePath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlFilePath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

it('shows an error', () => {
  showError('test');
});

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocumentContent);
});

it('should add a paragraph with error text to the id="erros" element', () => {
  showError('test error text');

  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).not.toBeNull();
});

it('should not contain a paragraph with error text initially', () => {
  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).toBeNull();
});

it('should show the provided error message', () => {
  const testErrorMsg = 'test error';
  showError(testErrorMsg);
  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph.textContent).toBe(testErrorMsg);
});
