import { splitLines } from '../utils/split-lines';

describe('splitLines', () => {
  it('should be defined', () => {
    expect(splitLines).toBeDefined();
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
// const empltyLines = /^\s*[{}[\]]$|^\s*$/;
// export async function splitLines(
//   lines: Promise<string[]>
// ): Promise<[string, string][]> {
//   return (await lines)
//     .filter(line => line)
//     .filter(line => !empltyLines.test(line))
//     .map(line => {
//       return line.split(':') as [string, string];
//     })
//     .filter(tuple => (tuple[0] ?? '').trim())
//     .filter(tuple => (tuple[1] ?? '').trim());
// }

// export async function reverseItems<T1, T2>(
//   tuples: Promise<[T1, T2][]>
// ): Promise<[T2, T1][]> {
//   return (await tuples).map(tuple => tuple.reverse() as [T2, T1]);
// }

// export const reversedSplitLines = async (lines: Promise<string[]>) =>
//   reverseItems(splitLines(lines));
