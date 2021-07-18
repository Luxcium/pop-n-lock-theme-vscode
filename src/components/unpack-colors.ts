import { strict as assert } from 'assert';
import { getKind } from './kinds';

export function unpackColors({
  elements,
  some1,
  mainObject,
}: {
  elements: string[];
  some1: string;
  mainObject: {};
}) {
  assert(elements.length > 0);
  if (elements.length > 1) {
    const restElements = elements.slice(1);
    mainObject[elements[0]] = {
      ...mainObject[elements[0]],
      ...unpackColors({ elements: restElements, some1, mainObject: {} }),
    };
    return mainObject;
  } else {
    if (getKind(elements[0]) === 'other') {
      console.log(elements[0]);
    }
    mainObject[elements[0]] = {
      color: some1.toUpperCase(),
      kind: getKind(elements[0]),
    };
    return mainObject;
  }
}
