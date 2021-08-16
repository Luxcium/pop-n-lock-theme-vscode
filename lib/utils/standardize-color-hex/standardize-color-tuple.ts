import { standardizeColorHex } from '.';
import { ColorElementTuple } from '../../types/ColorElementTuple';

export function standardizeColorInTuple(colorTuple: ColorElementTuple[]) {
  const step4b = colorTuple.map(tuple => {
    const [name, color] = tuple;
    const formatedColor = standardizeColorHex(color);
    const returnValue = [name?.trim(), `${formatedColor}`?.trim()];
    return returnValue;
  });
  return step4b;
}
