import {
  colorHexRegExps,
  colorHexRexp,
} from '../../templates/reg-exp/color-hex-reg-exps';

/**
 * Match the `inputString` against hexadecimal regExps
 * [`rrgbbbaa`, `rrggbb`, `rgba`, `rgb`] return the upperCase or emptyString
 * @returns string
 */
export const colorHexCatch = (inputString: string): string =>
  _colorHexMatch(colorHexRegExps)(inputString);

export const colorHexMatch = (inputString: string): string =>
  _colorHexMatch([colorHexRexp])(inputString);

const regexp_ =
  /^(?:[0-9a-fA-F]{3}){1,2}$|^(?:[0-9a-fA-F]{3,4}){1,2}$/;

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
    void colorHexRegExp;
    return '';
  };
}

export function __colorHexMatch(colorHexRegExp: RegExp[]) {
  return (inputString: string): string => {
    // for (const regexp of colorHexRegExp) {
    const match = inputString.match(regexp_);
    if (
      match != null &&
      match.length === 1 &&
      typeof match[0] === 'string'
    ) {
      const extractedHex = match[0].toUpperCase();
      return extractedHex;
    }
    // }
    void colorHexRegExp;
    return '';
  };
}

/* istanbul ignore if */
if (require?.main?.filename === __filename) main();
/* istanbul ignore next */
async function main() {
  // console.log(__filename, require?.main?.filename);
  const matcher = _colorHexMatch([
    // /^#?(?:[0-9a-fA-F]{3}){1,2}$|^#?(?:[0-9a-fA-F]{4}){1,2}$/, //
    ...colorHexRegExps,
  ]);

  console.log('1:', matcher('#F'));
  console.log('2:', matcher('#FF'));
  console.log('3:', matcher('#FFF'));
  console.log('4:', matcher('#FFFF'));
  console.log('5:', matcher('#FFFFF'));
  console.log('6:', matcher('#FFFFFF'));
  console.log('7:', matcher('#FFBFFFF'));
  console.log('8:', matcher('#FFFFFFFF'));
  console.log('8:', matcher('FFFFFFFF'));
  console.log('8:', matcher('xFFFFFFFF'));
  console.log('9:', matcher('#FFFFFFFFF'));
}
