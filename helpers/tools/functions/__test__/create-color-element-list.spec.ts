export {};
describe.each([
  [1, 2],
  [2, 4],
])('double(%d)', (input, expected) => {
  it(`returns ${expected}`, () => {
    expect(input * 2).toBe(expected);
  });
});
// import { ColorElement } from '../classes';
// import { ColorElementTuple } from '../types';

// export async function createColorElementsList(
//   thenColorElementTupleList: Promise<ColorElementTuple[]>
// ): Promise<ColorElement[]> {
//   return (await thenColorElementTupleList).map(colorElementTuple => {
//     const [colorElementName, colorHexValue] = colorElementTuple;
//     const trimedValue = colorElementName?.trim();
//     if (trimedValue && colorHexValue) {
//       const colorElement = new ColorElement(trimedValue);
//       colorElement.colorHex = colorHexValue;
//       return colorElement;
//     }
//     return new ColorElement('VOID');
//   });
// }
