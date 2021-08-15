import { colorHexCatch } from '../color-hex-match';

export function standardizeColorHex(colorHex: string) {
  return typeof colorHex === 'string' && colorHex !== ''
    ? colorHexCatch(colorHex)
    : '';
}

// ^#(?:[0-9a-fA-F]{3}){1,2}$
// const colorMatch: RegExpMatchArray | null =
//   inputString.match(/[0-9a-f]{3,8}/gi);
// if (colorMatch && colorMatch.length === 1 && colorMatch[0])
