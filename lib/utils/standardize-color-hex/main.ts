import { colorHexCatch } from '../color-hex-match';

export function standardizeColorHex(colorHex: string) {
  if (typeof colorHex !== 'string' || colorHex === '') {
    return '';
  }
  const color = colorHexCatch(colorHex).split('');
  if (color.length === 3) {
    return `#${color[0]}${color[0]}${color[1]}${color[1]}${color[2]}${
      color[2]
    }${'F'}${'F'}`;
  }

  if (color.length === 4) {
    return `#${color[0]}${color[0]}${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
  }

  if (color.length === 6) {
    return `#${color[0]}${color[1]}${color[2]}${color[3]}${color[4]}${
      color[5]
    }${'F'}${'F'}`;
  }
  if (color.length === 8) {
    return `#${color[0]}${color[1]}${color[2]}${color[3]}${color[4]}${color[5]}${color[6]}${color[7]}`;
  }
  return '';
}

// ^#(?:[0-9a-fA-F]{3}){1,2}$
// const colorMatch: RegExpMatchArray | null =
//   inputString.match(/[0-9a-f]{3,8}/gi);
// if (colorMatch && colorMatch.length === 1 && colorMatch[0])
