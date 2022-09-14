import ColorElement from '../../classes/color-element';
import { ColorElementTuple } from '../../types/ColorElementTuple';

export function createColorElementsList(
  thenColorElementTupleList: ColorElementTuple[]
): ColorElement[] {
  return thenColorElementTupleList.map(colorElementTuple => {
    const [colorElementName, colorHexValue] = colorElementTuple;

    if (colorElementName) {
      const colorElement = new ColorElement(colorElementName).setColorHex(
        colorHexValue
      );
      return colorElement;
    }
    return new ColorElement('VOID');
  });
}
