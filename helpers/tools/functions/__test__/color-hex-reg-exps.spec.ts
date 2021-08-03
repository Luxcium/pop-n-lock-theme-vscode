export {};
describe.each([
  [1, 2],
  [2, 4],
])('double(%d)', (input, expected) => {
  it.skip(`returns ${expected}`, () => {
    expect(input * 2).toBe(expected);
  });
});
// const rrgbbbaa = /[0-9a-f]{8}/gi;
// const rrggbb = /[0-9a-f]{6}/gi;
// const rgba = /[0-9a-f]{4}/gi;
// const rgb = /[0-9a-f]{3}/gi;
// export const colorHexRegExps = [rrgbbbaa, rrggbb, rgba, rgb];
