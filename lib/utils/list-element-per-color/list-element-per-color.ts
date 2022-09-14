import { ColorElementTuple } from '../../types/ColorElementTuple';
export function listElementPerColor(
  colorAndElementTuple: ColorElementTuple[]
): { [key: string]: string[] };
export function listElementPerColor(
  colorAndElementTuple: Promise<ColorElementTuple[]>
): Promise<{ [key: string]: string[] }>;
export function listElementPerColor(
  colorAndElementTuple: ColorElementTuple[] | Promise<ColorElementTuple[]>
): { [key: string]: string[] } | Promise<{ [key: string]: string[] }> {
  if (colorAndElementTuple instanceof Promise) {
    return listElementPerColorAsync(colorAndElementTuple);
  }
  return listElementPerColorSync(colorAndElementTuple);

  // return (await colorAndElementTuple).reduce(
  //   (obj: { [key: string]: string[] }, listItem) => {
  //     const [colorName, elementName] = listItem;
  //     const trimedValue = elementName?.trim();
  //     if (trimedValue != null) {
  //       if (typeof obj[colorName] === 'undefined') {
  //         const A = [];
  //         A.push(trimedValue);
  //         obj[colorName] = A;
  //       } else if (Array.isArray(obj[colorName] && obj[colorName] != null)) {
  //         obj[colorName]?.push(trimedValue);
  //       }
  //     }
  //     return obj;
  //   },
  //   {}
  // );
}

export async function listElementPerColorAsync(
  colorAndElementTuple: Promise<ColorElementTuple[]>
): Promise<{ [key: string]: string[] }> {
  return listElementPerColorSync(await colorAndElementTuple);
}

export function listElementPerColorSync(
  colorAndElementTuple: ColorElementTuple[]
): { [key: string]: string[] } {
  return colorAndElementTuple.reduce(
    (obj: { [key: string]: string[] }, listItem) => {
      const [colorName, elementName] = listItem;
      const trimedValue = elementName?.trim();
      if (trimedValue != null) {
        if (typeof obj[colorName] === 'undefined') {
          const A = [];
          A.push(trimedValue);
          obj[colorName] = A;
        } else if (Array.isArray(obj[colorName] && obj[colorName] != null)) {
          obj[colorName]?.push(trimedValue);
        }
      }
      return obj;
    },
    {}
  );
}
