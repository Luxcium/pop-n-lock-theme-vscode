import { ColorElementTuple } from '../types/ColorElementTuple';
import { colorHexMatch_ } from './colorHexMatch_temp';

export function standardizeTuple(
  colorElementTuple: ColorElementTuple
): [colorElementName: string, colorHexValue: string] {
  if (colorElementTuple.length === 2) {
    const [left, right] = colorElementTuple;
    if (typeof left === 'string' && typeof right === 'string') {
      const leftMatch = colorHexMatch_(left);
      const rightMatch = colorHexMatch_(right);
      if (!!rightMatch !== false) {
        return [left, rightMatch];
      }
      if (!!leftMatch !== false) {
        return [right, leftMatch];
      }
    }
  }
  return ['', ''];
}
