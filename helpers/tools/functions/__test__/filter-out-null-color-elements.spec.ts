export {};
describe.each([
  [1, 2],
  [2, 4],
])('double(%d)', (input, expected) => {
  it.skip(`returns ${expected}`, () => {
    expect(input * 2).toBe(expected);
  });
});
// import { ColorElement } from '../classes';

// export function filterOutNullColorElements(element: Promise<ColorElement[]>) {
//   return async (includeNullElements: boolean = false) =>
//     (await element).filter(item => includeNullElements || !item.isNull);
// }
