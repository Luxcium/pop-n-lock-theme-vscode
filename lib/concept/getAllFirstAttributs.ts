import ColorElementList from '../classes/color-element-list';

export function getAllFirstAttributs(colorList: ColorElementList) {
  return colorList.map(element => element.firstAttribut);
}
