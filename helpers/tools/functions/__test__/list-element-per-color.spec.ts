import { listElementPerColor } from '../list-element-per-color';

describe('listElementPerColor', () => {
  it('should be defined', () => {
    expect(listElementPerColor).toBeDefined();
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
// import * as imp_ from '.';
// import { ColorElementTuple } from '../types';
// void imp_;
// export async function listElementPerColor(
//   colorAndElementTuple: Promise<ColorElementTuple[]>
// ): Promise<{ [key: string]: string[] }> {
//   return (await colorAndElementTuple).reduce(
//     (obj: { [key: string]: string[] }, listItem) => {
//       const [colorName, elementName] = listItem;
//       const trimedValue = elementName?.trim();
//       if (trimedValue != null) {
//         if (typeof obj[colorName] === 'undefined') {
//           const A = [];
//           A.push(trimedValue);
//           obj[colorName] = A;
//         } else if (Array.isArray(obj[colorName] && obj[colorName] != null)) {
//           obj[colorName]?.push(trimedValue);
//         }
//       }
//       return obj;
//     },
//     {}
//   );
// }
