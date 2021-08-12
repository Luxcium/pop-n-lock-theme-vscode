import ColorElement from '../../classes/color-element';
import { NULL_COLOR } from '../../constants';

export function filterOutNullColorElements(elementList: ColorElement[]) {
  return (keepNullElements: boolean = false, keepNullColor: boolean = false) =>
    elementList.filter(
      item =>
        (keepNullElements || !item.isNull) &&
        (keepNullColor || item.colorHex !== NULL_COLOR)
    );
}

export const filterOutNulls = (elementList: ColorElement[]) =>
  filterOutNullColorElements(elementList)(false, false);

export const filterOutNullElements = (elementList: ColorElement[]) =>
  filterOutNullColorElements(elementList)(false, true);

export const filterOutNullColors = (elementList: ColorElement[]) =>
  filterOutNullColorElements(elementList)(true, false);
