import { numberValueFormatter } from '../utils';

describe('Utils tests', () => {
  it('Number Value Formatter - Using Number', () => {
    expect(numberValueFormatter(5)).toBe('5');
  });
  it('Number Value Formatter - Using NaN', () => {
    expect(numberValueFormatter('test')).toBe('-');
  });
});
