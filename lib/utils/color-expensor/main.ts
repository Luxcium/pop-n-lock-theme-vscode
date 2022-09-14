import { standardizeColorHex } from '../standardize-color-hex';

export function reduceHex(colorHex: string) {
  const color = standardizeColorHex(colorHex);
  if (color === '') return color;

  return;
}
