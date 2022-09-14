import { strict as assert } from 'assert';
import { getColorKind } from './colors-kinds';

export function unpackColors({
  elements,
  firstColorObject,
  mainObject,
}: {
  elements: string[];
  firstColorObject: string;
  mainObject: { [key: string]: any };
}) {
  assert(elements.length > 0 && elements[0] != null);
  if (elements.length > 1) {
    const restElements = elements.slice(1);
    mainObject[elements[0]] = {
      ...mainObject[elements[0]],
      ...unpackColors({
        elements: restElements,
        firstColorObject,
        mainObject: {},
      }),
    };
    return mainObject;
  } else {
    if (getColorKind(elements[0]) === 'other') {
      console.log(elements[0]);
    }
    mainObject[elements[0]] = {
      color: firstColorObject.toUpperCase(),
      kind: getColorKind(elements[0]),
    };
    return mainObject;
  }
}
