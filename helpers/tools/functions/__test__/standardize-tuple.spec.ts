export {};
// describe('Name of the group', () => {
//   it('should be defined', () => {
//     expect(colorHexRegExps).toBeDefined();
//   });
// });
describe.each([
  [1, 2],
  [2, 4],
])('double(%d)', (input, expected) => {
  it.skip(`returns ${expected}`, () => {
    expect(input * 2).toBe(expected);
  });
});

// function eachList() {
//   return [
//     [
//       ['widget.shadow', '#001111FF'],
//       ['widget.shadow', '#001111FF'],
//     ],
//     [
//       ['editorGroupHeader.border', '#001133FF'],
//       ['editorGroupHeader.border', '#001133FF'],
//     ],
//     [
//       ['editorGroupHeader.noTabsBackground', '#1C1C2EFF'],
//       ['editorGroupHeader.noTabsBackground', '#1C1C2EFF'],
//     ],
//     [
//       ['editorGroupHeader.tabsBackground', '#1C1C2EFF'],
//       ['editorGroupHeader.tabsBackground', '#1C1C2EFF'],
//     ],
//     [
//       ['editorGroupHeader.tabsBorder', '#1D2545FF'],
//       ['editorGroupHeader.tabsBorder', '#1D2545FF'],
//     ],
//     [
//       ['button.secondaryBackground', '#00FF0022'],
//       ['button.secondaryBackground', '#00FF0022'],
//     ],
//     [
//       ['button.secondaryHoverBackground', '#00FF0022'],
//       ['button.secondaryHoverBackground', '#00FF0022'],
//     ],
//     [
//       ['button.hoverBackground', '#3399CCCC'],
//       ['button.hoverBackground', '#3399CCCC'],
//     ],
//     [
//       ['button.background', '#771166CC'],
//       ['button.background', '#771166CC'],
//     ],
//     [
//       ['button.border', '#FF00FF22'],
//       ['button.border', '#FF00FF22'],
//     ],
//     [
//       ['charts.blue', '#00FF0022'],
//       ['charts.blue', '#00FF0022'],
//     ],
//     [
//       ['charts.green', '#00FF0022'],
//       ['charts.green', '#00FF0022'],
//     ],
//     [
//       ['charts.lines', '#00FF0022'],
//       ['charts.lines', '#00FF0022'],
//     ],
//     [
//       ['charts.orange', '#00FF0022'],
//       ['charts.orange', '#00FF0022'],
//     ],
//     [
//       ['charts.purple', '#00FF0022'],
//       ['charts.purple', '#00FF0022'],
//     ],
//     [
//       ['charts.red', '#00FF0022'],
//       ['charts.red', '#00FF0022'],
//     ],
//     [
//       ['charts.yellow', '#00FF0022'],
//       ['charts.yellow', '#00FF0022'],
//     ],
//     [
//       ['editor.linkedEditingBackground', '#00FF0022'],
//       ['editor.linkedEditingBackground', '#00FF0022'],
//     ],
//     [
//       ['editor.lineHighlightBackground', '#1155EE22'],
//       ['editor.lineHighlightBackground', '#1155EE22'],
//     ],
//     [
//       ['editor.foldBackground', '#1155EE22'],
//       ['editor.foldBackground', '#1155EE22'],
//     ],
//     [
//       ['editor.background', '#20213BFF'],
//       ['editor.background', '#20213BFF'],
//     ],
//     [
//       ['editor.findRangeHighlightBackground', '#22335555'],
//       ['editor.findRangeHighlightBackground', '#22335555'],
//     ],
//   ];
// }

// describe.each(eachList())('expexcts', (input, expected) => {
//   it(`returns ${expected}`, () => {
//     expect(standardizeTuple(input)).toStrictEqual(expected);
//   });
// });
/*

    "widget.shadow": "#001111FF",
    "editorGroupHeader.border": "#001133FF",
    "editorGroupHeader.noTabsBackground": "#1C1C2EFF",
    "editorGroupHeader.tabsBackground": "#1C1C2EFF",
    "editorGroupHeader.tabsBorder": "#1D2545FF",
    "button.secondaryBackground": "#00FF0022",
    "button.secondaryHoverBackground": "#00FF0022",
    "button.hoverBackground": "#3399CCCC",
    "button.background": "#771166CC",
    "button.border": "#FF00FF22",
    "charts.blue": "#00FF0022",
    "charts.green": "#00FF0022",
    "charts.lines": "#00FF0022",
    "charts.orange": "#00FF0022",
    "charts.purple": "#00FF0022",
    "charts.red": "#00FF0022",
    "charts.yellow": "#00FF0022",
    "editor.linkedEditingBackground": "#00FF0022",
    "editor.lineHighlightBackground": "#1155EE22",
    "editor.foldBackground": "#1155EE22",
    "editor.background": "#20213BFF",
    "editor.findRangeHighlightBackground": "#22335555",
    "editor.focusedStackFrameHighlightBackground": "#22335555",
    "editor.rangeHighlightBackground": "#22335555",
    "editor.stackFrameHighlightBackground": "#22335555",
    "editor.snippetTabstopHighlightBackground": "#22335577",
    "editor.snippetFinalTabstopHighlightBackground": "#22335599",
    "editor.snippetFinalTabstopHighlightBorder": "#223355AA",
*/
// import { colorHexMatch_ } from '.';
// import { ColorElementTuple } from '../types';

// export function standardizeTuple(
//   colorElementTuple: ColorElementTuple
// ): [colorElementName: string, colorHexValue: string] {
//   if (colorElementTuple.length === 2) {
//     const [left, right] = colorElementTuple;
//     if (typeof left === 'string' && typeof right === 'string') {
//       const leftMatch = colorHexMatch_(left);
//       const rightMatch = colorHexMatch_(right);
//       if (!!rightMatch !== false) {
//         return [left, rightMatch];
//       }
//       if (!!leftMatch !== false) {
//         return [right, leftMatch];
//       }
//     }
//   }
//   return ['', ''];
// }
