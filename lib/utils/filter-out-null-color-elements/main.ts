import ColorElement from '../../classes/color-element';
import {
  filterOutNullColorsAsync,
  filterOutNullElementsAsync,
  filterOutNullsAsync,
} from './async';
import {
  filterOutNullColorsSync,
  filterOutNullElementsSync,
  filterOutNullsSync,
} from './sync';

export function filterOutNulls(
  elementList: ColorElement[]
): ColorElement[];
export function filterOutNulls(
  elementList: ColorElement[]
): Promise<ColorElement[]>;
export function filterOutNulls(
  elementList: ColorElement[] | Promise<ColorElement[]>
): ColorElement[] | Promise<ColorElement[]> {
  if (elementList instanceof Promise) {
    return filterOutNullsAsync(elementList);
  }
  return filterOutNullsSync(elementList);
}

export function filterOutNullElements(
  elementList: ColorElement[]
): ColorElement[];
export function filterOutNullElements(
  elementList: Promise<ColorElement[]>
): Promise<ColorElement[]>;
export function filterOutNullElements(
  elementList: ColorElement[] | Promise<ColorElement[]>
): ColorElement[] | Promise<ColorElement[]> {
  if (elementList instanceof Promise) {
    return filterOutNullElementsAsync(elementList);
  }
  return filterOutNullElementsSync(elementList);
}

export function filterOutNullColors(
  elementList: ColorElement[]
): ColorElement[];
export function filterOutNullColors(
  elementList: Promise<ColorElement[]>
): Promise<ColorElement[]>;
export function filterOutNullColors(
  elementList: ColorElement[] | Promise<ColorElement[]>
): ColorElement[] | Promise<ColorElement[]> {
  if (elementList instanceof Promise) {
    return filterOutNullColorsAsync(elementList);
  }
  return filterOutNullColorsSync(elementList);
}

/* istanbul ignore if */
if (require?.main?.filename === __filename) main();
/* istanbul ignore next */
async function main() {
  console.log(require?.main?.filename);
}
