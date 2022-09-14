import { ColorElementTuple } from '../../types/ColorElementTuple';
import { templatedColorExtractHex } from '../extract-color-information-complex/extract-color-information';

export function extractColorInformationSync(
  colorElementTupleList: ColorElementTuple[],
  template: string | [string] | [string, string] = 'x'
): ColorElementTuple[] {
  return colorElementTupleList.map(colorElementTuple => {
    const [colorElementName, colorHexValue] = colorElementTuple;
    return [
      colorElementName,
      templatedColorExtractHex(colorHexValue, template),
    ];
  });
}
