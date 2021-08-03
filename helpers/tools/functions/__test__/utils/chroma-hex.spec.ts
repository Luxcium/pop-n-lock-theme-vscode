import { chromaHex, templatedChromaHex } from '../../utils/chroma-hex';

describe.each([
  ['x' as string, 'CAFE', 'xCCAAFFED'],
  [['0x'] as [string], 'CAFE', '0xCCAAFFED'],
  [['"#', '";'] as [string, string], 'CAFE', '"#CCAAFFED";'],
])(
  'Using function templatedChromaHex(%s)(%s) => %s ',
  (template, base, expected) => {
    it(`should return ${expected}`, () => {
      expect(templatedChromaHex(template)(base)).toBe(expected);
    });
  }
);

describe.each([['CAFE', '#CCAAFFED']])(
  'Using function chromaHex(%s)(%s) => %s ',
  (base, expected) => {
    it(`should return ${expected}`, () => {
      expect(chromaHex(base)).toBe(expected);
    });

    it(`When passing prefix 'x' it should return 'xCCAAFFED' instead of ${expected}`, () => {
      expect(chromaHex(base, 'x')).toBe('xCCAAFFED');
    });

    it(`When passing prefix '' it should return 'CCAAFFED' instead of ${expected}`, () => {
      expect(chromaHex(base, '')).toBe('CCAAFFED');
    });

    it(`When passing prefix '#' it should return expected: ${expected}`, () => {
      expect(chromaHex(base, '#')).toBe('#CCAAFFED');
    });
  }
);

// import chroma from 'chroma-js';
// chromaHex
// export const chromaHex = (colorHex: string, prefix: string = '#') =>
//   `${prefix}${chroma(colorHex).hex('rgba').toUpperCase().slice(1)}`;

// function MAIN() {
//   console.log(chromaHex('FFE1'));
// }
// if (require?.main?.filename === __filename) MAIN();

// // template: string | [string] | [string, string] = 'x'

// export function templatedChromaHex(
//   template: string | [string] | [string, string] = 'x'
// ) {
//   let left = '';
//   let right = '';
//   if (typeof template === 'string') {
//     left = template;
//   }

//   if (Array.isArray(template)) {
//     left = template.length === 1 ? template[0] : '';
//     right = template.length === 2 ? template[1] : '';
//   }
//   return (colorHex: string) => `${chromaHex(colorHex, left)}${right}`;
// }
