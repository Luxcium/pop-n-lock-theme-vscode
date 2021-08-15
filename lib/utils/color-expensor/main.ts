import { standardizeColorHex } from '../color-hex-match';

export function reduceHex(colorHex: string) {
  const color = standardizeColorHex(colorHex);
  if (color === '') return color;

  return;
}
