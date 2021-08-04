import { ColorElementTuple } from '../types/ColorElementTuple';

void function standardizeTuple(
  colorElementTuple: ColorElementTuple
): [colorElementName: string, colorHexValue: string] {
  if (colorElementTuple.length === 2) {
    const [left, right] = colorElementTuple;
    if (typeof left === 'string' && typeof right === 'string') {
      // const leftMatch = chromaHex(left);
      // const rightMatch = chromaHex(right);
      // if (!!leftMatch === false) {
      // return [right, leftMatch || left];
      // }
      // if (!!rightMatch === false) {
      // return [left, rightMatch || right];
      // }
    }
    return [left, right];
  }
  return ['', ''];
};

function MAIN() {
  // console.log(new ColorElement(''));
}
if (require?.main?.filename === __filename) MAIN();
