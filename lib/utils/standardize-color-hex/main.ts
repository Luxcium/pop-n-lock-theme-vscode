import { colorHexMatch } from '../color-hex-match';

export function standardizeColorHex(colorHex: string) {
  return typeof colorHex === 'string' && colorHex !== ''
    ? colorHexMatch(colorHex)
    : '';
}
