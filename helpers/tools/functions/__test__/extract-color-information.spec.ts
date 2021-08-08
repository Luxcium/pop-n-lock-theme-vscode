import { extractColorInformation } from '../extract-color-information-complex';

describe('extractColorInformation', () => {
  it('should be defined', () => {
    expect(extractColorInformation).toBeDefined();
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

// export async function extractColorInformation(
//   colorElementTupleList: Promise<ColorElementTuple[]>,
//   template: string | [string] | [string, string] = 'x'
// ): Promise<ColorElementTuple[]> {
//   return Promise.all(
//     (await colorElementTupleList).map(async colorElementTuple => {
//       const [colorElementName, colorHexValue] = colorElementTuple;
//       return [
//         colorElementName,
//         colorHexMatch(colorHexValue, template),
//       ] as ColorElementTuple;
//     })
//   );
// }

// export function colorHexMatch(inputString: string | null): string;
// export function colorHexMatch(
//   inputString: string | null,
//   template?: string | [string] | [string, string]
// ): string;
// export function colorHexMatch(
//   inputString: Promise<string | null>
// ): Promise<string>;
// export function colorHexMatch(
//   inputString: Promise<string>,
//   template?: string | [string] | [string, string]
// ): Promise<string>;
// export function colorHexMatch(
//   inputString: Promise<string | null> | string | null,
//   template: string | [string] | [string, string] = ['', '']
// ): Promise<string | null> | string | null {
//   if (typeof inputString === 'string') {
//     return colorHexMatch_(inputString, template);
//   }
//   return colorExtractHexAsync(inputString, template);
// }

// async function colorExtractHexAsync(
//   inputString: Promise<string | null> | string | null,
//   template: string | [string] | [string, string] = ['', '']
// ): Promise<string | null> {
//   return colorHexMatch_((await Promise.resolve(inputString)) || null, template);
// }
// function colorHexMatch_(
//   inputString: string | null,
//   template: string | [string] | [string, string] = ['', '']
// ): string | null {
//   if (inputString == null) return null;
//   const colorMatch: RegExpMatchArray | null =
//     inputString.match(/[0-9a-f]{3,8}/gi);
//   if (colorMatch && colorMatch.length === 1 && colorMatch[0]) {
//     const extractedHex = colorMatch[0].toUpperCase();
//     if (Array.isArray(template)) {
//       return template.length === 1
//         ? template[0] + extractedHex
//         : template.length === 2
//         ? template[0] + extractedHex + template[1]
//         : null;
//     }
//     return typeof template === 'string'
//       ? template + extractedHex
//       : extractedHex;
//   }
//   return null;
// }