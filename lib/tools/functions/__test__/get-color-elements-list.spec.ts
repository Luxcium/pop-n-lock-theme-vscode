import { getColorElementsList } from '../imports/get-color-elements-list/get-color-elements-list';

describe('getColorElementsList', () => {
  it('should be defined', () => {
    expect(getColorElementsList).toBeDefined();
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
// import type { PathLike } from 'fs';
// import { createColorElementsList } from './create-color-element-list.spec';
// import { extractColorInformation } from './extract-color-information.spec';
// import { filterOutNullColorElements } from './filter-out-null-color-elements.spec';
// import { readLines } from './imports/readers';
// import { normalizeQuotedStrings } from './normalize-strings.spec';
// import { splitLines } from './split-lines.spec';

// export async function getColorElementsList(
//   pathToJsonColours: PathLike,
//   includeNullElements: boolean = false,
//   template: string | [string] | [string, string] = '#'
// ) {
//   const step1 = readLines;
//   const step2 = splitLines;
//   const step3 = extractColorInformation;
//   const step4 = normalizeQuotedStrings;
//   const step5 = createColorElementsList;
//   const step6 = filterOutNullColorElements;
//   return step6(step5(step4(step3(step2(step1(pathToJsonColours)), template))))(
//     includeNullElements
//   );
// }
