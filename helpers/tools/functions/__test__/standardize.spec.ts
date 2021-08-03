export {};
describe.each([
  [1, 2],
  [2, 4],
])('double(%d)', (input, expected) => {
  it(`returns ${expected}`, () => {
    expect(input * 2).toBe(expected);
  });
});
// import { standardizeTuple } from '.';
// import { ColorElementTuple, _ColorElement } from '../types';

// export function standardize(colorElement: ColorElementTuple): [string, string];
// export function standardize(colorElement: _ColorElement): [string, string];
// export function standardize(colorElement: string | null): [string, string];
// export function standardize(
//   colorElement: string | null,
//   colorHexValue: string | null
// ): [string, string];
// export function standardize(
//   colorElement: ColorElementTuple | _ColorElement | string | null,
//   colorHexValue?: string | null
// ): [string, string] {
//   let colorElementName: string = 'VOID';
//   let colorValue: string = '';

//   if (Array.isArray(colorElement)) {
//     [colorElementName, colorValue] = standardizeTuple(colorElement);
//     return [colorElementName, colorValue];
//   }

//   if (typeof colorElement === 'object' && colorElement != null) {
//     colorElementName = colorElement.elementName || 'VOID';
//     colorValue = colorElement.colorHexValue || '';
//     return [colorElementName, colorValue];
//   }

//   if (!!colorElement === true && typeof colorElement === 'string') {
//     colorElementName = colorElement;
//     colorValue = colorHexValue || '';
//     return [colorElementName, colorValue];
//   }

//   return [colorElementName, colorValue];
// }
