import { colorHexMatch } from '.';

export function colorHexStandardize(colorHex: string) {
  return typeof colorHex === 'string' && colorHex !== ''
    ? colorHexMatch(colorHex)
    : '';
}
