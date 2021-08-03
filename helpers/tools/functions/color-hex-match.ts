import { colorHexRegExps } from './color-hex-reg-exps';

function _colorHexMatch(colorHexRegExp: RegExp[]) {
  return (inputString: string): string => {
    for (const regexp of colorHexRegExp) {
      const match = inputString.match(regexp);
      if (match !== null && match?.length === 1 && match[0]) {
        const extractedHex = match[0].toUpperCase();
        return extractedHex;
      }
    }
    return '';
  };
}

export const colorHexMatch = (inputString: string): string =>
  _colorHexMatch(colorHexRegExps)(inputString);
