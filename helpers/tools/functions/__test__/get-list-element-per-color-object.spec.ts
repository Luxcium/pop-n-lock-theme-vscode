export {};
describe.each([
  [1, 2],
  [2, 4],
])('double(%d)', (input, expected) => {
  it.skip(`returns ${expected}`, () => {
    expect(input * 2).toBe(expected);
  });
});
// import { PathLike } from 'fs';
// import {
//   extractColorInformation,
//   listElementPerColor,
//   normalizeQuotedStrings,
//   reversedSplitLines,
// } from '.';
// import { readLines } from './imports/readers';

// export async function getListElementPerColorObject(
//   pathToJsonColours: PathLike
// ) {
//   const step1 = readLines;
//   const step2 = reversedSplitLines;
//   const step3 = extractColorInformation;
//   const step4 = normalizeQuotedStrings;
//   const step5 = listElementPerColor;
//   return step5(step4(step3(step2(step1(pathToJsonColours)))));
// }
