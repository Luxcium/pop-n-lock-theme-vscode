import type { ColorElementList, ColorElementSelections } from '../types';
import { getAllMainElement } from './getAllMainElement';
import { getNewEmptySelection } from './more-stuff';

export function listedByMainElement(
  baseColorList: ColorElementList
): ColorElementSelections {
  const selections = getAllMainElement(baseColorList);
  const obj: ColorElementSelections = getNewEmptySelection();

  const selectionSetList = [...new Set(selections)];
  obj.setList = selectionSetList;
  obj.length = selectionSetList.length;
  for (let selection of selectionSetList) {
    obj.list[selection] = [];
  }

  for (let element of baseColorList) {
    const mainElement = element?.mainElement || '';
    if (!element.isVoid) {
      obj.list[mainElement]?.push(element);
    }
  }

  obj.setLengths = {};
  for (let element in obj.list) {
    obj.list[element];
    obj.setLengths[element] = obj.list[element]?.length;
  }

  return obj;
}
