import type { ColorElementList, ColorElementSelections } from '../types';
import { getAllFirstAttributs } from './getAllFirstAttributs';
import { getNewEmptySelection } from './more-stuff';

export function listedByFirstAttribut(baseColorList: ColorElementList) {
  const allFirstAttributs = getAllFirstAttributs(baseColorList);
  const obj: ColorElementSelections = getNewEmptySelection();

  const firstAttributSetList = [...new Set(allFirstAttributs)];
  obj.setList = firstAttributSetList;
  obj.length = firstAttributSetList.length;
  for (let firstAttribut of firstAttributSetList) {
    obj.list[firstAttribut] = [];
  }

  for (let element of baseColorList) {
    const firstAttribut = element?.firstAttribut || '';
    if (!element.isVoid) {
      obj.list[firstAttribut]?.push(element);
    }
  }
  return obj;
}
