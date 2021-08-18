import ColorElementList from '../classes/color-element-list';
import {
  baseColorList as baseColorList_,
  ColorElementSelections,
  getNewEmptySelection,
  namedHex,
} from './more-stuff';

/* istanbul ignore if */
if (require?.main?.filename === __filename) main();

async function main() {
  const byFirstAttribut = listedByFirstAttribut(baseColorList_);
  console.log(byFirstAttribut.setList);
  const byMainAttribute = listedByMainAttribute(baseColorList_);
  console.log(byMainAttribute.setList);
}

export function toBeNAmedSoon(baseColorList: ColorElementList) {
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

export function getAllColorsValues(colorList: ColorElementList) {
  return colorList.map(element =>
    element.colorHex.substring(0, element.colorHex.length - 2)
  );
}

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

export function getAllFirstAttributs(colorList: ColorElementList) {
  return colorList.map(element => element.firstAttribut);
}

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

export function getAllMainAttribute(colorList: ColorElementList) {
  const element_mainAttributes = colorList.map(
    element => element.mainAttribute
  );
  // console.log(element_mainAttributes);
  return element_mainAttributes;
}

// ColorElement.void.mainAttribute
