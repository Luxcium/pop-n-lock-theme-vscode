import ColorElement from '../../classes/color-element';
import { NULL_COLOR } from '../../constants';

export function filterOutNullColorElements(elementList: ColorElement[]) {
  return (
    includeNullElements: boolean = false,
    removeNullColor: boolean = true
  ) =>
    elementList.filter(
      item =>
        (includeNullElements || !item.isNull) &&
        !(removeNullColor && item.colorHex === NULL_COLOR)
    );
}
// NULL_COLOR;

// export function filterOutNullColorElementsAsync(elementList: ColorElement[]) {
//   return async (
//     includeNullElements: boolean = false,
//     removeNullColor: boolean = true
//   ) =>
//     elementList.filter(
//       item =>
//         (includeNullElements || !item.isNull) &&
//         !(removeNullColor && item.colorHex === NULL_COLOR)
//     );
// }
// // NULL_COLOR;

// export function filterOutNullColorElementsSync(elementList: ColorElement[]) {
//   return async (
//     includeNullElements: boolean = false,
//     removeNullColor: boolean = true
//   ) =>
//     elementList.filter(
//       item =>
//         (includeNullElements || !item.isNull) &&
//         !(removeNullColor && item.colorHex === NULL_COLOR)
//     );
// }

// // NULL_COLOR;
