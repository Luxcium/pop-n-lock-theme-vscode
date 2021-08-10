import { colorHexMatchComplex } from '../extract-color-information-complex';

describe('colorHexMatchComplex', () => {
  it('should be defined', () => {
    expect(colorHexMatchComplex).toBeDefined();
  });
});
// describe.each([
//   [1, 2],
//   [2, 4],
// ])('double(%d)', (input, expected) => {
//   it.skip(`returns ${expected}`, () => {
//     expect(input * 2).toBe(expected);
//   });
// });
// import { ColorElementTuple } from '../types';

// export function colorHexMatchComplex(inputString: string | null): string;
// export function colorHexMatchComplex(
//   inputString: string | null,
//   template?: string | [string] | [string, string]
// ): string;
// export function colorHexMatchComplex(
//   inputString: Promise<string | null>
// ): Promise<string>;
// export function colorHexMatchComplex(
//   inputString: Promise<string>,
//   template?: string | [string] | [string, string]
// ): Promise<string>;
// export function colorHexMatchComplex(
//   inputString: Promise<string | null> | string | null,
//   template: string | [string] | [string, string] = ['', '']
// ): Promise<string | null> | string | null {
//   if (typeof inputString === 'string' || inputString === null) {
//     return colorHexMatch_(inputString, template);
//   }
//   return colorExtractHexAsync(inputString, template);
// }

// export async function extractColorInformation(
//   colorElementTupleList: Promise<ColorElementTuple[]>,
//   template: string | [string] | [string, string] = 'x'
// ): Promise<ColorElementTuple[]> {
//   return Promise.all(
//     (await colorElementTupleList).map(async colorElementTuple => {
//       const [colorElementName, colorHexValue] = colorElementTuple;
//       return [
//         colorElementName,
//         await colorExtractHexAsync(colorHexValue, template),
//       ] as ColorElementTuple;
//     })
//   );
// }
// async function colorExtractHexAsync(
//   inputString: Promise<string | null> | string | null,
//   template: string | [string] | [string, string]
// ): Promise<string | null> {
//   return colorHexMatch_((await Promise.resolve(inputString)) || null, template);
// }
// function colorHexMatch_(
//   inputString: string | null,
//   template: string | [string] | [string, string]
// ): string | null {
//   if (inputString == null) return null;
//   const colorMatch: RegExpMatchArray | null =
//     inputString.match(/[0-9a-f]{3,8}/gi);
//   if (colorMatch && colorMatch.length === 1 && colorMatch[0]) {
//     const extractedHex = colorMatch[0].toUpperCase();
//     if (Array.isArray(template)) {
//       if (template.length === 1) return template[0] + extractedHex;
//       if (template.length === 2)
//         return template[0] + extractedHex + template[1];
//     }
//     if (typeof template === 'string') return template + extractedHex;
//   }
//   return null;
// }
