import ColorElementList from '../classes/color-element-list';

export function getAllMainAttribute(colorList: ColorElementList) {
  return colorList.map(element => element.mainAttribute);
}
