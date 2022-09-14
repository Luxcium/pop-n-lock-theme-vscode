import type { ColorElementList, ColorElementSelections } from '../types';
import { getAllColorsValues } from './getAllColorsValues';
import { getNewEmptySelection, namedHex } from './more-stuff';

export function listedByColorValue(baseColorList: ColorElementList) {
  const allColors = getAllColorsValues(baseColorList);
  const obj: ColorElementSelections = getNewEmptySelection();

  const colorSetList = [...new Set(allColors)].map(color => namedHex(color));

  for (let colorName of colorSetList) {
    obj.list[colorName] = [];
  }

  for (let element of baseColorList) {
    const colorHex = element?.colorHex;
    const len = colorHex?.length;
    const colorName = namedHex((colorHex || '').substring(0, len - 2));
    if (!element.isVoid) {
      obj.list[colorName]?.push(element);
    }
  }
  return obj;
}

// buildJsonStringColorsOutput
