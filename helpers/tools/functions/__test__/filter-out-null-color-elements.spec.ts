import { filterOutNullColorElements } from '../filter-out-null-color-elements';

describe('filterOutNullColorElements', () => {
  it('should be defined', () => {
    expect(filterOutNullColorElements).toBeDefined();
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
// // import { ColorElement } from '../classes';

// export function filterOutNullColorElements(element: Promise<ColorElement[]>) {
//   return async (includeNullElements: boolean = false) =>
//     (await element).filter(item => includeNullElements || !item.isNull);
// }
