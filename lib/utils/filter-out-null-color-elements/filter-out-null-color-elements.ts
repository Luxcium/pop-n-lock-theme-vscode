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
