import { ColorElement } from '../ColorElement';

export async function createColorElementsList(
  someList: Promise<[string?, string?][]>
): Promise<ColorElement[]> {
  return (await someList).map(listItem => {
    const [colorName, elementName] = listItem;
    const trimedValue = elementName?.trim();
    if (trimedValue && colorName) {
      const colorElement = new ColorElement(trimedValue);
      colorElement.colorHex = colorName;
      return colorElement;
    }
    return new ColorElement('VOID');
  });
}

// create-color-element-list.ts
