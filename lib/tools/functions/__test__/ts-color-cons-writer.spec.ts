import {
  colorConstWriter,
  tsColorConstWriter,
} from '../exports/writers/ts-color-cons-writer';

describe('colorConstWriter', () => {
  it('should be defined', () => {
    expect(colorConstWriter).toBeDefined();
  });

  it('should be empty string if provided with empty string', () => {
    expect(colorConstWriter('')).toBe('');
  });

  it('should register a constant statment when provided a hexColorString', () => {
    expect(colorConstWriter('FFFB')).toBe(
      "export const xFFFB: string = '#FFFB';"
    );
  });
});

describe('tsColorConstWriter', () => {
  it('should be defined', () => {
    expect(tsColorConstWriter).toBeDefined();
  });

  it('should be able to take 4 argument', () => {
    expect(tsColorConstWriter('AAAA', true, true, false)).toBe(
      "export const xAAAA: string = '#AAAA';"
    );
  });

  it('should be able to take 4 argument 3 of which are optionals', () => {
    expect(tsColorConstWriter('AAAA')).toBe(
      "export const xAAAA: string = '#AAAA';"
    );
  });

  it('should be omitting the export keyword when the second argument « exporting » is set to false', () => {
    expect(tsColorConstWriter('AAAA', false)).toBe(
      "const xAAAA: string = '#AAAA';"
    );
  });

  it('should be omitting the type when the third argument « ts » is set to false', () => {
    expect(tsColorConstWriter('AAAA', false, false)).toBe(
      "const xAAAA = '#AAAA';"
    );
  });

  it('should be omitting the semi-colon when last option « standard » is set to true', () => {
    expect(tsColorConstWriter('AAAA', false, false, true)).toBe(
      "const xAAAA = '#AAAA'"
    );
  });
});

// describe.each([ colorConstWriter, tsColorConstWriter
//   [1, 2],
//   [2, 4],
// ])('double(%d)', (input, expected) => {
//   it.skip(`returns ${expected}`, () => {
//     expect(input * 2).toBe(expected);
//   });
// });

// import chroma from 'chroma-js';
// import { colorHexMatch } from '.';
// import { chromaHex } from './utils';
// chroma;
// export function tsColorConstWriter(
//   colorHex: string,
//   exporting: boolean = true,
//   ts: boolean = true
// ): string {
//   const colorVal = chromaHex(colorHex);
//   console.log(colorVal);
//   const hex = colorHexMatch(colorHex);
//   if (hex === '') {
//     return hex;
//   }

//   const exp_ = exporting ? 'export ' : '';
//   const ts_ = ts ? ': string' : '';

//   return `${exp_}const x${hex}${ts_} = '#${hex}';\n`;
// }
