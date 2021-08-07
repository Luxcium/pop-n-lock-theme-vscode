import ColorElement from '../../../classes/color-element';

export function filterOutNullColorElements(
  elementList: Promise<ColorElement[]>
) {
  return async (includeNullElements: boolean = false) =>
    (await elementList).filter(item => includeNullElements || !item.isNull);
}
