export {};
describe.each([
  [1, 2],
  [2, 4],
])('double(%d)', (input, expected) => {
  it(`returns ${expected}`, () => {
    expect(input * 2).toBe(expected);
  });
});
// import { colorHexRegExps } from '.';

// export function colorHexMatch_(inputString: string): string {
//   for (const regexp of colorHexRegExps) {
//     const match = inputString.match(regexp);
//     if (match !== null && match?.length === 1 && match[0]) {
//       const extractedHex = match[0].toUpperCase();
//       return extractedHex;
//     }
//   }
//   return '';
// }
