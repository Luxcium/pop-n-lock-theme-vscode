import { ColorElement } from '../ColorElement';

export async function listElementPerColor(
  someList: Promise<[string?, string?][]>
): Promise<(string | ColorElement)[]> {
  return (await someList).map(listItem => {
    const [colorName, elementName] = listItem;
    const trimedValue = elementName?.trim();
    if (trimedValue != null) {
      return (new ColorElement(elementName).colorHex = colorName);
    }
    return new ColorElement('VOID');
  });
}

// : Promise<{ [key: string]: string[] }>
