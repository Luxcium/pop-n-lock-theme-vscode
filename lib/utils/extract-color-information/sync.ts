import { ColorElementTuple } from '../../types/ColorElementTuple';
import { colorExtractHex } from '../extract-color-information-complex/extract-color-information';

export function extractColorInformationSync(
  colorElementTupleList: ColorElementTuple[],
  template: string | [string] | [string, string] = 'x'
): ColorElementTuple[] {
  return colorElementTupleList.map(colorElementTuple => {
    const [colorElementName, colorHexValue] = colorElementTuple;
    return [
      colorElementName,
      colorExtractHex(colorHexValue, template),
    ] as ColorElementTuple;
  });
}
