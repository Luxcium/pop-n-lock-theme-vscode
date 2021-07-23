import { ColorElement } from '../ColorElement';

export function filterOutNullColorElements(element: Promise<ColorElement[]>) {
  return async (includeNullElements: boolean = false) =>
    (await element).filter(item => includeNullElements || !item.isNull);
}
