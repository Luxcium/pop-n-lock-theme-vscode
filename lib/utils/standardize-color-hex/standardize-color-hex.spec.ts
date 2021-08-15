import { standardizeColorHex } from '.';

describe.each([
  ['Fb4', 'FB4'],
  ['Fb4a', 'FB4A'],
  ['FfBb42', 'FFBB42'],
  ['FfBb42Aa', 'FFBB42AA'],
])('Function « standardizeColorHex » should match only colorHex compatible strings', (recived, expected) => {
  it('should match rrgbbbaa, rrggbb, rgba, rgb', () => {
    standardizeColorHex;
    expect(standardizeColorHex(recived)).toBe(expected);
  });
});

describe.each([
  ['Fb', ''],
  // ['Fbc4a', ''],
  ['FfBb42', 'FFBB42'],
  ['FfBb42Aa', 'FFBB42AA'],
])('Function « standardizeColorHex » should NOT match colorHex un-compatible strings', (recived, expected) => {
  it('should match rrgbbbaa, rrggbb, rgba, rgb', () => {
    standardizeColorHex;
    expect(standardizeColorHex(recived)).toBe(expected);
  });
});
