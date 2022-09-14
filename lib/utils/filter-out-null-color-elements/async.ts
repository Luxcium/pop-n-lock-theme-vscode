import { filterOutNullColorElements } from '.';
import ColorElement from '../../classes/color-element';

export const filterOutNullsAsync = async (
  elementList: Promise<ColorElement[]>
) => filterOutNullColorElements(await elementList)(false, false);

export const filterOutNullElementsAsync = async (
  elementList: Promise<ColorElement[]>
) => filterOutNullColorElements(await elementList)(false, true);

export const filterOutNullColorsAsync = async (
  elementList: Promise<ColorElement[]>
) => filterOutNullColorElements(await elementList)(true, false);
