import ColorElementList from '../classes/color-element-list';

export function getAllMainElement(colorList: ColorElementList) {
  return colorList.map(element => element.mainElement);
}
