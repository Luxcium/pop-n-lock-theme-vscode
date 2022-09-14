import ColorElementList from '../classes/color-element-list';

export function getAllColorsValues(colorList: ColorElementList) {
  return colorList.map(element =>
    element.colorHex.substring(0, element.colorHex.length - 2)
  );
}
