import { colorHexRegExps } from '../../templates/reg-exp/color-hex-reg-exps';

/**
 * Match the `inputString` against hexadecimal regExps
 * [`rrgbbbaa`, `rrggbb`, `rgba`, `rgb`] return the upperCase or emptyString
 * @returns string
 */
export const colorHexMatch = (inputString: string): string =>
  _colorHexMatch(colorHexRegExps)(inputString);

function _colorHexMatch(colorHexRegExp: RegExp[]) {
  return (inputString: string): string => {
    for (const regexp of colorHexRegExp) {
      const match = inputString.match(regexp);
      if (
        match != null &&
        match.length === 1 &&
        typeof match[0] === 'string'
      ) {
        const extractedHex = match[0].toUpperCase();
        return extractedHex;
      }
    }
    return '';
  };
}
