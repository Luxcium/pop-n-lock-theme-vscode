import * as imp_ from '.';
import { ColorElementTuple } from '../types';
void imp_;
export async function listElementPerColor(
  colorAndElementTuple: Promise<ColorElementTuple[]>
): Promise<{ [key: string]: string[] }> {
  return (await colorAndElementTuple).reduce(
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
