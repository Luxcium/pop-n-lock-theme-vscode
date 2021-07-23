import { ColorElement, ColorElementTuple } from '../ColorElement';

export async function createColorElementsList(
  thenColorElementTupleList: Promise<ColorElementTuple[]>
): Promise<ColorElement[]> {
  return (await thenColorElementTupleList).map(colorElementTuple => {
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
