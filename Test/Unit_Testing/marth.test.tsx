import { describe, it, expect } from 'vitest';
import { sum, multiply } from '../../Component/math';

describe('math functions', () => {
  it('sums correctly', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('multiplies correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});