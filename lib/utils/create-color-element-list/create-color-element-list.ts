import ColorElement from '../../classes/color-element';
import { ColorElementTuple } from '../../types/ColorElementTuple';

export function createColorElementsList(
  thenColorElementTupleList: ColorElementTuple[]
): ColorElement[] {
  return thenColorElementTupleList.map(colorElementTuple => {
    const [colorElementName, colorHexValue] = colorElementTuple;
    const trimedValue = colorElementName?.trim();
    if (trimedValue && colorHexValue) {
      const colorElement = new ColorElement(trimedValue);
      colorElement.colorHex = colorHexValue;
      return colorElement;
    }
    return new ColorElement('VOID');
  });
}
