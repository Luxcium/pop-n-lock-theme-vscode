import ColorElement from '../classes/color-element';
import ColorElementList from '../classes/color-element-list';
import { getBaseColorList } from '../imports/get-color-elements-list';
import { shortDummyList } from '../tests';

export const shortColorList = ColorElementList.of(shortDummyList()); // getBaseColorList();
export const baseColorList = getBaseColorList();
export const allBackground = baseColorList.selectByMainAttribute('Background');
// baseColorList
export function getAllColorsValues(colorList: ColorElementList) {
  return colorList.map(element =>
    element.colorHex.substring(0, element.colorHex.length - 2)
  );
}

export const color1 = baseColorList.map(element => {
  return element.attributeList;
});
export const allColorsAlpha = baseColorList.map(element => element.colorHex);

export function namedHex(hex: string) {
  return `x${hex.substring(1)}`.trim();
}
export function hashedHex(hex: string) {
  return `#${hex.substring(1)}`.trim();
}

export type ColorElementSelections = {
  list: { [selctionName: string]: ColorElement[] };
  setList: string[];
  length: number;
};

export const emptySelection: ColorElementSelections = {
  list: {},
  setList: [],
  length: 0,
};

export function getNewEmptySelection() {
  return JSON.parse(JSON.stringify(emptySelection));
}
