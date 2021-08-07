import { colorHexMatch } from '.';

describe('colorHexMatch Match the `inputString` against hexadecimal regExps [`rrgbbbaa`, `rrggbb`, `rgba`, `rgb`] return the upperCase or emptyString', () => {
  it('should match rgb', () => {
    const resultString = colorHexMatch('fbc');
    expect(resultString).toBe('FBC');
  });

  it('should match rgba', () => {
    const resultString = colorHexMatch('fbca');
    expect(resultString).toBe('FBCA');
  });

  it('should match rrggbb', () => {
    const resultString = colorHexMatch('ffbbcc');
    expect(resultString).toBe('FFBBCC');
  });

  it('should match rrgbbbaa', () => {
    const resultString = colorHexMatch('ffbbccaa');
    expect(resultString).toBe('FFBBCCAA');
  });

  it('should return an empty string if invalid', () => {
    const resultString = colorHexMatch('fgfbybctcaua');
    expect(resultString).toBe('');
  });
});
// describe.each([
//  [1, 2],
//  [2, 4],
// ])('double(%d)', (input, expected) => {
//  it.skip(`returns ${expected}`, () => {
//   expect(input * 2).toBe(expected);
//  });
// });

// import { colorHexRegExps } from '.';

// function _colorHexMatch(colorHexRegExp: RegExp[]) {
//  return (inputString: string): string => {
//   for (const regexp of colorHexRegExp) {
//    const match = inputString.match(regexp);
//    if (match !== null && match?.length === 1 && match[0]) {
//     const extractedHex = match[0].toUpperCase();
//     return extractedHex;
//    }
//   }
//   return '';
//  };
// }

// export const colorHexMatch = (inputString: string): string =>
//  _colorHexMatch(colorHexRegExps)(inputString);
