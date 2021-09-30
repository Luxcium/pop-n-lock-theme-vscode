import type { ColorElementList, ColorElementSelections } from '../types';
import { getAllMainAttribute } from './getAllMainAttribute';
import { getNewEmptySelection } from './more-stuff';

export function listedByMainAttribute(baseColorList: ColorElementList) {
  const selections = getAllMainAttribute(baseColorList);
  const obj: ColorElementSelections = getNewEmptySelection();

  const selectionSetList = [...new Set(selections)];
  obj.setList = selectionSetList;
  obj.length = selectionSetList.length;
  for (let selection of selectionSetList) {
    obj.list[selection] = [];
  }

  for (let element of baseColorList) {
    const mainAttribute = element?.mainAttribute || '';
    if (!element.isVoid) {
      obj.list[mainAttribute]?.push(element);
    }
  }
  return obj;
}
