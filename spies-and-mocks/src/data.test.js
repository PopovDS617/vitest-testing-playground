import { it, expect, describe, vi } from 'vitest';

import { generateReportData, storeData } from './data';

describe('generateReportData()', () => {
  it('should execute logFn() if provided', () => {
    const logger = vi.fn();

    generateReportData(logger);
    expect(logger).toHaveBeenCalled();
  });
});
