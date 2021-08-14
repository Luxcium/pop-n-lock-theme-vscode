import { filterOutNullColorElements } from '.';
import ColorElement from '../../classes/color-element';

export const filterOutNullsSync = (
  elementList: ColorElement[]
) => filterOutNullColorElements(elementList)(false, false);

export const filterOutNullElementsSync = (
  elementList: ColorElement[]
) => filterOutNullColorElements(elementList)(false, true);

export const filterOutNullColorsSync = (
  elementList: ColorElement[]
) => filterOutNullColorElements(elementList)(true, false);
