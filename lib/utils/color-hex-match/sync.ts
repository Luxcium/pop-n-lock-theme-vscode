import { colorHexCatch } from '.';

export function colorHexTemplatedSync(
  inputString: string,
  template: string | [string] | [string, string] = ['', '']
): string {
  const extractedHex = colorHexCatch(inputString);
  if (extractedHex === '' || typeof extractedHex !== 'string') {
    return '';
  }
  if (Array.isArray(template)) {
    return template.length === 1
      ? template[0] + extractedHex
      : template.length === 2
      ? template[0] + extractedHex + template[1]
      : '';
  }
  return typeof template === 'string'
    ? template + extractedHex
    : extractedHex;
}

export function colorHexTemplatedSync_(
  inputString: string,
  template: string | [string] | [string, string] = ['', '']
): string {
  if (!!inputString === false) return '';
  const colorMatch: RegExpMatchArray | null =
    inputString.match(/[0-9a-f]{3,8}/gi);
  if (colorMatch && colorMatch.length === 1 && colorMatch[0]) {
    const extractedHex = colorMatch[0].toUpperCase();
    if (Array.isArray(template)) {
      return template.length === 1
        ? template[0] + extractedHex
        : template.length === 2
        ? template[0] + extractedHex + template[1]
        : '';
    }
    return typeof template === 'string'
      ? template + extractedHex
      : extractedHex;
  }
  return '';
}
