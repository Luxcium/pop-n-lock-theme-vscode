import { NULL_COLOR } from '../../../../constants';
import ColorElement from '../../../classes/color-element';

export function filterOutNullColorElements(
  elementList: Promise<ColorElement[]>
) {
  return async (
    includeNullElements: boolean = false,
    removeNullColor: boolean = true
  ) =>
    (await elementList).filter(
      item =>
        (includeNullElements || !item.isNull) &&
        !(removeNullColor && item.colorHex === NULL_COLOR)
    );
}
// NULL_COLOR;
