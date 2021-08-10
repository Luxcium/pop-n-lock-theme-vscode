import { createFolder } from '../create-folder';

describe('createFolder', () => {
  it('should be defined', () => {
    expect(createFolder).toBeDefined();
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
// import { promises as fs } from 'fs';
// export async function createFolder(relativePath: string) {
//   (() =>
//     fs.mkdir(relativePath, { recursive: true }).then(
//       ok => console.log('Creating path:', ok),
//       err => console.error(`Error:${err}`)
//     ))();
// }
