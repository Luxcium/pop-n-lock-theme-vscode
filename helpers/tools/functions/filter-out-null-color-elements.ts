import { ColorElement } from '../classes';

export function filterOutNullColorElements(element: Promise<ColorElement[]>) {
  return async (includeNullElements: boolean = false) =>
    (await element).filter(item => includeNullElements || !item.isNull);
}
